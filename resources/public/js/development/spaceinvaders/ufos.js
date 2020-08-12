// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.ufos');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quiltools.core');
goog.require('spaceinvaders.globals');
goog.require('spaceinvaders.helpers');
goog.require('clojure.string');
goog.require('clojure.set');
spaceinvaders.ufos.rand_n = (function spaceinvaders$ufos$rand_n(a,b){
return (a + cljs.core.rand.call(null,(b - a)));
});
spaceinvaders.ufos.rand_x = (function spaceinvaders$ufos$rand_x(x){
if(quiltools.core.n_ticks_QMARK_.call(null,(3))){
var delta = (0.1 * spaceinvaders.globals.size_ufo);
return (spaceinvaders.ufos.rand_n.call(null,(x - delta),(x + delta)) | (0));
} else {
return x;
}
});
spaceinvaders.ufos.ufo_img = (function spaceinvaders$ufos$ufo_img(color){
return (function (){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,color);

quil.core.arc.call(null,0.5,0.2,0.6,0.4,quil.core.PI,quil.core.TWO_PI,new cljs.core.Keyword(null,"pie","pie",1530441672));

quil.core.ellipse.call(null,0.5,0.25,(1),0.2);

return quil.core.pop_style.call(null);
});
});
spaceinvaders.ufos.draw_ufos_BANG_ = (function spaceinvaders$ufos$draw_ufos_BANG_(ufos,color){
quil.core.push_style.call(null);

quil.core.stroke_weight.call(null,0.5);

quil.core.stroke.call(null,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

cljs.core.apply.call(null,quil.core.fill,color);

var seq__81193_81209 = cljs.core.seq.call(null,ufos);
var chunk__81194_81210 = null;
var count__81195_81211 = (0);
var i__81196_81212 = (0);
while(true){
if((i__81196_81212 < count__81195_81211)){
var vec__81203_81213 = cljs.core._nth.call(null,chunk__81194_81210,i__81196_81212);
var xu_81214 = cljs.core.nth.call(null,vec__81203_81213,(0),null);
var yu_81215 = cljs.core.nth.call(null,vec__81203_81213,(1),null);
quiltools.core.at.call(null,xu_81214,yu_81215,quiltools.core.in$.call(null,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.ufos.ufo_img.call(null,color))).call(null);


var G__81216 = seq__81193_81209;
var G__81217 = chunk__81194_81210;
var G__81218 = count__81195_81211;
var G__81219 = (i__81196_81212 + (1));
seq__81193_81209 = G__81216;
chunk__81194_81210 = G__81217;
count__81195_81211 = G__81218;
i__81196_81212 = G__81219;
continue;
} else {
var temp__5735__auto___81220 = cljs.core.seq.call(null,seq__81193_81209);
if(temp__5735__auto___81220){
var seq__81193_81221__$1 = temp__5735__auto___81220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81193_81221__$1)){
var c__4550__auto___81222 = cljs.core.chunk_first.call(null,seq__81193_81221__$1);
var G__81223 = cljs.core.chunk_rest.call(null,seq__81193_81221__$1);
var G__81224 = c__4550__auto___81222;
var G__81225 = cljs.core.count.call(null,c__4550__auto___81222);
var G__81226 = (0);
seq__81193_81209 = G__81223;
chunk__81194_81210 = G__81224;
count__81195_81211 = G__81225;
i__81196_81212 = G__81226;
continue;
} else {
var vec__81206_81227 = cljs.core.first.call(null,seq__81193_81221__$1);
var xu_81228 = cljs.core.nth.call(null,vec__81206_81227,(0),null);
var yu_81229 = cljs.core.nth.call(null,vec__81206_81227,(1),null);
quiltools.core.at.call(null,xu_81228,yu_81229,quiltools.core.in$.call(null,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.ufos.ufo_img.call(null,color))).call(null);


var G__81230 = cljs.core.next.call(null,seq__81193_81221__$1);
var G__81231 = null;
var G__81232 = (0);
var G__81233 = (0);
seq__81193_81209 = G__81230;
chunk__81194_81210 = G__81231;
count__81195_81211 = G__81232;
i__81196_81212 = G__81233;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.ufos.flash_ufo_BANG_ = (function spaceinvaders$ufos$flash_ufo_BANG_(x,y,counter,bang){
if(cljs.core.truth_((function (){var and__4120__auto__ = bang;
if(cljs.core.truth_(and__4120__auto__)){
return (counter === (0));
} else {
return and__4120__auto__;
}
})())){
bang.play();
} else {
}

quil.core.push_style.call(null);

quil.core.stroke_weight.call(null,0.5);

quil.core.stroke.call(null,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

var blink_time_81234 = (4);
var cs_81235 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yellow-rose","yellow-rose",-1393460454),new cljs.core.Keyword(null,"electric-red","electric-red",-88027711),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"rose-garnet","rose-garnet",37248167)], null);
var phase_81236 = cljs.core.mod.call(null,cljs.core.quot.call(null,counter,blink_time_81234),cljs.core.count.call(null,cs_81235));
var next_color_81237 = spaceinvaders.globals.colors.call(null,cs_81235.call(null,phase_81236));
quiltools.core.at.call(null,x,y,quiltools.core.in$.call(null,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.ufos.ufo_img.call(null,next_color_81237))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.ufos.descend_ufo_BANG_ = (function spaceinvaders$ufos$descend_ufo_BANG_(x,y,counter){
var dy = cljs.core.mod.call(null,counter,(30));
return spaceinvaders.ufos.flash_ufo_BANG_.call(null,x,(y + dy),counter,null);
});
spaceinvaders.ufos.draw_explosion_BANG_ = (function spaceinvaders$ufos$draw_explosion_BANG_(p__81238,bang){
var map__81239 = p__81238;
var map__81239__$1 = (((((!((map__81239 == null))))?(((((map__81239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81239):map__81239);
var hit = map__81239__$1;
var x = cljs.core.get.call(null,map__81239__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__81239__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var counter = cljs.core.get.call(null,map__81239__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
if(((((0) <= counter)) && ((counter <= (30))))){
return spaceinvaders.ufos.flash_ufo_BANG_.call(null,x,y,counter,bang);
} else {
if(((((21) <= counter)) && ((counter <= (60))))){
return spaceinvaders.ufos.descend_ufo_BANG_.call(null,x,y,counter);
} else {
return null;
}
}
});
spaceinvaders.ufos.detect_explosions = (function spaceinvaders$ufos$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function spaceinvaders$ufos$detect_explosions_$_iter__81241(s__81242){
return (new cljs.core.LazySeq(null,(function (){
var s__81242__$1 = s__81242;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__81242__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__81242__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function spaceinvaders$ufos$detect_explosions_$_iter__81241_$_iter__81243(s__81244){
return (new cljs.core.LazySeq(null,((function (s__81242__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__81244__$1 = s__81244;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__81244__$1);
if(temp__5735__auto____$1){
var s__81244__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81244__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__81244__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__81246 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__81245 = (0);
while(true){
if((i__81245 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__81245);
if(spaceinvaders.helpers.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
cljs.core.chunk_append.call(null,b__81246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__81247 = (i__81245 + (1));
i__81245 = G__81247;
continue;
} else {
var G__81248 = (i__81245 + (1));
i__81245 = G__81248;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81246),spaceinvaders$ufos$detect_explosions_$_iter__81241_$_iter__81243.call(null,cljs.core.chunk_rest.call(null,s__81244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81246),null);
}
} else {
var missile = cljs.core.first.call(null,s__81244__$2);
if(spaceinvaders.helpers.collision_QMARK_.call(null,ufo,missile,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,spaceinvaders.globals.wm,spaceinvaders.globals.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),spaceinvaders$ufos$detect_explosions_$_iter__81241_$_iter__81243.call(null,cljs.core.rest.call(null,s__81244__$2)));
} else {
var G__81249 = cljs.core.rest.call(null,s__81244__$2);
s__81244__$1 = G__81249;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__81242__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__81242__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,spaceinvaders$ufos$detect_explosions_$_iter__81241.call(null,cljs.core.rest.call(null,s__81242__$1)));
} else {
var G__81250 = cljs.core.rest.call(null,s__81242__$1);
s__81242__$1 = G__81250;
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
spaceinvaders.ufos.create_ufo = (function spaceinvaders$ufos$create_ufo(){
var x = (spaceinvaders.ufos.rand_n.call(null,spaceinvaders.globals.margin,(spaceinvaders.globals.world_width - spaceinvaders.globals.margin)) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(spaceinvaders.globals.size_ufo / (2))], null);
});
spaceinvaders.ufos.update_ufos = (function spaceinvaders$ufos$update_ufos(ufos){
var freq = (1);
var new_ufos = ((spaceinvaders.helpers.add_new_QMARK_.call(null,ufos,spaceinvaders.globals.max_ufos,freq))?cljs.core.conj.call(null,ufos,spaceinvaders.ufos.create_ufo.call(null)):ufos);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_ufos){
return (function (p__81251){
var vec__81252 = p__81251;
var x = cljs.core.nth.call(null,vec__81252,(0),null);
var y = cljs.core.nth.call(null,vec__81252,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceinvaders.ufos.rand_x.call(null,x),(y + spaceinvaders.globals.vu)], null);
});})(freq,new_ufos))
,new_ufos));
});

//# sourceMappingURL=ufos.js.map?rel=1597247504165
