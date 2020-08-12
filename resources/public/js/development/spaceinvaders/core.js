// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quiltools.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljsjs.howler');
goog.require('spaceinvaders.stars');
goog.require('spaceinvaders.ufos');
goog.require('spaceinvaders.tank');
goog.require('spaceinvaders.missiles');
goog.require('spaceinvaders.bombs');
goog.require('spaceinvaders.helpers');
goog.require('spaceinvaders.globals');
spaceinvaders.core.init_state_BANG_ = (function spaceinvaders$core$init_state_BANG_(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hiss","hiss",-1640157277),new cljs.core.Keyword(null,"lifes","lifes",-2077908604),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"shoot","shoot",-696325137),new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"bgmusic","bgmusic",-507510575),new cljs.core.Keyword(null,"missiles","missiles",-600699149),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword(null,"tank-hits","tank-hits",1069926293),new cljs.core.Keyword(null,"ufos","ufos",2106350236),new cljs.core.Keyword(null,"bombs","bombs",1955561180),new cljs.core.Keyword(null,"state-counter","state-counter",494277693),new cljs.core.Keyword(null,"bang","bang",717730846),new cljs.core.Keyword(null,"mute","mute",1151223646)],[hissingsound(),(3),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"playing","playing",70013335),shootsound(),spaceinvaders.tank.create_tank.call(null),themesound(),cljs.core.PersistentHashSet.EMPTY,(0),spaceinvaders.stars.rand_stars.call(null,(120),spaceinvaders.globals.world_width,spaceinvaders.globals.world_height),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,(0),bangsound(),true]);
});
spaceinvaders.core.setup = (function spaceinvaders$core$setup(){
quil.core.frame_rate.call(null,spaceinvaders.globals.frame_rate);

cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

quil.core.text_font.call(null,"VT323-Regular");

quil.core.text_size.call(null,(24));

return spaceinvaders.core.init_state_BANG_.call(null);
});
spaceinvaders.core.update_state = (function spaceinvaders$core$update_state(p__81392){
var map__81393 = p__81392;
var map__81393__$1 = (((((!((map__81393 == null))))?(((((map__81393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81393):map__81393);
var state = map__81393__$1;
var ufos = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var state_counter = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"state-counter","state-counter",494277693));
var lifes = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var tank_hits = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"tank-hits","tank-hits",1069926293));
var stars = cljs.core.get.call(null,map__81393__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var bg_state = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"stars","stars",-556837771),spaceinvaders.stars.move_stars,spaceinvaders.globals.world_height);
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),game_state)) && (cljs.core._EQ_.call(null,(10),score)))){
return cljs.core.assoc.call(null,bg_state,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"won","won",910394405),new cljs.core.Keyword(null,"state-counter","state-counter",494277693),(0));
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),game_state)) && ((lifes === (0))))){
return cljs.core.assoc.call(null,bg_state,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"state-counter","state-counter",494277693),(0));
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"won","won",910394405),game_state)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)))){
if((state_counter < (90))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,bg_state,new cljs.core.Keyword(null,"state-counter","state-counter",494277693),cljs.core.inc),new cljs.core.Keyword(null,"tank-hits","tank-hits",1069926293),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"hits","hits",-2120002930),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.assoc.call(null,bg_state,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"ready","ready",1086465795));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)){
return bg_state;
} else {
var explosions = spaceinvaders.ufos.detect_explosions.call(null,ufos,missiles);
var ufos_exploded = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,explosions));
var ufos_escaped = spaceinvaders.helpers.escaped.call(null,ufos);
var ufo_tank_colls = spaceinvaders.tank.tank_collisions.call(null,ufos,spaceinvaders.globals.size_ufo,spaceinvaders.globals.size_ufo,tank);
var ufos_remaining = clojure.set.difference.call(null,ufos,ufos_exploded,ufos_escaped,ufo_tank_colls);
var ufos_next = spaceinvaders.ufos.update_ufos.call(null,ufos_remaining);
var hits_new = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (explosions,ufos_exploded,ufos_escaped,ufo_tank_colls,ufos_remaining,ufos_next,bg_state,map__81393,map__81393__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,tank_hits,stars){
return (function (p__81395){
var vec__81396 = p__81395;
var x = cljs.core.nth.call(null,vec__81396,(0),null);
var y = cljs.core.nth.call(null,vec__81396,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"counter","counter",804008177),(0)], null);
});})(explosions,ufos_exploded,ufos_escaped,ufo_tank_colls,ufos_remaining,ufos_next,bg_state,map__81393,map__81393__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,tank_hits,stars))
,ufos_exploded));
var hits_next = spaceinvaders.helpers.update_hits.call(null,hits,hits_new,(90));
var missiles_exploded = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.second,explosions));
var missiles_remaining = clojure.set.difference.call(null,missiles,missiles_exploded,spaceinvaders.helpers.escaped.call(null,missiles));
var missiles_next = spaceinvaders.missiles.update_missiles.call(null,missiles_remaining);
var bomb_tank_colls = spaceinvaders.tank.tank_collisions.call(null,bombs,spaceinvaders.globals.wb,spaceinvaders.globals.wb,tank);
var bombs_remaining = clojure.set.difference.call(null,bombs,bomb_tank_colls,spaceinvaders.helpers.escaped.call(null,bombs));
var bombs_next = spaceinvaders.bombs.update_bombs.call(null,bombs_remaining,ufos_remaining);
var tank_hits_new = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (explosions,ufos_exploded,ufos_escaped,ufo_tank_colls,ufos_remaining,ufos_next,hits_new,hits_next,missiles_exploded,missiles_remaining,missiles_next,bomb_tank_colls,bombs_remaining,bombs_next,bg_state,map__81393,map__81393__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,tank_hits,stars){
return (function (p__81399){
var vec__81400 = p__81399;
var x = cljs.core.nth.call(null,vec__81400,(0),null);
var y = cljs.core.nth.call(null,vec__81400,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"counter","counter",804008177),(0)], null);
});})(explosions,ufos_exploded,ufos_escaped,ufo_tank_colls,ufos_remaining,ufos_next,hits_new,hits_next,missiles_exploded,missiles_remaining,missiles_next,bomb_tank_colls,bombs_remaining,bombs_next,bg_state,map__81393,map__81393__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,tank_hits,stars))
,clojure.set.union.call(null,ufo_tank_colls,bomb_tank_colls)));
var tank_hits_next = spaceinvaders.helpers.update_hits.call(null,tank_hits,tank_hits_new,(30));
var score_next = ((score + cljs.core.count.call(null,ufos_exploded)) + (- cljs.core.count.call(null,ufos_escaped)));
var lifes_next = ((lifes - cljs.core.count.call(null,bomb_tank_colls)) - cljs.core.count.call(null,ufo_tank_colls));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,bg_state,new cljs.core.Keyword(null,"tank","tank",-798661744),spaceinvaders.tank.move_tank),new cljs.core.Keyword(null,"missiles","missiles",-600699149),missiles_next),new cljs.core.Keyword(null,"bombs","bombs",1955561180),bombs_next),new cljs.core.Keyword(null,"ufos","ufos",2106350236),ufos_next),new cljs.core.Keyword(null,"hits","hits",-2120002930),hits_next),new cljs.core.Keyword(null,"tank-hits","tank-hits",1069926293),tank_hits_next),new cljs.core.Keyword(null,"score","score",-1963588780),score_next),new cljs.core.Keyword(null,"lifes","lifes",-2077908604),lifes_next);

}
}
}
}
});
spaceinvaders.core.key_handler = (function spaceinvaders$core$key_handler(p__81403,p__81404){
var map__81405 = p__81403;
var map__81405__$1 = (((((!((map__81405 == null))))?(((((map__81405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81405):map__81405);
var state = map__81405__$1;
var tank = cljs.core.get.call(null,map__81405__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__81405__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var game_state = cljs.core.get.call(null,map__81405__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var bgmusic = cljs.core.get.call(null,map__81405__$1,new cljs.core.Keyword(null,"bgmusic","bgmusic",-507510575));
var bang = cljs.core.get.call(null,map__81405__$1,new cljs.core.Keyword(null,"bang","bang",717730846));
var shoot = cljs.core.get.call(null,map__81405__$1,new cljs.core.Keyword(null,"shoot","shoot",-696325137));
var map__81406 = p__81404;
var map__81406__$1 = (((((!((map__81406 == null))))?(((((map__81406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81406):map__81406);
var key = cljs.core.get.call(null,map__81406__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.call(null,map__81406__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mute","mute",1151223646),true);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"q","q",689001697),key)){
return quil.core.exit.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1705939918),key)){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"mute","mute",1151223646),cljs.core.not);
} else {
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
return spaceinvaders.core.init_state_BANG_.call(null);
} else {
return state;

}
}
}
} else {
var left = (37);
var right = (39);
var up = (38);
var down = (40);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1705939918),key)){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"mute","mute",1151223646),cljs.core.not);
} else {
if(cljs.core._EQ_.call(null,right,key_code)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(1));
} else {
if(cljs.core._EQ_.call(null,left,key_code)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(-1));
} else {
if(cljs.core._EQ_.call(null,up,key_code)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),spaceinvaders.tank.speed_up);
} else {
if(cljs.core._EQ_.call(null,down,key_code)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),spaceinvaders.tank.speed_down);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"space","space",348133475),key)){
if((cljs.core.count.call(null,missiles) < spaceinvaders.globals.max_missiles)){
shoot.play();

return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"missiles","missiles",-600699149),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),spaceinvaders.globals.yt], null));
} else {
return state;
}
} else {
return state;

}
}
}
}
}
}

}
}
});
spaceinvaders.core.draw_state = (function spaceinvaders$core$draw_state(p__81409){
var map__81410 = p__81409;
var map__81410__$1 = (((((!((map__81410 == null))))?(((((map__81410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81410):map__81410);
var state = map__81410__$1;
var ufos = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var mute = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"mute","mute",1151223646));
var bang = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"bang","bang",717730846));
var hiss = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"hiss","hiss",-1640157277));
var lifes = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var shoot = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"shoot","shoot",-696325137));
var tank = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var bgmusic = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"bgmusic","bgmusic",-507510575));
var missiles = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var tank_hits = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"tank-hits","tank-hits",1069926293));
var stars = cljs.core.get.call(null,map__81410__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
if(cljs.core.truth_(mute)){
if(cljs.core.truth_(bgmusic.playing())){
bgmusic.pause();
} else {
}
} else {
if(cljs.core.not.call(null,bgmusic.playing())){
bgmusic.play();
} else {
}
}

cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

spaceinvaders.stars.draw_stars_BANG_.call(null,stars);

spaceinvaders.missiles.draw_missiles_BANG_.call(null,missiles,shoot);

spaceinvaders.bombs.draw_bombs_BANG_.call(null,bombs);

spaceinvaders.helpers.draw_score_BANG_.call(null,score);

spaceinvaders.ufos.draw_ufos_BANG_.call(null,ufos,new cljs.core.Keyword(null,"guppie-green","guppie-green",-848884229).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

spaceinvaders.tank.draw_tank_BANG_.call(null,tank);

spaceinvaders.helpers.draw_hbar_BANG_.call(null);

spaceinvaders.missiles.draw_missiles_menu_BANG_.call(null,cljs.core.count.call(null,missiles));

spaceinvaders.tank.draw_tank_menu_BANG_.call(null,lifes);

var seq__81412_81420 = cljs.core.seq.call(null,hits);
var chunk__81413_81421 = null;
var count__81414_81422 = (0);
var i__81415_81423 = (0);
while(true){
if((i__81415_81423 < count__81414_81422)){
var hit_81424 = cljs.core._nth.call(null,chunk__81413_81421,i__81415_81423);
spaceinvaders.ufos.draw_explosion_BANG_.call(null,hit_81424,bang);


var G__81425 = seq__81412_81420;
var G__81426 = chunk__81413_81421;
var G__81427 = count__81414_81422;
var G__81428 = (i__81415_81423 + (1));
seq__81412_81420 = G__81425;
chunk__81413_81421 = G__81426;
count__81414_81422 = G__81427;
i__81415_81423 = G__81428;
continue;
} else {
var temp__5735__auto___81429 = cljs.core.seq.call(null,seq__81412_81420);
if(temp__5735__auto___81429){
var seq__81412_81430__$1 = temp__5735__auto___81429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81412_81430__$1)){
var c__4550__auto___81431 = cljs.core.chunk_first.call(null,seq__81412_81430__$1);
var G__81432 = cljs.core.chunk_rest.call(null,seq__81412_81430__$1);
var G__81433 = c__4550__auto___81431;
var G__81434 = cljs.core.count.call(null,c__4550__auto___81431);
var G__81435 = (0);
seq__81412_81420 = G__81432;
chunk__81413_81421 = G__81433;
count__81414_81422 = G__81434;
i__81415_81423 = G__81435;
continue;
} else {
var hit_81436 = cljs.core.first.call(null,seq__81412_81430__$1);
spaceinvaders.ufos.draw_explosion_BANG_.call(null,hit_81436,bang);


var G__81437 = cljs.core.next.call(null,seq__81412_81430__$1);
var G__81438 = null;
var G__81439 = (0);
var G__81440 = (0);
seq__81412_81420 = G__81437;
chunk__81413_81421 = G__81438;
count__81414_81422 = G__81439;
i__81415_81423 = G__81440;
continue;
}
} else {
}
}
break;
}

var seq__81416_81441 = cljs.core.seq.call(null,tank_hits);
var chunk__81417_81442 = null;
var count__81418_81443 = (0);
var i__81419_81444 = (0);
while(true){
if((i__81419_81444 < count__81418_81443)){
var hit_81445 = cljs.core._nth.call(null,chunk__81417_81442,i__81419_81444);
spaceinvaders.tank.draw_explosion_BANG_.call(null,hit_81445,tank,hiss);


var G__81446 = seq__81416_81441;
var G__81447 = chunk__81417_81442;
var G__81448 = count__81418_81443;
var G__81449 = (i__81419_81444 + (1));
seq__81416_81441 = G__81446;
chunk__81417_81442 = G__81447;
count__81418_81443 = G__81448;
i__81419_81444 = G__81449;
continue;
} else {
var temp__5735__auto___81450 = cljs.core.seq.call(null,seq__81416_81441);
if(temp__5735__auto___81450){
var seq__81416_81451__$1 = temp__5735__auto___81450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81416_81451__$1)){
var c__4550__auto___81452 = cljs.core.chunk_first.call(null,seq__81416_81451__$1);
var G__81453 = cljs.core.chunk_rest.call(null,seq__81416_81451__$1);
var G__81454 = c__4550__auto___81452;
var G__81455 = cljs.core.count.call(null,c__4550__auto___81452);
var G__81456 = (0);
seq__81416_81441 = G__81453;
chunk__81417_81442 = G__81454;
count__81418_81443 = G__81455;
i__81419_81444 = G__81456;
continue;
} else {
var hit_81457 = cljs.core.first.call(null,seq__81416_81451__$1);
spaceinvaders.tank.draw_explosion_BANG_.call(null,hit_81457,tank,hiss);


var G__81458 = cljs.core.next.call(null,seq__81416_81451__$1);
var G__81459 = null;
var G__81460 = (0);
var G__81461 = (0);
seq__81416_81441 = G__81458;
chunk__81417_81442 = G__81459;
count__81418_81443 = G__81460;
i__81419_81444 = G__81461;
continue;
}
} else {
}
}
break;
}

if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),game_state)))){
bgmusic.fade((1),(0),(1000));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)){
return spaceinvaders.helpers.draw_game_over_BANG_.call(null,spaceinvaders.helpers.game_over_img);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"won","won",910394405),game_state)){
return spaceinvaders.helpers.draw_game_over_BANG_.call(null,spaceinvaders.helpers.game_won_img);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)){
return spaceinvaders.helpers.draw_game_over_BANG_.call(null,spaceinvaders.helpers.game_ready_img);
} else {
return null;
}
}
}
});
spaceinvaders.core.run_sketch = (function spaceinvaders$core$run_sketch(){
spaceinvaders.core.spaceinvaders = (function spaceinvaders$core$run_sketch_$_spaceinvaders(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"spaceinvaders",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267)], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.update_state))?(function() { 
var G__81462__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.update_state,args);
};
var G__81462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81463__i = 0, G__81463__a = new Array(arguments.length -  0);
while (G__81463__i < G__81463__a.length) {G__81463__a[G__81463__i] = arguments[G__81463__i + 0]; ++G__81463__i;}
  args = new cljs.core.IndexedSeq(G__81463__a,0,null);
} 
return G__81462__delegate.call(this,args);};
G__81462.cljs$lang$maxFixedArity = 0;
G__81462.cljs$lang$applyTo = (function (arglist__81464){
var args = cljs.core.seq(arglist__81464);
return G__81462__delegate(args);
});
G__81462.cljs$core$IFn$_invoke$arity$variadic = G__81462__delegate;
return G__81462;
})()
:spaceinvaders.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceinvaders.globals.world_width,spaceinvaders.globals.world_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.setup))?(function() { 
var G__81465__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.setup,args);
};
var G__81465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81466__i = 0, G__81466__a = new Array(arguments.length -  0);
while (G__81466__i < G__81466__a.length) {G__81466__a[G__81466__i] = arguments[G__81466__i + 0]; ++G__81466__i;}
  args = new cljs.core.IndexedSeq(G__81466__a,0,null);
} 
return G__81465__delegate.call(this,args);};
G__81465.cljs$lang$maxFixedArity = 0;
G__81465.cljs$lang$applyTo = (function (arglist__81467){
var args = cljs.core.seq(arglist__81467);
return G__81465__delegate(args);
});
G__81465.cljs$core$IFn$_invoke$arity$variadic = G__81465__delegate;
return G__81465;
})()
:spaceinvaders.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.key_handler))?(function() { 
var G__81468__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.key_handler,args);
};
var G__81468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81469__i = 0, G__81469__a = new Array(arguments.length -  0);
while (G__81469__i < G__81469__a.length) {G__81469__a[G__81469__i] = arguments[G__81469__i + 0]; ++G__81469__i;}
  args = new cljs.core.IndexedSeq(G__81469__a,0,null);
} 
return G__81468__delegate.call(this,args);};
G__81468.cljs$lang$maxFixedArity = 0;
G__81468.cljs$lang$applyTo = (function (arglist__81470){
var args = cljs.core.seq(arglist__81470);
return G__81468__delegate(args);
});
G__81468.cljs$core$IFn$_invoke$arity$variadic = G__81468__delegate;
return G__81468;
})()
:spaceinvaders.core.key_handler),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.draw_state))?(function() { 
var G__81471__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.draw_state,args);
};
var G__81471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81472__i = 0, G__81472__a = new Array(arguments.length -  0);
while (G__81472__i < G__81472__a.length) {G__81472__a[G__81472__i] = arguments[G__81472__i + 0]; ++G__81472__i;}
  args = new cljs.core.IndexedSeq(G__81472__a,0,null);
} 
return G__81471__delegate.call(this,args);};
G__81471.cljs$lang$maxFixedArity = 0;
G__81471.cljs$lang$applyTo = (function (arglist__81473){
var args = cljs.core.seq(arglist__81473);
return G__81471__delegate(args);
});
G__81471.cljs$core$IFn$_invoke$arity$variadic = G__81471__delegate;
return G__81471;
})()
:spaceinvaders.core.draw_state));
});
goog.exportSymbol('spaceinvaders.core.spaceinvaders', spaceinvaders.core.spaceinvaders);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26520__26521__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26520__26521__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267)], null)))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),spaceinvaders.core.spaceinvaders,new cljs.core.Keyword(null,"host-id","host-id",742376279),"spaceinvaders"], null));
}
});
goog.exportSymbol('spaceinvaders.core.run_sketch', spaceinvaders.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1597247522889
