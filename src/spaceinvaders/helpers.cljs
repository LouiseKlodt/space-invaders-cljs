(ns spaceinvaders.helpers
  (:require [quil.core :as q :include-macros true]
            [quiltools.core :as qt]
            [spaceinvaders.globals :refer [frame-rate world-height]]))

(defn collision? [[xa ya] [xb yb] wa ha wb hb]
  "Returns true if b is colliding with a."
    (and (<= (- xb wa) xa (+ xb wb))
         (<= (- yb ha) ya (+ yb hb))))

; Set, Num, Num -> Bool
(defn add-new? [s limit freq]
  "Returns true if a new item should be added to set s,
   given a limit and frequency at which it should be added. "
  (and
    (<= (count s) limit)
    (qt/n-ticks? (* freq frame-rate))))

(defn escaped [s]
  "Returns any items from set s that have left the scene."
  (into #{} (filter (fn [[_ y]] (or (> y world-height) (neg? y))) s)))
