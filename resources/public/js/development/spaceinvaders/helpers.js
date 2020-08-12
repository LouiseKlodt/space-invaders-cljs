// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.helpers');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quiltools.core');
goog.require('spaceinvaders.globals');
spaceinvaders.helpers.game_over_img = (function spaceinvaders$helpers$game_over_img(){
quil.core.push_style.call(null);

quil.core.fill.call(null,(0));

quil.core.rect.call(null,(0),(0),(1),(1));

quil.core.stroke.call(null,(255));

quil.core.fill.call(null,(255));

quil.core.text_size.call(null,0.22);

quil.core.text.call(null,"GAME OVER!",0.08,0.32);

quil.core.text_size.call(null,0.1);

quil.core.text.call(null,"THE UFOS HAVE TAKEN",0.08,0.55);

quil.core.text.call(null,"OVER THE PLANET!",0.08,0.7);

return quil.core.pop_style.call(null);
});
spaceinvaders.helpers.game_ready_img = (function spaceinvaders$helpers$game_ready_img(){
quil.core.push_style.call(null);

var flash_80997 = cljs.core.mod.call(null,cljs.core.quot.call(null,quil.core.frame_count.call(null),(10)),(2));
var bg_color_80998 = cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975),new cljs.core.Keyword(null,"red","red",-969428204)], null),flash_80997);
quil.core.fill.call(null,bg_color_80998.call(null,spaceinvaders.globals.colors));

quil.core.rect.call(null,(0),(0),(1),(1));

quil.core.stroke.call(null,(255));

quil.core.fill.call(null,(255));

quil.core.text_size.call(null,0.16);

quil.core.text.call(null,"PRESS ANY KEY",0.09,0.32);

quil.core.text.call(null,"TO PLAY AGAIN",0.09,0.55);

return quil.core.pop_style.call(null);
});
spaceinvaders.helpers.game_won_img = (function spaceinvaders$helpers$game_won_img(){
quil.core.push_style.call(null);

quil.core.fill.call(null,(0));

quil.core.rect.call(null,(0),(0),(1),(1));

quil.core.stroke.call(null,(255));

quil.core.fill.call(null,(255));

quil.core.text_size.call(null,0.22);

quil.core.text.call(null,"WELL DONE!",0.08,0.32);

quil.core.text_size.call(null,0.1);

quil.core.text.call(null,"YOU HAVE SUCCESSFULLY",0.08,0.55);

quil.core.text.call(null,"DEFENDED THE PLANET!",0.08,0.7);

return quil.core.pop_style.call(null);
});
spaceinvaders.helpers.collision_QMARK_ = (function spaceinvaders$helpers$collision_QMARK_(p__80999,p__81000,wa,ha,wb,hb){
var vec__81001 = p__80999;
var xa = cljs.core.nth.call(null,vec__81001,(0),null);
var ya = cljs.core.nth.call(null,vec__81001,(1),null);
var vec__81004 = p__81000;
var xb = cljs.core.nth.call(null,vec__81004,(0),null);
var yb = cljs.core.nth.call(null,vec__81004,(1),null);

return ((((((xb - wa) <= xa)) && ((xa <= (xb + wb))))) && (((((yb - ha) <= ya)) && ((ya <= (yb + hb))))));
});
spaceinvaders.helpers.add_new_QMARK_ = (function spaceinvaders$helpers$add_new_QMARK_(s,limit,freq){

return (((cljs.core.count.call(null,s) <= limit)) && (quiltools.core.n_ticks_QMARK_.call(null,(freq * spaceinvaders.globals.frame_rate))));
});
spaceinvaders.helpers.escaped = (function spaceinvaders$helpers$escaped(s){

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p__81007){
var vec__81008 = p__81007;
var _ = cljs.core.nth.call(null,vec__81008,(0),null);
var y = cljs.core.nth.call(null,vec__81008,(1),null);
return (((y > spaceinvaders.globals.world_height)) || ((y < (0))));
}),s));
});
spaceinvaders.helpers.update_hits = (function spaceinvaders$helpers$update_hits(hits,new_hits,end_counter){
var remaining = cljs.core.remove.call(null,(function (hit){
return (new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(hit) >= end_counter);
}),hits);
var updated_hits = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (remaining){
return (function (hit){
return cljs.core.update.call(null,hit,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.inc);
});})(remaining))
,remaining));
return cljs.core.into.call(null,updated_hits,new_hits);
});
spaceinvaders.helpers.draw_score_BANG_ = (function spaceinvaders$helpers$draw_score_BANG_(score){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

quil.core.text.call(null,["SCORE <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score),">"].join(''),spaceinvaders.globals.margin,spaceinvaders.globals.margin);

return quil.core.pop_style.call(null);
});
spaceinvaders.helpers.draw_game_over_BANG_ = (function spaceinvaders$helpers$draw_game_over_BANG_(draw_fn){
quil.core.push_style.call(null);

var cx_81011 = (0.2 * spaceinvaders.globals.world_width);
var cy_81012 = (0.14 * spaceinvaders.globals.world_width);
var w_81013 = (0.6 * spaceinvaders.globals.world_width);
var h_81014 = (0.4 * spaceinvaders.globals.world_height);
quiltools.core.at.call(null,cx_81011,cy_81012,quiltools.core.in$.call(null,w_81013,h_81014,draw_fn)).call(null);

quil.core.no_fill.call(null);

quil.core.stroke_weight.call(null,(4));

cljs.core.apply.call(null,quil.core.stroke,new cljs.core.Keyword(null,"guppie-green","guppie-green",-848884229).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

quil.core.rect.call(null,cx_81011,cy_81012,w_81013,h_81014);

return quil.core.pop_style.call(null);
});
spaceinvaders.helpers.draw_hbar_BANG_ = (function spaceinvaders$helpers$draw_hbar_BANG_(){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.stroke,new cljs.core.Keyword(null,"guppie-green","guppie-green",-848884229).cljs$core$IFn$_invoke$arity$1(spaceinvaders.globals.colors));

quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,0.0,spaceinvaders.globals.hbar_menu,spaceinvaders.globals.world_width,spaceinvaders.globals.hbar_menu);

return quil.core.pop_style.call(null);
});
spaceinvaders.helpers.draw_flash = (function spaceinvaders$helpers$draw_flash(freq){
var flash = cljs.core.mod.call(null,cljs.core.quot.call(null,quil.core.frame_count.call(null),freq),(2));
var bg_color = cljs.core.nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975),new cljs.core.Keyword(null,"red","red",-969428204)], null),flash);
return quil.core.fill.call(null,bg_color.call(null,spaceinvaders.globals.colors));
});

//# sourceMappingURL=helpers.js.map?rel=1597247503897
