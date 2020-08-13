// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.stars');
goog.require('cljs.core');
goog.require('quil.core');
spaceinvaders.stars.rand_n = (function spaceinvaders$stars$rand_n(a,b){

return (a + cljs.core.rand.call(null,(b - a)));
});
spaceinvaders.stars.rand_stars = (function spaceinvaders$stars$rand_stars(n,w,h){

var star_size = 2.0;
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,((function (star_size){
return (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[spaceinvaders.stars.rand_n.call(null,(0),w),spaceinvaders.stars.rand_n.call(null,(0),h),(1.0 + cljs.core.rand.call(null,star_size))],null));
});})(star_size))
));
});
spaceinvaders.stars.draw_stars_BANG_ = (function spaceinvaders$stars$draw_stars_BANG_(stars){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var seq__2356_2372 = cljs.core.seq.call(null,stars);
var chunk__2357_2373 = null;
var count__2358_2374 = (0);
var i__2359_2375 = (0);
while(true){
if((i__2359_2375 < count__2358_2374)){
var vec__2366_2376 = cljs.core._nth.call(null,chunk__2357_2373,i__2359_2375);
var x_2377 = cljs.core.nth.call(null,vec__2366_2376,(0),null);
var y_2378 = cljs.core.nth.call(null,vec__2366_2376,(1),null);
var s_2379 = cljs.core.nth.call(null,vec__2366_2376,(2),null);
quil.core.ellipse.call(null,x_2377,y_2378,s_2379,s_2379);


var G__2380 = seq__2356_2372;
var G__2381 = chunk__2357_2373;
var G__2382 = count__2358_2374;
var G__2383 = (i__2359_2375 + (1));
seq__2356_2372 = G__2380;
chunk__2357_2373 = G__2381;
count__2358_2374 = G__2382;
i__2359_2375 = G__2383;
continue;
} else {
var temp__5735__auto___2384 = cljs.core.seq.call(null,seq__2356_2372);
if(temp__5735__auto___2384){
var seq__2356_2385__$1 = temp__5735__auto___2384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2356_2385__$1)){
var c__4550__auto___2386 = cljs.core.chunk_first.call(null,seq__2356_2385__$1);
var G__2387 = cljs.core.chunk_rest.call(null,seq__2356_2385__$1);
var G__2388 = c__4550__auto___2386;
var G__2389 = cljs.core.count.call(null,c__4550__auto___2386);
var G__2390 = (0);
seq__2356_2372 = G__2387;
chunk__2357_2373 = G__2388;
count__2358_2374 = G__2389;
i__2359_2375 = G__2390;
continue;
} else {
var vec__2369_2391 = cljs.core.first.call(null,seq__2356_2385__$1);
var x_2392 = cljs.core.nth.call(null,vec__2369_2391,(0),null);
var y_2393 = cljs.core.nth.call(null,vec__2369_2391,(1),null);
var s_2394 = cljs.core.nth.call(null,vec__2369_2391,(2),null);
quil.core.ellipse.call(null,x_2392,y_2393,s_2394,s_2394);


var G__2395 = cljs.core.next.call(null,seq__2356_2385__$1);
var G__2396 = null;
var G__2397 = (0);
var G__2398 = (0);
seq__2356_2372 = G__2395;
chunk__2357_2373 = G__2396;
count__2358_2374 = G__2397;
i__2359_2375 = G__2398;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.stars.move_stars = (function spaceinvaders$stars$move_stars(stars,h){
var iter__4523__auto__ = (function spaceinvaders$stars$move_stars_$_iter__2399(s__2400){
return (new cljs.core.LazySeq(null,(function (){
var s__2400__$1 = s__2400;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__2400__$1);
if(temp__5735__auto__){
var s__2400__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2400__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__2400__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__2402 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__2401 = (0);
while(true){
if((i__2401 < size__4522__auto__)){
var vec__2403 = cljs.core._nth.call(null,c__4521__auto__,i__2401);
var x = cljs.core.nth.call(null,vec__2403,(0),null);
var y = cljs.core.nth.call(null,vec__2403,(1),null);
var size = cljs.core.nth.call(null,vec__2403,(2),null);
cljs.core.chunk_append.call(null,b__2402,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),h),size], null));

var G__2409 = (i__2401 + (1));
i__2401 = G__2409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2402),spaceinvaders$stars$move_stars_$_iter__2399.call(null,cljs.core.chunk_rest.call(null,s__2400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2402),null);
}
} else {
var vec__2406 = cljs.core.first.call(null,s__2400__$2);
var x = cljs.core.nth.call(null,vec__2406,(0),null);
var y = cljs.core.nth.call(null,vec__2406,(1),null);
var size = cljs.core.nth.call(null,vec__2406,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),h),size], null),spaceinvaders$stars$move_stars_$_iter__2399.call(null,cljs.core.rest.call(null,s__2400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,stars);
});

//# sourceMappingURL=stars.js.map
