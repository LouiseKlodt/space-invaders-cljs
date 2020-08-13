(ns spaceinvaders.globals)

; world
(def world-height 520)
(def world-width 780)
(def margin 24)
(def offset 4)
(def frame-rate 30)
(def hbar-menu (- world-height margin offset))
(def max-score 100)

; tank
(def wt 42)
(def ht (* 0.4 wt))
(def yt (- world-height ht margin offset offset))

; missiles
(def wm (* 0.4 wt))
(def max-missiles 7)

; UFOs
(def vu 3)
(def size-ufo 42)
(def size-ufo2 (/ size-ufo 2))
(def max-ufos 7) ; max # of ufos allowed on screen at once


; bombs
(def wb (* 0.2 size-ufo))
(def max-bombs 1)

(def colors {:guppie-green [0, 231, 24];[0, 204, 50]
             :red [203, 2, 3];[195, 0, 0]
             :blue [26, 129, 236]
             :light-gray [233, 233, 233];[190, 184, 175]
             :yellow-rose [254, 240, 1]
             :electric-red [240, 5, 5]
             :rose-garnet [151, 2, 70]
             :aqua [143, 255, 252] ;143, 255, 252
             :dark-blue [0, 23, 45]
             :black [0 0 0]
             :pink [255, 93, 184]})
