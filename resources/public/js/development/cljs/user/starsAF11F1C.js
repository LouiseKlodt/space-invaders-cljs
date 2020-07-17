// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.user.starsAF11F1C');
goog.require('cljs.core');
cljs.user.in_ns.call(null,new cljs.core.Symbol(null,"spaceinvaders.core","spaceinvaders.core",516238871,null));
cljs.user.rand_stars = (function cljs$user$rand_stars(n){

return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.user.rand_n.call(null,(0),cljs.user.world_width),cljs.user.rand_n.call(null,(0),cljs.user.world_height),(1.0 + cljs.core.rand.call(null,3.0))],null));
})));
});

//# sourceMappingURL=starsAF11F1C.js.map?rel=1594996741735
