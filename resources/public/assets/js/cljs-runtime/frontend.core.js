goog.provide('frontend.core');
var module$node_modules$keycloak_js$dist$keycloak=shadow.js.require("module$node_modules$keycloak_js$dist$keycloak", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
frontend.core.keycloak_config = ({"realm": "SMDH", "url": "http://localhost:8080", "clientId": "VMP-Frontend"});
frontend.core.kc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.core.initialize_keycloak = (function frontend$core$initialize_keycloak(){
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.core.kc,cljs.core.assoc,new cljs.core.Keyword(null,"client","client",-1323448117),(new module$node_modules$keycloak_js$dist$keycloak(frontend.core.keycloak_config)));

(new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.kc))["onAuthSuccess"] = (function (){
var fexpr__46683 = new cljs.core.Keyword(null,"statefn","statefn",-1012296176).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.kc));
return (fexpr__46683.cljs$core$IFn$_invoke$arity$1 ? fexpr__46683.cljs$core$IFn$_invoke$arity$1(true) : fexpr__46683.call(null,true));
}));

new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.kc)).init(({"onLoad": "check-sso", "silentCheckSsoRedirectUri": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.href),"silent-check-sso.html"].join('')})).then((function (){
return new cljs.core.Keyword(null,"statefn","statefn",-1012296176).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.kc));
}));

return cljs.core.deref(frontend.core.kc);
}catch (e46682){if((e46682 instanceof Error)){
var e = e46682;
return console.error("Error initializing Keycloak:",e);
} else {
throw e46682;

}
}});

frontend.core.app = (function (){var G__46685 = (function frontend$core$app_render(props__44639__auto__,maybe_ref__44640__auto__){
var vec__46686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__44639__auto__),maybe_ref__44640__auto__], null);

var vec__46689 = helix.hooks.use_state(false);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46689,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46689,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.core.kc,cljs.core.assoc,new cljs.core.Keyword(null,"statefn","statefn",-1012296176),set_state);

var G__46692 = "div";
var G__46693 = (function (){var obj46695 = ({"children":(cljs.core.truth_(state)?(function (){var G__46696 = "button";
var G__46697 = (function (){var obj46699 = ({"className":"btn btn-error","onClick":(function (){
return new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.kc)).logout();
}),"children":"logout!!"});
return obj46699;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46696,G__46697) : helix.core.jsx.call(null,G__46696,G__46697));
})():(function (){var G__46700 = "button";
var G__46701 = (function (){var obj46703 = ({"className":"btn btn-accent","onClick":(function (){
return new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.kc)).login();
}),"children":"Sign in"});
return obj46703;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46700,G__46701) : helix.core.jsx.call(null,G__46700,G__46701));
})())});
return obj46695;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46692,G__46693) : helix.core.jsx.call(null,G__46692,G__46693));
});
if(goog.DEBUG === true){
var G__46704 = G__46685;
(G__46704.displayName = "frontend.core/app");

return G__46704;
} else {
return G__46685;
}
})();



frontend.core.init = (function frontend$core$init(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
var keycloak_instance = frontend.core.initialize_keycloak();
return root.render((function (){var G__46705 = frontend.core.app;
var G__46706 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46705,G__46706) : helix.core.jsx.call(null,G__46705,G__46706));
})());
});
goog.exportSymbol('frontend.core.init', frontend.core.init);
frontend.core.start = (function frontend$core$start(){
return frontend.core.init();
});

//# sourceMappingURL=frontend.core.js.map
