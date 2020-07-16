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
}catch (e27889){if((e27889 instanceof Error)){
var e = e27889;
return "Error: Unable to stringify";
} else {
throw e27889;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27892 = arguments.length;
switch (G__27892) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27890_SHARP_){
if(typeof p1__27890_SHARP_ === 'string'){
return p1__27890_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27890_SHARP_);
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
var len__4730__auto___27895 = arguments.length;
var i__4731__auto___27896 = (0);
while(true){
if((i__4731__auto___27896 < len__4730__auto___27895)){
args__4736__auto__.push((arguments[i__4731__auto___27896]));

var G__27897 = (i__4731__auto___27896 + (1));
i__4731__auto___27896 = G__27897;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27894){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27894));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27899 = arguments.length;
var i__4731__auto___27900 = (0);
while(true){
if((i__4731__auto___27900 < len__4730__auto___27899)){
args__4736__auto__.push((arguments[i__4731__auto___27900]));

var G__27901 = (i__4731__auto___27900 + (1));
i__4731__auto___27900 = G__27901;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27898){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27898));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27902){
var map__27903 = p__27902;
var map__27903__$1 = (((((!((map__27903 == null))))?(((((map__27903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27903):map__27903);
var message = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22561__auto___27982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___27982,ch){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___27982,ch){
return (function (state_27954){
var state_val_27955 = (state_27954[(1)]);
if((state_val_27955 === (7))){
var inst_27950 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_27956_27983 = state_27954__$1;
(statearr_27956_27983[(2)] = inst_27950);

(statearr_27956_27983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (1))){
var state_27954__$1 = state_27954;
var statearr_27957_27984 = state_27954__$1;
(statearr_27957_27984[(2)] = null);

(statearr_27957_27984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (4))){
var inst_27907 = (state_27954[(7)]);
var inst_27907__$1 = (state_27954[(2)]);
var state_27954__$1 = (function (){var statearr_27958 = state_27954;
(statearr_27958[(7)] = inst_27907__$1);

return statearr_27958;
})();
if(cljs.core.truth_(inst_27907__$1)){
var statearr_27959_27985 = state_27954__$1;
(statearr_27959_27985[(1)] = (5));

} else {
var statearr_27960_27986 = state_27954__$1;
(statearr_27960_27986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (15))){
var inst_27914 = (state_27954[(8)]);
var inst_27929 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27914);
var inst_27930 = cljs.core.first.call(null,inst_27929);
var inst_27931 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27930);
var inst_27932 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27931)].join('');
var inst_27933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27932);
var state_27954__$1 = state_27954;
var statearr_27961_27987 = state_27954__$1;
(statearr_27961_27987[(2)] = inst_27933);

(statearr_27961_27987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (13))){
var inst_27938 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_27962_27988 = state_27954__$1;
(statearr_27962_27988[(2)] = inst_27938);

(statearr_27962_27988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (6))){
var state_27954__$1 = state_27954;
var statearr_27963_27989 = state_27954__$1;
(statearr_27963_27989[(2)] = null);

(statearr_27963_27989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (17))){
var inst_27936 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_27964_27990 = state_27954__$1;
(statearr_27964_27990[(2)] = inst_27936);

(statearr_27964_27990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (3))){
var inst_27952 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27954__$1,inst_27952);
} else {
if((state_val_27955 === (12))){
var inst_27913 = (state_27954[(9)]);
var inst_27927 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27913,opts);
var state_27954__$1 = state_27954;
if(inst_27927){
var statearr_27965_27991 = state_27954__$1;
(statearr_27965_27991[(1)] = (15));

} else {
var statearr_27966_27992 = state_27954__$1;
(statearr_27966_27992[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (2))){
var state_27954__$1 = state_27954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27954__$1,(4),ch);
} else {
if((state_val_27955 === (11))){
var inst_27914 = (state_27954[(8)]);
var inst_27919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27920 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27914);
var inst_27921 = cljs.core.async.timeout.call(null,(1000));
var inst_27922 = [inst_27920,inst_27921];
var inst_27923 = (new cljs.core.PersistentVector(null,2,(5),inst_27919,inst_27922,null));
var state_27954__$1 = state_27954;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27954__$1,(14),inst_27923);
} else {
if((state_val_27955 === (9))){
var inst_27914 = (state_27954[(8)]);
var inst_27940 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27941 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27914);
var inst_27942 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27941);
var inst_27943 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27942)].join('');
var inst_27944 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27943);
var state_27954__$1 = (function (){var statearr_27967 = state_27954;
(statearr_27967[(10)] = inst_27940);

return statearr_27967;
})();
var statearr_27968_27993 = state_27954__$1;
(statearr_27968_27993[(2)] = inst_27944);

(statearr_27968_27993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (5))){
var inst_27907 = (state_27954[(7)]);
var inst_27909 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27910 = (new cljs.core.PersistentArrayMap(null,2,inst_27909,null));
var inst_27911 = (new cljs.core.PersistentHashSet(null,inst_27910,null));
var inst_27912 = figwheel.client.focus_msgs.call(null,inst_27911,inst_27907);
var inst_27913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27912);
var inst_27914 = cljs.core.first.call(null,inst_27912);
var inst_27915 = figwheel.client.autoload_QMARK_.call(null);
var state_27954__$1 = (function (){var statearr_27969 = state_27954;
(statearr_27969[(8)] = inst_27914);

(statearr_27969[(9)] = inst_27913);

return statearr_27969;
})();
if(cljs.core.truth_(inst_27915)){
var statearr_27970_27994 = state_27954__$1;
(statearr_27970_27994[(1)] = (8));

} else {
var statearr_27971_27995 = state_27954__$1;
(statearr_27971_27995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (14))){
var inst_27925 = (state_27954[(2)]);
var state_27954__$1 = state_27954;
var statearr_27972_27996 = state_27954__$1;
(statearr_27972_27996[(2)] = inst_27925);

(statearr_27972_27996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (16))){
var state_27954__$1 = state_27954;
var statearr_27973_27997 = state_27954__$1;
(statearr_27973_27997[(2)] = null);

(statearr_27973_27997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (10))){
var inst_27946 = (state_27954[(2)]);
var state_27954__$1 = (function (){var statearr_27974 = state_27954;
(statearr_27974[(11)] = inst_27946);

return statearr_27974;
})();
var statearr_27975_27998 = state_27954__$1;
(statearr_27975_27998[(2)] = null);

(statearr_27975_27998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27955 === (8))){
var inst_27913 = (state_27954[(9)]);
var inst_27917 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27913,opts);
var state_27954__$1 = state_27954;
if(cljs.core.truth_(inst_27917)){
var statearr_27976_27999 = state_27954__$1;
(statearr_27976_27999[(1)] = (11));

} else {
var statearr_27977_28000 = state_27954__$1;
(statearr_27977_28000[(1)] = (12));

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
});})(c__22561__auto___27982,ch))
;
return ((function (switch__22466__auto__,c__22561__auto___27982,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22467__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22467__auto____0 = (function (){
var statearr_27978 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27978[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22467__auto__);

(statearr_27978[(1)] = (1));

return statearr_27978;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22467__auto____1 = (function (state_27954){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_27954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e27979){if((e27979 instanceof Object)){
var ex__22470__auto__ = e27979;
var statearr_27980_28001 = state_27954;
(statearr_27980_28001[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28002 = state_27954;
state_27954 = G__28002;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22467__auto__ = function(state_27954){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22467__auto____1.call(this,state_27954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22467__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22467__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___27982,ch))
})();
var state__22563__auto__ = (function (){var statearr_27981 = f__22562__auto__.call(null);
(statearr_27981[(6)] = c__22561__auto___27982);

return statearr_27981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___27982,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28003_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28003_SHARP_));
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
var base_path_28009 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28009){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28005 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28006 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28007 = true;
var _STAR_print_fn_STAR__temp_val__28008 = ((function (_STAR_print_newline_STAR__orig_val__28005,_STAR_print_fn_STAR__orig_val__28006,_STAR_print_newline_STAR__temp_val__28007,sb,base_path_28009){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__28005,_STAR_print_fn_STAR__orig_val__28006,_STAR_print_newline_STAR__temp_val__28007,sb,base_path_28009))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28007;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28008;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28006;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28005;
}}catch (e28004){if((e28004 instanceof Error)){
var e = e28004;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28009], null));
} else {
var e = e28004;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28009))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28010){
var map__28011 = p__28010;
var map__28011__$1 = (((((!((map__28011 == null))))?(((((map__28011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28011):map__28011);
var opts = map__28011__$1;
var build_id = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28011,map__28011__$1,opts,build_id){
return (function (p__28013){
var vec__28014 = p__28013;
var seq__28015 = cljs.core.seq.call(null,vec__28014);
var first__28016 = cljs.core.first.call(null,seq__28015);
var seq__28015__$1 = cljs.core.next.call(null,seq__28015);
var map__28017 = first__28016;
var map__28017__$1 = (((((!((map__28017 == null))))?(((((map__28017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28017):map__28017);
var msg = map__28017__$1;
var msg_name = cljs.core.get.call(null,map__28017__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28015__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28014,seq__28015,first__28016,seq__28015__$1,map__28017,map__28017__$1,msg,msg_name,_,map__28011,map__28011__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28014,seq__28015,first__28016,seq__28015__$1,map__28017,map__28017__$1,msg,msg_name,_,map__28011,map__28011__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28011,map__28011__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28019){
var vec__28020 = p__28019;
var seq__28021 = cljs.core.seq.call(null,vec__28020);
var first__28022 = cljs.core.first.call(null,seq__28021);
var seq__28021__$1 = cljs.core.next.call(null,seq__28021);
var map__28023 = first__28022;
var map__28023__$1 = (((((!((map__28023 == null))))?(((((map__28023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);
var msg = map__28023__$1;
var msg_name = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28021__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28025){
var map__28026 = p__28025;
var map__28026__$1 = (((((!((map__28026 == null))))?(((((map__28026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28026):map__28026);
var on_compile_warning = cljs.core.get.call(null,map__28026__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28026__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28026,map__28026__$1,on_compile_warning,on_compile_fail){
return (function (p__28028){
var vec__28029 = p__28028;
var seq__28030 = cljs.core.seq.call(null,vec__28029);
var first__28031 = cljs.core.first.call(null,seq__28030);
var seq__28030__$1 = cljs.core.next.call(null,seq__28030);
var map__28032 = first__28031;
var map__28032__$1 = (((((!((map__28032 == null))))?(((((map__28032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28032):map__28032);
var msg = map__28032__$1;
var msg_name = cljs.core.get.call(null,map__28032__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28030__$1;
var pred__28034 = cljs.core._EQ_;
var expr__28035 = msg_name;
if(cljs.core.truth_(pred__28034.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28035))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28034.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28035))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28026,map__28026__$1,on_compile_warning,on_compile_fail))
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
var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__,msg_hist,msg_names,msg){
return (function (state_28124){
var state_val_28125 = (state_28124[(1)]);
if((state_val_28125 === (7))){
var inst_28044 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
if(cljs.core.truth_(inst_28044)){
var statearr_28126_28173 = state_28124__$1;
(statearr_28126_28173[(1)] = (8));

} else {
var statearr_28127_28174 = state_28124__$1;
(statearr_28127_28174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (20))){
var inst_28118 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28128_28175 = state_28124__$1;
(statearr_28128_28175[(2)] = inst_28118);

(statearr_28128_28175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (27))){
var inst_28114 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28129_28176 = state_28124__$1;
(statearr_28129_28176[(2)] = inst_28114);

(statearr_28129_28176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (1))){
var inst_28037 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28124__$1 = state_28124;
if(cljs.core.truth_(inst_28037)){
var statearr_28130_28177 = state_28124__$1;
(statearr_28130_28177[(1)] = (2));

} else {
var statearr_28131_28178 = state_28124__$1;
(statearr_28131_28178[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (24))){
var inst_28116 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28132_28179 = state_28124__$1;
(statearr_28132_28179[(2)] = inst_28116);

(statearr_28132_28179[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (4))){
var inst_28122 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28124__$1,inst_28122);
} else {
if((state_val_28125 === (15))){
var inst_28120 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28133_28180 = state_28124__$1;
(statearr_28133_28180[(2)] = inst_28120);

(statearr_28133_28180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (21))){
var inst_28073 = (state_28124[(2)]);
var inst_28074 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28075 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28074);
var state_28124__$1 = (function (){var statearr_28134 = state_28124;
(statearr_28134[(7)] = inst_28073);

return statearr_28134;
})();
var statearr_28135_28181 = state_28124__$1;
(statearr_28135_28181[(2)] = inst_28075);

(statearr_28135_28181[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (31))){
var inst_28103 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28124__$1 = state_28124;
if(inst_28103){
var statearr_28136_28182 = state_28124__$1;
(statearr_28136_28182[(1)] = (34));

} else {
var statearr_28137_28183 = state_28124__$1;
(statearr_28137_28183[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (32))){
var inst_28112 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28138_28184 = state_28124__$1;
(statearr_28138_28184[(2)] = inst_28112);

(statearr_28138_28184[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (33))){
var inst_28099 = (state_28124[(2)]);
var inst_28100 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28101 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28100);
var state_28124__$1 = (function (){var statearr_28139 = state_28124;
(statearr_28139[(8)] = inst_28099);

return statearr_28139;
})();
var statearr_28140_28185 = state_28124__$1;
(statearr_28140_28185[(2)] = inst_28101);

(statearr_28140_28185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (13))){
var inst_28058 = figwheel.client.heads_up.clear.call(null);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(16),inst_28058);
} else {
if((state_val_28125 === (22))){
var inst_28079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28080 = figwheel.client.heads_up.append_warning_message.call(null,inst_28079);
var state_28124__$1 = state_28124;
var statearr_28141_28186 = state_28124__$1;
(statearr_28141_28186[(2)] = inst_28080);

(statearr_28141_28186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (36))){
var inst_28110 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28142_28187 = state_28124__$1;
(statearr_28142_28187[(2)] = inst_28110);

(statearr_28142_28187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (29))){
var inst_28090 = (state_28124[(2)]);
var inst_28091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28092 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28091);
var state_28124__$1 = (function (){var statearr_28143 = state_28124;
(statearr_28143[(9)] = inst_28090);

return statearr_28143;
})();
var statearr_28144_28188 = state_28124__$1;
(statearr_28144_28188[(2)] = inst_28092);

(statearr_28144_28188[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (6))){
var inst_28039 = (state_28124[(10)]);
var state_28124__$1 = state_28124;
var statearr_28145_28189 = state_28124__$1;
(statearr_28145_28189[(2)] = inst_28039);

(statearr_28145_28189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (28))){
var inst_28086 = (state_28124[(2)]);
var inst_28087 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28088 = figwheel.client.heads_up.display_warning.call(null,inst_28087);
var state_28124__$1 = (function (){var statearr_28146 = state_28124;
(statearr_28146[(11)] = inst_28086);

return statearr_28146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(29),inst_28088);
} else {
if((state_val_28125 === (25))){
var inst_28084 = figwheel.client.heads_up.clear.call(null);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(28),inst_28084);
} else {
if((state_val_28125 === (34))){
var inst_28105 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(37),inst_28105);
} else {
if((state_val_28125 === (17))){
var inst_28064 = (state_28124[(2)]);
var inst_28065 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28066 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28065);
var state_28124__$1 = (function (){var statearr_28147 = state_28124;
(statearr_28147[(12)] = inst_28064);

return statearr_28147;
})();
var statearr_28148_28190 = state_28124__$1;
(statearr_28148_28190[(2)] = inst_28066);

(statearr_28148_28190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (3))){
var inst_28056 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28124__$1 = state_28124;
if(inst_28056){
var statearr_28149_28191 = state_28124__$1;
(statearr_28149_28191[(1)] = (13));

} else {
var statearr_28150_28192 = state_28124__$1;
(statearr_28150_28192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (12))){
var inst_28052 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28151_28193 = state_28124__$1;
(statearr_28151_28193[(2)] = inst_28052);

(statearr_28151_28193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (2))){
var inst_28039 = (state_28124[(10)]);
var inst_28039__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28124__$1 = (function (){var statearr_28152 = state_28124;
(statearr_28152[(10)] = inst_28039__$1);

return statearr_28152;
})();
if(cljs.core.truth_(inst_28039__$1)){
var statearr_28153_28194 = state_28124__$1;
(statearr_28153_28194[(1)] = (5));

} else {
var statearr_28154_28195 = state_28124__$1;
(statearr_28154_28195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (23))){
var inst_28082 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28124__$1 = state_28124;
if(inst_28082){
var statearr_28155_28196 = state_28124__$1;
(statearr_28155_28196[(1)] = (25));

} else {
var statearr_28156_28197 = state_28124__$1;
(statearr_28156_28197[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (35))){
var state_28124__$1 = state_28124;
var statearr_28157_28198 = state_28124__$1;
(statearr_28157_28198[(2)] = null);

(statearr_28157_28198[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (19))){
var inst_28077 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28124__$1 = state_28124;
if(inst_28077){
var statearr_28158_28199 = state_28124__$1;
(statearr_28158_28199[(1)] = (22));

} else {
var statearr_28159_28200 = state_28124__$1;
(statearr_28159_28200[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (11))){
var inst_28048 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28160_28201 = state_28124__$1;
(statearr_28160_28201[(2)] = inst_28048);

(statearr_28160_28201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (9))){
var inst_28050 = figwheel.client.heads_up.clear.call(null);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(12),inst_28050);
} else {
if((state_val_28125 === (5))){
var inst_28041 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28124__$1 = state_28124;
var statearr_28161_28202 = state_28124__$1;
(statearr_28161_28202[(2)] = inst_28041);

(statearr_28161_28202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (14))){
var inst_28068 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28124__$1 = state_28124;
if(inst_28068){
var statearr_28162_28203 = state_28124__$1;
(statearr_28162_28203[(1)] = (18));

} else {
var statearr_28163_28204 = state_28124__$1;
(statearr_28163_28204[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (26))){
var inst_28094 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28124__$1 = state_28124;
if(inst_28094){
var statearr_28164_28205 = state_28124__$1;
(statearr_28164_28205[(1)] = (30));

} else {
var statearr_28165_28206 = state_28124__$1;
(statearr_28165_28206[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (16))){
var inst_28060 = (state_28124[(2)]);
var inst_28061 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28062 = figwheel.client.heads_up.display_exception.call(null,inst_28061);
var state_28124__$1 = (function (){var statearr_28166 = state_28124;
(statearr_28166[(13)] = inst_28060);

return statearr_28166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(17),inst_28062);
} else {
if((state_val_28125 === (30))){
var inst_28096 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28097 = figwheel.client.heads_up.display_warning.call(null,inst_28096);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(33),inst_28097);
} else {
if((state_val_28125 === (10))){
var inst_28054 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28167_28207 = state_28124__$1;
(statearr_28167_28207[(2)] = inst_28054);

(statearr_28167_28207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (18))){
var inst_28070 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28071 = figwheel.client.heads_up.display_exception.call(null,inst_28070);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(21),inst_28071);
} else {
if((state_val_28125 === (37))){
var inst_28107 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28168_28208 = state_28124__$1;
(statearr_28168_28208[(2)] = inst_28107);

(statearr_28168_28208[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (8))){
var inst_28046 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(11),inst_28046);
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
});})(c__22561__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22466__auto__,c__22561__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto____0 = (function (){
var statearr_28169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28169[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto__);

(statearr_28169[(1)] = (1));

return statearr_28169;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto____1 = (function (state_28124){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_28124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e28170){if((e28170 instanceof Object)){
var ex__22470__auto__ = e28170;
var statearr_28171_28209 = state_28124;
(statearr_28171_28209[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28210 = state_28124;
state_28124 = G__28210;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto__ = function(state_28124){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto____1.call(this,state_28124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__,msg_hist,msg_names,msg))
})();
var state__22563__auto__ = (function (){var statearr_28172 = f__22562__auto__.call(null);
(statearr_28172[(6)] = c__22561__auto__);

return statearr_28172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__,msg_hist,msg_names,msg))
);

return c__22561__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22561__auto___28239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___28239,ch){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___28239,ch){
return (function (state_28225){
var state_val_28226 = (state_28225[(1)]);
if((state_val_28226 === (1))){
var state_28225__$1 = state_28225;
var statearr_28227_28240 = state_28225__$1;
(statearr_28227_28240[(2)] = null);

(statearr_28227_28240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (2))){
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,(4),ch);
} else {
if((state_val_28226 === (3))){
var inst_28223 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28225__$1,inst_28223);
} else {
if((state_val_28226 === (4))){
var inst_28213 = (state_28225[(7)]);
var inst_28213__$1 = (state_28225[(2)]);
var state_28225__$1 = (function (){var statearr_28228 = state_28225;
(statearr_28228[(7)] = inst_28213__$1);

return statearr_28228;
})();
if(cljs.core.truth_(inst_28213__$1)){
var statearr_28229_28241 = state_28225__$1;
(statearr_28229_28241[(1)] = (5));

} else {
var statearr_28230_28242 = state_28225__$1;
(statearr_28230_28242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (5))){
var inst_28213 = (state_28225[(7)]);
var inst_28215 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28213);
var state_28225__$1 = state_28225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,(8),inst_28215);
} else {
if((state_val_28226 === (6))){
var state_28225__$1 = state_28225;
var statearr_28231_28243 = state_28225__$1;
(statearr_28231_28243[(2)] = null);

(statearr_28231_28243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (7))){
var inst_28221 = (state_28225[(2)]);
var state_28225__$1 = state_28225;
var statearr_28232_28244 = state_28225__$1;
(statearr_28232_28244[(2)] = inst_28221);

(statearr_28232_28244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28226 === (8))){
var inst_28217 = (state_28225[(2)]);
var state_28225__$1 = (function (){var statearr_28233 = state_28225;
(statearr_28233[(8)] = inst_28217);

return statearr_28233;
})();
var statearr_28234_28245 = state_28225__$1;
(statearr_28234_28245[(2)] = null);

(statearr_28234_28245[(1)] = (2));


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
});})(c__22561__auto___28239,ch))
;
return ((function (switch__22466__auto__,c__22561__auto___28239,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22467__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22467__auto____0 = (function (){
var statearr_28235 = [null,null,null,null,null,null,null,null,null];
(statearr_28235[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22467__auto__);

(statearr_28235[(1)] = (1));

return statearr_28235;
});
var figwheel$client$heads_up_plugin_$_state_machine__22467__auto____1 = (function (state_28225){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_28225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e28236){if((e28236 instanceof Object)){
var ex__22470__auto__ = e28236;
var statearr_28237_28246 = state_28225;
(statearr_28237_28246[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28247 = state_28225;
state_28225 = G__28247;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22467__auto__ = function(state_28225){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22467__auto____1.call(this,state_28225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22467__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22467__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___28239,ch))
})();
var state__22563__auto__ = (function (){var statearr_28238 = f__22562__auto__.call(null);
(statearr_28238[(6)] = c__22561__auto___28239);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___28239,ch))
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
var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__){
return (function (state_28253){
var state_val_28254 = (state_28253[(1)]);
if((state_val_28254 === (1))){
var inst_28248 = cljs.core.async.timeout.call(null,(3000));
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28253__$1,(2),inst_28248);
} else {
if((state_val_28254 === (2))){
var inst_28250 = (state_28253[(2)]);
var inst_28251 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28253__$1 = (function (){var statearr_28255 = state_28253;
(statearr_28255[(7)] = inst_28250);

return statearr_28255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28253__$1,inst_28251);
} else {
return null;
}
}
});})(c__22561__auto__))
;
return ((function (switch__22466__auto__,c__22561__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22467__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22467__auto____0 = (function (){
var statearr_28256 = [null,null,null,null,null,null,null,null];
(statearr_28256[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22467__auto__);

(statearr_28256[(1)] = (1));

return statearr_28256;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22467__auto____1 = (function (state_28253){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_28253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e28257){if((e28257 instanceof Object)){
var ex__22470__auto__ = e28257;
var statearr_28258_28260 = state_28253;
(statearr_28258_28260[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28261 = state_28253;
state_28253 = G__28261;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22467__auto__ = function(state_28253){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22467__auto____1.call(this,state_28253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22467__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22467__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__))
})();
var state__22563__auto__ = (function (){var statearr_28259 = f__22562__auto__.call(null);
(statearr_28259[(6)] = c__22561__auto__);

return statearr_28259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__))
);

return c__22561__auto__;
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
var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__,figwheel_version,temp__5735__auto__){
return (function (state_28268){
var state_val_28269 = (state_28268[(1)]);
if((state_val_28269 === (1))){
var inst_28262 = cljs.core.async.timeout.call(null,(2000));
var state_28268__$1 = state_28268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28268__$1,(2),inst_28262);
} else {
if((state_val_28269 === (2))){
var inst_28264 = (state_28268[(2)]);
var inst_28265 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28266 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28265);
var state_28268__$1 = (function (){var statearr_28270 = state_28268;
(statearr_28270[(7)] = inst_28264);

return statearr_28270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28268__$1,inst_28266);
} else {
return null;
}
}
});})(c__22561__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__22466__auto__,c__22561__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto____0 = (function (){
var statearr_28271 = [null,null,null,null,null,null,null,null];
(statearr_28271[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto__);

(statearr_28271[(1)] = (1));

return statearr_28271;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto____1 = (function (state_28268){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_28268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e28272){if((e28272 instanceof Object)){
var ex__22470__auto__ = e28272;
var statearr_28273_28275 = state_28268;
(statearr_28273_28275[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28276 = state_28268;
state_28268 = G__28276;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto__ = function(state_28268){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto____1.call(this,state_28268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__,figwheel_version,temp__5735__auto__))
})();
var state__22563__auto__ = (function (){var statearr_28274 = f__22562__auto__.call(null);
(statearr_28274[(6)] = c__22561__auto__);

return statearr_28274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__,figwheel_version,temp__5735__auto__))
);

return c__22561__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28277){
var map__28278 = p__28277;
var map__28278__$1 = (((((!((map__28278 == null))))?(((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var file = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28280 = "";
var G__28280__$1 = (cljs.core.truth_(file)?[G__28280,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28280);
var G__28280__$2 = (cljs.core.truth_(line)?[G__28280__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28280__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__28280__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28280__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28281){
var map__28282 = p__28281;
var map__28282__$1 = (((((!((map__28282 == null))))?(((((map__28282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28282):map__28282);
var ed = map__28282__$1;
var exception_data = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28285 = (function (){var G__28284 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28284)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28284;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28285);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28286){
var map__28287 = p__28286;
var map__28287__$1 = (((((!((map__28287 == null))))?(((((map__28287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28287):map__28287);
var w = map__28287__$1;
var message = cljs.core.get.call(null,map__28287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28289 = cljs.core.seq.call(null,plugins);
var chunk__28290 = null;
var count__28291 = (0);
var i__28292 = (0);
while(true){
if((i__28292 < count__28291)){
var vec__28299 = cljs.core._nth.call(null,chunk__28290,i__28292);
var k = cljs.core.nth.call(null,vec__28299,(0),null);
var plugin = cljs.core.nth.call(null,vec__28299,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28305 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28289,chunk__28290,count__28291,i__28292,pl_28305,vec__28299,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28305.call(null,msg_hist);
});})(seq__28289,chunk__28290,count__28291,i__28292,pl_28305,vec__28299,k,plugin))
);
} else {
}


var G__28306 = seq__28289;
var G__28307 = chunk__28290;
var G__28308 = count__28291;
var G__28309 = (i__28292 + (1));
seq__28289 = G__28306;
chunk__28290 = G__28307;
count__28291 = G__28308;
i__28292 = G__28309;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28289);
if(temp__5735__auto__){
var seq__28289__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28289__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28289__$1);
var G__28310 = cljs.core.chunk_rest.call(null,seq__28289__$1);
var G__28311 = c__4550__auto__;
var G__28312 = cljs.core.count.call(null,c__4550__auto__);
var G__28313 = (0);
seq__28289 = G__28310;
chunk__28290 = G__28311;
count__28291 = G__28312;
i__28292 = G__28313;
continue;
} else {
var vec__28302 = cljs.core.first.call(null,seq__28289__$1);
var k = cljs.core.nth.call(null,vec__28302,(0),null);
var plugin = cljs.core.nth.call(null,vec__28302,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28314 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28289,chunk__28290,count__28291,i__28292,pl_28314,vec__28302,k,plugin,seq__28289__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28314.call(null,msg_hist);
});})(seq__28289,chunk__28290,count__28291,i__28292,pl_28314,vec__28302,k,plugin,seq__28289__$1,temp__5735__auto__))
);
} else {
}


var G__28315 = cljs.core.next.call(null,seq__28289__$1);
var G__28316 = null;
var G__28317 = (0);
var G__28318 = (0);
seq__28289 = G__28315;
chunk__28290 = G__28316;
count__28291 = G__28317;
i__28292 = G__28318;
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
var G__28320 = arguments.length;
switch (G__28320) {
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

var seq__28321_28326 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28322_28327 = null;
var count__28323_28328 = (0);
var i__28324_28329 = (0);
while(true){
if((i__28324_28329 < count__28323_28328)){
var msg_28330 = cljs.core._nth.call(null,chunk__28322_28327,i__28324_28329);
figwheel.client.socket.handle_incoming_message.call(null,msg_28330);


var G__28331 = seq__28321_28326;
var G__28332 = chunk__28322_28327;
var G__28333 = count__28323_28328;
var G__28334 = (i__28324_28329 + (1));
seq__28321_28326 = G__28331;
chunk__28322_28327 = G__28332;
count__28323_28328 = G__28333;
i__28324_28329 = G__28334;
continue;
} else {
var temp__5735__auto___28335 = cljs.core.seq.call(null,seq__28321_28326);
if(temp__5735__auto___28335){
var seq__28321_28336__$1 = temp__5735__auto___28335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28321_28336__$1)){
var c__4550__auto___28337 = cljs.core.chunk_first.call(null,seq__28321_28336__$1);
var G__28338 = cljs.core.chunk_rest.call(null,seq__28321_28336__$1);
var G__28339 = c__4550__auto___28337;
var G__28340 = cljs.core.count.call(null,c__4550__auto___28337);
var G__28341 = (0);
seq__28321_28326 = G__28338;
chunk__28322_28327 = G__28339;
count__28323_28328 = G__28340;
i__28324_28329 = G__28341;
continue;
} else {
var msg_28342 = cljs.core.first.call(null,seq__28321_28336__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28342);


var G__28343 = cljs.core.next.call(null,seq__28321_28336__$1);
var G__28344 = null;
var G__28345 = (0);
var G__28346 = (0);
seq__28321_28326 = G__28343;
chunk__28322_28327 = G__28344;
count__28323_28328 = G__28345;
i__28324_28329 = G__28346;
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
var len__4730__auto___28351 = arguments.length;
var i__4731__auto___28352 = (0);
while(true){
if((i__4731__auto___28352 < len__4730__auto___28351)){
args__4736__auto__.push((arguments[i__4731__auto___28352]));

var G__28353 = (i__4731__auto___28352 + (1));
i__4731__auto___28352 = G__28353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28348){
var map__28349 = p__28348;
var map__28349__$1 = (((((!((map__28349 == null))))?(((((map__28349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28349):map__28349);
var opts = map__28349__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28347){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28347));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28354){if((e28354 instanceof Error)){
var e = e28354;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28354;

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
return (function (p__28355){
var map__28356 = p__28355;
var map__28356__$1 = (((((!((map__28356 == null))))?(((((map__28356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28356):map__28356);
var msg_name = cljs.core.get.call(null,map__28356__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1594882423423
