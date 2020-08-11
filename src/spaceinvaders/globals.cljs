(ns spaceinvaders.globals)

; world
(def world-height 520)
(def world-width 780)
(def margin 24)
(def offset 4)
(def frame-rate 30)
(def hbar-menu (- world-height margin offset))

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

(def colors {:green [79, 175, 68]
             :guppie-green [0, 204, 50]
             :red [195, 0, 0]
             :orange [255, 149, 38]
             :light-yellow [253, 253, 151]
             :blue [26, 129, 236]
             :light-blue [196, 232, 246]
             :gray [104, 104, 104]
             :light-gray [190, 184, 175] ; [255, 255, 226]
             :yellow-rose [254, 240, 1]
             :electric-red [240, 5, 5]
             :dogwood-rose [215, 25, 111]
             :rose-garnet [151, 2, 70]
             :kiwi [132, 231, 86]
             :aqua [1, 255, 255]
             :dark-blue [0, 23, 45]
             :rich-black [0, 11, 24]})
