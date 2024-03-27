goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__42589,p__42590){
var map__42591 = p__42589;
var map__42591__$1 = cljs.core.__destructure_map(map__42591);
var svc = map__42591__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42591__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42591__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42591__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42592 = p__42590;
var map__42592__$1 = cljs.core.__destructure_map(map__42592);
var msg = map__42592__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42592__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42592__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42592__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42592__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__42595,p__42596){
var map__42597 = p__42595;
var map__42597__$1 = cljs.core.__destructure_map(map__42597);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42597__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__42598 = p__42596;
var map__42598__$1 = cljs.core.__destructure_map(map__42598);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__42602,p__42603){
var map__42604 = p__42602;
var map__42604__$1 = cljs.core.__destructure_map(map__42604);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42604__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42604__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42605 = p__42603;
var map__42605__$1 = cljs.core.__destructure_map(map__42605);
var msg = map__42605__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42605__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__42606,tid){
var map__42607 = p__42606;
var map__42607__$1 = cljs.core.__destructure_map(map__42607);
var svc = map__42607__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42607__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__42614 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__42615 = null;
var count__42616 = (0);
var i__42617 = (0);
while(true){
if((i__42617 < count__42616)){
var vec__42630 = chunk__42615.cljs$core$IIndexed$_nth$arity$2(null,i__42617);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42630,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42630,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42837 = seq__42614;
var G__42838 = chunk__42615;
var G__42839 = count__42616;
var G__42840 = (i__42617 + (1));
seq__42614 = G__42837;
chunk__42615 = G__42838;
count__42616 = G__42839;
i__42617 = G__42840;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__42614);
if(temp__5811__auto__){
var seq__42614__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42614__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42614__$1);
var G__42841 = cljs.core.chunk_rest(seq__42614__$1);
var G__42842 = c__5565__auto__;
var G__42843 = cljs.core.count(c__5565__auto__);
var G__42844 = (0);
seq__42614 = G__42841;
chunk__42615 = G__42842;
count__42616 = G__42843;
i__42617 = G__42844;
continue;
} else {
var vec__42640 = cljs.core.first(seq__42614__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42640,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42640,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42846 = cljs.core.next(seq__42614__$1);
var G__42847 = null;
var G__42848 = (0);
var G__42849 = (0);
seq__42614 = G__42846;
chunk__42615 = G__42847;
count__42616 = G__42848;
i__42617 = G__42849;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__42608_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__42608_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__42609_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__42609_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__42610_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__42610_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__42611_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__42611_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__42667){
var map__42668 = p__42667;
var map__42668__$1 = cljs.core.__destructure_map(map__42668);
var svc = map__42668__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
