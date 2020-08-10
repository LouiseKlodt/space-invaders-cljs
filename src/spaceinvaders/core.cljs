(ns spaceinvaders.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [clojure.string :as str]
            [clojure.set :as set]
            [cljsjs.howler]
            [spaceinvaders.globals :refer [wt ht yt wm max-missiles vu size-ufo
                                           size-ufo2 colors world-height world-width margin offset frame-rate]]
            [spaceinvaders.stars :as stars]
            [spaceinvaders.ufos :as ufos]
            [spaceinvaders.tank :as tank]
            [spaceinvaders.missiles :as missiles]
            [spaceinvaders.bombs :as bombs]
            [spaceinvaders.helpers :as helpers]))

(defn init-state! []
  {:score 0
   :lifes 3
   :game-state :playing
   :state-counter 0
   :tank (tank/create-tank)
   :missiles #{}
   :hits #{}
   :bombs #{}
   :ufos #{}
   :stars (stars/rand-stars 120 world-width world-height)
   :mute false})

; main program

(defn setup []
  (q/frame-rate frame-rate)
  (apply q/background (:dark-blue colors))
  (q/text-font "VT323-Regular")
  (q/text-size 24)
  (init-state!))

(defn update-state [{:keys [score tank missiles bombs ufos hits stars lifes game-state state-counter]
                     :as state}]
  (let [bg-state (update state :stars stars/move-stars world-height)]
    (cond
      (and (= :playing game-state) (zero? lifes)) (assoc bg-state :game-state :game-over :state-counter 0)
      (= :game-over game-state) (if (< state-counter 90)
                                  (update bg-state :state-counter inc)
                                  (assoc bg-state :game-state :ready))
      (= :ready game-state) bg-state
      :else (let [explosions (ufos/detect-explosions ufos missiles)
                  ufos-exploded (into #{} (map first explosions))
                  ufos-escaped (helpers/escaped ufos)
                  ufos-remaining (set/difference ufos ufos-exploded ufos-escaped)
                  ufos-next (ufos/update-ufos ufos-remaining size-ufo2 margin)
                  hits-new (into #{} (map (fn [[x y]] {:x x :y y :counter 0}) ufos-exploded))
                  hits-next (ufos/update-hits hits hits-new)
                  missiles-exploded (into #{} (map second explosions))
                  missiles-remaining (set/difference missiles missiles-exploded (helpers/escaped missiles))
                  missiles-next (missiles/update-missiles missiles-remaining)
                  bombs-exploded (bombs/exploded bombs tank)
                  bombs-remaining (set/difference bombs bombs-exploded (helpers/escaped bombs))
                  bombs-next (bombs/update-bombs bombs-remaining ufos-remaining)
                  score-next (+ score (count ufos-exploded) (- (count ufos-escaped)))
                  lifes-next (- lifes (count bombs-exploded))]
              (-> bg-state
                (update :tank tank/move-tank)
                (assoc :missiles missiles-next)
                (assoc :bombs bombs-next)
                (assoc :ufos ufos-next)
                (assoc :hits hits-next)
                (assoc :score score-next)
                (assoc :lifes lifes-next))))))

(defn key-handler [{:keys [tank missiles game-state music bang shoot] :as state} {key :key key-code :key-code}]
 (cond
   (= :game-over game-state) state
   (= :ready game-state) (cond
                           (= :q key) (q/exit)
                           (= :s key) (update state :mute not)
                           (q/key-pressed?) (init-state!)
                           :else state)
    :else (let [left 37 right 39 up 38 down 40]
            (cond
              (= :s key) (-> state
                             (update :mute not)
                             (assoc :music (if music music (js/bgsound)))
                             (assoc :bang (if bang bang (js/bangsound)))
                             (assoc :shoot (if shoot shoot (js/shootsound))))
              (= right key-code) (assoc-in state [:tank :dir] 1)
              (= left key-code) (assoc-in state [:tank :dir] -1)
              (= up key-code) (update-in state [:tank :speed] tank/speed-up)
              (= down key-code) (update-in state [:tank :speed] tank/speed-down)
              (= :space key) (if (< (count missiles) max-missiles)
                               (update state :missiles conj [(:x tank) yt])
                               state)
              :else state))))

(defn draw-state [{:keys [score tank missiles bombs ufos hits stars lifes game-state mute music bang shoot]
                   :as state}]
  (if mute
    (if (and music (.playing music))
      (.pause music)
      (if (and music (not (.playing music)))
        (.play music))))
  (apply q/background (:dark-blue colors))
  (stars/draw-stars! stars)
  (missiles/draw-missiles! missiles shoot)
  (bombs/draw-bombs! bombs)
  (helpers/draw-score! score)
  (ufos/draw-ufos! ufos size-ufo (:guppie-green colors))
  (tank/draw-tank! tank)
  (helpers/draw-hbar!)
  (missiles/draw-missiles-menu! (count missiles))
  (tank/draw-tank-menu! lifes)
  (doseq [hit hits]
    (ufos/draw-explosion! hit bang size-ufo))

  (if (or (= :game-over game-state) (= :ready game-state))
    (helpers/draw-game-over!)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch spaceinvaders
    :host "spaceinvaders"
    :size [world-width world-height]
    :setup setup
    :update update-state
    :key-pressed key-handler
    :draw draw-state
    :features [:keep-on-top]
    :middleware [m/fun-mode]))
