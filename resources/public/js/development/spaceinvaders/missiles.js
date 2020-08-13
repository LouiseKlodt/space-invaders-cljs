// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.missiles');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quiltools.core');
goog.require('spaceinvaders.globals');
goog.require('spaceinvaders.helpers');
spaceinvaders.missiles.missile_img = (function spaceinvaders$missiles$missile_img(){
return quil.core.quad.call(null,0.5,0.2,(1),(1),0.5,0.7,(0),(1));
});
spaceinvaders.missiles.missiles_menu = (function spaceinvaders$missiles$missiles_menu(n_missiles){
return (function (){
quil.core.push_style.call(null);

quil.core.stroke.call(null,(120));

var spacing_2436 = 0.04;
var w_2437 = (((1) - (spacing_2436 * (spaceinvaders.globals.max_missiles - (1)))) / spaceinvaders.globals.max_missiles);
var seq__2432_2438 = cljs.core.seq.call(null,cljs.core.range.call(null,spaceinvaders.globals.max_missiles));
var chunk__2433_2439 = null;
var count__2434_2440 = (0);
var i__2435_2441 = (0);
while(true){
if((i__2435_2441 < count__2434_2440)){
var n_2442 = cljs.core._nth.call(null,chunk__2433_2439,i__2435_2441);
if((n_2442 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));
}

quiltools.core.at.call(null,((w_2437 / (2)) + (n_2442 * (w_2437 + spacing_2436))),(0),quiltools.core.in$.call(null,w_2437,w_2437,spaceinvaders.missiles.missile_img)).call(null);


var G__2443 = seq__2432_2438;
var G__2444 = chunk__2433_2439;
var G__2445 = count__2434_2440;
var G__2446 = (i__2435_2441 + (1));
seq__2432_2438 = G__2443;
chunk__2433_2439 = G__2444;
count__2434_2440 = G__2445;
i__2435_2441 = G__2446;
continue;
} else {
var temp__5735__auto___2447 = cljs.core.seq.call(null,seq__2432_2438);
if(temp__5735__auto___2447){
var seq__2432_2448__$1 = temp__5735__auto___2447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2432_2448__$1)){
var c__4550__auto___2449 = cljs.core.chunk_first.call(null,seq__2432_2448__$1);
var G__2450 = cljs.core.chunk_rest.call(null,seq__2432_2448__$1);
var G__2451 = c__4550__auto___2449;
var G__2452 = cljs.core.count.call(null,c__4550__auto___2449);
var G__2453 = (0);
seq__2432_2438 = G__2450;
chunk__2433_2439 = G__2451;
count__2434_2440 = G__2452;
i__2435_2441 = G__2453;
continue;
} else {
var n_2454 = cljs.core.first.call(null,seq__2432_2448__$1);
if((n_2454 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));
}

quiltools.core.at.call(null,((w_2437 / (2)) + (n_2454 * (w_2437 + spacing_2436))),(0),quiltools.core.in$.call(null,w_2437,w_2437,spaceinvaders.missiles.missile_img)).call(null);


var G__2455 = cljs.core.next.call(null,seq__2432_2448__$1);
var G__2456 = null;
var G__2457 = (0);
var G__2458 = (0);
seq__2432_2438 = G__2455;
chunk__2433_2439 = G__2456;
count__2434_2440 = G__2457;
i__2435_2441 = G__2458;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
});
spaceinvaders.missiles.draw_missiles_BANG_ = (function spaceinvaders$missiles$draw_missiles_BANG_(missiles,shoot){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

var seq__2459_2475 = cljs.core.seq.call(null,missiles);
var chunk__2460_2476 = null;
var count__2461_2477 = (0);
var i__2462_2478 = (0);
while(true){
if((i__2462_2478 < count__2461_2477)){
var vec__2469_2479 = cljs.core._nth.call(null,chunk__2460_2476,i__2462_2478);
var x_2480 = cljs.core.nth.call(null,vec__2469_2479,(0),null);
var y_2481 = cljs.core.nth.call(null,vec__2469_2479,(1),null);
quiltools.core.at.call(null,((x_2480 + (spaceinvaders.globals.wt / (2))) - (spaceinvaders.globals.wm / (2))),y_2481,quiltools.core.in$.call(null,spaceinvaders.globals.wm,spaceinvaders.globals.wm,spaceinvaders.missiles.missile_img)).call(null);


var G__2482 = seq__2459_2475;
var G__2483 = chunk__2460_2476;
var G__2484 = count__2461_2477;
var G__2485 = (i__2462_2478 + (1));
seq__2459_2475 = G__2482;
chunk__2460_2476 = G__2483;
count__2461_2477 = G__2484;
i__2462_2478 = G__2485;
continue;
} else {
var temp__5735__auto___2486 = cljs.core.seq.call(null,seq__2459_2475);
if(temp__5735__auto___2486){
var seq__2459_2487__$1 = temp__5735__auto___2486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2459_2487__$1)){
var c__4550__auto___2488 = cljs.core.chunk_first.call(null,seq__2459_2487__$1);
var G__2489 = cljs.core.chunk_rest.call(null,seq__2459_2487__$1);
var G__2490 = c__4550__auto___2488;
var G__2491 = cljs.core.count.call(null,c__4550__auto___2488);
var G__2492 = (0);
seq__2459_2475 = G__2489;
chunk__2460_2476 = G__2490;
count__2461_2477 = G__2491;
i__2462_2478 = G__2492;
continue;
} else {
var vec__2472_2493 = cljs.core.first.call(null,seq__2459_2487__$1);
var x_2494 = cljs.core.nth.call(null,vec__2472_2493,(0),null);
var y_2495 = cljs.core.nth.call(null,vec__2472_2493,(1),null);
quiltools.core.at.call(null,((x_2494 + (spaceinvaders.globals.wt / (2))) - (spaceinvaders.globals.wm / (2))),y_2495,quiltools.core.in$.call(null,spaceinvaders.globals.wm,spaceinvaders.globals.wm,spaceinvaders.missiles.missile_img)).call(null);


var G__2496 = cljs.core.next.call(null,seq__2459_2487__$1);
var G__2497 = null;
var G__2498 = (0);
var G__2499 = (0);
seq__2459_2475 = G__2496;
chunk__2460_2476 = G__2497;
count__2461_2477 = G__2498;
i__2462_2478 = G__2499;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.missiles.draw_missiles_menu_BANG_ = (function spaceinvaders$missiles$draw_missiles_menu_BANG_(n_missiles){
quil.core.push_style.call(null);

quil.core.no_stroke.call(null);

var w_2500 = ((16) * spaceinvaders.globals.max_missiles);
var x0_2501 = ((spaceinvaders.globals.world_width - w_2500) - spaceinvaders.globals.margin);
var y0_2502 = ((spaceinvaders.globals.hbar_menu + spaceinvaders.globals.offset) + spaceinvaders.globals.offset);
quiltools.core.at.call(null,x0_2501,y0_2502,quiltools.core.in$.call(null,w_2500,w_2500,spaceinvaders.missiles.missiles_menu.call(null,n_missiles))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.missiles.update_missiles = (function spaceinvaders$missiles$update_missiles(missiles){
var dy = ((-2) * spaceinvaders.globals.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (dy){
return (function (p__2503){
var vec__2504 = p__2503;
var x = cljs.core.nth.call(null,vec__2504,(0),null);
var y = cljs.core.nth.call(null,vec__2504,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(dy))
,missiles));
});
spaceinvaders.missiles.detect_explosions = (function spaceinvaders$missiles$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function spaceinvaders$missiles$detect_explosions_$_iter__2507(s__2508){
return (new cljs.core.LazySeq(null,(function (){
var s__2508__$1 = s__2508;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__2508__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__2508__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function spaceinvaders$missiles$detect_explosions_$_iter__2507_$_iter__2509(s__2510){
return (new cljs.core.LazySeq(null,((function (s__2508__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__2510__$1 = s__2510;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__2510__$1);
if(temp__5735__auto____$1){
var s__2510__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2510__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__2510__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__2512 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__2511 = (0);
while(true){
if((i__2511 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__2511);
if(spaceinvaders.helpers.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
cljs.core.chunk_append.call(null,b__2512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__2513 = (i__2511 + (1));
i__2511 = G__2513;
continue;
} else {
var G__2514 = (i__2511 + (1));
i__2511 = G__2514;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2512),spaceinvaders$missiles$detect_explosions_$_iter__2507_$_iter__2509.call(null,cljs.core.chunk_rest.call(null,s__2510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2512),null);
}
} else {
var missile = cljs.core.first.call(null,s__2510__$2);
if(spaceinvaders.helpers.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),spaceinvaders$missiles$detect_explosions_$_iter__2507_$_iter__2509.call(null,cljs.core.rest.call(null,s__2510__$2)));
} else {
var G__2515 = cljs.core.rest.call(null,s__2510__$2);
s__2510__$1 = G__2515;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__2508__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__2508__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,spaceinvaders$missiles$detect_explosions_$_iter__2507.call(null,cljs.core.rest.call(null,s__2508__$1)));
} else {
var G__2516 = cljs.core.rest.call(null,s__2508__$1);
s__2508__$1 = G__2516;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,ufos);
})());
});

//# sourceMappingURL=missiles.js.map
