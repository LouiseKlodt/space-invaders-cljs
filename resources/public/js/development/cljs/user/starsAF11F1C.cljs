(in-ns 'spaceinvaders.core)

; Louise Klodt, July 2020

; Number  -> [[x y size]]
(defn rand-stars [n]
  "Returns a vector of n stars [x y size] that fit on the canvas."
  (vec (repeatedly n
        #(vector (rand-n 0 world-width) (rand-n 0 world-height) (+ 1.0 (rand 3.0))))))
