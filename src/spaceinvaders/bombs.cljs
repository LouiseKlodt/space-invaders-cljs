(ns spaceinvaders.bombs
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [frame-rate wt yt ht wm max-missiles wb max-bombs vu colors size-ufo size-ufo2]]
            [spaceinvaders.helpers :refer [collision? add-new?]]))

(defn bomb-img []
  (q/push-style)
  (q/no-stroke)
  (q/rect 0.4 0.0 0.2 0.1)
  (q/rect 0.2 0.1 0.6 0.1)
  (q/rect 0.1 0.2 0.8 0.2)
  (q/rect 0.0 0.4 1.0 0.2)
  (q/rect 0.05 0.6 0.90 0.2)
  (q/rect 0.15 0.8 0.7 0.1)
  (q/rect 0.3 0.9 0.4 0.1)
  (q/rect 0.4 0.95 0.2 0.1)
  (q/pop-style))

(defn draw-bombs! [bombs]
  (q/push-style)
  (q/no-stroke)
  (apply q/fill (:light-gray colors))
  (let [w (* 0.3 size-ufo)]
    (doseq [[x y] bombs]
      ((qt/at x y (qt/in w w bomb-img)))))
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
