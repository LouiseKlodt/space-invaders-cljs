(ns spaceinvaders.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [clojure.string :as str]
            [clojure.set :as set]))

; By Louise Klodt, July 2020

;; TODO
; add sound
; speed up tank on double press -> within time interval
; ability to gain a life e.g 100 pts -> 1 life
; draw bombs
; animate when the tank gets hit / life lost
; move menu to the bottom

;; ----------------------------------------------------------------------------
;; constants

; canvas
(def world-height 500)
(def world-width 500)

; ufos
(def vu 3)
(def size-ufo 40)
(def size-ufo2 (/ size-ufo 2))
(def max-ufos 7) ; max # of ufos allowed at once per frame

; tank
(def wt 40)
(def wt2 (/ wt 2))
(def ht (* 0.4 wt))
(def yt (- world-height ht))

; missiles
(def wm (* 0.4 wt))
(def max-missiles 5)

; bombs
(def wb (* 0.2 size-ufo))
(def max-bombs 1)

(def top-margin 24)

(def frame-rate 30)

(def colors {:green [79, 175, 68]
             :guppie-green [0, 204, 50]
             :red [195, 0, 0]
             :orange [255, 149, 38]
             :light-yellow [253, 253, 151] ;[255, 253, 203]
             :blue [26, 129, 236]
             :light-blue [196, 232, 246]
             :gray [103, 103, 102]
             :yellow-rose [254, 240, 1]
             :electric-red [240, 5, 5]
             :dogwood-rose [215, 25, 111]
             :rose-garnet [151, 2, 70]
             :kiwi [132, 231, 86]
             :aqua [1, 255, 255]
             :dark-blue [0, 23, 45]
             :rich-black [0, 11, 24]})

;; ----------------------------------------------------------------------------
;; helper functions

; Number, Number -> Number
(defn rand-n [a b]
  "Returns a random number between [a, b["
  (+ a (rand (- b a))))

; Number, Number -> Number
(defn rand-x [x]
  "Returns random number within [x-delta x+delta] every 3rd frame, else x"
  (if (qt/n-ticks? 3)
    (let [delta (* 0.1 size-ufo)]
      (int (rand-n (- x delta) (+ x delta))))
    x))

; Number  -> [[x y size]]
(defn rand-stars [n]
  "Returns a vector of n stars [x y size] that fit on the canvas."
  (vec (repeatedly n
        #(vector (rand-n 0 world-width) (rand-n 0 world-height) (+ 1.0 (rand 3.0))))))

;; ---------------------------------------------------------------------------
;; draw helper functions

(defn draw-missiles! [missiles]
  (q/push-style)
  (apply q/fill (:orange colors))
  (let [missile-img #(q/quad 0.5 0.2 1 1 0.5 0.7 0 1)]
    (doseq [[x y] missiles]
      ((qt/at x y (qt/in wm wm missile-img)))))
  (q/pop-style))

(defn draw-bombs! [missiles]
  (q/push-style)
  (apply q/fill (:red colors))
  (let [w (* 0.24 size-ufo)]
    (doseq [[x y] missiles]
      (q/ellipse x y w w)))
  (q/pop-style))

(defn alien-img []
  (q/push-style)
  (apply q/fill (:red colors))
  (q/no-stroke)
  (q/rect 0.4 0 0.2 0.1)
  (q/rect 0.3 0.1 0.4 0.1)
  (q/rect 0.2 0.2 0.6 0.1)
  (q/rect 0 0.3 1 0.2)
  (q/rect 0.3 0.5 0.1 0.1)
  (q/rect 0.6 0.5 0.1 0.1)
  (q/rect 0.2 0.6 0.1 0.1)
  (q/rect 0.7 0.6 0.1 0.1)
  (q/rect 0.3 0.7 0.1 0.1)
  (q/rect 0.6 0.7 0.1 0.1)
  (q/fill 255)
  (q/rect 0.3 0.3 0.1 0.1)
  (q/rect 0.6 0.3 0.1 0.1)
  (q/pop-style))

(defn xdraw-bombs! [bombs]
  (q/push-style)
  (apply q/fill (:red colors))
  (let [w (* 0.8 size-ufo)]
    (doseq [[x y] bombs]
      ((qt/at x y (qt/in w w alien-img)))))
  (q/pop-style))

; Number -> fn
(defn munition-img [n-missiles]
  "Draw number of missiles available vs maximum allowed."
  (fn []
    (q/push-style)
    (q/stroke 120) ; grey
    (let [spacing 0.04
          w (/ (- 1 (* spacing (dec max-missiles))) max-missiles)]
      (doseq [n (range max-missiles)]
        (if (< n n-missiles)
          (q/no-fill)
          (apply q/fill (:orange colors)))
        (q/ellipse (+ (/ w 2) (* n (+ w spacing))) 0 w w)))
    (q/pop-style)))

; Number -> Image
(defn draw-munitions! [n-missiles]
  "Draws a munitions status bar in the top right corner, indicating available tank missiles."
  (let [w (* 12 max-missiles)
        x0 (- world-width (* 1.1 w))]
    ((qt/at x0 top-margin (qt/in w w (munition-img n-missiles))))))

; Keyword -> Image
(defn ufo-img [color]
  (fn []
    (apply q/fill (color colors))
    (q/arc 0.5 0.2 0.6 0.4 q/PI q/TWO-PI :pie)
    (q/ellipse 0.5 0.25 1 0.2)))

; [Ufo] -> Image
(defn draw-ufos! [ufos]
  (q/push-style)
  (apply q/fill (:green colors))
  (q/stroke-weight 1)
  (doseq [[xu yu] ufos]
    ((qt/at xu yu (qt/in size-ufo size-ufo (ufo-img :green)))))
  (q/pop-style))

; Tank -> Image
(defn draw-tank! [tank]
  (q/push-style)
  (apply q/fill (:blue colors))
  (q/rect (:x tank) yt wt ht)
  (q/pop-style))

(defn draw-menu! [score lifes]
  (q/push-style)
  (q/fill 255)
  (let [lifes-y (* 2 top-margin)]
    (q/text (str "score: " score) top-margin top-margin)
    (q/text (str "lifes: " lifes) top-margin lifes-y))
  (q/pop-style))

; Number -> Image
(defn draw-score! [score]
  (q/push-style)
  (q/fill 255)
  (let [txt-pos top-margin]
    (q/text (str "score: " score) txt-pos txt-pos))
  (q/pop-style))

(defn flash-ufo! [x y counter]
  (q/push-style)
  (let [blink-time 4
        colors [:yellow-rose :electric-red :aqua :rose-garnet]
        phase (mod (quot counter blink-time) (count colors))
        next-color (colors phase)]
    ((qt/at x y (qt/in size-ufo size-ufo (ufo-img next-color)))))
  (q/pop-style))

(defn descend-ufo! [x y counter]
  (let [dy (mod counter 30)]
    (flash-ufo! x (+ y dy) counter)))

; Hit -> Image
(defn draw-explosion! [{:keys [x y counter] :as hit}]
  (cond
    (<= 0 counter 30) (flash-ufo! x y counter)
    (<= 21 counter 60) (descend-ufo! x y counter)))

; [[x y size]] -> Image
(defn draw-stars! [stars]
;  (.log js/console (pr-str stars))
  (q/push-style)
  (q/fill 255)
  (doseq [[x y s] stars]
    (q/ellipse x y s s))
  (q/pop-style))

(defn game-over-img []
  (q/push-style)
  ; (let [flash (mod (quot (q/frame-count) 10) 2)
  ;       bg-color (nth [:dark-blue :red] flash)]
  ;   (q/fill (bg-color colors)))
  (q/fill (:dark-blue colors))
  (apply q/stroke (:guppie-green colors))
  ; (q/stroke-weight 0.008)
  (q/rect 0 0 1 1)
  (q/stroke 255)
  (q/fill 255)
  (q/text-size 0.2)
  (q/text "GAME OVER" 0.16 0.3)
  (q/text-size 0.08)
  (q/fill 255)
  (q/stroke 255)
  (q/text "Press q to exit" 0.25 0.625)
  (q/text "Press any key to play again" 0.08 0.5)
  (q/pop-style))

(defn draw-game-over! []
  ((qt/at (* 0.25 world-width) (* 0.25 world-height)
     (qt/in (* 0.5 world-width) (* 0.375 world-height) game-over-img))))

;; ---------------------------------------------------------------------------
;; update-state helper functions

; Set ->  Set
(defn escaped [s]
  "Returns any items from set s that have left the scene."
  (into #{} (filter (fn [[_ y]] (or (> y world-height) (neg? y))) s)))

; Missiles -> Missiles
(defn update-missiles [missiles]
  "Moves each missile up by dy."
  (let [dy (* -2 vu)]
    (into #{} (map (fn [[x y]] [x (+ dy y)]) missiles))))

; Set, Num, Num -> Bool
(defn add-new? [s limit freq]
  "Returns true if a new item should be added to set s,
   given a limit and frequency at which it should be added. "
  (and
    (<= (count s) limit)
    (qt/n-ticks? (* freq frame-rate))))

(defn collision? [[xa ya] [xb yb] wa ha wb hb]
  "Returns true if b is colliding with a."
    (and (<= (- xb wa) xa (+ xb wb))
         (<= (- yb ha) ya (+ yb hb))))

; #{Ufo}, #{Missile} -> [[Ufo, Missile]]
(defn detect-explosions [ufos missiles]
  "Returns list of [ufo missile] pairs which collided."
   (vec (for [ufo ufos
              missile missiles :when (collision? ufo missile size-ufo size-ufo wm wm)]
          [ufo missile])))

; Bombs, Tank -> Bombs
(defn exploded [bombs {xt :x}]
  "Returns list of bombs which hit the tank"
  (into #{} (filter #(collision? [xt yt] % wt ht wb wb) bombs)))

; Ufos -> Bomb
(defn new-bomb [ufos]
  (let [[x y] (rand-nth (vec ufos))]
    [(+ size-ufo2 x) (+ size-ufo2 y)]))

; Bombs, Ufos -> Bombs
(defn update-bombs [bombs ufos]
  "Possibly adds new bomb to bombs, and moves each bomb down by dy."
  (let [freq 1
        new-bombs (if (and (seq ufos) (add-new? bombs max-bombs freq))
                    (conj bombs (new-bomb ufos))
                    bombs)
        dy (* 3 vu)]
    (into #{} (map (fn [[x y]] [x (+ dy y)]) new-bombs))))

; #{Hit} -> #{Hit}
(defn update-hits [hits new-hits]
  "Removes any hits that have finished animating; incrememts counter of remaining hits.
   Then merges new hits into updated hits."
  (let [end-counter 90 ; 3 seconds
        remaining (remove (fn [hit] (>= (:counter hit) end-counter)) hits)
        updated-hits (into #{} (map (fn [hit] (update hit :counter inc)) remaining))]
    (into updated-hits new-hits)))

; Tank -> Tank
(defn move-tank [{:keys [x dir speed] :as tank}]
  "Moves tank, reversing direction if not on screen."
  (let [nxt-x (+ x (* dir speed))
        ouside-canvas? (fn [] (or (> nxt-x (- world-width wt)) (neg? nxt-x)))
        nxt-dir (if (ouside-canvas?) (* -1 dir) dir)]
    (assoc tank :x (+ (* nxt-dir speed) x) :dir nxt-dir)))

(defn move-stars [stars]
  (for [[x y size] stars]
    [x (mod (+ 0.8 y) world-height) size]))

(defn create-ufo []
  (let [margin (/ world-width 25)
        x (int (rand-n margin (- world-width margin)))
        y size-ufo2]
    [x y]))

; Ufos -> Ufos
(defn update-ufos [ufos]
  "Possibly adds a new ufo to ufos, every freq seconds, and moves each ufo
   by random x, and y down by vu."
  (let [freq 1
        new-ufos (if (add-new? ufos max-ufos freq)
                   (conj ufos (create-ufo))
                   ufos)]
    (into #{} (map (fn [[x y]] [(rand-x x) (+ y vu)]) new-ufos))))

(defn create-tank []
  {:x (/ world-width 2)
   :dir 0
   :speed 8.0})

(defn init-state! []
  {:score 0
   :lifes 3
   :game-state :playing
   :state-counter 0
   :tank (create-tank)
   :missiles #{}
   :hits #{}
   :bombs #{}
   :ufos #{}
   :stars (rand-stars 120)})

;; ----------------------------------------------------------------------------
;; main program

(defn setup []
  (q/frame-rate frame-rate)
  (apply q/background (:dark-blue colors))
  (q/text-font "VT323-Regular")
  (q/text-size 20)
  (init-state!))

; State -> State
(defn update-state [{:keys [score tank missiles bombs ufos hits stars lifes game-state state-counter]
                     :as state}]
  (let [bg-state (update state :stars move-stars)]
    (cond
      (and (= :playing game-state) (zero? lifes)) (assoc bg-state :game-state :game-over :state-counter 0)
      (= :game-over game-state) (if (< state-counter 90)
                                  (update bg-state :state-counter inc)
                                  (assoc bg-state :game-state :ready))
      (= :ready game-state) bg-state
      :else (let [explosions (detect-explosions ufos missiles)
                  ufos-exploded (into #{} (map first explosions))
                  ufos-escaped (escaped ufos)
                  ufos-remaining (set/difference ufos ufos-exploded ufos-escaped)
                  ufos-next (update-ufos ufos-remaining)
                  hits-new (into #{} (map (fn [[x y]] {:x x :y y :counter 0}) ufos-exploded))
                  hits-next (update-hits hits hits-new)
                  missiles-exploded (into #{} (map second explosions))
                  missiles-remaining (set/difference missiles missiles-exploded (escaped missiles))
                  missiles-next (update-missiles missiles-remaining)
                  bombs-exploded (exploded bombs tank)
                  bombs-remaining (set/difference bombs bombs-exploded (escaped bombs))
                  bombs-next (update-bombs bombs-remaining ufos-remaining)
                  score-next (+ score (count ufos-exploded) (- (count ufos-escaped)))
                  lifes-next (- lifes (count bombs-exploded))]
              (-> bg-state
                (update :tank move-tank)
                (assoc :missiles missiles-next)
                (assoc :bombs bombs-next)
                (assoc :ufos ufos-next)
                (assoc :hits hits-next)
                (assoc :score score-next)
                (assoc :lifes lifes-next))))))

(defn speed-up [speed]
  (min 16.0 (+ speed 1)))

(defn speed-down [speed]
  (max 0.0 (- speed 1)))

(defn key-handler [{:keys [tank missiles game-state] :as state} {key :key key-code :key-code}]
 (.log js/console (pr-str key-code))
 (cond
   (= :game-over game-state) state
   (= :ready game-state) (cond
                           (= :q key) (q/exit)
                           (q/key-pressed?) (init-state!)
                           :else state)
    :else (let [left 37 right 39 up 38 down 40]
            (cond
             (= right key-code) (assoc-in state [:tank :dir] 1)
             (= left key-code) (assoc-in state [:tank :dir] -1)
             (= up key-code) (update-in state [:tank :speed] speed-up)
             (= down key-code) (update-in state [:tank :speed] speed-down)
             (= :space key) (if (< (count missiles) max-missiles)
                              (update state :missiles conj [(:x tank) (- world-height wt2)])
                              state)
             :else state))))

(defn draw-state [{:keys [score tank missiles bombs ufos hits stars lifes game-state]
                   :as state}]
    (apply q/background (:dark-blue colors))
  ;  ((qt/at 100 80 (qt/in 40 40 alien-img)))
    (draw-stars! stars)
    (draw-missiles! missiles)
    (draw-bombs! bombs)
    (draw-munitions! (count missiles))
    (draw-menu! score lifes)
    (draw-ufos! ufos)
    (draw-tank! tank)
    (doseq [hit hits]
      (draw-explosion! hit))
    (if (or (= :game-over game-state) (= :ready game-state))
      (draw-game-over!)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch spaceinvaders
    :host "spaceinvaders"
    :size [world-width world-height]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    :key-pressed key-handler
    :features [:keep-on-top]
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
