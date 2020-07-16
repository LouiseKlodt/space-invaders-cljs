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
var G__22621 = arguments.length;
switch (G__22621) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22622 = (function (f,blockable,meta22623){
this.f = f;
this.blockable = blockable;
this.meta22623 = meta22623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22624,meta22623__$1){
var self__ = this;
var _22624__$1 = this;
return (new cljs.core.async.t_cljs$core$async22622(self__.f,self__.blockable,meta22623__$1));
});

cljs.core.async.t_cljs$core$async22622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22624){
var self__ = this;
var _22624__$1 = this;
return self__.meta22623;
});

cljs.core.async.t_cljs$core$async22622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22623","meta22623",-375374723,null)], null);
});

cljs.core.async.t_cljs$core$async22622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22622";

cljs.core.async.t_cljs$core$async22622.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22622");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22622.
 */
cljs.core.async.__GT_t_cljs$core$async22622 = (function cljs$core$async$__GT_t_cljs$core$async22622(f__$1,blockable__$1,meta22623){
return (new cljs.core.async.t_cljs$core$async22622(f__$1,blockable__$1,meta22623));
});

}

return (new cljs.core.async.t_cljs$core$async22622(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22628 = arguments.length;
switch (G__22628) {
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
var G__22631 = arguments.length;
switch (G__22631) {
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
var G__22634 = arguments.length;
switch (G__22634) {
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
var val_22636 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22636);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22636,ret){
return (function (){
return fn1.call(null,val_22636);
});})(val_22636,ret))
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
var G__22638 = arguments.length;
switch (G__22638) {
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
var n__4607__auto___22640 = n;
var x_22641 = (0);
while(true){
if((x_22641 < n__4607__auto___22640)){
(a[x_22641] = (0));

var G__22642 = (x_22641 + (1));
x_22641 = G__22642;
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

var G__22643 = (i + (1));
i = G__22643;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22644 = (function (flag,meta22645){
this.flag = flag;
this.meta22645 = meta22645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22646,meta22645__$1){
var self__ = this;
var _22646__$1 = this;
return (new cljs.core.async.t_cljs$core$async22644(self__.flag,meta22645__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22646){
var self__ = this;
var _22646__$1 = this;
return self__.meta22645;
});})(flag))
;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22644.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22645","meta22645",31547275,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22644";

cljs.core.async.t_cljs$core$async22644.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22644");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22644.
 */
cljs.core.async.__GT_t_cljs$core$async22644 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22644(flag__$1,meta22645){
return (new cljs.core.async.t_cljs$core$async22644(flag__$1,meta22645));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22644(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22647 = (function (flag,cb,meta22648){
this.flag = flag;
this.cb = cb;
this.meta22648 = meta22648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22649,meta22648__$1){
var self__ = this;
var _22649__$1 = this;
return (new cljs.core.async.t_cljs$core$async22647(self__.flag,self__.cb,meta22648__$1));
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22649){
var self__ = this;
var _22649__$1 = this;
return self__.meta22648;
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22648","meta22648",-81651989,null)], null);
});

cljs.core.async.t_cljs$core$async22647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22647";

cljs.core.async.t_cljs$core$async22647.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22647");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22647.
 */
cljs.core.async.__GT_t_cljs$core$async22647 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22647(flag__$1,cb__$1,meta22648){
return (new cljs.core.async.t_cljs$core$async22647(flag__$1,cb__$1,meta22648));
});

}

return (new cljs.core.async.t_cljs$core$async22647(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22650_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22650_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22651_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22651_SHARP_,port], null));
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
var G__22652 = (i + (1));
i = G__22652;
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
var len__4730__auto___22658 = arguments.length;
var i__4731__auto___22659 = (0);
while(true){
if((i__4731__auto___22659 < len__4730__auto___22658)){
args__4736__auto__.push((arguments[i__4731__auto___22659]));

var G__22660 = (i__4731__auto___22659 + (1));
i__4731__auto___22659 = G__22660;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22655){
var map__22656 = p__22655;
var map__22656__$1 = (((((!((map__22656 == null))))?(((((map__22656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22656):map__22656);
var opts = map__22656__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22653){
var G__22654 = cljs.core.first.call(null,seq22653);
var seq22653__$1 = cljs.core.next.call(null,seq22653);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22654,seq22653__$1);
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
var G__22662 = arguments.length;
switch (G__22662) {
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
var c__22561__auto___22708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___22708){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___22708){
return (function (state_22686){
var state_val_22687 = (state_22686[(1)]);
if((state_val_22687 === (7))){
var inst_22682 = (state_22686[(2)]);
var state_22686__$1 = state_22686;
var statearr_22688_22709 = state_22686__$1;
(statearr_22688_22709[(2)] = inst_22682);

(statearr_22688_22709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (1))){
var state_22686__$1 = state_22686;
var statearr_22689_22710 = state_22686__$1;
(statearr_22689_22710[(2)] = null);

(statearr_22689_22710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (4))){
var inst_22665 = (state_22686[(7)]);
var inst_22665__$1 = (state_22686[(2)]);
var inst_22666 = (inst_22665__$1 == null);
var state_22686__$1 = (function (){var statearr_22690 = state_22686;
(statearr_22690[(7)] = inst_22665__$1);

return statearr_22690;
})();
if(cljs.core.truth_(inst_22666)){
var statearr_22691_22711 = state_22686__$1;
(statearr_22691_22711[(1)] = (5));

} else {
var statearr_22692_22712 = state_22686__$1;
(statearr_22692_22712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (13))){
var state_22686__$1 = state_22686;
var statearr_22693_22713 = state_22686__$1;
(statearr_22693_22713[(2)] = null);

(statearr_22693_22713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (6))){
var inst_22665 = (state_22686[(7)]);
var state_22686__$1 = state_22686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22686__$1,(11),to,inst_22665);
} else {
if((state_val_22687 === (3))){
var inst_22684 = (state_22686[(2)]);
var state_22686__$1 = state_22686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22686__$1,inst_22684);
} else {
if((state_val_22687 === (12))){
var state_22686__$1 = state_22686;
var statearr_22694_22714 = state_22686__$1;
(statearr_22694_22714[(2)] = null);

(statearr_22694_22714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (2))){
var state_22686__$1 = state_22686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22686__$1,(4),from);
} else {
if((state_val_22687 === (11))){
var inst_22675 = (state_22686[(2)]);
var state_22686__$1 = state_22686;
if(cljs.core.truth_(inst_22675)){
var statearr_22695_22715 = state_22686__$1;
(statearr_22695_22715[(1)] = (12));

} else {
var statearr_22696_22716 = state_22686__$1;
(statearr_22696_22716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (9))){
var state_22686__$1 = state_22686;
var statearr_22697_22717 = state_22686__$1;
(statearr_22697_22717[(2)] = null);

(statearr_22697_22717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (5))){
var state_22686__$1 = state_22686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22698_22718 = state_22686__$1;
(statearr_22698_22718[(1)] = (8));

} else {
var statearr_22699_22719 = state_22686__$1;
(statearr_22699_22719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (14))){
var inst_22680 = (state_22686[(2)]);
var state_22686__$1 = state_22686;
var statearr_22700_22720 = state_22686__$1;
(statearr_22700_22720[(2)] = inst_22680);

(statearr_22700_22720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (10))){
var inst_22672 = (state_22686[(2)]);
var state_22686__$1 = state_22686;
var statearr_22701_22721 = state_22686__$1;
(statearr_22701_22721[(2)] = inst_22672);

(statearr_22701_22721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22687 === (8))){
var inst_22669 = cljs.core.async.close_BANG_.call(null,to);
var state_22686__$1 = state_22686;
var statearr_22702_22722 = state_22686__$1;
(statearr_22702_22722[(2)] = inst_22669);

(statearr_22702_22722[(1)] = (10));


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
});})(c__22561__auto___22708))
;
return ((function (switch__22466__auto__,c__22561__auto___22708){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_22703 = [null,null,null,null,null,null,null,null];
(statearr_22703[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_22703[(1)] = (1));

return statearr_22703;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_22686){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_22686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e22704){if((e22704 instanceof Object)){
var ex__22470__auto__ = e22704;
var statearr_22705_22723 = state_22686;
(statearr_22705_22723[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22724 = state_22686;
state_22686 = G__22724;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_22686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_22686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___22708))
})();
var state__22563__auto__ = (function (){var statearr_22706 = f__22562__auto__.call(null);
(statearr_22706[(6)] = c__22561__auto___22708);

return statearr_22706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___22708))
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
return (function (p__22725){
var vec__22726 = p__22725;
var v = cljs.core.nth.call(null,vec__22726,(0),null);
var p = cljs.core.nth.call(null,vec__22726,(1),null);
var job = vec__22726;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22561__auto___22897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___22897,res,vec__22726,v,p,job,jobs,results){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___22897,res,vec__22726,v,p,job,jobs,results){
return (function (state_22733){
var state_val_22734 = (state_22733[(1)]);
if((state_val_22734 === (1))){
var state_22733__$1 = state_22733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22733__$1,(2),res,v);
} else {
if((state_val_22734 === (2))){
var inst_22730 = (state_22733[(2)]);
var inst_22731 = cljs.core.async.close_BANG_.call(null,res);
var state_22733__$1 = (function (){var statearr_22735 = state_22733;
(statearr_22735[(7)] = inst_22730);

return statearr_22735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22733__$1,inst_22731);
} else {
return null;
}
}
});})(c__22561__auto___22897,res,vec__22726,v,p,job,jobs,results))
;
return ((function (switch__22466__auto__,c__22561__auto___22897,res,vec__22726,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0 = (function (){
var statearr_22736 = [null,null,null,null,null,null,null,null];
(statearr_22736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__);

(statearr_22736[(1)] = (1));

return statearr_22736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1 = (function (state_22733){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_22733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e22737){if((e22737 instanceof Object)){
var ex__22470__auto__ = e22737;
var statearr_22738_22898 = state_22733;
(statearr_22738_22898[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22899 = state_22733;
state_22733 = G__22899;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = function(state_22733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1.call(this,state_22733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___22897,res,vec__22726,v,p,job,jobs,results))
})();
var state__22563__auto__ = (function (){var statearr_22739 = f__22562__auto__.call(null);
(statearr_22739[(6)] = c__22561__auto___22897);

return statearr_22739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___22897,res,vec__22726,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22740){
var vec__22741 = p__22740;
var v = cljs.core.nth.call(null,vec__22741,(0),null);
var p = cljs.core.nth.call(null,vec__22741,(1),null);
var job = vec__22741;
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
var n__4607__auto___22900 = n;
var __22901 = (0);
while(true){
if((__22901 < n__4607__auto___22900)){
var G__22744_22902 = type;
var G__22744_22903__$1 = (((G__22744_22902 instanceof cljs.core.Keyword))?G__22744_22902.fqn:null);
switch (G__22744_22903__$1) {
case "compute":
var c__22561__auto___22905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22901,c__22561__auto___22905,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (__22901,c__22561__auto___22905,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async){
return (function (state_22757){
var state_val_22758 = (state_22757[(1)]);
if((state_val_22758 === (1))){
var state_22757__$1 = state_22757;
var statearr_22759_22906 = state_22757__$1;
(statearr_22759_22906[(2)] = null);

(statearr_22759_22906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (2))){
var state_22757__$1 = state_22757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22757__$1,(4),jobs);
} else {
if((state_val_22758 === (3))){
var inst_22755 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22757__$1,inst_22755);
} else {
if((state_val_22758 === (4))){
var inst_22747 = (state_22757[(2)]);
var inst_22748 = process.call(null,inst_22747);
var state_22757__$1 = state_22757;
if(cljs.core.truth_(inst_22748)){
var statearr_22760_22907 = state_22757__$1;
(statearr_22760_22907[(1)] = (5));

} else {
var statearr_22761_22908 = state_22757__$1;
(statearr_22761_22908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (5))){
var state_22757__$1 = state_22757;
var statearr_22762_22909 = state_22757__$1;
(statearr_22762_22909[(2)] = null);

(statearr_22762_22909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (6))){
var state_22757__$1 = state_22757;
var statearr_22763_22910 = state_22757__$1;
(statearr_22763_22910[(2)] = null);

(statearr_22763_22910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22758 === (7))){
var inst_22753 = (state_22757[(2)]);
var state_22757__$1 = state_22757;
var statearr_22764_22911 = state_22757__$1;
(statearr_22764_22911[(2)] = inst_22753);

(statearr_22764_22911[(1)] = (3));


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
});})(__22901,c__22561__auto___22905,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async))
;
return ((function (__22901,switch__22466__auto__,c__22561__auto___22905,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0 = (function (){
var statearr_22765 = [null,null,null,null,null,null,null];
(statearr_22765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__);

(statearr_22765[(1)] = (1));

return statearr_22765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1 = (function (state_22757){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_22757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e22766){if((e22766 instanceof Object)){
var ex__22470__auto__ = e22766;
var statearr_22767_22912 = state_22757;
(statearr_22767_22912[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22913 = state_22757;
state_22757 = G__22913;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = function(state_22757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1.call(this,state_22757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__;
})()
;})(__22901,switch__22466__auto__,c__22561__auto___22905,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async))
})();
var state__22563__auto__ = (function (){var statearr_22768 = f__22562__auto__.call(null);
(statearr_22768[(6)] = c__22561__auto___22905);

return statearr_22768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(__22901,c__22561__auto___22905,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async))
);


break;
case "async":
var c__22561__auto___22914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22901,c__22561__auto___22914,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (__22901,c__22561__auto___22914,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async){
return (function (state_22781){
var state_val_22782 = (state_22781[(1)]);
if((state_val_22782 === (1))){
var state_22781__$1 = state_22781;
var statearr_22783_22915 = state_22781__$1;
(statearr_22783_22915[(2)] = null);

(statearr_22783_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (2))){
var state_22781__$1 = state_22781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22781__$1,(4),jobs);
} else {
if((state_val_22782 === (3))){
var inst_22779 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22781__$1,inst_22779);
} else {
if((state_val_22782 === (4))){
var inst_22771 = (state_22781[(2)]);
var inst_22772 = async.call(null,inst_22771);
var state_22781__$1 = state_22781;
if(cljs.core.truth_(inst_22772)){
var statearr_22784_22916 = state_22781__$1;
(statearr_22784_22916[(1)] = (5));

} else {
var statearr_22785_22917 = state_22781__$1;
(statearr_22785_22917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (5))){
var state_22781__$1 = state_22781;
var statearr_22786_22918 = state_22781__$1;
(statearr_22786_22918[(2)] = null);

(statearr_22786_22918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (6))){
var state_22781__$1 = state_22781;
var statearr_22787_22919 = state_22781__$1;
(statearr_22787_22919[(2)] = null);

(statearr_22787_22919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (7))){
var inst_22777 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22788_22920 = state_22781__$1;
(statearr_22788_22920[(2)] = inst_22777);

(statearr_22788_22920[(1)] = (3));


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
});})(__22901,c__22561__auto___22914,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async))
;
return ((function (__22901,switch__22466__auto__,c__22561__auto___22914,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0 = (function (){
var statearr_22789 = [null,null,null,null,null,null,null];
(statearr_22789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__);

(statearr_22789[(1)] = (1));

return statearr_22789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1 = (function (state_22781){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_22781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e22790){if((e22790 instanceof Object)){
var ex__22470__auto__ = e22790;
var statearr_22791_22921 = state_22781;
(statearr_22791_22921[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22922 = state_22781;
state_22781 = G__22922;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = function(state_22781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1.call(this,state_22781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__;
})()
;})(__22901,switch__22466__auto__,c__22561__auto___22914,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async))
})();
var state__22563__auto__ = (function (){var statearr_22792 = f__22562__auto__.call(null);
(statearr_22792[(6)] = c__22561__auto___22914);

return statearr_22792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(__22901,c__22561__auto___22914,G__22744_22902,G__22744_22903__$1,n__4607__auto___22900,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22744_22903__$1)].join('')));

}

var G__22923 = (__22901 + (1));
__22901 = G__22923;
continue;
} else {
}
break;
}

var c__22561__auto___22924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___22924,jobs,results,process,async){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___22924,jobs,results,process,async){
return (function (state_22814){
var state_val_22815 = (state_22814[(1)]);
if((state_val_22815 === (7))){
var inst_22810 = (state_22814[(2)]);
var state_22814__$1 = state_22814;
var statearr_22816_22925 = state_22814__$1;
(statearr_22816_22925[(2)] = inst_22810);

(statearr_22816_22925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (1))){
var state_22814__$1 = state_22814;
var statearr_22817_22926 = state_22814__$1;
(statearr_22817_22926[(2)] = null);

(statearr_22817_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (4))){
var inst_22795 = (state_22814[(7)]);
var inst_22795__$1 = (state_22814[(2)]);
var inst_22796 = (inst_22795__$1 == null);
var state_22814__$1 = (function (){var statearr_22818 = state_22814;
(statearr_22818[(7)] = inst_22795__$1);

return statearr_22818;
})();
if(cljs.core.truth_(inst_22796)){
var statearr_22819_22927 = state_22814__$1;
(statearr_22819_22927[(1)] = (5));

} else {
var statearr_22820_22928 = state_22814__$1;
(statearr_22820_22928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (6))){
var inst_22795 = (state_22814[(7)]);
var inst_22800 = (state_22814[(8)]);
var inst_22800__$1 = cljs.core.async.chan.call(null,(1));
var inst_22801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22802 = [inst_22795,inst_22800__$1];
var inst_22803 = (new cljs.core.PersistentVector(null,2,(5),inst_22801,inst_22802,null));
var state_22814__$1 = (function (){var statearr_22821 = state_22814;
(statearr_22821[(8)] = inst_22800__$1);

return statearr_22821;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22814__$1,(8),jobs,inst_22803);
} else {
if((state_val_22815 === (3))){
var inst_22812 = (state_22814[(2)]);
var state_22814__$1 = state_22814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22814__$1,inst_22812);
} else {
if((state_val_22815 === (2))){
var state_22814__$1 = state_22814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22814__$1,(4),from);
} else {
if((state_val_22815 === (9))){
var inst_22807 = (state_22814[(2)]);
var state_22814__$1 = (function (){var statearr_22822 = state_22814;
(statearr_22822[(9)] = inst_22807);

return statearr_22822;
})();
var statearr_22823_22929 = state_22814__$1;
(statearr_22823_22929[(2)] = null);

(statearr_22823_22929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (5))){
var inst_22798 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22814__$1 = state_22814;
var statearr_22824_22930 = state_22814__$1;
(statearr_22824_22930[(2)] = inst_22798);

(statearr_22824_22930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (8))){
var inst_22800 = (state_22814[(8)]);
var inst_22805 = (state_22814[(2)]);
var state_22814__$1 = (function (){var statearr_22825 = state_22814;
(statearr_22825[(10)] = inst_22805);

return statearr_22825;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22814__$1,(9),results,inst_22800);
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
});})(c__22561__auto___22924,jobs,results,process,async))
;
return ((function (switch__22466__auto__,c__22561__auto___22924,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0 = (function (){
var statearr_22826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__);

(statearr_22826[(1)] = (1));

return statearr_22826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1 = (function (state_22814){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_22814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e22827){if((e22827 instanceof Object)){
var ex__22470__auto__ = e22827;
var statearr_22828_22931 = state_22814;
(statearr_22828_22931[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22932 = state_22814;
state_22814 = G__22932;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = function(state_22814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1.call(this,state_22814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___22924,jobs,results,process,async))
})();
var state__22563__auto__ = (function (){var statearr_22829 = f__22562__auto__.call(null);
(statearr_22829[(6)] = c__22561__auto___22924);

return statearr_22829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___22924,jobs,results,process,async))
);


var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__,jobs,results,process,async){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__,jobs,results,process,async){
return (function (state_22867){
var state_val_22868 = (state_22867[(1)]);
if((state_val_22868 === (7))){
var inst_22863 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
var statearr_22869_22933 = state_22867__$1;
(statearr_22869_22933[(2)] = inst_22863);

(statearr_22869_22933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (20))){
var state_22867__$1 = state_22867;
var statearr_22870_22934 = state_22867__$1;
(statearr_22870_22934[(2)] = null);

(statearr_22870_22934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (1))){
var state_22867__$1 = state_22867;
var statearr_22871_22935 = state_22867__$1;
(statearr_22871_22935[(2)] = null);

(statearr_22871_22935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (4))){
var inst_22832 = (state_22867[(7)]);
var inst_22832__$1 = (state_22867[(2)]);
var inst_22833 = (inst_22832__$1 == null);
var state_22867__$1 = (function (){var statearr_22872 = state_22867;
(statearr_22872[(7)] = inst_22832__$1);

return statearr_22872;
})();
if(cljs.core.truth_(inst_22833)){
var statearr_22873_22936 = state_22867__$1;
(statearr_22873_22936[(1)] = (5));

} else {
var statearr_22874_22937 = state_22867__$1;
(statearr_22874_22937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (15))){
var inst_22845 = (state_22867[(8)]);
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22867__$1,(18),to,inst_22845);
} else {
if((state_val_22868 === (21))){
var inst_22858 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
var statearr_22875_22938 = state_22867__$1;
(statearr_22875_22938[(2)] = inst_22858);

(statearr_22875_22938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (13))){
var inst_22860 = (state_22867[(2)]);
var state_22867__$1 = (function (){var statearr_22876 = state_22867;
(statearr_22876[(9)] = inst_22860);

return statearr_22876;
})();
var statearr_22877_22939 = state_22867__$1;
(statearr_22877_22939[(2)] = null);

(statearr_22877_22939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (6))){
var inst_22832 = (state_22867[(7)]);
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22867__$1,(11),inst_22832);
} else {
if((state_val_22868 === (17))){
var inst_22853 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
if(cljs.core.truth_(inst_22853)){
var statearr_22878_22940 = state_22867__$1;
(statearr_22878_22940[(1)] = (19));

} else {
var statearr_22879_22941 = state_22867__$1;
(statearr_22879_22941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (3))){
var inst_22865 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22867__$1,inst_22865);
} else {
if((state_val_22868 === (12))){
var inst_22842 = (state_22867[(10)]);
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22867__$1,(14),inst_22842);
} else {
if((state_val_22868 === (2))){
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22867__$1,(4),results);
} else {
if((state_val_22868 === (19))){
var state_22867__$1 = state_22867;
var statearr_22880_22942 = state_22867__$1;
(statearr_22880_22942[(2)] = null);

(statearr_22880_22942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (11))){
var inst_22842 = (state_22867[(2)]);
var state_22867__$1 = (function (){var statearr_22881 = state_22867;
(statearr_22881[(10)] = inst_22842);

return statearr_22881;
})();
var statearr_22882_22943 = state_22867__$1;
(statearr_22882_22943[(2)] = null);

(statearr_22882_22943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (9))){
var state_22867__$1 = state_22867;
var statearr_22883_22944 = state_22867__$1;
(statearr_22883_22944[(2)] = null);

(statearr_22883_22944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (5))){
var state_22867__$1 = state_22867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22884_22945 = state_22867__$1;
(statearr_22884_22945[(1)] = (8));

} else {
var statearr_22885_22946 = state_22867__$1;
(statearr_22885_22946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (14))){
var inst_22847 = (state_22867[(11)]);
var inst_22845 = (state_22867[(8)]);
var inst_22845__$1 = (state_22867[(2)]);
var inst_22846 = (inst_22845__$1 == null);
var inst_22847__$1 = cljs.core.not.call(null,inst_22846);
var state_22867__$1 = (function (){var statearr_22886 = state_22867;
(statearr_22886[(11)] = inst_22847__$1);

(statearr_22886[(8)] = inst_22845__$1);

return statearr_22886;
})();
if(inst_22847__$1){
var statearr_22887_22947 = state_22867__$1;
(statearr_22887_22947[(1)] = (15));

} else {
var statearr_22888_22948 = state_22867__$1;
(statearr_22888_22948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (16))){
var inst_22847 = (state_22867[(11)]);
var state_22867__$1 = state_22867;
var statearr_22889_22949 = state_22867__$1;
(statearr_22889_22949[(2)] = inst_22847);

(statearr_22889_22949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (10))){
var inst_22839 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
var statearr_22890_22950 = state_22867__$1;
(statearr_22890_22950[(2)] = inst_22839);

(statearr_22890_22950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (18))){
var inst_22850 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
var statearr_22891_22951 = state_22867__$1;
(statearr_22891_22951[(2)] = inst_22850);

(statearr_22891_22951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (8))){
var inst_22836 = cljs.core.async.close_BANG_.call(null,to);
var state_22867__$1 = state_22867;
var statearr_22892_22952 = state_22867__$1;
(statearr_22892_22952[(2)] = inst_22836);

(statearr_22892_22952[(1)] = (10));


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
});})(c__22561__auto__,jobs,results,process,async))
;
return ((function (switch__22466__auto__,c__22561__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0 = (function (){
var statearr_22893 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__);

(statearr_22893[(1)] = (1));

return statearr_22893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1 = (function (state_22867){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_22867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e22894){if((e22894 instanceof Object)){
var ex__22470__auto__ = e22894;
var statearr_22895_22953 = state_22867;
(statearr_22895_22953[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22954 = state_22867;
state_22867 = G__22954;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__ = function(state_22867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1.call(this,state_22867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22467__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__,jobs,results,process,async))
})();
var state__22563__auto__ = (function (){var statearr_22896 = f__22562__auto__.call(null);
(statearr_22896[(6)] = c__22561__auto__);

return statearr_22896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__,jobs,results,process,async))
);

return c__22561__auto__;
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
var G__22956 = arguments.length;
switch (G__22956) {
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
var G__22959 = arguments.length;
switch (G__22959) {
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
var G__22962 = arguments.length;
switch (G__22962) {
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
var c__22561__auto___23011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___23011,tc,fc){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___23011,tc,fc){
return (function (state_22988){
var state_val_22989 = (state_22988[(1)]);
if((state_val_22989 === (7))){
var inst_22984 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_22990_23012 = state_22988__$1;
(statearr_22990_23012[(2)] = inst_22984);

(statearr_22990_23012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (1))){
var state_22988__$1 = state_22988;
var statearr_22991_23013 = state_22988__$1;
(statearr_22991_23013[(2)] = null);

(statearr_22991_23013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (4))){
var inst_22965 = (state_22988[(7)]);
var inst_22965__$1 = (state_22988[(2)]);
var inst_22966 = (inst_22965__$1 == null);
var state_22988__$1 = (function (){var statearr_22992 = state_22988;
(statearr_22992[(7)] = inst_22965__$1);

return statearr_22992;
})();
if(cljs.core.truth_(inst_22966)){
var statearr_22993_23014 = state_22988__$1;
(statearr_22993_23014[(1)] = (5));

} else {
var statearr_22994_23015 = state_22988__$1;
(statearr_22994_23015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (13))){
var state_22988__$1 = state_22988;
var statearr_22995_23016 = state_22988__$1;
(statearr_22995_23016[(2)] = null);

(statearr_22995_23016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (6))){
var inst_22965 = (state_22988[(7)]);
var inst_22971 = p.call(null,inst_22965);
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22971)){
var statearr_22996_23017 = state_22988__$1;
(statearr_22996_23017[(1)] = (9));

} else {
var statearr_22997_23018 = state_22988__$1;
(statearr_22997_23018[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (3))){
var inst_22986 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22988__$1,inst_22986);
} else {
if((state_val_22989 === (12))){
var state_22988__$1 = state_22988;
var statearr_22998_23019 = state_22988__$1;
(statearr_22998_23019[(2)] = null);

(statearr_22998_23019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (2))){
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22988__$1,(4),ch);
} else {
if((state_val_22989 === (11))){
var inst_22965 = (state_22988[(7)]);
var inst_22975 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22988__$1,(8),inst_22975,inst_22965);
} else {
if((state_val_22989 === (9))){
var state_22988__$1 = state_22988;
var statearr_22999_23020 = state_22988__$1;
(statearr_22999_23020[(2)] = tc);

(statearr_22999_23020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (5))){
var inst_22968 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22969 = cljs.core.async.close_BANG_.call(null,fc);
var state_22988__$1 = (function (){var statearr_23000 = state_22988;
(statearr_23000[(8)] = inst_22968);

return statearr_23000;
})();
var statearr_23001_23021 = state_22988__$1;
(statearr_23001_23021[(2)] = inst_22969);

(statearr_23001_23021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (14))){
var inst_22982 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
var statearr_23002_23022 = state_22988__$1;
(statearr_23002_23022[(2)] = inst_22982);

(statearr_23002_23022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (10))){
var state_22988__$1 = state_22988;
var statearr_23003_23023 = state_22988__$1;
(statearr_23003_23023[(2)] = fc);

(statearr_23003_23023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22989 === (8))){
var inst_22977 = (state_22988[(2)]);
var state_22988__$1 = state_22988;
if(cljs.core.truth_(inst_22977)){
var statearr_23004_23024 = state_22988__$1;
(statearr_23004_23024[(1)] = (12));

} else {
var statearr_23005_23025 = state_22988__$1;
(statearr_23005_23025[(1)] = (13));

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
});})(c__22561__auto___23011,tc,fc))
;
return ((function (switch__22466__auto__,c__22561__auto___23011,tc,fc){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_23006 = [null,null,null,null,null,null,null,null,null];
(statearr_23006[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_23006[(1)] = (1));

return statearr_23006;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_22988){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_22988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23007){if((e23007 instanceof Object)){
var ex__22470__auto__ = e23007;
var statearr_23008_23026 = state_22988;
(statearr_23008_23026[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23027 = state_22988;
state_22988 = G__23027;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_22988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_22988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___23011,tc,fc))
})();
var state__22563__auto__ = (function (){var statearr_23009 = f__22562__auto__.call(null);
(statearr_23009[(6)] = c__22561__auto___23011);

return statearr_23009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___23011,tc,fc))
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
var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__){
return (function (state_23048){
var state_val_23049 = (state_23048[(1)]);
if((state_val_23049 === (7))){
var inst_23044 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23050_23068 = state_23048__$1;
(statearr_23050_23068[(2)] = inst_23044);

(statearr_23050_23068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (1))){
var inst_23028 = init;
var state_23048__$1 = (function (){var statearr_23051 = state_23048;
(statearr_23051[(7)] = inst_23028);

return statearr_23051;
})();
var statearr_23052_23069 = state_23048__$1;
(statearr_23052_23069[(2)] = null);

(statearr_23052_23069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (4))){
var inst_23031 = (state_23048[(8)]);
var inst_23031__$1 = (state_23048[(2)]);
var inst_23032 = (inst_23031__$1 == null);
var state_23048__$1 = (function (){var statearr_23053 = state_23048;
(statearr_23053[(8)] = inst_23031__$1);

return statearr_23053;
})();
if(cljs.core.truth_(inst_23032)){
var statearr_23054_23070 = state_23048__$1;
(statearr_23054_23070[(1)] = (5));

} else {
var statearr_23055_23071 = state_23048__$1;
(statearr_23055_23071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (6))){
var inst_23035 = (state_23048[(9)]);
var inst_23028 = (state_23048[(7)]);
var inst_23031 = (state_23048[(8)]);
var inst_23035__$1 = f.call(null,inst_23028,inst_23031);
var inst_23036 = cljs.core.reduced_QMARK_.call(null,inst_23035__$1);
var state_23048__$1 = (function (){var statearr_23056 = state_23048;
(statearr_23056[(9)] = inst_23035__$1);

return statearr_23056;
})();
if(inst_23036){
var statearr_23057_23072 = state_23048__$1;
(statearr_23057_23072[(1)] = (8));

} else {
var statearr_23058_23073 = state_23048__$1;
(statearr_23058_23073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (3))){
var inst_23046 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23048__$1,inst_23046);
} else {
if((state_val_23049 === (2))){
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23048__$1,(4),ch);
} else {
if((state_val_23049 === (9))){
var inst_23035 = (state_23048[(9)]);
var inst_23028 = inst_23035;
var state_23048__$1 = (function (){var statearr_23059 = state_23048;
(statearr_23059[(7)] = inst_23028);

return statearr_23059;
})();
var statearr_23060_23074 = state_23048__$1;
(statearr_23060_23074[(2)] = null);

(statearr_23060_23074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (5))){
var inst_23028 = (state_23048[(7)]);
var state_23048__$1 = state_23048;
var statearr_23061_23075 = state_23048__$1;
(statearr_23061_23075[(2)] = inst_23028);

(statearr_23061_23075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (10))){
var inst_23042 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23062_23076 = state_23048__$1;
(statearr_23062_23076[(2)] = inst_23042);

(statearr_23062_23076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (8))){
var inst_23035 = (state_23048[(9)]);
var inst_23038 = cljs.core.deref.call(null,inst_23035);
var state_23048__$1 = state_23048;
var statearr_23063_23077 = state_23048__$1;
(statearr_23063_23077[(2)] = inst_23038);

(statearr_23063_23077[(1)] = (10));


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
});})(c__22561__auto__))
;
return ((function (switch__22466__auto__,c__22561__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22467__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22467__auto____0 = (function (){
var statearr_23064 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23064[(0)] = cljs$core$async$reduce_$_state_machine__22467__auto__);

(statearr_23064[(1)] = (1));

return statearr_23064;
});
var cljs$core$async$reduce_$_state_machine__22467__auto____1 = (function (state_23048){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23065){if((e23065 instanceof Object)){
var ex__22470__auto__ = e23065;
var statearr_23066_23078 = state_23048;
(statearr_23066_23078[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23079 = state_23048;
state_23048 = G__23079;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22467__auto__ = function(state_23048){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22467__auto____1.call(this,state_23048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22467__auto____0;
cljs$core$async$reduce_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22467__auto____1;
return cljs$core$async$reduce_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__))
})();
var state__22563__auto__ = (function (){var statearr_23067 = f__22562__auto__.call(null);
(statearr_23067[(6)] = c__22561__auto__);

return statearr_23067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__))
);

return c__22561__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__,f__$1){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__,f__$1){
return (function (state_23085){
var state_val_23086 = (state_23085[(1)]);
if((state_val_23086 === (1))){
var inst_23080 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23085__$1 = state_23085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23085__$1,(2),inst_23080);
} else {
if((state_val_23086 === (2))){
var inst_23082 = (state_23085[(2)]);
var inst_23083 = f__$1.call(null,inst_23082);
var state_23085__$1 = state_23085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23085__$1,inst_23083);
} else {
return null;
}
}
});})(c__22561__auto__,f__$1))
;
return ((function (switch__22466__auto__,c__22561__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22467__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22467__auto____0 = (function (){
var statearr_23087 = [null,null,null,null,null,null,null];
(statearr_23087[(0)] = cljs$core$async$transduce_$_state_machine__22467__auto__);

(statearr_23087[(1)] = (1));

return statearr_23087;
});
var cljs$core$async$transduce_$_state_machine__22467__auto____1 = (function (state_23085){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23088){if((e23088 instanceof Object)){
var ex__22470__auto__ = e23088;
var statearr_23089_23091 = state_23085;
(statearr_23089_23091[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23092 = state_23085;
state_23085 = G__23092;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22467__auto__ = function(state_23085){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22467__auto____1.call(this,state_23085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22467__auto____0;
cljs$core$async$transduce_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22467__auto____1;
return cljs$core$async$transduce_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__,f__$1))
})();
var state__22563__auto__ = (function (){var statearr_23090 = f__22562__auto__.call(null);
(statearr_23090[(6)] = c__22561__auto__);

return statearr_23090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__,f__$1))
);

return c__22561__auto__;
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
var G__23094 = arguments.length;
switch (G__23094) {
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
var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__){
return (function (state_23119){
var state_val_23120 = (state_23119[(1)]);
if((state_val_23120 === (7))){
var inst_23101 = (state_23119[(2)]);
var state_23119__$1 = state_23119;
var statearr_23121_23142 = state_23119__$1;
(statearr_23121_23142[(2)] = inst_23101);

(statearr_23121_23142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (1))){
var inst_23095 = cljs.core.seq.call(null,coll);
var inst_23096 = inst_23095;
var state_23119__$1 = (function (){var statearr_23122 = state_23119;
(statearr_23122[(7)] = inst_23096);

return statearr_23122;
})();
var statearr_23123_23143 = state_23119__$1;
(statearr_23123_23143[(2)] = null);

(statearr_23123_23143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (4))){
var inst_23096 = (state_23119[(7)]);
var inst_23099 = cljs.core.first.call(null,inst_23096);
var state_23119__$1 = state_23119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23119__$1,(7),ch,inst_23099);
} else {
if((state_val_23120 === (13))){
var inst_23113 = (state_23119[(2)]);
var state_23119__$1 = state_23119;
var statearr_23124_23144 = state_23119__$1;
(statearr_23124_23144[(2)] = inst_23113);

(statearr_23124_23144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (6))){
var inst_23104 = (state_23119[(2)]);
var state_23119__$1 = state_23119;
if(cljs.core.truth_(inst_23104)){
var statearr_23125_23145 = state_23119__$1;
(statearr_23125_23145[(1)] = (8));

} else {
var statearr_23126_23146 = state_23119__$1;
(statearr_23126_23146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (3))){
var inst_23117 = (state_23119[(2)]);
var state_23119__$1 = state_23119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23119__$1,inst_23117);
} else {
if((state_val_23120 === (12))){
var state_23119__$1 = state_23119;
var statearr_23127_23147 = state_23119__$1;
(statearr_23127_23147[(2)] = null);

(statearr_23127_23147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (2))){
var inst_23096 = (state_23119[(7)]);
var state_23119__$1 = state_23119;
if(cljs.core.truth_(inst_23096)){
var statearr_23128_23148 = state_23119__$1;
(statearr_23128_23148[(1)] = (4));

} else {
var statearr_23129_23149 = state_23119__$1;
(statearr_23129_23149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (11))){
var inst_23110 = cljs.core.async.close_BANG_.call(null,ch);
var state_23119__$1 = state_23119;
var statearr_23130_23150 = state_23119__$1;
(statearr_23130_23150[(2)] = inst_23110);

(statearr_23130_23150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (9))){
var state_23119__$1 = state_23119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23131_23151 = state_23119__$1;
(statearr_23131_23151[(1)] = (11));

} else {
var statearr_23132_23152 = state_23119__$1;
(statearr_23132_23152[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (5))){
var inst_23096 = (state_23119[(7)]);
var state_23119__$1 = state_23119;
var statearr_23133_23153 = state_23119__$1;
(statearr_23133_23153[(2)] = inst_23096);

(statearr_23133_23153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (10))){
var inst_23115 = (state_23119[(2)]);
var state_23119__$1 = state_23119;
var statearr_23134_23154 = state_23119__$1;
(statearr_23134_23154[(2)] = inst_23115);

(statearr_23134_23154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (8))){
var inst_23096 = (state_23119[(7)]);
var inst_23106 = cljs.core.next.call(null,inst_23096);
var inst_23096__$1 = inst_23106;
var state_23119__$1 = (function (){var statearr_23135 = state_23119;
(statearr_23135[(7)] = inst_23096__$1);

return statearr_23135;
})();
var statearr_23136_23155 = state_23119__$1;
(statearr_23136_23155[(2)] = null);

(statearr_23136_23155[(1)] = (2));


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
});})(c__22561__auto__))
;
return ((function (switch__22466__auto__,c__22561__auto__){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_23137 = [null,null,null,null,null,null,null,null];
(statearr_23137[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_23137[(1)] = (1));

return statearr_23137;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_23119){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23138){if((e23138 instanceof Object)){
var ex__22470__auto__ = e23138;
var statearr_23139_23156 = state_23119;
(statearr_23139_23156[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23157 = state_23119;
state_23119 = G__23157;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_23119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_23119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__))
})();
var state__22563__auto__ = (function (){var statearr_23140 = f__22562__auto__.call(null);
(statearr_23140[(6)] = c__22561__auto__);

return statearr_23140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__))
);

return c__22561__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23158 = (function (ch,cs,meta23159){
this.ch = ch;
this.cs = cs;
this.meta23159 = meta23159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23160,meta23159__$1){
var self__ = this;
var _23160__$1 = this;
return (new cljs.core.async.t_cljs$core$async23158(self__.ch,self__.cs,meta23159__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23160){
var self__ = this;
var _23160__$1 = this;
return self__.meta23159;
});})(cs))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23158.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23158.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23159","meta23159",659072257,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23158";

cljs.core.async.t_cljs$core$async23158.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23158");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23158.
 */
cljs.core.async.__GT_t_cljs$core$async23158 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23158(ch__$1,cs__$1,meta23159){
return (new cljs.core.async.t_cljs$core$async23158(ch__$1,cs__$1,meta23159));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23158(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22561__auto___23380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___23380,cs,m,dchan,dctr,done){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___23380,cs,m,dchan,dctr,done){
return (function (state_23295){
var state_val_23296 = (state_23295[(1)]);
if((state_val_23296 === (7))){
var inst_23291 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23297_23381 = state_23295__$1;
(statearr_23297_23381[(2)] = inst_23291);

(statearr_23297_23381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (20))){
var inst_23194 = (state_23295[(7)]);
var inst_23206 = cljs.core.first.call(null,inst_23194);
var inst_23207 = cljs.core.nth.call(null,inst_23206,(0),null);
var inst_23208 = cljs.core.nth.call(null,inst_23206,(1),null);
var state_23295__$1 = (function (){var statearr_23298 = state_23295;
(statearr_23298[(8)] = inst_23207);

return statearr_23298;
})();
if(cljs.core.truth_(inst_23208)){
var statearr_23299_23382 = state_23295__$1;
(statearr_23299_23382[(1)] = (22));

} else {
var statearr_23300_23383 = state_23295__$1;
(statearr_23300_23383[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (27))){
var inst_23238 = (state_23295[(9)]);
var inst_23236 = (state_23295[(10)]);
var inst_23243 = (state_23295[(11)]);
var inst_23163 = (state_23295[(12)]);
var inst_23243__$1 = cljs.core._nth.call(null,inst_23236,inst_23238);
var inst_23244 = cljs.core.async.put_BANG_.call(null,inst_23243__$1,inst_23163,done);
var state_23295__$1 = (function (){var statearr_23301 = state_23295;
(statearr_23301[(11)] = inst_23243__$1);

return statearr_23301;
})();
if(cljs.core.truth_(inst_23244)){
var statearr_23302_23384 = state_23295__$1;
(statearr_23302_23384[(1)] = (30));

} else {
var statearr_23303_23385 = state_23295__$1;
(statearr_23303_23385[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (1))){
var state_23295__$1 = state_23295;
var statearr_23304_23386 = state_23295__$1;
(statearr_23304_23386[(2)] = null);

(statearr_23304_23386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (24))){
var inst_23194 = (state_23295[(7)]);
var inst_23213 = (state_23295[(2)]);
var inst_23214 = cljs.core.next.call(null,inst_23194);
var inst_23172 = inst_23214;
var inst_23173 = null;
var inst_23174 = (0);
var inst_23175 = (0);
var state_23295__$1 = (function (){var statearr_23305 = state_23295;
(statearr_23305[(13)] = inst_23175);

(statearr_23305[(14)] = inst_23172);

(statearr_23305[(15)] = inst_23173);

(statearr_23305[(16)] = inst_23174);

(statearr_23305[(17)] = inst_23213);

return statearr_23305;
})();
var statearr_23306_23387 = state_23295__$1;
(statearr_23306_23387[(2)] = null);

(statearr_23306_23387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (39))){
var state_23295__$1 = state_23295;
var statearr_23310_23388 = state_23295__$1;
(statearr_23310_23388[(2)] = null);

(statearr_23310_23388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (4))){
var inst_23163 = (state_23295[(12)]);
var inst_23163__$1 = (state_23295[(2)]);
var inst_23164 = (inst_23163__$1 == null);
var state_23295__$1 = (function (){var statearr_23311 = state_23295;
(statearr_23311[(12)] = inst_23163__$1);

return statearr_23311;
})();
if(cljs.core.truth_(inst_23164)){
var statearr_23312_23389 = state_23295__$1;
(statearr_23312_23389[(1)] = (5));

} else {
var statearr_23313_23390 = state_23295__$1;
(statearr_23313_23390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (15))){
var inst_23175 = (state_23295[(13)]);
var inst_23172 = (state_23295[(14)]);
var inst_23173 = (state_23295[(15)]);
var inst_23174 = (state_23295[(16)]);
var inst_23190 = (state_23295[(2)]);
var inst_23191 = (inst_23175 + (1));
var tmp23307 = inst_23172;
var tmp23308 = inst_23173;
var tmp23309 = inst_23174;
var inst_23172__$1 = tmp23307;
var inst_23173__$1 = tmp23308;
var inst_23174__$1 = tmp23309;
var inst_23175__$1 = inst_23191;
var state_23295__$1 = (function (){var statearr_23314 = state_23295;
(statearr_23314[(13)] = inst_23175__$1);

(statearr_23314[(14)] = inst_23172__$1);

(statearr_23314[(15)] = inst_23173__$1);

(statearr_23314[(16)] = inst_23174__$1);

(statearr_23314[(18)] = inst_23190);

return statearr_23314;
})();
var statearr_23315_23391 = state_23295__$1;
(statearr_23315_23391[(2)] = null);

(statearr_23315_23391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (21))){
var inst_23217 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23319_23392 = state_23295__$1;
(statearr_23319_23392[(2)] = inst_23217);

(statearr_23319_23392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (31))){
var inst_23243 = (state_23295[(11)]);
var inst_23247 = done.call(null,null);
var inst_23248 = cljs.core.async.untap_STAR_.call(null,m,inst_23243);
var state_23295__$1 = (function (){var statearr_23320 = state_23295;
(statearr_23320[(19)] = inst_23247);

return statearr_23320;
})();
var statearr_23321_23393 = state_23295__$1;
(statearr_23321_23393[(2)] = inst_23248);

(statearr_23321_23393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (32))){
var inst_23235 = (state_23295[(20)]);
var inst_23238 = (state_23295[(9)]);
var inst_23236 = (state_23295[(10)]);
var inst_23237 = (state_23295[(21)]);
var inst_23250 = (state_23295[(2)]);
var inst_23251 = (inst_23238 + (1));
var tmp23316 = inst_23235;
var tmp23317 = inst_23236;
var tmp23318 = inst_23237;
var inst_23235__$1 = tmp23316;
var inst_23236__$1 = tmp23317;
var inst_23237__$1 = tmp23318;
var inst_23238__$1 = inst_23251;
var state_23295__$1 = (function (){var statearr_23322 = state_23295;
(statearr_23322[(20)] = inst_23235__$1);

(statearr_23322[(22)] = inst_23250);

(statearr_23322[(9)] = inst_23238__$1);

(statearr_23322[(10)] = inst_23236__$1);

(statearr_23322[(21)] = inst_23237__$1);

return statearr_23322;
})();
var statearr_23323_23394 = state_23295__$1;
(statearr_23323_23394[(2)] = null);

(statearr_23323_23394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (40))){
var inst_23263 = (state_23295[(23)]);
var inst_23267 = done.call(null,null);
var inst_23268 = cljs.core.async.untap_STAR_.call(null,m,inst_23263);
var state_23295__$1 = (function (){var statearr_23324 = state_23295;
(statearr_23324[(24)] = inst_23267);

return statearr_23324;
})();
var statearr_23325_23395 = state_23295__$1;
(statearr_23325_23395[(2)] = inst_23268);

(statearr_23325_23395[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (33))){
var inst_23254 = (state_23295[(25)]);
var inst_23256 = cljs.core.chunked_seq_QMARK_.call(null,inst_23254);
var state_23295__$1 = state_23295;
if(inst_23256){
var statearr_23326_23396 = state_23295__$1;
(statearr_23326_23396[(1)] = (36));

} else {
var statearr_23327_23397 = state_23295__$1;
(statearr_23327_23397[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (13))){
var inst_23184 = (state_23295[(26)]);
var inst_23187 = cljs.core.async.close_BANG_.call(null,inst_23184);
var state_23295__$1 = state_23295;
var statearr_23328_23398 = state_23295__$1;
(statearr_23328_23398[(2)] = inst_23187);

(statearr_23328_23398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (22))){
var inst_23207 = (state_23295[(8)]);
var inst_23210 = cljs.core.async.close_BANG_.call(null,inst_23207);
var state_23295__$1 = state_23295;
var statearr_23329_23399 = state_23295__$1;
(statearr_23329_23399[(2)] = inst_23210);

(statearr_23329_23399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (36))){
var inst_23254 = (state_23295[(25)]);
var inst_23258 = cljs.core.chunk_first.call(null,inst_23254);
var inst_23259 = cljs.core.chunk_rest.call(null,inst_23254);
var inst_23260 = cljs.core.count.call(null,inst_23258);
var inst_23235 = inst_23259;
var inst_23236 = inst_23258;
var inst_23237 = inst_23260;
var inst_23238 = (0);
var state_23295__$1 = (function (){var statearr_23330 = state_23295;
(statearr_23330[(20)] = inst_23235);

(statearr_23330[(9)] = inst_23238);

(statearr_23330[(10)] = inst_23236);

(statearr_23330[(21)] = inst_23237);

return statearr_23330;
})();
var statearr_23331_23400 = state_23295__$1;
(statearr_23331_23400[(2)] = null);

(statearr_23331_23400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (41))){
var inst_23254 = (state_23295[(25)]);
var inst_23270 = (state_23295[(2)]);
var inst_23271 = cljs.core.next.call(null,inst_23254);
var inst_23235 = inst_23271;
var inst_23236 = null;
var inst_23237 = (0);
var inst_23238 = (0);
var state_23295__$1 = (function (){var statearr_23332 = state_23295;
(statearr_23332[(27)] = inst_23270);

(statearr_23332[(20)] = inst_23235);

(statearr_23332[(9)] = inst_23238);

(statearr_23332[(10)] = inst_23236);

(statearr_23332[(21)] = inst_23237);

return statearr_23332;
})();
var statearr_23333_23401 = state_23295__$1;
(statearr_23333_23401[(2)] = null);

(statearr_23333_23401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (43))){
var state_23295__$1 = state_23295;
var statearr_23334_23402 = state_23295__$1;
(statearr_23334_23402[(2)] = null);

(statearr_23334_23402[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (29))){
var inst_23279 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23335_23403 = state_23295__$1;
(statearr_23335_23403[(2)] = inst_23279);

(statearr_23335_23403[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (44))){
var inst_23288 = (state_23295[(2)]);
var state_23295__$1 = (function (){var statearr_23336 = state_23295;
(statearr_23336[(28)] = inst_23288);

return statearr_23336;
})();
var statearr_23337_23404 = state_23295__$1;
(statearr_23337_23404[(2)] = null);

(statearr_23337_23404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (6))){
var inst_23227 = (state_23295[(29)]);
var inst_23226 = cljs.core.deref.call(null,cs);
var inst_23227__$1 = cljs.core.keys.call(null,inst_23226);
var inst_23228 = cljs.core.count.call(null,inst_23227__$1);
var inst_23229 = cljs.core.reset_BANG_.call(null,dctr,inst_23228);
var inst_23234 = cljs.core.seq.call(null,inst_23227__$1);
var inst_23235 = inst_23234;
var inst_23236 = null;
var inst_23237 = (0);
var inst_23238 = (0);
var state_23295__$1 = (function (){var statearr_23338 = state_23295;
(statearr_23338[(29)] = inst_23227__$1);

(statearr_23338[(20)] = inst_23235);

(statearr_23338[(9)] = inst_23238);

(statearr_23338[(10)] = inst_23236);

(statearr_23338[(21)] = inst_23237);

(statearr_23338[(30)] = inst_23229);

return statearr_23338;
})();
var statearr_23339_23405 = state_23295__$1;
(statearr_23339_23405[(2)] = null);

(statearr_23339_23405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (28))){
var inst_23235 = (state_23295[(20)]);
var inst_23254 = (state_23295[(25)]);
var inst_23254__$1 = cljs.core.seq.call(null,inst_23235);
var state_23295__$1 = (function (){var statearr_23340 = state_23295;
(statearr_23340[(25)] = inst_23254__$1);

return statearr_23340;
})();
if(inst_23254__$1){
var statearr_23341_23406 = state_23295__$1;
(statearr_23341_23406[(1)] = (33));

} else {
var statearr_23342_23407 = state_23295__$1;
(statearr_23342_23407[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (25))){
var inst_23238 = (state_23295[(9)]);
var inst_23237 = (state_23295[(21)]);
var inst_23240 = (inst_23238 < inst_23237);
var inst_23241 = inst_23240;
var state_23295__$1 = state_23295;
if(cljs.core.truth_(inst_23241)){
var statearr_23343_23408 = state_23295__$1;
(statearr_23343_23408[(1)] = (27));

} else {
var statearr_23344_23409 = state_23295__$1;
(statearr_23344_23409[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (34))){
var state_23295__$1 = state_23295;
var statearr_23345_23410 = state_23295__$1;
(statearr_23345_23410[(2)] = null);

(statearr_23345_23410[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (17))){
var state_23295__$1 = state_23295;
var statearr_23346_23411 = state_23295__$1;
(statearr_23346_23411[(2)] = null);

(statearr_23346_23411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (3))){
var inst_23293 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23295__$1,inst_23293);
} else {
if((state_val_23296 === (12))){
var inst_23222 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23347_23412 = state_23295__$1;
(statearr_23347_23412[(2)] = inst_23222);

(statearr_23347_23412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (2))){
var state_23295__$1 = state_23295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23295__$1,(4),ch);
} else {
if((state_val_23296 === (23))){
var state_23295__$1 = state_23295;
var statearr_23348_23413 = state_23295__$1;
(statearr_23348_23413[(2)] = null);

(statearr_23348_23413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (35))){
var inst_23277 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23349_23414 = state_23295__$1;
(statearr_23349_23414[(2)] = inst_23277);

(statearr_23349_23414[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (19))){
var inst_23194 = (state_23295[(7)]);
var inst_23198 = cljs.core.chunk_first.call(null,inst_23194);
var inst_23199 = cljs.core.chunk_rest.call(null,inst_23194);
var inst_23200 = cljs.core.count.call(null,inst_23198);
var inst_23172 = inst_23199;
var inst_23173 = inst_23198;
var inst_23174 = inst_23200;
var inst_23175 = (0);
var state_23295__$1 = (function (){var statearr_23350 = state_23295;
(statearr_23350[(13)] = inst_23175);

(statearr_23350[(14)] = inst_23172);

(statearr_23350[(15)] = inst_23173);

(statearr_23350[(16)] = inst_23174);

return statearr_23350;
})();
var statearr_23351_23415 = state_23295__$1;
(statearr_23351_23415[(2)] = null);

(statearr_23351_23415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (11))){
var inst_23194 = (state_23295[(7)]);
var inst_23172 = (state_23295[(14)]);
var inst_23194__$1 = cljs.core.seq.call(null,inst_23172);
var state_23295__$1 = (function (){var statearr_23352 = state_23295;
(statearr_23352[(7)] = inst_23194__$1);

return statearr_23352;
})();
if(inst_23194__$1){
var statearr_23353_23416 = state_23295__$1;
(statearr_23353_23416[(1)] = (16));

} else {
var statearr_23354_23417 = state_23295__$1;
(statearr_23354_23417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (9))){
var inst_23224 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23355_23418 = state_23295__$1;
(statearr_23355_23418[(2)] = inst_23224);

(statearr_23355_23418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (5))){
var inst_23170 = cljs.core.deref.call(null,cs);
var inst_23171 = cljs.core.seq.call(null,inst_23170);
var inst_23172 = inst_23171;
var inst_23173 = null;
var inst_23174 = (0);
var inst_23175 = (0);
var state_23295__$1 = (function (){var statearr_23356 = state_23295;
(statearr_23356[(13)] = inst_23175);

(statearr_23356[(14)] = inst_23172);

(statearr_23356[(15)] = inst_23173);

(statearr_23356[(16)] = inst_23174);

return statearr_23356;
})();
var statearr_23357_23419 = state_23295__$1;
(statearr_23357_23419[(2)] = null);

(statearr_23357_23419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (14))){
var state_23295__$1 = state_23295;
var statearr_23358_23420 = state_23295__$1;
(statearr_23358_23420[(2)] = null);

(statearr_23358_23420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (45))){
var inst_23285 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23359_23421 = state_23295__$1;
(statearr_23359_23421[(2)] = inst_23285);

(statearr_23359_23421[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (26))){
var inst_23227 = (state_23295[(29)]);
var inst_23281 = (state_23295[(2)]);
var inst_23282 = cljs.core.seq.call(null,inst_23227);
var state_23295__$1 = (function (){var statearr_23360 = state_23295;
(statearr_23360[(31)] = inst_23281);

return statearr_23360;
})();
if(inst_23282){
var statearr_23361_23422 = state_23295__$1;
(statearr_23361_23422[(1)] = (42));

} else {
var statearr_23362_23423 = state_23295__$1;
(statearr_23362_23423[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (16))){
var inst_23194 = (state_23295[(7)]);
var inst_23196 = cljs.core.chunked_seq_QMARK_.call(null,inst_23194);
var state_23295__$1 = state_23295;
if(inst_23196){
var statearr_23363_23424 = state_23295__$1;
(statearr_23363_23424[(1)] = (19));

} else {
var statearr_23364_23425 = state_23295__$1;
(statearr_23364_23425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (38))){
var inst_23274 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23365_23426 = state_23295__$1;
(statearr_23365_23426[(2)] = inst_23274);

(statearr_23365_23426[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (30))){
var state_23295__$1 = state_23295;
var statearr_23366_23427 = state_23295__$1;
(statearr_23366_23427[(2)] = null);

(statearr_23366_23427[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (10))){
var inst_23175 = (state_23295[(13)]);
var inst_23173 = (state_23295[(15)]);
var inst_23183 = cljs.core._nth.call(null,inst_23173,inst_23175);
var inst_23184 = cljs.core.nth.call(null,inst_23183,(0),null);
var inst_23185 = cljs.core.nth.call(null,inst_23183,(1),null);
var state_23295__$1 = (function (){var statearr_23367 = state_23295;
(statearr_23367[(26)] = inst_23184);

return statearr_23367;
})();
if(cljs.core.truth_(inst_23185)){
var statearr_23368_23428 = state_23295__$1;
(statearr_23368_23428[(1)] = (13));

} else {
var statearr_23369_23429 = state_23295__$1;
(statearr_23369_23429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (18))){
var inst_23220 = (state_23295[(2)]);
var state_23295__$1 = state_23295;
var statearr_23370_23430 = state_23295__$1;
(statearr_23370_23430[(2)] = inst_23220);

(statearr_23370_23430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (42))){
var state_23295__$1 = state_23295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23295__$1,(45),dchan);
} else {
if((state_val_23296 === (37))){
var inst_23263 = (state_23295[(23)]);
var inst_23254 = (state_23295[(25)]);
var inst_23163 = (state_23295[(12)]);
var inst_23263__$1 = cljs.core.first.call(null,inst_23254);
var inst_23264 = cljs.core.async.put_BANG_.call(null,inst_23263__$1,inst_23163,done);
var state_23295__$1 = (function (){var statearr_23371 = state_23295;
(statearr_23371[(23)] = inst_23263__$1);

return statearr_23371;
})();
if(cljs.core.truth_(inst_23264)){
var statearr_23372_23431 = state_23295__$1;
(statearr_23372_23431[(1)] = (39));

} else {
var statearr_23373_23432 = state_23295__$1;
(statearr_23373_23432[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23296 === (8))){
var inst_23175 = (state_23295[(13)]);
var inst_23174 = (state_23295[(16)]);
var inst_23177 = (inst_23175 < inst_23174);
var inst_23178 = inst_23177;
var state_23295__$1 = state_23295;
if(cljs.core.truth_(inst_23178)){
var statearr_23374_23433 = state_23295__$1;
(statearr_23374_23433[(1)] = (10));

} else {
var statearr_23375_23434 = state_23295__$1;
(statearr_23375_23434[(1)] = (11));

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
});})(c__22561__auto___23380,cs,m,dchan,dctr,done))
;
return ((function (switch__22466__auto__,c__22561__auto___23380,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22467__auto__ = null;
var cljs$core$async$mult_$_state_machine__22467__auto____0 = (function (){
var statearr_23376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23376[(0)] = cljs$core$async$mult_$_state_machine__22467__auto__);

(statearr_23376[(1)] = (1));

return statearr_23376;
});
var cljs$core$async$mult_$_state_machine__22467__auto____1 = (function (state_23295){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23377){if((e23377 instanceof Object)){
var ex__22470__auto__ = e23377;
var statearr_23378_23435 = state_23295;
(statearr_23378_23435[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23436 = state_23295;
state_23295 = G__23436;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22467__auto__ = function(state_23295){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22467__auto____1.call(this,state_23295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22467__auto____0;
cljs$core$async$mult_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22467__auto____1;
return cljs$core$async$mult_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___23380,cs,m,dchan,dctr,done))
})();
var state__22563__auto__ = (function (){var statearr_23379 = f__22562__auto__.call(null);
(statearr_23379[(6)] = c__22561__auto___23380);

return statearr_23379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___23380,cs,m,dchan,dctr,done))
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
var G__23438 = arguments.length;
switch (G__23438) {
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
var len__4730__auto___23450 = arguments.length;
var i__4731__auto___23451 = (0);
while(true){
if((i__4731__auto___23451 < len__4730__auto___23450)){
args__4736__auto__.push((arguments[i__4731__auto___23451]));

var G__23452 = (i__4731__auto___23451 + (1));
i__4731__auto___23451 = G__23452;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23444){
var map__23445 = p__23444;
var map__23445__$1 = (((((!((map__23445 == null))))?(((((map__23445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23445):map__23445);
var opts = map__23445__$1;
var statearr_23447_23453 = state;
(statearr_23447_23453[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__23445,map__23445__$1,opts){
return (function (val){
var statearr_23448_23454 = state;
(statearr_23448_23454[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23445,map__23445__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_23449_23455 = state;
(statearr_23449_23455[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23440){
var G__23441 = cljs.core.first.call(null,seq23440);
var seq23440__$1 = cljs.core.next.call(null,seq23440);
var G__23442 = cljs.core.first.call(null,seq23440__$1);
var seq23440__$2 = cljs.core.next.call(null,seq23440__$1);
var G__23443 = cljs.core.first.call(null,seq23440__$2);
var seq23440__$3 = cljs.core.next.call(null,seq23440__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23441,G__23442,G__23443,seq23440__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23456 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23457){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23457 = meta23457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23458,meta23457__$1){
var self__ = this;
var _23458__$1 = this;
return (new cljs.core.async.t_cljs$core$async23456(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23457__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23458){
var self__ = this;
var _23458__$1 = this;
return self__.meta23457;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23456.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23457","meta23457",1309968281,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23456";

cljs.core.async.t_cljs$core$async23456.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23456");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23456.
 */
cljs.core.async.__GT_t_cljs$core$async23456 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23456(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23457){
return (new cljs.core.async.t_cljs$core$async23456(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23457));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23456(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22561__auto___23620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___23620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___23620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23560){
var state_val_23561 = (state_23560[(1)]);
if((state_val_23561 === (7))){
var inst_23475 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23562_23621 = state_23560__$1;
(statearr_23562_23621[(2)] = inst_23475);

(statearr_23562_23621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (20))){
var inst_23487 = (state_23560[(7)]);
var state_23560__$1 = state_23560;
var statearr_23563_23622 = state_23560__$1;
(statearr_23563_23622[(2)] = inst_23487);

(statearr_23563_23622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (27))){
var state_23560__$1 = state_23560;
var statearr_23564_23623 = state_23560__$1;
(statearr_23564_23623[(2)] = null);

(statearr_23564_23623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (1))){
var inst_23462 = (state_23560[(8)]);
var inst_23462__$1 = calc_state.call(null);
var inst_23464 = (inst_23462__$1 == null);
var inst_23465 = cljs.core.not.call(null,inst_23464);
var state_23560__$1 = (function (){var statearr_23565 = state_23560;
(statearr_23565[(8)] = inst_23462__$1);

return statearr_23565;
})();
if(inst_23465){
var statearr_23566_23624 = state_23560__$1;
(statearr_23566_23624[(1)] = (2));

} else {
var statearr_23567_23625 = state_23560__$1;
(statearr_23567_23625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (24))){
var inst_23520 = (state_23560[(9)]);
var inst_23511 = (state_23560[(10)]);
var inst_23534 = (state_23560[(11)]);
var inst_23534__$1 = inst_23511.call(null,inst_23520);
var state_23560__$1 = (function (){var statearr_23568 = state_23560;
(statearr_23568[(11)] = inst_23534__$1);

return statearr_23568;
})();
if(cljs.core.truth_(inst_23534__$1)){
var statearr_23569_23626 = state_23560__$1;
(statearr_23569_23626[(1)] = (29));

} else {
var statearr_23570_23627 = state_23560__$1;
(statearr_23570_23627[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (4))){
var inst_23478 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23478)){
var statearr_23571_23628 = state_23560__$1;
(statearr_23571_23628[(1)] = (8));

} else {
var statearr_23572_23629 = state_23560__$1;
(statearr_23572_23629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (15))){
var inst_23505 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23505)){
var statearr_23573_23630 = state_23560__$1;
(statearr_23573_23630[(1)] = (19));

} else {
var statearr_23574_23631 = state_23560__$1;
(statearr_23574_23631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (21))){
var inst_23510 = (state_23560[(12)]);
var inst_23510__$1 = (state_23560[(2)]);
var inst_23511 = cljs.core.get.call(null,inst_23510__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23512 = cljs.core.get.call(null,inst_23510__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23513 = cljs.core.get.call(null,inst_23510__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23560__$1 = (function (){var statearr_23575 = state_23560;
(statearr_23575[(13)] = inst_23512);

(statearr_23575[(10)] = inst_23511);

(statearr_23575[(12)] = inst_23510__$1);

return statearr_23575;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23560__$1,(22),inst_23513);
} else {
if((state_val_23561 === (31))){
var inst_23542 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23542)){
var statearr_23576_23632 = state_23560__$1;
(statearr_23576_23632[(1)] = (32));

} else {
var statearr_23577_23633 = state_23560__$1;
(statearr_23577_23633[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (32))){
var inst_23519 = (state_23560[(14)]);
var state_23560__$1 = state_23560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23560__$1,(35),out,inst_23519);
} else {
if((state_val_23561 === (33))){
var inst_23510 = (state_23560[(12)]);
var inst_23487 = inst_23510;
var state_23560__$1 = (function (){var statearr_23578 = state_23560;
(statearr_23578[(7)] = inst_23487);

return statearr_23578;
})();
var statearr_23579_23634 = state_23560__$1;
(statearr_23579_23634[(2)] = null);

(statearr_23579_23634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (13))){
var inst_23487 = (state_23560[(7)]);
var inst_23494 = inst_23487.cljs$lang$protocol_mask$partition0$;
var inst_23495 = (inst_23494 & (64));
var inst_23496 = inst_23487.cljs$core$ISeq$;
var inst_23497 = (cljs.core.PROTOCOL_SENTINEL === inst_23496);
var inst_23498 = ((inst_23495) || (inst_23497));
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23498)){
var statearr_23580_23635 = state_23560__$1;
(statearr_23580_23635[(1)] = (16));

} else {
var statearr_23581_23636 = state_23560__$1;
(statearr_23581_23636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (22))){
var inst_23520 = (state_23560[(9)]);
var inst_23519 = (state_23560[(14)]);
var inst_23518 = (state_23560[(2)]);
var inst_23519__$1 = cljs.core.nth.call(null,inst_23518,(0),null);
var inst_23520__$1 = cljs.core.nth.call(null,inst_23518,(1),null);
var inst_23521 = (inst_23519__$1 == null);
var inst_23522 = cljs.core._EQ_.call(null,inst_23520__$1,change);
var inst_23523 = ((inst_23521) || (inst_23522));
var state_23560__$1 = (function (){var statearr_23582 = state_23560;
(statearr_23582[(9)] = inst_23520__$1);

(statearr_23582[(14)] = inst_23519__$1);

return statearr_23582;
})();
if(cljs.core.truth_(inst_23523)){
var statearr_23583_23637 = state_23560__$1;
(statearr_23583_23637[(1)] = (23));

} else {
var statearr_23584_23638 = state_23560__$1;
(statearr_23584_23638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (36))){
var inst_23510 = (state_23560[(12)]);
var inst_23487 = inst_23510;
var state_23560__$1 = (function (){var statearr_23585 = state_23560;
(statearr_23585[(7)] = inst_23487);

return statearr_23585;
})();
var statearr_23586_23639 = state_23560__$1;
(statearr_23586_23639[(2)] = null);

(statearr_23586_23639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (29))){
var inst_23534 = (state_23560[(11)]);
var state_23560__$1 = state_23560;
var statearr_23587_23640 = state_23560__$1;
(statearr_23587_23640[(2)] = inst_23534);

(statearr_23587_23640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (6))){
var state_23560__$1 = state_23560;
var statearr_23588_23641 = state_23560__$1;
(statearr_23588_23641[(2)] = false);

(statearr_23588_23641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (28))){
var inst_23530 = (state_23560[(2)]);
var inst_23531 = calc_state.call(null);
var inst_23487 = inst_23531;
var state_23560__$1 = (function (){var statearr_23589 = state_23560;
(statearr_23589[(15)] = inst_23530);

(statearr_23589[(7)] = inst_23487);

return statearr_23589;
})();
var statearr_23590_23642 = state_23560__$1;
(statearr_23590_23642[(2)] = null);

(statearr_23590_23642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (25))){
var inst_23556 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23591_23643 = state_23560__$1;
(statearr_23591_23643[(2)] = inst_23556);

(statearr_23591_23643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (34))){
var inst_23554 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23592_23644 = state_23560__$1;
(statearr_23592_23644[(2)] = inst_23554);

(statearr_23592_23644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (17))){
var state_23560__$1 = state_23560;
var statearr_23593_23645 = state_23560__$1;
(statearr_23593_23645[(2)] = false);

(statearr_23593_23645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (3))){
var state_23560__$1 = state_23560;
var statearr_23594_23646 = state_23560__$1;
(statearr_23594_23646[(2)] = false);

(statearr_23594_23646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (12))){
var inst_23558 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23560__$1,inst_23558);
} else {
if((state_val_23561 === (2))){
var inst_23462 = (state_23560[(8)]);
var inst_23467 = inst_23462.cljs$lang$protocol_mask$partition0$;
var inst_23468 = (inst_23467 & (64));
var inst_23469 = inst_23462.cljs$core$ISeq$;
var inst_23470 = (cljs.core.PROTOCOL_SENTINEL === inst_23469);
var inst_23471 = ((inst_23468) || (inst_23470));
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23471)){
var statearr_23595_23647 = state_23560__$1;
(statearr_23595_23647[(1)] = (5));

} else {
var statearr_23596_23648 = state_23560__$1;
(statearr_23596_23648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (23))){
var inst_23519 = (state_23560[(14)]);
var inst_23525 = (inst_23519 == null);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23525)){
var statearr_23597_23649 = state_23560__$1;
(statearr_23597_23649[(1)] = (26));

} else {
var statearr_23598_23650 = state_23560__$1;
(statearr_23598_23650[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (35))){
var inst_23545 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23545)){
var statearr_23599_23651 = state_23560__$1;
(statearr_23599_23651[(1)] = (36));

} else {
var statearr_23600_23652 = state_23560__$1;
(statearr_23600_23652[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (19))){
var inst_23487 = (state_23560[(7)]);
var inst_23507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23487);
var state_23560__$1 = state_23560;
var statearr_23601_23653 = state_23560__$1;
(statearr_23601_23653[(2)] = inst_23507);

(statearr_23601_23653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (11))){
var inst_23487 = (state_23560[(7)]);
var inst_23491 = (inst_23487 == null);
var inst_23492 = cljs.core.not.call(null,inst_23491);
var state_23560__$1 = state_23560;
if(inst_23492){
var statearr_23602_23654 = state_23560__$1;
(statearr_23602_23654[(1)] = (13));

} else {
var statearr_23603_23655 = state_23560__$1;
(statearr_23603_23655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (9))){
var inst_23462 = (state_23560[(8)]);
var state_23560__$1 = state_23560;
var statearr_23604_23656 = state_23560__$1;
(statearr_23604_23656[(2)] = inst_23462);

(statearr_23604_23656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (5))){
var state_23560__$1 = state_23560;
var statearr_23605_23657 = state_23560__$1;
(statearr_23605_23657[(2)] = true);

(statearr_23605_23657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (14))){
var state_23560__$1 = state_23560;
var statearr_23606_23658 = state_23560__$1;
(statearr_23606_23658[(2)] = false);

(statearr_23606_23658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (26))){
var inst_23520 = (state_23560[(9)]);
var inst_23527 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23520);
var state_23560__$1 = state_23560;
var statearr_23607_23659 = state_23560__$1;
(statearr_23607_23659[(2)] = inst_23527);

(statearr_23607_23659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (16))){
var state_23560__$1 = state_23560;
var statearr_23608_23660 = state_23560__$1;
(statearr_23608_23660[(2)] = true);

(statearr_23608_23660[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (38))){
var inst_23550 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23609_23661 = state_23560__$1;
(statearr_23609_23661[(2)] = inst_23550);

(statearr_23609_23661[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (30))){
var inst_23520 = (state_23560[(9)]);
var inst_23512 = (state_23560[(13)]);
var inst_23511 = (state_23560[(10)]);
var inst_23537 = cljs.core.empty_QMARK_.call(null,inst_23511);
var inst_23538 = inst_23512.call(null,inst_23520);
var inst_23539 = cljs.core.not.call(null,inst_23538);
var inst_23540 = ((inst_23537) && (inst_23539));
var state_23560__$1 = state_23560;
var statearr_23610_23662 = state_23560__$1;
(statearr_23610_23662[(2)] = inst_23540);

(statearr_23610_23662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (10))){
var inst_23462 = (state_23560[(8)]);
var inst_23483 = (state_23560[(2)]);
var inst_23484 = cljs.core.get.call(null,inst_23483,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23485 = cljs.core.get.call(null,inst_23483,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23486 = cljs.core.get.call(null,inst_23483,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23487 = inst_23462;
var state_23560__$1 = (function (){var statearr_23611 = state_23560;
(statearr_23611[(16)] = inst_23486);

(statearr_23611[(17)] = inst_23485);

(statearr_23611[(7)] = inst_23487);

(statearr_23611[(18)] = inst_23484);

return statearr_23611;
})();
var statearr_23612_23663 = state_23560__$1;
(statearr_23612_23663[(2)] = null);

(statearr_23612_23663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (18))){
var inst_23502 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23613_23664 = state_23560__$1;
(statearr_23613_23664[(2)] = inst_23502);

(statearr_23613_23664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (37))){
var state_23560__$1 = state_23560;
var statearr_23614_23665 = state_23560__$1;
(statearr_23614_23665[(2)] = null);

(statearr_23614_23665[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (8))){
var inst_23462 = (state_23560[(8)]);
var inst_23480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23462);
var state_23560__$1 = state_23560;
var statearr_23615_23666 = state_23560__$1;
(statearr_23615_23666[(2)] = inst_23480);

(statearr_23615_23666[(1)] = (10));


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
});})(c__22561__auto___23620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22466__auto__,c__22561__auto___23620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22467__auto__ = null;
var cljs$core$async$mix_$_state_machine__22467__auto____0 = (function (){
var statearr_23616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23616[(0)] = cljs$core$async$mix_$_state_machine__22467__auto__);

(statearr_23616[(1)] = (1));

return statearr_23616;
});
var cljs$core$async$mix_$_state_machine__22467__auto____1 = (function (state_23560){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23617){if((e23617 instanceof Object)){
var ex__22470__auto__ = e23617;
var statearr_23618_23667 = state_23560;
(statearr_23618_23667[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23668 = state_23560;
state_23560 = G__23668;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22467__auto__ = function(state_23560){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22467__auto____1.call(this,state_23560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22467__auto____0;
cljs$core$async$mix_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22467__auto____1;
return cljs$core$async$mix_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___23620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22563__auto__ = (function (){var statearr_23619 = f__22562__auto__.call(null);
(statearr_23619[(6)] = c__22561__auto___23620);

return statearr_23619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___23620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__23670 = arguments.length;
switch (G__23670) {
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
var G__23674 = arguments.length;
switch (G__23674) {
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
return (function (p1__23672_SHARP_){
if(cljs.core.truth_(p1__23672_SHARP_.call(null,topic))){
return p1__23672_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23672_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23675 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23676){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23676 = meta23676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23677,meta23676__$1){
var self__ = this;
var _23677__$1 = this;
return (new cljs.core.async.t_cljs$core$async23675(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23676__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23677){
var self__ = this;
var _23677__$1 = this;
return self__.meta23676;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23675.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23675.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23676","meta23676",1194144035,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23675";

cljs.core.async.t_cljs$core$async23675.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23675");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23675.
 */
cljs.core.async.__GT_t_cljs$core$async23675 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23675(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23676){
return (new cljs.core.async.t_cljs$core$async23675(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23676));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23675(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22561__auto___23795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___23795,mults,ensure_mult,p){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___23795,mults,ensure_mult,p){
return (function (state_23749){
var state_val_23750 = (state_23749[(1)]);
if((state_val_23750 === (7))){
var inst_23745 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
var statearr_23751_23796 = state_23749__$1;
(statearr_23751_23796[(2)] = inst_23745);

(statearr_23751_23796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (20))){
var state_23749__$1 = state_23749;
var statearr_23752_23797 = state_23749__$1;
(statearr_23752_23797[(2)] = null);

(statearr_23752_23797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (1))){
var state_23749__$1 = state_23749;
var statearr_23753_23798 = state_23749__$1;
(statearr_23753_23798[(2)] = null);

(statearr_23753_23798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (24))){
var inst_23728 = (state_23749[(7)]);
var inst_23737 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23728);
var state_23749__$1 = state_23749;
var statearr_23754_23799 = state_23749__$1;
(statearr_23754_23799[(2)] = inst_23737);

(statearr_23754_23799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (4))){
var inst_23680 = (state_23749[(8)]);
var inst_23680__$1 = (state_23749[(2)]);
var inst_23681 = (inst_23680__$1 == null);
var state_23749__$1 = (function (){var statearr_23755 = state_23749;
(statearr_23755[(8)] = inst_23680__$1);

return statearr_23755;
})();
if(cljs.core.truth_(inst_23681)){
var statearr_23756_23800 = state_23749__$1;
(statearr_23756_23800[(1)] = (5));

} else {
var statearr_23757_23801 = state_23749__$1;
(statearr_23757_23801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (15))){
var inst_23722 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
var statearr_23758_23802 = state_23749__$1;
(statearr_23758_23802[(2)] = inst_23722);

(statearr_23758_23802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (21))){
var inst_23742 = (state_23749[(2)]);
var state_23749__$1 = (function (){var statearr_23759 = state_23749;
(statearr_23759[(9)] = inst_23742);

return statearr_23759;
})();
var statearr_23760_23803 = state_23749__$1;
(statearr_23760_23803[(2)] = null);

(statearr_23760_23803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (13))){
var inst_23704 = (state_23749[(10)]);
var inst_23706 = cljs.core.chunked_seq_QMARK_.call(null,inst_23704);
var state_23749__$1 = state_23749;
if(inst_23706){
var statearr_23761_23804 = state_23749__$1;
(statearr_23761_23804[(1)] = (16));

} else {
var statearr_23762_23805 = state_23749__$1;
(statearr_23762_23805[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (22))){
var inst_23734 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
if(cljs.core.truth_(inst_23734)){
var statearr_23763_23806 = state_23749__$1;
(statearr_23763_23806[(1)] = (23));

} else {
var statearr_23764_23807 = state_23749__$1;
(statearr_23764_23807[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (6))){
var inst_23730 = (state_23749[(11)]);
var inst_23680 = (state_23749[(8)]);
var inst_23728 = (state_23749[(7)]);
var inst_23728__$1 = topic_fn.call(null,inst_23680);
var inst_23729 = cljs.core.deref.call(null,mults);
var inst_23730__$1 = cljs.core.get.call(null,inst_23729,inst_23728__$1);
var state_23749__$1 = (function (){var statearr_23765 = state_23749;
(statearr_23765[(11)] = inst_23730__$1);

(statearr_23765[(7)] = inst_23728__$1);

return statearr_23765;
})();
if(cljs.core.truth_(inst_23730__$1)){
var statearr_23766_23808 = state_23749__$1;
(statearr_23766_23808[(1)] = (19));

} else {
var statearr_23767_23809 = state_23749__$1;
(statearr_23767_23809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (25))){
var inst_23739 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
var statearr_23768_23810 = state_23749__$1;
(statearr_23768_23810[(2)] = inst_23739);

(statearr_23768_23810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (17))){
var inst_23704 = (state_23749[(10)]);
var inst_23713 = cljs.core.first.call(null,inst_23704);
var inst_23714 = cljs.core.async.muxch_STAR_.call(null,inst_23713);
var inst_23715 = cljs.core.async.close_BANG_.call(null,inst_23714);
var inst_23716 = cljs.core.next.call(null,inst_23704);
var inst_23690 = inst_23716;
var inst_23691 = null;
var inst_23692 = (0);
var inst_23693 = (0);
var state_23749__$1 = (function (){var statearr_23769 = state_23749;
(statearr_23769[(12)] = inst_23691);

(statearr_23769[(13)] = inst_23690);

(statearr_23769[(14)] = inst_23715);

(statearr_23769[(15)] = inst_23693);

(statearr_23769[(16)] = inst_23692);

return statearr_23769;
})();
var statearr_23770_23811 = state_23749__$1;
(statearr_23770_23811[(2)] = null);

(statearr_23770_23811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (3))){
var inst_23747 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23749__$1,inst_23747);
} else {
if((state_val_23750 === (12))){
var inst_23724 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
var statearr_23771_23812 = state_23749__$1;
(statearr_23771_23812[(2)] = inst_23724);

(statearr_23771_23812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (2))){
var state_23749__$1 = state_23749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23749__$1,(4),ch);
} else {
if((state_val_23750 === (23))){
var state_23749__$1 = state_23749;
var statearr_23772_23813 = state_23749__$1;
(statearr_23772_23813[(2)] = null);

(statearr_23772_23813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (19))){
var inst_23730 = (state_23749[(11)]);
var inst_23680 = (state_23749[(8)]);
var inst_23732 = cljs.core.async.muxch_STAR_.call(null,inst_23730);
var state_23749__$1 = state_23749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23749__$1,(22),inst_23732,inst_23680);
} else {
if((state_val_23750 === (11))){
var inst_23704 = (state_23749[(10)]);
var inst_23690 = (state_23749[(13)]);
var inst_23704__$1 = cljs.core.seq.call(null,inst_23690);
var state_23749__$1 = (function (){var statearr_23773 = state_23749;
(statearr_23773[(10)] = inst_23704__$1);

return statearr_23773;
})();
if(inst_23704__$1){
var statearr_23774_23814 = state_23749__$1;
(statearr_23774_23814[(1)] = (13));

} else {
var statearr_23775_23815 = state_23749__$1;
(statearr_23775_23815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (9))){
var inst_23726 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
var statearr_23776_23816 = state_23749__$1;
(statearr_23776_23816[(2)] = inst_23726);

(statearr_23776_23816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (5))){
var inst_23687 = cljs.core.deref.call(null,mults);
var inst_23688 = cljs.core.vals.call(null,inst_23687);
var inst_23689 = cljs.core.seq.call(null,inst_23688);
var inst_23690 = inst_23689;
var inst_23691 = null;
var inst_23692 = (0);
var inst_23693 = (0);
var state_23749__$1 = (function (){var statearr_23777 = state_23749;
(statearr_23777[(12)] = inst_23691);

(statearr_23777[(13)] = inst_23690);

(statearr_23777[(15)] = inst_23693);

(statearr_23777[(16)] = inst_23692);

return statearr_23777;
})();
var statearr_23778_23817 = state_23749__$1;
(statearr_23778_23817[(2)] = null);

(statearr_23778_23817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (14))){
var state_23749__$1 = state_23749;
var statearr_23782_23818 = state_23749__$1;
(statearr_23782_23818[(2)] = null);

(statearr_23782_23818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (16))){
var inst_23704 = (state_23749[(10)]);
var inst_23708 = cljs.core.chunk_first.call(null,inst_23704);
var inst_23709 = cljs.core.chunk_rest.call(null,inst_23704);
var inst_23710 = cljs.core.count.call(null,inst_23708);
var inst_23690 = inst_23709;
var inst_23691 = inst_23708;
var inst_23692 = inst_23710;
var inst_23693 = (0);
var state_23749__$1 = (function (){var statearr_23783 = state_23749;
(statearr_23783[(12)] = inst_23691);

(statearr_23783[(13)] = inst_23690);

(statearr_23783[(15)] = inst_23693);

(statearr_23783[(16)] = inst_23692);

return statearr_23783;
})();
var statearr_23784_23819 = state_23749__$1;
(statearr_23784_23819[(2)] = null);

(statearr_23784_23819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (10))){
var inst_23691 = (state_23749[(12)]);
var inst_23690 = (state_23749[(13)]);
var inst_23693 = (state_23749[(15)]);
var inst_23692 = (state_23749[(16)]);
var inst_23698 = cljs.core._nth.call(null,inst_23691,inst_23693);
var inst_23699 = cljs.core.async.muxch_STAR_.call(null,inst_23698);
var inst_23700 = cljs.core.async.close_BANG_.call(null,inst_23699);
var inst_23701 = (inst_23693 + (1));
var tmp23779 = inst_23691;
var tmp23780 = inst_23690;
var tmp23781 = inst_23692;
var inst_23690__$1 = tmp23780;
var inst_23691__$1 = tmp23779;
var inst_23692__$1 = tmp23781;
var inst_23693__$1 = inst_23701;
var state_23749__$1 = (function (){var statearr_23785 = state_23749;
(statearr_23785[(12)] = inst_23691__$1);

(statearr_23785[(17)] = inst_23700);

(statearr_23785[(13)] = inst_23690__$1);

(statearr_23785[(15)] = inst_23693__$1);

(statearr_23785[(16)] = inst_23692__$1);

return statearr_23785;
})();
var statearr_23786_23820 = state_23749__$1;
(statearr_23786_23820[(2)] = null);

(statearr_23786_23820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (18))){
var inst_23719 = (state_23749[(2)]);
var state_23749__$1 = state_23749;
var statearr_23787_23821 = state_23749__$1;
(statearr_23787_23821[(2)] = inst_23719);

(statearr_23787_23821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23750 === (8))){
var inst_23693 = (state_23749[(15)]);
var inst_23692 = (state_23749[(16)]);
var inst_23695 = (inst_23693 < inst_23692);
var inst_23696 = inst_23695;
var state_23749__$1 = state_23749;
if(cljs.core.truth_(inst_23696)){
var statearr_23788_23822 = state_23749__$1;
(statearr_23788_23822[(1)] = (10));

} else {
var statearr_23789_23823 = state_23749__$1;
(statearr_23789_23823[(1)] = (11));

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
});})(c__22561__auto___23795,mults,ensure_mult,p))
;
return ((function (switch__22466__auto__,c__22561__auto___23795,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_23790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23790[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_23790[(1)] = (1));

return statearr_23790;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_23749){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23791){if((e23791 instanceof Object)){
var ex__22470__auto__ = e23791;
var statearr_23792_23824 = state_23749;
(statearr_23792_23824[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23825 = state_23749;
state_23749 = G__23825;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_23749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_23749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___23795,mults,ensure_mult,p))
})();
var state__22563__auto__ = (function (){var statearr_23793 = f__22562__auto__.call(null);
(statearr_23793[(6)] = c__22561__auto___23795);

return statearr_23793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___23795,mults,ensure_mult,p))
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
var G__23827 = arguments.length;
switch (G__23827) {
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
var G__23830 = arguments.length;
switch (G__23830) {
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
var G__23833 = arguments.length;
switch (G__23833) {
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
var c__22561__auto___23900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___23900,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___23900,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23872){
var state_val_23873 = (state_23872[(1)]);
if((state_val_23873 === (7))){
var state_23872__$1 = state_23872;
var statearr_23874_23901 = state_23872__$1;
(statearr_23874_23901[(2)] = null);

(statearr_23874_23901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (1))){
var state_23872__$1 = state_23872;
var statearr_23875_23902 = state_23872__$1;
(statearr_23875_23902[(2)] = null);

(statearr_23875_23902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (4))){
var inst_23836 = (state_23872[(7)]);
var inst_23838 = (inst_23836 < cnt);
var state_23872__$1 = state_23872;
if(cljs.core.truth_(inst_23838)){
var statearr_23876_23903 = state_23872__$1;
(statearr_23876_23903[(1)] = (6));

} else {
var statearr_23877_23904 = state_23872__$1;
(statearr_23877_23904[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (15))){
var inst_23868 = (state_23872[(2)]);
var state_23872__$1 = state_23872;
var statearr_23878_23905 = state_23872__$1;
(statearr_23878_23905[(2)] = inst_23868);

(statearr_23878_23905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (13))){
var inst_23861 = cljs.core.async.close_BANG_.call(null,out);
var state_23872__$1 = state_23872;
var statearr_23879_23906 = state_23872__$1;
(statearr_23879_23906[(2)] = inst_23861);

(statearr_23879_23906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (6))){
var state_23872__$1 = state_23872;
var statearr_23880_23907 = state_23872__$1;
(statearr_23880_23907[(2)] = null);

(statearr_23880_23907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (3))){
var inst_23870 = (state_23872[(2)]);
var state_23872__$1 = state_23872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23872__$1,inst_23870);
} else {
if((state_val_23873 === (12))){
var inst_23858 = (state_23872[(8)]);
var inst_23858__$1 = (state_23872[(2)]);
var inst_23859 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23858__$1);
var state_23872__$1 = (function (){var statearr_23881 = state_23872;
(statearr_23881[(8)] = inst_23858__$1);

return statearr_23881;
})();
if(cljs.core.truth_(inst_23859)){
var statearr_23882_23908 = state_23872__$1;
(statearr_23882_23908[(1)] = (13));

} else {
var statearr_23883_23909 = state_23872__$1;
(statearr_23883_23909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (2))){
var inst_23835 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23836 = (0);
var state_23872__$1 = (function (){var statearr_23884 = state_23872;
(statearr_23884[(7)] = inst_23836);

(statearr_23884[(9)] = inst_23835);

return statearr_23884;
})();
var statearr_23885_23910 = state_23872__$1;
(statearr_23885_23910[(2)] = null);

(statearr_23885_23910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (11))){
var inst_23836 = (state_23872[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23872,(10),Object,null,(9));
var inst_23845 = chs__$1.call(null,inst_23836);
var inst_23846 = done.call(null,inst_23836);
var inst_23847 = cljs.core.async.take_BANG_.call(null,inst_23845,inst_23846);
var state_23872__$1 = state_23872;
var statearr_23886_23911 = state_23872__$1;
(statearr_23886_23911[(2)] = inst_23847);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (9))){
var inst_23836 = (state_23872[(7)]);
var inst_23849 = (state_23872[(2)]);
var inst_23850 = (inst_23836 + (1));
var inst_23836__$1 = inst_23850;
var state_23872__$1 = (function (){var statearr_23887 = state_23872;
(statearr_23887[(7)] = inst_23836__$1);

(statearr_23887[(10)] = inst_23849);

return statearr_23887;
})();
var statearr_23888_23912 = state_23872__$1;
(statearr_23888_23912[(2)] = null);

(statearr_23888_23912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (5))){
var inst_23856 = (state_23872[(2)]);
var state_23872__$1 = (function (){var statearr_23889 = state_23872;
(statearr_23889[(11)] = inst_23856);

return statearr_23889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23872__$1,(12),dchan);
} else {
if((state_val_23873 === (14))){
var inst_23858 = (state_23872[(8)]);
var inst_23863 = cljs.core.apply.call(null,f,inst_23858);
var state_23872__$1 = state_23872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23872__$1,(16),out,inst_23863);
} else {
if((state_val_23873 === (16))){
var inst_23865 = (state_23872[(2)]);
var state_23872__$1 = (function (){var statearr_23890 = state_23872;
(statearr_23890[(12)] = inst_23865);

return statearr_23890;
})();
var statearr_23891_23913 = state_23872__$1;
(statearr_23891_23913[(2)] = null);

(statearr_23891_23913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (10))){
var inst_23840 = (state_23872[(2)]);
var inst_23841 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23872__$1 = (function (){var statearr_23892 = state_23872;
(statearr_23892[(13)] = inst_23840);

return statearr_23892;
})();
var statearr_23893_23914 = state_23872__$1;
(statearr_23893_23914[(2)] = inst_23841);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (8))){
var inst_23854 = (state_23872[(2)]);
var state_23872__$1 = state_23872;
var statearr_23894_23915 = state_23872__$1;
(statearr_23894_23915[(2)] = inst_23854);

(statearr_23894_23915[(1)] = (5));


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
});})(c__22561__auto___23900,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22466__auto__,c__22561__auto___23900,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_23895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23895[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_23895[(1)] = (1));

return statearr_23895;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_23872){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23896){if((e23896 instanceof Object)){
var ex__22470__auto__ = e23896;
var statearr_23897_23916 = state_23872;
(statearr_23897_23916[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23917 = state_23872;
state_23872 = G__23917;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_23872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_23872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___23900,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22563__auto__ = (function (){var statearr_23898 = f__22562__auto__.call(null);
(statearr_23898[(6)] = c__22561__auto___23900);

return statearr_23898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___23900,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23920 = arguments.length;
switch (G__23920) {
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
var c__22561__auto___23974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___23974,out){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___23974,out){
return (function (state_23952){
var state_val_23953 = (state_23952[(1)]);
if((state_val_23953 === (7))){
var inst_23931 = (state_23952[(7)]);
var inst_23932 = (state_23952[(8)]);
var inst_23931__$1 = (state_23952[(2)]);
var inst_23932__$1 = cljs.core.nth.call(null,inst_23931__$1,(0),null);
var inst_23933 = cljs.core.nth.call(null,inst_23931__$1,(1),null);
var inst_23934 = (inst_23932__$1 == null);
var state_23952__$1 = (function (){var statearr_23954 = state_23952;
(statearr_23954[(9)] = inst_23933);

(statearr_23954[(7)] = inst_23931__$1);

(statearr_23954[(8)] = inst_23932__$1);

return statearr_23954;
})();
if(cljs.core.truth_(inst_23934)){
var statearr_23955_23975 = state_23952__$1;
(statearr_23955_23975[(1)] = (8));

} else {
var statearr_23956_23976 = state_23952__$1;
(statearr_23956_23976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23953 === (1))){
var inst_23921 = cljs.core.vec.call(null,chs);
var inst_23922 = inst_23921;
var state_23952__$1 = (function (){var statearr_23957 = state_23952;
(statearr_23957[(10)] = inst_23922);

return statearr_23957;
})();
var statearr_23958_23977 = state_23952__$1;
(statearr_23958_23977[(2)] = null);

(statearr_23958_23977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23953 === (4))){
var inst_23922 = (state_23952[(10)]);
var state_23952__$1 = state_23952;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23952__$1,(7),inst_23922);
} else {
if((state_val_23953 === (6))){
var inst_23948 = (state_23952[(2)]);
var state_23952__$1 = state_23952;
var statearr_23959_23978 = state_23952__$1;
(statearr_23959_23978[(2)] = inst_23948);

(statearr_23959_23978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23953 === (3))){
var inst_23950 = (state_23952[(2)]);
var state_23952__$1 = state_23952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23952__$1,inst_23950);
} else {
if((state_val_23953 === (2))){
var inst_23922 = (state_23952[(10)]);
var inst_23924 = cljs.core.count.call(null,inst_23922);
var inst_23925 = (inst_23924 > (0));
var state_23952__$1 = state_23952;
if(cljs.core.truth_(inst_23925)){
var statearr_23961_23979 = state_23952__$1;
(statearr_23961_23979[(1)] = (4));

} else {
var statearr_23962_23980 = state_23952__$1;
(statearr_23962_23980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23953 === (11))){
var inst_23922 = (state_23952[(10)]);
var inst_23941 = (state_23952[(2)]);
var tmp23960 = inst_23922;
var inst_23922__$1 = tmp23960;
var state_23952__$1 = (function (){var statearr_23963 = state_23952;
(statearr_23963[(11)] = inst_23941);

(statearr_23963[(10)] = inst_23922__$1);

return statearr_23963;
})();
var statearr_23964_23981 = state_23952__$1;
(statearr_23964_23981[(2)] = null);

(statearr_23964_23981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23953 === (9))){
var inst_23932 = (state_23952[(8)]);
var state_23952__$1 = state_23952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23952__$1,(11),out,inst_23932);
} else {
if((state_val_23953 === (5))){
var inst_23946 = cljs.core.async.close_BANG_.call(null,out);
var state_23952__$1 = state_23952;
var statearr_23965_23982 = state_23952__$1;
(statearr_23965_23982[(2)] = inst_23946);

(statearr_23965_23982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23953 === (10))){
var inst_23944 = (state_23952[(2)]);
var state_23952__$1 = state_23952;
var statearr_23966_23983 = state_23952__$1;
(statearr_23966_23983[(2)] = inst_23944);

(statearr_23966_23983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23953 === (8))){
var inst_23933 = (state_23952[(9)]);
var inst_23931 = (state_23952[(7)]);
var inst_23932 = (state_23952[(8)]);
var inst_23922 = (state_23952[(10)]);
var inst_23936 = (function (){var cs = inst_23922;
var vec__23927 = inst_23931;
var v = inst_23932;
var c = inst_23933;
return ((function (cs,vec__23927,v,c,inst_23933,inst_23931,inst_23932,inst_23922,state_val_23953,c__22561__auto___23974,out){
return (function (p1__23918_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23918_SHARP_);
});
;})(cs,vec__23927,v,c,inst_23933,inst_23931,inst_23932,inst_23922,state_val_23953,c__22561__auto___23974,out))
})();
var inst_23937 = cljs.core.filterv.call(null,inst_23936,inst_23922);
var inst_23922__$1 = inst_23937;
var state_23952__$1 = (function (){var statearr_23967 = state_23952;
(statearr_23967[(10)] = inst_23922__$1);

return statearr_23967;
})();
var statearr_23968_23984 = state_23952__$1;
(statearr_23968_23984[(2)] = null);

(statearr_23968_23984[(1)] = (2));


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
});})(c__22561__auto___23974,out))
;
return ((function (switch__22466__auto__,c__22561__auto___23974,out){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_23969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23969[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_23969[(1)] = (1));

return statearr_23969;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_23952){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_23952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e23970){if((e23970 instanceof Object)){
var ex__22470__auto__ = e23970;
var statearr_23971_23985 = state_23952;
(statearr_23971_23985[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23986 = state_23952;
state_23952 = G__23986;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_23952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_23952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___23974,out))
})();
var state__22563__auto__ = (function (){var statearr_23972 = f__22562__auto__.call(null);
(statearr_23972[(6)] = c__22561__auto___23974);

return statearr_23972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___23974,out))
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
var G__23988 = arguments.length;
switch (G__23988) {
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
var c__22561__auto___24033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___24033,out){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___24033,out){
return (function (state_24012){
var state_val_24013 = (state_24012[(1)]);
if((state_val_24013 === (7))){
var inst_23994 = (state_24012[(7)]);
var inst_23994__$1 = (state_24012[(2)]);
var inst_23995 = (inst_23994__$1 == null);
var inst_23996 = cljs.core.not.call(null,inst_23995);
var state_24012__$1 = (function (){var statearr_24014 = state_24012;
(statearr_24014[(7)] = inst_23994__$1);

return statearr_24014;
})();
if(inst_23996){
var statearr_24015_24034 = state_24012__$1;
(statearr_24015_24034[(1)] = (8));

} else {
var statearr_24016_24035 = state_24012__$1;
(statearr_24016_24035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (1))){
var inst_23989 = (0);
var state_24012__$1 = (function (){var statearr_24017 = state_24012;
(statearr_24017[(8)] = inst_23989);

return statearr_24017;
})();
var statearr_24018_24036 = state_24012__$1;
(statearr_24018_24036[(2)] = null);

(statearr_24018_24036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (4))){
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24012__$1,(7),ch);
} else {
if((state_val_24013 === (6))){
var inst_24007 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24019_24037 = state_24012__$1;
(statearr_24019_24037[(2)] = inst_24007);

(statearr_24019_24037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (3))){
var inst_24009 = (state_24012[(2)]);
var inst_24010 = cljs.core.async.close_BANG_.call(null,out);
var state_24012__$1 = (function (){var statearr_24020 = state_24012;
(statearr_24020[(9)] = inst_24009);

return statearr_24020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24012__$1,inst_24010);
} else {
if((state_val_24013 === (2))){
var inst_23989 = (state_24012[(8)]);
var inst_23991 = (inst_23989 < n);
var state_24012__$1 = state_24012;
if(cljs.core.truth_(inst_23991)){
var statearr_24021_24038 = state_24012__$1;
(statearr_24021_24038[(1)] = (4));

} else {
var statearr_24022_24039 = state_24012__$1;
(statearr_24022_24039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (11))){
var inst_23989 = (state_24012[(8)]);
var inst_23999 = (state_24012[(2)]);
var inst_24000 = (inst_23989 + (1));
var inst_23989__$1 = inst_24000;
var state_24012__$1 = (function (){var statearr_24023 = state_24012;
(statearr_24023[(8)] = inst_23989__$1);

(statearr_24023[(10)] = inst_23999);

return statearr_24023;
})();
var statearr_24024_24040 = state_24012__$1;
(statearr_24024_24040[(2)] = null);

(statearr_24024_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (9))){
var state_24012__$1 = state_24012;
var statearr_24025_24041 = state_24012__$1;
(statearr_24025_24041[(2)] = null);

(statearr_24025_24041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (5))){
var state_24012__$1 = state_24012;
var statearr_24026_24042 = state_24012__$1;
(statearr_24026_24042[(2)] = null);

(statearr_24026_24042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (10))){
var inst_24004 = (state_24012[(2)]);
var state_24012__$1 = state_24012;
var statearr_24027_24043 = state_24012__$1;
(statearr_24027_24043[(2)] = inst_24004);

(statearr_24027_24043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24013 === (8))){
var inst_23994 = (state_24012[(7)]);
var state_24012__$1 = state_24012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24012__$1,(11),out,inst_23994);
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
});})(c__22561__auto___24033,out))
;
return ((function (switch__22466__auto__,c__22561__auto___24033,out){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_24028 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24028[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_24028[(1)] = (1));

return statearr_24028;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_24012){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_24012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e24029){if((e24029 instanceof Object)){
var ex__22470__auto__ = e24029;
var statearr_24030_24044 = state_24012;
(statearr_24030_24044[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24045 = state_24012;
state_24012 = G__24045;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_24012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_24012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___24033,out))
})();
var state__22563__auto__ = (function (){var statearr_24031 = f__22562__auto__.call(null);
(statearr_24031[(6)] = c__22561__auto___24033);

return statearr_24031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___24033,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24047 = (function (f,ch,meta24048){
this.f = f;
this.ch = ch;
this.meta24048 = meta24048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24049,meta24048__$1){
var self__ = this;
var _24049__$1 = this;
return (new cljs.core.async.t_cljs$core$async24047(self__.f,self__.ch,meta24048__$1));
});

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24049){
var self__ = this;
var _24049__$1 = this;
return self__.meta24048;
});

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24050 = (function (f,ch,meta24048,_,fn1,meta24051){
this.f = f;
this.ch = ch;
this.meta24048 = meta24048;
this._ = _;
this.fn1 = fn1;
this.meta24051 = meta24051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24052,meta24051__$1){
var self__ = this;
var _24052__$1 = this;
return (new cljs.core.async.t_cljs$core$async24050(self__.f,self__.ch,self__.meta24048,self__._,self__.fn1,meta24051__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24052){
var self__ = this;
var _24052__$1 = this;
return self__.meta24051;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24046_SHARP_){
return f1.call(null,(((p1__24046_SHARP_ == null))?null:self__.f.call(null,p1__24046_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24050.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24048","meta24048",-410203263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24047","cljs.core.async/t_cljs$core$async24047",1635044098,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24051","meta24051",413535252,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24050";

cljs.core.async.t_cljs$core$async24050.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24050");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24050.
 */
cljs.core.async.__GT_t_cljs$core$async24050 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24050(f__$1,ch__$1,meta24048__$1,___$2,fn1__$1,meta24051){
return (new cljs.core.async.t_cljs$core$async24050(f__$1,ch__$1,meta24048__$1,___$2,fn1__$1,meta24051));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24050(self__.f,self__.ch,self__.meta24048,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24048","meta24048",-410203263,null)], null);
});

cljs.core.async.t_cljs$core$async24047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24047";

cljs.core.async.t_cljs$core$async24047.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24047");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24047.
 */
cljs.core.async.__GT_t_cljs$core$async24047 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24047(f__$1,ch__$1,meta24048){
return (new cljs.core.async.t_cljs$core$async24047(f__$1,ch__$1,meta24048));
});

}

return (new cljs.core.async.t_cljs$core$async24047(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24053 = (function (f,ch,meta24054){
this.f = f;
this.ch = ch;
this.meta24054 = meta24054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24055,meta24054__$1){
var self__ = this;
var _24055__$1 = this;
return (new cljs.core.async.t_cljs$core$async24053(self__.f,self__.ch,meta24054__$1));
});

cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24055){
var self__ = this;
var _24055__$1 = this;
return self__.meta24054;
});

cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24053.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24054","meta24054",-327234333,null)], null);
});

cljs.core.async.t_cljs$core$async24053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24053";

cljs.core.async.t_cljs$core$async24053.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24053");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24053.
 */
cljs.core.async.__GT_t_cljs$core$async24053 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24053(f__$1,ch__$1,meta24054){
return (new cljs.core.async.t_cljs$core$async24053(f__$1,ch__$1,meta24054));
});

}

return (new cljs.core.async.t_cljs$core$async24053(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24056 = (function (p,ch,meta24057){
this.p = p;
this.ch = ch;
this.meta24057 = meta24057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24058,meta24057__$1){
var self__ = this;
var _24058__$1 = this;
return (new cljs.core.async.t_cljs$core$async24056(self__.p,self__.ch,meta24057__$1));
});

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24058){
var self__ = this;
var _24058__$1 = this;
return self__.meta24057;
});

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24057","meta24057",-622861268,null)], null);
});

cljs.core.async.t_cljs$core$async24056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24056";

cljs.core.async.t_cljs$core$async24056.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24056");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24056.
 */
cljs.core.async.__GT_t_cljs$core$async24056 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24056(p__$1,ch__$1,meta24057){
return (new cljs.core.async.t_cljs$core$async24056(p__$1,ch__$1,meta24057));
});

}

return (new cljs.core.async.t_cljs$core$async24056(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24060 = arguments.length;
switch (G__24060) {
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
var c__22561__auto___24100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___24100,out){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___24100,out){
return (function (state_24081){
var state_val_24082 = (state_24081[(1)]);
if((state_val_24082 === (7))){
var inst_24077 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24083_24101 = state_24081__$1;
(statearr_24083_24101[(2)] = inst_24077);

(statearr_24083_24101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (1))){
var state_24081__$1 = state_24081;
var statearr_24084_24102 = state_24081__$1;
(statearr_24084_24102[(2)] = null);

(statearr_24084_24102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (4))){
var inst_24063 = (state_24081[(7)]);
var inst_24063__$1 = (state_24081[(2)]);
var inst_24064 = (inst_24063__$1 == null);
var state_24081__$1 = (function (){var statearr_24085 = state_24081;
(statearr_24085[(7)] = inst_24063__$1);

return statearr_24085;
})();
if(cljs.core.truth_(inst_24064)){
var statearr_24086_24103 = state_24081__$1;
(statearr_24086_24103[(1)] = (5));

} else {
var statearr_24087_24104 = state_24081__$1;
(statearr_24087_24104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (6))){
var inst_24063 = (state_24081[(7)]);
var inst_24068 = p.call(null,inst_24063);
var state_24081__$1 = state_24081;
if(cljs.core.truth_(inst_24068)){
var statearr_24088_24105 = state_24081__$1;
(statearr_24088_24105[(1)] = (8));

} else {
var statearr_24089_24106 = state_24081__$1;
(statearr_24089_24106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (3))){
var inst_24079 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24081__$1,inst_24079);
} else {
if((state_val_24082 === (2))){
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24081__$1,(4),ch);
} else {
if((state_val_24082 === (11))){
var inst_24071 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
var statearr_24090_24107 = state_24081__$1;
(statearr_24090_24107[(2)] = inst_24071);

(statearr_24090_24107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (9))){
var state_24081__$1 = state_24081;
var statearr_24091_24108 = state_24081__$1;
(statearr_24091_24108[(2)] = null);

(statearr_24091_24108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (5))){
var inst_24066 = cljs.core.async.close_BANG_.call(null,out);
var state_24081__$1 = state_24081;
var statearr_24092_24109 = state_24081__$1;
(statearr_24092_24109[(2)] = inst_24066);

(statearr_24092_24109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (10))){
var inst_24074 = (state_24081[(2)]);
var state_24081__$1 = (function (){var statearr_24093 = state_24081;
(statearr_24093[(8)] = inst_24074);

return statearr_24093;
})();
var statearr_24094_24110 = state_24081__$1;
(statearr_24094_24110[(2)] = null);

(statearr_24094_24110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24082 === (8))){
var inst_24063 = (state_24081[(7)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24081__$1,(11),out,inst_24063);
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
});})(c__22561__auto___24100,out))
;
return ((function (switch__22466__auto__,c__22561__auto___24100,out){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_24095 = [null,null,null,null,null,null,null,null,null];
(statearr_24095[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_24095[(1)] = (1));

return statearr_24095;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_24081){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_24081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e24096){if((e24096 instanceof Object)){
var ex__22470__auto__ = e24096;
var statearr_24097_24111 = state_24081;
(statearr_24097_24111[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24112 = state_24081;
state_24081 = G__24112;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_24081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_24081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___24100,out))
})();
var state__22563__auto__ = (function (){var statearr_24098 = f__22562__auto__.call(null);
(statearr_24098[(6)] = c__22561__auto___24100);

return statearr_24098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___24100,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24114 = arguments.length;
switch (G__24114) {
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
var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__){
return (function (state_24177){
var state_val_24178 = (state_24177[(1)]);
if((state_val_24178 === (7))){
var inst_24173 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24179_24217 = state_24177__$1;
(statearr_24179_24217[(2)] = inst_24173);

(statearr_24179_24217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (20))){
var inst_24143 = (state_24177[(7)]);
var inst_24154 = (state_24177[(2)]);
var inst_24155 = cljs.core.next.call(null,inst_24143);
var inst_24129 = inst_24155;
var inst_24130 = null;
var inst_24131 = (0);
var inst_24132 = (0);
var state_24177__$1 = (function (){var statearr_24180 = state_24177;
(statearr_24180[(8)] = inst_24131);

(statearr_24180[(9)] = inst_24129);

(statearr_24180[(10)] = inst_24154);

(statearr_24180[(11)] = inst_24132);

(statearr_24180[(12)] = inst_24130);

return statearr_24180;
})();
var statearr_24181_24218 = state_24177__$1;
(statearr_24181_24218[(2)] = null);

(statearr_24181_24218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (1))){
var state_24177__$1 = state_24177;
var statearr_24182_24219 = state_24177__$1;
(statearr_24182_24219[(2)] = null);

(statearr_24182_24219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (4))){
var inst_24118 = (state_24177[(13)]);
var inst_24118__$1 = (state_24177[(2)]);
var inst_24119 = (inst_24118__$1 == null);
var state_24177__$1 = (function (){var statearr_24183 = state_24177;
(statearr_24183[(13)] = inst_24118__$1);

return statearr_24183;
})();
if(cljs.core.truth_(inst_24119)){
var statearr_24184_24220 = state_24177__$1;
(statearr_24184_24220[(1)] = (5));

} else {
var statearr_24185_24221 = state_24177__$1;
(statearr_24185_24221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (15))){
var state_24177__$1 = state_24177;
var statearr_24189_24222 = state_24177__$1;
(statearr_24189_24222[(2)] = null);

(statearr_24189_24222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (21))){
var state_24177__$1 = state_24177;
var statearr_24190_24223 = state_24177__$1;
(statearr_24190_24223[(2)] = null);

(statearr_24190_24223[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (13))){
var inst_24131 = (state_24177[(8)]);
var inst_24129 = (state_24177[(9)]);
var inst_24132 = (state_24177[(11)]);
var inst_24130 = (state_24177[(12)]);
var inst_24139 = (state_24177[(2)]);
var inst_24140 = (inst_24132 + (1));
var tmp24186 = inst_24131;
var tmp24187 = inst_24129;
var tmp24188 = inst_24130;
var inst_24129__$1 = tmp24187;
var inst_24130__$1 = tmp24188;
var inst_24131__$1 = tmp24186;
var inst_24132__$1 = inst_24140;
var state_24177__$1 = (function (){var statearr_24191 = state_24177;
(statearr_24191[(14)] = inst_24139);

(statearr_24191[(8)] = inst_24131__$1);

(statearr_24191[(9)] = inst_24129__$1);

(statearr_24191[(11)] = inst_24132__$1);

(statearr_24191[(12)] = inst_24130__$1);

return statearr_24191;
})();
var statearr_24192_24224 = state_24177__$1;
(statearr_24192_24224[(2)] = null);

(statearr_24192_24224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (22))){
var state_24177__$1 = state_24177;
var statearr_24193_24225 = state_24177__$1;
(statearr_24193_24225[(2)] = null);

(statearr_24193_24225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (6))){
var inst_24118 = (state_24177[(13)]);
var inst_24127 = f.call(null,inst_24118);
var inst_24128 = cljs.core.seq.call(null,inst_24127);
var inst_24129 = inst_24128;
var inst_24130 = null;
var inst_24131 = (0);
var inst_24132 = (0);
var state_24177__$1 = (function (){var statearr_24194 = state_24177;
(statearr_24194[(8)] = inst_24131);

(statearr_24194[(9)] = inst_24129);

(statearr_24194[(11)] = inst_24132);

(statearr_24194[(12)] = inst_24130);

return statearr_24194;
})();
var statearr_24195_24226 = state_24177__$1;
(statearr_24195_24226[(2)] = null);

(statearr_24195_24226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (17))){
var inst_24143 = (state_24177[(7)]);
var inst_24147 = cljs.core.chunk_first.call(null,inst_24143);
var inst_24148 = cljs.core.chunk_rest.call(null,inst_24143);
var inst_24149 = cljs.core.count.call(null,inst_24147);
var inst_24129 = inst_24148;
var inst_24130 = inst_24147;
var inst_24131 = inst_24149;
var inst_24132 = (0);
var state_24177__$1 = (function (){var statearr_24196 = state_24177;
(statearr_24196[(8)] = inst_24131);

(statearr_24196[(9)] = inst_24129);

(statearr_24196[(11)] = inst_24132);

(statearr_24196[(12)] = inst_24130);

return statearr_24196;
})();
var statearr_24197_24227 = state_24177__$1;
(statearr_24197_24227[(2)] = null);

(statearr_24197_24227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (3))){
var inst_24175 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24177__$1,inst_24175);
} else {
if((state_val_24178 === (12))){
var inst_24163 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24198_24228 = state_24177__$1;
(statearr_24198_24228[(2)] = inst_24163);

(statearr_24198_24228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (2))){
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24177__$1,(4),in$);
} else {
if((state_val_24178 === (23))){
var inst_24171 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24199_24229 = state_24177__$1;
(statearr_24199_24229[(2)] = inst_24171);

(statearr_24199_24229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (19))){
var inst_24158 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24200_24230 = state_24177__$1;
(statearr_24200_24230[(2)] = inst_24158);

(statearr_24200_24230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (11))){
var inst_24129 = (state_24177[(9)]);
var inst_24143 = (state_24177[(7)]);
var inst_24143__$1 = cljs.core.seq.call(null,inst_24129);
var state_24177__$1 = (function (){var statearr_24201 = state_24177;
(statearr_24201[(7)] = inst_24143__$1);

return statearr_24201;
})();
if(inst_24143__$1){
var statearr_24202_24231 = state_24177__$1;
(statearr_24202_24231[(1)] = (14));

} else {
var statearr_24203_24232 = state_24177__$1;
(statearr_24203_24232[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (9))){
var inst_24165 = (state_24177[(2)]);
var inst_24166 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24177__$1 = (function (){var statearr_24204 = state_24177;
(statearr_24204[(15)] = inst_24165);

return statearr_24204;
})();
if(cljs.core.truth_(inst_24166)){
var statearr_24205_24233 = state_24177__$1;
(statearr_24205_24233[(1)] = (21));

} else {
var statearr_24206_24234 = state_24177__$1;
(statearr_24206_24234[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (5))){
var inst_24121 = cljs.core.async.close_BANG_.call(null,out);
var state_24177__$1 = state_24177;
var statearr_24207_24235 = state_24177__$1;
(statearr_24207_24235[(2)] = inst_24121);

(statearr_24207_24235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (14))){
var inst_24143 = (state_24177[(7)]);
var inst_24145 = cljs.core.chunked_seq_QMARK_.call(null,inst_24143);
var state_24177__$1 = state_24177;
if(inst_24145){
var statearr_24208_24236 = state_24177__$1;
(statearr_24208_24236[(1)] = (17));

} else {
var statearr_24209_24237 = state_24177__$1;
(statearr_24209_24237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (16))){
var inst_24161 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24210_24238 = state_24177__$1;
(statearr_24210_24238[(2)] = inst_24161);

(statearr_24210_24238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (10))){
var inst_24132 = (state_24177[(11)]);
var inst_24130 = (state_24177[(12)]);
var inst_24137 = cljs.core._nth.call(null,inst_24130,inst_24132);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24177__$1,(13),out,inst_24137);
} else {
if((state_val_24178 === (18))){
var inst_24143 = (state_24177[(7)]);
var inst_24152 = cljs.core.first.call(null,inst_24143);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24177__$1,(20),out,inst_24152);
} else {
if((state_val_24178 === (8))){
var inst_24131 = (state_24177[(8)]);
var inst_24132 = (state_24177[(11)]);
var inst_24134 = (inst_24132 < inst_24131);
var inst_24135 = inst_24134;
var state_24177__$1 = state_24177;
if(cljs.core.truth_(inst_24135)){
var statearr_24211_24239 = state_24177__$1;
(statearr_24211_24239[(1)] = (10));

} else {
var statearr_24212_24240 = state_24177__$1;
(statearr_24212_24240[(1)] = (11));

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
});})(c__22561__auto__))
;
return ((function (switch__22466__auto__,c__22561__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22467__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22467__auto____0 = (function (){
var statearr_24213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24213[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22467__auto__);

(statearr_24213[(1)] = (1));

return statearr_24213;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22467__auto____1 = (function (state_24177){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_24177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e24214){if((e24214 instanceof Object)){
var ex__22470__auto__ = e24214;
var statearr_24215_24241 = state_24177;
(statearr_24215_24241[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24242 = state_24177;
state_24177 = G__24242;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22467__auto__ = function(state_24177){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22467__auto____1.call(this,state_24177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22467__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22467__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__))
})();
var state__22563__auto__ = (function (){var statearr_24216 = f__22562__auto__.call(null);
(statearr_24216[(6)] = c__22561__auto__);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__))
);

return c__22561__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24244 = arguments.length;
switch (G__24244) {
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
var G__24247 = arguments.length;
switch (G__24247) {
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
var G__24250 = arguments.length;
switch (G__24250) {
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
var c__22561__auto___24297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___24297,out){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___24297,out){
return (function (state_24274){
var state_val_24275 = (state_24274[(1)]);
if((state_val_24275 === (7))){
var inst_24269 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24276_24298 = state_24274__$1;
(statearr_24276_24298[(2)] = inst_24269);

(statearr_24276_24298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (1))){
var inst_24251 = null;
var state_24274__$1 = (function (){var statearr_24277 = state_24274;
(statearr_24277[(7)] = inst_24251);

return statearr_24277;
})();
var statearr_24278_24299 = state_24274__$1;
(statearr_24278_24299[(2)] = null);

(statearr_24278_24299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (4))){
var inst_24254 = (state_24274[(8)]);
var inst_24254__$1 = (state_24274[(2)]);
var inst_24255 = (inst_24254__$1 == null);
var inst_24256 = cljs.core.not.call(null,inst_24255);
var state_24274__$1 = (function (){var statearr_24279 = state_24274;
(statearr_24279[(8)] = inst_24254__$1);

return statearr_24279;
})();
if(inst_24256){
var statearr_24280_24300 = state_24274__$1;
(statearr_24280_24300[(1)] = (5));

} else {
var statearr_24281_24301 = state_24274__$1;
(statearr_24281_24301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (6))){
var state_24274__$1 = state_24274;
var statearr_24282_24302 = state_24274__$1;
(statearr_24282_24302[(2)] = null);

(statearr_24282_24302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (3))){
var inst_24271 = (state_24274[(2)]);
var inst_24272 = cljs.core.async.close_BANG_.call(null,out);
var state_24274__$1 = (function (){var statearr_24283 = state_24274;
(statearr_24283[(9)] = inst_24271);

return statearr_24283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24274__$1,inst_24272);
} else {
if((state_val_24275 === (2))){
var state_24274__$1 = state_24274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24274__$1,(4),ch);
} else {
if((state_val_24275 === (11))){
var inst_24254 = (state_24274[(8)]);
var inst_24263 = (state_24274[(2)]);
var inst_24251 = inst_24254;
var state_24274__$1 = (function (){var statearr_24284 = state_24274;
(statearr_24284[(10)] = inst_24263);

(statearr_24284[(7)] = inst_24251);

return statearr_24284;
})();
var statearr_24285_24303 = state_24274__$1;
(statearr_24285_24303[(2)] = null);

(statearr_24285_24303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (9))){
var inst_24254 = (state_24274[(8)]);
var state_24274__$1 = state_24274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24274__$1,(11),out,inst_24254);
} else {
if((state_val_24275 === (5))){
var inst_24254 = (state_24274[(8)]);
var inst_24251 = (state_24274[(7)]);
var inst_24258 = cljs.core._EQ_.call(null,inst_24254,inst_24251);
var state_24274__$1 = state_24274;
if(inst_24258){
var statearr_24287_24304 = state_24274__$1;
(statearr_24287_24304[(1)] = (8));

} else {
var statearr_24288_24305 = state_24274__$1;
(statearr_24288_24305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (10))){
var inst_24266 = (state_24274[(2)]);
var state_24274__$1 = state_24274;
var statearr_24289_24306 = state_24274__$1;
(statearr_24289_24306[(2)] = inst_24266);

(statearr_24289_24306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24275 === (8))){
var inst_24251 = (state_24274[(7)]);
var tmp24286 = inst_24251;
var inst_24251__$1 = tmp24286;
var state_24274__$1 = (function (){var statearr_24290 = state_24274;
(statearr_24290[(7)] = inst_24251__$1);

return statearr_24290;
})();
var statearr_24291_24307 = state_24274__$1;
(statearr_24291_24307[(2)] = null);

(statearr_24291_24307[(1)] = (2));


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
});})(c__22561__auto___24297,out))
;
return ((function (switch__22466__auto__,c__22561__auto___24297,out){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_24292 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24292[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_24292[(1)] = (1));

return statearr_24292;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_24274){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_24274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object)){
var ex__22470__auto__ = e24293;
var statearr_24294_24308 = state_24274;
(statearr_24294_24308[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24309 = state_24274;
state_24274 = G__24309;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_24274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_24274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___24297,out))
})();
var state__22563__auto__ = (function (){var statearr_24295 = f__22562__auto__.call(null);
(statearr_24295[(6)] = c__22561__auto___24297);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___24297,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24311 = arguments.length;
switch (G__24311) {
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
var c__22561__auto___24377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___24377,out){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___24377,out){
return (function (state_24349){
var state_val_24350 = (state_24349[(1)]);
if((state_val_24350 === (7))){
var inst_24345 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24351_24378 = state_24349__$1;
(statearr_24351_24378[(2)] = inst_24345);

(statearr_24351_24378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (1))){
var inst_24312 = (new Array(n));
var inst_24313 = inst_24312;
var inst_24314 = (0);
var state_24349__$1 = (function (){var statearr_24352 = state_24349;
(statearr_24352[(7)] = inst_24314);

(statearr_24352[(8)] = inst_24313);

return statearr_24352;
})();
var statearr_24353_24379 = state_24349__$1;
(statearr_24353_24379[(2)] = null);

(statearr_24353_24379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (4))){
var inst_24317 = (state_24349[(9)]);
var inst_24317__$1 = (state_24349[(2)]);
var inst_24318 = (inst_24317__$1 == null);
var inst_24319 = cljs.core.not.call(null,inst_24318);
var state_24349__$1 = (function (){var statearr_24354 = state_24349;
(statearr_24354[(9)] = inst_24317__$1);

return statearr_24354;
})();
if(inst_24319){
var statearr_24355_24380 = state_24349__$1;
(statearr_24355_24380[(1)] = (5));

} else {
var statearr_24356_24381 = state_24349__$1;
(statearr_24356_24381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (15))){
var inst_24339 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24357_24382 = state_24349__$1;
(statearr_24357_24382[(2)] = inst_24339);

(statearr_24357_24382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (13))){
var state_24349__$1 = state_24349;
var statearr_24358_24383 = state_24349__$1;
(statearr_24358_24383[(2)] = null);

(statearr_24358_24383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (6))){
var inst_24314 = (state_24349[(7)]);
var inst_24335 = (inst_24314 > (0));
var state_24349__$1 = state_24349;
if(cljs.core.truth_(inst_24335)){
var statearr_24359_24384 = state_24349__$1;
(statearr_24359_24384[(1)] = (12));

} else {
var statearr_24360_24385 = state_24349__$1;
(statearr_24360_24385[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (3))){
var inst_24347 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24349__$1,inst_24347);
} else {
if((state_val_24350 === (12))){
var inst_24313 = (state_24349[(8)]);
var inst_24337 = cljs.core.vec.call(null,inst_24313);
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24349__$1,(15),out,inst_24337);
} else {
if((state_val_24350 === (2))){
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24349__$1,(4),ch);
} else {
if((state_val_24350 === (11))){
var inst_24329 = (state_24349[(2)]);
var inst_24330 = (new Array(n));
var inst_24313 = inst_24330;
var inst_24314 = (0);
var state_24349__$1 = (function (){var statearr_24361 = state_24349;
(statearr_24361[(7)] = inst_24314);

(statearr_24361[(8)] = inst_24313);

(statearr_24361[(10)] = inst_24329);

return statearr_24361;
})();
var statearr_24362_24386 = state_24349__$1;
(statearr_24362_24386[(2)] = null);

(statearr_24362_24386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (9))){
var inst_24313 = (state_24349[(8)]);
var inst_24327 = cljs.core.vec.call(null,inst_24313);
var state_24349__$1 = state_24349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24349__$1,(11),out,inst_24327);
} else {
if((state_val_24350 === (5))){
var inst_24314 = (state_24349[(7)]);
var inst_24313 = (state_24349[(8)]);
var inst_24322 = (state_24349[(11)]);
var inst_24317 = (state_24349[(9)]);
var inst_24321 = (inst_24313[inst_24314] = inst_24317);
var inst_24322__$1 = (inst_24314 + (1));
var inst_24323 = (inst_24322__$1 < n);
var state_24349__$1 = (function (){var statearr_24363 = state_24349;
(statearr_24363[(11)] = inst_24322__$1);

(statearr_24363[(12)] = inst_24321);

return statearr_24363;
})();
if(cljs.core.truth_(inst_24323)){
var statearr_24364_24387 = state_24349__$1;
(statearr_24364_24387[(1)] = (8));

} else {
var statearr_24365_24388 = state_24349__$1;
(statearr_24365_24388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (14))){
var inst_24342 = (state_24349[(2)]);
var inst_24343 = cljs.core.async.close_BANG_.call(null,out);
var state_24349__$1 = (function (){var statearr_24367 = state_24349;
(statearr_24367[(13)] = inst_24342);

return statearr_24367;
})();
var statearr_24368_24389 = state_24349__$1;
(statearr_24368_24389[(2)] = inst_24343);

(statearr_24368_24389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (10))){
var inst_24333 = (state_24349[(2)]);
var state_24349__$1 = state_24349;
var statearr_24369_24390 = state_24349__$1;
(statearr_24369_24390[(2)] = inst_24333);

(statearr_24369_24390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24350 === (8))){
var inst_24313 = (state_24349[(8)]);
var inst_24322 = (state_24349[(11)]);
var tmp24366 = inst_24313;
var inst_24313__$1 = tmp24366;
var inst_24314 = inst_24322;
var state_24349__$1 = (function (){var statearr_24370 = state_24349;
(statearr_24370[(7)] = inst_24314);

(statearr_24370[(8)] = inst_24313__$1);

return statearr_24370;
})();
var statearr_24371_24391 = state_24349__$1;
(statearr_24371_24391[(2)] = null);

(statearr_24371_24391[(1)] = (2));


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
});})(c__22561__auto___24377,out))
;
return ((function (switch__22466__auto__,c__22561__auto___24377,out){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_24372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24372[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_24372[(1)] = (1));

return statearr_24372;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_24349){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_24349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e24373){if((e24373 instanceof Object)){
var ex__22470__auto__ = e24373;
var statearr_24374_24392 = state_24349;
(statearr_24374_24392[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24393 = state_24349;
state_24349 = G__24393;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_24349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_24349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___24377,out))
})();
var state__22563__auto__ = (function (){var statearr_24375 = f__22562__auto__.call(null);
(statearr_24375[(6)] = c__22561__auto___24377);

return statearr_24375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___24377,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24395 = arguments.length;
switch (G__24395) {
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
var c__22561__auto___24465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___24465,out){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___24465,out){
return (function (state_24437){
var state_val_24438 = (state_24437[(1)]);
if((state_val_24438 === (7))){
var inst_24433 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24439_24466 = state_24437__$1;
(statearr_24439_24466[(2)] = inst_24433);

(statearr_24439_24466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (1))){
var inst_24396 = [];
var inst_24397 = inst_24396;
var inst_24398 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24437__$1 = (function (){var statearr_24440 = state_24437;
(statearr_24440[(7)] = inst_24397);

(statearr_24440[(8)] = inst_24398);

return statearr_24440;
})();
var statearr_24441_24467 = state_24437__$1;
(statearr_24441_24467[(2)] = null);

(statearr_24441_24467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (4))){
var inst_24401 = (state_24437[(9)]);
var inst_24401__$1 = (state_24437[(2)]);
var inst_24402 = (inst_24401__$1 == null);
var inst_24403 = cljs.core.not.call(null,inst_24402);
var state_24437__$1 = (function (){var statearr_24442 = state_24437;
(statearr_24442[(9)] = inst_24401__$1);

return statearr_24442;
})();
if(inst_24403){
var statearr_24443_24468 = state_24437__$1;
(statearr_24443_24468[(1)] = (5));

} else {
var statearr_24444_24469 = state_24437__$1;
(statearr_24444_24469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (15))){
var inst_24427 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24445_24470 = state_24437__$1;
(statearr_24445_24470[(2)] = inst_24427);

(statearr_24445_24470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (13))){
var state_24437__$1 = state_24437;
var statearr_24446_24471 = state_24437__$1;
(statearr_24446_24471[(2)] = null);

(statearr_24446_24471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (6))){
var inst_24397 = (state_24437[(7)]);
var inst_24422 = inst_24397.length;
var inst_24423 = (inst_24422 > (0));
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24423)){
var statearr_24447_24472 = state_24437__$1;
(statearr_24447_24472[(1)] = (12));

} else {
var statearr_24448_24473 = state_24437__$1;
(statearr_24448_24473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (3))){
var inst_24435 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24437__$1,inst_24435);
} else {
if((state_val_24438 === (12))){
var inst_24397 = (state_24437[(7)]);
var inst_24425 = cljs.core.vec.call(null,inst_24397);
var state_24437__$1 = state_24437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24437__$1,(15),out,inst_24425);
} else {
if((state_val_24438 === (2))){
var state_24437__$1 = state_24437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24437__$1,(4),ch);
} else {
if((state_val_24438 === (11))){
var inst_24401 = (state_24437[(9)]);
var inst_24405 = (state_24437[(10)]);
var inst_24415 = (state_24437[(2)]);
var inst_24416 = [];
var inst_24417 = inst_24416.push(inst_24401);
var inst_24397 = inst_24416;
var inst_24398 = inst_24405;
var state_24437__$1 = (function (){var statearr_24449 = state_24437;
(statearr_24449[(11)] = inst_24417);

(statearr_24449[(12)] = inst_24415);

(statearr_24449[(7)] = inst_24397);

(statearr_24449[(8)] = inst_24398);

return statearr_24449;
})();
var statearr_24450_24474 = state_24437__$1;
(statearr_24450_24474[(2)] = null);

(statearr_24450_24474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (9))){
var inst_24397 = (state_24437[(7)]);
var inst_24413 = cljs.core.vec.call(null,inst_24397);
var state_24437__$1 = state_24437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24437__$1,(11),out,inst_24413);
} else {
if((state_val_24438 === (5))){
var inst_24398 = (state_24437[(8)]);
var inst_24401 = (state_24437[(9)]);
var inst_24405 = (state_24437[(10)]);
var inst_24405__$1 = f.call(null,inst_24401);
var inst_24406 = cljs.core._EQ_.call(null,inst_24405__$1,inst_24398);
var inst_24407 = cljs.core.keyword_identical_QMARK_.call(null,inst_24398,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24408 = ((inst_24406) || (inst_24407));
var state_24437__$1 = (function (){var statearr_24451 = state_24437;
(statearr_24451[(10)] = inst_24405__$1);

return statearr_24451;
})();
if(cljs.core.truth_(inst_24408)){
var statearr_24452_24475 = state_24437__$1;
(statearr_24452_24475[(1)] = (8));

} else {
var statearr_24453_24476 = state_24437__$1;
(statearr_24453_24476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (14))){
var inst_24430 = (state_24437[(2)]);
var inst_24431 = cljs.core.async.close_BANG_.call(null,out);
var state_24437__$1 = (function (){var statearr_24455 = state_24437;
(statearr_24455[(13)] = inst_24430);

return statearr_24455;
})();
var statearr_24456_24477 = state_24437__$1;
(statearr_24456_24477[(2)] = inst_24431);

(statearr_24456_24477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (10))){
var inst_24420 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24457_24478 = state_24437__$1;
(statearr_24457_24478[(2)] = inst_24420);

(statearr_24457_24478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24438 === (8))){
var inst_24397 = (state_24437[(7)]);
var inst_24401 = (state_24437[(9)]);
var inst_24405 = (state_24437[(10)]);
var inst_24410 = inst_24397.push(inst_24401);
var tmp24454 = inst_24397;
var inst_24397__$1 = tmp24454;
var inst_24398 = inst_24405;
var state_24437__$1 = (function (){var statearr_24458 = state_24437;
(statearr_24458[(7)] = inst_24397__$1);

(statearr_24458[(8)] = inst_24398);

(statearr_24458[(14)] = inst_24410);

return statearr_24458;
})();
var statearr_24459_24479 = state_24437__$1;
(statearr_24459_24479[(2)] = null);

(statearr_24459_24479[(1)] = (2));


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
});})(c__22561__auto___24465,out))
;
return ((function (switch__22466__auto__,c__22561__auto___24465,out){
return (function() {
var cljs$core$async$state_machine__22467__auto__ = null;
var cljs$core$async$state_machine__22467__auto____0 = (function (){
var statearr_24460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24460[(0)] = cljs$core$async$state_machine__22467__auto__);

(statearr_24460[(1)] = (1));

return statearr_24460;
});
var cljs$core$async$state_machine__22467__auto____1 = (function (state_24437){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_24437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e24461){if((e24461 instanceof Object)){
var ex__22470__auto__ = e24461;
var statearr_24462_24480 = state_24437;
(statearr_24462_24480[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24481 = state_24437;
state_24437 = G__24481;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
cljs$core$async$state_machine__22467__auto__ = function(state_24437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22467__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22467__auto____1.call(this,state_24437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22467__auto____0;
cljs$core$async$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22467__auto____1;
return cljs$core$async$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___24465,out))
})();
var state__22563__auto__ = (function (){var statearr_24463 = f__22562__auto__.call(null);
(statearr_24463[(6)] = c__22561__auto___24465);

return statearr_24463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___24465,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1594882413127
