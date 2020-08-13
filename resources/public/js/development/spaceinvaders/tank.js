// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.tank');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quiltools.core');
goog.require('spaceinvaders.globals');
goog.require('spaceinvaders.helpers');
goog.require('clojure.string');
goog.require('clojure.set');
spaceinvaders.tank.create_tank = (function spaceinvaders$tank$create_tank(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(spaceinvaders.globals.world_width / (2)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),8.0], null);
});
spaceinvaders.tank.speed_up = (function spaceinvaders$tank$speed_up(speed){
var x__4222__auto__ = 16.0;
var y__4223__auto__ = (speed + (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
spaceinvaders.tank.speed_down = (function spaceinvaders$tank$speed_down(speed){
var x__4219__auto__ = 0.0;
var y__4220__auto__ = (speed - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
spaceinvaders.tank.move_tank = (function spaceinvaders$tank$move_tank(p__2628){
var map__2629 = p__2628;
var map__2629__$1 = (((((!((map__2629 == null))))?(((((map__2629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2629):map__2629);
var tank = map__2629__$1;
var x = cljs.core.get.call(null,map__2629__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dir = cljs.core.get.call(null,map__2629__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var speed = cljs.core.get.call(null,map__2629__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));

var nxt_x = (x + (dir * speed));
var ouside_canvas_QMARK_ = ((function (nxt_x,map__2629,map__2629__$1,tank,x,dir,speed){
return (function (){
return (((nxt_x > (spaceinvaders.globals.world_width - spaceinvaders.globals.wt))) || ((nxt_x < (0))));
});})(nxt_x,map__2629,map__2629__$1,tank,x,dir,speed))
;
var nxt_dir = ((ouside_canvas_QMARK_.call(null))?((-1) * dir):dir);
return cljs.core.assoc.call(null,tank,new cljs.core.Keyword(null,"x","x",2099068185),((nxt_dir * speed) + x),new cljs.core.Keyword(null,"dir","dir",1734754661),nxt_dir);
});
spaceinvaders.tank.tank_img = (function spaceinvaders$tank$tank_img(color){
return (function (){
cljs.core.apply.call(null,quil.core.fill,color);

quil.core.rect.call(null,0.475,0.0,0.05,0.2);

quil.core.rect.call(null,0.4,0.15,0.2,0.2);

quil.core.rect.call(null,0.1,0.35,0.8,0.2);

return quil.core.rect.call(null,0.0,0.5,(1),0.5);
});
});
spaceinvaders.tank.draw_tank_BANG_ = (function spaceinvaders$tank$draw_tank_BANG_(tank){
quil.core.push_style.call(null);

quil.core.no_stroke.call(null);

quil.core.fill.call(null,(255));

quiltools.core.at.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),spaceinvaders.globals.yt,quiltools.core.in$.call(null,spaceinvaders.globals.wt,spaceinvaders.globals.ht,spaceinvaders.tank.tank_img.call(null,new cljs.core.Keyword(null,"aqua","aqua",745022417).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors)))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.tank.draw_tank_menu_BANG_ = (function spaceinvaders$tank$draw_tank_menu_BANG_(n_lifes){
var y_items = (spaceinvaders.globals.hbar_menu + (22));
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"aqua","aqua",745022417).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

quil.core.no_stroke.call(null);

quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_lifes),spaceinvaders.globals.margin,y_items);

var seq__2631 = cljs.core.seq.call(null,cljs.core.range.call(null,n_lifes));
var chunk__2632 = null;
var count__2633 = (0);
var i__2634 = (0);
while(true){
if((i__2634 < count__2633)){
var i = cljs.core._nth.call(null,chunk__2632,i__2634);
var w_2635 = (30);
var gap_2636 = (10);
var x0_2637 = ((2) * spaceinvaders.globals.margin);
var y0_2638 = (y_items - (w_2635 / (2)));
quiltools.core.at.call(null,(x0_2637 + (i * (w_2635 + gap_2636))),y0_2638,quiltools.core.in$.call(null,w_2635,(w_2635 / (2)),spaceinvaders.tank.tank_img.call(null,new cljs.core.Keyword(null,"aqua","aqua",745022417).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors)))).call(null);


var G__2639 = seq__2631;
var G__2640 = chunk__2632;
var G__2641 = count__2633;
var G__2642 = (i__2634 + (1));
seq__2631 = G__2639;
chunk__2632 = G__2640;
count__2633 = G__2641;
i__2634 = G__2642;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2631);
if(temp__5735__auto__){
var seq__2631__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2631__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__2631__$1);
var G__2643 = cljs.core.chunk_rest.call(null,seq__2631__$1);
var G__2644 = c__4550__auto__;
var G__2645 = cljs.core.count.call(null,c__4550__auto__);
var G__2646 = (0);
seq__2631 = G__2643;
chunk__2632 = G__2644;
count__2633 = G__2645;
i__2634 = G__2646;
continue;
} else {
var i = cljs.core.first.call(null,seq__2631__$1);
var w_2647 = (30);
var gap_2648 = (10);
var x0_2649 = ((2) * spaceinvaders.globals.margin);
var y0_2650 = (y_items - (w_2647 / (2)));
quiltools.core.at.call(null,(x0_2649 + (i * (w_2647 + gap_2648))),y0_2650,quiltools.core.in$.call(null,w_2647,(w_2647 / (2)),spaceinvaders.tank.tank_img.call(null,new cljs.core.Keyword(null,"aqua","aqua",745022417).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors)))).call(null);


var G__2651 = cljs.core.next.call(null,seq__2631__$1);
var G__2652 = null;
var G__2653 = (0);
var G__2654 = (0);
seq__2631 = G__2651;
chunk__2632 = G__2652;
count__2633 = G__2653;
i__2634 = G__2654;
continue;
}
} else {
return null;
}
}
break;
}
});
spaceinvaders.tank.tank_collisions = (function spaceinvaders$tank$tank_collisions(items,w_item,h_item,p__2656){
var map__2657 = p__2656;
var map__2657__$1 = (((((!((map__2657 == null))))?(((((map__2657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2657):map__2657);
var xt = cljs.core.get.call(null,map__2657__$1,new cljs.core.Keyword(null,"x","x",2099068185));

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (map__2657,map__2657__$1,xt){
return (function (p1__2655_SHARP_){
return spaceinvaders.helpers.collision_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,spaceinvaders.globals.yt], null),p1__2655_SHARP_,spaceinvaders.globals.wt,spaceinvaders.globals.ht,w_item,h_item);
});})(map__2657,map__2657__$1,xt))
,items));
});
spaceinvaders.tank.draw_explosion_BANG_ = (function spaceinvaders$tank$draw_explosion_BANG_(p__2659,tank,hiss){
var map__2660 = p__2659;
var map__2660__$1 = (((((!((map__2660 == null))))?(((((map__2660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2660):map__2660);
var hit = map__2660__$1;
var x = cljs.core.get.call(null,map__2660__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__2660__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var counter = cljs.core.get.call(null,map__2660__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
quil.core.push_style.call(null);

if((counter === (0))){
hiss.play();
} else {
}

var flash_2662 = cljs.core.mod.call(null,cljs.core.quot.call(null,quil.core.frame_count.call(null),(5)),(2));
var tank_color_2663 = cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825),new cljs.core.Keyword(null,"red","red",-969428204)], null),flash_2662);
quiltools.core.at.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),spaceinvaders.globals.yt,quiltools.core.in$.call(null,spaceinvaders.globals.wt,spaceinvaders.globals.ht,spaceinvaders.tank.tank_img.call(null,spaceinvaders.globals.colors.call(null,tank_color_2663)))).call(null);

return quil.core.pop_style.call(null);
});

//# sourceMappingURL=tank.js.map
