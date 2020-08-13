// Compiled by ClojureScript 1.10.520 {}
goog.provide('quiltools.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
/**
 * gets the stroke weight of the current graphics context
 */
quiltools.core.stroke_weight = (function quiltools$core$stroke_weight(){
return quil.core.current_graphics.call(null).drawingContext.lineWidth;
});
/**
 * returns a draw-fn which draws `p` at angle `theta`
 */
quiltools.core.spin = (function quiltools$core$spin(theta,p){
return (function (){
var tr__2245__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [theta], null);
quil.core.push_matrix.call(null);

try{cljs.core.apply.call(null,quil.core.rotate,tr__2245__auto__);

return p.call(null);
}finally {quil.core.pop_matrix.call(null);
}});
});
/**
 * returns a draw-fn which draws `p` at origin `[x y]`
 */
quiltools.core.at = (function quiltools$core$at(x,y,p){
return (function (){
var tr__2239__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__2239__auto__);

return p.call(null);
}finally {quil.core.pop_matrix.call(null);
}});
});
/**
 * returns a draw-fn which draws `p` in a box of size `[w h]`
 */
quiltools.core.in$ = (function quiltools$core$in(w,h,p){
return (function (){
quil.core.push_matrix.call(null);

quil.core.push_style.call(null);

quil.core.stroke_weight.call(null,(quiltools.core.stroke_weight.call(null) / ((w + h) / (2))));

quil.core.scale.call(null,w,h);

p.call(null);

quil.core.pop_style.call(null);

return quil.core.pop_matrix.call(null);
});
});
/**
 * returns `true` if `d` divides `n`
 */
quiltools.core.divides_QMARK_ = (function quiltools$core$divides_QMARK_(n,d){
return (cljs.core.mod.call(null,n,d) === (0));
});
/**
 * returns true only every `n` ticks
 */
quiltools.core.n_ticks_QMARK_ = (function quiltools$core$n_ticks_QMARK_(n){
return quiltools.core.divides_QMARK_.call(null,quil.core.frame_count.call(null),n);
});

//# sourceMappingURL=core.js.map
