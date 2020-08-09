(ns spaceinvaders.ufos
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [world-width frame-rate colors vu wm size-ufo max-ufos]]
            [spaceinvaders.helpers :refer [collision? add-new?]]
            [clojure.string :as str]
            [clojure.set :as set]))

(defn rand-n [a b]
  (+ a (rand (- b a))))

(defn rand-x [x]
  (if (qt/n-ticks? 3)
    (let [delta (* 0.1 size-ufo)]
      (int (rand-n (- x delta) (+ x delta))))
    x))

(defn ufo-img [color]
  (fn []
    (apply q/fill color)
    (q/arc 0.5 0.2 0.6 0.4 q/PI q/TWO-PI :pie)
    (q/ellipse 0.5 0.25 1 0.2)))

(defn draw-ufos! [ufos size color]
  (q/push-style)
  (q/stroke-weight 1)
  (apply q/fill color)
  (doseq [[xu yu] ufos]
    ((qt/at xu yu (qt/in size size (ufo-img color)))))
  (q/pop-style))

(defn flash-ufo! [x y counter bang size]
  (if (and bang (zero? counter)) (.play bang))
  (q/push-style)
  (let [blink-time 4
        cs [:yellow-rose :electric-red :aqua :rose-garnet]
        phase (mod (quot counter blink-time) (count cs))
        next-color (colors (cs phase))]
    ((qt/at x y (qt/in size size (ufo-img next-color)))))
  (q/pop-style))

(defn descend-ufo! [x y counter size]
  (let [dy (mod counter 30)]
    (flash-ufo! x (+ y dy) counter nil size)))

(defn draw-explosion! [{:keys [x y counter] :as hit} bang size]
  (.log js/console (pr-str hit))
  (cond
    (<= 0 counter 30) (flash-ufo! x y counter bang size)
    (<= 21 counter 60) (descend-ufo! x y counter size)))

(defn detect-explosions [ufos missiles]
  "Returns list of [ufo missile] pairs which collided."
   (vec (for [ufo ufos
              missile missiles :when (collision? ufo missile size-ufo size-ufo wm wm)]
          [ufo missile])))

(defn create-ufo [y0 margin]
  (let [x (int (rand-n margin (- world-width margin)))]
    [x y0]))

(defn update-ufos [ufos y0 margin]
  (let [freq 1
        new-ufos (if (add-new? ufos max-ufos freq)
                   (conj ufos (create-ufo y0 margin))
                   ufos)]
    (into #{} (map (fn [[x y]] [(rand-x x) (+ y vu)]) new-ufos))))
