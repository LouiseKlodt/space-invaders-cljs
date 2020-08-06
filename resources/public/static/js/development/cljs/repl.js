// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27482){
var map__27483 = p__27482;
var map__27483__$1 = (((((!((map__27483 == null))))?(((((map__27483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27483):map__27483);
var m = map__27483__$1;
var n = cljs.core.get.call(null,map__27483__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27483__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27485_27517 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27486_27518 = null;
var count__27487_27519 = (0);
var i__27488_27520 = (0);
while(true){
if((i__27488_27520 < count__27487_27519)){
var f_27521 = cljs.core._nth.call(null,chunk__27486_27518,i__27488_27520);
cljs.core.println.call(null,"  ",f_27521);


var G__27522 = seq__27485_27517;
var G__27523 = chunk__27486_27518;
var G__27524 = count__27487_27519;
var G__27525 = (i__27488_27520 + (1));
seq__27485_27517 = G__27522;
chunk__27486_27518 = G__27523;
count__27487_27519 = G__27524;
i__27488_27520 = G__27525;
continue;
} else {
var temp__5735__auto___27526 = cljs.core.seq.call(null,seq__27485_27517);
if(temp__5735__auto___27526){
var seq__27485_27527__$1 = temp__5735__auto___27526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27485_27527__$1)){
var c__4550__auto___27528 = cljs.core.chunk_first.call(null,seq__27485_27527__$1);
var G__27529 = cljs.core.chunk_rest.call(null,seq__27485_27527__$1);
var G__27530 = c__4550__auto___27528;
var G__27531 = cljs.core.count.call(null,c__4550__auto___27528);
var G__27532 = (0);
seq__27485_27517 = G__27529;
chunk__27486_27518 = G__27530;
count__27487_27519 = G__27531;
i__27488_27520 = G__27532;
continue;
} else {
var f_27533 = cljs.core.first.call(null,seq__27485_27527__$1);
cljs.core.println.call(null,"  ",f_27533);


var G__27534 = cljs.core.next.call(null,seq__27485_27527__$1);
var G__27535 = null;
var G__27536 = (0);
var G__27537 = (0);
seq__27485_27517 = G__27534;
chunk__27486_27518 = G__27535;
count__27487_27519 = G__27536;
i__27488_27520 = G__27537;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27538 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27538);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27538)))?cljs.core.second.call(null,arglists_27538):arglists_27538));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27489_27539 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27490_27540 = null;
var count__27491_27541 = (0);
var i__27492_27542 = (0);
while(true){
if((i__27492_27542 < count__27491_27541)){
var vec__27503_27543 = cljs.core._nth.call(null,chunk__27490_27540,i__27492_27542);
var name_27544 = cljs.core.nth.call(null,vec__27503_27543,(0),null);
var map__27506_27545 = cljs.core.nth.call(null,vec__27503_27543,(1),null);
var map__27506_27546__$1 = (((((!((map__27506_27545 == null))))?(((((map__27506_27545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27506_27545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27506_27545):map__27506_27545);
var doc_27547 = cljs.core.get.call(null,map__27506_27546__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27548 = cljs.core.get.call(null,map__27506_27546__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27544);

cljs.core.println.call(null," ",arglists_27548);

if(cljs.core.truth_(doc_27547)){
cljs.core.println.call(null," ",doc_27547);
} else {
}


var G__27549 = seq__27489_27539;
var G__27550 = chunk__27490_27540;
var G__27551 = count__27491_27541;
var G__27552 = (i__27492_27542 + (1));
seq__27489_27539 = G__27549;
chunk__27490_27540 = G__27550;
count__27491_27541 = G__27551;
i__27492_27542 = G__27552;
continue;
} else {
var temp__5735__auto___27553 = cljs.core.seq.call(null,seq__27489_27539);
if(temp__5735__auto___27553){
var seq__27489_27554__$1 = temp__5735__auto___27553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27489_27554__$1)){
var c__4550__auto___27555 = cljs.core.chunk_first.call(null,seq__27489_27554__$1);
var G__27556 = cljs.core.chunk_rest.call(null,seq__27489_27554__$1);
var G__27557 = c__4550__auto___27555;
var G__27558 = cljs.core.count.call(null,c__4550__auto___27555);
var G__27559 = (0);
seq__27489_27539 = G__27556;
chunk__27490_27540 = G__27557;
count__27491_27541 = G__27558;
i__27492_27542 = G__27559;
continue;
} else {
var vec__27508_27560 = cljs.core.first.call(null,seq__27489_27554__$1);
var name_27561 = cljs.core.nth.call(null,vec__27508_27560,(0),null);
var map__27511_27562 = cljs.core.nth.call(null,vec__27508_27560,(1),null);
var map__27511_27563__$1 = (((((!((map__27511_27562 == null))))?(((((map__27511_27562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27511_27562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27511_27562):map__27511_27562);
var doc_27564 = cljs.core.get.call(null,map__27511_27563__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27565 = cljs.core.get.call(null,map__27511_27563__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27561);

cljs.core.println.call(null," ",arglists_27565);

if(cljs.core.truth_(doc_27564)){
cljs.core.println.call(null," ",doc_27564);
} else {
}


var G__27566 = cljs.core.next.call(null,seq__27489_27554__$1);
var G__27567 = null;
var G__27568 = (0);
var G__27569 = (0);
seq__27489_27539 = G__27566;
chunk__27490_27540 = G__27567;
count__27491_27541 = G__27568;
i__27492_27542 = G__27569;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__27513 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27514 = null;
var count__27515 = (0);
var i__27516 = (0);
while(true){
if((i__27516 < count__27515)){
var role = cljs.core._nth.call(null,chunk__27514,i__27516);
var temp__5735__auto___27570__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27570__$1)){
var spec_27571 = temp__5735__auto___27570__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27571));
} else {
}


var G__27572 = seq__27513;
var G__27573 = chunk__27514;
var G__27574 = count__27515;
var G__27575 = (i__27516 + (1));
seq__27513 = G__27572;
chunk__27514 = G__27573;
count__27515 = G__27574;
i__27516 = G__27575;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__27513);
if(temp__5735__auto____$1){
var seq__27513__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27513__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27513__$1);
var G__27576 = cljs.core.chunk_rest.call(null,seq__27513__$1);
var G__27577 = c__4550__auto__;
var G__27578 = cljs.core.count.call(null,c__4550__auto__);
var G__27579 = (0);
seq__27513 = G__27576;
chunk__27514 = G__27577;
count__27515 = G__27578;
i__27516 = G__27579;
continue;
} else {
var role = cljs.core.first.call(null,seq__27513__$1);
var temp__5735__auto___27580__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27580__$2)){
var spec_27581 = temp__5735__auto___27580__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27581));
} else {
}


var G__27582 = cljs.core.next.call(null,seq__27513__$1);
var G__27583 = null;
var G__27584 = (0);
var G__27585 = (0);
seq__27513 = G__27582;
chunk__27514 = G__27583;
count__27515 = G__27584;
i__27516 = G__27585;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27586 = cljs.core.conj.call(null,via,t);
var G__27587 = cljs.core.ex_cause.call(null,t);
via = G__27586;
t = G__27587;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27590 = datafied_throwable;
var map__27590__$1 = (((((!((map__27590 == null))))?(((((map__27590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27590):map__27590);
var via = cljs.core.get.call(null,map__27590__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27590__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27590__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27591 = cljs.core.last.call(null,via);
var map__27591__$1 = (((((!((map__27591 == null))))?(((((map__27591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27591):map__27591);
var type = cljs.core.get.call(null,map__27591__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27591__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27591__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27592 = data;
var map__27592__$1 = (((((!((map__27592 == null))))?(((((map__27592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27592):map__27592);
var problems = cljs.core.get.call(null,map__27592__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27592__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27592__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27593 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27593__$1 = (((((!((map__27593 == null))))?(((((map__27593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27593):map__27593);
var top_data = map__27593__$1;
var source = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27598 = phase;
var G__27598__$1 = (((G__27598 instanceof cljs.core.Keyword))?G__27598.fqn:null);
switch (G__27598__$1) {
case "read-source":
var map__27599 = data;
var map__27599__$1 = (((((!((map__27599 == null))))?(((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27599):map__27599);
var line = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27599__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27601 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27601__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27601,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27601);
var G__27601__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27601__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27601__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27601__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27602 = top_data;
var G__27602__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27602,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27602);
var G__27602__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27602__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27602__$1);
var G__27602__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27602__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27602__$2);
var G__27602__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27602__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27602__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27602__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27602__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27603 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27603,(0),null);
var method = cljs.core.nth.call(null,vec__27603,(1),null);
var file = cljs.core.nth.call(null,vec__27603,(2),null);
var line = cljs.core.nth.call(null,vec__27603,(3),null);
var G__27606 = top_data;
var G__27606__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27606,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27606);
var G__27606__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27606__$1);
var G__27606__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__27606__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27606__$2);
var G__27606__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27606__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27606__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27606__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27606__$4;
}

break;
case "execution":
var vec__27607 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27607,(0),null);
var method = cljs.core.nth.call(null,vec__27607,(1),null);
var file = cljs.core.nth.call(null,vec__27607,(2),null);
var line = cljs.core.nth.call(null,vec__27607,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__27607,source__$1,method,file,line,G__27598,G__27598__$1,map__27590,map__27590__$1,via,trace,phase,map__27591,map__27591__$1,type,message,data,map__27592,map__27592__$1,problems,fn,caller,map__27593,map__27593__$1,top_data,source){
return (function (p1__27589_SHARP_){
var or__4131__auto__ = (p1__27589_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27589_SHARP_);
}
});})(vec__27607,source__$1,method,file,line,G__27598,G__27598__$1,map__27590,map__27590__$1,via,trace,phase,map__27591,map__27591__$1,type,message,data,map__27592,map__27592__$1,problems,fn,caller,map__27593,map__27593__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27610 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27610__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27610,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27610);
var G__27610__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27610__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27610__$1);
var G__27610__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__27610__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27610__$2);
var G__27610__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27610__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27610__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27610__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27610__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27598__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27614){
var map__27615 = p__27614;
var map__27615__$1 = (((((!((map__27615 == null))))?(((((map__27615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27615):map__27615);
var triage_data = map__27615__$1;
var phase = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27615__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27617 = phase;
var G__27617__$1 = (((G__27617 instanceof cljs.core.Keyword))?G__27617.fqn:null);
switch (G__27617__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27618_27627 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27619_27628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27620_27629 = true;
var _STAR_print_fn_STAR__temp_val__27621_27630 = ((function (_STAR_print_newline_STAR__orig_val__27618_27627,_STAR_print_fn_STAR__orig_val__27619_27628,_STAR_print_newline_STAR__temp_val__27620_27629,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27618_27627,_STAR_print_fn_STAR__orig_val__27619_27628,_STAR_print_newline_STAR__temp_val__27620_27629,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27620_27629;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27621_27630;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27618_27627,_STAR_print_fn_STAR__orig_val__27619_27628,_STAR_print_newline_STAR__temp_val__27620_27629,_STAR_print_fn_STAR__temp_val__27621_27630,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27618_27627,_STAR_print_fn_STAR__orig_val__27619_27628,_STAR_print_newline_STAR__temp_val__27620_27629,_STAR_print_fn_STAR__temp_val__27621_27630,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27612_SHARP_){
return cljs.core.dissoc.call(null,p1__27612_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27618_27627,_STAR_print_fn_STAR__orig_val__27619_27628,_STAR_print_newline_STAR__temp_val__27620_27629,_STAR_print_fn_STAR__temp_val__27621_27630,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27618_27627,_STAR_print_fn_STAR__orig_val__27619_27628,_STAR_print_newline_STAR__temp_val__27620_27629,_STAR_print_fn_STAR__temp_val__27621_27630,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27619_27628;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27618_27627;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27622_27631 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27623_27632 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27624_27633 = true;
var _STAR_print_fn_STAR__temp_val__27625_27634 = ((function (_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27624_27633;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27625_27634;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27613_SHARP_){
return cljs.core.dissoc.call(null,p1__27613_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27622_27631,_STAR_print_fn_STAR__orig_val__27623_27632,_STAR_print_newline_STAR__temp_val__27624_27633,_STAR_print_fn_STAR__temp_val__27625_27634,sb__4661__auto__,G__27617,G__27617__$1,loc,class_name,simple_class,cause_type,format,map__27615,map__27615__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27623_27632;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27622_27631;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27617__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1594380801301
