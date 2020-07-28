(ns ^:figwheel-hooks canastcli.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [goog.dom :as gdom]
            [cljs-http.client :as http]
            [cljs.core.async :as a :refer [<! >!]]
            [canastcli.spiel :as sp]
            [canastcli.menu :as me]
            [canastcli.drop-file-stream :as df]))

;; State
(def world (r/atom {:spiel (sp/->Spiel)
                    :korrektur false
                    :historie {"x" 0 "y" 0} 
                    :log nil
                    :gespeichertes-spiel? false
                    :spieler-namen []
                    :spiel-typ nil}))

(defn keine-korrektur
  []
  (swap! world assoc :korrektur false))

;; -------------------------
;; Events
(defn neues-spiel [] 
  (let [spiel (sp/neues-spiel (:spieler-namen @world))
        log (df/log-neues-spiel "logs.txt" world :log)] 
    (swap! world assoc
           :spiel spiel
           :korrektur false)))

(defn begonnenes-spiel-verwerfen []  
  (let [spiel (sp/neues-spiel (:spieler-namen @world))
        log (df/log-neues-spiel "logs.txt" world :log)] 
    (swap! world assoc
           :spiel spiel
           :korrektur false)))

(defn restauriere-spiel []
  (df/lies-welt "welt.txt" world))

(defn gewonnene-spiele
  [historie] 
  [:div
   [:div.gwspiele "Gewonnene Spiele bisher: "]
   [:div.table 
    [:div.tr 
     [:div.td (key (first historie))]
     [:div.td (key (second historie))]]
    [:div.tr
     [:div.td (val (first historie))]
     [:div.td (val (second historie))]]]])

(defn geber-feststellung
  []
  (let [pos (str (* 52 (:runde (:spiel @world))) "px")]
    (when (not (sp/spiel-beendet? (:spiel @world)))
      (if (sp/geber-festgelegt? (:spiel @world))
        [:div {:class "nebentab" :style {:top pos}}
         [:div.geber 
          (str (sp/geber (:spiel @world))" muss geben.")]]
        [:div.nebentab
         [:div.geber
          [:select
           {:on-change #(swap! world assoc-in [:spiel :geber] (-> % .-target .-value))
            } 
           [:option  "noch festzulegen"]
           (map (fn [tln] [:option {:key tln} tln])
                (sp/teilnehmer-namen (:spiel @world)))
           ]
          [:label " muss geben."]]
         ]))))

(defn incr-gw-spiele
  [hist sieger]
  (assoc hist sieger (inc (hist sieger ))))

(defn decr-gw-spiele
  [hist sieger] 
  (assoc hist sieger (dec (hist sieger ))))

(defn aktualisiere-historie
  [spiel]
  (if (sp/spiel-beendet? spiel)
    (incr-gw-spiele (:historie @world) (sp/sieger spiel))
    (:historie @world)))

(defn sieger-anzeige
  []
  (let [l (str
           (:log @world)
           "Spiel beendet: SiegerIn ist " (sp/sieger (:spiel @world)))
        f (df/write-text l "logs.txt")
        w (df/delete-file-named "welt.txt" world :gespeichertes-spiel?)] 
    [:div.gewinner (str "Gewonnen hat: " (sp/sieger (:spiel @world)))]))

(def resultate (r/atom (zipmap (sp/teilnehmer-namen (:spiel @world))
                               (take (count (sp/teilnehmer-namen (:spiel @world))) [0 0 0 0 0 0]))))

(defn log-runde
  [w resultate]
  (str
   (:log w)
   "Runde " (inc (sp/runde (:spiel w)))
   \newline
   resultate
   \newline))

(defn naechste-runde
  []
  (let [x 1] 
    (if (not (sp/spiel-beendet? (:spiel @world)))
      [:div.rTableRow {:key (if (:korrektur @world)
                              (dec (sp/runde (:spiel @world)))
                              (sp/runde (:spiel @world)))}
       [:div.rTableCell.smal (inc (sp/runde (:spiel @world)))]
       (doall
        (map 
         (fn
           [tln]
           [:div.rTableCell
            {:key tln}
            [:input {:default-value (if (:korrektur @world) (sp/letztes-resultat (:spiel @world) tln) "")
                     :placeholder (if (:korrektur @world) (sp/letztes-resultat (:spiel @world) tln) "")
                     :type "number" 
                     :on-change #(let [val (cljs.reader/read-string (-> % .-target .-value))
                                       res (swap! resultate assoc tln val )]
                                   )}]])
         (sp/teilnehmer-namen (:spiel @world))))
       [:div.rTableCell.button
        [:button {:on-click #(let [spiel (if (:korrektur @world)
                                           (sp/korrigiere (:spiel @world) @resultate)
                                           (sp/registriere (:spiel @world) @resultate))
                                   historie (aktualisiere-historie spiel)
                                   h (df/write-text (pr-str historie) "hist.txt")
                                   l (log-runde @world @resultate)
                                   f (df/write-text l "logs.txt")
                                   w (swap! world assoc :spiel spiel
                                            :korrektur false
                                            :historie historie
                                            :log l
                                            :gespeichertes-spiel? true)
                                   s (df/write-text (prn-str w) "welt.txt")] 
                               w)}
         "speichern"]]] 
      (sieger-anzeige))))

(defn log-korrektur-gewonnener-spiele
  [w]
  (if (sp/spiel-beendet? (:spiel w))
    (str
     (:log w)
     "Korrektur gewonnener Spiele" 
     \newline
     "gewonnen hat " (sp/sieger (:spiel w)) " noch nicht!"
     \newline)
    (:log w)))

(defn korrektur
  [w]
  (let [h (if (sp/spiel-beendet? (:spiel w))
            (decr-gw-spiele (:historie w) (sp/sieger (:spiel w)))
            (:historie w))
        l (log-korrektur-gewonnener-spiele w)
        f (if (sp/spiel-beendet? (:spiel w)) (df/write-text l "logs.txt"))
        s (sp/spiel-nicht-beendet (:spiel w))]
    (assoc w :spiel s :korrektur true :historie h)))

(defn ergebnis-fuer
  [runde]
  [:div.rTableRow {:key runde}
   [:div.rTableCell.smal runde]
   (doall (map
           (fn [tln]
             [:div.rTableCell
              {:key tln}
              (sp/resultat-in-runde (:spiel @world) tln (dec runde))])
           (sp/teilnehmer-namen (:spiel @world))))
   (when (= runde (sp/anzahl-runden (:spiel @world)))
     [:div.rTableCell.button
      [:button {:on-click #(swap! world korrektur)}
       "korrigiere"]])])

(defn zwischensumme-fuer
  [runde] 
  [:div [:div.rTableRow {:key (str "zw-" runde)}
         [:div.rTableCell.rule.smal " "]
         (doall (map (fn [t]
                       [:div.rTableCell.rule {:key t} [:hr]])
                     (sp/teilnehmer-namen (:spiel @world))))]
   [:div.rTableRow
    [:div.rTableCell.smal ""]
    (doall (map (fn [t]
                  [:div.rTableCell {:key t}
                   (sp/zwischen-summe (:spiel @world) t runde)])
                (sp/teilnehmer-namen (:spiel @world))))]])

(defn runden-stand
  [runde]
  [:div {:key (str "rs-" runde)}
   (ergebnis-fuer runde)   
   (when (> runde 1)
     (zwischensumme-fuer runde))]
  )

(defn ergebnis-tabelle
  []
  (let [runden (if (:korrektur @world)
                 (sp/anzahl-runden (:spiel @world))
                 (inc (sp/anzahl-runden (:spiel @world))))]
    [:div.rTableBody
     (doall (map
             (fn [r]
               (runden-stand r))
             (range 1 runden))) 
     (naechste-runde)]))

(defn render-spielablauf
  []
  (if (sp/teilnehmer-vorhanden? (:spiel @world))
    [:div  
     (when (= (:spiel-typ @world) "Canasta") (gewonnene-spiele (:historie @world)))
     [:div.rTable
      [:div.rTableHeading
       [:div.rTableRow
        [:div.rTableHead.smal "Rde."]
        (doall (map (fn [s]
                      [:div.rTableHead {:key s} s]) (sp/teilnehmer-namen (:spiel @world))))]]
      (when (sp/geber-festgelegt? (:spiel @world)) (ergebnis-tabelle))]
     (geber-feststellung)]))

(defn menu
  []
  (if (:gespeichertes-spiel? @world)
    {:begonnenes-ignorieren #(begonnenes-spiel-verwerfen)
     :restauriere-spiel #(restauriere-spiel)}
    {:neues-spiel #(neues-spiel) 
     :restauriere-spiel #(restauriere-spiel)}))

(defn home-page []
  [:div
   (me/menu (menu))
   [:h1 (:spiel-typ @world)] 
   (render-spielablauf)])

(defn get-app-element 
  "Liefert den body der Html-Seite (index.html).
   Es muss ein div-Element mit der id app existieren:
   <div id='app'> </div> "
  []
  (gdom/getElement "app"))

(defn mount-app-element [] 
  (when-let [el (get-app-element)]
    (df/lies-edn "hist.txt" world :historie)
    (df/lies-edn "namen.txt" world :spieler-namen)
    (df/lies-edn "spieltyp.txt" world :spiel-typ)
    (df/exists-file-named "welt.txt" world :gespeichertes-spiel?)
    (rd/render [home-page] el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload [] 
  (mount-app-element))


