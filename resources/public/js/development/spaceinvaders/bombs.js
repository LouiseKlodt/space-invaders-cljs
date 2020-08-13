// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.bombs');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quiltools.core');
goog.require('spaceinvaders.globals');
goog.require('spaceinvaders.helpers');
spaceinvaders.bombs.bomb_img = (function spaceinvaders$bombs$bomb_img(){
quil.core.push_style.call(null);

quil.core.no_stroke.call(null);

quil.core.rect.call(null,0.4,0.0,0.2,0.1);

quil.core.rect.call(null,0.2,0.1,0.6,0.1);

quil.core.rect.call(null,0.1,0.2,0.8,0.2);

quil.core.rect.call(null,0.0,0.4,1.0,0.2);

quil.core.rect.call(null,0.05,0.6,0.9,0.2);

quil.core.rect.call(null,0.15,0.8,0.7,0.1);

quil.core.rect.call(null,0.3,0.9,0.4,0.1);

quil.core.rect.call(null,0.4,0.95,0.2,0.1);

return quil.core.pop_style.call(null);
});
spaceinvaders.bombs.draw_bombs_BANG_ = (function spaceinvaders$bombs$draw_bombs_BANG_(bombs){
quil.core.push_style.call(null);

quil.core.no_stroke.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

var w_2593 = (0.3 * spaceinvaders.globals.size_ufo);
var seq__2577_2594 = cljs.core.seq.call(null,bombs);
var chunk__2578_2595 = null;
var count__2579_2596 = (0);
var i__2580_2597 = (0);
while(true){
if((i__2580_2597 < count__2579_2596)){
var vec__2587_2598 = cljs.core._nth.call(null,chunk__2578_2595,i__2580_2597);
var x_2599 = cljs.core.nth.call(null,vec__2587_2598,(0),null);
var y_2600 = cljs.core.nth.call(null,vec__2587_2598,(1),null);
quiltools.core.at.call(null,x_2599,y_2600,quiltools.core.in$.call(null,w_2593,w_2593,spaceinvaders.bombs.bomb_img)).call(null);


var G__2601 = seq__2577_2594;
var G__2602 = chunk__2578_2595;
var G__2603 = count__2579_2596;
var G__2604 = (i__2580_2597 + (1));
seq__2577_2594 = G__2601;
chunk__2578_2595 = G__2602;
count__2579_2596 = G__2603;
i__2580_2597 = G__2604;
continue;
} else {
var temp__5735__auto___2605 = cljs.core.seq.call(null,seq__2577_2594);
if(temp__5735__auto___2605){
var seq__2577_2606__$1 = temp__5735__auto___2605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2577_2606__$1)){
var c__4550__auto___2607 = cljs.core.chunk_first.call(null,seq__2577_2606__$1);
var G__2608 = cljs.core.chunk_rest.call(null,seq__2577_2606__$1);
var G__2609 = c__4550__auto___2607;
var G__2610 = cljs.core.count.call(null,c__4550__auto___2607);
var G__2611 = (0);
seq__2577_2594 = G__2608;
chunk__2578_2595 = G__2609;
count__2579_2596 = G__2610;
i__2580_2597 = G__2611;
continue;
} else {
var vec__2590_2612 = cljs.core.first.call(null,seq__2577_2606__$1);
var x_2613 = cljs.core.nth.call(null,vec__2590_2612,(0),null);
var y_2614 = cljs.core.nth.call(null,vec__2590_2612,(1),null);
quiltools.core.at.call(null,x_2613,y_2614,quiltools.core.in$.call(null,w_2593,w_2593,spaceinvaders.bombs.bomb_img)).call(null);


var G__2615 = cljs.core.next.call(null,seq__2577_2606__$1);
var G__2616 = null;
var G__2617 = (0);
var G__2618 = (0);
seq__2577_2594 = G__2615;
chunk__2578_2595 = G__2616;
count__2579_2596 = G__2617;
i__2580_2597 = G__2618;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.bombs.new_bomb = (function spaceinvaders$bombs$new_bomb(ufos){
var vec__2619 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ufos));
var x = cljs.core.nth.call(null,vec__2619,(0),null);
var y = cljs.core.nth.call(null,vec__2619,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(spaceinvaders.globals.size_ufo2 + x),(spaceinvaders.globals.size_ufo2 + y)], null);
});
spaceinvaders.bombs.update_bombs = (function spaceinvaders$bombs$update_bombs(bombs,ufos){

var freq = (1);
var new_bombs = ((((cljs.core.seq.call(null,ufos)) && (spaceinvaders.helpers.add_new_QMARK_.call(null,bombs,spaceinvaders.globals.max_bombs,freq))))?cljs.core.conj.call(null,bombs,spaceinvaders.bombs.new_bomb.call(null,ufos)):bombs);
var dy = ((3) * spaceinvaders.globals.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_bombs,dy){
return (function (p__2622){
var vec__2623 = p__2622;
var x = cljs.core.nth.call(null,vec__2623,(0),null);
var y = cljs.core.nth.call(null,vec__2623,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(freq,new_bombs,dy))
,new_bombs));
});

//# sourceMappingURL=bombs.js.map
