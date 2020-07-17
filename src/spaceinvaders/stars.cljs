(ns spaceinvaders.stars
  (:require [quil.core :as q :include-macros true]))

(defn rand-n [a b]
  "Returns a random number between [a, b["
  (+ a (rand (- b a))))

(defn rand-stars [n w h]
  "Returns n stars [x y size] with x within [0, w] and y within [0, h]."
  (vec (repeatedly n
        #(vector (rand-n 0 w) (rand-n 0 h) (+ 1.0 (rand 3.0))))))

(defn draw-stars! [stars]
  (q/push-style)
  (q/fill 255)
  (doseq [[x y s] stars]
    (q/ellipse x y s s))
  (q/pop-style))

(defn move-stars [stars h]
  (for [[x y size] stars]
    [x (mod (+ 0.8 y) h) size]))
