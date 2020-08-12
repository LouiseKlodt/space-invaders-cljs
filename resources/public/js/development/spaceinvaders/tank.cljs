(ns spaceinvaders.tank
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [wt ht yt colors world-height world-width hbar-menu margin offset]]
            [spaceinvaders.helpers :refer [collision?]]
            [clojure.string :as str]
            [clojure.set :as set]))

(defn create-tank []
  {:x (/ world-width 2)
   :dir 0
   :speed 8.0})

(defn speed-up [speed]
  (min 16.0 (+ speed 1)))

(defn speed-down [speed]
  (max 0.0 (- speed 1)))

(defn move-tank [{:keys [x dir speed] :as tank}]
  "Moves tank, reverses direction if outside screen."
  (let [nxt-x (+ x (* dir speed))
        ouside-canvas? (fn [] (or (> nxt-x (- world-width wt)) (neg? nxt-x)))
        nxt-dir (if (ouside-canvas?) (* -1 dir) dir)]
    (assoc tank :x (+ (* nxt-dir speed) x) :dir nxt-dir)))

(defn tank-img [color]
  (fn []
    (apply q/fill color)
    (q/rect 0.475 0.0 0.05 0.2)
    (q/rect 0.4 0.15 0.2 0.2)
    (q/rect 0.1 0.35 0.8 0.2)
    (q/rect 0.0 0.5 1 0.5)))

(defn draw-tank! [tank]
  (q/push-style)
  (q/no-stroke)
  (q/fill 255)
  ((qt/at (:x tank) yt (qt/in wt ht (tank-img (:light-gray colors)))))
  (q/pop-style))

(defn draw-tank-menu! [n-lifes]
  (let [y-items (+ hbar-menu 22)]
    (q/fill 255)
    (q/no-stroke)
    (q/text (str n-lifes) margin y-items)
    (apply q/fill (:light-gray colors))
    (doseq [i (range n-lifes)]
      (let [w 30 gap 10 x0 (* 2 margin) y0 (- y-items (/ w 2))]
        ((qt/at (+ x0 (* i (+ w gap))) y0 (qt/in w (/ w 2) tank-img)))))))

(defn tank-collisions [items w-item h-item {xt :x}]
  "Returns list of items which hit the tank"
   (into #{} (filter #(collision? [xt yt] % wt ht w-item h-item) items)))

(defn draw-explosion! [{:keys [x y counter] :as hit} tank hiss]
  (q/push-style)
  (if (zero? counter) (.play hiss))
  (let [flash (mod (quot (q/frame-count) 5) 2)
        tank-color (nth [:light-gray :red] flash)]
    ((qt/at (:x tank) yt (qt/in wt ht (tank-img (colors tank-color))))))

  (q/pop-style))
