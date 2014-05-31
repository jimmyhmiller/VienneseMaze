(ns vinnese.core
  (:require
   [figwheel.client :as fw :include-macros true]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)


(def colors {:red "#F00" :yellow "#FFF700" :green "#0F0"})


(defn square [x] (* x x))

(defn make-location [x y]
  {:top (+ 30 (* y 40)) :left (+ 30 (* x 40))})


(defn next-color [color]
  (color {:red :green :yellow :red :green :yellow}))


(defn change-light [[x y color]]
  [x y (next-color color)])


(defn x [[x y]] x)
(defn y [[x y]] y)

(defn change-lights [app]
  (om/transact! app :edges (fn [lights] (map change-light lights))))


(defn edge [from-node to-node color nodes]
  (let [to (to-node nodes)
        from (from-node nodes)
        location (make-location (x to) (y to))
        top (:top location)
        left (:left location)
        length (* 40
                (Math/sqrt
                (+
                (square
                 (-
                  (x from)
                  (x to)))
                (square
                 (-
                  (y from)
                  (y to))))))
        angle (float  (* (/ 180 3.14) (Math/acos (/ (* 40 (- (y from) (y to))) length))))]
  [:div.behind
   {
    :key (gensym)
    :style
    {:position :absolute
     :width 3
     :top (+ top 5)
     :left (+ left 7)
     :height length
     :background-color (color colors)
     :transform-origin "top left"
     :transform (str "rotate(" angle "deg)")}}]))


(defn node [label [x y] app]
  (let [location (make-location x y)
        top (- (:top location) 5)
        left (- (:left location) 5)]
  [:div
   {:onClick #(change-lights app)
    :style
    {:width 20
     :height 20
     :background-color "#FFF"
     :border-radius "50%"
     :border-color "#000"
     :z-index "100"
     :position :absolute
     :top top
     :left left
     :text-align :center
     :line-height 20
     :border-width 1
     :border-style :solid}} label]))




(defn testing [app owner]
  (reify
    om/IRender
    (render [this]
            (html [:div
                   (map
                    (fn [[label [x y]]]
                      (node (name label) [x y] app))
                    (:nodes app))
                   (map
                    (fn [[a b color]] (edge a b color (:nodes app)))
                    (:edges app))]))))




;; define your app data so that it doesn't get over written on reload
(fw/defonce app-state (atom {:nodes
                             {:a [0 4]
                              :b [2 2]
                              :c [2 4]
                              :d [2 6]
                              :i [4 0]
                              :h [4 2]
                              :g [4 4]
                              :f [4 6]
                              :e [4 8]
                              :j [6 2]
                              :k [6 4]
                              :l [6 6]
                              :m [8 4]}
                             :edges
                             [[:a :b :yellow]
                              [:a :c :green]
                              [:a :d :red]
                              [:b :i :green]
                              [:b :h :green]
                              [:b :c :green]
                              [:c :d :yellow]
                              [:d :f :green]
                              [:f :e :green]
                              [:d :e :red]
                              [:c :g :green]
                              [:i :h :green]
                              [:h :g :green]
                              [:g :f :green]
                              [:h :j :yellow]
                              [:i :j :yellow]
                              [:g :k :green]
                              [:f :l :yellow]
                              [:e :l :red]
                              [:j :k :yellow]
                              [:k :l :yellow]
                              [:l :m :red]
                              [:k :m :green]
                              [:j :m :red]]}))




(om/root
 testing
 app-state
 {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload
 :jsload-callback (fn []
                    ;; (stop-and-start-my app)
                    ))
