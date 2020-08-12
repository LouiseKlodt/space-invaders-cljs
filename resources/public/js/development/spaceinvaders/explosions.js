// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.explosions');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quiltools.core');
goog.require('spaceinvaders.globals');
spaceinvaders.explosions.max_bombs = (1);
spaceinvaders.explosions.wb = (0.2 * spaceinvaders.globals.size_ufo);
spaceinvaders.explosions.collision_QMARK_ = (function spaceinvaders$explosions$collision_QMARK_(p__29766,p__29767,wa,ha,wb,hb){
var vec__29768 = p__29766;
var xa = cljs.core.nth.call(null,vec__29768,(0),null);
var ya = cljs.core.nth.call(null,vec__29768,(1),null);
var vec__29771 = p__29767;
var xb = cljs.core.nth.call(null,vec__29771,(0),null);
var yb = cljs.core.nth.call(null,vec__29771,(1),null);

return ((((((xb - wa) <= xa)) && ((xa <= (xb + wb))))) && (((((yb - ha) <= ya)) && ((ya <= (yb + hb))))));
});
spaceinvaders.explosions.detect_explosions = (function spaceinvaders$explosions$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function spaceinvaders$explosions$detect_explosions_$_iter__29774(s__29775){
return (new cljs.core.LazySeq(null,(function (){
var s__29775__$1 = s__29775;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__29775__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__29775__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function spaceinvaders$explosions$detect_explosions_$_iter__29774_$_iter__29776(s__29777){
return (new cljs.core.LazySeq(null,((function (s__29775__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__29777__$1 = s__29777;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__29777__$1);
if(temp__5735__auto____$1){
var s__29777__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29777__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__29777__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__29779 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__29778 = (0);
while(true){
if((i__29778 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__29778);
if(spaceinvaders.explosions.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
cljs.core.chunk_append.call(null,b__29779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__29780 = (i__29778 + (1));
i__29778 = G__29780;
continue;
} else {
var G__29781 = (i__29778 + (1));
i__29778 = G__29781;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29779),spaceinvaders$explosions$detect_explosions_$_iter__29774_$_iter__29776.call(null,cljs.core.chunk_rest.call(null,s__29777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29779),null);
}
} else {
var missile = cljs.core.first.call(null,s__29777__$2);
if(spaceinvaders.explosions.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),spaceinvaders$explosions$detect_explosions_$_iter__29774_$_iter__29776.call(null,cljs.core.rest.call(null,s__29777__$2)));
} else {
var G__29782 = cljs.core.rest.call(null,s__29777__$2);
s__29777__$1 = G__29782;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29775__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__29775__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,spaceinvaders$explosions$detect_explosions_$_iter__29774.call(null,cljs.core.rest.call(null,s__29775__$1)));
} else {
var G__29783 = cljs.core.rest.call(null,s__29775__$1);
s__29775__$1 = G__29783;
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
spaceinvaders.explosions.exploded = (function spaceinvaders$explosions$exploded(bombs,p__29785){
var map__29786 = p__29785;
var map__29786__$1 = (((((!((map__29786 == null))))?(((((map__29786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);
var xt = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"x","x",2099068185));

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (map__29786,map__29786__$1,xt){
return (function (p1__29784_SHARP_){
return spaceinvaders.explosions.collision_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,spaceinvaders.explosions.yt], null),p1__29784_SHARP_,spaceinvaders.globals.wt,spaceinvaders.explosions.ht,spaceinvaders.explosions.wb,spaceinvaders.explosions.wb);
});})(map__29786,map__29786__$1,xt))
,bombs));
});
spaceinvaders.explosions.missile_img = (function spaceinvaders$explosions$missile_img(){
return quil.core.quad.call(null,0.5,0.2,(1),(1),0.5,0.7,(0),(1));
});
spaceinvaders.explosions.draw_missiles_BANG_ = (function spaceinvaders$explosions$draw_missiles_BANG_(missiles,shoot){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

var seq__29788_29804 = cljs.core.seq.call(null,missiles);
var chunk__29789_29805 = null;
var count__29790_29806 = (0);
var i__29791_29807 = (0);
while(true){
if((i__29791_29807 < count__29790_29806)){
var vec__29798_29808 = cljs.core._nth.call(null,chunk__29789_29805,i__29791_29807);
var x_29809 = cljs.core.nth.call(null,vec__29798_29808,(0),null);
var y_29810 = cljs.core.nth.call(null,vec__29798_29808,(1),null);
quiltools.core.at.call(null,((x_29809 + (spaceinvaders.globals.wt / (2))) - (spaceinvaders.globals.wm / (2))),y_29810,quiltools.core.in$.call(null,spaceinvaders.globals.wm,spaceinvaders.globals.wm,spaceinvaders.explosions.missile_img)).call(null);


var G__29811 = seq__29788_29804;
var G__29812 = chunk__29789_29805;
var G__29813 = count__29790_29806;
var G__29814 = (i__29791_29807 + (1));
seq__29788_29804 = G__29811;
chunk__29789_29805 = G__29812;
count__29790_29806 = G__29813;
i__29791_29807 = G__29814;
continue;
} else {
var temp__5735__auto___29815 = cljs.core.seq.call(null,seq__29788_29804);
if(temp__5735__auto___29815){
var seq__29788_29816__$1 = temp__5735__auto___29815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29788_29816__$1)){
var c__4550__auto___29817 = cljs.core.chunk_first.call(null,seq__29788_29816__$1);
var G__29818 = cljs.core.chunk_rest.call(null,seq__29788_29816__$1);
var G__29819 = c__4550__auto___29817;
var G__29820 = cljs.core.count.call(null,c__4550__auto___29817);
var G__29821 = (0);
seq__29788_29804 = G__29818;
chunk__29789_29805 = G__29819;
count__29790_29806 = G__29820;
i__29791_29807 = G__29821;
continue;
} else {
var vec__29801_29822 = cljs.core.first.call(null,seq__29788_29816__$1);
var x_29823 = cljs.core.nth.call(null,vec__29801_29822,(0),null);
var y_29824 = cljs.core.nth.call(null,vec__29801_29822,(1),null);
quiltools.core.at.call(null,((x_29823 + (spaceinvaders.globals.wt / (2))) - (spaceinvaders.globals.wm / (2))),y_29824,quiltools.core.in$.call(null,spaceinvaders.globals.wm,spaceinvaders.globals.wm,spaceinvaders.explosions.missile_img)).call(null);


var G__29825 = cljs.core.next.call(null,seq__29788_29816__$1);
var G__29826 = null;
var G__29827 = (0);
var G__29828 = (0);
seq__29788_29804 = G__29825;
chunk__29789_29805 = G__29826;
count__29790_29806 = G__29827;
i__29791_29807 = G__29828;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.explosions.munition_img = (function spaceinvaders$explosions$munition_img(n_missiles){
return (function (){
quil.core.push_style.call(null);

quil.core.stroke.call(null,(120));

var spacing_29833 = 0.04;
var w_29834 = (((1) - (spacing_29833 * (spaceinvaders.globals.max_missiles - (1)))) / spaceinvaders.globals.max_missiles);
var seq__29829_29835 = cljs.core.seq.call(null,cljs.core.range.call(null,spaceinvaders.globals.max_missiles));
var chunk__29830_29836 = null;
var count__29831_29837 = (0);
var i__29832_29838 = (0);
while(true){
if((i__29832_29838 < count__29831_29837)){
var n_29839 = cljs.core._nth.call(null,chunk__29830_29836,i__29832_29838);
if((n_29839 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));
}

quiltools.core.at.call(null,((w_29834 / (2)) + (n_29839 * (w_29834 + spacing_29833))),(0),quiltools.core.in$.call(null,w_29834,w_29834,spaceinvaders.explosions.missile_img)).call(null);


var G__29840 = seq__29829_29835;
var G__29841 = chunk__29830_29836;
var G__29842 = count__29831_29837;
var G__29843 = (i__29832_29838 + (1));
seq__29829_29835 = G__29840;
chunk__29830_29836 = G__29841;
count__29831_29837 = G__29842;
i__29832_29838 = G__29843;
continue;
} else {
var temp__5735__auto___29844 = cljs.core.seq.call(null,seq__29829_29835);
if(temp__5735__auto___29844){
var seq__29829_29845__$1 = temp__5735__auto___29844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29829_29845__$1)){
var c__4550__auto___29846 = cljs.core.chunk_first.call(null,seq__29829_29845__$1);
var G__29847 = cljs.core.chunk_rest.call(null,seq__29829_29845__$1);
var G__29848 = c__4550__auto___29846;
var G__29849 = cljs.core.count.call(null,c__4550__auto___29846);
var G__29850 = (0);
seq__29829_29835 = G__29847;
chunk__29830_29836 = G__29848;
count__29831_29837 = G__29849;
i__29832_29838 = G__29850;
continue;
} else {
var n_29851 = cljs.core.first.call(null,seq__29829_29845__$1);
if((n_29851 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));
}

quiltools.core.at.call(null,((w_29834 / (2)) + (n_29851 * (w_29834 + spacing_29833))),(0),quiltools.core.in$.call(null,w_29834,w_29834,spaceinvaders.explosions.missile_img)).call(null);


var G__29852 = cljs.core.next.call(null,seq__29829_29845__$1);
var G__29853 = null;
var G__29854 = (0);
var G__29855 = (0);
seq__29829_29835 = G__29852;
chunk__29830_29836 = G__29853;
count__29831_29837 = G__29854;
i__29832_29838 = G__29855;
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
spaceinvaders.explosions.update_missiles = (function spaceinvaders$explosions$update_missiles(missiles){
var dy = ((-2) * spaceinvaders.globals.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (dy){
return (function (p__29856){
var vec__29857 = p__29856;
var x = cljs.core.nth.call(null,vec__29857,(0),null);
var y = cljs.core.nth.call(null,vec__29857,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(dy))
,missiles));
});
spaceinvaders.explosions.draw_bombs_BANG_ = (function spaceinvaders$explosions$draw_bombs_BANG_(bombs){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

var w_29876 = (0.24 * spaceinvaders.globals.size_ufo);
var seq__29860_29877 = cljs.core.seq.call(null,bombs);
var chunk__29861_29878 = null;
var count__29862_29879 = (0);
var i__29863_29880 = (0);
while(true){
if((i__29863_29880 < count__29862_29879)){
var vec__29870_29881 = cljs.core._nth.call(null,chunk__29861_29878,i__29863_29880);
var x_29882 = cljs.core.nth.call(null,vec__29870_29881,(0),null);
var y_29883 = cljs.core.nth.call(null,vec__29870_29881,(1),null);
quil.core.ellipse.call(null,x_29882,y_29883,w_29876,w_29876);


var G__29884 = seq__29860_29877;
var G__29885 = chunk__29861_29878;
var G__29886 = count__29862_29879;
var G__29887 = (i__29863_29880 + (1));
seq__29860_29877 = G__29884;
chunk__29861_29878 = G__29885;
count__29862_29879 = G__29886;
i__29863_29880 = G__29887;
continue;
} else {
var temp__5735__auto___29888 = cljs.core.seq.call(null,seq__29860_29877);
if(temp__5735__auto___29888){
var seq__29860_29889__$1 = temp__5735__auto___29888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29860_29889__$1)){
var c__4550__auto___29890 = cljs.core.chunk_first.call(null,seq__29860_29889__$1);
var G__29891 = cljs.core.chunk_rest.call(null,seq__29860_29889__$1);
var G__29892 = c__4550__auto___29890;
var G__29893 = cljs.core.count.call(null,c__4550__auto___29890);
var G__29894 = (0);
seq__29860_29877 = G__29891;
chunk__29861_29878 = G__29892;
count__29862_29879 = G__29893;
i__29863_29880 = G__29894;
continue;
} else {
var vec__29873_29895 = cljs.core.first.call(null,seq__29860_29889__$1);
var x_29896 = cljs.core.nth.call(null,vec__29873_29895,(0),null);
var y_29897 = cljs.core.nth.call(null,vec__29873_29895,(1),null);
quil.core.ellipse.call(null,x_29896,y_29897,w_29876,w_29876);


var G__29898 = cljs.core.next.call(null,seq__29860_29889__$1);
var G__29899 = null;
var G__29900 = (0);
var G__29901 = (0);
seq__29860_29877 = G__29898;
chunk__29861_29878 = G__29899;
count__29862_29879 = G__29900;
i__29863_29880 = G__29901;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.explosions.add_new_QMARK_ = (function spaceinvaders$explosions$add_new_QMARK_(s,limit,freq){

return (((cljs.core.count.call(null,s) <= limit)) && (quiltools.core.n_ticks_QMARK_.call(null,(freq * spaceinvaders.globals.frame_rate))));
});
spaceinvaders.explosions.new_bomb = (function spaceinvaders$explosions$new_bomb(ufos){
var vec__29902 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ufos));
var x = cljs.core.nth.call(null,vec__29902,(0),null);
var y = cljs.core.nth.call(null,vec__29902,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(spaceinvaders.globals.size_ufo2 + x),(spaceinvaders.globals.size_ufo2 + y)], null);
});
spaceinvaders.explosions.update_bombs = (function spaceinvaders$explosions$update_bombs(bombs,ufos){

var freq = (1);
var new_bombs = ((((cljs.core.seq.call(null,ufos)) && (spaceinvaders.explosions.add_new_QMARK_.call(null,bombs,spaceinvaders.explosions.max_bombs,freq))))?cljs.core.conj.call(null,bombs,spaceinvaders.explosions.new_bomb.call(null,ufos)):bombs);
var dy = ((3) * spaceinvaders.globals.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_bombs,dy){
return (function (p__29905){
var vec__29906 = p__29905;
var x = cljs.core.nth.call(null,vec__29906,(0),null);
var y = cljs.core.nth.call(null,vec__29906,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(freq,new_bombs,dy))
,new_bombs));
});

//# sourceMappingURL=explosions.js.map?rel=1596981881949
