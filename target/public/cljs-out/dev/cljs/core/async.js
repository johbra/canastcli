// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17092 = arguments.length;
switch (G__17092) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17093 = (function (f,blockable,meta17094){
this.f = f;
this.blockable = blockable;
this.meta17094 = meta17094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17095,meta17094__$1){
var self__ = this;
var _17095__$1 = this;
return (new cljs.core.async.t_cljs$core$async17093(self__.f,self__.blockable,meta17094__$1));
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17095){
var self__ = this;
var _17095__$1 = this;
return self__.meta17094;
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17094","meta17094",1984881573,null)], null);
}));

(cljs.core.async.t_cljs$core$async17093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17093");

(cljs.core.async.t_cljs$core$async17093.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17093.
 */
cljs.core.async.__GT_t_cljs$core$async17093 = (function cljs$core$async$__GT_t_cljs$core$async17093(f__$1,blockable__$1,meta17094){
return (new cljs.core.async.t_cljs$core$async17093(f__$1,blockable__$1,meta17094));
});

}

return (new cljs.core.async.t_cljs$core$async17093(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__17099 = arguments.length;
switch (G__17099) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__17102 = arguments.length;
switch (G__17102) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__17105 = arguments.length;
switch (G__17105) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17107 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17107);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17107);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17109 = arguments.length;
switch (G__17109) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___17111 = n;
var x_17112 = (0);
while(true){
if((x_17112 < n__4613__auto___17111)){
(a[x_17112] = (0));

var G__17113 = (x_17112 + (1));
x_17112 = G__17113;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17114 = (i + (1));
i = G__17114;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17115 = (function (flag,meta17116){
this.flag = flag;
this.meta17116 = meta17116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17117,meta17116__$1){
var self__ = this;
var _17117__$1 = this;
return (new cljs.core.async.t_cljs$core$async17115(self__.flag,meta17116__$1));
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17117){
var self__ = this;
var _17117__$1 = this;
return self__.meta17116;
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17116","meta17116",53331489,null)], null);
}));

(cljs.core.async.t_cljs$core$async17115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17115");

(cljs.core.async.t_cljs$core$async17115.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17115.
 */
cljs.core.async.__GT_t_cljs$core$async17115 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17115(flag__$1,meta17116){
return (new cljs.core.async.t_cljs$core$async17115(flag__$1,meta17116));
});

}

return (new cljs.core.async.t_cljs$core$async17115(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17118 = (function (flag,cb,meta17119){
this.flag = flag;
this.cb = cb;
this.meta17119 = meta17119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17120,meta17119__$1){
var self__ = this;
var _17120__$1 = this;
return (new cljs.core.async.t_cljs$core$async17118(self__.flag,self__.cb,meta17119__$1));
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17120){
var self__ = this;
var _17120__$1 = this;
return self__.meta17119;
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17119","meta17119",-954644996,null)], null);
}));

(cljs.core.async.t_cljs$core$async17118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17118");

(cljs.core.async.t_cljs$core$async17118.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17118.
 */
cljs.core.async.__GT_t_cljs$core$async17118 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17118(flag__$1,cb__$1,meta17119){
return (new cljs.core.async.t_cljs$core$async17118(flag__$1,cb__$1,meta17119));
});

}

return (new cljs.core.async.t_cljs$core$async17118(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17121_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17121_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17122_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17122_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17123 = (i + (1));
i = G__17123;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4742__auto__ = [];
var len__4736__auto___17129 = arguments.length;
var i__4737__auto___17130 = (0);
while(true){
if((i__4737__auto___17130 < len__4736__auto___17129)){
args__4742__auto__.push((arguments[i__4737__auto___17130]));

var G__17131 = (i__4737__auto___17130 + (1));
i__4737__auto___17130 = G__17131;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17126){
var map__17127 = p__17126;
var map__17127__$1 = (((((!((map__17127 == null))))?(((((map__17127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17127):map__17127);
var opts = map__17127__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17124){
var G__17125 = cljs.core.first.call(null,seq17124);
var seq17124__$1 = cljs.core.next.call(null,seq17124);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17125,seq17124__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__17133 = arguments.length;
switch (G__17133) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17032__auto___17179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17157){
var state_val_17158 = (state_17157[(1)]);
if((state_val_17158 === (7))){
var inst_17153 = (state_17157[(2)]);
var state_17157__$1 = state_17157;
var statearr_17159_17180 = state_17157__$1;
(statearr_17159_17180[(2)] = inst_17153);

(statearr_17159_17180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (1))){
var state_17157__$1 = state_17157;
var statearr_17160_17181 = state_17157__$1;
(statearr_17160_17181[(2)] = null);

(statearr_17160_17181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (4))){
var inst_17136 = (state_17157[(7)]);
var inst_17136__$1 = (state_17157[(2)]);
var inst_17137 = (inst_17136__$1 == null);
var state_17157__$1 = (function (){var statearr_17161 = state_17157;
(statearr_17161[(7)] = inst_17136__$1);

return statearr_17161;
})();
if(cljs.core.truth_(inst_17137)){
var statearr_17162_17182 = state_17157__$1;
(statearr_17162_17182[(1)] = (5));

} else {
var statearr_17163_17183 = state_17157__$1;
(statearr_17163_17183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (13))){
var state_17157__$1 = state_17157;
var statearr_17164_17184 = state_17157__$1;
(statearr_17164_17184[(2)] = null);

(statearr_17164_17184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (6))){
var inst_17136 = (state_17157[(7)]);
var state_17157__$1 = state_17157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17157__$1,(11),to,inst_17136);
} else {
if((state_val_17158 === (3))){
var inst_17155 = (state_17157[(2)]);
var state_17157__$1 = state_17157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17157__$1,inst_17155);
} else {
if((state_val_17158 === (12))){
var state_17157__$1 = state_17157;
var statearr_17165_17185 = state_17157__$1;
(statearr_17165_17185[(2)] = null);

(statearr_17165_17185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (2))){
var state_17157__$1 = state_17157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17157__$1,(4),from);
} else {
if((state_val_17158 === (11))){
var inst_17146 = (state_17157[(2)]);
var state_17157__$1 = state_17157;
if(cljs.core.truth_(inst_17146)){
var statearr_17166_17186 = state_17157__$1;
(statearr_17166_17186[(1)] = (12));

} else {
var statearr_17167_17187 = state_17157__$1;
(statearr_17167_17187[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (9))){
var state_17157__$1 = state_17157;
var statearr_17168_17188 = state_17157__$1;
(statearr_17168_17188[(2)] = null);

(statearr_17168_17188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (5))){
var state_17157__$1 = state_17157;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17169_17189 = state_17157__$1;
(statearr_17169_17189[(1)] = (8));

} else {
var statearr_17170_17190 = state_17157__$1;
(statearr_17170_17190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (14))){
var inst_17151 = (state_17157[(2)]);
var state_17157__$1 = state_17157;
var statearr_17171_17191 = state_17157__$1;
(statearr_17171_17191[(2)] = inst_17151);

(statearr_17171_17191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (10))){
var inst_17143 = (state_17157[(2)]);
var state_17157__$1 = state_17157;
var statearr_17172_17192 = state_17157__$1;
(statearr_17172_17192[(2)] = inst_17143);

(statearr_17172_17192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17158 === (8))){
var inst_17140 = cljs.core.async.close_BANG_.call(null,to);
var state_17157__$1 = state_17157;
var statearr_17173_17193 = state_17157__$1;
(statearr_17173_17193[(2)] = inst_17140);

(statearr_17173_17193[(1)] = (10));


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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_17174 = [null,null,null,null,null,null,null,null];
(statearr_17174[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_17174[(1)] = (1));

return statearr_17174;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_17157){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17175){if((e17175 instanceof Object)){
var ex__16941__auto__ = e17175;
var statearr_17176_17194 = state_17157;
(statearr_17176_17194[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17195 = state_17157;
state_17157 = G__17195;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_17157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_17157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17177 = f__17033__auto__.call(null);
(statearr_17177[(6)] = c__17032__auto___17179);

return statearr_17177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__17196){
var vec__17197 = p__17196;
var v = cljs.core.nth.call(null,vec__17197,(0),null);
var p = cljs.core.nth.call(null,vec__17197,(1),null);
var job = vec__17197;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17032__auto___17368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17204){
var state_val_17205 = (state_17204[(1)]);
if((state_val_17205 === (1))){
var state_17204__$1 = state_17204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17204__$1,(2),res,v);
} else {
if((state_val_17205 === (2))){
var inst_17201 = (state_17204[(2)]);
var inst_17202 = cljs.core.async.close_BANG_.call(null,res);
var state_17204__$1 = (function (){var statearr_17206 = state_17204;
(statearr_17206[(7)] = inst_17201);

return statearr_17206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17204__$1,inst_17202);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0 = (function (){
var statearr_17207 = [null,null,null,null,null,null,null,null];
(statearr_17207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__);

(statearr_17207[(1)] = (1));

return statearr_17207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1 = (function (state_17204){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17208){if((e17208 instanceof Object)){
var ex__16941__auto__ = e17208;
var statearr_17209_17369 = state_17204;
(statearr_17209_17369[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17370 = state_17204;
state_17204 = G__17370;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = function(state_17204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1.call(this,state_17204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17210 = f__17033__auto__.call(null);
(statearr_17210[(6)] = c__17032__auto___17368);

return statearr_17210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__17211){
var vec__17212 = p__17211;
var v = cljs.core.nth.call(null,vec__17212,(0),null);
var p = cljs.core.nth.call(null,vec__17212,(1),null);
var job = vec__17212;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___17371 = n;
var __17372 = (0);
while(true){
if((__17372 < n__4613__auto___17371)){
var G__17215_17373 = type;
var G__17215_17374__$1 = (((G__17215_17373 instanceof cljs.core.Keyword))?G__17215_17373.fqn:null);
switch (G__17215_17374__$1) {
case "compute":
var c__17032__auto___17376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17372,c__17032__auto___17376,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async){
return (function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = ((function (__17372,c__17032__auto___17376,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async){
return (function (state_17228){
var state_val_17229 = (state_17228[(1)]);
if((state_val_17229 === (1))){
var state_17228__$1 = state_17228;
var statearr_17230_17377 = state_17228__$1;
(statearr_17230_17377[(2)] = null);

(statearr_17230_17377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (2))){
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17228__$1,(4),jobs);
} else {
if((state_val_17229 === (3))){
var inst_17226 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17228__$1,inst_17226);
} else {
if((state_val_17229 === (4))){
var inst_17218 = (state_17228[(2)]);
var inst_17219 = process.call(null,inst_17218);
var state_17228__$1 = state_17228;
if(cljs.core.truth_(inst_17219)){
var statearr_17231_17378 = state_17228__$1;
(statearr_17231_17378[(1)] = (5));

} else {
var statearr_17232_17379 = state_17228__$1;
(statearr_17232_17379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (5))){
var state_17228__$1 = state_17228;
var statearr_17233_17380 = state_17228__$1;
(statearr_17233_17380[(2)] = null);

(statearr_17233_17380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (6))){
var state_17228__$1 = state_17228;
var statearr_17234_17381 = state_17228__$1;
(statearr_17234_17381[(2)] = null);

(statearr_17234_17381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (7))){
var inst_17224 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
var statearr_17235_17382 = state_17228__$1;
(statearr_17235_17382[(2)] = inst_17224);

(statearr_17235_17382[(1)] = (3));


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
});})(__17372,c__17032__auto___17376,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async))
;
return ((function (__17372,switch__16937__auto__,c__17032__auto___17376,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0 = (function (){
var statearr_17236 = [null,null,null,null,null,null,null];
(statearr_17236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__);

(statearr_17236[(1)] = (1));

return statearr_17236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1 = (function (state_17228){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17237){if((e17237 instanceof Object)){
var ex__16941__auto__ = e17237;
var statearr_17238_17383 = state_17228;
(statearr_17238_17383[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17384 = state_17228;
state_17228 = G__17384;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = function(state_17228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1.call(this,state_17228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__;
})()
;})(__17372,switch__16937__auto__,c__17032__auto___17376,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async))
})();
var state__17034__auto__ = (function (){var statearr_17239 = f__17033__auto__.call(null);
(statearr_17239[(6)] = c__17032__auto___17376);

return statearr_17239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
});})(__17372,c__17032__auto___17376,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async))
);


break;
case "async":
var c__17032__auto___17385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17372,c__17032__auto___17385,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async){
return (function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = ((function (__17372,c__17032__auto___17385,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async){
return (function (state_17252){
var state_val_17253 = (state_17252[(1)]);
if((state_val_17253 === (1))){
var state_17252__$1 = state_17252;
var statearr_17254_17386 = state_17252__$1;
(statearr_17254_17386[(2)] = null);

(statearr_17254_17386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (2))){
var state_17252__$1 = state_17252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17252__$1,(4),jobs);
} else {
if((state_val_17253 === (3))){
var inst_17250 = (state_17252[(2)]);
var state_17252__$1 = state_17252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17252__$1,inst_17250);
} else {
if((state_val_17253 === (4))){
var inst_17242 = (state_17252[(2)]);
var inst_17243 = async.call(null,inst_17242);
var state_17252__$1 = state_17252;
if(cljs.core.truth_(inst_17243)){
var statearr_17255_17387 = state_17252__$1;
(statearr_17255_17387[(1)] = (5));

} else {
var statearr_17256_17388 = state_17252__$1;
(statearr_17256_17388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (5))){
var state_17252__$1 = state_17252;
var statearr_17257_17389 = state_17252__$1;
(statearr_17257_17389[(2)] = null);

(statearr_17257_17389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (6))){
var state_17252__$1 = state_17252;
var statearr_17258_17390 = state_17252__$1;
(statearr_17258_17390[(2)] = null);

(statearr_17258_17390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17253 === (7))){
var inst_17248 = (state_17252[(2)]);
var state_17252__$1 = state_17252;
var statearr_17259_17391 = state_17252__$1;
(statearr_17259_17391[(2)] = inst_17248);

(statearr_17259_17391[(1)] = (3));


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
});})(__17372,c__17032__auto___17385,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async))
;
return ((function (__17372,switch__16937__auto__,c__17032__auto___17385,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0 = (function (){
var statearr_17260 = [null,null,null,null,null,null,null];
(statearr_17260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__);

(statearr_17260[(1)] = (1));

return statearr_17260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1 = (function (state_17252){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17261){if((e17261 instanceof Object)){
var ex__16941__auto__ = e17261;
var statearr_17262_17392 = state_17252;
(statearr_17262_17392[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17393 = state_17252;
state_17252 = G__17393;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = function(state_17252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1.call(this,state_17252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__;
})()
;})(__17372,switch__16937__auto__,c__17032__auto___17385,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async))
})();
var state__17034__auto__ = (function (){var statearr_17263 = f__17033__auto__.call(null);
(statearr_17263[(6)] = c__17032__auto___17385);

return statearr_17263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
});})(__17372,c__17032__auto___17385,G__17215_17373,G__17215_17374__$1,n__4613__auto___17371,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17215_17374__$1)].join('')));

}

var G__17394 = (__17372 + (1));
__17372 = G__17394;
continue;
} else {
}
break;
}

var c__17032__auto___17395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17285){
var state_val_17286 = (state_17285[(1)]);
if((state_val_17286 === (7))){
var inst_17281 = (state_17285[(2)]);
var state_17285__$1 = state_17285;
var statearr_17287_17396 = state_17285__$1;
(statearr_17287_17396[(2)] = inst_17281);

(statearr_17287_17396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17286 === (1))){
var state_17285__$1 = state_17285;
var statearr_17288_17397 = state_17285__$1;
(statearr_17288_17397[(2)] = null);

(statearr_17288_17397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17286 === (4))){
var inst_17266 = (state_17285[(7)]);
var inst_17266__$1 = (state_17285[(2)]);
var inst_17267 = (inst_17266__$1 == null);
var state_17285__$1 = (function (){var statearr_17289 = state_17285;
(statearr_17289[(7)] = inst_17266__$1);

return statearr_17289;
})();
if(cljs.core.truth_(inst_17267)){
var statearr_17290_17398 = state_17285__$1;
(statearr_17290_17398[(1)] = (5));

} else {
var statearr_17291_17399 = state_17285__$1;
(statearr_17291_17399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17286 === (6))){
var inst_17271 = (state_17285[(8)]);
var inst_17266 = (state_17285[(7)]);
var inst_17271__$1 = cljs.core.async.chan.call(null,(1));
var inst_17272 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17273 = [inst_17266,inst_17271__$1];
var inst_17274 = (new cljs.core.PersistentVector(null,2,(5),inst_17272,inst_17273,null));
var state_17285__$1 = (function (){var statearr_17292 = state_17285;
(statearr_17292[(8)] = inst_17271__$1);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17285__$1,(8),jobs,inst_17274);
} else {
if((state_val_17286 === (3))){
var inst_17283 = (state_17285[(2)]);
var state_17285__$1 = state_17285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17285__$1,inst_17283);
} else {
if((state_val_17286 === (2))){
var state_17285__$1 = state_17285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17285__$1,(4),from);
} else {
if((state_val_17286 === (9))){
var inst_17278 = (state_17285[(2)]);
var state_17285__$1 = (function (){var statearr_17293 = state_17285;
(statearr_17293[(9)] = inst_17278);

return statearr_17293;
})();
var statearr_17294_17400 = state_17285__$1;
(statearr_17294_17400[(2)] = null);

(statearr_17294_17400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17286 === (5))){
var inst_17269 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17285__$1 = state_17285;
var statearr_17295_17401 = state_17285__$1;
(statearr_17295_17401[(2)] = inst_17269);

(statearr_17295_17401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17286 === (8))){
var inst_17271 = (state_17285[(8)]);
var inst_17276 = (state_17285[(2)]);
var state_17285__$1 = (function (){var statearr_17296 = state_17285;
(statearr_17296[(10)] = inst_17276);

return statearr_17296;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17285__$1,(9),results,inst_17271);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0 = (function (){
var statearr_17297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__);

(statearr_17297[(1)] = (1));

return statearr_17297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1 = (function (state_17285){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17298){if((e17298 instanceof Object)){
var ex__16941__auto__ = e17298;
var statearr_17299_17402 = state_17285;
(statearr_17299_17402[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17403 = state_17285;
state_17285 = G__17403;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = function(state_17285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1.call(this,state_17285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17300 = f__17033__auto__.call(null);
(statearr_17300[(6)] = c__17032__auto___17395);

return statearr_17300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17338){
var state_val_17339 = (state_17338[(1)]);
if((state_val_17339 === (7))){
var inst_17334 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17340_17404 = state_17338__$1;
(statearr_17340_17404[(2)] = inst_17334);

(statearr_17340_17404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (20))){
var state_17338__$1 = state_17338;
var statearr_17341_17405 = state_17338__$1;
(statearr_17341_17405[(2)] = null);

(statearr_17341_17405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (1))){
var state_17338__$1 = state_17338;
var statearr_17342_17406 = state_17338__$1;
(statearr_17342_17406[(2)] = null);

(statearr_17342_17406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (4))){
var inst_17303 = (state_17338[(7)]);
var inst_17303__$1 = (state_17338[(2)]);
var inst_17304 = (inst_17303__$1 == null);
var state_17338__$1 = (function (){var statearr_17343 = state_17338;
(statearr_17343[(7)] = inst_17303__$1);

return statearr_17343;
})();
if(cljs.core.truth_(inst_17304)){
var statearr_17344_17407 = state_17338__$1;
(statearr_17344_17407[(1)] = (5));

} else {
var statearr_17345_17408 = state_17338__$1;
(statearr_17345_17408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (15))){
var inst_17316 = (state_17338[(8)]);
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17338__$1,(18),to,inst_17316);
} else {
if((state_val_17339 === (21))){
var inst_17329 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17346_17409 = state_17338__$1;
(statearr_17346_17409[(2)] = inst_17329);

(statearr_17346_17409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (13))){
var inst_17331 = (state_17338[(2)]);
var state_17338__$1 = (function (){var statearr_17347 = state_17338;
(statearr_17347[(9)] = inst_17331);

return statearr_17347;
})();
var statearr_17348_17410 = state_17338__$1;
(statearr_17348_17410[(2)] = null);

(statearr_17348_17410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (6))){
var inst_17303 = (state_17338[(7)]);
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17338__$1,(11),inst_17303);
} else {
if((state_val_17339 === (17))){
var inst_17324 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
if(cljs.core.truth_(inst_17324)){
var statearr_17349_17411 = state_17338__$1;
(statearr_17349_17411[(1)] = (19));

} else {
var statearr_17350_17412 = state_17338__$1;
(statearr_17350_17412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (3))){
var inst_17336 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17338__$1,inst_17336);
} else {
if((state_val_17339 === (12))){
var inst_17313 = (state_17338[(10)]);
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17338__$1,(14),inst_17313);
} else {
if((state_val_17339 === (2))){
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17338__$1,(4),results);
} else {
if((state_val_17339 === (19))){
var state_17338__$1 = state_17338;
var statearr_17351_17413 = state_17338__$1;
(statearr_17351_17413[(2)] = null);

(statearr_17351_17413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (11))){
var inst_17313 = (state_17338[(2)]);
var state_17338__$1 = (function (){var statearr_17352 = state_17338;
(statearr_17352[(10)] = inst_17313);

return statearr_17352;
})();
var statearr_17353_17414 = state_17338__$1;
(statearr_17353_17414[(2)] = null);

(statearr_17353_17414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (9))){
var state_17338__$1 = state_17338;
var statearr_17354_17415 = state_17338__$1;
(statearr_17354_17415[(2)] = null);

(statearr_17354_17415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (5))){
var state_17338__$1 = state_17338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17355_17416 = state_17338__$1;
(statearr_17355_17416[(1)] = (8));

} else {
var statearr_17356_17417 = state_17338__$1;
(statearr_17356_17417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (14))){
var inst_17316 = (state_17338[(8)]);
var inst_17316__$1 = (state_17338[(2)]);
var inst_17317 = (inst_17316__$1 == null);
var inst_17318 = cljs.core.not.call(null,inst_17317);
var state_17338__$1 = (function (){var statearr_17357 = state_17338;
(statearr_17357[(8)] = inst_17316__$1);

return statearr_17357;
})();
if(inst_17318){
var statearr_17358_17418 = state_17338__$1;
(statearr_17358_17418[(1)] = (15));

} else {
var statearr_17359_17419 = state_17338__$1;
(statearr_17359_17419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (16))){
var state_17338__$1 = state_17338;
var statearr_17360_17420 = state_17338__$1;
(statearr_17360_17420[(2)] = false);

(statearr_17360_17420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (10))){
var inst_17310 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17361_17421 = state_17338__$1;
(statearr_17361_17421[(2)] = inst_17310);

(statearr_17361_17421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (18))){
var inst_17321 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17362_17422 = state_17338__$1;
(statearr_17362_17422[(2)] = inst_17321);

(statearr_17362_17422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (8))){
var inst_17307 = cljs.core.async.close_BANG_.call(null,to);
var state_17338__$1 = state_17338;
var statearr_17363_17423 = state_17338__$1;
(statearr_17363_17423[(2)] = inst_17307);

(statearr_17363_17423[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0 = (function (){
var statearr_17364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__);

(statearr_17364[(1)] = (1));

return statearr_17364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1 = (function (state_17338){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17365){if((e17365 instanceof Object)){
var ex__16941__auto__ = e17365;
var statearr_17366_17424 = state_17338;
(statearr_17366_17424[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17425 = state_17338;
state_17338 = G__17425;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__ = function(state_17338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1.call(this,state_17338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17367 = f__17033__auto__.call(null);
(statearr_17367[(6)] = c__17032__auto__);

return statearr_17367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17427 = arguments.length;
switch (G__17427) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__17430 = arguments.length;
switch (G__17430) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__17433 = arguments.length;
switch (G__17433) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17032__auto___17482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17459){
var state_val_17460 = (state_17459[(1)]);
if((state_val_17460 === (7))){
var inst_17455 = (state_17459[(2)]);
var state_17459__$1 = state_17459;
var statearr_17461_17483 = state_17459__$1;
(statearr_17461_17483[(2)] = inst_17455);

(statearr_17461_17483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (1))){
var state_17459__$1 = state_17459;
var statearr_17462_17484 = state_17459__$1;
(statearr_17462_17484[(2)] = null);

(statearr_17462_17484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (4))){
var inst_17436 = (state_17459[(7)]);
var inst_17436__$1 = (state_17459[(2)]);
var inst_17437 = (inst_17436__$1 == null);
var state_17459__$1 = (function (){var statearr_17463 = state_17459;
(statearr_17463[(7)] = inst_17436__$1);

return statearr_17463;
})();
if(cljs.core.truth_(inst_17437)){
var statearr_17464_17485 = state_17459__$1;
(statearr_17464_17485[(1)] = (5));

} else {
var statearr_17465_17486 = state_17459__$1;
(statearr_17465_17486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (13))){
var state_17459__$1 = state_17459;
var statearr_17466_17487 = state_17459__$1;
(statearr_17466_17487[(2)] = null);

(statearr_17466_17487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (6))){
var inst_17436 = (state_17459[(7)]);
var inst_17442 = p.call(null,inst_17436);
var state_17459__$1 = state_17459;
if(cljs.core.truth_(inst_17442)){
var statearr_17467_17488 = state_17459__$1;
(statearr_17467_17488[(1)] = (9));

} else {
var statearr_17468_17489 = state_17459__$1;
(statearr_17468_17489[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (3))){
var inst_17457 = (state_17459[(2)]);
var state_17459__$1 = state_17459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17459__$1,inst_17457);
} else {
if((state_val_17460 === (12))){
var state_17459__$1 = state_17459;
var statearr_17469_17490 = state_17459__$1;
(statearr_17469_17490[(2)] = null);

(statearr_17469_17490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (2))){
var state_17459__$1 = state_17459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17459__$1,(4),ch);
} else {
if((state_val_17460 === (11))){
var inst_17436 = (state_17459[(7)]);
var inst_17446 = (state_17459[(2)]);
var state_17459__$1 = state_17459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17459__$1,(8),inst_17446,inst_17436);
} else {
if((state_val_17460 === (9))){
var state_17459__$1 = state_17459;
var statearr_17470_17491 = state_17459__$1;
(statearr_17470_17491[(2)] = tc);

(statearr_17470_17491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (5))){
var inst_17439 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17440 = cljs.core.async.close_BANG_.call(null,fc);
var state_17459__$1 = (function (){var statearr_17471 = state_17459;
(statearr_17471[(8)] = inst_17439);

return statearr_17471;
})();
var statearr_17472_17492 = state_17459__$1;
(statearr_17472_17492[(2)] = inst_17440);

(statearr_17472_17492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (14))){
var inst_17453 = (state_17459[(2)]);
var state_17459__$1 = state_17459;
var statearr_17473_17493 = state_17459__$1;
(statearr_17473_17493[(2)] = inst_17453);

(statearr_17473_17493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (10))){
var state_17459__$1 = state_17459;
var statearr_17474_17494 = state_17459__$1;
(statearr_17474_17494[(2)] = fc);

(statearr_17474_17494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17460 === (8))){
var inst_17448 = (state_17459[(2)]);
var state_17459__$1 = state_17459;
if(cljs.core.truth_(inst_17448)){
var statearr_17475_17495 = state_17459__$1;
(statearr_17475_17495[(1)] = (12));

} else {
var statearr_17476_17496 = state_17459__$1;
(statearr_17476_17496[(1)] = (13));

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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_17477 = [null,null,null,null,null,null,null,null,null];
(statearr_17477[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_17477[(1)] = (1));

return statearr_17477;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_17459){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17478){if((e17478 instanceof Object)){
var ex__16941__auto__ = e17478;
var statearr_17479_17497 = state_17459;
(statearr_17479_17497[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17498 = state_17459;
state_17459 = G__17498;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_17459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_17459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17480 = f__17033__auto__.call(null);
(statearr_17480[(6)] = c__17032__auto___17482);

return statearr_17480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
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
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17519){
var state_val_17520 = (state_17519[(1)]);
if((state_val_17520 === (7))){
var inst_17515 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17521_17539 = state_17519__$1;
(statearr_17521_17539[(2)] = inst_17515);

(statearr_17521_17539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (1))){
var inst_17499 = init;
var state_17519__$1 = (function (){var statearr_17522 = state_17519;
(statearr_17522[(7)] = inst_17499);

return statearr_17522;
})();
var statearr_17523_17540 = state_17519__$1;
(statearr_17523_17540[(2)] = null);

(statearr_17523_17540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (4))){
var inst_17502 = (state_17519[(8)]);
var inst_17502__$1 = (state_17519[(2)]);
var inst_17503 = (inst_17502__$1 == null);
var state_17519__$1 = (function (){var statearr_17524 = state_17519;
(statearr_17524[(8)] = inst_17502__$1);

return statearr_17524;
})();
if(cljs.core.truth_(inst_17503)){
var statearr_17525_17541 = state_17519__$1;
(statearr_17525_17541[(1)] = (5));

} else {
var statearr_17526_17542 = state_17519__$1;
(statearr_17526_17542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (6))){
var inst_17499 = (state_17519[(7)]);
var inst_17506 = (state_17519[(9)]);
var inst_17502 = (state_17519[(8)]);
var inst_17506__$1 = f.call(null,inst_17499,inst_17502);
var inst_17507 = cljs.core.reduced_QMARK_.call(null,inst_17506__$1);
var state_17519__$1 = (function (){var statearr_17527 = state_17519;
(statearr_17527[(9)] = inst_17506__$1);

return statearr_17527;
})();
if(inst_17507){
var statearr_17528_17543 = state_17519__$1;
(statearr_17528_17543[(1)] = (8));

} else {
var statearr_17529_17544 = state_17519__$1;
(statearr_17529_17544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (3))){
var inst_17517 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17519__$1,inst_17517);
} else {
if((state_val_17520 === (2))){
var state_17519__$1 = state_17519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17519__$1,(4),ch);
} else {
if((state_val_17520 === (9))){
var inst_17506 = (state_17519[(9)]);
var inst_17499 = inst_17506;
var state_17519__$1 = (function (){var statearr_17530 = state_17519;
(statearr_17530[(7)] = inst_17499);

return statearr_17530;
})();
var statearr_17531_17545 = state_17519__$1;
(statearr_17531_17545[(2)] = null);

(statearr_17531_17545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (5))){
var inst_17499 = (state_17519[(7)]);
var state_17519__$1 = state_17519;
var statearr_17532_17546 = state_17519__$1;
(statearr_17532_17546[(2)] = inst_17499);

(statearr_17532_17546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (10))){
var inst_17513 = (state_17519[(2)]);
var state_17519__$1 = state_17519;
var statearr_17533_17547 = state_17519__$1;
(statearr_17533_17547[(2)] = inst_17513);

(statearr_17533_17547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17520 === (8))){
var inst_17506 = (state_17519[(9)]);
var inst_17509 = cljs.core.deref.call(null,inst_17506);
var state_17519__$1 = state_17519;
var statearr_17534_17548 = state_17519__$1;
(statearr_17534_17548[(2)] = inst_17509);

(statearr_17534_17548[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16938__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16938__auto____0 = (function (){
var statearr_17535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17535[(0)] = cljs$core$async$reduce_$_state_machine__16938__auto__);

(statearr_17535[(1)] = (1));

return statearr_17535;
});
var cljs$core$async$reduce_$_state_machine__16938__auto____1 = (function (state_17519){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17536){if((e17536 instanceof Object)){
var ex__16941__auto__ = e17536;
var statearr_17537_17549 = state_17519;
(statearr_17537_17549[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17550 = state_17519;
state_17519 = G__17550;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16938__auto__ = function(state_17519){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16938__auto____1.call(this,state_17519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16938__auto____0;
cljs$core$async$reduce_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16938__auto____1;
return cljs$core$async$reduce_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17538 = f__17033__auto__.call(null);
(statearr_17538[(6)] = c__17032__auto__);

return statearr_17538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17556){
var state_val_17557 = (state_17556[(1)]);
if((state_val_17557 === (1))){
var inst_17551 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17556__$1 = state_17556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17556__$1,(2),inst_17551);
} else {
if((state_val_17557 === (2))){
var inst_17553 = (state_17556[(2)]);
var inst_17554 = f__$1.call(null,inst_17553);
var state_17556__$1 = state_17556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17556__$1,inst_17554);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16938__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16938__auto____0 = (function (){
var statearr_17558 = [null,null,null,null,null,null,null];
(statearr_17558[(0)] = cljs$core$async$transduce_$_state_machine__16938__auto__);

(statearr_17558[(1)] = (1));

return statearr_17558;
});
var cljs$core$async$transduce_$_state_machine__16938__auto____1 = (function (state_17556){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17559){if((e17559 instanceof Object)){
var ex__16941__auto__ = e17559;
var statearr_17560_17562 = state_17556;
(statearr_17560_17562[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17563 = state_17556;
state_17556 = G__17563;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16938__auto__ = function(state_17556){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16938__auto____1.call(this,state_17556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16938__auto____0;
cljs$core$async$transduce_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16938__auto____1;
return cljs$core$async$transduce_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17561 = f__17033__auto__.call(null);
(statearr_17561[(6)] = c__17032__auto__);

return statearr_17561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17565 = arguments.length;
switch (G__17565) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17590){
var state_val_17591 = (state_17590[(1)]);
if((state_val_17591 === (7))){
var inst_17572 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17592_17613 = state_17590__$1;
(statearr_17592_17613[(2)] = inst_17572);

(statearr_17592_17613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (1))){
var inst_17566 = cljs.core.seq.call(null,coll);
var inst_17567 = inst_17566;
var state_17590__$1 = (function (){var statearr_17593 = state_17590;
(statearr_17593[(7)] = inst_17567);

return statearr_17593;
})();
var statearr_17594_17614 = state_17590__$1;
(statearr_17594_17614[(2)] = null);

(statearr_17594_17614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (4))){
var inst_17567 = (state_17590[(7)]);
var inst_17570 = cljs.core.first.call(null,inst_17567);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17590__$1,(7),ch,inst_17570);
} else {
if((state_val_17591 === (13))){
var inst_17584 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17595_17615 = state_17590__$1;
(statearr_17595_17615[(2)] = inst_17584);

(statearr_17595_17615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (6))){
var inst_17575 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17575)){
var statearr_17596_17616 = state_17590__$1;
(statearr_17596_17616[(1)] = (8));

} else {
var statearr_17597_17617 = state_17590__$1;
(statearr_17597_17617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (3))){
var inst_17588 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17590__$1,inst_17588);
} else {
if((state_val_17591 === (12))){
var state_17590__$1 = state_17590;
var statearr_17598_17618 = state_17590__$1;
(statearr_17598_17618[(2)] = null);

(statearr_17598_17618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (2))){
var inst_17567 = (state_17590[(7)]);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17567)){
var statearr_17599_17619 = state_17590__$1;
(statearr_17599_17619[(1)] = (4));

} else {
var statearr_17600_17620 = state_17590__$1;
(statearr_17600_17620[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (11))){
var inst_17581 = cljs.core.async.close_BANG_.call(null,ch);
var state_17590__$1 = state_17590;
var statearr_17601_17621 = state_17590__$1;
(statearr_17601_17621[(2)] = inst_17581);

(statearr_17601_17621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (9))){
var state_17590__$1 = state_17590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17602_17622 = state_17590__$1;
(statearr_17602_17622[(1)] = (11));

} else {
var statearr_17603_17623 = state_17590__$1;
(statearr_17603_17623[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (5))){
var inst_17567 = (state_17590[(7)]);
var state_17590__$1 = state_17590;
var statearr_17604_17624 = state_17590__$1;
(statearr_17604_17624[(2)] = inst_17567);

(statearr_17604_17624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (10))){
var inst_17586 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17605_17625 = state_17590__$1;
(statearr_17605_17625[(2)] = inst_17586);

(statearr_17605_17625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (8))){
var inst_17567 = (state_17590[(7)]);
var inst_17577 = cljs.core.next.call(null,inst_17567);
var inst_17567__$1 = inst_17577;
var state_17590__$1 = (function (){var statearr_17606 = state_17590;
(statearr_17606[(7)] = inst_17567__$1);

return statearr_17606;
})();
var statearr_17607_17626 = state_17590__$1;
(statearr_17607_17626[(2)] = null);

(statearr_17607_17626[(1)] = (2));


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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_17608 = [null,null,null,null,null,null,null,null];
(statearr_17608[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_17608[(1)] = (1));

return statearr_17608;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_17590){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17609){if((e17609 instanceof Object)){
var ex__16941__auto__ = e17609;
var statearr_17610_17627 = state_17590;
(statearr_17610_17627[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17628 = state_17590;
state_17590 = G__17628;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_17590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_17590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17611 = f__17033__auto__.call(null);
(statearr_17611[(6)] = c__17032__auto__);

return statearr_17611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17629 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17629.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17630 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17630.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17631 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17631.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17632 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17632.call(null,m);
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17633 = (function (ch,cs,meta17634){
this.ch = ch;
this.cs = cs;
this.meta17634 = meta17634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17635,meta17634__$1){
var self__ = this;
var _17635__$1 = this;
return (new cljs.core.async.t_cljs$core$async17633(self__.ch,self__.cs,meta17634__$1));
}));

(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17635){
var self__ = this;
var _17635__$1 = this;
return self__.meta17634;
}));

(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17633.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17634","meta17634",1197765973,null)], null);
}));

(cljs.core.async.t_cljs$core$async17633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17633");

(cljs.core.async.t_cljs$core$async17633.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17633.
 */
cljs.core.async.__GT_t_cljs$core$async17633 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17633(ch__$1,cs__$1,meta17634){
return (new cljs.core.async.t_cljs$core$async17633(ch__$1,cs__$1,meta17634));
});

}

return (new cljs.core.async.t_cljs$core$async17633(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__17032__auto___17855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_17770){
var state_val_17771 = (state_17770[(1)]);
if((state_val_17771 === (7))){
var inst_17766 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17772_17856 = state_17770__$1;
(statearr_17772_17856[(2)] = inst_17766);

(statearr_17772_17856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (20))){
var inst_17669 = (state_17770[(7)]);
var inst_17681 = cljs.core.first.call(null,inst_17669);
var inst_17682 = cljs.core.nth.call(null,inst_17681,(0),null);
var inst_17683 = cljs.core.nth.call(null,inst_17681,(1),null);
var state_17770__$1 = (function (){var statearr_17773 = state_17770;
(statearr_17773[(8)] = inst_17682);

return statearr_17773;
})();
if(cljs.core.truth_(inst_17683)){
var statearr_17774_17857 = state_17770__$1;
(statearr_17774_17857[(1)] = (22));

} else {
var statearr_17775_17858 = state_17770__$1;
(statearr_17775_17858[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (27))){
var inst_17711 = (state_17770[(9)]);
var inst_17638 = (state_17770[(10)]);
var inst_17713 = (state_17770[(11)]);
var inst_17718 = (state_17770[(12)]);
var inst_17718__$1 = cljs.core._nth.call(null,inst_17711,inst_17713);
var inst_17719 = cljs.core.async.put_BANG_.call(null,inst_17718__$1,inst_17638,done);
var state_17770__$1 = (function (){var statearr_17776 = state_17770;
(statearr_17776[(12)] = inst_17718__$1);

return statearr_17776;
})();
if(cljs.core.truth_(inst_17719)){
var statearr_17777_17859 = state_17770__$1;
(statearr_17777_17859[(1)] = (30));

} else {
var statearr_17778_17860 = state_17770__$1;
(statearr_17778_17860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (1))){
var state_17770__$1 = state_17770;
var statearr_17779_17861 = state_17770__$1;
(statearr_17779_17861[(2)] = null);

(statearr_17779_17861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (24))){
var inst_17669 = (state_17770[(7)]);
var inst_17688 = (state_17770[(2)]);
var inst_17689 = cljs.core.next.call(null,inst_17669);
var inst_17647 = inst_17689;
var inst_17648 = null;
var inst_17649 = (0);
var inst_17650 = (0);
var state_17770__$1 = (function (){var statearr_17780 = state_17770;
(statearr_17780[(13)] = inst_17647);

(statearr_17780[(14)] = inst_17650);

(statearr_17780[(15)] = inst_17688);

(statearr_17780[(16)] = inst_17648);

(statearr_17780[(17)] = inst_17649);

return statearr_17780;
})();
var statearr_17781_17862 = state_17770__$1;
(statearr_17781_17862[(2)] = null);

(statearr_17781_17862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (39))){
var state_17770__$1 = state_17770;
var statearr_17785_17863 = state_17770__$1;
(statearr_17785_17863[(2)] = null);

(statearr_17785_17863[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (4))){
var inst_17638 = (state_17770[(10)]);
var inst_17638__$1 = (state_17770[(2)]);
var inst_17639 = (inst_17638__$1 == null);
var state_17770__$1 = (function (){var statearr_17786 = state_17770;
(statearr_17786[(10)] = inst_17638__$1);

return statearr_17786;
})();
if(cljs.core.truth_(inst_17639)){
var statearr_17787_17864 = state_17770__$1;
(statearr_17787_17864[(1)] = (5));

} else {
var statearr_17788_17865 = state_17770__$1;
(statearr_17788_17865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (15))){
var inst_17647 = (state_17770[(13)]);
var inst_17650 = (state_17770[(14)]);
var inst_17648 = (state_17770[(16)]);
var inst_17649 = (state_17770[(17)]);
var inst_17665 = (state_17770[(2)]);
var inst_17666 = (inst_17650 + (1));
var tmp17782 = inst_17647;
var tmp17783 = inst_17648;
var tmp17784 = inst_17649;
var inst_17647__$1 = tmp17782;
var inst_17648__$1 = tmp17783;
var inst_17649__$1 = tmp17784;
var inst_17650__$1 = inst_17666;
var state_17770__$1 = (function (){var statearr_17789 = state_17770;
(statearr_17789[(13)] = inst_17647__$1);

(statearr_17789[(14)] = inst_17650__$1);

(statearr_17789[(18)] = inst_17665);

(statearr_17789[(16)] = inst_17648__$1);

(statearr_17789[(17)] = inst_17649__$1);

return statearr_17789;
})();
var statearr_17790_17866 = state_17770__$1;
(statearr_17790_17866[(2)] = null);

(statearr_17790_17866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (21))){
var inst_17692 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17794_17867 = state_17770__$1;
(statearr_17794_17867[(2)] = inst_17692);

(statearr_17794_17867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (31))){
var inst_17718 = (state_17770[(12)]);
var inst_17722 = done.call(null,null);
var inst_17723 = cljs.core.async.untap_STAR_.call(null,m,inst_17718);
var state_17770__$1 = (function (){var statearr_17795 = state_17770;
(statearr_17795[(19)] = inst_17722);

return statearr_17795;
})();
var statearr_17796_17868 = state_17770__$1;
(statearr_17796_17868[(2)] = inst_17723);

(statearr_17796_17868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (32))){
var inst_17711 = (state_17770[(9)]);
var inst_17712 = (state_17770[(20)]);
var inst_17710 = (state_17770[(21)]);
var inst_17713 = (state_17770[(11)]);
var inst_17725 = (state_17770[(2)]);
var inst_17726 = (inst_17713 + (1));
var tmp17791 = inst_17711;
var tmp17792 = inst_17712;
var tmp17793 = inst_17710;
var inst_17710__$1 = tmp17793;
var inst_17711__$1 = tmp17791;
var inst_17712__$1 = tmp17792;
var inst_17713__$1 = inst_17726;
var state_17770__$1 = (function (){var statearr_17797 = state_17770;
(statearr_17797[(22)] = inst_17725);

(statearr_17797[(9)] = inst_17711__$1);

(statearr_17797[(20)] = inst_17712__$1);

(statearr_17797[(21)] = inst_17710__$1);

(statearr_17797[(11)] = inst_17713__$1);

return statearr_17797;
})();
var statearr_17798_17869 = state_17770__$1;
(statearr_17798_17869[(2)] = null);

(statearr_17798_17869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (40))){
var inst_17738 = (state_17770[(23)]);
var inst_17742 = done.call(null,null);
var inst_17743 = cljs.core.async.untap_STAR_.call(null,m,inst_17738);
var state_17770__$1 = (function (){var statearr_17799 = state_17770;
(statearr_17799[(24)] = inst_17742);

return statearr_17799;
})();
var statearr_17800_17870 = state_17770__$1;
(statearr_17800_17870[(2)] = inst_17743);

(statearr_17800_17870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (33))){
var inst_17729 = (state_17770[(25)]);
var inst_17731 = cljs.core.chunked_seq_QMARK_.call(null,inst_17729);
var state_17770__$1 = state_17770;
if(inst_17731){
var statearr_17801_17871 = state_17770__$1;
(statearr_17801_17871[(1)] = (36));

} else {
var statearr_17802_17872 = state_17770__$1;
(statearr_17802_17872[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (13))){
var inst_17659 = (state_17770[(26)]);
var inst_17662 = cljs.core.async.close_BANG_.call(null,inst_17659);
var state_17770__$1 = state_17770;
var statearr_17803_17873 = state_17770__$1;
(statearr_17803_17873[(2)] = inst_17662);

(statearr_17803_17873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (22))){
var inst_17682 = (state_17770[(8)]);
var inst_17685 = cljs.core.async.close_BANG_.call(null,inst_17682);
var state_17770__$1 = state_17770;
var statearr_17804_17874 = state_17770__$1;
(statearr_17804_17874[(2)] = inst_17685);

(statearr_17804_17874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (36))){
var inst_17729 = (state_17770[(25)]);
var inst_17733 = cljs.core.chunk_first.call(null,inst_17729);
var inst_17734 = cljs.core.chunk_rest.call(null,inst_17729);
var inst_17735 = cljs.core.count.call(null,inst_17733);
var inst_17710 = inst_17734;
var inst_17711 = inst_17733;
var inst_17712 = inst_17735;
var inst_17713 = (0);
var state_17770__$1 = (function (){var statearr_17805 = state_17770;
(statearr_17805[(9)] = inst_17711);

(statearr_17805[(20)] = inst_17712);

(statearr_17805[(21)] = inst_17710);

(statearr_17805[(11)] = inst_17713);

return statearr_17805;
})();
var statearr_17806_17875 = state_17770__$1;
(statearr_17806_17875[(2)] = null);

(statearr_17806_17875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (41))){
var inst_17729 = (state_17770[(25)]);
var inst_17745 = (state_17770[(2)]);
var inst_17746 = cljs.core.next.call(null,inst_17729);
var inst_17710 = inst_17746;
var inst_17711 = null;
var inst_17712 = (0);
var inst_17713 = (0);
var state_17770__$1 = (function (){var statearr_17807 = state_17770;
(statearr_17807[(27)] = inst_17745);

(statearr_17807[(9)] = inst_17711);

(statearr_17807[(20)] = inst_17712);

(statearr_17807[(21)] = inst_17710);

(statearr_17807[(11)] = inst_17713);

return statearr_17807;
})();
var statearr_17808_17876 = state_17770__$1;
(statearr_17808_17876[(2)] = null);

(statearr_17808_17876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (43))){
var state_17770__$1 = state_17770;
var statearr_17809_17877 = state_17770__$1;
(statearr_17809_17877[(2)] = null);

(statearr_17809_17877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (29))){
var inst_17754 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17810_17878 = state_17770__$1;
(statearr_17810_17878[(2)] = inst_17754);

(statearr_17810_17878[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (44))){
var inst_17763 = (state_17770[(2)]);
var state_17770__$1 = (function (){var statearr_17811 = state_17770;
(statearr_17811[(28)] = inst_17763);

return statearr_17811;
})();
var statearr_17812_17879 = state_17770__$1;
(statearr_17812_17879[(2)] = null);

(statearr_17812_17879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (6))){
var inst_17702 = (state_17770[(29)]);
var inst_17701 = cljs.core.deref.call(null,cs);
var inst_17702__$1 = cljs.core.keys.call(null,inst_17701);
var inst_17703 = cljs.core.count.call(null,inst_17702__$1);
var inst_17704 = cljs.core.reset_BANG_.call(null,dctr,inst_17703);
var inst_17709 = cljs.core.seq.call(null,inst_17702__$1);
var inst_17710 = inst_17709;
var inst_17711 = null;
var inst_17712 = (0);
var inst_17713 = (0);
var state_17770__$1 = (function (){var statearr_17813 = state_17770;
(statearr_17813[(29)] = inst_17702__$1);

(statearr_17813[(30)] = inst_17704);

(statearr_17813[(9)] = inst_17711);

(statearr_17813[(20)] = inst_17712);

(statearr_17813[(21)] = inst_17710);

(statearr_17813[(11)] = inst_17713);

return statearr_17813;
})();
var statearr_17814_17880 = state_17770__$1;
(statearr_17814_17880[(2)] = null);

(statearr_17814_17880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (28))){
var inst_17729 = (state_17770[(25)]);
var inst_17710 = (state_17770[(21)]);
var inst_17729__$1 = cljs.core.seq.call(null,inst_17710);
var state_17770__$1 = (function (){var statearr_17815 = state_17770;
(statearr_17815[(25)] = inst_17729__$1);

return statearr_17815;
})();
if(inst_17729__$1){
var statearr_17816_17881 = state_17770__$1;
(statearr_17816_17881[(1)] = (33));

} else {
var statearr_17817_17882 = state_17770__$1;
(statearr_17817_17882[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (25))){
var inst_17712 = (state_17770[(20)]);
var inst_17713 = (state_17770[(11)]);
var inst_17715 = (inst_17713 < inst_17712);
var inst_17716 = inst_17715;
var state_17770__$1 = state_17770;
if(cljs.core.truth_(inst_17716)){
var statearr_17818_17883 = state_17770__$1;
(statearr_17818_17883[(1)] = (27));

} else {
var statearr_17819_17884 = state_17770__$1;
(statearr_17819_17884[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (34))){
var state_17770__$1 = state_17770;
var statearr_17820_17885 = state_17770__$1;
(statearr_17820_17885[(2)] = null);

(statearr_17820_17885[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (17))){
var state_17770__$1 = state_17770;
var statearr_17821_17886 = state_17770__$1;
(statearr_17821_17886[(2)] = null);

(statearr_17821_17886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (3))){
var inst_17768 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17770__$1,inst_17768);
} else {
if((state_val_17771 === (12))){
var inst_17697 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17822_17887 = state_17770__$1;
(statearr_17822_17887[(2)] = inst_17697);

(statearr_17822_17887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (2))){
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17770__$1,(4),ch);
} else {
if((state_val_17771 === (23))){
var state_17770__$1 = state_17770;
var statearr_17823_17888 = state_17770__$1;
(statearr_17823_17888[(2)] = null);

(statearr_17823_17888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (35))){
var inst_17752 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17824_17889 = state_17770__$1;
(statearr_17824_17889[(2)] = inst_17752);

(statearr_17824_17889[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (19))){
var inst_17669 = (state_17770[(7)]);
var inst_17673 = cljs.core.chunk_first.call(null,inst_17669);
var inst_17674 = cljs.core.chunk_rest.call(null,inst_17669);
var inst_17675 = cljs.core.count.call(null,inst_17673);
var inst_17647 = inst_17674;
var inst_17648 = inst_17673;
var inst_17649 = inst_17675;
var inst_17650 = (0);
var state_17770__$1 = (function (){var statearr_17825 = state_17770;
(statearr_17825[(13)] = inst_17647);

(statearr_17825[(14)] = inst_17650);

(statearr_17825[(16)] = inst_17648);

(statearr_17825[(17)] = inst_17649);

return statearr_17825;
})();
var statearr_17826_17890 = state_17770__$1;
(statearr_17826_17890[(2)] = null);

(statearr_17826_17890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (11))){
var inst_17647 = (state_17770[(13)]);
var inst_17669 = (state_17770[(7)]);
var inst_17669__$1 = cljs.core.seq.call(null,inst_17647);
var state_17770__$1 = (function (){var statearr_17827 = state_17770;
(statearr_17827[(7)] = inst_17669__$1);

return statearr_17827;
})();
if(inst_17669__$1){
var statearr_17828_17891 = state_17770__$1;
(statearr_17828_17891[(1)] = (16));

} else {
var statearr_17829_17892 = state_17770__$1;
(statearr_17829_17892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (9))){
var inst_17699 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17830_17893 = state_17770__$1;
(statearr_17830_17893[(2)] = inst_17699);

(statearr_17830_17893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (5))){
var inst_17645 = cljs.core.deref.call(null,cs);
var inst_17646 = cljs.core.seq.call(null,inst_17645);
var inst_17647 = inst_17646;
var inst_17648 = null;
var inst_17649 = (0);
var inst_17650 = (0);
var state_17770__$1 = (function (){var statearr_17831 = state_17770;
(statearr_17831[(13)] = inst_17647);

(statearr_17831[(14)] = inst_17650);

(statearr_17831[(16)] = inst_17648);

(statearr_17831[(17)] = inst_17649);

return statearr_17831;
})();
var statearr_17832_17894 = state_17770__$1;
(statearr_17832_17894[(2)] = null);

(statearr_17832_17894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (14))){
var state_17770__$1 = state_17770;
var statearr_17833_17895 = state_17770__$1;
(statearr_17833_17895[(2)] = null);

(statearr_17833_17895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (45))){
var inst_17760 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17834_17896 = state_17770__$1;
(statearr_17834_17896[(2)] = inst_17760);

(statearr_17834_17896[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (26))){
var inst_17702 = (state_17770[(29)]);
var inst_17756 = (state_17770[(2)]);
var inst_17757 = cljs.core.seq.call(null,inst_17702);
var state_17770__$1 = (function (){var statearr_17835 = state_17770;
(statearr_17835[(31)] = inst_17756);

return statearr_17835;
})();
if(inst_17757){
var statearr_17836_17897 = state_17770__$1;
(statearr_17836_17897[(1)] = (42));

} else {
var statearr_17837_17898 = state_17770__$1;
(statearr_17837_17898[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (16))){
var inst_17669 = (state_17770[(7)]);
var inst_17671 = cljs.core.chunked_seq_QMARK_.call(null,inst_17669);
var state_17770__$1 = state_17770;
if(inst_17671){
var statearr_17838_17899 = state_17770__$1;
(statearr_17838_17899[(1)] = (19));

} else {
var statearr_17839_17900 = state_17770__$1;
(statearr_17839_17900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (38))){
var inst_17749 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17840_17901 = state_17770__$1;
(statearr_17840_17901[(2)] = inst_17749);

(statearr_17840_17901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (30))){
var state_17770__$1 = state_17770;
var statearr_17841_17902 = state_17770__$1;
(statearr_17841_17902[(2)] = null);

(statearr_17841_17902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (10))){
var inst_17650 = (state_17770[(14)]);
var inst_17648 = (state_17770[(16)]);
var inst_17658 = cljs.core._nth.call(null,inst_17648,inst_17650);
var inst_17659 = cljs.core.nth.call(null,inst_17658,(0),null);
var inst_17660 = cljs.core.nth.call(null,inst_17658,(1),null);
var state_17770__$1 = (function (){var statearr_17842 = state_17770;
(statearr_17842[(26)] = inst_17659);

return statearr_17842;
})();
if(cljs.core.truth_(inst_17660)){
var statearr_17843_17903 = state_17770__$1;
(statearr_17843_17903[(1)] = (13));

} else {
var statearr_17844_17904 = state_17770__$1;
(statearr_17844_17904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (18))){
var inst_17695 = (state_17770[(2)]);
var state_17770__$1 = state_17770;
var statearr_17845_17905 = state_17770__$1;
(statearr_17845_17905[(2)] = inst_17695);

(statearr_17845_17905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (42))){
var state_17770__$1 = state_17770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17770__$1,(45),dchan);
} else {
if((state_val_17771 === (37))){
var inst_17738 = (state_17770[(23)]);
var inst_17729 = (state_17770[(25)]);
var inst_17638 = (state_17770[(10)]);
var inst_17738__$1 = cljs.core.first.call(null,inst_17729);
var inst_17739 = cljs.core.async.put_BANG_.call(null,inst_17738__$1,inst_17638,done);
var state_17770__$1 = (function (){var statearr_17846 = state_17770;
(statearr_17846[(23)] = inst_17738__$1);

return statearr_17846;
})();
if(cljs.core.truth_(inst_17739)){
var statearr_17847_17906 = state_17770__$1;
(statearr_17847_17906[(1)] = (39));

} else {
var statearr_17848_17907 = state_17770__$1;
(statearr_17848_17907[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17771 === (8))){
var inst_17650 = (state_17770[(14)]);
var inst_17649 = (state_17770[(17)]);
var inst_17652 = (inst_17650 < inst_17649);
var inst_17653 = inst_17652;
var state_17770__$1 = state_17770;
if(cljs.core.truth_(inst_17653)){
var statearr_17849_17908 = state_17770__$1;
(statearr_17849_17908[(1)] = (10));

} else {
var statearr_17850_17909 = state_17770__$1;
(statearr_17850_17909[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16938__auto__ = null;
var cljs$core$async$mult_$_state_machine__16938__auto____0 = (function (){
var statearr_17851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17851[(0)] = cljs$core$async$mult_$_state_machine__16938__auto__);

(statearr_17851[(1)] = (1));

return statearr_17851;
});
var cljs$core$async$mult_$_state_machine__16938__auto____1 = (function (state_17770){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_17770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e17852){if((e17852 instanceof Object)){
var ex__16941__auto__ = e17852;
var statearr_17853_17910 = state_17770;
(statearr_17853_17910[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17911 = state_17770;
state_17770 = G__17911;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16938__auto__ = function(state_17770){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16938__auto____1.call(this,state_17770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16938__auto____0;
cljs$core$async$mult_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16938__auto____1;
return cljs$core$async$mult_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_17854 = f__17033__auto__.call(null);
(statearr_17854[(6)] = c__17032__auto___17855);

return statearr_17854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
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
var G__17913 = arguments.length;
switch (G__17913) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17915 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17915.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17916 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17916.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17917 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17917.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17918 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17918.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17919 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17919.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17930 = arguments.length;
var i__4737__auto___17931 = (0);
while(true){
if((i__4737__auto___17931 < len__4736__auto___17930)){
args__4742__auto__.push((arguments[i__4737__auto___17931]));

var G__17932 = (i__4737__auto___17931 + (1));
i__4737__auto___17931 = G__17932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17924){
var map__17925 = p__17924;
var map__17925__$1 = (((((!((map__17925 == null))))?(((((map__17925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17925):map__17925);
var opts = map__17925__$1;
var statearr_17927_17933 = state;
(statearr_17927_17933[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_17928_17934 = state;
(statearr_17928_17934[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_17929_17935 = state;
(statearr_17929_17935[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17920){
var G__17921 = cljs.core.first.call(null,seq17920);
var seq17920__$1 = cljs.core.next.call(null,seq17920);
var G__17922 = cljs.core.first.call(null,seq17920__$1);
var seq17920__$2 = cljs.core.next.call(null,seq17920__$1);
var G__17923 = cljs.core.first.call(null,seq17920__$2);
var seq17920__$3 = cljs.core.next.call(null,seq17920__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17921,G__17922,G__17923,seq17920__$3);
}));

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17936 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17937){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17937 = meta17937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17938,meta17937__$1){
var self__ = this;
var _17938__$1 = this;
return (new cljs.core.async.t_cljs$core$async17936(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17937__$1));
}));

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17938){
var self__ = this;
var _17938__$1 = this;
return self__.meta17937;
}));

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17936.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async17936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17937","meta17937",1656458384,null)], null);
}));

(cljs.core.async.t_cljs$core$async17936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17936");

(cljs.core.async.t_cljs$core$async17936.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17936.
 */
cljs.core.async.__GT_t_cljs$core$async17936 = (function cljs$core$async$mix_$___GT_t_cljs$core$async17936(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17937){
return (new cljs.core.async.t_cljs$core$async17936(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17937));
});

}

return (new cljs.core.async.t_cljs$core$async17936(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17032__auto___18100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18040){
var state_val_18041 = (state_18040[(1)]);
if((state_val_18041 === (7))){
var inst_17955 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18042_18101 = state_18040__$1;
(statearr_18042_18101[(2)] = inst_17955);

(statearr_18042_18101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (20))){
var inst_17967 = (state_18040[(7)]);
var state_18040__$1 = state_18040;
var statearr_18043_18102 = state_18040__$1;
(statearr_18043_18102[(2)] = inst_17967);

(statearr_18043_18102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (27))){
var state_18040__$1 = state_18040;
var statearr_18044_18103 = state_18040__$1;
(statearr_18044_18103[(2)] = null);

(statearr_18044_18103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (1))){
var inst_17942 = (state_18040[(8)]);
var inst_17942__$1 = calc_state.call(null);
var inst_17944 = (inst_17942__$1 == null);
var inst_17945 = cljs.core.not.call(null,inst_17944);
var state_18040__$1 = (function (){var statearr_18045 = state_18040;
(statearr_18045[(8)] = inst_17942__$1);

return statearr_18045;
})();
if(inst_17945){
var statearr_18046_18104 = state_18040__$1;
(statearr_18046_18104[(1)] = (2));

} else {
var statearr_18047_18105 = state_18040__$1;
(statearr_18047_18105[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (24))){
var inst_17991 = (state_18040[(9)]);
var inst_18014 = (state_18040[(10)]);
var inst_18000 = (state_18040[(11)]);
var inst_18014__$1 = inst_17991.call(null,inst_18000);
var state_18040__$1 = (function (){var statearr_18048 = state_18040;
(statearr_18048[(10)] = inst_18014__$1);

return statearr_18048;
})();
if(cljs.core.truth_(inst_18014__$1)){
var statearr_18049_18106 = state_18040__$1;
(statearr_18049_18106[(1)] = (29));

} else {
var statearr_18050_18107 = state_18040__$1;
(statearr_18050_18107[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (4))){
var inst_17958 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_17958)){
var statearr_18051_18108 = state_18040__$1;
(statearr_18051_18108[(1)] = (8));

} else {
var statearr_18052_18109 = state_18040__$1;
(statearr_18052_18109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (15))){
var inst_17985 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_17985)){
var statearr_18053_18110 = state_18040__$1;
(statearr_18053_18110[(1)] = (19));

} else {
var statearr_18054_18111 = state_18040__$1;
(statearr_18054_18111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (21))){
var inst_17990 = (state_18040[(12)]);
var inst_17990__$1 = (state_18040[(2)]);
var inst_17991 = cljs.core.get.call(null,inst_17990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17992 = cljs.core.get.call(null,inst_17990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17993 = cljs.core.get.call(null,inst_17990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18040__$1 = (function (){var statearr_18055 = state_18040;
(statearr_18055[(13)] = inst_17992);

(statearr_18055[(9)] = inst_17991);

(statearr_18055[(12)] = inst_17990__$1);

return statearr_18055;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18040__$1,(22),inst_17993);
} else {
if((state_val_18041 === (31))){
var inst_18022 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_18022)){
var statearr_18056_18112 = state_18040__$1;
(statearr_18056_18112[(1)] = (32));

} else {
var statearr_18057_18113 = state_18040__$1;
(statearr_18057_18113[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (32))){
var inst_17999 = (state_18040[(14)]);
var state_18040__$1 = state_18040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18040__$1,(35),out,inst_17999);
} else {
if((state_val_18041 === (33))){
var inst_17990 = (state_18040[(12)]);
var inst_17967 = inst_17990;
var state_18040__$1 = (function (){var statearr_18058 = state_18040;
(statearr_18058[(7)] = inst_17967);

return statearr_18058;
})();
var statearr_18059_18114 = state_18040__$1;
(statearr_18059_18114[(2)] = null);

(statearr_18059_18114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (13))){
var inst_17967 = (state_18040[(7)]);
var inst_17974 = inst_17967.cljs$lang$protocol_mask$partition0$;
var inst_17975 = (inst_17974 & (64));
var inst_17976 = inst_17967.cljs$core$ISeq$;
var inst_17977 = (cljs.core.PROTOCOL_SENTINEL === inst_17976);
var inst_17978 = ((inst_17975) || (inst_17977));
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_17978)){
var statearr_18060_18115 = state_18040__$1;
(statearr_18060_18115[(1)] = (16));

} else {
var statearr_18061_18116 = state_18040__$1;
(statearr_18061_18116[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (22))){
var inst_18000 = (state_18040[(11)]);
var inst_17999 = (state_18040[(14)]);
var inst_17998 = (state_18040[(2)]);
var inst_17999__$1 = cljs.core.nth.call(null,inst_17998,(0),null);
var inst_18000__$1 = cljs.core.nth.call(null,inst_17998,(1),null);
var inst_18001 = (inst_17999__$1 == null);
var inst_18002 = cljs.core._EQ_.call(null,inst_18000__$1,change);
var inst_18003 = ((inst_18001) || (inst_18002));
var state_18040__$1 = (function (){var statearr_18062 = state_18040;
(statearr_18062[(11)] = inst_18000__$1);

(statearr_18062[(14)] = inst_17999__$1);

return statearr_18062;
})();
if(cljs.core.truth_(inst_18003)){
var statearr_18063_18117 = state_18040__$1;
(statearr_18063_18117[(1)] = (23));

} else {
var statearr_18064_18118 = state_18040__$1;
(statearr_18064_18118[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (36))){
var inst_17990 = (state_18040[(12)]);
var inst_17967 = inst_17990;
var state_18040__$1 = (function (){var statearr_18065 = state_18040;
(statearr_18065[(7)] = inst_17967);

return statearr_18065;
})();
var statearr_18066_18119 = state_18040__$1;
(statearr_18066_18119[(2)] = null);

(statearr_18066_18119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (29))){
var inst_18014 = (state_18040[(10)]);
var state_18040__$1 = state_18040;
var statearr_18067_18120 = state_18040__$1;
(statearr_18067_18120[(2)] = inst_18014);

(statearr_18067_18120[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (6))){
var state_18040__$1 = state_18040;
var statearr_18068_18121 = state_18040__$1;
(statearr_18068_18121[(2)] = false);

(statearr_18068_18121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (28))){
var inst_18010 = (state_18040[(2)]);
var inst_18011 = calc_state.call(null);
var inst_17967 = inst_18011;
var state_18040__$1 = (function (){var statearr_18069 = state_18040;
(statearr_18069[(15)] = inst_18010);

(statearr_18069[(7)] = inst_17967);

return statearr_18069;
})();
var statearr_18070_18122 = state_18040__$1;
(statearr_18070_18122[(2)] = null);

(statearr_18070_18122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (25))){
var inst_18036 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18071_18123 = state_18040__$1;
(statearr_18071_18123[(2)] = inst_18036);

(statearr_18071_18123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (34))){
var inst_18034 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18072_18124 = state_18040__$1;
(statearr_18072_18124[(2)] = inst_18034);

(statearr_18072_18124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (17))){
var state_18040__$1 = state_18040;
var statearr_18073_18125 = state_18040__$1;
(statearr_18073_18125[(2)] = false);

(statearr_18073_18125[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (3))){
var state_18040__$1 = state_18040;
var statearr_18074_18126 = state_18040__$1;
(statearr_18074_18126[(2)] = false);

(statearr_18074_18126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (12))){
var inst_18038 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18040__$1,inst_18038);
} else {
if((state_val_18041 === (2))){
var inst_17942 = (state_18040[(8)]);
var inst_17947 = inst_17942.cljs$lang$protocol_mask$partition0$;
var inst_17948 = (inst_17947 & (64));
var inst_17949 = inst_17942.cljs$core$ISeq$;
var inst_17950 = (cljs.core.PROTOCOL_SENTINEL === inst_17949);
var inst_17951 = ((inst_17948) || (inst_17950));
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_17951)){
var statearr_18075_18127 = state_18040__$1;
(statearr_18075_18127[(1)] = (5));

} else {
var statearr_18076_18128 = state_18040__$1;
(statearr_18076_18128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (23))){
var inst_17999 = (state_18040[(14)]);
var inst_18005 = (inst_17999 == null);
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_18005)){
var statearr_18077_18129 = state_18040__$1;
(statearr_18077_18129[(1)] = (26));

} else {
var statearr_18078_18130 = state_18040__$1;
(statearr_18078_18130[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (35))){
var inst_18025 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
if(cljs.core.truth_(inst_18025)){
var statearr_18079_18131 = state_18040__$1;
(statearr_18079_18131[(1)] = (36));

} else {
var statearr_18080_18132 = state_18040__$1;
(statearr_18080_18132[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (19))){
var inst_17967 = (state_18040[(7)]);
var inst_17987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17967);
var state_18040__$1 = state_18040;
var statearr_18081_18133 = state_18040__$1;
(statearr_18081_18133[(2)] = inst_17987);

(statearr_18081_18133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (11))){
var inst_17967 = (state_18040[(7)]);
var inst_17971 = (inst_17967 == null);
var inst_17972 = cljs.core.not.call(null,inst_17971);
var state_18040__$1 = state_18040;
if(inst_17972){
var statearr_18082_18134 = state_18040__$1;
(statearr_18082_18134[(1)] = (13));

} else {
var statearr_18083_18135 = state_18040__$1;
(statearr_18083_18135[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (9))){
var inst_17942 = (state_18040[(8)]);
var state_18040__$1 = state_18040;
var statearr_18084_18136 = state_18040__$1;
(statearr_18084_18136[(2)] = inst_17942);

(statearr_18084_18136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (5))){
var state_18040__$1 = state_18040;
var statearr_18085_18137 = state_18040__$1;
(statearr_18085_18137[(2)] = true);

(statearr_18085_18137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (14))){
var state_18040__$1 = state_18040;
var statearr_18086_18138 = state_18040__$1;
(statearr_18086_18138[(2)] = false);

(statearr_18086_18138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (26))){
var inst_18000 = (state_18040[(11)]);
var inst_18007 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18000);
var state_18040__$1 = state_18040;
var statearr_18087_18139 = state_18040__$1;
(statearr_18087_18139[(2)] = inst_18007);

(statearr_18087_18139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (16))){
var state_18040__$1 = state_18040;
var statearr_18088_18140 = state_18040__$1;
(statearr_18088_18140[(2)] = true);

(statearr_18088_18140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (38))){
var inst_18030 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18089_18141 = state_18040__$1;
(statearr_18089_18141[(2)] = inst_18030);

(statearr_18089_18141[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (30))){
var inst_17992 = (state_18040[(13)]);
var inst_17991 = (state_18040[(9)]);
var inst_18000 = (state_18040[(11)]);
var inst_18017 = cljs.core.empty_QMARK_.call(null,inst_17991);
var inst_18018 = inst_17992.call(null,inst_18000);
var inst_18019 = cljs.core.not.call(null,inst_18018);
var inst_18020 = ((inst_18017) && (inst_18019));
var state_18040__$1 = state_18040;
var statearr_18090_18142 = state_18040__$1;
(statearr_18090_18142[(2)] = inst_18020);

(statearr_18090_18142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (10))){
var inst_17942 = (state_18040[(8)]);
var inst_17963 = (state_18040[(2)]);
var inst_17964 = cljs.core.get.call(null,inst_17963,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17965 = cljs.core.get.call(null,inst_17963,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17966 = cljs.core.get.call(null,inst_17963,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17967 = inst_17942;
var state_18040__$1 = (function (){var statearr_18091 = state_18040;
(statearr_18091[(16)] = inst_17966);

(statearr_18091[(17)] = inst_17965);

(statearr_18091[(18)] = inst_17964);

(statearr_18091[(7)] = inst_17967);

return statearr_18091;
})();
var statearr_18092_18143 = state_18040__$1;
(statearr_18092_18143[(2)] = null);

(statearr_18092_18143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (18))){
var inst_17982 = (state_18040[(2)]);
var state_18040__$1 = state_18040;
var statearr_18093_18144 = state_18040__$1;
(statearr_18093_18144[(2)] = inst_17982);

(statearr_18093_18144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (37))){
var state_18040__$1 = state_18040;
var statearr_18094_18145 = state_18040__$1;
(statearr_18094_18145[(2)] = null);

(statearr_18094_18145[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18041 === (8))){
var inst_17942 = (state_18040[(8)]);
var inst_17960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17942);
var state_18040__$1 = state_18040;
var statearr_18095_18146 = state_18040__$1;
(statearr_18095_18146[(2)] = inst_17960);

(statearr_18095_18146[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__16938__auto__ = null;
var cljs$core$async$mix_$_state_machine__16938__auto____0 = (function (){
var statearr_18096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18096[(0)] = cljs$core$async$mix_$_state_machine__16938__auto__);

(statearr_18096[(1)] = (1));

return statearr_18096;
});
var cljs$core$async$mix_$_state_machine__16938__auto____1 = (function (state_18040){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18097){if((e18097 instanceof Object)){
var ex__16941__auto__ = e18097;
var statearr_18098_18147 = state_18040;
(statearr_18098_18147[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18148 = state_18040;
state_18040 = G__18148;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16938__auto__ = function(state_18040){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16938__auto____1.call(this,state_18040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16938__auto____0;
cljs$core$async$mix_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16938__auto____1;
return cljs$core$async$mix_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18099 = f__17033__auto__.call(null);
(statearr_18099[(6)] = c__17032__auto___18100);

return statearr_18099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18151 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18151.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18152 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18152.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18153 = (function() {
var G__18154 = null;
var G__18154__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__18154__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__18154 = function(p,v){
switch(arguments.length){
case 1:
return G__18154__1.call(this,p);
case 2:
return G__18154__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18154.cljs$core$IFn$_invoke$arity$1 = G__18154__1;
G__18154.cljs$core$IFn$_invoke$arity$2 = G__18154__2;
return G__18154;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18150 = arguments.length;
switch (G__18150) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18153.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18153.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__18158 = arguments.length;
switch (G__18158) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18156_SHARP_){
if(cljs.core.truth_(p1__18156_SHARP_.call(null,topic))){
return p1__18156_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18156_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18159 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18160){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18160 = meta18160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18161,meta18160__$1){
var self__ = this;
var _18161__$1 = this;
return (new cljs.core.async.t_cljs$core$async18159(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18160__$1));
}));

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18161){
var self__ = this;
var _18161__$1 = this;
return self__.meta18160;
}));

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18160","meta18160",923965286,null)], null);
}));

(cljs.core.async.t_cljs$core$async18159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18159");

(cljs.core.async.t_cljs$core$async18159.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18159.
 */
cljs.core.async.__GT_t_cljs$core$async18159 = (function cljs$core$async$__GT_t_cljs$core$async18159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18160){
return (new cljs.core.async.t_cljs$core$async18159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18160));
});

}

return (new cljs.core.async.t_cljs$core$async18159(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17032__auto___18279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18233){
var state_val_18234 = (state_18233[(1)]);
if((state_val_18234 === (7))){
var inst_18229 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18235_18280 = state_18233__$1;
(statearr_18235_18280[(2)] = inst_18229);

(statearr_18235_18280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (20))){
var state_18233__$1 = state_18233;
var statearr_18236_18281 = state_18233__$1;
(statearr_18236_18281[(2)] = null);

(statearr_18236_18281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (1))){
var state_18233__$1 = state_18233;
var statearr_18237_18282 = state_18233__$1;
(statearr_18237_18282[(2)] = null);

(statearr_18237_18282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (24))){
var inst_18212 = (state_18233[(7)]);
var inst_18221 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18212);
var state_18233__$1 = state_18233;
var statearr_18238_18283 = state_18233__$1;
(statearr_18238_18283[(2)] = inst_18221);

(statearr_18238_18283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (4))){
var inst_18164 = (state_18233[(8)]);
var inst_18164__$1 = (state_18233[(2)]);
var inst_18165 = (inst_18164__$1 == null);
var state_18233__$1 = (function (){var statearr_18239 = state_18233;
(statearr_18239[(8)] = inst_18164__$1);

return statearr_18239;
})();
if(cljs.core.truth_(inst_18165)){
var statearr_18240_18284 = state_18233__$1;
(statearr_18240_18284[(1)] = (5));

} else {
var statearr_18241_18285 = state_18233__$1;
(statearr_18241_18285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (15))){
var inst_18206 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18242_18286 = state_18233__$1;
(statearr_18242_18286[(2)] = inst_18206);

(statearr_18242_18286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (21))){
var inst_18226 = (state_18233[(2)]);
var state_18233__$1 = (function (){var statearr_18243 = state_18233;
(statearr_18243[(9)] = inst_18226);

return statearr_18243;
})();
var statearr_18244_18287 = state_18233__$1;
(statearr_18244_18287[(2)] = null);

(statearr_18244_18287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (13))){
var inst_18188 = (state_18233[(10)]);
var inst_18190 = cljs.core.chunked_seq_QMARK_.call(null,inst_18188);
var state_18233__$1 = state_18233;
if(inst_18190){
var statearr_18245_18288 = state_18233__$1;
(statearr_18245_18288[(1)] = (16));

} else {
var statearr_18246_18289 = state_18233__$1;
(statearr_18246_18289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (22))){
var inst_18218 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
if(cljs.core.truth_(inst_18218)){
var statearr_18247_18290 = state_18233__$1;
(statearr_18247_18290[(1)] = (23));

} else {
var statearr_18248_18291 = state_18233__$1;
(statearr_18248_18291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (6))){
var inst_18212 = (state_18233[(7)]);
var inst_18164 = (state_18233[(8)]);
var inst_18214 = (state_18233[(11)]);
var inst_18212__$1 = topic_fn.call(null,inst_18164);
var inst_18213 = cljs.core.deref.call(null,mults);
var inst_18214__$1 = cljs.core.get.call(null,inst_18213,inst_18212__$1);
var state_18233__$1 = (function (){var statearr_18249 = state_18233;
(statearr_18249[(7)] = inst_18212__$1);

(statearr_18249[(11)] = inst_18214__$1);

return statearr_18249;
})();
if(cljs.core.truth_(inst_18214__$1)){
var statearr_18250_18292 = state_18233__$1;
(statearr_18250_18292[(1)] = (19));

} else {
var statearr_18251_18293 = state_18233__$1;
(statearr_18251_18293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (25))){
var inst_18223 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18252_18294 = state_18233__$1;
(statearr_18252_18294[(2)] = inst_18223);

(statearr_18252_18294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (17))){
var inst_18188 = (state_18233[(10)]);
var inst_18197 = cljs.core.first.call(null,inst_18188);
var inst_18198 = cljs.core.async.muxch_STAR_.call(null,inst_18197);
var inst_18199 = cljs.core.async.close_BANG_.call(null,inst_18198);
var inst_18200 = cljs.core.next.call(null,inst_18188);
var inst_18174 = inst_18200;
var inst_18175 = null;
var inst_18176 = (0);
var inst_18177 = (0);
var state_18233__$1 = (function (){var statearr_18253 = state_18233;
(statearr_18253[(12)] = inst_18175);

(statearr_18253[(13)] = inst_18176);

(statearr_18253[(14)] = inst_18199);

(statearr_18253[(15)] = inst_18174);

(statearr_18253[(16)] = inst_18177);

return statearr_18253;
})();
var statearr_18254_18295 = state_18233__$1;
(statearr_18254_18295[(2)] = null);

(statearr_18254_18295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (3))){
var inst_18231 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18233__$1,inst_18231);
} else {
if((state_val_18234 === (12))){
var inst_18208 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18255_18296 = state_18233__$1;
(statearr_18255_18296[(2)] = inst_18208);

(statearr_18255_18296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (2))){
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18233__$1,(4),ch);
} else {
if((state_val_18234 === (23))){
var state_18233__$1 = state_18233;
var statearr_18256_18297 = state_18233__$1;
(statearr_18256_18297[(2)] = null);

(statearr_18256_18297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (19))){
var inst_18164 = (state_18233[(8)]);
var inst_18214 = (state_18233[(11)]);
var inst_18216 = cljs.core.async.muxch_STAR_.call(null,inst_18214);
var state_18233__$1 = state_18233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18233__$1,(22),inst_18216,inst_18164);
} else {
if((state_val_18234 === (11))){
var inst_18174 = (state_18233[(15)]);
var inst_18188 = (state_18233[(10)]);
var inst_18188__$1 = cljs.core.seq.call(null,inst_18174);
var state_18233__$1 = (function (){var statearr_18257 = state_18233;
(statearr_18257[(10)] = inst_18188__$1);

return statearr_18257;
})();
if(inst_18188__$1){
var statearr_18258_18298 = state_18233__$1;
(statearr_18258_18298[(1)] = (13));

} else {
var statearr_18259_18299 = state_18233__$1;
(statearr_18259_18299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (9))){
var inst_18210 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18260_18300 = state_18233__$1;
(statearr_18260_18300[(2)] = inst_18210);

(statearr_18260_18300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (5))){
var inst_18171 = cljs.core.deref.call(null,mults);
var inst_18172 = cljs.core.vals.call(null,inst_18171);
var inst_18173 = cljs.core.seq.call(null,inst_18172);
var inst_18174 = inst_18173;
var inst_18175 = null;
var inst_18176 = (0);
var inst_18177 = (0);
var state_18233__$1 = (function (){var statearr_18261 = state_18233;
(statearr_18261[(12)] = inst_18175);

(statearr_18261[(13)] = inst_18176);

(statearr_18261[(15)] = inst_18174);

(statearr_18261[(16)] = inst_18177);

return statearr_18261;
})();
var statearr_18262_18301 = state_18233__$1;
(statearr_18262_18301[(2)] = null);

(statearr_18262_18301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (14))){
var state_18233__$1 = state_18233;
var statearr_18266_18302 = state_18233__$1;
(statearr_18266_18302[(2)] = null);

(statearr_18266_18302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (16))){
var inst_18188 = (state_18233[(10)]);
var inst_18192 = cljs.core.chunk_first.call(null,inst_18188);
var inst_18193 = cljs.core.chunk_rest.call(null,inst_18188);
var inst_18194 = cljs.core.count.call(null,inst_18192);
var inst_18174 = inst_18193;
var inst_18175 = inst_18192;
var inst_18176 = inst_18194;
var inst_18177 = (0);
var state_18233__$1 = (function (){var statearr_18267 = state_18233;
(statearr_18267[(12)] = inst_18175);

(statearr_18267[(13)] = inst_18176);

(statearr_18267[(15)] = inst_18174);

(statearr_18267[(16)] = inst_18177);

return statearr_18267;
})();
var statearr_18268_18303 = state_18233__$1;
(statearr_18268_18303[(2)] = null);

(statearr_18268_18303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (10))){
var inst_18175 = (state_18233[(12)]);
var inst_18176 = (state_18233[(13)]);
var inst_18174 = (state_18233[(15)]);
var inst_18177 = (state_18233[(16)]);
var inst_18182 = cljs.core._nth.call(null,inst_18175,inst_18177);
var inst_18183 = cljs.core.async.muxch_STAR_.call(null,inst_18182);
var inst_18184 = cljs.core.async.close_BANG_.call(null,inst_18183);
var inst_18185 = (inst_18177 + (1));
var tmp18263 = inst_18175;
var tmp18264 = inst_18176;
var tmp18265 = inst_18174;
var inst_18174__$1 = tmp18265;
var inst_18175__$1 = tmp18263;
var inst_18176__$1 = tmp18264;
var inst_18177__$1 = inst_18185;
var state_18233__$1 = (function (){var statearr_18269 = state_18233;
(statearr_18269[(12)] = inst_18175__$1);

(statearr_18269[(13)] = inst_18176__$1);

(statearr_18269[(17)] = inst_18184);

(statearr_18269[(15)] = inst_18174__$1);

(statearr_18269[(16)] = inst_18177__$1);

return statearr_18269;
})();
var statearr_18270_18304 = state_18233__$1;
(statearr_18270_18304[(2)] = null);

(statearr_18270_18304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (18))){
var inst_18203 = (state_18233[(2)]);
var state_18233__$1 = state_18233;
var statearr_18271_18305 = state_18233__$1;
(statearr_18271_18305[(2)] = inst_18203);

(statearr_18271_18305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18234 === (8))){
var inst_18176 = (state_18233[(13)]);
var inst_18177 = (state_18233[(16)]);
var inst_18179 = (inst_18177 < inst_18176);
var inst_18180 = inst_18179;
var state_18233__$1 = state_18233;
if(cljs.core.truth_(inst_18180)){
var statearr_18272_18306 = state_18233__$1;
(statearr_18272_18306[(1)] = (10));

} else {
var statearr_18273_18307 = state_18233__$1;
(statearr_18273_18307[(1)] = (11));

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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18274[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18274[(1)] = (1));

return statearr_18274;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18233){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18275){if((e18275 instanceof Object)){
var ex__16941__auto__ = e18275;
var statearr_18276_18308 = state_18233;
(statearr_18276_18308[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18309 = state_18233;
state_18233 = G__18309;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18277 = f__17033__auto__.call(null);
(statearr_18277[(6)] = c__17032__auto___18279);

return statearr_18277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
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
var G__18311 = arguments.length;
switch (G__18311) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18314 = arguments.length;
switch (G__18314) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__18317 = arguments.length;
switch (G__18317) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__17032__auto___18384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18356){
var state_val_18357 = (state_18356[(1)]);
if((state_val_18357 === (7))){
var state_18356__$1 = state_18356;
var statearr_18358_18385 = state_18356__$1;
(statearr_18358_18385[(2)] = null);

(statearr_18358_18385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (1))){
var state_18356__$1 = state_18356;
var statearr_18359_18386 = state_18356__$1;
(statearr_18359_18386[(2)] = null);

(statearr_18359_18386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (4))){
var inst_18320 = (state_18356[(7)]);
var inst_18322 = (inst_18320 < cnt);
var state_18356__$1 = state_18356;
if(cljs.core.truth_(inst_18322)){
var statearr_18360_18387 = state_18356__$1;
(statearr_18360_18387[(1)] = (6));

} else {
var statearr_18361_18388 = state_18356__$1;
(statearr_18361_18388[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (15))){
var inst_18352 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
var statearr_18362_18389 = state_18356__$1;
(statearr_18362_18389[(2)] = inst_18352);

(statearr_18362_18389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (13))){
var inst_18345 = cljs.core.async.close_BANG_.call(null,out);
var state_18356__$1 = state_18356;
var statearr_18363_18390 = state_18356__$1;
(statearr_18363_18390[(2)] = inst_18345);

(statearr_18363_18390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (6))){
var state_18356__$1 = state_18356;
var statearr_18364_18391 = state_18356__$1;
(statearr_18364_18391[(2)] = null);

(statearr_18364_18391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (3))){
var inst_18354 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18356__$1,inst_18354);
} else {
if((state_val_18357 === (12))){
var inst_18342 = (state_18356[(8)]);
var inst_18342__$1 = (state_18356[(2)]);
var inst_18343 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18342__$1);
var state_18356__$1 = (function (){var statearr_18365 = state_18356;
(statearr_18365[(8)] = inst_18342__$1);

return statearr_18365;
})();
if(cljs.core.truth_(inst_18343)){
var statearr_18366_18392 = state_18356__$1;
(statearr_18366_18392[(1)] = (13));

} else {
var statearr_18367_18393 = state_18356__$1;
(statearr_18367_18393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (2))){
var inst_18319 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18320 = (0);
var state_18356__$1 = (function (){var statearr_18368 = state_18356;
(statearr_18368[(7)] = inst_18320);

(statearr_18368[(9)] = inst_18319);

return statearr_18368;
})();
var statearr_18369_18394 = state_18356__$1;
(statearr_18369_18394[(2)] = null);

(statearr_18369_18394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (11))){
var inst_18320 = (state_18356[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18356,(10),Object,null,(9));
var inst_18329 = chs__$1.call(null,inst_18320);
var inst_18330 = done.call(null,inst_18320);
var inst_18331 = cljs.core.async.take_BANG_.call(null,inst_18329,inst_18330);
var state_18356__$1 = state_18356;
var statearr_18370_18395 = state_18356__$1;
(statearr_18370_18395[(2)] = inst_18331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (9))){
var inst_18320 = (state_18356[(7)]);
var inst_18333 = (state_18356[(2)]);
var inst_18334 = (inst_18320 + (1));
var inst_18320__$1 = inst_18334;
var state_18356__$1 = (function (){var statearr_18371 = state_18356;
(statearr_18371[(10)] = inst_18333);

(statearr_18371[(7)] = inst_18320__$1);

return statearr_18371;
})();
var statearr_18372_18396 = state_18356__$1;
(statearr_18372_18396[(2)] = null);

(statearr_18372_18396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (5))){
var inst_18340 = (state_18356[(2)]);
var state_18356__$1 = (function (){var statearr_18373 = state_18356;
(statearr_18373[(11)] = inst_18340);

return statearr_18373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18356__$1,(12),dchan);
} else {
if((state_val_18357 === (14))){
var inst_18342 = (state_18356[(8)]);
var inst_18347 = cljs.core.apply.call(null,f,inst_18342);
var state_18356__$1 = state_18356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18356__$1,(16),out,inst_18347);
} else {
if((state_val_18357 === (16))){
var inst_18349 = (state_18356[(2)]);
var state_18356__$1 = (function (){var statearr_18374 = state_18356;
(statearr_18374[(12)] = inst_18349);

return statearr_18374;
})();
var statearr_18375_18397 = state_18356__$1;
(statearr_18375_18397[(2)] = null);

(statearr_18375_18397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (10))){
var inst_18324 = (state_18356[(2)]);
var inst_18325 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18356__$1 = (function (){var statearr_18376 = state_18356;
(statearr_18376[(13)] = inst_18324);

return statearr_18376;
})();
var statearr_18377_18398 = state_18356__$1;
(statearr_18377_18398[(2)] = inst_18325);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18357 === (8))){
var inst_18338 = (state_18356[(2)]);
var state_18356__$1 = state_18356;
var statearr_18378_18399 = state_18356__$1;
(statearr_18378_18399[(2)] = inst_18338);

(statearr_18378_18399[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18379[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18379[(1)] = (1));

return statearr_18379;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18356){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18380){if((e18380 instanceof Object)){
var ex__16941__auto__ = e18380;
var statearr_18381_18400 = state_18356;
(statearr_18381_18400[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18401 = state_18356;
state_18356 = G__18401;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18382 = f__17033__auto__.call(null);
(statearr_18382[(6)] = c__17032__auto___18384);

return statearr_18382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


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
var G__18404 = arguments.length;
switch (G__18404) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17032__auto___18458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18436){
var state_val_18437 = (state_18436[(1)]);
if((state_val_18437 === (7))){
var inst_18415 = (state_18436[(7)]);
var inst_18416 = (state_18436[(8)]);
var inst_18415__$1 = (state_18436[(2)]);
var inst_18416__$1 = cljs.core.nth.call(null,inst_18415__$1,(0),null);
var inst_18417 = cljs.core.nth.call(null,inst_18415__$1,(1),null);
var inst_18418 = (inst_18416__$1 == null);
var state_18436__$1 = (function (){var statearr_18438 = state_18436;
(statearr_18438[(9)] = inst_18417);

(statearr_18438[(7)] = inst_18415__$1);

(statearr_18438[(8)] = inst_18416__$1);

return statearr_18438;
})();
if(cljs.core.truth_(inst_18418)){
var statearr_18439_18459 = state_18436__$1;
(statearr_18439_18459[(1)] = (8));

} else {
var statearr_18440_18460 = state_18436__$1;
(statearr_18440_18460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (1))){
var inst_18405 = cljs.core.vec.call(null,chs);
var inst_18406 = inst_18405;
var state_18436__$1 = (function (){var statearr_18441 = state_18436;
(statearr_18441[(10)] = inst_18406);

return statearr_18441;
})();
var statearr_18442_18461 = state_18436__$1;
(statearr_18442_18461[(2)] = null);

(statearr_18442_18461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (4))){
var inst_18406 = (state_18436[(10)]);
var state_18436__$1 = state_18436;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18436__$1,(7),inst_18406);
} else {
if((state_val_18437 === (6))){
var inst_18432 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
var statearr_18443_18462 = state_18436__$1;
(statearr_18443_18462[(2)] = inst_18432);

(statearr_18443_18462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (3))){
var inst_18434 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18436__$1,inst_18434);
} else {
if((state_val_18437 === (2))){
var inst_18406 = (state_18436[(10)]);
var inst_18408 = cljs.core.count.call(null,inst_18406);
var inst_18409 = (inst_18408 > (0));
var state_18436__$1 = state_18436;
if(cljs.core.truth_(inst_18409)){
var statearr_18445_18463 = state_18436__$1;
(statearr_18445_18463[(1)] = (4));

} else {
var statearr_18446_18464 = state_18436__$1;
(statearr_18446_18464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (11))){
var inst_18406 = (state_18436[(10)]);
var inst_18425 = (state_18436[(2)]);
var tmp18444 = inst_18406;
var inst_18406__$1 = tmp18444;
var state_18436__$1 = (function (){var statearr_18447 = state_18436;
(statearr_18447[(11)] = inst_18425);

(statearr_18447[(10)] = inst_18406__$1);

return statearr_18447;
})();
var statearr_18448_18465 = state_18436__$1;
(statearr_18448_18465[(2)] = null);

(statearr_18448_18465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (9))){
var inst_18416 = (state_18436[(8)]);
var state_18436__$1 = state_18436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18436__$1,(11),out,inst_18416);
} else {
if((state_val_18437 === (5))){
var inst_18430 = cljs.core.async.close_BANG_.call(null,out);
var state_18436__$1 = state_18436;
var statearr_18449_18466 = state_18436__$1;
(statearr_18449_18466[(2)] = inst_18430);

(statearr_18449_18466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (10))){
var inst_18428 = (state_18436[(2)]);
var state_18436__$1 = state_18436;
var statearr_18450_18467 = state_18436__$1;
(statearr_18450_18467[(2)] = inst_18428);

(statearr_18450_18467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18437 === (8))){
var inst_18406 = (state_18436[(10)]);
var inst_18417 = (state_18436[(9)]);
var inst_18415 = (state_18436[(7)]);
var inst_18416 = (state_18436[(8)]);
var inst_18420 = (function (){var cs = inst_18406;
var vec__18411 = inst_18415;
var v = inst_18416;
var c = inst_18417;
return (function (p1__18402_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18402_SHARP_);
});
})();
var inst_18421 = cljs.core.filterv.call(null,inst_18420,inst_18406);
var inst_18406__$1 = inst_18421;
var state_18436__$1 = (function (){var statearr_18451 = state_18436;
(statearr_18451[(10)] = inst_18406__$1);

return statearr_18451;
})();
var statearr_18452_18468 = state_18436__$1;
(statearr_18452_18468[(2)] = null);

(statearr_18452_18468[(1)] = (2));


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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18453[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18453[(1)] = (1));

return statearr_18453;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18436){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18454){if((e18454 instanceof Object)){
var ex__16941__auto__ = e18454;
var statearr_18455_18469 = state_18436;
(statearr_18455_18469[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18470 = state_18436;
state_18436 = G__18470;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18456 = f__17033__auto__.call(null);
(statearr_18456[(6)] = c__17032__auto___18458);

return statearr_18456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18472 = arguments.length;
switch (G__18472) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17032__auto___18517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18496){
var state_val_18497 = (state_18496[(1)]);
if((state_val_18497 === (7))){
var inst_18478 = (state_18496[(7)]);
var inst_18478__$1 = (state_18496[(2)]);
var inst_18479 = (inst_18478__$1 == null);
var inst_18480 = cljs.core.not.call(null,inst_18479);
var state_18496__$1 = (function (){var statearr_18498 = state_18496;
(statearr_18498[(7)] = inst_18478__$1);

return statearr_18498;
})();
if(inst_18480){
var statearr_18499_18518 = state_18496__$1;
(statearr_18499_18518[(1)] = (8));

} else {
var statearr_18500_18519 = state_18496__$1;
(statearr_18500_18519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (1))){
var inst_18473 = (0);
var state_18496__$1 = (function (){var statearr_18501 = state_18496;
(statearr_18501[(8)] = inst_18473);

return statearr_18501;
})();
var statearr_18502_18520 = state_18496__$1;
(statearr_18502_18520[(2)] = null);

(statearr_18502_18520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (4))){
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18496__$1,(7),ch);
} else {
if((state_val_18497 === (6))){
var inst_18491 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18503_18521 = state_18496__$1;
(statearr_18503_18521[(2)] = inst_18491);

(statearr_18503_18521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (3))){
var inst_18493 = (state_18496[(2)]);
var inst_18494 = cljs.core.async.close_BANG_.call(null,out);
var state_18496__$1 = (function (){var statearr_18504 = state_18496;
(statearr_18504[(9)] = inst_18493);

return statearr_18504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18496__$1,inst_18494);
} else {
if((state_val_18497 === (2))){
var inst_18473 = (state_18496[(8)]);
var inst_18475 = (inst_18473 < n);
var state_18496__$1 = state_18496;
if(cljs.core.truth_(inst_18475)){
var statearr_18505_18522 = state_18496__$1;
(statearr_18505_18522[(1)] = (4));

} else {
var statearr_18506_18523 = state_18496__$1;
(statearr_18506_18523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (11))){
var inst_18473 = (state_18496[(8)]);
var inst_18483 = (state_18496[(2)]);
var inst_18484 = (inst_18473 + (1));
var inst_18473__$1 = inst_18484;
var state_18496__$1 = (function (){var statearr_18507 = state_18496;
(statearr_18507[(8)] = inst_18473__$1);

(statearr_18507[(10)] = inst_18483);

return statearr_18507;
})();
var statearr_18508_18524 = state_18496__$1;
(statearr_18508_18524[(2)] = null);

(statearr_18508_18524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (9))){
var state_18496__$1 = state_18496;
var statearr_18509_18525 = state_18496__$1;
(statearr_18509_18525[(2)] = null);

(statearr_18509_18525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (5))){
var state_18496__$1 = state_18496;
var statearr_18510_18526 = state_18496__$1;
(statearr_18510_18526[(2)] = null);

(statearr_18510_18526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (10))){
var inst_18488 = (state_18496[(2)]);
var state_18496__$1 = state_18496;
var statearr_18511_18527 = state_18496__$1;
(statearr_18511_18527[(2)] = inst_18488);

(statearr_18511_18527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18497 === (8))){
var inst_18478 = (state_18496[(7)]);
var state_18496__$1 = state_18496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18496__$1,(11),out,inst_18478);
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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18512[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18512[(1)] = (1));

return statearr_18512;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18496){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18513){if((e18513 instanceof Object)){
var ex__16941__auto__ = e18513;
var statearr_18514_18528 = state_18496;
(statearr_18514_18528[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18529 = state_18496;
state_18496 = G__18529;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18515 = f__17033__auto__.call(null);
(statearr_18515[(6)] = c__17032__auto___18517);

return statearr_18515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18531 = (function (f,ch,meta18532){
this.f = f;
this.ch = ch;
this.meta18532 = meta18532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18533,meta18532__$1){
var self__ = this;
var _18533__$1 = this;
return (new cljs.core.async.t_cljs$core$async18531(self__.f,self__.ch,meta18532__$1));
}));

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18533){
var self__ = this;
var _18533__$1 = this;
return self__.meta18532;
}));

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18534 = (function (f,ch,meta18532,_,fn1,meta18535){
this.f = f;
this.ch = ch;
this.meta18532 = meta18532;
this._ = _;
this.fn1 = fn1;
this.meta18535 = meta18535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18536,meta18535__$1){
var self__ = this;
var _18536__$1 = this;
return (new cljs.core.async.t_cljs$core$async18534(self__.f,self__.ch,self__.meta18532,self__._,self__.fn1,meta18535__$1));
}));

(cljs.core.async.t_cljs$core$async18534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18536){
var self__ = this;
var _18536__$1 = this;
return self__.meta18535;
}));

(cljs.core.async.t_cljs$core$async18534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__18530_SHARP_){
return f1.call(null,(((p1__18530_SHARP_ == null))?null:self__.f.call(null,p1__18530_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async18534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18532","meta18532",-421833787,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18531","cljs.core.async/t_cljs$core$async18531",-2005875468,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18535","meta18535",58971964,null)], null);
}));

(cljs.core.async.t_cljs$core$async18534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18534");

(cljs.core.async.t_cljs$core$async18534.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18534.
 */
cljs.core.async.__GT_t_cljs$core$async18534 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18534(f__$1,ch__$1,meta18532__$1,___$2,fn1__$1,meta18535){
return (new cljs.core.async.t_cljs$core$async18534(f__$1,ch__$1,meta18532__$1,___$2,fn1__$1,meta18535));
});

}

return (new cljs.core.async.t_cljs$core$async18534(self__.f,self__.ch,self__.meta18532,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18532","meta18532",-421833787,null)], null);
}));

(cljs.core.async.t_cljs$core$async18531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18531");

(cljs.core.async.t_cljs$core$async18531.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18531.
 */
cljs.core.async.__GT_t_cljs$core$async18531 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18531(f__$1,ch__$1,meta18532){
return (new cljs.core.async.t_cljs$core$async18531(f__$1,ch__$1,meta18532));
});

}

return (new cljs.core.async.t_cljs$core$async18531(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18537 = (function (f,ch,meta18538){
this.f = f;
this.ch = ch;
this.meta18538 = meta18538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18539,meta18538__$1){
var self__ = this;
var _18539__$1 = this;
return (new cljs.core.async.t_cljs$core$async18537(self__.f,self__.ch,meta18538__$1));
}));

(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18539){
var self__ = this;
var _18539__$1 = this;
return self__.meta18538;
}));

(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async18537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18538","meta18538",222244522,null)], null);
}));

(cljs.core.async.t_cljs$core$async18537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18537");

(cljs.core.async.t_cljs$core$async18537.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18537.
 */
cljs.core.async.__GT_t_cljs$core$async18537 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18537(f__$1,ch__$1,meta18538){
return (new cljs.core.async.t_cljs$core$async18537(f__$1,ch__$1,meta18538));
});

}

return (new cljs.core.async.t_cljs$core$async18537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18540 = (function (p,ch,meta18541){
this.p = p;
this.ch = ch;
this.meta18541 = meta18541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18542,meta18541__$1){
var self__ = this;
var _18542__$1 = this;
return (new cljs.core.async.t_cljs$core$async18540(self__.p,self__.ch,meta18541__$1));
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18542){
var self__ = this;
var _18542__$1 = this;
return self__.meta18541;
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18541","meta18541",1590526184,null)], null);
}));

(cljs.core.async.t_cljs$core$async18540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18540");

(cljs.core.async.t_cljs$core$async18540.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18540.
 */
cljs.core.async.__GT_t_cljs$core$async18540 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18540(p__$1,ch__$1,meta18541){
return (new cljs.core.async.t_cljs$core$async18540(p__$1,ch__$1,meta18541));
});

}

return (new cljs.core.async.t_cljs$core$async18540(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18544 = arguments.length;
switch (G__18544) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17032__auto___18584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18565){
var state_val_18566 = (state_18565[(1)]);
if((state_val_18566 === (7))){
var inst_18561 = (state_18565[(2)]);
var state_18565__$1 = state_18565;
var statearr_18567_18585 = state_18565__$1;
(statearr_18567_18585[(2)] = inst_18561);

(statearr_18567_18585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (1))){
var state_18565__$1 = state_18565;
var statearr_18568_18586 = state_18565__$1;
(statearr_18568_18586[(2)] = null);

(statearr_18568_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (4))){
var inst_18547 = (state_18565[(7)]);
var inst_18547__$1 = (state_18565[(2)]);
var inst_18548 = (inst_18547__$1 == null);
var state_18565__$1 = (function (){var statearr_18569 = state_18565;
(statearr_18569[(7)] = inst_18547__$1);

return statearr_18569;
})();
if(cljs.core.truth_(inst_18548)){
var statearr_18570_18587 = state_18565__$1;
(statearr_18570_18587[(1)] = (5));

} else {
var statearr_18571_18588 = state_18565__$1;
(statearr_18571_18588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (6))){
var inst_18547 = (state_18565[(7)]);
var inst_18552 = p.call(null,inst_18547);
var state_18565__$1 = state_18565;
if(cljs.core.truth_(inst_18552)){
var statearr_18572_18589 = state_18565__$1;
(statearr_18572_18589[(1)] = (8));

} else {
var statearr_18573_18590 = state_18565__$1;
(statearr_18573_18590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (3))){
var inst_18563 = (state_18565[(2)]);
var state_18565__$1 = state_18565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18565__$1,inst_18563);
} else {
if((state_val_18566 === (2))){
var state_18565__$1 = state_18565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18565__$1,(4),ch);
} else {
if((state_val_18566 === (11))){
var inst_18555 = (state_18565[(2)]);
var state_18565__$1 = state_18565;
var statearr_18574_18591 = state_18565__$1;
(statearr_18574_18591[(2)] = inst_18555);

(statearr_18574_18591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (9))){
var state_18565__$1 = state_18565;
var statearr_18575_18592 = state_18565__$1;
(statearr_18575_18592[(2)] = null);

(statearr_18575_18592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (5))){
var inst_18550 = cljs.core.async.close_BANG_.call(null,out);
var state_18565__$1 = state_18565;
var statearr_18576_18593 = state_18565__$1;
(statearr_18576_18593[(2)] = inst_18550);

(statearr_18576_18593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (10))){
var inst_18558 = (state_18565[(2)]);
var state_18565__$1 = (function (){var statearr_18577 = state_18565;
(statearr_18577[(8)] = inst_18558);

return statearr_18577;
})();
var statearr_18578_18594 = state_18565__$1;
(statearr_18578_18594[(2)] = null);

(statearr_18578_18594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (8))){
var inst_18547 = (state_18565[(7)]);
var state_18565__$1 = state_18565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18565__$1,(11),out,inst_18547);
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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18579 = [null,null,null,null,null,null,null,null,null];
(statearr_18579[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18579[(1)] = (1));

return statearr_18579;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18565){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18580){if((e18580 instanceof Object)){
var ex__16941__auto__ = e18580;
var statearr_18581_18595 = state_18565;
(statearr_18581_18595[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18596 = state_18565;
state_18565 = G__18596;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18582 = f__17033__auto__.call(null);
(statearr_18582[(6)] = c__17032__auto___18584);

return statearr_18582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18598 = arguments.length;
switch (G__18598) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18661){
var state_val_18662 = (state_18661[(1)]);
if((state_val_18662 === (7))){
var inst_18657 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
var statearr_18663_18701 = state_18661__$1;
(statearr_18663_18701[(2)] = inst_18657);

(statearr_18663_18701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (20))){
var inst_18627 = (state_18661[(7)]);
var inst_18638 = (state_18661[(2)]);
var inst_18639 = cljs.core.next.call(null,inst_18627);
var inst_18613 = inst_18639;
var inst_18614 = null;
var inst_18615 = (0);
var inst_18616 = (0);
var state_18661__$1 = (function (){var statearr_18664 = state_18661;
(statearr_18664[(8)] = inst_18615);

(statearr_18664[(9)] = inst_18616);

(statearr_18664[(10)] = inst_18638);

(statearr_18664[(11)] = inst_18613);

(statearr_18664[(12)] = inst_18614);

return statearr_18664;
})();
var statearr_18665_18702 = state_18661__$1;
(statearr_18665_18702[(2)] = null);

(statearr_18665_18702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (1))){
var state_18661__$1 = state_18661;
var statearr_18666_18703 = state_18661__$1;
(statearr_18666_18703[(2)] = null);

(statearr_18666_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (4))){
var inst_18602 = (state_18661[(13)]);
var inst_18602__$1 = (state_18661[(2)]);
var inst_18603 = (inst_18602__$1 == null);
var state_18661__$1 = (function (){var statearr_18667 = state_18661;
(statearr_18667[(13)] = inst_18602__$1);

return statearr_18667;
})();
if(cljs.core.truth_(inst_18603)){
var statearr_18668_18704 = state_18661__$1;
(statearr_18668_18704[(1)] = (5));

} else {
var statearr_18669_18705 = state_18661__$1;
(statearr_18669_18705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (15))){
var state_18661__$1 = state_18661;
var statearr_18673_18706 = state_18661__$1;
(statearr_18673_18706[(2)] = null);

(statearr_18673_18706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (21))){
var state_18661__$1 = state_18661;
var statearr_18674_18707 = state_18661__$1;
(statearr_18674_18707[(2)] = null);

(statearr_18674_18707[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (13))){
var inst_18615 = (state_18661[(8)]);
var inst_18616 = (state_18661[(9)]);
var inst_18613 = (state_18661[(11)]);
var inst_18614 = (state_18661[(12)]);
var inst_18623 = (state_18661[(2)]);
var inst_18624 = (inst_18616 + (1));
var tmp18670 = inst_18615;
var tmp18671 = inst_18613;
var tmp18672 = inst_18614;
var inst_18613__$1 = tmp18671;
var inst_18614__$1 = tmp18672;
var inst_18615__$1 = tmp18670;
var inst_18616__$1 = inst_18624;
var state_18661__$1 = (function (){var statearr_18675 = state_18661;
(statearr_18675[(14)] = inst_18623);

(statearr_18675[(8)] = inst_18615__$1);

(statearr_18675[(9)] = inst_18616__$1);

(statearr_18675[(11)] = inst_18613__$1);

(statearr_18675[(12)] = inst_18614__$1);

return statearr_18675;
})();
var statearr_18676_18708 = state_18661__$1;
(statearr_18676_18708[(2)] = null);

(statearr_18676_18708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (22))){
var state_18661__$1 = state_18661;
var statearr_18677_18709 = state_18661__$1;
(statearr_18677_18709[(2)] = null);

(statearr_18677_18709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (6))){
var inst_18602 = (state_18661[(13)]);
var inst_18611 = f.call(null,inst_18602);
var inst_18612 = cljs.core.seq.call(null,inst_18611);
var inst_18613 = inst_18612;
var inst_18614 = null;
var inst_18615 = (0);
var inst_18616 = (0);
var state_18661__$1 = (function (){var statearr_18678 = state_18661;
(statearr_18678[(8)] = inst_18615);

(statearr_18678[(9)] = inst_18616);

(statearr_18678[(11)] = inst_18613);

(statearr_18678[(12)] = inst_18614);

return statearr_18678;
})();
var statearr_18679_18710 = state_18661__$1;
(statearr_18679_18710[(2)] = null);

(statearr_18679_18710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (17))){
var inst_18627 = (state_18661[(7)]);
var inst_18631 = cljs.core.chunk_first.call(null,inst_18627);
var inst_18632 = cljs.core.chunk_rest.call(null,inst_18627);
var inst_18633 = cljs.core.count.call(null,inst_18631);
var inst_18613 = inst_18632;
var inst_18614 = inst_18631;
var inst_18615 = inst_18633;
var inst_18616 = (0);
var state_18661__$1 = (function (){var statearr_18680 = state_18661;
(statearr_18680[(8)] = inst_18615);

(statearr_18680[(9)] = inst_18616);

(statearr_18680[(11)] = inst_18613);

(statearr_18680[(12)] = inst_18614);

return statearr_18680;
})();
var statearr_18681_18711 = state_18661__$1;
(statearr_18681_18711[(2)] = null);

(statearr_18681_18711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (3))){
var inst_18659 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18661__$1,inst_18659);
} else {
if((state_val_18662 === (12))){
var inst_18647 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
var statearr_18682_18712 = state_18661__$1;
(statearr_18682_18712[(2)] = inst_18647);

(statearr_18682_18712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (2))){
var state_18661__$1 = state_18661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18661__$1,(4),in$);
} else {
if((state_val_18662 === (23))){
var inst_18655 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
var statearr_18683_18713 = state_18661__$1;
(statearr_18683_18713[(2)] = inst_18655);

(statearr_18683_18713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (19))){
var inst_18642 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
var statearr_18684_18714 = state_18661__$1;
(statearr_18684_18714[(2)] = inst_18642);

(statearr_18684_18714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (11))){
var inst_18613 = (state_18661[(11)]);
var inst_18627 = (state_18661[(7)]);
var inst_18627__$1 = cljs.core.seq.call(null,inst_18613);
var state_18661__$1 = (function (){var statearr_18685 = state_18661;
(statearr_18685[(7)] = inst_18627__$1);

return statearr_18685;
})();
if(inst_18627__$1){
var statearr_18686_18715 = state_18661__$1;
(statearr_18686_18715[(1)] = (14));

} else {
var statearr_18687_18716 = state_18661__$1;
(statearr_18687_18716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (9))){
var inst_18649 = (state_18661[(2)]);
var inst_18650 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18661__$1 = (function (){var statearr_18688 = state_18661;
(statearr_18688[(15)] = inst_18649);

return statearr_18688;
})();
if(cljs.core.truth_(inst_18650)){
var statearr_18689_18717 = state_18661__$1;
(statearr_18689_18717[(1)] = (21));

} else {
var statearr_18690_18718 = state_18661__$1;
(statearr_18690_18718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (5))){
var inst_18605 = cljs.core.async.close_BANG_.call(null,out);
var state_18661__$1 = state_18661;
var statearr_18691_18719 = state_18661__$1;
(statearr_18691_18719[(2)] = inst_18605);

(statearr_18691_18719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (14))){
var inst_18627 = (state_18661[(7)]);
var inst_18629 = cljs.core.chunked_seq_QMARK_.call(null,inst_18627);
var state_18661__$1 = state_18661;
if(inst_18629){
var statearr_18692_18720 = state_18661__$1;
(statearr_18692_18720[(1)] = (17));

} else {
var statearr_18693_18721 = state_18661__$1;
(statearr_18693_18721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (16))){
var inst_18645 = (state_18661[(2)]);
var state_18661__$1 = state_18661;
var statearr_18694_18722 = state_18661__$1;
(statearr_18694_18722[(2)] = inst_18645);

(statearr_18694_18722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18662 === (10))){
var inst_18616 = (state_18661[(9)]);
var inst_18614 = (state_18661[(12)]);
var inst_18621 = cljs.core._nth.call(null,inst_18614,inst_18616);
var state_18661__$1 = state_18661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18661__$1,(13),out,inst_18621);
} else {
if((state_val_18662 === (18))){
var inst_18627 = (state_18661[(7)]);
var inst_18636 = cljs.core.first.call(null,inst_18627);
var state_18661__$1 = state_18661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18661__$1,(20),out,inst_18636);
} else {
if((state_val_18662 === (8))){
var inst_18615 = (state_18661[(8)]);
var inst_18616 = (state_18661[(9)]);
var inst_18618 = (inst_18616 < inst_18615);
var inst_18619 = inst_18618;
var state_18661__$1 = state_18661;
if(cljs.core.truth_(inst_18619)){
var statearr_18695_18723 = state_18661__$1;
(statearr_18695_18723[(1)] = (10));

} else {
var statearr_18696_18724 = state_18661__$1;
(statearr_18696_18724[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16938__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16938__auto____0 = (function (){
var statearr_18697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16938__auto__);

(statearr_18697[(1)] = (1));

return statearr_18697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16938__auto____1 = (function (state_18661){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18698){if((e18698 instanceof Object)){
var ex__16941__auto__ = e18698;
var statearr_18699_18725 = state_18661;
(statearr_18699_18725[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18726 = state_18661;
state_18661 = G__18726;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16938__auto__ = function(state_18661){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16938__auto____1.call(this,state_18661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16938__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16938__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18700 = f__17033__auto__.call(null);
(statearr_18700[(6)] = c__17032__auto__);

return statearr_18700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18728 = arguments.length;
switch (G__18728) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18731 = arguments.length;
switch (G__18731) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18734 = arguments.length;
switch (G__18734) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17032__auto___18781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18758){
var state_val_18759 = (state_18758[(1)]);
if((state_val_18759 === (7))){
var inst_18753 = (state_18758[(2)]);
var state_18758__$1 = state_18758;
var statearr_18760_18782 = state_18758__$1;
(statearr_18760_18782[(2)] = inst_18753);

(statearr_18760_18782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18759 === (1))){
var inst_18735 = null;
var state_18758__$1 = (function (){var statearr_18761 = state_18758;
(statearr_18761[(7)] = inst_18735);

return statearr_18761;
})();
var statearr_18762_18783 = state_18758__$1;
(statearr_18762_18783[(2)] = null);

(statearr_18762_18783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18759 === (4))){
var inst_18738 = (state_18758[(8)]);
var inst_18738__$1 = (state_18758[(2)]);
var inst_18739 = (inst_18738__$1 == null);
var inst_18740 = cljs.core.not.call(null,inst_18739);
var state_18758__$1 = (function (){var statearr_18763 = state_18758;
(statearr_18763[(8)] = inst_18738__$1);

return statearr_18763;
})();
if(inst_18740){
var statearr_18764_18784 = state_18758__$1;
(statearr_18764_18784[(1)] = (5));

} else {
var statearr_18765_18785 = state_18758__$1;
(statearr_18765_18785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18759 === (6))){
var state_18758__$1 = state_18758;
var statearr_18766_18786 = state_18758__$1;
(statearr_18766_18786[(2)] = null);

(statearr_18766_18786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18759 === (3))){
var inst_18755 = (state_18758[(2)]);
var inst_18756 = cljs.core.async.close_BANG_.call(null,out);
var state_18758__$1 = (function (){var statearr_18767 = state_18758;
(statearr_18767[(9)] = inst_18755);

return statearr_18767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18758__$1,inst_18756);
} else {
if((state_val_18759 === (2))){
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18758__$1,(4),ch);
} else {
if((state_val_18759 === (11))){
var inst_18738 = (state_18758[(8)]);
var inst_18747 = (state_18758[(2)]);
var inst_18735 = inst_18738;
var state_18758__$1 = (function (){var statearr_18768 = state_18758;
(statearr_18768[(10)] = inst_18747);

(statearr_18768[(7)] = inst_18735);

return statearr_18768;
})();
var statearr_18769_18787 = state_18758__$1;
(statearr_18769_18787[(2)] = null);

(statearr_18769_18787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18759 === (9))){
var inst_18738 = (state_18758[(8)]);
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18758__$1,(11),out,inst_18738);
} else {
if((state_val_18759 === (5))){
var inst_18735 = (state_18758[(7)]);
var inst_18738 = (state_18758[(8)]);
var inst_18742 = cljs.core._EQ_.call(null,inst_18738,inst_18735);
var state_18758__$1 = state_18758;
if(inst_18742){
var statearr_18771_18788 = state_18758__$1;
(statearr_18771_18788[(1)] = (8));

} else {
var statearr_18772_18789 = state_18758__$1;
(statearr_18772_18789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18759 === (10))){
var inst_18750 = (state_18758[(2)]);
var state_18758__$1 = state_18758;
var statearr_18773_18790 = state_18758__$1;
(statearr_18773_18790[(2)] = inst_18750);

(statearr_18773_18790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18759 === (8))){
var inst_18735 = (state_18758[(7)]);
var tmp18770 = inst_18735;
var inst_18735__$1 = tmp18770;
var state_18758__$1 = (function (){var statearr_18774 = state_18758;
(statearr_18774[(7)] = inst_18735__$1);

return statearr_18774;
})();
var statearr_18775_18791 = state_18758__$1;
(statearr_18775_18791[(2)] = null);

(statearr_18775_18791[(1)] = (2));


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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18776[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18776[(1)] = (1));

return statearr_18776;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18758){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18777){if((e18777 instanceof Object)){
var ex__16941__auto__ = e18777;
var statearr_18778_18792 = state_18758;
(statearr_18778_18792[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18793 = state_18758;
state_18758 = G__18793;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18779 = f__17033__auto__.call(null);
(statearr_18779[(6)] = c__17032__auto___18781);

return statearr_18779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18795 = arguments.length;
switch (G__18795) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17032__auto___18861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18833){
var state_val_18834 = (state_18833[(1)]);
if((state_val_18834 === (7))){
var inst_18829 = (state_18833[(2)]);
var state_18833__$1 = state_18833;
var statearr_18835_18862 = state_18833__$1;
(statearr_18835_18862[(2)] = inst_18829);

(statearr_18835_18862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (1))){
var inst_18796 = (new Array(n));
var inst_18797 = inst_18796;
var inst_18798 = (0);
var state_18833__$1 = (function (){var statearr_18836 = state_18833;
(statearr_18836[(7)] = inst_18798);

(statearr_18836[(8)] = inst_18797);

return statearr_18836;
})();
var statearr_18837_18863 = state_18833__$1;
(statearr_18837_18863[(2)] = null);

(statearr_18837_18863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (4))){
var inst_18801 = (state_18833[(9)]);
var inst_18801__$1 = (state_18833[(2)]);
var inst_18802 = (inst_18801__$1 == null);
var inst_18803 = cljs.core.not.call(null,inst_18802);
var state_18833__$1 = (function (){var statearr_18838 = state_18833;
(statearr_18838[(9)] = inst_18801__$1);

return statearr_18838;
})();
if(inst_18803){
var statearr_18839_18864 = state_18833__$1;
(statearr_18839_18864[(1)] = (5));

} else {
var statearr_18840_18865 = state_18833__$1;
(statearr_18840_18865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (15))){
var inst_18823 = (state_18833[(2)]);
var state_18833__$1 = state_18833;
var statearr_18841_18866 = state_18833__$1;
(statearr_18841_18866[(2)] = inst_18823);

(statearr_18841_18866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (13))){
var state_18833__$1 = state_18833;
var statearr_18842_18867 = state_18833__$1;
(statearr_18842_18867[(2)] = null);

(statearr_18842_18867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (6))){
var inst_18798 = (state_18833[(7)]);
var inst_18819 = (inst_18798 > (0));
var state_18833__$1 = state_18833;
if(cljs.core.truth_(inst_18819)){
var statearr_18843_18868 = state_18833__$1;
(statearr_18843_18868[(1)] = (12));

} else {
var statearr_18844_18869 = state_18833__$1;
(statearr_18844_18869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (3))){
var inst_18831 = (state_18833[(2)]);
var state_18833__$1 = state_18833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18833__$1,inst_18831);
} else {
if((state_val_18834 === (12))){
var inst_18797 = (state_18833[(8)]);
var inst_18821 = cljs.core.vec.call(null,inst_18797);
var state_18833__$1 = state_18833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18833__$1,(15),out,inst_18821);
} else {
if((state_val_18834 === (2))){
var state_18833__$1 = state_18833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18833__$1,(4),ch);
} else {
if((state_val_18834 === (11))){
var inst_18813 = (state_18833[(2)]);
var inst_18814 = (new Array(n));
var inst_18797 = inst_18814;
var inst_18798 = (0);
var state_18833__$1 = (function (){var statearr_18845 = state_18833;
(statearr_18845[(10)] = inst_18813);

(statearr_18845[(7)] = inst_18798);

(statearr_18845[(8)] = inst_18797);

return statearr_18845;
})();
var statearr_18846_18870 = state_18833__$1;
(statearr_18846_18870[(2)] = null);

(statearr_18846_18870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (9))){
var inst_18797 = (state_18833[(8)]);
var inst_18811 = cljs.core.vec.call(null,inst_18797);
var state_18833__$1 = state_18833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18833__$1,(11),out,inst_18811);
} else {
if((state_val_18834 === (5))){
var inst_18806 = (state_18833[(11)]);
var inst_18798 = (state_18833[(7)]);
var inst_18801 = (state_18833[(9)]);
var inst_18797 = (state_18833[(8)]);
var inst_18805 = (inst_18797[inst_18798] = inst_18801);
var inst_18806__$1 = (inst_18798 + (1));
var inst_18807 = (inst_18806__$1 < n);
var state_18833__$1 = (function (){var statearr_18847 = state_18833;
(statearr_18847[(12)] = inst_18805);

(statearr_18847[(11)] = inst_18806__$1);

return statearr_18847;
})();
if(cljs.core.truth_(inst_18807)){
var statearr_18848_18871 = state_18833__$1;
(statearr_18848_18871[(1)] = (8));

} else {
var statearr_18849_18872 = state_18833__$1;
(statearr_18849_18872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (14))){
var inst_18826 = (state_18833[(2)]);
var inst_18827 = cljs.core.async.close_BANG_.call(null,out);
var state_18833__$1 = (function (){var statearr_18851 = state_18833;
(statearr_18851[(13)] = inst_18826);

return statearr_18851;
})();
var statearr_18852_18873 = state_18833__$1;
(statearr_18852_18873[(2)] = inst_18827);

(statearr_18852_18873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (10))){
var inst_18817 = (state_18833[(2)]);
var state_18833__$1 = state_18833;
var statearr_18853_18874 = state_18833__$1;
(statearr_18853_18874[(2)] = inst_18817);

(statearr_18853_18874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18834 === (8))){
var inst_18806 = (state_18833[(11)]);
var inst_18797 = (state_18833[(8)]);
var tmp18850 = inst_18797;
var inst_18797__$1 = tmp18850;
var inst_18798 = inst_18806;
var state_18833__$1 = (function (){var statearr_18854 = state_18833;
(statearr_18854[(7)] = inst_18798);

(statearr_18854[(8)] = inst_18797__$1);

return statearr_18854;
})();
var statearr_18855_18875 = state_18833__$1;
(statearr_18855_18875[(2)] = null);

(statearr_18855_18875[(1)] = (2));


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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18856[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18856[(1)] = (1));

return statearr_18856;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18833){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18857){if((e18857 instanceof Object)){
var ex__16941__auto__ = e18857;
var statearr_18858_18876 = state_18833;
(statearr_18858_18876[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18877 = state_18833;
state_18833 = G__18877;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18859 = f__17033__auto__.call(null);
(statearr_18859[(6)] = c__17032__auto___18861);

return statearr_18859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18879 = arguments.length;
switch (G__18879) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17032__auto___18949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_18921){
var state_val_18922 = (state_18921[(1)]);
if((state_val_18922 === (7))){
var inst_18917 = (state_18921[(2)]);
var state_18921__$1 = state_18921;
var statearr_18923_18950 = state_18921__$1;
(statearr_18923_18950[(2)] = inst_18917);

(statearr_18923_18950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (1))){
var inst_18880 = [];
var inst_18881 = inst_18880;
var inst_18882 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18921__$1 = (function (){var statearr_18924 = state_18921;
(statearr_18924[(7)] = inst_18882);

(statearr_18924[(8)] = inst_18881);

return statearr_18924;
})();
var statearr_18925_18951 = state_18921__$1;
(statearr_18925_18951[(2)] = null);

(statearr_18925_18951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (4))){
var inst_18885 = (state_18921[(9)]);
var inst_18885__$1 = (state_18921[(2)]);
var inst_18886 = (inst_18885__$1 == null);
var inst_18887 = cljs.core.not.call(null,inst_18886);
var state_18921__$1 = (function (){var statearr_18926 = state_18921;
(statearr_18926[(9)] = inst_18885__$1);

return statearr_18926;
})();
if(inst_18887){
var statearr_18927_18952 = state_18921__$1;
(statearr_18927_18952[(1)] = (5));

} else {
var statearr_18928_18953 = state_18921__$1;
(statearr_18928_18953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (15))){
var inst_18911 = (state_18921[(2)]);
var state_18921__$1 = state_18921;
var statearr_18929_18954 = state_18921__$1;
(statearr_18929_18954[(2)] = inst_18911);

(statearr_18929_18954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (13))){
var state_18921__$1 = state_18921;
var statearr_18930_18955 = state_18921__$1;
(statearr_18930_18955[(2)] = null);

(statearr_18930_18955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (6))){
var inst_18881 = (state_18921[(8)]);
var inst_18906 = inst_18881.length;
var inst_18907 = (inst_18906 > (0));
var state_18921__$1 = state_18921;
if(cljs.core.truth_(inst_18907)){
var statearr_18931_18956 = state_18921__$1;
(statearr_18931_18956[(1)] = (12));

} else {
var statearr_18932_18957 = state_18921__$1;
(statearr_18932_18957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (3))){
var inst_18919 = (state_18921[(2)]);
var state_18921__$1 = state_18921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18921__$1,inst_18919);
} else {
if((state_val_18922 === (12))){
var inst_18881 = (state_18921[(8)]);
var inst_18909 = cljs.core.vec.call(null,inst_18881);
var state_18921__$1 = state_18921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18921__$1,(15),out,inst_18909);
} else {
if((state_val_18922 === (2))){
var state_18921__$1 = state_18921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18921__$1,(4),ch);
} else {
if((state_val_18922 === (11))){
var inst_18885 = (state_18921[(9)]);
var inst_18889 = (state_18921[(10)]);
var inst_18899 = (state_18921[(2)]);
var inst_18900 = [];
var inst_18901 = inst_18900.push(inst_18885);
var inst_18881 = inst_18900;
var inst_18882 = inst_18889;
var state_18921__$1 = (function (){var statearr_18933 = state_18921;
(statearr_18933[(7)] = inst_18882);

(statearr_18933[(11)] = inst_18899);

(statearr_18933[(12)] = inst_18901);

(statearr_18933[(8)] = inst_18881);

return statearr_18933;
})();
var statearr_18934_18958 = state_18921__$1;
(statearr_18934_18958[(2)] = null);

(statearr_18934_18958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (9))){
var inst_18881 = (state_18921[(8)]);
var inst_18897 = cljs.core.vec.call(null,inst_18881);
var state_18921__$1 = state_18921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18921__$1,(11),out,inst_18897);
} else {
if((state_val_18922 === (5))){
var inst_18885 = (state_18921[(9)]);
var inst_18882 = (state_18921[(7)]);
var inst_18889 = (state_18921[(10)]);
var inst_18889__$1 = f.call(null,inst_18885);
var inst_18890 = cljs.core._EQ_.call(null,inst_18889__$1,inst_18882);
var inst_18891 = cljs.core.keyword_identical_QMARK_.call(null,inst_18882,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18892 = ((inst_18890) || (inst_18891));
var state_18921__$1 = (function (){var statearr_18935 = state_18921;
(statearr_18935[(10)] = inst_18889__$1);

return statearr_18935;
})();
if(cljs.core.truth_(inst_18892)){
var statearr_18936_18959 = state_18921__$1;
(statearr_18936_18959[(1)] = (8));

} else {
var statearr_18937_18960 = state_18921__$1;
(statearr_18937_18960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (14))){
var inst_18914 = (state_18921[(2)]);
var inst_18915 = cljs.core.async.close_BANG_.call(null,out);
var state_18921__$1 = (function (){var statearr_18939 = state_18921;
(statearr_18939[(13)] = inst_18914);

return statearr_18939;
})();
var statearr_18940_18961 = state_18921__$1;
(statearr_18940_18961[(2)] = inst_18915);

(statearr_18940_18961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (10))){
var inst_18904 = (state_18921[(2)]);
var state_18921__$1 = state_18921;
var statearr_18941_18962 = state_18921__$1;
(statearr_18941_18962[(2)] = inst_18904);

(statearr_18941_18962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18922 === (8))){
var inst_18885 = (state_18921[(9)]);
var inst_18889 = (state_18921[(10)]);
var inst_18881 = (state_18921[(8)]);
var inst_18894 = inst_18881.push(inst_18885);
var tmp18938 = inst_18881;
var inst_18881__$1 = tmp18938;
var inst_18882 = inst_18889;
var state_18921__$1 = (function (){var statearr_18942 = state_18921;
(statearr_18942[(14)] = inst_18894);

(statearr_18942[(7)] = inst_18882);

(statearr_18942[(8)] = inst_18881__$1);

return statearr_18942;
})();
var statearr_18943_18963 = state_18921__$1;
(statearr_18943_18963[(2)] = null);

(statearr_18943_18963[(1)] = (2));


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
var cljs$core$async$state_machine__16938__auto__ = null;
var cljs$core$async$state_machine__16938__auto____0 = (function (){
var statearr_18944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18944[(0)] = cljs$core$async$state_machine__16938__auto__);

(statearr_18944[(1)] = (1));

return statearr_18944;
});
var cljs$core$async$state_machine__16938__auto____1 = (function (state_18921){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_18921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e18945){if((e18945 instanceof Object)){
var ex__16941__auto__ = e18945;
var statearr_18946_18964 = state_18921;
(statearr_18946_18964[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18965 = state_18921;
state_18921 = G__18965;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
cljs$core$async$state_machine__16938__auto__ = function(state_18921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16938__auto____1.call(this,state_18921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16938__auto____0;
cljs$core$async$state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16938__auto____1;
return cljs$core$async$state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_18947 = f__17033__auto__.call(null);
(statearr_18947[(6)] = c__17032__auto___18949);

return statearr_18947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
