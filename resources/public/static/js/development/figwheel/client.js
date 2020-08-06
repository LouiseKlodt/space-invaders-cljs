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
}catch (e27829){if((e27829 instanceof Error)){
var e = e27829;
return "Error: Unable to stringify";
} else {
throw e27829;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27832 = arguments.length;
switch (G__27832) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27830_SHARP_){
if(typeof p1__27830_SHARP_ === 'string'){
return p1__27830_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27830_SHARP_);
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
var len__4730__auto___27835 = arguments.length;
var i__4731__auto___27836 = (0);
while(true){
if((i__4731__auto___27836 < len__4730__auto___27835)){
args__4736__auto__.push((arguments[i__4731__auto___27836]));

var G__27837 = (i__4731__auto___27836 + (1));
i__4731__auto___27836 = G__27837;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27834){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27834));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27839 = arguments.length;
var i__4731__auto___27840 = (0);
while(true){
if((i__4731__auto___27840 < len__4730__auto___27839)){
args__4736__auto__.push((arguments[i__4731__auto___27840]));

var G__27841 = (i__4731__auto___27840 + (1));
i__4731__auto___27840 = G__27841;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27838){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27838));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27842){
var map__27843 = p__27842;
var map__27843__$1 = (((((!((map__27843 == null))))?(((((map__27843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27843):map__27843);
var message = cljs.core.get.call(null,map__27843__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27843__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22559__auto___27922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___27922,ch){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___27922,ch){
return (function (state_27894){
var state_val_27895 = (state_27894[(1)]);
if((state_val_27895 === (7))){
var inst_27890 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
var statearr_27896_27923 = state_27894__$1;
(statearr_27896_27923[(2)] = inst_27890);

(statearr_27896_27923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (1))){
var state_27894__$1 = state_27894;
var statearr_27897_27924 = state_27894__$1;
(statearr_27897_27924[(2)] = null);

(statearr_27897_27924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (4))){
var inst_27847 = (state_27894[(7)]);
var inst_27847__$1 = (state_27894[(2)]);
var state_27894__$1 = (function (){var statearr_27898 = state_27894;
(statearr_27898[(7)] = inst_27847__$1);

return statearr_27898;
})();
if(cljs.core.truth_(inst_27847__$1)){
var statearr_27899_27925 = state_27894__$1;
(statearr_27899_27925[(1)] = (5));

} else {
var statearr_27900_27926 = state_27894__$1;
(statearr_27900_27926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (15))){
var inst_27854 = (state_27894[(8)]);
var inst_27869 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27854);
var inst_27870 = cljs.core.first.call(null,inst_27869);
var inst_27871 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27870);
var inst_27872 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27871)].join('');
var inst_27873 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27872);
var state_27894__$1 = state_27894;
var statearr_27901_27927 = state_27894__$1;
(statearr_27901_27927[(2)] = inst_27873);

(statearr_27901_27927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (13))){
var inst_27878 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
var statearr_27902_27928 = state_27894__$1;
(statearr_27902_27928[(2)] = inst_27878);

(statearr_27902_27928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (6))){
var state_27894__$1 = state_27894;
var statearr_27903_27929 = state_27894__$1;
(statearr_27903_27929[(2)] = null);

(statearr_27903_27929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (17))){
var inst_27876 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
var statearr_27904_27930 = state_27894__$1;
(statearr_27904_27930[(2)] = inst_27876);

(statearr_27904_27930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (3))){
var inst_27892 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27894__$1,inst_27892);
} else {
if((state_val_27895 === (12))){
var inst_27853 = (state_27894[(9)]);
var inst_27867 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27853,opts);
var state_27894__$1 = state_27894;
if(inst_27867){
var statearr_27905_27931 = state_27894__$1;
(statearr_27905_27931[(1)] = (15));

} else {
var statearr_27906_27932 = state_27894__$1;
(statearr_27906_27932[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (2))){
var state_27894__$1 = state_27894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27894__$1,(4),ch);
} else {
if((state_val_27895 === (11))){
var inst_27854 = (state_27894[(8)]);
var inst_27859 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27860 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27854);
var inst_27861 = cljs.core.async.timeout.call(null,(1000));
var inst_27862 = [inst_27860,inst_27861];
var inst_27863 = (new cljs.core.PersistentVector(null,2,(5),inst_27859,inst_27862,null));
var state_27894__$1 = state_27894;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27894__$1,(14),inst_27863);
} else {
if((state_val_27895 === (9))){
var inst_27854 = (state_27894[(8)]);
var inst_27880 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27881 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27854);
var inst_27882 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27881);
var inst_27883 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27882)].join('');
var inst_27884 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27883);
var state_27894__$1 = (function (){var statearr_27907 = state_27894;
(statearr_27907[(10)] = inst_27880);

return statearr_27907;
})();
var statearr_27908_27933 = state_27894__$1;
(statearr_27908_27933[(2)] = inst_27884);

(statearr_27908_27933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (5))){
var inst_27847 = (state_27894[(7)]);
var inst_27849 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27850 = (new cljs.core.PersistentArrayMap(null,2,inst_27849,null));
var inst_27851 = (new cljs.core.PersistentHashSet(null,inst_27850,null));
var inst_27852 = figwheel.client.focus_msgs.call(null,inst_27851,inst_27847);
var inst_27853 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27852);
var inst_27854 = cljs.core.first.call(null,inst_27852);
var inst_27855 = figwheel.client.autoload_QMARK_.call(null);
var state_27894__$1 = (function (){var statearr_27909 = state_27894;
(statearr_27909[(9)] = inst_27853);

(statearr_27909[(8)] = inst_27854);

return statearr_27909;
})();
if(cljs.core.truth_(inst_27855)){
var statearr_27910_27934 = state_27894__$1;
(statearr_27910_27934[(1)] = (8));

} else {
var statearr_27911_27935 = state_27894__$1;
(statearr_27911_27935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (14))){
var inst_27865 = (state_27894[(2)]);
var state_27894__$1 = state_27894;
var statearr_27912_27936 = state_27894__$1;
(statearr_27912_27936[(2)] = inst_27865);

(statearr_27912_27936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (16))){
var state_27894__$1 = state_27894;
var statearr_27913_27937 = state_27894__$1;
(statearr_27913_27937[(2)] = null);

(statearr_27913_27937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (10))){
var inst_27886 = (state_27894[(2)]);
var state_27894__$1 = (function (){var statearr_27914 = state_27894;
(statearr_27914[(11)] = inst_27886);

return statearr_27914;
})();
var statearr_27915_27938 = state_27894__$1;
(statearr_27915_27938[(2)] = null);

(statearr_27915_27938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27895 === (8))){
var inst_27853 = (state_27894[(9)]);
var inst_27857 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27853,opts);
var state_27894__$1 = state_27894;
if(cljs.core.truth_(inst_27857)){
var statearr_27916_27939 = state_27894__$1;
(statearr_27916_27939[(1)] = (11));

} else {
var statearr_27917_27940 = state_27894__$1;
(statearr_27917_27940[(1)] = (12));

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
});})(c__22559__auto___27922,ch))
;
return ((function (switch__22464__auto__,c__22559__auto___27922,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_27918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27918[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__);

(statearr_27918[(1)] = (1));

return statearr_27918;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____1 = (function (state_27894){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_27894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e27919){if((e27919 instanceof Object)){
var ex__22468__auto__ = e27919;
var statearr_27920_27941 = state_27894;
(statearr_27920_27941[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27942 = state_27894;
state_27894 = G__27942;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__ = function(state_27894){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____1.call(this,state_27894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22465__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___27922,ch))
})();
var state__22561__auto__ = (function (){var statearr_27921 = f__22560__auto__.call(null);
(statearr_27921[(6)] = c__22559__auto___27922);

return statearr_27921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___27922,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27943_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27943_SHARP_));
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
var base_path_27949 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27949){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27945 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27946 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27947 = true;
var _STAR_print_fn_STAR__temp_val__27948 = ((function (_STAR_print_newline_STAR__orig_val__27945,_STAR_print_fn_STAR__orig_val__27946,_STAR_print_newline_STAR__temp_val__27947,sb,base_path_27949){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__27945,_STAR_print_fn_STAR__orig_val__27946,_STAR_print_newline_STAR__temp_val__27947,sb,base_path_27949))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27947;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27948;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27946;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27945;
}}catch (e27944){if((e27944 instanceof Error)){
var e = e27944;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27949], null));
} else {
var e = e27944;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27949))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27950){
var map__27951 = p__27950;
var map__27951__$1 = (((((!((map__27951 == null))))?(((((map__27951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27951):map__27951);
var opts = map__27951__$1;
var build_id = cljs.core.get.call(null,map__27951__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27951,map__27951__$1,opts,build_id){
return (function (p__27953){
var vec__27954 = p__27953;
var seq__27955 = cljs.core.seq.call(null,vec__27954);
var first__27956 = cljs.core.first.call(null,seq__27955);
var seq__27955__$1 = cljs.core.next.call(null,seq__27955);
var map__27957 = first__27956;
var map__27957__$1 = (((((!((map__27957 == null))))?(((((map__27957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27957):map__27957);
var msg = map__27957__$1;
var msg_name = cljs.core.get.call(null,map__27957__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27955__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27954,seq__27955,first__27956,seq__27955__$1,map__27957,map__27957__$1,msg,msg_name,_,map__27951,map__27951__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27954,seq__27955,first__27956,seq__27955__$1,map__27957,map__27957__$1,msg,msg_name,_,map__27951,map__27951__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27951,map__27951__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27959){
var vec__27960 = p__27959;
var seq__27961 = cljs.core.seq.call(null,vec__27960);
var first__27962 = cljs.core.first.call(null,seq__27961);
var seq__27961__$1 = cljs.core.next.call(null,seq__27961);
var map__27963 = first__27962;
var map__27963__$1 = (((((!((map__27963 == null))))?(((((map__27963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27963):map__27963);
var msg = map__27963__$1;
var msg_name = cljs.core.get.call(null,map__27963__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27961__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27965){
var map__27966 = p__27965;
var map__27966__$1 = (((((!((map__27966 == null))))?(((((map__27966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27966):map__27966);
var on_compile_warning = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27966__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27966,map__27966__$1,on_compile_warning,on_compile_fail){
return (function (p__27968){
var vec__27969 = p__27968;
var seq__27970 = cljs.core.seq.call(null,vec__27969);
var first__27971 = cljs.core.first.call(null,seq__27970);
var seq__27970__$1 = cljs.core.next.call(null,seq__27970);
var map__27972 = first__27971;
var map__27972__$1 = (((((!((map__27972 == null))))?(((((map__27972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27972):map__27972);
var msg = map__27972__$1;
var msg_name = cljs.core.get.call(null,map__27972__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27970__$1;
var pred__27974 = cljs.core._EQ_;
var expr__27975 = msg_name;
if(cljs.core.truth_(pred__27974.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27975))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27974.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27975))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27966,map__27966__$1,on_compile_warning,on_compile_fail))
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
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,msg_hist,msg_names,msg){
return (function (state_28064){
var state_val_28065 = (state_28064[(1)]);
if((state_val_28065 === (7))){
var inst_27984 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
if(cljs.core.truth_(inst_27984)){
var statearr_28066_28113 = state_28064__$1;
(statearr_28066_28113[(1)] = (8));

} else {
var statearr_28067_28114 = state_28064__$1;
(statearr_28067_28114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (20))){
var inst_28058 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28068_28115 = state_28064__$1;
(statearr_28068_28115[(2)] = inst_28058);

(statearr_28068_28115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (27))){
var inst_28054 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28069_28116 = state_28064__$1;
(statearr_28069_28116[(2)] = inst_28054);

(statearr_28069_28116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (1))){
var inst_27977 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28064__$1 = state_28064;
if(cljs.core.truth_(inst_27977)){
var statearr_28070_28117 = state_28064__$1;
(statearr_28070_28117[(1)] = (2));

} else {
var statearr_28071_28118 = state_28064__$1;
(statearr_28071_28118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (24))){
var inst_28056 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28072_28119 = state_28064__$1;
(statearr_28072_28119[(2)] = inst_28056);

(statearr_28072_28119[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (4))){
var inst_28062 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28064__$1,inst_28062);
} else {
if((state_val_28065 === (15))){
var inst_28060 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28073_28120 = state_28064__$1;
(statearr_28073_28120[(2)] = inst_28060);

(statearr_28073_28120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (21))){
var inst_28013 = (state_28064[(2)]);
var inst_28014 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28015 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28014);
var state_28064__$1 = (function (){var statearr_28074 = state_28064;
(statearr_28074[(7)] = inst_28013);

return statearr_28074;
})();
var statearr_28075_28121 = state_28064__$1;
(statearr_28075_28121[(2)] = inst_28015);

(statearr_28075_28121[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (31))){
var inst_28043 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28064__$1 = state_28064;
if(inst_28043){
var statearr_28076_28122 = state_28064__$1;
(statearr_28076_28122[(1)] = (34));

} else {
var statearr_28077_28123 = state_28064__$1;
(statearr_28077_28123[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (32))){
var inst_28052 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28078_28124 = state_28064__$1;
(statearr_28078_28124[(2)] = inst_28052);

(statearr_28078_28124[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (33))){
var inst_28039 = (state_28064[(2)]);
var inst_28040 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28041 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28040);
var state_28064__$1 = (function (){var statearr_28079 = state_28064;
(statearr_28079[(8)] = inst_28039);

return statearr_28079;
})();
var statearr_28080_28125 = state_28064__$1;
(statearr_28080_28125[(2)] = inst_28041);

(statearr_28080_28125[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (13))){
var inst_27998 = figwheel.client.heads_up.clear.call(null);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(16),inst_27998);
} else {
if((state_val_28065 === (22))){
var inst_28019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28020 = figwheel.client.heads_up.append_warning_message.call(null,inst_28019);
var state_28064__$1 = state_28064;
var statearr_28081_28126 = state_28064__$1;
(statearr_28081_28126[(2)] = inst_28020);

(statearr_28081_28126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (36))){
var inst_28050 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28082_28127 = state_28064__$1;
(statearr_28082_28127[(2)] = inst_28050);

(statearr_28082_28127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (29))){
var inst_28030 = (state_28064[(2)]);
var inst_28031 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28032 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28031);
var state_28064__$1 = (function (){var statearr_28083 = state_28064;
(statearr_28083[(9)] = inst_28030);

return statearr_28083;
})();
var statearr_28084_28128 = state_28064__$1;
(statearr_28084_28128[(2)] = inst_28032);

(statearr_28084_28128[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (6))){
var inst_27979 = (state_28064[(10)]);
var state_28064__$1 = state_28064;
var statearr_28085_28129 = state_28064__$1;
(statearr_28085_28129[(2)] = inst_27979);

(statearr_28085_28129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (28))){
var inst_28026 = (state_28064[(2)]);
var inst_28027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28028 = figwheel.client.heads_up.display_warning.call(null,inst_28027);
var state_28064__$1 = (function (){var statearr_28086 = state_28064;
(statearr_28086[(11)] = inst_28026);

return statearr_28086;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(29),inst_28028);
} else {
if((state_val_28065 === (25))){
var inst_28024 = figwheel.client.heads_up.clear.call(null);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(28),inst_28024);
} else {
if((state_val_28065 === (34))){
var inst_28045 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(37),inst_28045);
} else {
if((state_val_28065 === (17))){
var inst_28004 = (state_28064[(2)]);
var inst_28005 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28006 = figwheel.client.auto_jump_to_error.call(null,opts,inst_28005);
var state_28064__$1 = (function (){var statearr_28087 = state_28064;
(statearr_28087[(12)] = inst_28004);

return statearr_28087;
})();
var statearr_28088_28130 = state_28064__$1;
(statearr_28088_28130[(2)] = inst_28006);

(statearr_28088_28130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (3))){
var inst_27996 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28064__$1 = state_28064;
if(inst_27996){
var statearr_28089_28131 = state_28064__$1;
(statearr_28089_28131[(1)] = (13));

} else {
var statearr_28090_28132 = state_28064__$1;
(statearr_28090_28132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (12))){
var inst_27992 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28091_28133 = state_28064__$1;
(statearr_28091_28133[(2)] = inst_27992);

(statearr_28091_28133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (2))){
var inst_27979 = (state_28064[(10)]);
var inst_27979__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28064__$1 = (function (){var statearr_28092 = state_28064;
(statearr_28092[(10)] = inst_27979__$1);

return statearr_28092;
})();
if(cljs.core.truth_(inst_27979__$1)){
var statearr_28093_28134 = state_28064__$1;
(statearr_28093_28134[(1)] = (5));

} else {
var statearr_28094_28135 = state_28064__$1;
(statearr_28094_28135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (23))){
var inst_28022 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28064__$1 = state_28064;
if(inst_28022){
var statearr_28095_28136 = state_28064__$1;
(statearr_28095_28136[(1)] = (25));

} else {
var statearr_28096_28137 = state_28064__$1;
(statearr_28096_28137[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (35))){
var state_28064__$1 = state_28064;
var statearr_28097_28138 = state_28064__$1;
(statearr_28097_28138[(2)] = null);

(statearr_28097_28138[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (19))){
var inst_28017 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28064__$1 = state_28064;
if(inst_28017){
var statearr_28098_28139 = state_28064__$1;
(statearr_28098_28139[(1)] = (22));

} else {
var statearr_28099_28140 = state_28064__$1;
(statearr_28099_28140[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (11))){
var inst_27988 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28100_28141 = state_28064__$1;
(statearr_28100_28141[(2)] = inst_27988);

(statearr_28100_28141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (9))){
var inst_27990 = figwheel.client.heads_up.clear.call(null);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(12),inst_27990);
} else {
if((state_val_28065 === (5))){
var inst_27981 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28064__$1 = state_28064;
var statearr_28101_28142 = state_28064__$1;
(statearr_28101_28142[(2)] = inst_27981);

(statearr_28101_28142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (14))){
var inst_28008 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28064__$1 = state_28064;
if(inst_28008){
var statearr_28102_28143 = state_28064__$1;
(statearr_28102_28143[(1)] = (18));

} else {
var statearr_28103_28144 = state_28064__$1;
(statearr_28103_28144[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (26))){
var inst_28034 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28064__$1 = state_28064;
if(inst_28034){
var statearr_28104_28145 = state_28064__$1;
(statearr_28104_28145[(1)] = (30));

} else {
var statearr_28105_28146 = state_28064__$1;
(statearr_28105_28146[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (16))){
var inst_28000 = (state_28064[(2)]);
var inst_28001 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28002 = figwheel.client.heads_up.display_exception.call(null,inst_28001);
var state_28064__$1 = (function (){var statearr_28106 = state_28064;
(statearr_28106[(13)] = inst_28000);

return statearr_28106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(17),inst_28002);
} else {
if((state_val_28065 === (30))){
var inst_28036 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28037 = figwheel.client.heads_up.display_warning.call(null,inst_28036);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(33),inst_28037);
} else {
if((state_val_28065 === (10))){
var inst_27994 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28107_28147 = state_28064__$1;
(statearr_28107_28147[(2)] = inst_27994);

(statearr_28107_28147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (18))){
var inst_28010 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28011 = figwheel.client.heads_up.display_exception.call(null,inst_28010);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(21),inst_28011);
} else {
if((state_val_28065 === (37))){
var inst_28047 = (state_28064[(2)]);
var state_28064__$1 = state_28064;
var statearr_28108_28148 = state_28064__$1;
(statearr_28108_28148[(2)] = inst_28047);

(statearr_28108_28148[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28065 === (8))){
var inst_27986 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28064__$1 = state_28064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28064__$1,(11),inst_27986);
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
});})(c__22559__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22464__auto__,c__22559__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____0 = (function (){
var statearr_28109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28109[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__);

(statearr_28109[(1)] = (1));

return statearr_28109;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____1 = (function (state_28064){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28110){if((e28110 instanceof Object)){
var ex__22468__auto__ = e28110;
var statearr_28111_28149 = state_28064;
(statearr_28111_28149[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28150 = state_28064;
state_28064 = G__28150;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__ = function(state_28064){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____1.call(this,state_28064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,msg_hist,msg_names,msg))
})();
var state__22561__auto__ = (function (){var statearr_28112 = f__22560__auto__.call(null);
(statearr_28112[(6)] = c__22559__auto__);

return statearr_28112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,msg_hist,msg_names,msg))
);

return c__22559__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22559__auto___28179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___28179,ch){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___28179,ch){
return (function (state_28165){
var state_val_28166 = (state_28165[(1)]);
if((state_val_28166 === (1))){
var state_28165__$1 = state_28165;
var statearr_28167_28180 = state_28165__$1;
(statearr_28167_28180[(2)] = null);

(statearr_28167_28180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (2))){
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28165__$1,(4),ch);
} else {
if((state_val_28166 === (3))){
var inst_28163 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28165__$1,inst_28163);
} else {
if((state_val_28166 === (4))){
var inst_28153 = (state_28165[(7)]);
var inst_28153__$1 = (state_28165[(2)]);
var state_28165__$1 = (function (){var statearr_28168 = state_28165;
(statearr_28168[(7)] = inst_28153__$1);

return statearr_28168;
})();
if(cljs.core.truth_(inst_28153__$1)){
var statearr_28169_28181 = state_28165__$1;
(statearr_28169_28181[(1)] = (5));

} else {
var statearr_28170_28182 = state_28165__$1;
(statearr_28170_28182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (5))){
var inst_28153 = (state_28165[(7)]);
var inst_28155 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28153);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28165__$1,(8),inst_28155);
} else {
if((state_val_28166 === (6))){
var state_28165__$1 = state_28165;
var statearr_28171_28183 = state_28165__$1;
(statearr_28171_28183[(2)] = null);

(statearr_28171_28183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (7))){
var inst_28161 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28172_28184 = state_28165__$1;
(statearr_28172_28184[(2)] = inst_28161);

(statearr_28172_28184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (8))){
var inst_28157 = (state_28165[(2)]);
var state_28165__$1 = (function (){var statearr_28173 = state_28165;
(statearr_28173[(8)] = inst_28157);

return statearr_28173;
})();
var statearr_28174_28185 = state_28165__$1;
(statearr_28174_28185[(2)] = null);

(statearr_28174_28185[(1)] = (2));


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
});})(c__22559__auto___28179,ch))
;
return ((function (switch__22464__auto__,c__22559__auto___28179,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_28175 = [null,null,null,null,null,null,null,null,null];
(statearr_28175[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22465__auto__);

(statearr_28175[(1)] = (1));

return statearr_28175;
});
var figwheel$client$heads_up_plugin_$_state_machine__22465__auto____1 = (function (state_28165){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28176){if((e28176 instanceof Object)){
var ex__22468__auto__ = e28176;
var statearr_28177_28186 = state_28165;
(statearr_28177_28186[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28187 = state_28165;
state_28165 = G__28187;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22465__auto__ = function(state_28165){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22465__auto____1.call(this,state_28165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22465__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22465__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___28179,ch))
})();
var state__22561__auto__ = (function (){var statearr_28178 = f__22560__auto__.call(null);
(statearr_28178[(6)] = c__22559__auto___28179);

return statearr_28178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___28179,ch))
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
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__){
return (function (state_28193){
var state_val_28194 = (state_28193[(1)]);
if((state_val_28194 === (1))){
var inst_28188 = cljs.core.async.timeout.call(null,(3000));
var state_28193__$1 = state_28193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28193__$1,(2),inst_28188);
} else {
if((state_val_28194 === (2))){
var inst_28190 = (state_28193[(2)]);
var inst_28191 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28193__$1 = (function (){var statearr_28195 = state_28193;
(statearr_28195[(7)] = inst_28190);

return statearr_28195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28193__$1,inst_28191);
} else {
return null;
}
}
});})(c__22559__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_28196 = [null,null,null,null,null,null,null,null];
(statearr_28196[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__);

(statearr_28196[(1)] = (1));

return statearr_28196;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____1 = (function (state_28193){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28197){if((e28197 instanceof Object)){
var ex__22468__auto__ = e28197;
var statearr_28198_28200 = state_28193;
(statearr_28198_28200[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28201 = state_28193;
state_28193 = G__28201;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__ = function(state_28193){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____1.call(this,state_28193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22465__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_28199 = f__22560__auto__.call(null);
(statearr_28199[(6)] = c__22559__auto__);

return statearr_28199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
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
var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (1))){
var inst_28202 = cljs.core.async.timeout.call(null,(2000));
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28208__$1,(2),inst_28202);
} else {
if((state_val_28209 === (2))){
var inst_28204 = (state_28208[(2)]);
var inst_28205 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_28206 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_28205);
var state_28208__$1 = (function (){var statearr_28210 = state_28208;
(statearr_28210[(7)] = inst_28204);

return statearr_28210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28208__$1,inst_28206);
} else {
return null;
}
}
});})(c__22559__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____0 = (function (){
var statearr_28211 = [null,null,null,null,null,null,null,null];
(statearr_28211[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__);

(statearr_28211[(1)] = (1));

return statearr_28211;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____1 = (function (state_28208){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_28208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e28212){if((e28212 instanceof Object)){
var ex__22468__auto__ = e28212;
var statearr_28213_28215 = state_28208;
(statearr_28213_28215[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28216 = state_28208;
state_28208 = G__28216;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,figwheel_version,temp__5735__auto__))
})();
var state__22561__auto__ = (function (){var statearr_28214 = f__22560__auto__.call(null);
(statearr_28214[(6)] = c__22559__auto__);

return statearr_28214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,figwheel_version,temp__5735__auto__))
);

return c__22559__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__28217){
var map__28218 = p__28217;
var map__28218__$1 = (((((!((map__28218 == null))))?(((((map__28218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28218):map__28218);
var file = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__28220 = "";
var G__28220__$1 = (cljs.core.truth_(file)?[G__28220,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__28220);
var G__28220__$2 = (cljs.core.truth_(line)?[G__28220__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__28220__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__28220__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__28220__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28221){
var map__28222 = p__28221;
var map__28222__$1 = (((((!((map__28222 == null))))?(((((map__28222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28222):map__28222);
var ed = map__28222__$1;
var exception_data = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28222__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_28225 = (function (){var G__28224 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28224)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__28224;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_28225);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28226){
var map__28227 = p__28226;
var map__28227__$1 = (((((!((map__28227 == null))))?(((((map__28227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28227):map__28227);
var w = map__28227__$1;
var message = cljs.core.get.call(null,map__28227__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28229 = cljs.core.seq.call(null,plugins);
var chunk__28230 = null;
var count__28231 = (0);
var i__28232 = (0);
while(true){
if((i__28232 < count__28231)){
var vec__28239 = cljs.core._nth.call(null,chunk__28230,i__28232);
var k = cljs.core.nth.call(null,vec__28239,(0),null);
var plugin = cljs.core.nth.call(null,vec__28239,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28245 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28229,chunk__28230,count__28231,i__28232,pl_28245,vec__28239,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28245.call(null,msg_hist);
});})(seq__28229,chunk__28230,count__28231,i__28232,pl_28245,vec__28239,k,plugin))
);
} else {
}


var G__28246 = seq__28229;
var G__28247 = chunk__28230;
var G__28248 = count__28231;
var G__28249 = (i__28232 + (1));
seq__28229 = G__28246;
chunk__28230 = G__28247;
count__28231 = G__28248;
i__28232 = G__28249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28229);
if(temp__5735__auto__){
var seq__28229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28229__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28229__$1);
var G__28250 = cljs.core.chunk_rest.call(null,seq__28229__$1);
var G__28251 = c__4550__auto__;
var G__28252 = cljs.core.count.call(null,c__4550__auto__);
var G__28253 = (0);
seq__28229 = G__28250;
chunk__28230 = G__28251;
count__28231 = G__28252;
i__28232 = G__28253;
continue;
} else {
var vec__28242 = cljs.core.first.call(null,seq__28229__$1);
var k = cljs.core.nth.call(null,vec__28242,(0),null);
var plugin = cljs.core.nth.call(null,vec__28242,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28254 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28229,chunk__28230,count__28231,i__28232,pl_28254,vec__28242,k,plugin,seq__28229__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28254.call(null,msg_hist);
});})(seq__28229,chunk__28230,count__28231,i__28232,pl_28254,vec__28242,k,plugin,seq__28229__$1,temp__5735__auto__))
);
} else {
}


var G__28255 = cljs.core.next.call(null,seq__28229__$1);
var G__28256 = null;
var G__28257 = (0);
var G__28258 = (0);
seq__28229 = G__28255;
chunk__28230 = G__28256;
count__28231 = G__28257;
i__28232 = G__28258;
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
var G__28260 = arguments.length;
switch (G__28260) {
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

var seq__28261_28266 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__28262_28267 = null;
var count__28263_28268 = (0);
var i__28264_28269 = (0);
while(true){
if((i__28264_28269 < count__28263_28268)){
var msg_28270 = cljs.core._nth.call(null,chunk__28262_28267,i__28264_28269);
figwheel.client.socket.handle_incoming_message.call(null,msg_28270);


var G__28271 = seq__28261_28266;
var G__28272 = chunk__28262_28267;
var G__28273 = count__28263_28268;
var G__28274 = (i__28264_28269 + (1));
seq__28261_28266 = G__28271;
chunk__28262_28267 = G__28272;
count__28263_28268 = G__28273;
i__28264_28269 = G__28274;
continue;
} else {
var temp__5735__auto___28275 = cljs.core.seq.call(null,seq__28261_28266);
if(temp__5735__auto___28275){
var seq__28261_28276__$1 = temp__5735__auto___28275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28261_28276__$1)){
var c__4550__auto___28277 = cljs.core.chunk_first.call(null,seq__28261_28276__$1);
var G__28278 = cljs.core.chunk_rest.call(null,seq__28261_28276__$1);
var G__28279 = c__4550__auto___28277;
var G__28280 = cljs.core.count.call(null,c__4550__auto___28277);
var G__28281 = (0);
seq__28261_28266 = G__28278;
chunk__28262_28267 = G__28279;
count__28263_28268 = G__28280;
i__28264_28269 = G__28281;
continue;
} else {
var msg_28282 = cljs.core.first.call(null,seq__28261_28276__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_28282);


var G__28283 = cljs.core.next.call(null,seq__28261_28276__$1);
var G__28284 = null;
var G__28285 = (0);
var G__28286 = (0);
seq__28261_28266 = G__28283;
chunk__28262_28267 = G__28284;
count__28263_28268 = G__28285;
i__28264_28269 = G__28286;
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
var len__4730__auto___28291 = arguments.length;
var i__4731__auto___28292 = (0);
while(true){
if((i__4731__auto___28292 < len__4730__auto___28291)){
args__4736__auto__.push((arguments[i__4731__auto___28292]));

var G__28293 = (i__4731__auto___28292 + (1));
i__4731__auto___28292 = G__28293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28288){
var map__28289 = p__28288;
var map__28289__$1 = (((((!((map__28289 == null))))?(((((map__28289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28289):map__28289);
var opts = map__28289__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28287){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28287));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e28294){if((e28294 instanceof Error)){
var e = e28294;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e28294;

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
return (function (p__28295){
var map__28296 = p__28295;
var map__28296__$1 = (((((!((map__28296 == null))))?(((((map__28296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28296):map__28296);
var msg_name = cljs.core.get.call(null,map__28296__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1594380802001
