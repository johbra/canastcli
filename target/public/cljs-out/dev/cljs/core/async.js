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
var G__11073 = arguments.length;
switch (G__11073) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11074 = (function (f,blockable,meta11075){
this.f = f;
this.blockable = blockable;
this.meta11075 = meta11075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11076,meta11075__$1){
var self__ = this;
var _11076__$1 = this;
return (new cljs.core.async.t_cljs$core$async11074(self__.f,self__.blockable,meta11075__$1));
}));

(cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11076){
var self__ = this;
var _11076__$1 = this;
return self__.meta11075;
}));

(cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11075","meta11075",1332548768,null)], null);
}));

(cljs.core.async.t_cljs$core$async11074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11074");

(cljs.core.async.t_cljs$core$async11074.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async11074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11074.
 */
cljs.core.async.__GT_t_cljs$core$async11074 = (function cljs$core$async$__GT_t_cljs$core$async11074(f__$1,blockable__$1,meta11075){
return (new cljs.core.async.t_cljs$core$async11074(f__$1,blockable__$1,meta11075));
});

}

return (new cljs.core.async.t_cljs$core$async11074(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11080 = arguments.length;
switch (G__11080) {
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
var G__11083 = arguments.length;
switch (G__11083) {
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
var G__11086 = arguments.length;
switch (G__11086) {
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
var val_11088 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11088);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11088);
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
var G__11090 = arguments.length;
switch (G__11090) {
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
var n__4613__auto___11092 = n;
var x_11093 = (0);
while(true){
if((x_11093 < n__4613__auto___11092)){
(a[x_11093] = (0));

var G__11094 = (x_11093 + (1));
x_11093 = G__11094;
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

var G__11095 = (i + (1));
i = G__11095;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11096 = (function (flag,meta11097){
this.flag = flag;
this.meta11097 = meta11097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11098,meta11097__$1){
var self__ = this;
var _11098__$1 = this;
return (new cljs.core.async.t_cljs$core$async11096(self__.flag,meta11097__$1));
}));

(cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11098){
var self__ = this;
var _11098__$1 = this;
return self__.meta11097;
}));

(cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11097","meta11097",-1156480948,null)], null);
}));

(cljs.core.async.t_cljs$core$async11096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11096");

(cljs.core.async.t_cljs$core$async11096.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async11096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11096.
 */
cljs.core.async.__GT_t_cljs$core$async11096 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11096(flag__$1,meta11097){
return (new cljs.core.async.t_cljs$core$async11096(flag__$1,meta11097));
});

}

return (new cljs.core.async.t_cljs$core$async11096(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11099 = (function (flag,cb,meta11100){
this.flag = flag;
this.cb = cb;
this.meta11100 = meta11100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11101,meta11100__$1){
var self__ = this;
var _11101__$1 = this;
return (new cljs.core.async.t_cljs$core$async11099(self__.flag,self__.cb,meta11100__$1));
}));

(cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11101){
var self__ = this;
var _11101__$1 = this;
return self__.meta11100;
}));

(cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11100","meta11100",782212582,null)], null);
}));

(cljs.core.async.t_cljs$core$async11099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11099");

(cljs.core.async.t_cljs$core$async11099.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async11099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11099.
 */
cljs.core.async.__GT_t_cljs$core$async11099 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11099(flag__$1,cb__$1,meta11100){
return (new cljs.core.async.t_cljs$core$async11099(flag__$1,cb__$1,meta11100));
});

}

return (new cljs.core.async.t_cljs$core$async11099(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11102_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11102_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11103_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11103_SHARP_,port], null));
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
var G__11104 = (i + (1));
i = G__11104;
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
var len__4736__auto___11110 = arguments.length;
var i__4737__auto___11111 = (0);
while(true){
if((i__4737__auto___11111 < len__4736__auto___11110)){
args__4742__auto__.push((arguments[i__4737__auto___11111]));

var G__11112 = (i__4737__auto___11111 + (1));
i__4737__auto___11111 = G__11112;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11107){
var map__11108 = p__11107;
var map__11108__$1 = (((((!((map__11108 == null))))?(((((map__11108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11108):map__11108);
var opts = map__11108__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11105){
var G__11106 = cljs.core.first.call(null,seq11105);
var seq11105__$1 = cljs.core.next.call(null,seq11105);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11106,seq11105__$1);
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
var G__11114 = arguments.length;
switch (G__11114) {
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
var c__11013__auto___11160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11138){
var state_val_11139 = (state_11138[(1)]);
if((state_val_11139 === (7))){
var inst_11134 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
var statearr_11140_11161 = state_11138__$1;
(statearr_11140_11161[(2)] = inst_11134);

(statearr_11140_11161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (1))){
var state_11138__$1 = state_11138;
var statearr_11141_11162 = state_11138__$1;
(statearr_11141_11162[(2)] = null);

(statearr_11141_11162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (4))){
var inst_11117 = (state_11138[(7)]);
var inst_11117__$1 = (state_11138[(2)]);
var inst_11118 = (inst_11117__$1 == null);
var state_11138__$1 = (function (){var statearr_11142 = state_11138;
(statearr_11142[(7)] = inst_11117__$1);

return statearr_11142;
})();
if(cljs.core.truth_(inst_11118)){
var statearr_11143_11163 = state_11138__$1;
(statearr_11143_11163[(1)] = (5));

} else {
var statearr_11144_11164 = state_11138__$1;
(statearr_11144_11164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (13))){
var state_11138__$1 = state_11138;
var statearr_11145_11165 = state_11138__$1;
(statearr_11145_11165[(2)] = null);

(statearr_11145_11165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (6))){
var inst_11117 = (state_11138[(7)]);
var state_11138__$1 = state_11138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11138__$1,(11),to,inst_11117);
} else {
if((state_val_11139 === (3))){
var inst_11136 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11138__$1,inst_11136);
} else {
if((state_val_11139 === (12))){
var state_11138__$1 = state_11138;
var statearr_11146_11166 = state_11138__$1;
(statearr_11146_11166[(2)] = null);

(statearr_11146_11166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (2))){
var state_11138__$1 = state_11138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11138__$1,(4),from);
} else {
if((state_val_11139 === (11))){
var inst_11127 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
if(cljs.core.truth_(inst_11127)){
var statearr_11147_11167 = state_11138__$1;
(statearr_11147_11167[(1)] = (12));

} else {
var statearr_11148_11168 = state_11138__$1;
(statearr_11148_11168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (9))){
var state_11138__$1 = state_11138;
var statearr_11149_11169 = state_11138__$1;
(statearr_11149_11169[(2)] = null);

(statearr_11149_11169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (5))){
var state_11138__$1 = state_11138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11150_11170 = state_11138__$1;
(statearr_11150_11170[(1)] = (8));

} else {
var statearr_11151_11171 = state_11138__$1;
(statearr_11151_11171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (14))){
var inst_11132 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
var statearr_11152_11172 = state_11138__$1;
(statearr_11152_11172[(2)] = inst_11132);

(statearr_11152_11172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (10))){
var inst_11124 = (state_11138[(2)]);
var state_11138__$1 = state_11138;
var statearr_11153_11173 = state_11138__$1;
(statearr_11153_11173[(2)] = inst_11124);

(statearr_11153_11173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11139 === (8))){
var inst_11121 = cljs.core.async.close_BANG_.call(null,to);
var state_11138__$1 = state_11138;
var statearr_11154_11174 = state_11138__$1;
(statearr_11154_11174[(2)] = inst_11121);

(statearr_11154_11174[(1)] = (10));


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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_11155 = [null,null,null,null,null,null,null,null];
(statearr_11155[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_11155[(1)] = (1));

return statearr_11155;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_11138){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11156){if((e11156 instanceof Object)){
var ex__10922__auto__ = e11156;
var statearr_11157_11175 = state_11138;
(statearr_11157_11175[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11176 = state_11138;
state_11138 = G__11176;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_11138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_11138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11158 = f__11014__auto__.call(null);
(statearr_11158[(6)] = c__11013__auto___11160);

return statearr_11158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
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
var process = (function (p__11177){
var vec__11178 = p__11177;
var v = cljs.core.nth.call(null,vec__11178,(0),null);
var p = cljs.core.nth.call(null,vec__11178,(1),null);
var job = vec__11178;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11013__auto___11349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11185){
var state_val_11186 = (state_11185[(1)]);
if((state_val_11186 === (1))){
var state_11185__$1 = state_11185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11185__$1,(2),res,v);
} else {
if((state_val_11186 === (2))){
var inst_11182 = (state_11185[(2)]);
var inst_11183 = cljs.core.async.close_BANG_.call(null,res);
var state_11185__$1 = (function (){var statearr_11187 = state_11185;
(statearr_11187[(7)] = inst_11182);

return statearr_11187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11185__$1,inst_11183);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11188 = [null,null,null,null,null,null,null,null];
(statearr_11188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11188[(1)] = (1));

return statearr_11188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11185){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11189){if((e11189 instanceof Object)){
var ex__10922__auto__ = e11189;
var statearr_11190_11350 = state_11185;
(statearr_11190_11350[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11351 = state_11185;
state_11185 = G__11351;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11191 = f__11014__auto__.call(null);
(statearr_11191[(6)] = c__11013__auto___11349);

return statearr_11191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11192){
var vec__11193 = p__11192;
var v = cljs.core.nth.call(null,vec__11193,(0),null);
var p = cljs.core.nth.call(null,vec__11193,(1),null);
var job = vec__11193;
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
var n__4613__auto___11352 = n;
var __11353 = (0);
while(true){
if((__11353 < n__4613__auto___11352)){
var G__11196_11354 = type;
var G__11196_11355__$1 = (((G__11196_11354 instanceof cljs.core.Keyword))?G__11196_11354.fqn:null);
switch (G__11196_11355__$1) {
case "compute":
var c__11013__auto___11357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async){
return (function (state_11209){
var state_val_11210 = (state_11209[(1)]);
if((state_val_11210 === (1))){
var state_11209__$1 = state_11209;
var statearr_11211_11358 = state_11209__$1;
(statearr_11211_11358[(2)] = null);

(statearr_11211_11358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (2))){
var state_11209__$1 = state_11209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11209__$1,(4),jobs);
} else {
if((state_val_11210 === (3))){
var inst_11207 = (state_11209[(2)]);
var state_11209__$1 = state_11209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11209__$1,inst_11207);
} else {
if((state_val_11210 === (4))){
var inst_11199 = (state_11209[(2)]);
var inst_11200 = process.call(null,inst_11199);
var state_11209__$1 = state_11209;
if(cljs.core.truth_(inst_11200)){
var statearr_11212_11359 = state_11209__$1;
(statearr_11212_11359[(1)] = (5));

} else {
var statearr_11213_11360 = state_11209__$1;
(statearr_11213_11360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (5))){
var state_11209__$1 = state_11209;
var statearr_11214_11361 = state_11209__$1;
(statearr_11214_11361[(2)] = null);

(statearr_11214_11361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (6))){
var state_11209__$1 = state_11209;
var statearr_11215_11362 = state_11209__$1;
(statearr_11215_11362[(2)] = null);

(statearr_11215_11362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11210 === (7))){
var inst_11205 = (state_11209[(2)]);
var state_11209__$1 = state_11209;
var statearr_11216_11363 = state_11209__$1;
(statearr_11216_11363[(2)] = inst_11205);

(statearr_11216_11363[(1)] = (3));


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
});})(__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async))
;
return ((function (__11353,switch__10918__auto__,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11217 = [null,null,null,null,null,null,null];
(statearr_11217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11217[(1)] = (1));

return statearr_11217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11209){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11218){if((e11218 instanceof Object)){
var ex__10922__auto__ = e11218;
var statearr_11219_11364 = state_11209;
(statearr_11219_11364[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11365 = state_11209;
state_11209 = G__11365;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
;})(__11353,switch__10918__auto__,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async))
})();
var state__11015__auto__ = (function (){var statearr_11220 = f__11014__auto__.call(null);
(statearr_11220[(6)] = c__11013__auto___11357);

return statearr_11220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(__11353,c__11013__auto___11357,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async))
);


break;
case "async":
var c__11013__auto___11366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async){
return (function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = ((function (__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async){
return (function (state_11233){
var state_val_11234 = (state_11233[(1)]);
if((state_val_11234 === (1))){
var state_11233__$1 = state_11233;
var statearr_11235_11367 = state_11233__$1;
(statearr_11235_11367[(2)] = null);

(statearr_11235_11367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (2))){
var state_11233__$1 = state_11233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11233__$1,(4),jobs);
} else {
if((state_val_11234 === (3))){
var inst_11231 = (state_11233[(2)]);
var state_11233__$1 = state_11233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11233__$1,inst_11231);
} else {
if((state_val_11234 === (4))){
var inst_11223 = (state_11233[(2)]);
var inst_11224 = async.call(null,inst_11223);
var state_11233__$1 = state_11233;
if(cljs.core.truth_(inst_11224)){
var statearr_11236_11368 = state_11233__$1;
(statearr_11236_11368[(1)] = (5));

} else {
var statearr_11237_11369 = state_11233__$1;
(statearr_11237_11369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (5))){
var state_11233__$1 = state_11233;
var statearr_11238_11370 = state_11233__$1;
(statearr_11238_11370[(2)] = null);

(statearr_11238_11370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (6))){
var state_11233__$1 = state_11233;
var statearr_11239_11371 = state_11233__$1;
(statearr_11239_11371[(2)] = null);

(statearr_11239_11371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (7))){
var inst_11229 = (state_11233[(2)]);
var state_11233__$1 = state_11233;
var statearr_11240_11372 = state_11233__$1;
(statearr_11240_11372[(2)] = inst_11229);

(statearr_11240_11372[(1)] = (3));


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
});})(__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async))
;
return ((function (__11353,switch__10918__auto__,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11241 = [null,null,null,null,null,null,null];
(statearr_11241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11241[(1)] = (1));

return statearr_11241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11233){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11242){if((e11242 instanceof Object)){
var ex__10922__auto__ = e11242;
var statearr_11243_11373 = state_11233;
(statearr_11243_11373[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11374 = state_11233;
state_11233 = G__11374;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
;})(__11353,switch__10918__auto__,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async))
})();
var state__11015__auto__ = (function (){var statearr_11244 = f__11014__auto__.call(null);
(statearr_11244[(6)] = c__11013__auto___11366);

return statearr_11244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
});})(__11353,c__11013__auto___11366,G__11196_11354,G__11196_11355__$1,n__4613__auto___11352,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11196_11355__$1)].join('')));

}

var G__11375 = (__11353 + (1));
__11353 = G__11375;
continue;
} else {
}
break;
}

var c__11013__auto___11376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11266){
var state_val_11267 = (state_11266[(1)]);
if((state_val_11267 === (7))){
var inst_11262 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
var statearr_11268_11377 = state_11266__$1;
(statearr_11268_11377[(2)] = inst_11262);

(statearr_11268_11377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (1))){
var state_11266__$1 = state_11266;
var statearr_11269_11378 = state_11266__$1;
(statearr_11269_11378[(2)] = null);

(statearr_11269_11378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (4))){
var inst_11247 = (state_11266[(7)]);
var inst_11247__$1 = (state_11266[(2)]);
var inst_11248 = (inst_11247__$1 == null);
var state_11266__$1 = (function (){var statearr_11270 = state_11266;
(statearr_11270[(7)] = inst_11247__$1);

return statearr_11270;
})();
if(cljs.core.truth_(inst_11248)){
var statearr_11271_11379 = state_11266__$1;
(statearr_11271_11379[(1)] = (5));

} else {
var statearr_11272_11380 = state_11266__$1;
(statearr_11272_11380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (6))){
var inst_11252 = (state_11266[(8)]);
var inst_11247 = (state_11266[(7)]);
var inst_11252__$1 = cljs.core.async.chan.call(null,(1));
var inst_11253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11254 = [inst_11247,inst_11252__$1];
var inst_11255 = (new cljs.core.PersistentVector(null,2,(5),inst_11253,inst_11254,null));
var state_11266__$1 = (function (){var statearr_11273 = state_11266;
(statearr_11273[(8)] = inst_11252__$1);

return statearr_11273;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11266__$1,(8),jobs,inst_11255);
} else {
if((state_val_11267 === (3))){
var inst_11264 = (state_11266[(2)]);
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11266__$1,inst_11264);
} else {
if((state_val_11267 === (2))){
var state_11266__$1 = state_11266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11266__$1,(4),from);
} else {
if((state_val_11267 === (9))){
var inst_11259 = (state_11266[(2)]);
var state_11266__$1 = (function (){var statearr_11274 = state_11266;
(statearr_11274[(9)] = inst_11259);

return statearr_11274;
})();
var statearr_11275_11381 = state_11266__$1;
(statearr_11275_11381[(2)] = null);

(statearr_11275_11381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (5))){
var inst_11250 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11266__$1 = state_11266;
var statearr_11276_11382 = state_11266__$1;
(statearr_11276_11382[(2)] = inst_11250);

(statearr_11276_11382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11267 === (8))){
var inst_11252 = (state_11266[(8)]);
var inst_11257 = (state_11266[(2)]);
var state_11266__$1 = (function (){var statearr_11277 = state_11266;
(statearr_11277[(10)] = inst_11257);

return statearr_11277;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11266__$1,(9),results,inst_11252);
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
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11278[(1)] = (1));

return statearr_11278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11266){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11279){if((e11279 instanceof Object)){
var ex__10922__auto__ = e11279;
var statearr_11280_11383 = state_11266;
(statearr_11280_11383[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11384 = state_11266;
state_11266 = G__11384;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11281 = f__11014__auto__.call(null);
(statearr_11281[(6)] = c__11013__auto___11376);

return statearr_11281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));


var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11319){
var state_val_11320 = (state_11319[(1)]);
if((state_val_11320 === (7))){
var inst_11315 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11321_11385 = state_11319__$1;
(statearr_11321_11385[(2)] = inst_11315);

(statearr_11321_11385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (20))){
var state_11319__$1 = state_11319;
var statearr_11322_11386 = state_11319__$1;
(statearr_11322_11386[(2)] = null);

(statearr_11322_11386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (1))){
var state_11319__$1 = state_11319;
var statearr_11323_11387 = state_11319__$1;
(statearr_11323_11387[(2)] = null);

(statearr_11323_11387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (4))){
var inst_11284 = (state_11319[(7)]);
var inst_11284__$1 = (state_11319[(2)]);
var inst_11285 = (inst_11284__$1 == null);
var state_11319__$1 = (function (){var statearr_11324 = state_11319;
(statearr_11324[(7)] = inst_11284__$1);

return statearr_11324;
})();
if(cljs.core.truth_(inst_11285)){
var statearr_11325_11388 = state_11319__$1;
(statearr_11325_11388[(1)] = (5));

} else {
var statearr_11326_11389 = state_11319__$1;
(statearr_11326_11389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (15))){
var inst_11297 = (state_11319[(8)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11319__$1,(18),to,inst_11297);
} else {
if((state_val_11320 === (21))){
var inst_11310 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11327_11390 = state_11319__$1;
(statearr_11327_11390[(2)] = inst_11310);

(statearr_11327_11390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (13))){
var inst_11312 = (state_11319[(2)]);
var state_11319__$1 = (function (){var statearr_11328 = state_11319;
(statearr_11328[(9)] = inst_11312);

return statearr_11328;
})();
var statearr_11329_11391 = state_11319__$1;
(statearr_11329_11391[(2)] = null);

(statearr_11329_11391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (6))){
var inst_11284 = (state_11319[(7)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(11),inst_11284);
} else {
if((state_val_11320 === (17))){
var inst_11305 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
if(cljs.core.truth_(inst_11305)){
var statearr_11330_11392 = state_11319__$1;
(statearr_11330_11392[(1)] = (19));

} else {
var statearr_11331_11393 = state_11319__$1;
(statearr_11331_11393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (3))){
var inst_11317 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11319__$1,inst_11317);
} else {
if((state_val_11320 === (12))){
var inst_11294 = (state_11319[(10)]);
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(14),inst_11294);
} else {
if((state_val_11320 === (2))){
var state_11319__$1 = state_11319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11319__$1,(4),results);
} else {
if((state_val_11320 === (19))){
var state_11319__$1 = state_11319;
var statearr_11332_11394 = state_11319__$1;
(statearr_11332_11394[(2)] = null);

(statearr_11332_11394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (11))){
var inst_11294 = (state_11319[(2)]);
var state_11319__$1 = (function (){var statearr_11333 = state_11319;
(statearr_11333[(10)] = inst_11294);

return statearr_11333;
})();
var statearr_11334_11395 = state_11319__$1;
(statearr_11334_11395[(2)] = null);

(statearr_11334_11395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (9))){
var state_11319__$1 = state_11319;
var statearr_11335_11396 = state_11319__$1;
(statearr_11335_11396[(2)] = null);

(statearr_11335_11396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (5))){
var state_11319__$1 = state_11319;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11336_11397 = state_11319__$1;
(statearr_11336_11397[(1)] = (8));

} else {
var statearr_11337_11398 = state_11319__$1;
(statearr_11337_11398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (14))){
var inst_11297 = (state_11319[(8)]);
var inst_11297__$1 = (state_11319[(2)]);
var inst_11298 = (inst_11297__$1 == null);
var inst_11299 = cljs.core.not.call(null,inst_11298);
var state_11319__$1 = (function (){var statearr_11338 = state_11319;
(statearr_11338[(8)] = inst_11297__$1);

return statearr_11338;
})();
if(inst_11299){
var statearr_11339_11399 = state_11319__$1;
(statearr_11339_11399[(1)] = (15));

} else {
var statearr_11340_11400 = state_11319__$1;
(statearr_11340_11400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (16))){
var state_11319__$1 = state_11319;
var statearr_11341_11401 = state_11319__$1;
(statearr_11341_11401[(2)] = false);

(statearr_11341_11401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (10))){
var inst_11291 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11342_11402 = state_11319__$1;
(statearr_11342_11402[(2)] = inst_11291);

(statearr_11342_11402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (18))){
var inst_11302 = (state_11319[(2)]);
var state_11319__$1 = state_11319;
var statearr_11343_11403 = state_11319__$1;
(statearr_11343_11403[(2)] = inst_11302);

(statearr_11343_11403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11320 === (8))){
var inst_11288 = cljs.core.async.close_BANG_.call(null,to);
var state_11319__$1 = state_11319;
var statearr_11344_11404 = state_11319__$1;
(statearr_11344_11404[(2)] = inst_11288);

(statearr_11344_11404[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_11345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__);

(statearr_11345[(1)] = (1));

return statearr_11345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1 = (function (state_11319){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11346){if((e11346 instanceof Object)){
var ex__10922__auto__ = e11346;
var statearr_11347_11405 = state_11319;
(statearr_11347_11405[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11406 = state_11319;
state_11319 = G__11406;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__ = function(state_11319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1.call(this,state_11319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11348 = f__11014__auto__.call(null);
(statearr_11348[(6)] = c__11013__auto__);

return statearr_11348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));

return c__11013__auto__;
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
var G__11408 = arguments.length;
switch (G__11408) {
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
var G__11411 = arguments.length;
switch (G__11411) {
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
var G__11414 = arguments.length;
switch (G__11414) {
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
var c__11013__auto___11463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11440){
var state_val_11441 = (state_11440[(1)]);
if((state_val_11441 === (7))){
var inst_11436 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
var statearr_11442_11464 = state_11440__$1;
(statearr_11442_11464[(2)] = inst_11436);

(statearr_11442_11464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (1))){
var state_11440__$1 = state_11440;
var statearr_11443_11465 = state_11440__$1;
(statearr_11443_11465[(2)] = null);

(statearr_11443_11465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (4))){
var inst_11417 = (state_11440[(7)]);
var inst_11417__$1 = (state_11440[(2)]);
var inst_11418 = (inst_11417__$1 == null);
var state_11440__$1 = (function (){var statearr_11444 = state_11440;
(statearr_11444[(7)] = inst_11417__$1);

return statearr_11444;
})();
if(cljs.core.truth_(inst_11418)){
var statearr_11445_11466 = state_11440__$1;
(statearr_11445_11466[(1)] = (5));

} else {
var statearr_11446_11467 = state_11440__$1;
(statearr_11446_11467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (13))){
var state_11440__$1 = state_11440;
var statearr_11447_11468 = state_11440__$1;
(statearr_11447_11468[(2)] = null);

(statearr_11447_11468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (6))){
var inst_11417 = (state_11440[(7)]);
var inst_11423 = p.call(null,inst_11417);
var state_11440__$1 = state_11440;
if(cljs.core.truth_(inst_11423)){
var statearr_11448_11469 = state_11440__$1;
(statearr_11448_11469[(1)] = (9));

} else {
var statearr_11449_11470 = state_11440__$1;
(statearr_11449_11470[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (3))){
var inst_11438 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11440__$1,inst_11438);
} else {
if((state_val_11441 === (12))){
var state_11440__$1 = state_11440;
var statearr_11450_11471 = state_11440__$1;
(statearr_11450_11471[(2)] = null);

(statearr_11450_11471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (2))){
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11440__$1,(4),ch);
} else {
if((state_val_11441 === (11))){
var inst_11417 = (state_11440[(7)]);
var inst_11427 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11440__$1,(8),inst_11427,inst_11417);
} else {
if((state_val_11441 === (9))){
var state_11440__$1 = state_11440;
var statearr_11451_11472 = state_11440__$1;
(statearr_11451_11472[(2)] = tc);

(statearr_11451_11472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (5))){
var inst_11420 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11421 = cljs.core.async.close_BANG_.call(null,fc);
var state_11440__$1 = (function (){var statearr_11452 = state_11440;
(statearr_11452[(8)] = inst_11420);

return statearr_11452;
})();
var statearr_11453_11473 = state_11440__$1;
(statearr_11453_11473[(2)] = inst_11421);

(statearr_11453_11473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (14))){
var inst_11434 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
var statearr_11454_11474 = state_11440__$1;
(statearr_11454_11474[(2)] = inst_11434);

(statearr_11454_11474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (10))){
var state_11440__$1 = state_11440;
var statearr_11455_11475 = state_11440__$1;
(statearr_11455_11475[(2)] = fc);

(statearr_11455_11475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11441 === (8))){
var inst_11429 = (state_11440[(2)]);
var state_11440__$1 = state_11440;
if(cljs.core.truth_(inst_11429)){
var statearr_11456_11476 = state_11440__$1;
(statearr_11456_11476[(1)] = (12));

} else {
var statearr_11457_11477 = state_11440__$1;
(statearr_11457_11477[(1)] = (13));

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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_11458 = [null,null,null,null,null,null,null,null,null];
(statearr_11458[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_11458[(1)] = (1));

return statearr_11458;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_11440){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11459){if((e11459 instanceof Object)){
var ex__10922__auto__ = e11459;
var statearr_11460_11478 = state_11440;
(statearr_11460_11478[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11479 = state_11440;
state_11440 = G__11479;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_11440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_11440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11461 = f__11014__auto__.call(null);
(statearr_11461[(6)] = c__11013__auto___11463);

return statearr_11461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
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
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11500){
var state_val_11501 = (state_11500[(1)]);
if((state_val_11501 === (7))){
var inst_11496 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
var statearr_11502_11520 = state_11500__$1;
(statearr_11502_11520[(2)] = inst_11496);

(statearr_11502_11520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (1))){
var inst_11480 = init;
var state_11500__$1 = (function (){var statearr_11503 = state_11500;
(statearr_11503[(7)] = inst_11480);

return statearr_11503;
})();
var statearr_11504_11521 = state_11500__$1;
(statearr_11504_11521[(2)] = null);

(statearr_11504_11521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (4))){
var inst_11483 = (state_11500[(8)]);
var inst_11483__$1 = (state_11500[(2)]);
var inst_11484 = (inst_11483__$1 == null);
var state_11500__$1 = (function (){var statearr_11505 = state_11500;
(statearr_11505[(8)] = inst_11483__$1);

return statearr_11505;
})();
if(cljs.core.truth_(inst_11484)){
var statearr_11506_11522 = state_11500__$1;
(statearr_11506_11522[(1)] = (5));

} else {
var statearr_11507_11523 = state_11500__$1;
(statearr_11507_11523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (6))){
var inst_11480 = (state_11500[(7)]);
var inst_11487 = (state_11500[(9)]);
var inst_11483 = (state_11500[(8)]);
var inst_11487__$1 = f.call(null,inst_11480,inst_11483);
var inst_11488 = cljs.core.reduced_QMARK_.call(null,inst_11487__$1);
var state_11500__$1 = (function (){var statearr_11508 = state_11500;
(statearr_11508[(9)] = inst_11487__$1);

return statearr_11508;
})();
if(inst_11488){
var statearr_11509_11524 = state_11500__$1;
(statearr_11509_11524[(1)] = (8));

} else {
var statearr_11510_11525 = state_11500__$1;
(statearr_11510_11525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (3))){
var inst_11498 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11500__$1,inst_11498);
} else {
if((state_val_11501 === (2))){
var state_11500__$1 = state_11500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11500__$1,(4),ch);
} else {
if((state_val_11501 === (9))){
var inst_11487 = (state_11500[(9)]);
var inst_11480 = inst_11487;
var state_11500__$1 = (function (){var statearr_11511 = state_11500;
(statearr_11511[(7)] = inst_11480);

return statearr_11511;
})();
var statearr_11512_11526 = state_11500__$1;
(statearr_11512_11526[(2)] = null);

(statearr_11512_11526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (5))){
var inst_11480 = (state_11500[(7)]);
var state_11500__$1 = state_11500;
var statearr_11513_11527 = state_11500__$1;
(statearr_11513_11527[(2)] = inst_11480);

(statearr_11513_11527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (10))){
var inst_11494 = (state_11500[(2)]);
var state_11500__$1 = state_11500;
var statearr_11514_11528 = state_11500__$1;
(statearr_11514_11528[(2)] = inst_11494);

(statearr_11514_11528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11501 === (8))){
var inst_11487 = (state_11500[(9)]);
var inst_11490 = cljs.core.deref.call(null,inst_11487);
var state_11500__$1 = state_11500;
var statearr_11515_11529 = state_11500__$1;
(statearr_11515_11529[(2)] = inst_11490);

(statearr_11515_11529[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__10919__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10919__auto____0 = (function (){
var statearr_11516 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11516[(0)] = cljs$core$async$reduce_$_state_machine__10919__auto__);

(statearr_11516[(1)] = (1));

return statearr_11516;
});
var cljs$core$async$reduce_$_state_machine__10919__auto____1 = (function (state_11500){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11517){if((e11517 instanceof Object)){
var ex__10922__auto__ = e11517;
var statearr_11518_11530 = state_11500;
(statearr_11518_11530[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11531 = state_11500;
state_11500 = G__11531;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10919__auto__ = function(state_11500){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10919__auto____1.call(this,state_11500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10919__auto____0;
cljs$core$async$reduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10919__auto____1;
return cljs$core$async$reduce_$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11519 = f__11014__auto__.call(null);
(statearr_11519[(6)] = c__11013__auto__);

return statearr_11519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));

return c__11013__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11537){
var state_val_11538 = (state_11537[(1)]);
if((state_val_11538 === (1))){
var inst_11532 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11537__$1 = state_11537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11537__$1,(2),inst_11532);
} else {
if((state_val_11538 === (2))){
var inst_11534 = (state_11537[(2)]);
var inst_11535 = f__$1.call(null,inst_11534);
var state_11537__$1 = state_11537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11537__$1,inst_11535);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10919__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10919__auto____0 = (function (){
var statearr_11539 = [null,null,null,null,null,null,null];
(statearr_11539[(0)] = cljs$core$async$transduce_$_state_machine__10919__auto__);

(statearr_11539[(1)] = (1));

return statearr_11539;
});
var cljs$core$async$transduce_$_state_machine__10919__auto____1 = (function (state_11537){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11540){if((e11540 instanceof Object)){
var ex__10922__auto__ = e11540;
var statearr_11541_11543 = state_11537;
(statearr_11541_11543[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11544 = state_11537;
state_11537 = G__11544;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10919__auto__ = function(state_11537){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10919__auto____1.call(this,state_11537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10919__auto____0;
cljs$core$async$transduce_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10919__auto____1;
return cljs$core$async$transduce_$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11542 = f__11014__auto__.call(null);
(statearr_11542[(6)] = c__11013__auto__);

return statearr_11542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));

return c__11013__auto__;
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
var G__11546 = arguments.length;
switch (G__11546) {
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
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11571){
var state_val_11572 = (state_11571[(1)]);
if((state_val_11572 === (7))){
var inst_11553 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
var statearr_11573_11594 = state_11571__$1;
(statearr_11573_11594[(2)] = inst_11553);

(statearr_11573_11594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (1))){
var inst_11547 = cljs.core.seq.call(null,coll);
var inst_11548 = inst_11547;
var state_11571__$1 = (function (){var statearr_11574 = state_11571;
(statearr_11574[(7)] = inst_11548);

return statearr_11574;
})();
var statearr_11575_11595 = state_11571__$1;
(statearr_11575_11595[(2)] = null);

(statearr_11575_11595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (4))){
var inst_11548 = (state_11571[(7)]);
var inst_11551 = cljs.core.first.call(null,inst_11548);
var state_11571__$1 = state_11571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11571__$1,(7),ch,inst_11551);
} else {
if((state_val_11572 === (13))){
var inst_11565 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
var statearr_11576_11596 = state_11571__$1;
(statearr_11576_11596[(2)] = inst_11565);

(statearr_11576_11596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (6))){
var inst_11556 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
if(cljs.core.truth_(inst_11556)){
var statearr_11577_11597 = state_11571__$1;
(statearr_11577_11597[(1)] = (8));

} else {
var statearr_11578_11598 = state_11571__$1;
(statearr_11578_11598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (3))){
var inst_11569 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11571__$1,inst_11569);
} else {
if((state_val_11572 === (12))){
var state_11571__$1 = state_11571;
var statearr_11579_11599 = state_11571__$1;
(statearr_11579_11599[(2)] = null);

(statearr_11579_11599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (2))){
var inst_11548 = (state_11571[(7)]);
var state_11571__$1 = state_11571;
if(cljs.core.truth_(inst_11548)){
var statearr_11580_11600 = state_11571__$1;
(statearr_11580_11600[(1)] = (4));

} else {
var statearr_11581_11601 = state_11571__$1;
(statearr_11581_11601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (11))){
var inst_11562 = cljs.core.async.close_BANG_.call(null,ch);
var state_11571__$1 = state_11571;
var statearr_11582_11602 = state_11571__$1;
(statearr_11582_11602[(2)] = inst_11562);

(statearr_11582_11602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (9))){
var state_11571__$1 = state_11571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11583_11603 = state_11571__$1;
(statearr_11583_11603[(1)] = (11));

} else {
var statearr_11584_11604 = state_11571__$1;
(statearr_11584_11604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (5))){
var inst_11548 = (state_11571[(7)]);
var state_11571__$1 = state_11571;
var statearr_11585_11605 = state_11571__$1;
(statearr_11585_11605[(2)] = inst_11548);

(statearr_11585_11605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (10))){
var inst_11567 = (state_11571[(2)]);
var state_11571__$1 = state_11571;
var statearr_11586_11606 = state_11571__$1;
(statearr_11586_11606[(2)] = inst_11567);

(statearr_11586_11606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11572 === (8))){
var inst_11548 = (state_11571[(7)]);
var inst_11558 = cljs.core.next.call(null,inst_11548);
var inst_11548__$1 = inst_11558;
var state_11571__$1 = (function (){var statearr_11587 = state_11571;
(statearr_11587[(7)] = inst_11548__$1);

return statearr_11587;
})();
var statearr_11588_11607 = state_11571__$1;
(statearr_11588_11607[(2)] = null);

(statearr_11588_11607[(1)] = (2));


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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_11589 = [null,null,null,null,null,null,null,null];
(statearr_11589[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_11589[(1)] = (1));

return statearr_11589;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_11571){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11590){if((e11590 instanceof Object)){
var ex__10922__auto__ = e11590;
var statearr_11591_11608 = state_11571;
(statearr_11591_11608[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11609 = state_11571;
state_11571 = G__11609;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_11571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_11571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11592 = f__11014__auto__.call(null);
(statearr_11592[(6)] = c__11013__auto__);

return statearr_11592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));

return c__11013__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_11610 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_11610.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_11611 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_11611.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_11612 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_11612.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_11613 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_11613.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11614 = (function (ch,cs,meta11615){
this.ch = ch;
this.cs = cs;
this.meta11615 = meta11615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11616,meta11615__$1){
var self__ = this;
var _11616__$1 = this;
return (new cljs.core.async.t_cljs$core$async11614(self__.ch,self__.cs,meta11615__$1));
}));

(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11616){
var self__ = this;
var _11616__$1 = this;
return self__.meta11615;
}));

(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11615","meta11615",-1068661749,null)], null);
}));

(cljs.core.async.t_cljs$core$async11614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11614");

(cljs.core.async.t_cljs$core$async11614.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async11614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11614.
 */
cljs.core.async.__GT_t_cljs$core$async11614 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11614(ch__$1,cs__$1,meta11615){
return (new cljs.core.async.t_cljs$core$async11614(ch__$1,cs__$1,meta11615));
});

}

return (new cljs.core.async.t_cljs$core$async11614(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11013__auto___11836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_11751){
var state_val_11752 = (state_11751[(1)]);
if((state_val_11752 === (7))){
var inst_11747 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11753_11837 = state_11751__$1;
(statearr_11753_11837[(2)] = inst_11747);

(statearr_11753_11837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (20))){
var inst_11650 = (state_11751[(7)]);
var inst_11662 = cljs.core.first.call(null,inst_11650);
var inst_11663 = cljs.core.nth.call(null,inst_11662,(0),null);
var inst_11664 = cljs.core.nth.call(null,inst_11662,(1),null);
var state_11751__$1 = (function (){var statearr_11754 = state_11751;
(statearr_11754[(8)] = inst_11663);

return statearr_11754;
})();
if(cljs.core.truth_(inst_11664)){
var statearr_11755_11838 = state_11751__$1;
(statearr_11755_11838[(1)] = (22));

} else {
var statearr_11756_11839 = state_11751__$1;
(statearr_11756_11839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (27))){
var inst_11619 = (state_11751[(9)]);
var inst_11692 = (state_11751[(10)]);
var inst_11694 = (state_11751[(11)]);
var inst_11699 = (state_11751[(12)]);
var inst_11699__$1 = cljs.core._nth.call(null,inst_11692,inst_11694);
var inst_11700 = cljs.core.async.put_BANG_.call(null,inst_11699__$1,inst_11619,done);
var state_11751__$1 = (function (){var statearr_11757 = state_11751;
(statearr_11757[(12)] = inst_11699__$1);

return statearr_11757;
})();
if(cljs.core.truth_(inst_11700)){
var statearr_11758_11840 = state_11751__$1;
(statearr_11758_11840[(1)] = (30));

} else {
var statearr_11759_11841 = state_11751__$1;
(statearr_11759_11841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (1))){
var state_11751__$1 = state_11751;
var statearr_11760_11842 = state_11751__$1;
(statearr_11760_11842[(2)] = null);

(statearr_11760_11842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (24))){
var inst_11650 = (state_11751[(7)]);
var inst_11669 = (state_11751[(2)]);
var inst_11670 = cljs.core.next.call(null,inst_11650);
var inst_11628 = inst_11670;
var inst_11629 = null;
var inst_11630 = (0);
var inst_11631 = (0);
var state_11751__$1 = (function (){var statearr_11761 = state_11751;
(statearr_11761[(13)] = inst_11630);

(statearr_11761[(14)] = inst_11628);

(statearr_11761[(15)] = inst_11669);

(statearr_11761[(16)] = inst_11631);

(statearr_11761[(17)] = inst_11629);

return statearr_11761;
})();
var statearr_11762_11843 = state_11751__$1;
(statearr_11762_11843[(2)] = null);

(statearr_11762_11843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (39))){
var state_11751__$1 = state_11751;
var statearr_11766_11844 = state_11751__$1;
(statearr_11766_11844[(2)] = null);

(statearr_11766_11844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (4))){
var inst_11619 = (state_11751[(9)]);
var inst_11619__$1 = (state_11751[(2)]);
var inst_11620 = (inst_11619__$1 == null);
var state_11751__$1 = (function (){var statearr_11767 = state_11751;
(statearr_11767[(9)] = inst_11619__$1);

return statearr_11767;
})();
if(cljs.core.truth_(inst_11620)){
var statearr_11768_11845 = state_11751__$1;
(statearr_11768_11845[(1)] = (5));

} else {
var statearr_11769_11846 = state_11751__$1;
(statearr_11769_11846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (15))){
var inst_11630 = (state_11751[(13)]);
var inst_11628 = (state_11751[(14)]);
var inst_11631 = (state_11751[(16)]);
var inst_11629 = (state_11751[(17)]);
var inst_11646 = (state_11751[(2)]);
var inst_11647 = (inst_11631 + (1));
var tmp11763 = inst_11630;
var tmp11764 = inst_11628;
var tmp11765 = inst_11629;
var inst_11628__$1 = tmp11764;
var inst_11629__$1 = tmp11765;
var inst_11630__$1 = tmp11763;
var inst_11631__$1 = inst_11647;
var state_11751__$1 = (function (){var statearr_11770 = state_11751;
(statearr_11770[(13)] = inst_11630__$1);

(statearr_11770[(14)] = inst_11628__$1);

(statearr_11770[(16)] = inst_11631__$1);

(statearr_11770[(18)] = inst_11646);

(statearr_11770[(17)] = inst_11629__$1);

return statearr_11770;
})();
var statearr_11771_11847 = state_11751__$1;
(statearr_11771_11847[(2)] = null);

(statearr_11771_11847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (21))){
var inst_11673 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11775_11848 = state_11751__$1;
(statearr_11775_11848[(2)] = inst_11673);

(statearr_11775_11848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (31))){
var inst_11699 = (state_11751[(12)]);
var inst_11703 = done.call(null,null);
var inst_11704 = cljs.core.async.untap_STAR_.call(null,m,inst_11699);
var state_11751__$1 = (function (){var statearr_11776 = state_11751;
(statearr_11776[(19)] = inst_11703);

return statearr_11776;
})();
var statearr_11777_11849 = state_11751__$1;
(statearr_11777_11849[(2)] = inst_11704);

(statearr_11777_11849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (32))){
var inst_11692 = (state_11751[(10)]);
var inst_11691 = (state_11751[(20)]);
var inst_11693 = (state_11751[(21)]);
var inst_11694 = (state_11751[(11)]);
var inst_11706 = (state_11751[(2)]);
var inst_11707 = (inst_11694 + (1));
var tmp11772 = inst_11692;
var tmp11773 = inst_11691;
var tmp11774 = inst_11693;
var inst_11691__$1 = tmp11773;
var inst_11692__$1 = tmp11772;
var inst_11693__$1 = tmp11774;
var inst_11694__$1 = inst_11707;
var state_11751__$1 = (function (){var statearr_11778 = state_11751;
(statearr_11778[(10)] = inst_11692__$1);

(statearr_11778[(20)] = inst_11691__$1);

(statearr_11778[(22)] = inst_11706);

(statearr_11778[(21)] = inst_11693__$1);

(statearr_11778[(11)] = inst_11694__$1);

return statearr_11778;
})();
var statearr_11779_11850 = state_11751__$1;
(statearr_11779_11850[(2)] = null);

(statearr_11779_11850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (40))){
var inst_11719 = (state_11751[(23)]);
var inst_11723 = done.call(null,null);
var inst_11724 = cljs.core.async.untap_STAR_.call(null,m,inst_11719);
var state_11751__$1 = (function (){var statearr_11780 = state_11751;
(statearr_11780[(24)] = inst_11723);

return statearr_11780;
})();
var statearr_11781_11851 = state_11751__$1;
(statearr_11781_11851[(2)] = inst_11724);

(statearr_11781_11851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (33))){
var inst_11710 = (state_11751[(25)]);
var inst_11712 = cljs.core.chunked_seq_QMARK_.call(null,inst_11710);
var state_11751__$1 = state_11751;
if(inst_11712){
var statearr_11782_11852 = state_11751__$1;
(statearr_11782_11852[(1)] = (36));

} else {
var statearr_11783_11853 = state_11751__$1;
(statearr_11783_11853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (13))){
var inst_11640 = (state_11751[(26)]);
var inst_11643 = cljs.core.async.close_BANG_.call(null,inst_11640);
var state_11751__$1 = state_11751;
var statearr_11784_11854 = state_11751__$1;
(statearr_11784_11854[(2)] = inst_11643);

(statearr_11784_11854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (22))){
var inst_11663 = (state_11751[(8)]);
var inst_11666 = cljs.core.async.close_BANG_.call(null,inst_11663);
var state_11751__$1 = state_11751;
var statearr_11785_11855 = state_11751__$1;
(statearr_11785_11855[(2)] = inst_11666);

(statearr_11785_11855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (36))){
var inst_11710 = (state_11751[(25)]);
var inst_11714 = cljs.core.chunk_first.call(null,inst_11710);
var inst_11715 = cljs.core.chunk_rest.call(null,inst_11710);
var inst_11716 = cljs.core.count.call(null,inst_11714);
var inst_11691 = inst_11715;
var inst_11692 = inst_11714;
var inst_11693 = inst_11716;
var inst_11694 = (0);
var state_11751__$1 = (function (){var statearr_11786 = state_11751;
(statearr_11786[(10)] = inst_11692);

(statearr_11786[(20)] = inst_11691);

(statearr_11786[(21)] = inst_11693);

(statearr_11786[(11)] = inst_11694);

return statearr_11786;
})();
var statearr_11787_11856 = state_11751__$1;
(statearr_11787_11856[(2)] = null);

(statearr_11787_11856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (41))){
var inst_11710 = (state_11751[(25)]);
var inst_11726 = (state_11751[(2)]);
var inst_11727 = cljs.core.next.call(null,inst_11710);
var inst_11691 = inst_11727;
var inst_11692 = null;
var inst_11693 = (0);
var inst_11694 = (0);
var state_11751__$1 = (function (){var statearr_11788 = state_11751;
(statearr_11788[(10)] = inst_11692);

(statearr_11788[(20)] = inst_11691);

(statearr_11788[(21)] = inst_11693);

(statearr_11788[(11)] = inst_11694);

(statearr_11788[(27)] = inst_11726);

return statearr_11788;
})();
var statearr_11789_11857 = state_11751__$1;
(statearr_11789_11857[(2)] = null);

(statearr_11789_11857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (43))){
var state_11751__$1 = state_11751;
var statearr_11790_11858 = state_11751__$1;
(statearr_11790_11858[(2)] = null);

(statearr_11790_11858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (29))){
var inst_11735 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11791_11859 = state_11751__$1;
(statearr_11791_11859[(2)] = inst_11735);

(statearr_11791_11859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (44))){
var inst_11744 = (state_11751[(2)]);
var state_11751__$1 = (function (){var statearr_11792 = state_11751;
(statearr_11792[(28)] = inst_11744);

return statearr_11792;
})();
var statearr_11793_11860 = state_11751__$1;
(statearr_11793_11860[(2)] = null);

(statearr_11793_11860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (6))){
var inst_11683 = (state_11751[(29)]);
var inst_11682 = cljs.core.deref.call(null,cs);
var inst_11683__$1 = cljs.core.keys.call(null,inst_11682);
var inst_11684 = cljs.core.count.call(null,inst_11683__$1);
var inst_11685 = cljs.core.reset_BANG_.call(null,dctr,inst_11684);
var inst_11690 = cljs.core.seq.call(null,inst_11683__$1);
var inst_11691 = inst_11690;
var inst_11692 = null;
var inst_11693 = (0);
var inst_11694 = (0);
var state_11751__$1 = (function (){var statearr_11794 = state_11751;
(statearr_11794[(10)] = inst_11692);

(statearr_11794[(20)] = inst_11691);

(statearr_11794[(21)] = inst_11693);

(statearr_11794[(11)] = inst_11694);

(statearr_11794[(29)] = inst_11683__$1);

(statearr_11794[(30)] = inst_11685);

return statearr_11794;
})();
var statearr_11795_11861 = state_11751__$1;
(statearr_11795_11861[(2)] = null);

(statearr_11795_11861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (28))){
var inst_11710 = (state_11751[(25)]);
var inst_11691 = (state_11751[(20)]);
var inst_11710__$1 = cljs.core.seq.call(null,inst_11691);
var state_11751__$1 = (function (){var statearr_11796 = state_11751;
(statearr_11796[(25)] = inst_11710__$1);

return statearr_11796;
})();
if(inst_11710__$1){
var statearr_11797_11862 = state_11751__$1;
(statearr_11797_11862[(1)] = (33));

} else {
var statearr_11798_11863 = state_11751__$1;
(statearr_11798_11863[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (25))){
var inst_11693 = (state_11751[(21)]);
var inst_11694 = (state_11751[(11)]);
var inst_11696 = (inst_11694 < inst_11693);
var inst_11697 = inst_11696;
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11697)){
var statearr_11799_11864 = state_11751__$1;
(statearr_11799_11864[(1)] = (27));

} else {
var statearr_11800_11865 = state_11751__$1;
(statearr_11800_11865[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (34))){
var state_11751__$1 = state_11751;
var statearr_11801_11866 = state_11751__$1;
(statearr_11801_11866[(2)] = null);

(statearr_11801_11866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (17))){
var state_11751__$1 = state_11751;
var statearr_11802_11867 = state_11751__$1;
(statearr_11802_11867[(2)] = null);

(statearr_11802_11867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (3))){
var inst_11749 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11751__$1,inst_11749);
} else {
if((state_val_11752 === (12))){
var inst_11678 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11803_11868 = state_11751__$1;
(statearr_11803_11868[(2)] = inst_11678);

(statearr_11803_11868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (2))){
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11751__$1,(4),ch);
} else {
if((state_val_11752 === (23))){
var state_11751__$1 = state_11751;
var statearr_11804_11869 = state_11751__$1;
(statearr_11804_11869[(2)] = null);

(statearr_11804_11869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (35))){
var inst_11733 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11805_11870 = state_11751__$1;
(statearr_11805_11870[(2)] = inst_11733);

(statearr_11805_11870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (19))){
var inst_11650 = (state_11751[(7)]);
var inst_11654 = cljs.core.chunk_first.call(null,inst_11650);
var inst_11655 = cljs.core.chunk_rest.call(null,inst_11650);
var inst_11656 = cljs.core.count.call(null,inst_11654);
var inst_11628 = inst_11655;
var inst_11629 = inst_11654;
var inst_11630 = inst_11656;
var inst_11631 = (0);
var state_11751__$1 = (function (){var statearr_11806 = state_11751;
(statearr_11806[(13)] = inst_11630);

(statearr_11806[(14)] = inst_11628);

(statearr_11806[(16)] = inst_11631);

(statearr_11806[(17)] = inst_11629);

return statearr_11806;
})();
var statearr_11807_11871 = state_11751__$1;
(statearr_11807_11871[(2)] = null);

(statearr_11807_11871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (11))){
var inst_11628 = (state_11751[(14)]);
var inst_11650 = (state_11751[(7)]);
var inst_11650__$1 = cljs.core.seq.call(null,inst_11628);
var state_11751__$1 = (function (){var statearr_11808 = state_11751;
(statearr_11808[(7)] = inst_11650__$1);

return statearr_11808;
})();
if(inst_11650__$1){
var statearr_11809_11872 = state_11751__$1;
(statearr_11809_11872[(1)] = (16));

} else {
var statearr_11810_11873 = state_11751__$1;
(statearr_11810_11873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (9))){
var inst_11680 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11811_11874 = state_11751__$1;
(statearr_11811_11874[(2)] = inst_11680);

(statearr_11811_11874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (5))){
var inst_11626 = cljs.core.deref.call(null,cs);
var inst_11627 = cljs.core.seq.call(null,inst_11626);
var inst_11628 = inst_11627;
var inst_11629 = null;
var inst_11630 = (0);
var inst_11631 = (0);
var state_11751__$1 = (function (){var statearr_11812 = state_11751;
(statearr_11812[(13)] = inst_11630);

(statearr_11812[(14)] = inst_11628);

(statearr_11812[(16)] = inst_11631);

(statearr_11812[(17)] = inst_11629);

return statearr_11812;
})();
var statearr_11813_11875 = state_11751__$1;
(statearr_11813_11875[(2)] = null);

(statearr_11813_11875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (14))){
var state_11751__$1 = state_11751;
var statearr_11814_11876 = state_11751__$1;
(statearr_11814_11876[(2)] = null);

(statearr_11814_11876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (45))){
var inst_11741 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11815_11877 = state_11751__$1;
(statearr_11815_11877[(2)] = inst_11741);

(statearr_11815_11877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (26))){
var inst_11683 = (state_11751[(29)]);
var inst_11737 = (state_11751[(2)]);
var inst_11738 = cljs.core.seq.call(null,inst_11683);
var state_11751__$1 = (function (){var statearr_11816 = state_11751;
(statearr_11816[(31)] = inst_11737);

return statearr_11816;
})();
if(inst_11738){
var statearr_11817_11878 = state_11751__$1;
(statearr_11817_11878[(1)] = (42));

} else {
var statearr_11818_11879 = state_11751__$1;
(statearr_11818_11879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (16))){
var inst_11650 = (state_11751[(7)]);
var inst_11652 = cljs.core.chunked_seq_QMARK_.call(null,inst_11650);
var state_11751__$1 = state_11751;
if(inst_11652){
var statearr_11819_11880 = state_11751__$1;
(statearr_11819_11880[(1)] = (19));

} else {
var statearr_11820_11881 = state_11751__$1;
(statearr_11820_11881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (38))){
var inst_11730 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11821_11882 = state_11751__$1;
(statearr_11821_11882[(2)] = inst_11730);

(statearr_11821_11882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (30))){
var state_11751__$1 = state_11751;
var statearr_11822_11883 = state_11751__$1;
(statearr_11822_11883[(2)] = null);

(statearr_11822_11883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (10))){
var inst_11631 = (state_11751[(16)]);
var inst_11629 = (state_11751[(17)]);
var inst_11639 = cljs.core._nth.call(null,inst_11629,inst_11631);
var inst_11640 = cljs.core.nth.call(null,inst_11639,(0),null);
var inst_11641 = cljs.core.nth.call(null,inst_11639,(1),null);
var state_11751__$1 = (function (){var statearr_11823 = state_11751;
(statearr_11823[(26)] = inst_11640);

return statearr_11823;
})();
if(cljs.core.truth_(inst_11641)){
var statearr_11824_11884 = state_11751__$1;
(statearr_11824_11884[(1)] = (13));

} else {
var statearr_11825_11885 = state_11751__$1;
(statearr_11825_11885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (18))){
var inst_11676 = (state_11751[(2)]);
var state_11751__$1 = state_11751;
var statearr_11826_11886 = state_11751__$1;
(statearr_11826_11886[(2)] = inst_11676);

(statearr_11826_11886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (42))){
var state_11751__$1 = state_11751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11751__$1,(45),dchan);
} else {
if((state_val_11752 === (37))){
var inst_11710 = (state_11751[(25)]);
var inst_11619 = (state_11751[(9)]);
var inst_11719 = (state_11751[(23)]);
var inst_11719__$1 = cljs.core.first.call(null,inst_11710);
var inst_11720 = cljs.core.async.put_BANG_.call(null,inst_11719__$1,inst_11619,done);
var state_11751__$1 = (function (){var statearr_11827 = state_11751;
(statearr_11827[(23)] = inst_11719__$1);

return statearr_11827;
})();
if(cljs.core.truth_(inst_11720)){
var statearr_11828_11887 = state_11751__$1;
(statearr_11828_11887[(1)] = (39));

} else {
var statearr_11829_11888 = state_11751__$1;
(statearr_11829_11888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11752 === (8))){
var inst_11630 = (state_11751[(13)]);
var inst_11631 = (state_11751[(16)]);
var inst_11633 = (inst_11631 < inst_11630);
var inst_11634 = inst_11633;
var state_11751__$1 = state_11751;
if(cljs.core.truth_(inst_11634)){
var statearr_11830_11889 = state_11751__$1;
(statearr_11830_11889[(1)] = (10));

} else {
var statearr_11831_11890 = state_11751__$1;
(statearr_11831_11890[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__10919__auto__ = null;
var cljs$core$async$mult_$_state_machine__10919__auto____0 = (function (){
var statearr_11832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11832[(0)] = cljs$core$async$mult_$_state_machine__10919__auto__);

(statearr_11832[(1)] = (1));

return statearr_11832;
});
var cljs$core$async$mult_$_state_machine__10919__auto____1 = (function (state_11751){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_11751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e11833){if((e11833 instanceof Object)){
var ex__10922__auto__ = e11833;
var statearr_11834_11891 = state_11751;
(statearr_11834_11891[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11892 = state_11751;
state_11751 = G__11892;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10919__auto__ = function(state_11751){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10919__auto____1.call(this,state_11751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10919__auto____0;
cljs$core$async$mult_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10919__auto____1;
return cljs$core$async$mult_$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_11835 = f__11014__auto__.call(null);
(statearr_11835[(6)] = c__11013__auto___11836);

return statearr_11835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
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
var G__11894 = arguments.length;
switch (G__11894) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_11896 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_11896.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_11897 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_11897.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_11898 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_11898.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_11899 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_11899.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_11900 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_11900.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11911 = arguments.length;
var i__4737__auto___11912 = (0);
while(true){
if((i__4737__auto___11912 < len__4736__auto___11911)){
args__4742__auto__.push((arguments[i__4737__auto___11912]));

var G__11913 = (i__4737__auto___11912 + (1));
i__4737__auto___11912 = G__11913;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11905){
var map__11906 = p__11905;
var map__11906__$1 = (((((!((map__11906 == null))))?(((((map__11906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11906):map__11906);
var opts = map__11906__$1;
var statearr_11908_11914 = state;
(statearr_11908_11914[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_11909_11915 = state;
(statearr_11909_11915[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_11910_11916 = state;
(statearr_11910_11916[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11901){
var G__11902 = cljs.core.first.call(null,seq11901);
var seq11901__$1 = cljs.core.next.call(null,seq11901);
var G__11903 = cljs.core.first.call(null,seq11901__$1);
var seq11901__$2 = cljs.core.next.call(null,seq11901__$1);
var G__11904 = cljs.core.first.call(null,seq11901__$2);
var seq11901__$3 = cljs.core.next.call(null,seq11901__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11902,G__11903,G__11904,seq11901__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11917 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11918){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11918 = meta11918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11919,meta11918__$1){
var self__ = this;
var _11919__$1 = this;
return (new cljs.core.async.t_cljs$core$async11917(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11918__$1));
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11919){
var self__ = this;
var _11919__$1 = this;
return self__.meta11918;
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11917.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async11917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11918","meta11918",1781871490,null)], null);
}));

(cljs.core.async.t_cljs$core$async11917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11917");

(cljs.core.async.t_cljs$core$async11917.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async11917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11917.
 */
cljs.core.async.__GT_t_cljs$core$async11917 = (function cljs$core$async$mix_$___GT_t_cljs$core$async11917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11918){
return (new cljs.core.async.t_cljs$core$async11917(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11918));
});

}

return (new cljs.core.async.t_cljs$core$async11917(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11013__auto___12081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12021){
var state_val_12022 = (state_12021[(1)]);
if((state_val_12022 === (7))){
var inst_11936 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12023_12082 = state_12021__$1;
(statearr_12023_12082[(2)] = inst_11936);

(statearr_12023_12082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (20))){
var inst_11948 = (state_12021[(7)]);
var state_12021__$1 = state_12021;
var statearr_12024_12083 = state_12021__$1;
(statearr_12024_12083[(2)] = inst_11948);

(statearr_12024_12083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (27))){
var state_12021__$1 = state_12021;
var statearr_12025_12084 = state_12021__$1;
(statearr_12025_12084[(2)] = null);

(statearr_12025_12084[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (1))){
var inst_11923 = (state_12021[(8)]);
var inst_11923__$1 = calc_state.call(null);
var inst_11925 = (inst_11923__$1 == null);
var inst_11926 = cljs.core.not.call(null,inst_11925);
var state_12021__$1 = (function (){var statearr_12026 = state_12021;
(statearr_12026[(8)] = inst_11923__$1);

return statearr_12026;
})();
if(inst_11926){
var statearr_12027_12085 = state_12021__$1;
(statearr_12027_12085[(1)] = (2));

} else {
var statearr_12028_12086 = state_12021__$1;
(statearr_12028_12086[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (24))){
var inst_11972 = (state_12021[(9)]);
var inst_11981 = (state_12021[(10)]);
var inst_11995 = (state_12021[(11)]);
var inst_11995__$1 = inst_11972.call(null,inst_11981);
var state_12021__$1 = (function (){var statearr_12029 = state_12021;
(statearr_12029[(11)] = inst_11995__$1);

return statearr_12029;
})();
if(cljs.core.truth_(inst_11995__$1)){
var statearr_12030_12087 = state_12021__$1;
(statearr_12030_12087[(1)] = (29));

} else {
var statearr_12031_12088 = state_12021__$1;
(statearr_12031_12088[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (4))){
var inst_11939 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_11939)){
var statearr_12032_12089 = state_12021__$1;
(statearr_12032_12089[(1)] = (8));

} else {
var statearr_12033_12090 = state_12021__$1;
(statearr_12033_12090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (15))){
var inst_11966 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_11966)){
var statearr_12034_12091 = state_12021__$1;
(statearr_12034_12091[(1)] = (19));

} else {
var statearr_12035_12092 = state_12021__$1;
(statearr_12035_12092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (21))){
var inst_11971 = (state_12021[(12)]);
var inst_11971__$1 = (state_12021[(2)]);
var inst_11972 = cljs.core.get.call(null,inst_11971__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11973 = cljs.core.get.call(null,inst_11971__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11974 = cljs.core.get.call(null,inst_11971__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12021__$1 = (function (){var statearr_12036 = state_12021;
(statearr_12036[(9)] = inst_11972);

(statearr_12036[(12)] = inst_11971__$1);

(statearr_12036[(13)] = inst_11973);

return statearr_12036;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12021__$1,(22),inst_11974);
} else {
if((state_val_12022 === (31))){
var inst_12003 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_12003)){
var statearr_12037_12093 = state_12021__$1;
(statearr_12037_12093[(1)] = (32));

} else {
var statearr_12038_12094 = state_12021__$1;
(statearr_12038_12094[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (32))){
var inst_11980 = (state_12021[(14)]);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12021__$1,(35),out,inst_11980);
} else {
if((state_val_12022 === (33))){
var inst_11971 = (state_12021[(12)]);
var inst_11948 = inst_11971;
var state_12021__$1 = (function (){var statearr_12039 = state_12021;
(statearr_12039[(7)] = inst_11948);

return statearr_12039;
})();
var statearr_12040_12095 = state_12021__$1;
(statearr_12040_12095[(2)] = null);

(statearr_12040_12095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (13))){
var inst_11948 = (state_12021[(7)]);
var inst_11955 = inst_11948.cljs$lang$protocol_mask$partition0$;
var inst_11956 = (inst_11955 & (64));
var inst_11957 = inst_11948.cljs$core$ISeq$;
var inst_11958 = (cljs.core.PROTOCOL_SENTINEL === inst_11957);
var inst_11959 = ((inst_11956) || (inst_11958));
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_11959)){
var statearr_12041_12096 = state_12021__$1;
(statearr_12041_12096[(1)] = (16));

} else {
var statearr_12042_12097 = state_12021__$1;
(statearr_12042_12097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (22))){
var inst_11981 = (state_12021[(10)]);
var inst_11980 = (state_12021[(14)]);
var inst_11979 = (state_12021[(2)]);
var inst_11980__$1 = cljs.core.nth.call(null,inst_11979,(0),null);
var inst_11981__$1 = cljs.core.nth.call(null,inst_11979,(1),null);
var inst_11982 = (inst_11980__$1 == null);
var inst_11983 = cljs.core._EQ_.call(null,inst_11981__$1,change);
var inst_11984 = ((inst_11982) || (inst_11983));
var state_12021__$1 = (function (){var statearr_12043 = state_12021;
(statearr_12043[(10)] = inst_11981__$1);

(statearr_12043[(14)] = inst_11980__$1);

return statearr_12043;
})();
if(cljs.core.truth_(inst_11984)){
var statearr_12044_12098 = state_12021__$1;
(statearr_12044_12098[(1)] = (23));

} else {
var statearr_12045_12099 = state_12021__$1;
(statearr_12045_12099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (36))){
var inst_11971 = (state_12021[(12)]);
var inst_11948 = inst_11971;
var state_12021__$1 = (function (){var statearr_12046 = state_12021;
(statearr_12046[(7)] = inst_11948);

return statearr_12046;
})();
var statearr_12047_12100 = state_12021__$1;
(statearr_12047_12100[(2)] = null);

(statearr_12047_12100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (29))){
var inst_11995 = (state_12021[(11)]);
var state_12021__$1 = state_12021;
var statearr_12048_12101 = state_12021__$1;
(statearr_12048_12101[(2)] = inst_11995);

(statearr_12048_12101[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (6))){
var state_12021__$1 = state_12021;
var statearr_12049_12102 = state_12021__$1;
(statearr_12049_12102[(2)] = false);

(statearr_12049_12102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (28))){
var inst_11991 = (state_12021[(2)]);
var inst_11992 = calc_state.call(null);
var inst_11948 = inst_11992;
var state_12021__$1 = (function (){var statearr_12050 = state_12021;
(statearr_12050[(15)] = inst_11991);

(statearr_12050[(7)] = inst_11948);

return statearr_12050;
})();
var statearr_12051_12103 = state_12021__$1;
(statearr_12051_12103[(2)] = null);

(statearr_12051_12103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (25))){
var inst_12017 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12052_12104 = state_12021__$1;
(statearr_12052_12104[(2)] = inst_12017);

(statearr_12052_12104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (34))){
var inst_12015 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12053_12105 = state_12021__$1;
(statearr_12053_12105[(2)] = inst_12015);

(statearr_12053_12105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (17))){
var state_12021__$1 = state_12021;
var statearr_12054_12106 = state_12021__$1;
(statearr_12054_12106[(2)] = false);

(statearr_12054_12106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (3))){
var state_12021__$1 = state_12021;
var statearr_12055_12107 = state_12021__$1;
(statearr_12055_12107[(2)] = false);

(statearr_12055_12107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (12))){
var inst_12019 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12021__$1,inst_12019);
} else {
if((state_val_12022 === (2))){
var inst_11923 = (state_12021[(8)]);
var inst_11928 = inst_11923.cljs$lang$protocol_mask$partition0$;
var inst_11929 = (inst_11928 & (64));
var inst_11930 = inst_11923.cljs$core$ISeq$;
var inst_11931 = (cljs.core.PROTOCOL_SENTINEL === inst_11930);
var inst_11932 = ((inst_11929) || (inst_11931));
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_11932)){
var statearr_12056_12108 = state_12021__$1;
(statearr_12056_12108[(1)] = (5));

} else {
var statearr_12057_12109 = state_12021__$1;
(statearr_12057_12109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (23))){
var inst_11980 = (state_12021[(14)]);
var inst_11986 = (inst_11980 == null);
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_11986)){
var statearr_12058_12110 = state_12021__$1;
(statearr_12058_12110[(1)] = (26));

} else {
var statearr_12059_12111 = state_12021__$1;
(statearr_12059_12111[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (35))){
var inst_12006 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
if(cljs.core.truth_(inst_12006)){
var statearr_12060_12112 = state_12021__$1;
(statearr_12060_12112[(1)] = (36));

} else {
var statearr_12061_12113 = state_12021__$1;
(statearr_12061_12113[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (19))){
var inst_11948 = (state_12021[(7)]);
var inst_11968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11948);
var state_12021__$1 = state_12021;
var statearr_12062_12114 = state_12021__$1;
(statearr_12062_12114[(2)] = inst_11968);

(statearr_12062_12114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (11))){
var inst_11948 = (state_12021[(7)]);
var inst_11952 = (inst_11948 == null);
var inst_11953 = cljs.core.not.call(null,inst_11952);
var state_12021__$1 = state_12021;
if(inst_11953){
var statearr_12063_12115 = state_12021__$1;
(statearr_12063_12115[(1)] = (13));

} else {
var statearr_12064_12116 = state_12021__$1;
(statearr_12064_12116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (9))){
var inst_11923 = (state_12021[(8)]);
var state_12021__$1 = state_12021;
var statearr_12065_12117 = state_12021__$1;
(statearr_12065_12117[(2)] = inst_11923);

(statearr_12065_12117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (5))){
var state_12021__$1 = state_12021;
var statearr_12066_12118 = state_12021__$1;
(statearr_12066_12118[(2)] = true);

(statearr_12066_12118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (14))){
var state_12021__$1 = state_12021;
var statearr_12067_12119 = state_12021__$1;
(statearr_12067_12119[(2)] = false);

(statearr_12067_12119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (26))){
var inst_11981 = (state_12021[(10)]);
var inst_11988 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11981);
var state_12021__$1 = state_12021;
var statearr_12068_12120 = state_12021__$1;
(statearr_12068_12120[(2)] = inst_11988);

(statearr_12068_12120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (16))){
var state_12021__$1 = state_12021;
var statearr_12069_12121 = state_12021__$1;
(statearr_12069_12121[(2)] = true);

(statearr_12069_12121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (38))){
var inst_12011 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12070_12122 = state_12021__$1;
(statearr_12070_12122[(2)] = inst_12011);

(statearr_12070_12122[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (30))){
var inst_11972 = (state_12021[(9)]);
var inst_11981 = (state_12021[(10)]);
var inst_11973 = (state_12021[(13)]);
var inst_11998 = cljs.core.empty_QMARK_.call(null,inst_11972);
var inst_11999 = inst_11973.call(null,inst_11981);
var inst_12000 = cljs.core.not.call(null,inst_11999);
var inst_12001 = ((inst_11998) && (inst_12000));
var state_12021__$1 = state_12021;
var statearr_12071_12123 = state_12021__$1;
(statearr_12071_12123[(2)] = inst_12001);

(statearr_12071_12123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (10))){
var inst_11923 = (state_12021[(8)]);
var inst_11944 = (state_12021[(2)]);
var inst_11945 = cljs.core.get.call(null,inst_11944,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11946 = cljs.core.get.call(null,inst_11944,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11947 = cljs.core.get.call(null,inst_11944,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11948 = inst_11923;
var state_12021__$1 = (function (){var statearr_12072 = state_12021;
(statearr_12072[(16)] = inst_11947);

(statearr_12072[(17)] = inst_11946);

(statearr_12072[(18)] = inst_11945);

(statearr_12072[(7)] = inst_11948);

return statearr_12072;
})();
var statearr_12073_12124 = state_12021__$1;
(statearr_12073_12124[(2)] = null);

(statearr_12073_12124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (18))){
var inst_11963 = (state_12021[(2)]);
var state_12021__$1 = state_12021;
var statearr_12074_12125 = state_12021__$1;
(statearr_12074_12125[(2)] = inst_11963);

(statearr_12074_12125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (37))){
var state_12021__$1 = state_12021;
var statearr_12075_12126 = state_12021__$1;
(statearr_12075_12126[(2)] = null);

(statearr_12075_12126[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12022 === (8))){
var inst_11923 = (state_12021[(8)]);
var inst_11941 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11923);
var state_12021__$1 = state_12021;
var statearr_12076_12127 = state_12021__$1;
(statearr_12076_12127[(2)] = inst_11941);

(statearr_12076_12127[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__10919__auto__ = null;
var cljs$core$async$mix_$_state_machine__10919__auto____0 = (function (){
var statearr_12077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12077[(0)] = cljs$core$async$mix_$_state_machine__10919__auto__);

(statearr_12077[(1)] = (1));

return statearr_12077;
});
var cljs$core$async$mix_$_state_machine__10919__auto____1 = (function (state_12021){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12078){if((e12078 instanceof Object)){
var ex__10922__auto__ = e12078;
var statearr_12079_12128 = state_12021;
(statearr_12079_12128[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12129 = state_12021;
state_12021 = G__12129;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10919__auto__ = function(state_12021){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10919__auto____1.call(this,state_12021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10919__auto____0;
cljs$core$async$mix_$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10919__auto____1;
return cljs$core$async$mix_$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12080 = f__11014__auto__.call(null);
(statearr_12080[(6)] = c__11013__auto___12081);

return statearr_12080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_12132 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_12132.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12133 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_12133.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12134 = (function() {
var G__12135 = null;
var G__12135__1 = (function (p){
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
var G__12135__2 = (function (p,v){
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
G__12135 = function(p,v){
switch(arguments.length){
case 1:
return G__12135__1.call(this,p);
case 2:
return G__12135__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12135.cljs$core$IFn$_invoke$arity$1 = G__12135__1;
G__12135.cljs$core$IFn$_invoke$arity$2 = G__12135__2;
return G__12135;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12131 = arguments.length;
switch (G__12131) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12134.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12134.call(null,p,v);
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
var G__12139 = arguments.length;
switch (G__12139) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12137_SHARP_){
if(cljs.core.truth_(p1__12137_SHARP_.call(null,topic))){
return p1__12137_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12137_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12140 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12141){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12141 = meta12141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12142,meta12141__$1){
var self__ = this;
var _12142__$1 = this;
return (new cljs.core.async.t_cljs$core$async12140(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12141__$1));
}));

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12142){
var self__ = this;
var _12142__$1 = this;
return self__.meta12141;
}));

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12140.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12141","meta12141",-465175121,null)], null);
}));

(cljs.core.async.t_cljs$core$async12140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12140");

(cljs.core.async.t_cljs$core$async12140.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12140.
 */
cljs.core.async.__GT_t_cljs$core$async12140 = (function cljs$core$async$__GT_t_cljs$core$async12140(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12141){
return (new cljs.core.async.t_cljs$core$async12140(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12141));
});

}

return (new cljs.core.async.t_cljs$core$async12140(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11013__auto___12260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12214){
var state_val_12215 = (state_12214[(1)]);
if((state_val_12215 === (7))){
var inst_12210 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
var statearr_12216_12261 = state_12214__$1;
(statearr_12216_12261[(2)] = inst_12210);

(statearr_12216_12261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (20))){
var state_12214__$1 = state_12214;
var statearr_12217_12262 = state_12214__$1;
(statearr_12217_12262[(2)] = null);

(statearr_12217_12262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (1))){
var state_12214__$1 = state_12214;
var statearr_12218_12263 = state_12214__$1;
(statearr_12218_12263[(2)] = null);

(statearr_12218_12263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (24))){
var inst_12193 = (state_12214[(7)]);
var inst_12202 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12193);
var state_12214__$1 = state_12214;
var statearr_12219_12264 = state_12214__$1;
(statearr_12219_12264[(2)] = inst_12202);

(statearr_12219_12264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (4))){
var inst_12145 = (state_12214[(8)]);
var inst_12145__$1 = (state_12214[(2)]);
var inst_12146 = (inst_12145__$1 == null);
var state_12214__$1 = (function (){var statearr_12220 = state_12214;
(statearr_12220[(8)] = inst_12145__$1);

return statearr_12220;
})();
if(cljs.core.truth_(inst_12146)){
var statearr_12221_12265 = state_12214__$1;
(statearr_12221_12265[(1)] = (5));

} else {
var statearr_12222_12266 = state_12214__$1;
(statearr_12222_12266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (15))){
var inst_12187 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
var statearr_12223_12267 = state_12214__$1;
(statearr_12223_12267[(2)] = inst_12187);

(statearr_12223_12267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (21))){
var inst_12207 = (state_12214[(2)]);
var state_12214__$1 = (function (){var statearr_12224 = state_12214;
(statearr_12224[(9)] = inst_12207);

return statearr_12224;
})();
var statearr_12225_12268 = state_12214__$1;
(statearr_12225_12268[(2)] = null);

(statearr_12225_12268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (13))){
var inst_12169 = (state_12214[(10)]);
var inst_12171 = cljs.core.chunked_seq_QMARK_.call(null,inst_12169);
var state_12214__$1 = state_12214;
if(inst_12171){
var statearr_12226_12269 = state_12214__$1;
(statearr_12226_12269[(1)] = (16));

} else {
var statearr_12227_12270 = state_12214__$1;
(statearr_12227_12270[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (22))){
var inst_12199 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
if(cljs.core.truth_(inst_12199)){
var statearr_12228_12271 = state_12214__$1;
(statearr_12228_12271[(1)] = (23));

} else {
var statearr_12229_12272 = state_12214__$1;
(statearr_12229_12272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (6))){
var inst_12145 = (state_12214[(8)]);
var inst_12193 = (state_12214[(7)]);
var inst_12195 = (state_12214[(11)]);
var inst_12193__$1 = topic_fn.call(null,inst_12145);
var inst_12194 = cljs.core.deref.call(null,mults);
var inst_12195__$1 = cljs.core.get.call(null,inst_12194,inst_12193__$1);
var state_12214__$1 = (function (){var statearr_12230 = state_12214;
(statearr_12230[(7)] = inst_12193__$1);

(statearr_12230[(11)] = inst_12195__$1);

return statearr_12230;
})();
if(cljs.core.truth_(inst_12195__$1)){
var statearr_12231_12273 = state_12214__$1;
(statearr_12231_12273[(1)] = (19));

} else {
var statearr_12232_12274 = state_12214__$1;
(statearr_12232_12274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (25))){
var inst_12204 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
var statearr_12233_12275 = state_12214__$1;
(statearr_12233_12275[(2)] = inst_12204);

(statearr_12233_12275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (17))){
var inst_12169 = (state_12214[(10)]);
var inst_12178 = cljs.core.first.call(null,inst_12169);
var inst_12179 = cljs.core.async.muxch_STAR_.call(null,inst_12178);
var inst_12180 = cljs.core.async.close_BANG_.call(null,inst_12179);
var inst_12181 = cljs.core.next.call(null,inst_12169);
var inst_12155 = inst_12181;
var inst_12156 = null;
var inst_12157 = (0);
var inst_12158 = (0);
var state_12214__$1 = (function (){var statearr_12234 = state_12214;
(statearr_12234[(12)] = inst_12157);

(statearr_12234[(13)] = inst_12156);

(statearr_12234[(14)] = inst_12155);

(statearr_12234[(15)] = inst_12158);

(statearr_12234[(16)] = inst_12180);

return statearr_12234;
})();
var statearr_12235_12276 = state_12214__$1;
(statearr_12235_12276[(2)] = null);

(statearr_12235_12276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (3))){
var inst_12212 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12214__$1,inst_12212);
} else {
if((state_val_12215 === (12))){
var inst_12189 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
var statearr_12236_12277 = state_12214__$1;
(statearr_12236_12277[(2)] = inst_12189);

(statearr_12236_12277[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (2))){
var state_12214__$1 = state_12214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12214__$1,(4),ch);
} else {
if((state_val_12215 === (23))){
var state_12214__$1 = state_12214;
var statearr_12237_12278 = state_12214__$1;
(statearr_12237_12278[(2)] = null);

(statearr_12237_12278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (19))){
var inst_12145 = (state_12214[(8)]);
var inst_12195 = (state_12214[(11)]);
var inst_12197 = cljs.core.async.muxch_STAR_.call(null,inst_12195);
var state_12214__$1 = state_12214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12214__$1,(22),inst_12197,inst_12145);
} else {
if((state_val_12215 === (11))){
var inst_12155 = (state_12214[(14)]);
var inst_12169 = (state_12214[(10)]);
var inst_12169__$1 = cljs.core.seq.call(null,inst_12155);
var state_12214__$1 = (function (){var statearr_12238 = state_12214;
(statearr_12238[(10)] = inst_12169__$1);

return statearr_12238;
})();
if(inst_12169__$1){
var statearr_12239_12279 = state_12214__$1;
(statearr_12239_12279[(1)] = (13));

} else {
var statearr_12240_12280 = state_12214__$1;
(statearr_12240_12280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (9))){
var inst_12191 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
var statearr_12241_12281 = state_12214__$1;
(statearr_12241_12281[(2)] = inst_12191);

(statearr_12241_12281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (5))){
var inst_12152 = cljs.core.deref.call(null,mults);
var inst_12153 = cljs.core.vals.call(null,inst_12152);
var inst_12154 = cljs.core.seq.call(null,inst_12153);
var inst_12155 = inst_12154;
var inst_12156 = null;
var inst_12157 = (0);
var inst_12158 = (0);
var state_12214__$1 = (function (){var statearr_12242 = state_12214;
(statearr_12242[(12)] = inst_12157);

(statearr_12242[(13)] = inst_12156);

(statearr_12242[(14)] = inst_12155);

(statearr_12242[(15)] = inst_12158);

return statearr_12242;
})();
var statearr_12243_12282 = state_12214__$1;
(statearr_12243_12282[(2)] = null);

(statearr_12243_12282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (14))){
var state_12214__$1 = state_12214;
var statearr_12247_12283 = state_12214__$1;
(statearr_12247_12283[(2)] = null);

(statearr_12247_12283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (16))){
var inst_12169 = (state_12214[(10)]);
var inst_12173 = cljs.core.chunk_first.call(null,inst_12169);
var inst_12174 = cljs.core.chunk_rest.call(null,inst_12169);
var inst_12175 = cljs.core.count.call(null,inst_12173);
var inst_12155 = inst_12174;
var inst_12156 = inst_12173;
var inst_12157 = inst_12175;
var inst_12158 = (0);
var state_12214__$1 = (function (){var statearr_12248 = state_12214;
(statearr_12248[(12)] = inst_12157);

(statearr_12248[(13)] = inst_12156);

(statearr_12248[(14)] = inst_12155);

(statearr_12248[(15)] = inst_12158);

return statearr_12248;
})();
var statearr_12249_12284 = state_12214__$1;
(statearr_12249_12284[(2)] = null);

(statearr_12249_12284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (10))){
var inst_12157 = (state_12214[(12)]);
var inst_12156 = (state_12214[(13)]);
var inst_12155 = (state_12214[(14)]);
var inst_12158 = (state_12214[(15)]);
var inst_12163 = cljs.core._nth.call(null,inst_12156,inst_12158);
var inst_12164 = cljs.core.async.muxch_STAR_.call(null,inst_12163);
var inst_12165 = cljs.core.async.close_BANG_.call(null,inst_12164);
var inst_12166 = (inst_12158 + (1));
var tmp12244 = inst_12157;
var tmp12245 = inst_12156;
var tmp12246 = inst_12155;
var inst_12155__$1 = tmp12246;
var inst_12156__$1 = tmp12245;
var inst_12157__$1 = tmp12244;
var inst_12158__$1 = inst_12166;
var state_12214__$1 = (function (){var statearr_12250 = state_12214;
(statearr_12250[(12)] = inst_12157__$1);

(statearr_12250[(13)] = inst_12156__$1);

(statearr_12250[(14)] = inst_12155__$1);

(statearr_12250[(15)] = inst_12158__$1);

(statearr_12250[(17)] = inst_12165);

return statearr_12250;
})();
var statearr_12251_12285 = state_12214__$1;
(statearr_12251_12285[(2)] = null);

(statearr_12251_12285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (18))){
var inst_12184 = (state_12214[(2)]);
var state_12214__$1 = state_12214;
var statearr_12252_12286 = state_12214__$1;
(statearr_12252_12286[(2)] = inst_12184);

(statearr_12252_12286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12215 === (8))){
var inst_12157 = (state_12214[(12)]);
var inst_12158 = (state_12214[(15)]);
var inst_12160 = (inst_12158 < inst_12157);
var inst_12161 = inst_12160;
var state_12214__$1 = state_12214;
if(cljs.core.truth_(inst_12161)){
var statearr_12253_12287 = state_12214__$1;
(statearr_12253_12287[(1)] = (10));

} else {
var statearr_12254_12288 = state_12214__$1;
(statearr_12254_12288[(1)] = (11));

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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12255[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12255[(1)] = (1));

return statearr_12255;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12214){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12256){if((e12256 instanceof Object)){
var ex__10922__auto__ = e12256;
var statearr_12257_12289 = state_12214;
(statearr_12257_12289[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12290 = state_12214;
state_12214 = G__12290;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12258 = f__11014__auto__.call(null);
(statearr_12258[(6)] = c__11013__auto___12260);

return statearr_12258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
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
var G__12292 = arguments.length;
switch (G__12292) {
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
var G__12295 = arguments.length;
switch (G__12295) {
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
var G__12298 = arguments.length;
switch (G__12298) {
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
var c__11013__auto___12365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12337){
var state_val_12338 = (state_12337[(1)]);
if((state_val_12338 === (7))){
var state_12337__$1 = state_12337;
var statearr_12339_12366 = state_12337__$1;
(statearr_12339_12366[(2)] = null);

(statearr_12339_12366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (1))){
var state_12337__$1 = state_12337;
var statearr_12340_12367 = state_12337__$1;
(statearr_12340_12367[(2)] = null);

(statearr_12340_12367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (4))){
var inst_12301 = (state_12337[(7)]);
var inst_12303 = (inst_12301 < cnt);
var state_12337__$1 = state_12337;
if(cljs.core.truth_(inst_12303)){
var statearr_12341_12368 = state_12337__$1;
(statearr_12341_12368[(1)] = (6));

} else {
var statearr_12342_12369 = state_12337__$1;
(statearr_12342_12369[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (15))){
var inst_12333 = (state_12337[(2)]);
var state_12337__$1 = state_12337;
var statearr_12343_12370 = state_12337__$1;
(statearr_12343_12370[(2)] = inst_12333);

(statearr_12343_12370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (13))){
var inst_12326 = cljs.core.async.close_BANG_.call(null,out);
var state_12337__$1 = state_12337;
var statearr_12344_12371 = state_12337__$1;
(statearr_12344_12371[(2)] = inst_12326);

(statearr_12344_12371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (6))){
var state_12337__$1 = state_12337;
var statearr_12345_12372 = state_12337__$1;
(statearr_12345_12372[(2)] = null);

(statearr_12345_12372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (3))){
var inst_12335 = (state_12337[(2)]);
var state_12337__$1 = state_12337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12337__$1,inst_12335);
} else {
if((state_val_12338 === (12))){
var inst_12323 = (state_12337[(8)]);
var inst_12323__$1 = (state_12337[(2)]);
var inst_12324 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12323__$1);
var state_12337__$1 = (function (){var statearr_12346 = state_12337;
(statearr_12346[(8)] = inst_12323__$1);

return statearr_12346;
})();
if(cljs.core.truth_(inst_12324)){
var statearr_12347_12373 = state_12337__$1;
(statearr_12347_12373[(1)] = (13));

} else {
var statearr_12348_12374 = state_12337__$1;
(statearr_12348_12374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (2))){
var inst_12300 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12301 = (0);
var state_12337__$1 = (function (){var statearr_12349 = state_12337;
(statearr_12349[(9)] = inst_12300);

(statearr_12349[(7)] = inst_12301);

return statearr_12349;
})();
var statearr_12350_12375 = state_12337__$1;
(statearr_12350_12375[(2)] = null);

(statearr_12350_12375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (11))){
var inst_12301 = (state_12337[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12337,(10),Object,null,(9));
var inst_12310 = chs__$1.call(null,inst_12301);
var inst_12311 = done.call(null,inst_12301);
var inst_12312 = cljs.core.async.take_BANG_.call(null,inst_12310,inst_12311);
var state_12337__$1 = state_12337;
var statearr_12351_12376 = state_12337__$1;
(statearr_12351_12376[(2)] = inst_12312);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12337__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (9))){
var inst_12301 = (state_12337[(7)]);
var inst_12314 = (state_12337[(2)]);
var inst_12315 = (inst_12301 + (1));
var inst_12301__$1 = inst_12315;
var state_12337__$1 = (function (){var statearr_12352 = state_12337;
(statearr_12352[(10)] = inst_12314);

(statearr_12352[(7)] = inst_12301__$1);

return statearr_12352;
})();
var statearr_12353_12377 = state_12337__$1;
(statearr_12353_12377[(2)] = null);

(statearr_12353_12377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (5))){
var inst_12321 = (state_12337[(2)]);
var state_12337__$1 = (function (){var statearr_12354 = state_12337;
(statearr_12354[(11)] = inst_12321);

return statearr_12354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12337__$1,(12),dchan);
} else {
if((state_val_12338 === (14))){
var inst_12323 = (state_12337[(8)]);
var inst_12328 = cljs.core.apply.call(null,f,inst_12323);
var state_12337__$1 = state_12337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12337__$1,(16),out,inst_12328);
} else {
if((state_val_12338 === (16))){
var inst_12330 = (state_12337[(2)]);
var state_12337__$1 = (function (){var statearr_12355 = state_12337;
(statearr_12355[(12)] = inst_12330);

return statearr_12355;
})();
var statearr_12356_12378 = state_12337__$1;
(statearr_12356_12378[(2)] = null);

(statearr_12356_12378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (10))){
var inst_12305 = (state_12337[(2)]);
var inst_12306 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12337__$1 = (function (){var statearr_12357 = state_12337;
(statearr_12357[(13)] = inst_12305);

return statearr_12357;
})();
var statearr_12358_12379 = state_12337__$1;
(statearr_12358_12379[(2)] = inst_12306);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12337__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12338 === (8))){
var inst_12319 = (state_12337[(2)]);
var state_12337__$1 = state_12337;
var statearr_12359_12380 = state_12337__$1;
(statearr_12359_12380[(2)] = inst_12319);

(statearr_12359_12380[(1)] = (5));


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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12360[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12360[(1)] = (1));

return statearr_12360;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12337){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12361){if((e12361 instanceof Object)){
var ex__10922__auto__ = e12361;
var statearr_12362_12381 = state_12337;
(statearr_12362_12381[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12382 = state_12337;
state_12337 = G__12382;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12363 = f__11014__auto__.call(null);
(statearr_12363[(6)] = c__11013__auto___12365);

return statearr_12363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
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
var G__12385 = arguments.length;
switch (G__12385) {
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
var c__11013__auto___12439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12417){
var state_val_12418 = (state_12417[(1)]);
if((state_val_12418 === (7))){
var inst_12397 = (state_12417[(7)]);
var inst_12396 = (state_12417[(8)]);
var inst_12396__$1 = (state_12417[(2)]);
var inst_12397__$1 = cljs.core.nth.call(null,inst_12396__$1,(0),null);
var inst_12398 = cljs.core.nth.call(null,inst_12396__$1,(1),null);
var inst_12399 = (inst_12397__$1 == null);
var state_12417__$1 = (function (){var statearr_12419 = state_12417;
(statearr_12419[(7)] = inst_12397__$1);

(statearr_12419[(8)] = inst_12396__$1);

(statearr_12419[(9)] = inst_12398);

return statearr_12419;
})();
if(cljs.core.truth_(inst_12399)){
var statearr_12420_12440 = state_12417__$1;
(statearr_12420_12440[(1)] = (8));

} else {
var statearr_12421_12441 = state_12417__$1;
(statearr_12421_12441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (1))){
var inst_12386 = cljs.core.vec.call(null,chs);
var inst_12387 = inst_12386;
var state_12417__$1 = (function (){var statearr_12422 = state_12417;
(statearr_12422[(10)] = inst_12387);

return statearr_12422;
})();
var statearr_12423_12442 = state_12417__$1;
(statearr_12423_12442[(2)] = null);

(statearr_12423_12442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (4))){
var inst_12387 = (state_12417[(10)]);
var state_12417__$1 = state_12417;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12417__$1,(7),inst_12387);
} else {
if((state_val_12418 === (6))){
var inst_12413 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12424_12443 = state_12417__$1;
(statearr_12424_12443[(2)] = inst_12413);

(statearr_12424_12443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (3))){
var inst_12415 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12417__$1,inst_12415);
} else {
if((state_val_12418 === (2))){
var inst_12387 = (state_12417[(10)]);
var inst_12389 = cljs.core.count.call(null,inst_12387);
var inst_12390 = (inst_12389 > (0));
var state_12417__$1 = state_12417;
if(cljs.core.truth_(inst_12390)){
var statearr_12426_12444 = state_12417__$1;
(statearr_12426_12444[(1)] = (4));

} else {
var statearr_12427_12445 = state_12417__$1;
(statearr_12427_12445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (11))){
var inst_12387 = (state_12417[(10)]);
var inst_12406 = (state_12417[(2)]);
var tmp12425 = inst_12387;
var inst_12387__$1 = tmp12425;
var state_12417__$1 = (function (){var statearr_12428 = state_12417;
(statearr_12428[(11)] = inst_12406);

(statearr_12428[(10)] = inst_12387__$1);

return statearr_12428;
})();
var statearr_12429_12446 = state_12417__$1;
(statearr_12429_12446[(2)] = null);

(statearr_12429_12446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (9))){
var inst_12397 = (state_12417[(7)]);
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12417__$1,(11),out,inst_12397);
} else {
if((state_val_12418 === (5))){
var inst_12411 = cljs.core.async.close_BANG_.call(null,out);
var state_12417__$1 = state_12417;
var statearr_12430_12447 = state_12417__$1;
(statearr_12430_12447[(2)] = inst_12411);

(statearr_12430_12447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (10))){
var inst_12409 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12431_12448 = state_12417__$1;
(statearr_12431_12448[(2)] = inst_12409);

(statearr_12431_12448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (8))){
var inst_12397 = (state_12417[(7)]);
var inst_12396 = (state_12417[(8)]);
var inst_12398 = (state_12417[(9)]);
var inst_12387 = (state_12417[(10)]);
var inst_12401 = (function (){var cs = inst_12387;
var vec__12392 = inst_12396;
var v = inst_12397;
var c = inst_12398;
return (function (p1__12383_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12383_SHARP_);
});
})();
var inst_12402 = cljs.core.filterv.call(null,inst_12401,inst_12387);
var inst_12387__$1 = inst_12402;
var state_12417__$1 = (function (){var statearr_12432 = state_12417;
(statearr_12432[(10)] = inst_12387__$1);

return statearr_12432;
})();
var statearr_12433_12449 = state_12417__$1;
(statearr_12433_12449[(2)] = null);

(statearr_12433_12449[(1)] = (2));


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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12434 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12434[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12434[(1)] = (1));

return statearr_12434;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12417){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12435){if((e12435 instanceof Object)){
var ex__10922__auto__ = e12435;
var statearr_12436_12450 = state_12417;
(statearr_12436_12450[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12451 = state_12417;
state_12417 = G__12451;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12437 = f__11014__auto__.call(null);
(statearr_12437[(6)] = c__11013__auto___12439);

return statearr_12437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
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
var G__12453 = arguments.length;
switch (G__12453) {
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
var c__11013__auto___12498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12477){
var state_val_12478 = (state_12477[(1)]);
if((state_val_12478 === (7))){
var inst_12459 = (state_12477[(7)]);
var inst_12459__$1 = (state_12477[(2)]);
var inst_12460 = (inst_12459__$1 == null);
var inst_12461 = cljs.core.not.call(null,inst_12460);
var state_12477__$1 = (function (){var statearr_12479 = state_12477;
(statearr_12479[(7)] = inst_12459__$1);

return statearr_12479;
})();
if(inst_12461){
var statearr_12480_12499 = state_12477__$1;
(statearr_12480_12499[(1)] = (8));

} else {
var statearr_12481_12500 = state_12477__$1;
(statearr_12481_12500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (1))){
var inst_12454 = (0);
var state_12477__$1 = (function (){var statearr_12482 = state_12477;
(statearr_12482[(8)] = inst_12454);

return statearr_12482;
})();
var statearr_12483_12501 = state_12477__$1;
(statearr_12483_12501[(2)] = null);

(statearr_12483_12501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (4))){
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12477__$1,(7),ch);
} else {
if((state_val_12478 === (6))){
var inst_12472 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12484_12502 = state_12477__$1;
(statearr_12484_12502[(2)] = inst_12472);

(statearr_12484_12502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (3))){
var inst_12474 = (state_12477[(2)]);
var inst_12475 = cljs.core.async.close_BANG_.call(null,out);
var state_12477__$1 = (function (){var statearr_12485 = state_12477;
(statearr_12485[(9)] = inst_12474);

return statearr_12485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12477__$1,inst_12475);
} else {
if((state_val_12478 === (2))){
var inst_12454 = (state_12477[(8)]);
var inst_12456 = (inst_12454 < n);
var state_12477__$1 = state_12477;
if(cljs.core.truth_(inst_12456)){
var statearr_12486_12503 = state_12477__$1;
(statearr_12486_12503[(1)] = (4));

} else {
var statearr_12487_12504 = state_12477__$1;
(statearr_12487_12504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (11))){
var inst_12454 = (state_12477[(8)]);
var inst_12464 = (state_12477[(2)]);
var inst_12465 = (inst_12454 + (1));
var inst_12454__$1 = inst_12465;
var state_12477__$1 = (function (){var statearr_12488 = state_12477;
(statearr_12488[(10)] = inst_12464);

(statearr_12488[(8)] = inst_12454__$1);

return statearr_12488;
})();
var statearr_12489_12505 = state_12477__$1;
(statearr_12489_12505[(2)] = null);

(statearr_12489_12505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (9))){
var state_12477__$1 = state_12477;
var statearr_12490_12506 = state_12477__$1;
(statearr_12490_12506[(2)] = null);

(statearr_12490_12506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (5))){
var state_12477__$1 = state_12477;
var statearr_12491_12507 = state_12477__$1;
(statearr_12491_12507[(2)] = null);

(statearr_12491_12507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (10))){
var inst_12469 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12492_12508 = state_12477__$1;
(statearr_12492_12508[(2)] = inst_12469);

(statearr_12492_12508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (8))){
var inst_12459 = (state_12477[(7)]);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12477__$1,(11),out,inst_12459);
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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12493[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12493[(1)] = (1));

return statearr_12493;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12477){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12494){if((e12494 instanceof Object)){
var ex__10922__auto__ = e12494;
var statearr_12495_12509 = state_12477;
(statearr_12495_12509[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12510 = state_12477;
state_12477 = G__12510;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12496 = f__11014__auto__.call(null);
(statearr_12496[(6)] = c__11013__auto___12498);

return statearr_12496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12512 = (function (f,ch,meta12513){
this.f = f;
this.ch = ch;
this.meta12513 = meta12513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12514,meta12513__$1){
var self__ = this;
var _12514__$1 = this;
return (new cljs.core.async.t_cljs$core$async12512(self__.f,self__.ch,meta12513__$1));
}));

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12514){
var self__ = this;
var _12514__$1 = this;
return self__.meta12513;
}));

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12515 = (function (f,ch,meta12513,_,fn1,meta12516){
this.f = f;
this.ch = ch;
this.meta12513 = meta12513;
this._ = _;
this.fn1 = fn1;
this.meta12516 = meta12516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12517,meta12516__$1){
var self__ = this;
var _12517__$1 = this;
return (new cljs.core.async.t_cljs$core$async12515(self__.f,self__.ch,self__.meta12513,self__._,self__.fn1,meta12516__$1));
}));

(cljs.core.async.t_cljs$core$async12515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12517){
var self__ = this;
var _12517__$1 = this;
return self__.meta12516;
}));

(cljs.core.async.t_cljs$core$async12515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12511_SHARP_){
return f1.call(null,(((p1__12511_SHARP_ == null))?null:self__.f.call(null,p1__12511_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12513","meta12513",1227975759,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12512","cljs.core.async/t_cljs$core$async12512",673109693,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12516","meta12516",1256931743,null)], null);
}));

(cljs.core.async.t_cljs$core$async12515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12515");

(cljs.core.async.t_cljs$core$async12515.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12515.
 */
cljs.core.async.__GT_t_cljs$core$async12515 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12515(f__$1,ch__$1,meta12513__$1,___$2,fn1__$1,meta12516){
return (new cljs.core.async.t_cljs$core$async12515(f__$1,ch__$1,meta12513__$1,___$2,fn1__$1,meta12516));
});

}

return (new cljs.core.async.t_cljs$core$async12515(self__.f,self__.ch,self__.meta12513,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12512.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12513","meta12513",1227975759,null)], null);
}));

(cljs.core.async.t_cljs$core$async12512.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12512");

(cljs.core.async.t_cljs$core$async12512.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12512");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12512.
 */
cljs.core.async.__GT_t_cljs$core$async12512 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12512(f__$1,ch__$1,meta12513){
return (new cljs.core.async.t_cljs$core$async12512(f__$1,ch__$1,meta12513));
});

}

return (new cljs.core.async.t_cljs$core$async12512(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12518 = (function (f,ch,meta12519){
this.f = f;
this.ch = ch;
this.meta12519 = meta12519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12520,meta12519__$1){
var self__ = this;
var _12520__$1 = this;
return (new cljs.core.async.t_cljs$core$async12518(self__.f,self__.ch,meta12519__$1));
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12520){
var self__ = this;
var _12520__$1 = this;
return self__.meta12519;
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async12518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12519","meta12519",-6231805,null)], null);
}));

(cljs.core.async.t_cljs$core$async12518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12518");

(cljs.core.async.t_cljs$core$async12518.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12518.
 */
cljs.core.async.__GT_t_cljs$core$async12518 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12518(f__$1,ch__$1,meta12519){
return (new cljs.core.async.t_cljs$core$async12518(f__$1,ch__$1,meta12519));
});

}

return (new cljs.core.async.t_cljs$core$async12518(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12521 = (function (p,ch,meta12522){
this.p = p;
this.ch = ch;
this.meta12522 = meta12522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12523,meta12522__$1){
var self__ = this;
var _12523__$1 = this;
return (new cljs.core.async.t_cljs$core$async12521(self__.p,self__.ch,meta12522__$1));
}));

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12523){
var self__ = this;
var _12523__$1 = this;
return self__.meta12522;
}));

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12522","meta12522",-1374606833,null)], null);
}));

(cljs.core.async.t_cljs$core$async12521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12521");

(cljs.core.async.t_cljs$core$async12521.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async12521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12521.
 */
cljs.core.async.__GT_t_cljs$core$async12521 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12521(p__$1,ch__$1,meta12522){
return (new cljs.core.async.t_cljs$core$async12521(p__$1,ch__$1,meta12522));
});

}

return (new cljs.core.async.t_cljs$core$async12521(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12525 = arguments.length;
switch (G__12525) {
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
var c__11013__auto___12565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12546){
var state_val_12547 = (state_12546[(1)]);
if((state_val_12547 === (7))){
var inst_12542 = (state_12546[(2)]);
var state_12546__$1 = state_12546;
var statearr_12548_12566 = state_12546__$1;
(statearr_12548_12566[(2)] = inst_12542);

(statearr_12548_12566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (1))){
var state_12546__$1 = state_12546;
var statearr_12549_12567 = state_12546__$1;
(statearr_12549_12567[(2)] = null);

(statearr_12549_12567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (4))){
var inst_12528 = (state_12546[(7)]);
var inst_12528__$1 = (state_12546[(2)]);
var inst_12529 = (inst_12528__$1 == null);
var state_12546__$1 = (function (){var statearr_12550 = state_12546;
(statearr_12550[(7)] = inst_12528__$1);

return statearr_12550;
})();
if(cljs.core.truth_(inst_12529)){
var statearr_12551_12568 = state_12546__$1;
(statearr_12551_12568[(1)] = (5));

} else {
var statearr_12552_12569 = state_12546__$1;
(statearr_12552_12569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (6))){
var inst_12528 = (state_12546[(7)]);
var inst_12533 = p.call(null,inst_12528);
var state_12546__$1 = state_12546;
if(cljs.core.truth_(inst_12533)){
var statearr_12553_12570 = state_12546__$1;
(statearr_12553_12570[(1)] = (8));

} else {
var statearr_12554_12571 = state_12546__$1;
(statearr_12554_12571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (3))){
var inst_12544 = (state_12546[(2)]);
var state_12546__$1 = state_12546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12546__$1,inst_12544);
} else {
if((state_val_12547 === (2))){
var state_12546__$1 = state_12546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12546__$1,(4),ch);
} else {
if((state_val_12547 === (11))){
var inst_12536 = (state_12546[(2)]);
var state_12546__$1 = state_12546;
var statearr_12555_12572 = state_12546__$1;
(statearr_12555_12572[(2)] = inst_12536);

(statearr_12555_12572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (9))){
var state_12546__$1 = state_12546;
var statearr_12556_12573 = state_12546__$1;
(statearr_12556_12573[(2)] = null);

(statearr_12556_12573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (5))){
var inst_12531 = cljs.core.async.close_BANG_.call(null,out);
var state_12546__$1 = state_12546;
var statearr_12557_12574 = state_12546__$1;
(statearr_12557_12574[(2)] = inst_12531);

(statearr_12557_12574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (10))){
var inst_12539 = (state_12546[(2)]);
var state_12546__$1 = (function (){var statearr_12558 = state_12546;
(statearr_12558[(8)] = inst_12539);

return statearr_12558;
})();
var statearr_12559_12575 = state_12546__$1;
(statearr_12559_12575[(2)] = null);

(statearr_12559_12575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12547 === (8))){
var inst_12528 = (state_12546[(7)]);
var state_12546__$1 = state_12546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12546__$1,(11),out,inst_12528);
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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12560 = [null,null,null,null,null,null,null,null,null];
(statearr_12560[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12560[(1)] = (1));

return statearr_12560;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12546){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12561){if((e12561 instanceof Object)){
var ex__10922__auto__ = e12561;
var statearr_12562_12576 = state_12546;
(statearr_12562_12576[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12577 = state_12546;
state_12546 = G__12577;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12563 = f__11014__auto__.call(null);
(statearr_12563[(6)] = c__11013__auto___12565);

return statearr_12563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12579 = arguments.length;
switch (G__12579) {
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
var c__11013__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12642){
var state_val_12643 = (state_12642[(1)]);
if((state_val_12643 === (7))){
var inst_12638 = (state_12642[(2)]);
var state_12642__$1 = state_12642;
var statearr_12644_12682 = state_12642__$1;
(statearr_12644_12682[(2)] = inst_12638);

(statearr_12644_12682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (20))){
var inst_12608 = (state_12642[(7)]);
var inst_12619 = (state_12642[(2)]);
var inst_12620 = cljs.core.next.call(null,inst_12608);
var inst_12594 = inst_12620;
var inst_12595 = null;
var inst_12596 = (0);
var inst_12597 = (0);
var state_12642__$1 = (function (){var statearr_12645 = state_12642;
(statearr_12645[(8)] = inst_12594);

(statearr_12645[(9)] = inst_12597);

(statearr_12645[(10)] = inst_12595);

(statearr_12645[(11)] = inst_12619);

(statearr_12645[(12)] = inst_12596);

return statearr_12645;
})();
var statearr_12646_12683 = state_12642__$1;
(statearr_12646_12683[(2)] = null);

(statearr_12646_12683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (1))){
var state_12642__$1 = state_12642;
var statearr_12647_12684 = state_12642__$1;
(statearr_12647_12684[(2)] = null);

(statearr_12647_12684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (4))){
var inst_12583 = (state_12642[(13)]);
var inst_12583__$1 = (state_12642[(2)]);
var inst_12584 = (inst_12583__$1 == null);
var state_12642__$1 = (function (){var statearr_12648 = state_12642;
(statearr_12648[(13)] = inst_12583__$1);

return statearr_12648;
})();
if(cljs.core.truth_(inst_12584)){
var statearr_12649_12685 = state_12642__$1;
(statearr_12649_12685[(1)] = (5));

} else {
var statearr_12650_12686 = state_12642__$1;
(statearr_12650_12686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (15))){
var state_12642__$1 = state_12642;
var statearr_12654_12687 = state_12642__$1;
(statearr_12654_12687[(2)] = null);

(statearr_12654_12687[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (21))){
var state_12642__$1 = state_12642;
var statearr_12655_12688 = state_12642__$1;
(statearr_12655_12688[(2)] = null);

(statearr_12655_12688[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (13))){
var inst_12594 = (state_12642[(8)]);
var inst_12597 = (state_12642[(9)]);
var inst_12595 = (state_12642[(10)]);
var inst_12596 = (state_12642[(12)]);
var inst_12604 = (state_12642[(2)]);
var inst_12605 = (inst_12597 + (1));
var tmp12651 = inst_12594;
var tmp12652 = inst_12595;
var tmp12653 = inst_12596;
var inst_12594__$1 = tmp12651;
var inst_12595__$1 = tmp12652;
var inst_12596__$1 = tmp12653;
var inst_12597__$1 = inst_12605;
var state_12642__$1 = (function (){var statearr_12656 = state_12642;
(statearr_12656[(8)] = inst_12594__$1);

(statearr_12656[(9)] = inst_12597__$1);

(statearr_12656[(10)] = inst_12595__$1);

(statearr_12656[(12)] = inst_12596__$1);

(statearr_12656[(14)] = inst_12604);

return statearr_12656;
})();
var statearr_12657_12689 = state_12642__$1;
(statearr_12657_12689[(2)] = null);

(statearr_12657_12689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (22))){
var state_12642__$1 = state_12642;
var statearr_12658_12690 = state_12642__$1;
(statearr_12658_12690[(2)] = null);

(statearr_12658_12690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (6))){
var inst_12583 = (state_12642[(13)]);
var inst_12592 = f.call(null,inst_12583);
var inst_12593 = cljs.core.seq.call(null,inst_12592);
var inst_12594 = inst_12593;
var inst_12595 = null;
var inst_12596 = (0);
var inst_12597 = (0);
var state_12642__$1 = (function (){var statearr_12659 = state_12642;
(statearr_12659[(8)] = inst_12594);

(statearr_12659[(9)] = inst_12597);

(statearr_12659[(10)] = inst_12595);

(statearr_12659[(12)] = inst_12596);

return statearr_12659;
})();
var statearr_12660_12691 = state_12642__$1;
(statearr_12660_12691[(2)] = null);

(statearr_12660_12691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (17))){
var inst_12608 = (state_12642[(7)]);
var inst_12612 = cljs.core.chunk_first.call(null,inst_12608);
var inst_12613 = cljs.core.chunk_rest.call(null,inst_12608);
var inst_12614 = cljs.core.count.call(null,inst_12612);
var inst_12594 = inst_12613;
var inst_12595 = inst_12612;
var inst_12596 = inst_12614;
var inst_12597 = (0);
var state_12642__$1 = (function (){var statearr_12661 = state_12642;
(statearr_12661[(8)] = inst_12594);

(statearr_12661[(9)] = inst_12597);

(statearr_12661[(10)] = inst_12595);

(statearr_12661[(12)] = inst_12596);

return statearr_12661;
})();
var statearr_12662_12692 = state_12642__$1;
(statearr_12662_12692[(2)] = null);

(statearr_12662_12692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (3))){
var inst_12640 = (state_12642[(2)]);
var state_12642__$1 = state_12642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12642__$1,inst_12640);
} else {
if((state_val_12643 === (12))){
var inst_12628 = (state_12642[(2)]);
var state_12642__$1 = state_12642;
var statearr_12663_12693 = state_12642__$1;
(statearr_12663_12693[(2)] = inst_12628);

(statearr_12663_12693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (2))){
var state_12642__$1 = state_12642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12642__$1,(4),in$);
} else {
if((state_val_12643 === (23))){
var inst_12636 = (state_12642[(2)]);
var state_12642__$1 = state_12642;
var statearr_12664_12694 = state_12642__$1;
(statearr_12664_12694[(2)] = inst_12636);

(statearr_12664_12694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (19))){
var inst_12623 = (state_12642[(2)]);
var state_12642__$1 = state_12642;
var statearr_12665_12695 = state_12642__$1;
(statearr_12665_12695[(2)] = inst_12623);

(statearr_12665_12695[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (11))){
var inst_12594 = (state_12642[(8)]);
var inst_12608 = (state_12642[(7)]);
var inst_12608__$1 = cljs.core.seq.call(null,inst_12594);
var state_12642__$1 = (function (){var statearr_12666 = state_12642;
(statearr_12666[(7)] = inst_12608__$1);

return statearr_12666;
})();
if(inst_12608__$1){
var statearr_12667_12696 = state_12642__$1;
(statearr_12667_12696[(1)] = (14));

} else {
var statearr_12668_12697 = state_12642__$1;
(statearr_12668_12697[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (9))){
var inst_12630 = (state_12642[(2)]);
var inst_12631 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12642__$1 = (function (){var statearr_12669 = state_12642;
(statearr_12669[(15)] = inst_12630);

return statearr_12669;
})();
if(cljs.core.truth_(inst_12631)){
var statearr_12670_12698 = state_12642__$1;
(statearr_12670_12698[(1)] = (21));

} else {
var statearr_12671_12699 = state_12642__$1;
(statearr_12671_12699[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (5))){
var inst_12586 = cljs.core.async.close_BANG_.call(null,out);
var state_12642__$1 = state_12642;
var statearr_12672_12700 = state_12642__$1;
(statearr_12672_12700[(2)] = inst_12586);

(statearr_12672_12700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (14))){
var inst_12608 = (state_12642[(7)]);
var inst_12610 = cljs.core.chunked_seq_QMARK_.call(null,inst_12608);
var state_12642__$1 = state_12642;
if(inst_12610){
var statearr_12673_12701 = state_12642__$1;
(statearr_12673_12701[(1)] = (17));

} else {
var statearr_12674_12702 = state_12642__$1;
(statearr_12674_12702[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (16))){
var inst_12626 = (state_12642[(2)]);
var state_12642__$1 = state_12642;
var statearr_12675_12703 = state_12642__$1;
(statearr_12675_12703[(2)] = inst_12626);

(statearr_12675_12703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12643 === (10))){
var inst_12597 = (state_12642[(9)]);
var inst_12595 = (state_12642[(10)]);
var inst_12602 = cljs.core._nth.call(null,inst_12595,inst_12597);
var state_12642__$1 = state_12642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12642__$1,(13),out,inst_12602);
} else {
if((state_val_12643 === (18))){
var inst_12608 = (state_12642[(7)]);
var inst_12617 = cljs.core.first.call(null,inst_12608);
var state_12642__$1 = state_12642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12642__$1,(20),out,inst_12617);
} else {
if((state_val_12643 === (8))){
var inst_12597 = (state_12642[(9)]);
var inst_12596 = (state_12642[(12)]);
var inst_12599 = (inst_12597 < inst_12596);
var inst_12600 = inst_12599;
var state_12642__$1 = state_12642;
if(cljs.core.truth_(inst_12600)){
var statearr_12676_12704 = state_12642__$1;
(statearr_12676_12704[(1)] = (10));

} else {
var statearr_12677_12705 = state_12642__$1;
(statearr_12677_12705[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____0 = (function (){
var statearr_12678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12678[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__);

(statearr_12678[(1)] = (1));

return statearr_12678;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____1 = (function (state_12642){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12679){if((e12679 instanceof Object)){
var ex__10922__auto__ = e12679;
var statearr_12680_12706 = state_12642;
(statearr_12680_12706[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12707 = state_12642;
state_12642 = G__12707;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__ = function(state_12642){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____1.call(this,state_12642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10919__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12681 = f__11014__auto__.call(null);
(statearr_12681[(6)] = c__11013__auto__);

return statearr_12681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));

return c__11013__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12709 = arguments.length;
switch (G__12709) {
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
var G__12712 = arguments.length;
switch (G__12712) {
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
var G__12715 = arguments.length;
switch (G__12715) {
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
var c__11013__auto___12762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12739){
var state_val_12740 = (state_12739[(1)]);
if((state_val_12740 === (7))){
var inst_12734 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12741_12763 = state_12739__$1;
(statearr_12741_12763[(2)] = inst_12734);

(statearr_12741_12763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (1))){
var inst_12716 = null;
var state_12739__$1 = (function (){var statearr_12742 = state_12739;
(statearr_12742[(7)] = inst_12716);

return statearr_12742;
})();
var statearr_12743_12764 = state_12739__$1;
(statearr_12743_12764[(2)] = null);

(statearr_12743_12764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (4))){
var inst_12719 = (state_12739[(8)]);
var inst_12719__$1 = (state_12739[(2)]);
var inst_12720 = (inst_12719__$1 == null);
var inst_12721 = cljs.core.not.call(null,inst_12720);
var state_12739__$1 = (function (){var statearr_12744 = state_12739;
(statearr_12744[(8)] = inst_12719__$1);

return statearr_12744;
})();
if(inst_12721){
var statearr_12745_12765 = state_12739__$1;
(statearr_12745_12765[(1)] = (5));

} else {
var statearr_12746_12766 = state_12739__$1;
(statearr_12746_12766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (6))){
var state_12739__$1 = state_12739;
var statearr_12747_12767 = state_12739__$1;
(statearr_12747_12767[(2)] = null);

(statearr_12747_12767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (3))){
var inst_12736 = (state_12739[(2)]);
var inst_12737 = cljs.core.async.close_BANG_.call(null,out);
var state_12739__$1 = (function (){var statearr_12748 = state_12739;
(statearr_12748[(9)] = inst_12736);

return statearr_12748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12739__$1,inst_12737);
} else {
if((state_val_12740 === (2))){
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12739__$1,(4),ch);
} else {
if((state_val_12740 === (11))){
var inst_12719 = (state_12739[(8)]);
var inst_12728 = (state_12739[(2)]);
var inst_12716 = inst_12719;
var state_12739__$1 = (function (){var statearr_12749 = state_12739;
(statearr_12749[(10)] = inst_12728);

(statearr_12749[(7)] = inst_12716);

return statearr_12749;
})();
var statearr_12750_12768 = state_12739__$1;
(statearr_12750_12768[(2)] = null);

(statearr_12750_12768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (9))){
var inst_12719 = (state_12739[(8)]);
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12739__$1,(11),out,inst_12719);
} else {
if((state_val_12740 === (5))){
var inst_12719 = (state_12739[(8)]);
var inst_12716 = (state_12739[(7)]);
var inst_12723 = cljs.core._EQ_.call(null,inst_12719,inst_12716);
var state_12739__$1 = state_12739;
if(inst_12723){
var statearr_12752_12769 = state_12739__$1;
(statearr_12752_12769[(1)] = (8));

} else {
var statearr_12753_12770 = state_12739__$1;
(statearr_12753_12770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (10))){
var inst_12731 = (state_12739[(2)]);
var state_12739__$1 = state_12739;
var statearr_12754_12771 = state_12739__$1;
(statearr_12754_12771[(2)] = inst_12731);

(statearr_12754_12771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12740 === (8))){
var inst_12716 = (state_12739[(7)]);
var tmp12751 = inst_12716;
var inst_12716__$1 = tmp12751;
var state_12739__$1 = (function (){var statearr_12755 = state_12739;
(statearr_12755[(7)] = inst_12716__$1);

return statearr_12755;
})();
var statearr_12756_12772 = state_12739__$1;
(statearr_12756_12772[(2)] = null);

(statearr_12756_12772[(1)] = (2));


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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12757[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12757[(1)] = (1));

return statearr_12757;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12739){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12758){if((e12758 instanceof Object)){
var ex__10922__auto__ = e12758;
var statearr_12759_12773 = state_12739;
(statearr_12759_12773[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12774 = state_12739;
state_12739 = G__12774;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12760 = f__11014__auto__.call(null);
(statearr_12760[(6)] = c__11013__auto___12762);

return statearr_12760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12776 = arguments.length;
switch (G__12776) {
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
var c__11013__auto___12842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12814){
var state_val_12815 = (state_12814[(1)]);
if((state_val_12815 === (7))){
var inst_12810 = (state_12814[(2)]);
var state_12814__$1 = state_12814;
var statearr_12816_12843 = state_12814__$1;
(statearr_12816_12843[(2)] = inst_12810);

(statearr_12816_12843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (1))){
var inst_12777 = (new Array(n));
var inst_12778 = inst_12777;
var inst_12779 = (0);
var state_12814__$1 = (function (){var statearr_12817 = state_12814;
(statearr_12817[(7)] = inst_12778);

(statearr_12817[(8)] = inst_12779);

return statearr_12817;
})();
var statearr_12818_12844 = state_12814__$1;
(statearr_12818_12844[(2)] = null);

(statearr_12818_12844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (4))){
var inst_12782 = (state_12814[(9)]);
var inst_12782__$1 = (state_12814[(2)]);
var inst_12783 = (inst_12782__$1 == null);
var inst_12784 = cljs.core.not.call(null,inst_12783);
var state_12814__$1 = (function (){var statearr_12819 = state_12814;
(statearr_12819[(9)] = inst_12782__$1);

return statearr_12819;
})();
if(inst_12784){
var statearr_12820_12845 = state_12814__$1;
(statearr_12820_12845[(1)] = (5));

} else {
var statearr_12821_12846 = state_12814__$1;
(statearr_12821_12846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (15))){
var inst_12804 = (state_12814[(2)]);
var state_12814__$1 = state_12814;
var statearr_12822_12847 = state_12814__$1;
(statearr_12822_12847[(2)] = inst_12804);

(statearr_12822_12847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (13))){
var state_12814__$1 = state_12814;
var statearr_12823_12848 = state_12814__$1;
(statearr_12823_12848[(2)] = null);

(statearr_12823_12848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (6))){
var inst_12779 = (state_12814[(8)]);
var inst_12800 = (inst_12779 > (0));
var state_12814__$1 = state_12814;
if(cljs.core.truth_(inst_12800)){
var statearr_12824_12849 = state_12814__$1;
(statearr_12824_12849[(1)] = (12));

} else {
var statearr_12825_12850 = state_12814__$1;
(statearr_12825_12850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (3))){
var inst_12812 = (state_12814[(2)]);
var state_12814__$1 = state_12814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12814__$1,inst_12812);
} else {
if((state_val_12815 === (12))){
var inst_12778 = (state_12814[(7)]);
var inst_12802 = cljs.core.vec.call(null,inst_12778);
var state_12814__$1 = state_12814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12814__$1,(15),out,inst_12802);
} else {
if((state_val_12815 === (2))){
var state_12814__$1 = state_12814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12814__$1,(4),ch);
} else {
if((state_val_12815 === (11))){
var inst_12794 = (state_12814[(2)]);
var inst_12795 = (new Array(n));
var inst_12778 = inst_12795;
var inst_12779 = (0);
var state_12814__$1 = (function (){var statearr_12826 = state_12814;
(statearr_12826[(7)] = inst_12778);

(statearr_12826[(8)] = inst_12779);

(statearr_12826[(10)] = inst_12794);

return statearr_12826;
})();
var statearr_12827_12851 = state_12814__$1;
(statearr_12827_12851[(2)] = null);

(statearr_12827_12851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (9))){
var inst_12778 = (state_12814[(7)]);
var inst_12792 = cljs.core.vec.call(null,inst_12778);
var state_12814__$1 = state_12814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12814__$1,(11),out,inst_12792);
} else {
if((state_val_12815 === (5))){
var inst_12787 = (state_12814[(11)]);
var inst_12778 = (state_12814[(7)]);
var inst_12779 = (state_12814[(8)]);
var inst_12782 = (state_12814[(9)]);
var inst_12786 = (inst_12778[inst_12779] = inst_12782);
var inst_12787__$1 = (inst_12779 + (1));
var inst_12788 = (inst_12787__$1 < n);
var state_12814__$1 = (function (){var statearr_12828 = state_12814;
(statearr_12828[(12)] = inst_12786);

(statearr_12828[(11)] = inst_12787__$1);

return statearr_12828;
})();
if(cljs.core.truth_(inst_12788)){
var statearr_12829_12852 = state_12814__$1;
(statearr_12829_12852[(1)] = (8));

} else {
var statearr_12830_12853 = state_12814__$1;
(statearr_12830_12853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (14))){
var inst_12807 = (state_12814[(2)]);
var inst_12808 = cljs.core.async.close_BANG_.call(null,out);
var state_12814__$1 = (function (){var statearr_12832 = state_12814;
(statearr_12832[(13)] = inst_12807);

return statearr_12832;
})();
var statearr_12833_12854 = state_12814__$1;
(statearr_12833_12854[(2)] = inst_12808);

(statearr_12833_12854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (10))){
var inst_12798 = (state_12814[(2)]);
var state_12814__$1 = state_12814;
var statearr_12834_12855 = state_12814__$1;
(statearr_12834_12855[(2)] = inst_12798);

(statearr_12834_12855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12815 === (8))){
var inst_12787 = (state_12814[(11)]);
var inst_12778 = (state_12814[(7)]);
var tmp12831 = inst_12778;
var inst_12778__$1 = tmp12831;
var inst_12779 = inst_12787;
var state_12814__$1 = (function (){var statearr_12835 = state_12814;
(statearr_12835[(7)] = inst_12778__$1);

(statearr_12835[(8)] = inst_12779);

return statearr_12835;
})();
var statearr_12836_12856 = state_12814__$1;
(statearr_12836_12856[(2)] = null);

(statearr_12836_12856[(1)] = (2));


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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12837[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12837[(1)] = (1));

return statearr_12837;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12814){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12838){if((e12838 instanceof Object)){
var ex__10922__auto__ = e12838;
var statearr_12839_12857 = state_12814;
(statearr_12839_12857[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12858 = state_12814;
state_12814 = G__12858;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12840 = f__11014__auto__.call(null);
(statearr_12840[(6)] = c__11013__auto___12842);

return statearr_12840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12860 = arguments.length;
switch (G__12860) {
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
var c__11013__auto___12930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11014__auto__ = (function (){var switch__10918__auto__ = (function (state_12902){
var state_val_12903 = (state_12902[(1)]);
if((state_val_12903 === (7))){
var inst_12898 = (state_12902[(2)]);
var state_12902__$1 = state_12902;
var statearr_12904_12931 = state_12902__$1;
(statearr_12904_12931[(2)] = inst_12898);

(statearr_12904_12931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (1))){
var inst_12861 = [];
var inst_12862 = inst_12861;
var inst_12863 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12902__$1 = (function (){var statearr_12905 = state_12902;
(statearr_12905[(7)] = inst_12862);

(statearr_12905[(8)] = inst_12863);

return statearr_12905;
})();
var statearr_12906_12932 = state_12902__$1;
(statearr_12906_12932[(2)] = null);

(statearr_12906_12932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (4))){
var inst_12866 = (state_12902[(9)]);
var inst_12866__$1 = (state_12902[(2)]);
var inst_12867 = (inst_12866__$1 == null);
var inst_12868 = cljs.core.not.call(null,inst_12867);
var state_12902__$1 = (function (){var statearr_12907 = state_12902;
(statearr_12907[(9)] = inst_12866__$1);

return statearr_12907;
})();
if(inst_12868){
var statearr_12908_12933 = state_12902__$1;
(statearr_12908_12933[(1)] = (5));

} else {
var statearr_12909_12934 = state_12902__$1;
(statearr_12909_12934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (15))){
var inst_12892 = (state_12902[(2)]);
var state_12902__$1 = state_12902;
var statearr_12910_12935 = state_12902__$1;
(statearr_12910_12935[(2)] = inst_12892);

(statearr_12910_12935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (13))){
var state_12902__$1 = state_12902;
var statearr_12911_12936 = state_12902__$1;
(statearr_12911_12936[(2)] = null);

(statearr_12911_12936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (6))){
var inst_12862 = (state_12902[(7)]);
var inst_12887 = inst_12862.length;
var inst_12888 = (inst_12887 > (0));
var state_12902__$1 = state_12902;
if(cljs.core.truth_(inst_12888)){
var statearr_12912_12937 = state_12902__$1;
(statearr_12912_12937[(1)] = (12));

} else {
var statearr_12913_12938 = state_12902__$1;
(statearr_12913_12938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (3))){
var inst_12900 = (state_12902[(2)]);
var state_12902__$1 = state_12902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12902__$1,inst_12900);
} else {
if((state_val_12903 === (12))){
var inst_12862 = (state_12902[(7)]);
var inst_12890 = cljs.core.vec.call(null,inst_12862);
var state_12902__$1 = state_12902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12902__$1,(15),out,inst_12890);
} else {
if((state_val_12903 === (2))){
var state_12902__$1 = state_12902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12902__$1,(4),ch);
} else {
if((state_val_12903 === (11))){
var inst_12870 = (state_12902[(10)]);
var inst_12866 = (state_12902[(9)]);
var inst_12880 = (state_12902[(2)]);
var inst_12881 = [];
var inst_12882 = inst_12881.push(inst_12866);
var inst_12862 = inst_12881;
var inst_12863 = inst_12870;
var state_12902__$1 = (function (){var statearr_12914 = state_12902;
(statearr_12914[(11)] = inst_12882);

(statearr_12914[(7)] = inst_12862);

(statearr_12914[(12)] = inst_12880);

(statearr_12914[(8)] = inst_12863);

return statearr_12914;
})();
var statearr_12915_12939 = state_12902__$1;
(statearr_12915_12939[(2)] = null);

(statearr_12915_12939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (9))){
var inst_12862 = (state_12902[(7)]);
var inst_12878 = cljs.core.vec.call(null,inst_12862);
var state_12902__$1 = state_12902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12902__$1,(11),out,inst_12878);
} else {
if((state_val_12903 === (5))){
var inst_12870 = (state_12902[(10)]);
var inst_12863 = (state_12902[(8)]);
var inst_12866 = (state_12902[(9)]);
var inst_12870__$1 = f.call(null,inst_12866);
var inst_12871 = cljs.core._EQ_.call(null,inst_12870__$1,inst_12863);
var inst_12872 = cljs.core.keyword_identical_QMARK_.call(null,inst_12863,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12873 = ((inst_12871) || (inst_12872));
var state_12902__$1 = (function (){var statearr_12916 = state_12902;
(statearr_12916[(10)] = inst_12870__$1);

return statearr_12916;
})();
if(cljs.core.truth_(inst_12873)){
var statearr_12917_12940 = state_12902__$1;
(statearr_12917_12940[(1)] = (8));

} else {
var statearr_12918_12941 = state_12902__$1;
(statearr_12918_12941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (14))){
var inst_12895 = (state_12902[(2)]);
var inst_12896 = cljs.core.async.close_BANG_.call(null,out);
var state_12902__$1 = (function (){var statearr_12920 = state_12902;
(statearr_12920[(13)] = inst_12895);

return statearr_12920;
})();
var statearr_12921_12942 = state_12902__$1;
(statearr_12921_12942[(2)] = inst_12896);

(statearr_12921_12942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (10))){
var inst_12885 = (state_12902[(2)]);
var state_12902__$1 = state_12902;
var statearr_12922_12943 = state_12902__$1;
(statearr_12922_12943[(2)] = inst_12885);

(statearr_12922_12943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12903 === (8))){
var inst_12862 = (state_12902[(7)]);
var inst_12870 = (state_12902[(10)]);
var inst_12866 = (state_12902[(9)]);
var inst_12875 = inst_12862.push(inst_12866);
var tmp12919 = inst_12862;
var inst_12862__$1 = tmp12919;
var inst_12863 = inst_12870;
var state_12902__$1 = (function (){var statearr_12923 = state_12902;
(statearr_12923[(7)] = inst_12862__$1);

(statearr_12923[(8)] = inst_12863);

(statearr_12923[(14)] = inst_12875);

return statearr_12923;
})();
var statearr_12924_12944 = state_12902__$1;
(statearr_12924_12944[(2)] = null);

(statearr_12924_12944[(1)] = (2));


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
var cljs$core$async$state_machine__10919__auto__ = null;
var cljs$core$async$state_machine__10919__auto____0 = (function (){
var statearr_12925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12925[(0)] = cljs$core$async$state_machine__10919__auto__);

(statearr_12925[(1)] = (1));

return statearr_12925;
});
var cljs$core$async$state_machine__10919__auto____1 = (function (state_12902){
while(true){
var ret_value__10920__auto__ = (function (){try{while(true){
var result__10921__auto__ = switch__10918__auto__.call(null,state_12902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10921__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10921__auto__;
}
break;
}
}catch (e12926){if((e12926 instanceof Object)){
var ex__10922__auto__ = e12926;
var statearr_12927_12945 = state_12902;
(statearr_12927_12945[(5)] = ex__10922__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10920__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12946 = state_12902;
state_12902 = G__12946;
continue;
} else {
return ret_value__10920__auto__;
}
break;
}
});
cljs$core$async$state_machine__10919__auto__ = function(state_12902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10919__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10919__auto____1.call(this,state_12902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10919__auto____0;
cljs$core$async$state_machine__10919__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10919__auto____1;
return cljs$core$async$state_machine__10919__auto__;
})()
})();
var state__11015__auto__ = (function (){var statearr_12928 = f__11014__auto__.call(null);
(statearr_12928[(6)] = c__11013__auto___12930);

return statearr_12928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11015__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
