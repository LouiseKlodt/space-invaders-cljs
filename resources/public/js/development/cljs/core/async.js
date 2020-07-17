// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24091 = arguments.length;
switch (G__24091) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24092 = (function (f,blockable,meta24093){
this.f = f;
this.blockable = blockable;
this.meta24093 = meta24093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24094,meta24093__$1){
var self__ = this;
var _24094__$1 = this;
return (new cljs.core.async.t_cljs$core$async24092(self__.f,self__.blockable,meta24093__$1));
});

cljs.core.async.t_cljs$core$async24092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24094){
var self__ = this;
var _24094__$1 = this;
return self__.meta24093;
});

cljs.core.async.t_cljs$core$async24092.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24093","meta24093",107895361,null)], null);
});

cljs.core.async.t_cljs$core$async24092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24092";

cljs.core.async.t_cljs$core$async24092.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24092");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24092.
 */
cljs.core.async.__GT_t_cljs$core$async24092 = (function cljs$core$async$__GT_t_cljs$core$async24092(f__$1,blockable__$1,meta24093){
return (new cljs.core.async.t_cljs$core$async24092(f__$1,blockable__$1,meta24093));
});

}

return (new cljs.core.async.t_cljs$core$async24092(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24098 = arguments.length;
switch (G__24098) {
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
var G__24101 = arguments.length;
switch (G__24101) {
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
var G__24104 = arguments.length;
switch (G__24104) {
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
var val_24106 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24106);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24106,ret){
return (function (){
return fn1.call(null,val_24106);
});})(val_24106,ret))
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
var G__24108 = arguments.length;
switch (G__24108) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
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
var n__4607__auto___24110 = n;
var x_24111 = (0);
while(true){
if((x_24111 < n__4607__auto___24110)){
(a[x_24111] = (0));

var G__24112 = (x_24111 + (1));
x_24111 = G__24112;
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

var G__24113 = (i + (1));
i = G__24113;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24114 = (function (flag,meta24115){
this.flag = flag;
this.meta24115 = meta24115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24116,meta24115__$1){
var self__ = this;
var _24116__$1 = this;
return (new cljs.core.async.t_cljs$core$async24114(self__.flag,meta24115__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24116){
var self__ = this;
var _24116__$1 = this;
return self__.meta24115;
});})(flag))
;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24114.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24115","meta24115",134429781,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24114.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24114";

cljs.core.async.t_cljs$core$async24114.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24114");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24114.
 */
cljs.core.async.__GT_t_cljs$core$async24114 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24114(flag__$1,meta24115){
return (new cljs.core.async.t_cljs$core$async24114(flag__$1,meta24115));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24114(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24117 = (function (flag,cb,meta24118){
this.flag = flag;
this.cb = cb;
this.meta24118 = meta24118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24119,meta24118__$1){
var self__ = this;
var _24119__$1 = this;
return (new cljs.core.async.t_cljs$core$async24117(self__.flag,self__.cb,meta24118__$1));
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24119){
var self__ = this;
var _24119__$1 = this;
return self__.meta24118;
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24118","meta24118",1801534590,null)], null);
});

cljs.core.async.t_cljs$core$async24117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24117";

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24117");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24117.
 */
cljs.core.async.__GT_t_cljs$core$async24117 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24117(flag__$1,cb__$1,meta24118){
return (new cljs.core.async.t_cljs$core$async24117(flag__$1,cb__$1,meta24118));
});

}

return (new cljs.core.async.t_cljs$core$async24117(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24120_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24120_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24121_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24121_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24122 = (i + (1));
i = G__24122;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___24128 = arguments.length;
var i__4731__auto___24129 = (0);
while(true){
if((i__4731__auto___24129 < len__4730__auto___24128)){
args__4736__auto__.push((arguments[i__4731__auto___24129]));

var G__24130 = (i__4731__auto___24129 + (1));
i__4731__auto___24129 = G__24130;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24125){
var map__24126 = p__24125;
var map__24126__$1 = (((((!((map__24126 == null))))?(((((map__24126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24126):map__24126);
var opts = map__24126__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24123){
var G__24124 = cljs.core.first.call(null,seq24123);
var seq24123__$1 = cljs.core.next.call(null,seq24123);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24124,seq24123__$1);
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
var G__24132 = arguments.length;
switch (G__24132) {
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
var c__24031__auto___24178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___24178){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___24178){
return (function (state_24156){
var state_val_24157 = (state_24156[(1)]);
if((state_val_24157 === (7))){
var inst_24152 = (state_24156[(2)]);
var state_24156__$1 = state_24156;
var statearr_24158_24179 = state_24156__$1;
(statearr_24158_24179[(2)] = inst_24152);

(statearr_24158_24179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (1))){
var state_24156__$1 = state_24156;
var statearr_24159_24180 = state_24156__$1;
(statearr_24159_24180[(2)] = null);

(statearr_24159_24180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (4))){
var inst_24135 = (state_24156[(7)]);
var inst_24135__$1 = (state_24156[(2)]);
var inst_24136 = (inst_24135__$1 == null);
var state_24156__$1 = (function (){var statearr_24160 = state_24156;
(statearr_24160[(7)] = inst_24135__$1);

return statearr_24160;
})();
if(cljs.core.truth_(inst_24136)){
var statearr_24161_24181 = state_24156__$1;
(statearr_24161_24181[(1)] = (5));

} else {
var statearr_24162_24182 = state_24156__$1;
(statearr_24162_24182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (13))){
var state_24156__$1 = state_24156;
var statearr_24163_24183 = state_24156__$1;
(statearr_24163_24183[(2)] = null);

(statearr_24163_24183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (6))){
var inst_24135 = (state_24156[(7)]);
var state_24156__$1 = state_24156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24156__$1,(11),to,inst_24135);
} else {
if((state_val_24157 === (3))){
var inst_24154 = (state_24156[(2)]);
var state_24156__$1 = state_24156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24156__$1,inst_24154);
} else {
if((state_val_24157 === (12))){
var state_24156__$1 = state_24156;
var statearr_24164_24184 = state_24156__$1;
(statearr_24164_24184[(2)] = null);

(statearr_24164_24184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (2))){
var state_24156__$1 = state_24156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24156__$1,(4),from);
} else {
if((state_val_24157 === (11))){
var inst_24145 = (state_24156[(2)]);
var state_24156__$1 = state_24156;
if(cljs.core.truth_(inst_24145)){
var statearr_24165_24185 = state_24156__$1;
(statearr_24165_24185[(1)] = (12));

} else {
var statearr_24166_24186 = state_24156__$1;
(statearr_24166_24186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (9))){
var state_24156__$1 = state_24156;
var statearr_24167_24187 = state_24156__$1;
(statearr_24167_24187[(2)] = null);

(statearr_24167_24187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (5))){
var state_24156__$1 = state_24156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24168_24188 = state_24156__$1;
(statearr_24168_24188[(1)] = (8));

} else {
var statearr_24169_24189 = state_24156__$1;
(statearr_24169_24189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (14))){
var inst_24150 = (state_24156[(2)]);
var state_24156__$1 = state_24156;
var statearr_24170_24190 = state_24156__$1;
(statearr_24170_24190[(2)] = inst_24150);

(statearr_24170_24190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (10))){
var inst_24142 = (state_24156[(2)]);
var state_24156__$1 = state_24156;
var statearr_24171_24191 = state_24156__$1;
(statearr_24171_24191[(2)] = inst_24142);

(statearr_24171_24191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24157 === (8))){
var inst_24139 = cljs.core.async.close_BANG_.call(null,to);
var state_24156__$1 = state_24156;
var statearr_24172_24192 = state_24156__$1;
(statearr_24172_24192[(2)] = inst_24139);

(statearr_24172_24192[(1)] = (10));


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
});})(c__24031__auto___24178))
;
return ((function (switch__23936__auto__,c__24031__auto___24178){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_24173 = [null,null,null,null,null,null,null,null];
(statearr_24173[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_24173[(1)] = (1));

return statearr_24173;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_24156){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24174){if((e24174 instanceof Object)){
var ex__23940__auto__ = e24174;
var statearr_24175_24193 = state_24156;
(statearr_24175_24193[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24194 = state_24156;
state_24156 = G__24194;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_24156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_24156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___24178))
})();
var state__24033__auto__ = (function (){var statearr_24176 = f__24032__auto__.call(null);
(statearr_24176[(6)] = c__24031__auto___24178);

return statearr_24176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___24178))
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
return (function (p__24195){
var vec__24196 = p__24195;
var v = cljs.core.nth.call(null,vec__24196,(0),null);
var p = cljs.core.nth.call(null,vec__24196,(1),null);
var job = vec__24196;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24031__auto___24367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___24367,res,vec__24196,v,p,job,jobs,results){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___24367,res,vec__24196,v,p,job,jobs,results){
return (function (state_24203){
var state_val_24204 = (state_24203[(1)]);
if((state_val_24204 === (1))){
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24203__$1,(2),res,v);
} else {
if((state_val_24204 === (2))){
var inst_24200 = (state_24203[(2)]);
var inst_24201 = cljs.core.async.close_BANG_.call(null,res);
var state_24203__$1 = (function (){var statearr_24205 = state_24203;
(statearr_24205[(7)] = inst_24200);

return statearr_24205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24203__$1,inst_24201);
} else {
return null;
}
}
});})(c__24031__auto___24367,res,vec__24196,v,p,job,jobs,results))
;
return ((function (switch__23936__auto__,c__24031__auto___24367,res,vec__24196,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0 = (function (){
var statearr_24206 = [null,null,null,null,null,null,null,null];
(statearr_24206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__);

(statearr_24206[(1)] = (1));

return statearr_24206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1 = (function (state_24203){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24207){if((e24207 instanceof Object)){
var ex__23940__auto__ = e24207;
var statearr_24208_24368 = state_24203;
(statearr_24208_24368[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24369 = state_24203;
state_24203 = G__24369;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = function(state_24203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1.call(this,state_24203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___24367,res,vec__24196,v,p,job,jobs,results))
})();
var state__24033__auto__ = (function (){var statearr_24209 = f__24032__auto__.call(null);
(statearr_24209[(6)] = c__24031__auto___24367);

return statearr_24209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___24367,res,vec__24196,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24210){
var vec__24211 = p__24210;
var v = cljs.core.nth.call(null,vec__24211,(0),null);
var p = cljs.core.nth.call(null,vec__24211,(1),null);
var job = vec__24211;
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
var n__4607__auto___24370 = n;
var __24371 = (0);
while(true){
if((__24371 < n__4607__auto___24370)){
var G__24214_24372 = type;
var G__24214_24373__$1 = (((G__24214_24372 instanceof cljs.core.Keyword))?G__24214_24372.fqn:null);
switch (G__24214_24373__$1) {
case "compute":
var c__24031__auto___24375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24371,c__24031__auto___24375,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (__24371,c__24031__auto___24375,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async){
return (function (state_24227){
var state_val_24228 = (state_24227[(1)]);
if((state_val_24228 === (1))){
var state_24227__$1 = state_24227;
var statearr_24229_24376 = state_24227__$1;
(statearr_24229_24376[(2)] = null);

(statearr_24229_24376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (2))){
var state_24227__$1 = state_24227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24227__$1,(4),jobs);
} else {
if((state_val_24228 === (3))){
var inst_24225 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24227__$1,inst_24225);
} else {
if((state_val_24228 === (4))){
var inst_24217 = (state_24227[(2)]);
var inst_24218 = process.call(null,inst_24217);
var state_24227__$1 = state_24227;
if(cljs.core.truth_(inst_24218)){
var statearr_24230_24377 = state_24227__$1;
(statearr_24230_24377[(1)] = (5));

} else {
var statearr_24231_24378 = state_24227__$1;
(statearr_24231_24378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (5))){
var state_24227__$1 = state_24227;
var statearr_24232_24379 = state_24227__$1;
(statearr_24232_24379[(2)] = null);

(statearr_24232_24379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (6))){
var state_24227__$1 = state_24227;
var statearr_24233_24380 = state_24227__$1;
(statearr_24233_24380[(2)] = null);

(statearr_24233_24380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24228 === (7))){
var inst_24223 = (state_24227[(2)]);
var state_24227__$1 = state_24227;
var statearr_24234_24381 = state_24227__$1;
(statearr_24234_24381[(2)] = inst_24223);

(statearr_24234_24381[(1)] = (3));


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
});})(__24371,c__24031__auto___24375,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async))
;
return ((function (__24371,switch__23936__auto__,c__24031__auto___24375,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0 = (function (){
var statearr_24235 = [null,null,null,null,null,null,null];
(statearr_24235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__);

(statearr_24235[(1)] = (1));

return statearr_24235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1 = (function (state_24227){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24236){if((e24236 instanceof Object)){
var ex__23940__auto__ = e24236;
var statearr_24237_24382 = state_24227;
(statearr_24237_24382[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24383 = state_24227;
state_24227 = G__24383;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = function(state_24227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1.call(this,state_24227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__;
})()
;})(__24371,switch__23936__auto__,c__24031__auto___24375,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async))
})();
var state__24033__auto__ = (function (){var statearr_24238 = f__24032__auto__.call(null);
(statearr_24238[(6)] = c__24031__auto___24375);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(__24371,c__24031__auto___24375,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async))
);


break;
case "async":
var c__24031__auto___24384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24371,c__24031__auto___24384,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (__24371,c__24031__auto___24384,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async){
return (function (state_24251){
var state_val_24252 = (state_24251[(1)]);
if((state_val_24252 === (1))){
var state_24251__$1 = state_24251;
var statearr_24253_24385 = state_24251__$1;
(statearr_24253_24385[(2)] = null);

(statearr_24253_24385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (2))){
var state_24251__$1 = state_24251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24251__$1,(4),jobs);
} else {
if((state_val_24252 === (3))){
var inst_24249 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24251__$1,inst_24249);
} else {
if((state_val_24252 === (4))){
var inst_24241 = (state_24251[(2)]);
var inst_24242 = async.call(null,inst_24241);
var state_24251__$1 = state_24251;
if(cljs.core.truth_(inst_24242)){
var statearr_24254_24386 = state_24251__$1;
(statearr_24254_24386[(1)] = (5));

} else {
var statearr_24255_24387 = state_24251__$1;
(statearr_24255_24387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (5))){
var state_24251__$1 = state_24251;
var statearr_24256_24388 = state_24251__$1;
(statearr_24256_24388[(2)] = null);

(statearr_24256_24388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (6))){
var state_24251__$1 = state_24251;
var statearr_24257_24389 = state_24251__$1;
(statearr_24257_24389[(2)] = null);

(statearr_24257_24389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24252 === (7))){
var inst_24247 = (state_24251[(2)]);
var state_24251__$1 = state_24251;
var statearr_24258_24390 = state_24251__$1;
(statearr_24258_24390[(2)] = inst_24247);

(statearr_24258_24390[(1)] = (3));


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
});})(__24371,c__24031__auto___24384,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async))
;
return ((function (__24371,switch__23936__auto__,c__24031__auto___24384,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0 = (function (){
var statearr_24259 = [null,null,null,null,null,null,null];
(statearr_24259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__);

(statearr_24259[(1)] = (1));

return statearr_24259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1 = (function (state_24251){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24260){if((e24260 instanceof Object)){
var ex__23940__auto__ = e24260;
var statearr_24261_24391 = state_24251;
(statearr_24261_24391[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24392 = state_24251;
state_24251 = G__24392;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = function(state_24251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1.call(this,state_24251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__;
})()
;})(__24371,switch__23936__auto__,c__24031__auto___24384,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async))
})();
var state__24033__auto__ = (function (){var statearr_24262 = f__24032__auto__.call(null);
(statearr_24262[(6)] = c__24031__auto___24384);

return statearr_24262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(__24371,c__24031__auto___24384,G__24214_24372,G__24214_24373__$1,n__4607__auto___24370,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24214_24373__$1)].join('')));

}

var G__24393 = (__24371 + (1));
__24371 = G__24393;
continue;
} else {
}
break;
}

var c__24031__auto___24394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___24394,jobs,results,process,async){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___24394,jobs,results,process,async){
return (function (state_24284){
var state_val_24285 = (state_24284[(1)]);
if((state_val_24285 === (7))){
var inst_24280 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
var statearr_24286_24395 = state_24284__$1;
(statearr_24286_24395[(2)] = inst_24280);

(statearr_24286_24395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (1))){
var state_24284__$1 = state_24284;
var statearr_24287_24396 = state_24284__$1;
(statearr_24287_24396[(2)] = null);

(statearr_24287_24396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (4))){
var inst_24265 = (state_24284[(7)]);
var inst_24265__$1 = (state_24284[(2)]);
var inst_24266 = (inst_24265__$1 == null);
var state_24284__$1 = (function (){var statearr_24288 = state_24284;
(statearr_24288[(7)] = inst_24265__$1);

return statearr_24288;
})();
if(cljs.core.truth_(inst_24266)){
var statearr_24289_24397 = state_24284__$1;
(statearr_24289_24397[(1)] = (5));

} else {
var statearr_24290_24398 = state_24284__$1;
(statearr_24290_24398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (6))){
var inst_24265 = (state_24284[(7)]);
var inst_24270 = (state_24284[(8)]);
var inst_24270__$1 = cljs.core.async.chan.call(null,(1));
var inst_24271 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24272 = [inst_24265,inst_24270__$1];
var inst_24273 = (new cljs.core.PersistentVector(null,2,(5),inst_24271,inst_24272,null));
var state_24284__$1 = (function (){var statearr_24291 = state_24284;
(statearr_24291[(8)] = inst_24270__$1);

return statearr_24291;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24284__$1,(8),jobs,inst_24273);
} else {
if((state_val_24285 === (3))){
var inst_24282 = (state_24284[(2)]);
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24284__$1,inst_24282);
} else {
if((state_val_24285 === (2))){
var state_24284__$1 = state_24284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24284__$1,(4),from);
} else {
if((state_val_24285 === (9))){
var inst_24277 = (state_24284[(2)]);
var state_24284__$1 = (function (){var statearr_24292 = state_24284;
(statearr_24292[(9)] = inst_24277);

return statearr_24292;
})();
var statearr_24293_24399 = state_24284__$1;
(statearr_24293_24399[(2)] = null);

(statearr_24293_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (5))){
var inst_24268 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24284__$1 = state_24284;
var statearr_24294_24400 = state_24284__$1;
(statearr_24294_24400[(2)] = inst_24268);

(statearr_24294_24400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24285 === (8))){
var inst_24270 = (state_24284[(8)]);
var inst_24275 = (state_24284[(2)]);
var state_24284__$1 = (function (){var statearr_24295 = state_24284;
(statearr_24295[(10)] = inst_24275);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24284__$1,(9),results,inst_24270);
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
});})(c__24031__auto___24394,jobs,results,process,async))
;
return ((function (switch__23936__auto__,c__24031__auto___24394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0 = (function (){
var statearr_24296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__);

(statearr_24296[(1)] = (1));

return statearr_24296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1 = (function (state_24284){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24297){if((e24297 instanceof Object)){
var ex__23940__auto__ = e24297;
var statearr_24298_24401 = state_24284;
(statearr_24298_24401[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24402 = state_24284;
state_24284 = G__24402;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = function(state_24284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1.call(this,state_24284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___24394,jobs,results,process,async))
})();
var state__24033__auto__ = (function (){var statearr_24299 = f__24032__auto__.call(null);
(statearr_24299[(6)] = c__24031__auto___24394);

return statearr_24299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___24394,jobs,results,process,async))
);


var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__,jobs,results,process,async){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__,jobs,results,process,async){
return (function (state_24337){
var state_val_24338 = (state_24337[(1)]);
if((state_val_24338 === (7))){
var inst_24333 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24339_24403 = state_24337__$1;
(statearr_24339_24403[(2)] = inst_24333);

(statearr_24339_24403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (20))){
var state_24337__$1 = state_24337;
var statearr_24340_24404 = state_24337__$1;
(statearr_24340_24404[(2)] = null);

(statearr_24340_24404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (1))){
var state_24337__$1 = state_24337;
var statearr_24341_24405 = state_24337__$1;
(statearr_24341_24405[(2)] = null);

(statearr_24341_24405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (4))){
var inst_24302 = (state_24337[(7)]);
var inst_24302__$1 = (state_24337[(2)]);
var inst_24303 = (inst_24302__$1 == null);
var state_24337__$1 = (function (){var statearr_24342 = state_24337;
(statearr_24342[(7)] = inst_24302__$1);

return statearr_24342;
})();
if(cljs.core.truth_(inst_24303)){
var statearr_24343_24406 = state_24337__$1;
(statearr_24343_24406[(1)] = (5));

} else {
var statearr_24344_24407 = state_24337__$1;
(statearr_24344_24407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (15))){
var inst_24315 = (state_24337[(8)]);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24337__$1,(18),to,inst_24315);
} else {
if((state_val_24338 === (21))){
var inst_24328 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24345_24408 = state_24337__$1;
(statearr_24345_24408[(2)] = inst_24328);

(statearr_24345_24408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (13))){
var inst_24330 = (state_24337[(2)]);
var state_24337__$1 = (function (){var statearr_24346 = state_24337;
(statearr_24346[(9)] = inst_24330);

return statearr_24346;
})();
var statearr_24347_24409 = state_24337__$1;
(statearr_24347_24409[(2)] = null);

(statearr_24347_24409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (6))){
var inst_24302 = (state_24337[(7)]);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24337__$1,(11),inst_24302);
} else {
if((state_val_24338 === (17))){
var inst_24323 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
if(cljs.core.truth_(inst_24323)){
var statearr_24348_24410 = state_24337__$1;
(statearr_24348_24410[(1)] = (19));

} else {
var statearr_24349_24411 = state_24337__$1;
(statearr_24349_24411[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (3))){
var inst_24335 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24337__$1,inst_24335);
} else {
if((state_val_24338 === (12))){
var inst_24312 = (state_24337[(10)]);
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24337__$1,(14),inst_24312);
} else {
if((state_val_24338 === (2))){
var state_24337__$1 = state_24337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24337__$1,(4),results);
} else {
if((state_val_24338 === (19))){
var state_24337__$1 = state_24337;
var statearr_24350_24412 = state_24337__$1;
(statearr_24350_24412[(2)] = null);

(statearr_24350_24412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (11))){
var inst_24312 = (state_24337[(2)]);
var state_24337__$1 = (function (){var statearr_24351 = state_24337;
(statearr_24351[(10)] = inst_24312);

return statearr_24351;
})();
var statearr_24352_24413 = state_24337__$1;
(statearr_24352_24413[(2)] = null);

(statearr_24352_24413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (9))){
var state_24337__$1 = state_24337;
var statearr_24353_24414 = state_24337__$1;
(statearr_24353_24414[(2)] = null);

(statearr_24353_24414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (5))){
var state_24337__$1 = state_24337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24354_24415 = state_24337__$1;
(statearr_24354_24415[(1)] = (8));

} else {
var statearr_24355_24416 = state_24337__$1;
(statearr_24355_24416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (14))){
var inst_24317 = (state_24337[(11)]);
var inst_24315 = (state_24337[(8)]);
var inst_24315__$1 = (state_24337[(2)]);
var inst_24316 = (inst_24315__$1 == null);
var inst_24317__$1 = cljs.core.not.call(null,inst_24316);
var state_24337__$1 = (function (){var statearr_24356 = state_24337;
(statearr_24356[(11)] = inst_24317__$1);

(statearr_24356[(8)] = inst_24315__$1);

return statearr_24356;
})();
if(inst_24317__$1){
var statearr_24357_24417 = state_24337__$1;
(statearr_24357_24417[(1)] = (15));

} else {
var statearr_24358_24418 = state_24337__$1;
(statearr_24358_24418[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (16))){
var inst_24317 = (state_24337[(11)]);
var state_24337__$1 = state_24337;
var statearr_24359_24419 = state_24337__$1;
(statearr_24359_24419[(2)] = inst_24317);

(statearr_24359_24419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (10))){
var inst_24309 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24360_24420 = state_24337__$1;
(statearr_24360_24420[(2)] = inst_24309);

(statearr_24360_24420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (18))){
var inst_24320 = (state_24337[(2)]);
var state_24337__$1 = state_24337;
var statearr_24361_24421 = state_24337__$1;
(statearr_24361_24421[(2)] = inst_24320);

(statearr_24361_24421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24338 === (8))){
var inst_24306 = cljs.core.async.close_BANG_.call(null,to);
var state_24337__$1 = state_24337;
var statearr_24362_24422 = state_24337__$1;
(statearr_24362_24422[(2)] = inst_24306);

(statearr_24362_24422[(1)] = (10));


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
});})(c__24031__auto__,jobs,results,process,async))
;
return ((function (switch__23936__auto__,c__24031__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0 = (function (){
var statearr_24363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__);

(statearr_24363[(1)] = (1));

return statearr_24363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1 = (function (state_24337){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24364){if((e24364 instanceof Object)){
var ex__23940__auto__ = e24364;
var statearr_24365_24423 = state_24337;
(statearr_24365_24423[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24424 = state_24337;
state_24337 = G__24424;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__ = function(state_24337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1.call(this,state_24337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23937__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__,jobs,results,process,async))
})();
var state__24033__auto__ = (function (){var statearr_24366 = f__24032__auto__.call(null);
(statearr_24366[(6)] = c__24031__auto__);

return statearr_24366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__,jobs,results,process,async))
);

return c__24031__auto__;
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
var G__24426 = arguments.length;
switch (G__24426) {
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
var G__24429 = arguments.length;
switch (G__24429) {
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
var G__24432 = arguments.length;
switch (G__24432) {
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
var c__24031__auto___24481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___24481,tc,fc){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___24481,tc,fc){
return (function (state_24458){
var state_val_24459 = (state_24458[(1)]);
if((state_val_24459 === (7))){
var inst_24454 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
var statearr_24460_24482 = state_24458__$1;
(statearr_24460_24482[(2)] = inst_24454);

(statearr_24460_24482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (1))){
var state_24458__$1 = state_24458;
var statearr_24461_24483 = state_24458__$1;
(statearr_24461_24483[(2)] = null);

(statearr_24461_24483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (4))){
var inst_24435 = (state_24458[(7)]);
var inst_24435__$1 = (state_24458[(2)]);
var inst_24436 = (inst_24435__$1 == null);
var state_24458__$1 = (function (){var statearr_24462 = state_24458;
(statearr_24462[(7)] = inst_24435__$1);

return statearr_24462;
})();
if(cljs.core.truth_(inst_24436)){
var statearr_24463_24484 = state_24458__$1;
(statearr_24463_24484[(1)] = (5));

} else {
var statearr_24464_24485 = state_24458__$1;
(statearr_24464_24485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (13))){
var state_24458__$1 = state_24458;
var statearr_24465_24486 = state_24458__$1;
(statearr_24465_24486[(2)] = null);

(statearr_24465_24486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (6))){
var inst_24435 = (state_24458[(7)]);
var inst_24441 = p.call(null,inst_24435);
var state_24458__$1 = state_24458;
if(cljs.core.truth_(inst_24441)){
var statearr_24466_24487 = state_24458__$1;
(statearr_24466_24487[(1)] = (9));

} else {
var statearr_24467_24488 = state_24458__$1;
(statearr_24467_24488[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (3))){
var inst_24456 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24458__$1,inst_24456);
} else {
if((state_val_24459 === (12))){
var state_24458__$1 = state_24458;
var statearr_24468_24489 = state_24458__$1;
(statearr_24468_24489[(2)] = null);

(statearr_24468_24489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (2))){
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24458__$1,(4),ch);
} else {
if((state_val_24459 === (11))){
var inst_24435 = (state_24458[(7)]);
var inst_24445 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24458__$1,(8),inst_24445,inst_24435);
} else {
if((state_val_24459 === (9))){
var state_24458__$1 = state_24458;
var statearr_24469_24490 = state_24458__$1;
(statearr_24469_24490[(2)] = tc);

(statearr_24469_24490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (5))){
var inst_24438 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24439 = cljs.core.async.close_BANG_.call(null,fc);
var state_24458__$1 = (function (){var statearr_24470 = state_24458;
(statearr_24470[(8)] = inst_24438);

return statearr_24470;
})();
var statearr_24471_24491 = state_24458__$1;
(statearr_24471_24491[(2)] = inst_24439);

(statearr_24471_24491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (14))){
var inst_24452 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
var statearr_24472_24492 = state_24458__$1;
(statearr_24472_24492[(2)] = inst_24452);

(statearr_24472_24492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (10))){
var state_24458__$1 = state_24458;
var statearr_24473_24493 = state_24458__$1;
(statearr_24473_24493[(2)] = fc);

(statearr_24473_24493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24459 === (8))){
var inst_24447 = (state_24458[(2)]);
var state_24458__$1 = state_24458;
if(cljs.core.truth_(inst_24447)){
var statearr_24474_24494 = state_24458__$1;
(statearr_24474_24494[(1)] = (12));

} else {
var statearr_24475_24495 = state_24458__$1;
(statearr_24475_24495[(1)] = (13));

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
});})(c__24031__auto___24481,tc,fc))
;
return ((function (switch__23936__auto__,c__24031__auto___24481,tc,fc){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_24476 = [null,null,null,null,null,null,null,null,null];
(statearr_24476[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_24476[(1)] = (1));

return statearr_24476;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_24458){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24477){if((e24477 instanceof Object)){
var ex__23940__auto__ = e24477;
var statearr_24478_24496 = state_24458;
(statearr_24478_24496[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24497 = state_24458;
state_24458 = G__24497;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_24458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_24458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___24481,tc,fc))
})();
var state__24033__auto__ = (function (){var statearr_24479 = f__24032__auto__.call(null);
(statearr_24479[(6)] = c__24031__auto___24481);

return statearr_24479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___24481,tc,fc))
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
var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__){
return (function (state_24518){
var state_val_24519 = (state_24518[(1)]);
if((state_val_24519 === (7))){
var inst_24514 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24520_24538 = state_24518__$1;
(statearr_24520_24538[(2)] = inst_24514);

(statearr_24520_24538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (1))){
var inst_24498 = init;
var state_24518__$1 = (function (){var statearr_24521 = state_24518;
(statearr_24521[(7)] = inst_24498);

return statearr_24521;
})();
var statearr_24522_24539 = state_24518__$1;
(statearr_24522_24539[(2)] = null);

(statearr_24522_24539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (4))){
var inst_24501 = (state_24518[(8)]);
var inst_24501__$1 = (state_24518[(2)]);
var inst_24502 = (inst_24501__$1 == null);
var state_24518__$1 = (function (){var statearr_24523 = state_24518;
(statearr_24523[(8)] = inst_24501__$1);

return statearr_24523;
})();
if(cljs.core.truth_(inst_24502)){
var statearr_24524_24540 = state_24518__$1;
(statearr_24524_24540[(1)] = (5));

} else {
var statearr_24525_24541 = state_24518__$1;
(statearr_24525_24541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (6))){
var inst_24498 = (state_24518[(7)]);
var inst_24501 = (state_24518[(8)]);
var inst_24505 = (state_24518[(9)]);
var inst_24505__$1 = f.call(null,inst_24498,inst_24501);
var inst_24506 = cljs.core.reduced_QMARK_.call(null,inst_24505__$1);
var state_24518__$1 = (function (){var statearr_24526 = state_24518;
(statearr_24526[(9)] = inst_24505__$1);

return statearr_24526;
})();
if(inst_24506){
var statearr_24527_24542 = state_24518__$1;
(statearr_24527_24542[(1)] = (8));

} else {
var statearr_24528_24543 = state_24518__$1;
(statearr_24528_24543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (3))){
var inst_24516 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24518__$1,inst_24516);
} else {
if((state_val_24519 === (2))){
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,(4),ch);
} else {
if((state_val_24519 === (9))){
var inst_24505 = (state_24518[(9)]);
var inst_24498 = inst_24505;
var state_24518__$1 = (function (){var statearr_24529 = state_24518;
(statearr_24529[(7)] = inst_24498);

return statearr_24529;
})();
var statearr_24530_24544 = state_24518__$1;
(statearr_24530_24544[(2)] = null);

(statearr_24530_24544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (5))){
var inst_24498 = (state_24518[(7)]);
var state_24518__$1 = state_24518;
var statearr_24531_24545 = state_24518__$1;
(statearr_24531_24545[(2)] = inst_24498);

(statearr_24531_24545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (10))){
var inst_24512 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24532_24546 = state_24518__$1;
(statearr_24532_24546[(2)] = inst_24512);

(statearr_24532_24546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24519 === (8))){
var inst_24505 = (state_24518[(9)]);
var inst_24508 = cljs.core.deref.call(null,inst_24505);
var state_24518__$1 = state_24518;
var statearr_24533_24547 = state_24518__$1;
(statearr_24533_24547[(2)] = inst_24508);

(statearr_24533_24547[(1)] = (10));


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
});})(c__24031__auto__))
;
return ((function (switch__23936__auto__,c__24031__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23937__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23937__auto____0 = (function (){
var statearr_24534 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24534[(0)] = cljs$core$async$reduce_$_state_machine__23937__auto__);

(statearr_24534[(1)] = (1));

return statearr_24534;
});
var cljs$core$async$reduce_$_state_machine__23937__auto____1 = (function (state_24518){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24535){if((e24535 instanceof Object)){
var ex__23940__auto__ = e24535;
var statearr_24536_24548 = state_24518;
(statearr_24536_24548[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24549 = state_24518;
state_24518 = G__24549;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23937__auto__ = function(state_24518){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23937__auto____1.call(this,state_24518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23937__auto____0;
cljs$core$async$reduce_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23937__auto____1;
return cljs$core$async$reduce_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__))
})();
var state__24033__auto__ = (function (){var statearr_24537 = f__24032__auto__.call(null);
(statearr_24537[(6)] = c__24031__auto__);

return statearr_24537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__))
);

return c__24031__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__,f__$1){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__,f__$1){
return (function (state_24555){
var state_val_24556 = (state_24555[(1)]);
if((state_val_24556 === (1))){
var inst_24550 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24555__$1 = state_24555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24555__$1,(2),inst_24550);
} else {
if((state_val_24556 === (2))){
var inst_24552 = (state_24555[(2)]);
var inst_24553 = f__$1.call(null,inst_24552);
var state_24555__$1 = state_24555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24555__$1,inst_24553);
} else {
return null;
}
}
});})(c__24031__auto__,f__$1))
;
return ((function (switch__23936__auto__,c__24031__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23937__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23937__auto____0 = (function (){
var statearr_24557 = [null,null,null,null,null,null,null];
(statearr_24557[(0)] = cljs$core$async$transduce_$_state_machine__23937__auto__);

(statearr_24557[(1)] = (1));

return statearr_24557;
});
var cljs$core$async$transduce_$_state_machine__23937__auto____1 = (function (state_24555){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24558){if((e24558 instanceof Object)){
var ex__23940__auto__ = e24558;
var statearr_24559_24561 = state_24555;
(statearr_24559_24561[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24562 = state_24555;
state_24555 = G__24562;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23937__auto__ = function(state_24555){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23937__auto____1.call(this,state_24555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23937__auto____0;
cljs$core$async$transduce_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23937__auto____1;
return cljs$core$async$transduce_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__,f__$1))
})();
var state__24033__auto__ = (function (){var statearr_24560 = f__24032__auto__.call(null);
(statearr_24560[(6)] = c__24031__auto__);

return statearr_24560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__,f__$1))
);

return c__24031__auto__;
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
var G__24564 = arguments.length;
switch (G__24564) {
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
var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__){
return (function (state_24589){
var state_val_24590 = (state_24589[(1)]);
if((state_val_24590 === (7))){
var inst_24571 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24591_24612 = state_24589__$1;
(statearr_24591_24612[(2)] = inst_24571);

(statearr_24591_24612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (1))){
var inst_24565 = cljs.core.seq.call(null,coll);
var inst_24566 = inst_24565;
var state_24589__$1 = (function (){var statearr_24592 = state_24589;
(statearr_24592[(7)] = inst_24566);

return statearr_24592;
})();
var statearr_24593_24613 = state_24589__$1;
(statearr_24593_24613[(2)] = null);

(statearr_24593_24613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (4))){
var inst_24566 = (state_24589[(7)]);
var inst_24569 = cljs.core.first.call(null,inst_24566);
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24589__$1,(7),ch,inst_24569);
} else {
if((state_val_24590 === (13))){
var inst_24583 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24594_24614 = state_24589__$1;
(statearr_24594_24614[(2)] = inst_24583);

(statearr_24594_24614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (6))){
var inst_24574 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
if(cljs.core.truth_(inst_24574)){
var statearr_24595_24615 = state_24589__$1;
(statearr_24595_24615[(1)] = (8));

} else {
var statearr_24596_24616 = state_24589__$1;
(statearr_24596_24616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (3))){
var inst_24587 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24589__$1,inst_24587);
} else {
if((state_val_24590 === (12))){
var state_24589__$1 = state_24589;
var statearr_24597_24617 = state_24589__$1;
(statearr_24597_24617[(2)] = null);

(statearr_24597_24617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (2))){
var inst_24566 = (state_24589[(7)]);
var state_24589__$1 = state_24589;
if(cljs.core.truth_(inst_24566)){
var statearr_24598_24618 = state_24589__$1;
(statearr_24598_24618[(1)] = (4));

} else {
var statearr_24599_24619 = state_24589__$1;
(statearr_24599_24619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (11))){
var inst_24580 = cljs.core.async.close_BANG_.call(null,ch);
var state_24589__$1 = state_24589;
var statearr_24600_24620 = state_24589__$1;
(statearr_24600_24620[(2)] = inst_24580);

(statearr_24600_24620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (9))){
var state_24589__$1 = state_24589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24601_24621 = state_24589__$1;
(statearr_24601_24621[(1)] = (11));

} else {
var statearr_24602_24622 = state_24589__$1;
(statearr_24602_24622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (5))){
var inst_24566 = (state_24589[(7)]);
var state_24589__$1 = state_24589;
var statearr_24603_24623 = state_24589__$1;
(statearr_24603_24623[(2)] = inst_24566);

(statearr_24603_24623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (10))){
var inst_24585 = (state_24589[(2)]);
var state_24589__$1 = state_24589;
var statearr_24604_24624 = state_24589__$1;
(statearr_24604_24624[(2)] = inst_24585);

(statearr_24604_24624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24590 === (8))){
var inst_24566 = (state_24589[(7)]);
var inst_24576 = cljs.core.next.call(null,inst_24566);
var inst_24566__$1 = inst_24576;
var state_24589__$1 = (function (){var statearr_24605 = state_24589;
(statearr_24605[(7)] = inst_24566__$1);

return statearr_24605;
})();
var statearr_24606_24625 = state_24589__$1;
(statearr_24606_24625[(2)] = null);

(statearr_24606_24625[(1)] = (2));


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
});})(c__24031__auto__))
;
return ((function (switch__23936__auto__,c__24031__auto__){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_24607 = [null,null,null,null,null,null,null,null];
(statearr_24607[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_24607[(1)] = (1));

return statearr_24607;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_24589){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24608){if((e24608 instanceof Object)){
var ex__23940__auto__ = e24608;
var statearr_24609_24626 = state_24589;
(statearr_24609_24626[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24627 = state_24589;
state_24589 = G__24627;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_24589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_24589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__))
})();
var state__24033__auto__ = (function (){var statearr_24610 = f__24032__auto__.call(null);
(statearr_24610[(6)] = c__24031__auto__);

return statearr_24610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__))
);

return c__24031__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24628 = (function (ch,cs,meta24629){
this.ch = ch;
this.cs = cs;
this.meta24629 = meta24629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24630,meta24629__$1){
var self__ = this;
var _24630__$1 = this;
return (new cljs.core.async.t_cljs$core$async24628(self__.ch,self__.cs,meta24629__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24630){
var self__ = this;
var _24630__$1 = this;
return self__.meta24629;
});})(cs))
;

cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24628.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24628.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24629","meta24629",-1783144914,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24628.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24628";

cljs.core.async.t_cljs$core$async24628.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24628");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24628.
 */
cljs.core.async.__GT_t_cljs$core$async24628 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24628(ch__$1,cs__$1,meta24629){
return (new cljs.core.async.t_cljs$core$async24628(ch__$1,cs__$1,meta24629));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24628(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24031__auto___24850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___24850,cs,m,dchan,dctr,done){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___24850,cs,m,dchan,dctr,done){
return (function (state_24765){
var state_val_24766 = (state_24765[(1)]);
if((state_val_24766 === (7))){
var inst_24761 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24767_24851 = state_24765__$1;
(statearr_24767_24851[(2)] = inst_24761);

(statearr_24767_24851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (20))){
var inst_24664 = (state_24765[(7)]);
var inst_24676 = cljs.core.first.call(null,inst_24664);
var inst_24677 = cljs.core.nth.call(null,inst_24676,(0),null);
var inst_24678 = cljs.core.nth.call(null,inst_24676,(1),null);
var state_24765__$1 = (function (){var statearr_24768 = state_24765;
(statearr_24768[(8)] = inst_24677);

return statearr_24768;
})();
if(cljs.core.truth_(inst_24678)){
var statearr_24769_24852 = state_24765__$1;
(statearr_24769_24852[(1)] = (22));

} else {
var statearr_24770_24853 = state_24765__$1;
(statearr_24770_24853[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (27))){
var inst_24708 = (state_24765[(9)]);
var inst_24706 = (state_24765[(10)]);
var inst_24713 = (state_24765[(11)]);
var inst_24633 = (state_24765[(12)]);
var inst_24713__$1 = cljs.core._nth.call(null,inst_24706,inst_24708);
var inst_24714 = cljs.core.async.put_BANG_.call(null,inst_24713__$1,inst_24633,done);
var state_24765__$1 = (function (){var statearr_24771 = state_24765;
(statearr_24771[(11)] = inst_24713__$1);

return statearr_24771;
})();
if(cljs.core.truth_(inst_24714)){
var statearr_24772_24854 = state_24765__$1;
(statearr_24772_24854[(1)] = (30));

} else {
var statearr_24773_24855 = state_24765__$1;
(statearr_24773_24855[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (1))){
var state_24765__$1 = state_24765;
var statearr_24774_24856 = state_24765__$1;
(statearr_24774_24856[(2)] = null);

(statearr_24774_24856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (24))){
var inst_24664 = (state_24765[(7)]);
var inst_24683 = (state_24765[(2)]);
var inst_24684 = cljs.core.next.call(null,inst_24664);
var inst_24642 = inst_24684;
var inst_24643 = null;
var inst_24644 = (0);
var inst_24645 = (0);
var state_24765__$1 = (function (){var statearr_24775 = state_24765;
(statearr_24775[(13)] = inst_24683);

(statearr_24775[(14)] = inst_24645);

(statearr_24775[(15)] = inst_24644);

(statearr_24775[(16)] = inst_24643);

(statearr_24775[(17)] = inst_24642);

return statearr_24775;
})();
var statearr_24776_24857 = state_24765__$1;
(statearr_24776_24857[(2)] = null);

(statearr_24776_24857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (39))){
var state_24765__$1 = state_24765;
var statearr_24780_24858 = state_24765__$1;
(statearr_24780_24858[(2)] = null);

(statearr_24780_24858[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (4))){
var inst_24633 = (state_24765[(12)]);
var inst_24633__$1 = (state_24765[(2)]);
var inst_24634 = (inst_24633__$1 == null);
var state_24765__$1 = (function (){var statearr_24781 = state_24765;
(statearr_24781[(12)] = inst_24633__$1);

return statearr_24781;
})();
if(cljs.core.truth_(inst_24634)){
var statearr_24782_24859 = state_24765__$1;
(statearr_24782_24859[(1)] = (5));

} else {
var statearr_24783_24860 = state_24765__$1;
(statearr_24783_24860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (15))){
var inst_24645 = (state_24765[(14)]);
var inst_24644 = (state_24765[(15)]);
var inst_24643 = (state_24765[(16)]);
var inst_24642 = (state_24765[(17)]);
var inst_24660 = (state_24765[(2)]);
var inst_24661 = (inst_24645 + (1));
var tmp24777 = inst_24644;
var tmp24778 = inst_24643;
var tmp24779 = inst_24642;
var inst_24642__$1 = tmp24779;
var inst_24643__$1 = tmp24778;
var inst_24644__$1 = tmp24777;
var inst_24645__$1 = inst_24661;
var state_24765__$1 = (function (){var statearr_24784 = state_24765;
(statearr_24784[(14)] = inst_24645__$1);

(statearr_24784[(18)] = inst_24660);

(statearr_24784[(15)] = inst_24644__$1);

(statearr_24784[(16)] = inst_24643__$1);

(statearr_24784[(17)] = inst_24642__$1);

return statearr_24784;
})();
var statearr_24785_24861 = state_24765__$1;
(statearr_24785_24861[(2)] = null);

(statearr_24785_24861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (21))){
var inst_24687 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24789_24862 = state_24765__$1;
(statearr_24789_24862[(2)] = inst_24687);

(statearr_24789_24862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (31))){
var inst_24713 = (state_24765[(11)]);
var inst_24717 = done.call(null,null);
var inst_24718 = cljs.core.async.untap_STAR_.call(null,m,inst_24713);
var state_24765__$1 = (function (){var statearr_24790 = state_24765;
(statearr_24790[(19)] = inst_24717);

return statearr_24790;
})();
var statearr_24791_24863 = state_24765__$1;
(statearr_24791_24863[(2)] = inst_24718);

(statearr_24791_24863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (32))){
var inst_24708 = (state_24765[(9)]);
var inst_24706 = (state_24765[(10)]);
var inst_24705 = (state_24765[(20)]);
var inst_24707 = (state_24765[(21)]);
var inst_24720 = (state_24765[(2)]);
var inst_24721 = (inst_24708 + (1));
var tmp24786 = inst_24706;
var tmp24787 = inst_24705;
var tmp24788 = inst_24707;
var inst_24705__$1 = tmp24787;
var inst_24706__$1 = tmp24786;
var inst_24707__$1 = tmp24788;
var inst_24708__$1 = inst_24721;
var state_24765__$1 = (function (){var statearr_24792 = state_24765;
(statearr_24792[(9)] = inst_24708__$1);

(statearr_24792[(22)] = inst_24720);

(statearr_24792[(10)] = inst_24706__$1);

(statearr_24792[(20)] = inst_24705__$1);

(statearr_24792[(21)] = inst_24707__$1);

return statearr_24792;
})();
var statearr_24793_24864 = state_24765__$1;
(statearr_24793_24864[(2)] = null);

(statearr_24793_24864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (40))){
var inst_24733 = (state_24765[(23)]);
var inst_24737 = done.call(null,null);
var inst_24738 = cljs.core.async.untap_STAR_.call(null,m,inst_24733);
var state_24765__$1 = (function (){var statearr_24794 = state_24765;
(statearr_24794[(24)] = inst_24737);

return statearr_24794;
})();
var statearr_24795_24865 = state_24765__$1;
(statearr_24795_24865[(2)] = inst_24738);

(statearr_24795_24865[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (33))){
var inst_24724 = (state_24765[(25)]);
var inst_24726 = cljs.core.chunked_seq_QMARK_.call(null,inst_24724);
var state_24765__$1 = state_24765;
if(inst_24726){
var statearr_24796_24866 = state_24765__$1;
(statearr_24796_24866[(1)] = (36));

} else {
var statearr_24797_24867 = state_24765__$1;
(statearr_24797_24867[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (13))){
var inst_24654 = (state_24765[(26)]);
var inst_24657 = cljs.core.async.close_BANG_.call(null,inst_24654);
var state_24765__$1 = state_24765;
var statearr_24798_24868 = state_24765__$1;
(statearr_24798_24868[(2)] = inst_24657);

(statearr_24798_24868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (22))){
var inst_24677 = (state_24765[(8)]);
var inst_24680 = cljs.core.async.close_BANG_.call(null,inst_24677);
var state_24765__$1 = state_24765;
var statearr_24799_24869 = state_24765__$1;
(statearr_24799_24869[(2)] = inst_24680);

(statearr_24799_24869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (36))){
var inst_24724 = (state_24765[(25)]);
var inst_24728 = cljs.core.chunk_first.call(null,inst_24724);
var inst_24729 = cljs.core.chunk_rest.call(null,inst_24724);
var inst_24730 = cljs.core.count.call(null,inst_24728);
var inst_24705 = inst_24729;
var inst_24706 = inst_24728;
var inst_24707 = inst_24730;
var inst_24708 = (0);
var state_24765__$1 = (function (){var statearr_24800 = state_24765;
(statearr_24800[(9)] = inst_24708);

(statearr_24800[(10)] = inst_24706);

(statearr_24800[(20)] = inst_24705);

(statearr_24800[(21)] = inst_24707);

return statearr_24800;
})();
var statearr_24801_24870 = state_24765__$1;
(statearr_24801_24870[(2)] = null);

(statearr_24801_24870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (41))){
var inst_24724 = (state_24765[(25)]);
var inst_24740 = (state_24765[(2)]);
var inst_24741 = cljs.core.next.call(null,inst_24724);
var inst_24705 = inst_24741;
var inst_24706 = null;
var inst_24707 = (0);
var inst_24708 = (0);
var state_24765__$1 = (function (){var statearr_24802 = state_24765;
(statearr_24802[(9)] = inst_24708);

(statearr_24802[(10)] = inst_24706);

(statearr_24802[(20)] = inst_24705);

(statearr_24802[(21)] = inst_24707);

(statearr_24802[(27)] = inst_24740);

return statearr_24802;
})();
var statearr_24803_24871 = state_24765__$1;
(statearr_24803_24871[(2)] = null);

(statearr_24803_24871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (43))){
var state_24765__$1 = state_24765;
var statearr_24804_24872 = state_24765__$1;
(statearr_24804_24872[(2)] = null);

(statearr_24804_24872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (29))){
var inst_24749 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24805_24873 = state_24765__$1;
(statearr_24805_24873[(2)] = inst_24749);

(statearr_24805_24873[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (44))){
var inst_24758 = (state_24765[(2)]);
var state_24765__$1 = (function (){var statearr_24806 = state_24765;
(statearr_24806[(28)] = inst_24758);

return statearr_24806;
})();
var statearr_24807_24874 = state_24765__$1;
(statearr_24807_24874[(2)] = null);

(statearr_24807_24874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (6))){
var inst_24697 = (state_24765[(29)]);
var inst_24696 = cljs.core.deref.call(null,cs);
var inst_24697__$1 = cljs.core.keys.call(null,inst_24696);
var inst_24698 = cljs.core.count.call(null,inst_24697__$1);
var inst_24699 = cljs.core.reset_BANG_.call(null,dctr,inst_24698);
var inst_24704 = cljs.core.seq.call(null,inst_24697__$1);
var inst_24705 = inst_24704;
var inst_24706 = null;
var inst_24707 = (0);
var inst_24708 = (0);
var state_24765__$1 = (function (){var statearr_24808 = state_24765;
(statearr_24808[(9)] = inst_24708);

(statearr_24808[(30)] = inst_24699);

(statearr_24808[(10)] = inst_24706);

(statearr_24808[(20)] = inst_24705);

(statearr_24808[(21)] = inst_24707);

(statearr_24808[(29)] = inst_24697__$1);

return statearr_24808;
})();
var statearr_24809_24875 = state_24765__$1;
(statearr_24809_24875[(2)] = null);

(statearr_24809_24875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (28))){
var inst_24724 = (state_24765[(25)]);
var inst_24705 = (state_24765[(20)]);
var inst_24724__$1 = cljs.core.seq.call(null,inst_24705);
var state_24765__$1 = (function (){var statearr_24810 = state_24765;
(statearr_24810[(25)] = inst_24724__$1);

return statearr_24810;
})();
if(inst_24724__$1){
var statearr_24811_24876 = state_24765__$1;
(statearr_24811_24876[(1)] = (33));

} else {
var statearr_24812_24877 = state_24765__$1;
(statearr_24812_24877[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (25))){
var inst_24708 = (state_24765[(9)]);
var inst_24707 = (state_24765[(21)]);
var inst_24710 = (inst_24708 < inst_24707);
var inst_24711 = inst_24710;
var state_24765__$1 = state_24765;
if(cljs.core.truth_(inst_24711)){
var statearr_24813_24878 = state_24765__$1;
(statearr_24813_24878[(1)] = (27));

} else {
var statearr_24814_24879 = state_24765__$1;
(statearr_24814_24879[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (34))){
var state_24765__$1 = state_24765;
var statearr_24815_24880 = state_24765__$1;
(statearr_24815_24880[(2)] = null);

(statearr_24815_24880[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (17))){
var state_24765__$1 = state_24765;
var statearr_24816_24881 = state_24765__$1;
(statearr_24816_24881[(2)] = null);

(statearr_24816_24881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (3))){
var inst_24763 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else {
if((state_val_24766 === (12))){
var inst_24692 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24817_24882 = state_24765__$1;
(statearr_24817_24882[(2)] = inst_24692);

(statearr_24817_24882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (2))){
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,(4),ch);
} else {
if((state_val_24766 === (23))){
var state_24765__$1 = state_24765;
var statearr_24818_24883 = state_24765__$1;
(statearr_24818_24883[(2)] = null);

(statearr_24818_24883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (35))){
var inst_24747 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24819_24884 = state_24765__$1;
(statearr_24819_24884[(2)] = inst_24747);

(statearr_24819_24884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (19))){
var inst_24664 = (state_24765[(7)]);
var inst_24668 = cljs.core.chunk_first.call(null,inst_24664);
var inst_24669 = cljs.core.chunk_rest.call(null,inst_24664);
var inst_24670 = cljs.core.count.call(null,inst_24668);
var inst_24642 = inst_24669;
var inst_24643 = inst_24668;
var inst_24644 = inst_24670;
var inst_24645 = (0);
var state_24765__$1 = (function (){var statearr_24820 = state_24765;
(statearr_24820[(14)] = inst_24645);

(statearr_24820[(15)] = inst_24644);

(statearr_24820[(16)] = inst_24643);

(statearr_24820[(17)] = inst_24642);

return statearr_24820;
})();
var statearr_24821_24885 = state_24765__$1;
(statearr_24821_24885[(2)] = null);

(statearr_24821_24885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (11))){
var inst_24664 = (state_24765[(7)]);
var inst_24642 = (state_24765[(17)]);
var inst_24664__$1 = cljs.core.seq.call(null,inst_24642);
var state_24765__$1 = (function (){var statearr_24822 = state_24765;
(statearr_24822[(7)] = inst_24664__$1);

return statearr_24822;
})();
if(inst_24664__$1){
var statearr_24823_24886 = state_24765__$1;
(statearr_24823_24886[(1)] = (16));

} else {
var statearr_24824_24887 = state_24765__$1;
(statearr_24824_24887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (9))){
var inst_24694 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24825_24888 = state_24765__$1;
(statearr_24825_24888[(2)] = inst_24694);

(statearr_24825_24888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (5))){
var inst_24640 = cljs.core.deref.call(null,cs);
var inst_24641 = cljs.core.seq.call(null,inst_24640);
var inst_24642 = inst_24641;
var inst_24643 = null;
var inst_24644 = (0);
var inst_24645 = (0);
var state_24765__$1 = (function (){var statearr_24826 = state_24765;
(statearr_24826[(14)] = inst_24645);

(statearr_24826[(15)] = inst_24644);

(statearr_24826[(16)] = inst_24643);

(statearr_24826[(17)] = inst_24642);

return statearr_24826;
})();
var statearr_24827_24889 = state_24765__$1;
(statearr_24827_24889[(2)] = null);

(statearr_24827_24889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (14))){
var state_24765__$1 = state_24765;
var statearr_24828_24890 = state_24765__$1;
(statearr_24828_24890[(2)] = null);

(statearr_24828_24890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (45))){
var inst_24755 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24829_24891 = state_24765__$1;
(statearr_24829_24891[(2)] = inst_24755);

(statearr_24829_24891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (26))){
var inst_24697 = (state_24765[(29)]);
var inst_24751 = (state_24765[(2)]);
var inst_24752 = cljs.core.seq.call(null,inst_24697);
var state_24765__$1 = (function (){var statearr_24830 = state_24765;
(statearr_24830[(31)] = inst_24751);

return statearr_24830;
})();
if(inst_24752){
var statearr_24831_24892 = state_24765__$1;
(statearr_24831_24892[(1)] = (42));

} else {
var statearr_24832_24893 = state_24765__$1;
(statearr_24832_24893[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (16))){
var inst_24664 = (state_24765[(7)]);
var inst_24666 = cljs.core.chunked_seq_QMARK_.call(null,inst_24664);
var state_24765__$1 = state_24765;
if(inst_24666){
var statearr_24833_24894 = state_24765__$1;
(statearr_24833_24894[(1)] = (19));

} else {
var statearr_24834_24895 = state_24765__$1;
(statearr_24834_24895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (38))){
var inst_24744 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24835_24896 = state_24765__$1;
(statearr_24835_24896[(2)] = inst_24744);

(statearr_24835_24896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (30))){
var state_24765__$1 = state_24765;
var statearr_24836_24897 = state_24765__$1;
(statearr_24836_24897[(2)] = null);

(statearr_24836_24897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (10))){
var inst_24645 = (state_24765[(14)]);
var inst_24643 = (state_24765[(16)]);
var inst_24653 = cljs.core._nth.call(null,inst_24643,inst_24645);
var inst_24654 = cljs.core.nth.call(null,inst_24653,(0),null);
var inst_24655 = cljs.core.nth.call(null,inst_24653,(1),null);
var state_24765__$1 = (function (){var statearr_24837 = state_24765;
(statearr_24837[(26)] = inst_24654);

return statearr_24837;
})();
if(cljs.core.truth_(inst_24655)){
var statearr_24838_24898 = state_24765__$1;
(statearr_24838_24898[(1)] = (13));

} else {
var statearr_24839_24899 = state_24765__$1;
(statearr_24839_24899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (18))){
var inst_24690 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24840_24900 = state_24765__$1;
(statearr_24840_24900[(2)] = inst_24690);

(statearr_24840_24900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (42))){
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,(45),dchan);
} else {
if((state_val_24766 === (37))){
var inst_24724 = (state_24765[(25)]);
var inst_24633 = (state_24765[(12)]);
var inst_24733 = (state_24765[(23)]);
var inst_24733__$1 = cljs.core.first.call(null,inst_24724);
var inst_24734 = cljs.core.async.put_BANG_.call(null,inst_24733__$1,inst_24633,done);
var state_24765__$1 = (function (){var statearr_24841 = state_24765;
(statearr_24841[(23)] = inst_24733__$1);

return statearr_24841;
})();
if(cljs.core.truth_(inst_24734)){
var statearr_24842_24901 = state_24765__$1;
(statearr_24842_24901[(1)] = (39));

} else {
var statearr_24843_24902 = state_24765__$1;
(statearr_24843_24902[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (8))){
var inst_24645 = (state_24765[(14)]);
var inst_24644 = (state_24765[(15)]);
var inst_24647 = (inst_24645 < inst_24644);
var inst_24648 = inst_24647;
var state_24765__$1 = state_24765;
if(cljs.core.truth_(inst_24648)){
var statearr_24844_24903 = state_24765__$1;
(statearr_24844_24903[(1)] = (10));

} else {
var statearr_24845_24904 = state_24765__$1;
(statearr_24845_24904[(1)] = (11));

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
});})(c__24031__auto___24850,cs,m,dchan,dctr,done))
;
return ((function (switch__23936__auto__,c__24031__auto___24850,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23937__auto__ = null;
var cljs$core$async$mult_$_state_machine__23937__auto____0 = (function (){
var statearr_24846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24846[(0)] = cljs$core$async$mult_$_state_machine__23937__auto__);

(statearr_24846[(1)] = (1));

return statearr_24846;
});
var cljs$core$async$mult_$_state_machine__23937__auto____1 = (function (state_24765){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_24765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e24847){if((e24847 instanceof Object)){
var ex__23940__auto__ = e24847;
var statearr_24848_24905 = state_24765;
(statearr_24848_24905[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24906 = state_24765;
state_24765 = G__24906;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23937__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23937__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23937__auto____0;
cljs$core$async$mult_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23937__auto____1;
return cljs$core$async$mult_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___24850,cs,m,dchan,dctr,done))
})();
var state__24033__auto__ = (function (){var statearr_24849 = f__24032__auto__.call(null);
(statearr_24849[(6)] = c__24031__auto___24850);

return statearr_24849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___24850,cs,m,dchan,dctr,done))
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
var G__24908 = arguments.length;
switch (G__24908) {
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24920 = arguments.length;
var i__4731__auto___24921 = (0);
while(true){
if((i__4731__auto___24921 < len__4730__auto___24920)){
args__4736__auto__.push((arguments[i__4731__auto___24921]));

var G__24922 = (i__4731__auto___24921 + (1));
i__4731__auto___24921 = G__24922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24914){
var map__24915 = p__24914;
var map__24915__$1 = (((((!((map__24915 == null))))?(((((map__24915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24915):map__24915);
var opts = map__24915__$1;
var statearr_24917_24923 = state;
(statearr_24917_24923[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24915,map__24915__$1,opts){
return (function (val){
var statearr_24918_24924 = state;
(statearr_24918_24924[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24915,map__24915__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24919_24925 = state;
(statearr_24919_24925[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24910){
var G__24911 = cljs.core.first.call(null,seq24910);
var seq24910__$1 = cljs.core.next.call(null,seq24910);
var G__24912 = cljs.core.first.call(null,seq24910__$1);
var seq24910__$2 = cljs.core.next.call(null,seq24910__$1);
var G__24913 = cljs.core.first.call(null,seq24910__$2);
var seq24910__$3 = cljs.core.next.call(null,seq24910__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24911,G__24912,G__24913,seq24910__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24926 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24927){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24927 = meta24927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24928,meta24927__$1){
var self__ = this;
var _24928__$1 = this;
return (new cljs.core.async.t_cljs$core$async24926(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24928){
var self__ = this;
var _24928__$1 = this;
return self__.meta24927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24927","meta24927",1930701885,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24926";

cljs.core.async.t_cljs$core$async24926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24926.
 */
cljs.core.async.__GT_t_cljs$core$async24926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24926(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24927){
return (new cljs.core.async.t_cljs$core$async24926(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24926(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24031__auto___25090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25030){
var state_val_25031 = (state_25030[(1)]);
if((state_val_25031 === (7))){
var inst_24945 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
var statearr_25032_25091 = state_25030__$1;
(statearr_25032_25091[(2)] = inst_24945);

(statearr_25032_25091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (20))){
var inst_24957 = (state_25030[(7)]);
var state_25030__$1 = state_25030;
var statearr_25033_25092 = state_25030__$1;
(statearr_25033_25092[(2)] = inst_24957);

(statearr_25033_25092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (27))){
var state_25030__$1 = state_25030;
var statearr_25034_25093 = state_25030__$1;
(statearr_25034_25093[(2)] = null);

(statearr_25034_25093[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (1))){
var inst_24932 = (state_25030[(8)]);
var inst_24932__$1 = calc_state.call(null);
var inst_24934 = (inst_24932__$1 == null);
var inst_24935 = cljs.core.not.call(null,inst_24934);
var state_25030__$1 = (function (){var statearr_25035 = state_25030;
(statearr_25035[(8)] = inst_24932__$1);

return statearr_25035;
})();
if(inst_24935){
var statearr_25036_25094 = state_25030__$1;
(statearr_25036_25094[(1)] = (2));

} else {
var statearr_25037_25095 = state_25030__$1;
(statearr_25037_25095[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (24))){
var inst_24990 = (state_25030[(9)]);
var inst_24981 = (state_25030[(10)]);
var inst_25004 = (state_25030[(11)]);
var inst_25004__$1 = inst_24981.call(null,inst_24990);
var state_25030__$1 = (function (){var statearr_25038 = state_25030;
(statearr_25038[(11)] = inst_25004__$1);

return statearr_25038;
})();
if(cljs.core.truth_(inst_25004__$1)){
var statearr_25039_25096 = state_25030__$1;
(statearr_25039_25096[(1)] = (29));

} else {
var statearr_25040_25097 = state_25030__$1;
(statearr_25040_25097[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (4))){
var inst_24948 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
if(cljs.core.truth_(inst_24948)){
var statearr_25041_25098 = state_25030__$1;
(statearr_25041_25098[(1)] = (8));

} else {
var statearr_25042_25099 = state_25030__$1;
(statearr_25042_25099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (15))){
var inst_24975 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
if(cljs.core.truth_(inst_24975)){
var statearr_25043_25100 = state_25030__$1;
(statearr_25043_25100[(1)] = (19));

} else {
var statearr_25044_25101 = state_25030__$1;
(statearr_25044_25101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (21))){
var inst_24980 = (state_25030[(12)]);
var inst_24980__$1 = (state_25030[(2)]);
var inst_24981 = cljs.core.get.call(null,inst_24980__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24982 = cljs.core.get.call(null,inst_24980__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24983 = cljs.core.get.call(null,inst_24980__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25030__$1 = (function (){var statearr_25045 = state_25030;
(statearr_25045[(10)] = inst_24981);

(statearr_25045[(13)] = inst_24982);

(statearr_25045[(12)] = inst_24980__$1);

return statearr_25045;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25030__$1,(22),inst_24983);
} else {
if((state_val_25031 === (31))){
var inst_25012 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
if(cljs.core.truth_(inst_25012)){
var statearr_25046_25102 = state_25030__$1;
(statearr_25046_25102[(1)] = (32));

} else {
var statearr_25047_25103 = state_25030__$1;
(statearr_25047_25103[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (32))){
var inst_24989 = (state_25030[(14)]);
var state_25030__$1 = state_25030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25030__$1,(35),out,inst_24989);
} else {
if((state_val_25031 === (33))){
var inst_24980 = (state_25030[(12)]);
var inst_24957 = inst_24980;
var state_25030__$1 = (function (){var statearr_25048 = state_25030;
(statearr_25048[(7)] = inst_24957);

return statearr_25048;
})();
var statearr_25049_25104 = state_25030__$1;
(statearr_25049_25104[(2)] = null);

(statearr_25049_25104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (13))){
var inst_24957 = (state_25030[(7)]);
var inst_24964 = inst_24957.cljs$lang$protocol_mask$partition0$;
var inst_24965 = (inst_24964 & (64));
var inst_24966 = inst_24957.cljs$core$ISeq$;
var inst_24967 = (cljs.core.PROTOCOL_SENTINEL === inst_24966);
var inst_24968 = ((inst_24965) || (inst_24967));
var state_25030__$1 = state_25030;
if(cljs.core.truth_(inst_24968)){
var statearr_25050_25105 = state_25030__$1;
(statearr_25050_25105[(1)] = (16));

} else {
var statearr_25051_25106 = state_25030__$1;
(statearr_25051_25106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (22))){
var inst_24990 = (state_25030[(9)]);
var inst_24989 = (state_25030[(14)]);
var inst_24988 = (state_25030[(2)]);
var inst_24989__$1 = cljs.core.nth.call(null,inst_24988,(0),null);
var inst_24990__$1 = cljs.core.nth.call(null,inst_24988,(1),null);
var inst_24991 = (inst_24989__$1 == null);
var inst_24992 = cljs.core._EQ_.call(null,inst_24990__$1,change);
var inst_24993 = ((inst_24991) || (inst_24992));
var state_25030__$1 = (function (){var statearr_25052 = state_25030;
(statearr_25052[(9)] = inst_24990__$1);

(statearr_25052[(14)] = inst_24989__$1);

return statearr_25052;
})();
if(cljs.core.truth_(inst_24993)){
var statearr_25053_25107 = state_25030__$1;
(statearr_25053_25107[(1)] = (23));

} else {
var statearr_25054_25108 = state_25030__$1;
(statearr_25054_25108[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (36))){
var inst_24980 = (state_25030[(12)]);
var inst_24957 = inst_24980;
var state_25030__$1 = (function (){var statearr_25055 = state_25030;
(statearr_25055[(7)] = inst_24957);

return statearr_25055;
})();
var statearr_25056_25109 = state_25030__$1;
(statearr_25056_25109[(2)] = null);

(statearr_25056_25109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (29))){
var inst_25004 = (state_25030[(11)]);
var state_25030__$1 = state_25030;
var statearr_25057_25110 = state_25030__$1;
(statearr_25057_25110[(2)] = inst_25004);

(statearr_25057_25110[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (6))){
var state_25030__$1 = state_25030;
var statearr_25058_25111 = state_25030__$1;
(statearr_25058_25111[(2)] = false);

(statearr_25058_25111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (28))){
var inst_25000 = (state_25030[(2)]);
var inst_25001 = calc_state.call(null);
var inst_24957 = inst_25001;
var state_25030__$1 = (function (){var statearr_25059 = state_25030;
(statearr_25059[(15)] = inst_25000);

(statearr_25059[(7)] = inst_24957);

return statearr_25059;
})();
var statearr_25060_25112 = state_25030__$1;
(statearr_25060_25112[(2)] = null);

(statearr_25060_25112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (25))){
var inst_25026 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
var statearr_25061_25113 = state_25030__$1;
(statearr_25061_25113[(2)] = inst_25026);

(statearr_25061_25113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (34))){
var inst_25024 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
var statearr_25062_25114 = state_25030__$1;
(statearr_25062_25114[(2)] = inst_25024);

(statearr_25062_25114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (17))){
var state_25030__$1 = state_25030;
var statearr_25063_25115 = state_25030__$1;
(statearr_25063_25115[(2)] = false);

(statearr_25063_25115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (3))){
var state_25030__$1 = state_25030;
var statearr_25064_25116 = state_25030__$1;
(statearr_25064_25116[(2)] = false);

(statearr_25064_25116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (12))){
var inst_25028 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25030__$1,inst_25028);
} else {
if((state_val_25031 === (2))){
var inst_24932 = (state_25030[(8)]);
var inst_24937 = inst_24932.cljs$lang$protocol_mask$partition0$;
var inst_24938 = (inst_24937 & (64));
var inst_24939 = inst_24932.cljs$core$ISeq$;
var inst_24940 = (cljs.core.PROTOCOL_SENTINEL === inst_24939);
var inst_24941 = ((inst_24938) || (inst_24940));
var state_25030__$1 = state_25030;
if(cljs.core.truth_(inst_24941)){
var statearr_25065_25117 = state_25030__$1;
(statearr_25065_25117[(1)] = (5));

} else {
var statearr_25066_25118 = state_25030__$1;
(statearr_25066_25118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (23))){
var inst_24989 = (state_25030[(14)]);
var inst_24995 = (inst_24989 == null);
var state_25030__$1 = state_25030;
if(cljs.core.truth_(inst_24995)){
var statearr_25067_25119 = state_25030__$1;
(statearr_25067_25119[(1)] = (26));

} else {
var statearr_25068_25120 = state_25030__$1;
(statearr_25068_25120[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (35))){
var inst_25015 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
if(cljs.core.truth_(inst_25015)){
var statearr_25069_25121 = state_25030__$1;
(statearr_25069_25121[(1)] = (36));

} else {
var statearr_25070_25122 = state_25030__$1;
(statearr_25070_25122[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (19))){
var inst_24957 = (state_25030[(7)]);
var inst_24977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24957);
var state_25030__$1 = state_25030;
var statearr_25071_25123 = state_25030__$1;
(statearr_25071_25123[(2)] = inst_24977);

(statearr_25071_25123[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (11))){
var inst_24957 = (state_25030[(7)]);
var inst_24961 = (inst_24957 == null);
var inst_24962 = cljs.core.not.call(null,inst_24961);
var state_25030__$1 = state_25030;
if(inst_24962){
var statearr_25072_25124 = state_25030__$1;
(statearr_25072_25124[(1)] = (13));

} else {
var statearr_25073_25125 = state_25030__$1;
(statearr_25073_25125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (9))){
var inst_24932 = (state_25030[(8)]);
var state_25030__$1 = state_25030;
var statearr_25074_25126 = state_25030__$1;
(statearr_25074_25126[(2)] = inst_24932);

(statearr_25074_25126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (5))){
var state_25030__$1 = state_25030;
var statearr_25075_25127 = state_25030__$1;
(statearr_25075_25127[(2)] = true);

(statearr_25075_25127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (14))){
var state_25030__$1 = state_25030;
var statearr_25076_25128 = state_25030__$1;
(statearr_25076_25128[(2)] = false);

(statearr_25076_25128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (26))){
var inst_24990 = (state_25030[(9)]);
var inst_24997 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24990);
var state_25030__$1 = state_25030;
var statearr_25077_25129 = state_25030__$1;
(statearr_25077_25129[(2)] = inst_24997);

(statearr_25077_25129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (16))){
var state_25030__$1 = state_25030;
var statearr_25078_25130 = state_25030__$1;
(statearr_25078_25130[(2)] = true);

(statearr_25078_25130[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (38))){
var inst_25020 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
var statearr_25079_25131 = state_25030__$1;
(statearr_25079_25131[(2)] = inst_25020);

(statearr_25079_25131[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (30))){
var inst_24990 = (state_25030[(9)]);
var inst_24981 = (state_25030[(10)]);
var inst_24982 = (state_25030[(13)]);
var inst_25007 = cljs.core.empty_QMARK_.call(null,inst_24981);
var inst_25008 = inst_24982.call(null,inst_24990);
var inst_25009 = cljs.core.not.call(null,inst_25008);
var inst_25010 = ((inst_25007) && (inst_25009));
var state_25030__$1 = state_25030;
var statearr_25080_25132 = state_25030__$1;
(statearr_25080_25132[(2)] = inst_25010);

(statearr_25080_25132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (10))){
var inst_24932 = (state_25030[(8)]);
var inst_24953 = (state_25030[(2)]);
var inst_24954 = cljs.core.get.call(null,inst_24953,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24955 = cljs.core.get.call(null,inst_24953,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24956 = cljs.core.get.call(null,inst_24953,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24957 = inst_24932;
var state_25030__$1 = (function (){var statearr_25081 = state_25030;
(statearr_25081[(7)] = inst_24957);

(statearr_25081[(16)] = inst_24955);

(statearr_25081[(17)] = inst_24954);

(statearr_25081[(18)] = inst_24956);

return statearr_25081;
})();
var statearr_25082_25133 = state_25030__$1;
(statearr_25082_25133[(2)] = null);

(statearr_25082_25133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (18))){
var inst_24972 = (state_25030[(2)]);
var state_25030__$1 = state_25030;
var statearr_25083_25134 = state_25030__$1;
(statearr_25083_25134[(2)] = inst_24972);

(statearr_25083_25134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (37))){
var state_25030__$1 = state_25030;
var statearr_25084_25135 = state_25030__$1;
(statearr_25084_25135[(2)] = null);

(statearr_25084_25135[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25031 === (8))){
var inst_24932 = (state_25030[(8)]);
var inst_24950 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24932);
var state_25030__$1 = state_25030;
var statearr_25085_25136 = state_25030__$1;
(statearr_25085_25136[(2)] = inst_24950);

(statearr_25085_25136[(1)] = (10));


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
});})(c__24031__auto___25090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23936__auto__,c__24031__auto___25090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23937__auto__ = null;
var cljs$core$async$mix_$_state_machine__23937__auto____0 = (function (){
var statearr_25086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25086[(0)] = cljs$core$async$mix_$_state_machine__23937__auto__);

(statearr_25086[(1)] = (1));

return statearr_25086;
});
var cljs$core$async$mix_$_state_machine__23937__auto____1 = (function (state_25030){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25087){if((e25087 instanceof Object)){
var ex__23940__auto__ = e25087;
var statearr_25088_25137 = state_25030;
(statearr_25088_25137[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25138 = state_25030;
state_25030 = G__25138;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23937__auto__ = function(state_25030){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23937__auto____1.call(this,state_25030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23937__auto____0;
cljs$core$async$mix_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23937__auto____1;
return cljs$core$async$mix_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24033__auto__ = (function (){var statearr_25089 = f__24032__auto__.call(null);
(statearr_25089[(6)] = c__24031__auto___25090);

return statearr_25089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25090,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25140 = arguments.length;
switch (G__25140) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__25144 = arguments.length;
switch (G__25144) {
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
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__25142_SHARP_){
if(cljs.core.truth_(p1__25142_SHARP_.call(null,topic))){
return p1__25142_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25142_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25145 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25146){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25146 = meta25146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25147,meta25146__$1){
var self__ = this;
var _25147__$1 = this;
return (new cljs.core.async.t_cljs$core$async25145(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25146__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25147){
var self__ = this;
var _25147__$1 = this;
return self__.meta25146;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25146","meta25146",181144181,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25145";

cljs.core.async.t_cljs$core$async25145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25145");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25145.
 */
cljs.core.async.__GT_t_cljs$core$async25145 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25145(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25146){
return (new cljs.core.async.t_cljs$core$async25145(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25146));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25145(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24031__auto___25265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25265,mults,ensure_mult,p){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25265,mults,ensure_mult,p){
return (function (state_25219){
var state_val_25220 = (state_25219[(1)]);
if((state_val_25220 === (7))){
var inst_25215 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25221_25266 = state_25219__$1;
(statearr_25221_25266[(2)] = inst_25215);

(statearr_25221_25266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (20))){
var state_25219__$1 = state_25219;
var statearr_25222_25267 = state_25219__$1;
(statearr_25222_25267[(2)] = null);

(statearr_25222_25267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (1))){
var state_25219__$1 = state_25219;
var statearr_25223_25268 = state_25219__$1;
(statearr_25223_25268[(2)] = null);

(statearr_25223_25268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (24))){
var inst_25198 = (state_25219[(7)]);
var inst_25207 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25198);
var state_25219__$1 = state_25219;
var statearr_25224_25269 = state_25219__$1;
(statearr_25224_25269[(2)] = inst_25207);

(statearr_25224_25269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (4))){
var inst_25150 = (state_25219[(8)]);
var inst_25150__$1 = (state_25219[(2)]);
var inst_25151 = (inst_25150__$1 == null);
var state_25219__$1 = (function (){var statearr_25225 = state_25219;
(statearr_25225[(8)] = inst_25150__$1);

return statearr_25225;
})();
if(cljs.core.truth_(inst_25151)){
var statearr_25226_25270 = state_25219__$1;
(statearr_25226_25270[(1)] = (5));

} else {
var statearr_25227_25271 = state_25219__$1;
(statearr_25227_25271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (15))){
var inst_25192 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25228_25272 = state_25219__$1;
(statearr_25228_25272[(2)] = inst_25192);

(statearr_25228_25272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (21))){
var inst_25212 = (state_25219[(2)]);
var state_25219__$1 = (function (){var statearr_25229 = state_25219;
(statearr_25229[(9)] = inst_25212);

return statearr_25229;
})();
var statearr_25230_25273 = state_25219__$1;
(statearr_25230_25273[(2)] = null);

(statearr_25230_25273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (13))){
var inst_25174 = (state_25219[(10)]);
var inst_25176 = cljs.core.chunked_seq_QMARK_.call(null,inst_25174);
var state_25219__$1 = state_25219;
if(inst_25176){
var statearr_25231_25274 = state_25219__$1;
(statearr_25231_25274[(1)] = (16));

} else {
var statearr_25232_25275 = state_25219__$1;
(statearr_25232_25275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (22))){
var inst_25204 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
if(cljs.core.truth_(inst_25204)){
var statearr_25233_25276 = state_25219__$1;
(statearr_25233_25276[(1)] = (23));

} else {
var statearr_25234_25277 = state_25219__$1;
(statearr_25234_25277[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (6))){
var inst_25150 = (state_25219[(8)]);
var inst_25198 = (state_25219[(7)]);
var inst_25200 = (state_25219[(11)]);
var inst_25198__$1 = topic_fn.call(null,inst_25150);
var inst_25199 = cljs.core.deref.call(null,mults);
var inst_25200__$1 = cljs.core.get.call(null,inst_25199,inst_25198__$1);
var state_25219__$1 = (function (){var statearr_25235 = state_25219;
(statearr_25235[(7)] = inst_25198__$1);

(statearr_25235[(11)] = inst_25200__$1);

return statearr_25235;
})();
if(cljs.core.truth_(inst_25200__$1)){
var statearr_25236_25278 = state_25219__$1;
(statearr_25236_25278[(1)] = (19));

} else {
var statearr_25237_25279 = state_25219__$1;
(statearr_25237_25279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (25))){
var inst_25209 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25238_25280 = state_25219__$1;
(statearr_25238_25280[(2)] = inst_25209);

(statearr_25238_25280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (17))){
var inst_25174 = (state_25219[(10)]);
var inst_25183 = cljs.core.first.call(null,inst_25174);
var inst_25184 = cljs.core.async.muxch_STAR_.call(null,inst_25183);
var inst_25185 = cljs.core.async.close_BANG_.call(null,inst_25184);
var inst_25186 = cljs.core.next.call(null,inst_25174);
var inst_25160 = inst_25186;
var inst_25161 = null;
var inst_25162 = (0);
var inst_25163 = (0);
var state_25219__$1 = (function (){var statearr_25239 = state_25219;
(statearr_25239[(12)] = inst_25160);

(statearr_25239[(13)] = inst_25162);

(statearr_25239[(14)] = inst_25185);

(statearr_25239[(15)] = inst_25163);

(statearr_25239[(16)] = inst_25161);

return statearr_25239;
})();
var statearr_25240_25281 = state_25219__$1;
(statearr_25240_25281[(2)] = null);

(statearr_25240_25281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (3))){
var inst_25217 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25219__$1,inst_25217);
} else {
if((state_val_25220 === (12))){
var inst_25194 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25241_25282 = state_25219__$1;
(statearr_25241_25282[(2)] = inst_25194);

(statearr_25241_25282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (2))){
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25219__$1,(4),ch);
} else {
if((state_val_25220 === (23))){
var state_25219__$1 = state_25219;
var statearr_25242_25283 = state_25219__$1;
(statearr_25242_25283[(2)] = null);

(statearr_25242_25283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (19))){
var inst_25150 = (state_25219[(8)]);
var inst_25200 = (state_25219[(11)]);
var inst_25202 = cljs.core.async.muxch_STAR_.call(null,inst_25200);
var state_25219__$1 = state_25219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25219__$1,(22),inst_25202,inst_25150);
} else {
if((state_val_25220 === (11))){
var inst_25160 = (state_25219[(12)]);
var inst_25174 = (state_25219[(10)]);
var inst_25174__$1 = cljs.core.seq.call(null,inst_25160);
var state_25219__$1 = (function (){var statearr_25243 = state_25219;
(statearr_25243[(10)] = inst_25174__$1);

return statearr_25243;
})();
if(inst_25174__$1){
var statearr_25244_25284 = state_25219__$1;
(statearr_25244_25284[(1)] = (13));

} else {
var statearr_25245_25285 = state_25219__$1;
(statearr_25245_25285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (9))){
var inst_25196 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25246_25286 = state_25219__$1;
(statearr_25246_25286[(2)] = inst_25196);

(statearr_25246_25286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (5))){
var inst_25157 = cljs.core.deref.call(null,mults);
var inst_25158 = cljs.core.vals.call(null,inst_25157);
var inst_25159 = cljs.core.seq.call(null,inst_25158);
var inst_25160 = inst_25159;
var inst_25161 = null;
var inst_25162 = (0);
var inst_25163 = (0);
var state_25219__$1 = (function (){var statearr_25247 = state_25219;
(statearr_25247[(12)] = inst_25160);

(statearr_25247[(13)] = inst_25162);

(statearr_25247[(15)] = inst_25163);

(statearr_25247[(16)] = inst_25161);

return statearr_25247;
})();
var statearr_25248_25287 = state_25219__$1;
(statearr_25248_25287[(2)] = null);

(statearr_25248_25287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (14))){
var state_25219__$1 = state_25219;
var statearr_25252_25288 = state_25219__$1;
(statearr_25252_25288[(2)] = null);

(statearr_25252_25288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (16))){
var inst_25174 = (state_25219[(10)]);
var inst_25178 = cljs.core.chunk_first.call(null,inst_25174);
var inst_25179 = cljs.core.chunk_rest.call(null,inst_25174);
var inst_25180 = cljs.core.count.call(null,inst_25178);
var inst_25160 = inst_25179;
var inst_25161 = inst_25178;
var inst_25162 = inst_25180;
var inst_25163 = (0);
var state_25219__$1 = (function (){var statearr_25253 = state_25219;
(statearr_25253[(12)] = inst_25160);

(statearr_25253[(13)] = inst_25162);

(statearr_25253[(15)] = inst_25163);

(statearr_25253[(16)] = inst_25161);

return statearr_25253;
})();
var statearr_25254_25289 = state_25219__$1;
(statearr_25254_25289[(2)] = null);

(statearr_25254_25289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (10))){
var inst_25160 = (state_25219[(12)]);
var inst_25162 = (state_25219[(13)]);
var inst_25163 = (state_25219[(15)]);
var inst_25161 = (state_25219[(16)]);
var inst_25168 = cljs.core._nth.call(null,inst_25161,inst_25163);
var inst_25169 = cljs.core.async.muxch_STAR_.call(null,inst_25168);
var inst_25170 = cljs.core.async.close_BANG_.call(null,inst_25169);
var inst_25171 = (inst_25163 + (1));
var tmp25249 = inst_25160;
var tmp25250 = inst_25162;
var tmp25251 = inst_25161;
var inst_25160__$1 = tmp25249;
var inst_25161__$1 = tmp25251;
var inst_25162__$1 = tmp25250;
var inst_25163__$1 = inst_25171;
var state_25219__$1 = (function (){var statearr_25255 = state_25219;
(statearr_25255[(12)] = inst_25160__$1);

(statearr_25255[(13)] = inst_25162__$1);

(statearr_25255[(15)] = inst_25163__$1);

(statearr_25255[(17)] = inst_25170);

(statearr_25255[(16)] = inst_25161__$1);

return statearr_25255;
})();
var statearr_25256_25290 = state_25219__$1;
(statearr_25256_25290[(2)] = null);

(statearr_25256_25290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (18))){
var inst_25189 = (state_25219[(2)]);
var state_25219__$1 = state_25219;
var statearr_25257_25291 = state_25219__$1;
(statearr_25257_25291[(2)] = inst_25189);

(statearr_25257_25291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25220 === (8))){
var inst_25162 = (state_25219[(13)]);
var inst_25163 = (state_25219[(15)]);
var inst_25165 = (inst_25163 < inst_25162);
var inst_25166 = inst_25165;
var state_25219__$1 = state_25219;
if(cljs.core.truth_(inst_25166)){
var statearr_25258_25292 = state_25219__$1;
(statearr_25258_25292[(1)] = (10));

} else {
var statearr_25259_25293 = state_25219__$1;
(statearr_25259_25293[(1)] = (11));

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
});})(c__24031__auto___25265,mults,ensure_mult,p))
;
return ((function (switch__23936__auto__,c__24031__auto___25265,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25260[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25260[(1)] = (1));

return statearr_25260;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25219){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25261){if((e25261 instanceof Object)){
var ex__23940__auto__ = e25261;
var statearr_25262_25294 = state_25219;
(statearr_25262_25294[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25295 = state_25219;
state_25219 = G__25295;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25265,mults,ensure_mult,p))
})();
var state__24033__auto__ = (function (){var statearr_25263 = f__24032__auto__.call(null);
(statearr_25263[(6)] = c__24031__auto___25265);

return statearr_25263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25265,mults,ensure_mult,p))
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
var G__25297 = arguments.length;
switch (G__25297) {
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
var G__25300 = arguments.length;
switch (G__25300) {
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
var G__25303 = arguments.length;
switch (G__25303) {
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
var c__24031__auto___25370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25342){
var state_val_25343 = (state_25342[(1)]);
if((state_val_25343 === (7))){
var state_25342__$1 = state_25342;
var statearr_25344_25371 = state_25342__$1;
(statearr_25344_25371[(2)] = null);

(statearr_25344_25371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (1))){
var state_25342__$1 = state_25342;
var statearr_25345_25372 = state_25342__$1;
(statearr_25345_25372[(2)] = null);

(statearr_25345_25372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (4))){
var inst_25306 = (state_25342[(7)]);
var inst_25308 = (inst_25306 < cnt);
var state_25342__$1 = state_25342;
if(cljs.core.truth_(inst_25308)){
var statearr_25346_25373 = state_25342__$1;
(statearr_25346_25373[(1)] = (6));

} else {
var statearr_25347_25374 = state_25342__$1;
(statearr_25347_25374[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (15))){
var inst_25338 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25348_25375 = state_25342__$1;
(statearr_25348_25375[(2)] = inst_25338);

(statearr_25348_25375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (13))){
var inst_25331 = cljs.core.async.close_BANG_.call(null,out);
var state_25342__$1 = state_25342;
var statearr_25349_25376 = state_25342__$1;
(statearr_25349_25376[(2)] = inst_25331);

(statearr_25349_25376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (6))){
var state_25342__$1 = state_25342;
var statearr_25350_25377 = state_25342__$1;
(statearr_25350_25377[(2)] = null);

(statearr_25350_25377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (3))){
var inst_25340 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25342__$1,inst_25340);
} else {
if((state_val_25343 === (12))){
var inst_25328 = (state_25342[(8)]);
var inst_25328__$1 = (state_25342[(2)]);
var inst_25329 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25328__$1);
var state_25342__$1 = (function (){var statearr_25351 = state_25342;
(statearr_25351[(8)] = inst_25328__$1);

return statearr_25351;
})();
if(cljs.core.truth_(inst_25329)){
var statearr_25352_25378 = state_25342__$1;
(statearr_25352_25378[(1)] = (13));

} else {
var statearr_25353_25379 = state_25342__$1;
(statearr_25353_25379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (2))){
var inst_25305 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25306 = (0);
var state_25342__$1 = (function (){var statearr_25354 = state_25342;
(statearr_25354[(9)] = inst_25305);

(statearr_25354[(7)] = inst_25306);

return statearr_25354;
})();
var statearr_25355_25380 = state_25342__$1;
(statearr_25355_25380[(2)] = null);

(statearr_25355_25380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (11))){
var inst_25306 = (state_25342[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25342,(10),Object,null,(9));
var inst_25315 = chs__$1.call(null,inst_25306);
var inst_25316 = done.call(null,inst_25306);
var inst_25317 = cljs.core.async.take_BANG_.call(null,inst_25315,inst_25316);
var state_25342__$1 = state_25342;
var statearr_25356_25381 = state_25342__$1;
(statearr_25356_25381[(2)] = inst_25317);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (9))){
var inst_25306 = (state_25342[(7)]);
var inst_25319 = (state_25342[(2)]);
var inst_25320 = (inst_25306 + (1));
var inst_25306__$1 = inst_25320;
var state_25342__$1 = (function (){var statearr_25357 = state_25342;
(statearr_25357[(10)] = inst_25319);

(statearr_25357[(7)] = inst_25306__$1);

return statearr_25357;
})();
var statearr_25358_25382 = state_25342__$1;
(statearr_25358_25382[(2)] = null);

(statearr_25358_25382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (5))){
var inst_25326 = (state_25342[(2)]);
var state_25342__$1 = (function (){var statearr_25359 = state_25342;
(statearr_25359[(11)] = inst_25326);

return statearr_25359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25342__$1,(12),dchan);
} else {
if((state_val_25343 === (14))){
var inst_25328 = (state_25342[(8)]);
var inst_25333 = cljs.core.apply.call(null,f,inst_25328);
var state_25342__$1 = state_25342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25342__$1,(16),out,inst_25333);
} else {
if((state_val_25343 === (16))){
var inst_25335 = (state_25342[(2)]);
var state_25342__$1 = (function (){var statearr_25360 = state_25342;
(statearr_25360[(12)] = inst_25335);

return statearr_25360;
})();
var statearr_25361_25383 = state_25342__$1;
(statearr_25361_25383[(2)] = null);

(statearr_25361_25383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (10))){
var inst_25310 = (state_25342[(2)]);
var inst_25311 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25342__$1 = (function (){var statearr_25362 = state_25342;
(statearr_25362[(13)] = inst_25310);

return statearr_25362;
})();
var statearr_25363_25384 = state_25342__$1;
(statearr_25363_25384[(2)] = inst_25311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25343 === (8))){
var inst_25324 = (state_25342[(2)]);
var state_25342__$1 = state_25342;
var statearr_25364_25385 = state_25342__$1;
(statearr_25364_25385[(2)] = inst_25324);

(statearr_25364_25385[(1)] = (5));


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
});})(c__24031__auto___25370,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23936__auto__,c__24031__auto___25370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25365[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25365[(1)] = (1));

return statearr_25365;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25342){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25366){if((e25366 instanceof Object)){
var ex__23940__auto__ = e25366;
var statearr_25367_25386 = state_25342;
(statearr_25367_25386[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25387 = state_25342;
state_25342 = G__25387;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25370,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24033__auto__ = (function (){var statearr_25368 = f__24032__auto__.call(null);
(statearr_25368[(6)] = c__24031__auto___25370);

return statearr_25368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25370,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25390 = arguments.length;
switch (G__25390) {
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
var c__24031__auto___25444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25444,out){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25444,out){
return (function (state_25422){
var state_val_25423 = (state_25422[(1)]);
if((state_val_25423 === (7))){
var inst_25402 = (state_25422[(7)]);
var inst_25401 = (state_25422[(8)]);
var inst_25401__$1 = (state_25422[(2)]);
var inst_25402__$1 = cljs.core.nth.call(null,inst_25401__$1,(0),null);
var inst_25403 = cljs.core.nth.call(null,inst_25401__$1,(1),null);
var inst_25404 = (inst_25402__$1 == null);
var state_25422__$1 = (function (){var statearr_25424 = state_25422;
(statearr_25424[(7)] = inst_25402__$1);

(statearr_25424[(9)] = inst_25403);

(statearr_25424[(8)] = inst_25401__$1);

return statearr_25424;
})();
if(cljs.core.truth_(inst_25404)){
var statearr_25425_25445 = state_25422__$1;
(statearr_25425_25445[(1)] = (8));

} else {
var statearr_25426_25446 = state_25422__$1;
(statearr_25426_25446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (1))){
var inst_25391 = cljs.core.vec.call(null,chs);
var inst_25392 = inst_25391;
var state_25422__$1 = (function (){var statearr_25427 = state_25422;
(statearr_25427[(10)] = inst_25392);

return statearr_25427;
})();
var statearr_25428_25447 = state_25422__$1;
(statearr_25428_25447[(2)] = null);

(statearr_25428_25447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (4))){
var inst_25392 = (state_25422[(10)]);
var state_25422__$1 = state_25422;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25422__$1,(7),inst_25392);
} else {
if((state_val_25423 === (6))){
var inst_25418 = (state_25422[(2)]);
var state_25422__$1 = state_25422;
var statearr_25429_25448 = state_25422__$1;
(statearr_25429_25448[(2)] = inst_25418);

(statearr_25429_25448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (3))){
var inst_25420 = (state_25422[(2)]);
var state_25422__$1 = state_25422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25422__$1,inst_25420);
} else {
if((state_val_25423 === (2))){
var inst_25392 = (state_25422[(10)]);
var inst_25394 = cljs.core.count.call(null,inst_25392);
var inst_25395 = (inst_25394 > (0));
var state_25422__$1 = state_25422;
if(cljs.core.truth_(inst_25395)){
var statearr_25431_25449 = state_25422__$1;
(statearr_25431_25449[(1)] = (4));

} else {
var statearr_25432_25450 = state_25422__$1;
(statearr_25432_25450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (11))){
var inst_25392 = (state_25422[(10)]);
var inst_25411 = (state_25422[(2)]);
var tmp25430 = inst_25392;
var inst_25392__$1 = tmp25430;
var state_25422__$1 = (function (){var statearr_25433 = state_25422;
(statearr_25433[(11)] = inst_25411);

(statearr_25433[(10)] = inst_25392__$1);

return statearr_25433;
})();
var statearr_25434_25451 = state_25422__$1;
(statearr_25434_25451[(2)] = null);

(statearr_25434_25451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (9))){
var inst_25402 = (state_25422[(7)]);
var state_25422__$1 = state_25422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25422__$1,(11),out,inst_25402);
} else {
if((state_val_25423 === (5))){
var inst_25416 = cljs.core.async.close_BANG_.call(null,out);
var state_25422__$1 = state_25422;
var statearr_25435_25452 = state_25422__$1;
(statearr_25435_25452[(2)] = inst_25416);

(statearr_25435_25452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (10))){
var inst_25414 = (state_25422[(2)]);
var state_25422__$1 = state_25422;
var statearr_25436_25453 = state_25422__$1;
(statearr_25436_25453[(2)] = inst_25414);

(statearr_25436_25453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (8))){
var inst_25402 = (state_25422[(7)]);
var inst_25392 = (state_25422[(10)]);
var inst_25403 = (state_25422[(9)]);
var inst_25401 = (state_25422[(8)]);
var inst_25406 = (function (){var cs = inst_25392;
var vec__25397 = inst_25401;
var v = inst_25402;
var c = inst_25403;
return ((function (cs,vec__25397,v,c,inst_25402,inst_25392,inst_25403,inst_25401,state_val_25423,c__24031__auto___25444,out){
return (function (p1__25388_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25388_SHARP_);
});
;})(cs,vec__25397,v,c,inst_25402,inst_25392,inst_25403,inst_25401,state_val_25423,c__24031__auto___25444,out))
})();
var inst_25407 = cljs.core.filterv.call(null,inst_25406,inst_25392);
var inst_25392__$1 = inst_25407;
var state_25422__$1 = (function (){var statearr_25437 = state_25422;
(statearr_25437[(10)] = inst_25392__$1);

return statearr_25437;
})();
var statearr_25438_25454 = state_25422__$1;
(statearr_25438_25454[(2)] = null);

(statearr_25438_25454[(1)] = (2));


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
});})(c__24031__auto___25444,out))
;
return ((function (switch__23936__auto__,c__24031__auto___25444,out){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25439 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25439[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25439[(1)] = (1));

return statearr_25439;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25422){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25440){if((e25440 instanceof Object)){
var ex__23940__auto__ = e25440;
var statearr_25441_25455 = state_25422;
(statearr_25441_25455[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25456 = state_25422;
state_25422 = G__25456;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25444,out))
})();
var state__24033__auto__ = (function (){var statearr_25442 = f__24032__auto__.call(null);
(statearr_25442[(6)] = c__24031__auto___25444);

return statearr_25442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25444,out))
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
var G__25458 = arguments.length;
switch (G__25458) {
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
var c__24031__auto___25503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25503,out){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25503,out){
return (function (state_25482){
var state_val_25483 = (state_25482[(1)]);
if((state_val_25483 === (7))){
var inst_25464 = (state_25482[(7)]);
var inst_25464__$1 = (state_25482[(2)]);
var inst_25465 = (inst_25464__$1 == null);
var inst_25466 = cljs.core.not.call(null,inst_25465);
var state_25482__$1 = (function (){var statearr_25484 = state_25482;
(statearr_25484[(7)] = inst_25464__$1);

return statearr_25484;
})();
if(inst_25466){
var statearr_25485_25504 = state_25482__$1;
(statearr_25485_25504[(1)] = (8));

} else {
var statearr_25486_25505 = state_25482__$1;
(statearr_25486_25505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (1))){
var inst_25459 = (0);
var state_25482__$1 = (function (){var statearr_25487 = state_25482;
(statearr_25487[(8)] = inst_25459);

return statearr_25487;
})();
var statearr_25488_25506 = state_25482__$1;
(statearr_25488_25506[(2)] = null);

(statearr_25488_25506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (4))){
var state_25482__$1 = state_25482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25482__$1,(7),ch);
} else {
if((state_val_25483 === (6))){
var inst_25477 = (state_25482[(2)]);
var state_25482__$1 = state_25482;
var statearr_25489_25507 = state_25482__$1;
(statearr_25489_25507[(2)] = inst_25477);

(statearr_25489_25507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (3))){
var inst_25479 = (state_25482[(2)]);
var inst_25480 = cljs.core.async.close_BANG_.call(null,out);
var state_25482__$1 = (function (){var statearr_25490 = state_25482;
(statearr_25490[(9)] = inst_25479);

return statearr_25490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25482__$1,inst_25480);
} else {
if((state_val_25483 === (2))){
var inst_25459 = (state_25482[(8)]);
var inst_25461 = (inst_25459 < n);
var state_25482__$1 = state_25482;
if(cljs.core.truth_(inst_25461)){
var statearr_25491_25508 = state_25482__$1;
(statearr_25491_25508[(1)] = (4));

} else {
var statearr_25492_25509 = state_25482__$1;
(statearr_25492_25509[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (11))){
var inst_25459 = (state_25482[(8)]);
var inst_25469 = (state_25482[(2)]);
var inst_25470 = (inst_25459 + (1));
var inst_25459__$1 = inst_25470;
var state_25482__$1 = (function (){var statearr_25493 = state_25482;
(statearr_25493[(8)] = inst_25459__$1);

(statearr_25493[(10)] = inst_25469);

return statearr_25493;
})();
var statearr_25494_25510 = state_25482__$1;
(statearr_25494_25510[(2)] = null);

(statearr_25494_25510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (9))){
var state_25482__$1 = state_25482;
var statearr_25495_25511 = state_25482__$1;
(statearr_25495_25511[(2)] = null);

(statearr_25495_25511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (5))){
var state_25482__$1 = state_25482;
var statearr_25496_25512 = state_25482__$1;
(statearr_25496_25512[(2)] = null);

(statearr_25496_25512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (10))){
var inst_25474 = (state_25482[(2)]);
var state_25482__$1 = state_25482;
var statearr_25497_25513 = state_25482__$1;
(statearr_25497_25513[(2)] = inst_25474);

(statearr_25497_25513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25483 === (8))){
var inst_25464 = (state_25482[(7)]);
var state_25482__$1 = state_25482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25482__$1,(11),out,inst_25464);
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
});})(c__24031__auto___25503,out))
;
return ((function (switch__23936__auto__,c__24031__auto___25503,out){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25498[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25498[(1)] = (1));

return statearr_25498;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25482){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25499){if((e25499 instanceof Object)){
var ex__23940__auto__ = e25499;
var statearr_25500_25514 = state_25482;
(statearr_25500_25514[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25515 = state_25482;
state_25482 = G__25515;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25503,out))
})();
var state__24033__auto__ = (function (){var statearr_25501 = f__24032__auto__.call(null);
(statearr_25501[(6)] = c__24031__auto___25503);

return statearr_25501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25503,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25517 = (function (f,ch,meta25518){
this.f = f;
this.ch = ch;
this.meta25518 = meta25518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25519,meta25518__$1){
var self__ = this;
var _25519__$1 = this;
return (new cljs.core.async.t_cljs$core$async25517(self__.f,self__.ch,meta25518__$1));
});

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25519){
var self__ = this;
var _25519__$1 = this;
return self__.meta25518;
});

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25520 = (function (f,ch,meta25518,_,fn1,meta25521){
this.f = f;
this.ch = ch;
this.meta25518 = meta25518;
this._ = _;
this.fn1 = fn1;
this.meta25521 = meta25521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25522,meta25521__$1){
var self__ = this;
var _25522__$1 = this;
return (new cljs.core.async.t_cljs$core$async25520(self__.f,self__.ch,self__.meta25518,self__._,self__.fn1,meta25521__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25522){
var self__ = this;
var _25522__$1 = this;
return self__.meta25521;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25520.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25516_SHARP_){
return f1.call(null,(((p1__25516_SHARP_ == null))?null:self__.f.call(null,p1__25516_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25520.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25518","meta25518",1543345063,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25517","cljs.core.async/t_cljs$core$async25517",852047335,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25521","meta25521",-1855481031,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25520";

cljs.core.async.t_cljs$core$async25520.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25520");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25520.
 */
cljs.core.async.__GT_t_cljs$core$async25520 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25520(f__$1,ch__$1,meta25518__$1,___$2,fn1__$1,meta25521){
return (new cljs.core.async.t_cljs$core$async25520(f__$1,ch__$1,meta25518__$1,___$2,fn1__$1,meta25521));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25520(self__.f,self__.ch,self__.meta25518,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25518","meta25518",1543345063,null)], null);
});

cljs.core.async.t_cljs$core$async25517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25517";

cljs.core.async.t_cljs$core$async25517.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25517");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25517.
 */
cljs.core.async.__GT_t_cljs$core$async25517 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25517(f__$1,ch__$1,meta25518){
return (new cljs.core.async.t_cljs$core$async25517(f__$1,ch__$1,meta25518));
});

}

return (new cljs.core.async.t_cljs$core$async25517(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25523 = (function (f,ch,meta25524){
this.f = f;
this.ch = ch;
this.meta25524 = meta25524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25525,meta25524__$1){
var self__ = this;
var _25525__$1 = this;
return (new cljs.core.async.t_cljs$core$async25523(self__.f,self__.ch,meta25524__$1));
});

cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25525){
var self__ = this;
var _25525__$1 = this;
return self__.meta25524;
});

cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25524","meta25524",-896660672,null)], null);
});

cljs.core.async.t_cljs$core$async25523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25523";

cljs.core.async.t_cljs$core$async25523.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25523");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25523.
 */
cljs.core.async.__GT_t_cljs$core$async25523 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25523(f__$1,ch__$1,meta25524){
return (new cljs.core.async.t_cljs$core$async25523(f__$1,ch__$1,meta25524));
});

}

return (new cljs.core.async.t_cljs$core$async25523(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25526 = (function (p,ch,meta25527){
this.p = p;
this.ch = ch;
this.meta25527 = meta25527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25528,meta25527__$1){
var self__ = this;
var _25528__$1 = this;
return (new cljs.core.async.t_cljs$core$async25526(self__.p,self__.ch,meta25527__$1));
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25528){
var self__ = this;
var _25528__$1 = this;
return self__.meta25527;
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25527","meta25527",310591398,null)], null);
});

cljs.core.async.t_cljs$core$async25526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25526";

cljs.core.async.t_cljs$core$async25526.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25526");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25526.
 */
cljs.core.async.__GT_t_cljs$core$async25526 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25526(p__$1,ch__$1,meta25527){
return (new cljs.core.async.t_cljs$core$async25526(p__$1,ch__$1,meta25527));
});

}

return (new cljs.core.async.t_cljs$core$async25526(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25530 = arguments.length;
switch (G__25530) {
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
var c__24031__auto___25570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25570,out){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25570,out){
return (function (state_25551){
var state_val_25552 = (state_25551[(1)]);
if((state_val_25552 === (7))){
var inst_25547 = (state_25551[(2)]);
var state_25551__$1 = state_25551;
var statearr_25553_25571 = state_25551__$1;
(statearr_25553_25571[(2)] = inst_25547);

(statearr_25553_25571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (1))){
var state_25551__$1 = state_25551;
var statearr_25554_25572 = state_25551__$1;
(statearr_25554_25572[(2)] = null);

(statearr_25554_25572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (4))){
var inst_25533 = (state_25551[(7)]);
var inst_25533__$1 = (state_25551[(2)]);
var inst_25534 = (inst_25533__$1 == null);
var state_25551__$1 = (function (){var statearr_25555 = state_25551;
(statearr_25555[(7)] = inst_25533__$1);

return statearr_25555;
})();
if(cljs.core.truth_(inst_25534)){
var statearr_25556_25573 = state_25551__$1;
(statearr_25556_25573[(1)] = (5));

} else {
var statearr_25557_25574 = state_25551__$1;
(statearr_25557_25574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (6))){
var inst_25533 = (state_25551[(7)]);
var inst_25538 = p.call(null,inst_25533);
var state_25551__$1 = state_25551;
if(cljs.core.truth_(inst_25538)){
var statearr_25558_25575 = state_25551__$1;
(statearr_25558_25575[(1)] = (8));

} else {
var statearr_25559_25576 = state_25551__$1;
(statearr_25559_25576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (3))){
var inst_25549 = (state_25551[(2)]);
var state_25551__$1 = state_25551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25551__$1,inst_25549);
} else {
if((state_val_25552 === (2))){
var state_25551__$1 = state_25551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25551__$1,(4),ch);
} else {
if((state_val_25552 === (11))){
var inst_25541 = (state_25551[(2)]);
var state_25551__$1 = state_25551;
var statearr_25560_25577 = state_25551__$1;
(statearr_25560_25577[(2)] = inst_25541);

(statearr_25560_25577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (9))){
var state_25551__$1 = state_25551;
var statearr_25561_25578 = state_25551__$1;
(statearr_25561_25578[(2)] = null);

(statearr_25561_25578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (5))){
var inst_25536 = cljs.core.async.close_BANG_.call(null,out);
var state_25551__$1 = state_25551;
var statearr_25562_25579 = state_25551__$1;
(statearr_25562_25579[(2)] = inst_25536);

(statearr_25562_25579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (10))){
var inst_25544 = (state_25551[(2)]);
var state_25551__$1 = (function (){var statearr_25563 = state_25551;
(statearr_25563[(8)] = inst_25544);

return statearr_25563;
})();
var statearr_25564_25580 = state_25551__$1;
(statearr_25564_25580[(2)] = null);

(statearr_25564_25580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25552 === (8))){
var inst_25533 = (state_25551[(7)]);
var state_25551__$1 = state_25551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25551__$1,(11),out,inst_25533);
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
});})(c__24031__auto___25570,out))
;
return ((function (switch__23936__auto__,c__24031__auto___25570,out){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25565 = [null,null,null,null,null,null,null,null,null];
(statearr_25565[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25565[(1)] = (1));

return statearr_25565;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25551){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25566){if((e25566 instanceof Object)){
var ex__23940__auto__ = e25566;
var statearr_25567_25581 = state_25551;
(statearr_25567_25581[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25582 = state_25551;
state_25551 = G__25582;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25570,out))
})();
var state__24033__auto__ = (function (){var statearr_25568 = f__24032__auto__.call(null);
(statearr_25568[(6)] = c__24031__auto___25570);

return statearr_25568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25570,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25584 = arguments.length;
switch (G__25584) {
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
var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__){
return (function (state_25647){
var state_val_25648 = (state_25647[(1)]);
if((state_val_25648 === (7))){
var inst_25643 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25649_25687 = state_25647__$1;
(statearr_25649_25687[(2)] = inst_25643);

(statearr_25649_25687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (20))){
var inst_25613 = (state_25647[(7)]);
var inst_25624 = (state_25647[(2)]);
var inst_25625 = cljs.core.next.call(null,inst_25613);
var inst_25599 = inst_25625;
var inst_25600 = null;
var inst_25601 = (0);
var inst_25602 = (0);
var state_25647__$1 = (function (){var statearr_25650 = state_25647;
(statearr_25650[(8)] = inst_25602);

(statearr_25650[(9)] = inst_25600);

(statearr_25650[(10)] = inst_25601);

(statearr_25650[(11)] = inst_25624);

(statearr_25650[(12)] = inst_25599);

return statearr_25650;
})();
var statearr_25651_25688 = state_25647__$1;
(statearr_25651_25688[(2)] = null);

(statearr_25651_25688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (1))){
var state_25647__$1 = state_25647;
var statearr_25652_25689 = state_25647__$1;
(statearr_25652_25689[(2)] = null);

(statearr_25652_25689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (4))){
var inst_25588 = (state_25647[(13)]);
var inst_25588__$1 = (state_25647[(2)]);
var inst_25589 = (inst_25588__$1 == null);
var state_25647__$1 = (function (){var statearr_25653 = state_25647;
(statearr_25653[(13)] = inst_25588__$1);

return statearr_25653;
})();
if(cljs.core.truth_(inst_25589)){
var statearr_25654_25690 = state_25647__$1;
(statearr_25654_25690[(1)] = (5));

} else {
var statearr_25655_25691 = state_25647__$1;
(statearr_25655_25691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (15))){
var state_25647__$1 = state_25647;
var statearr_25659_25692 = state_25647__$1;
(statearr_25659_25692[(2)] = null);

(statearr_25659_25692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (21))){
var state_25647__$1 = state_25647;
var statearr_25660_25693 = state_25647__$1;
(statearr_25660_25693[(2)] = null);

(statearr_25660_25693[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (13))){
var inst_25602 = (state_25647[(8)]);
var inst_25600 = (state_25647[(9)]);
var inst_25601 = (state_25647[(10)]);
var inst_25599 = (state_25647[(12)]);
var inst_25609 = (state_25647[(2)]);
var inst_25610 = (inst_25602 + (1));
var tmp25656 = inst_25600;
var tmp25657 = inst_25601;
var tmp25658 = inst_25599;
var inst_25599__$1 = tmp25658;
var inst_25600__$1 = tmp25656;
var inst_25601__$1 = tmp25657;
var inst_25602__$1 = inst_25610;
var state_25647__$1 = (function (){var statearr_25661 = state_25647;
(statearr_25661[(8)] = inst_25602__$1);

(statearr_25661[(14)] = inst_25609);

(statearr_25661[(9)] = inst_25600__$1);

(statearr_25661[(10)] = inst_25601__$1);

(statearr_25661[(12)] = inst_25599__$1);

return statearr_25661;
})();
var statearr_25662_25694 = state_25647__$1;
(statearr_25662_25694[(2)] = null);

(statearr_25662_25694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (22))){
var state_25647__$1 = state_25647;
var statearr_25663_25695 = state_25647__$1;
(statearr_25663_25695[(2)] = null);

(statearr_25663_25695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (6))){
var inst_25588 = (state_25647[(13)]);
var inst_25597 = f.call(null,inst_25588);
var inst_25598 = cljs.core.seq.call(null,inst_25597);
var inst_25599 = inst_25598;
var inst_25600 = null;
var inst_25601 = (0);
var inst_25602 = (0);
var state_25647__$1 = (function (){var statearr_25664 = state_25647;
(statearr_25664[(8)] = inst_25602);

(statearr_25664[(9)] = inst_25600);

(statearr_25664[(10)] = inst_25601);

(statearr_25664[(12)] = inst_25599);

return statearr_25664;
})();
var statearr_25665_25696 = state_25647__$1;
(statearr_25665_25696[(2)] = null);

(statearr_25665_25696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (17))){
var inst_25613 = (state_25647[(7)]);
var inst_25617 = cljs.core.chunk_first.call(null,inst_25613);
var inst_25618 = cljs.core.chunk_rest.call(null,inst_25613);
var inst_25619 = cljs.core.count.call(null,inst_25617);
var inst_25599 = inst_25618;
var inst_25600 = inst_25617;
var inst_25601 = inst_25619;
var inst_25602 = (0);
var state_25647__$1 = (function (){var statearr_25666 = state_25647;
(statearr_25666[(8)] = inst_25602);

(statearr_25666[(9)] = inst_25600);

(statearr_25666[(10)] = inst_25601);

(statearr_25666[(12)] = inst_25599);

return statearr_25666;
})();
var statearr_25667_25697 = state_25647__$1;
(statearr_25667_25697[(2)] = null);

(statearr_25667_25697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (3))){
var inst_25645 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25647__$1,inst_25645);
} else {
if((state_val_25648 === (12))){
var inst_25633 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25668_25698 = state_25647__$1;
(statearr_25668_25698[(2)] = inst_25633);

(statearr_25668_25698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (2))){
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25647__$1,(4),in$);
} else {
if((state_val_25648 === (23))){
var inst_25641 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25669_25699 = state_25647__$1;
(statearr_25669_25699[(2)] = inst_25641);

(statearr_25669_25699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (19))){
var inst_25628 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25670_25700 = state_25647__$1;
(statearr_25670_25700[(2)] = inst_25628);

(statearr_25670_25700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (11))){
var inst_25613 = (state_25647[(7)]);
var inst_25599 = (state_25647[(12)]);
var inst_25613__$1 = cljs.core.seq.call(null,inst_25599);
var state_25647__$1 = (function (){var statearr_25671 = state_25647;
(statearr_25671[(7)] = inst_25613__$1);

return statearr_25671;
})();
if(inst_25613__$1){
var statearr_25672_25701 = state_25647__$1;
(statearr_25672_25701[(1)] = (14));

} else {
var statearr_25673_25702 = state_25647__$1;
(statearr_25673_25702[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (9))){
var inst_25635 = (state_25647[(2)]);
var inst_25636 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25647__$1 = (function (){var statearr_25674 = state_25647;
(statearr_25674[(15)] = inst_25635);

return statearr_25674;
})();
if(cljs.core.truth_(inst_25636)){
var statearr_25675_25703 = state_25647__$1;
(statearr_25675_25703[(1)] = (21));

} else {
var statearr_25676_25704 = state_25647__$1;
(statearr_25676_25704[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (5))){
var inst_25591 = cljs.core.async.close_BANG_.call(null,out);
var state_25647__$1 = state_25647;
var statearr_25677_25705 = state_25647__$1;
(statearr_25677_25705[(2)] = inst_25591);

(statearr_25677_25705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (14))){
var inst_25613 = (state_25647[(7)]);
var inst_25615 = cljs.core.chunked_seq_QMARK_.call(null,inst_25613);
var state_25647__$1 = state_25647;
if(inst_25615){
var statearr_25678_25706 = state_25647__$1;
(statearr_25678_25706[(1)] = (17));

} else {
var statearr_25679_25707 = state_25647__$1;
(statearr_25679_25707[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (16))){
var inst_25631 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25680_25708 = state_25647__$1;
(statearr_25680_25708[(2)] = inst_25631);

(statearr_25680_25708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (10))){
var inst_25602 = (state_25647[(8)]);
var inst_25600 = (state_25647[(9)]);
var inst_25607 = cljs.core._nth.call(null,inst_25600,inst_25602);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25647__$1,(13),out,inst_25607);
} else {
if((state_val_25648 === (18))){
var inst_25613 = (state_25647[(7)]);
var inst_25622 = cljs.core.first.call(null,inst_25613);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25647__$1,(20),out,inst_25622);
} else {
if((state_val_25648 === (8))){
var inst_25602 = (state_25647[(8)]);
var inst_25601 = (state_25647[(10)]);
var inst_25604 = (inst_25602 < inst_25601);
var inst_25605 = inst_25604;
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25605)){
var statearr_25681_25709 = state_25647__$1;
(statearr_25681_25709[(1)] = (10));

} else {
var statearr_25682_25710 = state_25647__$1;
(statearr_25682_25710[(1)] = (11));

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
});})(c__24031__auto__))
;
return ((function (switch__23936__auto__,c__24031__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23937__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23937__auto____0 = (function (){
var statearr_25683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25683[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23937__auto__);

(statearr_25683[(1)] = (1));

return statearr_25683;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23937__auto____1 = (function (state_25647){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25684){if((e25684 instanceof Object)){
var ex__23940__auto__ = e25684;
var statearr_25685_25711 = state_25647;
(statearr_25685_25711[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25712 = state_25647;
state_25647 = G__25712;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23937__auto__ = function(state_25647){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23937__auto____1.call(this,state_25647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23937__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23937__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__))
})();
var state__24033__auto__ = (function (){var statearr_25686 = f__24032__auto__.call(null);
(statearr_25686[(6)] = c__24031__auto__);

return statearr_25686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__))
);

return c__24031__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25714 = arguments.length;
switch (G__25714) {
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
var G__25717 = arguments.length;
switch (G__25717) {
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
var G__25720 = arguments.length;
switch (G__25720) {
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
var c__24031__auto___25767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25767,out){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25767,out){
return (function (state_25744){
var state_val_25745 = (state_25744[(1)]);
if((state_val_25745 === (7))){
var inst_25739 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25746_25768 = state_25744__$1;
(statearr_25746_25768[(2)] = inst_25739);

(statearr_25746_25768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (1))){
var inst_25721 = null;
var state_25744__$1 = (function (){var statearr_25747 = state_25744;
(statearr_25747[(7)] = inst_25721);

return statearr_25747;
})();
var statearr_25748_25769 = state_25744__$1;
(statearr_25748_25769[(2)] = null);

(statearr_25748_25769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (4))){
var inst_25724 = (state_25744[(8)]);
var inst_25724__$1 = (state_25744[(2)]);
var inst_25725 = (inst_25724__$1 == null);
var inst_25726 = cljs.core.not.call(null,inst_25725);
var state_25744__$1 = (function (){var statearr_25749 = state_25744;
(statearr_25749[(8)] = inst_25724__$1);

return statearr_25749;
})();
if(inst_25726){
var statearr_25750_25770 = state_25744__$1;
(statearr_25750_25770[(1)] = (5));

} else {
var statearr_25751_25771 = state_25744__$1;
(statearr_25751_25771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (6))){
var state_25744__$1 = state_25744;
var statearr_25752_25772 = state_25744__$1;
(statearr_25752_25772[(2)] = null);

(statearr_25752_25772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (3))){
var inst_25741 = (state_25744[(2)]);
var inst_25742 = cljs.core.async.close_BANG_.call(null,out);
var state_25744__$1 = (function (){var statearr_25753 = state_25744;
(statearr_25753[(9)] = inst_25741);

return statearr_25753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25744__$1,inst_25742);
} else {
if((state_val_25745 === (2))){
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(4),ch);
} else {
if((state_val_25745 === (11))){
var inst_25724 = (state_25744[(8)]);
var inst_25733 = (state_25744[(2)]);
var inst_25721 = inst_25724;
var state_25744__$1 = (function (){var statearr_25754 = state_25744;
(statearr_25754[(7)] = inst_25721);

(statearr_25754[(10)] = inst_25733);

return statearr_25754;
})();
var statearr_25755_25773 = state_25744__$1;
(statearr_25755_25773[(2)] = null);

(statearr_25755_25773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (9))){
var inst_25724 = (state_25744[(8)]);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25744__$1,(11),out,inst_25724);
} else {
if((state_val_25745 === (5))){
var inst_25724 = (state_25744[(8)]);
var inst_25721 = (state_25744[(7)]);
var inst_25728 = cljs.core._EQ_.call(null,inst_25724,inst_25721);
var state_25744__$1 = state_25744;
if(inst_25728){
var statearr_25757_25774 = state_25744__$1;
(statearr_25757_25774[(1)] = (8));

} else {
var statearr_25758_25775 = state_25744__$1;
(statearr_25758_25775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (10))){
var inst_25736 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25759_25776 = state_25744__$1;
(statearr_25759_25776[(2)] = inst_25736);

(statearr_25759_25776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (8))){
var inst_25721 = (state_25744[(7)]);
var tmp25756 = inst_25721;
var inst_25721__$1 = tmp25756;
var state_25744__$1 = (function (){var statearr_25760 = state_25744;
(statearr_25760[(7)] = inst_25721__$1);

return statearr_25760;
})();
var statearr_25761_25777 = state_25744__$1;
(statearr_25761_25777[(2)] = null);

(statearr_25761_25777[(1)] = (2));


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
});})(c__24031__auto___25767,out))
;
return ((function (switch__23936__auto__,c__24031__auto___25767,out){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25762[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25762[(1)] = (1));

return statearr_25762;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25744){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25763){if((e25763 instanceof Object)){
var ex__23940__auto__ = e25763;
var statearr_25764_25778 = state_25744;
(statearr_25764_25778[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25779 = state_25744;
state_25744 = G__25779;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25767,out))
})();
var state__24033__auto__ = (function (){var statearr_25765 = f__24032__auto__.call(null);
(statearr_25765[(6)] = c__24031__auto___25767);

return statearr_25765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25767,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25781 = arguments.length;
switch (G__25781) {
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
var c__24031__auto___25847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25847,out){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25847,out){
return (function (state_25819){
var state_val_25820 = (state_25819[(1)]);
if((state_val_25820 === (7))){
var inst_25815 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
var statearr_25821_25848 = state_25819__$1;
(statearr_25821_25848[(2)] = inst_25815);

(statearr_25821_25848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (1))){
var inst_25782 = (new Array(n));
var inst_25783 = inst_25782;
var inst_25784 = (0);
var state_25819__$1 = (function (){var statearr_25822 = state_25819;
(statearr_25822[(7)] = inst_25783);

(statearr_25822[(8)] = inst_25784);

return statearr_25822;
})();
var statearr_25823_25849 = state_25819__$1;
(statearr_25823_25849[(2)] = null);

(statearr_25823_25849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (4))){
var inst_25787 = (state_25819[(9)]);
var inst_25787__$1 = (state_25819[(2)]);
var inst_25788 = (inst_25787__$1 == null);
var inst_25789 = cljs.core.not.call(null,inst_25788);
var state_25819__$1 = (function (){var statearr_25824 = state_25819;
(statearr_25824[(9)] = inst_25787__$1);

return statearr_25824;
})();
if(inst_25789){
var statearr_25825_25850 = state_25819__$1;
(statearr_25825_25850[(1)] = (5));

} else {
var statearr_25826_25851 = state_25819__$1;
(statearr_25826_25851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (15))){
var inst_25809 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
var statearr_25827_25852 = state_25819__$1;
(statearr_25827_25852[(2)] = inst_25809);

(statearr_25827_25852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (13))){
var state_25819__$1 = state_25819;
var statearr_25828_25853 = state_25819__$1;
(statearr_25828_25853[(2)] = null);

(statearr_25828_25853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (6))){
var inst_25784 = (state_25819[(8)]);
var inst_25805 = (inst_25784 > (0));
var state_25819__$1 = state_25819;
if(cljs.core.truth_(inst_25805)){
var statearr_25829_25854 = state_25819__$1;
(statearr_25829_25854[(1)] = (12));

} else {
var statearr_25830_25855 = state_25819__$1;
(statearr_25830_25855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (3))){
var inst_25817 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25819__$1,inst_25817);
} else {
if((state_val_25820 === (12))){
var inst_25783 = (state_25819[(7)]);
var inst_25807 = cljs.core.vec.call(null,inst_25783);
var state_25819__$1 = state_25819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25819__$1,(15),out,inst_25807);
} else {
if((state_val_25820 === (2))){
var state_25819__$1 = state_25819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25819__$1,(4),ch);
} else {
if((state_val_25820 === (11))){
var inst_25799 = (state_25819[(2)]);
var inst_25800 = (new Array(n));
var inst_25783 = inst_25800;
var inst_25784 = (0);
var state_25819__$1 = (function (){var statearr_25831 = state_25819;
(statearr_25831[(7)] = inst_25783);

(statearr_25831[(8)] = inst_25784);

(statearr_25831[(10)] = inst_25799);

return statearr_25831;
})();
var statearr_25832_25856 = state_25819__$1;
(statearr_25832_25856[(2)] = null);

(statearr_25832_25856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (9))){
var inst_25783 = (state_25819[(7)]);
var inst_25797 = cljs.core.vec.call(null,inst_25783);
var state_25819__$1 = state_25819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25819__$1,(11),out,inst_25797);
} else {
if((state_val_25820 === (5))){
var inst_25783 = (state_25819[(7)]);
var inst_25787 = (state_25819[(9)]);
var inst_25784 = (state_25819[(8)]);
var inst_25792 = (state_25819[(11)]);
var inst_25791 = (inst_25783[inst_25784] = inst_25787);
var inst_25792__$1 = (inst_25784 + (1));
var inst_25793 = (inst_25792__$1 < n);
var state_25819__$1 = (function (){var statearr_25833 = state_25819;
(statearr_25833[(11)] = inst_25792__$1);

(statearr_25833[(12)] = inst_25791);

return statearr_25833;
})();
if(cljs.core.truth_(inst_25793)){
var statearr_25834_25857 = state_25819__$1;
(statearr_25834_25857[(1)] = (8));

} else {
var statearr_25835_25858 = state_25819__$1;
(statearr_25835_25858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (14))){
var inst_25812 = (state_25819[(2)]);
var inst_25813 = cljs.core.async.close_BANG_.call(null,out);
var state_25819__$1 = (function (){var statearr_25837 = state_25819;
(statearr_25837[(13)] = inst_25812);

return statearr_25837;
})();
var statearr_25838_25859 = state_25819__$1;
(statearr_25838_25859[(2)] = inst_25813);

(statearr_25838_25859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (10))){
var inst_25803 = (state_25819[(2)]);
var state_25819__$1 = state_25819;
var statearr_25839_25860 = state_25819__$1;
(statearr_25839_25860[(2)] = inst_25803);

(statearr_25839_25860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25820 === (8))){
var inst_25783 = (state_25819[(7)]);
var inst_25792 = (state_25819[(11)]);
var tmp25836 = inst_25783;
var inst_25783__$1 = tmp25836;
var inst_25784 = inst_25792;
var state_25819__$1 = (function (){var statearr_25840 = state_25819;
(statearr_25840[(7)] = inst_25783__$1);

(statearr_25840[(8)] = inst_25784);

return statearr_25840;
})();
var statearr_25841_25861 = state_25819__$1;
(statearr_25841_25861[(2)] = null);

(statearr_25841_25861[(1)] = (2));


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
});})(c__24031__auto___25847,out))
;
return ((function (switch__23936__auto__,c__24031__auto___25847,out){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25842[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25842[(1)] = (1));

return statearr_25842;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25819){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25843){if((e25843 instanceof Object)){
var ex__23940__auto__ = e25843;
var statearr_25844_25862 = state_25819;
(statearr_25844_25862[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25863 = state_25819;
state_25819 = G__25863;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25847,out))
})();
var state__24033__auto__ = (function (){var statearr_25845 = f__24032__auto__.call(null);
(statearr_25845[(6)] = c__24031__auto___25847);

return statearr_25845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25847,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25865 = arguments.length;
switch (G__25865) {
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
var c__24031__auto___25935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___25935,out){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___25935,out){
return (function (state_25907){
var state_val_25908 = (state_25907[(1)]);
if((state_val_25908 === (7))){
var inst_25903 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25909_25936 = state_25907__$1;
(statearr_25909_25936[(2)] = inst_25903);

(statearr_25909_25936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (1))){
var inst_25866 = [];
var inst_25867 = inst_25866;
var inst_25868 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25907__$1 = (function (){var statearr_25910 = state_25907;
(statearr_25910[(7)] = inst_25868);

(statearr_25910[(8)] = inst_25867);

return statearr_25910;
})();
var statearr_25911_25937 = state_25907__$1;
(statearr_25911_25937[(2)] = null);

(statearr_25911_25937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (4))){
var inst_25871 = (state_25907[(9)]);
var inst_25871__$1 = (state_25907[(2)]);
var inst_25872 = (inst_25871__$1 == null);
var inst_25873 = cljs.core.not.call(null,inst_25872);
var state_25907__$1 = (function (){var statearr_25912 = state_25907;
(statearr_25912[(9)] = inst_25871__$1);

return statearr_25912;
})();
if(inst_25873){
var statearr_25913_25938 = state_25907__$1;
(statearr_25913_25938[(1)] = (5));

} else {
var statearr_25914_25939 = state_25907__$1;
(statearr_25914_25939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (15))){
var inst_25897 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25915_25940 = state_25907__$1;
(statearr_25915_25940[(2)] = inst_25897);

(statearr_25915_25940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (13))){
var state_25907__$1 = state_25907;
var statearr_25916_25941 = state_25907__$1;
(statearr_25916_25941[(2)] = null);

(statearr_25916_25941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (6))){
var inst_25867 = (state_25907[(8)]);
var inst_25892 = inst_25867.length;
var inst_25893 = (inst_25892 > (0));
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25893)){
var statearr_25917_25942 = state_25907__$1;
(statearr_25917_25942[(1)] = (12));

} else {
var statearr_25918_25943 = state_25907__$1;
(statearr_25918_25943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (3))){
var inst_25905 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25907__$1,inst_25905);
} else {
if((state_val_25908 === (12))){
var inst_25867 = (state_25907[(8)]);
var inst_25895 = cljs.core.vec.call(null,inst_25867);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25907__$1,(15),out,inst_25895);
} else {
if((state_val_25908 === (2))){
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(4),ch);
} else {
if((state_val_25908 === (11))){
var inst_25875 = (state_25907[(10)]);
var inst_25871 = (state_25907[(9)]);
var inst_25885 = (state_25907[(2)]);
var inst_25886 = [];
var inst_25887 = inst_25886.push(inst_25871);
var inst_25867 = inst_25886;
var inst_25868 = inst_25875;
var state_25907__$1 = (function (){var statearr_25919 = state_25907;
(statearr_25919[(11)] = inst_25887);

(statearr_25919[(7)] = inst_25868);

(statearr_25919[(8)] = inst_25867);

(statearr_25919[(12)] = inst_25885);

return statearr_25919;
})();
var statearr_25920_25944 = state_25907__$1;
(statearr_25920_25944[(2)] = null);

(statearr_25920_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (9))){
var inst_25867 = (state_25907[(8)]);
var inst_25883 = cljs.core.vec.call(null,inst_25867);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25907__$1,(11),out,inst_25883);
} else {
if((state_val_25908 === (5))){
var inst_25875 = (state_25907[(10)]);
var inst_25871 = (state_25907[(9)]);
var inst_25868 = (state_25907[(7)]);
var inst_25875__$1 = f.call(null,inst_25871);
var inst_25876 = cljs.core._EQ_.call(null,inst_25875__$1,inst_25868);
var inst_25877 = cljs.core.keyword_identical_QMARK_.call(null,inst_25868,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25878 = ((inst_25876) || (inst_25877));
var state_25907__$1 = (function (){var statearr_25921 = state_25907;
(statearr_25921[(10)] = inst_25875__$1);

return statearr_25921;
})();
if(cljs.core.truth_(inst_25878)){
var statearr_25922_25945 = state_25907__$1;
(statearr_25922_25945[(1)] = (8));

} else {
var statearr_25923_25946 = state_25907__$1;
(statearr_25923_25946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (14))){
var inst_25900 = (state_25907[(2)]);
var inst_25901 = cljs.core.async.close_BANG_.call(null,out);
var state_25907__$1 = (function (){var statearr_25925 = state_25907;
(statearr_25925[(13)] = inst_25900);

return statearr_25925;
})();
var statearr_25926_25947 = state_25907__$1;
(statearr_25926_25947[(2)] = inst_25901);

(statearr_25926_25947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (10))){
var inst_25890 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25927_25948 = state_25907__$1;
(statearr_25927_25948[(2)] = inst_25890);

(statearr_25927_25948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (8))){
var inst_25875 = (state_25907[(10)]);
var inst_25871 = (state_25907[(9)]);
var inst_25867 = (state_25907[(8)]);
var inst_25880 = inst_25867.push(inst_25871);
var tmp25924 = inst_25867;
var inst_25867__$1 = tmp25924;
var inst_25868 = inst_25875;
var state_25907__$1 = (function (){var statearr_25928 = state_25907;
(statearr_25928[(7)] = inst_25868);

(statearr_25928[(8)] = inst_25867__$1);

(statearr_25928[(14)] = inst_25880);

return statearr_25928;
})();
var statearr_25929_25949 = state_25907__$1;
(statearr_25929_25949[(2)] = null);

(statearr_25929_25949[(1)] = (2));


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
});})(c__24031__auto___25935,out))
;
return ((function (switch__23936__auto__,c__24031__auto___25935,out){
return (function() {
var cljs$core$async$state_machine__23937__auto__ = null;
var cljs$core$async$state_machine__23937__auto____0 = (function (){
var statearr_25930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25930[(0)] = cljs$core$async$state_machine__23937__auto__);

(statearr_25930[(1)] = (1));

return statearr_25930;
});
var cljs$core$async$state_machine__23937__auto____1 = (function (state_25907){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_25907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e25931){if((e25931 instanceof Object)){
var ex__23940__auto__ = e25931;
var statearr_25932_25950 = state_25907;
(statearr_25932_25950[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25951 = state_25907;
state_25907 = G__25951;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
cljs$core$async$state_machine__23937__auto__ = function(state_25907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23937__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23937__auto____1.call(this,state_25907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23937__auto____0;
cljs$core$async$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23937__auto____1;
return cljs$core$async$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___25935,out))
})();
var state__24033__auto__ = (function (){var statearr_25933 = f__24032__auto__.call(null);
(statearr_25933[(6)] = c__24031__auto___25935);

return statearr_25933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___25935,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1594984085838
