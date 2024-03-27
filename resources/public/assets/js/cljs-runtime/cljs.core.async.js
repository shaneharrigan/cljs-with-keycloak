goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36636 = (function (f,blockable,meta36637){
this.f = f;
this.blockable = blockable;
this.meta36637 = meta36637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36638,meta36637__$1){
var self__ = this;
var _36638__$1 = this;
return (new cljs.core.async.t_cljs$core$async36636(self__.f,self__.blockable,meta36637__$1));
}));

(cljs.core.async.t_cljs$core$async36636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36638){
var self__ = this;
var _36638__$1 = this;
return self__.meta36637;
}));

(cljs.core.async.t_cljs$core$async36636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36637","meta36637",1195665240,null)], null);
}));

(cljs.core.async.t_cljs$core$async36636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36636");

(cljs.core.async.t_cljs$core$async36636.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36636.
 */
cljs.core.async.__GT_t_cljs$core$async36636 = (function cljs$core$async$__GT_t_cljs$core$async36636(f,blockable,meta36637){
return (new cljs.core.async.t_cljs$core$async36636(f,blockable,meta36637));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36632 = arguments.length;
switch (G__36632) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async36636(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36644 = arguments.length;
switch (G__36644) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36686 = arguments.length;
switch (G__36686) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36719 = arguments.length;
switch (G__36719) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40091 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40091) : fn1.call(null,val_40091));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40091) : fn1.call(null,val_40091));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36737 = arguments.length;
switch (G__36737) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5809__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5809__auto__)){
var ret = temp__5809__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5809__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5809__auto__)){
var retb = temp__5809__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___40105 = n;
var x_40106 = (0);
while(true){
if((x_40106 < n__5633__auto___40105)){
(a[x_40106] = x_40106);

var G__40107 = (x_40106 + (1));
x_40106 = G__40107;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36775 = (function (flag,meta36776){
this.flag = flag;
this.meta36776 = meta36776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36777,meta36776__$1){
var self__ = this;
var _36777__$1 = this;
return (new cljs.core.async.t_cljs$core$async36775(self__.flag,meta36776__$1));
}));

(cljs.core.async.t_cljs$core$async36775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36777){
var self__ = this;
var _36777__$1 = this;
return self__.meta36776;
}));

(cljs.core.async.t_cljs$core$async36775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36776","meta36776",-1773463858,null)], null);
}));

(cljs.core.async.t_cljs$core$async36775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36775");

(cljs.core.async.t_cljs$core$async36775.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36775.
 */
cljs.core.async.__GT_t_cljs$core$async36775 = (function cljs$core$async$__GT_t_cljs$core$async36775(flag,meta36776){
return (new cljs.core.async.t_cljs$core$async36775(flag,meta36776));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async36775(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36781 = (function (flag,cb,meta36782){
this.flag = flag;
this.cb = cb;
this.meta36782 = meta36782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36783,meta36782__$1){
var self__ = this;
var _36783__$1 = this;
return (new cljs.core.async.t_cljs$core$async36781(self__.flag,self__.cb,meta36782__$1));
}));

(cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36783){
var self__ = this;
var _36783__$1 = this;
return self__.meta36782;
}));

(cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36782","meta36782",1756293334,null)], null);
}));

(cljs.core.async.t_cljs$core$async36781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36781");

(cljs.core.async.t_cljs$core$async36781.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36781.
 */
cljs.core.async.__GT_t_cljs$core$async36781 = (function cljs$core$async$__GT_t_cljs$core$async36781(flag,cb,meta36782){
return (new cljs.core.async.t_cljs$core$async36781(flag,cb,meta36782));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async36781(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36792_SHARP_){
var G__36870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36792_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36870) : fret.call(null,G__36870));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36793_SHARP_){
var G__36871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36793_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36871) : fret.call(null,G__36871));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40127 = (i + (1));
i = G__40127;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5811__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5811__auto__)){
var got = temp__5811__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40129 = arguments.length;
var i__5767__auto___40130 = (0);
while(true){
if((i__5767__auto___40130 < len__5766__auto___40129)){
args__5772__auto__.push((arguments[i__5767__auto___40130]));

var G__40131 = (i__5767__auto___40130 + (1));
i__5767__auto___40130 = G__40131;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36897){
var map__36898 = p__36897;
var map__36898__$1 = cljs.core.__destructure_map(map__36898);
var opts = map__36898__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36893){
var G__36894 = cljs.core.first(seq36893);
var seq36893__$1 = cljs.core.next(seq36893);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36894,seq36893__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36917 = arguments.length;
switch (G__36917) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36541__auto___40133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37177){
var state_val_37178 = (state_37177[(1)]);
if((state_val_37178 === (7))){
var inst_37169 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
var statearr_37182_40134 = state_37177__$1;
(statearr_37182_40134[(2)] = inst_37169);

(statearr_37182_40134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (1))){
var state_37177__$1 = state_37177;
var statearr_37183_40135 = state_37177__$1;
(statearr_37183_40135[(2)] = null);

(statearr_37183_40135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (4))){
var inst_37148 = (state_37177[(7)]);
var inst_37148__$1 = (state_37177[(2)]);
var inst_37153 = (inst_37148__$1 == null);
var state_37177__$1 = (function (){var statearr_37189 = state_37177;
(statearr_37189[(7)] = inst_37148__$1);

return statearr_37189;
})();
if(cljs.core.truth_(inst_37153)){
var statearr_37190_40136 = state_37177__$1;
(statearr_37190_40136[(1)] = (5));

} else {
var statearr_37191_40137 = state_37177__$1;
(statearr_37191_40137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (13))){
var state_37177__$1 = state_37177;
var statearr_37192_40138 = state_37177__$1;
(statearr_37192_40138[(2)] = null);

(statearr_37192_40138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (6))){
var inst_37148 = (state_37177[(7)]);
var state_37177__$1 = state_37177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37177__$1,(11),to,inst_37148);
} else {
if((state_val_37178 === (3))){
var inst_37172 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37177__$1,inst_37172);
} else {
if((state_val_37178 === (12))){
var state_37177__$1 = state_37177;
var statearr_37194_40139 = state_37177__$1;
(statearr_37194_40139[(2)] = null);

(statearr_37194_40139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (2))){
var state_37177__$1 = state_37177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37177__$1,(4),from);
} else {
if((state_val_37178 === (11))){
var inst_37162 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
if(cljs.core.truth_(inst_37162)){
var statearr_37195_40140 = state_37177__$1;
(statearr_37195_40140[(1)] = (12));

} else {
var statearr_37197_40141 = state_37177__$1;
(statearr_37197_40141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (9))){
var state_37177__$1 = state_37177;
var statearr_37198_40142 = state_37177__$1;
(statearr_37198_40142[(2)] = null);

(statearr_37198_40142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (5))){
var state_37177__$1 = state_37177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37199_40145 = state_37177__$1;
(statearr_37199_40145[(1)] = (8));

} else {
var statearr_37200_40146 = state_37177__$1;
(statearr_37200_40146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (14))){
var inst_37167 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
var statearr_37202_40147 = state_37177__$1;
(statearr_37202_40147[(2)] = inst_37167);

(statearr_37202_40147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (10))){
var inst_37159 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
var statearr_37203_40148 = state_37177__$1;
(statearr_37203_40148[(2)] = inst_37159);

(statearr_37203_40148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37178 === (8))){
var inst_37156 = cljs.core.async.close_BANG_(to);
var state_37177__$1 = state_37177;
var statearr_37204_40149 = state_37177__$1;
(statearr_37204_40149[(2)] = inst_37156);

(statearr_37204_40149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_37205 = [null,null,null,null,null,null,null,null];
(statearr_37205[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_37205[(1)] = (1));

return statearr_37205;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_37177){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37177);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37206){var ex__36306__auto__ = e37206;
var statearr_37207_40151 = state_37177;
(statearr_37207_40151[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37177[(4)]))){
var statearr_37208_40154 = state_37177;
(statearr_37208_40154[(1)] = cljs.core.first((state_37177[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40155 = state_37177;
state_37177 = G__40155;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_37177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_37177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37209 = f__36542__auto__();
(statearr_37209[(6)] = c__36541__auto___40133);

return statearr_37209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__37212){
var vec__37213 = p__37212;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37213,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37213,(1),null);
var job = vec__37213;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36541__auto___40157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37224){
var state_val_37225 = (state_37224[(1)]);
if((state_val_37225 === (1))){
var state_37224__$1 = state_37224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37224__$1,(2),res,v);
} else {
if((state_val_37225 === (2))){
var inst_37217 = (state_37224[(2)]);
var inst_37222 = cljs.core.async.close_BANG_(res);
var state_37224__$1 = (function (){var statearr_37227 = state_37224;
(statearr_37227[(7)] = inst_37217);

return statearr_37227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37224__$1,inst_37222);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0 = (function (){
var statearr_37231 = [null,null,null,null,null,null,null,null];
(statearr_37231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__);

(statearr_37231[(1)] = (1));

return statearr_37231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1 = (function (state_37224){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37224);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37232){var ex__36306__auto__ = e37232;
var statearr_37233_40158 = state_37224;
(statearr_37233_40158[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37224[(4)]))){
var statearr_37236_40159 = state_37224;
(statearr_37236_40159[(1)] = cljs.core.first((state_37224[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40160 = state_37224;
state_37224 = G__40160;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = function(state_37224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1.call(this,state_37224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37250 = f__36542__auto__();
(statearr_37250[(6)] = c__36541__auto___40157);

return statearr_37250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37252){
var vec__37253 = p__37252;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37253,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37253,(1),null);
var job = vec__37253;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___40161 = n;
var __40162 = (0);
while(true){
if((__40162 < n__5633__auto___40161)){
var G__37256_40163 = type;
var G__37256_40164__$1 = (((G__37256_40163 instanceof cljs.core.Keyword))?G__37256_40163.fqn:null);
switch (G__37256_40164__$1) {
case "compute":
var c__36541__auto___40166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40162,c__36541__auto___40166,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async){
return (function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = ((function (__40162,c__36541__auto___40166,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async){
return (function (state_37269){
var state_val_37270 = (state_37269[(1)]);
if((state_val_37270 === (1))){
var state_37269__$1 = state_37269;
var statearr_37271_40174 = state_37269__$1;
(statearr_37271_40174[(2)] = null);

(statearr_37271_40174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37270 === (2))){
var state_37269__$1 = state_37269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37269__$1,(4),jobs);
} else {
if((state_val_37270 === (3))){
var inst_37267 = (state_37269[(2)]);
var state_37269__$1 = state_37269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37269__$1,inst_37267);
} else {
if((state_val_37270 === (4))){
var inst_37259 = (state_37269[(2)]);
var inst_37260 = process__$1(inst_37259);
var state_37269__$1 = state_37269;
if(cljs.core.truth_(inst_37260)){
var statearr_37274_40176 = state_37269__$1;
(statearr_37274_40176[(1)] = (5));

} else {
var statearr_37275_40177 = state_37269__$1;
(statearr_37275_40177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37270 === (5))){
var state_37269__$1 = state_37269;
var statearr_37276_40178 = state_37269__$1;
(statearr_37276_40178[(2)] = null);

(statearr_37276_40178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37270 === (6))){
var state_37269__$1 = state_37269;
var statearr_37277_40179 = state_37269__$1;
(statearr_37277_40179[(2)] = null);

(statearr_37277_40179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37270 === (7))){
var inst_37265 = (state_37269[(2)]);
var state_37269__$1 = state_37269;
var statearr_37280_40180 = state_37269__$1;
(statearr_37280_40180[(2)] = inst_37265);

(statearr_37280_40180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40162,c__36541__auto___40166,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async))
;
return ((function (__40162,switch__36302__auto__,c__36541__auto___40166,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0 = (function (){
var statearr_37283 = [null,null,null,null,null,null,null];
(statearr_37283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__);

(statearr_37283[(1)] = (1));

return statearr_37283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1 = (function (state_37269){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37269);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37284){var ex__36306__auto__ = e37284;
var statearr_37285_40190 = state_37269;
(statearr_37285_40190[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37269[(4)]))){
var statearr_37286_40191 = state_37269;
(statearr_37286_40191[(1)] = cljs.core.first((state_37269[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40195 = state_37269;
state_37269 = G__40195;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = function(state_37269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1.call(this,state_37269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__;
})()
;})(__40162,switch__36302__auto__,c__36541__auto___40166,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async))
})();
var state__36543__auto__ = (function (){var statearr_37287 = f__36542__auto__();
(statearr_37287[(6)] = c__36541__auto___40166);

return statearr_37287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
});})(__40162,c__36541__auto___40166,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async))
);


break;
case "async":
var c__36541__auto___40198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40162,c__36541__auto___40198,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async){
return (function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = ((function (__40162,c__36541__auto___40198,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async){
return (function (state_37304){
var state_val_37305 = (state_37304[(1)]);
if((state_val_37305 === (1))){
var state_37304__$1 = state_37304;
var statearr_37307_40201 = state_37304__$1;
(statearr_37307_40201[(2)] = null);

(statearr_37307_40201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (2))){
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37304__$1,(4),jobs);
} else {
if((state_val_37305 === (3))){
var inst_37301 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37304__$1,inst_37301);
} else {
if((state_val_37305 === (4))){
var inst_37291 = (state_37304[(2)]);
var inst_37293 = async(inst_37291);
var state_37304__$1 = state_37304;
if(cljs.core.truth_(inst_37293)){
var statearr_37312_40209 = state_37304__$1;
(statearr_37312_40209[(1)] = (5));

} else {
var statearr_37313_40210 = state_37304__$1;
(statearr_37313_40210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (5))){
var state_37304__$1 = state_37304;
var statearr_37314_40211 = state_37304__$1;
(statearr_37314_40211[(2)] = null);

(statearr_37314_40211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (6))){
var state_37304__$1 = state_37304;
var statearr_37316_40212 = state_37304__$1;
(statearr_37316_40212[(2)] = null);

(statearr_37316_40212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (7))){
var inst_37299 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37317_40214 = state_37304__$1;
(statearr_37317_40214[(2)] = inst_37299);

(statearr_37317_40214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40162,c__36541__auto___40198,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async))
;
return ((function (__40162,switch__36302__auto__,c__36541__auto___40198,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0 = (function (){
var statearr_37320 = [null,null,null,null,null,null,null];
(statearr_37320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__);

(statearr_37320[(1)] = (1));

return statearr_37320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1 = (function (state_37304){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37304);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37321){var ex__36306__auto__ = e37321;
var statearr_37322_40215 = state_37304;
(statearr_37322_40215[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37304[(4)]))){
var statearr_37323_40216 = state_37304;
(statearr_37323_40216[(1)] = cljs.core.first((state_37304[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40217 = state_37304;
state_37304 = G__40217;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = function(state_37304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1.call(this,state_37304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__;
})()
;})(__40162,switch__36302__auto__,c__36541__auto___40198,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async))
})();
var state__36543__auto__ = (function (){var statearr_37327 = f__36542__auto__();
(statearr_37327[(6)] = c__36541__auto___40198);

return statearr_37327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
});})(__40162,c__36541__auto___40198,G__37256_40163,G__37256_40164__$1,n__5633__auto___40161,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37256_40164__$1)].join('')));

}

var G__40220 = (__40162 + (1));
__40162 = G__40220;
continue;
} else {
}
break;
}

var c__36541__auto___40221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37356){
var state_val_37357 = (state_37356[(1)]);
if((state_val_37357 === (7))){
var inst_37350 = (state_37356[(2)]);
var state_37356__$1 = state_37356;
var statearr_37359_40227 = state_37356__$1;
(statearr_37359_40227[(2)] = inst_37350);

(statearr_37359_40227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (1))){
var state_37356__$1 = state_37356;
var statearr_37360_40228 = state_37356__$1;
(statearr_37360_40228[(2)] = null);

(statearr_37360_40228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (4))){
var inst_37331 = (state_37356[(7)]);
var inst_37331__$1 = (state_37356[(2)]);
var inst_37332 = (inst_37331__$1 == null);
var state_37356__$1 = (function (){var statearr_37361 = state_37356;
(statearr_37361[(7)] = inst_37331__$1);

return statearr_37361;
})();
if(cljs.core.truth_(inst_37332)){
var statearr_37362_40229 = state_37356__$1;
(statearr_37362_40229[(1)] = (5));

} else {
var statearr_37363_40230 = state_37356__$1;
(statearr_37363_40230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (6))){
var inst_37336 = (state_37356[(8)]);
var inst_37331 = (state_37356[(7)]);
var inst_37336__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37342 = [inst_37331,inst_37336__$1];
var inst_37343 = (new cljs.core.PersistentVector(null,2,(5),inst_37341,inst_37342,null));
var state_37356__$1 = (function (){var statearr_37364 = state_37356;
(statearr_37364[(8)] = inst_37336__$1);

return statearr_37364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37356__$1,(8),jobs,inst_37343);
} else {
if((state_val_37357 === (3))){
var inst_37352 = (state_37356[(2)]);
var state_37356__$1 = state_37356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37356__$1,inst_37352);
} else {
if((state_val_37357 === (2))){
var state_37356__$1 = state_37356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37356__$1,(4),from);
} else {
if((state_val_37357 === (9))){
var inst_37347 = (state_37356[(2)]);
var state_37356__$1 = (function (){var statearr_37365 = state_37356;
(statearr_37365[(9)] = inst_37347);

return statearr_37365;
})();
var statearr_37366_40235 = state_37356__$1;
(statearr_37366_40235[(2)] = null);

(statearr_37366_40235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (5))){
var inst_37334 = cljs.core.async.close_BANG_(jobs);
var state_37356__$1 = state_37356;
var statearr_37370_40236 = state_37356__$1;
(statearr_37370_40236[(2)] = inst_37334);

(statearr_37370_40236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37357 === (8))){
var inst_37336 = (state_37356[(8)]);
var inst_37345 = (state_37356[(2)]);
var state_37356__$1 = (function (){var statearr_37372 = state_37356;
(statearr_37372[(10)] = inst_37345);

return statearr_37372;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37356__$1,(9),results,inst_37336);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0 = (function (){
var statearr_37373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__);

(statearr_37373[(1)] = (1));

return statearr_37373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1 = (function (state_37356){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37356);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37375){var ex__36306__auto__ = e37375;
var statearr_37376_40238 = state_37356;
(statearr_37376_40238[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37356[(4)]))){
var statearr_37377_40239 = state_37356;
(statearr_37377_40239[(1)] = cljs.core.first((state_37356[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40240 = state_37356;
state_37356 = G__40240;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = function(state_37356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1.call(this,state_37356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37378 = f__36542__auto__();
(statearr_37378[(6)] = c__36541__auto___40221);

return statearr_37378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


var c__36541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37420){
var state_val_37421 = (state_37420[(1)]);
if((state_val_37421 === (7))){
var inst_37414 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37427_40241 = state_37420__$1;
(statearr_37427_40241[(2)] = inst_37414);

(statearr_37427_40241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (20))){
var state_37420__$1 = state_37420;
var statearr_37428_40270 = state_37420__$1;
(statearr_37428_40270[(2)] = null);

(statearr_37428_40270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (1))){
var state_37420__$1 = state_37420;
var statearr_37430_40272 = state_37420__$1;
(statearr_37430_40272[(2)] = null);

(statearr_37430_40272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (4))){
var inst_37381 = (state_37420[(7)]);
var inst_37381__$1 = (state_37420[(2)]);
var inst_37382 = (inst_37381__$1 == null);
var state_37420__$1 = (function (){var statearr_37434 = state_37420;
(statearr_37434[(7)] = inst_37381__$1);

return statearr_37434;
})();
if(cljs.core.truth_(inst_37382)){
var statearr_37436_40273 = state_37420__$1;
(statearr_37436_40273[(1)] = (5));

} else {
var statearr_37437_40274 = state_37420__$1;
(statearr_37437_40274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (15))){
var inst_37396 = (state_37420[(8)]);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37420__$1,(18),to,inst_37396);
} else {
if((state_val_37421 === (21))){
var inst_37409 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37438_40275 = state_37420__$1;
(statearr_37438_40275[(2)] = inst_37409);

(statearr_37438_40275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (13))){
var inst_37411 = (state_37420[(2)]);
var state_37420__$1 = (function (){var statearr_37440 = state_37420;
(statearr_37440[(9)] = inst_37411);

return statearr_37440;
})();
var statearr_37441_40277 = state_37420__$1;
(statearr_37441_40277[(2)] = null);

(statearr_37441_40277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (6))){
var inst_37381 = (state_37420[(7)]);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37420__$1,(11),inst_37381);
} else {
if((state_val_37421 === (17))){
var inst_37404 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
if(cljs.core.truth_(inst_37404)){
var statearr_37447_40279 = state_37420__$1;
(statearr_37447_40279[(1)] = (19));

} else {
var statearr_37448_40280 = state_37420__$1;
(statearr_37448_40280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (3))){
var inst_37417 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37420__$1,inst_37417);
} else {
if((state_val_37421 === (12))){
var inst_37392 = (state_37420[(10)]);
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37420__$1,(14),inst_37392);
} else {
if((state_val_37421 === (2))){
var state_37420__$1 = state_37420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37420__$1,(4),results);
} else {
if((state_val_37421 === (19))){
var state_37420__$1 = state_37420;
var statearr_37459_40281 = state_37420__$1;
(statearr_37459_40281[(2)] = null);

(statearr_37459_40281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (11))){
var inst_37392 = (state_37420[(2)]);
var state_37420__$1 = (function (){var statearr_37461 = state_37420;
(statearr_37461[(10)] = inst_37392);

return statearr_37461;
})();
var statearr_37462_40282 = state_37420__$1;
(statearr_37462_40282[(2)] = null);

(statearr_37462_40282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (9))){
var state_37420__$1 = state_37420;
var statearr_37463_40283 = state_37420__$1;
(statearr_37463_40283[(2)] = null);

(statearr_37463_40283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (5))){
var state_37420__$1 = state_37420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37464_40285 = state_37420__$1;
(statearr_37464_40285[(1)] = (8));

} else {
var statearr_37465_40287 = state_37420__$1;
(statearr_37465_40287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (14))){
var inst_37398 = (state_37420[(11)]);
var inst_37396 = (state_37420[(8)]);
var inst_37396__$1 = (state_37420[(2)]);
var inst_37397 = (inst_37396__$1 == null);
var inst_37398__$1 = cljs.core.not(inst_37397);
var state_37420__$1 = (function (){var statearr_37466 = state_37420;
(statearr_37466[(11)] = inst_37398__$1);

(statearr_37466[(8)] = inst_37396__$1);

return statearr_37466;
})();
if(inst_37398__$1){
var statearr_37467_40288 = state_37420__$1;
(statearr_37467_40288[(1)] = (15));

} else {
var statearr_37468_40290 = state_37420__$1;
(statearr_37468_40290[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (16))){
var inst_37398 = (state_37420[(11)]);
var state_37420__$1 = state_37420;
var statearr_37469_40291 = state_37420__$1;
(statearr_37469_40291[(2)] = inst_37398);

(statearr_37469_40291[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (10))){
var inst_37389 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37470_40292 = state_37420__$1;
(statearr_37470_40292[(2)] = inst_37389);

(statearr_37470_40292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (18))){
var inst_37401 = (state_37420[(2)]);
var state_37420__$1 = state_37420;
var statearr_37472_40294 = state_37420__$1;
(statearr_37472_40294[(2)] = inst_37401);

(statearr_37472_40294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37421 === (8))){
var inst_37386 = cljs.core.async.close_BANG_(to);
var state_37420__$1 = state_37420;
var statearr_37473_40296 = state_37420__$1;
(statearr_37473_40296[(2)] = inst_37386);

(statearr_37473_40296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0 = (function (){
var statearr_37475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__);

(statearr_37475[(1)] = (1));

return statearr_37475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1 = (function (state_37420){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37420);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37477){var ex__36306__auto__ = e37477;
var statearr_37478_40297 = state_37420;
(statearr_37478_40297[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37420[(4)]))){
var statearr_37482_40298 = state_37420;
(statearr_37482_40298[(1)] = cljs.core.first((state_37420[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40299 = state_37420;
state_37420 = G__40299;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__ = function(state_37420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1.call(this,state_37420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36303__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37486 = f__36542__auto__();
(statearr_37486[(6)] = c__36541__auto__);

return statearr_37486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));

return c__36541__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37494 = arguments.length;
switch (G__37494) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37508 = arguments.length;
switch (G__37508) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37523 = arguments.length;
switch (G__37523) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36541__auto___40309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37552){
var state_val_37553 = (state_37552[(1)]);
if((state_val_37553 === (7))){
var inst_37548 = (state_37552[(2)]);
var state_37552__$1 = state_37552;
var statearr_37554_40310 = state_37552__$1;
(statearr_37554_40310[(2)] = inst_37548);

(statearr_37554_40310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (1))){
var state_37552__$1 = state_37552;
var statearr_37555_40311 = state_37552__$1;
(statearr_37555_40311[(2)] = null);

(statearr_37555_40311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (4))){
var inst_37527 = (state_37552[(7)]);
var inst_37527__$1 = (state_37552[(2)]);
var inst_37528 = (inst_37527__$1 == null);
var state_37552__$1 = (function (){var statearr_37556 = state_37552;
(statearr_37556[(7)] = inst_37527__$1);

return statearr_37556;
})();
if(cljs.core.truth_(inst_37528)){
var statearr_37557_40313 = state_37552__$1;
(statearr_37557_40313[(1)] = (5));

} else {
var statearr_37558_40314 = state_37552__$1;
(statearr_37558_40314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (13))){
var state_37552__$1 = state_37552;
var statearr_37560_40315 = state_37552__$1;
(statearr_37560_40315[(2)] = null);

(statearr_37560_40315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (6))){
var inst_37527 = (state_37552[(7)]);
var inst_37535 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37527) : p.call(null,inst_37527));
var state_37552__$1 = state_37552;
if(cljs.core.truth_(inst_37535)){
var statearr_37561_40316 = state_37552__$1;
(statearr_37561_40316[(1)] = (9));

} else {
var statearr_37562_40317 = state_37552__$1;
(statearr_37562_40317[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (3))){
var inst_37550 = (state_37552[(2)]);
var state_37552__$1 = state_37552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37552__$1,inst_37550);
} else {
if((state_val_37553 === (12))){
var state_37552__$1 = state_37552;
var statearr_37563_40319 = state_37552__$1;
(statearr_37563_40319[(2)] = null);

(statearr_37563_40319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (2))){
var state_37552__$1 = state_37552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37552__$1,(4),ch);
} else {
if((state_val_37553 === (11))){
var inst_37527 = (state_37552[(7)]);
var inst_37539 = (state_37552[(2)]);
var state_37552__$1 = state_37552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37552__$1,(8),inst_37539,inst_37527);
} else {
if((state_val_37553 === (9))){
var state_37552__$1 = state_37552;
var statearr_37564_40320 = state_37552__$1;
(statearr_37564_40320[(2)] = tc);

(statearr_37564_40320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (5))){
var inst_37530 = cljs.core.async.close_BANG_(tc);
var inst_37531 = cljs.core.async.close_BANG_(fc);
var state_37552__$1 = (function (){var statearr_37570 = state_37552;
(statearr_37570[(8)] = inst_37530);

return statearr_37570;
})();
var statearr_37573_40323 = state_37552__$1;
(statearr_37573_40323[(2)] = inst_37531);

(statearr_37573_40323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (14))){
var inst_37546 = (state_37552[(2)]);
var state_37552__$1 = state_37552;
var statearr_37578_40324 = state_37552__$1;
(statearr_37578_40324[(2)] = inst_37546);

(statearr_37578_40324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (10))){
var state_37552__$1 = state_37552;
var statearr_37583_40325 = state_37552__$1;
(statearr_37583_40325[(2)] = fc);

(statearr_37583_40325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37553 === (8))){
var inst_37541 = (state_37552[(2)]);
var state_37552__$1 = state_37552;
if(cljs.core.truth_(inst_37541)){
var statearr_37586_40327 = state_37552__$1;
(statearr_37586_40327[(1)] = (12));

} else {
var statearr_37588_40328 = state_37552__$1;
(statearr_37588_40328[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_37594 = [null,null,null,null,null,null,null,null,null];
(statearr_37594[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_37594[(1)] = (1));

return statearr_37594;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_37552){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37552);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37596){var ex__36306__auto__ = e37596;
var statearr_37597_40329 = state_37552;
(statearr_37597_40329[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37552[(4)]))){
var statearr_37598_40330 = state_37552;
(statearr_37598_40330[(1)] = cljs.core.first((state_37552[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40332 = state_37552;
state_37552 = G__40332;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_37552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_37552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37602 = f__36542__auto__();
(statearr_37602[(6)] = c__36541__auto___40309);

return statearr_37602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37632){
var state_val_37633 = (state_37632[(1)]);
if((state_val_37633 === (7))){
var inst_37628 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
var statearr_37638_40348 = state_37632__$1;
(statearr_37638_40348[(2)] = inst_37628);

(statearr_37638_40348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (1))){
var inst_37605 = init;
var inst_37606 = inst_37605;
var state_37632__$1 = (function (){var statearr_37640 = state_37632;
(statearr_37640[(7)] = inst_37606);

return statearr_37640;
})();
var statearr_37641_40356 = state_37632__$1;
(statearr_37641_40356[(2)] = null);

(statearr_37641_40356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (4))){
var inst_37609 = (state_37632[(8)]);
var inst_37609__$1 = (state_37632[(2)]);
var inst_37610 = (inst_37609__$1 == null);
var state_37632__$1 = (function (){var statearr_37642 = state_37632;
(statearr_37642[(8)] = inst_37609__$1);

return statearr_37642;
})();
if(cljs.core.truth_(inst_37610)){
var statearr_37643_40361 = state_37632__$1;
(statearr_37643_40361[(1)] = (5));

} else {
var statearr_37645_40362 = state_37632__$1;
(statearr_37645_40362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (6))){
var inst_37606 = (state_37632[(7)]);
var inst_37614 = (state_37632[(9)]);
var inst_37609 = (state_37632[(8)]);
var inst_37614__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37606,inst_37609) : f.call(null,inst_37606,inst_37609));
var inst_37615 = cljs.core.reduced_QMARK_(inst_37614__$1);
var state_37632__$1 = (function (){var statearr_37647 = state_37632;
(statearr_37647[(9)] = inst_37614__$1);

return statearr_37647;
})();
if(inst_37615){
var statearr_37648_40367 = state_37632__$1;
(statearr_37648_40367[(1)] = (8));

} else {
var statearr_37649_40369 = state_37632__$1;
(statearr_37649_40369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (3))){
var inst_37630 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37632__$1,inst_37630);
} else {
if((state_val_37633 === (2))){
var state_37632__$1 = state_37632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37632__$1,(4),ch);
} else {
if((state_val_37633 === (9))){
var inst_37614 = (state_37632[(9)]);
var inst_37606 = inst_37614;
var state_37632__$1 = (function (){var statearr_37653 = state_37632;
(statearr_37653[(7)] = inst_37606);

return statearr_37653;
})();
var statearr_37656_40370 = state_37632__$1;
(statearr_37656_40370[(2)] = null);

(statearr_37656_40370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (5))){
var inst_37606 = (state_37632[(7)]);
var state_37632__$1 = state_37632;
var statearr_37660_40372 = state_37632__$1;
(statearr_37660_40372[(2)] = inst_37606);

(statearr_37660_40372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (10))){
var inst_37626 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
var statearr_37661_40374 = state_37632__$1;
(statearr_37661_40374[(2)] = inst_37626);

(statearr_37661_40374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (8))){
var inst_37614 = (state_37632[(9)]);
var inst_37622 = cljs.core.deref(inst_37614);
var state_37632__$1 = state_37632;
var statearr_37662_40378 = state_37632__$1;
(statearr_37662_40378[(2)] = inst_37622);

(statearr_37662_40378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36303__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36303__auto____0 = (function (){
var statearr_37664 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37664[(0)] = cljs$core$async$reduce_$_state_machine__36303__auto__);

(statearr_37664[(1)] = (1));

return statearr_37664;
});
var cljs$core$async$reduce_$_state_machine__36303__auto____1 = (function (state_37632){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37632);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37665){var ex__36306__auto__ = e37665;
var statearr_37666_40385 = state_37632;
(statearr_37666_40385[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37632[(4)]))){
var statearr_37667_40392 = state_37632;
(statearr_37667_40392[(1)] = cljs.core.first((state_37632[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40393 = state_37632;
state_37632 = G__40393;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36303__auto__ = function(state_37632){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36303__auto____1.call(this,state_37632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36303__auto____0;
cljs$core$async$reduce_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36303__auto____1;
return cljs$core$async$reduce_$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37673 = f__36542__auto__();
(statearr_37673[(6)] = c__36541__auto__);

return statearr_37673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));

return c__36541__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37688){
var state_val_37689 = (state_37688[(1)]);
if((state_val_37689 === (1))){
var inst_37681 = cljs.core.async.reduce(f__$1,init,ch);
var state_37688__$1 = state_37688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37688__$1,(2),inst_37681);
} else {
if((state_val_37689 === (2))){
var inst_37685 = (state_37688[(2)]);
var inst_37686 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37685) : f__$1.call(null,inst_37685));
var state_37688__$1 = state_37688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37688__$1,inst_37686);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36303__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36303__auto____0 = (function (){
var statearr_37697 = [null,null,null,null,null,null,null];
(statearr_37697[(0)] = cljs$core$async$transduce_$_state_machine__36303__auto__);

(statearr_37697[(1)] = (1));

return statearr_37697;
});
var cljs$core$async$transduce_$_state_machine__36303__auto____1 = (function (state_37688){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37688);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37702){var ex__36306__auto__ = e37702;
var statearr_37704_40397 = state_37688;
(statearr_37704_40397[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37688[(4)]))){
var statearr_37705_40399 = state_37688;
(statearr_37705_40399[(1)] = cljs.core.first((state_37688[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40401 = state_37688;
state_37688 = G__40401;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36303__auto__ = function(state_37688){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36303__auto____1.call(this,state_37688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36303__auto____0;
cljs$core$async$transduce_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36303__auto____1;
return cljs$core$async$transduce_$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37706 = f__36542__auto__();
(statearr_37706[(6)] = c__36541__auto__);

return statearr_37706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));

return c__36541__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37714 = arguments.length;
switch (G__37714) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_37755){
var state_val_37756 = (state_37755[(1)]);
if((state_val_37756 === (7))){
var inst_37731 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
var statearr_37773_40406 = state_37755__$1;
(statearr_37773_40406[(2)] = inst_37731);

(statearr_37773_40406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (1))){
var inst_37725 = cljs.core.seq(coll);
var inst_37726 = inst_37725;
var state_37755__$1 = (function (){var statearr_37780 = state_37755;
(statearr_37780[(7)] = inst_37726);

return statearr_37780;
})();
var statearr_37782_40407 = state_37755__$1;
(statearr_37782_40407[(2)] = null);

(statearr_37782_40407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (4))){
var inst_37726 = (state_37755[(7)]);
var inst_37729 = cljs.core.first(inst_37726);
var state_37755__$1 = state_37755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37755__$1,(7),ch,inst_37729);
} else {
if((state_val_37756 === (13))){
var inst_37743 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
var statearr_37788_40408 = state_37755__$1;
(statearr_37788_40408[(2)] = inst_37743);

(statearr_37788_40408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (6))){
var inst_37734 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
if(cljs.core.truth_(inst_37734)){
var statearr_37791_40409 = state_37755__$1;
(statearr_37791_40409[(1)] = (8));

} else {
var statearr_37792_40410 = state_37755__$1;
(statearr_37792_40410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (3))){
var inst_37747 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37755__$1,inst_37747);
} else {
if((state_val_37756 === (12))){
var state_37755__$1 = state_37755;
var statearr_37795_40411 = state_37755__$1;
(statearr_37795_40411[(2)] = null);

(statearr_37795_40411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (2))){
var inst_37726 = (state_37755[(7)]);
var state_37755__$1 = state_37755;
if(cljs.core.truth_(inst_37726)){
var statearr_37797_40412 = state_37755__$1;
(statearr_37797_40412[(1)] = (4));

} else {
var statearr_37798_40413 = state_37755__$1;
(statearr_37798_40413[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (11))){
var inst_37740 = cljs.core.async.close_BANG_(ch);
var state_37755__$1 = state_37755;
var statearr_37801_40414 = state_37755__$1;
(statearr_37801_40414[(2)] = inst_37740);

(statearr_37801_40414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (9))){
var state_37755__$1 = state_37755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37805_40416 = state_37755__$1;
(statearr_37805_40416[(1)] = (11));

} else {
var statearr_37806_40417 = state_37755__$1;
(statearr_37806_40417[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (5))){
var inst_37726 = (state_37755[(7)]);
var state_37755__$1 = state_37755;
var statearr_37807_40421 = state_37755__$1;
(statearr_37807_40421[(2)] = inst_37726);

(statearr_37807_40421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (10))){
var inst_37745 = (state_37755[(2)]);
var state_37755__$1 = state_37755;
var statearr_37809_40422 = state_37755__$1;
(statearr_37809_40422[(2)] = inst_37745);

(statearr_37809_40422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37756 === (8))){
var inst_37726 = (state_37755[(7)]);
var inst_37736 = cljs.core.next(inst_37726);
var inst_37726__$1 = inst_37736;
var state_37755__$1 = (function (){var statearr_37813 = state_37755;
(statearr_37813[(7)] = inst_37726__$1);

return statearr_37813;
})();
var statearr_37814_40423 = state_37755__$1;
(statearr_37814_40423[(2)] = null);

(statearr_37814_40423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_37819 = [null,null,null,null,null,null,null,null];
(statearr_37819[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_37819[(1)] = (1));

return statearr_37819;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_37755){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_37755);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e37827){var ex__36306__auto__ = e37827;
var statearr_37828_40424 = state_37755;
(statearr_37828_40424[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_37755[(4)]))){
var statearr_37829_40425 = state_37755;
(statearr_37829_40425[(1)] = cljs.core.first((state_37755[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40426 = state_37755;
state_37755 = G__40426;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_37755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_37755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_37830 = f__36542__auto__();
(statearr_37830[(6)] = c__36541__auto__);

return statearr_37830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));

return c__36541__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37836 = arguments.length;
switch (G__37836) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_40441 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_40441(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40445 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_40445(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40456 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_40456(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40460 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_40460(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37891 = (function (ch,cs,meta37892){
this.ch = ch;
this.cs = cs;
this.meta37892 = meta37892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37893,meta37892__$1){
var self__ = this;
var _37893__$1 = this;
return (new cljs.core.async.t_cljs$core$async37891(self__.ch,self__.cs,meta37892__$1));
}));

(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37893){
var self__ = this;
var _37893__$1 = this;
return self__.meta37892;
}));

(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37891.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37892","meta37892",-1394231775,null)], null);
}));

(cljs.core.async.t_cljs$core$async37891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37891");

(cljs.core.async.t_cljs$core$async37891.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37891.
 */
cljs.core.async.__GT_t_cljs$core$async37891 = (function cljs$core$async$__GT_t_cljs$core$async37891(ch,cs,meta37892){
return (new cljs.core.async.t_cljs$core$async37891(ch,cs,meta37892));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async37891(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36541__auto___40491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_38034){
var state_val_38035 = (state_38034[(1)]);
if((state_val_38035 === (7))){
var inst_38029 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38040_40492 = state_38034__$1;
(statearr_38040_40492[(2)] = inst_38029);

(statearr_38040_40492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (20))){
var inst_37929 = (state_38034[(7)]);
var inst_37941 = cljs.core.first(inst_37929);
var inst_37942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37941,(0),null);
var inst_37943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37941,(1),null);
var state_38034__$1 = (function (){var statearr_38041 = state_38034;
(statearr_38041[(8)] = inst_37942);

return statearr_38041;
})();
if(cljs.core.truth_(inst_37943)){
var statearr_38042_40493 = state_38034__$1;
(statearr_38042_40493[(1)] = (22));

} else {
var statearr_38044_40494 = state_38034__$1;
(statearr_38044_40494[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (27))){
var inst_37897 = (state_38034[(9)]);
var inst_37971 = (state_38034[(10)]);
var inst_37978 = (state_38034[(11)]);
var inst_37973 = (state_38034[(12)]);
var inst_37978__$1 = cljs.core._nth(inst_37971,inst_37973);
var inst_37983 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37978__$1,inst_37897,done);
var state_38034__$1 = (function (){var statearr_38045 = state_38034;
(statearr_38045[(11)] = inst_37978__$1);

return statearr_38045;
})();
if(cljs.core.truth_(inst_37983)){
var statearr_38046_40496 = state_38034__$1;
(statearr_38046_40496[(1)] = (30));

} else {
var statearr_38047_40497 = state_38034__$1;
(statearr_38047_40497[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (1))){
var state_38034__$1 = state_38034;
var statearr_38048_40498 = state_38034__$1;
(statearr_38048_40498[(2)] = null);

(statearr_38048_40498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (24))){
var inst_37929 = (state_38034[(7)]);
var inst_37948 = (state_38034[(2)]);
var inst_37949 = cljs.core.next(inst_37929);
var inst_37907 = inst_37949;
var inst_37908 = null;
var inst_37909 = (0);
var inst_37910 = (0);
var state_38034__$1 = (function (){var statearr_38049 = state_38034;
(statearr_38049[(13)] = inst_37909);

(statearr_38049[(14)] = inst_37908);

(statearr_38049[(15)] = inst_37910);

(statearr_38049[(16)] = inst_37907);

(statearr_38049[(17)] = inst_37948);

return statearr_38049;
})();
var statearr_38050_40504 = state_38034__$1;
(statearr_38050_40504[(2)] = null);

(statearr_38050_40504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (39))){
var state_38034__$1 = state_38034;
var statearr_38063_40508 = state_38034__$1;
(statearr_38063_40508[(2)] = null);

(statearr_38063_40508[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (4))){
var inst_37897 = (state_38034[(9)]);
var inst_37897__$1 = (state_38034[(2)]);
var inst_37898 = (inst_37897__$1 == null);
var state_38034__$1 = (function (){var statearr_38064 = state_38034;
(statearr_38064[(9)] = inst_37897__$1);

return statearr_38064;
})();
if(cljs.core.truth_(inst_37898)){
var statearr_38068_40512 = state_38034__$1;
(statearr_38068_40512[(1)] = (5));

} else {
var statearr_38069_40525 = state_38034__$1;
(statearr_38069_40525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (15))){
var inst_37909 = (state_38034[(13)]);
var inst_37908 = (state_38034[(14)]);
var inst_37910 = (state_38034[(15)]);
var inst_37907 = (state_38034[(16)]);
var inst_37925 = (state_38034[(2)]);
var inst_37926 = (inst_37910 + (1));
var tmp38055 = inst_37909;
var tmp38056 = inst_37908;
var tmp38057 = inst_37907;
var inst_37907__$1 = tmp38057;
var inst_37908__$1 = tmp38056;
var inst_37909__$1 = tmp38055;
var inst_37910__$1 = inst_37926;
var state_38034__$1 = (function (){var statearr_38070 = state_38034;
(statearr_38070[(13)] = inst_37909__$1);

(statearr_38070[(14)] = inst_37908__$1);

(statearr_38070[(15)] = inst_37910__$1);

(statearr_38070[(16)] = inst_37907__$1);

(statearr_38070[(18)] = inst_37925);

return statearr_38070;
})();
var statearr_38071_40527 = state_38034__$1;
(statearr_38071_40527[(2)] = null);

(statearr_38071_40527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (21))){
var inst_37952 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38076_40528 = state_38034__$1;
(statearr_38076_40528[(2)] = inst_37952);

(statearr_38076_40528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (31))){
var inst_37978 = (state_38034[(11)]);
var inst_37986 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37978);
var state_38034__$1 = state_38034;
var statearr_38079_40529 = state_38034__$1;
(statearr_38079_40529[(2)] = inst_37986);

(statearr_38079_40529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (32))){
var inst_37970 = (state_38034[(19)]);
var inst_37971 = (state_38034[(10)]);
var inst_37973 = (state_38034[(12)]);
var inst_37972 = (state_38034[(20)]);
var inst_37988 = (state_38034[(2)]);
var inst_37989 = (inst_37973 + (1));
var tmp38073 = inst_37970;
var tmp38074 = inst_37971;
var tmp38075 = inst_37972;
var inst_37970__$1 = tmp38073;
var inst_37971__$1 = tmp38074;
var inst_37972__$1 = tmp38075;
var inst_37973__$1 = inst_37989;
var state_38034__$1 = (function (){var statearr_38083 = state_38034;
(statearr_38083[(19)] = inst_37970__$1);

(statearr_38083[(10)] = inst_37971__$1);

(statearr_38083[(21)] = inst_37988);

(statearr_38083[(12)] = inst_37973__$1);

(statearr_38083[(20)] = inst_37972__$1);

return statearr_38083;
})();
var statearr_38084_40540 = state_38034__$1;
(statearr_38084_40540[(2)] = null);

(statearr_38084_40540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (40))){
var inst_38002 = (state_38034[(22)]);
var inst_38006 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38002);
var state_38034__$1 = state_38034;
var statearr_38087_40547 = state_38034__$1;
(statearr_38087_40547[(2)] = inst_38006);

(statearr_38087_40547[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (33))){
var inst_37992 = (state_38034[(23)]);
var inst_37995 = cljs.core.chunked_seq_QMARK_(inst_37992);
var state_38034__$1 = state_38034;
if(inst_37995){
var statearr_38088_40551 = state_38034__$1;
(statearr_38088_40551[(1)] = (36));

} else {
var statearr_38089_40552 = state_38034__$1;
(statearr_38089_40552[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (13))){
var inst_37919 = (state_38034[(24)]);
var inst_37922 = cljs.core.async.close_BANG_(inst_37919);
var state_38034__$1 = state_38034;
var statearr_38092_40554 = state_38034__$1;
(statearr_38092_40554[(2)] = inst_37922);

(statearr_38092_40554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (22))){
var inst_37942 = (state_38034[(8)]);
var inst_37945 = cljs.core.async.close_BANG_(inst_37942);
var state_38034__$1 = state_38034;
var statearr_38095_40555 = state_38034__$1;
(statearr_38095_40555[(2)] = inst_37945);

(statearr_38095_40555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (36))){
var inst_37992 = (state_38034[(23)]);
var inst_37997 = cljs.core.chunk_first(inst_37992);
var inst_37998 = cljs.core.chunk_rest(inst_37992);
var inst_37999 = cljs.core.count(inst_37997);
var inst_37970 = inst_37998;
var inst_37971 = inst_37997;
var inst_37972 = inst_37999;
var inst_37973 = (0);
var state_38034__$1 = (function (){var statearr_38106 = state_38034;
(statearr_38106[(19)] = inst_37970);

(statearr_38106[(10)] = inst_37971);

(statearr_38106[(12)] = inst_37973);

(statearr_38106[(20)] = inst_37972);

return statearr_38106;
})();
var statearr_38111_40556 = state_38034__$1;
(statearr_38111_40556[(2)] = null);

(statearr_38111_40556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (41))){
var inst_37992 = (state_38034[(23)]);
var inst_38008 = (state_38034[(2)]);
var inst_38009 = cljs.core.next(inst_37992);
var inst_37970 = inst_38009;
var inst_37971 = null;
var inst_37972 = (0);
var inst_37973 = (0);
var state_38034__$1 = (function (){var statearr_38113 = state_38034;
(statearr_38113[(19)] = inst_37970);

(statearr_38113[(10)] = inst_37971);

(statearr_38113[(25)] = inst_38008);

(statearr_38113[(12)] = inst_37973);

(statearr_38113[(20)] = inst_37972);

return statearr_38113;
})();
var statearr_38114_40557 = state_38034__$1;
(statearr_38114_40557[(2)] = null);

(statearr_38114_40557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (43))){
var state_38034__$1 = state_38034;
var statearr_38116_40558 = state_38034__$1;
(statearr_38116_40558[(2)] = null);

(statearr_38116_40558[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (29))){
var inst_38017 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38124_40559 = state_38034__$1;
(statearr_38124_40559[(2)] = inst_38017);

(statearr_38124_40559[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (44))){
var inst_38026 = (state_38034[(2)]);
var state_38034__$1 = (function (){var statearr_38129 = state_38034;
(statearr_38129[(26)] = inst_38026);

return statearr_38129;
})();
var statearr_38131_40560 = state_38034__$1;
(statearr_38131_40560[(2)] = null);

(statearr_38131_40560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (6))){
var inst_37962 = (state_38034[(27)]);
var inst_37961 = cljs.core.deref(cs);
var inst_37962__$1 = cljs.core.keys(inst_37961);
var inst_37963 = cljs.core.count(inst_37962__$1);
var inst_37964 = cljs.core.reset_BANG_(dctr,inst_37963);
var inst_37969 = cljs.core.seq(inst_37962__$1);
var inst_37970 = inst_37969;
var inst_37971 = null;
var inst_37972 = (0);
var inst_37973 = (0);
var state_38034__$1 = (function (){var statearr_38139 = state_38034;
(statearr_38139[(19)] = inst_37970);

(statearr_38139[(28)] = inst_37964);

(statearr_38139[(27)] = inst_37962__$1);

(statearr_38139[(10)] = inst_37971);

(statearr_38139[(12)] = inst_37973);

(statearr_38139[(20)] = inst_37972);

return statearr_38139;
})();
var statearr_38141_40568 = state_38034__$1;
(statearr_38141_40568[(2)] = null);

(statearr_38141_40568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (28))){
var inst_37970 = (state_38034[(19)]);
var inst_37992 = (state_38034[(23)]);
var inst_37992__$1 = cljs.core.seq(inst_37970);
var state_38034__$1 = (function (){var statearr_38147 = state_38034;
(statearr_38147[(23)] = inst_37992__$1);

return statearr_38147;
})();
if(inst_37992__$1){
var statearr_38149_40576 = state_38034__$1;
(statearr_38149_40576[(1)] = (33));

} else {
var statearr_38150_40581 = state_38034__$1;
(statearr_38150_40581[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (25))){
var inst_37973 = (state_38034[(12)]);
var inst_37972 = (state_38034[(20)]);
var inst_37975 = (inst_37973 < inst_37972);
var inst_37976 = inst_37975;
var state_38034__$1 = state_38034;
if(cljs.core.truth_(inst_37976)){
var statearr_38153_40606 = state_38034__$1;
(statearr_38153_40606[(1)] = (27));

} else {
var statearr_38154_40611 = state_38034__$1;
(statearr_38154_40611[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (34))){
var state_38034__$1 = state_38034;
var statearr_38158_40612 = state_38034__$1;
(statearr_38158_40612[(2)] = null);

(statearr_38158_40612[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (17))){
var state_38034__$1 = state_38034;
var statearr_38162_40613 = state_38034__$1;
(statearr_38162_40613[(2)] = null);

(statearr_38162_40613[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (3))){
var inst_38031 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38034__$1,inst_38031);
} else {
if((state_val_38035 === (12))){
var inst_37957 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38164_40616 = state_38034__$1;
(statearr_38164_40616[(2)] = inst_37957);

(statearr_38164_40616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (2))){
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38034__$1,(4),ch);
} else {
if((state_val_38035 === (23))){
var state_38034__$1 = state_38034;
var statearr_38166_40620 = state_38034__$1;
(statearr_38166_40620[(2)] = null);

(statearr_38166_40620[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (35))){
var inst_38015 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38170_40621 = state_38034__$1;
(statearr_38170_40621[(2)] = inst_38015);

(statearr_38170_40621[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (19))){
var inst_37929 = (state_38034[(7)]);
var inst_37933 = cljs.core.chunk_first(inst_37929);
var inst_37934 = cljs.core.chunk_rest(inst_37929);
var inst_37935 = cljs.core.count(inst_37933);
var inst_37907 = inst_37934;
var inst_37908 = inst_37933;
var inst_37909 = inst_37935;
var inst_37910 = (0);
var state_38034__$1 = (function (){var statearr_38171 = state_38034;
(statearr_38171[(13)] = inst_37909);

(statearr_38171[(14)] = inst_37908);

(statearr_38171[(15)] = inst_37910);

(statearr_38171[(16)] = inst_37907);

return statearr_38171;
})();
var statearr_38172_40622 = state_38034__$1;
(statearr_38172_40622[(2)] = null);

(statearr_38172_40622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (11))){
var inst_37929 = (state_38034[(7)]);
var inst_37907 = (state_38034[(16)]);
var inst_37929__$1 = cljs.core.seq(inst_37907);
var state_38034__$1 = (function (){var statearr_38174 = state_38034;
(statearr_38174[(7)] = inst_37929__$1);

return statearr_38174;
})();
if(inst_37929__$1){
var statearr_38175_40623 = state_38034__$1;
(statearr_38175_40623[(1)] = (16));

} else {
var statearr_38176_40624 = state_38034__$1;
(statearr_38176_40624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (9))){
var inst_37959 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38177_40625 = state_38034__$1;
(statearr_38177_40625[(2)] = inst_37959);

(statearr_38177_40625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (5))){
var inst_37905 = cljs.core.deref(cs);
var inst_37906 = cljs.core.seq(inst_37905);
var inst_37907 = inst_37906;
var inst_37908 = null;
var inst_37909 = (0);
var inst_37910 = (0);
var state_38034__$1 = (function (){var statearr_38182 = state_38034;
(statearr_38182[(13)] = inst_37909);

(statearr_38182[(14)] = inst_37908);

(statearr_38182[(15)] = inst_37910);

(statearr_38182[(16)] = inst_37907);

return statearr_38182;
})();
var statearr_38183_40626 = state_38034__$1;
(statearr_38183_40626[(2)] = null);

(statearr_38183_40626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (14))){
var state_38034__$1 = state_38034;
var statearr_38184_40627 = state_38034__$1;
(statearr_38184_40627[(2)] = null);

(statearr_38184_40627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (45))){
var inst_38023 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38185_40628 = state_38034__$1;
(statearr_38185_40628[(2)] = inst_38023);

(statearr_38185_40628[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (26))){
var inst_37962 = (state_38034[(27)]);
var inst_38019 = (state_38034[(2)]);
var inst_38020 = cljs.core.seq(inst_37962);
var state_38034__$1 = (function (){var statearr_38187 = state_38034;
(statearr_38187[(29)] = inst_38019);

return statearr_38187;
})();
if(inst_38020){
var statearr_38188_40629 = state_38034__$1;
(statearr_38188_40629[(1)] = (42));

} else {
var statearr_38189_40630 = state_38034__$1;
(statearr_38189_40630[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (16))){
var inst_37929 = (state_38034[(7)]);
var inst_37931 = cljs.core.chunked_seq_QMARK_(inst_37929);
var state_38034__$1 = state_38034;
if(inst_37931){
var statearr_38190_40631 = state_38034__$1;
(statearr_38190_40631[(1)] = (19));

} else {
var statearr_38191_40632 = state_38034__$1;
(statearr_38191_40632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (38))){
var inst_38012 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38192_40647 = state_38034__$1;
(statearr_38192_40647[(2)] = inst_38012);

(statearr_38192_40647[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (30))){
var state_38034__$1 = state_38034;
var statearr_38193_40648 = state_38034__$1;
(statearr_38193_40648[(2)] = null);

(statearr_38193_40648[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (10))){
var inst_37908 = (state_38034[(14)]);
var inst_37910 = (state_38034[(15)]);
var inst_37918 = cljs.core._nth(inst_37908,inst_37910);
var inst_37919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37918,(0),null);
var inst_37920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37918,(1),null);
var state_38034__$1 = (function (){var statearr_38194 = state_38034;
(statearr_38194[(24)] = inst_37919);

return statearr_38194;
})();
if(cljs.core.truth_(inst_37920)){
var statearr_38195_40649 = state_38034__$1;
(statearr_38195_40649[(1)] = (13));

} else {
var statearr_38196_40651 = state_38034__$1;
(statearr_38196_40651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (18))){
var inst_37955 = (state_38034[(2)]);
var state_38034__$1 = state_38034;
var statearr_38198_40654 = state_38034__$1;
(statearr_38198_40654[(2)] = inst_37955);

(statearr_38198_40654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (42))){
var state_38034__$1 = state_38034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38034__$1,(45),dchan);
} else {
if((state_val_38035 === (37))){
var inst_37897 = (state_38034[(9)]);
var inst_38002 = (state_38034[(22)]);
var inst_37992 = (state_38034[(23)]);
var inst_38002__$1 = cljs.core.first(inst_37992);
var inst_38003 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38002__$1,inst_37897,done);
var state_38034__$1 = (function (){var statearr_38200 = state_38034;
(statearr_38200[(22)] = inst_38002__$1);

return statearr_38200;
})();
if(cljs.core.truth_(inst_38003)){
var statearr_38201_40657 = state_38034__$1;
(statearr_38201_40657[(1)] = (39));

} else {
var statearr_38202_40658 = state_38034__$1;
(statearr_38202_40658[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38035 === (8))){
var inst_37909 = (state_38034[(13)]);
var inst_37910 = (state_38034[(15)]);
var inst_37912 = (inst_37910 < inst_37909);
var inst_37913 = inst_37912;
var state_38034__$1 = state_38034;
if(cljs.core.truth_(inst_37913)){
var statearr_38203_40659 = state_38034__$1;
(statearr_38203_40659[(1)] = (10));

} else {
var statearr_38204_40660 = state_38034__$1;
(statearr_38204_40660[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36303__auto__ = null;
var cljs$core$async$mult_$_state_machine__36303__auto____0 = (function (){
var statearr_38206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38206[(0)] = cljs$core$async$mult_$_state_machine__36303__auto__);

(statearr_38206[(1)] = (1));

return statearr_38206;
});
var cljs$core$async$mult_$_state_machine__36303__auto____1 = (function (state_38034){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_38034);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e38207){var ex__36306__auto__ = e38207;
var statearr_38208_40666 = state_38034;
(statearr_38208_40666[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_38034[(4)]))){
var statearr_38209_40667 = state_38034;
(statearr_38209_40667[(1)] = cljs.core.first((state_38034[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40671 = state_38034;
state_38034 = G__40671;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36303__auto__ = function(state_38034){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36303__auto____1.call(this,state_38034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36303__auto____0;
cljs$core$async$mult_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36303__auto____1;
return cljs$core$async$mult_$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_38210 = f__36542__auto__();
(statearr_38210[(6)] = c__36541__auto___40491);

return statearr_38210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38213 = arguments.length;
switch (G__38213) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_40679 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40679(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40683 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40683(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40691 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40691(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40694 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40694(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40695 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40695(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40705 = arguments.length;
var i__5767__auto___40706 = (0);
while(true){
if((i__5767__auto___40706 < len__5766__auto___40705)){
args__5772__auto__.push((arguments[i__5767__auto___40706]));

var G__40707 = (i__5767__auto___40706 + (1));
i__5767__auto___40706 = G__40707;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38262){
var map__38263 = p__38262;
var map__38263__$1 = cljs.core.__destructure_map(map__38263);
var opts = map__38263__$1;
var statearr_38268_40714 = state;
(statearr_38268_40714[(1)] = cont_block);


var temp__5811__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38273_40715 = state;
(statearr_38273_40715[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5811__auto__)){
var cb = temp__5811__auto__;
var statearr_38274_40716 = state;
(statearr_38274_40716[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38254){
var G__38255 = cljs.core.first(seq38254);
var seq38254__$1 = cljs.core.next(seq38254);
var G__38256 = cljs.core.first(seq38254__$1);
var seq38254__$2 = cljs.core.next(seq38254__$1);
var G__38257 = cljs.core.first(seq38254__$2);
var seq38254__$3 = cljs.core.next(seq38254__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38255,G__38256,G__38257,seq38254__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38278 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38279){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38279 = meta38279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38280,meta38279__$1){
var self__ = this;
var _38280__$1 = this;
return (new cljs.core.async.t_cljs$core$async38278(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38279__$1));
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38280){
var self__ = this;
var _38280__$1 = this;
return self__.meta38279;
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38279","meta38279",1860251753,null)], null);
}));

(cljs.core.async.t_cljs$core$async38278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38278");

(cljs.core.async.t_cljs$core$async38278.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38278.
 */
cljs.core.async.__GT_t_cljs$core$async38278 = (function cljs$core$async$__GT_t_cljs$core$async38278(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38279){
return (new cljs.core.async.t_cljs$core$async38278(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38279));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async38278(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__36541__auto___40743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_38384){
var state_val_38385 = (state_38384[(1)]);
if((state_val_38385 === (7))){
var inst_38328 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
if(cljs.core.truth_(inst_38328)){
var statearr_38394_40744 = state_38384__$1;
(statearr_38394_40744[(1)] = (8));

} else {
var statearr_38395_40745 = state_38384__$1;
(statearr_38395_40745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (20))){
var inst_38321 = (state_38384[(7)]);
var state_38384__$1 = state_38384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38384__$1,(23),out,inst_38321);
} else {
if((state_val_38385 === (1))){
var inst_38301 = calc_state();
var inst_38302 = cljs.core.__destructure_map(inst_38301);
var inst_38304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38302,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38302,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38302,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38307 = inst_38301;
var state_38384__$1 = (function (){var statearr_38405 = state_38384;
(statearr_38405[(8)] = inst_38304);

(statearr_38405[(9)] = inst_38307);

(statearr_38405[(10)] = inst_38305);

(statearr_38405[(11)] = inst_38306);

return statearr_38405;
})();
var statearr_38410_40750 = state_38384__$1;
(statearr_38410_40750[(2)] = null);

(statearr_38410_40750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (24))){
var inst_38310 = (state_38384[(12)]);
var inst_38307 = inst_38310;
var state_38384__$1 = (function (){var statearr_38411 = state_38384;
(statearr_38411[(9)] = inst_38307);

return statearr_38411;
})();
var statearr_38413_40757 = state_38384__$1;
(statearr_38413_40757[(2)] = null);

(statearr_38413_40757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (4))){
var inst_38323 = (state_38384[(13)]);
var inst_38321 = (state_38384[(7)]);
var inst_38320 = (state_38384[(2)]);
var inst_38321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38320,(0),null);
var inst_38322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38320,(1),null);
var inst_38323__$1 = (inst_38321__$1 == null);
var state_38384__$1 = (function (){var statearr_38416 = state_38384;
(statearr_38416[(13)] = inst_38323__$1);

(statearr_38416[(14)] = inst_38322);

(statearr_38416[(7)] = inst_38321__$1);

return statearr_38416;
})();
if(cljs.core.truth_(inst_38323__$1)){
var statearr_38417_40759 = state_38384__$1;
(statearr_38417_40759[(1)] = (5));

} else {
var statearr_38418_40760 = state_38384__$1;
(statearr_38418_40760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (15))){
var inst_38311 = (state_38384[(15)]);
var inst_38349 = (state_38384[(16)]);
var inst_38349__$1 = cljs.core.empty_QMARK_(inst_38311);
var state_38384__$1 = (function (){var statearr_38420 = state_38384;
(statearr_38420[(16)] = inst_38349__$1);

return statearr_38420;
})();
if(inst_38349__$1){
var statearr_38422_40761 = state_38384__$1;
(statearr_38422_40761[(1)] = (17));

} else {
var statearr_38423_40762 = state_38384__$1;
(statearr_38423_40762[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (21))){
var inst_38310 = (state_38384[(12)]);
var inst_38307 = inst_38310;
var state_38384__$1 = (function (){var statearr_38426 = state_38384;
(statearr_38426[(9)] = inst_38307);

return statearr_38426;
})();
var statearr_38427_40763 = state_38384__$1;
(statearr_38427_40763[(2)] = null);

(statearr_38427_40763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (13))){
var inst_38337 = (state_38384[(2)]);
var inst_38338 = calc_state();
var inst_38307 = inst_38338;
var state_38384__$1 = (function (){var statearr_38429 = state_38384;
(statearr_38429[(9)] = inst_38307);

(statearr_38429[(17)] = inst_38337);

return statearr_38429;
})();
var statearr_38430_40764 = state_38384__$1;
(statearr_38430_40764[(2)] = null);

(statearr_38430_40764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (22))){
var inst_38370 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
var statearr_38431_40765 = state_38384__$1;
(statearr_38431_40765[(2)] = inst_38370);

(statearr_38431_40765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (6))){
var inst_38322 = (state_38384[(14)]);
var inst_38326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38322,change);
var state_38384__$1 = state_38384;
var statearr_38435_40769 = state_38384__$1;
(statearr_38435_40769[(2)] = inst_38326);

(statearr_38435_40769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (25))){
var state_38384__$1 = state_38384;
var statearr_38437_40776 = state_38384__$1;
(statearr_38437_40776[(2)] = null);

(statearr_38437_40776[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (17))){
var inst_38312 = (state_38384[(18)]);
var inst_38322 = (state_38384[(14)]);
var inst_38351 = (inst_38312.cljs$core$IFn$_invoke$arity$1 ? inst_38312.cljs$core$IFn$_invoke$arity$1(inst_38322) : inst_38312.call(null,inst_38322));
var inst_38352 = cljs.core.not(inst_38351);
var state_38384__$1 = state_38384;
var statearr_38440_40777 = state_38384__$1;
(statearr_38440_40777[(2)] = inst_38352);

(statearr_38440_40777[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (3))){
var inst_38375 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38384__$1,inst_38375);
} else {
if((state_val_38385 === (12))){
var state_38384__$1 = state_38384;
var statearr_38441_40778 = state_38384__$1;
(statearr_38441_40778[(2)] = null);

(statearr_38441_40778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (2))){
var inst_38307 = (state_38384[(9)]);
var inst_38310 = (state_38384[(12)]);
var inst_38310__$1 = cljs.core.__destructure_map(inst_38307);
var inst_38311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38310__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38310__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38310__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38384__$1 = (function (){var statearr_38444 = state_38384;
(statearr_38444[(12)] = inst_38310__$1);

(statearr_38444[(18)] = inst_38312);

(statearr_38444[(15)] = inst_38311);

return statearr_38444;
})();
return cljs.core.async.ioc_alts_BANG_(state_38384__$1,(4),inst_38314);
} else {
if((state_val_38385 === (23))){
var inst_38361 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
if(cljs.core.truth_(inst_38361)){
var statearr_38450_40780 = state_38384__$1;
(statearr_38450_40780[(1)] = (24));

} else {
var statearr_38451_40781 = state_38384__$1;
(statearr_38451_40781[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (19))){
var inst_38356 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
var statearr_38452_40782 = state_38384__$1;
(statearr_38452_40782[(2)] = inst_38356);

(statearr_38452_40782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (11))){
var inst_38322 = (state_38384[(14)]);
var inst_38334 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38322);
var state_38384__$1 = state_38384;
var statearr_38455_40783 = state_38384__$1;
(statearr_38455_40783[(2)] = inst_38334);

(statearr_38455_40783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (9))){
var inst_38345 = (state_38384[(19)]);
var inst_38322 = (state_38384[(14)]);
var inst_38311 = (state_38384[(15)]);
var inst_38345__$1 = (inst_38311.cljs$core$IFn$_invoke$arity$1 ? inst_38311.cljs$core$IFn$_invoke$arity$1(inst_38322) : inst_38311.call(null,inst_38322));
var state_38384__$1 = (function (){var statearr_38457 = state_38384;
(statearr_38457[(19)] = inst_38345__$1);

return statearr_38457;
})();
if(cljs.core.truth_(inst_38345__$1)){
var statearr_38458_40784 = state_38384__$1;
(statearr_38458_40784[(1)] = (14));

} else {
var statearr_38459_40785 = state_38384__$1;
(statearr_38459_40785[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (5))){
var inst_38323 = (state_38384[(13)]);
var state_38384__$1 = state_38384;
var statearr_38462_40786 = state_38384__$1;
(statearr_38462_40786[(2)] = inst_38323);

(statearr_38462_40786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (14))){
var inst_38345 = (state_38384[(19)]);
var state_38384__$1 = state_38384;
var statearr_38464_40789 = state_38384__$1;
(statearr_38464_40789[(2)] = inst_38345);

(statearr_38464_40789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (26))){
var inst_38366 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
var statearr_38465_40790 = state_38384__$1;
(statearr_38465_40790[(2)] = inst_38366);

(statearr_38465_40790[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (16))){
var inst_38358 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
if(cljs.core.truth_(inst_38358)){
var statearr_38467_40791 = state_38384__$1;
(statearr_38467_40791[(1)] = (20));

} else {
var statearr_38468_40792 = state_38384__$1;
(statearr_38468_40792[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (10))){
var inst_38372 = (state_38384[(2)]);
var state_38384__$1 = state_38384;
var statearr_38469_40793 = state_38384__$1;
(statearr_38469_40793[(2)] = inst_38372);

(statearr_38469_40793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (18))){
var inst_38349 = (state_38384[(16)]);
var state_38384__$1 = state_38384;
var statearr_38472_40794 = state_38384__$1;
(statearr_38472_40794[(2)] = inst_38349);

(statearr_38472_40794[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38385 === (8))){
var inst_38321 = (state_38384[(7)]);
var inst_38332 = (inst_38321 == null);
var state_38384__$1 = state_38384;
if(cljs.core.truth_(inst_38332)){
var statearr_38474_40795 = state_38384__$1;
(statearr_38474_40795[(1)] = (11));

} else {
var statearr_38475_40796 = state_38384__$1;
(statearr_38475_40796[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36303__auto__ = null;
var cljs$core$async$mix_$_state_machine__36303__auto____0 = (function (){
var statearr_38481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38481[(0)] = cljs$core$async$mix_$_state_machine__36303__auto__);

(statearr_38481[(1)] = (1));

return statearr_38481;
});
var cljs$core$async$mix_$_state_machine__36303__auto____1 = (function (state_38384){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_38384);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e38482){var ex__36306__auto__ = e38482;
var statearr_38483_40797 = state_38384;
(statearr_38483_40797[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_38384[(4)]))){
var statearr_38486_40798 = state_38384;
(statearr_38486_40798[(1)] = cljs.core.first((state_38384[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40799 = state_38384;
state_38384 = G__40799;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36303__auto__ = function(state_38384){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36303__auto____1.call(this,state_38384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36303__auto____0;
cljs$core$async$mix_$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36303__auto____1;
return cljs$core$async$mix_$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_38491 = f__36542__auto__();
(statearr_38491[(6)] = c__36541__auto___40743);

return statearr_38491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_40804 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40804(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40805 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40805(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40808 = (function() {
var G__40809 = null;
var G__40809__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__40809__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__40809 = function(p,v){
switch(arguments.length){
case 1:
return G__40809__1.call(this,p);
case 2:
return G__40809__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40809.cljs$core$IFn$_invoke$arity$1 = G__40809__1;
G__40809.cljs$core$IFn$_invoke$arity$2 = G__40809__2;
return G__40809;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38522 = arguments.length;
switch (G__38522) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40808(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40808(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38562 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38563){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38563 = meta38563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38564,meta38563__$1){
var self__ = this;
var _38564__$1 = this;
return (new cljs.core.async.t_cljs$core$async38562(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38563__$1));
}));

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38564){
var self__ = this;
var _38564__$1 = this;
return self__.meta38563;
}));

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5811__auto__)){
var m = temp__5811__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38562.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38563","meta38563",-627243457,null)], null);
}));

(cljs.core.async.t_cljs$core$async38562.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38562");

(cljs.core.async.t_cljs$core$async38562.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38562");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38562.
 */
cljs.core.async.__GT_t_cljs$core$async38562 = (function cljs$core$async$__GT_t_cljs$core$async38562(ch,topic_fn,buf_fn,mults,ensure_mult,meta38563){
return (new cljs.core.async.t_cljs$core$async38562(ch,topic_fn,buf_fn,mults,ensure_mult,meta38563));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38549 = arguments.length;
switch (G__38549) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38539_SHARP_){
if(cljs.core.truth_((p1__38539_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38539_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38539_SHARP_.call(null,topic)))){
return p1__38539_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38539_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async38562(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__36541__auto___40832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_38678){
var state_val_38679 = (state_38678[(1)]);
if((state_val_38679 === (7))){
var inst_38673 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
var statearr_38685_40833 = state_38678__$1;
(statearr_38685_40833[(2)] = inst_38673);

(statearr_38685_40833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (20))){
var state_38678__$1 = state_38678;
var statearr_38688_40837 = state_38678__$1;
(statearr_38688_40837[(2)] = null);

(statearr_38688_40837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (1))){
var state_38678__$1 = state_38678;
var statearr_38690_40840 = state_38678__$1;
(statearr_38690_40840[(2)] = null);

(statearr_38690_40840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (24))){
var inst_38652 = (state_38678[(7)]);
var inst_38665 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38652);
var state_38678__$1 = state_38678;
var statearr_38695_40852 = state_38678__$1;
(statearr_38695_40852[(2)] = inst_38665);

(statearr_38695_40852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (4))){
var inst_38590 = (state_38678[(8)]);
var inst_38590__$1 = (state_38678[(2)]);
var inst_38592 = (inst_38590__$1 == null);
var state_38678__$1 = (function (){var statearr_38697 = state_38678;
(statearr_38697[(8)] = inst_38590__$1);

return statearr_38697;
})();
if(cljs.core.truth_(inst_38592)){
var statearr_38698_40860 = state_38678__$1;
(statearr_38698_40860[(1)] = (5));

} else {
var statearr_38699_40861 = state_38678__$1;
(statearr_38699_40861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (15))){
var inst_38644 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
var statearr_38703_40881 = state_38678__$1;
(statearr_38703_40881[(2)] = inst_38644);

(statearr_38703_40881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (21))){
var inst_38670 = (state_38678[(2)]);
var state_38678__$1 = (function (){var statearr_38705 = state_38678;
(statearr_38705[(9)] = inst_38670);

return statearr_38705;
})();
var statearr_38706_40883 = state_38678__$1;
(statearr_38706_40883[(2)] = null);

(statearr_38706_40883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (13))){
var inst_38621 = (state_38678[(10)]);
var inst_38627 = cljs.core.chunked_seq_QMARK_(inst_38621);
var state_38678__$1 = state_38678;
if(inst_38627){
var statearr_38707_40884 = state_38678__$1;
(statearr_38707_40884[(1)] = (16));

} else {
var statearr_38708_40885 = state_38678__$1;
(statearr_38708_40885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (22))){
var inst_38659 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
if(cljs.core.truth_(inst_38659)){
var statearr_38710_40887 = state_38678__$1;
(statearr_38710_40887[(1)] = (23));

} else {
var statearr_38711_40889 = state_38678__$1;
(statearr_38711_40889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (6))){
var inst_38652 = (state_38678[(7)]);
var inst_38654 = (state_38678[(11)]);
var inst_38590 = (state_38678[(8)]);
var inst_38652__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38590) : topic_fn.call(null,inst_38590));
var inst_38653 = cljs.core.deref(mults);
var inst_38654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38653,inst_38652__$1);
var state_38678__$1 = (function (){var statearr_38721 = state_38678;
(statearr_38721[(7)] = inst_38652__$1);

(statearr_38721[(11)] = inst_38654__$1);

return statearr_38721;
})();
if(cljs.core.truth_(inst_38654__$1)){
var statearr_38724_40891 = state_38678__$1;
(statearr_38724_40891[(1)] = (19));

} else {
var statearr_38725_40892 = state_38678__$1;
(statearr_38725_40892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (25))){
var inst_38667 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
var statearr_38729_40899 = state_38678__$1;
(statearr_38729_40899[(2)] = inst_38667);

(statearr_38729_40899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (17))){
var inst_38621 = (state_38678[(10)]);
var inst_38635 = cljs.core.first(inst_38621);
var inst_38636 = cljs.core.async.muxch_STAR_(inst_38635);
var inst_38637 = cljs.core.async.close_BANG_(inst_38636);
var inst_38638 = cljs.core.next(inst_38621);
var inst_38602 = inst_38638;
var inst_38603 = null;
var inst_38604 = (0);
var inst_38605 = (0);
var state_38678__$1 = (function (){var statearr_38735 = state_38678;
(statearr_38735[(12)] = inst_38604);

(statearr_38735[(13)] = inst_38603);

(statearr_38735[(14)] = inst_38605);

(statearr_38735[(15)] = inst_38637);

(statearr_38735[(16)] = inst_38602);

return statearr_38735;
})();
var statearr_38736_40904 = state_38678__$1;
(statearr_38736_40904[(2)] = null);

(statearr_38736_40904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (3))){
var inst_38675 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38678__$1,inst_38675);
} else {
if((state_val_38679 === (12))){
var inst_38646 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
var statearr_38746_40905 = state_38678__$1;
(statearr_38746_40905[(2)] = inst_38646);

(statearr_38746_40905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (2))){
var state_38678__$1 = state_38678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38678__$1,(4),ch);
} else {
if((state_val_38679 === (23))){
var state_38678__$1 = state_38678;
var statearr_38748_40907 = state_38678__$1;
(statearr_38748_40907[(2)] = null);

(statearr_38748_40907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (19))){
var inst_38654 = (state_38678[(11)]);
var inst_38590 = (state_38678[(8)]);
var inst_38657 = cljs.core.async.muxch_STAR_(inst_38654);
var state_38678__$1 = state_38678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38678__$1,(22),inst_38657,inst_38590);
} else {
if((state_val_38679 === (11))){
var inst_38621 = (state_38678[(10)]);
var inst_38602 = (state_38678[(16)]);
var inst_38621__$1 = cljs.core.seq(inst_38602);
var state_38678__$1 = (function (){var statearr_38754 = state_38678;
(statearr_38754[(10)] = inst_38621__$1);

return statearr_38754;
})();
if(inst_38621__$1){
var statearr_38755_40908 = state_38678__$1;
(statearr_38755_40908[(1)] = (13));

} else {
var statearr_38756_40909 = state_38678__$1;
(statearr_38756_40909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (9))){
var inst_38648 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
var statearr_38757_40910 = state_38678__$1;
(statearr_38757_40910[(2)] = inst_38648);

(statearr_38757_40910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (5))){
var inst_38599 = cljs.core.deref(mults);
var inst_38600 = cljs.core.vals(inst_38599);
var inst_38601 = cljs.core.seq(inst_38600);
var inst_38602 = inst_38601;
var inst_38603 = null;
var inst_38604 = (0);
var inst_38605 = (0);
var state_38678__$1 = (function (){var statearr_38759 = state_38678;
(statearr_38759[(12)] = inst_38604);

(statearr_38759[(13)] = inst_38603);

(statearr_38759[(14)] = inst_38605);

(statearr_38759[(16)] = inst_38602);

return statearr_38759;
})();
var statearr_38760_40912 = state_38678__$1;
(statearr_38760_40912[(2)] = null);

(statearr_38760_40912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (14))){
var state_38678__$1 = state_38678;
var statearr_38764_40913 = state_38678__$1;
(statearr_38764_40913[(2)] = null);

(statearr_38764_40913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (16))){
var inst_38621 = (state_38678[(10)]);
var inst_38629 = cljs.core.chunk_first(inst_38621);
var inst_38631 = cljs.core.chunk_rest(inst_38621);
var inst_38632 = cljs.core.count(inst_38629);
var inst_38602 = inst_38631;
var inst_38603 = inst_38629;
var inst_38604 = inst_38632;
var inst_38605 = (0);
var state_38678__$1 = (function (){var statearr_38766 = state_38678;
(statearr_38766[(12)] = inst_38604);

(statearr_38766[(13)] = inst_38603);

(statearr_38766[(14)] = inst_38605);

(statearr_38766[(16)] = inst_38602);

return statearr_38766;
})();
var statearr_38768_40914 = state_38678__$1;
(statearr_38768_40914[(2)] = null);

(statearr_38768_40914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (10))){
var inst_38604 = (state_38678[(12)]);
var inst_38603 = (state_38678[(13)]);
var inst_38605 = (state_38678[(14)]);
var inst_38602 = (state_38678[(16)]);
var inst_38610 = cljs.core._nth(inst_38603,inst_38605);
var inst_38611 = cljs.core.async.muxch_STAR_(inst_38610);
var inst_38612 = cljs.core.async.close_BANG_(inst_38611);
var inst_38617 = (inst_38605 + (1));
var tmp38761 = inst_38604;
var tmp38762 = inst_38603;
var tmp38763 = inst_38602;
var inst_38602__$1 = tmp38763;
var inst_38603__$1 = tmp38762;
var inst_38604__$1 = tmp38761;
var inst_38605__$1 = inst_38617;
var state_38678__$1 = (function (){var statearr_38777 = state_38678;
(statearr_38777[(12)] = inst_38604__$1);

(statearr_38777[(13)] = inst_38603__$1);

(statearr_38777[(14)] = inst_38605__$1);

(statearr_38777[(17)] = inst_38612);

(statearr_38777[(16)] = inst_38602__$1);

return statearr_38777;
})();
var statearr_38778_40915 = state_38678__$1;
(statearr_38778_40915[(2)] = null);

(statearr_38778_40915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (18))){
var inst_38641 = (state_38678[(2)]);
var state_38678__$1 = state_38678;
var statearr_38781_40919 = state_38678__$1;
(statearr_38781_40919[(2)] = inst_38641);

(statearr_38781_40919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38679 === (8))){
var inst_38604 = (state_38678[(12)]);
var inst_38605 = (state_38678[(14)]);
var inst_38607 = (inst_38605 < inst_38604);
var inst_38608 = inst_38607;
var state_38678__$1 = state_38678;
if(cljs.core.truth_(inst_38608)){
var statearr_38782_40924 = state_38678__$1;
(statearr_38782_40924[(1)] = (10));

} else {
var statearr_38783_40925 = state_38678__$1;
(statearr_38783_40925[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_38787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38787[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_38787[(1)] = (1));

return statearr_38787;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_38678){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_38678);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e38790){var ex__36306__auto__ = e38790;
var statearr_38791_40926 = state_38678;
(statearr_38791_40926[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_38678[(4)]))){
var statearr_38792_40927 = state_38678;
(statearr_38792_40927[(1)] = cljs.core.first((state_38678[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40928 = state_38678;
state_38678 = G__40928;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_38678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_38678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_38796 = f__36542__auto__();
(statearr_38796[(6)] = c__36541__auto___40832);

return statearr_38796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38804 = arguments.length;
switch (G__38804) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38816 = arguments.length;
switch (G__38816) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38829 = arguments.length;
switch (G__38829) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__36541__auto___40932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_38907){
var state_val_38908 = (state_38907[(1)]);
if((state_val_38908 === (7))){
var state_38907__$1 = state_38907;
var statearr_38911_40933 = state_38907__$1;
(statearr_38911_40933[(2)] = null);

(statearr_38911_40933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (1))){
var state_38907__$1 = state_38907;
var statearr_38912_40934 = state_38907__$1;
(statearr_38912_40934[(2)] = null);

(statearr_38912_40934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (4))){
var inst_38842 = (state_38907[(7)]);
var inst_38843 = (state_38907[(8)]);
var inst_38845 = (inst_38843 < inst_38842);
var state_38907__$1 = state_38907;
if(cljs.core.truth_(inst_38845)){
var statearr_38915_40935 = state_38907__$1;
(statearr_38915_40935[(1)] = (6));

} else {
var statearr_38917_40936 = state_38907__$1;
(statearr_38917_40936[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (15))){
var inst_38890 = (state_38907[(9)]);
var inst_38895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38890);
var state_38907__$1 = state_38907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38907__$1,(17),out,inst_38895);
} else {
if((state_val_38908 === (13))){
var inst_38890 = (state_38907[(9)]);
var inst_38890__$1 = (state_38907[(2)]);
var inst_38891 = cljs.core.some(cljs.core.nil_QMARK_,inst_38890__$1);
var state_38907__$1 = (function (){var statearr_38926 = state_38907;
(statearr_38926[(9)] = inst_38890__$1);

return statearr_38926;
})();
if(cljs.core.truth_(inst_38891)){
var statearr_38927_40937 = state_38907__$1;
(statearr_38927_40937[(1)] = (14));

} else {
var statearr_38928_40938 = state_38907__$1;
(statearr_38928_40938[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (6))){
var state_38907__$1 = state_38907;
var statearr_38929_40939 = state_38907__$1;
(statearr_38929_40939[(2)] = null);

(statearr_38929_40939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (17))){
var inst_38897 = (state_38907[(2)]);
var state_38907__$1 = (function (){var statearr_38943 = state_38907;
(statearr_38943[(10)] = inst_38897);

return statearr_38943;
})();
var statearr_38948_40940 = state_38907__$1;
(statearr_38948_40940[(2)] = null);

(statearr_38948_40940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (3))){
var inst_38902 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38907__$1,inst_38902);
} else {
if((state_val_38908 === (12))){
var _ = (function (){var statearr_38950 = state_38907;
(statearr_38950[(4)] = cljs.core.rest((state_38907[(4)])));

return statearr_38950;
})();
var state_38907__$1 = state_38907;
var ex38941 = (state_38907__$1[(2)]);
var statearr_38951_40941 = state_38907__$1;
(statearr_38951_40941[(5)] = ex38941);


if((ex38941 instanceof Object)){
var statearr_38952_40946 = state_38907__$1;
(statearr_38952_40946[(1)] = (11));

(statearr_38952_40946[(5)] = null);

} else {
throw ex38941;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (2))){
var inst_38840 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38842 = cnt;
var inst_38843 = (0);
var state_38907__$1 = (function (){var statearr_38957 = state_38907;
(statearr_38957[(11)] = inst_38840);

(statearr_38957[(7)] = inst_38842);

(statearr_38957[(8)] = inst_38843);

return statearr_38957;
})();
var statearr_38958_40950 = state_38907__$1;
(statearr_38958_40950[(2)] = null);

(statearr_38958_40950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (11))){
var inst_38866 = (state_38907[(2)]);
var inst_38867 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38907__$1 = (function (){var statearr_38970 = state_38907;
(statearr_38970[(12)] = inst_38866);

return statearr_38970;
})();
var statearr_38973_40951 = state_38907__$1;
(statearr_38973_40951[(2)] = inst_38867);

(statearr_38973_40951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (9))){
var inst_38843 = (state_38907[(8)]);
var _ = (function (){var statearr_38975 = state_38907;
(statearr_38975[(4)] = cljs.core.cons((12),(state_38907[(4)])));

return statearr_38975;
})();
var inst_38873 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38843) : chs__$1.call(null,inst_38843));
var inst_38875 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38843) : done.call(null,inst_38843));
var inst_38876 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38873,inst_38875);
var ___$1 = (function (){var statearr_38976 = state_38907;
(statearr_38976[(4)] = cljs.core.rest((state_38907[(4)])));

return statearr_38976;
})();
var state_38907__$1 = state_38907;
var statearr_38982_40958 = state_38907__$1;
(statearr_38982_40958[(2)] = inst_38876);

(statearr_38982_40958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (5))){
var inst_38887 = (state_38907[(2)]);
var state_38907__$1 = (function (){var statearr_38983 = state_38907;
(statearr_38983[(13)] = inst_38887);

return statearr_38983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38907__$1,(13),dchan);
} else {
if((state_val_38908 === (14))){
var inst_38893 = cljs.core.async.close_BANG_(out);
var state_38907__$1 = state_38907;
var statearr_38987_40959 = state_38907__$1;
(statearr_38987_40959[(2)] = inst_38893);

(statearr_38987_40959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (16))){
var inst_38900 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
var statearr_38988_40960 = state_38907__$1;
(statearr_38988_40960[(2)] = inst_38900);

(statearr_38988_40960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (10))){
var inst_38843 = (state_38907[(8)]);
var inst_38879 = (state_38907[(2)]);
var inst_38881 = (inst_38843 + (1));
var inst_38843__$1 = inst_38881;
var state_38907__$1 = (function (){var statearr_38989 = state_38907;
(statearr_38989[(14)] = inst_38879);

(statearr_38989[(8)] = inst_38843__$1);

return statearr_38989;
})();
var statearr_38990_40961 = state_38907__$1;
(statearr_38990_40961[(2)] = null);

(statearr_38990_40961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (8))){
var inst_38885 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
var statearr_38991_40962 = state_38907__$1;
(statearr_38991_40962[(2)] = inst_38885);

(statearr_38991_40962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_38995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38995[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_38995[(1)] = (1));

return statearr_38995;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_38907){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_38907);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e38996){var ex__36306__auto__ = e38996;
var statearr_38997_40966 = state_38907;
(statearr_38997_40966[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_38907[(4)]))){
var statearr_38999_40968 = state_38907;
(statearr_38999_40968[(1)] = cljs.core.first((state_38907[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40972 = state_38907;
state_38907 = G__40972;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_38907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_38907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39004 = f__36542__auto__();
(statearr_39004[(6)] = c__36541__auto___40932);

return statearr_39004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39014 = arguments.length;
switch (G__39014) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36541__auto___40975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_39058){
var state_val_39059 = (state_39058[(1)]);
if((state_val_39059 === (7))){
var inst_39034 = (state_39058[(7)]);
var inst_39035 = (state_39058[(8)]);
var inst_39034__$1 = (state_39058[(2)]);
var inst_39035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39034__$1,(0),null);
var inst_39036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39034__$1,(1),null);
var inst_39037 = (inst_39035__$1 == null);
var state_39058__$1 = (function (){var statearr_39084 = state_39058;
(statearr_39084[(7)] = inst_39034__$1);

(statearr_39084[(8)] = inst_39035__$1);

(statearr_39084[(9)] = inst_39036);

return statearr_39084;
})();
if(cljs.core.truth_(inst_39037)){
var statearr_39085_40980 = state_39058__$1;
(statearr_39085_40980[(1)] = (8));

} else {
var statearr_39086_40982 = state_39058__$1;
(statearr_39086_40982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (1))){
var inst_39022 = cljs.core.vec(chs);
var inst_39024 = inst_39022;
var state_39058__$1 = (function (){var statearr_39087 = state_39058;
(statearr_39087[(10)] = inst_39024);

return statearr_39087;
})();
var statearr_39088_40984 = state_39058__$1;
(statearr_39088_40984[(2)] = null);

(statearr_39088_40984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (4))){
var inst_39024 = (state_39058[(10)]);
var state_39058__$1 = state_39058;
return cljs.core.async.ioc_alts_BANG_(state_39058__$1,(7),inst_39024);
} else {
if((state_val_39059 === (6))){
var inst_39053 = (state_39058[(2)]);
var state_39058__$1 = state_39058;
var statearr_39089_40986 = state_39058__$1;
(statearr_39089_40986[(2)] = inst_39053);

(statearr_39089_40986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (3))){
var inst_39055 = (state_39058[(2)]);
var state_39058__$1 = state_39058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39058__$1,inst_39055);
} else {
if((state_val_39059 === (2))){
var inst_39024 = (state_39058[(10)]);
var inst_39026 = cljs.core.count(inst_39024);
var inst_39027 = (inst_39026 > (0));
var state_39058__$1 = state_39058;
if(cljs.core.truth_(inst_39027)){
var statearr_39091_40987 = state_39058__$1;
(statearr_39091_40987[(1)] = (4));

} else {
var statearr_39092_40988 = state_39058__$1;
(statearr_39092_40988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (11))){
var inst_39024 = (state_39058[(10)]);
var inst_39046 = (state_39058[(2)]);
var tmp39090 = inst_39024;
var inst_39024__$1 = tmp39090;
var state_39058__$1 = (function (){var statearr_39094 = state_39058;
(statearr_39094[(11)] = inst_39046);

(statearr_39094[(10)] = inst_39024__$1);

return statearr_39094;
})();
var statearr_39097_40989 = state_39058__$1;
(statearr_39097_40989[(2)] = null);

(statearr_39097_40989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (9))){
var inst_39035 = (state_39058[(8)]);
var state_39058__$1 = state_39058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39058__$1,(11),out,inst_39035);
} else {
if((state_val_39059 === (5))){
var inst_39051 = cljs.core.async.close_BANG_(out);
var state_39058__$1 = state_39058;
var statearr_39100_40990 = state_39058__$1;
(statearr_39100_40990[(2)] = inst_39051);

(statearr_39100_40990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (10))){
var inst_39049 = (state_39058[(2)]);
var state_39058__$1 = state_39058;
var statearr_39102_40991 = state_39058__$1;
(statearr_39102_40991[(2)] = inst_39049);

(statearr_39102_40991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39059 === (8))){
var inst_39034 = (state_39058[(7)]);
var inst_39035 = (state_39058[(8)]);
var inst_39024 = (state_39058[(10)]);
var inst_39036 = (state_39058[(9)]);
var inst_39041 = (function (){var cs = inst_39024;
var vec__39030 = inst_39034;
var v = inst_39035;
var c = inst_39036;
return (function (p1__39007_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39007_SHARP_);
});
})();
var inst_39042 = cljs.core.filterv(inst_39041,inst_39024);
var inst_39024__$1 = inst_39042;
var state_39058__$1 = (function (){var statearr_39111 = state_39058;
(statearr_39111[(10)] = inst_39024__$1);

return statearr_39111;
})();
var statearr_39114_40992 = state_39058__$1;
(statearr_39114_40992[(2)] = null);

(statearr_39114_40992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_39115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39115[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_39115[(1)] = (1));

return statearr_39115;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_39058){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_39058);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e39117){var ex__36306__auto__ = e39117;
var statearr_39122_40993 = state_39058;
(statearr_39122_40993[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_39058[(4)]))){
var statearr_39129_40994 = state_39058;
(statearr_39129_40994[(1)] = cljs.core.first((state_39058[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40999 = state_39058;
state_39058 = G__40999;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_39058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_39058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39130 = f__36542__auto__();
(statearr_39130[(6)] = c__36541__auto___40975);

return statearr_39130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39134 = arguments.length;
switch (G__39134) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36541__auto___41001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_39210){
var state_val_39211 = (state_39210[(1)]);
if((state_val_39211 === (7))){
var inst_39187 = (state_39210[(7)]);
var inst_39187__$1 = (state_39210[(2)]);
var inst_39188 = (inst_39187__$1 == null);
var inst_39189 = cljs.core.not(inst_39188);
var state_39210__$1 = (function (){var statearr_39216 = state_39210;
(statearr_39216[(7)] = inst_39187__$1);

return statearr_39216;
})();
if(inst_39189){
var statearr_39219_41002 = state_39210__$1;
(statearr_39219_41002[(1)] = (8));

} else {
var statearr_39220_41003 = state_39210__$1;
(statearr_39220_41003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (1))){
var inst_39182 = (0);
var state_39210__$1 = (function (){var statearr_39222 = state_39210;
(statearr_39222[(8)] = inst_39182);

return statearr_39222;
})();
var statearr_39223_41004 = state_39210__$1;
(statearr_39223_41004[(2)] = null);

(statearr_39223_41004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (4))){
var state_39210__$1 = state_39210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39210__$1,(7),ch);
} else {
if((state_val_39211 === (6))){
var inst_39200 = (state_39210[(2)]);
var state_39210__$1 = state_39210;
var statearr_39228_41005 = state_39210__$1;
(statearr_39228_41005[(2)] = inst_39200);

(statearr_39228_41005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (3))){
var inst_39202 = (state_39210[(2)]);
var inst_39204 = cljs.core.async.close_BANG_(out);
var state_39210__$1 = (function (){var statearr_39229 = state_39210;
(statearr_39229[(9)] = inst_39202);

return statearr_39229;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39210__$1,inst_39204);
} else {
if((state_val_39211 === (2))){
var inst_39182 = (state_39210[(8)]);
var inst_39184 = (inst_39182 < n);
var state_39210__$1 = state_39210;
if(cljs.core.truth_(inst_39184)){
var statearr_39231_41006 = state_39210__$1;
(statearr_39231_41006[(1)] = (4));

} else {
var statearr_39232_41007 = state_39210__$1;
(statearr_39232_41007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (11))){
var inst_39182 = (state_39210[(8)]);
var inst_39192 = (state_39210[(2)]);
var inst_39193 = (inst_39182 + (1));
var inst_39182__$1 = inst_39193;
var state_39210__$1 = (function (){var statearr_39234 = state_39210;
(statearr_39234[(10)] = inst_39192);

(statearr_39234[(8)] = inst_39182__$1);

return statearr_39234;
})();
var statearr_39238_41008 = state_39210__$1;
(statearr_39238_41008[(2)] = null);

(statearr_39238_41008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (9))){
var state_39210__$1 = state_39210;
var statearr_39240_41009 = state_39210__$1;
(statearr_39240_41009[(2)] = null);

(statearr_39240_41009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (5))){
var state_39210__$1 = state_39210;
var statearr_39242_41010 = state_39210__$1;
(statearr_39242_41010[(2)] = null);

(statearr_39242_41010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (10))){
var inst_39197 = (state_39210[(2)]);
var state_39210__$1 = state_39210;
var statearr_39246_41011 = state_39210__$1;
(statearr_39246_41011[(2)] = inst_39197);

(statearr_39246_41011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39211 === (8))){
var inst_39187 = (state_39210[(7)]);
var state_39210__$1 = state_39210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39210__$1,(11),out,inst_39187);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_39249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39249[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_39249[(1)] = (1));

return statearr_39249;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_39210){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_39210);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e39255){var ex__36306__auto__ = e39255;
var statearr_39256_41012 = state_39210;
(statearr_39256_41012[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_39210[(4)]))){
var statearr_39257_41027 = state_39210;
(statearr_39257_41027[(1)] = cljs.core.first((state_39210[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41028 = state_39210;
state_39210 = G__41028;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_39210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_39210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39259 = f__36542__auto__();
(statearr_39259[(6)] = c__36541__auto___41001);

return statearr_39259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39271 = (function (f,ch,meta39262,_,fn1,meta39272){
this.f = f;
this.ch = ch;
this.meta39262 = meta39262;
this._ = _;
this.fn1 = fn1;
this.meta39272 = meta39272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39273,meta39272__$1){
var self__ = this;
var _39273__$1 = this;
return (new cljs.core.async.t_cljs$core$async39271(self__.f,self__.ch,self__.meta39262,self__._,self__.fn1,meta39272__$1));
}));

(cljs.core.async.t_cljs$core$async39271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39273){
var self__ = this;
var _39273__$1 = this;
return self__.meta39272;
}));

(cljs.core.async.t_cljs$core$async39271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39260_SHARP_){
var G__39286 = (((p1__39260_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39260_SHARP_) : self__.f.call(null,p1__39260_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39286) : f1.call(null,G__39286));
});
}));

(cljs.core.async.t_cljs$core$async39271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39262","meta39262",2070062431,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39261","cljs.core.async/t_cljs$core$async39261",361933587,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39272","meta39272",1855491476,null)], null);
}));

(cljs.core.async.t_cljs$core$async39271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39271");

(cljs.core.async.t_cljs$core$async39271.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39271.
 */
cljs.core.async.__GT_t_cljs$core$async39271 = (function cljs$core$async$__GT_t_cljs$core$async39271(f,ch,meta39262,_,fn1,meta39272){
return (new cljs.core.async.t_cljs$core$async39271(f,ch,meta39262,_,fn1,meta39272));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39261 = (function (f,ch,meta39262){
this.f = f;
this.ch = ch;
this.meta39262 = meta39262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39263,meta39262__$1){
var self__ = this;
var _39263__$1 = this;
return (new cljs.core.async.t_cljs$core$async39261(self__.f,self__.ch,meta39262__$1));
}));

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39263){
var self__ = this;
var _39263__$1 = this;
return self__.meta39262;
}));

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async39271(self__.f,self__.ch,self__.meta39262,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39292 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39292) : self__.f.call(null,G__39292));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39262","meta39262",2070062431,null)], null);
}));

(cljs.core.async.t_cljs$core$async39261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39261");

(cljs.core.async.t_cljs$core$async39261.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39261.
 */
cljs.core.async.__GT_t_cljs$core$async39261 = (function cljs$core$async$__GT_t_cljs$core$async39261(f,ch,meta39262){
return (new cljs.core.async.t_cljs$core$async39261(f,ch,meta39262));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39261(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39314 = (function (f,ch,meta39315){
this.f = f;
this.ch = ch;
this.meta39315 = meta39315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39316,meta39315__$1){
var self__ = this;
var _39316__$1 = this;
return (new cljs.core.async.t_cljs$core$async39314(self__.f,self__.ch,meta39315__$1));
}));

(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39316){
var self__ = this;
var _39316__$1 = this;
return self__.meta39315;
}));

(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39315","meta39315",1674989186,null)], null);
}));

(cljs.core.async.t_cljs$core$async39314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39314");

(cljs.core.async.t_cljs$core$async39314.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39314.
 */
cljs.core.async.__GT_t_cljs$core$async39314 = (function cljs$core$async$__GT_t_cljs$core$async39314(f,ch,meta39315){
return (new cljs.core.async.t_cljs$core$async39314(f,ch,meta39315));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39335 = (function (p,ch,meta39336){
this.p = p;
this.ch = ch;
this.meta39336 = meta39336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39337,meta39336__$1){
var self__ = this;
var _39337__$1 = this;
return (new cljs.core.async.t_cljs$core$async39335(self__.p,self__.ch,meta39336__$1));
}));

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39337){
var self__ = this;
var _39337__$1 = this;
return self__.meta39336;
}));

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39336","meta39336",-1971304025,null)], null);
}));

(cljs.core.async.t_cljs$core$async39335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39335");

(cljs.core.async.t_cljs$core$async39335.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39335.
 */
cljs.core.async.__GT_t_cljs$core$async39335 = (function cljs$core$async$__GT_t_cljs$core$async39335(p,ch,meta39336){
return (new cljs.core.async.t_cljs$core$async39335(p,ch,meta39336));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async39335(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39350 = arguments.length;
switch (G__39350) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36541__auto___41079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_39380){
var state_val_39381 = (state_39380[(1)]);
if((state_val_39381 === (7))){
var inst_39375 = (state_39380[(2)]);
var state_39380__$1 = state_39380;
var statearr_39383_41080 = state_39380__$1;
(statearr_39383_41080[(2)] = inst_39375);

(statearr_39383_41080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (1))){
var state_39380__$1 = state_39380;
var statearr_39384_41081 = state_39380__$1;
(statearr_39384_41081[(2)] = null);

(statearr_39384_41081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (4))){
var inst_39361 = (state_39380[(7)]);
var inst_39361__$1 = (state_39380[(2)]);
var inst_39362 = (inst_39361__$1 == null);
var state_39380__$1 = (function (){var statearr_39385 = state_39380;
(statearr_39385[(7)] = inst_39361__$1);

return statearr_39385;
})();
if(cljs.core.truth_(inst_39362)){
var statearr_39386_41087 = state_39380__$1;
(statearr_39386_41087[(1)] = (5));

} else {
var statearr_39387_41088 = state_39380__$1;
(statearr_39387_41088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (6))){
var inst_39361 = (state_39380[(7)]);
var inst_39366 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39361) : p.call(null,inst_39361));
var state_39380__$1 = state_39380;
if(cljs.core.truth_(inst_39366)){
var statearr_39389_41089 = state_39380__$1;
(statearr_39389_41089[(1)] = (8));

} else {
var statearr_39390_41090 = state_39380__$1;
(statearr_39390_41090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (3))){
var inst_39377 = (state_39380[(2)]);
var state_39380__$1 = state_39380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39380__$1,inst_39377);
} else {
if((state_val_39381 === (2))){
var state_39380__$1 = state_39380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39380__$1,(4),ch);
} else {
if((state_val_39381 === (11))){
var inst_39369 = (state_39380[(2)]);
var state_39380__$1 = state_39380;
var statearr_39393_41096 = state_39380__$1;
(statearr_39393_41096[(2)] = inst_39369);

(statearr_39393_41096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (9))){
var state_39380__$1 = state_39380;
var statearr_39395_41097 = state_39380__$1;
(statearr_39395_41097[(2)] = null);

(statearr_39395_41097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (5))){
var inst_39364 = cljs.core.async.close_BANG_(out);
var state_39380__$1 = state_39380;
var statearr_39397_41107 = state_39380__$1;
(statearr_39397_41107[(2)] = inst_39364);

(statearr_39397_41107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (10))){
var inst_39372 = (state_39380[(2)]);
var state_39380__$1 = (function (){var statearr_39399 = state_39380;
(statearr_39399[(8)] = inst_39372);

return statearr_39399;
})();
var statearr_39400_41114 = state_39380__$1;
(statearr_39400_41114[(2)] = null);

(statearr_39400_41114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39381 === (8))){
var inst_39361 = (state_39380[(7)]);
var state_39380__$1 = state_39380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39380__$1,(11),out,inst_39361);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_39404 = [null,null,null,null,null,null,null,null,null];
(statearr_39404[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_39404[(1)] = (1));

return statearr_39404;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_39380){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_39380);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e39405){var ex__36306__auto__ = e39405;
var statearr_39406_41120 = state_39380;
(statearr_39406_41120[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_39380[(4)]))){
var statearr_39407_41121 = state_39380;
(statearr_39407_41121[(1)] = cljs.core.first((state_39380[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41122 = state_39380;
state_39380 = G__41122;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_39380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_39380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39408 = f__36542__auto__();
(statearr_39408[(6)] = c__36541__auto___41079);

return statearr_39408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39410 = arguments.length;
switch (G__39410) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36541__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_39484){
var state_val_39485 = (state_39484[(1)]);
if((state_val_39485 === (7))){
var inst_39480 = (state_39484[(2)]);
var state_39484__$1 = state_39484;
var statearr_39486_41125 = state_39484__$1;
(statearr_39486_41125[(2)] = inst_39480);

(statearr_39486_41125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (20))){
var inst_39444 = (state_39484[(7)]);
var inst_39461 = (state_39484[(2)]);
var inst_39462 = cljs.core.next(inst_39444);
var inst_39429 = inst_39462;
var inst_39430 = null;
var inst_39431 = (0);
var inst_39432 = (0);
var state_39484__$1 = (function (){var statearr_39487 = state_39484;
(statearr_39487[(8)] = inst_39432);

(statearr_39487[(9)] = inst_39430);

(statearr_39487[(10)] = inst_39461);

(statearr_39487[(11)] = inst_39429);

(statearr_39487[(12)] = inst_39431);

return statearr_39487;
})();
var statearr_39488_41129 = state_39484__$1;
(statearr_39488_41129[(2)] = null);

(statearr_39488_41129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (1))){
var state_39484__$1 = state_39484;
var statearr_39489_41130 = state_39484__$1;
(statearr_39489_41130[(2)] = null);

(statearr_39489_41130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (4))){
var inst_39414 = (state_39484[(13)]);
var inst_39414__$1 = (state_39484[(2)]);
var inst_39419 = (inst_39414__$1 == null);
var state_39484__$1 = (function (){var statearr_39490 = state_39484;
(statearr_39490[(13)] = inst_39414__$1);

return statearr_39490;
})();
if(cljs.core.truth_(inst_39419)){
var statearr_39491_41134 = state_39484__$1;
(statearr_39491_41134[(1)] = (5));

} else {
var statearr_39492_41135 = state_39484__$1;
(statearr_39492_41135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (15))){
var state_39484__$1 = state_39484;
var statearr_39497_41136 = state_39484__$1;
(statearr_39497_41136[(2)] = null);

(statearr_39497_41136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (21))){
var state_39484__$1 = state_39484;
var statearr_39498_41137 = state_39484__$1;
(statearr_39498_41137[(2)] = null);

(statearr_39498_41137[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (13))){
var inst_39432 = (state_39484[(8)]);
var inst_39430 = (state_39484[(9)]);
var inst_39429 = (state_39484[(11)]);
var inst_39431 = (state_39484[(12)]);
var inst_39440 = (state_39484[(2)]);
var inst_39441 = (inst_39432 + (1));
var tmp39494 = inst_39430;
var tmp39495 = inst_39429;
var tmp39496 = inst_39431;
var inst_39429__$1 = tmp39495;
var inst_39430__$1 = tmp39494;
var inst_39431__$1 = tmp39496;
var inst_39432__$1 = inst_39441;
var state_39484__$1 = (function (){var statearr_39499 = state_39484;
(statearr_39499[(8)] = inst_39432__$1);

(statearr_39499[(9)] = inst_39430__$1);

(statearr_39499[(14)] = inst_39440);

(statearr_39499[(11)] = inst_39429__$1);

(statearr_39499[(12)] = inst_39431__$1);

return statearr_39499;
})();
var statearr_39501_41140 = state_39484__$1;
(statearr_39501_41140[(2)] = null);

(statearr_39501_41140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (22))){
var state_39484__$1 = state_39484;
var statearr_39502_41144 = state_39484__$1;
(statearr_39502_41144[(2)] = null);

(statearr_39502_41144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (6))){
var inst_39414 = (state_39484[(13)]);
var inst_39427 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39414) : f.call(null,inst_39414));
var inst_39428 = cljs.core.seq(inst_39427);
var inst_39429 = inst_39428;
var inst_39430 = null;
var inst_39431 = (0);
var inst_39432 = (0);
var state_39484__$1 = (function (){var statearr_39506 = state_39484;
(statearr_39506[(8)] = inst_39432);

(statearr_39506[(9)] = inst_39430);

(statearr_39506[(11)] = inst_39429);

(statearr_39506[(12)] = inst_39431);

return statearr_39506;
})();
var statearr_39510_41145 = state_39484__$1;
(statearr_39510_41145[(2)] = null);

(statearr_39510_41145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (17))){
var inst_39444 = (state_39484[(7)]);
var inst_39450 = cljs.core.chunk_first(inst_39444);
var inst_39455 = cljs.core.chunk_rest(inst_39444);
var inst_39456 = cljs.core.count(inst_39450);
var inst_39429 = inst_39455;
var inst_39430 = inst_39450;
var inst_39431 = inst_39456;
var inst_39432 = (0);
var state_39484__$1 = (function (){var statearr_39511 = state_39484;
(statearr_39511[(8)] = inst_39432);

(statearr_39511[(9)] = inst_39430);

(statearr_39511[(11)] = inst_39429);

(statearr_39511[(12)] = inst_39431);

return statearr_39511;
})();
var statearr_39512_41157 = state_39484__$1;
(statearr_39512_41157[(2)] = null);

(statearr_39512_41157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (3))){
var inst_39482 = (state_39484[(2)]);
var state_39484__$1 = state_39484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39484__$1,inst_39482);
} else {
if((state_val_39485 === (12))){
var inst_39470 = (state_39484[(2)]);
var state_39484__$1 = state_39484;
var statearr_39513_41165 = state_39484__$1;
(statearr_39513_41165[(2)] = inst_39470);

(statearr_39513_41165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (2))){
var state_39484__$1 = state_39484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39484__$1,(4),in$);
} else {
if((state_val_39485 === (23))){
var inst_39478 = (state_39484[(2)]);
var state_39484__$1 = state_39484;
var statearr_39514_41166 = state_39484__$1;
(statearr_39514_41166[(2)] = inst_39478);

(statearr_39514_41166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (19))){
var inst_39465 = (state_39484[(2)]);
var state_39484__$1 = state_39484;
var statearr_39515_41167 = state_39484__$1;
(statearr_39515_41167[(2)] = inst_39465);

(statearr_39515_41167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (11))){
var inst_39444 = (state_39484[(7)]);
var inst_39429 = (state_39484[(11)]);
var inst_39444__$1 = cljs.core.seq(inst_39429);
var state_39484__$1 = (function (){var statearr_39516 = state_39484;
(statearr_39516[(7)] = inst_39444__$1);

return statearr_39516;
})();
if(inst_39444__$1){
var statearr_39517_41170 = state_39484__$1;
(statearr_39517_41170[(1)] = (14));

} else {
var statearr_39519_41171 = state_39484__$1;
(statearr_39519_41171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (9))){
var inst_39472 = (state_39484[(2)]);
var inst_39473 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39484__$1 = (function (){var statearr_39520 = state_39484;
(statearr_39520[(15)] = inst_39472);

return statearr_39520;
})();
if(cljs.core.truth_(inst_39473)){
var statearr_39521_41172 = state_39484__$1;
(statearr_39521_41172[(1)] = (21));

} else {
var statearr_39522_41179 = state_39484__$1;
(statearr_39522_41179[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (5))){
var inst_39421 = cljs.core.async.close_BANG_(out);
var state_39484__$1 = state_39484;
var statearr_39523_41186 = state_39484__$1;
(statearr_39523_41186[(2)] = inst_39421);

(statearr_39523_41186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (14))){
var inst_39444 = (state_39484[(7)]);
var inst_39448 = cljs.core.chunked_seq_QMARK_(inst_39444);
var state_39484__$1 = state_39484;
if(inst_39448){
var statearr_39524_41191 = state_39484__$1;
(statearr_39524_41191[(1)] = (17));

} else {
var statearr_39525_41192 = state_39484__$1;
(statearr_39525_41192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (16))){
var inst_39468 = (state_39484[(2)]);
var state_39484__$1 = state_39484;
var statearr_39527_41193 = state_39484__$1;
(statearr_39527_41193[(2)] = inst_39468);

(statearr_39527_41193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39485 === (10))){
var inst_39432 = (state_39484[(8)]);
var inst_39430 = (state_39484[(9)]);
var inst_39438 = cljs.core._nth(inst_39430,inst_39432);
var state_39484__$1 = state_39484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39484__$1,(13),out,inst_39438);
} else {
if((state_val_39485 === (18))){
var inst_39444 = (state_39484[(7)]);
var inst_39459 = cljs.core.first(inst_39444);
var state_39484__$1 = state_39484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39484__$1,(20),out,inst_39459);
} else {
if((state_val_39485 === (8))){
var inst_39432 = (state_39484[(8)]);
var inst_39431 = (state_39484[(12)]);
var inst_39434 = (inst_39432 < inst_39431);
var inst_39435 = inst_39434;
var state_39484__$1 = state_39484;
if(cljs.core.truth_(inst_39435)){
var statearr_39538_41195 = state_39484__$1;
(statearr_39538_41195[(1)] = (10));

} else {
var statearr_39539_41197 = state_39484__$1;
(statearr_39539_41197[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36303__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36303__auto____0 = (function (){
var statearr_39543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39543[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36303__auto__);

(statearr_39543[(1)] = (1));

return statearr_39543;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36303__auto____1 = (function (state_39484){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_39484);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e39544){var ex__36306__auto__ = e39544;
var statearr_39545_41199 = state_39484;
(statearr_39545_41199[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_39484[(4)]))){
var statearr_39546_41200 = state_39484;
(statearr_39546_41200[(1)] = cljs.core.first((state_39484[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41201 = state_39484;
state_39484 = G__41201;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36303__auto__ = function(state_39484){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36303__auto____1.call(this,state_39484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36303__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36303__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39548 = f__36542__auto__();
(statearr_39548[(6)] = c__36541__auto__);

return statearr_39548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));

return c__36541__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39553 = arguments.length;
switch (G__39553) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39560 = arguments.length;
switch (G__39560) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39563 = arguments.length;
switch (G__39563) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36541__auto___41239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_39590){
var state_val_39591 = (state_39590[(1)]);
if((state_val_39591 === (7))){
var inst_39585 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
var statearr_39594_41253 = state_39590__$1;
(statearr_39594_41253[(2)] = inst_39585);

(statearr_39594_41253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (1))){
var inst_39566 = null;
var state_39590__$1 = (function (){var statearr_39595 = state_39590;
(statearr_39595[(7)] = inst_39566);

return statearr_39595;
})();
var statearr_39596_41254 = state_39590__$1;
(statearr_39596_41254[(2)] = null);

(statearr_39596_41254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (4))){
var inst_39569 = (state_39590[(8)]);
var inst_39569__$1 = (state_39590[(2)]);
var inst_39571 = (inst_39569__$1 == null);
var inst_39572 = cljs.core.not(inst_39571);
var state_39590__$1 = (function (){var statearr_39597 = state_39590;
(statearr_39597[(8)] = inst_39569__$1);

return statearr_39597;
})();
if(inst_39572){
var statearr_39599_41265 = state_39590__$1;
(statearr_39599_41265[(1)] = (5));

} else {
var statearr_39600_41267 = state_39590__$1;
(statearr_39600_41267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (6))){
var state_39590__$1 = state_39590;
var statearr_39601_41275 = state_39590__$1;
(statearr_39601_41275[(2)] = null);

(statearr_39601_41275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (3))){
var inst_39587 = (state_39590[(2)]);
var inst_39588 = cljs.core.async.close_BANG_(out);
var state_39590__$1 = (function (){var statearr_39602 = state_39590;
(statearr_39602[(9)] = inst_39587);

return statearr_39602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39590__$1,inst_39588);
} else {
if((state_val_39591 === (2))){
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39590__$1,(4),ch);
} else {
if((state_val_39591 === (11))){
var inst_39569 = (state_39590[(8)]);
var inst_39579 = (state_39590[(2)]);
var inst_39566 = inst_39569;
var state_39590__$1 = (function (){var statearr_39606 = state_39590;
(statearr_39606[(10)] = inst_39579);

(statearr_39606[(7)] = inst_39566);

return statearr_39606;
})();
var statearr_39607_41277 = state_39590__$1;
(statearr_39607_41277[(2)] = null);

(statearr_39607_41277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (9))){
var inst_39569 = (state_39590[(8)]);
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39590__$1,(11),out,inst_39569);
} else {
if((state_val_39591 === (5))){
var inst_39566 = (state_39590[(7)]);
var inst_39569 = (state_39590[(8)]);
var inst_39574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39569,inst_39566);
var state_39590__$1 = state_39590;
if(inst_39574){
var statearr_39611_41279 = state_39590__$1;
(statearr_39611_41279[(1)] = (8));

} else {
var statearr_39612_41280 = state_39590__$1;
(statearr_39612_41280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (10))){
var inst_39582 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
var statearr_39613_41281 = state_39590__$1;
(statearr_39613_41281[(2)] = inst_39582);

(statearr_39613_41281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (8))){
var inst_39566 = (state_39590[(7)]);
var tmp39610 = inst_39566;
var inst_39566__$1 = tmp39610;
var state_39590__$1 = (function (){var statearr_39614 = state_39590;
(statearr_39614[(7)] = inst_39566__$1);

return statearr_39614;
})();
var statearr_39615_41282 = state_39590__$1;
(statearr_39615_41282[(2)] = null);

(statearr_39615_41282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_39616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39616[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_39616[(1)] = (1));

return statearr_39616;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_39590){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_39590);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e39617){var ex__36306__auto__ = e39617;
var statearr_39618_41287 = state_39590;
(statearr_39618_41287[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_39590[(4)]))){
var statearr_39619_41292 = state_39590;
(statearr_39619_41292[(1)] = cljs.core.first((state_39590[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41299 = state_39590;
state_39590 = G__41299;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_39590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_39590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39621 = f__36542__auto__();
(statearr_39621[(6)] = c__36541__auto___41239);

return statearr_39621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39623 = arguments.length;
switch (G__39623) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36541__auto___41382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_39685){
var state_val_39686 = (state_39685[(1)]);
if((state_val_39686 === (7))){
var inst_39680 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39714_41384 = state_39685__$1;
(statearr_39714_41384[(2)] = inst_39680);

(statearr_39714_41384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (1))){
var inst_39634 = (new Array(n));
var inst_39635 = inst_39634;
var inst_39636 = (0);
var state_39685__$1 = (function (){var statearr_39718 = state_39685;
(statearr_39718[(7)] = inst_39636);

(statearr_39718[(8)] = inst_39635);

return statearr_39718;
})();
var statearr_39724_41386 = state_39685__$1;
(statearr_39724_41386[(2)] = null);

(statearr_39724_41386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (4))){
var inst_39645 = (state_39685[(9)]);
var inst_39645__$1 = (state_39685[(2)]);
var inst_39646 = (inst_39645__$1 == null);
var inst_39647 = cljs.core.not(inst_39646);
var state_39685__$1 = (function (){var statearr_39731 = state_39685;
(statearr_39731[(9)] = inst_39645__$1);

return statearr_39731;
})();
if(inst_39647){
var statearr_39733_41387 = state_39685__$1;
(statearr_39733_41387[(1)] = (5));

} else {
var statearr_39736_41388 = state_39685__$1;
(statearr_39736_41388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (15))){
var inst_39674 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39740_41389 = state_39685__$1;
(statearr_39740_41389[(2)] = inst_39674);

(statearr_39740_41389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (13))){
var state_39685__$1 = state_39685;
var statearr_39746_41390 = state_39685__$1;
(statearr_39746_41390[(2)] = null);

(statearr_39746_41390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (6))){
var inst_39636 = (state_39685[(7)]);
var inst_39669 = (inst_39636 > (0));
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39669)){
var statearr_39748_41391 = state_39685__$1;
(statearr_39748_41391[(1)] = (12));

} else {
var statearr_39749_41392 = state_39685__$1;
(statearr_39749_41392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (3))){
var inst_39682 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39685__$1,inst_39682);
} else {
if((state_val_39686 === (12))){
var inst_39635 = (state_39685[(8)]);
var inst_39672 = cljs.core.vec(inst_39635);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39685__$1,(15),out,inst_39672);
} else {
if((state_val_39686 === (2))){
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39685__$1,(4),ch);
} else {
if((state_val_39686 === (11))){
var inst_39657 = (state_39685[(2)]);
var inst_39658 = (new Array(n));
var inst_39635 = inst_39658;
var inst_39636 = (0);
var state_39685__$1 = (function (){var statearr_39750 = state_39685;
(statearr_39750[(10)] = inst_39657);

(statearr_39750[(7)] = inst_39636);

(statearr_39750[(8)] = inst_39635);

return statearr_39750;
})();
var statearr_39751_41419 = state_39685__$1;
(statearr_39751_41419[(2)] = null);

(statearr_39751_41419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (9))){
var inst_39635 = (state_39685[(8)]);
var inst_39655 = cljs.core.vec(inst_39635);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39685__$1,(11),out,inst_39655);
} else {
if((state_val_39686 === (5))){
var inst_39650 = (state_39685[(11)]);
var inst_39645 = (state_39685[(9)]);
var inst_39636 = (state_39685[(7)]);
var inst_39635 = (state_39685[(8)]);
var inst_39649 = (inst_39635[inst_39636] = inst_39645);
var inst_39650__$1 = (inst_39636 + (1));
var inst_39651 = (inst_39650__$1 < n);
var state_39685__$1 = (function (){var statearr_39755 = state_39685;
(statearr_39755[(11)] = inst_39650__$1);

(statearr_39755[(12)] = inst_39649);

return statearr_39755;
})();
if(cljs.core.truth_(inst_39651)){
var statearr_39756_41432 = state_39685__$1;
(statearr_39756_41432[(1)] = (8));

} else {
var statearr_39757_41435 = state_39685__$1;
(statearr_39757_41435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (14))){
var inst_39677 = (state_39685[(2)]);
var inst_39678 = cljs.core.async.close_BANG_(out);
var state_39685__$1 = (function (){var statearr_39759 = state_39685;
(statearr_39759[(13)] = inst_39677);

return statearr_39759;
})();
var statearr_39760_41449 = state_39685__$1;
(statearr_39760_41449[(2)] = inst_39678);

(statearr_39760_41449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (10))){
var inst_39661 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39761_41456 = state_39685__$1;
(statearr_39761_41456[(2)] = inst_39661);

(statearr_39761_41456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (8))){
var inst_39650 = (state_39685[(11)]);
var inst_39635 = (state_39685[(8)]);
var tmp39758 = inst_39635;
var inst_39635__$1 = tmp39758;
var inst_39636 = inst_39650;
var state_39685__$1 = (function (){var statearr_39762 = state_39685;
(statearr_39762[(7)] = inst_39636);

(statearr_39762[(8)] = inst_39635__$1);

return statearr_39762;
})();
var statearr_39763_41457 = state_39685__$1;
(statearr_39763_41457[(2)] = null);

(statearr_39763_41457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_39770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39770[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_39770[(1)] = (1));

return statearr_39770;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_39685){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_39685);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e39773){var ex__36306__auto__ = e39773;
var statearr_39774_41458 = state_39685;
(statearr_39774_41458[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_39685[(4)]))){
var statearr_39775_41459 = state_39685;
(statearr_39775_41459[(1)] = cljs.core.first((state_39685[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41460 = state_39685;
state_39685 = G__41460;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_39685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_39685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39780 = f__36542__auto__();
(statearr_39780[(6)] = c__36541__auto___41382);

return statearr_39780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39784 = arguments.length;
switch (G__39784) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36541__auto___41462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36542__auto__ = (function (){var switch__36302__auto__ = (function (state_39892){
var state_val_39893 = (state_39892[(1)]);
if((state_val_39893 === (7))){
var inst_39888 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
var statearr_39895_41464 = state_39892__$1;
(statearr_39895_41464[(2)] = inst_39888);

(statearr_39895_41464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (1))){
var inst_39790 = [];
var inst_39791 = inst_39790;
var inst_39792 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39892__$1 = (function (){var statearr_39897 = state_39892;
(statearr_39897[(7)] = inst_39791);

(statearr_39897[(8)] = inst_39792);

return statearr_39897;
})();
var statearr_39898_41465 = state_39892__$1;
(statearr_39898_41465[(2)] = null);

(statearr_39898_41465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (4))){
var inst_39795 = (state_39892[(9)]);
var inst_39795__$1 = (state_39892[(2)]);
var inst_39796 = (inst_39795__$1 == null);
var inst_39797 = cljs.core.not(inst_39796);
var state_39892__$1 = (function (){var statearr_39899 = state_39892;
(statearr_39899[(9)] = inst_39795__$1);

return statearr_39899;
})();
if(inst_39797){
var statearr_39900_41471 = state_39892__$1;
(statearr_39900_41471[(1)] = (5));

} else {
var statearr_39901_41472 = state_39892__$1;
(statearr_39901_41472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (15))){
var inst_39791 = (state_39892[(7)]);
var inst_39880 = cljs.core.vec(inst_39791);
var state_39892__$1 = state_39892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39892__$1,(18),out,inst_39880);
} else {
if((state_val_39893 === (13))){
var inst_39875 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
var statearr_39905_41473 = state_39892__$1;
(statearr_39905_41473[(2)] = inst_39875);

(statearr_39905_41473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (6))){
var inst_39791 = (state_39892[(7)]);
var inst_39877 = inst_39791.length;
var inst_39878 = (inst_39877 > (0));
var state_39892__$1 = state_39892;
if(cljs.core.truth_(inst_39878)){
var statearr_39906_41478 = state_39892__$1;
(statearr_39906_41478[(1)] = (15));

} else {
var statearr_39907_41479 = state_39892__$1;
(statearr_39907_41479[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (17))){
var inst_39885 = (state_39892[(2)]);
var inst_39886 = cljs.core.async.close_BANG_(out);
var state_39892__$1 = (function (){var statearr_39908 = state_39892;
(statearr_39908[(10)] = inst_39885);

return statearr_39908;
})();
var statearr_39909_41480 = state_39892__$1;
(statearr_39909_41480[(2)] = inst_39886);

(statearr_39909_41480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (3))){
var inst_39890 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39892__$1,inst_39890);
} else {
if((state_val_39893 === (12))){
var inst_39791 = (state_39892[(7)]);
var inst_39813 = cljs.core.vec(inst_39791);
var state_39892__$1 = state_39892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39892__$1,(14),out,inst_39813);
} else {
if((state_val_39893 === (2))){
var state_39892__$1 = state_39892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39892__$1,(4),ch);
} else {
if((state_val_39893 === (11))){
var inst_39791 = (state_39892[(7)]);
var inst_39799 = (state_39892[(11)]);
var inst_39795 = (state_39892[(9)]);
var inst_39810 = inst_39791.push(inst_39795);
var tmp39910 = inst_39791;
var inst_39791__$1 = tmp39910;
var inst_39792 = inst_39799;
var state_39892__$1 = (function (){var statearr_39911 = state_39892;
(statearr_39911[(7)] = inst_39791__$1);

(statearr_39911[(8)] = inst_39792);

(statearr_39911[(12)] = inst_39810);

return statearr_39911;
})();
var statearr_39912_41482 = state_39892__$1;
(statearr_39912_41482[(2)] = null);

(statearr_39912_41482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (9))){
var inst_39792 = (state_39892[(8)]);
var inst_39805 = cljs.core.keyword_identical_QMARK_(inst_39792,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39892__$1 = state_39892;
var statearr_39913_41483 = state_39892__$1;
(statearr_39913_41483[(2)] = inst_39805);

(statearr_39913_41483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (5))){
var inst_39792 = (state_39892[(8)]);
var inst_39799 = (state_39892[(11)]);
var inst_39795 = (state_39892[(9)]);
var inst_39801 = (state_39892[(13)]);
var inst_39799__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39795) : f.call(null,inst_39795));
var inst_39801__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39799__$1,inst_39792);
var state_39892__$1 = (function (){var statearr_39914 = state_39892;
(statearr_39914[(11)] = inst_39799__$1);

(statearr_39914[(13)] = inst_39801__$1);

return statearr_39914;
})();
if(inst_39801__$1){
var statearr_39915_41484 = state_39892__$1;
(statearr_39915_41484[(1)] = (8));

} else {
var statearr_39916_41485 = state_39892__$1;
(statearr_39916_41485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (14))){
var inst_39799 = (state_39892[(11)]);
var inst_39795 = (state_39892[(9)]);
var inst_39815 = (state_39892[(2)]);
var inst_39848 = [];
var inst_39872 = inst_39848.push(inst_39795);
var inst_39791 = inst_39848;
var inst_39792 = inst_39799;
var state_39892__$1 = (function (){var statearr_39923 = state_39892;
(statearr_39923[(7)] = inst_39791);

(statearr_39923[(8)] = inst_39792);

(statearr_39923[(14)] = inst_39872);

(statearr_39923[(15)] = inst_39815);

return statearr_39923;
})();
var statearr_39927_41490 = state_39892__$1;
(statearr_39927_41490[(2)] = null);

(statearr_39927_41490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (16))){
var state_39892__$1 = state_39892;
var statearr_39928_41491 = state_39892__$1;
(statearr_39928_41491[(2)] = null);

(statearr_39928_41491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (10))){
var inst_39807 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
if(cljs.core.truth_(inst_39807)){
var statearr_39929_41493 = state_39892__$1;
(statearr_39929_41493[(1)] = (11));

} else {
var statearr_39930_41494 = state_39892__$1;
(statearr_39930_41494[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (18))){
var inst_39882 = (state_39892[(2)]);
var state_39892__$1 = state_39892;
var statearr_39931_41495 = state_39892__$1;
(statearr_39931_41495[(2)] = inst_39882);

(statearr_39931_41495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39893 === (8))){
var inst_39801 = (state_39892[(13)]);
var state_39892__$1 = state_39892;
var statearr_39932_41496 = state_39892__$1;
(statearr_39932_41496[(2)] = inst_39801);

(statearr_39932_41496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36303__auto__ = null;
var cljs$core$async$state_machine__36303__auto____0 = (function (){
var statearr_39936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39936[(0)] = cljs$core$async$state_machine__36303__auto__);

(statearr_39936[(1)] = (1));

return statearr_39936;
});
var cljs$core$async$state_machine__36303__auto____1 = (function (state_39892){
while(true){
var ret_value__36304__auto__ = (function (){try{while(true){
var result__36305__auto__ = switch__36302__auto__(state_39892);
if(cljs.core.keyword_identical_QMARK_(result__36305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36305__auto__;
}
break;
}
}catch (e39941){var ex__36306__auto__ = e39941;
var statearr_39945_41526 = state_39892;
(statearr_39945_41526[(2)] = ex__36306__auto__);


if(cljs.core.seq((state_39892[(4)]))){
var statearr_39946_41527 = state_39892;
(statearr_39946_41527[(1)] = cljs.core.first((state_39892[(4)])));

} else {
throw ex__36306__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36304__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41531 = state_39892;
state_39892 = G__41531;
continue;
} else {
return ret_value__36304__auto__;
}
break;
}
});
cljs$core$async$state_machine__36303__auto__ = function(state_39892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36303__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36303__auto____1.call(this,state_39892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36303__auto____0;
cljs$core$async$state_machine__36303__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36303__auto____1;
return cljs$core$async$state_machine__36303__auto__;
})()
})();
var state__36543__auto__ = (function (){var statearr_39953 = f__36542__auto__();
(statearr_39953[(6)] = c__36541__auto___41462);

return statearr_39953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36543__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
