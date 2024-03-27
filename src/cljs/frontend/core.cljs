(ns frontend.core
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["keycloak-js" :as kjs]
            ["react-dom/client" :as rdom]))

;; Define Keycloak configuration
(def keycloak-config
  #js {:realm "experiment"
       :url "http://localhost:8080"
       :clientId "frontend"})

;; Initialize Keycloak
(def kc (atom nil)) ;; Define atom to hold Keycloak instance

(defn initialize-keycloak []
  (try
    (swap! kc assoc :client (kjs. keycloak-config))
    (aset (:client @kc) "onAuthSuccess" #((:statefn @kc) true))

    (.then (.init (:client @kc) #js{:onLoad "check-sso"
                                    :silentCheckSsoRedirectUri (str (.-href js/location) "silent-check-sso.html")}) #(:statefn @kc))
    @kc
    (catch js/Error e
      (js/console.error "Error initializing Keycloak:" e))))

(defnc app []
  (let [[state set-state] (hooks/use-state false)]
    (swap! kc assoc :statefn set-state)
    (d/div
     (if state (d/button {:class-name "btn btn-error" :on-click #(.logout (:client @kc))} "logout!!") (d/button {:class-name "btn btn-accent" :on-click #(.login (:client @kc))} "Sign in")))))

;; Start your app with your favorite React renderer
(defn ^:export init []
  (let [root (rdom/createRoot (js/document.getElementById "app"))
        keycloak-instance (initialize-keycloak)]
    (.render root ($ app))))

(defn ^:dev/after-load start []
  (init))
