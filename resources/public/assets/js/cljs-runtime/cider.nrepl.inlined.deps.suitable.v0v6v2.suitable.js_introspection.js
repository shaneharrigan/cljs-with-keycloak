goog.provide('cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection');
goog.scope(function(){
  cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__45234 = Object.getPrototypeOf(obj__$1);
var G__45235 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__45234;
protos = G__45235;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$property_names_and_types(var_args){
var G__45221 = arguments.length;
switch (G__45221) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var iter__5520__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__45222(s__45223){
return (new cljs.core.LazySeq(null,(function (){
var s__45223__$1 = s__45223;
while(true){
var temp__5811__auto__ = cljs.core.seq(s__45223__$1);
if(temp__5811__auto__){
var xs__6369__auto__ = temp__5811__auto__;
var vec__45228 = cljs.core.first(xs__6369__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(0),null);
var map__45231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(1),null);
var map__45231__$1 = cljs.core.__destructure_map(map__45231);
var _obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45231__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45231__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5516__auto__ = ((function (s__45223__$1,vec__45228,i,map__45231,map__45231__$1,_obj,props,xs__6369__auto__,temp__5811__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__45222_$_iter__45224(s__45225){
return (new cljs.core.LazySeq(null,((function (s__45223__$1,vec__45228,i,map__45231,map__45231__$1,_obj,props,xs__6369__auto__,temp__5811__auto__,seen){
return (function (){
var s__45225__$1 = s__45225;
while(true){
var temp__5811__auto____$1 = cljs.core.seq(s__45225__$1);
if(temp__5811__auto____$1){
var s__45225__$2 = temp__5811__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45225__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__45225__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__45227 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__45226 = (0);
while(true){
if((i__45226 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__45226);
if((function (){var and__5041__auto__ = cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seen),key));
if(and__5041__auto__){
var and__5041__auto____$1 = (cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[object String]",Object.prototype.toString.call(js_obj));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return Array.isArray(js_obj);
}
})())?cljs.core.not(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key),"enumerable")):true);
if(and__5041__auto____$1){
return ((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})()){
cljs.core.chunk_append(b__45227,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key);
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5809__auto__ = (function (){var or__5043__auto__ = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5809__auto__)){
var value = temp__5809__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e45232){if((e45232 instanceof Error)){
var _e = e45232;
return "var";
} else {
throw e45232;

}
}})()], null);
})());

var G__45237 = (i__45226 + (1));
i__45226 = G__45237;
continue;
} else {
var G__45238 = (i__45226 + (1));
i__45226 = G__45238;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45227),cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__45222_$_iter__45224(cljs.core.chunk_rest(s__45225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45227),null);
}
} else {
var key = cljs.core.first(s__45225__$2);
if((function (){var and__5041__auto__ = cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seen),key));
if(and__5041__auto__){
var and__5041__auto____$1 = (cljs.core.truth_((function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[object String]",Object.prototype.toString.call(js_obj));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return Array.isArray(js_obj);
}
})())?cljs.core.not(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key),"enumerable")):true);
if(and__5041__auto____$1){
return ((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})()){
return cljs.core.cons((function (){var prop = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(props,key);
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5809__auto__ = (function (){var or__5043__auto__ = cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5809__auto__)){
var value = temp__5809__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e45233){if((e45233 instanceof Error)){
var _e = e45233;
return "var";
} else {
throw e45233;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__45222_$_iter__45224(cljs.core.rest(s__45225__$2)));
} else {
var G__45239 = cljs.core.rest(s__45225__$2);
s__45225__$1 = G__45239;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__45223__$1,vec__45228,i,map__45231,map__45231__$1,_obj,props,xs__6369__auto__,temp__5811__auto__,seen))
,null,null));
});})(s__45223__$1,vec__45228,i,map__45231,map__45231__$1,_obj,props,xs__6369__auto__,temp__5811__auto__,seen))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.js_keys(props)));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,cider$nrepl$inlined$deps$suitable$v0v6v2$suitable$js_introspection$iter__45222(cljs.core.rest(s__45223__$1)));
} else {
var G__45240 = cljs.core.rest(s__45223__$1);
s__45223__$1 = G__45240;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined.deps.suitable.v0v6v2.suitable.js_introspection.js.map
