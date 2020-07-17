// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28954){
var map__28955 = p__28954;
var map__28955__$1 = (((((!((map__28955 == null))))?(((((map__28955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28955):map__28955);
var m = map__28955__$1;
var n = cljs.core.get.call(null,map__28955__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28955__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28957_28989 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28958_28990 = null;
var count__28959_28991 = (0);
var i__28960_28992 = (0);
while(true){
if((i__28960_28992 < count__28959_28991)){
var f_28993 = cljs.core._nth.call(null,chunk__28958_28990,i__28960_28992);
cljs.core.println.call(null,"  ",f_28993);


var G__28994 = seq__28957_28989;
var G__28995 = chunk__28958_28990;
var G__28996 = count__28959_28991;
var G__28997 = (i__28960_28992 + (1));
seq__28957_28989 = G__28994;
chunk__28958_28990 = G__28995;
count__28959_28991 = G__28996;
i__28960_28992 = G__28997;
continue;
} else {
var temp__5735__auto___28998 = cljs.core.seq.call(null,seq__28957_28989);
if(temp__5735__auto___28998){
var seq__28957_28999__$1 = temp__5735__auto___28998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28957_28999__$1)){
var c__4550__auto___29000 = cljs.core.chunk_first.call(null,seq__28957_28999__$1);
var G__29001 = cljs.core.chunk_rest.call(null,seq__28957_28999__$1);
var G__29002 = c__4550__auto___29000;
var G__29003 = cljs.core.count.call(null,c__4550__auto___29000);
var G__29004 = (0);
seq__28957_28989 = G__29001;
chunk__28958_28990 = G__29002;
count__28959_28991 = G__29003;
i__28960_28992 = G__29004;
continue;
} else {
var f_29005 = cljs.core.first.call(null,seq__28957_28999__$1);
cljs.core.println.call(null,"  ",f_29005);


var G__29006 = cljs.core.next.call(null,seq__28957_28999__$1);
var G__29007 = null;
var G__29008 = (0);
var G__29009 = (0);
seq__28957_28989 = G__29006;
chunk__28958_28990 = G__29007;
count__28959_28991 = G__29008;
i__28960_28992 = G__29009;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29010 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29010);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29010)))?cljs.core.second.call(null,arglists_29010):arglists_29010));
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
var seq__28961_29011 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28962_29012 = null;
var count__28963_29013 = (0);
var i__28964_29014 = (0);
while(true){
if((i__28964_29014 < count__28963_29013)){
var vec__28975_29015 = cljs.core._nth.call(null,chunk__28962_29012,i__28964_29014);
var name_29016 = cljs.core.nth.call(null,vec__28975_29015,(0),null);
var map__28978_29017 = cljs.core.nth.call(null,vec__28975_29015,(1),null);
var map__28978_29018__$1 = (((((!((map__28978_29017 == null))))?(((((map__28978_29017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28978_29017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28978_29017):map__28978_29017);
var doc_29019 = cljs.core.get.call(null,map__28978_29018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29020 = cljs.core.get.call(null,map__28978_29018__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29016);

cljs.core.println.call(null," ",arglists_29020);

if(cljs.core.truth_(doc_29019)){
cljs.core.println.call(null," ",doc_29019);
} else {
}


var G__29021 = seq__28961_29011;
var G__29022 = chunk__28962_29012;
var G__29023 = count__28963_29013;
var G__29024 = (i__28964_29014 + (1));
seq__28961_29011 = G__29021;
chunk__28962_29012 = G__29022;
count__28963_29013 = G__29023;
i__28964_29014 = G__29024;
continue;
} else {
var temp__5735__auto___29025 = cljs.core.seq.call(null,seq__28961_29011);
if(temp__5735__auto___29025){
var seq__28961_29026__$1 = temp__5735__auto___29025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28961_29026__$1)){
var c__4550__auto___29027 = cljs.core.chunk_first.call(null,seq__28961_29026__$1);
var G__29028 = cljs.core.chunk_rest.call(null,seq__28961_29026__$1);
var G__29029 = c__4550__auto___29027;
var G__29030 = cljs.core.count.call(null,c__4550__auto___29027);
var G__29031 = (0);
seq__28961_29011 = G__29028;
chunk__28962_29012 = G__29029;
count__28963_29013 = G__29030;
i__28964_29014 = G__29031;
continue;
} else {
var vec__28980_29032 = cljs.core.first.call(null,seq__28961_29026__$1);
var name_29033 = cljs.core.nth.call(null,vec__28980_29032,(0),null);
var map__28983_29034 = cljs.core.nth.call(null,vec__28980_29032,(1),null);
var map__28983_29035__$1 = (((((!((map__28983_29034 == null))))?(((((map__28983_29034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28983_29034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28983_29034):map__28983_29034);
var doc_29036 = cljs.core.get.call(null,map__28983_29035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29037 = cljs.core.get.call(null,map__28983_29035__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29033);

cljs.core.println.call(null," ",arglists_29037);

if(cljs.core.truth_(doc_29036)){
cljs.core.println.call(null," ",doc_29036);
} else {
}


var G__29038 = cljs.core.next.call(null,seq__28961_29026__$1);
var G__29039 = null;
var G__29040 = (0);
var G__29041 = (0);
seq__28961_29011 = G__29038;
chunk__28962_29012 = G__29039;
count__28963_29013 = G__29040;
i__28964_29014 = G__29041;
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

var seq__28985 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28986 = null;
var count__28987 = (0);
var i__28988 = (0);
while(true){
if((i__28988 < count__28987)){
var role = cljs.core._nth.call(null,chunk__28986,i__28988);
var temp__5735__auto___29042__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29042__$1)){
var spec_29043 = temp__5735__auto___29042__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29043));
} else {
}


var G__29044 = seq__28985;
var G__29045 = chunk__28986;
var G__29046 = count__28987;
var G__29047 = (i__28988 + (1));
seq__28985 = G__29044;
chunk__28986 = G__29045;
count__28987 = G__29046;
i__28988 = G__29047;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__28985);
if(temp__5735__auto____$1){
var seq__28985__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28985__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28985__$1);
var G__29048 = cljs.core.chunk_rest.call(null,seq__28985__$1);
var G__29049 = c__4550__auto__;
var G__29050 = cljs.core.count.call(null,c__4550__auto__);
var G__29051 = (0);
seq__28985 = G__29048;
chunk__28986 = G__29049;
count__28987 = G__29050;
i__28988 = G__29051;
continue;
} else {
var role = cljs.core.first.call(null,seq__28985__$1);
var temp__5735__auto___29052__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29052__$2)){
var spec_29053 = temp__5735__auto___29052__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29053));
} else {
}


var G__29054 = cljs.core.next.call(null,seq__28985__$1);
var G__29055 = null;
var G__29056 = (0);
var G__29057 = (0);
seq__28985 = G__29054;
chunk__28986 = G__29055;
count__28987 = G__29056;
i__28988 = G__29057;
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
var G__29058 = cljs.core.conj.call(null,via,t);
var G__29059 = cljs.core.ex_cause.call(null,t);
via = G__29058;
t = G__29059;
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
var map__29062 = datafied_throwable;
var map__29062__$1 = (((((!((map__29062 == null))))?(((((map__29062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29062):map__29062);
var via = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29063 = cljs.core.last.call(null,via);
var map__29063__$1 = (((((!((map__29063 == null))))?(((((map__29063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29063):map__29063);
var type = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29064 = data;
var map__29064__$1 = (((((!((map__29064 == null))))?(((((map__29064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29064):map__29064);
var problems = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29065 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29065__$1 = (((((!((map__29065 == null))))?(((((map__29065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29065):map__29065);
var top_data = map__29065__$1;
var source = cljs.core.get.call(null,map__29065__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29070 = phase;
var G__29070__$1 = (((G__29070 instanceof cljs.core.Keyword))?G__29070.fqn:null);
switch (G__29070__$1) {
case "read-source":
var map__29071 = data;
var map__29071__$1 = (((((!((map__29071 == null))))?(((((map__29071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29071):map__29071);
var line = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29073 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29073__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29073,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29073);
var G__29073__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29073__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29073__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29073__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29073__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29074 = top_data;
var G__29074__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29074,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29074);
var G__29074__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29074__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29074__$1);
var G__29074__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29074__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29074__$2);
var G__29074__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29074__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29074__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29074__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29074__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29075 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29075,(0),null);
var method = cljs.core.nth.call(null,vec__29075,(1),null);
var file = cljs.core.nth.call(null,vec__29075,(2),null);
var line = cljs.core.nth.call(null,vec__29075,(3),null);
var G__29078 = top_data;
var G__29078__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29078,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29078);
var G__29078__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29078__$1);
var G__29078__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29078__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29078__$2);
var G__29078__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29078__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29078__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29078__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29078__$4;
}

break;
case "execution":
var vec__29079 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29079,(0),null);
var method = cljs.core.nth.call(null,vec__29079,(1),null);
var file = cljs.core.nth.call(null,vec__29079,(2),null);
var line = cljs.core.nth.call(null,vec__29079,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29079,source__$1,method,file,line,G__29070,G__29070__$1,map__29062,map__29062__$1,via,trace,phase,map__29063,map__29063__$1,type,message,data,map__29064,map__29064__$1,problems,fn,caller,map__29065,map__29065__$1,top_data,source){
return (function (p1__29061_SHARP_){
var or__4131__auto__ = (p1__29061_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29061_SHARP_);
}
});})(vec__29079,source__$1,method,file,line,G__29070,G__29070__$1,map__29062,map__29062__$1,via,trace,phase,map__29063,map__29063__$1,type,message,data,map__29064,map__29064__$1,problems,fn,caller,map__29065,map__29065__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29082 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29082__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29082,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29082);
var G__29082__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29082__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29082__$1);
var G__29082__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__29082__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29082__$2);
var G__29082__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29082__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29082__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29082__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29082__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29070__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29086){
var map__29087 = p__29086;
var map__29087__$1 = (((((!((map__29087 == null))))?(((((map__29087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29087):map__29087);
var triage_data = map__29087__$1;
var phase = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29089 = phase;
var G__29089__$1 = (((G__29089 instanceof cljs.core.Keyword))?G__29089.fqn:null);
switch (G__29089__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29090_29099 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29091_29100 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29092_29101 = true;
var _STAR_print_fn_STAR__temp_val__29093_29102 = ((function (_STAR_print_newline_STAR__orig_val__29090_29099,_STAR_print_fn_STAR__orig_val__29091_29100,_STAR_print_newline_STAR__temp_val__29092_29101,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29090_29099,_STAR_print_fn_STAR__orig_val__29091_29100,_STAR_print_newline_STAR__temp_val__29092_29101,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29092_29101;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29093_29102;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29090_29099,_STAR_print_fn_STAR__orig_val__29091_29100,_STAR_print_newline_STAR__temp_val__29092_29101,_STAR_print_fn_STAR__temp_val__29093_29102,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29090_29099,_STAR_print_fn_STAR__orig_val__29091_29100,_STAR_print_newline_STAR__temp_val__29092_29101,_STAR_print_fn_STAR__temp_val__29093_29102,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29084_SHARP_){
return cljs.core.dissoc.call(null,p1__29084_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29090_29099,_STAR_print_fn_STAR__orig_val__29091_29100,_STAR_print_newline_STAR__temp_val__29092_29101,_STAR_print_fn_STAR__temp_val__29093_29102,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29090_29099,_STAR_print_fn_STAR__orig_val__29091_29100,_STAR_print_newline_STAR__temp_val__29092_29101,_STAR_print_fn_STAR__temp_val__29093_29102,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29091_29100;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29090_29099;
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
var _STAR_print_newline_STAR__orig_val__29094_29103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29095_29104 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29096_29105 = true;
var _STAR_print_fn_STAR__temp_val__29097_29106 = ((function (_STAR_print_newline_STAR__orig_val__29094_29103,_STAR_print_fn_STAR__orig_val__29095_29104,_STAR_print_newline_STAR__temp_val__29096_29105,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29094_29103,_STAR_print_fn_STAR__orig_val__29095_29104,_STAR_print_newline_STAR__temp_val__29096_29105,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29096_29105;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29097_29106;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29094_29103,_STAR_print_fn_STAR__orig_val__29095_29104,_STAR_print_newline_STAR__temp_val__29096_29105,_STAR_print_fn_STAR__temp_val__29097_29106,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29094_29103,_STAR_print_fn_STAR__orig_val__29095_29104,_STAR_print_newline_STAR__temp_val__29096_29105,_STAR_print_fn_STAR__temp_val__29097_29106,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29085_SHARP_){
return cljs.core.dissoc.call(null,p1__29085_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29094_29103,_STAR_print_fn_STAR__orig_val__29095_29104,_STAR_print_newline_STAR__temp_val__29096_29105,_STAR_print_fn_STAR__temp_val__29097_29106,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29094_29103,_STAR_print_fn_STAR__orig_val__29095_29104,_STAR_print_newline_STAR__temp_val__29096_29105,_STAR_print_fn_STAR__temp_val__29097_29106,sb__4661__auto__,G__29089,G__29089__$1,loc,class_name,simple_class,cause_type,format,map__29087,map__29087__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29095_29104;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29094_29103;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29089__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1594984090621
