(ns spaceinvaders.explosions
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [frame-rate wt wm max-missiles vu colors size-ufo size-ufo2]]))

(def max-bombs 1)
(def wb (* 0.2 size-ufo))


; explosions
(defn collision? [[xa ya] [xb yb] wa ha wb hb]
  "Returns true if b is colliding with a."
    (and (<= (- xb wa) xa (+ xb wb))
         (<= (- yb ha) ya (+ yb hb))))

(defn detect-explosions [ufos missiles]
  "Returns list of [ufo missile] pairs which collided."
   (vec (for [ufo ufos
              missile missiles :when (collision? ufo missile size-ufo size-ufo wm wm)]
          [ufo missile])))

(defn exploded [bombs {xt :x}]
  "Returns list of bombs which hit the tank"
  (into #{} (filter #(collision? [xt yt] % wt ht wb wb) bombs)))

; missiles
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

; bombs
(defn draw-bombs! [bombs]
  (q/push-style)
  (apply q/fill (:light-gray colors))
  (let [w (* 0.24 size-ufo)]
    (doseq [[x y] bombs]
      (q/ellipse x y w w)))
  (q/pop-style))

; Set, Num, Num -> Bool
(defn add-new? [s limit freq]
  "Returns true if a new item should be added to set s,
   given a limit and frequency at which it should be added. "
  (and
    (<= (count s) limit)
    (qt/n-ticks? (* freq frame-rate))))

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
