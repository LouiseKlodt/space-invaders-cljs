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

var w_81357 = (0.3 * spaceinvaders.globals.size_ufo);
var seq__81341_81358 = cljs.core.seq.call(null,bombs);
var chunk__81342_81359 = null;
var count__81343_81360 = (0);
var i__81344_81361 = (0);
while(true){
if((i__81344_81361 < count__81343_81360)){
var vec__81351_81362 = cljs.core._nth.call(null,chunk__81342_81359,i__81344_81361);
var x_81363 = cljs.core.nth.call(null,vec__81351_81362,(0),null);
var y_81364 = cljs.core.nth.call(null,vec__81351_81362,(1),null);
quiltools.core.at.call(null,x_81363,y_81364,quiltools.core.in$.call(null,w_81357,w_81357,spaceinvaders.bombs.bomb_img)).call(null);


var G__81365 = seq__81341_81358;
var G__81366 = chunk__81342_81359;
var G__81367 = count__81343_81360;
var G__81368 = (i__81344_81361 + (1));
seq__81341_81358 = G__81365;
chunk__81342_81359 = G__81366;
count__81343_81360 = G__81367;
i__81344_81361 = G__81368;
continue;
} else {
var temp__5735__auto___81369 = cljs.core.seq.call(null,seq__81341_81358);
if(temp__5735__auto___81369){
var seq__81341_81370__$1 = temp__5735__auto___81369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81341_81370__$1)){
var c__4550__auto___81371 = cljs.core.chunk_first.call(null,seq__81341_81370__$1);
var G__81372 = cljs.core.chunk_rest.call(null,seq__81341_81370__$1);
var G__81373 = c__4550__auto___81371;
var G__81374 = cljs.core.count.call(null,c__4550__auto___81371);
var G__81375 = (0);
seq__81341_81358 = G__81372;
chunk__81342_81359 = G__81373;
count__81343_81360 = G__81374;
i__81344_81361 = G__81375;
continue;
} else {
var vec__81354_81376 = cljs.core.first.call(null,seq__81341_81370__$1);
var x_81377 = cljs.core.nth.call(null,vec__81354_81376,(0),null);
var y_81378 = cljs.core.nth.call(null,vec__81354_81376,(1),null);
quiltools.core.at.call(null,x_81377,y_81378,quiltools.core.in$.call(null,w_81357,w_81357,spaceinvaders.bombs.bomb_img)).call(null);


var G__81379 = cljs.core.next.call(null,seq__81341_81370__$1);
var G__81380 = null;
var G__81381 = (0);
var G__81382 = (0);
seq__81341_81358 = G__81379;
chunk__81342_81359 = G__81380;
count__81343_81360 = G__81381;
i__81344_81361 = G__81382;
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
var vec__81383 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ufos));
var x = cljs.core.nth.call(null,vec__81383,(0),null);
var y = cljs.core.nth.call(null,vec__81383,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(spaceinvaders.globals.size_ufo2 + x),(spaceinvaders.globals.size_ufo2 + y)], null);
});
spaceinvaders.bombs.update_bombs = (function spaceinvaders$bombs$update_bombs(bombs,ufos){

var freq = (1);
var new_bombs = ((((cljs.core.seq.call(null,ufos)) && (spaceinvaders.helpers.add_new_QMARK_.call(null,bombs,spaceinvaders.globals.max_bombs,freq))))?cljs.core.conj.call(null,bombs,spaceinvaders.bombs.new_bomb.call(null,ufos)):bombs);
var dy = ((3) * spaceinvaders.globals.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_bombs,dy){
return (function (p__81386){
var vec__81387 = p__81386;
var x = cljs.core.nth.call(null,vec__81387,(0),null);
var y = cljs.core.nth.call(null,vec__81387,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(freq,new_bombs,dy))
,new_bombs));
});

//# sourceMappingURL=bombs.js.map?rel=1597247522749
