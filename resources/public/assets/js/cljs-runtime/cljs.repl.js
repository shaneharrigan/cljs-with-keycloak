goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41052){
var map__41053 = p__41052;
var map__41053__$1 = cljs.core.__destructure_map(map__41053);
var m = map__41053__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5811__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5811__auto__)){
var ns = temp__5811__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41054_41504 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41055_41505 = null;
var count__41056_41506 = (0);
var i__41057_41507 = (0);
while(true){
if((i__41057_41507 < count__41056_41506)){
var f_41508 = chunk__41055_41505.cljs$core$IIndexed$_nth$arity$2(null,i__41057_41507);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41508], 0));


var G__41509 = seq__41054_41504;
var G__41510 = chunk__41055_41505;
var G__41511 = count__41056_41506;
var G__41512 = (i__41057_41507 + (1));
seq__41054_41504 = G__41509;
chunk__41055_41505 = G__41510;
count__41056_41506 = G__41511;
i__41057_41507 = G__41512;
continue;
} else {
var temp__5811__auto___41513 = cljs.core.seq(seq__41054_41504);
if(temp__5811__auto___41513){
var seq__41054_41514__$1 = temp__5811__auto___41513;
if(cljs.core.chunked_seq_QMARK_(seq__41054_41514__$1)){
var c__5565__auto___41515 = cljs.core.chunk_first(seq__41054_41514__$1);
var G__41516 = cljs.core.chunk_rest(seq__41054_41514__$1);
var G__41517 = c__5565__auto___41515;
var G__41518 = cljs.core.count(c__5565__auto___41515);
var G__41519 = (0);
seq__41054_41504 = G__41516;
chunk__41055_41505 = G__41517;
count__41056_41506 = G__41518;
i__41057_41507 = G__41519;
continue;
} else {
var f_41520 = cljs.core.first(seq__41054_41514__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41520], 0));


var G__41521 = cljs.core.next(seq__41054_41514__$1);
var G__41522 = null;
var G__41523 = (0);
var G__41524 = (0);
seq__41054_41504 = G__41521;
chunk__41055_41505 = G__41522;
count__41056_41506 = G__41523;
i__41057_41507 = G__41524;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41525 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41525], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41525)))?cljs.core.second(arglists_41525):arglists_41525)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41065_41572 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41066_41573 = null;
var count__41067_41574 = (0);
var i__41068_41575 = (0);
while(true){
if((i__41068_41575 < count__41067_41574)){
var vec__41092_41582 = chunk__41066_41573.cljs$core$IIndexed$_nth$arity$2(null,i__41068_41575);
var name_41583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41092_41582,(0),null);
var map__41095_41584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41092_41582,(1),null);
var map__41095_41585__$1 = cljs.core.__destructure_map(map__41095_41584);
var doc_41586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41095_41585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41095_41585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41583], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41587], 0));

if(cljs.core.truth_(doc_41586)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41586], 0));
} else {
}


var G__41588 = seq__41065_41572;
var G__41589 = chunk__41066_41573;
var G__41590 = count__41067_41574;
var G__41591 = (i__41068_41575 + (1));
seq__41065_41572 = G__41588;
chunk__41066_41573 = G__41589;
count__41067_41574 = G__41590;
i__41068_41575 = G__41591;
continue;
} else {
var temp__5811__auto___41592 = cljs.core.seq(seq__41065_41572);
if(temp__5811__auto___41592){
var seq__41065_41593__$1 = temp__5811__auto___41592;
if(cljs.core.chunked_seq_QMARK_(seq__41065_41593__$1)){
var c__5565__auto___41594 = cljs.core.chunk_first(seq__41065_41593__$1);
var G__41595 = cljs.core.chunk_rest(seq__41065_41593__$1);
var G__41596 = c__5565__auto___41594;
var G__41597 = cljs.core.count(c__5565__auto___41594);
var G__41598 = (0);
seq__41065_41572 = G__41595;
chunk__41066_41573 = G__41596;
count__41067_41574 = G__41597;
i__41068_41575 = G__41598;
continue;
} else {
var vec__41102_41599 = cljs.core.first(seq__41065_41593__$1);
var name_41600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41102_41599,(0),null);
var map__41105_41601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41102_41599,(1),null);
var map__41105_41602__$1 = cljs.core.__destructure_map(map__41105_41601);
var doc_41603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41105_41602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41105_41602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41600], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41604], 0));

if(cljs.core.truth_(doc_41603)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41603], 0));
} else {
}


var G__41605 = cljs.core.next(seq__41065_41593__$1);
var G__41606 = null;
var G__41607 = (0);
var G__41608 = (0);
seq__41065_41572 = G__41605;
chunk__41066_41573 = G__41606;
count__41067_41574 = G__41607;
i__41068_41575 = G__41608;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5811__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5811__auto__)){
var fnspec = temp__5811__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41108 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41109 = null;
var count__41110 = (0);
var i__41111 = (0);
while(true){
if((i__41111 < count__41110)){
var role = chunk__41109.cljs$core$IIndexed$_nth$arity$2(null,i__41111);
var temp__5811__auto___41609__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5811__auto___41609__$1)){
var spec_41610 = temp__5811__auto___41609__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41610)], 0));
} else {
}


var G__41611 = seq__41108;
var G__41612 = chunk__41109;
var G__41613 = count__41110;
var G__41614 = (i__41111 + (1));
seq__41108 = G__41611;
chunk__41109 = G__41612;
count__41110 = G__41613;
i__41111 = G__41614;
continue;
} else {
var temp__5811__auto____$1 = cljs.core.seq(seq__41108);
if(temp__5811__auto____$1){
var seq__41108__$1 = temp__5811__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41108__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__41108__$1);
var G__41615 = cljs.core.chunk_rest(seq__41108__$1);
var G__41616 = c__5565__auto__;
var G__41617 = cljs.core.count(c__5565__auto__);
var G__41618 = (0);
seq__41108 = G__41615;
chunk__41109 = G__41616;
count__41110 = G__41617;
i__41111 = G__41618;
continue;
} else {
var role = cljs.core.first(seq__41108__$1);
var temp__5811__auto___41619__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5811__auto___41619__$2)){
var spec_41620 = temp__5811__auto___41619__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41620)], 0));
} else {
}


var G__41627 = cljs.core.next(seq__41108__$1);
var G__41628 = null;
var G__41629 = (0);
var G__41630 = (0);
seq__41108 = G__41627;
chunk__41109 = G__41628;
count__41110 = G__41629;
i__41111 = G__41630;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5811__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5811__auto__)){
var msg = temp__5811__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5811__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5811__auto__)){
var ed = temp__5811__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41631 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41632 = cljs.core.ex_cause(t);
via = G__41631;
t = G__41632;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5811__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5811__auto__)){
var root_msg = temp__5811__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5811__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5811__auto__)){
var data = temp__5811__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5811__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5811__auto__)){
var phase = temp__5811__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41288 = datafied_throwable;
var map__41288__$1 = cljs.core.__destructure_map(map__41288);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41288__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41288__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41288__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41289 = cljs.core.last(via);
var map__41289__$1 = cljs.core.__destructure_map(map__41289);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41289__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41289__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41289__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41290 = data;
var map__41290__$1 = cljs.core.__destructure_map(map__41290);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41290__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41290__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41290__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41291 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41291__$1 = cljs.core.__destructure_map(map__41291);
var top_data = map__41291__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41291__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41320 = phase;
var G__41320__$1 = (((G__41320 instanceof cljs.core.Keyword))?G__41320.fqn:null);
switch (G__41320__$1) {
case "read-source":
var map__41353 = data;
var map__41353__$1 = cljs.core.__destructure_map(map__41353);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41353__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41353__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41358 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41358__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41358,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41358);
var G__41358__$2 = (cljs.core.truth_((function (){var fexpr__41360 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41360.cljs$core$IFn$_invoke$arity$1 ? fexpr__41360.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41360.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41358__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41358__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41358__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41361 = top_data;
var G__41361__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41361,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41361);
var G__41361__$2 = (cljs.core.truth_((function (){var fexpr__41362 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41362.cljs$core$IFn$_invoke$arity$1 ? fexpr__41362.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41362.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41361__$1);
var G__41361__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41361__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41361__$2);
var G__41361__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41361__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41361__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41361__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41361__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41364 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41364,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41364,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41364,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41364,(3),null);
var G__41367 = top_data;
var G__41367__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41367,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41367);
var G__41367__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41367__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41367__$1);
var G__41367__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41367__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41367__$2);
var G__41367__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41367__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41367__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41367__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41367__$4;
}

break;
case "execution":
var vec__41379 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41379,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41379,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41379,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41379,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41278_SHARP_){
var or__5043__auto__ = (p1__41278_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__41383 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41383.cljs$core$IFn$_invoke$arity$1 ? fexpr__41383.cljs$core$IFn$_invoke$arity$1(p1__41278_SHARP_) : fexpr__41383.call(null,p1__41278_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__41385 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41385__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41385,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41385);
var G__41385__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41385__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41385__$1);
var G__41385__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41385__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41385__$2);
var G__41385__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41385__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41385__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41385__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41385__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41320__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41405){
var map__41406 = p__41405;
var map__41406__$1 = cljs.core.__destructure_map(map__41406);
var triage_data = map__41406__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41406__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41409 = phase;
var G__41409__$1 = (((G__41409 instanceof cljs.core.Keyword))?G__41409.fqn:null);
switch (G__41409__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41411 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41413 = loc;
var G__41414 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41415_41661 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41416_41662 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41417_41663 = true;
var _STAR_print_fn_STAR__temp_val__41418_41664 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41417_41663);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41418_41664);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41395_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41395_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41416_41662);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41415_41661);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41411,G__41412,G__41413,G__41414) : format.call(null,G__41411,G__41412,G__41413,G__41414));

break;
case "macroexpansion":
var G__41422 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41423 = cause_type;
var G__41424 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41425 = loc;
var G__41426 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41422,G__41423,G__41424,G__41425,G__41426) : format.call(null,G__41422,G__41423,G__41424,G__41425,G__41426));

break;
case "compile-syntax-check":
var G__41427 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41428 = cause_type;
var G__41429 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41430 = loc;
var G__41431 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41427,G__41428,G__41429,G__41430,G__41431) : format.call(null,G__41427,G__41428,G__41429,G__41430,G__41431));

break;
case "compilation":
var G__41436 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41437 = cause_type;
var G__41438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41439 = loc;
var G__41440 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41436,G__41437,G__41438,G__41439,G__41440) : format.call(null,G__41436,G__41437,G__41438,G__41439,G__41440));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41441 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41442 = symbol;
var G__41443 = loc;
var G__41444 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41445_41666 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41446_41667 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41447_41668 = true;
var _STAR_print_fn_STAR__temp_val__41448_41669 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41447_41668);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41448_41669);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41399_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41399_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41446_41667);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41445_41666);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41441,G__41442,G__41443,G__41444) : format.call(null,G__41441,G__41442,G__41443,G__41444));
} else {
var G__41466 = "Execution error%s at %s(%s).\n%s\n";
var G__41467 = cause_type;
var G__41468 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41469 = loc;
var G__41470 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41466,G__41467,G__41468,G__41469,G__41470) : format.call(null,G__41466,G__41467,G__41468,G__41469,G__41470));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41409__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
