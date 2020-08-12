(ns spaceinvaders.missiles
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [world-width offset margin hbar-menu wt wm max-missiles vu size-ufo colors]]
            [spaceinvaders.helpers :refer [collision?]]))

(defn missile-img []
  (q/quad 0.5 0.2 1 1 0.5 0.7 0 1))

(defn missiles-menu [n-missiles]
  (fn []
    (q/push-style)
    (q/stroke 120) ; gray
    (let [spacing 0.04
          w (/ (- 1 (* spacing (dec max-missiles))) max-missiles)]
      (doseq [n (range max-missiles)]
        (if (< n n-missiles)
          (q/no-fill)
          (apply q/fill (:light-gray colors)))
        ((qt/at (+ (/ w 2) (* n (+ w spacing))) 0 (qt/in w w missile-img)))))
    (q/pop-style)))

(defn draw-missiles! [missiles shoot]
  (q/push-style)
  (apply q/fill (:light-gray colors))
  (doseq [[x y] missiles]
    ((qt/at (- (+ x (/ wt 2)) (/ wm 2)) y (qt/in wm wm missile-img))))
  (q/pop-style))

(defn draw-missiles-menu! [n-missiles]
  (q/push-style)
  (q/no-stroke)
  (let [w (* 16 max-missiles)
        x0 (- world-width w margin)
        y0 (+ hbar-menu offset offset)]
    ((qt/at x0 y0 (qt/in w w (missiles-menu n-missiles)))))
  (q/pop-style))

(defn update-missiles [missiles]
  (let [dy (* -2 vu)]
    (into #{} (map (fn [[x y]] [x (+ dy y)]) missiles))))

(defn detect-explosions [ufos missiles]
  "Returns list of [ufo missile] pairs which collided."
   (vec (for [ufo ufos
              missile missiles :when (collision? ufo missile size-ufo size-ufo wm wm)]
          [ufo missile])))
