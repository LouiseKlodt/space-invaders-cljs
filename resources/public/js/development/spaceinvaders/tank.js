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
spaceinvaders.tank.move_tank = (function spaceinvaders$tank$move_tank(p__81155){
var map__81156 = p__81155;
var map__81156__$1 = (((((!((map__81156 == null))))?(((((map__81156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81156):map__81156);
var tank = map__81156__$1;
var x = cljs.core.get.call(null,map__81156__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dir = cljs.core.get.call(null,map__81156__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var speed = cljs.core.get.call(null,map__81156__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));

var nxt_x = (x + (dir * speed));
var ouside_canvas_QMARK_ = ((function (nxt_x,map__81156,map__81156__$1,tank,x,dir,speed){
return (function (){
return (((nxt_x > (spaceinvaders.globals.world_width - spaceinvaders.globals.wt))) || ((nxt_x < (0))));
});})(nxt_x,map__81156,map__81156__$1,tank,x,dir,speed))
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

quiltools.core.at.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),spaceinvaders.globals.yt,quiltools.core.in$.call(null,spaceinvaders.globals.wt,spaceinvaders.globals.ht,spaceinvaders.tank.tank_img.call(null,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors)))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.tank.draw_tank_menu_BANG_ = (function spaceinvaders$tank$draw_tank_menu_BANG_(n_lifes){
var y_items = (spaceinvaders.globals.hbar_menu + (22));
quil.core.fill.call(null,(255));

quil.core.no_stroke.call(null);

quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_lifes),spaceinvaders.globals.margin,y_items);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

var seq__81158 = cljs.core.seq.call(null,cljs.core.range.call(null,n_lifes));
var chunk__81159 = null;
var count__81160 = (0);
var i__81161 = (0);
while(true){
if((i__81161 < count__81160)){
var i = cljs.core._nth.call(null,chunk__81159,i__81161);
var w_81162 = (30);
var gap_81163 = (10);
var x0_81164 = ((2) * spaceinvaders.globals.margin);
var y0_81165 = (y_items - (w_81162 / (2)));
quiltools.core.at.call(null,(x0_81164 + (i * (w_81162 + gap_81163))),y0_81165,quiltools.core.in$.call(null,w_81162,(w_81162 / (2)),spaceinvaders.tank.tank_img)).call(null);


var G__81166 = seq__81158;
var G__81167 = chunk__81159;
var G__81168 = count__81160;
var G__81169 = (i__81161 + (1));
seq__81158 = G__81166;
chunk__81159 = G__81167;
count__81160 = G__81168;
i__81161 = G__81169;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__81158);
if(temp__5735__auto__){
var seq__81158__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81158__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__81158__$1);
var G__81170 = cljs.core.chunk_rest.call(null,seq__81158__$1);
var G__81171 = c__4550__auto__;
var G__81172 = cljs.core.count.call(null,c__4550__auto__);
var G__81173 = (0);
seq__81158 = G__81170;
chunk__81159 = G__81171;
count__81160 = G__81172;
i__81161 = G__81173;
continue;
} else {
var i = cljs.core.first.call(null,seq__81158__$1);
var w_81174 = (30);
var gap_81175 = (10);
var x0_81176 = ((2) * spaceinvaders.globals.margin);
var y0_81177 = (y_items - (w_81174 / (2)));
quiltools.core.at.call(null,(x0_81176 + (i * (w_81174 + gap_81175))),y0_81177,quiltools.core.in$.call(null,w_81174,(w_81174 / (2)),spaceinvaders.tank.tank_img)).call(null);


var G__81178 = cljs.core.next.call(null,seq__81158__$1);
var G__81179 = null;
var G__81180 = (0);
var G__81181 = (0);
seq__81158 = G__81178;
chunk__81159 = G__81179;
count__81160 = G__81180;
i__81161 = G__81181;
continue;
}
} else {
return null;
}
}
break;
}
});
spaceinvaders.tank.tank_collisions = (function spaceinvaders$tank$tank_collisions(items,w_item,h_item,p__81183){
var map__81184 = p__81183;
var map__81184__$1 = (((((!((map__81184 == null))))?(((((map__81184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81184):map__81184);
var xt = cljs.core.get.call(null,map__81184__$1,new cljs.core.Keyword(null,"x","x",2099068185));

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (map__81184,map__81184__$1,xt){
return (function (p1__81182_SHARP_){
return spaceinvaders.helpers.collision_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,spaceinvaders.globals.yt], null),p1__81182_SHARP_,spaceinvaders.globals.wt,spaceinvaders.globals.ht,w_item,h_item);
});})(map__81184,map__81184__$1,xt))
,items));
});
spaceinvaders.tank.draw_explosion_BANG_ = (function spaceinvaders$tank$draw_explosion_BANG_(p__81186,tank,hiss){
var map__81187 = p__81186;
var map__81187__$1 = (((((!((map__81187 == null))))?(((((map__81187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81187):map__81187);
var hit = map__81187__$1;
var x = cljs.core.get.call(null,map__81187__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__81187__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var counter = cljs.core.get.call(null,map__81187__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
quil.core.push_style.call(null);

if((counter === (0))){
hiss.play();
} else {
}

var flash_81189 = cljs.core.mod.call(null,cljs.core.quot.call(null,quil.core.frame_count.call(null),(5)),(2));
var tank_color_81190 = cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825),new cljs.core.Keyword(null,"red","red",-969428204)], null),flash_81189);
quiltools.core.at.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),spaceinvaders.globals.yt,quiltools.core.in$.call(null,spaceinvaders.globals.wt,spaceinvaders.globals.ht,spaceinvaders.tank.tank_img.call(null,spaceinvaders.globals.colors.call(null,tank_color_81190)))).call(null);

return quil.core.pop_style.call(null);
});

//# sourceMappingURL=tank.js.map?rel=1597247504079
