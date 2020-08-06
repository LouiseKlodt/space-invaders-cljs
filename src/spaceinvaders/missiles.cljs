(ns spaceinvaders.missiles
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]))

; missiles
(def wt 42)
(def wm (* 0.4 wt))
(def max-missiles 5)
; ufos
(def vu 3)

(def colors {:orange [255, 149, 38] :rose-garnet [151, 2, 70] :light-gray [255, 255, 226]})

(defn draw-missiles! [missiles shoot]
  (q/push-style)
  (apply q/fill (:light-gray colors))
  (let [missile-img #(q/quad 0.5 0.2 1 1 0.5 0.7 0 1)]
    (doseq [[x y] missiles]
      ; (.play shoot)
      ((qt/at (- (+ x (/ wt 2)) (/ wm 2)) y (qt/in wm wm missile-img)))))
  (q/pop-style))

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
          (apply q/fill (:light-gray colors)))
        (q/ellipse (+ (/ w 2) (* n (+ w spacing))) 0 w w)))
    (q/pop-style)))

; Missiles -> Missiles
(defn update-missiles [missiles]
  "Moves each missile up by dy."
  (let [dy (* -2 vu)]
    (into #{} (map (fn [[x y]] [x (+ dy y)]) missiles))))
