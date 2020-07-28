// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18680 = arguments.length;
switch (G__18680) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18681 = (function (f,blockable,meta18682){
this.f = f;
this.blockable = blockable;
this.meta18682 = meta18682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18683,meta18682__$1){
var self__ = this;
var _18683__$1 = this;
return (new cljs.core.async.t_cljs$core$async18681(self__.f,self__.blockable,meta18682__$1));
});

cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18683){
var self__ = this;
var _18683__$1 = this;
return self__.meta18682;
});

cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18682","meta18682",899936264,null)], null);
});

cljs.core.async.t_cljs$core$async18681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18681";

cljs.core.async.t_cljs$core$async18681.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18681");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18681.
 */
cljs.core.async.__GT_t_cljs$core$async18681 = (function cljs$core$async$__GT_t_cljs$core$async18681(f__$1,blockable__$1,meta18682){
return (new cljs.core.async.t_cljs$core$async18681(f__$1,blockable__$1,meta18682));
});

}

return (new cljs.core.async.t_cljs$core$async18681(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
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
var G__18687 = arguments.length;
switch (G__18687) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18690 = arguments.length;
switch (G__18690) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__18693 = arguments.length;
switch (G__18693) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_18695 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_18695);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_18695,ret){
return (function (){
return fn1.call(null,val_18695);
});})(val_18695,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__18697 = arguments.length;
switch (G__18697) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___18699 = n;
var x_18700 = (0);
while(true){
if((x_18700 < n__4408__auto___18699)){
(a[x_18700] = (0));

var G__18701 = (x_18700 + (1));
x_18700 = G__18701;
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

var G__18702 = (i + (1));
i = G__18702;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18703 = (function (flag,meta18704){
this.flag = flag;
this.meta18704 = meta18704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18705,meta18704__$1){
var self__ = this;
var _18705__$1 = this;
return (new cljs.core.async.t_cljs$core$async18703(self__.flag,meta18704__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18705){
var self__ = this;
var _18705__$1 = this;
return self__.meta18704;
});})(flag))
;

cljs.core.async.t_cljs$core$async18703.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async18703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18703.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18704","meta18704",1346682512,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18703";

cljs.core.async.t_cljs$core$async18703.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18703");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18703.
 */
cljs.core.async.__GT_t_cljs$core$async18703 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18703(flag__$1,meta18704){
return (new cljs.core.async.t_cljs$core$async18703(flag__$1,meta18704));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18703(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18706 = (function (flag,cb,meta18707){
this.flag = flag;
this.cb = cb;
this.meta18707 = meta18707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18708,meta18707__$1){
var self__ = this;
var _18708__$1 = this;
return (new cljs.core.async.t_cljs$core$async18706(self__.flag,self__.cb,meta18707__$1));
});

cljs.core.async.t_cljs$core$async18706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18708){
var self__ = this;
var _18708__$1 = this;
return self__.meta18707;
});

cljs.core.async.t_cljs$core$async18706.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async18706.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18707","meta18707",-510336047,null)], null);
});

cljs.core.async.t_cljs$core$async18706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18706";

cljs.core.async.t_cljs$core$async18706.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async18706");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18706.
 */
cljs.core.async.__GT_t_cljs$core$async18706 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18706(flag__$1,cb__$1,meta18707){
return (new cljs.core.async.t_cljs$core$async18706(flag__$1,cb__$1,meta18707));
});

}

return (new cljs.core.async.t_cljs$core$async18706(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__18709_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18709_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18710_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18711 = (i + (1));
i = G__18711;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___18717 = arguments.length;
var i__4532__auto___18718 = (0);
while(true){
if((i__4532__auto___18718 < len__4531__auto___18717)){
args__4534__auto__.push((arguments[i__4532__auto___18718]));

var G__18719 = (i__4532__auto___18718 + (1));
i__4532__auto___18718 = G__18719;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18714){
var map__18715 = p__18714;
var map__18715__$1 = ((((!((map__18715 == null)))?(((((map__18715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18715):map__18715);
var opts = map__18715__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18712){
var G__18713 = cljs.core.first.call(null,seq18712);
var seq18712__$1 = cljs.core.next.call(null,seq18712);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18713,seq18712__$1);
});

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
var G__18721 = arguments.length;
switch (G__18721) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16756__auto___18767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___18767){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___18767){
return (function (state_18745){
var state_val_18746 = (state_18745[(1)]);
if((state_val_18746 === (7))){
var inst_18741 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
var statearr_18747_18768 = state_18745__$1;
(statearr_18747_18768[(2)] = inst_18741);

(statearr_18747_18768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (1))){
var state_18745__$1 = state_18745;
var statearr_18748_18769 = state_18745__$1;
(statearr_18748_18769[(2)] = null);

(statearr_18748_18769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (4))){
var inst_18724 = (state_18745[(7)]);
var inst_18724__$1 = (state_18745[(2)]);
var inst_18725 = (inst_18724__$1 == null);
var state_18745__$1 = (function (){var statearr_18749 = state_18745;
(statearr_18749[(7)] = inst_18724__$1);

return statearr_18749;
})();
if(cljs.core.truth_(inst_18725)){
var statearr_18750_18770 = state_18745__$1;
(statearr_18750_18770[(1)] = (5));

} else {
var statearr_18751_18771 = state_18745__$1;
(statearr_18751_18771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (13))){
var state_18745__$1 = state_18745;
var statearr_18752_18772 = state_18745__$1;
(statearr_18752_18772[(2)] = null);

(statearr_18752_18772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (6))){
var inst_18724 = (state_18745[(7)]);
var state_18745__$1 = state_18745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18745__$1,(11),to,inst_18724);
} else {
if((state_val_18746 === (3))){
var inst_18743 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18745__$1,inst_18743);
} else {
if((state_val_18746 === (12))){
var state_18745__$1 = state_18745;
var statearr_18753_18773 = state_18745__$1;
(statearr_18753_18773[(2)] = null);

(statearr_18753_18773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (2))){
var state_18745__$1 = state_18745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18745__$1,(4),from);
} else {
if((state_val_18746 === (11))){
var inst_18734 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
if(cljs.core.truth_(inst_18734)){
var statearr_18754_18774 = state_18745__$1;
(statearr_18754_18774[(1)] = (12));

} else {
var statearr_18755_18775 = state_18745__$1;
(statearr_18755_18775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (9))){
var state_18745__$1 = state_18745;
var statearr_18756_18776 = state_18745__$1;
(statearr_18756_18776[(2)] = null);

(statearr_18756_18776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (5))){
var state_18745__$1 = state_18745;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18757_18777 = state_18745__$1;
(statearr_18757_18777[(1)] = (8));

} else {
var statearr_18758_18778 = state_18745__$1;
(statearr_18758_18778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (14))){
var inst_18739 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
var statearr_18759_18779 = state_18745__$1;
(statearr_18759_18779[(2)] = inst_18739);

(statearr_18759_18779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (10))){
var inst_18731 = (state_18745[(2)]);
var state_18745__$1 = state_18745;
var statearr_18760_18780 = state_18745__$1;
(statearr_18760_18780[(2)] = inst_18731);

(statearr_18760_18780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18746 === (8))){
var inst_18728 = cljs.core.async.close_BANG_.call(null,to);
var state_18745__$1 = state_18745;
var statearr_18761_18781 = state_18745__$1;
(statearr_18761_18781[(2)] = inst_18728);

(statearr_18761_18781[(1)] = (10));


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
});})(c__16756__auto___18767))
;
return ((function (switch__16597__auto__,c__16756__auto___18767){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_18762 = [null,null,null,null,null,null,null,null];
(statearr_18762[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_18762[(1)] = (1));

return statearr_18762;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_18745){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_18745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e18763){if((e18763 instanceof Object)){
var ex__16601__auto__ = e18763;
var statearr_18764_18782 = state_18745;
(statearr_18764_18782[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18783 = state_18745;
state_18745 = G__18783;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_18745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_18745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___18767))
})();
var state__16758__auto__ = (function (){var statearr_18765 = f__16757__auto__.call(null);
(statearr_18765[(6)] = c__16756__auto___18767);

return statearr_18765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___18767))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18784){
var vec__18785 = p__18784;
var v = cljs.core.nth.call(null,vec__18785,(0),null);
var p = cljs.core.nth.call(null,vec__18785,(1),null);
var job = vec__18785;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16756__auto___18956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___18956,res,vec__18785,v,p,job,jobs,results){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___18956,res,vec__18785,v,p,job,jobs,results){
return (function (state_18792){
var state_val_18793 = (state_18792[(1)]);
if((state_val_18793 === (1))){
var state_18792__$1 = state_18792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18792__$1,(2),res,v);
} else {
if((state_val_18793 === (2))){
var inst_18789 = (state_18792[(2)]);
var inst_18790 = cljs.core.async.close_BANG_.call(null,res);
var state_18792__$1 = (function (){var statearr_18794 = state_18792;
(statearr_18794[(7)] = inst_18789);

return statearr_18794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18792__$1,inst_18790);
} else {
return null;
}
}
});})(c__16756__auto___18956,res,vec__18785,v,p,job,jobs,results))
;
return ((function (switch__16597__auto__,c__16756__auto___18956,res,vec__18785,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0 = (function (){
var statearr_18795 = [null,null,null,null,null,null,null,null];
(statearr_18795[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__);

(statearr_18795[(1)] = (1));

return statearr_18795;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1 = (function (state_18792){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_18792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e18796){if((e18796 instanceof Object)){
var ex__16601__auto__ = e18796;
var statearr_18797_18957 = state_18792;
(statearr_18797_18957[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18958 = state_18792;
state_18792 = G__18958;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = function(state_18792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1.call(this,state_18792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___18956,res,vec__18785,v,p,job,jobs,results))
})();
var state__16758__auto__ = (function (){var statearr_18798 = f__16757__auto__.call(null);
(statearr_18798[(6)] = c__16756__auto___18956);

return statearr_18798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___18956,res,vec__18785,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18799){
var vec__18800 = p__18799;
var v = cljs.core.nth.call(null,vec__18800,(0),null);
var p = cljs.core.nth.call(null,vec__18800,(1),null);
var job = vec__18800;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18959 = n;
var __18960 = (0);
while(true){
if((__18960 < n__4408__auto___18959)){
var G__18803_18961 = type;
var G__18803_18962__$1 = (((G__18803_18961 instanceof cljs.core.Keyword))?G__18803_18961.fqn:null);
switch (G__18803_18962__$1) {
case "compute":
var c__16756__auto___18964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18960,c__16756__auto___18964,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (__18960,c__16756__auto___18964,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async){
return (function (state_18816){
var state_val_18817 = (state_18816[(1)]);
if((state_val_18817 === (1))){
var state_18816__$1 = state_18816;
var statearr_18818_18965 = state_18816__$1;
(statearr_18818_18965[(2)] = null);

(statearr_18818_18965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (2))){
var state_18816__$1 = state_18816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18816__$1,(4),jobs);
} else {
if((state_val_18817 === (3))){
var inst_18814 = (state_18816[(2)]);
var state_18816__$1 = state_18816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18816__$1,inst_18814);
} else {
if((state_val_18817 === (4))){
var inst_18806 = (state_18816[(2)]);
var inst_18807 = process.call(null,inst_18806);
var state_18816__$1 = state_18816;
if(cljs.core.truth_(inst_18807)){
var statearr_18819_18966 = state_18816__$1;
(statearr_18819_18966[(1)] = (5));

} else {
var statearr_18820_18967 = state_18816__$1;
(statearr_18820_18967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (5))){
var state_18816__$1 = state_18816;
var statearr_18821_18968 = state_18816__$1;
(statearr_18821_18968[(2)] = null);

(statearr_18821_18968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (6))){
var state_18816__$1 = state_18816;
var statearr_18822_18969 = state_18816__$1;
(statearr_18822_18969[(2)] = null);

(statearr_18822_18969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18817 === (7))){
var inst_18812 = (state_18816[(2)]);
var state_18816__$1 = state_18816;
var statearr_18823_18970 = state_18816__$1;
(statearr_18823_18970[(2)] = inst_18812);

(statearr_18823_18970[(1)] = (3));


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
});})(__18960,c__16756__auto___18964,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async))
;
return ((function (__18960,switch__16597__auto__,c__16756__auto___18964,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0 = (function (){
var statearr_18824 = [null,null,null,null,null,null,null];
(statearr_18824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__);

(statearr_18824[(1)] = (1));

return statearr_18824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1 = (function (state_18816){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_18816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e18825){if((e18825 instanceof Object)){
var ex__16601__auto__ = e18825;
var statearr_18826_18971 = state_18816;
(statearr_18826_18971[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18972 = state_18816;
state_18816 = G__18972;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = function(state_18816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1.call(this,state_18816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__;
})()
;})(__18960,switch__16597__auto__,c__16756__auto___18964,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async))
})();
var state__16758__auto__ = (function (){var statearr_18827 = f__16757__auto__.call(null);
(statearr_18827[(6)] = c__16756__auto___18964);

return statearr_18827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(__18960,c__16756__auto___18964,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async))
);


break;
case "async":
var c__16756__auto___18973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18960,c__16756__auto___18973,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (__18960,c__16756__auto___18973,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async){
return (function (state_18840){
var state_val_18841 = (state_18840[(1)]);
if((state_val_18841 === (1))){
var state_18840__$1 = state_18840;
var statearr_18842_18974 = state_18840__$1;
(statearr_18842_18974[(2)] = null);

(statearr_18842_18974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18841 === (2))){
var state_18840__$1 = state_18840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18840__$1,(4),jobs);
} else {
if((state_val_18841 === (3))){
var inst_18838 = (state_18840[(2)]);
var state_18840__$1 = state_18840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18840__$1,inst_18838);
} else {
if((state_val_18841 === (4))){
var inst_18830 = (state_18840[(2)]);
var inst_18831 = async.call(null,inst_18830);
var state_18840__$1 = state_18840;
if(cljs.core.truth_(inst_18831)){
var statearr_18843_18975 = state_18840__$1;
(statearr_18843_18975[(1)] = (5));

} else {
var statearr_18844_18976 = state_18840__$1;
(statearr_18844_18976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18841 === (5))){
var state_18840__$1 = state_18840;
var statearr_18845_18977 = state_18840__$1;
(statearr_18845_18977[(2)] = null);

(statearr_18845_18977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18841 === (6))){
var state_18840__$1 = state_18840;
var statearr_18846_18978 = state_18840__$1;
(statearr_18846_18978[(2)] = null);

(statearr_18846_18978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18841 === (7))){
var inst_18836 = (state_18840[(2)]);
var state_18840__$1 = state_18840;
var statearr_18847_18979 = state_18840__$1;
(statearr_18847_18979[(2)] = inst_18836);

(statearr_18847_18979[(1)] = (3));


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
});})(__18960,c__16756__auto___18973,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async))
;
return ((function (__18960,switch__16597__auto__,c__16756__auto___18973,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0 = (function (){
var statearr_18848 = [null,null,null,null,null,null,null];
(statearr_18848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__);

(statearr_18848[(1)] = (1));

return statearr_18848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1 = (function (state_18840){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_18840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e18849){if((e18849 instanceof Object)){
var ex__16601__auto__ = e18849;
var statearr_18850_18980 = state_18840;
(statearr_18850_18980[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18981 = state_18840;
state_18840 = G__18981;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = function(state_18840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1.call(this,state_18840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__;
})()
;})(__18960,switch__16597__auto__,c__16756__auto___18973,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async))
})();
var state__16758__auto__ = (function (){var statearr_18851 = f__16757__auto__.call(null);
(statearr_18851[(6)] = c__16756__auto___18973);

return statearr_18851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(__18960,c__16756__auto___18973,G__18803_18961,G__18803_18962__$1,n__4408__auto___18959,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18803_18962__$1)].join('')));

}

var G__18982 = (__18960 + (1));
__18960 = G__18982;
continue;
} else {
}
break;
}

var c__16756__auto___18983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___18983,jobs,results,process,async){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___18983,jobs,results,process,async){
return (function (state_18873){
var state_val_18874 = (state_18873[(1)]);
if((state_val_18874 === (1))){
var state_18873__$1 = state_18873;
var statearr_18875_18984 = state_18873__$1;
(statearr_18875_18984[(2)] = null);

(statearr_18875_18984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (2))){
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18873__$1,(4),from);
} else {
if((state_val_18874 === (3))){
var inst_18871 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18873__$1,inst_18871);
} else {
if((state_val_18874 === (4))){
var inst_18854 = (state_18873[(7)]);
var inst_18854__$1 = (state_18873[(2)]);
var inst_18855 = (inst_18854__$1 == null);
var state_18873__$1 = (function (){var statearr_18876 = state_18873;
(statearr_18876[(7)] = inst_18854__$1);

return statearr_18876;
})();
if(cljs.core.truth_(inst_18855)){
var statearr_18877_18985 = state_18873__$1;
(statearr_18877_18985[(1)] = (5));

} else {
var statearr_18878_18986 = state_18873__$1;
(statearr_18878_18986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (5))){
var inst_18857 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18873__$1 = state_18873;
var statearr_18879_18987 = state_18873__$1;
(statearr_18879_18987[(2)] = inst_18857);

(statearr_18879_18987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (6))){
var inst_18859 = (state_18873[(8)]);
var inst_18854 = (state_18873[(7)]);
var inst_18859__$1 = cljs.core.async.chan.call(null,(1));
var inst_18860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18861 = [inst_18854,inst_18859__$1];
var inst_18862 = (new cljs.core.PersistentVector(null,2,(5),inst_18860,inst_18861,null));
var state_18873__$1 = (function (){var statearr_18880 = state_18873;
(statearr_18880[(8)] = inst_18859__$1);

return statearr_18880;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18873__$1,(8),jobs,inst_18862);
} else {
if((state_val_18874 === (7))){
var inst_18869 = (state_18873[(2)]);
var state_18873__$1 = state_18873;
var statearr_18881_18988 = state_18873__$1;
(statearr_18881_18988[(2)] = inst_18869);

(statearr_18881_18988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18874 === (8))){
var inst_18859 = (state_18873[(8)]);
var inst_18864 = (state_18873[(2)]);
var state_18873__$1 = (function (){var statearr_18882 = state_18873;
(statearr_18882[(9)] = inst_18864);

return statearr_18882;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18873__$1,(9),results,inst_18859);
} else {
if((state_val_18874 === (9))){
var inst_18866 = (state_18873[(2)]);
var state_18873__$1 = (function (){var statearr_18883 = state_18873;
(statearr_18883[(10)] = inst_18866);

return statearr_18883;
})();
var statearr_18884_18989 = state_18873__$1;
(statearr_18884_18989[(2)] = null);

(statearr_18884_18989[(1)] = (2));


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
});})(c__16756__auto___18983,jobs,results,process,async))
;
return ((function (switch__16597__auto__,c__16756__auto___18983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0 = (function (){
var statearr_18885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__);

(statearr_18885[(1)] = (1));

return statearr_18885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1 = (function (state_18873){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_18873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e18886){if((e18886 instanceof Object)){
var ex__16601__auto__ = e18886;
var statearr_18887_18990 = state_18873;
(statearr_18887_18990[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18991 = state_18873;
state_18873 = G__18991;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = function(state_18873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1.call(this,state_18873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___18983,jobs,results,process,async))
})();
var state__16758__auto__ = (function (){var statearr_18888 = f__16757__auto__.call(null);
(statearr_18888[(6)] = c__16756__auto___18983);

return statearr_18888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___18983,jobs,results,process,async))
);


var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__,jobs,results,process,async){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__,jobs,results,process,async){
return (function (state_18926){
var state_val_18927 = (state_18926[(1)]);
if((state_val_18927 === (7))){
var inst_18922 = (state_18926[(2)]);
var state_18926__$1 = state_18926;
var statearr_18928_18992 = state_18926__$1;
(statearr_18928_18992[(2)] = inst_18922);

(statearr_18928_18992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (20))){
var state_18926__$1 = state_18926;
var statearr_18929_18993 = state_18926__$1;
(statearr_18929_18993[(2)] = null);

(statearr_18929_18993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (1))){
var state_18926__$1 = state_18926;
var statearr_18930_18994 = state_18926__$1;
(statearr_18930_18994[(2)] = null);

(statearr_18930_18994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (4))){
var inst_18891 = (state_18926[(7)]);
var inst_18891__$1 = (state_18926[(2)]);
var inst_18892 = (inst_18891__$1 == null);
var state_18926__$1 = (function (){var statearr_18931 = state_18926;
(statearr_18931[(7)] = inst_18891__$1);

return statearr_18931;
})();
if(cljs.core.truth_(inst_18892)){
var statearr_18932_18995 = state_18926__$1;
(statearr_18932_18995[(1)] = (5));

} else {
var statearr_18933_18996 = state_18926__$1;
(statearr_18933_18996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (15))){
var inst_18904 = (state_18926[(8)]);
var state_18926__$1 = state_18926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18926__$1,(18),to,inst_18904);
} else {
if((state_val_18927 === (21))){
var inst_18917 = (state_18926[(2)]);
var state_18926__$1 = state_18926;
var statearr_18934_18997 = state_18926__$1;
(statearr_18934_18997[(2)] = inst_18917);

(statearr_18934_18997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (13))){
var inst_18919 = (state_18926[(2)]);
var state_18926__$1 = (function (){var statearr_18935 = state_18926;
(statearr_18935[(9)] = inst_18919);

return statearr_18935;
})();
var statearr_18936_18998 = state_18926__$1;
(statearr_18936_18998[(2)] = null);

(statearr_18936_18998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (6))){
var inst_18891 = (state_18926[(7)]);
var state_18926__$1 = state_18926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18926__$1,(11),inst_18891);
} else {
if((state_val_18927 === (17))){
var inst_18912 = (state_18926[(2)]);
var state_18926__$1 = state_18926;
if(cljs.core.truth_(inst_18912)){
var statearr_18937_18999 = state_18926__$1;
(statearr_18937_18999[(1)] = (19));

} else {
var statearr_18938_19000 = state_18926__$1;
(statearr_18938_19000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (3))){
var inst_18924 = (state_18926[(2)]);
var state_18926__$1 = state_18926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18926__$1,inst_18924);
} else {
if((state_val_18927 === (12))){
var inst_18901 = (state_18926[(10)]);
var state_18926__$1 = state_18926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18926__$1,(14),inst_18901);
} else {
if((state_val_18927 === (2))){
var state_18926__$1 = state_18926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18926__$1,(4),results);
} else {
if((state_val_18927 === (19))){
var state_18926__$1 = state_18926;
var statearr_18939_19001 = state_18926__$1;
(statearr_18939_19001[(2)] = null);

(statearr_18939_19001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (11))){
var inst_18901 = (state_18926[(2)]);
var state_18926__$1 = (function (){var statearr_18940 = state_18926;
(statearr_18940[(10)] = inst_18901);

return statearr_18940;
})();
var statearr_18941_19002 = state_18926__$1;
(statearr_18941_19002[(2)] = null);

(statearr_18941_19002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (9))){
var state_18926__$1 = state_18926;
var statearr_18942_19003 = state_18926__$1;
(statearr_18942_19003[(2)] = null);

(statearr_18942_19003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (5))){
var state_18926__$1 = state_18926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18943_19004 = state_18926__$1;
(statearr_18943_19004[(1)] = (8));

} else {
var statearr_18944_19005 = state_18926__$1;
(statearr_18944_19005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (14))){
var inst_18906 = (state_18926[(11)]);
var inst_18904 = (state_18926[(8)]);
var inst_18904__$1 = (state_18926[(2)]);
var inst_18905 = (inst_18904__$1 == null);
var inst_18906__$1 = cljs.core.not.call(null,inst_18905);
var state_18926__$1 = (function (){var statearr_18945 = state_18926;
(statearr_18945[(11)] = inst_18906__$1);

(statearr_18945[(8)] = inst_18904__$1);

return statearr_18945;
})();
if(inst_18906__$1){
var statearr_18946_19006 = state_18926__$1;
(statearr_18946_19006[(1)] = (15));

} else {
var statearr_18947_19007 = state_18926__$1;
(statearr_18947_19007[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (16))){
var inst_18906 = (state_18926[(11)]);
var state_18926__$1 = state_18926;
var statearr_18948_19008 = state_18926__$1;
(statearr_18948_19008[(2)] = inst_18906);

(statearr_18948_19008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (10))){
var inst_18898 = (state_18926[(2)]);
var state_18926__$1 = state_18926;
var statearr_18949_19009 = state_18926__$1;
(statearr_18949_19009[(2)] = inst_18898);

(statearr_18949_19009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (18))){
var inst_18909 = (state_18926[(2)]);
var state_18926__$1 = state_18926;
var statearr_18950_19010 = state_18926__$1;
(statearr_18950_19010[(2)] = inst_18909);

(statearr_18950_19010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18927 === (8))){
var inst_18895 = cljs.core.async.close_BANG_.call(null,to);
var state_18926__$1 = state_18926;
var statearr_18951_19011 = state_18926__$1;
(statearr_18951_19011[(2)] = inst_18895);

(statearr_18951_19011[(1)] = (10));


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
});})(c__16756__auto__,jobs,results,process,async))
;
return ((function (switch__16597__auto__,c__16756__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0 = (function (){
var statearr_18952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__);

(statearr_18952[(1)] = (1));

return statearr_18952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1 = (function (state_18926){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_18926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e18953){if((e18953 instanceof Object)){
var ex__16601__auto__ = e18953;
var statearr_18954_19012 = state_18926;
(statearr_18954_19012[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19013 = state_18926;
state_18926 = G__19013;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__ = function(state_18926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1.call(this,state_18926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__,jobs,results,process,async))
})();
var state__16758__auto__ = (function (){var statearr_18955 = f__16757__auto__.call(null);
(statearr_18955[(6)] = c__16756__auto__);

return statearr_18955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__,jobs,results,process,async))
);

return c__16756__auto__;
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
var G__19015 = arguments.length;
switch (G__19015) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__19018 = arguments.length;
switch (G__19018) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__19021 = arguments.length;
switch (G__19021) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16756__auto___19070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___19070,tc,fc){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___19070,tc,fc){
return (function (state_19047){
var state_val_19048 = (state_19047[(1)]);
if((state_val_19048 === (7))){
var inst_19043 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19049_19071 = state_19047__$1;
(statearr_19049_19071[(2)] = inst_19043);

(statearr_19049_19071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (1))){
var state_19047__$1 = state_19047;
var statearr_19050_19072 = state_19047__$1;
(statearr_19050_19072[(2)] = null);

(statearr_19050_19072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (4))){
var inst_19024 = (state_19047[(7)]);
var inst_19024__$1 = (state_19047[(2)]);
var inst_19025 = (inst_19024__$1 == null);
var state_19047__$1 = (function (){var statearr_19051 = state_19047;
(statearr_19051[(7)] = inst_19024__$1);

return statearr_19051;
})();
if(cljs.core.truth_(inst_19025)){
var statearr_19052_19073 = state_19047__$1;
(statearr_19052_19073[(1)] = (5));

} else {
var statearr_19053_19074 = state_19047__$1;
(statearr_19053_19074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (13))){
var state_19047__$1 = state_19047;
var statearr_19054_19075 = state_19047__$1;
(statearr_19054_19075[(2)] = null);

(statearr_19054_19075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (6))){
var inst_19024 = (state_19047[(7)]);
var inst_19030 = p.call(null,inst_19024);
var state_19047__$1 = state_19047;
if(cljs.core.truth_(inst_19030)){
var statearr_19055_19076 = state_19047__$1;
(statearr_19055_19076[(1)] = (9));

} else {
var statearr_19056_19077 = state_19047__$1;
(statearr_19056_19077[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (3))){
var inst_19045 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19047__$1,inst_19045);
} else {
if((state_val_19048 === (12))){
var state_19047__$1 = state_19047;
var statearr_19057_19078 = state_19047__$1;
(statearr_19057_19078[(2)] = null);

(statearr_19057_19078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (2))){
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19047__$1,(4),ch);
} else {
if((state_val_19048 === (11))){
var inst_19024 = (state_19047[(7)]);
var inst_19034 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19047__$1,(8),inst_19034,inst_19024);
} else {
if((state_val_19048 === (9))){
var state_19047__$1 = state_19047;
var statearr_19058_19079 = state_19047__$1;
(statearr_19058_19079[(2)] = tc);

(statearr_19058_19079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (5))){
var inst_19027 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19028 = cljs.core.async.close_BANG_.call(null,fc);
var state_19047__$1 = (function (){var statearr_19059 = state_19047;
(statearr_19059[(8)] = inst_19027);

return statearr_19059;
})();
var statearr_19060_19080 = state_19047__$1;
(statearr_19060_19080[(2)] = inst_19028);

(statearr_19060_19080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (14))){
var inst_19041 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
var statearr_19061_19081 = state_19047__$1;
(statearr_19061_19081[(2)] = inst_19041);

(statearr_19061_19081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (10))){
var state_19047__$1 = state_19047;
var statearr_19062_19082 = state_19047__$1;
(statearr_19062_19082[(2)] = fc);

(statearr_19062_19082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19048 === (8))){
var inst_19036 = (state_19047[(2)]);
var state_19047__$1 = state_19047;
if(cljs.core.truth_(inst_19036)){
var statearr_19063_19083 = state_19047__$1;
(statearr_19063_19083[(1)] = (12));

} else {
var statearr_19064_19084 = state_19047__$1;
(statearr_19064_19084[(1)] = (13));

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
});})(c__16756__auto___19070,tc,fc))
;
return ((function (switch__16597__auto__,c__16756__auto___19070,tc,fc){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_19065 = [null,null,null,null,null,null,null,null,null];
(statearr_19065[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_19065[(1)] = (1));

return statearr_19065;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_19047){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19066){if((e19066 instanceof Object)){
var ex__16601__auto__ = e19066;
var statearr_19067_19085 = state_19047;
(statearr_19067_19085[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19086 = state_19047;
state_19047 = G__19086;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_19047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_19047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___19070,tc,fc))
})();
var state__16758__auto__ = (function (){var statearr_19068 = f__16757__auto__.call(null);
(statearr_19068[(6)] = c__16756__auto___19070);

return statearr_19068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___19070,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_19107){
var state_val_19108 = (state_19107[(1)]);
if((state_val_19108 === (7))){
var inst_19103 = (state_19107[(2)]);
var state_19107__$1 = state_19107;
var statearr_19109_19127 = state_19107__$1;
(statearr_19109_19127[(2)] = inst_19103);

(statearr_19109_19127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (1))){
var inst_19087 = init;
var state_19107__$1 = (function (){var statearr_19110 = state_19107;
(statearr_19110[(7)] = inst_19087);

return statearr_19110;
})();
var statearr_19111_19128 = state_19107__$1;
(statearr_19111_19128[(2)] = null);

(statearr_19111_19128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (4))){
var inst_19090 = (state_19107[(8)]);
var inst_19090__$1 = (state_19107[(2)]);
var inst_19091 = (inst_19090__$1 == null);
var state_19107__$1 = (function (){var statearr_19112 = state_19107;
(statearr_19112[(8)] = inst_19090__$1);

return statearr_19112;
})();
if(cljs.core.truth_(inst_19091)){
var statearr_19113_19129 = state_19107__$1;
(statearr_19113_19129[(1)] = (5));

} else {
var statearr_19114_19130 = state_19107__$1;
(statearr_19114_19130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (6))){
var inst_19094 = (state_19107[(9)]);
var inst_19087 = (state_19107[(7)]);
var inst_19090 = (state_19107[(8)]);
var inst_19094__$1 = f.call(null,inst_19087,inst_19090);
var inst_19095 = cljs.core.reduced_QMARK_.call(null,inst_19094__$1);
var state_19107__$1 = (function (){var statearr_19115 = state_19107;
(statearr_19115[(9)] = inst_19094__$1);

return statearr_19115;
})();
if(inst_19095){
var statearr_19116_19131 = state_19107__$1;
(statearr_19116_19131[(1)] = (8));

} else {
var statearr_19117_19132 = state_19107__$1;
(statearr_19117_19132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (3))){
var inst_19105 = (state_19107[(2)]);
var state_19107__$1 = state_19107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19107__$1,inst_19105);
} else {
if((state_val_19108 === (2))){
var state_19107__$1 = state_19107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19107__$1,(4),ch);
} else {
if((state_val_19108 === (9))){
var inst_19094 = (state_19107[(9)]);
var inst_19087 = inst_19094;
var state_19107__$1 = (function (){var statearr_19118 = state_19107;
(statearr_19118[(7)] = inst_19087);

return statearr_19118;
})();
var statearr_19119_19133 = state_19107__$1;
(statearr_19119_19133[(2)] = null);

(statearr_19119_19133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (5))){
var inst_19087 = (state_19107[(7)]);
var state_19107__$1 = state_19107;
var statearr_19120_19134 = state_19107__$1;
(statearr_19120_19134[(2)] = inst_19087);

(statearr_19120_19134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (10))){
var inst_19101 = (state_19107[(2)]);
var state_19107__$1 = state_19107;
var statearr_19121_19135 = state_19107__$1;
(statearr_19121_19135[(2)] = inst_19101);

(statearr_19121_19135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19108 === (8))){
var inst_19094 = (state_19107[(9)]);
var inst_19097 = cljs.core.deref.call(null,inst_19094);
var state_19107__$1 = state_19107;
var statearr_19122_19136 = state_19107__$1;
(statearr_19122_19136[(2)] = inst_19097);

(statearr_19122_19136[(1)] = (10));


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
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16598__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16598__auto____0 = (function (){
var statearr_19123 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19123[(0)] = cljs$core$async$reduce_$_state_machine__16598__auto__);

(statearr_19123[(1)] = (1));

return statearr_19123;
});
var cljs$core$async$reduce_$_state_machine__16598__auto____1 = (function (state_19107){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19124){if((e19124 instanceof Object)){
var ex__16601__auto__ = e19124;
var statearr_19125_19137 = state_19107;
(statearr_19125_19137[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19138 = state_19107;
state_19107 = G__19138;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16598__auto__ = function(state_19107){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16598__auto____1.call(this,state_19107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16598__auto____0;
cljs$core$async$reduce_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16598__auto____1;
return cljs$core$async$reduce_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_19126 = f__16757__auto__.call(null);
(statearr_19126[(6)] = c__16756__auto__);

return statearr_19126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__,f__$1){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__,f__$1){
return (function (state_19144){
var state_val_19145 = (state_19144[(1)]);
if((state_val_19145 === (1))){
var inst_19139 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_19144__$1 = state_19144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19144__$1,(2),inst_19139);
} else {
if((state_val_19145 === (2))){
var inst_19141 = (state_19144[(2)]);
var inst_19142 = f__$1.call(null,inst_19141);
var state_19144__$1 = state_19144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19144__$1,inst_19142);
} else {
return null;
}
}
});})(c__16756__auto__,f__$1))
;
return ((function (switch__16597__auto__,c__16756__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16598__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16598__auto____0 = (function (){
var statearr_19146 = [null,null,null,null,null,null,null];
(statearr_19146[(0)] = cljs$core$async$transduce_$_state_machine__16598__auto__);

(statearr_19146[(1)] = (1));

return statearr_19146;
});
var cljs$core$async$transduce_$_state_machine__16598__auto____1 = (function (state_19144){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19147){if((e19147 instanceof Object)){
var ex__16601__auto__ = e19147;
var statearr_19148_19150 = state_19144;
(statearr_19148_19150[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19151 = state_19144;
state_19144 = G__19151;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16598__auto__ = function(state_19144){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16598__auto____1.call(this,state_19144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16598__auto____0;
cljs$core$async$transduce_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16598__auto____1;
return cljs$core$async$transduce_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__,f__$1))
})();
var state__16758__auto__ = (function (){var statearr_19149 = f__16757__auto__.call(null);
(statearr_19149[(6)] = c__16756__auto__);

return statearr_19149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__,f__$1))
);

return c__16756__auto__;
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
var G__19153 = arguments.length;
switch (G__19153) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_19178){
var state_val_19179 = (state_19178[(1)]);
if((state_val_19179 === (7))){
var inst_19160 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19180_19201 = state_19178__$1;
(statearr_19180_19201[(2)] = inst_19160);

(statearr_19180_19201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (1))){
var inst_19154 = cljs.core.seq.call(null,coll);
var inst_19155 = inst_19154;
var state_19178__$1 = (function (){var statearr_19181 = state_19178;
(statearr_19181[(7)] = inst_19155);

return statearr_19181;
})();
var statearr_19182_19202 = state_19178__$1;
(statearr_19182_19202[(2)] = null);

(statearr_19182_19202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (4))){
var inst_19155 = (state_19178[(7)]);
var inst_19158 = cljs.core.first.call(null,inst_19155);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19178__$1,(7),ch,inst_19158);
} else {
if((state_val_19179 === (13))){
var inst_19172 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19183_19203 = state_19178__$1;
(statearr_19183_19203[(2)] = inst_19172);

(statearr_19183_19203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (6))){
var inst_19163 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
if(cljs.core.truth_(inst_19163)){
var statearr_19184_19204 = state_19178__$1;
(statearr_19184_19204[(1)] = (8));

} else {
var statearr_19185_19205 = state_19178__$1;
(statearr_19185_19205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (3))){
var inst_19176 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19178__$1,inst_19176);
} else {
if((state_val_19179 === (12))){
var state_19178__$1 = state_19178;
var statearr_19186_19206 = state_19178__$1;
(statearr_19186_19206[(2)] = null);

(statearr_19186_19206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (2))){
var inst_19155 = (state_19178[(7)]);
var state_19178__$1 = state_19178;
if(cljs.core.truth_(inst_19155)){
var statearr_19187_19207 = state_19178__$1;
(statearr_19187_19207[(1)] = (4));

} else {
var statearr_19188_19208 = state_19178__$1;
(statearr_19188_19208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (11))){
var inst_19169 = cljs.core.async.close_BANG_.call(null,ch);
var state_19178__$1 = state_19178;
var statearr_19189_19209 = state_19178__$1;
(statearr_19189_19209[(2)] = inst_19169);

(statearr_19189_19209[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (9))){
var state_19178__$1 = state_19178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19190_19210 = state_19178__$1;
(statearr_19190_19210[(1)] = (11));

} else {
var statearr_19191_19211 = state_19178__$1;
(statearr_19191_19211[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (5))){
var inst_19155 = (state_19178[(7)]);
var state_19178__$1 = state_19178;
var statearr_19192_19212 = state_19178__$1;
(statearr_19192_19212[(2)] = inst_19155);

(statearr_19192_19212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (10))){
var inst_19174 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19193_19213 = state_19178__$1;
(statearr_19193_19213[(2)] = inst_19174);

(statearr_19193_19213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (8))){
var inst_19155 = (state_19178[(7)]);
var inst_19165 = cljs.core.next.call(null,inst_19155);
var inst_19155__$1 = inst_19165;
var state_19178__$1 = (function (){var statearr_19194 = state_19178;
(statearr_19194[(7)] = inst_19155__$1);

return statearr_19194;
})();
var statearr_19195_19214 = state_19178__$1;
(statearr_19195_19214[(2)] = null);

(statearr_19195_19214[(1)] = (2));


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
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_19196 = [null,null,null,null,null,null,null,null];
(statearr_19196[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_19196[(1)] = (1));

return statearr_19196;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_19178){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19197){if((e19197 instanceof Object)){
var ex__16601__auto__ = e19197;
var statearr_19198_19215 = state_19178;
(statearr_19198_19215[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19216 = state_19178;
state_19178 = G__19216;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_19178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_19178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_19199 = f__16757__auto__.call(null);
(statearr_19199[(6)] = c__16756__auto__);

return statearr_19199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19217 = (function (ch,cs,meta19218){
this.ch = ch;
this.cs = cs;
this.meta19218 = meta19218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19219,meta19218__$1){
var self__ = this;
var _19219__$1 = this;
return (new cljs.core.async.t_cljs$core$async19217(self__.ch,self__.cs,meta19218__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19219){
var self__ = this;
var _19219__$1 = this;
return self__.meta19218;
});})(cs))
;

cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19217.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19217.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19218","meta19218",-2112926055,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19217";

cljs.core.async.t_cljs$core$async19217.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19217");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19217.
 */
cljs.core.async.__GT_t_cljs$core$async19217 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19217(ch__$1,cs__$1,meta19218){
return (new cljs.core.async.t_cljs$core$async19217(ch__$1,cs__$1,meta19218));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19217(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16756__auto___19439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___19439,cs,m,dchan,dctr,done){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___19439,cs,m,dchan,dctr,done){
return (function (state_19354){
var state_val_19355 = (state_19354[(1)]);
if((state_val_19355 === (7))){
var inst_19350 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19356_19440 = state_19354__$1;
(statearr_19356_19440[(2)] = inst_19350);

(statearr_19356_19440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (20))){
var inst_19253 = (state_19354[(7)]);
var inst_19265 = cljs.core.first.call(null,inst_19253);
var inst_19266 = cljs.core.nth.call(null,inst_19265,(0),null);
var inst_19267 = cljs.core.nth.call(null,inst_19265,(1),null);
var state_19354__$1 = (function (){var statearr_19357 = state_19354;
(statearr_19357[(8)] = inst_19266);

return statearr_19357;
})();
if(cljs.core.truth_(inst_19267)){
var statearr_19358_19441 = state_19354__$1;
(statearr_19358_19441[(1)] = (22));

} else {
var statearr_19359_19442 = state_19354__$1;
(statearr_19359_19442[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (27))){
var inst_19295 = (state_19354[(9)]);
var inst_19302 = (state_19354[(10)]);
var inst_19222 = (state_19354[(11)]);
var inst_19297 = (state_19354[(12)]);
var inst_19302__$1 = cljs.core._nth.call(null,inst_19295,inst_19297);
var inst_19303 = cljs.core.async.put_BANG_.call(null,inst_19302__$1,inst_19222,done);
var state_19354__$1 = (function (){var statearr_19360 = state_19354;
(statearr_19360[(10)] = inst_19302__$1);

return statearr_19360;
})();
if(cljs.core.truth_(inst_19303)){
var statearr_19361_19443 = state_19354__$1;
(statearr_19361_19443[(1)] = (30));

} else {
var statearr_19362_19444 = state_19354__$1;
(statearr_19362_19444[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (1))){
var state_19354__$1 = state_19354;
var statearr_19363_19445 = state_19354__$1;
(statearr_19363_19445[(2)] = null);

(statearr_19363_19445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (24))){
var inst_19253 = (state_19354[(7)]);
var inst_19272 = (state_19354[(2)]);
var inst_19273 = cljs.core.next.call(null,inst_19253);
var inst_19231 = inst_19273;
var inst_19232 = null;
var inst_19233 = (0);
var inst_19234 = (0);
var state_19354__$1 = (function (){var statearr_19364 = state_19354;
(statearr_19364[(13)] = inst_19231);

(statearr_19364[(14)] = inst_19232);

(statearr_19364[(15)] = inst_19234);

(statearr_19364[(16)] = inst_19233);

(statearr_19364[(17)] = inst_19272);

return statearr_19364;
})();
var statearr_19365_19446 = state_19354__$1;
(statearr_19365_19446[(2)] = null);

(statearr_19365_19446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (39))){
var state_19354__$1 = state_19354;
var statearr_19369_19447 = state_19354__$1;
(statearr_19369_19447[(2)] = null);

(statearr_19369_19447[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (4))){
var inst_19222 = (state_19354[(11)]);
var inst_19222__$1 = (state_19354[(2)]);
var inst_19223 = (inst_19222__$1 == null);
var state_19354__$1 = (function (){var statearr_19370 = state_19354;
(statearr_19370[(11)] = inst_19222__$1);

return statearr_19370;
})();
if(cljs.core.truth_(inst_19223)){
var statearr_19371_19448 = state_19354__$1;
(statearr_19371_19448[(1)] = (5));

} else {
var statearr_19372_19449 = state_19354__$1;
(statearr_19372_19449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (15))){
var inst_19231 = (state_19354[(13)]);
var inst_19232 = (state_19354[(14)]);
var inst_19234 = (state_19354[(15)]);
var inst_19233 = (state_19354[(16)]);
var inst_19249 = (state_19354[(2)]);
var inst_19250 = (inst_19234 + (1));
var tmp19366 = inst_19231;
var tmp19367 = inst_19232;
var tmp19368 = inst_19233;
var inst_19231__$1 = tmp19366;
var inst_19232__$1 = tmp19367;
var inst_19233__$1 = tmp19368;
var inst_19234__$1 = inst_19250;
var state_19354__$1 = (function (){var statearr_19373 = state_19354;
(statearr_19373[(13)] = inst_19231__$1);

(statearr_19373[(14)] = inst_19232__$1);

(statearr_19373[(15)] = inst_19234__$1);

(statearr_19373[(18)] = inst_19249);

(statearr_19373[(16)] = inst_19233__$1);

return statearr_19373;
})();
var statearr_19374_19450 = state_19354__$1;
(statearr_19374_19450[(2)] = null);

(statearr_19374_19450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (21))){
var inst_19276 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19378_19451 = state_19354__$1;
(statearr_19378_19451[(2)] = inst_19276);

(statearr_19378_19451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (31))){
var inst_19302 = (state_19354[(10)]);
var inst_19306 = done.call(null,null);
var inst_19307 = cljs.core.async.untap_STAR_.call(null,m,inst_19302);
var state_19354__$1 = (function (){var statearr_19379 = state_19354;
(statearr_19379[(19)] = inst_19306);

return statearr_19379;
})();
var statearr_19380_19452 = state_19354__$1;
(statearr_19380_19452[(2)] = inst_19307);

(statearr_19380_19452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (32))){
var inst_19295 = (state_19354[(9)]);
var inst_19296 = (state_19354[(20)]);
var inst_19294 = (state_19354[(21)]);
var inst_19297 = (state_19354[(12)]);
var inst_19309 = (state_19354[(2)]);
var inst_19310 = (inst_19297 + (1));
var tmp19375 = inst_19295;
var tmp19376 = inst_19296;
var tmp19377 = inst_19294;
var inst_19294__$1 = tmp19377;
var inst_19295__$1 = tmp19375;
var inst_19296__$1 = tmp19376;
var inst_19297__$1 = inst_19310;
var state_19354__$1 = (function (){var statearr_19381 = state_19354;
(statearr_19381[(9)] = inst_19295__$1);

(statearr_19381[(20)] = inst_19296__$1);

(statearr_19381[(21)] = inst_19294__$1);

(statearr_19381[(12)] = inst_19297__$1);

(statearr_19381[(22)] = inst_19309);

return statearr_19381;
})();
var statearr_19382_19453 = state_19354__$1;
(statearr_19382_19453[(2)] = null);

(statearr_19382_19453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (40))){
var inst_19322 = (state_19354[(23)]);
var inst_19326 = done.call(null,null);
var inst_19327 = cljs.core.async.untap_STAR_.call(null,m,inst_19322);
var state_19354__$1 = (function (){var statearr_19383 = state_19354;
(statearr_19383[(24)] = inst_19326);

return statearr_19383;
})();
var statearr_19384_19454 = state_19354__$1;
(statearr_19384_19454[(2)] = inst_19327);

(statearr_19384_19454[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (33))){
var inst_19313 = (state_19354[(25)]);
var inst_19315 = cljs.core.chunked_seq_QMARK_.call(null,inst_19313);
var state_19354__$1 = state_19354;
if(inst_19315){
var statearr_19385_19455 = state_19354__$1;
(statearr_19385_19455[(1)] = (36));

} else {
var statearr_19386_19456 = state_19354__$1;
(statearr_19386_19456[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (13))){
var inst_19243 = (state_19354[(26)]);
var inst_19246 = cljs.core.async.close_BANG_.call(null,inst_19243);
var state_19354__$1 = state_19354;
var statearr_19387_19457 = state_19354__$1;
(statearr_19387_19457[(2)] = inst_19246);

(statearr_19387_19457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (22))){
var inst_19266 = (state_19354[(8)]);
var inst_19269 = cljs.core.async.close_BANG_.call(null,inst_19266);
var state_19354__$1 = state_19354;
var statearr_19388_19458 = state_19354__$1;
(statearr_19388_19458[(2)] = inst_19269);

(statearr_19388_19458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (36))){
var inst_19313 = (state_19354[(25)]);
var inst_19317 = cljs.core.chunk_first.call(null,inst_19313);
var inst_19318 = cljs.core.chunk_rest.call(null,inst_19313);
var inst_19319 = cljs.core.count.call(null,inst_19317);
var inst_19294 = inst_19318;
var inst_19295 = inst_19317;
var inst_19296 = inst_19319;
var inst_19297 = (0);
var state_19354__$1 = (function (){var statearr_19389 = state_19354;
(statearr_19389[(9)] = inst_19295);

(statearr_19389[(20)] = inst_19296);

(statearr_19389[(21)] = inst_19294);

(statearr_19389[(12)] = inst_19297);

return statearr_19389;
})();
var statearr_19390_19459 = state_19354__$1;
(statearr_19390_19459[(2)] = null);

(statearr_19390_19459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (41))){
var inst_19313 = (state_19354[(25)]);
var inst_19329 = (state_19354[(2)]);
var inst_19330 = cljs.core.next.call(null,inst_19313);
var inst_19294 = inst_19330;
var inst_19295 = null;
var inst_19296 = (0);
var inst_19297 = (0);
var state_19354__$1 = (function (){var statearr_19391 = state_19354;
(statearr_19391[(9)] = inst_19295);

(statearr_19391[(27)] = inst_19329);

(statearr_19391[(20)] = inst_19296);

(statearr_19391[(21)] = inst_19294);

(statearr_19391[(12)] = inst_19297);

return statearr_19391;
})();
var statearr_19392_19460 = state_19354__$1;
(statearr_19392_19460[(2)] = null);

(statearr_19392_19460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (43))){
var state_19354__$1 = state_19354;
var statearr_19393_19461 = state_19354__$1;
(statearr_19393_19461[(2)] = null);

(statearr_19393_19461[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (29))){
var inst_19338 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19394_19462 = state_19354__$1;
(statearr_19394_19462[(2)] = inst_19338);

(statearr_19394_19462[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (44))){
var inst_19347 = (state_19354[(2)]);
var state_19354__$1 = (function (){var statearr_19395 = state_19354;
(statearr_19395[(28)] = inst_19347);

return statearr_19395;
})();
var statearr_19396_19463 = state_19354__$1;
(statearr_19396_19463[(2)] = null);

(statearr_19396_19463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (6))){
var inst_19286 = (state_19354[(29)]);
var inst_19285 = cljs.core.deref.call(null,cs);
var inst_19286__$1 = cljs.core.keys.call(null,inst_19285);
var inst_19287 = cljs.core.count.call(null,inst_19286__$1);
var inst_19288 = cljs.core.reset_BANG_.call(null,dctr,inst_19287);
var inst_19293 = cljs.core.seq.call(null,inst_19286__$1);
var inst_19294 = inst_19293;
var inst_19295 = null;
var inst_19296 = (0);
var inst_19297 = (0);
var state_19354__$1 = (function (){var statearr_19397 = state_19354;
(statearr_19397[(9)] = inst_19295);

(statearr_19397[(20)] = inst_19296);

(statearr_19397[(30)] = inst_19288);

(statearr_19397[(21)] = inst_19294);

(statearr_19397[(29)] = inst_19286__$1);

(statearr_19397[(12)] = inst_19297);

return statearr_19397;
})();
var statearr_19398_19464 = state_19354__$1;
(statearr_19398_19464[(2)] = null);

(statearr_19398_19464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (28))){
var inst_19313 = (state_19354[(25)]);
var inst_19294 = (state_19354[(21)]);
var inst_19313__$1 = cljs.core.seq.call(null,inst_19294);
var state_19354__$1 = (function (){var statearr_19399 = state_19354;
(statearr_19399[(25)] = inst_19313__$1);

return statearr_19399;
})();
if(inst_19313__$1){
var statearr_19400_19465 = state_19354__$1;
(statearr_19400_19465[(1)] = (33));

} else {
var statearr_19401_19466 = state_19354__$1;
(statearr_19401_19466[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (25))){
var inst_19296 = (state_19354[(20)]);
var inst_19297 = (state_19354[(12)]);
var inst_19299 = (inst_19297 < inst_19296);
var inst_19300 = inst_19299;
var state_19354__$1 = state_19354;
if(cljs.core.truth_(inst_19300)){
var statearr_19402_19467 = state_19354__$1;
(statearr_19402_19467[(1)] = (27));

} else {
var statearr_19403_19468 = state_19354__$1;
(statearr_19403_19468[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (34))){
var state_19354__$1 = state_19354;
var statearr_19404_19469 = state_19354__$1;
(statearr_19404_19469[(2)] = null);

(statearr_19404_19469[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (17))){
var state_19354__$1 = state_19354;
var statearr_19405_19470 = state_19354__$1;
(statearr_19405_19470[(2)] = null);

(statearr_19405_19470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (3))){
var inst_19352 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19354__$1,inst_19352);
} else {
if((state_val_19355 === (12))){
var inst_19281 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19406_19471 = state_19354__$1;
(statearr_19406_19471[(2)] = inst_19281);

(statearr_19406_19471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (2))){
var state_19354__$1 = state_19354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19354__$1,(4),ch);
} else {
if((state_val_19355 === (23))){
var state_19354__$1 = state_19354;
var statearr_19407_19472 = state_19354__$1;
(statearr_19407_19472[(2)] = null);

(statearr_19407_19472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (35))){
var inst_19336 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19408_19473 = state_19354__$1;
(statearr_19408_19473[(2)] = inst_19336);

(statearr_19408_19473[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (19))){
var inst_19253 = (state_19354[(7)]);
var inst_19257 = cljs.core.chunk_first.call(null,inst_19253);
var inst_19258 = cljs.core.chunk_rest.call(null,inst_19253);
var inst_19259 = cljs.core.count.call(null,inst_19257);
var inst_19231 = inst_19258;
var inst_19232 = inst_19257;
var inst_19233 = inst_19259;
var inst_19234 = (0);
var state_19354__$1 = (function (){var statearr_19409 = state_19354;
(statearr_19409[(13)] = inst_19231);

(statearr_19409[(14)] = inst_19232);

(statearr_19409[(15)] = inst_19234);

(statearr_19409[(16)] = inst_19233);

return statearr_19409;
})();
var statearr_19410_19474 = state_19354__$1;
(statearr_19410_19474[(2)] = null);

(statearr_19410_19474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (11))){
var inst_19253 = (state_19354[(7)]);
var inst_19231 = (state_19354[(13)]);
var inst_19253__$1 = cljs.core.seq.call(null,inst_19231);
var state_19354__$1 = (function (){var statearr_19411 = state_19354;
(statearr_19411[(7)] = inst_19253__$1);

return statearr_19411;
})();
if(inst_19253__$1){
var statearr_19412_19475 = state_19354__$1;
(statearr_19412_19475[(1)] = (16));

} else {
var statearr_19413_19476 = state_19354__$1;
(statearr_19413_19476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (9))){
var inst_19283 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19414_19477 = state_19354__$1;
(statearr_19414_19477[(2)] = inst_19283);

(statearr_19414_19477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (5))){
var inst_19229 = cljs.core.deref.call(null,cs);
var inst_19230 = cljs.core.seq.call(null,inst_19229);
var inst_19231 = inst_19230;
var inst_19232 = null;
var inst_19233 = (0);
var inst_19234 = (0);
var state_19354__$1 = (function (){var statearr_19415 = state_19354;
(statearr_19415[(13)] = inst_19231);

(statearr_19415[(14)] = inst_19232);

(statearr_19415[(15)] = inst_19234);

(statearr_19415[(16)] = inst_19233);

return statearr_19415;
})();
var statearr_19416_19478 = state_19354__$1;
(statearr_19416_19478[(2)] = null);

(statearr_19416_19478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (14))){
var state_19354__$1 = state_19354;
var statearr_19417_19479 = state_19354__$1;
(statearr_19417_19479[(2)] = null);

(statearr_19417_19479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (45))){
var inst_19344 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19418_19480 = state_19354__$1;
(statearr_19418_19480[(2)] = inst_19344);

(statearr_19418_19480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (26))){
var inst_19286 = (state_19354[(29)]);
var inst_19340 = (state_19354[(2)]);
var inst_19341 = cljs.core.seq.call(null,inst_19286);
var state_19354__$1 = (function (){var statearr_19419 = state_19354;
(statearr_19419[(31)] = inst_19340);

return statearr_19419;
})();
if(inst_19341){
var statearr_19420_19481 = state_19354__$1;
(statearr_19420_19481[(1)] = (42));

} else {
var statearr_19421_19482 = state_19354__$1;
(statearr_19421_19482[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (16))){
var inst_19253 = (state_19354[(7)]);
var inst_19255 = cljs.core.chunked_seq_QMARK_.call(null,inst_19253);
var state_19354__$1 = state_19354;
if(inst_19255){
var statearr_19422_19483 = state_19354__$1;
(statearr_19422_19483[(1)] = (19));

} else {
var statearr_19423_19484 = state_19354__$1;
(statearr_19423_19484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (38))){
var inst_19333 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19424_19485 = state_19354__$1;
(statearr_19424_19485[(2)] = inst_19333);

(statearr_19424_19485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (30))){
var state_19354__$1 = state_19354;
var statearr_19425_19486 = state_19354__$1;
(statearr_19425_19486[(2)] = null);

(statearr_19425_19486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (10))){
var inst_19232 = (state_19354[(14)]);
var inst_19234 = (state_19354[(15)]);
var inst_19242 = cljs.core._nth.call(null,inst_19232,inst_19234);
var inst_19243 = cljs.core.nth.call(null,inst_19242,(0),null);
var inst_19244 = cljs.core.nth.call(null,inst_19242,(1),null);
var state_19354__$1 = (function (){var statearr_19426 = state_19354;
(statearr_19426[(26)] = inst_19243);

return statearr_19426;
})();
if(cljs.core.truth_(inst_19244)){
var statearr_19427_19487 = state_19354__$1;
(statearr_19427_19487[(1)] = (13));

} else {
var statearr_19428_19488 = state_19354__$1;
(statearr_19428_19488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (18))){
var inst_19279 = (state_19354[(2)]);
var state_19354__$1 = state_19354;
var statearr_19429_19489 = state_19354__$1;
(statearr_19429_19489[(2)] = inst_19279);

(statearr_19429_19489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (42))){
var state_19354__$1 = state_19354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19354__$1,(45),dchan);
} else {
if((state_val_19355 === (37))){
var inst_19313 = (state_19354[(25)]);
var inst_19322 = (state_19354[(23)]);
var inst_19222 = (state_19354[(11)]);
var inst_19322__$1 = cljs.core.first.call(null,inst_19313);
var inst_19323 = cljs.core.async.put_BANG_.call(null,inst_19322__$1,inst_19222,done);
var state_19354__$1 = (function (){var statearr_19430 = state_19354;
(statearr_19430[(23)] = inst_19322__$1);

return statearr_19430;
})();
if(cljs.core.truth_(inst_19323)){
var statearr_19431_19490 = state_19354__$1;
(statearr_19431_19490[(1)] = (39));

} else {
var statearr_19432_19491 = state_19354__$1;
(statearr_19432_19491[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19355 === (8))){
var inst_19234 = (state_19354[(15)]);
var inst_19233 = (state_19354[(16)]);
var inst_19236 = (inst_19234 < inst_19233);
var inst_19237 = inst_19236;
var state_19354__$1 = state_19354;
if(cljs.core.truth_(inst_19237)){
var statearr_19433_19492 = state_19354__$1;
(statearr_19433_19492[(1)] = (10));

} else {
var statearr_19434_19493 = state_19354__$1;
(statearr_19434_19493[(1)] = (11));

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
});})(c__16756__auto___19439,cs,m,dchan,dctr,done))
;
return ((function (switch__16597__auto__,c__16756__auto___19439,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16598__auto__ = null;
var cljs$core$async$mult_$_state_machine__16598__auto____0 = (function (){
var statearr_19435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19435[(0)] = cljs$core$async$mult_$_state_machine__16598__auto__);

(statearr_19435[(1)] = (1));

return statearr_19435;
});
var cljs$core$async$mult_$_state_machine__16598__auto____1 = (function (state_19354){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19436){if((e19436 instanceof Object)){
var ex__16601__auto__ = e19436;
var statearr_19437_19494 = state_19354;
(statearr_19437_19494[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19495 = state_19354;
state_19354 = G__19495;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16598__auto__ = function(state_19354){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16598__auto____1.call(this,state_19354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16598__auto____0;
cljs$core$async$mult_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16598__auto____1;
return cljs$core$async$mult_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___19439,cs,m,dchan,dctr,done))
})();
var state__16758__auto__ = (function (){var statearr_19438 = f__16757__auto__.call(null);
(statearr_19438[(6)] = c__16756__auto___19439);

return statearr_19438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___19439,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19497 = arguments.length;
switch (G__19497) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19509 = arguments.length;
var i__4532__auto___19510 = (0);
while(true){
if((i__4532__auto___19510 < len__4531__auto___19509)){
args__4534__auto__.push((arguments[i__4532__auto___19510]));

var G__19511 = (i__4532__auto___19510 + (1));
i__4532__auto___19510 = G__19511;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19503){
var map__19504 = p__19503;
var map__19504__$1 = ((((!((map__19504 == null)))?(((((map__19504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19504):map__19504);
var opts = map__19504__$1;
var statearr_19506_19512 = state;
(statearr_19506_19512[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__19504,map__19504__$1,opts){
return (function (val){
var statearr_19507_19513 = state;
(statearr_19507_19513[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19504,map__19504__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19508_19514 = state;
(statearr_19508_19514[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19499){
var G__19500 = cljs.core.first.call(null,seq19499);
var seq19499__$1 = cljs.core.next.call(null,seq19499);
var G__19501 = cljs.core.first.call(null,seq19499__$1);
var seq19499__$2 = cljs.core.next.call(null,seq19499__$1);
var G__19502 = cljs.core.first.call(null,seq19499__$2);
var seq19499__$3 = cljs.core.next.call(null,seq19499__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19500,G__19501,G__19502,seq19499__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19515 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19516){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19516 = meta19516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19517,meta19516__$1){
var self__ = this;
var _19517__$1 = this;
return (new cljs.core.async.t_cljs$core$async19515(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19516__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19517){
var self__ = this;
var _19517__$1 = this;
return self__.meta19516;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta19516","meta19516",-1134560671,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19515";

cljs.core.async.t_cljs$core$async19515.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19515");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19515.
 */
cljs.core.async.__GT_t_cljs$core$async19515 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19515(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19516){
return (new cljs.core.async.t_cljs$core$async19515(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19516));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19515(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16756__auto___19679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___19679,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___19679,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19619){
var state_val_19620 = (state_19619[(1)]);
if((state_val_19620 === (7))){
var inst_19534 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19621_19680 = state_19619__$1;
(statearr_19621_19680[(2)] = inst_19534);

(statearr_19621_19680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (20))){
var inst_19546 = (state_19619[(7)]);
var state_19619__$1 = state_19619;
var statearr_19622_19681 = state_19619__$1;
(statearr_19622_19681[(2)] = inst_19546);

(statearr_19622_19681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (27))){
var state_19619__$1 = state_19619;
var statearr_19623_19682 = state_19619__$1;
(statearr_19623_19682[(2)] = null);

(statearr_19623_19682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (1))){
var inst_19521 = (state_19619[(8)]);
var inst_19521__$1 = calc_state.call(null);
var inst_19523 = (inst_19521__$1 == null);
var inst_19524 = cljs.core.not.call(null,inst_19523);
var state_19619__$1 = (function (){var statearr_19624 = state_19619;
(statearr_19624[(8)] = inst_19521__$1);

return statearr_19624;
})();
if(inst_19524){
var statearr_19625_19683 = state_19619__$1;
(statearr_19625_19683[(1)] = (2));

} else {
var statearr_19626_19684 = state_19619__$1;
(statearr_19626_19684[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (24))){
var inst_19570 = (state_19619[(9)]);
var inst_19593 = (state_19619[(10)]);
var inst_19579 = (state_19619[(11)]);
var inst_19593__$1 = inst_19570.call(null,inst_19579);
var state_19619__$1 = (function (){var statearr_19627 = state_19619;
(statearr_19627[(10)] = inst_19593__$1);

return statearr_19627;
})();
if(cljs.core.truth_(inst_19593__$1)){
var statearr_19628_19685 = state_19619__$1;
(statearr_19628_19685[(1)] = (29));

} else {
var statearr_19629_19686 = state_19619__$1;
(statearr_19629_19686[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (4))){
var inst_19537 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19537)){
var statearr_19630_19687 = state_19619__$1;
(statearr_19630_19687[(1)] = (8));

} else {
var statearr_19631_19688 = state_19619__$1;
(statearr_19631_19688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (15))){
var inst_19564 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19564)){
var statearr_19632_19689 = state_19619__$1;
(statearr_19632_19689[(1)] = (19));

} else {
var statearr_19633_19690 = state_19619__$1;
(statearr_19633_19690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (21))){
var inst_19569 = (state_19619[(12)]);
var inst_19569__$1 = (state_19619[(2)]);
var inst_19570 = cljs.core.get.call(null,inst_19569__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19571 = cljs.core.get.call(null,inst_19569__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19572 = cljs.core.get.call(null,inst_19569__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19619__$1 = (function (){var statearr_19634 = state_19619;
(statearr_19634[(9)] = inst_19570);

(statearr_19634[(13)] = inst_19571);

(statearr_19634[(12)] = inst_19569__$1);

return statearr_19634;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19619__$1,(22),inst_19572);
} else {
if((state_val_19620 === (31))){
var inst_19601 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19601)){
var statearr_19635_19691 = state_19619__$1;
(statearr_19635_19691[(1)] = (32));

} else {
var statearr_19636_19692 = state_19619__$1;
(statearr_19636_19692[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (32))){
var inst_19578 = (state_19619[(14)]);
var state_19619__$1 = state_19619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19619__$1,(35),out,inst_19578);
} else {
if((state_val_19620 === (33))){
var inst_19569 = (state_19619[(12)]);
var inst_19546 = inst_19569;
var state_19619__$1 = (function (){var statearr_19637 = state_19619;
(statearr_19637[(7)] = inst_19546);

return statearr_19637;
})();
var statearr_19638_19693 = state_19619__$1;
(statearr_19638_19693[(2)] = null);

(statearr_19638_19693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (13))){
var inst_19546 = (state_19619[(7)]);
var inst_19553 = inst_19546.cljs$lang$protocol_mask$partition0$;
var inst_19554 = (inst_19553 & (64));
var inst_19555 = inst_19546.cljs$core$ISeq$;
var inst_19556 = (cljs.core.PROTOCOL_SENTINEL === inst_19555);
var inst_19557 = ((inst_19554) || (inst_19556));
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19557)){
var statearr_19639_19694 = state_19619__$1;
(statearr_19639_19694[(1)] = (16));

} else {
var statearr_19640_19695 = state_19619__$1;
(statearr_19640_19695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (22))){
var inst_19578 = (state_19619[(14)]);
var inst_19579 = (state_19619[(11)]);
var inst_19577 = (state_19619[(2)]);
var inst_19578__$1 = cljs.core.nth.call(null,inst_19577,(0),null);
var inst_19579__$1 = cljs.core.nth.call(null,inst_19577,(1),null);
var inst_19580 = (inst_19578__$1 == null);
var inst_19581 = cljs.core._EQ_.call(null,inst_19579__$1,change);
var inst_19582 = ((inst_19580) || (inst_19581));
var state_19619__$1 = (function (){var statearr_19641 = state_19619;
(statearr_19641[(14)] = inst_19578__$1);

(statearr_19641[(11)] = inst_19579__$1);

return statearr_19641;
})();
if(cljs.core.truth_(inst_19582)){
var statearr_19642_19696 = state_19619__$1;
(statearr_19642_19696[(1)] = (23));

} else {
var statearr_19643_19697 = state_19619__$1;
(statearr_19643_19697[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (36))){
var inst_19569 = (state_19619[(12)]);
var inst_19546 = inst_19569;
var state_19619__$1 = (function (){var statearr_19644 = state_19619;
(statearr_19644[(7)] = inst_19546);

return statearr_19644;
})();
var statearr_19645_19698 = state_19619__$1;
(statearr_19645_19698[(2)] = null);

(statearr_19645_19698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (29))){
var inst_19593 = (state_19619[(10)]);
var state_19619__$1 = state_19619;
var statearr_19646_19699 = state_19619__$1;
(statearr_19646_19699[(2)] = inst_19593);

(statearr_19646_19699[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (6))){
var state_19619__$1 = state_19619;
var statearr_19647_19700 = state_19619__$1;
(statearr_19647_19700[(2)] = false);

(statearr_19647_19700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (28))){
var inst_19589 = (state_19619[(2)]);
var inst_19590 = calc_state.call(null);
var inst_19546 = inst_19590;
var state_19619__$1 = (function (){var statearr_19648 = state_19619;
(statearr_19648[(15)] = inst_19589);

(statearr_19648[(7)] = inst_19546);

return statearr_19648;
})();
var statearr_19649_19701 = state_19619__$1;
(statearr_19649_19701[(2)] = null);

(statearr_19649_19701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (25))){
var inst_19615 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19650_19702 = state_19619__$1;
(statearr_19650_19702[(2)] = inst_19615);

(statearr_19650_19702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (34))){
var inst_19613 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19651_19703 = state_19619__$1;
(statearr_19651_19703[(2)] = inst_19613);

(statearr_19651_19703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (17))){
var state_19619__$1 = state_19619;
var statearr_19652_19704 = state_19619__$1;
(statearr_19652_19704[(2)] = false);

(statearr_19652_19704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (3))){
var state_19619__$1 = state_19619;
var statearr_19653_19705 = state_19619__$1;
(statearr_19653_19705[(2)] = false);

(statearr_19653_19705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (12))){
var inst_19617 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19619__$1,inst_19617);
} else {
if((state_val_19620 === (2))){
var inst_19521 = (state_19619[(8)]);
var inst_19526 = inst_19521.cljs$lang$protocol_mask$partition0$;
var inst_19527 = (inst_19526 & (64));
var inst_19528 = inst_19521.cljs$core$ISeq$;
var inst_19529 = (cljs.core.PROTOCOL_SENTINEL === inst_19528);
var inst_19530 = ((inst_19527) || (inst_19529));
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19530)){
var statearr_19654_19706 = state_19619__$1;
(statearr_19654_19706[(1)] = (5));

} else {
var statearr_19655_19707 = state_19619__$1;
(statearr_19655_19707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (23))){
var inst_19578 = (state_19619[(14)]);
var inst_19584 = (inst_19578 == null);
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19584)){
var statearr_19656_19708 = state_19619__$1;
(statearr_19656_19708[(1)] = (26));

} else {
var statearr_19657_19709 = state_19619__$1;
(statearr_19657_19709[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (35))){
var inst_19604 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19604)){
var statearr_19658_19710 = state_19619__$1;
(statearr_19658_19710[(1)] = (36));

} else {
var statearr_19659_19711 = state_19619__$1;
(statearr_19659_19711[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (19))){
var inst_19546 = (state_19619[(7)]);
var inst_19566 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19546);
var state_19619__$1 = state_19619;
var statearr_19660_19712 = state_19619__$1;
(statearr_19660_19712[(2)] = inst_19566);

(statearr_19660_19712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (11))){
var inst_19546 = (state_19619[(7)]);
var inst_19550 = (inst_19546 == null);
var inst_19551 = cljs.core.not.call(null,inst_19550);
var state_19619__$1 = state_19619;
if(inst_19551){
var statearr_19661_19713 = state_19619__$1;
(statearr_19661_19713[(1)] = (13));

} else {
var statearr_19662_19714 = state_19619__$1;
(statearr_19662_19714[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (9))){
var inst_19521 = (state_19619[(8)]);
var state_19619__$1 = state_19619;
var statearr_19663_19715 = state_19619__$1;
(statearr_19663_19715[(2)] = inst_19521);

(statearr_19663_19715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (5))){
var state_19619__$1 = state_19619;
var statearr_19664_19716 = state_19619__$1;
(statearr_19664_19716[(2)] = true);

(statearr_19664_19716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (14))){
var state_19619__$1 = state_19619;
var statearr_19665_19717 = state_19619__$1;
(statearr_19665_19717[(2)] = false);

(statearr_19665_19717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (26))){
var inst_19579 = (state_19619[(11)]);
var inst_19586 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19579);
var state_19619__$1 = state_19619;
var statearr_19666_19718 = state_19619__$1;
(statearr_19666_19718[(2)] = inst_19586);

(statearr_19666_19718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (16))){
var state_19619__$1 = state_19619;
var statearr_19667_19719 = state_19619__$1;
(statearr_19667_19719[(2)] = true);

(statearr_19667_19719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (38))){
var inst_19609 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19668_19720 = state_19619__$1;
(statearr_19668_19720[(2)] = inst_19609);

(statearr_19668_19720[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (30))){
var inst_19570 = (state_19619[(9)]);
var inst_19571 = (state_19619[(13)]);
var inst_19579 = (state_19619[(11)]);
var inst_19596 = cljs.core.empty_QMARK_.call(null,inst_19570);
var inst_19597 = inst_19571.call(null,inst_19579);
var inst_19598 = cljs.core.not.call(null,inst_19597);
var inst_19599 = ((inst_19596) && (inst_19598));
var state_19619__$1 = state_19619;
var statearr_19669_19721 = state_19619__$1;
(statearr_19669_19721[(2)] = inst_19599);

(statearr_19669_19721[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (10))){
var inst_19521 = (state_19619[(8)]);
var inst_19542 = (state_19619[(2)]);
var inst_19543 = cljs.core.get.call(null,inst_19542,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19544 = cljs.core.get.call(null,inst_19542,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19545 = cljs.core.get.call(null,inst_19542,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19546 = inst_19521;
var state_19619__$1 = (function (){var statearr_19670 = state_19619;
(statearr_19670[(16)] = inst_19544);

(statearr_19670[(17)] = inst_19543);

(statearr_19670[(18)] = inst_19545);

(statearr_19670[(7)] = inst_19546);

return statearr_19670;
})();
var statearr_19671_19722 = state_19619__$1;
(statearr_19671_19722[(2)] = null);

(statearr_19671_19722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (18))){
var inst_19561 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19672_19723 = state_19619__$1;
(statearr_19672_19723[(2)] = inst_19561);

(statearr_19672_19723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (37))){
var state_19619__$1 = state_19619;
var statearr_19673_19724 = state_19619__$1;
(statearr_19673_19724[(2)] = null);

(statearr_19673_19724[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (8))){
var inst_19521 = (state_19619[(8)]);
var inst_19539 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19521);
var state_19619__$1 = state_19619;
var statearr_19674_19725 = state_19619__$1;
(statearr_19674_19725[(2)] = inst_19539);

(statearr_19674_19725[(1)] = (10));


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
});})(c__16756__auto___19679,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16597__auto__,c__16756__auto___19679,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16598__auto__ = null;
var cljs$core$async$mix_$_state_machine__16598__auto____0 = (function (){
var statearr_19675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19675[(0)] = cljs$core$async$mix_$_state_machine__16598__auto__);

(statearr_19675[(1)] = (1));

return statearr_19675;
});
var cljs$core$async$mix_$_state_machine__16598__auto____1 = (function (state_19619){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19676){if((e19676 instanceof Object)){
var ex__16601__auto__ = e19676;
var statearr_19677_19726 = state_19619;
(statearr_19677_19726[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19727 = state_19619;
state_19619 = G__19727;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16598__auto__ = function(state_19619){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16598__auto____1.call(this,state_19619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16598__auto____0;
cljs$core$async$mix_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16598__auto____1;
return cljs$core$async$mix_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___19679,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16758__auto__ = (function (){var statearr_19678 = f__16757__auto__.call(null);
(statearr_19678[(6)] = c__16756__auto___19679);

return statearr_19678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___19679,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19729 = arguments.length;
switch (G__19729) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__19733 = arguments.length;
switch (G__19733) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__19731_SHARP_){
if(cljs.core.truth_(p1__19731_SHARP_.call(null,topic))){
return p1__19731_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19731_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19734 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19735){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19735 = meta19735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19736,meta19735__$1){
var self__ = this;
var _19736__$1 = this;
return (new cljs.core.async.t_cljs$core$async19734(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19735__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19736){
var self__ = this;
var _19736__$1 = this;
return self__.meta19735;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19735","meta19735",1788390166,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async19734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19734";

cljs.core.async.t_cljs$core$async19734.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async19734");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19734.
 */
cljs.core.async.__GT_t_cljs$core$async19734 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async19734(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19735){
return (new cljs.core.async.t_cljs$core$async19734(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19735));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async19734(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16756__auto___19854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___19854,mults,ensure_mult,p){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___19854,mults,ensure_mult,p){
return (function (state_19808){
var state_val_19809 = (state_19808[(1)]);
if((state_val_19809 === (7))){
var inst_19804 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19810_19855 = state_19808__$1;
(statearr_19810_19855[(2)] = inst_19804);

(statearr_19810_19855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (20))){
var state_19808__$1 = state_19808;
var statearr_19811_19856 = state_19808__$1;
(statearr_19811_19856[(2)] = null);

(statearr_19811_19856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (1))){
var state_19808__$1 = state_19808;
var statearr_19812_19857 = state_19808__$1;
(statearr_19812_19857[(2)] = null);

(statearr_19812_19857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (24))){
var inst_19787 = (state_19808[(7)]);
var inst_19796 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19787);
var state_19808__$1 = state_19808;
var statearr_19813_19858 = state_19808__$1;
(statearr_19813_19858[(2)] = inst_19796);

(statearr_19813_19858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (4))){
var inst_19739 = (state_19808[(8)]);
var inst_19739__$1 = (state_19808[(2)]);
var inst_19740 = (inst_19739__$1 == null);
var state_19808__$1 = (function (){var statearr_19814 = state_19808;
(statearr_19814[(8)] = inst_19739__$1);

return statearr_19814;
})();
if(cljs.core.truth_(inst_19740)){
var statearr_19815_19859 = state_19808__$1;
(statearr_19815_19859[(1)] = (5));

} else {
var statearr_19816_19860 = state_19808__$1;
(statearr_19816_19860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (15))){
var inst_19781 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19817_19861 = state_19808__$1;
(statearr_19817_19861[(2)] = inst_19781);

(statearr_19817_19861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (21))){
var inst_19801 = (state_19808[(2)]);
var state_19808__$1 = (function (){var statearr_19818 = state_19808;
(statearr_19818[(9)] = inst_19801);

return statearr_19818;
})();
var statearr_19819_19862 = state_19808__$1;
(statearr_19819_19862[(2)] = null);

(statearr_19819_19862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (13))){
var inst_19763 = (state_19808[(10)]);
var inst_19765 = cljs.core.chunked_seq_QMARK_.call(null,inst_19763);
var state_19808__$1 = state_19808;
if(inst_19765){
var statearr_19820_19863 = state_19808__$1;
(statearr_19820_19863[(1)] = (16));

} else {
var statearr_19821_19864 = state_19808__$1;
(statearr_19821_19864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (22))){
var inst_19793 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
if(cljs.core.truth_(inst_19793)){
var statearr_19822_19865 = state_19808__$1;
(statearr_19822_19865[(1)] = (23));

} else {
var statearr_19823_19866 = state_19808__$1;
(statearr_19823_19866[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (6))){
var inst_19787 = (state_19808[(7)]);
var inst_19739 = (state_19808[(8)]);
var inst_19789 = (state_19808[(11)]);
var inst_19787__$1 = topic_fn.call(null,inst_19739);
var inst_19788 = cljs.core.deref.call(null,mults);
var inst_19789__$1 = cljs.core.get.call(null,inst_19788,inst_19787__$1);
var state_19808__$1 = (function (){var statearr_19824 = state_19808;
(statearr_19824[(7)] = inst_19787__$1);

(statearr_19824[(11)] = inst_19789__$1);

return statearr_19824;
})();
if(cljs.core.truth_(inst_19789__$1)){
var statearr_19825_19867 = state_19808__$1;
(statearr_19825_19867[(1)] = (19));

} else {
var statearr_19826_19868 = state_19808__$1;
(statearr_19826_19868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (25))){
var inst_19798 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19827_19869 = state_19808__$1;
(statearr_19827_19869[(2)] = inst_19798);

(statearr_19827_19869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (17))){
var inst_19763 = (state_19808[(10)]);
var inst_19772 = cljs.core.first.call(null,inst_19763);
var inst_19773 = cljs.core.async.muxch_STAR_.call(null,inst_19772);
var inst_19774 = cljs.core.async.close_BANG_.call(null,inst_19773);
var inst_19775 = cljs.core.next.call(null,inst_19763);
var inst_19749 = inst_19775;
var inst_19750 = null;
var inst_19751 = (0);
var inst_19752 = (0);
var state_19808__$1 = (function (){var statearr_19828 = state_19808;
(statearr_19828[(12)] = inst_19749);

(statearr_19828[(13)] = inst_19752);

(statearr_19828[(14)] = inst_19750);

(statearr_19828[(15)] = inst_19774);

(statearr_19828[(16)] = inst_19751);

return statearr_19828;
})();
var statearr_19829_19870 = state_19808__$1;
(statearr_19829_19870[(2)] = null);

(statearr_19829_19870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (3))){
var inst_19806 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19808__$1,inst_19806);
} else {
if((state_val_19809 === (12))){
var inst_19783 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19830_19871 = state_19808__$1;
(statearr_19830_19871[(2)] = inst_19783);

(statearr_19830_19871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (2))){
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19808__$1,(4),ch);
} else {
if((state_val_19809 === (23))){
var state_19808__$1 = state_19808;
var statearr_19831_19872 = state_19808__$1;
(statearr_19831_19872[(2)] = null);

(statearr_19831_19872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (19))){
var inst_19739 = (state_19808[(8)]);
var inst_19789 = (state_19808[(11)]);
var inst_19791 = cljs.core.async.muxch_STAR_.call(null,inst_19789);
var state_19808__$1 = state_19808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19808__$1,(22),inst_19791,inst_19739);
} else {
if((state_val_19809 === (11))){
var inst_19749 = (state_19808[(12)]);
var inst_19763 = (state_19808[(10)]);
var inst_19763__$1 = cljs.core.seq.call(null,inst_19749);
var state_19808__$1 = (function (){var statearr_19832 = state_19808;
(statearr_19832[(10)] = inst_19763__$1);

return statearr_19832;
})();
if(inst_19763__$1){
var statearr_19833_19873 = state_19808__$1;
(statearr_19833_19873[(1)] = (13));

} else {
var statearr_19834_19874 = state_19808__$1;
(statearr_19834_19874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (9))){
var inst_19785 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19835_19875 = state_19808__$1;
(statearr_19835_19875[(2)] = inst_19785);

(statearr_19835_19875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (5))){
var inst_19746 = cljs.core.deref.call(null,mults);
var inst_19747 = cljs.core.vals.call(null,inst_19746);
var inst_19748 = cljs.core.seq.call(null,inst_19747);
var inst_19749 = inst_19748;
var inst_19750 = null;
var inst_19751 = (0);
var inst_19752 = (0);
var state_19808__$1 = (function (){var statearr_19836 = state_19808;
(statearr_19836[(12)] = inst_19749);

(statearr_19836[(13)] = inst_19752);

(statearr_19836[(14)] = inst_19750);

(statearr_19836[(16)] = inst_19751);

return statearr_19836;
})();
var statearr_19837_19876 = state_19808__$1;
(statearr_19837_19876[(2)] = null);

(statearr_19837_19876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (14))){
var state_19808__$1 = state_19808;
var statearr_19841_19877 = state_19808__$1;
(statearr_19841_19877[(2)] = null);

(statearr_19841_19877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (16))){
var inst_19763 = (state_19808[(10)]);
var inst_19767 = cljs.core.chunk_first.call(null,inst_19763);
var inst_19768 = cljs.core.chunk_rest.call(null,inst_19763);
var inst_19769 = cljs.core.count.call(null,inst_19767);
var inst_19749 = inst_19768;
var inst_19750 = inst_19767;
var inst_19751 = inst_19769;
var inst_19752 = (0);
var state_19808__$1 = (function (){var statearr_19842 = state_19808;
(statearr_19842[(12)] = inst_19749);

(statearr_19842[(13)] = inst_19752);

(statearr_19842[(14)] = inst_19750);

(statearr_19842[(16)] = inst_19751);

return statearr_19842;
})();
var statearr_19843_19878 = state_19808__$1;
(statearr_19843_19878[(2)] = null);

(statearr_19843_19878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (10))){
var inst_19749 = (state_19808[(12)]);
var inst_19752 = (state_19808[(13)]);
var inst_19750 = (state_19808[(14)]);
var inst_19751 = (state_19808[(16)]);
var inst_19757 = cljs.core._nth.call(null,inst_19750,inst_19752);
var inst_19758 = cljs.core.async.muxch_STAR_.call(null,inst_19757);
var inst_19759 = cljs.core.async.close_BANG_.call(null,inst_19758);
var inst_19760 = (inst_19752 + (1));
var tmp19838 = inst_19749;
var tmp19839 = inst_19750;
var tmp19840 = inst_19751;
var inst_19749__$1 = tmp19838;
var inst_19750__$1 = tmp19839;
var inst_19751__$1 = tmp19840;
var inst_19752__$1 = inst_19760;
var state_19808__$1 = (function (){var statearr_19844 = state_19808;
(statearr_19844[(12)] = inst_19749__$1);

(statearr_19844[(17)] = inst_19759);

(statearr_19844[(13)] = inst_19752__$1);

(statearr_19844[(14)] = inst_19750__$1);

(statearr_19844[(16)] = inst_19751__$1);

return statearr_19844;
})();
var statearr_19845_19879 = state_19808__$1;
(statearr_19845_19879[(2)] = null);

(statearr_19845_19879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (18))){
var inst_19778 = (state_19808[(2)]);
var state_19808__$1 = state_19808;
var statearr_19846_19880 = state_19808__$1;
(statearr_19846_19880[(2)] = inst_19778);

(statearr_19846_19880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19809 === (8))){
var inst_19752 = (state_19808[(13)]);
var inst_19751 = (state_19808[(16)]);
var inst_19754 = (inst_19752 < inst_19751);
var inst_19755 = inst_19754;
var state_19808__$1 = state_19808;
if(cljs.core.truth_(inst_19755)){
var statearr_19847_19881 = state_19808__$1;
(statearr_19847_19881[(1)] = (10));

} else {
var statearr_19848_19882 = state_19808__$1;
(statearr_19848_19882[(1)] = (11));

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
});})(c__16756__auto___19854,mults,ensure_mult,p))
;
return ((function (switch__16597__auto__,c__16756__auto___19854,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_19849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19849[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_19849[(1)] = (1));

return statearr_19849;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_19808){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19850){if((e19850 instanceof Object)){
var ex__16601__auto__ = e19850;
var statearr_19851_19883 = state_19808;
(statearr_19851_19883[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19884 = state_19808;
state_19808 = G__19884;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_19808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_19808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___19854,mults,ensure_mult,p))
})();
var state__16758__auto__ = (function (){var statearr_19852 = f__16757__auto__.call(null);
(statearr_19852[(6)] = c__16756__auto___19854);

return statearr_19852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___19854,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19886 = arguments.length;
switch (G__19886) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__19889 = arguments.length;
switch (G__19889) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__19892 = arguments.length;
switch (G__19892) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16756__auto___19959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___19959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___19959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19931){
var state_val_19932 = (state_19931[(1)]);
if((state_val_19932 === (7))){
var state_19931__$1 = state_19931;
var statearr_19933_19960 = state_19931__$1;
(statearr_19933_19960[(2)] = null);

(statearr_19933_19960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (1))){
var state_19931__$1 = state_19931;
var statearr_19934_19961 = state_19931__$1;
(statearr_19934_19961[(2)] = null);

(statearr_19934_19961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (4))){
var inst_19895 = (state_19931[(7)]);
var inst_19897 = (inst_19895 < cnt);
var state_19931__$1 = state_19931;
if(cljs.core.truth_(inst_19897)){
var statearr_19935_19962 = state_19931__$1;
(statearr_19935_19962[(1)] = (6));

} else {
var statearr_19936_19963 = state_19931__$1;
(statearr_19936_19963[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (15))){
var inst_19927 = (state_19931[(2)]);
var state_19931__$1 = state_19931;
var statearr_19937_19964 = state_19931__$1;
(statearr_19937_19964[(2)] = inst_19927);

(statearr_19937_19964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (13))){
var inst_19920 = cljs.core.async.close_BANG_.call(null,out);
var state_19931__$1 = state_19931;
var statearr_19938_19965 = state_19931__$1;
(statearr_19938_19965[(2)] = inst_19920);

(statearr_19938_19965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (6))){
var state_19931__$1 = state_19931;
var statearr_19939_19966 = state_19931__$1;
(statearr_19939_19966[(2)] = null);

(statearr_19939_19966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (3))){
var inst_19929 = (state_19931[(2)]);
var state_19931__$1 = state_19931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19931__$1,inst_19929);
} else {
if((state_val_19932 === (12))){
var inst_19917 = (state_19931[(8)]);
var inst_19917__$1 = (state_19931[(2)]);
var inst_19918 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19917__$1);
var state_19931__$1 = (function (){var statearr_19940 = state_19931;
(statearr_19940[(8)] = inst_19917__$1);

return statearr_19940;
})();
if(cljs.core.truth_(inst_19918)){
var statearr_19941_19967 = state_19931__$1;
(statearr_19941_19967[(1)] = (13));

} else {
var statearr_19942_19968 = state_19931__$1;
(statearr_19942_19968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (2))){
var inst_19894 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19895 = (0);
var state_19931__$1 = (function (){var statearr_19943 = state_19931;
(statearr_19943[(7)] = inst_19895);

(statearr_19943[(9)] = inst_19894);

return statearr_19943;
})();
var statearr_19944_19969 = state_19931__$1;
(statearr_19944_19969[(2)] = null);

(statearr_19944_19969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (11))){
var inst_19895 = (state_19931[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19931,(10),Object,null,(9));
var inst_19904 = chs__$1.call(null,inst_19895);
var inst_19905 = done.call(null,inst_19895);
var inst_19906 = cljs.core.async.take_BANG_.call(null,inst_19904,inst_19905);
var state_19931__$1 = state_19931;
var statearr_19945_19970 = state_19931__$1;
(statearr_19945_19970[(2)] = inst_19906);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19931__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (9))){
var inst_19895 = (state_19931[(7)]);
var inst_19908 = (state_19931[(2)]);
var inst_19909 = (inst_19895 + (1));
var inst_19895__$1 = inst_19909;
var state_19931__$1 = (function (){var statearr_19946 = state_19931;
(statearr_19946[(7)] = inst_19895__$1);

(statearr_19946[(10)] = inst_19908);

return statearr_19946;
})();
var statearr_19947_19971 = state_19931__$1;
(statearr_19947_19971[(2)] = null);

(statearr_19947_19971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (5))){
var inst_19915 = (state_19931[(2)]);
var state_19931__$1 = (function (){var statearr_19948 = state_19931;
(statearr_19948[(11)] = inst_19915);

return statearr_19948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19931__$1,(12),dchan);
} else {
if((state_val_19932 === (14))){
var inst_19917 = (state_19931[(8)]);
var inst_19922 = cljs.core.apply.call(null,f,inst_19917);
var state_19931__$1 = state_19931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19931__$1,(16),out,inst_19922);
} else {
if((state_val_19932 === (16))){
var inst_19924 = (state_19931[(2)]);
var state_19931__$1 = (function (){var statearr_19949 = state_19931;
(statearr_19949[(12)] = inst_19924);

return statearr_19949;
})();
var statearr_19950_19972 = state_19931__$1;
(statearr_19950_19972[(2)] = null);

(statearr_19950_19972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (10))){
var inst_19899 = (state_19931[(2)]);
var inst_19900 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19931__$1 = (function (){var statearr_19951 = state_19931;
(statearr_19951[(13)] = inst_19899);

return statearr_19951;
})();
var statearr_19952_19973 = state_19931__$1;
(statearr_19952_19973[(2)] = inst_19900);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19931__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19932 === (8))){
var inst_19913 = (state_19931[(2)]);
var state_19931__$1 = state_19931;
var statearr_19953_19974 = state_19931__$1;
(statearr_19953_19974[(2)] = inst_19913);

(statearr_19953_19974[(1)] = (5));


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
});})(c__16756__auto___19959,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16597__auto__,c__16756__auto___19959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_19954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19954[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_19954[(1)] = (1));

return statearr_19954;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_19931){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_19931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e19955){if((e19955 instanceof Object)){
var ex__16601__auto__ = e19955;
var statearr_19956_19975 = state_19931;
(statearr_19956_19975[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19976 = state_19931;
state_19931 = G__19976;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_19931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_19931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___19959,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16758__auto__ = (function (){var statearr_19957 = f__16757__auto__.call(null);
(statearr_19957[(6)] = c__16756__auto___19959);

return statearr_19957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___19959,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19979 = arguments.length;
switch (G__19979) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16756__auto___20033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___20033,out){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___20033,out){
return (function (state_20011){
var state_val_20012 = (state_20011[(1)]);
if((state_val_20012 === (7))){
var inst_19991 = (state_20011[(7)]);
var inst_19990 = (state_20011[(8)]);
var inst_19990__$1 = (state_20011[(2)]);
var inst_19991__$1 = cljs.core.nth.call(null,inst_19990__$1,(0),null);
var inst_19992 = cljs.core.nth.call(null,inst_19990__$1,(1),null);
var inst_19993 = (inst_19991__$1 == null);
var state_20011__$1 = (function (){var statearr_20013 = state_20011;
(statearr_20013[(7)] = inst_19991__$1);

(statearr_20013[(8)] = inst_19990__$1);

(statearr_20013[(9)] = inst_19992);

return statearr_20013;
})();
if(cljs.core.truth_(inst_19993)){
var statearr_20014_20034 = state_20011__$1;
(statearr_20014_20034[(1)] = (8));

} else {
var statearr_20015_20035 = state_20011__$1;
(statearr_20015_20035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (1))){
var inst_19980 = cljs.core.vec.call(null,chs);
var inst_19981 = inst_19980;
var state_20011__$1 = (function (){var statearr_20016 = state_20011;
(statearr_20016[(10)] = inst_19981);

return statearr_20016;
})();
var statearr_20017_20036 = state_20011__$1;
(statearr_20017_20036[(2)] = null);

(statearr_20017_20036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (4))){
var inst_19981 = (state_20011[(10)]);
var state_20011__$1 = state_20011;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20011__$1,(7),inst_19981);
} else {
if((state_val_20012 === (6))){
var inst_20007 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
var statearr_20018_20037 = state_20011__$1;
(statearr_20018_20037[(2)] = inst_20007);

(statearr_20018_20037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (3))){
var inst_20009 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20011__$1,inst_20009);
} else {
if((state_val_20012 === (2))){
var inst_19981 = (state_20011[(10)]);
var inst_19983 = cljs.core.count.call(null,inst_19981);
var inst_19984 = (inst_19983 > (0));
var state_20011__$1 = state_20011;
if(cljs.core.truth_(inst_19984)){
var statearr_20020_20038 = state_20011__$1;
(statearr_20020_20038[(1)] = (4));

} else {
var statearr_20021_20039 = state_20011__$1;
(statearr_20021_20039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (11))){
var inst_19981 = (state_20011[(10)]);
var inst_20000 = (state_20011[(2)]);
var tmp20019 = inst_19981;
var inst_19981__$1 = tmp20019;
var state_20011__$1 = (function (){var statearr_20022 = state_20011;
(statearr_20022[(11)] = inst_20000);

(statearr_20022[(10)] = inst_19981__$1);

return statearr_20022;
})();
var statearr_20023_20040 = state_20011__$1;
(statearr_20023_20040[(2)] = null);

(statearr_20023_20040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (9))){
var inst_19991 = (state_20011[(7)]);
var state_20011__$1 = state_20011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20011__$1,(11),out,inst_19991);
} else {
if((state_val_20012 === (5))){
var inst_20005 = cljs.core.async.close_BANG_.call(null,out);
var state_20011__$1 = state_20011;
var statearr_20024_20041 = state_20011__$1;
(statearr_20024_20041[(2)] = inst_20005);

(statearr_20024_20041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (10))){
var inst_20003 = (state_20011[(2)]);
var state_20011__$1 = state_20011;
var statearr_20025_20042 = state_20011__$1;
(statearr_20025_20042[(2)] = inst_20003);

(statearr_20025_20042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20012 === (8))){
var inst_19991 = (state_20011[(7)]);
var inst_19990 = (state_20011[(8)]);
var inst_19992 = (state_20011[(9)]);
var inst_19981 = (state_20011[(10)]);
var inst_19995 = (function (){var cs = inst_19981;
var vec__19986 = inst_19990;
var v = inst_19991;
var c = inst_19992;
return ((function (cs,vec__19986,v,c,inst_19991,inst_19990,inst_19992,inst_19981,state_val_20012,c__16756__auto___20033,out){
return (function (p1__19977_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19977_SHARP_);
});
;})(cs,vec__19986,v,c,inst_19991,inst_19990,inst_19992,inst_19981,state_val_20012,c__16756__auto___20033,out))
})();
var inst_19996 = cljs.core.filterv.call(null,inst_19995,inst_19981);
var inst_19981__$1 = inst_19996;
var state_20011__$1 = (function (){var statearr_20026 = state_20011;
(statearr_20026[(10)] = inst_19981__$1);

return statearr_20026;
})();
var statearr_20027_20043 = state_20011__$1;
(statearr_20027_20043[(2)] = null);

(statearr_20027_20043[(1)] = (2));


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
});})(c__16756__auto___20033,out))
;
return ((function (switch__16597__auto__,c__16756__auto___20033,out){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_20028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20028[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_20028[(1)] = (1));

return statearr_20028;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_20011){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_20011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e20029){if((e20029 instanceof Object)){
var ex__16601__auto__ = e20029;
var statearr_20030_20044 = state_20011;
(statearr_20030_20044[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20045 = state_20011;
state_20011 = G__20045;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_20011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_20011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___20033,out))
})();
var state__16758__auto__ = (function (){var statearr_20031 = f__16757__auto__.call(null);
(statearr_20031[(6)] = c__16756__auto___20033);

return statearr_20031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___20033,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__20047 = arguments.length;
switch (G__20047) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16756__auto___20092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___20092,out){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___20092,out){
return (function (state_20071){
var state_val_20072 = (state_20071[(1)]);
if((state_val_20072 === (7))){
var inst_20053 = (state_20071[(7)]);
var inst_20053__$1 = (state_20071[(2)]);
var inst_20054 = (inst_20053__$1 == null);
var inst_20055 = cljs.core.not.call(null,inst_20054);
var state_20071__$1 = (function (){var statearr_20073 = state_20071;
(statearr_20073[(7)] = inst_20053__$1);

return statearr_20073;
})();
if(inst_20055){
var statearr_20074_20093 = state_20071__$1;
(statearr_20074_20093[(1)] = (8));

} else {
var statearr_20075_20094 = state_20071__$1;
(statearr_20075_20094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (1))){
var inst_20048 = (0);
var state_20071__$1 = (function (){var statearr_20076 = state_20071;
(statearr_20076[(8)] = inst_20048);

return statearr_20076;
})();
var statearr_20077_20095 = state_20071__$1;
(statearr_20077_20095[(2)] = null);

(statearr_20077_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (4))){
var state_20071__$1 = state_20071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20071__$1,(7),ch);
} else {
if((state_val_20072 === (6))){
var inst_20066 = (state_20071[(2)]);
var state_20071__$1 = state_20071;
var statearr_20078_20096 = state_20071__$1;
(statearr_20078_20096[(2)] = inst_20066);

(statearr_20078_20096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (3))){
var inst_20068 = (state_20071[(2)]);
var inst_20069 = cljs.core.async.close_BANG_.call(null,out);
var state_20071__$1 = (function (){var statearr_20079 = state_20071;
(statearr_20079[(9)] = inst_20068);

return statearr_20079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20071__$1,inst_20069);
} else {
if((state_val_20072 === (2))){
var inst_20048 = (state_20071[(8)]);
var inst_20050 = (inst_20048 < n);
var state_20071__$1 = state_20071;
if(cljs.core.truth_(inst_20050)){
var statearr_20080_20097 = state_20071__$1;
(statearr_20080_20097[(1)] = (4));

} else {
var statearr_20081_20098 = state_20071__$1;
(statearr_20081_20098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (11))){
var inst_20048 = (state_20071[(8)]);
var inst_20058 = (state_20071[(2)]);
var inst_20059 = (inst_20048 + (1));
var inst_20048__$1 = inst_20059;
var state_20071__$1 = (function (){var statearr_20082 = state_20071;
(statearr_20082[(10)] = inst_20058);

(statearr_20082[(8)] = inst_20048__$1);

return statearr_20082;
})();
var statearr_20083_20099 = state_20071__$1;
(statearr_20083_20099[(2)] = null);

(statearr_20083_20099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (9))){
var state_20071__$1 = state_20071;
var statearr_20084_20100 = state_20071__$1;
(statearr_20084_20100[(2)] = null);

(statearr_20084_20100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (5))){
var state_20071__$1 = state_20071;
var statearr_20085_20101 = state_20071__$1;
(statearr_20085_20101[(2)] = null);

(statearr_20085_20101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (10))){
var inst_20063 = (state_20071[(2)]);
var state_20071__$1 = state_20071;
var statearr_20086_20102 = state_20071__$1;
(statearr_20086_20102[(2)] = inst_20063);

(statearr_20086_20102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20072 === (8))){
var inst_20053 = (state_20071[(7)]);
var state_20071__$1 = state_20071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20071__$1,(11),out,inst_20053);
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
});})(c__16756__auto___20092,out))
;
return ((function (switch__16597__auto__,c__16756__auto___20092,out){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_20087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20087[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_20087[(1)] = (1));

return statearr_20087;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_20071){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_20071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e20088){if((e20088 instanceof Object)){
var ex__16601__auto__ = e20088;
var statearr_20089_20103 = state_20071;
(statearr_20089_20103[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20104 = state_20071;
state_20071 = G__20104;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_20071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_20071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___20092,out))
})();
var state__16758__auto__ = (function (){var statearr_20090 = f__16757__auto__.call(null);
(statearr_20090[(6)] = c__16756__auto___20092);

return statearr_20090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___20092,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20106 = (function (f,ch,meta20107){
this.f = f;
this.ch = ch;
this.meta20107 = meta20107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20108,meta20107__$1){
var self__ = this;
var _20108__$1 = this;
return (new cljs.core.async.t_cljs$core$async20106(self__.f,self__.ch,meta20107__$1));
});

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20108){
var self__ = this;
var _20108__$1 = this;
return self__.meta20107;
});

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20109 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20109 = (function (f,ch,meta20107,_,fn1,meta20110){
this.f = f;
this.ch = ch;
this.meta20107 = meta20107;
this._ = _;
this.fn1 = fn1;
this.meta20110 = meta20110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20111,meta20110__$1){
var self__ = this;
var _20111__$1 = this;
return (new cljs.core.async.t_cljs$core$async20109(self__.f,self__.ch,self__.meta20107,self__._,self__.fn1,meta20110__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20111){
var self__ = this;
var _20111__$1 = this;
return self__.meta20110;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20109.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20105_SHARP_){
return f1.call(null,(((p1__20105_SHARP_ == null))?null:self__.f.call(null,p1__20105_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20109.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20107","meta20107",-1426575587,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20106","cljs.core.async/t_cljs$core$async20106",-174040267,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20110","meta20110",-476995188,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20109";

cljs.core.async.t_cljs$core$async20109.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20109");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20109.
 */
cljs.core.async.__GT_t_cljs$core$async20109 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20109(f__$1,ch__$1,meta20107__$1,___$2,fn1__$1,meta20110){
return (new cljs.core.async.t_cljs$core$async20109(f__$1,ch__$1,meta20107__$1,___$2,fn1__$1,meta20110));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20109(self__.f,self__.ch,self__.meta20107,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20106.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20107","meta20107",-1426575587,null)], null);
});

cljs.core.async.t_cljs$core$async20106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20106";

cljs.core.async.t_cljs$core$async20106.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20106");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20106.
 */
cljs.core.async.__GT_t_cljs$core$async20106 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20106(f__$1,ch__$1,meta20107){
return (new cljs.core.async.t_cljs$core$async20106(f__$1,ch__$1,meta20107));
});

}

return (new cljs.core.async.t_cljs$core$async20106(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20112 = (function (f,ch,meta20113){
this.f = f;
this.ch = ch;
this.meta20113 = meta20113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20114,meta20113__$1){
var self__ = this;
var _20114__$1 = this;
return (new cljs.core.async.t_cljs$core$async20112(self__.f,self__.ch,meta20113__$1));
});

cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20114){
var self__ = this;
var _20114__$1 = this;
return self__.meta20113;
});

cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async20112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20113","meta20113",-1225070184,null)], null);
});

cljs.core.async.t_cljs$core$async20112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20112";

cljs.core.async.t_cljs$core$async20112.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20112");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20112.
 */
cljs.core.async.__GT_t_cljs$core$async20112 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20112(f__$1,ch__$1,meta20113){
return (new cljs.core.async.t_cljs$core$async20112(f__$1,ch__$1,meta20113));
});

}

return (new cljs.core.async.t_cljs$core$async20112(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20115 = (function (p,ch,meta20116){
this.p = p;
this.ch = ch;
this.meta20116 = meta20116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20117,meta20116__$1){
var self__ = this;
var _20117__$1 = this;
return (new cljs.core.async.t_cljs$core$async20115(self__.p,self__.ch,meta20116__$1));
});

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20117){
var self__ = this;
var _20117__$1 = this;
return self__.meta20116;
});

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20116","meta20116",9560425,null)], null);
});

cljs.core.async.t_cljs$core$async20115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20115";

cljs.core.async.t_cljs$core$async20115.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20115");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20115.
 */
cljs.core.async.__GT_t_cljs$core$async20115 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20115(p__$1,ch__$1,meta20116){
return (new cljs.core.async.t_cljs$core$async20115(p__$1,ch__$1,meta20116));
});

}

return (new cljs.core.async.t_cljs$core$async20115(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20119 = arguments.length;
switch (G__20119) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16756__auto___20159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___20159,out){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___20159,out){
return (function (state_20140){
var state_val_20141 = (state_20140[(1)]);
if((state_val_20141 === (7))){
var inst_20136 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
var statearr_20142_20160 = state_20140__$1;
(statearr_20142_20160[(2)] = inst_20136);

(statearr_20142_20160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (1))){
var state_20140__$1 = state_20140;
var statearr_20143_20161 = state_20140__$1;
(statearr_20143_20161[(2)] = null);

(statearr_20143_20161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (4))){
var inst_20122 = (state_20140[(7)]);
var inst_20122__$1 = (state_20140[(2)]);
var inst_20123 = (inst_20122__$1 == null);
var state_20140__$1 = (function (){var statearr_20144 = state_20140;
(statearr_20144[(7)] = inst_20122__$1);

return statearr_20144;
})();
if(cljs.core.truth_(inst_20123)){
var statearr_20145_20162 = state_20140__$1;
(statearr_20145_20162[(1)] = (5));

} else {
var statearr_20146_20163 = state_20140__$1;
(statearr_20146_20163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (6))){
var inst_20122 = (state_20140[(7)]);
var inst_20127 = p.call(null,inst_20122);
var state_20140__$1 = state_20140;
if(cljs.core.truth_(inst_20127)){
var statearr_20147_20164 = state_20140__$1;
(statearr_20147_20164[(1)] = (8));

} else {
var statearr_20148_20165 = state_20140__$1;
(statearr_20148_20165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (3))){
var inst_20138 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20140__$1,inst_20138);
} else {
if((state_val_20141 === (2))){
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20140__$1,(4),ch);
} else {
if((state_val_20141 === (11))){
var inst_20130 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
var statearr_20149_20166 = state_20140__$1;
(statearr_20149_20166[(2)] = inst_20130);

(statearr_20149_20166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (9))){
var state_20140__$1 = state_20140;
var statearr_20150_20167 = state_20140__$1;
(statearr_20150_20167[(2)] = null);

(statearr_20150_20167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (5))){
var inst_20125 = cljs.core.async.close_BANG_.call(null,out);
var state_20140__$1 = state_20140;
var statearr_20151_20168 = state_20140__$1;
(statearr_20151_20168[(2)] = inst_20125);

(statearr_20151_20168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (10))){
var inst_20133 = (state_20140[(2)]);
var state_20140__$1 = (function (){var statearr_20152 = state_20140;
(statearr_20152[(8)] = inst_20133);

return statearr_20152;
})();
var statearr_20153_20169 = state_20140__$1;
(statearr_20153_20169[(2)] = null);

(statearr_20153_20169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (8))){
var inst_20122 = (state_20140[(7)]);
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20140__$1,(11),out,inst_20122);
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
});})(c__16756__auto___20159,out))
;
return ((function (switch__16597__auto__,c__16756__auto___20159,out){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_20154 = [null,null,null,null,null,null,null,null,null];
(statearr_20154[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_20154[(1)] = (1));

return statearr_20154;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_20140){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_20140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e20155){if((e20155 instanceof Object)){
var ex__16601__auto__ = e20155;
var statearr_20156_20170 = state_20140;
(statearr_20156_20170[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20171 = state_20140;
state_20140 = G__20171;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_20140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_20140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___20159,out))
})();
var state__16758__auto__ = (function (){var statearr_20157 = f__16757__auto__.call(null);
(statearr_20157[(6)] = c__16756__auto___20159);

return statearr_20157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___20159,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20173 = arguments.length;
switch (G__20173) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_20236){
var state_val_20237 = (state_20236[(1)]);
if((state_val_20237 === (7))){
var inst_20232 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20238_20276 = state_20236__$1;
(statearr_20238_20276[(2)] = inst_20232);

(statearr_20238_20276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (20))){
var inst_20202 = (state_20236[(7)]);
var inst_20213 = (state_20236[(2)]);
var inst_20214 = cljs.core.next.call(null,inst_20202);
var inst_20188 = inst_20214;
var inst_20189 = null;
var inst_20190 = (0);
var inst_20191 = (0);
var state_20236__$1 = (function (){var statearr_20239 = state_20236;
(statearr_20239[(8)] = inst_20213);

(statearr_20239[(9)] = inst_20191);

(statearr_20239[(10)] = inst_20189);

(statearr_20239[(11)] = inst_20190);

(statearr_20239[(12)] = inst_20188);

return statearr_20239;
})();
var statearr_20240_20277 = state_20236__$1;
(statearr_20240_20277[(2)] = null);

(statearr_20240_20277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (1))){
var state_20236__$1 = state_20236;
var statearr_20241_20278 = state_20236__$1;
(statearr_20241_20278[(2)] = null);

(statearr_20241_20278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (4))){
var inst_20177 = (state_20236[(13)]);
var inst_20177__$1 = (state_20236[(2)]);
var inst_20178 = (inst_20177__$1 == null);
var state_20236__$1 = (function (){var statearr_20242 = state_20236;
(statearr_20242[(13)] = inst_20177__$1);

return statearr_20242;
})();
if(cljs.core.truth_(inst_20178)){
var statearr_20243_20279 = state_20236__$1;
(statearr_20243_20279[(1)] = (5));

} else {
var statearr_20244_20280 = state_20236__$1;
(statearr_20244_20280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (15))){
var state_20236__$1 = state_20236;
var statearr_20248_20281 = state_20236__$1;
(statearr_20248_20281[(2)] = null);

(statearr_20248_20281[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (21))){
var state_20236__$1 = state_20236;
var statearr_20249_20282 = state_20236__$1;
(statearr_20249_20282[(2)] = null);

(statearr_20249_20282[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (13))){
var inst_20191 = (state_20236[(9)]);
var inst_20189 = (state_20236[(10)]);
var inst_20190 = (state_20236[(11)]);
var inst_20188 = (state_20236[(12)]);
var inst_20198 = (state_20236[(2)]);
var inst_20199 = (inst_20191 + (1));
var tmp20245 = inst_20189;
var tmp20246 = inst_20190;
var tmp20247 = inst_20188;
var inst_20188__$1 = tmp20247;
var inst_20189__$1 = tmp20245;
var inst_20190__$1 = tmp20246;
var inst_20191__$1 = inst_20199;
var state_20236__$1 = (function (){var statearr_20250 = state_20236;
(statearr_20250[(14)] = inst_20198);

(statearr_20250[(9)] = inst_20191__$1);

(statearr_20250[(10)] = inst_20189__$1);

(statearr_20250[(11)] = inst_20190__$1);

(statearr_20250[(12)] = inst_20188__$1);

return statearr_20250;
})();
var statearr_20251_20283 = state_20236__$1;
(statearr_20251_20283[(2)] = null);

(statearr_20251_20283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (22))){
var state_20236__$1 = state_20236;
var statearr_20252_20284 = state_20236__$1;
(statearr_20252_20284[(2)] = null);

(statearr_20252_20284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (6))){
var inst_20177 = (state_20236[(13)]);
var inst_20186 = f.call(null,inst_20177);
var inst_20187 = cljs.core.seq.call(null,inst_20186);
var inst_20188 = inst_20187;
var inst_20189 = null;
var inst_20190 = (0);
var inst_20191 = (0);
var state_20236__$1 = (function (){var statearr_20253 = state_20236;
(statearr_20253[(9)] = inst_20191);

(statearr_20253[(10)] = inst_20189);

(statearr_20253[(11)] = inst_20190);

(statearr_20253[(12)] = inst_20188);

return statearr_20253;
})();
var statearr_20254_20285 = state_20236__$1;
(statearr_20254_20285[(2)] = null);

(statearr_20254_20285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (17))){
var inst_20202 = (state_20236[(7)]);
var inst_20206 = cljs.core.chunk_first.call(null,inst_20202);
var inst_20207 = cljs.core.chunk_rest.call(null,inst_20202);
var inst_20208 = cljs.core.count.call(null,inst_20206);
var inst_20188 = inst_20207;
var inst_20189 = inst_20206;
var inst_20190 = inst_20208;
var inst_20191 = (0);
var state_20236__$1 = (function (){var statearr_20255 = state_20236;
(statearr_20255[(9)] = inst_20191);

(statearr_20255[(10)] = inst_20189);

(statearr_20255[(11)] = inst_20190);

(statearr_20255[(12)] = inst_20188);

return statearr_20255;
})();
var statearr_20256_20286 = state_20236__$1;
(statearr_20256_20286[(2)] = null);

(statearr_20256_20286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (3))){
var inst_20234 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20236__$1,inst_20234);
} else {
if((state_val_20237 === (12))){
var inst_20222 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20257_20287 = state_20236__$1;
(statearr_20257_20287[(2)] = inst_20222);

(statearr_20257_20287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (2))){
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20236__$1,(4),in$);
} else {
if((state_val_20237 === (23))){
var inst_20230 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20258_20288 = state_20236__$1;
(statearr_20258_20288[(2)] = inst_20230);

(statearr_20258_20288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (19))){
var inst_20217 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20259_20289 = state_20236__$1;
(statearr_20259_20289[(2)] = inst_20217);

(statearr_20259_20289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (11))){
var inst_20202 = (state_20236[(7)]);
var inst_20188 = (state_20236[(12)]);
var inst_20202__$1 = cljs.core.seq.call(null,inst_20188);
var state_20236__$1 = (function (){var statearr_20260 = state_20236;
(statearr_20260[(7)] = inst_20202__$1);

return statearr_20260;
})();
if(inst_20202__$1){
var statearr_20261_20290 = state_20236__$1;
(statearr_20261_20290[(1)] = (14));

} else {
var statearr_20262_20291 = state_20236__$1;
(statearr_20262_20291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (9))){
var inst_20224 = (state_20236[(2)]);
var inst_20225 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20236__$1 = (function (){var statearr_20263 = state_20236;
(statearr_20263[(15)] = inst_20224);

return statearr_20263;
})();
if(cljs.core.truth_(inst_20225)){
var statearr_20264_20292 = state_20236__$1;
(statearr_20264_20292[(1)] = (21));

} else {
var statearr_20265_20293 = state_20236__$1;
(statearr_20265_20293[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (5))){
var inst_20180 = cljs.core.async.close_BANG_.call(null,out);
var state_20236__$1 = state_20236;
var statearr_20266_20294 = state_20236__$1;
(statearr_20266_20294[(2)] = inst_20180);

(statearr_20266_20294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (14))){
var inst_20202 = (state_20236[(7)]);
var inst_20204 = cljs.core.chunked_seq_QMARK_.call(null,inst_20202);
var state_20236__$1 = state_20236;
if(inst_20204){
var statearr_20267_20295 = state_20236__$1;
(statearr_20267_20295[(1)] = (17));

} else {
var statearr_20268_20296 = state_20236__$1;
(statearr_20268_20296[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (16))){
var inst_20220 = (state_20236[(2)]);
var state_20236__$1 = state_20236;
var statearr_20269_20297 = state_20236__$1;
(statearr_20269_20297[(2)] = inst_20220);

(statearr_20269_20297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20237 === (10))){
var inst_20191 = (state_20236[(9)]);
var inst_20189 = (state_20236[(10)]);
var inst_20196 = cljs.core._nth.call(null,inst_20189,inst_20191);
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20236__$1,(13),out,inst_20196);
} else {
if((state_val_20237 === (18))){
var inst_20202 = (state_20236[(7)]);
var inst_20211 = cljs.core.first.call(null,inst_20202);
var state_20236__$1 = state_20236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20236__$1,(20),out,inst_20211);
} else {
if((state_val_20237 === (8))){
var inst_20191 = (state_20236[(9)]);
var inst_20190 = (state_20236[(11)]);
var inst_20193 = (inst_20191 < inst_20190);
var inst_20194 = inst_20193;
var state_20236__$1 = state_20236;
if(cljs.core.truth_(inst_20194)){
var statearr_20270_20298 = state_20236__$1;
(statearr_20270_20298[(1)] = (10));

} else {
var statearr_20271_20299 = state_20236__$1;
(statearr_20271_20299[(1)] = (11));

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
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16598__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16598__auto____0 = (function (){
var statearr_20272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20272[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16598__auto__);

(statearr_20272[(1)] = (1));

return statearr_20272;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16598__auto____1 = (function (state_20236){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_20236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e20273){if((e20273 instanceof Object)){
var ex__16601__auto__ = e20273;
var statearr_20274_20300 = state_20236;
(statearr_20274_20300[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20301 = state_20236;
state_20236 = G__20301;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16598__auto__ = function(state_20236){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16598__auto____1.call(this,state_20236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16598__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16598__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_20275 = f__16757__auto__.call(null);
(statearr_20275[(6)] = c__16756__auto__);

return statearr_20275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20303 = arguments.length;
switch (G__20303) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20306 = arguments.length;
switch (G__20306) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20309 = arguments.length;
switch (G__20309) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16756__auto___20356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___20356,out){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___20356,out){
return (function (state_20333){
var state_val_20334 = (state_20333[(1)]);
if((state_val_20334 === (7))){
var inst_20328 = (state_20333[(2)]);
var state_20333__$1 = state_20333;
var statearr_20335_20357 = state_20333__$1;
(statearr_20335_20357[(2)] = inst_20328);

(statearr_20335_20357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (1))){
var inst_20310 = null;
var state_20333__$1 = (function (){var statearr_20336 = state_20333;
(statearr_20336[(7)] = inst_20310);

return statearr_20336;
})();
var statearr_20337_20358 = state_20333__$1;
(statearr_20337_20358[(2)] = null);

(statearr_20337_20358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (4))){
var inst_20313 = (state_20333[(8)]);
var inst_20313__$1 = (state_20333[(2)]);
var inst_20314 = (inst_20313__$1 == null);
var inst_20315 = cljs.core.not.call(null,inst_20314);
var state_20333__$1 = (function (){var statearr_20338 = state_20333;
(statearr_20338[(8)] = inst_20313__$1);

return statearr_20338;
})();
if(inst_20315){
var statearr_20339_20359 = state_20333__$1;
(statearr_20339_20359[(1)] = (5));

} else {
var statearr_20340_20360 = state_20333__$1;
(statearr_20340_20360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (6))){
var state_20333__$1 = state_20333;
var statearr_20341_20361 = state_20333__$1;
(statearr_20341_20361[(2)] = null);

(statearr_20341_20361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (3))){
var inst_20330 = (state_20333[(2)]);
var inst_20331 = cljs.core.async.close_BANG_.call(null,out);
var state_20333__$1 = (function (){var statearr_20342 = state_20333;
(statearr_20342[(9)] = inst_20330);

return statearr_20342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20333__$1,inst_20331);
} else {
if((state_val_20334 === (2))){
var state_20333__$1 = state_20333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20333__$1,(4),ch);
} else {
if((state_val_20334 === (11))){
var inst_20313 = (state_20333[(8)]);
var inst_20322 = (state_20333[(2)]);
var inst_20310 = inst_20313;
var state_20333__$1 = (function (){var statearr_20343 = state_20333;
(statearr_20343[(7)] = inst_20310);

(statearr_20343[(10)] = inst_20322);

return statearr_20343;
})();
var statearr_20344_20362 = state_20333__$1;
(statearr_20344_20362[(2)] = null);

(statearr_20344_20362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (9))){
var inst_20313 = (state_20333[(8)]);
var state_20333__$1 = state_20333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20333__$1,(11),out,inst_20313);
} else {
if((state_val_20334 === (5))){
var inst_20310 = (state_20333[(7)]);
var inst_20313 = (state_20333[(8)]);
var inst_20317 = cljs.core._EQ_.call(null,inst_20313,inst_20310);
var state_20333__$1 = state_20333;
if(inst_20317){
var statearr_20346_20363 = state_20333__$1;
(statearr_20346_20363[(1)] = (8));

} else {
var statearr_20347_20364 = state_20333__$1;
(statearr_20347_20364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (10))){
var inst_20325 = (state_20333[(2)]);
var state_20333__$1 = state_20333;
var statearr_20348_20365 = state_20333__$1;
(statearr_20348_20365[(2)] = inst_20325);

(statearr_20348_20365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20334 === (8))){
var inst_20310 = (state_20333[(7)]);
var tmp20345 = inst_20310;
var inst_20310__$1 = tmp20345;
var state_20333__$1 = (function (){var statearr_20349 = state_20333;
(statearr_20349[(7)] = inst_20310__$1);

return statearr_20349;
})();
var statearr_20350_20366 = state_20333__$1;
(statearr_20350_20366[(2)] = null);

(statearr_20350_20366[(1)] = (2));


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
});})(c__16756__auto___20356,out))
;
return ((function (switch__16597__auto__,c__16756__auto___20356,out){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_20351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20351[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_20351[(1)] = (1));

return statearr_20351;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_20333){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_20333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e20352){if((e20352 instanceof Object)){
var ex__16601__auto__ = e20352;
var statearr_20353_20367 = state_20333;
(statearr_20353_20367[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20368 = state_20333;
state_20333 = G__20368;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_20333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_20333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___20356,out))
})();
var state__16758__auto__ = (function (){var statearr_20354 = f__16757__auto__.call(null);
(statearr_20354[(6)] = c__16756__auto___20356);

return statearr_20354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___20356,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20370 = arguments.length;
switch (G__20370) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16756__auto___20436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___20436,out){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___20436,out){
return (function (state_20408){
var state_val_20409 = (state_20408[(1)]);
if((state_val_20409 === (7))){
var inst_20404 = (state_20408[(2)]);
var state_20408__$1 = state_20408;
var statearr_20410_20437 = state_20408__$1;
(statearr_20410_20437[(2)] = inst_20404);

(statearr_20410_20437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (1))){
var inst_20371 = (new Array(n));
var inst_20372 = inst_20371;
var inst_20373 = (0);
var state_20408__$1 = (function (){var statearr_20411 = state_20408;
(statearr_20411[(7)] = inst_20373);

(statearr_20411[(8)] = inst_20372);

return statearr_20411;
})();
var statearr_20412_20438 = state_20408__$1;
(statearr_20412_20438[(2)] = null);

(statearr_20412_20438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (4))){
var inst_20376 = (state_20408[(9)]);
var inst_20376__$1 = (state_20408[(2)]);
var inst_20377 = (inst_20376__$1 == null);
var inst_20378 = cljs.core.not.call(null,inst_20377);
var state_20408__$1 = (function (){var statearr_20413 = state_20408;
(statearr_20413[(9)] = inst_20376__$1);

return statearr_20413;
})();
if(inst_20378){
var statearr_20414_20439 = state_20408__$1;
(statearr_20414_20439[(1)] = (5));

} else {
var statearr_20415_20440 = state_20408__$1;
(statearr_20415_20440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (15))){
var inst_20398 = (state_20408[(2)]);
var state_20408__$1 = state_20408;
var statearr_20416_20441 = state_20408__$1;
(statearr_20416_20441[(2)] = inst_20398);

(statearr_20416_20441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (13))){
var state_20408__$1 = state_20408;
var statearr_20417_20442 = state_20408__$1;
(statearr_20417_20442[(2)] = null);

(statearr_20417_20442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (6))){
var inst_20373 = (state_20408[(7)]);
var inst_20394 = (inst_20373 > (0));
var state_20408__$1 = state_20408;
if(cljs.core.truth_(inst_20394)){
var statearr_20418_20443 = state_20408__$1;
(statearr_20418_20443[(1)] = (12));

} else {
var statearr_20419_20444 = state_20408__$1;
(statearr_20419_20444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (3))){
var inst_20406 = (state_20408[(2)]);
var state_20408__$1 = state_20408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20408__$1,inst_20406);
} else {
if((state_val_20409 === (12))){
var inst_20372 = (state_20408[(8)]);
var inst_20396 = cljs.core.vec.call(null,inst_20372);
var state_20408__$1 = state_20408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20408__$1,(15),out,inst_20396);
} else {
if((state_val_20409 === (2))){
var state_20408__$1 = state_20408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20408__$1,(4),ch);
} else {
if((state_val_20409 === (11))){
var inst_20388 = (state_20408[(2)]);
var inst_20389 = (new Array(n));
var inst_20372 = inst_20389;
var inst_20373 = (0);
var state_20408__$1 = (function (){var statearr_20420 = state_20408;
(statearr_20420[(7)] = inst_20373);

(statearr_20420[(10)] = inst_20388);

(statearr_20420[(8)] = inst_20372);

return statearr_20420;
})();
var statearr_20421_20445 = state_20408__$1;
(statearr_20421_20445[(2)] = null);

(statearr_20421_20445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (9))){
var inst_20372 = (state_20408[(8)]);
var inst_20386 = cljs.core.vec.call(null,inst_20372);
var state_20408__$1 = state_20408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20408__$1,(11),out,inst_20386);
} else {
if((state_val_20409 === (5))){
var inst_20373 = (state_20408[(7)]);
var inst_20376 = (state_20408[(9)]);
var inst_20381 = (state_20408[(11)]);
var inst_20372 = (state_20408[(8)]);
var inst_20380 = (inst_20372[inst_20373] = inst_20376);
var inst_20381__$1 = (inst_20373 + (1));
var inst_20382 = (inst_20381__$1 < n);
var state_20408__$1 = (function (){var statearr_20422 = state_20408;
(statearr_20422[(12)] = inst_20380);

(statearr_20422[(11)] = inst_20381__$1);

return statearr_20422;
})();
if(cljs.core.truth_(inst_20382)){
var statearr_20423_20446 = state_20408__$1;
(statearr_20423_20446[(1)] = (8));

} else {
var statearr_20424_20447 = state_20408__$1;
(statearr_20424_20447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (14))){
var inst_20401 = (state_20408[(2)]);
var inst_20402 = cljs.core.async.close_BANG_.call(null,out);
var state_20408__$1 = (function (){var statearr_20426 = state_20408;
(statearr_20426[(13)] = inst_20401);

return statearr_20426;
})();
var statearr_20427_20448 = state_20408__$1;
(statearr_20427_20448[(2)] = inst_20402);

(statearr_20427_20448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (10))){
var inst_20392 = (state_20408[(2)]);
var state_20408__$1 = state_20408;
var statearr_20428_20449 = state_20408__$1;
(statearr_20428_20449[(2)] = inst_20392);

(statearr_20428_20449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20409 === (8))){
var inst_20381 = (state_20408[(11)]);
var inst_20372 = (state_20408[(8)]);
var tmp20425 = inst_20372;
var inst_20372__$1 = tmp20425;
var inst_20373 = inst_20381;
var state_20408__$1 = (function (){var statearr_20429 = state_20408;
(statearr_20429[(7)] = inst_20373);

(statearr_20429[(8)] = inst_20372__$1);

return statearr_20429;
})();
var statearr_20430_20450 = state_20408__$1;
(statearr_20430_20450[(2)] = null);

(statearr_20430_20450[(1)] = (2));


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
});})(c__16756__auto___20436,out))
;
return ((function (switch__16597__auto__,c__16756__auto___20436,out){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_20431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20431[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_20431[(1)] = (1));

return statearr_20431;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_20408){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_20408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e20432){if((e20432 instanceof Object)){
var ex__16601__auto__ = e20432;
var statearr_20433_20451 = state_20408;
(statearr_20433_20451[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20452 = state_20408;
state_20408 = G__20452;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_20408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_20408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___20436,out))
})();
var state__16758__auto__ = (function (){var statearr_20434 = f__16757__auto__.call(null);
(statearr_20434[(6)] = c__16756__auto___20436);

return statearr_20434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___20436,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20454 = arguments.length;
switch (G__20454) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16756__auto___20524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto___20524,out){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto___20524,out){
return (function (state_20496){
var state_val_20497 = (state_20496[(1)]);
if((state_val_20497 === (7))){
var inst_20492 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
var statearr_20498_20525 = state_20496__$1;
(statearr_20498_20525[(2)] = inst_20492);

(statearr_20498_20525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (1))){
var inst_20455 = [];
var inst_20456 = inst_20455;
var inst_20457 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20496__$1 = (function (){var statearr_20499 = state_20496;
(statearr_20499[(7)] = inst_20456);

(statearr_20499[(8)] = inst_20457);

return statearr_20499;
})();
var statearr_20500_20526 = state_20496__$1;
(statearr_20500_20526[(2)] = null);

(statearr_20500_20526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (4))){
var inst_20460 = (state_20496[(9)]);
var inst_20460__$1 = (state_20496[(2)]);
var inst_20461 = (inst_20460__$1 == null);
var inst_20462 = cljs.core.not.call(null,inst_20461);
var state_20496__$1 = (function (){var statearr_20501 = state_20496;
(statearr_20501[(9)] = inst_20460__$1);

return statearr_20501;
})();
if(inst_20462){
var statearr_20502_20527 = state_20496__$1;
(statearr_20502_20527[(1)] = (5));

} else {
var statearr_20503_20528 = state_20496__$1;
(statearr_20503_20528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (15))){
var inst_20486 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
var statearr_20504_20529 = state_20496__$1;
(statearr_20504_20529[(2)] = inst_20486);

(statearr_20504_20529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (13))){
var state_20496__$1 = state_20496;
var statearr_20505_20530 = state_20496__$1;
(statearr_20505_20530[(2)] = null);

(statearr_20505_20530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (6))){
var inst_20456 = (state_20496[(7)]);
var inst_20481 = inst_20456.length;
var inst_20482 = (inst_20481 > (0));
var state_20496__$1 = state_20496;
if(cljs.core.truth_(inst_20482)){
var statearr_20506_20531 = state_20496__$1;
(statearr_20506_20531[(1)] = (12));

} else {
var statearr_20507_20532 = state_20496__$1;
(statearr_20507_20532[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (3))){
var inst_20494 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20496__$1,inst_20494);
} else {
if((state_val_20497 === (12))){
var inst_20456 = (state_20496[(7)]);
var inst_20484 = cljs.core.vec.call(null,inst_20456);
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20496__$1,(15),out,inst_20484);
} else {
if((state_val_20497 === (2))){
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20496__$1,(4),ch);
} else {
if((state_val_20497 === (11))){
var inst_20464 = (state_20496[(10)]);
var inst_20460 = (state_20496[(9)]);
var inst_20474 = (state_20496[(2)]);
var inst_20475 = [];
var inst_20476 = inst_20475.push(inst_20460);
var inst_20456 = inst_20475;
var inst_20457 = inst_20464;
var state_20496__$1 = (function (){var statearr_20508 = state_20496;
(statearr_20508[(11)] = inst_20474);

(statearr_20508[(12)] = inst_20476);

(statearr_20508[(7)] = inst_20456);

(statearr_20508[(8)] = inst_20457);

return statearr_20508;
})();
var statearr_20509_20533 = state_20496__$1;
(statearr_20509_20533[(2)] = null);

(statearr_20509_20533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (9))){
var inst_20456 = (state_20496[(7)]);
var inst_20472 = cljs.core.vec.call(null,inst_20456);
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20496__$1,(11),out,inst_20472);
} else {
if((state_val_20497 === (5))){
var inst_20464 = (state_20496[(10)]);
var inst_20460 = (state_20496[(9)]);
var inst_20457 = (state_20496[(8)]);
var inst_20464__$1 = f.call(null,inst_20460);
var inst_20465 = cljs.core._EQ_.call(null,inst_20464__$1,inst_20457);
var inst_20466 = cljs.core.keyword_identical_QMARK_.call(null,inst_20457,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20467 = ((inst_20465) || (inst_20466));
var state_20496__$1 = (function (){var statearr_20510 = state_20496;
(statearr_20510[(10)] = inst_20464__$1);

return statearr_20510;
})();
if(cljs.core.truth_(inst_20467)){
var statearr_20511_20534 = state_20496__$1;
(statearr_20511_20534[(1)] = (8));

} else {
var statearr_20512_20535 = state_20496__$1;
(statearr_20512_20535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (14))){
var inst_20489 = (state_20496[(2)]);
var inst_20490 = cljs.core.async.close_BANG_.call(null,out);
var state_20496__$1 = (function (){var statearr_20514 = state_20496;
(statearr_20514[(13)] = inst_20489);

return statearr_20514;
})();
var statearr_20515_20536 = state_20496__$1;
(statearr_20515_20536[(2)] = inst_20490);

(statearr_20515_20536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (10))){
var inst_20479 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
var statearr_20516_20537 = state_20496__$1;
(statearr_20516_20537[(2)] = inst_20479);

(statearr_20516_20537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20497 === (8))){
var inst_20464 = (state_20496[(10)]);
var inst_20456 = (state_20496[(7)]);
var inst_20460 = (state_20496[(9)]);
var inst_20469 = inst_20456.push(inst_20460);
var tmp20513 = inst_20456;
var inst_20456__$1 = tmp20513;
var inst_20457 = inst_20464;
var state_20496__$1 = (function (){var statearr_20517 = state_20496;
(statearr_20517[(7)] = inst_20456__$1);

(statearr_20517[(14)] = inst_20469);

(statearr_20517[(8)] = inst_20457);

return statearr_20517;
})();
var statearr_20518_20538 = state_20496__$1;
(statearr_20518_20538[(2)] = null);

(statearr_20518_20538[(1)] = (2));


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
});})(c__16756__auto___20524,out))
;
return ((function (switch__16597__auto__,c__16756__auto___20524,out){
return (function() {
var cljs$core$async$state_machine__16598__auto__ = null;
var cljs$core$async$state_machine__16598__auto____0 = (function (){
var statearr_20519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20519[(0)] = cljs$core$async$state_machine__16598__auto__);

(statearr_20519[(1)] = (1));

return statearr_20519;
});
var cljs$core$async$state_machine__16598__auto____1 = (function (state_20496){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_20496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e20520){if((e20520 instanceof Object)){
var ex__16601__auto__ = e20520;
var statearr_20521_20539 = state_20496;
(statearr_20521_20539[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20540 = state_20496;
state_20496 = G__20540;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
cljs$core$async$state_machine__16598__auto__ = function(state_20496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16598__auto____1.call(this,state_20496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16598__auto____0;
cljs$core$async$state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16598__auto____1;
return cljs$core$async$state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto___20524,out))
})();
var state__16758__auto__ = (function (){var statearr_20522 = f__16757__auto__.call(null);
(statearr_20522[(6)] = c__16756__auto___20524);

return statearr_20522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto___20524,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
