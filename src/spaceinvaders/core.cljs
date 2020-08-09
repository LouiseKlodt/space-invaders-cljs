(ns spaceinvaders.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [clojure.string :as str]
            [clojure.set :as set]
            [cljsjs.howler]
            [spaceinvaders.globals :refer [wt ht yt wm max-missiles vu size-ufo size-ufo2 colors world-height world-width margin offset frame-rate]]
            [spaceinvaders.stars :as stars]
            [spaceinvaders.ufos :as ufos]
            [spaceinvaders.tank :as tank]
            [spaceinvaders.missiles :as missiles]
            [spaceinvaders.bombs :as bombs]
            [spaceinvaders.helpers :as helpers]))

; ; bombs
; (def wb (* 0.2 size-ufo))
; (def max-bombs 1)

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

;; ---------------------------------------------------------------------------
;; draw helper functions

; (defn draw-bombs! [bombs]
;   (q/push-style)
;   (apply q/fill (:light-gray colors))
;   (let [w (* 0.24 size-ufo)]
;     (doseq [[x y] bombs]
;       (q/ellipse x y w w)))
;   (q/pop-style))

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

(defn draw-score! [score]
  (q/push-style)
  (q/fill 255)
  (q/text (str "SCORE <" score ">") margin margin)
  (q/pop-style))

(defn game-over-img []
  (q/push-style)
  ; (let [flash (mod (quot (q/frame-count) 10) 2)
  ;       bg-color (nth [:dark-blue :red] flash)]
  ;   (q/fill (bg-color colors)))
  (q/fill 0)
  (q/rect 0 0 1 1)
  (q/stroke 255)
  (q/fill 255)
  (q/text-size 0.24)
  (q/text "GAME OVER" 0.08 0.4)
  (q/text-size 0.12)
  (q/fill 255)
  (q/stroke 255)
  (q/text "Press any key \nto play again" 0.2 0.6)
  (q/pop-style))

(defn draw-game-over! []
  (let [p0 (* 0.1 world-width) w (* 0.8 world-width) h (* 0.4 world-height)]
    ((qt/at p0 p0
       (qt/in w h game-over-img))
     (q/push-style)
     (q/no-fill)
     (q/stroke-weight 6)
     (apply q/stroke (:guppie-green colors))
     (q/rect p0 p0 w h)
     (q/pop-style))))

;; update-state helper functions

; Set ->  Set
; (defn escaped [s]
;   "Returns any items from set s that have left the scene."
;   (into #{} (filter (fn [[_ y]] (or (> y world-height) (neg? y))) s)))
;
; ; Set, Num, Num -> Bool
; (defn add-new? [s limit freq]
;   "Returns true if a new item should be added to set s,
;    given a limit and frequency at which it should be added. "
;   (and
;     (<= (count s) limit)
;     (qt/n-ticks? (* freq frame-rate))))

; (defn collision? [[xa ya] [xb yb] wa ha wb hb]
;   "Returns true if b is colliding with a."
;     (and (<= (- xb wa) xa (+ xb wb))
;          (<= (- yb ha) ya (+ yb hb))))

; ; #{Ufo}, #{Missile} -> [[Ufo, Missile]]
; (defn detect-explosions [ufos missiles]
;   "Returns list of [ufo missile] pairs which collided."
;    (vec (for [ufo ufos
;               missile missiles :when (collision? ufo missile size-ufo size-ufo wm wm)]
;           [ufo missile])))

; Bombs, Tank -> Bombs
; (defn exploded [bombs {xt :x}]
;   "Returns list of bombs which hit the tank"
;   (into #{} (filter #(collision? [xt yt] % wt ht wb wb) bombs)))

; ; Ufos -> Bomb
; (defn new-bomb [ufos]
;   (let [[x y] (rand-nth (vec ufos))]
;     [(+ size-ufo2 x) (+ size-ufo2 y)]))

; ; Bombs, Ufos -> Bombs
; (defn update-bombs [bombs ufos]
;   "Possibly adds new bomb to bombs, and moves each bomb down by dy."
;   (let [freq 1
;         new-bombs (if (and (seq ufos) (add-new? bombs max-bombs freq))
;                     (conj bombs (new-bomb ufos))
;                     bombs)
;         dy (* 3 vu)]
;     (into #{} (map (fn [[x y]] [x (+ dy y)]) new-bombs))))

; #{Hit} -> #{Hit}
(defn update-hits [hits new-hits]
  "Removes any hits that have finished animating; incrememts counter of remaining hits.
   Then merges new hits into updated hits."
  (let [end-counter 90 ; 3 seconds
        remaining (remove (fn [hit] (>= (:counter hit) end-counter)) hits)
        updated-hits (into #{} (map (fn [hit] (update hit :counter inc)) remaining))]
    (into updated-hits new-hits)))

(defn init-state! []
  {:score 0
   :lifes 3
   :game-state :playing
   :state-counter 0
   :tank (tank/create-tank)
   :missiles #{}
   :hits #{}
   :bombs #{}
   :ufos #{}
   :stars (stars/rand-stars 120 world-width world-height)
   :mute false})

;; ----------------------------------------------------------------------------
;; main program

(defn setup []
  (q/frame-rate frame-rate)
  (apply q/background (:dark-blue colors))
  (q/text-font "VT323-Regular")
  (q/text-size 24)
  (init-state!))

; State -> State
(defn update-state [{:keys [score tank missiles bombs ufos hits stars lifes game-state state-counter]
                     :as state}]
  (let [bg-state (update state :stars stars/move-stars world-height)]
    (cond
      (and (= :playing game-state) (zero? lifes)) (assoc bg-state :game-state :game-over :state-counter 0)
      (= :game-over game-state) (if (< state-counter 90)
                                  (update bg-state :state-counter inc)
                                  (assoc bg-state :game-state :ready))
      (= :ready game-state) bg-state
      :else (let [explosions (ufos/detect-explosions ufos missiles)
                  _ (if (not (empty? explosions)) (.log js/console "explosions: " + explosions))
                  ufos-exploded (into #{} (map first explosions))
                  ufos-escaped (helpers/escaped ufos)
                  ufos-remaining (set/difference ufos ufos-exploded ufos-escaped)
                  ufos-next (ufos/update-ufos ufos-remaining size-ufo2 margin)
                  hits-new (into #{} (map (fn [[x y]] {:x x :y y :counter 0}) ufos-exploded))
                  hits-next (update-hits hits hits-new)
                  missiles-exploded (into #{} (map second explosions))
                  missiles-remaining (set/difference missiles missiles-exploded (helpers/escaped missiles))
                  missiles-next (missiles/update-missiles missiles-remaining)
                  bombs-exploded (bombs/exploded bombs tank)
                  bombs-remaining (set/difference bombs bombs-exploded (helpers/escaped bombs))
                  bombs-next (bombs/update-bombs bombs-remaining ufos-remaining)
                  score-next (+ score (count ufos-exploded) (- (count ufos-escaped)))
                  lifes-next (- lifes (count bombs-exploded))]
              (-> bg-state
                (update :tank tank/move-tank)
                (assoc :missiles missiles-next)
                (assoc :bombs bombs-next)
                (assoc :ufos ufos-next)
                (assoc :hits hits-next)
                (assoc :score score-next)
                (assoc :lifes lifes-next))))))



(defn key-handler [{:keys [tank missiles game-state music bang shoot] :as state} {key :key key-code :key-code}]
 (cond
   (= :game-over game-state) state
   (= :ready game-state) (cond
                           (= :q key) (q/exit)
                           (= :s key) (update state :mute not)
                           (q/key-pressed?) (init-state!)
                           :else state)
    :else (let [left 37 right 39 up 38 down 40]
            (cond
              (= :s key) (-> state
                             (update :mute not)
                             (assoc :music (if music music (js/bgsound)))
                             (assoc :bang (if bang bang (js/bangsound)))
                             (assoc :shoot (if shoot shoot (js/shootsound))))
              (= right key-code) (assoc-in state [:tank :dir] 1)
              (= left key-code) (assoc-in state [:tank :dir] -1)
              (= up key-code) (update-in state [:tank :speed] tank/speed-up)
              (= down key-code) (update-in state [:tank :speed] tank/speed-down)
              (= :space key) (if (< (count missiles) max-missiles)
                               (update state :missiles conj [(:x tank) yt])
                               state)
              :else state))))


(defn draw-info-panel! [lifes n-missiles]
  (q/push-style)
  (apply q/stroke (:guppie-green colors))
  (q/stroke-weight 2)
  (let [y-line (- world-height margin)
        y-items (+ y-line (* 0.8 margin))]
    (q/line 0.0 y-line world-width y-line)
    (q/fill 255)
    (q/no-stroke)
    (q/text (str lifes) margin y-items)
    (apply q/fill (:light-gray colors))
    (doseq [i (range lifes)]
      (let [w 30 gap 10 x0 40 y0 480]
        ((qt/at (+ x0 (* i (+ w gap))) y0 (qt/in w (/ w 2) tank/tank-img)))))
    (q/pop-style))
  (let [w (* 12 max-missiles)
        x0 (- world-width (* 1.1 w))]
    ((qt/at x0 (- world-height 12) (qt/in w w (missiles/munition-img n-missiles))))))

(defn draw-state [{:keys [score tank missiles bombs ufos hits stars lifes game-state mute music bang shoot]
                   :as state}]
  (if (not (empty? hits)) (.log js/console hits) )
  (if mute
    (if (and music (.playing music))
      (.pause music)
      (if (and music (not (.playing music)))
        (.play music))))
  (apply q/background (:dark-blue colors))
  (stars/draw-stars! stars)
  (missiles/draw-missiles! missiles shoot)
  (bombs/draw-bombs! bombs)
  (draw-score! score)
  (ufos/draw-ufos! ufos size-ufo (:guppie-green colors))
  (tank/draw-tank! tank)
  (draw-info-panel! lifes (count missiles))
  (doseq [hit hits]
    (ufos/draw-explosion! hit bang size-ufo))

  (if (or (= :game-over game-state) (= :ready game-state))
    (draw-game-over!)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch spaceinvaders
    :host "spaceinvaders"
    :size [world-width world-height]
    :setup setup
    :update update-state
    :key-pressed key-handler
    :draw draw-state
    :features [:keep-on-top]
    :middleware [m/fun-mode]))

; TODO
; ability to gain a life e.g 100 pts -> 1 life
; animate when the tank gets hit / life lost
