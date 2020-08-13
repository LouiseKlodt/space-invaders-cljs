(ns spaceinvaders.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [quiltools.core :as qt]
            [clojure.string :as str]
            [clojure.set :as set]
            [cljsjs.howler]
            [spaceinvaders.stars :as stars]
            [spaceinvaders.ufos :as ufos]
            [spaceinvaders.tank :as tank]
            [spaceinvaders.missiles :as missiles]
            [spaceinvaders.bombs :as bombs]
            [spaceinvaders.helpers :as helpers]
            [spaceinvaders.globals :refer [yt wb max-missiles size-ufo max-score colors
                                           world-height world-width margin frame-rate]]))

(defn init-state! []
  {:score 0
   :lifes 3
   :game-state :playing
   :state-counter 0
   :tank (tank/create-tank)
   :missiles #{}
   :hits #{}
   :tank-hits #{}
   :bombs #{}
   :ufos #{}
   :stars (stars/rand-stars 120 world-width world-height)
   :bgmusic (js/themesound)
   :bang (js/bangsound)
   :shoot (js/shootsound)
   :hiss (js/hissingsound)
   :mute true})

(defn setup []
  (q/frame-rate frame-rate)
  (q/fill 0)
  (q/text-font "VT323-Regular")
  (q/text-size 24)
  (init-state!))

(defn update-state [{:keys [score tank missiles bombs ufos hits tank-hits stars lifes game-state state-counter]
                     :as state}]
  (let [bg-state (update state :stars stars/move-stars world-height)]
    (cond
      (= :ready game-state) bg-state
      (and (= :playing game-state) (= max-score score)) (assoc bg-state :game-state :won :state-counter 0)
      (and (= :playing game-state) (zero? lifes)) (assoc bg-state :game-state :game-over :state-counter 0)
      (or (= :won game-state) (= :game-over game-state)) (if (< state-counter 90)
                                                           (-> bg-state
                                                             (update :state-counter inc)
                                                             (assoc :tank-hits #{})
                                                             (assoc :hits #{}))
                                                           (-> bg-state
                                                             (assoc :game-state :ready)))
      :else (let [explosions (ufos/detect-explosions ufos missiles)
                  ufos-exploded (into #{} (map first explosions))
                  ufos-escaped (helpers/escaped ufos)
                  ufo-tank-colls (tank/tank-collisions ufos size-ufo size-ufo tank)
                  ufos-remaining (set/difference ufos ufos-exploded ufos-escaped ufo-tank-colls)
                  ufos-next (ufos/update-ufos ufos-remaining)
                  hits-new (into #{} (map (fn [[x y]] {:x x :y y :counter 0}) ufos-exploded))
                  hits-next (helpers/update-hits hits hits-new 90)
                  missiles-exploded (into #{} (map second explosions))
                  missiles-remaining (set/difference missiles missiles-exploded (helpers/escaped missiles))
                  missiles-next (missiles/update-missiles missiles-remaining)
                  bomb-tank-colls (tank/tank-collisions bombs wb wb tank)
                  bombs-remaining (set/difference bombs bomb-tank-colls (helpers/escaped bombs))
                  bombs-next (bombs/update-bombs bombs-remaining ufos-remaining)
                  tank-hits-new (into #{} (map (fn [[x y]] {:x x :y y :counter 0}) (set/union ufo-tank-colls bomb-tank-colls)))
                  tank-hits-next (helpers/update-hits tank-hits tank-hits-new 30)
                  score-next (+ score (count ufos-exploded) (- (count ufos-escaped)))
                  lifes-next (- lifes (count bomb-tank-colls) (count ufo-tank-colls))]
              (-> bg-state
                (update :tank tank/move-tank)
                (assoc :missiles missiles-next)
                (assoc :bombs bombs-next)
                (assoc :ufos ufos-next)
                (assoc :hits hits-next)
                (assoc :tank-hits tank-hits-next)
                (assoc :score score-next)
                (assoc :lifes lifes-next))))))

(defn key-handler [{:keys [tank missiles game-state bgmusic bang shoot] :as state} {key :key key-code :key-code}]
 (cond
   (= :game-over game-state) (assoc state :mute true)
   (= :ready game-state) (cond
                           (= :q key) (q/exit)
                           (= :s key) (update state :mute not)
                           (q/key-pressed?) (init-state!)
                           :else state)
    :else (let [left 37 right 39 up 38 down 40]
            (cond
              (= :s key) (-> state
                             (update :mute not))
              (= right key-code) (assoc-in state [:tank :dir] 1)
              (= left key-code) (assoc-in state [:tank :dir] -1)
              (= up key-code) (update-in state [:tank :speed] tank/speed-up)
              (= down key-code) (update-in state [:tank :speed] tank/speed-down)
              (= :space key) (if (< (count missiles) max-missiles)
                               (do (.play shoot) (update state :missiles conj [(:x tank) yt]))
                               state)
              :else state))))

(defn draw-state [{:keys [score tank missiles bombs ufos hits tank-hits stars lifes game-state mute bgmusic bang shoot hiss]
                   :as state}]
  (if mute
    (if (.playing bgmusic)
      (.pause bgmusic))
    (if (not (.playing bgmusic))
      (.play bgmusic)))
  (q/background 0)
  (stars/draw-stars! stars)
  (missiles/draw-missiles! missiles shoot)
  (bombs/draw-bombs! bombs)
  (helpers/draw-score! score)
  (ufos/draw-ufos! ufos (:guppie-green colors))
  (tank/draw-tank! tank)
  (helpers/draw-hbar!)
  (missiles/draw-missiles-menu! (count missiles))
  (tank/draw-tank-menu! lifes)
  (doseq [hit hits]
    (ufos/draw-explosion! hit bang))
  (doseq [hit tank-hits]
    (tank/draw-explosion! hit tank hiss))
  (if (not (= :playing game-state)) (.fade bgmusic 1, 0, 1000))
  (cond
    (= :game-over game-state) (helpers/draw-game-over! helpers/game-over-img)
    (= :won game-state) (helpers/draw-game-over! helpers/game-won-img)
    (= :ready game-state) (helpers/draw-game-over! helpers/game-ready-img)))


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
