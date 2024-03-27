goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_41706 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_41706(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_41710 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_41710(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40152 = coll;
var G__40153 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40152,G__40153) : shadow.dom.lazy_native_coll_seq.call(null,G__40152,G__40153));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__40278 = arguments.length;
switch (G__40278) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__40286 = arguments.length;
switch (G__40286) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__40295 = arguments.length;
switch (G__40295) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__40302 = arguments.length;
switch (G__40302) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__40308 = arguments.length;
switch (G__40308) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40322 = arguments.length;
switch (G__40322) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e40331){if((e40331 instanceof Object)){
var e = e40331;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40331;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__40344 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40345 = null;
var count__40346 = (0);
var i__40347 = (0);
while(true){
if((i__40347 < count__40346)){
var el = chunk__40345.cljs$core$IIndexed$_nth$arity$2(null,i__40347);
var handler_41728__$1 = ((function (seq__40344,chunk__40345,count__40346,i__40347,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40344,chunk__40345,count__40346,i__40347,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_41728__$1);


var G__41729 = seq__40344;
var G__41730 = chunk__40345;
var G__41731 = count__40346;
var G__41732 = (i__40347 + (1));
seq__40344 = G__41729;
chunk__40345 = G__41730;
count__40346 = G__41731;
i__40347 = G__41732;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__40344);
if(temp__5811__auto__){
var seq__40344__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40344__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40344__$1);
var G__41733 = cljs.core.chunk_rest(seq__40344__$1);
var G__41734 = c__5565__auto__;
var G__41735 = cljs.core.count(c__5565__auto__);
var G__41736 = (0);
seq__40344 = G__41733;
chunk__40345 = G__41734;
count__40346 = G__41735;
i__40347 = G__41736;
continue;
} else {
var el = cljs.core.first(seq__40344__$1);
var handler_41739__$1 = ((function (seq__40344,chunk__40345,count__40346,i__40347,el,seq__40344__$1,temp__5811__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40344,chunk__40345,count__40346,i__40347,el,seq__40344__$1,temp__5811__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_41739__$1);


var G__41740 = cljs.core.next(seq__40344__$1);
var G__41741 = null;
var G__41742 = (0);
var G__41743 = (0);
seq__40344 = G__41740;
chunk__40345 = G__41741;
count__40346 = G__41742;
i__40347 = G__41743;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__40400 = arguments.length;
switch (G__40400) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40427 = cljs.core.seq(events);
var chunk__40428 = null;
var count__40429 = (0);
var i__40430 = (0);
while(true){
if((i__40430 < count__40429)){
var vec__40457 = chunk__40428.cljs$core$IIndexed$_nth$arity$2(null,i__40430);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41754 = seq__40427;
var G__41755 = chunk__40428;
var G__41756 = count__40429;
var G__41757 = (i__40430 + (1));
seq__40427 = G__41754;
chunk__40428 = G__41755;
count__40429 = G__41756;
i__40430 = G__41757;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__40427);
if(temp__5811__auto__){
var seq__40427__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40427__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40427__$1);
var G__41762 = cljs.core.chunk_rest(seq__40427__$1);
var G__41763 = c__5565__auto__;
var G__41764 = cljs.core.count(c__5565__auto__);
var G__41765 = (0);
seq__40427 = G__41762;
chunk__40428 = G__41763;
count__40429 = G__41764;
i__40430 = G__41765;
continue;
} else {
var vec__40465 = cljs.core.first(seq__40427__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40465,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41766 = cljs.core.next(seq__40427__$1);
var G__41767 = null;
var G__41768 = (0);
var G__41769 = (0);
seq__40427 = G__41766;
chunk__40428 = G__41767;
count__40429 = G__41768;
i__40430 = G__41769;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__40469 = cljs.core.seq(styles);
var chunk__40470 = null;
var count__40471 = (0);
var i__40472 = (0);
while(true){
if((i__40472 < count__40471)){
var vec__40509 = chunk__40470.cljs$core$IIndexed$_nth$arity$2(null,i__40472);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40509,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__41773 = seq__40469;
var G__41774 = chunk__40470;
var G__41775 = count__40471;
var G__41776 = (i__40472 + (1));
seq__40469 = G__41773;
chunk__40470 = G__41774;
count__40471 = G__41775;
i__40472 = G__41776;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__40469);
if(temp__5811__auto__){
var seq__40469__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40469__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40469__$1);
var G__41777 = cljs.core.chunk_rest(seq__40469__$1);
var G__41778 = c__5565__auto__;
var G__41779 = cljs.core.count(c__5565__auto__);
var G__41780 = (0);
seq__40469 = G__41777;
chunk__40470 = G__41778;
count__40471 = G__41779;
i__40472 = G__41780;
continue;
} else {
var vec__40534 = cljs.core.first(seq__40469__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__41781 = cljs.core.next(seq__40469__$1);
var G__41782 = null;
var G__41783 = (0);
var G__41784 = (0);
seq__40469 = G__41781;
chunk__40470 = G__41782;
count__40471 = G__41783;
i__40472 = G__41784;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__40546_41785 = key;
var G__40546_41786__$1 = (((G__40546_41785 instanceof cljs.core.Keyword))?G__40546_41785.fqn:null);
switch (G__40546_41786__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_41789 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_41789,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_41789,"aria-");
}
})())){
el.setAttribute(ks_41789,value);
} else {
(el[ks_41789] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40633){
var map__40634 = p__40633;
var map__40634__$1 = cljs.core.__destructure_map(map__40634);
var props = map__40634__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40634__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40635 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40635,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40635,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40635,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40638 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40638,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40638;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40644 = arguments.length;
switch (G__40644) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5811__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5811__auto__)){
var n = temp__5811__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5811__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5811__auto__)){
var n = temp__5811__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40684){
var vec__40685 = p__40684;
var seq__40686 = cljs.core.seq(vec__40685);
var first__40687 = cljs.core.first(seq__40686);
var seq__40686__$1 = cljs.core.next(seq__40686);
var nn = first__40687;
var first__40687__$1 = cljs.core.first(seq__40686__$1);
var seq__40686__$2 = cljs.core.next(seq__40686__$1);
var np = first__40687__$1;
var nc = seq__40686__$2;
var node = vec__40685;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40692 = nn;
var G__40693 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40692,G__40693) : create_fn.call(null,G__40692,G__40693));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40696 = nn;
var G__40697 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40696,G__40697) : create_fn.call(null,G__40696,G__40697));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40698 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40698,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40698,(1),null);
var seq__40701_41792 = cljs.core.seq(node_children);
var chunk__40702_41793 = null;
var count__40703_41794 = (0);
var i__40704_41795 = (0);
while(true){
if((i__40704_41795 < count__40703_41794)){
var child_struct_41796 = chunk__40702_41793.cljs$core$IIndexed$_nth$arity$2(null,i__40704_41795);
var children_41797 = shadow.dom.dom_node(child_struct_41796);
if(cljs.core.seq_QMARK_(children_41797)){
var seq__40751_41798 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41797));
var chunk__40753_41799 = null;
var count__40754_41800 = (0);
var i__40755_41801 = (0);
while(true){
if((i__40755_41801 < count__40754_41800)){
var child_41802 = chunk__40753_41799.cljs$core$IIndexed$_nth$arity$2(null,i__40755_41801);
if(cljs.core.truth_(child_41802)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41802);


var G__41803 = seq__40751_41798;
var G__41804 = chunk__40753_41799;
var G__41805 = count__40754_41800;
var G__41806 = (i__40755_41801 + (1));
seq__40751_41798 = G__41803;
chunk__40753_41799 = G__41804;
count__40754_41800 = G__41805;
i__40755_41801 = G__41806;
continue;
} else {
var G__41807 = seq__40751_41798;
var G__41808 = chunk__40753_41799;
var G__41809 = count__40754_41800;
var G__41810 = (i__40755_41801 + (1));
seq__40751_41798 = G__41807;
chunk__40753_41799 = G__41808;
count__40754_41800 = G__41809;
i__40755_41801 = G__41810;
continue;
}
} else {
var temp__5811__auto___41811 = cljs.core.seq(seq__40751_41798);
if(temp__5811__auto___41811){
var seq__40751_41812__$1 = temp__5811__auto___41811;
if(cljs.core.chunked_seq_QMARK_(seq__40751_41812__$1)){
var c__5565__auto___41813 = cljs.core.chunk_first(seq__40751_41812__$1);
var G__41814 = cljs.core.chunk_rest(seq__40751_41812__$1);
var G__41815 = c__5565__auto___41813;
var G__41816 = cljs.core.count(c__5565__auto___41813);
var G__41817 = (0);
seq__40751_41798 = G__41814;
chunk__40753_41799 = G__41815;
count__40754_41800 = G__41816;
i__40755_41801 = G__41817;
continue;
} else {
var child_41818 = cljs.core.first(seq__40751_41812__$1);
if(cljs.core.truth_(child_41818)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41818);


var G__41819 = cljs.core.next(seq__40751_41812__$1);
var G__41820 = null;
var G__41821 = (0);
var G__41822 = (0);
seq__40751_41798 = G__41819;
chunk__40753_41799 = G__41820;
count__40754_41800 = G__41821;
i__40755_41801 = G__41822;
continue;
} else {
var G__41823 = cljs.core.next(seq__40751_41812__$1);
var G__41824 = null;
var G__41825 = (0);
var G__41826 = (0);
seq__40751_41798 = G__41823;
chunk__40753_41799 = G__41824;
count__40754_41800 = G__41825;
i__40755_41801 = G__41826;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41797);
}


var G__41827 = seq__40701_41792;
var G__41828 = chunk__40702_41793;
var G__41829 = count__40703_41794;
var G__41830 = (i__40704_41795 + (1));
seq__40701_41792 = G__41827;
chunk__40702_41793 = G__41828;
count__40703_41794 = G__41829;
i__40704_41795 = G__41830;
continue;
} else {
var temp__5811__auto___41831 = cljs.core.seq(seq__40701_41792);
if(temp__5811__auto___41831){
var seq__40701_41832__$1 = temp__5811__auto___41831;
if(cljs.core.chunked_seq_QMARK_(seq__40701_41832__$1)){
var c__5565__auto___41833 = cljs.core.chunk_first(seq__40701_41832__$1);
var G__41834 = cljs.core.chunk_rest(seq__40701_41832__$1);
var G__41835 = c__5565__auto___41833;
var G__41836 = cljs.core.count(c__5565__auto___41833);
var G__41837 = (0);
seq__40701_41792 = G__41834;
chunk__40702_41793 = G__41835;
count__40703_41794 = G__41836;
i__40704_41795 = G__41837;
continue;
} else {
var child_struct_41838 = cljs.core.first(seq__40701_41832__$1);
var children_41839 = shadow.dom.dom_node(child_struct_41838);
if(cljs.core.seq_QMARK_(children_41839)){
var seq__40770_41840 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41839));
var chunk__40772_41841 = null;
var count__40773_41842 = (0);
var i__40774_41843 = (0);
while(true){
if((i__40774_41843 < count__40773_41842)){
var child_41844 = chunk__40772_41841.cljs$core$IIndexed$_nth$arity$2(null,i__40774_41843);
if(cljs.core.truth_(child_41844)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41844);


var G__41845 = seq__40770_41840;
var G__41846 = chunk__40772_41841;
var G__41847 = count__40773_41842;
var G__41848 = (i__40774_41843 + (1));
seq__40770_41840 = G__41845;
chunk__40772_41841 = G__41846;
count__40773_41842 = G__41847;
i__40774_41843 = G__41848;
continue;
} else {
var G__41852 = seq__40770_41840;
var G__41853 = chunk__40772_41841;
var G__41854 = count__40773_41842;
var G__41855 = (i__40774_41843 + (1));
seq__40770_41840 = G__41852;
chunk__40772_41841 = G__41853;
count__40773_41842 = G__41854;
i__40774_41843 = G__41855;
continue;
}
} else {
var temp__5811__auto___41862__$1 = cljs.core.seq(seq__40770_41840);
if(temp__5811__auto___41862__$1){
var seq__40770_41863__$1 = temp__5811__auto___41862__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40770_41863__$1)){
var c__5565__auto___41864 = cljs.core.chunk_first(seq__40770_41863__$1);
var G__41865 = cljs.core.chunk_rest(seq__40770_41863__$1);
var G__41866 = c__5565__auto___41864;
var G__41867 = cljs.core.count(c__5565__auto___41864);
var G__41868 = (0);
seq__40770_41840 = G__41865;
chunk__40772_41841 = G__41866;
count__40773_41842 = G__41867;
i__40774_41843 = G__41868;
continue;
} else {
var child_41869 = cljs.core.first(seq__40770_41863__$1);
if(cljs.core.truth_(child_41869)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41869);


var G__41870 = cljs.core.next(seq__40770_41863__$1);
var G__41871 = null;
var G__41872 = (0);
var G__41873 = (0);
seq__40770_41840 = G__41870;
chunk__40772_41841 = G__41871;
count__40773_41842 = G__41872;
i__40774_41843 = G__41873;
continue;
} else {
var G__41874 = cljs.core.next(seq__40770_41863__$1);
var G__41875 = null;
var G__41876 = (0);
var G__41877 = (0);
seq__40770_41840 = G__41874;
chunk__40772_41841 = G__41875;
count__40773_41842 = G__41876;
i__40774_41843 = G__41877;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41839);
}


var G__41878 = cljs.core.next(seq__40701_41832__$1);
var G__41879 = null;
var G__41880 = (0);
var G__41881 = (0);
seq__40701_41792 = G__41878;
chunk__40702_41793 = G__41879;
count__40703_41794 = G__41880;
i__40704_41795 = G__41881;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40810 = cljs.core.seq(node);
var chunk__40811 = null;
var count__40812 = (0);
var i__40813 = (0);
while(true){
if((i__40813 < count__40812)){
var n = chunk__40811.cljs$core$IIndexed$_nth$arity$2(null,i__40813);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41888 = seq__40810;
var G__41889 = chunk__40811;
var G__41890 = count__40812;
var G__41891 = (i__40813 + (1));
seq__40810 = G__41888;
chunk__40811 = G__41889;
count__40812 = G__41890;
i__40813 = G__41891;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__40810);
if(temp__5811__auto__){
var seq__40810__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40810__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40810__$1);
var G__41892 = cljs.core.chunk_rest(seq__40810__$1);
var G__41893 = c__5565__auto__;
var G__41894 = cljs.core.count(c__5565__auto__);
var G__41895 = (0);
seq__40810 = G__41892;
chunk__40811 = G__41893;
count__40812 = G__41894;
i__40813 = G__41895;
continue;
} else {
var n = cljs.core.first(seq__40810__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41896 = cljs.core.next(seq__40810__$1);
var G__41897 = null;
var G__41898 = (0);
var G__41899 = (0);
seq__40810 = G__41896;
chunk__40811 = G__41897;
count__40812 = G__41898;
i__40813 = G__41899;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40830 = arguments.length;
switch (G__40830) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40841 = arguments.length;
switch (G__40841) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40888 = arguments.length;
switch (G__40888) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41905 = arguments.length;
var i__5767__auto___41906 = (0);
while(true){
if((i__5767__auto___41906 < len__5766__auto___41905)){
args__5772__auto__.push((arguments[i__5767__auto___41906]));

var G__41907 = (i__5767__auto___41906 + (1));
i__5767__auto___41906 = G__41907;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40920_41908 = cljs.core.seq(nodes);
var chunk__40921_41909 = null;
var count__40922_41910 = (0);
var i__40923_41911 = (0);
while(true){
if((i__40923_41911 < count__40922_41910)){
var node_41912 = chunk__40921_41909.cljs$core$IIndexed$_nth$arity$2(null,i__40923_41911);
fragment.appendChild(shadow.dom._to_dom(node_41912));


var G__41913 = seq__40920_41908;
var G__41914 = chunk__40921_41909;
var G__41915 = count__40922_41910;
var G__41916 = (i__40923_41911 + (1));
seq__40920_41908 = G__41913;
chunk__40921_41909 = G__41914;
count__40922_41910 = G__41915;
i__40923_41911 = G__41916;
continue;
} else {
var temp__5811__auto___41917 = cljs.core.seq(seq__40920_41908);
if(temp__5811__auto___41917){
var seq__40920_41918__$1 = temp__5811__auto___41917;
if(cljs.core.chunked_seq_QMARK_(seq__40920_41918__$1)){
var c__5565__auto___41919 = cljs.core.chunk_first(seq__40920_41918__$1);
var G__41920 = cljs.core.chunk_rest(seq__40920_41918__$1);
var G__41921 = c__5565__auto___41919;
var G__41922 = cljs.core.count(c__5565__auto___41919);
var G__41923 = (0);
seq__40920_41908 = G__41920;
chunk__40921_41909 = G__41921;
count__40922_41910 = G__41922;
i__40923_41911 = G__41923;
continue;
} else {
var node_41924 = cljs.core.first(seq__40920_41918__$1);
fragment.appendChild(shadow.dom._to_dom(node_41924));


var G__41925 = cljs.core.next(seq__40920_41918__$1);
var G__41926 = null;
var G__41927 = (0);
var G__41928 = (0);
seq__40920_41908 = G__41925;
chunk__40921_41909 = G__41926;
count__40922_41910 = G__41927;
i__40923_41911 = G__41928;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40911){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40911));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40942_41929 = cljs.core.seq(scripts);
var chunk__40943_41930 = null;
var count__40944_41931 = (0);
var i__40945_41932 = (0);
while(true){
if((i__40945_41932 < count__40944_41931)){
var vec__40955_41933 = chunk__40943_41930.cljs$core$IIndexed$_nth$arity$2(null,i__40945_41932);
var script_tag_41934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40955_41933,(0),null);
var script_body_41935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40955_41933,(1),null);
eval(script_body_41935);


var G__41936 = seq__40942_41929;
var G__41937 = chunk__40943_41930;
var G__41938 = count__40944_41931;
var G__41939 = (i__40945_41932 + (1));
seq__40942_41929 = G__41936;
chunk__40943_41930 = G__41937;
count__40944_41931 = G__41938;
i__40945_41932 = G__41939;
continue;
} else {
var temp__5811__auto___41940 = cljs.core.seq(seq__40942_41929);
if(temp__5811__auto___41940){
var seq__40942_41941__$1 = temp__5811__auto___41940;
if(cljs.core.chunked_seq_QMARK_(seq__40942_41941__$1)){
var c__5565__auto___41942 = cljs.core.chunk_first(seq__40942_41941__$1);
var G__41943 = cljs.core.chunk_rest(seq__40942_41941__$1);
var G__41944 = c__5565__auto___41942;
var G__41945 = cljs.core.count(c__5565__auto___41942);
var G__41946 = (0);
seq__40942_41929 = G__41943;
chunk__40943_41930 = G__41944;
count__40944_41931 = G__41945;
i__40945_41932 = G__41946;
continue;
} else {
var vec__40963_41947 = cljs.core.first(seq__40942_41941__$1);
var script_tag_41948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40963_41947,(0),null);
var script_body_41949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40963_41947,(1),null);
eval(script_body_41949);


var G__41981 = cljs.core.next(seq__40942_41941__$1);
var G__41982 = null;
var G__41983 = (0);
var G__41984 = (0);
seq__40942_41929 = G__41981;
chunk__40943_41930 = G__41982;
count__40944_41931 = G__41983;
i__40945_41932 = G__41984;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40967){
var vec__40969 = p__40967;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40983 = arguments.length;
switch (G__40983) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40995 = cljs.core.seq(style_keys);
var chunk__40996 = null;
var count__40997 = (0);
var i__40998 = (0);
while(true){
if((i__40998 < count__40997)){
var it = chunk__40996.cljs$core$IIndexed$_nth$arity$2(null,i__40998);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41994 = seq__40995;
var G__41995 = chunk__40996;
var G__41996 = count__40997;
var G__41997 = (i__40998 + (1));
seq__40995 = G__41994;
chunk__40996 = G__41995;
count__40997 = G__41996;
i__40998 = G__41997;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__40995);
if(temp__5811__auto__){
var seq__40995__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40995__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40995__$1);
var G__42001 = cljs.core.chunk_rest(seq__40995__$1);
var G__42002 = c__5565__auto__;
var G__42003 = cljs.core.count(c__5565__auto__);
var G__42004 = (0);
seq__40995 = G__42001;
chunk__40996 = G__42002;
count__40997 = G__42003;
i__40998 = G__42004;
continue;
} else {
var it = cljs.core.first(seq__40995__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42017 = cljs.core.next(seq__40995__$1);
var G__42018 = null;
var G__42019 = (0);
var G__42020 = (0);
seq__40995 = G__42017;
chunk__40996 = G__42018;
count__40997 = G__42019;
i__40998 = G__42020;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k41014,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__41037 = k41014;
var G__41037__$1 = (((G__41037 instanceof cljs.core.Keyword))?G__41037.fqn:null);
switch (G__41037__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41014,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__41038){
var vec__41039 = p__41038;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41013){
var self__ = this;
var G__41013__$1 = this;
return (new cljs.core.RecordIter((0),G__41013__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41015,other41016){
var self__ = this;
var this41015__$1 = this;
return (((!((other41016 == null)))) && ((((this41015__$1.constructor === other41016.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41015__$1.x,other41016.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41015__$1.y,other41016.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41015__$1.__extmap,other41016.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k41014){
var self__ = this;
var this__5347__auto____$1 = this;
var G__41048 = k41014;
var G__41048__$1 = (((G__41048 instanceof cljs.core.Keyword))?G__41048.fqn:null);
switch (G__41048__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41014);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__41013){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__41049 = cljs.core.keyword_identical_QMARK_;
var expr__41050 = k__5349__auto__;
if(cljs.core.truth_((pred__41049.cljs$core$IFn$_invoke$arity$2 ? pred__41049.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41050) : pred__41049.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41050)))){
return (new shadow.dom.Coordinate(G__41013,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41049.cljs$core$IFn$_invoke$arity$2 ? pred__41049.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41050) : pred__41049.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41050)))){
return (new shadow.dom.Coordinate(self__.x,G__41013,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__41013),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__41013){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41013,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41026){
var extmap__5382__auto__ = (function (){var G__41082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41026,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41026)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41082);
} else {
return G__41082;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41026),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41026),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k41099,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__41123 = k41099;
var G__41123__$1 = (((G__41123 instanceof cljs.core.Keyword))?G__41123.fqn:null);
switch (G__41123__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41099,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__41126){
var vec__41141 = p__41126;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41141,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41141,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41098){
var self__ = this;
var G__41098__$1 = this;
return (new cljs.core.RecordIter((0),G__41098__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41100,other41101){
var self__ = this;
var this41100__$1 = this;
return (((!((other41101 == null)))) && ((((this41100__$1.constructor === other41101.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41100__$1.w,other41101.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41100__$1.h,other41101.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41100__$1.__extmap,other41101.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k41099){
var self__ = this;
var this__5347__auto____$1 = this;
var G__41228 = k41099;
var G__41228__$1 = (((G__41228 instanceof cljs.core.Keyword))?G__41228.fqn:null);
switch (G__41228__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41099);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__41098){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__41245 = cljs.core.keyword_identical_QMARK_;
var expr__41246 = k__5349__auto__;
if(cljs.core.truth_((pred__41245.cljs$core$IFn$_invoke$arity$2 ? pred__41245.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41246) : pred__41245.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41246)))){
return (new shadow.dom.Size(G__41098,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41245.cljs$core$IFn$_invoke$arity$2 ? pred__41245.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41246) : pred__41245.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41246)))){
return (new shadow.dom.Size(self__.w,G__41098,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__41098),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__41098){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41098,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41115){
var extmap__5382__auto__ = (function (){var G__41371 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41115,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41115)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41371);
} else {
return G__41371;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41115),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41115),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__42071 = (i + (1));
var G__42072 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42071;
ret = G__42072;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41400){
var vec__41401 = p__41400;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41401,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41408 = arguments.length;
switch (G__41408) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5809__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5809__auto__)){
var child = temp__5809__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__42077 = ps;
var G__42078 = (i + (1));
el__$1 = G__42077;
i = G__42078;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41528 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41528,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41528,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41528,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41532_42083 = cljs.core.seq(props);
var chunk__41533_42084 = null;
var count__41534_42085 = (0);
var i__41535_42086 = (0);
while(true){
if((i__41535_42086 < count__41534_42085)){
var vec__41547_42087 = chunk__41533_42084.cljs$core$IIndexed$_nth$arity$2(null,i__41535_42086);
var k_42088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41547_42087,(0),null);
var v_42089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41547_42087,(1),null);
el.setAttributeNS((function (){var temp__5811__auto__ = cljs.core.namespace(k_42088);
if(cljs.core.truth_(temp__5811__auto__)){
var ns = temp__5811__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42088),v_42089);


var G__42090 = seq__41532_42083;
var G__42091 = chunk__41533_42084;
var G__42092 = count__41534_42085;
var G__42093 = (i__41535_42086 + (1));
seq__41532_42083 = G__42090;
chunk__41533_42084 = G__42091;
count__41534_42085 = G__42092;
i__41535_42086 = G__42093;
continue;
} else {
var temp__5811__auto___42094 = cljs.core.seq(seq__41532_42083);
if(temp__5811__auto___42094){
var seq__41532_42095__$1 = temp__5811__auto___42094;
if(cljs.core.chunked_seq_QMARK_(seq__41532_42095__$1)){
var c__5565__auto___42096 = cljs.core.chunk_first(seq__41532_42095__$1);
var G__42097 = cljs.core.chunk_rest(seq__41532_42095__$1);
var G__42098 = c__5565__auto___42096;
var G__42099 = cljs.core.count(c__5565__auto___42096);
var G__42100 = (0);
seq__41532_42083 = G__42097;
chunk__41533_42084 = G__42098;
count__41534_42085 = G__42099;
i__41535_42086 = G__42100;
continue;
} else {
var vec__41550_42101 = cljs.core.first(seq__41532_42095__$1);
var k_42102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42101,(0),null);
var v_42103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41550_42101,(1),null);
el.setAttributeNS((function (){var temp__5811__auto____$1 = cljs.core.namespace(k_42102);
if(cljs.core.truth_(temp__5811__auto____$1)){
var ns = temp__5811__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42102),v_42103);


var G__42104 = cljs.core.next(seq__41532_42095__$1);
var G__42105 = null;
var G__42106 = (0);
var G__42107 = (0);
seq__41532_42083 = G__42104;
chunk__41533_42084 = G__42105;
count__41534_42085 = G__42106;
i__41535_42086 = G__42107;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__41563 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41563,(1),null);
var seq__41566_42109 = cljs.core.seq(node_children);
var chunk__41568_42110 = null;
var count__41569_42111 = (0);
var i__41570_42112 = (0);
while(true){
if((i__41570_42112 < count__41569_42111)){
var child_struct_42113 = chunk__41568_42110.cljs$core$IIndexed$_nth$arity$2(null,i__41570_42112);
if((!((child_struct_42113 == null)))){
if(typeof child_struct_42113 === 'string'){
var text_42114 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42114),child_struct_42113].join(''));
} else {
var children_42117 = shadow.dom.svg_node(child_struct_42113);
if(cljs.core.seq_QMARK_(children_42117)){
var seq__41633_42118 = cljs.core.seq(children_42117);
var chunk__41635_42119 = null;
var count__41636_42120 = (0);
var i__41637_42121 = (0);
while(true){
if((i__41637_42121 < count__41636_42120)){
var child_42122 = chunk__41635_42119.cljs$core$IIndexed$_nth$arity$2(null,i__41637_42121);
if(cljs.core.truth_(child_42122)){
node.appendChild(child_42122);


var G__42123 = seq__41633_42118;
var G__42124 = chunk__41635_42119;
var G__42125 = count__41636_42120;
var G__42126 = (i__41637_42121 + (1));
seq__41633_42118 = G__42123;
chunk__41635_42119 = G__42124;
count__41636_42120 = G__42125;
i__41637_42121 = G__42126;
continue;
} else {
var G__42127 = seq__41633_42118;
var G__42128 = chunk__41635_42119;
var G__42129 = count__41636_42120;
var G__42130 = (i__41637_42121 + (1));
seq__41633_42118 = G__42127;
chunk__41635_42119 = G__42128;
count__41636_42120 = G__42129;
i__41637_42121 = G__42130;
continue;
}
} else {
var temp__5811__auto___42131 = cljs.core.seq(seq__41633_42118);
if(temp__5811__auto___42131){
var seq__41633_42132__$1 = temp__5811__auto___42131;
if(cljs.core.chunked_seq_QMARK_(seq__41633_42132__$1)){
var c__5565__auto___42133 = cljs.core.chunk_first(seq__41633_42132__$1);
var G__42134 = cljs.core.chunk_rest(seq__41633_42132__$1);
var G__42135 = c__5565__auto___42133;
var G__42136 = cljs.core.count(c__5565__auto___42133);
var G__42137 = (0);
seq__41633_42118 = G__42134;
chunk__41635_42119 = G__42135;
count__41636_42120 = G__42136;
i__41637_42121 = G__42137;
continue;
} else {
var child_42138 = cljs.core.first(seq__41633_42132__$1);
if(cljs.core.truth_(child_42138)){
node.appendChild(child_42138);


var G__42139 = cljs.core.next(seq__41633_42132__$1);
var G__42140 = null;
var G__42141 = (0);
var G__42142 = (0);
seq__41633_42118 = G__42139;
chunk__41635_42119 = G__42140;
count__41636_42120 = G__42141;
i__41637_42121 = G__42142;
continue;
} else {
var G__42143 = cljs.core.next(seq__41633_42132__$1);
var G__42144 = null;
var G__42145 = (0);
var G__42146 = (0);
seq__41633_42118 = G__42143;
chunk__41635_42119 = G__42144;
count__41636_42120 = G__42145;
i__41637_42121 = G__42146;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42117);
}
}


var G__42147 = seq__41566_42109;
var G__42148 = chunk__41568_42110;
var G__42149 = count__41569_42111;
var G__42150 = (i__41570_42112 + (1));
seq__41566_42109 = G__42147;
chunk__41568_42110 = G__42148;
count__41569_42111 = G__42149;
i__41570_42112 = G__42150;
continue;
} else {
var G__42151 = seq__41566_42109;
var G__42152 = chunk__41568_42110;
var G__42153 = count__41569_42111;
var G__42154 = (i__41570_42112 + (1));
seq__41566_42109 = G__42151;
chunk__41568_42110 = G__42152;
count__41569_42111 = G__42153;
i__41570_42112 = G__42154;
continue;
}
} else {
var temp__5811__auto___42155 = cljs.core.seq(seq__41566_42109);
if(temp__5811__auto___42155){
var seq__41566_42156__$1 = temp__5811__auto___42155;
if(cljs.core.chunked_seq_QMARK_(seq__41566_42156__$1)){
var c__5565__auto___42157 = cljs.core.chunk_first(seq__41566_42156__$1);
var G__42158 = cljs.core.chunk_rest(seq__41566_42156__$1);
var G__42159 = c__5565__auto___42157;
var G__42160 = cljs.core.count(c__5565__auto___42157);
var G__42161 = (0);
seq__41566_42109 = G__42158;
chunk__41568_42110 = G__42159;
count__41569_42111 = G__42160;
i__41570_42112 = G__42161;
continue;
} else {
var child_struct_42162 = cljs.core.first(seq__41566_42156__$1);
if((!((child_struct_42162 == null)))){
if(typeof child_struct_42162 === 'string'){
var text_42163 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42163),child_struct_42162].join(''));
} else {
var children_42164 = shadow.dom.svg_node(child_struct_42162);
if(cljs.core.seq_QMARK_(children_42164)){
var seq__41646_42165 = cljs.core.seq(children_42164);
var chunk__41648_42166 = null;
var count__41649_42167 = (0);
var i__41650_42168 = (0);
while(true){
if((i__41650_42168 < count__41649_42167)){
var child_42169 = chunk__41648_42166.cljs$core$IIndexed$_nth$arity$2(null,i__41650_42168);
if(cljs.core.truth_(child_42169)){
node.appendChild(child_42169);


var G__42170 = seq__41646_42165;
var G__42171 = chunk__41648_42166;
var G__42172 = count__41649_42167;
var G__42173 = (i__41650_42168 + (1));
seq__41646_42165 = G__42170;
chunk__41648_42166 = G__42171;
count__41649_42167 = G__42172;
i__41650_42168 = G__42173;
continue;
} else {
var G__42174 = seq__41646_42165;
var G__42175 = chunk__41648_42166;
var G__42176 = count__41649_42167;
var G__42177 = (i__41650_42168 + (1));
seq__41646_42165 = G__42174;
chunk__41648_42166 = G__42175;
count__41649_42167 = G__42176;
i__41650_42168 = G__42177;
continue;
}
} else {
var temp__5811__auto___42178__$1 = cljs.core.seq(seq__41646_42165);
if(temp__5811__auto___42178__$1){
var seq__41646_42179__$1 = temp__5811__auto___42178__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41646_42179__$1)){
var c__5565__auto___42180 = cljs.core.chunk_first(seq__41646_42179__$1);
var G__42181 = cljs.core.chunk_rest(seq__41646_42179__$1);
var G__42182 = c__5565__auto___42180;
var G__42183 = cljs.core.count(c__5565__auto___42180);
var G__42184 = (0);
seq__41646_42165 = G__42181;
chunk__41648_42166 = G__42182;
count__41649_42167 = G__42183;
i__41650_42168 = G__42184;
continue;
} else {
var child_42185 = cljs.core.first(seq__41646_42179__$1);
if(cljs.core.truth_(child_42185)){
node.appendChild(child_42185);


var G__42186 = cljs.core.next(seq__41646_42179__$1);
var G__42187 = null;
var G__42188 = (0);
var G__42189 = (0);
seq__41646_42165 = G__42186;
chunk__41648_42166 = G__42187;
count__41649_42167 = G__42188;
i__41650_42168 = G__42189;
continue;
} else {
var G__42190 = cljs.core.next(seq__41646_42179__$1);
var G__42191 = null;
var G__42192 = (0);
var G__42193 = (0);
seq__41646_42165 = G__42190;
chunk__41648_42166 = G__42191;
count__41649_42167 = G__42192;
i__41650_42168 = G__42193;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42164);
}
}


var G__42194 = cljs.core.next(seq__41566_42156__$1);
var G__42195 = null;
var G__42196 = (0);
var G__42197 = (0);
seq__41566_42109 = G__42194;
chunk__41568_42110 = G__42195;
count__41569_42111 = G__42196;
i__41570_42112 = G__42197;
continue;
} else {
var G__42198 = cljs.core.next(seq__41566_42156__$1);
var G__42199 = null;
var G__42200 = (0);
var G__42201 = (0);
seq__41566_42109 = G__42198;
chunk__41568_42110 = G__42199;
count__41569_42111 = G__42200;
i__41570_42112 = G__42201;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42202 = arguments.length;
var i__5767__auto___42203 = (0);
while(true){
if((i__5767__auto___42203 < len__5766__auto___42202)){
args__5772__auto__.push((arguments[i__5767__auto___42203]));

var G__42205 = (i__5767__auto___42203 + (1));
i__5767__auto___42203 = G__42205;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq41679){
var G__41680 = cljs.core.first(seq41679);
var seq41679__$1 = cljs.core.next(seq41679);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41680,seq41679__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__41682 = arguments.length;
switch (G__41682) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__36541__auto___42210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_41688){
var state_val_41689 = (state_41688[(1)]);
if((state_val_41689 === (1))){
var state_41688__$1 = state_41688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41688__$1,(2),once_or_cleanup);
} else {
if((state_val_41689 === (2))){
var inst_41685 = (state_41688[(2)]);
var inst_41686 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_41688__$1 = (function (){var statearr_41690 = state_41688;
(statearr_41690[(7)] = inst_41685);

return statearr_41690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41688__$1,inst_41686);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36303__auto__ = null;
var shadow$dom$state_machine__36303__auto____0 = (function (){
var statearr_41691 = [null,null,null,null,null,null,null,null];
(statearr_41691[(0)] = shadow$dom$state_machine__36303__auto__);

(statearr_41691[(1)] = (1));

return statearr_41691;
});
var shadow$dom$state_machine__36303__auto____1 = (function (state_41688){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_41688);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e41692){var ex__36306__auto__ = e41692;
var statearr_41693_42211 = state_41688;
(statearr_41693_42211[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_41688[(4)]))){
var statearr_41694_42212 = state_41688;
(statearr_41694_42212[(1)] = cljs.core.first((state_41688[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42213 = state_41688;
state_41688 = G__42213;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
shadow$dom$state_machine__36303__auto__ = function(state_41688){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36303__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36303__auto____1.call(this,state_41688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36303__auto____0;
shadow$dom$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36303__auto____1;
return shadow$dom$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_41695 = f__36542__auto__();
(statearr_41695[(6)] = c__36541__auto___42210);

return statearr_41695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
