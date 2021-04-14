(ns canastcli.drop-file-stream
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require  [cljs-http.client :as http]
             [cljs.core.async :as a :refer [<! timeout]]
             ))

(defn exists-file-named
  [f-name w ziel]
  (go (let [pfad (str "/" f-name)
            response (<! (http/post "https://api.dropboxapi.com/2/files/get_metadata" 
                                    {:with-credentials? false
                                     :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                               }         
                                     :json-params {:path pfad}}
                                    ))] 
        (swap! w assoc ziel (= (:status response) 200)))))

(defn delete-file-named
  [f-name w ziel]
  (go (let [pfad (str "/" f-name)]
        (<! (http/post "https://api.dropboxapi.com/2/files/delete" 
                       {:with-credentials? false
                        :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                  }         
                        :json-params {:path pfad}}
                       )))))

(defn get-contents-of
  [f-name w ziel]
  (go (let [pfad (str "{\"path\":\"/" f-name "\"}")
            response (<! (http/post "https://content.dropboxapi.com/2/files/download" 
                                    {:with-credentials? false
                                     :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                               "Dropbox-API-Arg" pfad
                                               "Content-Type" "text/plain; charset=utf-8"}         
                                     }
                                    ))] 
        (swap! w assoc ziel (:body response)))))

(defn lies-edn
  [f-name w ziel]
  (go (let [pfad (str "{\"path\":\"/" f-name "\"}")
            response (<! (http/post "https://content.dropboxapi.com/2/files/download" 
                                    {:with-credentials? false
                                     :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                               "Dropbox-API-Arg" pfad
                                               "Content-Type" "text/plain; charset=utf-8"}         
                                     }))] 
        (swap! w assoc ziel (cljs.reader/read-string (:body response))))))

(defn lies-welt
  [f-name w]
  (go (let [pfad (str "{\"path\":\"/" f-name "\"}")
            response (<! (http/post "https://content.dropboxapi.com/2/files/download" 
                                    {:with-credentials? false
                                     :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                               "Dropbox-API-Arg" pfad
                                               "Content-Type" "text/plain; charset=utf-8"}         
                                     }
                                    ))] 
        (reset! w (cljs.reader/read-string (:body response))))))

(defn write-text
  [text f-name] 
  (go-loop [pfad (str "{\"path\":\"/" f-name \" "," "\"mode\":{\".tag\":\"overwrite\"}}")
            r (<! (http/post "https://content.dropboxapi.com/2/files/upload" 
                             {:with-credentials? false
                              :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                        "Dropbox-API-Arg" pfad 
                                        "Content-Type" "application/octet-stream"
                                        }        
                              :body text} 
                             ))] 
    (when (= (:status r) 429)
      (do 
        (<! (timeout (* (:retry_after (:error (:body r))) 1000)))
        (recur pfad (<! (http/post "https://content.dropboxapi.com/2/files/upload" 
                                   {:with-credentials? false
                                    :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                              "Dropbox-API-Arg" pfad 
                                              "Content-Type" "application/octet-stream"
                                              }        
                                    :body text} 
                                   )))))))

(defn log-neues-spiel
  [f-name w ziel]
  (go (let [pfad (str "{\"path\":\"/" f-name "\"}")
            response (<! (http/post "https://content.dropboxapi.com/2/files/download" 
                                    {:with-credentials? false
                                     :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
                                               "Dropbox-API-Arg" pfad
                                               "Content-Type" "text/plain; charset=utf-8"}         
                   }
          ))] 
  (swap! w assoc ziel (str (:body response) "Neues Spiel " (js/Date.) \newline))
  (write-text (ziel @w) "logs.txt"))))
