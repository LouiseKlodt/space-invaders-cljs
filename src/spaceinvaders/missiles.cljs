(ns spaceinvaders.missiles
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [wt wm max-missiles vu colors]]))

(defn missile-img []
  (q/quad 0.5 0.2 1 1 0.5 0.7 0 1))

(defn draw-missiles! [missiles shoot]
  (q/push-style)
  (apply q/fill (:light-gray colors))
  (doseq [[x y] missiles]
    ; (.play shoot)
    ((qt/at (- (+ x (/ wt 2)) (/ wm 2)) y (qt/in wm wm missile-img))))
  (q/pop-style))

(defn munition-img [n-missiles]
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

(defn update-missiles [missiles]
  (let [dy (* -2 vu)]
    (into #{} (map (fn [[x y]] [x (+ dy y)]) missiles))))

(defn detect-explosions [ufos missiles]
  "Returns list of [ufo missile] pairs which collided."
   (vec (for [ufo ufos
              missile missiles :when (helpers/collision? ufo missile size-ufo size-ufo wm wm)]
          [ufo missile])))
