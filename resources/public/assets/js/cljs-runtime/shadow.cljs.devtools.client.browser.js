goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44231 = arguments.length;
var i__5767__auto___44232 = (0);
while(true){
if((i__5767__auto___44232 < len__5766__auto___44231)){
args__5772__auto__.push((arguments[i__5767__auto___44232]));

var G__44233 = (i__5767__auto___44232 + (1));
i__5767__auto___44232 = G__44233;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43362){
var G__43363 = cljs.core.first(seq43362);
var seq43362__$1 = cljs.core.next(seq43362);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43363,seq43362__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43371 = cljs.core.seq(sources);
var chunk__43372 = null;
var count__43373 = (0);
var i__43374 = (0);
while(true){
if((i__43374 < count__43373)){
var map__43388 = chunk__43372.cljs$core$IIndexed$_nth$arity$2(null,i__43374);
var map__43388__$1 = cljs.core.__destructure_map(map__43388);
var src = map__43388__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43391){var e_44241 = e43391;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44241);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44241.message)].join('')));
}

var G__44242 = seq__43371;
var G__44243 = chunk__43372;
var G__44244 = count__43373;
var G__44245 = (i__43374 + (1));
seq__43371 = G__44242;
chunk__43372 = G__44243;
count__43373 = G__44244;
i__43374 = G__44245;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__43371);
if(temp__5811__auto__){
var seq__43371__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43371__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43371__$1);
var G__44246 = cljs.core.chunk_rest(seq__43371__$1);
var G__44247 = c__5565__auto__;
var G__44248 = cljs.core.count(c__5565__auto__);
var G__44249 = (0);
seq__43371 = G__44246;
chunk__43372 = G__44247;
count__43373 = G__44248;
i__43374 = G__44249;
continue;
} else {
var map__43396 = cljs.core.first(seq__43371__$1);
var map__43396__$1 = cljs.core.__destructure_map(map__43396);
var src = map__43396__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43396__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43399){var e_44250 = e43399;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44250);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44250.message)].join('')));
}

var G__44251 = cljs.core.next(seq__43371__$1);
var G__44252 = null;
var G__44253 = (0);
var G__44254 = (0);
seq__43371 = G__44251;
chunk__43372 = G__44252;
count__43373 = G__44253;
i__43374 = G__44254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__43407 = cljs.core.seq(js_requires);
var chunk__43408 = null;
var count__43409 = (0);
var i__43410 = (0);
while(true){
if((i__43410 < count__43409)){
var js_ns = chunk__43408.cljs$core$IIndexed$_nth$arity$2(null,i__43410);
var require_str_44256 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44256);


var G__44257 = seq__43407;
var G__44258 = chunk__43408;
var G__44259 = count__43409;
var G__44260 = (i__43410 + (1));
seq__43407 = G__44257;
chunk__43408 = G__44258;
count__43409 = G__44259;
i__43410 = G__44260;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__43407);
if(temp__5811__auto__){
var seq__43407__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43407__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43407__$1);
var G__44261 = cljs.core.chunk_rest(seq__43407__$1);
var G__44262 = c__5565__auto__;
var G__44263 = cljs.core.count(c__5565__auto__);
var G__44264 = (0);
seq__43407 = G__44261;
chunk__43408 = G__44262;
count__43409 = G__44263;
i__43410 = G__44264;
continue;
} else {
var js_ns = cljs.core.first(seq__43407__$1);
var require_str_44265 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44265);


var G__44266 = cljs.core.next(seq__43407__$1);
var G__44267 = null;
var G__44268 = (0);
var G__44269 = (0);
seq__43407 = G__44266;
chunk__43408 = G__44267;
count__43409 = G__44268;
i__43410 = G__44269;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43424){
var map__43425 = p__43424;
var map__43425__$1 = cljs.core.__destructure_map(map__43425);
var msg = map__43425__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43425__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43425__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43426(s__43427){
return (new cljs.core.LazySeq(null,(function (){
var s__43427__$1 = s__43427;
while(true){
var temp__5811__auto__ = cljs.core.seq(s__43427__$1);
if(temp__5811__auto__){
var xs__6369__auto__ = temp__5811__auto__;
var map__43434 = cljs.core.first(xs__6369__auto__);
var map__43434__$1 = cljs.core.__destructure_map(map__43434);
var src = map__43434__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43434__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43434__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__43427__$1,map__43434,map__43434__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__43425,map__43425__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43426_$_iter__43428(s__43429){
return (new cljs.core.LazySeq(null,((function (s__43427__$1,map__43434,map__43434__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__43425,map__43425__$1,msg,info,reload_info){
return (function (){
var s__43429__$1 = s__43429;
while(true){
var temp__5811__auto____$1 = cljs.core.seq(s__43429__$1);
if(temp__5811__auto____$1){
var s__43429__$2 = temp__5811__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43429__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__43429__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__43431 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__43430 = (0);
while(true){
if((i__43430 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__43430);
cljs.core.chunk_append(b__43431,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44275 = (i__43430 + (1));
i__43430 = G__44275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43431),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43426_$_iter__43428(cljs.core.chunk_rest(s__43429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43431),null);
}
} else {
var warning = cljs.core.first(s__43429__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43426_$_iter__43428(cljs.core.rest(s__43429__$2)));
}
} else {
return null;
}
break;
}
});})(s__43427__$1,map__43434,map__43434__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__43425,map__43425__$1,msg,info,reload_info))
,null,null));
});})(s__43427__$1,map__43434,map__43434__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__43425,map__43425__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43426(cljs.core.rest(s__43427__$1)));
} else {
var G__44276 = cljs.core.rest(s__43427__$1);
s__43427__$1 = G__44276;
continue;
}
} else {
var G__44277 = cljs.core.rest(s__43427__$1);
s__43427__$1 = G__44277;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__43439_44278 = cljs.core.seq(warnings);
var chunk__43440_44279 = null;
var count__43441_44280 = (0);
var i__43442_44281 = (0);
while(true){
if((i__43442_44281 < count__43441_44280)){
var map__43468_44282 = chunk__43440_44279.cljs$core$IIndexed$_nth$arity$2(null,i__43442_44281);
var map__43468_44283__$1 = cljs.core.__destructure_map(map__43468_44282);
var w_44284 = map__43468_44283__$1;
var msg_44285__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468_44283__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468_44283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468_44283__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43468_44283__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44288)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44286),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44287),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44285__$1)].join(''));


var G__44289 = seq__43439_44278;
var G__44290 = chunk__43440_44279;
var G__44291 = count__43441_44280;
var G__44292 = (i__43442_44281 + (1));
seq__43439_44278 = G__44289;
chunk__43440_44279 = G__44290;
count__43441_44280 = G__44291;
i__43442_44281 = G__44292;
continue;
} else {
var temp__5811__auto___44293 = cljs.core.seq(seq__43439_44278);
if(temp__5811__auto___44293){
var seq__43439_44294__$1 = temp__5811__auto___44293;
if(cljs.core.chunked_seq_QMARK_(seq__43439_44294__$1)){
var c__5565__auto___44295 = cljs.core.chunk_first(seq__43439_44294__$1);
var G__44296 = cljs.core.chunk_rest(seq__43439_44294__$1);
var G__44297 = c__5565__auto___44295;
var G__44298 = cljs.core.count(c__5565__auto___44295);
var G__44299 = (0);
seq__43439_44278 = G__44296;
chunk__43440_44279 = G__44297;
count__43441_44280 = G__44298;
i__43442_44281 = G__44299;
continue;
} else {
var map__43498_44300 = cljs.core.first(seq__43439_44294__$1);
var map__43498_44301__$1 = cljs.core.__destructure_map(map__43498_44300);
var w_44302 = map__43498_44301__$1;
var msg_44303__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498_44301__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498_44301__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498_44301__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43498_44301__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44306)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44304),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44305),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44303__$1)].join(''));


var G__44307 = cljs.core.next(seq__43439_44294__$1);
var G__44308 = null;
var G__44309 = (0);
var G__44310 = (0);
seq__43439_44278 = G__44307;
chunk__43440_44279 = G__44308;
count__43441_44280 = G__44309;
i__43442_44281 = G__44310;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43423_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43423_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43533){
var map__43534 = p__43533;
var map__43534__$1 = cljs.core.__destructure_map(map__43534);
var msg = map__43534__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43534__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43534__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43538 = cljs.core.seq(updates);
var chunk__43540 = null;
var count__43541 = (0);
var i__43542 = (0);
while(true){
if((i__43542 < count__43541)){
var path = chunk__43540.cljs$core$IIndexed$_nth$arity$2(null,i__43542);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43804_44311 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43808_44312 = null;
var count__43809_44313 = (0);
var i__43810_44314 = (0);
while(true){
if((i__43810_44314 < count__43809_44313)){
var node_44315 = chunk__43808_44312.cljs$core$IIndexed$_nth$arity$2(null,i__43810_44314);
if(cljs.core.not(node_44315.shadow$old)){
var path_match_44316 = shadow.cljs.devtools.client.browser.match_paths(node_44315.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44316)){
var new_link_44321 = (function (){var G__43889 = node_44315.cloneNode(true);
G__43889.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44316),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43889;
})();
(node_44315.shadow$old = true);

(new_link_44321.onload = ((function (seq__43804_44311,chunk__43808_44312,count__43809_44313,i__43810_44314,seq__43538,chunk__43540,count__43541,i__43542,new_link_44321,path_match_44316,node_44315,path,map__43534,map__43534__$1,msg,updates,reload_info){
return (function (e){
var seq__43892_44323 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43894_44324 = null;
var count__43895_44325 = (0);
var i__43896_44326 = (0);
while(true){
if((i__43896_44326 < count__43895_44325)){
var map__43904_44327 = chunk__43894_44324.cljs$core$IIndexed$_nth$arity$2(null,i__43896_44326);
var map__43904_44328__$1 = cljs.core.__destructure_map(map__43904_44327);
var task_44329 = map__43904_44328__$1;
var fn_str_44330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43904_44328__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43904_44328__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44332 = goog.getObjectByName(fn_str_44330,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44331)].join(''));

(fn_obj_44332.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44332.cljs$core$IFn$_invoke$arity$2(path,new_link_44321) : fn_obj_44332.call(null,path,new_link_44321));


var G__44333 = seq__43892_44323;
var G__44334 = chunk__43894_44324;
var G__44335 = count__43895_44325;
var G__44336 = (i__43896_44326 + (1));
seq__43892_44323 = G__44333;
chunk__43894_44324 = G__44334;
count__43895_44325 = G__44335;
i__43896_44326 = G__44336;
continue;
} else {
var temp__5811__auto___44337 = cljs.core.seq(seq__43892_44323);
if(temp__5811__auto___44337){
var seq__43892_44338__$1 = temp__5811__auto___44337;
if(cljs.core.chunked_seq_QMARK_(seq__43892_44338__$1)){
var c__5565__auto___44339 = cljs.core.chunk_first(seq__43892_44338__$1);
var G__44340 = cljs.core.chunk_rest(seq__43892_44338__$1);
var G__44341 = c__5565__auto___44339;
var G__44342 = cljs.core.count(c__5565__auto___44339);
var G__44343 = (0);
seq__43892_44323 = G__44340;
chunk__43894_44324 = G__44341;
count__43895_44325 = G__44342;
i__43896_44326 = G__44343;
continue;
} else {
var map__43908_44345 = cljs.core.first(seq__43892_44338__$1);
var map__43908_44346__$1 = cljs.core.__destructure_map(map__43908_44345);
var task_44347 = map__43908_44346__$1;
var fn_str_44348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43908_44346__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43908_44346__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44351 = goog.getObjectByName(fn_str_44348,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44349)].join(''));

(fn_obj_44351.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44351.cljs$core$IFn$_invoke$arity$2(path,new_link_44321) : fn_obj_44351.call(null,path,new_link_44321));


var G__44352 = cljs.core.next(seq__43892_44338__$1);
var G__44353 = null;
var G__44354 = (0);
var G__44355 = (0);
seq__43892_44323 = G__44352;
chunk__43894_44324 = G__44353;
count__43895_44325 = G__44354;
i__43896_44326 = G__44355;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44315);
});})(seq__43804_44311,chunk__43808_44312,count__43809_44313,i__43810_44314,seq__43538,chunk__43540,count__43541,i__43542,new_link_44321,path_match_44316,node_44315,path,map__43534,map__43534__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44316], 0));

goog.dom.insertSiblingAfter(new_link_44321,node_44315);


var G__44356 = seq__43804_44311;
var G__44357 = chunk__43808_44312;
var G__44358 = count__43809_44313;
var G__44359 = (i__43810_44314 + (1));
seq__43804_44311 = G__44356;
chunk__43808_44312 = G__44357;
count__43809_44313 = G__44358;
i__43810_44314 = G__44359;
continue;
} else {
var G__44360 = seq__43804_44311;
var G__44361 = chunk__43808_44312;
var G__44362 = count__43809_44313;
var G__44363 = (i__43810_44314 + (1));
seq__43804_44311 = G__44360;
chunk__43808_44312 = G__44361;
count__43809_44313 = G__44362;
i__43810_44314 = G__44363;
continue;
}
} else {
var G__44364 = seq__43804_44311;
var G__44365 = chunk__43808_44312;
var G__44366 = count__43809_44313;
var G__44367 = (i__43810_44314 + (1));
seq__43804_44311 = G__44364;
chunk__43808_44312 = G__44365;
count__43809_44313 = G__44366;
i__43810_44314 = G__44367;
continue;
}
} else {
var temp__5811__auto___44368 = cljs.core.seq(seq__43804_44311);
if(temp__5811__auto___44368){
var seq__43804_44369__$1 = temp__5811__auto___44368;
if(cljs.core.chunked_seq_QMARK_(seq__43804_44369__$1)){
var c__5565__auto___44370 = cljs.core.chunk_first(seq__43804_44369__$1);
var G__44371 = cljs.core.chunk_rest(seq__43804_44369__$1);
var G__44372 = c__5565__auto___44370;
var G__44373 = cljs.core.count(c__5565__auto___44370);
var G__44374 = (0);
seq__43804_44311 = G__44371;
chunk__43808_44312 = G__44372;
count__43809_44313 = G__44373;
i__43810_44314 = G__44374;
continue;
} else {
var node_44375 = cljs.core.first(seq__43804_44369__$1);
if(cljs.core.not(node_44375.shadow$old)){
var path_match_44376 = shadow.cljs.devtools.client.browser.match_paths(node_44375.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44376)){
var new_link_44377 = (function (){var G__43910 = node_44375.cloneNode(true);
G__43910.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44376),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43910;
})();
(node_44375.shadow$old = true);

(new_link_44377.onload = ((function (seq__43804_44311,chunk__43808_44312,count__43809_44313,i__43810_44314,seq__43538,chunk__43540,count__43541,i__43542,new_link_44377,path_match_44376,node_44375,seq__43804_44369__$1,temp__5811__auto___44368,path,map__43534,map__43534__$1,msg,updates,reload_info){
return (function (e){
var seq__43911_44378 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43913_44379 = null;
var count__43914_44380 = (0);
var i__43915_44381 = (0);
while(true){
if((i__43915_44381 < count__43914_44380)){
var map__43934_44382 = chunk__43913_44379.cljs$core$IIndexed$_nth$arity$2(null,i__43915_44381);
var map__43934_44383__$1 = cljs.core.__destructure_map(map__43934_44382);
var task_44384 = map__43934_44383__$1;
var fn_str_44385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43934_44383__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43934_44383__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44387 = goog.getObjectByName(fn_str_44385,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44386)].join(''));

(fn_obj_44387.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44387.cljs$core$IFn$_invoke$arity$2(path,new_link_44377) : fn_obj_44387.call(null,path,new_link_44377));


var G__44388 = seq__43911_44378;
var G__44389 = chunk__43913_44379;
var G__44390 = count__43914_44380;
var G__44391 = (i__43915_44381 + (1));
seq__43911_44378 = G__44388;
chunk__43913_44379 = G__44389;
count__43914_44380 = G__44390;
i__43915_44381 = G__44391;
continue;
} else {
var temp__5811__auto___44392__$1 = cljs.core.seq(seq__43911_44378);
if(temp__5811__auto___44392__$1){
var seq__43911_44393__$1 = temp__5811__auto___44392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43911_44393__$1)){
var c__5565__auto___44394 = cljs.core.chunk_first(seq__43911_44393__$1);
var G__44395 = cljs.core.chunk_rest(seq__43911_44393__$1);
var G__44396 = c__5565__auto___44394;
var G__44397 = cljs.core.count(c__5565__auto___44394);
var G__44398 = (0);
seq__43911_44378 = G__44395;
chunk__43913_44379 = G__44396;
count__43914_44380 = G__44397;
i__43915_44381 = G__44398;
continue;
} else {
var map__43935_44399 = cljs.core.first(seq__43911_44393__$1);
var map__43935_44400__$1 = cljs.core.__destructure_map(map__43935_44399);
var task_44401 = map__43935_44400__$1;
var fn_str_44402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43935_44400__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43935_44400__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44404 = goog.getObjectByName(fn_str_44402,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44403)].join(''));

(fn_obj_44404.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44404.cljs$core$IFn$_invoke$arity$2(path,new_link_44377) : fn_obj_44404.call(null,path,new_link_44377));


var G__44405 = cljs.core.next(seq__43911_44393__$1);
var G__44406 = null;
var G__44407 = (0);
var G__44408 = (0);
seq__43911_44378 = G__44405;
chunk__43913_44379 = G__44406;
count__43914_44380 = G__44407;
i__43915_44381 = G__44408;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44375);
});})(seq__43804_44311,chunk__43808_44312,count__43809_44313,i__43810_44314,seq__43538,chunk__43540,count__43541,i__43542,new_link_44377,path_match_44376,node_44375,seq__43804_44369__$1,temp__5811__auto___44368,path,map__43534,map__43534__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44376], 0));

goog.dom.insertSiblingAfter(new_link_44377,node_44375);


var G__44409 = cljs.core.next(seq__43804_44369__$1);
var G__44410 = null;
var G__44411 = (0);
var G__44412 = (0);
seq__43804_44311 = G__44409;
chunk__43808_44312 = G__44410;
count__43809_44313 = G__44411;
i__43810_44314 = G__44412;
continue;
} else {
var G__44413 = cljs.core.next(seq__43804_44369__$1);
var G__44414 = null;
var G__44415 = (0);
var G__44416 = (0);
seq__43804_44311 = G__44413;
chunk__43808_44312 = G__44414;
count__43809_44313 = G__44415;
i__43810_44314 = G__44416;
continue;
}
} else {
var G__44417 = cljs.core.next(seq__43804_44369__$1);
var G__44418 = null;
var G__44419 = (0);
var G__44420 = (0);
seq__43804_44311 = G__44417;
chunk__43808_44312 = G__44418;
count__43809_44313 = G__44419;
i__43810_44314 = G__44420;
continue;
}
}
} else {
}
}
break;
}


var G__44421 = seq__43538;
var G__44422 = chunk__43540;
var G__44423 = count__43541;
var G__44424 = (i__43542 + (1));
seq__43538 = G__44421;
chunk__43540 = G__44422;
count__43541 = G__44423;
i__43542 = G__44424;
continue;
} else {
var G__44425 = seq__43538;
var G__44426 = chunk__43540;
var G__44427 = count__43541;
var G__44428 = (i__43542 + (1));
seq__43538 = G__44425;
chunk__43540 = G__44426;
count__43541 = G__44427;
i__43542 = G__44428;
continue;
}
} else {
var temp__5811__auto__ = cljs.core.seq(seq__43538);
if(temp__5811__auto__){
var seq__43538__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43538__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43538__$1);
var G__44429 = cljs.core.chunk_rest(seq__43538__$1);
var G__44430 = c__5565__auto__;
var G__44431 = cljs.core.count(c__5565__auto__);
var G__44432 = (0);
seq__43538 = G__44429;
chunk__43540 = G__44430;
count__43541 = G__44431;
i__43542 = G__44432;
continue;
} else {
var path = cljs.core.first(seq__43538__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43945_44433 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43949_44434 = null;
var count__43950_44435 = (0);
var i__43951_44436 = (0);
while(true){
if((i__43951_44436 < count__43950_44435)){
var node_44437 = chunk__43949_44434.cljs$core$IIndexed$_nth$arity$2(null,i__43951_44436);
if(cljs.core.not(node_44437.shadow$old)){
var path_match_44438 = shadow.cljs.devtools.client.browser.match_paths(node_44437.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44438)){
var new_link_44439 = (function (){var G__44074 = node_44437.cloneNode(true);
G__44074.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44438),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44074;
})();
(node_44437.shadow$old = true);

(new_link_44439.onload = ((function (seq__43945_44433,chunk__43949_44434,count__43950_44435,i__43951_44436,seq__43538,chunk__43540,count__43541,i__43542,new_link_44439,path_match_44438,node_44437,path,seq__43538__$1,temp__5811__auto__,map__43534,map__43534__$1,msg,updates,reload_info){
return (function (e){
var seq__44075_44440 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44077_44441 = null;
var count__44078_44442 = (0);
var i__44079_44443 = (0);
while(true){
if((i__44079_44443 < count__44078_44442)){
var map__44087_44445 = chunk__44077_44441.cljs$core$IIndexed$_nth$arity$2(null,i__44079_44443);
var map__44087_44446__$1 = cljs.core.__destructure_map(map__44087_44445);
var task_44447 = map__44087_44446__$1;
var fn_str_44448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44087_44446__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44087_44446__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44451 = goog.getObjectByName(fn_str_44448,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44449)].join(''));

(fn_obj_44451.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44451.cljs$core$IFn$_invoke$arity$2(path,new_link_44439) : fn_obj_44451.call(null,path,new_link_44439));


var G__44452 = seq__44075_44440;
var G__44453 = chunk__44077_44441;
var G__44454 = count__44078_44442;
var G__44455 = (i__44079_44443 + (1));
seq__44075_44440 = G__44452;
chunk__44077_44441 = G__44453;
count__44078_44442 = G__44454;
i__44079_44443 = G__44455;
continue;
} else {
var temp__5811__auto___44456__$1 = cljs.core.seq(seq__44075_44440);
if(temp__5811__auto___44456__$1){
var seq__44075_44457__$1 = temp__5811__auto___44456__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44075_44457__$1)){
var c__5565__auto___44459 = cljs.core.chunk_first(seq__44075_44457__$1);
var G__44460 = cljs.core.chunk_rest(seq__44075_44457__$1);
var G__44461 = c__5565__auto___44459;
var G__44462 = cljs.core.count(c__5565__auto___44459);
var G__44463 = (0);
seq__44075_44440 = G__44460;
chunk__44077_44441 = G__44461;
count__44078_44442 = G__44462;
i__44079_44443 = G__44463;
continue;
} else {
var map__44092_44464 = cljs.core.first(seq__44075_44457__$1);
var map__44092_44465__$1 = cljs.core.__destructure_map(map__44092_44464);
var task_44466 = map__44092_44465__$1;
var fn_str_44467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44092_44465__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44092_44465__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44469 = goog.getObjectByName(fn_str_44467,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44468)].join(''));

(fn_obj_44469.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44469.cljs$core$IFn$_invoke$arity$2(path,new_link_44439) : fn_obj_44469.call(null,path,new_link_44439));


var G__44470 = cljs.core.next(seq__44075_44457__$1);
var G__44471 = null;
var G__44472 = (0);
var G__44473 = (0);
seq__44075_44440 = G__44470;
chunk__44077_44441 = G__44471;
count__44078_44442 = G__44472;
i__44079_44443 = G__44473;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44437);
});})(seq__43945_44433,chunk__43949_44434,count__43950_44435,i__43951_44436,seq__43538,chunk__43540,count__43541,i__43542,new_link_44439,path_match_44438,node_44437,path,seq__43538__$1,temp__5811__auto__,map__43534,map__43534__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44438], 0));

goog.dom.insertSiblingAfter(new_link_44439,node_44437);


var G__44475 = seq__43945_44433;
var G__44476 = chunk__43949_44434;
var G__44477 = count__43950_44435;
var G__44478 = (i__43951_44436 + (1));
seq__43945_44433 = G__44475;
chunk__43949_44434 = G__44476;
count__43950_44435 = G__44477;
i__43951_44436 = G__44478;
continue;
} else {
var G__44480 = seq__43945_44433;
var G__44481 = chunk__43949_44434;
var G__44482 = count__43950_44435;
var G__44483 = (i__43951_44436 + (1));
seq__43945_44433 = G__44480;
chunk__43949_44434 = G__44481;
count__43950_44435 = G__44482;
i__43951_44436 = G__44483;
continue;
}
} else {
var G__44484 = seq__43945_44433;
var G__44485 = chunk__43949_44434;
var G__44486 = count__43950_44435;
var G__44487 = (i__43951_44436 + (1));
seq__43945_44433 = G__44484;
chunk__43949_44434 = G__44485;
count__43950_44435 = G__44486;
i__43951_44436 = G__44487;
continue;
}
} else {
var temp__5811__auto___44488__$1 = cljs.core.seq(seq__43945_44433);
if(temp__5811__auto___44488__$1){
var seq__43945_44489__$1 = temp__5811__auto___44488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43945_44489__$1)){
var c__5565__auto___44490 = cljs.core.chunk_first(seq__43945_44489__$1);
var G__44491 = cljs.core.chunk_rest(seq__43945_44489__$1);
var G__44492 = c__5565__auto___44490;
var G__44493 = cljs.core.count(c__5565__auto___44490);
var G__44494 = (0);
seq__43945_44433 = G__44491;
chunk__43949_44434 = G__44492;
count__43950_44435 = G__44493;
i__43951_44436 = G__44494;
continue;
} else {
var node_44495 = cljs.core.first(seq__43945_44489__$1);
if(cljs.core.not(node_44495.shadow$old)){
var path_match_44496 = shadow.cljs.devtools.client.browser.match_paths(node_44495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44496)){
var new_link_44497 = (function (){var G__44100 = node_44495.cloneNode(true);
G__44100.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44496),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44100;
})();
(node_44495.shadow$old = true);

(new_link_44497.onload = ((function (seq__43945_44433,chunk__43949_44434,count__43950_44435,i__43951_44436,seq__43538,chunk__43540,count__43541,i__43542,new_link_44497,path_match_44496,node_44495,seq__43945_44489__$1,temp__5811__auto___44488__$1,path,seq__43538__$1,temp__5811__auto__,map__43534,map__43534__$1,msg,updates,reload_info){
return (function (e){
var seq__44103_44498 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44105_44499 = null;
var count__44106_44500 = (0);
var i__44107_44501 = (0);
while(true){
if((i__44107_44501 < count__44106_44500)){
var map__44117_44502 = chunk__44105_44499.cljs$core$IIndexed$_nth$arity$2(null,i__44107_44501);
var map__44117_44503__$1 = cljs.core.__destructure_map(map__44117_44502);
var task_44504 = map__44117_44503__$1;
var fn_str_44505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44117_44503__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44117_44503__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44508 = goog.getObjectByName(fn_str_44505,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44506)].join(''));

(fn_obj_44508.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44508.cljs$core$IFn$_invoke$arity$2(path,new_link_44497) : fn_obj_44508.call(null,path,new_link_44497));


var G__44512 = seq__44103_44498;
var G__44513 = chunk__44105_44499;
var G__44514 = count__44106_44500;
var G__44515 = (i__44107_44501 + (1));
seq__44103_44498 = G__44512;
chunk__44105_44499 = G__44513;
count__44106_44500 = G__44514;
i__44107_44501 = G__44515;
continue;
} else {
var temp__5811__auto___44516__$2 = cljs.core.seq(seq__44103_44498);
if(temp__5811__auto___44516__$2){
var seq__44103_44517__$1 = temp__5811__auto___44516__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44103_44517__$1)){
var c__5565__auto___44518 = cljs.core.chunk_first(seq__44103_44517__$1);
var G__44519 = cljs.core.chunk_rest(seq__44103_44517__$1);
var G__44520 = c__5565__auto___44518;
var G__44521 = cljs.core.count(c__5565__auto___44518);
var G__44522 = (0);
seq__44103_44498 = G__44519;
chunk__44105_44499 = G__44520;
count__44106_44500 = G__44521;
i__44107_44501 = G__44522;
continue;
} else {
var map__44127_44523 = cljs.core.first(seq__44103_44517__$1);
var map__44127_44524__$1 = cljs.core.__destructure_map(map__44127_44523);
var task_44525 = map__44127_44524__$1;
var fn_str_44526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44127_44524__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44127_44524__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44529 = goog.getObjectByName(fn_str_44526,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44527)].join(''));

(fn_obj_44529.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44529.cljs$core$IFn$_invoke$arity$2(path,new_link_44497) : fn_obj_44529.call(null,path,new_link_44497));


var G__44530 = cljs.core.next(seq__44103_44517__$1);
var G__44531 = null;
var G__44532 = (0);
var G__44533 = (0);
seq__44103_44498 = G__44530;
chunk__44105_44499 = G__44531;
count__44106_44500 = G__44532;
i__44107_44501 = G__44533;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44495);
});})(seq__43945_44433,chunk__43949_44434,count__43950_44435,i__43951_44436,seq__43538,chunk__43540,count__43541,i__43542,new_link_44497,path_match_44496,node_44495,seq__43945_44489__$1,temp__5811__auto___44488__$1,path,seq__43538__$1,temp__5811__auto__,map__43534,map__43534__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44496], 0));

goog.dom.insertSiblingAfter(new_link_44497,node_44495);


var G__44534 = cljs.core.next(seq__43945_44489__$1);
var G__44535 = null;
var G__44536 = (0);
var G__44537 = (0);
seq__43945_44433 = G__44534;
chunk__43949_44434 = G__44535;
count__43950_44435 = G__44536;
i__43951_44436 = G__44537;
continue;
} else {
var G__44538 = cljs.core.next(seq__43945_44489__$1);
var G__44539 = null;
var G__44540 = (0);
var G__44541 = (0);
seq__43945_44433 = G__44538;
chunk__43949_44434 = G__44539;
count__43950_44435 = G__44540;
i__43951_44436 = G__44541;
continue;
}
} else {
var G__44542 = cljs.core.next(seq__43945_44489__$1);
var G__44543 = null;
var G__44544 = (0);
var G__44545 = (0);
seq__43945_44433 = G__44542;
chunk__43949_44434 = G__44543;
count__43950_44435 = G__44544;
i__43951_44436 = G__44545;
continue;
}
}
} else {
}
}
break;
}


var G__44546 = cljs.core.next(seq__43538__$1);
var G__44547 = null;
var G__44548 = (0);
var G__44549 = (0);
seq__43538 = G__44546;
chunk__43540 = G__44547;
count__43541 = G__44548;
i__43542 = G__44549;
continue;
} else {
var G__44550 = cljs.core.next(seq__43538__$1);
var G__44551 = null;
var G__44552 = (0);
var G__44553 = (0);
seq__43538 = G__44550;
chunk__43540 = G__44551;
count__43541 = G__44552;
i__43542 = G__44553;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__44172){
var map__44174 = p__44172;
var map__44174__$1 = cljs.core.__destructure_map(map__44174);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44174__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44176,done,error){
var map__44178 = p__44176;
var map__44178__$1 = cljs.core.__destructure_map(map__44178);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44178__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44181,done,error){
var map__44182 = p__44181;
var map__44182__$1 = cljs.core.__destructure_map(map__44182);
var msg = map__44182__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44182__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44182__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44182__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44184){
var map__44185 = p__44184;
var map__44185__$1 = cljs.core.__destructure_map(map__44185);
var src = map__44185__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44185__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44187 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44187) : done.call(null,G__44187));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44190){
var map__44191 = p__44190;
var map__44191__$1 = cljs.core.__destructure_map(map__44191);
var msg__$1 = map__44191__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44191__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44193){var ex = e44193;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44196){
var map__44198 = p__44196;
var map__44198__$1 = cljs.core.__destructure_map(map__44198);
var env = map__44198__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44198__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44208){
var map__44209 = p__44208;
var map__44209__$1 = cljs.core.__destructure_map(map__44209);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44209__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44209__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__44210){
var map__44212 = p__44210;
var map__44212__$1 = cljs.core.__destructure_map(map__44212);
var svc = map__44212__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
