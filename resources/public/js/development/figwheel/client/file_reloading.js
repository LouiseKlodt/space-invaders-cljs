// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26002_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26002_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26003 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26004 = null;
var count__26005 = (0);
var i__26006 = (0);
while(true){
if((i__26006 < count__26005)){
var n = cljs.core._nth.call(null,chunk__26004,i__26006);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26007 = seq__26003;
var G__26008 = chunk__26004;
var G__26009 = count__26005;
var G__26010 = (i__26006 + (1));
seq__26003 = G__26007;
chunk__26004 = G__26008;
count__26005 = G__26009;
i__26006 = G__26010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26003);
if(temp__5735__auto__){
var seq__26003__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26003__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26003__$1);
var G__26011 = cljs.core.chunk_rest.call(null,seq__26003__$1);
var G__26012 = c__4550__auto__;
var G__26013 = cljs.core.count.call(null,c__4550__auto__);
var G__26014 = (0);
seq__26003 = G__26011;
chunk__26004 = G__26012;
count__26005 = G__26013;
i__26006 = G__26014;
continue;
} else {
var n = cljs.core.first.call(null,seq__26003__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26015 = cljs.core.next.call(null,seq__26003__$1);
var G__26016 = null;
var G__26017 = (0);
var G__26018 = (0);
seq__26003 = G__26015;
chunk__26004 = G__26016;
count__26005 = G__26017;
i__26006 = G__26018;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26019){
var vec__26020 = p__26019;
var _ = cljs.core.nth.call(null,vec__26020,(0),null);
var v = cljs.core.nth.call(null,vec__26020,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26023){
var vec__26024 = p__26023;
var k = cljs.core.nth.call(null,vec__26024,(0),null);
var v = cljs.core.nth.call(null,vec__26024,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26036_26044 = cljs.core.seq.call(null,deps);
var chunk__26037_26045 = null;
var count__26038_26046 = (0);
var i__26039_26047 = (0);
while(true){
if((i__26039_26047 < count__26038_26046)){
var dep_26048 = cljs.core._nth.call(null,chunk__26037_26045,i__26039_26047);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26048;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26048));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26048,(depth + (1)),state);
} else {
}


var G__26049 = seq__26036_26044;
var G__26050 = chunk__26037_26045;
var G__26051 = count__26038_26046;
var G__26052 = (i__26039_26047 + (1));
seq__26036_26044 = G__26049;
chunk__26037_26045 = G__26050;
count__26038_26046 = G__26051;
i__26039_26047 = G__26052;
continue;
} else {
var temp__5735__auto___26053 = cljs.core.seq.call(null,seq__26036_26044);
if(temp__5735__auto___26053){
var seq__26036_26054__$1 = temp__5735__auto___26053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26036_26054__$1)){
var c__4550__auto___26055 = cljs.core.chunk_first.call(null,seq__26036_26054__$1);
var G__26056 = cljs.core.chunk_rest.call(null,seq__26036_26054__$1);
var G__26057 = c__4550__auto___26055;
var G__26058 = cljs.core.count.call(null,c__4550__auto___26055);
var G__26059 = (0);
seq__26036_26044 = G__26056;
chunk__26037_26045 = G__26057;
count__26038_26046 = G__26058;
i__26039_26047 = G__26059;
continue;
} else {
var dep_26060 = cljs.core.first.call(null,seq__26036_26054__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26060;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26060));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26060,(depth + (1)),state);
} else {
}


var G__26061 = cljs.core.next.call(null,seq__26036_26054__$1);
var G__26062 = null;
var G__26063 = (0);
var G__26064 = (0);
seq__26036_26044 = G__26061;
chunk__26037_26045 = G__26062;
count__26038_26046 = G__26063;
i__26039_26047 = G__26064;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26040){
var vec__26041 = p__26040;
var seq__26042 = cljs.core.seq.call(null,vec__26041);
var first__26043 = cljs.core.first.call(null,seq__26042);
var seq__26042__$1 = cljs.core.next.call(null,seq__26042);
var x = first__26043;
var xs = seq__26042__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26041,seq__26042,first__26043,seq__26042__$1,x,xs,get_deps__$1){
return (function (p1__26027_SHARP_){
return clojure.set.difference.call(null,p1__26027_SHARP_,x);
});})(vec__26041,seq__26042,first__26043,seq__26042__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26065 = cljs.core.seq.call(null,provides);
var chunk__26066 = null;
var count__26067 = (0);
var i__26068 = (0);
while(true){
if((i__26068 < count__26067)){
var prov = cljs.core._nth.call(null,chunk__26066,i__26068);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26077_26085 = cljs.core.seq.call(null,requires);
var chunk__26078_26086 = null;
var count__26079_26087 = (0);
var i__26080_26088 = (0);
while(true){
if((i__26080_26088 < count__26079_26087)){
var req_26089 = cljs.core._nth.call(null,chunk__26078_26086,i__26080_26088);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26089,prov);


var G__26090 = seq__26077_26085;
var G__26091 = chunk__26078_26086;
var G__26092 = count__26079_26087;
var G__26093 = (i__26080_26088 + (1));
seq__26077_26085 = G__26090;
chunk__26078_26086 = G__26091;
count__26079_26087 = G__26092;
i__26080_26088 = G__26093;
continue;
} else {
var temp__5735__auto___26094 = cljs.core.seq.call(null,seq__26077_26085);
if(temp__5735__auto___26094){
var seq__26077_26095__$1 = temp__5735__auto___26094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26077_26095__$1)){
var c__4550__auto___26096 = cljs.core.chunk_first.call(null,seq__26077_26095__$1);
var G__26097 = cljs.core.chunk_rest.call(null,seq__26077_26095__$1);
var G__26098 = c__4550__auto___26096;
var G__26099 = cljs.core.count.call(null,c__4550__auto___26096);
var G__26100 = (0);
seq__26077_26085 = G__26097;
chunk__26078_26086 = G__26098;
count__26079_26087 = G__26099;
i__26080_26088 = G__26100;
continue;
} else {
var req_26101 = cljs.core.first.call(null,seq__26077_26095__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26101,prov);


var G__26102 = cljs.core.next.call(null,seq__26077_26095__$1);
var G__26103 = null;
var G__26104 = (0);
var G__26105 = (0);
seq__26077_26085 = G__26102;
chunk__26078_26086 = G__26103;
count__26079_26087 = G__26104;
i__26080_26088 = G__26105;
continue;
}
} else {
}
}
break;
}


var G__26106 = seq__26065;
var G__26107 = chunk__26066;
var G__26108 = count__26067;
var G__26109 = (i__26068 + (1));
seq__26065 = G__26106;
chunk__26066 = G__26107;
count__26067 = G__26108;
i__26068 = G__26109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26065);
if(temp__5735__auto__){
var seq__26065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26065__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26065__$1);
var G__26110 = cljs.core.chunk_rest.call(null,seq__26065__$1);
var G__26111 = c__4550__auto__;
var G__26112 = cljs.core.count.call(null,c__4550__auto__);
var G__26113 = (0);
seq__26065 = G__26110;
chunk__26066 = G__26111;
count__26067 = G__26112;
i__26068 = G__26113;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26065__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26081_26114 = cljs.core.seq.call(null,requires);
var chunk__26082_26115 = null;
var count__26083_26116 = (0);
var i__26084_26117 = (0);
while(true){
if((i__26084_26117 < count__26083_26116)){
var req_26118 = cljs.core._nth.call(null,chunk__26082_26115,i__26084_26117);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26118,prov);


var G__26119 = seq__26081_26114;
var G__26120 = chunk__26082_26115;
var G__26121 = count__26083_26116;
var G__26122 = (i__26084_26117 + (1));
seq__26081_26114 = G__26119;
chunk__26082_26115 = G__26120;
count__26083_26116 = G__26121;
i__26084_26117 = G__26122;
continue;
} else {
var temp__5735__auto___26123__$1 = cljs.core.seq.call(null,seq__26081_26114);
if(temp__5735__auto___26123__$1){
var seq__26081_26124__$1 = temp__5735__auto___26123__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26081_26124__$1)){
var c__4550__auto___26125 = cljs.core.chunk_first.call(null,seq__26081_26124__$1);
var G__26126 = cljs.core.chunk_rest.call(null,seq__26081_26124__$1);
var G__26127 = c__4550__auto___26125;
var G__26128 = cljs.core.count.call(null,c__4550__auto___26125);
var G__26129 = (0);
seq__26081_26114 = G__26126;
chunk__26082_26115 = G__26127;
count__26083_26116 = G__26128;
i__26084_26117 = G__26129;
continue;
} else {
var req_26130 = cljs.core.first.call(null,seq__26081_26124__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26130,prov);


var G__26131 = cljs.core.next.call(null,seq__26081_26124__$1);
var G__26132 = null;
var G__26133 = (0);
var G__26134 = (0);
seq__26081_26114 = G__26131;
chunk__26082_26115 = G__26132;
count__26083_26116 = G__26133;
i__26084_26117 = G__26134;
continue;
}
} else {
}
}
break;
}


var G__26135 = cljs.core.next.call(null,seq__26065__$1);
var G__26136 = null;
var G__26137 = (0);
var G__26138 = (0);
seq__26065 = G__26135;
chunk__26066 = G__26136;
count__26067 = G__26137;
i__26068 = G__26138;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26139_26143 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26140_26144 = null;
var count__26141_26145 = (0);
var i__26142_26146 = (0);
while(true){
if((i__26142_26146 < count__26141_26145)){
var ns_26147 = cljs.core._nth.call(null,chunk__26140_26144,i__26142_26146);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26147);


var G__26148 = seq__26139_26143;
var G__26149 = chunk__26140_26144;
var G__26150 = count__26141_26145;
var G__26151 = (i__26142_26146 + (1));
seq__26139_26143 = G__26148;
chunk__26140_26144 = G__26149;
count__26141_26145 = G__26150;
i__26142_26146 = G__26151;
continue;
} else {
var temp__5735__auto___26152 = cljs.core.seq.call(null,seq__26139_26143);
if(temp__5735__auto___26152){
var seq__26139_26153__$1 = temp__5735__auto___26152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26139_26153__$1)){
var c__4550__auto___26154 = cljs.core.chunk_first.call(null,seq__26139_26153__$1);
var G__26155 = cljs.core.chunk_rest.call(null,seq__26139_26153__$1);
var G__26156 = c__4550__auto___26154;
var G__26157 = cljs.core.count.call(null,c__4550__auto___26154);
var G__26158 = (0);
seq__26139_26143 = G__26155;
chunk__26140_26144 = G__26156;
count__26141_26145 = G__26157;
i__26142_26146 = G__26158;
continue;
} else {
var ns_26159 = cljs.core.first.call(null,seq__26139_26153__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26159);


var G__26160 = cljs.core.next.call(null,seq__26139_26153__$1);
var G__26161 = null;
var G__26162 = (0);
var G__26163 = (0);
seq__26139_26143 = G__26160;
chunk__26140_26144 = G__26161;
count__26141_26145 = G__26162;
i__26142_26146 = G__26163;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26164__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26165__i = 0, G__26165__a = new Array(arguments.length -  0);
while (G__26165__i < G__26165__a.length) {G__26165__a[G__26165__i] = arguments[G__26165__i + 0]; ++G__26165__i;}
  args = new cljs.core.IndexedSeq(G__26165__a,0,null);
} 
return G__26164__delegate.call(this,args);};
G__26164.cljs$lang$maxFixedArity = 0;
G__26164.cljs$lang$applyTo = (function (arglist__26166){
var args = cljs.core.seq(arglist__26166);
return G__26164__delegate(args);
});
G__26164.cljs$core$IFn$_invoke$arity$variadic = G__26164__delegate;
return G__26164;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26167_SHARP_,p2__26168_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26167_SHARP_)),p2__26168_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26169_SHARP_,p2__26170_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26169_SHARP_),p2__26170_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26171 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26171.addCallback(((function (G__26171){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26171))
);

G__26171.addErrback(((function (G__26171){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26171))
);

return G__26171;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26172){if((e26172 instanceof Error)){
var e = e26172;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26172;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26173){if((e26173 instanceof Error)){
var e = e26173;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26173;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26174 = cljs.core._EQ_;
var expr__26175 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26174.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26175))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26174.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26175))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26174.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26175))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26174,expr__26175){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26174,expr__26175))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26177,callback){
var map__26178 = p__26177;
var map__26178__$1 = (((((!((map__26178 == null))))?(((((map__26178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26178):map__26178);
var file_msg = map__26178__$1;
var request_url = cljs.core.get.call(null,map__26178__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26178,map__26178__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26178,map__26178__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__){
return (function (state_26216){
var state_val_26217 = (state_26216[(1)]);
if((state_val_26217 === (7))){
var inst_26212 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26218_26244 = state_26216__$1;
(statearr_26218_26244[(2)] = inst_26212);

(statearr_26218_26244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (1))){
var state_26216__$1 = state_26216;
var statearr_26219_26245 = state_26216__$1;
(statearr_26219_26245[(2)] = null);

(statearr_26219_26245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (4))){
var inst_26182 = (state_26216[(7)]);
var inst_26182__$1 = (state_26216[(2)]);
var state_26216__$1 = (function (){var statearr_26220 = state_26216;
(statearr_26220[(7)] = inst_26182__$1);

return statearr_26220;
})();
if(cljs.core.truth_(inst_26182__$1)){
var statearr_26221_26246 = state_26216__$1;
(statearr_26221_26246[(1)] = (5));

} else {
var statearr_26222_26247 = state_26216__$1;
(statearr_26222_26247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (15))){
var inst_26195 = (state_26216[(8)]);
var inst_26197 = (state_26216[(9)]);
var inst_26199 = inst_26197.call(null,inst_26195);
var state_26216__$1 = state_26216;
var statearr_26223_26248 = state_26216__$1;
(statearr_26223_26248[(2)] = inst_26199);

(statearr_26223_26248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (13))){
var inst_26206 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26224_26249 = state_26216__$1;
(statearr_26224_26249[(2)] = inst_26206);

(statearr_26224_26249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (6))){
var state_26216__$1 = state_26216;
var statearr_26225_26250 = state_26216__$1;
(statearr_26225_26250[(2)] = null);

(statearr_26225_26250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (17))){
var inst_26203 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
var statearr_26226_26251 = state_26216__$1;
(statearr_26226_26251[(2)] = inst_26203);

(statearr_26226_26251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (3))){
var inst_26214 = (state_26216[(2)]);
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26216__$1,inst_26214);
} else {
if((state_val_26217 === (12))){
var state_26216__$1 = state_26216;
var statearr_26227_26252 = state_26216__$1;
(statearr_26227_26252[(2)] = null);

(statearr_26227_26252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (2))){
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26216__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26217 === (11))){
var inst_26187 = (state_26216[(10)]);
var inst_26193 = figwheel.client.file_reloading.blocking_load.call(null,inst_26187);
var state_26216__$1 = state_26216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26216__$1,(14),inst_26193);
} else {
if((state_val_26217 === (9))){
var inst_26187 = (state_26216[(10)]);
var state_26216__$1 = state_26216;
if(cljs.core.truth_(inst_26187)){
var statearr_26228_26253 = state_26216__$1;
(statearr_26228_26253[(1)] = (11));

} else {
var statearr_26229_26254 = state_26216__$1;
(statearr_26229_26254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (5))){
var inst_26188 = (state_26216[(11)]);
var inst_26182 = (state_26216[(7)]);
var inst_26187 = cljs.core.nth.call(null,inst_26182,(0),null);
var inst_26188__$1 = cljs.core.nth.call(null,inst_26182,(1),null);
var state_26216__$1 = (function (){var statearr_26230 = state_26216;
(statearr_26230[(10)] = inst_26187);

(statearr_26230[(11)] = inst_26188__$1);

return statearr_26230;
})();
if(cljs.core.truth_(inst_26188__$1)){
var statearr_26231_26255 = state_26216__$1;
(statearr_26231_26255[(1)] = (8));

} else {
var statearr_26232_26256 = state_26216__$1;
(statearr_26232_26256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (14))){
var inst_26187 = (state_26216[(10)]);
var inst_26197 = (state_26216[(9)]);
var inst_26195 = (state_26216[(2)]);
var inst_26196 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26197__$1 = cljs.core.get.call(null,inst_26196,inst_26187);
var state_26216__$1 = (function (){var statearr_26233 = state_26216;
(statearr_26233[(8)] = inst_26195);

(statearr_26233[(9)] = inst_26197__$1);

return statearr_26233;
})();
if(cljs.core.truth_(inst_26197__$1)){
var statearr_26234_26257 = state_26216__$1;
(statearr_26234_26257[(1)] = (15));

} else {
var statearr_26235_26258 = state_26216__$1;
(statearr_26235_26258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (16))){
var inst_26195 = (state_26216[(8)]);
var inst_26201 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26195);
var state_26216__$1 = state_26216;
var statearr_26236_26259 = state_26216__$1;
(statearr_26236_26259[(2)] = inst_26201);

(statearr_26236_26259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (10))){
var inst_26208 = (state_26216[(2)]);
var state_26216__$1 = (function (){var statearr_26237 = state_26216;
(statearr_26237[(12)] = inst_26208);

return statearr_26237;
})();
var statearr_26238_26260 = state_26216__$1;
(statearr_26238_26260[(2)] = null);

(statearr_26238_26260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26217 === (8))){
var inst_26188 = (state_26216[(11)]);
var inst_26190 = eval(inst_26188);
var state_26216__$1 = state_26216;
var statearr_26239_26261 = state_26216__$1;
(statearr_26239_26261[(2)] = inst_26190);

(statearr_26239_26261[(1)] = (10));


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
});})(c__22561__auto__))
;
return ((function (switch__22466__auto__,c__22561__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22467__auto__ = null;
var figwheel$client$file_reloading$state_machine__22467__auto____0 = (function (){
var statearr_26240 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26240[(0)] = figwheel$client$file_reloading$state_machine__22467__auto__);

(statearr_26240[(1)] = (1));

return statearr_26240;
});
var figwheel$client$file_reloading$state_machine__22467__auto____1 = (function (state_26216){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_26216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e26241){if((e26241 instanceof Object)){
var ex__22470__auto__ = e26241;
var statearr_26242_26262 = state_26216;
(statearr_26242_26262[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26263 = state_26216;
state_26216 = G__26263;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22467__auto__ = function(state_26216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22467__auto____1.call(this,state_26216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22467__auto____0;
figwheel$client$file_reloading$state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22467__auto____1;
return figwheel$client$file_reloading$state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__))
})();
var state__22563__auto__ = (function (){var statearr_26243 = f__22562__auto__.call(null);
(statearr_26243[(6)] = c__22561__auto__);

return statearr_26243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__))
);

return c__22561__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26265 = arguments.length;
switch (G__26265) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26267,callback){
var map__26268 = p__26267;
var map__26268__$1 = (((((!((map__26268 == null))))?(((((map__26268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26268):map__26268);
var file_msg = map__26268__$1;
var namespace = cljs.core.get.call(null,map__26268__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26268,map__26268__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26268,map__26268__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26270){
var map__26271 = p__26270;
var map__26271__$1 = (((((!((map__26271 == null))))?(((((map__26271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26271):map__26271);
var file_msg = map__26271__$1;
var namespace = cljs.core.get.call(null,map__26271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26273){
var map__26274 = p__26273;
var map__26274__$1 = (((((!((map__26274 == null))))?(((((map__26274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26274):map__26274);
var file_msg = map__26274__$1;
var namespace = cljs.core.get.call(null,map__26274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26276,callback){
var map__26277 = p__26276;
var map__26277__$1 = (((((!((map__26277 == null))))?(((((map__26277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26277):map__26277);
var file_msg = map__26277__$1;
var request_url = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22561__auto___26327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto___26327,out){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto___26327,out){
return (function (state_26312){
var state_val_26313 = (state_26312[(1)]);
if((state_val_26313 === (1))){
var inst_26286 = cljs.core.seq.call(null,files);
var inst_26287 = cljs.core.first.call(null,inst_26286);
var inst_26288 = cljs.core.next.call(null,inst_26286);
var inst_26289 = files;
var state_26312__$1 = (function (){var statearr_26314 = state_26312;
(statearr_26314[(7)] = inst_26287);

(statearr_26314[(8)] = inst_26289);

(statearr_26314[(9)] = inst_26288);

return statearr_26314;
})();
var statearr_26315_26328 = state_26312__$1;
(statearr_26315_26328[(2)] = null);

(statearr_26315_26328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (2))){
var inst_26289 = (state_26312[(8)]);
var inst_26295 = (state_26312[(10)]);
var inst_26294 = cljs.core.seq.call(null,inst_26289);
var inst_26295__$1 = cljs.core.first.call(null,inst_26294);
var inst_26296 = cljs.core.next.call(null,inst_26294);
var inst_26297 = (inst_26295__$1 == null);
var inst_26298 = cljs.core.not.call(null,inst_26297);
var state_26312__$1 = (function (){var statearr_26316 = state_26312;
(statearr_26316[(11)] = inst_26296);

(statearr_26316[(10)] = inst_26295__$1);

return statearr_26316;
})();
if(inst_26298){
var statearr_26317_26329 = state_26312__$1;
(statearr_26317_26329[(1)] = (4));

} else {
var statearr_26318_26330 = state_26312__$1;
(statearr_26318_26330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (3))){
var inst_26310 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26312__$1,inst_26310);
} else {
if((state_val_26313 === (4))){
var inst_26295 = (state_26312[(10)]);
var inst_26300 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26295);
var state_26312__$1 = state_26312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26312__$1,(7),inst_26300);
} else {
if((state_val_26313 === (5))){
var inst_26306 = cljs.core.async.close_BANG_.call(null,out);
var state_26312__$1 = state_26312;
var statearr_26319_26331 = state_26312__$1;
(statearr_26319_26331[(2)] = inst_26306);

(statearr_26319_26331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (6))){
var inst_26308 = (state_26312[(2)]);
var state_26312__$1 = state_26312;
var statearr_26320_26332 = state_26312__$1;
(statearr_26320_26332[(2)] = inst_26308);

(statearr_26320_26332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26313 === (7))){
var inst_26296 = (state_26312[(11)]);
var inst_26302 = (state_26312[(2)]);
var inst_26303 = cljs.core.async.put_BANG_.call(null,out,inst_26302);
var inst_26289 = inst_26296;
var state_26312__$1 = (function (){var statearr_26321 = state_26312;
(statearr_26321[(12)] = inst_26303);

(statearr_26321[(8)] = inst_26289);

return statearr_26321;
})();
var statearr_26322_26333 = state_26312__$1;
(statearr_26322_26333[(2)] = null);

(statearr_26322_26333[(1)] = (2));


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
});})(c__22561__auto___26327,out))
;
return ((function (switch__22466__auto__,c__22561__auto___26327,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto____0 = (function (){
var statearr_26323 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26323[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto__);

(statearr_26323[(1)] = (1));

return statearr_26323;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto____1 = (function (state_26312){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_26312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e26324){if((e26324 instanceof Object)){
var ex__22470__auto__ = e26324;
var statearr_26325_26334 = state_26312;
(statearr_26325_26334[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26335 = state_26312;
state_26312 = G__26335;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto__ = function(state_26312){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto____1.call(this,state_26312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto___26327,out))
})();
var state__22563__auto__ = (function (){var statearr_26326 = f__22562__auto__.call(null);
(statearr_26326[(6)] = c__22561__auto___26327);

return statearr_26326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto___26327,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26336,opts){
var map__26337 = p__26336;
var map__26337__$1 = (((((!((map__26337 == null))))?(((((map__26337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26337):map__26337);
var eval_body = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26339){var e = e26339;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26340_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26340_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26341){
var vec__26342 = p__26341;
var k = cljs.core.nth.call(null,vec__26342,(0),null);
var v = cljs.core.nth.call(null,vec__26342,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26345){
var vec__26346 = p__26345;
var k = cljs.core.nth.call(null,vec__26346,(0),null);
var v = cljs.core.nth.call(null,vec__26346,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26352,p__26353){
var map__26354 = p__26352;
var map__26354__$1 = (((((!((map__26354 == null))))?(((((map__26354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26354):map__26354);
var opts = map__26354__$1;
var before_jsload = cljs.core.get.call(null,map__26354__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26354__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26354__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26355 = p__26353;
var map__26355__$1 = (((((!((map__26355 == null))))?(((((map__26355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26355):map__26355);
var msg = map__26355__$1;
var files = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22562__auto__ = (function (){var switch__22466__auto__ = ((function (c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26509){
var state_val_26510 = (state_26509[(1)]);
if((state_val_26510 === (7))){
var inst_26370 = (state_26509[(7)]);
var inst_26371 = (state_26509[(8)]);
var inst_26372 = (state_26509[(9)]);
var inst_26369 = (state_26509[(10)]);
var inst_26377 = cljs.core._nth.call(null,inst_26370,inst_26372);
var inst_26378 = figwheel.client.file_reloading.eval_body.call(null,inst_26377,opts);
var inst_26379 = (inst_26372 + (1));
var tmp26511 = inst_26370;
var tmp26512 = inst_26371;
var tmp26513 = inst_26369;
var inst_26369__$1 = tmp26513;
var inst_26370__$1 = tmp26511;
var inst_26371__$1 = tmp26512;
var inst_26372__$1 = inst_26379;
var state_26509__$1 = (function (){var statearr_26514 = state_26509;
(statearr_26514[(11)] = inst_26378);

(statearr_26514[(7)] = inst_26370__$1);

(statearr_26514[(8)] = inst_26371__$1);

(statearr_26514[(9)] = inst_26372__$1);

(statearr_26514[(10)] = inst_26369__$1);

return statearr_26514;
})();
var statearr_26515_26598 = state_26509__$1;
(statearr_26515_26598[(2)] = null);

(statearr_26515_26598[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (20))){
var inst_26412 = (state_26509[(12)]);
var inst_26420 = figwheel.client.file_reloading.sort_files.call(null,inst_26412);
var state_26509__$1 = state_26509;
var statearr_26516_26599 = state_26509__$1;
(statearr_26516_26599[(2)] = inst_26420);

(statearr_26516_26599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (27))){
var state_26509__$1 = state_26509;
var statearr_26517_26600 = state_26509__$1;
(statearr_26517_26600[(2)] = null);

(statearr_26517_26600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (1))){
var inst_26361 = (state_26509[(13)]);
var inst_26358 = before_jsload.call(null,files);
var inst_26359 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26360 = (function (){return ((function (inst_26361,inst_26358,inst_26359,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26349_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26349_SHARP_);
});
;})(inst_26361,inst_26358,inst_26359,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26361__$1 = cljs.core.filter.call(null,inst_26360,files);
var inst_26362 = cljs.core.not_empty.call(null,inst_26361__$1);
var state_26509__$1 = (function (){var statearr_26518 = state_26509;
(statearr_26518[(14)] = inst_26358);

(statearr_26518[(13)] = inst_26361__$1);

(statearr_26518[(15)] = inst_26359);

return statearr_26518;
})();
if(cljs.core.truth_(inst_26362)){
var statearr_26519_26601 = state_26509__$1;
(statearr_26519_26601[(1)] = (2));

} else {
var statearr_26520_26602 = state_26509__$1;
(statearr_26520_26602[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (24))){
var state_26509__$1 = state_26509;
var statearr_26521_26603 = state_26509__$1;
(statearr_26521_26603[(2)] = null);

(statearr_26521_26603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (39))){
var inst_26462 = (state_26509[(16)]);
var state_26509__$1 = state_26509;
var statearr_26522_26604 = state_26509__$1;
(statearr_26522_26604[(2)] = inst_26462);

(statearr_26522_26604[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (46))){
var inst_26504 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26523_26605 = state_26509__$1;
(statearr_26523_26605[(2)] = inst_26504);

(statearr_26523_26605[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (4))){
var inst_26406 = (state_26509[(2)]);
var inst_26407 = cljs.core.List.EMPTY;
var inst_26408 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26407);
var inst_26409 = (function (){return ((function (inst_26406,inst_26407,inst_26408,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26350_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26350_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26350_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26350_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_26406,inst_26407,inst_26408,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26410 = cljs.core.filter.call(null,inst_26409,files);
var inst_26411 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26412 = cljs.core.concat.call(null,inst_26410,inst_26411);
var state_26509__$1 = (function (){var statearr_26524 = state_26509;
(statearr_26524[(17)] = inst_26406);

(statearr_26524[(18)] = inst_26408);

(statearr_26524[(12)] = inst_26412);

return statearr_26524;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26525_26606 = state_26509__$1;
(statearr_26525_26606[(1)] = (16));

} else {
var statearr_26526_26607 = state_26509__$1;
(statearr_26526_26607[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (15))){
var inst_26396 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26527_26608 = state_26509__$1;
(statearr_26527_26608[(2)] = inst_26396);

(statearr_26527_26608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (21))){
var inst_26422 = (state_26509[(19)]);
var inst_26422__$1 = (state_26509[(2)]);
var inst_26423 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26422__$1);
var state_26509__$1 = (function (){var statearr_26528 = state_26509;
(statearr_26528[(19)] = inst_26422__$1);

return statearr_26528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26509__$1,(22),inst_26423);
} else {
if((state_val_26510 === (31))){
var inst_26507 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26509__$1,inst_26507);
} else {
if((state_val_26510 === (32))){
var inst_26462 = (state_26509[(16)]);
var inst_26467 = inst_26462.cljs$lang$protocol_mask$partition0$;
var inst_26468 = (inst_26467 & (64));
var inst_26469 = inst_26462.cljs$core$ISeq$;
var inst_26470 = (cljs.core.PROTOCOL_SENTINEL === inst_26469);
var inst_26471 = ((inst_26468) || (inst_26470));
var state_26509__$1 = state_26509;
if(cljs.core.truth_(inst_26471)){
var statearr_26529_26609 = state_26509__$1;
(statearr_26529_26609[(1)] = (35));

} else {
var statearr_26530_26610 = state_26509__$1;
(statearr_26530_26610[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (40))){
var inst_26484 = (state_26509[(20)]);
var inst_26483 = (state_26509[(2)]);
var inst_26484__$1 = cljs.core.get.call(null,inst_26483,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26485 = cljs.core.get.call(null,inst_26483,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26486 = cljs.core.not_empty.call(null,inst_26484__$1);
var state_26509__$1 = (function (){var statearr_26531 = state_26509;
(statearr_26531[(21)] = inst_26485);

(statearr_26531[(20)] = inst_26484__$1);

return statearr_26531;
})();
if(cljs.core.truth_(inst_26486)){
var statearr_26532_26611 = state_26509__$1;
(statearr_26532_26611[(1)] = (41));

} else {
var statearr_26533_26612 = state_26509__$1;
(statearr_26533_26612[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (33))){
var state_26509__$1 = state_26509;
var statearr_26534_26613 = state_26509__$1;
(statearr_26534_26613[(2)] = false);

(statearr_26534_26613[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (13))){
var inst_26382 = (state_26509[(22)]);
var inst_26386 = cljs.core.chunk_first.call(null,inst_26382);
var inst_26387 = cljs.core.chunk_rest.call(null,inst_26382);
var inst_26388 = cljs.core.count.call(null,inst_26386);
var inst_26369 = inst_26387;
var inst_26370 = inst_26386;
var inst_26371 = inst_26388;
var inst_26372 = (0);
var state_26509__$1 = (function (){var statearr_26535 = state_26509;
(statearr_26535[(7)] = inst_26370);

(statearr_26535[(8)] = inst_26371);

(statearr_26535[(9)] = inst_26372);

(statearr_26535[(10)] = inst_26369);

return statearr_26535;
})();
var statearr_26536_26614 = state_26509__$1;
(statearr_26536_26614[(2)] = null);

(statearr_26536_26614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (22))){
var inst_26426 = (state_26509[(23)]);
var inst_26430 = (state_26509[(24)]);
var inst_26422 = (state_26509[(19)]);
var inst_26425 = (state_26509[(25)]);
var inst_26425__$1 = (state_26509[(2)]);
var inst_26426__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26425__$1);
var inst_26427 = (function (){var all_files = inst_26422;
var res_SINGLEQUOTE_ = inst_26425__$1;
var res = inst_26426__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26426,inst_26430,inst_26422,inst_26425,inst_26425__$1,inst_26426__$1,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26351_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26351_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26426,inst_26430,inst_26422,inst_26425,inst_26425__$1,inst_26426__$1,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26428 = cljs.core.filter.call(null,inst_26427,inst_26425__$1);
var inst_26429 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26430__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26429);
var inst_26431 = cljs.core.not_empty.call(null,inst_26430__$1);
var state_26509__$1 = (function (){var statearr_26537 = state_26509;
(statearr_26537[(23)] = inst_26426__$1);

(statearr_26537[(24)] = inst_26430__$1);

(statearr_26537[(26)] = inst_26428);

(statearr_26537[(25)] = inst_26425__$1);

return statearr_26537;
})();
if(cljs.core.truth_(inst_26431)){
var statearr_26538_26615 = state_26509__$1;
(statearr_26538_26615[(1)] = (23));

} else {
var statearr_26539_26616 = state_26509__$1;
(statearr_26539_26616[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (36))){
var state_26509__$1 = state_26509;
var statearr_26540_26617 = state_26509__$1;
(statearr_26540_26617[(2)] = false);

(statearr_26540_26617[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (41))){
var inst_26484 = (state_26509[(20)]);
var inst_26488 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26489 = cljs.core.map.call(null,inst_26488,inst_26484);
var inst_26490 = cljs.core.pr_str.call(null,inst_26489);
var inst_26491 = ["figwheel-no-load meta-data: ",inst_26490].join('');
var inst_26492 = figwheel.client.utils.log.call(null,inst_26491);
var state_26509__$1 = state_26509;
var statearr_26541_26618 = state_26509__$1;
(statearr_26541_26618[(2)] = inst_26492);

(statearr_26541_26618[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (43))){
var inst_26485 = (state_26509[(21)]);
var inst_26495 = (state_26509[(2)]);
var inst_26496 = cljs.core.not_empty.call(null,inst_26485);
var state_26509__$1 = (function (){var statearr_26542 = state_26509;
(statearr_26542[(27)] = inst_26495);

return statearr_26542;
})();
if(cljs.core.truth_(inst_26496)){
var statearr_26543_26619 = state_26509__$1;
(statearr_26543_26619[(1)] = (44));

} else {
var statearr_26544_26620 = state_26509__$1;
(statearr_26544_26620[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (29))){
var inst_26426 = (state_26509[(23)]);
var inst_26430 = (state_26509[(24)]);
var inst_26428 = (state_26509[(26)]);
var inst_26462 = (state_26509[(16)]);
var inst_26422 = (state_26509[(19)]);
var inst_26425 = (state_26509[(25)]);
var inst_26458 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26461 = (function (){var all_files = inst_26422;
var res_SINGLEQUOTE_ = inst_26425;
var res = inst_26426;
var files_not_loaded = inst_26428;
var dependencies_that_loaded = inst_26430;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26462,inst_26422,inst_26425,inst_26458,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26460){
var map__26545 = p__26460;
var map__26545__$1 = (((((!((map__26545 == null))))?(((((map__26545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26545):map__26545);
var namespace = cljs.core.get.call(null,map__26545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26462,inst_26422,inst_26425,inst_26458,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26462__$1 = cljs.core.group_by.call(null,inst_26461,inst_26428);
var inst_26464 = (inst_26462__$1 == null);
var inst_26465 = cljs.core.not.call(null,inst_26464);
var state_26509__$1 = (function (){var statearr_26547 = state_26509;
(statearr_26547[(16)] = inst_26462__$1);

(statearr_26547[(28)] = inst_26458);

return statearr_26547;
})();
if(inst_26465){
var statearr_26548_26621 = state_26509__$1;
(statearr_26548_26621[(1)] = (32));

} else {
var statearr_26549_26622 = state_26509__$1;
(statearr_26549_26622[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (44))){
var inst_26485 = (state_26509[(21)]);
var inst_26498 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26485);
var inst_26499 = cljs.core.pr_str.call(null,inst_26498);
var inst_26500 = ["not required: ",inst_26499].join('');
var inst_26501 = figwheel.client.utils.log.call(null,inst_26500);
var state_26509__$1 = state_26509;
var statearr_26550_26623 = state_26509__$1;
(statearr_26550_26623[(2)] = inst_26501);

(statearr_26550_26623[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (6))){
var inst_26403 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26551_26624 = state_26509__$1;
(statearr_26551_26624[(2)] = inst_26403);

(statearr_26551_26624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (28))){
var inst_26428 = (state_26509[(26)]);
var inst_26455 = (state_26509[(2)]);
var inst_26456 = cljs.core.not_empty.call(null,inst_26428);
var state_26509__$1 = (function (){var statearr_26552 = state_26509;
(statearr_26552[(29)] = inst_26455);

return statearr_26552;
})();
if(cljs.core.truth_(inst_26456)){
var statearr_26553_26625 = state_26509__$1;
(statearr_26553_26625[(1)] = (29));

} else {
var statearr_26554_26626 = state_26509__$1;
(statearr_26554_26626[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (25))){
var inst_26426 = (state_26509[(23)]);
var inst_26442 = (state_26509[(2)]);
var inst_26443 = cljs.core.not_empty.call(null,inst_26426);
var state_26509__$1 = (function (){var statearr_26555 = state_26509;
(statearr_26555[(30)] = inst_26442);

return statearr_26555;
})();
if(cljs.core.truth_(inst_26443)){
var statearr_26556_26627 = state_26509__$1;
(statearr_26556_26627[(1)] = (26));

} else {
var statearr_26557_26628 = state_26509__$1;
(statearr_26557_26628[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (34))){
var inst_26478 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
if(cljs.core.truth_(inst_26478)){
var statearr_26558_26629 = state_26509__$1;
(statearr_26558_26629[(1)] = (38));

} else {
var statearr_26559_26630 = state_26509__$1;
(statearr_26559_26630[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (17))){
var state_26509__$1 = state_26509;
var statearr_26560_26631 = state_26509__$1;
(statearr_26560_26631[(2)] = recompile_dependents);

(statearr_26560_26631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (3))){
var state_26509__$1 = state_26509;
var statearr_26561_26632 = state_26509__$1;
(statearr_26561_26632[(2)] = null);

(statearr_26561_26632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (12))){
var inst_26399 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26562_26633 = state_26509__$1;
(statearr_26562_26633[(2)] = inst_26399);

(statearr_26562_26633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (2))){
var inst_26361 = (state_26509[(13)]);
var inst_26368 = cljs.core.seq.call(null,inst_26361);
var inst_26369 = inst_26368;
var inst_26370 = null;
var inst_26371 = (0);
var inst_26372 = (0);
var state_26509__$1 = (function (){var statearr_26563 = state_26509;
(statearr_26563[(7)] = inst_26370);

(statearr_26563[(8)] = inst_26371);

(statearr_26563[(9)] = inst_26372);

(statearr_26563[(10)] = inst_26369);

return statearr_26563;
})();
var statearr_26564_26634 = state_26509__$1;
(statearr_26564_26634[(2)] = null);

(statearr_26564_26634[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (23))){
var inst_26426 = (state_26509[(23)]);
var inst_26430 = (state_26509[(24)]);
var inst_26428 = (state_26509[(26)]);
var inst_26422 = (state_26509[(19)]);
var inst_26425 = (state_26509[(25)]);
var inst_26433 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26435 = (function (){var all_files = inst_26422;
var res_SINGLEQUOTE_ = inst_26425;
var res = inst_26426;
var files_not_loaded = inst_26428;
var dependencies_that_loaded = inst_26430;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26422,inst_26425,inst_26433,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26434){
var map__26565 = p__26434;
var map__26565__$1 = (((((!((map__26565 == null))))?(((((map__26565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26565):map__26565);
var request_url = cljs.core.get.call(null,map__26565__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26422,inst_26425,inst_26433,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26436 = cljs.core.reverse.call(null,inst_26430);
var inst_26437 = cljs.core.map.call(null,inst_26435,inst_26436);
var inst_26438 = cljs.core.pr_str.call(null,inst_26437);
var inst_26439 = figwheel.client.utils.log.call(null,inst_26438);
var state_26509__$1 = (function (){var statearr_26567 = state_26509;
(statearr_26567[(31)] = inst_26433);

return statearr_26567;
})();
var statearr_26568_26635 = state_26509__$1;
(statearr_26568_26635[(2)] = inst_26439);

(statearr_26568_26635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (35))){
var state_26509__$1 = state_26509;
var statearr_26569_26636 = state_26509__$1;
(statearr_26569_26636[(2)] = true);

(statearr_26569_26636[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (19))){
var inst_26412 = (state_26509[(12)]);
var inst_26418 = figwheel.client.file_reloading.expand_files.call(null,inst_26412);
var state_26509__$1 = state_26509;
var statearr_26570_26637 = state_26509__$1;
(statearr_26570_26637[(2)] = inst_26418);

(statearr_26570_26637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (11))){
var state_26509__$1 = state_26509;
var statearr_26571_26638 = state_26509__$1;
(statearr_26571_26638[(2)] = null);

(statearr_26571_26638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (9))){
var inst_26401 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26572_26639 = state_26509__$1;
(statearr_26572_26639[(2)] = inst_26401);

(statearr_26572_26639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (5))){
var inst_26371 = (state_26509[(8)]);
var inst_26372 = (state_26509[(9)]);
var inst_26374 = (inst_26372 < inst_26371);
var inst_26375 = inst_26374;
var state_26509__$1 = state_26509;
if(cljs.core.truth_(inst_26375)){
var statearr_26573_26640 = state_26509__$1;
(statearr_26573_26640[(1)] = (7));

} else {
var statearr_26574_26641 = state_26509__$1;
(statearr_26574_26641[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (14))){
var inst_26382 = (state_26509[(22)]);
var inst_26391 = cljs.core.first.call(null,inst_26382);
var inst_26392 = figwheel.client.file_reloading.eval_body.call(null,inst_26391,opts);
var inst_26393 = cljs.core.next.call(null,inst_26382);
var inst_26369 = inst_26393;
var inst_26370 = null;
var inst_26371 = (0);
var inst_26372 = (0);
var state_26509__$1 = (function (){var statearr_26575 = state_26509;
(statearr_26575[(7)] = inst_26370);

(statearr_26575[(8)] = inst_26371);

(statearr_26575[(9)] = inst_26372);

(statearr_26575[(10)] = inst_26369);

(statearr_26575[(32)] = inst_26392);

return statearr_26575;
})();
var statearr_26576_26642 = state_26509__$1;
(statearr_26576_26642[(2)] = null);

(statearr_26576_26642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (45))){
var state_26509__$1 = state_26509;
var statearr_26577_26643 = state_26509__$1;
(statearr_26577_26643[(2)] = null);

(statearr_26577_26643[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (26))){
var inst_26426 = (state_26509[(23)]);
var inst_26430 = (state_26509[(24)]);
var inst_26428 = (state_26509[(26)]);
var inst_26422 = (state_26509[(19)]);
var inst_26425 = (state_26509[(25)]);
var inst_26445 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26447 = (function (){var all_files = inst_26422;
var res_SINGLEQUOTE_ = inst_26425;
var res = inst_26426;
var files_not_loaded = inst_26428;
var dependencies_that_loaded = inst_26430;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26422,inst_26425,inst_26445,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26446){
var map__26578 = p__26446;
var map__26578__$1 = (((((!((map__26578 == null))))?(((((map__26578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26578):map__26578);
var namespace = cljs.core.get.call(null,map__26578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26422,inst_26425,inst_26445,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26448 = cljs.core.map.call(null,inst_26447,inst_26426);
var inst_26449 = cljs.core.pr_str.call(null,inst_26448);
var inst_26450 = figwheel.client.utils.log.call(null,inst_26449);
var inst_26451 = (function (){var all_files = inst_26422;
var res_SINGLEQUOTE_ = inst_26425;
var res = inst_26426;
var files_not_loaded = inst_26428;
var dependencies_that_loaded = inst_26430;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26422,inst_26425,inst_26445,inst_26447,inst_26448,inst_26449,inst_26450,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26426,inst_26430,inst_26428,inst_26422,inst_26425,inst_26445,inst_26447,inst_26448,inst_26449,inst_26450,state_val_26510,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26452 = setTimeout(inst_26451,(10));
var state_26509__$1 = (function (){var statearr_26580 = state_26509;
(statearr_26580[(33)] = inst_26450);

(statearr_26580[(34)] = inst_26445);

return statearr_26580;
})();
var statearr_26581_26644 = state_26509__$1;
(statearr_26581_26644[(2)] = inst_26452);

(statearr_26581_26644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (16))){
var state_26509__$1 = state_26509;
var statearr_26582_26645 = state_26509__$1;
(statearr_26582_26645[(2)] = reload_dependents);

(statearr_26582_26645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (38))){
var inst_26462 = (state_26509[(16)]);
var inst_26480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26462);
var state_26509__$1 = state_26509;
var statearr_26583_26646 = state_26509__$1;
(statearr_26583_26646[(2)] = inst_26480);

(statearr_26583_26646[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (30))){
var state_26509__$1 = state_26509;
var statearr_26584_26647 = state_26509__$1;
(statearr_26584_26647[(2)] = null);

(statearr_26584_26647[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (10))){
var inst_26382 = (state_26509[(22)]);
var inst_26384 = cljs.core.chunked_seq_QMARK_.call(null,inst_26382);
var state_26509__$1 = state_26509;
if(inst_26384){
var statearr_26585_26648 = state_26509__$1;
(statearr_26585_26648[(1)] = (13));

} else {
var statearr_26586_26649 = state_26509__$1;
(statearr_26586_26649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (18))){
var inst_26416 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
if(cljs.core.truth_(inst_26416)){
var statearr_26587_26650 = state_26509__$1;
(statearr_26587_26650[(1)] = (19));

} else {
var statearr_26588_26651 = state_26509__$1;
(statearr_26588_26651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (42))){
var state_26509__$1 = state_26509;
var statearr_26589_26652 = state_26509__$1;
(statearr_26589_26652[(2)] = null);

(statearr_26589_26652[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (37))){
var inst_26475 = (state_26509[(2)]);
var state_26509__$1 = state_26509;
var statearr_26590_26653 = state_26509__$1;
(statearr_26590_26653[(2)] = inst_26475);

(statearr_26590_26653[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26510 === (8))){
var inst_26382 = (state_26509[(22)]);
var inst_26369 = (state_26509[(10)]);
var inst_26382__$1 = cljs.core.seq.call(null,inst_26369);
var state_26509__$1 = (function (){var statearr_26591 = state_26509;
(statearr_26591[(22)] = inst_26382__$1);

return statearr_26591;
})();
if(inst_26382__$1){
var statearr_26592_26654 = state_26509__$1;
(statearr_26592_26654[(1)] = (10));

} else {
var statearr_26593_26655 = state_26509__$1;
(statearr_26593_26655[(1)] = (11));

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
});})(c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22466__auto__,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto____0 = (function (){
var statearr_26594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26594[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto__);

(statearr_26594[(1)] = (1));

return statearr_26594;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto____1 = (function (state_26509){
while(true){
var ret_value__22468__auto__ = (function (){try{while(true){
var result__22469__auto__ = switch__22466__auto__.call(null,state_26509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22469__auto__;
}
break;
}
}catch (e26595){if((e26595 instanceof Object)){
var ex__22470__auto__ = e26595;
var statearr_26596_26656 = state_26509;
(statearr_26596_26656[(5)] = ex__22470__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26657 = state_26509;
state_26509 = G__26657;
continue;
} else {
return ret_value__22468__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto__ = function(state_26509){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto____1.call(this,state_26509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22467__auto__;
})()
;})(switch__22466__auto__,c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22563__auto__ = (function (){var statearr_26597 = f__22562__auto__.call(null);
(statearr_26597[(6)] = c__22561__auto__);

return statearr_26597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22563__auto__);
});})(c__22561__auto__,map__26354,map__26354__$1,opts,before_jsload,on_jsload,reload_dependents,map__26355,map__26355__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22561__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26660,link){
var map__26661 = p__26660;
var map__26661__$1 = (((((!((map__26661 == null))))?(((((map__26661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26661):map__26661);
var file = cljs.core.get.call(null,map__26661__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__26661,map__26661__$1,file){
return (function (p1__26658_SHARP_,p2__26659_SHARP_){
if(cljs.core._EQ_.call(null,p1__26658_SHARP_,p2__26659_SHARP_)){
return p1__26658_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__26661,map__26661__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26664){
var map__26665 = p__26664;
var map__26665__$1 = (((((!((map__26665 == null))))?(((((map__26665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26665):map__26665);
var match_length = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26663_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26663_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26667_SHARP_,p2__26668_SHARP_){
return cljs.core.assoc.call(null,p1__26667_SHARP_,cljs.core.get.call(null,p2__26668_SHARP_,key),p2__26668_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26669 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26669);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26669);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26670,p__26671){
var map__26672 = p__26670;
var map__26672__$1 = (((((!((map__26672 == null))))?(((((map__26672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26672):map__26672);
var on_cssload = cljs.core.get.call(null,map__26672__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26673 = p__26671;
var map__26673__$1 = (((((!((map__26673 == null))))?(((((map__26673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26673):map__26673);
var files_msg = map__26673__$1;
var files = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1594882418200
