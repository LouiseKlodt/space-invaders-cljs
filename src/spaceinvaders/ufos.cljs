(ns spaceinvaders.ufos
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [clojure.string :as str]
            [clojure.set :as set]))

(def blink-colors {:yellow-rose [254, 240, 1]
                   :electric-red [240, 5, 5]
                   :rose-garnet [151, 2, 70]
                   :aqua [1, 255, 255]})

(def size-ufo 42)

; Number, Number -> Number
(defn rand-n [a b]
  "Returns a random number between [a, b["
  (+ a (rand (- b a))))

; Number, Number -> Number
(defn rand-x [x]
  "Returns random number within [x-delta x+delta] every 3rd frame, else x"
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
        colors [:yellow-rose :electric-red :aqua :rose-garnet]
        phase (mod (quot counter blink-time) (count colors))
        next-color (blink-colors (colors phase))]
    ((qt/at x y (qt/in size size (ufo-img next-color)))))
  (q/pop-style))

(defn descend-ufo! [x y counter size]
  (let [dy (mod counter 30)]
    (flash-ufo! x (+ y dy) counter nil size)))

; Hit -> Image
(defn draw-explosion! [{:keys [x y counter] :as hit} bang size]
  (cond
    (<= 0 counter 30) (flash-ufo! x y counter bang size)
    (<= 21 counter 60) (descend-ufo! x y counter size)))


; ; canvas
; (def world-height 500)
(def world-width 500)
; (def margin 24)
; (def offset 4)
;
; ; ufos
(def vu 3)
;(def size-ufo 42)
; (def size-ufo2 (/ size-ufo 2))
(def max-ufos 7) ; max # of ufos allowed at once per frame
;
(def frame-rate 30)

(defn create-ufo [y0 margin]
  (let [x (int (rand-n margin (- world-width margin)))]
    [x y0]))

; Set, Num, Num -> Bool
(defn add-new? [s limit freq]
  "Returns true if a new item should be added to set s,
   given a limit and frequency at which it should be added. "
  (and
    (<= (count s) limit)
    (qt/n-ticks? (* freq frame-rate))))

; Ufos -> Ufos
(defn update-ufos [ufos y0 margin]
  "Possibly adds a new ufo to ufos, every freq seconds, and moves each ufo
   by random x, and y down by vu."
  (let [freq 1
        new-ufos (if (add-new? ufos max-ufos freq)
                   (conj ufos (create-ufo y0 margin))
                   ufos)]
    (into #{} (map (fn [[x y]] [(rand-x x) (+ y vu)]) new-ufos))))
