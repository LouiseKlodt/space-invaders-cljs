(ns spaceinvaders.helpers
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [hbar-menu margin frame-rate world-width world-height colors]]
            [spaceinvaders.tank :refer [tank-img]]))

(defn collision? [[xa ya] [xb yb] wa ha wb hb]
  "Is b colliding with a?"
    (and (<= (- xb wa) xa (+ xb wb))
         (<= (- yb ha) ya (+ yb hb))))

; Set, Num, Num -> Bool
(defn add-new? [s limit freq]
  "Should a new item be added to s? "
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
  ; (q/push-matrix)
  ; (let [flash (mod (quot (q/frame-count) 10) 2)
  ;       bg-color (nth [:dark-blue :red] flash)]
  ;   (q/fill (bg-color colors)))
  ; (q/rect-mode :center)
  (q/fill 0)

  (q/rect 0 0 1 1)
  (q/stroke 255)
  (q/fill 255)
  (q/text-size 0.20)

  (q/text "GAME OVER" 0.1 0.2)
  (q/text-size 0.12)
  (q/fill 255)
  (q/stroke 255)
  (q/text "Press any key \nto play again" 0.2 0.6)
  (q/pop-style))
  ;(q/pop-matrix))

(defn draw-game-over! []
  (q/push-style)
  (let [cx (* 0.5 world-width)
        cy (* 0.2 world-width)
        w (* 0.6 world-width)
        h (* 0.4 world-height)]
    ((qt/at cx cy (qt/in w h game-over-img)))
    (q/no-fill)
    (q/stroke-weight 4)
    (apply q/stroke (:guppie-green colors))
    (q/rect cx cy w h))
  (q/pop-style))

(defn draw-hbar! []
  (q/push-style)
  (apply q/stroke (:guppie-green colors))
  (q/stroke-weight 2)
  (q/line 0.0 hbar-menu world-width hbar-menu)
  (q/pop-style))
