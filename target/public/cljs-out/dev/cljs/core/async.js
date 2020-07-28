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
var G__18897 = arguments.length;
switch (G__18897) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18898 = (function (f,blockable,meta18899){
this.f = f;
this.blockable = blockable;
this.meta18899 = meta18899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18900,meta18899__$1){
var self__ = this;
var _18900__$1 = this;
return (new cljs.core.async.t_cljs$core$async18898(self__.f,self__.blockable,meta18899__$1));
}));

(cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18900){
var self__ = this;
var _18900__$1 = this;
return self__.meta18899;
}));

(cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18899","meta18899",-805309970,null)], null);
}));

(cljs.core.async.t_cljs$core$async18898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18898");

(cljs.core.async.t_cljs$core$async18898.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18898.
 */
cljs.core.async.__GT_t_cljs$core$async18898 = (function cljs$core$async$__GT_t_cljs$core$async18898(f__$1,blockable__$1,meta18899){
return (new cljs.core.async.t_cljs$core$async18898(f__$1,blockable__$1,meta18899));
});

}

return (new cljs.core.async.t_cljs$core$async18898(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18904 = arguments.length;
switch (G__18904) {
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
var G__18907 = arguments.length;
switch (G__18907) {
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
var G__18910 = arguments.length;
switch (G__18910) {
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
var val_18912 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18912);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_18912);
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
var G__18914 = arguments.length;
switch (G__18914) {
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
var n__4613__auto___18916 = n;
var x_18917 = (0);
while(true){
if((x_18917 < n__4613__auto___18916)){
(a[x_18917] = (0));

var G__18918 = (x_18917 + (1));
x_18917 = G__18918;
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

var G__18919 = (i + (1));
i = G__18919;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18920 = (function (flag,meta18921){
this.flag = flag;
this.meta18921 = meta18921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18922,meta18921__$1){
var self__ = this;
var _18922__$1 = this;
return (new cljs.core.async.t_cljs$core$async18920(self__.flag,meta18921__$1));
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18922){
var self__ = this;
var _18922__$1 = this;
return self__.meta18921;
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18921","meta18921",1224308330,null)], null);
}));

(cljs.core.async.t_cljs$core$async18920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18920");

(cljs.core.async.t_cljs$core$async18920.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18920.
 */
cljs.core.async.__GT_t_cljs$core$async18920 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18920(flag__$1,meta18921){
return (new cljs.core.async.t_cljs$core$async18920(flag__$1,meta18921));
});

}

return (new cljs.core.async.t_cljs$core$async18920(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18923 = (function (flag,cb,meta18924){
this.flag = flag;
this.cb = cb;
this.meta18924 = meta18924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18925,meta18924__$1){
var self__ = this;
var _18925__$1 = this;
return (new cljs.core.async.t_cljs$core$async18923(self__.flag,self__.cb,meta18924__$1));
}));

(cljs.core.async.t_cljs$core$async18923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18925){
var self__ = this;
var _18925__$1 = this;
return self__.meta18924;
}));

(cljs.core.async.t_cljs$core$async18923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async18923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18924","meta18924",-966127513,null)], null);
}));

(cljs.core.async.t_cljs$core$async18923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18923");

(cljs.core.async.t_cljs$core$async18923.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18923.
 */
cljs.core.async.__GT_t_cljs$core$async18923 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18923(flag__$1,cb__$1,meta18924){
return (new cljs.core.async.t_cljs$core$async18923(flag__$1,cb__$1,meta18924));
});

}

return (new cljs.core.async.t_cljs$core$async18923(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18926_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18926_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18927_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18927_SHARP_,port], null));
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
var G__18928 = (i + (1));
i = G__18928;
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
var len__4736__auto___18934 = arguments.length;
var i__4737__auto___18935 = (0);
while(true){
if((i__4737__auto___18935 < len__4736__auto___18934)){
args__4742__auto__.push((arguments[i__4737__auto___18935]));

var G__18936 = (i__4737__auto___18935 + (1));
i__4737__auto___18935 = G__18936;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18931){
var map__18932 = p__18931;
var map__18932__$1 = (((((!((map__18932 == null))))?(((((map__18932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18932):map__18932);
var opts = map__18932__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18929){
var G__18930 = cljs.core.first.call(null,seq18929);
var seq18929__$1 = cljs.core.next.call(null,seq18929);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18930,seq18929__$1);
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
var G__18938 = arguments.length;
switch (G__18938) {
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
var c__16960__auto___18984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_18962){
var state_val_18963 = (state_18962[(1)]);
if((state_val_18963 === (7))){
var inst_18958 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18964_18985 = state_18962__$1;
(statearr_18964_18985[(2)] = inst_18958);

(statearr_18964_18985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (1))){
var state_18962__$1 = state_18962;
var statearr_18965_18986 = state_18962__$1;
(statearr_18965_18986[(2)] = null);

(statearr_18965_18986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (4))){
var inst_18941 = (state_18962[(7)]);
var inst_18941__$1 = (state_18962[(2)]);
var inst_18942 = (inst_18941__$1 == null);
var state_18962__$1 = (function (){var statearr_18966 = state_18962;
(statearr_18966[(7)] = inst_18941__$1);

return statearr_18966;
})();
if(cljs.core.truth_(inst_18942)){
var statearr_18967_18987 = state_18962__$1;
(statearr_18967_18987[(1)] = (5));

} else {
var statearr_18968_18988 = state_18962__$1;
(statearr_18968_18988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (13))){
var state_18962__$1 = state_18962;
var statearr_18969_18989 = state_18962__$1;
(statearr_18969_18989[(2)] = null);

(statearr_18969_18989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (6))){
var inst_18941 = (state_18962[(7)]);
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18962__$1,(11),to,inst_18941);
} else {
if((state_val_18963 === (3))){
var inst_18960 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18962__$1,inst_18960);
} else {
if((state_val_18963 === (12))){
var state_18962__$1 = state_18962;
var statearr_18970_18990 = state_18962__$1;
(statearr_18970_18990[(2)] = null);

(statearr_18970_18990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (2))){
var state_18962__$1 = state_18962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18962__$1,(4),from);
} else {
if((state_val_18963 === (11))){
var inst_18951 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
if(cljs.core.truth_(inst_18951)){
var statearr_18971_18991 = state_18962__$1;
(statearr_18971_18991[(1)] = (12));

} else {
var statearr_18972_18992 = state_18962__$1;
(statearr_18972_18992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (9))){
var state_18962__$1 = state_18962;
var statearr_18973_18993 = state_18962__$1;
(statearr_18973_18993[(2)] = null);

(statearr_18973_18993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (5))){
var state_18962__$1 = state_18962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18974_18994 = state_18962__$1;
(statearr_18974_18994[(1)] = (8));

} else {
var statearr_18975_18995 = state_18962__$1;
(statearr_18975_18995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (14))){
var inst_18956 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18976_18996 = state_18962__$1;
(statearr_18976_18996[(2)] = inst_18956);

(statearr_18976_18996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (10))){
var inst_18948 = (state_18962[(2)]);
var state_18962__$1 = state_18962;
var statearr_18977_18997 = state_18962__$1;
(statearr_18977_18997[(2)] = inst_18948);

(statearr_18977_18997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18963 === (8))){
var inst_18945 = cljs.core.async.close_BANG_.call(null,to);
var state_18962__$1 = state_18962;
var statearr_18978_18998 = state_18962__$1;
(statearr_18978_18998[(2)] = inst_18945);

(statearr_18978_18998[(1)] = (10));


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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_18979 = [null,null,null,null,null,null,null,null];
(statearr_18979[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_18979[(1)] = (1));

return statearr_18979;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_18962){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_18962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e18980){if((e18980 instanceof Object)){
var ex__16797__auto__ = e18980;
var statearr_18981_18999 = state_18962;
(statearr_18981_18999[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19000 = state_18962;
state_18962 = G__19000;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_18962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_18962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_18982 = f__16961__auto__.call(null);
(statearr_18982[(6)] = c__16960__auto___18984);

return statearr_18982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
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
var process = (function (p__19001){
var vec__19002 = p__19001;
var v = cljs.core.nth.call(null,vec__19002,(0),null);
var p = cljs.core.nth.call(null,vec__19002,(1),null);
var job = vec__19002;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16960__auto___19173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19009){
var state_val_19010 = (state_19009[(1)]);
if((state_val_19010 === (1))){
var state_19009__$1 = state_19009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19009__$1,(2),res,v);
} else {
if((state_val_19010 === (2))){
var inst_19006 = (state_19009[(2)]);
var inst_19007 = cljs.core.async.close_BANG_.call(null,res);
var state_19009__$1 = (function (){var statearr_19011 = state_19009;
(statearr_19011[(7)] = inst_19006);

return statearr_19011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19009__$1,inst_19007);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0 = (function (){
var statearr_19012 = [null,null,null,null,null,null,null,null];
(statearr_19012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__);

(statearr_19012[(1)] = (1));

return statearr_19012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1 = (function (state_19009){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19013){if((e19013 instanceof Object)){
var ex__16797__auto__ = e19013;
var statearr_19014_19174 = state_19009;
(statearr_19014_19174[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19175 = state_19009;
state_19009 = G__19175;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = function(state_19009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1.call(this,state_19009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19015 = f__16961__auto__.call(null);
(statearr_19015[(6)] = c__16960__auto___19173);

return statearr_19015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__19016){
var vec__19017 = p__19016;
var v = cljs.core.nth.call(null,vec__19017,(0),null);
var p = cljs.core.nth.call(null,vec__19017,(1),null);
var job = vec__19017;
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
var n__4613__auto___19176 = n;
var __19177 = (0);
while(true){
if((__19177 < n__4613__auto___19176)){
var G__19020_19178 = type;
var G__19020_19179__$1 = (((G__19020_19178 instanceof cljs.core.Keyword))?G__19020_19178.fqn:null);
switch (G__19020_19179__$1) {
case "compute":
var c__16960__auto___19181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19177,c__16960__auto___19181,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async){
return (function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = ((function (__19177,c__16960__auto___19181,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async){
return (function (state_19033){
var state_val_19034 = (state_19033[(1)]);
if((state_val_19034 === (1))){
var state_19033__$1 = state_19033;
var statearr_19035_19182 = state_19033__$1;
(statearr_19035_19182[(2)] = null);

(statearr_19035_19182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (2))){
var state_19033__$1 = state_19033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19033__$1,(4),jobs);
} else {
if((state_val_19034 === (3))){
var inst_19031 = (state_19033[(2)]);
var state_19033__$1 = state_19033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19033__$1,inst_19031);
} else {
if((state_val_19034 === (4))){
var inst_19023 = (state_19033[(2)]);
var inst_19024 = process.call(null,inst_19023);
var state_19033__$1 = state_19033;
if(cljs.core.truth_(inst_19024)){
var statearr_19036_19183 = state_19033__$1;
(statearr_19036_19183[(1)] = (5));

} else {
var statearr_19037_19184 = state_19033__$1;
(statearr_19037_19184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (5))){
var state_19033__$1 = state_19033;
var statearr_19038_19185 = state_19033__$1;
(statearr_19038_19185[(2)] = null);

(statearr_19038_19185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (6))){
var state_19033__$1 = state_19033;
var statearr_19039_19186 = state_19033__$1;
(statearr_19039_19186[(2)] = null);

(statearr_19039_19186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19034 === (7))){
var inst_19029 = (state_19033[(2)]);
var state_19033__$1 = state_19033;
var statearr_19040_19187 = state_19033__$1;
(statearr_19040_19187[(2)] = inst_19029);

(statearr_19040_19187[(1)] = (3));


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
});})(__19177,c__16960__auto___19181,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async))
;
return ((function (__19177,switch__16793__auto__,c__16960__auto___19181,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0 = (function (){
var statearr_19041 = [null,null,null,null,null,null,null];
(statearr_19041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__);

(statearr_19041[(1)] = (1));

return statearr_19041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1 = (function (state_19033){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19042){if((e19042 instanceof Object)){
var ex__16797__auto__ = e19042;
var statearr_19043_19188 = state_19033;
(statearr_19043_19188[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19189 = state_19033;
state_19033 = G__19189;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = function(state_19033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1.call(this,state_19033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__;
})()
;})(__19177,switch__16793__auto__,c__16960__auto___19181,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async))
})();
var state__16962__auto__ = (function (){var statearr_19044 = f__16961__auto__.call(null);
(statearr_19044[(6)] = c__16960__auto___19181);

return statearr_19044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
});})(__19177,c__16960__auto___19181,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async))
);


break;
case "async":
var c__16960__auto___19190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19177,c__16960__auto___19190,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async){
return (function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = ((function (__19177,c__16960__auto___19190,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async){
return (function (state_19057){
var state_val_19058 = (state_19057[(1)]);
if((state_val_19058 === (1))){
var state_19057__$1 = state_19057;
var statearr_19059_19191 = state_19057__$1;
(statearr_19059_19191[(2)] = null);

(statearr_19059_19191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (2))){
var state_19057__$1 = state_19057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19057__$1,(4),jobs);
} else {
if((state_val_19058 === (3))){
var inst_19055 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19057__$1,inst_19055);
} else {
if((state_val_19058 === (4))){
var inst_19047 = (state_19057[(2)]);
var inst_19048 = async.call(null,inst_19047);
var state_19057__$1 = state_19057;
if(cljs.core.truth_(inst_19048)){
var statearr_19060_19192 = state_19057__$1;
(statearr_19060_19192[(1)] = (5));

} else {
var statearr_19061_19193 = state_19057__$1;
(statearr_19061_19193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (5))){
var state_19057__$1 = state_19057;
var statearr_19062_19194 = state_19057__$1;
(statearr_19062_19194[(2)] = null);

(statearr_19062_19194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (6))){
var state_19057__$1 = state_19057;
var statearr_19063_19195 = state_19057__$1;
(statearr_19063_19195[(2)] = null);

(statearr_19063_19195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19058 === (7))){
var inst_19053 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
var statearr_19064_19196 = state_19057__$1;
(statearr_19064_19196[(2)] = inst_19053);

(statearr_19064_19196[(1)] = (3));


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
});})(__19177,c__16960__auto___19190,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async))
;
return ((function (__19177,switch__16793__auto__,c__16960__auto___19190,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0 = (function (){
var statearr_19065 = [null,null,null,null,null,null,null];
(statearr_19065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__);

(statearr_19065[(1)] = (1));

return statearr_19065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1 = (function (state_19057){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19066){if((e19066 instanceof Object)){
var ex__16797__auto__ = e19066;
var statearr_19067_19197 = state_19057;
(statearr_19067_19197[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19198 = state_19057;
state_19057 = G__19198;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = function(state_19057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1.call(this,state_19057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__;
})()
;})(__19177,switch__16793__auto__,c__16960__auto___19190,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async))
})();
var state__16962__auto__ = (function (){var statearr_19068 = f__16961__auto__.call(null);
(statearr_19068[(6)] = c__16960__auto___19190);

return statearr_19068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
});})(__19177,c__16960__auto___19190,G__19020_19178,G__19020_19179__$1,n__4613__auto___19176,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19020_19179__$1)].join('')));

}

var G__19199 = (__19177 + (1));
__19177 = G__19199;
continue;
} else {
}
break;
}

var c__16960__auto___19200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19090){
var state_val_19091 = (state_19090[(1)]);
if((state_val_19091 === (7))){
var inst_19086 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
var statearr_19092_19201 = state_19090__$1;
(statearr_19092_19201[(2)] = inst_19086);

(statearr_19092_19201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19091 === (1))){
var state_19090__$1 = state_19090;
var statearr_19093_19202 = state_19090__$1;
(statearr_19093_19202[(2)] = null);

(statearr_19093_19202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19091 === (4))){
var inst_19071 = (state_19090[(7)]);
var inst_19071__$1 = (state_19090[(2)]);
var inst_19072 = (inst_19071__$1 == null);
var state_19090__$1 = (function (){var statearr_19094 = state_19090;
(statearr_19094[(7)] = inst_19071__$1);

return statearr_19094;
})();
if(cljs.core.truth_(inst_19072)){
var statearr_19095_19203 = state_19090__$1;
(statearr_19095_19203[(1)] = (5));

} else {
var statearr_19096_19204 = state_19090__$1;
(statearr_19096_19204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19091 === (6))){
var inst_19071 = (state_19090[(7)]);
var inst_19076 = (state_19090[(8)]);
var inst_19076__$1 = cljs.core.async.chan.call(null,(1));
var inst_19077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19078 = [inst_19071,inst_19076__$1];
var inst_19079 = (new cljs.core.PersistentVector(null,2,(5),inst_19077,inst_19078,null));
var state_19090__$1 = (function (){var statearr_19097 = state_19090;
(statearr_19097[(8)] = inst_19076__$1);

return statearr_19097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19090__$1,(8),jobs,inst_19079);
} else {
if((state_val_19091 === (3))){
var inst_19088 = (state_19090[(2)]);
var state_19090__$1 = state_19090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19090__$1,inst_19088);
} else {
if((state_val_19091 === (2))){
var state_19090__$1 = state_19090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19090__$1,(4),from);
} else {
if((state_val_19091 === (9))){
var inst_19083 = (state_19090[(2)]);
var state_19090__$1 = (function (){var statearr_19098 = state_19090;
(statearr_19098[(9)] = inst_19083);

return statearr_19098;
})();
var statearr_19099_19205 = state_19090__$1;
(statearr_19099_19205[(2)] = null);

(statearr_19099_19205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19091 === (5))){
var inst_19074 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19090__$1 = state_19090;
var statearr_19100_19206 = state_19090__$1;
(statearr_19100_19206[(2)] = inst_19074);

(statearr_19100_19206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19091 === (8))){
var inst_19076 = (state_19090[(8)]);
var inst_19081 = (state_19090[(2)]);
var state_19090__$1 = (function (){var statearr_19101 = state_19090;
(statearr_19101[(10)] = inst_19081);

return statearr_19101;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19090__$1,(9),results,inst_19076);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0 = (function (){
var statearr_19102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__);

(statearr_19102[(1)] = (1));

return statearr_19102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1 = (function (state_19090){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19103){if((e19103 instanceof Object)){
var ex__16797__auto__ = e19103;
var statearr_19104_19207 = state_19090;
(statearr_19104_19207[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19208 = state_19090;
state_19090 = G__19208;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = function(state_19090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1.call(this,state_19090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19105 = f__16961__auto__.call(null);
(statearr_19105[(6)] = c__16960__auto___19200);

return statearr_19105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));


var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19143){
var state_val_19144 = (state_19143[(1)]);
if((state_val_19144 === (7))){
var inst_19139 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
var statearr_19145_19209 = state_19143__$1;
(statearr_19145_19209[(2)] = inst_19139);

(statearr_19145_19209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (20))){
var state_19143__$1 = state_19143;
var statearr_19146_19210 = state_19143__$1;
(statearr_19146_19210[(2)] = null);

(statearr_19146_19210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (1))){
var state_19143__$1 = state_19143;
var statearr_19147_19211 = state_19143__$1;
(statearr_19147_19211[(2)] = null);

(statearr_19147_19211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (4))){
var inst_19108 = (state_19143[(7)]);
var inst_19108__$1 = (state_19143[(2)]);
var inst_19109 = (inst_19108__$1 == null);
var state_19143__$1 = (function (){var statearr_19148 = state_19143;
(statearr_19148[(7)] = inst_19108__$1);

return statearr_19148;
})();
if(cljs.core.truth_(inst_19109)){
var statearr_19149_19212 = state_19143__$1;
(statearr_19149_19212[(1)] = (5));

} else {
var statearr_19150_19213 = state_19143__$1;
(statearr_19150_19213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (15))){
var inst_19121 = (state_19143[(8)]);
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19143__$1,(18),to,inst_19121);
} else {
if((state_val_19144 === (21))){
var inst_19134 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
var statearr_19151_19214 = state_19143__$1;
(statearr_19151_19214[(2)] = inst_19134);

(statearr_19151_19214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (13))){
var inst_19136 = (state_19143[(2)]);
var state_19143__$1 = (function (){var statearr_19152 = state_19143;
(statearr_19152[(9)] = inst_19136);

return statearr_19152;
})();
var statearr_19153_19215 = state_19143__$1;
(statearr_19153_19215[(2)] = null);

(statearr_19153_19215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (6))){
var inst_19108 = (state_19143[(7)]);
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19143__$1,(11),inst_19108);
} else {
if((state_val_19144 === (17))){
var inst_19129 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
if(cljs.core.truth_(inst_19129)){
var statearr_19154_19216 = state_19143__$1;
(statearr_19154_19216[(1)] = (19));

} else {
var statearr_19155_19217 = state_19143__$1;
(statearr_19155_19217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (3))){
var inst_19141 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19143__$1,inst_19141);
} else {
if((state_val_19144 === (12))){
var inst_19118 = (state_19143[(10)]);
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19143__$1,(14),inst_19118);
} else {
if((state_val_19144 === (2))){
var state_19143__$1 = state_19143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19143__$1,(4),results);
} else {
if((state_val_19144 === (19))){
var state_19143__$1 = state_19143;
var statearr_19156_19218 = state_19143__$1;
(statearr_19156_19218[(2)] = null);

(statearr_19156_19218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (11))){
var inst_19118 = (state_19143[(2)]);
var state_19143__$1 = (function (){var statearr_19157 = state_19143;
(statearr_19157[(10)] = inst_19118);

return statearr_19157;
})();
var statearr_19158_19219 = state_19143__$1;
(statearr_19158_19219[(2)] = null);

(statearr_19158_19219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (9))){
var state_19143__$1 = state_19143;
var statearr_19159_19220 = state_19143__$1;
(statearr_19159_19220[(2)] = null);

(statearr_19159_19220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (5))){
var state_19143__$1 = state_19143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19160_19221 = state_19143__$1;
(statearr_19160_19221[(1)] = (8));

} else {
var statearr_19161_19222 = state_19143__$1;
(statearr_19161_19222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (14))){
var inst_19121 = (state_19143[(8)]);
var inst_19121__$1 = (state_19143[(2)]);
var inst_19122 = (inst_19121__$1 == null);
var inst_19123 = cljs.core.not.call(null,inst_19122);
var state_19143__$1 = (function (){var statearr_19162 = state_19143;
(statearr_19162[(8)] = inst_19121__$1);

return statearr_19162;
})();
if(inst_19123){
var statearr_19163_19223 = state_19143__$1;
(statearr_19163_19223[(1)] = (15));

} else {
var statearr_19164_19224 = state_19143__$1;
(statearr_19164_19224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (16))){
var state_19143__$1 = state_19143;
var statearr_19165_19225 = state_19143__$1;
(statearr_19165_19225[(2)] = false);

(statearr_19165_19225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (10))){
var inst_19115 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
var statearr_19166_19226 = state_19143__$1;
(statearr_19166_19226[(2)] = inst_19115);

(statearr_19166_19226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (18))){
var inst_19126 = (state_19143[(2)]);
var state_19143__$1 = state_19143;
var statearr_19167_19227 = state_19143__$1;
(statearr_19167_19227[(2)] = inst_19126);

(statearr_19167_19227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19144 === (8))){
var inst_19112 = cljs.core.async.close_BANG_.call(null,to);
var state_19143__$1 = state_19143;
var statearr_19168_19228 = state_19143__$1;
(statearr_19168_19228[(2)] = inst_19112);

(statearr_19168_19228[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0 = (function (){
var statearr_19169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__);

(statearr_19169[(1)] = (1));

return statearr_19169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1 = (function (state_19143){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19170){if((e19170 instanceof Object)){
var ex__16797__auto__ = e19170;
var statearr_19171_19229 = state_19143;
(statearr_19171_19229[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19230 = state_19143;
state_19143 = G__19230;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__ = function(state_19143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1.call(this,state_19143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16794__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19172 = f__16961__auto__.call(null);
(statearr_19172[(6)] = c__16960__auto__);

return statearr_19172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
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
var G__19232 = arguments.length;
switch (G__19232) {
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
var G__19235 = arguments.length;
switch (G__19235) {
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
var G__19238 = arguments.length;
switch (G__19238) {
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
var c__16960__auto___19287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19264){
var state_val_19265 = (state_19264[(1)]);
if((state_val_19265 === (7))){
var inst_19260 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
var statearr_19266_19288 = state_19264__$1;
(statearr_19266_19288[(2)] = inst_19260);

(statearr_19266_19288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (1))){
var state_19264__$1 = state_19264;
var statearr_19267_19289 = state_19264__$1;
(statearr_19267_19289[(2)] = null);

(statearr_19267_19289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (4))){
var inst_19241 = (state_19264[(7)]);
var inst_19241__$1 = (state_19264[(2)]);
var inst_19242 = (inst_19241__$1 == null);
var state_19264__$1 = (function (){var statearr_19268 = state_19264;
(statearr_19268[(7)] = inst_19241__$1);

return statearr_19268;
})();
if(cljs.core.truth_(inst_19242)){
var statearr_19269_19290 = state_19264__$1;
(statearr_19269_19290[(1)] = (5));

} else {
var statearr_19270_19291 = state_19264__$1;
(statearr_19270_19291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (13))){
var state_19264__$1 = state_19264;
var statearr_19271_19292 = state_19264__$1;
(statearr_19271_19292[(2)] = null);

(statearr_19271_19292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (6))){
var inst_19241 = (state_19264[(7)]);
var inst_19247 = p.call(null,inst_19241);
var state_19264__$1 = state_19264;
if(cljs.core.truth_(inst_19247)){
var statearr_19272_19293 = state_19264__$1;
(statearr_19272_19293[(1)] = (9));

} else {
var statearr_19273_19294 = state_19264__$1;
(statearr_19273_19294[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (3))){
var inst_19262 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19264__$1,inst_19262);
} else {
if((state_val_19265 === (12))){
var state_19264__$1 = state_19264;
var statearr_19274_19295 = state_19264__$1;
(statearr_19274_19295[(2)] = null);

(statearr_19274_19295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (2))){
var state_19264__$1 = state_19264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19264__$1,(4),ch);
} else {
if((state_val_19265 === (11))){
var inst_19241 = (state_19264[(7)]);
var inst_19251 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19264__$1,(8),inst_19251,inst_19241);
} else {
if((state_val_19265 === (9))){
var state_19264__$1 = state_19264;
var statearr_19275_19296 = state_19264__$1;
(statearr_19275_19296[(2)] = tc);

(statearr_19275_19296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (5))){
var inst_19244 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19245 = cljs.core.async.close_BANG_.call(null,fc);
var state_19264__$1 = (function (){var statearr_19276 = state_19264;
(statearr_19276[(8)] = inst_19244);

return statearr_19276;
})();
var statearr_19277_19297 = state_19264__$1;
(statearr_19277_19297[(2)] = inst_19245);

(statearr_19277_19297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (14))){
var inst_19258 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
var statearr_19278_19298 = state_19264__$1;
(statearr_19278_19298[(2)] = inst_19258);

(statearr_19278_19298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (10))){
var state_19264__$1 = state_19264;
var statearr_19279_19299 = state_19264__$1;
(statearr_19279_19299[(2)] = fc);

(statearr_19279_19299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (8))){
var inst_19253 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
if(cljs.core.truth_(inst_19253)){
var statearr_19280_19300 = state_19264__$1;
(statearr_19280_19300[(1)] = (12));

} else {
var statearr_19281_19301 = state_19264__$1;
(statearr_19281_19301[(1)] = (13));

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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_19282 = [null,null,null,null,null,null,null,null,null];
(statearr_19282[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_19282[(1)] = (1));

return statearr_19282;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_19264){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19283){if((e19283 instanceof Object)){
var ex__16797__auto__ = e19283;
var statearr_19284_19302 = state_19264;
(statearr_19284_19302[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19303 = state_19264;
state_19264 = G__19303;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_19264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_19264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19285 = f__16961__auto__.call(null);
(statearr_19285[(6)] = c__16960__auto___19287);

return statearr_19285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
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
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19324){
var state_val_19325 = (state_19324[(1)]);
if((state_val_19325 === (7))){
var inst_19320 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19326_19344 = state_19324__$1;
(statearr_19326_19344[(2)] = inst_19320);

(statearr_19326_19344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (1))){
var inst_19304 = init;
var state_19324__$1 = (function (){var statearr_19327 = state_19324;
(statearr_19327[(7)] = inst_19304);

return statearr_19327;
})();
var statearr_19328_19345 = state_19324__$1;
(statearr_19328_19345[(2)] = null);

(statearr_19328_19345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (4))){
var inst_19307 = (state_19324[(8)]);
var inst_19307__$1 = (state_19324[(2)]);
var inst_19308 = (inst_19307__$1 == null);
var state_19324__$1 = (function (){var statearr_19329 = state_19324;
(statearr_19329[(8)] = inst_19307__$1);

return statearr_19329;
})();
if(cljs.core.truth_(inst_19308)){
var statearr_19330_19346 = state_19324__$1;
(statearr_19330_19346[(1)] = (5));

} else {
var statearr_19331_19347 = state_19324__$1;
(statearr_19331_19347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (6))){
var inst_19311 = (state_19324[(9)]);
var inst_19307 = (state_19324[(8)]);
var inst_19304 = (state_19324[(7)]);
var inst_19311__$1 = f.call(null,inst_19304,inst_19307);
var inst_19312 = cljs.core.reduced_QMARK_.call(null,inst_19311__$1);
var state_19324__$1 = (function (){var statearr_19332 = state_19324;
(statearr_19332[(9)] = inst_19311__$1);

return statearr_19332;
})();
if(inst_19312){
var statearr_19333_19348 = state_19324__$1;
(statearr_19333_19348[(1)] = (8));

} else {
var statearr_19334_19349 = state_19324__$1;
(statearr_19334_19349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (3))){
var inst_19322 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19324__$1,inst_19322);
} else {
if((state_val_19325 === (2))){
var state_19324__$1 = state_19324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19324__$1,(4),ch);
} else {
if((state_val_19325 === (9))){
var inst_19311 = (state_19324[(9)]);
var inst_19304 = inst_19311;
var state_19324__$1 = (function (){var statearr_19335 = state_19324;
(statearr_19335[(7)] = inst_19304);

return statearr_19335;
})();
var statearr_19336_19350 = state_19324__$1;
(statearr_19336_19350[(2)] = null);

(statearr_19336_19350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (5))){
var inst_19304 = (state_19324[(7)]);
var state_19324__$1 = state_19324;
var statearr_19337_19351 = state_19324__$1;
(statearr_19337_19351[(2)] = inst_19304);

(statearr_19337_19351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (10))){
var inst_19318 = (state_19324[(2)]);
var state_19324__$1 = state_19324;
var statearr_19338_19352 = state_19324__$1;
(statearr_19338_19352[(2)] = inst_19318);

(statearr_19338_19352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19325 === (8))){
var inst_19311 = (state_19324[(9)]);
var inst_19314 = cljs.core.deref.call(null,inst_19311);
var state_19324__$1 = state_19324;
var statearr_19339_19353 = state_19324__$1;
(statearr_19339_19353[(2)] = inst_19314);

(statearr_19339_19353[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16794__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16794__auto____0 = (function (){
var statearr_19340 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19340[(0)] = cljs$core$async$reduce_$_state_machine__16794__auto__);

(statearr_19340[(1)] = (1));

return statearr_19340;
});
var cljs$core$async$reduce_$_state_machine__16794__auto____1 = (function (state_19324){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19341){if((e19341 instanceof Object)){
var ex__16797__auto__ = e19341;
var statearr_19342_19354 = state_19324;
(statearr_19342_19354[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19355 = state_19324;
state_19324 = G__19355;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16794__auto__ = function(state_19324){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16794__auto____1.call(this,state_19324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16794__auto____0;
cljs$core$async$reduce_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16794__auto____1;
return cljs$core$async$reduce_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19343 = f__16961__auto__.call(null);
(statearr_19343[(6)] = c__16960__auto__);

return statearr_19343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19361){
var state_val_19362 = (state_19361[(1)]);
if((state_val_19362 === (1))){
var inst_19356 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19361__$1,(2),inst_19356);
} else {
if((state_val_19362 === (2))){
var inst_19358 = (state_19361[(2)]);
var inst_19359 = f__$1.call(null,inst_19358);
var state_19361__$1 = state_19361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19361__$1,inst_19359);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16794__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16794__auto____0 = (function (){
var statearr_19363 = [null,null,null,null,null,null,null];
(statearr_19363[(0)] = cljs$core$async$transduce_$_state_machine__16794__auto__);

(statearr_19363[(1)] = (1));

return statearr_19363;
});
var cljs$core$async$transduce_$_state_machine__16794__auto____1 = (function (state_19361){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19364){if((e19364 instanceof Object)){
var ex__16797__auto__ = e19364;
var statearr_19365_19367 = state_19361;
(statearr_19365_19367[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19368 = state_19361;
state_19361 = G__19368;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16794__auto__ = function(state_19361){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16794__auto____1.call(this,state_19361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16794__auto____0;
cljs$core$async$transduce_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16794__auto____1;
return cljs$core$async$transduce_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19366 = f__16961__auto__.call(null);
(statearr_19366[(6)] = c__16960__auto__);

return statearr_19366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
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
var G__19370 = arguments.length;
switch (G__19370) {
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
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19395){
var state_val_19396 = (state_19395[(1)]);
if((state_val_19396 === (7))){
var inst_19377 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19397_19418 = state_19395__$1;
(statearr_19397_19418[(2)] = inst_19377);

(statearr_19397_19418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (1))){
var inst_19371 = cljs.core.seq.call(null,coll);
var inst_19372 = inst_19371;
var state_19395__$1 = (function (){var statearr_19398 = state_19395;
(statearr_19398[(7)] = inst_19372);

return statearr_19398;
})();
var statearr_19399_19419 = state_19395__$1;
(statearr_19399_19419[(2)] = null);

(statearr_19399_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (4))){
var inst_19372 = (state_19395[(7)]);
var inst_19375 = cljs.core.first.call(null,inst_19372);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19395__$1,(7),ch,inst_19375);
} else {
if((state_val_19396 === (13))){
var inst_19389 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19400_19420 = state_19395__$1;
(statearr_19400_19420[(2)] = inst_19389);

(statearr_19400_19420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (6))){
var inst_19380 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
if(cljs.core.truth_(inst_19380)){
var statearr_19401_19421 = state_19395__$1;
(statearr_19401_19421[(1)] = (8));

} else {
var statearr_19402_19422 = state_19395__$1;
(statearr_19402_19422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (3))){
var inst_19393 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19395__$1,inst_19393);
} else {
if((state_val_19396 === (12))){
var state_19395__$1 = state_19395;
var statearr_19403_19423 = state_19395__$1;
(statearr_19403_19423[(2)] = null);

(statearr_19403_19423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (2))){
var inst_19372 = (state_19395[(7)]);
var state_19395__$1 = state_19395;
if(cljs.core.truth_(inst_19372)){
var statearr_19404_19424 = state_19395__$1;
(statearr_19404_19424[(1)] = (4));

} else {
var statearr_19405_19425 = state_19395__$1;
(statearr_19405_19425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (11))){
var inst_19386 = cljs.core.async.close_BANG_.call(null,ch);
var state_19395__$1 = state_19395;
var statearr_19406_19426 = state_19395__$1;
(statearr_19406_19426[(2)] = inst_19386);

(statearr_19406_19426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (9))){
var state_19395__$1 = state_19395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19407_19427 = state_19395__$1;
(statearr_19407_19427[(1)] = (11));

} else {
var statearr_19408_19428 = state_19395__$1;
(statearr_19408_19428[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (5))){
var inst_19372 = (state_19395[(7)]);
var state_19395__$1 = state_19395;
var statearr_19409_19429 = state_19395__$1;
(statearr_19409_19429[(2)] = inst_19372);

(statearr_19409_19429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (10))){
var inst_19391 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19410_19430 = state_19395__$1;
(statearr_19410_19430[(2)] = inst_19391);

(statearr_19410_19430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (8))){
var inst_19372 = (state_19395[(7)]);
var inst_19382 = cljs.core.next.call(null,inst_19372);
var inst_19372__$1 = inst_19382;
var state_19395__$1 = (function (){var statearr_19411 = state_19395;
(statearr_19411[(7)] = inst_19372__$1);

return statearr_19411;
})();
var statearr_19412_19431 = state_19395__$1;
(statearr_19412_19431[(2)] = null);

(statearr_19412_19431[(1)] = (2));


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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_19413 = [null,null,null,null,null,null,null,null];
(statearr_19413[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_19413[(1)] = (1));

return statearr_19413;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_19395){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19414){if((e19414 instanceof Object)){
var ex__16797__auto__ = e19414;
var statearr_19415_19432 = state_19395;
(statearr_19415_19432[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19433 = state_19395;
state_19395 = G__19433;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_19395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_19395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19416 = f__16961__auto__.call(null);
(statearr_19416[(6)] = c__16960__auto__);

return statearr_19416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19434 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19434.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19435 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19435.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19436 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19436.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19437 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19437.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19438 = (function (ch,cs,meta19439){
this.ch = ch;
this.cs = cs;
this.meta19439 = meta19439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19440,meta19439__$1){
var self__ = this;
var _19440__$1 = this;
return (new cljs.core.async.t_cljs$core$async19438(self__.ch,self__.cs,meta19439__$1));
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19440){
var self__ = this;
var _19440__$1 = this;
return self__.meta19439;
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19438.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19439","meta19439",1639926580,null)], null);
}));

(cljs.core.async.t_cljs$core$async19438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19438");

(cljs.core.async.t_cljs$core$async19438.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19438.
 */
cljs.core.async.__GT_t_cljs$core$async19438 = (function cljs$core$async$mult_$___GT_t_cljs$core$async19438(ch__$1,cs__$1,meta19439){
return (new cljs.core.async.t_cljs$core$async19438(ch__$1,cs__$1,meta19439));
});

}

return (new cljs.core.async.t_cljs$core$async19438(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16960__auto___19660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19575){
var state_val_19576 = (state_19575[(1)]);
if((state_val_19576 === (7))){
var inst_19571 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19577_19661 = state_19575__$1;
(statearr_19577_19661[(2)] = inst_19571);

(statearr_19577_19661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (20))){
var inst_19474 = (state_19575[(7)]);
var inst_19486 = cljs.core.first.call(null,inst_19474);
var inst_19487 = cljs.core.nth.call(null,inst_19486,(0),null);
var inst_19488 = cljs.core.nth.call(null,inst_19486,(1),null);
var state_19575__$1 = (function (){var statearr_19578 = state_19575;
(statearr_19578[(8)] = inst_19487);

return statearr_19578;
})();
if(cljs.core.truth_(inst_19488)){
var statearr_19579_19662 = state_19575__$1;
(statearr_19579_19662[(1)] = (22));

} else {
var statearr_19580_19663 = state_19575__$1;
(statearr_19580_19663[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (27))){
var inst_19523 = (state_19575[(9)]);
var inst_19516 = (state_19575[(10)]);
var inst_19518 = (state_19575[(11)]);
var inst_19443 = (state_19575[(12)]);
var inst_19523__$1 = cljs.core._nth.call(null,inst_19516,inst_19518);
var inst_19524 = cljs.core.async.put_BANG_.call(null,inst_19523__$1,inst_19443,done);
var state_19575__$1 = (function (){var statearr_19581 = state_19575;
(statearr_19581[(9)] = inst_19523__$1);

return statearr_19581;
})();
if(cljs.core.truth_(inst_19524)){
var statearr_19582_19664 = state_19575__$1;
(statearr_19582_19664[(1)] = (30));

} else {
var statearr_19583_19665 = state_19575__$1;
(statearr_19583_19665[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (1))){
var state_19575__$1 = state_19575;
var statearr_19584_19666 = state_19575__$1;
(statearr_19584_19666[(2)] = null);

(statearr_19584_19666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (24))){
var inst_19474 = (state_19575[(7)]);
var inst_19493 = (state_19575[(2)]);
var inst_19494 = cljs.core.next.call(null,inst_19474);
var inst_19452 = inst_19494;
var inst_19453 = null;
var inst_19454 = (0);
var inst_19455 = (0);
var state_19575__$1 = (function (){var statearr_19585 = state_19575;
(statearr_19585[(13)] = inst_19452);

(statearr_19585[(14)] = inst_19453);

(statearr_19585[(15)] = inst_19454);

(statearr_19585[(16)] = inst_19493);

(statearr_19585[(17)] = inst_19455);

return statearr_19585;
})();
var statearr_19586_19667 = state_19575__$1;
(statearr_19586_19667[(2)] = null);

(statearr_19586_19667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (39))){
var state_19575__$1 = state_19575;
var statearr_19590_19668 = state_19575__$1;
(statearr_19590_19668[(2)] = null);

(statearr_19590_19668[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (4))){
var inst_19443 = (state_19575[(12)]);
var inst_19443__$1 = (state_19575[(2)]);
var inst_19444 = (inst_19443__$1 == null);
var state_19575__$1 = (function (){var statearr_19591 = state_19575;
(statearr_19591[(12)] = inst_19443__$1);

return statearr_19591;
})();
if(cljs.core.truth_(inst_19444)){
var statearr_19592_19669 = state_19575__$1;
(statearr_19592_19669[(1)] = (5));

} else {
var statearr_19593_19670 = state_19575__$1;
(statearr_19593_19670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (15))){
var inst_19452 = (state_19575[(13)]);
var inst_19453 = (state_19575[(14)]);
var inst_19454 = (state_19575[(15)]);
var inst_19455 = (state_19575[(17)]);
var inst_19470 = (state_19575[(2)]);
var inst_19471 = (inst_19455 + (1));
var tmp19587 = inst_19452;
var tmp19588 = inst_19453;
var tmp19589 = inst_19454;
var inst_19452__$1 = tmp19587;
var inst_19453__$1 = tmp19588;
var inst_19454__$1 = tmp19589;
var inst_19455__$1 = inst_19471;
var state_19575__$1 = (function (){var statearr_19594 = state_19575;
(statearr_19594[(13)] = inst_19452__$1);

(statearr_19594[(14)] = inst_19453__$1);

(statearr_19594[(15)] = inst_19454__$1);

(statearr_19594[(17)] = inst_19455__$1);

(statearr_19594[(18)] = inst_19470);

return statearr_19594;
})();
var statearr_19595_19671 = state_19575__$1;
(statearr_19595_19671[(2)] = null);

(statearr_19595_19671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (21))){
var inst_19497 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19599_19672 = state_19575__$1;
(statearr_19599_19672[(2)] = inst_19497);

(statearr_19599_19672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (31))){
var inst_19523 = (state_19575[(9)]);
var inst_19527 = done.call(null,null);
var inst_19528 = cljs.core.async.untap_STAR_.call(null,m,inst_19523);
var state_19575__$1 = (function (){var statearr_19600 = state_19575;
(statearr_19600[(19)] = inst_19527);

return statearr_19600;
})();
var statearr_19601_19673 = state_19575__$1;
(statearr_19601_19673[(2)] = inst_19528);

(statearr_19601_19673[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (32))){
var inst_19516 = (state_19575[(10)]);
var inst_19515 = (state_19575[(20)]);
var inst_19518 = (state_19575[(11)]);
var inst_19517 = (state_19575[(21)]);
var inst_19530 = (state_19575[(2)]);
var inst_19531 = (inst_19518 + (1));
var tmp19596 = inst_19516;
var tmp19597 = inst_19515;
var tmp19598 = inst_19517;
var inst_19515__$1 = tmp19597;
var inst_19516__$1 = tmp19596;
var inst_19517__$1 = tmp19598;
var inst_19518__$1 = inst_19531;
var state_19575__$1 = (function (){var statearr_19602 = state_19575;
(statearr_19602[(10)] = inst_19516__$1);

(statearr_19602[(20)] = inst_19515__$1);

(statearr_19602[(22)] = inst_19530);

(statearr_19602[(11)] = inst_19518__$1);

(statearr_19602[(21)] = inst_19517__$1);

return statearr_19602;
})();
var statearr_19603_19674 = state_19575__$1;
(statearr_19603_19674[(2)] = null);

(statearr_19603_19674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (40))){
var inst_19543 = (state_19575[(23)]);
var inst_19547 = done.call(null,null);
var inst_19548 = cljs.core.async.untap_STAR_.call(null,m,inst_19543);
var state_19575__$1 = (function (){var statearr_19604 = state_19575;
(statearr_19604[(24)] = inst_19547);

return statearr_19604;
})();
var statearr_19605_19675 = state_19575__$1;
(statearr_19605_19675[(2)] = inst_19548);

(statearr_19605_19675[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (33))){
var inst_19534 = (state_19575[(25)]);
var inst_19536 = cljs.core.chunked_seq_QMARK_.call(null,inst_19534);
var state_19575__$1 = state_19575;
if(inst_19536){
var statearr_19606_19676 = state_19575__$1;
(statearr_19606_19676[(1)] = (36));

} else {
var statearr_19607_19677 = state_19575__$1;
(statearr_19607_19677[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (13))){
var inst_19464 = (state_19575[(26)]);
var inst_19467 = cljs.core.async.close_BANG_.call(null,inst_19464);
var state_19575__$1 = state_19575;
var statearr_19608_19678 = state_19575__$1;
(statearr_19608_19678[(2)] = inst_19467);

(statearr_19608_19678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (22))){
var inst_19487 = (state_19575[(8)]);
var inst_19490 = cljs.core.async.close_BANG_.call(null,inst_19487);
var state_19575__$1 = state_19575;
var statearr_19609_19679 = state_19575__$1;
(statearr_19609_19679[(2)] = inst_19490);

(statearr_19609_19679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (36))){
var inst_19534 = (state_19575[(25)]);
var inst_19538 = cljs.core.chunk_first.call(null,inst_19534);
var inst_19539 = cljs.core.chunk_rest.call(null,inst_19534);
var inst_19540 = cljs.core.count.call(null,inst_19538);
var inst_19515 = inst_19539;
var inst_19516 = inst_19538;
var inst_19517 = inst_19540;
var inst_19518 = (0);
var state_19575__$1 = (function (){var statearr_19610 = state_19575;
(statearr_19610[(10)] = inst_19516);

(statearr_19610[(20)] = inst_19515);

(statearr_19610[(11)] = inst_19518);

(statearr_19610[(21)] = inst_19517);

return statearr_19610;
})();
var statearr_19611_19680 = state_19575__$1;
(statearr_19611_19680[(2)] = null);

(statearr_19611_19680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (41))){
var inst_19534 = (state_19575[(25)]);
var inst_19550 = (state_19575[(2)]);
var inst_19551 = cljs.core.next.call(null,inst_19534);
var inst_19515 = inst_19551;
var inst_19516 = null;
var inst_19517 = (0);
var inst_19518 = (0);
var state_19575__$1 = (function (){var statearr_19612 = state_19575;
(statearr_19612[(10)] = inst_19516);

(statearr_19612[(27)] = inst_19550);

(statearr_19612[(20)] = inst_19515);

(statearr_19612[(11)] = inst_19518);

(statearr_19612[(21)] = inst_19517);

return statearr_19612;
})();
var statearr_19613_19681 = state_19575__$1;
(statearr_19613_19681[(2)] = null);

(statearr_19613_19681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (43))){
var state_19575__$1 = state_19575;
var statearr_19614_19682 = state_19575__$1;
(statearr_19614_19682[(2)] = null);

(statearr_19614_19682[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (29))){
var inst_19559 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19615_19683 = state_19575__$1;
(statearr_19615_19683[(2)] = inst_19559);

(statearr_19615_19683[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (44))){
var inst_19568 = (state_19575[(2)]);
var state_19575__$1 = (function (){var statearr_19616 = state_19575;
(statearr_19616[(28)] = inst_19568);

return statearr_19616;
})();
var statearr_19617_19684 = state_19575__$1;
(statearr_19617_19684[(2)] = null);

(statearr_19617_19684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (6))){
var inst_19507 = (state_19575[(29)]);
var inst_19506 = cljs.core.deref.call(null,cs);
var inst_19507__$1 = cljs.core.keys.call(null,inst_19506);
var inst_19508 = cljs.core.count.call(null,inst_19507__$1);
var inst_19509 = cljs.core.reset_BANG_.call(null,dctr,inst_19508);
var inst_19514 = cljs.core.seq.call(null,inst_19507__$1);
var inst_19515 = inst_19514;
var inst_19516 = null;
var inst_19517 = (0);
var inst_19518 = (0);
var state_19575__$1 = (function (){var statearr_19618 = state_19575;
(statearr_19618[(30)] = inst_19509);

(statearr_19618[(10)] = inst_19516);

(statearr_19618[(20)] = inst_19515);

(statearr_19618[(11)] = inst_19518);

(statearr_19618[(29)] = inst_19507__$1);

(statearr_19618[(21)] = inst_19517);

return statearr_19618;
})();
var statearr_19619_19685 = state_19575__$1;
(statearr_19619_19685[(2)] = null);

(statearr_19619_19685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (28))){
var inst_19534 = (state_19575[(25)]);
var inst_19515 = (state_19575[(20)]);
var inst_19534__$1 = cljs.core.seq.call(null,inst_19515);
var state_19575__$1 = (function (){var statearr_19620 = state_19575;
(statearr_19620[(25)] = inst_19534__$1);

return statearr_19620;
})();
if(inst_19534__$1){
var statearr_19621_19686 = state_19575__$1;
(statearr_19621_19686[(1)] = (33));

} else {
var statearr_19622_19687 = state_19575__$1;
(statearr_19622_19687[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (25))){
var inst_19518 = (state_19575[(11)]);
var inst_19517 = (state_19575[(21)]);
var inst_19520 = (inst_19518 < inst_19517);
var inst_19521 = inst_19520;
var state_19575__$1 = state_19575;
if(cljs.core.truth_(inst_19521)){
var statearr_19623_19688 = state_19575__$1;
(statearr_19623_19688[(1)] = (27));

} else {
var statearr_19624_19689 = state_19575__$1;
(statearr_19624_19689[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (34))){
var state_19575__$1 = state_19575;
var statearr_19625_19690 = state_19575__$1;
(statearr_19625_19690[(2)] = null);

(statearr_19625_19690[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (17))){
var state_19575__$1 = state_19575;
var statearr_19626_19691 = state_19575__$1;
(statearr_19626_19691[(2)] = null);

(statearr_19626_19691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (3))){
var inst_19573 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19575__$1,inst_19573);
} else {
if((state_val_19576 === (12))){
var inst_19502 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19627_19692 = state_19575__$1;
(statearr_19627_19692[(2)] = inst_19502);

(statearr_19627_19692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (2))){
var state_19575__$1 = state_19575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19575__$1,(4),ch);
} else {
if((state_val_19576 === (23))){
var state_19575__$1 = state_19575;
var statearr_19628_19693 = state_19575__$1;
(statearr_19628_19693[(2)] = null);

(statearr_19628_19693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (35))){
var inst_19557 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19629_19694 = state_19575__$1;
(statearr_19629_19694[(2)] = inst_19557);

(statearr_19629_19694[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (19))){
var inst_19474 = (state_19575[(7)]);
var inst_19478 = cljs.core.chunk_first.call(null,inst_19474);
var inst_19479 = cljs.core.chunk_rest.call(null,inst_19474);
var inst_19480 = cljs.core.count.call(null,inst_19478);
var inst_19452 = inst_19479;
var inst_19453 = inst_19478;
var inst_19454 = inst_19480;
var inst_19455 = (0);
var state_19575__$1 = (function (){var statearr_19630 = state_19575;
(statearr_19630[(13)] = inst_19452);

(statearr_19630[(14)] = inst_19453);

(statearr_19630[(15)] = inst_19454);

(statearr_19630[(17)] = inst_19455);

return statearr_19630;
})();
var statearr_19631_19695 = state_19575__$1;
(statearr_19631_19695[(2)] = null);

(statearr_19631_19695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (11))){
var inst_19452 = (state_19575[(13)]);
var inst_19474 = (state_19575[(7)]);
var inst_19474__$1 = cljs.core.seq.call(null,inst_19452);
var state_19575__$1 = (function (){var statearr_19632 = state_19575;
(statearr_19632[(7)] = inst_19474__$1);

return statearr_19632;
})();
if(inst_19474__$1){
var statearr_19633_19696 = state_19575__$1;
(statearr_19633_19696[(1)] = (16));

} else {
var statearr_19634_19697 = state_19575__$1;
(statearr_19634_19697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (9))){
var inst_19504 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19635_19698 = state_19575__$1;
(statearr_19635_19698[(2)] = inst_19504);

(statearr_19635_19698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (5))){
var inst_19450 = cljs.core.deref.call(null,cs);
var inst_19451 = cljs.core.seq.call(null,inst_19450);
var inst_19452 = inst_19451;
var inst_19453 = null;
var inst_19454 = (0);
var inst_19455 = (0);
var state_19575__$1 = (function (){var statearr_19636 = state_19575;
(statearr_19636[(13)] = inst_19452);

(statearr_19636[(14)] = inst_19453);

(statearr_19636[(15)] = inst_19454);

(statearr_19636[(17)] = inst_19455);

return statearr_19636;
})();
var statearr_19637_19699 = state_19575__$1;
(statearr_19637_19699[(2)] = null);

(statearr_19637_19699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (14))){
var state_19575__$1 = state_19575;
var statearr_19638_19700 = state_19575__$1;
(statearr_19638_19700[(2)] = null);

(statearr_19638_19700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (45))){
var inst_19565 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19639_19701 = state_19575__$1;
(statearr_19639_19701[(2)] = inst_19565);

(statearr_19639_19701[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (26))){
var inst_19507 = (state_19575[(29)]);
var inst_19561 = (state_19575[(2)]);
var inst_19562 = cljs.core.seq.call(null,inst_19507);
var state_19575__$1 = (function (){var statearr_19640 = state_19575;
(statearr_19640[(31)] = inst_19561);

return statearr_19640;
})();
if(inst_19562){
var statearr_19641_19702 = state_19575__$1;
(statearr_19641_19702[(1)] = (42));

} else {
var statearr_19642_19703 = state_19575__$1;
(statearr_19642_19703[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (16))){
var inst_19474 = (state_19575[(7)]);
var inst_19476 = cljs.core.chunked_seq_QMARK_.call(null,inst_19474);
var state_19575__$1 = state_19575;
if(inst_19476){
var statearr_19643_19704 = state_19575__$1;
(statearr_19643_19704[(1)] = (19));

} else {
var statearr_19644_19705 = state_19575__$1;
(statearr_19644_19705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (38))){
var inst_19554 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19645_19706 = state_19575__$1;
(statearr_19645_19706[(2)] = inst_19554);

(statearr_19645_19706[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (30))){
var state_19575__$1 = state_19575;
var statearr_19646_19707 = state_19575__$1;
(statearr_19646_19707[(2)] = null);

(statearr_19646_19707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (10))){
var inst_19453 = (state_19575[(14)]);
var inst_19455 = (state_19575[(17)]);
var inst_19463 = cljs.core._nth.call(null,inst_19453,inst_19455);
var inst_19464 = cljs.core.nth.call(null,inst_19463,(0),null);
var inst_19465 = cljs.core.nth.call(null,inst_19463,(1),null);
var state_19575__$1 = (function (){var statearr_19647 = state_19575;
(statearr_19647[(26)] = inst_19464);

return statearr_19647;
})();
if(cljs.core.truth_(inst_19465)){
var statearr_19648_19708 = state_19575__$1;
(statearr_19648_19708[(1)] = (13));

} else {
var statearr_19649_19709 = state_19575__$1;
(statearr_19649_19709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (18))){
var inst_19500 = (state_19575[(2)]);
var state_19575__$1 = state_19575;
var statearr_19650_19710 = state_19575__$1;
(statearr_19650_19710[(2)] = inst_19500);

(statearr_19650_19710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (42))){
var state_19575__$1 = state_19575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19575__$1,(45),dchan);
} else {
if((state_val_19576 === (37))){
var inst_19534 = (state_19575[(25)]);
var inst_19543 = (state_19575[(23)]);
var inst_19443 = (state_19575[(12)]);
var inst_19543__$1 = cljs.core.first.call(null,inst_19534);
var inst_19544 = cljs.core.async.put_BANG_.call(null,inst_19543__$1,inst_19443,done);
var state_19575__$1 = (function (){var statearr_19651 = state_19575;
(statearr_19651[(23)] = inst_19543__$1);

return statearr_19651;
})();
if(cljs.core.truth_(inst_19544)){
var statearr_19652_19711 = state_19575__$1;
(statearr_19652_19711[(1)] = (39));

} else {
var statearr_19653_19712 = state_19575__$1;
(statearr_19653_19712[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19576 === (8))){
var inst_19454 = (state_19575[(15)]);
var inst_19455 = (state_19575[(17)]);
var inst_19457 = (inst_19455 < inst_19454);
var inst_19458 = inst_19457;
var state_19575__$1 = state_19575;
if(cljs.core.truth_(inst_19458)){
var statearr_19654_19713 = state_19575__$1;
(statearr_19654_19713[(1)] = (10));

} else {
var statearr_19655_19714 = state_19575__$1;
(statearr_19655_19714[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16794__auto__ = null;
var cljs$core$async$mult_$_state_machine__16794__auto____0 = (function (){
var statearr_19656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19656[(0)] = cljs$core$async$mult_$_state_machine__16794__auto__);

(statearr_19656[(1)] = (1));

return statearr_19656;
});
var cljs$core$async$mult_$_state_machine__16794__auto____1 = (function (state_19575){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19657){if((e19657 instanceof Object)){
var ex__16797__auto__ = e19657;
var statearr_19658_19715 = state_19575;
(statearr_19658_19715[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19716 = state_19575;
state_19575 = G__19716;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16794__auto__ = function(state_19575){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16794__auto____1.call(this,state_19575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16794__auto____0;
cljs$core$async$mult_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16794__auto____1;
return cljs$core$async$mult_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19659 = f__16961__auto__.call(null);
(statearr_19659[(6)] = c__16960__auto___19660);

return statearr_19659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
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
var G__19718 = arguments.length;
switch (G__19718) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19720 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19720.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19721 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19721.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19722 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19722.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19723 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19723.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19724 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19724.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19735 = arguments.length;
var i__4737__auto___19736 = (0);
while(true){
if((i__4737__auto___19736 < len__4736__auto___19735)){
args__4742__auto__.push((arguments[i__4737__auto___19736]));

var G__19737 = (i__4737__auto___19736 + (1));
i__4737__auto___19736 = G__19737;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19729){
var map__19730 = p__19729;
var map__19730__$1 = (((((!((map__19730 == null))))?(((((map__19730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19730):map__19730);
var opts = map__19730__$1;
var statearr_19732_19738 = state;
(statearr_19732_19738[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_19733_19739 = state;
(statearr_19733_19739[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_19734_19740 = state;
(statearr_19734_19740[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19725){
var G__19726 = cljs.core.first.call(null,seq19725);
var seq19725__$1 = cljs.core.next.call(null,seq19725);
var G__19727 = cljs.core.first.call(null,seq19725__$1);
var seq19725__$2 = cljs.core.next.call(null,seq19725__$1);
var G__19728 = cljs.core.first.call(null,seq19725__$2);
var seq19725__$3 = cljs.core.next.call(null,seq19725__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19726,G__19727,G__19728,seq19725__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19741 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19742){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19742 = meta19742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19743,meta19742__$1){
var self__ = this;
var _19743__$1 = this;
return (new cljs.core.async.t_cljs$core$async19741(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19742__$1));
}));

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19743){
var self__ = this;
var _19743__$1 = this;
return self__.meta19742;
}));

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19741.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async19741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19742","meta19742",792301529,null)], null);
}));

(cljs.core.async.t_cljs$core$async19741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19741");

(cljs.core.async.t_cljs$core$async19741.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19741.
 */
cljs.core.async.__GT_t_cljs$core$async19741 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19741(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19742){
return (new cljs.core.async.t_cljs$core$async19741(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19742));
});

}

return (new cljs.core.async.t_cljs$core$async19741(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16960__auto___19905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_19845){
var state_val_19846 = (state_19845[(1)]);
if((state_val_19846 === (7))){
var inst_19760 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19847_19906 = state_19845__$1;
(statearr_19847_19906[(2)] = inst_19760);

(statearr_19847_19906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (20))){
var inst_19772 = (state_19845[(7)]);
var state_19845__$1 = state_19845;
var statearr_19848_19907 = state_19845__$1;
(statearr_19848_19907[(2)] = inst_19772);

(statearr_19848_19907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (27))){
var state_19845__$1 = state_19845;
var statearr_19849_19908 = state_19845__$1;
(statearr_19849_19908[(2)] = null);

(statearr_19849_19908[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (1))){
var inst_19747 = (state_19845[(8)]);
var inst_19747__$1 = calc_state.call(null);
var inst_19749 = (inst_19747__$1 == null);
var inst_19750 = cljs.core.not.call(null,inst_19749);
var state_19845__$1 = (function (){var statearr_19850 = state_19845;
(statearr_19850[(8)] = inst_19747__$1);

return statearr_19850;
})();
if(inst_19750){
var statearr_19851_19909 = state_19845__$1;
(statearr_19851_19909[(1)] = (2));

} else {
var statearr_19852_19910 = state_19845__$1;
(statearr_19852_19910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (24))){
var inst_19805 = (state_19845[(9)]);
var inst_19796 = (state_19845[(10)]);
var inst_19819 = (state_19845[(11)]);
var inst_19819__$1 = inst_19796.call(null,inst_19805);
var state_19845__$1 = (function (){var statearr_19853 = state_19845;
(statearr_19853[(11)] = inst_19819__$1);

return statearr_19853;
})();
if(cljs.core.truth_(inst_19819__$1)){
var statearr_19854_19911 = state_19845__$1;
(statearr_19854_19911[(1)] = (29));

} else {
var statearr_19855_19912 = state_19845__$1;
(statearr_19855_19912[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (4))){
var inst_19763 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19763)){
var statearr_19856_19913 = state_19845__$1;
(statearr_19856_19913[(1)] = (8));

} else {
var statearr_19857_19914 = state_19845__$1;
(statearr_19857_19914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (15))){
var inst_19790 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19790)){
var statearr_19858_19915 = state_19845__$1;
(statearr_19858_19915[(1)] = (19));

} else {
var statearr_19859_19916 = state_19845__$1;
(statearr_19859_19916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (21))){
var inst_19795 = (state_19845[(12)]);
var inst_19795__$1 = (state_19845[(2)]);
var inst_19796 = cljs.core.get.call(null,inst_19795__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19797 = cljs.core.get.call(null,inst_19795__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19798 = cljs.core.get.call(null,inst_19795__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19845__$1 = (function (){var statearr_19860 = state_19845;
(statearr_19860[(10)] = inst_19796);

(statearr_19860[(12)] = inst_19795__$1);

(statearr_19860[(13)] = inst_19797);

return statearr_19860;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19845__$1,(22),inst_19798);
} else {
if((state_val_19846 === (31))){
var inst_19827 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19827)){
var statearr_19861_19917 = state_19845__$1;
(statearr_19861_19917[(1)] = (32));

} else {
var statearr_19862_19918 = state_19845__$1;
(statearr_19862_19918[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (32))){
var inst_19804 = (state_19845[(14)]);
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19845__$1,(35),out,inst_19804);
} else {
if((state_val_19846 === (33))){
var inst_19795 = (state_19845[(12)]);
var inst_19772 = inst_19795;
var state_19845__$1 = (function (){var statearr_19863 = state_19845;
(statearr_19863[(7)] = inst_19772);

return statearr_19863;
})();
var statearr_19864_19919 = state_19845__$1;
(statearr_19864_19919[(2)] = null);

(statearr_19864_19919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (13))){
var inst_19772 = (state_19845[(7)]);
var inst_19779 = inst_19772.cljs$lang$protocol_mask$partition0$;
var inst_19780 = (inst_19779 & (64));
var inst_19781 = inst_19772.cljs$core$ISeq$;
var inst_19782 = (cljs.core.PROTOCOL_SENTINEL === inst_19781);
var inst_19783 = ((inst_19780) || (inst_19782));
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19783)){
var statearr_19865_19920 = state_19845__$1;
(statearr_19865_19920[(1)] = (16));

} else {
var statearr_19866_19921 = state_19845__$1;
(statearr_19866_19921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (22))){
var inst_19805 = (state_19845[(9)]);
var inst_19804 = (state_19845[(14)]);
var inst_19803 = (state_19845[(2)]);
var inst_19804__$1 = cljs.core.nth.call(null,inst_19803,(0),null);
var inst_19805__$1 = cljs.core.nth.call(null,inst_19803,(1),null);
var inst_19806 = (inst_19804__$1 == null);
var inst_19807 = cljs.core._EQ_.call(null,inst_19805__$1,change);
var inst_19808 = ((inst_19806) || (inst_19807));
var state_19845__$1 = (function (){var statearr_19867 = state_19845;
(statearr_19867[(9)] = inst_19805__$1);

(statearr_19867[(14)] = inst_19804__$1);

return statearr_19867;
})();
if(cljs.core.truth_(inst_19808)){
var statearr_19868_19922 = state_19845__$1;
(statearr_19868_19922[(1)] = (23));

} else {
var statearr_19869_19923 = state_19845__$1;
(statearr_19869_19923[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (36))){
var inst_19795 = (state_19845[(12)]);
var inst_19772 = inst_19795;
var state_19845__$1 = (function (){var statearr_19870 = state_19845;
(statearr_19870[(7)] = inst_19772);

return statearr_19870;
})();
var statearr_19871_19924 = state_19845__$1;
(statearr_19871_19924[(2)] = null);

(statearr_19871_19924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (29))){
var inst_19819 = (state_19845[(11)]);
var state_19845__$1 = state_19845;
var statearr_19872_19925 = state_19845__$1;
(statearr_19872_19925[(2)] = inst_19819);

(statearr_19872_19925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (6))){
var state_19845__$1 = state_19845;
var statearr_19873_19926 = state_19845__$1;
(statearr_19873_19926[(2)] = false);

(statearr_19873_19926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (28))){
var inst_19815 = (state_19845[(2)]);
var inst_19816 = calc_state.call(null);
var inst_19772 = inst_19816;
var state_19845__$1 = (function (){var statearr_19874 = state_19845;
(statearr_19874[(15)] = inst_19815);

(statearr_19874[(7)] = inst_19772);

return statearr_19874;
})();
var statearr_19875_19927 = state_19845__$1;
(statearr_19875_19927[(2)] = null);

(statearr_19875_19927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (25))){
var inst_19841 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19876_19928 = state_19845__$1;
(statearr_19876_19928[(2)] = inst_19841);

(statearr_19876_19928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (34))){
var inst_19839 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19877_19929 = state_19845__$1;
(statearr_19877_19929[(2)] = inst_19839);

(statearr_19877_19929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (17))){
var state_19845__$1 = state_19845;
var statearr_19878_19930 = state_19845__$1;
(statearr_19878_19930[(2)] = false);

(statearr_19878_19930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (3))){
var state_19845__$1 = state_19845;
var statearr_19879_19931 = state_19845__$1;
(statearr_19879_19931[(2)] = false);

(statearr_19879_19931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (12))){
var inst_19843 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19845__$1,inst_19843);
} else {
if((state_val_19846 === (2))){
var inst_19747 = (state_19845[(8)]);
var inst_19752 = inst_19747.cljs$lang$protocol_mask$partition0$;
var inst_19753 = (inst_19752 & (64));
var inst_19754 = inst_19747.cljs$core$ISeq$;
var inst_19755 = (cljs.core.PROTOCOL_SENTINEL === inst_19754);
var inst_19756 = ((inst_19753) || (inst_19755));
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19756)){
var statearr_19880_19932 = state_19845__$1;
(statearr_19880_19932[(1)] = (5));

} else {
var statearr_19881_19933 = state_19845__$1;
(statearr_19881_19933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (23))){
var inst_19804 = (state_19845[(14)]);
var inst_19810 = (inst_19804 == null);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19810)){
var statearr_19882_19934 = state_19845__$1;
(statearr_19882_19934[(1)] = (26));

} else {
var statearr_19883_19935 = state_19845__$1;
(statearr_19883_19935[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (35))){
var inst_19830 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
if(cljs.core.truth_(inst_19830)){
var statearr_19884_19936 = state_19845__$1;
(statearr_19884_19936[(1)] = (36));

} else {
var statearr_19885_19937 = state_19845__$1;
(statearr_19885_19937[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (19))){
var inst_19772 = (state_19845[(7)]);
var inst_19792 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19772);
var state_19845__$1 = state_19845;
var statearr_19886_19938 = state_19845__$1;
(statearr_19886_19938[(2)] = inst_19792);

(statearr_19886_19938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (11))){
var inst_19772 = (state_19845[(7)]);
var inst_19776 = (inst_19772 == null);
var inst_19777 = cljs.core.not.call(null,inst_19776);
var state_19845__$1 = state_19845;
if(inst_19777){
var statearr_19887_19939 = state_19845__$1;
(statearr_19887_19939[(1)] = (13));

} else {
var statearr_19888_19940 = state_19845__$1;
(statearr_19888_19940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (9))){
var inst_19747 = (state_19845[(8)]);
var state_19845__$1 = state_19845;
var statearr_19889_19941 = state_19845__$1;
(statearr_19889_19941[(2)] = inst_19747);

(statearr_19889_19941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (5))){
var state_19845__$1 = state_19845;
var statearr_19890_19942 = state_19845__$1;
(statearr_19890_19942[(2)] = true);

(statearr_19890_19942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (14))){
var state_19845__$1 = state_19845;
var statearr_19891_19943 = state_19845__$1;
(statearr_19891_19943[(2)] = false);

(statearr_19891_19943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (26))){
var inst_19805 = (state_19845[(9)]);
var inst_19812 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19805);
var state_19845__$1 = state_19845;
var statearr_19892_19944 = state_19845__$1;
(statearr_19892_19944[(2)] = inst_19812);

(statearr_19892_19944[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (16))){
var state_19845__$1 = state_19845;
var statearr_19893_19945 = state_19845__$1;
(statearr_19893_19945[(2)] = true);

(statearr_19893_19945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (38))){
var inst_19835 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19894_19946 = state_19845__$1;
(statearr_19894_19946[(2)] = inst_19835);

(statearr_19894_19946[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (30))){
var inst_19805 = (state_19845[(9)]);
var inst_19796 = (state_19845[(10)]);
var inst_19797 = (state_19845[(13)]);
var inst_19822 = cljs.core.empty_QMARK_.call(null,inst_19796);
var inst_19823 = inst_19797.call(null,inst_19805);
var inst_19824 = cljs.core.not.call(null,inst_19823);
var inst_19825 = ((inst_19822) && (inst_19824));
var state_19845__$1 = state_19845;
var statearr_19895_19947 = state_19845__$1;
(statearr_19895_19947[(2)] = inst_19825);

(statearr_19895_19947[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (10))){
var inst_19747 = (state_19845[(8)]);
var inst_19768 = (state_19845[(2)]);
var inst_19769 = cljs.core.get.call(null,inst_19768,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19770 = cljs.core.get.call(null,inst_19768,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19771 = cljs.core.get.call(null,inst_19768,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19772 = inst_19747;
var state_19845__$1 = (function (){var statearr_19896 = state_19845;
(statearr_19896[(16)] = inst_19771);

(statearr_19896[(7)] = inst_19772);

(statearr_19896[(17)] = inst_19769);

(statearr_19896[(18)] = inst_19770);

return statearr_19896;
})();
var statearr_19897_19948 = state_19845__$1;
(statearr_19897_19948[(2)] = null);

(statearr_19897_19948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (18))){
var inst_19787 = (state_19845[(2)]);
var state_19845__$1 = state_19845;
var statearr_19898_19949 = state_19845__$1;
(statearr_19898_19949[(2)] = inst_19787);

(statearr_19898_19949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (37))){
var state_19845__$1 = state_19845;
var statearr_19899_19950 = state_19845__$1;
(statearr_19899_19950[(2)] = null);

(statearr_19899_19950[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19846 === (8))){
var inst_19747 = (state_19845[(8)]);
var inst_19765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19747);
var state_19845__$1 = state_19845;
var statearr_19900_19951 = state_19845__$1;
(statearr_19900_19951[(2)] = inst_19765);

(statearr_19900_19951[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__16794__auto__ = null;
var cljs$core$async$mix_$_state_machine__16794__auto____0 = (function (){
var statearr_19901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19901[(0)] = cljs$core$async$mix_$_state_machine__16794__auto__);

(statearr_19901[(1)] = (1));

return statearr_19901;
});
var cljs$core$async$mix_$_state_machine__16794__auto____1 = (function (state_19845){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_19845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e19902){if((e19902 instanceof Object)){
var ex__16797__auto__ = e19902;
var statearr_19903_19952 = state_19845;
(statearr_19903_19952[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19953 = state_19845;
state_19845 = G__19953;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16794__auto__ = function(state_19845){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16794__auto____1.call(this,state_19845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16794__auto____0;
cljs$core$async$mix_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16794__auto____1;
return cljs$core$async$mix_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_19904 = f__16961__auto__.call(null);
(statearr_19904[(6)] = c__16960__auto___19905);

return statearr_19904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19956 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19956.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19957 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19957.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19958 = (function() {
var G__19959 = null;
var G__19959__1 = (function (p){
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
var G__19959__2 = (function (p,v){
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
G__19959 = function(p,v){
switch(arguments.length){
case 1:
return G__19959__1.call(this,p);
case 2:
return G__19959__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19959.cljs$core$IFn$_invoke$arity$1 = G__19959__1;
G__19959.cljs$core$IFn$_invoke$arity$2 = G__19959__2;
return G__19959;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19955 = arguments.length;
switch (G__19955) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19958.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19958.call(null,p,v);
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
var G__19963 = arguments.length;
switch (G__19963) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__19961_SHARP_){
if(cljs.core.truth_(p1__19961_SHARP_.call(null,topic))){
return p1__19961_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19961_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19964 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19965){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19965 = meta19965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19966,meta19965__$1){
var self__ = this;
var _19966__$1 = this;
return (new cljs.core.async.t_cljs$core$async19964(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19965__$1));
}));

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19966){
var self__ = this;
var _19966__$1 = this;
return self__.meta19965;
}));

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19964.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19965","meta19965",-311695617,null)], null);
}));

(cljs.core.async.t_cljs$core$async19964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19964");

(cljs.core.async.t_cljs$core$async19964.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19964.
 */
cljs.core.async.__GT_t_cljs$core$async19964 = (function cljs$core$async$__GT_t_cljs$core$async19964(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19965){
return (new cljs.core.async.t_cljs$core$async19964(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19965));
});

}

return (new cljs.core.async.t_cljs$core$async19964(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16960__auto___20084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20038){
var state_val_20039 = (state_20038[(1)]);
if((state_val_20039 === (7))){
var inst_20034 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
var statearr_20040_20085 = state_20038__$1;
(statearr_20040_20085[(2)] = inst_20034);

(statearr_20040_20085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (20))){
var state_20038__$1 = state_20038;
var statearr_20041_20086 = state_20038__$1;
(statearr_20041_20086[(2)] = null);

(statearr_20041_20086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (1))){
var state_20038__$1 = state_20038;
var statearr_20042_20087 = state_20038__$1;
(statearr_20042_20087[(2)] = null);

(statearr_20042_20087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (24))){
var inst_20017 = (state_20038[(7)]);
var inst_20026 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20017);
var state_20038__$1 = state_20038;
var statearr_20043_20088 = state_20038__$1;
(statearr_20043_20088[(2)] = inst_20026);

(statearr_20043_20088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (4))){
var inst_19969 = (state_20038[(8)]);
var inst_19969__$1 = (state_20038[(2)]);
var inst_19970 = (inst_19969__$1 == null);
var state_20038__$1 = (function (){var statearr_20044 = state_20038;
(statearr_20044[(8)] = inst_19969__$1);

return statearr_20044;
})();
if(cljs.core.truth_(inst_19970)){
var statearr_20045_20089 = state_20038__$1;
(statearr_20045_20089[(1)] = (5));

} else {
var statearr_20046_20090 = state_20038__$1;
(statearr_20046_20090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (15))){
var inst_20011 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
var statearr_20047_20091 = state_20038__$1;
(statearr_20047_20091[(2)] = inst_20011);

(statearr_20047_20091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (21))){
var inst_20031 = (state_20038[(2)]);
var state_20038__$1 = (function (){var statearr_20048 = state_20038;
(statearr_20048[(9)] = inst_20031);

return statearr_20048;
})();
var statearr_20049_20092 = state_20038__$1;
(statearr_20049_20092[(2)] = null);

(statearr_20049_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (13))){
var inst_19993 = (state_20038[(10)]);
var inst_19995 = cljs.core.chunked_seq_QMARK_.call(null,inst_19993);
var state_20038__$1 = state_20038;
if(inst_19995){
var statearr_20050_20093 = state_20038__$1;
(statearr_20050_20093[(1)] = (16));

} else {
var statearr_20051_20094 = state_20038__$1;
(statearr_20051_20094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (22))){
var inst_20023 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
if(cljs.core.truth_(inst_20023)){
var statearr_20052_20095 = state_20038__$1;
(statearr_20052_20095[(1)] = (23));

} else {
var statearr_20053_20096 = state_20038__$1;
(statearr_20053_20096[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (6))){
var inst_20017 = (state_20038[(7)]);
var inst_20019 = (state_20038[(11)]);
var inst_19969 = (state_20038[(8)]);
var inst_20017__$1 = topic_fn.call(null,inst_19969);
var inst_20018 = cljs.core.deref.call(null,mults);
var inst_20019__$1 = cljs.core.get.call(null,inst_20018,inst_20017__$1);
var state_20038__$1 = (function (){var statearr_20054 = state_20038;
(statearr_20054[(7)] = inst_20017__$1);

(statearr_20054[(11)] = inst_20019__$1);

return statearr_20054;
})();
if(cljs.core.truth_(inst_20019__$1)){
var statearr_20055_20097 = state_20038__$1;
(statearr_20055_20097[(1)] = (19));

} else {
var statearr_20056_20098 = state_20038__$1;
(statearr_20056_20098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (25))){
var inst_20028 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
var statearr_20057_20099 = state_20038__$1;
(statearr_20057_20099[(2)] = inst_20028);

(statearr_20057_20099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (17))){
var inst_19993 = (state_20038[(10)]);
var inst_20002 = cljs.core.first.call(null,inst_19993);
var inst_20003 = cljs.core.async.muxch_STAR_.call(null,inst_20002);
var inst_20004 = cljs.core.async.close_BANG_.call(null,inst_20003);
var inst_20005 = cljs.core.next.call(null,inst_19993);
var inst_19979 = inst_20005;
var inst_19980 = null;
var inst_19981 = (0);
var inst_19982 = (0);
var state_20038__$1 = (function (){var statearr_20058 = state_20038;
(statearr_20058[(12)] = inst_19979);

(statearr_20058[(13)] = inst_19982);

(statearr_20058[(14)] = inst_20004);

(statearr_20058[(15)] = inst_19980);

(statearr_20058[(16)] = inst_19981);

return statearr_20058;
})();
var statearr_20059_20100 = state_20038__$1;
(statearr_20059_20100[(2)] = null);

(statearr_20059_20100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (3))){
var inst_20036 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20038__$1,inst_20036);
} else {
if((state_val_20039 === (12))){
var inst_20013 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
var statearr_20060_20101 = state_20038__$1;
(statearr_20060_20101[(2)] = inst_20013);

(statearr_20060_20101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (2))){
var state_20038__$1 = state_20038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20038__$1,(4),ch);
} else {
if((state_val_20039 === (23))){
var state_20038__$1 = state_20038;
var statearr_20061_20102 = state_20038__$1;
(statearr_20061_20102[(2)] = null);

(statearr_20061_20102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (19))){
var inst_20019 = (state_20038[(11)]);
var inst_19969 = (state_20038[(8)]);
var inst_20021 = cljs.core.async.muxch_STAR_.call(null,inst_20019);
var state_20038__$1 = state_20038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20038__$1,(22),inst_20021,inst_19969);
} else {
if((state_val_20039 === (11))){
var inst_19979 = (state_20038[(12)]);
var inst_19993 = (state_20038[(10)]);
var inst_19993__$1 = cljs.core.seq.call(null,inst_19979);
var state_20038__$1 = (function (){var statearr_20062 = state_20038;
(statearr_20062[(10)] = inst_19993__$1);

return statearr_20062;
})();
if(inst_19993__$1){
var statearr_20063_20103 = state_20038__$1;
(statearr_20063_20103[(1)] = (13));

} else {
var statearr_20064_20104 = state_20038__$1;
(statearr_20064_20104[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (9))){
var inst_20015 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
var statearr_20065_20105 = state_20038__$1;
(statearr_20065_20105[(2)] = inst_20015);

(statearr_20065_20105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (5))){
var inst_19976 = cljs.core.deref.call(null,mults);
var inst_19977 = cljs.core.vals.call(null,inst_19976);
var inst_19978 = cljs.core.seq.call(null,inst_19977);
var inst_19979 = inst_19978;
var inst_19980 = null;
var inst_19981 = (0);
var inst_19982 = (0);
var state_20038__$1 = (function (){var statearr_20066 = state_20038;
(statearr_20066[(12)] = inst_19979);

(statearr_20066[(13)] = inst_19982);

(statearr_20066[(15)] = inst_19980);

(statearr_20066[(16)] = inst_19981);

return statearr_20066;
})();
var statearr_20067_20106 = state_20038__$1;
(statearr_20067_20106[(2)] = null);

(statearr_20067_20106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (14))){
var state_20038__$1 = state_20038;
var statearr_20071_20107 = state_20038__$1;
(statearr_20071_20107[(2)] = null);

(statearr_20071_20107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (16))){
var inst_19993 = (state_20038[(10)]);
var inst_19997 = cljs.core.chunk_first.call(null,inst_19993);
var inst_19998 = cljs.core.chunk_rest.call(null,inst_19993);
var inst_19999 = cljs.core.count.call(null,inst_19997);
var inst_19979 = inst_19998;
var inst_19980 = inst_19997;
var inst_19981 = inst_19999;
var inst_19982 = (0);
var state_20038__$1 = (function (){var statearr_20072 = state_20038;
(statearr_20072[(12)] = inst_19979);

(statearr_20072[(13)] = inst_19982);

(statearr_20072[(15)] = inst_19980);

(statearr_20072[(16)] = inst_19981);

return statearr_20072;
})();
var statearr_20073_20108 = state_20038__$1;
(statearr_20073_20108[(2)] = null);

(statearr_20073_20108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (10))){
var inst_19979 = (state_20038[(12)]);
var inst_19982 = (state_20038[(13)]);
var inst_19980 = (state_20038[(15)]);
var inst_19981 = (state_20038[(16)]);
var inst_19987 = cljs.core._nth.call(null,inst_19980,inst_19982);
var inst_19988 = cljs.core.async.muxch_STAR_.call(null,inst_19987);
var inst_19989 = cljs.core.async.close_BANG_.call(null,inst_19988);
var inst_19990 = (inst_19982 + (1));
var tmp20068 = inst_19979;
var tmp20069 = inst_19980;
var tmp20070 = inst_19981;
var inst_19979__$1 = tmp20068;
var inst_19980__$1 = tmp20069;
var inst_19981__$1 = tmp20070;
var inst_19982__$1 = inst_19990;
var state_20038__$1 = (function (){var statearr_20074 = state_20038;
(statearr_20074[(12)] = inst_19979__$1);

(statearr_20074[(17)] = inst_19989);

(statearr_20074[(13)] = inst_19982__$1);

(statearr_20074[(15)] = inst_19980__$1);

(statearr_20074[(16)] = inst_19981__$1);

return statearr_20074;
})();
var statearr_20075_20109 = state_20038__$1;
(statearr_20075_20109[(2)] = null);

(statearr_20075_20109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (18))){
var inst_20008 = (state_20038[(2)]);
var state_20038__$1 = state_20038;
var statearr_20076_20110 = state_20038__$1;
(statearr_20076_20110[(2)] = inst_20008);

(statearr_20076_20110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20039 === (8))){
var inst_19982 = (state_20038[(13)]);
var inst_19981 = (state_20038[(16)]);
var inst_19984 = (inst_19982 < inst_19981);
var inst_19985 = inst_19984;
var state_20038__$1 = state_20038;
if(cljs.core.truth_(inst_19985)){
var statearr_20077_20111 = state_20038__$1;
(statearr_20077_20111[(1)] = (10));

} else {
var statearr_20078_20112 = state_20038__$1;
(statearr_20078_20112[(1)] = (11));

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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20079[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20079[(1)] = (1));

return statearr_20079;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20038){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20080){if((e20080 instanceof Object)){
var ex__16797__auto__ = e20080;
var statearr_20081_20113 = state_20038;
(statearr_20081_20113[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20114 = state_20038;
state_20038 = G__20114;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20082 = f__16961__auto__.call(null);
(statearr_20082[(6)] = c__16960__auto___20084);

return statearr_20082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
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
var G__20116 = arguments.length;
switch (G__20116) {
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
var G__20119 = arguments.length;
switch (G__20119) {
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
var G__20122 = arguments.length;
switch (G__20122) {
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
var c__16960__auto___20189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20161){
var state_val_20162 = (state_20161[(1)]);
if((state_val_20162 === (7))){
var state_20161__$1 = state_20161;
var statearr_20163_20190 = state_20161__$1;
(statearr_20163_20190[(2)] = null);

(statearr_20163_20190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (1))){
var state_20161__$1 = state_20161;
var statearr_20164_20191 = state_20161__$1;
(statearr_20164_20191[(2)] = null);

(statearr_20164_20191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (4))){
var inst_20125 = (state_20161[(7)]);
var inst_20127 = (inst_20125 < cnt);
var state_20161__$1 = state_20161;
if(cljs.core.truth_(inst_20127)){
var statearr_20165_20192 = state_20161__$1;
(statearr_20165_20192[(1)] = (6));

} else {
var statearr_20166_20193 = state_20161__$1;
(statearr_20166_20193[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (15))){
var inst_20157 = (state_20161[(2)]);
var state_20161__$1 = state_20161;
var statearr_20167_20194 = state_20161__$1;
(statearr_20167_20194[(2)] = inst_20157);

(statearr_20167_20194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (13))){
var inst_20150 = cljs.core.async.close_BANG_.call(null,out);
var state_20161__$1 = state_20161;
var statearr_20168_20195 = state_20161__$1;
(statearr_20168_20195[(2)] = inst_20150);

(statearr_20168_20195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (6))){
var state_20161__$1 = state_20161;
var statearr_20169_20196 = state_20161__$1;
(statearr_20169_20196[(2)] = null);

(statearr_20169_20196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (3))){
var inst_20159 = (state_20161[(2)]);
var state_20161__$1 = state_20161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20161__$1,inst_20159);
} else {
if((state_val_20162 === (12))){
var inst_20147 = (state_20161[(8)]);
var inst_20147__$1 = (state_20161[(2)]);
var inst_20148 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20147__$1);
var state_20161__$1 = (function (){var statearr_20170 = state_20161;
(statearr_20170[(8)] = inst_20147__$1);

return statearr_20170;
})();
if(cljs.core.truth_(inst_20148)){
var statearr_20171_20197 = state_20161__$1;
(statearr_20171_20197[(1)] = (13));

} else {
var statearr_20172_20198 = state_20161__$1;
(statearr_20172_20198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (2))){
var inst_20124 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20125 = (0);
var state_20161__$1 = (function (){var statearr_20173 = state_20161;
(statearr_20173[(7)] = inst_20125);

(statearr_20173[(9)] = inst_20124);

return statearr_20173;
})();
var statearr_20174_20199 = state_20161__$1;
(statearr_20174_20199[(2)] = null);

(statearr_20174_20199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (11))){
var inst_20125 = (state_20161[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20161,(10),Object,null,(9));
var inst_20134 = chs__$1.call(null,inst_20125);
var inst_20135 = done.call(null,inst_20125);
var inst_20136 = cljs.core.async.take_BANG_.call(null,inst_20134,inst_20135);
var state_20161__$1 = state_20161;
var statearr_20175_20200 = state_20161__$1;
(statearr_20175_20200[(2)] = inst_20136);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20161__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (9))){
var inst_20125 = (state_20161[(7)]);
var inst_20138 = (state_20161[(2)]);
var inst_20139 = (inst_20125 + (1));
var inst_20125__$1 = inst_20139;
var state_20161__$1 = (function (){var statearr_20176 = state_20161;
(statearr_20176[(10)] = inst_20138);

(statearr_20176[(7)] = inst_20125__$1);

return statearr_20176;
})();
var statearr_20177_20201 = state_20161__$1;
(statearr_20177_20201[(2)] = null);

(statearr_20177_20201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (5))){
var inst_20145 = (state_20161[(2)]);
var state_20161__$1 = (function (){var statearr_20178 = state_20161;
(statearr_20178[(11)] = inst_20145);

return statearr_20178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20161__$1,(12),dchan);
} else {
if((state_val_20162 === (14))){
var inst_20147 = (state_20161[(8)]);
var inst_20152 = cljs.core.apply.call(null,f,inst_20147);
var state_20161__$1 = state_20161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20161__$1,(16),out,inst_20152);
} else {
if((state_val_20162 === (16))){
var inst_20154 = (state_20161[(2)]);
var state_20161__$1 = (function (){var statearr_20179 = state_20161;
(statearr_20179[(12)] = inst_20154);

return statearr_20179;
})();
var statearr_20180_20202 = state_20161__$1;
(statearr_20180_20202[(2)] = null);

(statearr_20180_20202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (10))){
var inst_20129 = (state_20161[(2)]);
var inst_20130 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20161__$1 = (function (){var statearr_20181 = state_20161;
(statearr_20181[(13)] = inst_20129);

return statearr_20181;
})();
var statearr_20182_20203 = state_20161__$1;
(statearr_20182_20203[(2)] = inst_20130);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20161__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20162 === (8))){
var inst_20143 = (state_20161[(2)]);
var state_20161__$1 = state_20161;
var statearr_20183_20204 = state_20161__$1;
(statearr_20183_20204[(2)] = inst_20143);

(statearr_20183_20204[(1)] = (5));


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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20184[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20184[(1)] = (1));

return statearr_20184;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20161){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20185){if((e20185 instanceof Object)){
var ex__16797__auto__ = e20185;
var statearr_20186_20205 = state_20161;
(statearr_20186_20205[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20206 = state_20161;
state_20161 = G__20206;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20187 = f__16961__auto__.call(null);
(statearr_20187[(6)] = c__16960__auto___20189);

return statearr_20187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
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
var G__20209 = arguments.length;
switch (G__20209) {
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
var c__16960__auto___20263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20241){
var state_val_20242 = (state_20241[(1)]);
if((state_val_20242 === (7))){
var inst_20221 = (state_20241[(7)]);
var inst_20220 = (state_20241[(8)]);
var inst_20220__$1 = (state_20241[(2)]);
var inst_20221__$1 = cljs.core.nth.call(null,inst_20220__$1,(0),null);
var inst_20222 = cljs.core.nth.call(null,inst_20220__$1,(1),null);
var inst_20223 = (inst_20221__$1 == null);
var state_20241__$1 = (function (){var statearr_20243 = state_20241;
(statearr_20243[(7)] = inst_20221__$1);

(statearr_20243[(8)] = inst_20220__$1);

(statearr_20243[(9)] = inst_20222);

return statearr_20243;
})();
if(cljs.core.truth_(inst_20223)){
var statearr_20244_20264 = state_20241__$1;
(statearr_20244_20264[(1)] = (8));

} else {
var statearr_20245_20265 = state_20241__$1;
(statearr_20245_20265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (1))){
var inst_20210 = cljs.core.vec.call(null,chs);
var inst_20211 = inst_20210;
var state_20241__$1 = (function (){var statearr_20246 = state_20241;
(statearr_20246[(10)] = inst_20211);

return statearr_20246;
})();
var statearr_20247_20266 = state_20241__$1;
(statearr_20247_20266[(2)] = null);

(statearr_20247_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (4))){
var inst_20211 = (state_20241[(10)]);
var state_20241__$1 = state_20241;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20241__$1,(7),inst_20211);
} else {
if((state_val_20242 === (6))){
var inst_20237 = (state_20241[(2)]);
var state_20241__$1 = state_20241;
var statearr_20248_20267 = state_20241__$1;
(statearr_20248_20267[(2)] = inst_20237);

(statearr_20248_20267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (3))){
var inst_20239 = (state_20241[(2)]);
var state_20241__$1 = state_20241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20241__$1,inst_20239);
} else {
if((state_val_20242 === (2))){
var inst_20211 = (state_20241[(10)]);
var inst_20213 = cljs.core.count.call(null,inst_20211);
var inst_20214 = (inst_20213 > (0));
var state_20241__$1 = state_20241;
if(cljs.core.truth_(inst_20214)){
var statearr_20250_20268 = state_20241__$1;
(statearr_20250_20268[(1)] = (4));

} else {
var statearr_20251_20269 = state_20241__$1;
(statearr_20251_20269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (11))){
var inst_20211 = (state_20241[(10)]);
var inst_20230 = (state_20241[(2)]);
var tmp20249 = inst_20211;
var inst_20211__$1 = tmp20249;
var state_20241__$1 = (function (){var statearr_20252 = state_20241;
(statearr_20252[(11)] = inst_20230);

(statearr_20252[(10)] = inst_20211__$1);

return statearr_20252;
})();
var statearr_20253_20270 = state_20241__$1;
(statearr_20253_20270[(2)] = null);

(statearr_20253_20270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (9))){
var inst_20221 = (state_20241[(7)]);
var state_20241__$1 = state_20241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20241__$1,(11),out,inst_20221);
} else {
if((state_val_20242 === (5))){
var inst_20235 = cljs.core.async.close_BANG_.call(null,out);
var state_20241__$1 = state_20241;
var statearr_20254_20271 = state_20241__$1;
(statearr_20254_20271[(2)] = inst_20235);

(statearr_20254_20271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (10))){
var inst_20233 = (state_20241[(2)]);
var state_20241__$1 = state_20241;
var statearr_20255_20272 = state_20241__$1;
(statearr_20255_20272[(2)] = inst_20233);

(statearr_20255_20272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20242 === (8))){
var inst_20221 = (state_20241[(7)]);
var inst_20220 = (state_20241[(8)]);
var inst_20211 = (state_20241[(10)]);
var inst_20222 = (state_20241[(9)]);
var inst_20225 = (function (){var cs = inst_20211;
var vec__20216 = inst_20220;
var v = inst_20221;
var c = inst_20222;
return (function (p1__20207_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20207_SHARP_);
});
})();
var inst_20226 = cljs.core.filterv.call(null,inst_20225,inst_20211);
var inst_20211__$1 = inst_20226;
var state_20241__$1 = (function (){var statearr_20256 = state_20241;
(statearr_20256[(10)] = inst_20211__$1);

return statearr_20256;
})();
var statearr_20257_20273 = state_20241__$1;
(statearr_20257_20273[(2)] = null);

(statearr_20257_20273[(1)] = (2));


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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20258[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20258[(1)] = (1));

return statearr_20258;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20241){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20259){if((e20259 instanceof Object)){
var ex__16797__auto__ = e20259;
var statearr_20260_20274 = state_20241;
(statearr_20260_20274[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20275 = state_20241;
state_20241 = G__20275;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20261 = f__16961__auto__.call(null);
(statearr_20261[(6)] = c__16960__auto___20263);

return statearr_20261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
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
var G__20277 = arguments.length;
switch (G__20277) {
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
var c__16960__auto___20322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20301){
var state_val_20302 = (state_20301[(1)]);
if((state_val_20302 === (7))){
var inst_20283 = (state_20301[(7)]);
var inst_20283__$1 = (state_20301[(2)]);
var inst_20284 = (inst_20283__$1 == null);
var inst_20285 = cljs.core.not.call(null,inst_20284);
var state_20301__$1 = (function (){var statearr_20303 = state_20301;
(statearr_20303[(7)] = inst_20283__$1);

return statearr_20303;
})();
if(inst_20285){
var statearr_20304_20323 = state_20301__$1;
(statearr_20304_20323[(1)] = (8));

} else {
var statearr_20305_20324 = state_20301__$1;
(statearr_20305_20324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (1))){
var inst_20278 = (0);
var state_20301__$1 = (function (){var statearr_20306 = state_20301;
(statearr_20306[(8)] = inst_20278);

return statearr_20306;
})();
var statearr_20307_20325 = state_20301__$1;
(statearr_20307_20325[(2)] = null);

(statearr_20307_20325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (4))){
var state_20301__$1 = state_20301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20301__$1,(7),ch);
} else {
if((state_val_20302 === (6))){
var inst_20296 = (state_20301[(2)]);
var state_20301__$1 = state_20301;
var statearr_20308_20326 = state_20301__$1;
(statearr_20308_20326[(2)] = inst_20296);

(statearr_20308_20326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (3))){
var inst_20298 = (state_20301[(2)]);
var inst_20299 = cljs.core.async.close_BANG_.call(null,out);
var state_20301__$1 = (function (){var statearr_20309 = state_20301;
(statearr_20309[(9)] = inst_20298);

return statearr_20309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20301__$1,inst_20299);
} else {
if((state_val_20302 === (2))){
var inst_20278 = (state_20301[(8)]);
var inst_20280 = (inst_20278 < n);
var state_20301__$1 = state_20301;
if(cljs.core.truth_(inst_20280)){
var statearr_20310_20327 = state_20301__$1;
(statearr_20310_20327[(1)] = (4));

} else {
var statearr_20311_20328 = state_20301__$1;
(statearr_20311_20328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (11))){
var inst_20278 = (state_20301[(8)]);
var inst_20288 = (state_20301[(2)]);
var inst_20289 = (inst_20278 + (1));
var inst_20278__$1 = inst_20289;
var state_20301__$1 = (function (){var statearr_20312 = state_20301;
(statearr_20312[(10)] = inst_20288);

(statearr_20312[(8)] = inst_20278__$1);

return statearr_20312;
})();
var statearr_20313_20329 = state_20301__$1;
(statearr_20313_20329[(2)] = null);

(statearr_20313_20329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (9))){
var state_20301__$1 = state_20301;
var statearr_20314_20330 = state_20301__$1;
(statearr_20314_20330[(2)] = null);

(statearr_20314_20330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (5))){
var state_20301__$1 = state_20301;
var statearr_20315_20331 = state_20301__$1;
(statearr_20315_20331[(2)] = null);

(statearr_20315_20331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (10))){
var inst_20293 = (state_20301[(2)]);
var state_20301__$1 = state_20301;
var statearr_20316_20332 = state_20301__$1;
(statearr_20316_20332[(2)] = inst_20293);

(statearr_20316_20332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20302 === (8))){
var inst_20283 = (state_20301[(7)]);
var state_20301__$1 = state_20301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20301__$1,(11),out,inst_20283);
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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20317[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20317[(1)] = (1));

return statearr_20317;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20301){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20318){if((e20318 instanceof Object)){
var ex__16797__auto__ = e20318;
var statearr_20319_20333 = state_20301;
(statearr_20319_20333[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20334 = state_20301;
state_20301 = G__20334;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20320 = f__16961__auto__.call(null);
(statearr_20320[(6)] = c__16960__auto___20322);

return statearr_20320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20336 = (function (f,ch,meta20337){
this.f = f;
this.ch = ch;
this.meta20337 = meta20337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20338,meta20337__$1){
var self__ = this;
var _20338__$1 = this;
return (new cljs.core.async.t_cljs$core$async20336(self__.f,self__.ch,meta20337__$1));
}));

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20338){
var self__ = this;
var _20338__$1 = this;
return self__.meta20337;
}));

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20339 = (function (f,ch,meta20337,_,fn1,meta20340){
this.f = f;
this.ch = ch;
this.meta20337 = meta20337;
this._ = _;
this.fn1 = fn1;
this.meta20340 = meta20340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20341,meta20340__$1){
var self__ = this;
var _20341__$1 = this;
return (new cljs.core.async.t_cljs$core$async20339(self__.f,self__.ch,self__.meta20337,self__._,self__.fn1,meta20340__$1));
}));

(cljs.core.async.t_cljs$core$async20339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20341){
var self__ = this;
var _20341__$1 = this;
return self__.meta20340;
}));

(cljs.core.async.t_cljs$core$async20339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__20335_SHARP_){
return f1.call(null,(((p1__20335_SHARP_ == null))?null:self__.f.call(null,p1__20335_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async20339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20337","meta20337",236377690,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20336","cljs.core.async/t_cljs$core$async20336",866127909,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20340","meta20340",-2038211163,null)], null);
}));

(cljs.core.async.t_cljs$core$async20339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20339");

(cljs.core.async.t_cljs$core$async20339.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20339.
 */
cljs.core.async.__GT_t_cljs$core$async20339 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20339(f__$1,ch__$1,meta20337__$1,___$2,fn1__$1,meta20340){
return (new cljs.core.async.t_cljs$core$async20339(f__$1,ch__$1,meta20337__$1,___$2,fn1__$1,meta20340));
});

}

return (new cljs.core.async.t_cljs$core$async20339(self__.f,self__.ch,self__.meta20337,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20337","meta20337",236377690,null)], null);
}));

(cljs.core.async.t_cljs$core$async20336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20336");

(cljs.core.async.t_cljs$core$async20336.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20336.
 */
cljs.core.async.__GT_t_cljs$core$async20336 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20336(f__$1,ch__$1,meta20337){
return (new cljs.core.async.t_cljs$core$async20336(f__$1,ch__$1,meta20337));
});

}

return (new cljs.core.async.t_cljs$core$async20336(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20342 = (function (f,ch,meta20343){
this.f = f;
this.ch = ch;
this.meta20343 = meta20343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20344,meta20343__$1){
var self__ = this;
var _20344__$1 = this;
return (new cljs.core.async.t_cljs$core$async20342(self__.f,self__.ch,meta20343__$1));
}));

(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20344){
var self__ = this;
var _20344__$1 = this;
return self__.meta20343;
}));

(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async20342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20343","meta20343",-601847576,null)], null);
}));

(cljs.core.async.t_cljs$core$async20342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20342");

(cljs.core.async.t_cljs$core$async20342.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20342.
 */
cljs.core.async.__GT_t_cljs$core$async20342 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20342(f__$1,ch__$1,meta20343){
return (new cljs.core.async.t_cljs$core$async20342(f__$1,ch__$1,meta20343));
});

}

return (new cljs.core.async.t_cljs$core$async20342(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20345 = (function (p,ch,meta20346){
this.p = p;
this.ch = ch;
this.meta20346 = meta20346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20347,meta20346__$1){
var self__ = this;
var _20347__$1 = this;
return (new cljs.core.async.t_cljs$core$async20345(self__.p,self__.ch,meta20346__$1));
}));

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20347){
var self__ = this;
var _20347__$1 = this;
return self__.meta20346;
}));

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20346","meta20346",-841683618,null)], null);
}));

(cljs.core.async.t_cljs$core$async20345.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20345");

(cljs.core.async.t_cljs$core$async20345.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20345");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20345.
 */
cljs.core.async.__GT_t_cljs$core$async20345 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20345(p__$1,ch__$1,meta20346){
return (new cljs.core.async.t_cljs$core$async20345(p__$1,ch__$1,meta20346));
});

}

return (new cljs.core.async.t_cljs$core$async20345(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20349 = arguments.length;
switch (G__20349) {
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
var c__16960__auto___20389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20370){
var state_val_20371 = (state_20370[(1)]);
if((state_val_20371 === (7))){
var inst_20366 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20372_20390 = state_20370__$1;
(statearr_20372_20390[(2)] = inst_20366);

(statearr_20372_20390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (1))){
var state_20370__$1 = state_20370;
var statearr_20373_20391 = state_20370__$1;
(statearr_20373_20391[(2)] = null);

(statearr_20373_20391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (4))){
var inst_20352 = (state_20370[(7)]);
var inst_20352__$1 = (state_20370[(2)]);
var inst_20353 = (inst_20352__$1 == null);
var state_20370__$1 = (function (){var statearr_20374 = state_20370;
(statearr_20374[(7)] = inst_20352__$1);

return statearr_20374;
})();
if(cljs.core.truth_(inst_20353)){
var statearr_20375_20392 = state_20370__$1;
(statearr_20375_20392[(1)] = (5));

} else {
var statearr_20376_20393 = state_20370__$1;
(statearr_20376_20393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (6))){
var inst_20352 = (state_20370[(7)]);
var inst_20357 = p.call(null,inst_20352);
var state_20370__$1 = state_20370;
if(cljs.core.truth_(inst_20357)){
var statearr_20377_20394 = state_20370__$1;
(statearr_20377_20394[(1)] = (8));

} else {
var statearr_20378_20395 = state_20370__$1;
(statearr_20378_20395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (3))){
var inst_20368 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20370__$1,inst_20368);
} else {
if((state_val_20371 === (2))){
var state_20370__$1 = state_20370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20370__$1,(4),ch);
} else {
if((state_val_20371 === (11))){
var inst_20360 = (state_20370[(2)]);
var state_20370__$1 = state_20370;
var statearr_20379_20396 = state_20370__$1;
(statearr_20379_20396[(2)] = inst_20360);

(statearr_20379_20396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (9))){
var state_20370__$1 = state_20370;
var statearr_20380_20397 = state_20370__$1;
(statearr_20380_20397[(2)] = null);

(statearr_20380_20397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (5))){
var inst_20355 = cljs.core.async.close_BANG_.call(null,out);
var state_20370__$1 = state_20370;
var statearr_20381_20398 = state_20370__$1;
(statearr_20381_20398[(2)] = inst_20355);

(statearr_20381_20398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (10))){
var inst_20363 = (state_20370[(2)]);
var state_20370__$1 = (function (){var statearr_20382 = state_20370;
(statearr_20382[(8)] = inst_20363);

return statearr_20382;
})();
var statearr_20383_20399 = state_20370__$1;
(statearr_20383_20399[(2)] = null);

(statearr_20383_20399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20371 === (8))){
var inst_20352 = (state_20370[(7)]);
var state_20370__$1 = state_20370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20370__$1,(11),out,inst_20352);
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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20384 = [null,null,null,null,null,null,null,null,null];
(statearr_20384[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20384[(1)] = (1));

return statearr_20384;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20370){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20385){if((e20385 instanceof Object)){
var ex__16797__auto__ = e20385;
var statearr_20386_20400 = state_20370;
(statearr_20386_20400[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20401 = state_20370;
state_20370 = G__20401;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20387 = f__16961__auto__.call(null);
(statearr_20387[(6)] = c__16960__auto___20389);

return statearr_20387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20403 = arguments.length;
switch (G__20403) {
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
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20466){
var state_val_20467 = (state_20466[(1)]);
if((state_val_20467 === (7))){
var inst_20462 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20468_20506 = state_20466__$1;
(statearr_20468_20506[(2)] = inst_20462);

(statearr_20468_20506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (20))){
var inst_20432 = (state_20466[(7)]);
var inst_20443 = (state_20466[(2)]);
var inst_20444 = cljs.core.next.call(null,inst_20432);
var inst_20418 = inst_20444;
var inst_20419 = null;
var inst_20420 = (0);
var inst_20421 = (0);
var state_20466__$1 = (function (){var statearr_20469 = state_20466;
(statearr_20469[(8)] = inst_20420);

(statearr_20469[(9)] = inst_20443);

(statearr_20469[(10)] = inst_20418);

(statearr_20469[(11)] = inst_20421);

(statearr_20469[(12)] = inst_20419);

return statearr_20469;
})();
var statearr_20470_20507 = state_20466__$1;
(statearr_20470_20507[(2)] = null);

(statearr_20470_20507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (1))){
var state_20466__$1 = state_20466;
var statearr_20471_20508 = state_20466__$1;
(statearr_20471_20508[(2)] = null);

(statearr_20471_20508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (4))){
var inst_20407 = (state_20466[(13)]);
var inst_20407__$1 = (state_20466[(2)]);
var inst_20408 = (inst_20407__$1 == null);
var state_20466__$1 = (function (){var statearr_20472 = state_20466;
(statearr_20472[(13)] = inst_20407__$1);

return statearr_20472;
})();
if(cljs.core.truth_(inst_20408)){
var statearr_20473_20509 = state_20466__$1;
(statearr_20473_20509[(1)] = (5));

} else {
var statearr_20474_20510 = state_20466__$1;
(statearr_20474_20510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (15))){
var state_20466__$1 = state_20466;
var statearr_20478_20511 = state_20466__$1;
(statearr_20478_20511[(2)] = null);

(statearr_20478_20511[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (21))){
var state_20466__$1 = state_20466;
var statearr_20479_20512 = state_20466__$1;
(statearr_20479_20512[(2)] = null);

(statearr_20479_20512[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (13))){
var inst_20420 = (state_20466[(8)]);
var inst_20418 = (state_20466[(10)]);
var inst_20421 = (state_20466[(11)]);
var inst_20419 = (state_20466[(12)]);
var inst_20428 = (state_20466[(2)]);
var inst_20429 = (inst_20421 + (1));
var tmp20475 = inst_20420;
var tmp20476 = inst_20418;
var tmp20477 = inst_20419;
var inst_20418__$1 = tmp20476;
var inst_20419__$1 = tmp20477;
var inst_20420__$1 = tmp20475;
var inst_20421__$1 = inst_20429;
var state_20466__$1 = (function (){var statearr_20480 = state_20466;
(statearr_20480[(8)] = inst_20420__$1);

(statearr_20480[(10)] = inst_20418__$1);

(statearr_20480[(11)] = inst_20421__$1);

(statearr_20480[(14)] = inst_20428);

(statearr_20480[(12)] = inst_20419__$1);

return statearr_20480;
})();
var statearr_20481_20513 = state_20466__$1;
(statearr_20481_20513[(2)] = null);

(statearr_20481_20513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (22))){
var state_20466__$1 = state_20466;
var statearr_20482_20514 = state_20466__$1;
(statearr_20482_20514[(2)] = null);

(statearr_20482_20514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (6))){
var inst_20407 = (state_20466[(13)]);
var inst_20416 = f.call(null,inst_20407);
var inst_20417 = cljs.core.seq.call(null,inst_20416);
var inst_20418 = inst_20417;
var inst_20419 = null;
var inst_20420 = (0);
var inst_20421 = (0);
var state_20466__$1 = (function (){var statearr_20483 = state_20466;
(statearr_20483[(8)] = inst_20420);

(statearr_20483[(10)] = inst_20418);

(statearr_20483[(11)] = inst_20421);

(statearr_20483[(12)] = inst_20419);

return statearr_20483;
})();
var statearr_20484_20515 = state_20466__$1;
(statearr_20484_20515[(2)] = null);

(statearr_20484_20515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (17))){
var inst_20432 = (state_20466[(7)]);
var inst_20436 = cljs.core.chunk_first.call(null,inst_20432);
var inst_20437 = cljs.core.chunk_rest.call(null,inst_20432);
var inst_20438 = cljs.core.count.call(null,inst_20436);
var inst_20418 = inst_20437;
var inst_20419 = inst_20436;
var inst_20420 = inst_20438;
var inst_20421 = (0);
var state_20466__$1 = (function (){var statearr_20485 = state_20466;
(statearr_20485[(8)] = inst_20420);

(statearr_20485[(10)] = inst_20418);

(statearr_20485[(11)] = inst_20421);

(statearr_20485[(12)] = inst_20419);

return statearr_20485;
})();
var statearr_20486_20516 = state_20466__$1;
(statearr_20486_20516[(2)] = null);

(statearr_20486_20516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (3))){
var inst_20464 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20466__$1,inst_20464);
} else {
if((state_val_20467 === (12))){
var inst_20452 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20487_20517 = state_20466__$1;
(statearr_20487_20517[(2)] = inst_20452);

(statearr_20487_20517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (2))){
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20466__$1,(4),in$);
} else {
if((state_val_20467 === (23))){
var inst_20460 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20488_20518 = state_20466__$1;
(statearr_20488_20518[(2)] = inst_20460);

(statearr_20488_20518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (19))){
var inst_20447 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20489_20519 = state_20466__$1;
(statearr_20489_20519[(2)] = inst_20447);

(statearr_20489_20519[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (11))){
var inst_20418 = (state_20466[(10)]);
var inst_20432 = (state_20466[(7)]);
var inst_20432__$1 = cljs.core.seq.call(null,inst_20418);
var state_20466__$1 = (function (){var statearr_20490 = state_20466;
(statearr_20490[(7)] = inst_20432__$1);

return statearr_20490;
})();
if(inst_20432__$1){
var statearr_20491_20520 = state_20466__$1;
(statearr_20491_20520[(1)] = (14));

} else {
var statearr_20492_20521 = state_20466__$1;
(statearr_20492_20521[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (9))){
var inst_20454 = (state_20466[(2)]);
var inst_20455 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20466__$1 = (function (){var statearr_20493 = state_20466;
(statearr_20493[(15)] = inst_20454);

return statearr_20493;
})();
if(cljs.core.truth_(inst_20455)){
var statearr_20494_20522 = state_20466__$1;
(statearr_20494_20522[(1)] = (21));

} else {
var statearr_20495_20523 = state_20466__$1;
(statearr_20495_20523[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (5))){
var inst_20410 = cljs.core.async.close_BANG_.call(null,out);
var state_20466__$1 = state_20466;
var statearr_20496_20524 = state_20466__$1;
(statearr_20496_20524[(2)] = inst_20410);

(statearr_20496_20524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (14))){
var inst_20432 = (state_20466[(7)]);
var inst_20434 = cljs.core.chunked_seq_QMARK_.call(null,inst_20432);
var state_20466__$1 = state_20466;
if(inst_20434){
var statearr_20497_20525 = state_20466__$1;
(statearr_20497_20525[(1)] = (17));

} else {
var statearr_20498_20526 = state_20466__$1;
(statearr_20498_20526[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (16))){
var inst_20450 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20499_20527 = state_20466__$1;
(statearr_20499_20527[(2)] = inst_20450);

(statearr_20499_20527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (10))){
var inst_20421 = (state_20466[(11)]);
var inst_20419 = (state_20466[(12)]);
var inst_20426 = cljs.core._nth.call(null,inst_20419,inst_20421);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20466__$1,(13),out,inst_20426);
} else {
if((state_val_20467 === (18))){
var inst_20432 = (state_20466[(7)]);
var inst_20441 = cljs.core.first.call(null,inst_20432);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20466__$1,(20),out,inst_20441);
} else {
if((state_val_20467 === (8))){
var inst_20420 = (state_20466[(8)]);
var inst_20421 = (state_20466[(11)]);
var inst_20423 = (inst_20421 < inst_20420);
var inst_20424 = inst_20423;
var state_20466__$1 = state_20466;
if(cljs.core.truth_(inst_20424)){
var statearr_20500_20528 = state_20466__$1;
(statearr_20500_20528[(1)] = (10));

} else {
var statearr_20501_20529 = state_20466__$1;
(statearr_20501_20529[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16794__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16794__auto____0 = (function (){
var statearr_20502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20502[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16794__auto__);

(statearr_20502[(1)] = (1));

return statearr_20502;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16794__auto____1 = (function (state_20466){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20503){if((e20503 instanceof Object)){
var ex__16797__auto__ = e20503;
var statearr_20504_20530 = state_20466;
(statearr_20504_20530[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20531 = state_20466;
state_20466 = G__20531;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16794__auto__ = function(state_20466){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16794__auto____1.call(this,state_20466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16794__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16794__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20505 = f__16961__auto__.call(null);
(statearr_20505[(6)] = c__16960__auto__);

return statearr_20505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20533 = arguments.length;
switch (G__20533) {
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
var G__20536 = arguments.length;
switch (G__20536) {
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
var G__20539 = arguments.length;
switch (G__20539) {
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
var c__16960__auto___20586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20563){
var state_val_20564 = (state_20563[(1)]);
if((state_val_20564 === (7))){
var inst_20558 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20565_20587 = state_20563__$1;
(statearr_20565_20587[(2)] = inst_20558);

(statearr_20565_20587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (1))){
var inst_20540 = null;
var state_20563__$1 = (function (){var statearr_20566 = state_20563;
(statearr_20566[(7)] = inst_20540);

return statearr_20566;
})();
var statearr_20567_20588 = state_20563__$1;
(statearr_20567_20588[(2)] = null);

(statearr_20567_20588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (4))){
var inst_20543 = (state_20563[(8)]);
var inst_20543__$1 = (state_20563[(2)]);
var inst_20544 = (inst_20543__$1 == null);
var inst_20545 = cljs.core.not.call(null,inst_20544);
var state_20563__$1 = (function (){var statearr_20568 = state_20563;
(statearr_20568[(8)] = inst_20543__$1);

return statearr_20568;
})();
if(inst_20545){
var statearr_20569_20589 = state_20563__$1;
(statearr_20569_20589[(1)] = (5));

} else {
var statearr_20570_20590 = state_20563__$1;
(statearr_20570_20590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (6))){
var state_20563__$1 = state_20563;
var statearr_20571_20591 = state_20563__$1;
(statearr_20571_20591[(2)] = null);

(statearr_20571_20591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (3))){
var inst_20560 = (state_20563[(2)]);
var inst_20561 = cljs.core.async.close_BANG_.call(null,out);
var state_20563__$1 = (function (){var statearr_20572 = state_20563;
(statearr_20572[(9)] = inst_20560);

return statearr_20572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20563__$1,inst_20561);
} else {
if((state_val_20564 === (2))){
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20563__$1,(4),ch);
} else {
if((state_val_20564 === (11))){
var inst_20543 = (state_20563[(8)]);
var inst_20552 = (state_20563[(2)]);
var inst_20540 = inst_20543;
var state_20563__$1 = (function (){var statearr_20573 = state_20563;
(statearr_20573[(10)] = inst_20552);

(statearr_20573[(7)] = inst_20540);

return statearr_20573;
})();
var statearr_20574_20592 = state_20563__$1;
(statearr_20574_20592[(2)] = null);

(statearr_20574_20592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (9))){
var inst_20543 = (state_20563[(8)]);
var state_20563__$1 = state_20563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20563__$1,(11),out,inst_20543);
} else {
if((state_val_20564 === (5))){
var inst_20543 = (state_20563[(8)]);
var inst_20540 = (state_20563[(7)]);
var inst_20547 = cljs.core._EQ_.call(null,inst_20543,inst_20540);
var state_20563__$1 = state_20563;
if(inst_20547){
var statearr_20576_20593 = state_20563__$1;
(statearr_20576_20593[(1)] = (8));

} else {
var statearr_20577_20594 = state_20563__$1;
(statearr_20577_20594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (10))){
var inst_20555 = (state_20563[(2)]);
var state_20563__$1 = state_20563;
var statearr_20578_20595 = state_20563__$1;
(statearr_20578_20595[(2)] = inst_20555);

(statearr_20578_20595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20564 === (8))){
var inst_20540 = (state_20563[(7)]);
var tmp20575 = inst_20540;
var inst_20540__$1 = tmp20575;
var state_20563__$1 = (function (){var statearr_20579 = state_20563;
(statearr_20579[(7)] = inst_20540__$1);

return statearr_20579;
})();
var statearr_20580_20596 = state_20563__$1;
(statearr_20580_20596[(2)] = null);

(statearr_20580_20596[(1)] = (2));


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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20581[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20581[(1)] = (1));

return statearr_20581;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20563){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20582){if((e20582 instanceof Object)){
var ex__16797__auto__ = e20582;
var statearr_20583_20597 = state_20563;
(statearr_20583_20597[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20598 = state_20563;
state_20563 = G__20598;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20584 = f__16961__auto__.call(null);
(statearr_20584[(6)] = c__16960__auto___20586);

return statearr_20584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20600 = arguments.length;
switch (G__20600) {
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
var c__16960__auto___20666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20638){
var state_val_20639 = (state_20638[(1)]);
if((state_val_20639 === (7))){
var inst_20634 = (state_20638[(2)]);
var state_20638__$1 = state_20638;
var statearr_20640_20667 = state_20638__$1;
(statearr_20640_20667[(2)] = inst_20634);

(statearr_20640_20667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (1))){
var inst_20601 = (new Array(n));
var inst_20602 = inst_20601;
var inst_20603 = (0);
var state_20638__$1 = (function (){var statearr_20641 = state_20638;
(statearr_20641[(7)] = inst_20603);

(statearr_20641[(8)] = inst_20602);

return statearr_20641;
})();
var statearr_20642_20668 = state_20638__$1;
(statearr_20642_20668[(2)] = null);

(statearr_20642_20668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (4))){
var inst_20606 = (state_20638[(9)]);
var inst_20606__$1 = (state_20638[(2)]);
var inst_20607 = (inst_20606__$1 == null);
var inst_20608 = cljs.core.not.call(null,inst_20607);
var state_20638__$1 = (function (){var statearr_20643 = state_20638;
(statearr_20643[(9)] = inst_20606__$1);

return statearr_20643;
})();
if(inst_20608){
var statearr_20644_20669 = state_20638__$1;
(statearr_20644_20669[(1)] = (5));

} else {
var statearr_20645_20670 = state_20638__$1;
(statearr_20645_20670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (15))){
var inst_20628 = (state_20638[(2)]);
var state_20638__$1 = state_20638;
var statearr_20646_20671 = state_20638__$1;
(statearr_20646_20671[(2)] = inst_20628);

(statearr_20646_20671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (13))){
var state_20638__$1 = state_20638;
var statearr_20647_20672 = state_20638__$1;
(statearr_20647_20672[(2)] = null);

(statearr_20647_20672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (6))){
var inst_20603 = (state_20638[(7)]);
var inst_20624 = (inst_20603 > (0));
var state_20638__$1 = state_20638;
if(cljs.core.truth_(inst_20624)){
var statearr_20648_20673 = state_20638__$1;
(statearr_20648_20673[(1)] = (12));

} else {
var statearr_20649_20674 = state_20638__$1;
(statearr_20649_20674[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (3))){
var inst_20636 = (state_20638[(2)]);
var state_20638__$1 = state_20638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20638__$1,inst_20636);
} else {
if((state_val_20639 === (12))){
var inst_20602 = (state_20638[(8)]);
var inst_20626 = cljs.core.vec.call(null,inst_20602);
var state_20638__$1 = state_20638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20638__$1,(15),out,inst_20626);
} else {
if((state_val_20639 === (2))){
var state_20638__$1 = state_20638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20638__$1,(4),ch);
} else {
if((state_val_20639 === (11))){
var inst_20618 = (state_20638[(2)]);
var inst_20619 = (new Array(n));
var inst_20602 = inst_20619;
var inst_20603 = (0);
var state_20638__$1 = (function (){var statearr_20650 = state_20638;
(statearr_20650[(7)] = inst_20603);

(statearr_20650[(10)] = inst_20618);

(statearr_20650[(8)] = inst_20602);

return statearr_20650;
})();
var statearr_20651_20675 = state_20638__$1;
(statearr_20651_20675[(2)] = null);

(statearr_20651_20675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (9))){
var inst_20602 = (state_20638[(8)]);
var inst_20616 = cljs.core.vec.call(null,inst_20602);
var state_20638__$1 = state_20638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20638__$1,(11),out,inst_20616);
} else {
if((state_val_20639 === (5))){
var inst_20603 = (state_20638[(7)]);
var inst_20611 = (state_20638[(11)]);
var inst_20602 = (state_20638[(8)]);
var inst_20606 = (state_20638[(9)]);
var inst_20610 = (inst_20602[inst_20603] = inst_20606);
var inst_20611__$1 = (inst_20603 + (1));
var inst_20612 = (inst_20611__$1 < n);
var state_20638__$1 = (function (){var statearr_20652 = state_20638;
(statearr_20652[(12)] = inst_20610);

(statearr_20652[(11)] = inst_20611__$1);

return statearr_20652;
})();
if(cljs.core.truth_(inst_20612)){
var statearr_20653_20676 = state_20638__$1;
(statearr_20653_20676[(1)] = (8));

} else {
var statearr_20654_20677 = state_20638__$1;
(statearr_20654_20677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (14))){
var inst_20631 = (state_20638[(2)]);
var inst_20632 = cljs.core.async.close_BANG_.call(null,out);
var state_20638__$1 = (function (){var statearr_20656 = state_20638;
(statearr_20656[(13)] = inst_20631);

return statearr_20656;
})();
var statearr_20657_20678 = state_20638__$1;
(statearr_20657_20678[(2)] = inst_20632);

(statearr_20657_20678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (10))){
var inst_20622 = (state_20638[(2)]);
var state_20638__$1 = state_20638;
var statearr_20658_20679 = state_20638__$1;
(statearr_20658_20679[(2)] = inst_20622);

(statearr_20658_20679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20639 === (8))){
var inst_20611 = (state_20638[(11)]);
var inst_20602 = (state_20638[(8)]);
var tmp20655 = inst_20602;
var inst_20602__$1 = tmp20655;
var inst_20603 = inst_20611;
var state_20638__$1 = (function (){var statearr_20659 = state_20638;
(statearr_20659[(7)] = inst_20603);

(statearr_20659[(8)] = inst_20602__$1);

return statearr_20659;
})();
var statearr_20660_20680 = state_20638__$1;
(statearr_20660_20680[(2)] = null);

(statearr_20660_20680[(1)] = (2));


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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20661[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20661[(1)] = (1));

return statearr_20661;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20638){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20662){if((e20662 instanceof Object)){
var ex__16797__auto__ = e20662;
var statearr_20663_20681 = state_20638;
(statearr_20663_20681[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20682 = state_20638;
state_20638 = G__20682;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20664 = f__16961__auto__.call(null);
(statearr_20664[(6)] = c__16960__auto___20666);

return statearr_20664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20684 = arguments.length;
switch (G__20684) {
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
var c__16960__auto___20754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20726){
var state_val_20727 = (state_20726[(1)]);
if((state_val_20727 === (7))){
var inst_20722 = (state_20726[(2)]);
var state_20726__$1 = state_20726;
var statearr_20728_20755 = state_20726__$1;
(statearr_20728_20755[(2)] = inst_20722);

(statearr_20728_20755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (1))){
var inst_20685 = [];
var inst_20686 = inst_20685;
var inst_20687 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20726__$1 = (function (){var statearr_20729 = state_20726;
(statearr_20729[(7)] = inst_20686);

(statearr_20729[(8)] = inst_20687);

return statearr_20729;
})();
var statearr_20730_20756 = state_20726__$1;
(statearr_20730_20756[(2)] = null);

(statearr_20730_20756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (4))){
var inst_20690 = (state_20726[(9)]);
var inst_20690__$1 = (state_20726[(2)]);
var inst_20691 = (inst_20690__$1 == null);
var inst_20692 = cljs.core.not.call(null,inst_20691);
var state_20726__$1 = (function (){var statearr_20731 = state_20726;
(statearr_20731[(9)] = inst_20690__$1);

return statearr_20731;
})();
if(inst_20692){
var statearr_20732_20757 = state_20726__$1;
(statearr_20732_20757[(1)] = (5));

} else {
var statearr_20733_20758 = state_20726__$1;
(statearr_20733_20758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (15))){
var inst_20716 = (state_20726[(2)]);
var state_20726__$1 = state_20726;
var statearr_20734_20759 = state_20726__$1;
(statearr_20734_20759[(2)] = inst_20716);

(statearr_20734_20759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (13))){
var state_20726__$1 = state_20726;
var statearr_20735_20760 = state_20726__$1;
(statearr_20735_20760[(2)] = null);

(statearr_20735_20760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (6))){
var inst_20686 = (state_20726[(7)]);
var inst_20711 = inst_20686.length;
var inst_20712 = (inst_20711 > (0));
var state_20726__$1 = state_20726;
if(cljs.core.truth_(inst_20712)){
var statearr_20736_20761 = state_20726__$1;
(statearr_20736_20761[(1)] = (12));

} else {
var statearr_20737_20762 = state_20726__$1;
(statearr_20737_20762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (3))){
var inst_20724 = (state_20726[(2)]);
var state_20726__$1 = state_20726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20726__$1,inst_20724);
} else {
if((state_val_20727 === (12))){
var inst_20686 = (state_20726[(7)]);
var inst_20714 = cljs.core.vec.call(null,inst_20686);
var state_20726__$1 = state_20726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20726__$1,(15),out,inst_20714);
} else {
if((state_val_20727 === (2))){
var state_20726__$1 = state_20726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20726__$1,(4),ch);
} else {
if((state_val_20727 === (11))){
var inst_20690 = (state_20726[(9)]);
var inst_20694 = (state_20726[(10)]);
var inst_20704 = (state_20726[(2)]);
var inst_20705 = [];
var inst_20706 = inst_20705.push(inst_20690);
var inst_20686 = inst_20705;
var inst_20687 = inst_20694;
var state_20726__$1 = (function (){var statearr_20738 = state_20726;
(statearr_20738[(7)] = inst_20686);

(statearr_20738[(11)] = inst_20704);

(statearr_20738[(8)] = inst_20687);

(statearr_20738[(12)] = inst_20706);

return statearr_20738;
})();
var statearr_20739_20763 = state_20726__$1;
(statearr_20739_20763[(2)] = null);

(statearr_20739_20763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (9))){
var inst_20686 = (state_20726[(7)]);
var inst_20702 = cljs.core.vec.call(null,inst_20686);
var state_20726__$1 = state_20726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20726__$1,(11),out,inst_20702);
} else {
if((state_val_20727 === (5))){
var inst_20690 = (state_20726[(9)]);
var inst_20687 = (state_20726[(8)]);
var inst_20694 = (state_20726[(10)]);
var inst_20694__$1 = f.call(null,inst_20690);
var inst_20695 = cljs.core._EQ_.call(null,inst_20694__$1,inst_20687);
var inst_20696 = cljs.core.keyword_identical_QMARK_.call(null,inst_20687,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20697 = ((inst_20695) || (inst_20696));
var state_20726__$1 = (function (){var statearr_20740 = state_20726;
(statearr_20740[(10)] = inst_20694__$1);

return statearr_20740;
})();
if(cljs.core.truth_(inst_20697)){
var statearr_20741_20764 = state_20726__$1;
(statearr_20741_20764[(1)] = (8));

} else {
var statearr_20742_20765 = state_20726__$1;
(statearr_20742_20765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (14))){
var inst_20719 = (state_20726[(2)]);
var inst_20720 = cljs.core.async.close_BANG_.call(null,out);
var state_20726__$1 = (function (){var statearr_20744 = state_20726;
(statearr_20744[(13)] = inst_20719);

return statearr_20744;
})();
var statearr_20745_20766 = state_20726__$1;
(statearr_20745_20766[(2)] = inst_20720);

(statearr_20745_20766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (10))){
var inst_20709 = (state_20726[(2)]);
var state_20726__$1 = state_20726;
var statearr_20746_20767 = state_20726__$1;
(statearr_20746_20767[(2)] = inst_20709);

(statearr_20746_20767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20727 === (8))){
var inst_20686 = (state_20726[(7)]);
var inst_20690 = (state_20726[(9)]);
var inst_20694 = (state_20726[(10)]);
var inst_20699 = inst_20686.push(inst_20690);
var tmp20743 = inst_20686;
var inst_20686__$1 = tmp20743;
var inst_20687 = inst_20694;
var state_20726__$1 = (function (){var statearr_20747 = state_20726;
(statearr_20747[(7)] = inst_20686__$1);

(statearr_20747[(14)] = inst_20699);

(statearr_20747[(8)] = inst_20687);

return statearr_20747;
})();
var statearr_20748_20768 = state_20726__$1;
(statearr_20748_20768[(2)] = null);

(statearr_20748_20768[(1)] = (2));


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
var cljs$core$async$state_machine__16794__auto__ = null;
var cljs$core$async$state_machine__16794__auto____0 = (function (){
var statearr_20749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20749[(0)] = cljs$core$async$state_machine__16794__auto__);

(statearr_20749[(1)] = (1));

return statearr_20749;
});
var cljs$core$async$state_machine__16794__auto____1 = (function (state_20726){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20750){if((e20750 instanceof Object)){
var ex__16797__auto__ = e20750;
var statearr_20751_20769 = state_20726;
(statearr_20751_20769[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20770 = state_20726;
state_20726 = G__20770;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs$core$async$state_machine__16794__auto__ = function(state_20726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16794__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16794__auto____1.call(this,state_20726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16794__auto____0;
cljs$core$async$state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16794__auto____1;
return cljs$core$async$state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20752 = f__16961__auto__.call(null);
(statearr_20752[(6)] = c__16960__auto___20754);

return statearr_20752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
