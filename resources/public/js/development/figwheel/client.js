// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29301){if((e29301 instanceof Error)){
var e = e29301;
return "Error: Unable to stringify";
} else {
throw e29301;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29304 = arguments.length;
switch (G__29304) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29302_SHARP_){
if(typeof p1__29302_SHARP_ === 'string'){
return p1__29302_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29302_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29307 = arguments.length;
var i__4731__auto___29308 = (0);
while(true){
if((i__4731__auto___29308 < len__4730__auto___29307)){
args__4736__auto__.push((arguments[i__4731__auto___29308]));

var G__29309 = (i__4731__auto___29308 + (1));
i__4731__auto___29308 = G__29309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29306){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29306));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29311 = arguments.length;
var i__4731__auto___29312 = (0);
while(true){
if((i__4731__auto___29312 < len__4730__auto___29311)){
args__4736__auto__.push((arguments[i__4731__auto___29312]));

var G__29313 = (i__4731__auto___29312 + (1));
i__4731__auto___29312 = G__29313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29310){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29310));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29314){
var map__29315 = p__29314;
var map__29315__$1 = (((((!((map__29315 == null))))?(((((map__29315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29315):map__29315);
var message = cljs.core.get.call(null,map__29315__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29315__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24031__auto___29394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___29394,ch){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___29394,ch){
return (function (state_29366){
var state_val_29367 = (state_29366[(1)]);
if((state_val_29367 === (7))){
var inst_29362 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
var statearr_29368_29395 = state_29366__$1;
(statearr_29368_29395[(2)] = inst_29362);

(statearr_29368_29395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (1))){
var state_29366__$1 = state_29366;
var statearr_29369_29396 = state_29366__$1;
(statearr_29369_29396[(2)] = null);

(statearr_29369_29396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (4))){
var inst_29319 = (state_29366[(7)]);
var inst_29319__$1 = (state_29366[(2)]);
var state_29366__$1 = (function (){var statearr_29370 = state_29366;
(statearr_29370[(7)] = inst_29319__$1);

return statearr_29370;
})();
if(cljs.core.truth_(inst_29319__$1)){
var statearr_29371_29397 = state_29366__$1;
(statearr_29371_29397[(1)] = (5));

} else {
var statearr_29372_29398 = state_29366__$1;
(statearr_29372_29398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (15))){
var inst_29326 = (state_29366[(8)]);
var inst_29341 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29326);
var inst_29342 = cljs.core.first.call(null,inst_29341);
var inst_29343 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29342);
var inst_29344 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29343)].join('');
var inst_29345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29344);
var state_29366__$1 = state_29366;
var statearr_29373_29399 = state_29366__$1;
(statearr_29373_29399[(2)] = inst_29345);

(statearr_29373_29399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (13))){
var inst_29350 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
var statearr_29374_29400 = state_29366__$1;
(statearr_29374_29400[(2)] = inst_29350);

(statearr_29374_29400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (6))){
var state_29366__$1 = state_29366;
var statearr_29375_29401 = state_29366__$1;
(statearr_29375_29401[(2)] = null);

(statearr_29375_29401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (17))){
var inst_29348 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
var statearr_29376_29402 = state_29366__$1;
(statearr_29376_29402[(2)] = inst_29348);

(statearr_29376_29402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (3))){
var inst_29364 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29366__$1,inst_29364);
} else {
if((state_val_29367 === (12))){
var inst_29325 = (state_29366[(9)]);
var inst_29339 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29325,opts);
var state_29366__$1 = state_29366;
if(inst_29339){
var statearr_29377_29403 = state_29366__$1;
(statearr_29377_29403[(1)] = (15));

} else {
var statearr_29378_29404 = state_29366__$1;
(statearr_29378_29404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (2))){
var state_29366__$1 = state_29366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29366__$1,(4),ch);
} else {
if((state_val_29367 === (11))){
var inst_29326 = (state_29366[(8)]);
var inst_29331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29332 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29326);
var inst_29333 = cljs.core.async.timeout.call(null,(1000));
var inst_29334 = [inst_29332,inst_29333];
var inst_29335 = (new cljs.core.PersistentVector(null,2,(5),inst_29331,inst_29334,null));
var state_29366__$1 = state_29366;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29366__$1,(14),inst_29335);
} else {
if((state_val_29367 === (9))){
var inst_29326 = (state_29366[(8)]);
var inst_29352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29353 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29326);
var inst_29354 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29353);
var inst_29355 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29354)].join('');
var inst_29356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29355);
var state_29366__$1 = (function (){var statearr_29379 = state_29366;
(statearr_29379[(10)] = inst_29352);

return statearr_29379;
})();
var statearr_29380_29405 = state_29366__$1;
(statearr_29380_29405[(2)] = inst_29356);

(statearr_29380_29405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (5))){
var inst_29319 = (state_29366[(7)]);
var inst_29321 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29322 = (new cljs.core.PersistentArrayMap(null,2,inst_29321,null));
var inst_29323 = (new cljs.core.PersistentHashSet(null,inst_29322,null));
var inst_29324 = figwheel.client.focus_msgs.call(null,inst_29323,inst_29319);
var inst_29325 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29324);
var inst_29326 = cljs.core.first.call(null,inst_29324);
var inst_29327 = figwheel.client.autoload_QMARK_.call(null);
var state_29366__$1 = (function (){var statearr_29381 = state_29366;
(statearr_29381[(9)] = inst_29325);

(statearr_29381[(8)] = inst_29326);

return statearr_29381;
})();
if(cljs.core.truth_(inst_29327)){
var statearr_29382_29406 = state_29366__$1;
(statearr_29382_29406[(1)] = (8));

} else {
var statearr_29383_29407 = state_29366__$1;
(statearr_29383_29407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (14))){
var inst_29337 = (state_29366[(2)]);
var state_29366__$1 = state_29366;
var statearr_29384_29408 = state_29366__$1;
(statearr_29384_29408[(2)] = inst_29337);

(statearr_29384_29408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (16))){
var state_29366__$1 = state_29366;
var statearr_29385_29409 = state_29366__$1;
(statearr_29385_29409[(2)] = null);

(statearr_29385_29409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (10))){
var inst_29358 = (state_29366[(2)]);
var state_29366__$1 = (function (){var statearr_29386 = state_29366;
(statearr_29386[(11)] = inst_29358);

return statearr_29386;
})();
var statearr_29387_29410 = state_29366__$1;
(statearr_29387_29410[(2)] = null);

(statearr_29387_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29367 === (8))){
var inst_29325 = (state_29366[(9)]);
var inst_29329 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29325,opts);
var state_29366__$1 = state_29366;
if(cljs.core.truth_(inst_29329)){
var statearr_29388_29411 = state_29366__$1;
(statearr_29388_29411[(1)] = (11));

} else {
var statearr_29389_29412 = state_29366__$1;
(statearr_29389_29412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24031__auto___29394,ch))
;
return ((function (switch__23936__auto__,c__24031__auto___29394,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23937__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23937__auto____0 = (function (){
var statearr_29390 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29390[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23937__auto__);

(statearr_29390[(1)] = (1));

return statearr_29390;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23937__auto____1 = (function (state_29366){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_29366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e29391){if((e29391 instanceof Object)){
var ex__23940__auto__ = e29391;
var statearr_29392_29413 = state_29366;
(statearr_29392_29413[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29414 = state_29366;
state_29366 = G__29414;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23937__auto__ = function(state_29366){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23937__auto____1.call(this,state_29366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23937__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23937__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___29394,ch))
})();
var state__24033__auto__ = (function (){var statearr_29393 = f__24032__auto__.call(null);
(statearr_29393[(6)] = c__24031__auto___29394);

return statearr_29393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___29394,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29415_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29415_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29421 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29421){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29417 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29418 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29419 = true;
var _STAR_print_fn_STAR__temp_val__29420 = ((function (_STAR_print_newline_STAR__orig_val__29417,_STAR_print_fn_STAR__orig_val__29418,_STAR_print_newline_STAR__temp_val__29419,sb,base_path_29421){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29417,_STAR_print_fn_STAR__orig_val__29418,_STAR_print_newline_STAR__temp_val__29419,sb,base_path_29421))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29419;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29420;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29418;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29417;
}}catch (e29416){if((e29416 instanceof Error)){
var e = e29416;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29421], null));
} else {
var e = e29416;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29421))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29422){
var map__29423 = p__29422;
var map__29423__$1 = (((((!((map__29423 == null))))?(((((map__29423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);
var opts = map__29423__$1;
var build_id = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29423,map__29423__$1,opts,build_id){
return (function (p__29425){
var vec__29426 = p__29425;
var seq__29427 = cljs.core.seq.call(null,vec__29426);
var first__29428 = cljs.core.first.call(null,seq__29427);
var seq__29427__$1 = cljs.core.next.call(null,seq__29427);
var map__29429 = first__29428;
var map__29429__$1 = (((((!((map__29429 == null))))?(((((map__29429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29429):map__29429);
var msg = map__29429__$1;
var msg_name = cljs.core.get.call(null,map__29429__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29427__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29426,seq__29427,first__29428,seq__29427__$1,map__29429,map__29429__$1,msg,msg_name,_,map__29423,map__29423__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29426,seq__29427,first__29428,seq__29427__$1,map__29429,map__29429__$1,msg,msg_name,_,map__29423,map__29423__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29423,map__29423__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29431){
var vec__29432 = p__29431;
var seq__29433 = cljs.core.seq.call(null,vec__29432);
var first__29434 = cljs.core.first.call(null,seq__29433);
var seq__29433__$1 = cljs.core.next.call(null,seq__29433);
var map__29435 = first__29434;
var map__29435__$1 = (((((!((map__29435 == null))))?(((((map__29435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29435):map__29435);
var msg = map__29435__$1;
var msg_name = cljs.core.get.call(null,map__29435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29433__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29437){
var map__29438 = p__29437;
var map__29438__$1 = (((((!((map__29438 == null))))?(((((map__29438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29438):map__29438);
var on_compile_warning = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29438__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29438,map__29438__$1,on_compile_warning,on_compile_fail){
return (function (p__29440){
var vec__29441 = p__29440;
var seq__29442 = cljs.core.seq.call(null,vec__29441);
var first__29443 = cljs.core.first.call(null,seq__29442);
var seq__29442__$1 = cljs.core.next.call(null,seq__29442);
var map__29444 = first__29443;
var map__29444__$1 = (((((!((map__29444 == null))))?(((((map__29444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29444):map__29444);
var msg = map__29444__$1;
var msg_name = cljs.core.get.call(null,map__29444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29442__$1;
var pred__29446 = cljs.core._EQ_;
var expr__29447 = msg_name;
if(cljs.core.truth_(pred__29446.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29447))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29446.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29447))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29438,map__29438__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__,msg_hist,msg_names,msg){
return (function (state_29536){
var state_val_29537 = (state_29536[(1)]);
if((state_val_29537 === (7))){
var inst_29456 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
if(cljs.core.truth_(inst_29456)){
var statearr_29538_29585 = state_29536__$1;
(statearr_29538_29585[(1)] = (8));

} else {
var statearr_29539_29586 = state_29536__$1;
(statearr_29539_29586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (20))){
var inst_29530 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29540_29587 = state_29536__$1;
(statearr_29540_29587[(2)] = inst_29530);

(statearr_29540_29587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (27))){
var inst_29526 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29541_29588 = state_29536__$1;
(statearr_29541_29588[(2)] = inst_29526);

(statearr_29541_29588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (1))){
var inst_29449 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29536__$1 = state_29536;
if(cljs.core.truth_(inst_29449)){
var statearr_29542_29589 = state_29536__$1;
(statearr_29542_29589[(1)] = (2));

} else {
var statearr_29543_29590 = state_29536__$1;
(statearr_29543_29590[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (24))){
var inst_29528 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29544_29591 = state_29536__$1;
(statearr_29544_29591[(2)] = inst_29528);

(statearr_29544_29591[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (4))){
var inst_29534 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29536__$1,inst_29534);
} else {
if((state_val_29537 === (15))){
var inst_29532 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29545_29592 = state_29536__$1;
(statearr_29545_29592[(2)] = inst_29532);

(statearr_29545_29592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (21))){
var inst_29485 = (state_29536[(2)]);
var inst_29486 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29487 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29486);
var state_29536__$1 = (function (){var statearr_29546 = state_29536;
(statearr_29546[(7)] = inst_29485);

return statearr_29546;
})();
var statearr_29547_29593 = state_29536__$1;
(statearr_29547_29593[(2)] = inst_29487);

(statearr_29547_29593[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (31))){
var inst_29515 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29536__$1 = state_29536;
if(inst_29515){
var statearr_29548_29594 = state_29536__$1;
(statearr_29548_29594[(1)] = (34));

} else {
var statearr_29549_29595 = state_29536__$1;
(statearr_29549_29595[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (32))){
var inst_29524 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29550_29596 = state_29536__$1;
(statearr_29550_29596[(2)] = inst_29524);

(statearr_29550_29596[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (33))){
var inst_29511 = (state_29536[(2)]);
var inst_29512 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29512);
var state_29536__$1 = (function (){var statearr_29551 = state_29536;
(statearr_29551[(8)] = inst_29511);

return statearr_29551;
})();
var statearr_29552_29597 = state_29536__$1;
(statearr_29552_29597[(2)] = inst_29513);

(statearr_29552_29597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (13))){
var inst_29470 = figwheel.client.heads_up.clear.call(null);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(16),inst_29470);
} else {
if((state_val_29537 === (22))){
var inst_29491 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29492 = figwheel.client.heads_up.append_warning_message.call(null,inst_29491);
var state_29536__$1 = state_29536;
var statearr_29553_29598 = state_29536__$1;
(statearr_29553_29598[(2)] = inst_29492);

(statearr_29553_29598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (36))){
var inst_29522 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29554_29599 = state_29536__$1;
(statearr_29554_29599[(2)] = inst_29522);

(statearr_29554_29599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (29))){
var inst_29502 = (state_29536[(2)]);
var inst_29503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29504 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29503);
var state_29536__$1 = (function (){var statearr_29555 = state_29536;
(statearr_29555[(9)] = inst_29502);

return statearr_29555;
})();
var statearr_29556_29600 = state_29536__$1;
(statearr_29556_29600[(2)] = inst_29504);

(statearr_29556_29600[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (6))){
var inst_29451 = (state_29536[(10)]);
var state_29536__$1 = state_29536;
var statearr_29557_29601 = state_29536__$1;
(statearr_29557_29601[(2)] = inst_29451);

(statearr_29557_29601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (28))){
var inst_29498 = (state_29536[(2)]);
var inst_29499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29500 = figwheel.client.heads_up.display_warning.call(null,inst_29499);
var state_29536__$1 = (function (){var statearr_29558 = state_29536;
(statearr_29558[(11)] = inst_29498);

return statearr_29558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(29),inst_29500);
} else {
if((state_val_29537 === (25))){
var inst_29496 = figwheel.client.heads_up.clear.call(null);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(28),inst_29496);
} else {
if((state_val_29537 === (34))){
var inst_29517 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(37),inst_29517);
} else {
if((state_val_29537 === (17))){
var inst_29476 = (state_29536[(2)]);
var inst_29477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29478 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29477);
var state_29536__$1 = (function (){var statearr_29559 = state_29536;
(statearr_29559[(12)] = inst_29476);

return statearr_29559;
})();
var statearr_29560_29602 = state_29536__$1;
(statearr_29560_29602[(2)] = inst_29478);

(statearr_29560_29602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (3))){
var inst_29468 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29536__$1 = state_29536;
if(inst_29468){
var statearr_29561_29603 = state_29536__$1;
(statearr_29561_29603[(1)] = (13));

} else {
var statearr_29562_29604 = state_29536__$1;
(statearr_29562_29604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (12))){
var inst_29464 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29563_29605 = state_29536__$1;
(statearr_29563_29605[(2)] = inst_29464);

(statearr_29563_29605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (2))){
var inst_29451 = (state_29536[(10)]);
var inst_29451__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29536__$1 = (function (){var statearr_29564 = state_29536;
(statearr_29564[(10)] = inst_29451__$1);

return statearr_29564;
})();
if(cljs.core.truth_(inst_29451__$1)){
var statearr_29565_29606 = state_29536__$1;
(statearr_29565_29606[(1)] = (5));

} else {
var statearr_29566_29607 = state_29536__$1;
(statearr_29566_29607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (23))){
var inst_29494 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29536__$1 = state_29536;
if(inst_29494){
var statearr_29567_29608 = state_29536__$1;
(statearr_29567_29608[(1)] = (25));

} else {
var statearr_29568_29609 = state_29536__$1;
(statearr_29568_29609[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (35))){
var state_29536__$1 = state_29536;
var statearr_29569_29610 = state_29536__$1;
(statearr_29569_29610[(2)] = null);

(statearr_29569_29610[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (19))){
var inst_29489 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29536__$1 = state_29536;
if(inst_29489){
var statearr_29570_29611 = state_29536__$1;
(statearr_29570_29611[(1)] = (22));

} else {
var statearr_29571_29612 = state_29536__$1;
(statearr_29571_29612[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (11))){
var inst_29460 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29572_29613 = state_29536__$1;
(statearr_29572_29613[(2)] = inst_29460);

(statearr_29572_29613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (9))){
var inst_29462 = figwheel.client.heads_up.clear.call(null);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(12),inst_29462);
} else {
if((state_val_29537 === (5))){
var inst_29453 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29536__$1 = state_29536;
var statearr_29573_29614 = state_29536__$1;
(statearr_29573_29614[(2)] = inst_29453);

(statearr_29573_29614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (14))){
var inst_29480 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29536__$1 = state_29536;
if(inst_29480){
var statearr_29574_29615 = state_29536__$1;
(statearr_29574_29615[(1)] = (18));

} else {
var statearr_29575_29616 = state_29536__$1;
(statearr_29575_29616[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (26))){
var inst_29506 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29536__$1 = state_29536;
if(inst_29506){
var statearr_29576_29617 = state_29536__$1;
(statearr_29576_29617[(1)] = (30));

} else {
var statearr_29577_29618 = state_29536__$1;
(statearr_29577_29618[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (16))){
var inst_29472 = (state_29536[(2)]);
var inst_29473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29474 = figwheel.client.heads_up.display_exception.call(null,inst_29473);
var state_29536__$1 = (function (){var statearr_29578 = state_29536;
(statearr_29578[(13)] = inst_29472);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(17),inst_29474);
} else {
if((state_val_29537 === (30))){
var inst_29508 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29509 = figwheel.client.heads_up.display_warning.call(null,inst_29508);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(33),inst_29509);
} else {
if((state_val_29537 === (10))){
var inst_29466 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29579_29619 = state_29536__$1;
(statearr_29579_29619[(2)] = inst_29466);

(statearr_29579_29619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (18))){
var inst_29482 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29483 = figwheel.client.heads_up.display_exception.call(null,inst_29482);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(21),inst_29483);
} else {
if((state_val_29537 === (37))){
var inst_29519 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29580_29620 = state_29536__$1;
(statearr_29580_29620[(2)] = inst_29519);

(statearr_29580_29620[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (8))){
var inst_29458 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(11),inst_29458);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24031__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23936__auto__,c__24031__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto____0 = (function (){
var statearr_29581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29581[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto__);

(statearr_29581[(1)] = (1));

return statearr_29581;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto____1 = (function (state_29536){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_29536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e29582){if((e29582 instanceof Object)){
var ex__23940__auto__ = e29582;
var statearr_29583_29621 = state_29536;
(statearr_29583_29621[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29622 = state_29536;
state_29536 = G__29622;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto__ = function(state_29536){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto____1.call(this,state_29536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__,msg_hist,msg_names,msg))
})();
var state__24033__auto__ = (function (){var statearr_29584 = f__24032__auto__.call(null);
(statearr_29584[(6)] = c__24031__auto__);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__,msg_hist,msg_names,msg))
);

return c__24031__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24031__auto___29651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___29651,ch){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___29651,ch){
return (function (state_29637){
var state_val_29638 = (state_29637[(1)]);
if((state_val_29638 === (1))){
var state_29637__$1 = state_29637;
var statearr_29639_29652 = state_29637__$1;
(statearr_29639_29652[(2)] = null);

(statearr_29639_29652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29638 === (2))){
var state_29637__$1 = state_29637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29637__$1,(4),ch);
} else {
if((state_val_29638 === (3))){
var inst_29635 = (state_29637[(2)]);
var state_29637__$1 = state_29637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29637__$1,inst_29635);
} else {
if((state_val_29638 === (4))){
var inst_29625 = (state_29637[(7)]);
var inst_29625__$1 = (state_29637[(2)]);
var state_29637__$1 = (function (){var statearr_29640 = state_29637;
(statearr_29640[(7)] = inst_29625__$1);

return statearr_29640;
})();
if(cljs.core.truth_(inst_29625__$1)){
var statearr_29641_29653 = state_29637__$1;
(statearr_29641_29653[(1)] = (5));

} else {
var statearr_29642_29654 = state_29637__$1;
(statearr_29642_29654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29638 === (5))){
var inst_29625 = (state_29637[(7)]);
var inst_29627 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29625);
var state_29637__$1 = state_29637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29637__$1,(8),inst_29627);
} else {
if((state_val_29638 === (6))){
var state_29637__$1 = state_29637;
var statearr_29643_29655 = state_29637__$1;
(statearr_29643_29655[(2)] = null);

(statearr_29643_29655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29638 === (7))){
var inst_29633 = (state_29637[(2)]);
var state_29637__$1 = state_29637;
var statearr_29644_29656 = state_29637__$1;
(statearr_29644_29656[(2)] = inst_29633);

(statearr_29644_29656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29638 === (8))){
var inst_29629 = (state_29637[(2)]);
var state_29637__$1 = (function (){var statearr_29645 = state_29637;
(statearr_29645[(8)] = inst_29629);

return statearr_29645;
})();
var statearr_29646_29657 = state_29637__$1;
(statearr_29646_29657[(2)] = null);

(statearr_29646_29657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24031__auto___29651,ch))
;
return ((function (switch__23936__auto__,c__24031__auto___29651,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23937__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23937__auto____0 = (function (){
var statearr_29647 = [null,null,null,null,null,null,null,null,null];
(statearr_29647[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23937__auto__);

(statearr_29647[(1)] = (1));

return statearr_29647;
});
var figwheel$client$heads_up_plugin_$_state_machine__23937__auto____1 = (function (state_29637){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_29637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e29648){if((e29648 instanceof Object)){
var ex__23940__auto__ = e29648;
var statearr_29649_29658 = state_29637;
(statearr_29649_29658[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29659 = state_29637;
state_29637 = G__29659;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23937__auto__ = function(state_29637){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23937__auto____1.call(this,state_29637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23937__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23937__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___29651,ch))
})();
var state__24033__auto__ = (function (){var statearr_29650 = f__24032__auto__.call(null);
(statearr_29650[(6)] = c__24031__auto___29651);

return statearr_29650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___29651,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__){
return (function (state_29665){
var state_val_29666 = (state_29665[(1)]);
if((state_val_29666 === (1))){
var inst_29660 = cljs.core.async.timeout.call(null,(3000));
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29665__$1,(2),inst_29660);
} else {
if((state_val_29666 === (2))){
var inst_29662 = (state_29665[(2)]);
var inst_29663 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29665__$1 = (function (){var statearr_29667 = state_29665;
(statearr_29667[(7)] = inst_29662);

return statearr_29667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29665__$1,inst_29663);
} else {
return null;
}
}
});})(c__24031__auto__))
;
return ((function (switch__23936__auto__,c__24031__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23937__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23937__auto____0 = (function (){
var statearr_29668 = [null,null,null,null,null,null,null,null];
(statearr_29668[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23937__auto__);

(statearr_29668[(1)] = (1));

return statearr_29668;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23937__auto____1 = (function (state_29665){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_29665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e29669){if((e29669 instanceof Object)){
var ex__23940__auto__ = e29669;
var statearr_29670_29672 = state_29665;
(statearr_29670_29672[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29673 = state_29665;
state_29665 = G__29673;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23937__auto__ = function(state_29665){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23937__auto____1.call(this,state_29665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23937__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23937__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__))
})();
var state__24033__auto__ = (function (){var statearr_29671 = f__24032__auto__.call(null);
(statearr_29671[(6)] = c__24031__auto__);

return statearr_29671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__))
);

return c__24031__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__,figwheel_version,temp__5735__auto__){
return (function (state_29680){
var state_val_29681 = (state_29680[(1)]);
if((state_val_29681 === (1))){
var inst_29674 = cljs.core.async.timeout.call(null,(2000));
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(2),inst_29674);
} else {
if((state_val_29681 === (2))){
var inst_29676 = (state_29680[(2)]);
var inst_29677 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29678 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29677);
var state_29680__$1 = (function (){var statearr_29682 = state_29680;
(statearr_29682[(7)] = inst_29676);

return statearr_29682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29680__$1,inst_29678);
} else {
return null;
}
}
});})(c__24031__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23936__auto__,c__24031__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto____0 = (function (){
var statearr_29683 = [null,null,null,null,null,null,null,null];
(statearr_29683[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto__);

(statearr_29683[(1)] = (1));

return statearr_29683;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto____1 = (function (state_29680){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_29680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e29684){if((e29684 instanceof Object)){
var ex__23940__auto__ = e29684;
var statearr_29685_29687 = state_29680;
(statearr_29685_29687[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29688 = state_29680;
state_29680 = G__29688;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto__ = function(state_29680){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto____1.call(this,state_29680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24033__auto__ = (function (){var statearr_29686 = f__24032__auto__.call(null);
(statearr_29686[(6)] = c__24031__auto__);

return statearr_29686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__,figwheel_version,temp__5735__auto__))
);

return c__24031__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29689){
var map__29690 = p__29689;
var map__29690__$1 = (((((!((map__29690 == null))))?(((((map__29690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);
var file = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29692 = "";
var G__29692__$1 = (cljs.core.truth_(file)?[G__29692,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29692);
var G__29692__$2 = (cljs.core.truth_(line)?[G__29692__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29692__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__29692__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29692__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29693){
var map__29694 = p__29693;
var map__29694__$1 = (((((!((map__29694 == null))))?(((((map__29694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694):map__29694);
var ed = map__29694__$1;
var exception_data = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29697 = (function (){var G__29696 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29696)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__29696;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29697);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29698){
var map__29699 = p__29698;
var map__29699__$1 = (((((!((map__29699 == null))))?(((((map__29699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29699):map__29699);
var w = map__29699__$1;
var message = cljs.core.get.call(null,map__29699__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29701 = cljs.core.seq.call(null,plugins);
var chunk__29702 = null;
var count__29703 = (0);
var i__29704 = (0);
while(true){
if((i__29704 < count__29703)){
var vec__29711 = cljs.core._nth.call(null,chunk__29702,i__29704);
var k = cljs.core.nth.call(null,vec__29711,(0),null);
var plugin = cljs.core.nth.call(null,vec__29711,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29717 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29701,chunk__29702,count__29703,i__29704,pl_29717,vec__29711,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29717.call(null,msg_hist);
});})(seq__29701,chunk__29702,count__29703,i__29704,pl_29717,vec__29711,k,plugin))
);
} else {
}


var G__29718 = seq__29701;
var G__29719 = chunk__29702;
var G__29720 = count__29703;
var G__29721 = (i__29704 + (1));
seq__29701 = G__29718;
chunk__29702 = G__29719;
count__29703 = G__29720;
i__29704 = G__29721;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29701);
if(temp__5735__auto__){
var seq__29701__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29701__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29701__$1);
var G__29722 = cljs.core.chunk_rest.call(null,seq__29701__$1);
var G__29723 = c__4550__auto__;
var G__29724 = cljs.core.count.call(null,c__4550__auto__);
var G__29725 = (0);
seq__29701 = G__29722;
chunk__29702 = G__29723;
count__29703 = G__29724;
i__29704 = G__29725;
continue;
} else {
var vec__29714 = cljs.core.first.call(null,seq__29701__$1);
var k = cljs.core.nth.call(null,vec__29714,(0),null);
var plugin = cljs.core.nth.call(null,vec__29714,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29726 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29701,chunk__29702,count__29703,i__29704,pl_29726,vec__29714,k,plugin,seq__29701__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29726.call(null,msg_hist);
});})(seq__29701,chunk__29702,count__29703,i__29704,pl_29726,vec__29714,k,plugin,seq__29701__$1,temp__5735__auto__))
);
} else {
}


var G__29727 = cljs.core.next.call(null,seq__29701__$1);
var G__29728 = null;
var G__29729 = (0);
var G__29730 = (0);
seq__29701 = G__29727;
chunk__29702 = G__29728;
count__29703 = G__29729;
i__29704 = G__29730;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29732 = arguments.length;
switch (G__29732) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29733_29738 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29734_29739 = null;
var count__29735_29740 = (0);
var i__29736_29741 = (0);
while(true){
if((i__29736_29741 < count__29735_29740)){
var msg_29742 = cljs.core._nth.call(null,chunk__29734_29739,i__29736_29741);
figwheel.client.socket.handle_incoming_message.call(null,msg_29742);


var G__29743 = seq__29733_29738;
var G__29744 = chunk__29734_29739;
var G__29745 = count__29735_29740;
var G__29746 = (i__29736_29741 + (1));
seq__29733_29738 = G__29743;
chunk__29734_29739 = G__29744;
count__29735_29740 = G__29745;
i__29736_29741 = G__29746;
continue;
} else {
var temp__5735__auto___29747 = cljs.core.seq.call(null,seq__29733_29738);
if(temp__5735__auto___29747){
var seq__29733_29748__$1 = temp__5735__auto___29747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29733_29748__$1)){
var c__4550__auto___29749 = cljs.core.chunk_first.call(null,seq__29733_29748__$1);
var G__29750 = cljs.core.chunk_rest.call(null,seq__29733_29748__$1);
var G__29751 = c__4550__auto___29749;
var G__29752 = cljs.core.count.call(null,c__4550__auto___29749);
var G__29753 = (0);
seq__29733_29738 = G__29750;
chunk__29734_29739 = G__29751;
count__29735_29740 = G__29752;
i__29736_29741 = G__29753;
continue;
} else {
var msg_29754 = cljs.core.first.call(null,seq__29733_29748__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29754);


var G__29755 = cljs.core.next.call(null,seq__29733_29748__$1);
var G__29756 = null;
var G__29757 = (0);
var G__29758 = (0);
seq__29733_29738 = G__29755;
chunk__29734_29739 = G__29756;
count__29735_29740 = G__29757;
i__29736_29741 = G__29758;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29763 = arguments.length;
var i__4731__auto___29764 = (0);
while(true){
if((i__4731__auto___29764 < len__4730__auto___29763)){
args__4736__auto__.push((arguments[i__4731__auto___29764]));

var G__29765 = (i__4731__auto___29764 + (1));
i__4731__auto___29764 = G__29765;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29760){
var map__29761 = p__29760;
var map__29761__$1 = (((((!((map__29761 == null))))?(((((map__29761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29761):map__29761);
var opts = map__29761__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29759){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29759));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29766){if((e29766 instanceof Error)){
var e = e29766;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29766;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29767){
var map__29768 = p__29767;
var map__29768__$1 = (((((!((map__29768 == null))))?(((((map__29768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29768):map__29768);
var msg_name = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1594984091376
