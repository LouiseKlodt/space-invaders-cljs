(ns spaceinvaders.helpers
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [margin frame-rate world-width world-height colors max-missiles]]
            [spaceinvaders.missiles :refer [munition-img]]
            [spaceinvaders.tank :refer [tank-img]]))

(defn collision? [[xa ya] [xb yb] wa ha wb hb]
  "Returns true if b is colliding with a."
    (and (<= (- xb wa) xa (+ xb wb))
         (<= (- yb ha) ya (+ yb hb))))

; Set, Num, Num -> Bool
(defn add-new? [s limit freq]
  "Returns true if a new item should be added to set s,
   given a limit and frequency at which it should be added. "
  (and
    (<= (count s) limit)
    (qt/n-ticks? (* freq frame-rate))))

(defn escaped [s]
  "Returns any items from set s that have left the scene."
  (into #{} (filter (fn [[_ y]] (or (> y world-height) (neg? y))) s)))

; draw helpers
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
        ((qt/at (+ x0 (* i (+ w gap))) y0 (qt/in w (/ w 2) tank-img)))))
    (q/pop-style))
  (let [w (* 12 max-missiles)
        x0 (- world-width (* 1.1 w))]
    ((qt/at x0 (- world-height 12) (qt/in w w (munition-img n-missiles))))))
