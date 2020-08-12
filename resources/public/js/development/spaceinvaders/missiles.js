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

var spacing_81021 = 0.04;
var w_81022 = (((1) - (spacing_81021 * (spaceinvaders.globals.max_missiles - (1)))) / spaceinvaders.globals.max_missiles);
var seq__81017_81023 = cljs.core.seq.call(null,cljs.core.range.call(null,spaceinvaders.globals.max_missiles));
var chunk__81018_81024 = null;
var count__81019_81025 = (0);
var i__81020_81026 = (0);
while(true){
if((i__81020_81026 < count__81019_81025)){
var n_81027 = cljs.core._nth.call(null,chunk__81018_81024,i__81020_81026);
if((n_81027 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));
}

quiltools.core.at.call(null,((w_81022 / (2)) + (n_81027 * (w_81022 + spacing_81021))),(0),quiltools.core.in$.call(null,w_81022,w_81022,spaceinvaders.missiles.missile_img)).call(null);


var G__81028 = seq__81017_81023;
var G__81029 = chunk__81018_81024;
var G__81030 = count__81019_81025;
var G__81031 = (i__81020_81026 + (1));
seq__81017_81023 = G__81028;
chunk__81018_81024 = G__81029;
count__81019_81025 = G__81030;
i__81020_81026 = G__81031;
continue;
} else {
var temp__5735__auto___81032 = cljs.core.seq.call(null,seq__81017_81023);
if(temp__5735__auto___81032){
var seq__81017_81033__$1 = temp__5735__auto___81032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81017_81033__$1)){
var c__4550__auto___81034 = cljs.core.chunk_first.call(null,seq__81017_81033__$1);
var G__81035 = cljs.core.chunk_rest.call(null,seq__81017_81033__$1);
var G__81036 = c__4550__auto___81034;
var G__81037 = cljs.core.count.call(null,c__4550__auto___81034);
var G__81038 = (0);
seq__81017_81023 = G__81035;
chunk__81018_81024 = G__81036;
count__81019_81025 = G__81037;
i__81020_81026 = G__81038;
continue;
} else {
var n_81039 = cljs.core.first.call(null,seq__81017_81033__$1);
if((n_81039 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));
}

quiltools.core.at.call(null,((w_81022 / (2)) + (n_81039 * (w_81022 + spacing_81021))),(0),quiltools.core.in$.call(null,w_81022,w_81022,spaceinvaders.missiles.missile_img)).call(null);


var G__81040 = cljs.core.next.call(null,seq__81017_81033__$1);
var G__81041 = null;
var G__81042 = (0);
var G__81043 = (0);
seq__81017_81023 = G__81040;
chunk__81018_81024 = G__81041;
count__81019_81025 = G__81042;
i__81020_81026 = G__81043;
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

var seq__81044_81060 = cljs.core.seq.call(null,missiles);
var chunk__81045_81061 = null;
var count__81046_81062 = (0);
var i__81047_81063 = (0);
while(true){
if((i__81047_81063 < count__81046_81062)){
var vec__81054_81064 = cljs.core._nth.call(null,chunk__81045_81061,i__81047_81063);
var x_81065 = cljs.core.nth.call(null,vec__81054_81064,(0),null);
var y_81066 = cljs.core.nth.call(null,vec__81054_81064,(1),null);
quiltools.core.at.call(null,((x_81065 + (spaceinvaders.globals.wt / (2))) - (spaceinvaders.globals.wm / (2))),y_81066,quiltools.core.in$.call(null,spaceinvaders.globals.wm,spaceinvaders.globals.wm,spaceinvaders.missiles.missile_img)).call(null);


var G__81067 = seq__81044_81060;
var G__81068 = chunk__81045_81061;
var G__81069 = count__81046_81062;
var G__81070 = (i__81047_81063 + (1));
seq__81044_81060 = G__81067;
chunk__81045_81061 = G__81068;
count__81046_81062 = G__81069;
i__81047_81063 = G__81070;
continue;
} else {
var temp__5735__auto___81071 = cljs.core.seq.call(null,seq__81044_81060);
if(temp__5735__auto___81071){
var seq__81044_81072__$1 = temp__5735__auto___81071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81044_81072__$1)){
var c__4550__auto___81073 = cljs.core.chunk_first.call(null,seq__81044_81072__$1);
var G__81074 = cljs.core.chunk_rest.call(null,seq__81044_81072__$1);
var G__81075 = c__4550__auto___81073;
var G__81076 = cljs.core.count.call(null,c__4550__auto___81073);
var G__81077 = (0);
seq__81044_81060 = G__81074;
chunk__81045_81061 = G__81075;
count__81046_81062 = G__81076;
i__81047_81063 = G__81077;
continue;
} else {
var vec__81057_81078 = cljs.core.first.call(null,seq__81044_81072__$1);
var x_81079 = cljs.core.nth.call(null,vec__81057_81078,(0),null);
var y_81080 = cljs.core.nth.call(null,vec__81057_81078,(1),null);
quiltools.core.at.call(null,((x_81079 + (spaceinvaders.globals.wt / (2))) - (spaceinvaders.globals.wm / (2))),y_81080,quiltools.core.in$.call(null,spaceinvaders.globals.wm,spaceinvaders.globals.wm,spaceinvaders.missiles.missile_img)).call(null);


var G__81081 = cljs.core.next.call(null,seq__81044_81072__$1);
var G__81082 = null;
var G__81083 = (0);
var G__81084 = (0);
seq__81044_81060 = G__81081;
chunk__81045_81061 = G__81082;
count__81046_81062 = G__81083;
i__81047_81063 = G__81084;
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

var w_81085 = ((16) * spaceinvaders.globals.max_missiles);
var x0_81086 = ((spaceinvaders.globals.world_width - w_81085) - spaceinvaders.globals.margin);
var y0_81087 = ((spaceinvaders.globals.hbar_menu + spaceinvaders.globals.offset) + spaceinvaders.globals.offset);
quiltools.core.at.call(null,x0_81086,y0_81087,quiltools.core.in$.call(null,w_81085,w_81085,spaceinvaders.missiles.missiles_menu.call(null,n_missiles))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.missiles.update_missiles = (function spaceinvaders$missiles$update_missiles(missiles){
var dy = ((-2) * spaceinvaders.globals.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (dy){
return (function (p__81088){
var vec__81089 = p__81088;
var x = cljs.core.nth.call(null,vec__81089,(0),null);
var y = cljs.core.nth.call(null,vec__81089,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(dy))
,missiles));
});
spaceinvaders.missiles.detect_explosions = (function spaceinvaders$missiles$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function spaceinvaders$missiles$detect_explosions_$_iter__81092(s__81093){
return (new cljs.core.LazySeq(null,(function (){
var s__81093__$1 = s__81093;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__81093__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__81093__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function spaceinvaders$missiles$detect_explosions_$_iter__81092_$_iter__81094(s__81095){
return (new cljs.core.LazySeq(null,((function (s__81093__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__81095__$1 = s__81095;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__81095__$1);
if(temp__5735__auto____$1){
var s__81095__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81095__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__81095__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__81097 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__81096 = (0);
while(true){
if((i__81096 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__81096);
if(spaceinvaders.helpers.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
cljs.core.chunk_append.call(null,b__81097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__81098 = (i__81096 + (1));
i__81096 = G__81098;
continue;
} else {
var G__81099 = (i__81096 + (1));
i__81096 = G__81099;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81097),spaceinvaders$missiles$detect_explosions_$_iter__81092_$_iter__81094.call(null,cljs.core.chunk_rest.call(null,s__81095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81097),null);
}
} else {
var missile = cljs.core.first.call(null,s__81095__$2);
if(spaceinvaders.helpers.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),spaceinvaders$missiles$detect_explosions_$_iter__81092_$_iter__81094.call(null,cljs.core.rest.call(null,s__81095__$2)));
} else {
var G__81100 = cljs.core.rest.call(null,s__81095__$2);
s__81095__$1 = G__81100;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__81093__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__81093__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,spaceinvaders$missiles$detect_explosions_$_iter__81092.call(null,cljs.core.rest.call(null,s__81093__$1)));
} else {
var G__81101 = cljs.core.rest.call(null,s__81093__$1);
s__81093__$1 = G__81101;
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

//# sourceMappingURL=missiles.js.map?rel=1597247503970
