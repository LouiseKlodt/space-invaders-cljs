(ns spaceinvaders.missiles
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]))

; missiles
(def wt 42)
(def wm (* 0.4 wt))
(def max-missiles 5)


(def colors {:orange [255, 149, 38]})

(defn draw-missiles! [missiles]
  (q/push-style)
  (apply q/fill (:orange colors))
  (let [missile-img #(q/quad 0.5 0.2 1 1 0.5 0.7 0 1)]
    (doseq [[x y] missiles]
      ((qt/at (- (+ x (/ wt 2)) (/ wm 2)) y (qt/in wm wm missile-img)))))
  (q/pop-style))
