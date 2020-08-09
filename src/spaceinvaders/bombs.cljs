(ns spaceinvaders.bombs
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [frame-rate wt yt ht wm max-missiles wb max-bombs vu colors size-ufo size-ufo2]]
            [spaceinvaders.helpers :refer [collision? add-new?]]))

(defn draw-bombs! [bombs]
  (q/push-style)
  (apply q/fill (:light-gray colors))
  (let [w (* 0.24 size-ufo)]
    (doseq [[x y] bombs]
      (q/ellipse x y w w)))
  (q/pop-style))

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

(defn exploded [bombs {xt :x}]
  "Returns list of bombs which hit the tank"
  (into #{} (filter #(collision? [xt yt] % wt ht wb wb) bombs)))
