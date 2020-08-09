(ns spaceinvaders.tank
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [wt ht yt colors world-height world-width margin offset]]
            [clojure.string :as str]
            [clojure.set :as set]))

(defn create-tank []
  {:x (/ world-width 2)
   :dir 0
   :speed 8.0})

(defn move-tank [{:keys [x dir speed] :as tank}]
  "Moves tank, reverses direction if outside screen."
  (let [nxt-x (+ x (* dir speed))
        ouside-canvas? (fn [] (or (> nxt-x (- world-width wt)) (neg? nxt-x)))
        nxt-dir (if (ouside-canvas?) (* -1 dir) dir)]
    (assoc tank :x (+ (* nxt-dir speed) x) :dir nxt-dir)))

(defn tank-img []
  (q/rect 0.475 0.0 0.05 0.2)
  (q/rect 0.4 0.15 0.2 0.2)
  (q/rect 0.1 0.35 0.8 0.2)
  (q/rect 0.0 0.5 1 0.5))

(defn draw-tank! [tank]
  (q/push-style)
  (q/no-stroke)
  (q/fill 255)
  (apply q/fill (:light-gray colors))
  ((qt/at (:x tank) yt (qt/in wt ht tank-img)))
  (q/pop-style))

(defn speed-up [speed]
  (min 16.0 (+ speed 1)))

(defn speed-down [speed]
  (max 0.0 (- speed 1)))
