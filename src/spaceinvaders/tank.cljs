(ns spaceinvaders.tank
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [clojure.string :as str]
            [clojure.set :as set]))

; canvas
(def world-height 500)
(def world-width 500)
(def margin 24)
(def offset 4)

; tank
(def wt 42)
(def wt2 (/ wt 2))
(def ht (* 0.4 wt))
(def yt (- world-height ht margin offset))


(def colors {:light-gray [190, 184, 175]})

(defn create-tank []
  {:x (/ world-width 2)
   :dir 0
   :speed 8.0})

(defn move-tank [{:keys [x dir speed] :as tank}]
  "Moves tank, reversing direction if not on screen."
  (let [nxt-x (+ x (* dir speed))
        ouside-canvas? (fn [] (or (> nxt-x (- world-width wt)) (neg? nxt-x)))
        nxt-dir (if (ouside-canvas?) (* -1 dir) dir)]
    (assoc tank :x (+ (* nxt-dir speed) x) :dir nxt-dir)))

(defn tank-img []
  (q/rect 0.475 0.0 0.05 0.2)
  (q/rect 0.4 0.15 0.2 0.2)
  (q/rect 0.1 0.35 0.8 0.2)
  (q/rect 0.0 0.5 1 0.5))

; Tank -> Image
(defn draw-tank! [tank]
  (q/push-style)
  (q/no-stroke)
  (q/fill 255)
  (apply q/fill (:light-gray colors))
  ((qt/at (:x tank) yt (qt/in wt ht tank-img)))
  (q/pop-style))
