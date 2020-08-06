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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25942_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25942_SHARP_));
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
var seq__25943 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25944 = null;
var count__25945 = (0);
var i__25946 = (0);
while(true){
if((i__25946 < count__25945)){
var n = cljs.core._nth.call(null,chunk__25944,i__25946);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25947 = seq__25943;
var G__25948 = chunk__25944;
var G__25949 = count__25945;
var G__25950 = (i__25946 + (1));
seq__25943 = G__25947;
chunk__25944 = G__25948;
count__25945 = G__25949;
i__25946 = G__25950;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25943);
if(temp__5735__auto__){
var seq__25943__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25943__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25943__$1);
var G__25951 = cljs.core.chunk_rest.call(null,seq__25943__$1);
var G__25952 = c__4550__auto__;
var G__25953 = cljs.core.count.call(null,c__4550__auto__);
var G__25954 = (0);
seq__25943 = G__25951;
chunk__25944 = G__25952;
count__25945 = G__25953;
i__25946 = G__25954;
continue;
} else {
var n = cljs.core.first.call(null,seq__25943__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25955 = cljs.core.next.call(null,seq__25943__$1);
var G__25956 = null;
var G__25957 = (0);
var G__25958 = (0);
seq__25943 = G__25955;
chunk__25944 = G__25956;
count__25945 = G__25957;
i__25946 = G__25958;
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
return cljs.core.some.call(null,(function (p__25959){
var vec__25960 = p__25959;
var _ = cljs.core.nth.call(null,vec__25960,(0),null);
var v = cljs.core.nth.call(null,vec__25960,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__25963){
var vec__25964 = p__25963;
var k = cljs.core.nth.call(null,vec__25964,(0),null);
var v = cljs.core.nth.call(null,vec__25964,(1),null);
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

var seq__25976_25984 = cljs.core.seq.call(null,deps);
var chunk__25977_25985 = null;
var count__25978_25986 = (0);
var i__25979_25987 = (0);
while(true){
if((i__25979_25987 < count__25978_25986)){
var dep_25988 = cljs.core._nth.call(null,chunk__25977_25985,i__25979_25987);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25988;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25988));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25988,(depth + (1)),state);
} else {
}


var G__25989 = seq__25976_25984;
var G__25990 = chunk__25977_25985;
var G__25991 = count__25978_25986;
var G__25992 = (i__25979_25987 + (1));
seq__25976_25984 = G__25989;
chunk__25977_25985 = G__25990;
count__25978_25986 = G__25991;
i__25979_25987 = G__25992;
continue;
} else {
var temp__5735__auto___25993 = cljs.core.seq.call(null,seq__25976_25984);
if(temp__5735__auto___25993){
var seq__25976_25994__$1 = temp__5735__auto___25993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25976_25994__$1)){
var c__4550__auto___25995 = cljs.core.chunk_first.call(null,seq__25976_25994__$1);
var G__25996 = cljs.core.chunk_rest.call(null,seq__25976_25994__$1);
var G__25997 = c__4550__auto___25995;
var G__25998 = cljs.core.count.call(null,c__4550__auto___25995);
var G__25999 = (0);
seq__25976_25984 = G__25996;
chunk__25977_25985 = G__25997;
count__25978_25986 = G__25998;
i__25979_25987 = G__25999;
continue;
} else {
var dep_26000 = cljs.core.first.call(null,seq__25976_25994__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26000;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26000));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26000,(depth + (1)),state);
} else {
}


var G__26001 = cljs.core.next.call(null,seq__25976_25994__$1);
var G__26002 = null;
var G__26003 = (0);
var G__26004 = (0);
seq__25976_25984 = G__26001;
chunk__25977_25985 = G__26002;
count__25978_25986 = G__26003;
i__25979_25987 = G__26004;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25980){
var vec__25981 = p__25980;
var seq__25982 = cljs.core.seq.call(null,vec__25981);
var first__25983 = cljs.core.first.call(null,seq__25982);
var seq__25982__$1 = cljs.core.next.call(null,seq__25982);
var x = first__25983;
var xs = seq__25982__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25981,seq__25982,first__25983,seq__25982__$1,x,xs,get_deps__$1){
return (function (p1__25967_SHARP_){
return clojure.set.difference.call(null,p1__25967_SHARP_,x);
});})(vec__25981,seq__25982,first__25983,seq__25982__$1,x,xs,get_deps__$1))
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
var seq__26005 = cljs.core.seq.call(null,provides);
var chunk__26006 = null;
var count__26007 = (0);
var i__26008 = (0);
while(true){
if((i__26008 < count__26007)){
var prov = cljs.core._nth.call(null,chunk__26006,i__26008);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26017_26025 = cljs.core.seq.call(null,requires);
var chunk__26018_26026 = null;
var count__26019_26027 = (0);
var i__26020_26028 = (0);
while(true){
if((i__26020_26028 < count__26019_26027)){
var req_26029 = cljs.core._nth.call(null,chunk__26018_26026,i__26020_26028);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26029,prov);


var G__26030 = seq__26017_26025;
var G__26031 = chunk__26018_26026;
var G__26032 = count__26019_26027;
var G__26033 = (i__26020_26028 + (1));
seq__26017_26025 = G__26030;
chunk__26018_26026 = G__26031;
count__26019_26027 = G__26032;
i__26020_26028 = G__26033;
continue;
} else {
var temp__5735__auto___26034 = cljs.core.seq.call(null,seq__26017_26025);
if(temp__5735__auto___26034){
var seq__26017_26035__$1 = temp__5735__auto___26034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26017_26035__$1)){
var c__4550__auto___26036 = cljs.core.chunk_first.call(null,seq__26017_26035__$1);
var G__26037 = cljs.core.chunk_rest.call(null,seq__26017_26035__$1);
var G__26038 = c__4550__auto___26036;
var G__26039 = cljs.core.count.call(null,c__4550__auto___26036);
var G__26040 = (0);
seq__26017_26025 = G__26037;
chunk__26018_26026 = G__26038;
count__26019_26027 = G__26039;
i__26020_26028 = G__26040;
continue;
} else {
var req_26041 = cljs.core.first.call(null,seq__26017_26035__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26041,prov);


var G__26042 = cljs.core.next.call(null,seq__26017_26035__$1);
var G__26043 = null;
var G__26044 = (0);
var G__26045 = (0);
seq__26017_26025 = G__26042;
chunk__26018_26026 = G__26043;
count__26019_26027 = G__26044;
i__26020_26028 = G__26045;
continue;
}
} else {
}
}
break;
}


var G__26046 = seq__26005;
var G__26047 = chunk__26006;
var G__26048 = count__26007;
var G__26049 = (i__26008 + (1));
seq__26005 = G__26046;
chunk__26006 = G__26047;
count__26007 = G__26048;
i__26008 = G__26049;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26005);
if(temp__5735__auto__){
var seq__26005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26005__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26005__$1);
var G__26050 = cljs.core.chunk_rest.call(null,seq__26005__$1);
var G__26051 = c__4550__auto__;
var G__26052 = cljs.core.count.call(null,c__4550__auto__);
var G__26053 = (0);
seq__26005 = G__26050;
chunk__26006 = G__26051;
count__26007 = G__26052;
i__26008 = G__26053;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26005__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26021_26054 = cljs.core.seq.call(null,requires);
var chunk__26022_26055 = null;
var count__26023_26056 = (0);
var i__26024_26057 = (0);
while(true){
if((i__26024_26057 < count__26023_26056)){
var req_26058 = cljs.core._nth.call(null,chunk__26022_26055,i__26024_26057);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26058,prov);


var G__26059 = seq__26021_26054;
var G__26060 = chunk__26022_26055;
var G__26061 = count__26023_26056;
var G__26062 = (i__26024_26057 + (1));
seq__26021_26054 = G__26059;
chunk__26022_26055 = G__26060;
count__26023_26056 = G__26061;
i__26024_26057 = G__26062;
continue;
} else {
var temp__5735__auto___26063__$1 = cljs.core.seq.call(null,seq__26021_26054);
if(temp__5735__auto___26063__$1){
var seq__26021_26064__$1 = temp__5735__auto___26063__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26021_26064__$1)){
var c__4550__auto___26065 = cljs.core.chunk_first.call(null,seq__26021_26064__$1);
var G__26066 = cljs.core.chunk_rest.call(null,seq__26021_26064__$1);
var G__26067 = c__4550__auto___26065;
var G__26068 = cljs.core.count.call(null,c__4550__auto___26065);
var G__26069 = (0);
seq__26021_26054 = G__26066;
chunk__26022_26055 = G__26067;
count__26023_26056 = G__26068;
i__26024_26057 = G__26069;
continue;
} else {
var req_26070 = cljs.core.first.call(null,seq__26021_26064__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26070,prov);


var G__26071 = cljs.core.next.call(null,seq__26021_26064__$1);
var G__26072 = null;
var G__26073 = (0);
var G__26074 = (0);
seq__26021_26054 = G__26071;
chunk__26022_26055 = G__26072;
count__26023_26056 = G__26073;
i__26024_26057 = G__26074;
continue;
}
} else {
}
}
break;
}


var G__26075 = cljs.core.next.call(null,seq__26005__$1);
var G__26076 = null;
var G__26077 = (0);
var G__26078 = (0);
seq__26005 = G__26075;
chunk__26006 = G__26076;
count__26007 = G__26077;
i__26008 = G__26078;
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
var seq__26079_26083 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26080_26084 = null;
var count__26081_26085 = (0);
var i__26082_26086 = (0);
while(true){
if((i__26082_26086 < count__26081_26085)){
var ns_26087 = cljs.core._nth.call(null,chunk__26080_26084,i__26082_26086);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26087);


var G__26088 = seq__26079_26083;
var G__26089 = chunk__26080_26084;
var G__26090 = count__26081_26085;
var G__26091 = (i__26082_26086 + (1));
seq__26079_26083 = G__26088;
chunk__26080_26084 = G__26089;
count__26081_26085 = G__26090;
i__26082_26086 = G__26091;
continue;
} else {
var temp__5735__auto___26092 = cljs.core.seq.call(null,seq__26079_26083);
if(temp__5735__auto___26092){
var seq__26079_26093__$1 = temp__5735__auto___26092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26079_26093__$1)){
var c__4550__auto___26094 = cljs.core.chunk_first.call(null,seq__26079_26093__$1);
var G__26095 = cljs.core.chunk_rest.call(null,seq__26079_26093__$1);
var G__26096 = c__4550__auto___26094;
var G__26097 = cljs.core.count.call(null,c__4550__auto___26094);
var G__26098 = (0);
seq__26079_26083 = G__26095;
chunk__26080_26084 = G__26096;
count__26081_26085 = G__26097;
i__26082_26086 = G__26098;
continue;
} else {
var ns_26099 = cljs.core.first.call(null,seq__26079_26093__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26099);


var G__26100 = cljs.core.next.call(null,seq__26079_26093__$1);
var G__26101 = null;
var G__26102 = (0);
var G__26103 = (0);
seq__26079_26083 = G__26100;
chunk__26080_26084 = G__26101;
count__26081_26085 = G__26102;
i__26082_26086 = G__26103;
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
var G__26104__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26105__i = 0, G__26105__a = new Array(arguments.length -  0);
while (G__26105__i < G__26105__a.length) {G__26105__a[G__26105__i] = arguments[G__26105__i + 0]; ++G__26105__i;}
  args = new cljs.core.IndexedSeq(G__26105__a,0,null);
} 
return G__26104__delegate.call(this,args);};
G__26104.cljs$lang$maxFixedArity = 0;
G__26104.cljs$lang$applyTo = (function (arglist__26106){
var args = cljs.core.seq(arglist__26106);
return G__26104__delegate(args);
});
G__26104.cljs$core$IFn$_invoke$arity$variadic = G__26104__delegate;
return G__26104;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26107_SHARP_,p2__26108_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26107_SHARP_)),p2__26108_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26109_SHARP_,p2__26110_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26109_SHARP_),p2__26110_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26111 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26111.addCallback(((function (G__26111){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26111))
);

G__26111.addErrback(((function (G__26111){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26111))
);

return G__26111;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26112){if((e26112 instanceof Error)){
var e = e26112;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26112;

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
}catch (e26113){if((e26113 instanceof Error)){
var e = e26113;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26113;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26114 = cljs.core._EQ_;
var expr__26115 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26114.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26115))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26114.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26115))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26114.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26115))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26114,expr__26115){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26114,expr__26115))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26117,callback){
var map__26118 = p__26117;
var map__26118__$1 = (((((!((map__26118 == null))))?(((((map__26118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26118):map__26118);
var file_msg = map__26118__$1;
var request_url = cljs.core.get.call(null,map__26118__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26118,map__26118__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26118,map__26118__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__){
return (function (state_26156){
var state_val_26157 = (state_26156[(1)]);
if((state_val_26157 === (7))){
var inst_26152 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
var statearr_26158_26184 = state_26156__$1;
(statearr_26158_26184[(2)] = inst_26152);

(statearr_26158_26184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (1))){
var state_26156__$1 = state_26156;
var statearr_26159_26185 = state_26156__$1;
(statearr_26159_26185[(2)] = null);

(statearr_26159_26185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (4))){
var inst_26122 = (state_26156[(7)]);
var inst_26122__$1 = (state_26156[(2)]);
var state_26156__$1 = (function (){var statearr_26160 = state_26156;
(statearr_26160[(7)] = inst_26122__$1);

return statearr_26160;
})();
if(cljs.core.truth_(inst_26122__$1)){
var statearr_26161_26186 = state_26156__$1;
(statearr_26161_26186[(1)] = (5));

} else {
var statearr_26162_26187 = state_26156__$1;
(statearr_26162_26187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (15))){
var inst_26135 = (state_26156[(8)]);
var inst_26137 = (state_26156[(9)]);
var inst_26139 = inst_26137.call(null,inst_26135);
var state_26156__$1 = state_26156;
var statearr_26163_26188 = state_26156__$1;
(statearr_26163_26188[(2)] = inst_26139);

(statearr_26163_26188[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (13))){
var inst_26146 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
var statearr_26164_26189 = state_26156__$1;
(statearr_26164_26189[(2)] = inst_26146);

(statearr_26164_26189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (6))){
var state_26156__$1 = state_26156;
var statearr_26165_26190 = state_26156__$1;
(statearr_26165_26190[(2)] = null);

(statearr_26165_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (17))){
var inst_26143 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
var statearr_26166_26191 = state_26156__$1;
(statearr_26166_26191[(2)] = inst_26143);

(statearr_26166_26191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (3))){
var inst_26154 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26156__$1,inst_26154);
} else {
if((state_val_26157 === (12))){
var state_26156__$1 = state_26156;
var statearr_26167_26192 = state_26156__$1;
(statearr_26167_26192[(2)] = null);

(statearr_26167_26192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (2))){
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26157 === (11))){
var inst_26127 = (state_26156[(10)]);
var inst_26133 = figwheel.client.file_reloading.blocking_load.call(null,inst_26127);
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,(14),inst_26133);
} else {
if((state_val_26157 === (9))){
var inst_26127 = (state_26156[(10)]);
var state_26156__$1 = state_26156;
if(cljs.core.truth_(inst_26127)){
var statearr_26168_26193 = state_26156__$1;
(statearr_26168_26193[(1)] = (11));

} else {
var statearr_26169_26194 = state_26156__$1;
(statearr_26169_26194[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (5))){
var inst_26122 = (state_26156[(7)]);
var inst_26128 = (state_26156[(11)]);
var inst_26127 = cljs.core.nth.call(null,inst_26122,(0),null);
var inst_26128__$1 = cljs.core.nth.call(null,inst_26122,(1),null);
var state_26156__$1 = (function (){var statearr_26170 = state_26156;
(statearr_26170[(10)] = inst_26127);

(statearr_26170[(11)] = inst_26128__$1);

return statearr_26170;
})();
if(cljs.core.truth_(inst_26128__$1)){
var statearr_26171_26195 = state_26156__$1;
(statearr_26171_26195[(1)] = (8));

} else {
var statearr_26172_26196 = state_26156__$1;
(statearr_26172_26196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (14))){
var inst_26127 = (state_26156[(10)]);
var inst_26137 = (state_26156[(9)]);
var inst_26135 = (state_26156[(2)]);
var inst_26136 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26137__$1 = cljs.core.get.call(null,inst_26136,inst_26127);
var state_26156__$1 = (function (){var statearr_26173 = state_26156;
(statearr_26173[(8)] = inst_26135);

(statearr_26173[(9)] = inst_26137__$1);

return statearr_26173;
})();
if(cljs.core.truth_(inst_26137__$1)){
var statearr_26174_26197 = state_26156__$1;
(statearr_26174_26197[(1)] = (15));

} else {
var statearr_26175_26198 = state_26156__$1;
(statearr_26175_26198[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (16))){
var inst_26135 = (state_26156[(8)]);
var inst_26141 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26135);
var state_26156__$1 = state_26156;
var statearr_26176_26199 = state_26156__$1;
(statearr_26176_26199[(2)] = inst_26141);

(statearr_26176_26199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (10))){
var inst_26148 = (state_26156[(2)]);
var state_26156__$1 = (function (){var statearr_26177 = state_26156;
(statearr_26177[(12)] = inst_26148);

return statearr_26177;
})();
var statearr_26178_26200 = state_26156__$1;
(statearr_26178_26200[(2)] = null);

(statearr_26178_26200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (8))){
var inst_26128 = (state_26156[(11)]);
var inst_26130 = eval(inst_26128);
var state_26156__$1 = state_26156;
var statearr_26179_26201 = state_26156__$1;
(statearr_26179_26201[(2)] = inst_26130);

(statearr_26179_26201[(1)] = (10));


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
});})(c__22559__auto__))
;
return ((function (switch__22464__auto__,c__22559__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22465__auto__ = null;
var figwheel$client$file_reloading$state_machine__22465__auto____0 = (function (){
var statearr_26180 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26180[(0)] = figwheel$client$file_reloading$state_machine__22465__auto__);

(statearr_26180[(1)] = (1));

return statearr_26180;
});
var figwheel$client$file_reloading$state_machine__22465__auto____1 = (function (state_26156){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_26156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e26181){if((e26181 instanceof Object)){
var ex__22468__auto__ = e26181;
var statearr_26182_26202 = state_26156;
(statearr_26182_26202[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26203 = state_26156;
state_26156 = G__26203;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22465__auto__ = function(state_26156){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22465__auto____1.call(this,state_26156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22465__auto____0;
figwheel$client$file_reloading$state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22465__auto____1;
return figwheel$client$file_reloading$state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__))
})();
var state__22561__auto__ = (function (){var statearr_26183 = f__22560__auto__.call(null);
(statearr_26183[(6)] = c__22559__auto__);

return statearr_26183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__))
);

return c__22559__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26205 = arguments.length;
switch (G__26205) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26207,callback){
var map__26208 = p__26207;
var map__26208__$1 = (((((!((map__26208 == null))))?(((((map__26208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26208):map__26208);
var file_msg = map__26208__$1;
var namespace = cljs.core.get.call(null,map__26208__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26208,map__26208__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26208,map__26208__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26210){
var map__26211 = p__26210;
var map__26211__$1 = (((((!((map__26211 == null))))?(((((map__26211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26211):map__26211);
var file_msg = map__26211__$1;
var namespace = cljs.core.get.call(null,map__26211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26213){
var map__26214 = p__26213;
var map__26214__$1 = (((((!((map__26214 == null))))?(((((map__26214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26214):map__26214);
var file_msg = map__26214__$1;
var namespace = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26216,callback){
var map__26217 = p__26216;
var map__26217__$1 = (((((!((map__26217 == null))))?(((((map__26217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26217):map__26217);
var file_msg = map__26217__$1;
var request_url = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22559__auto___26267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto___26267,out){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto___26267,out){
return (function (state_26252){
var state_val_26253 = (state_26252[(1)]);
if((state_val_26253 === (1))){
var inst_26226 = cljs.core.seq.call(null,files);
var inst_26227 = cljs.core.first.call(null,inst_26226);
var inst_26228 = cljs.core.next.call(null,inst_26226);
var inst_26229 = files;
var state_26252__$1 = (function (){var statearr_26254 = state_26252;
(statearr_26254[(7)] = inst_26228);

(statearr_26254[(8)] = inst_26227);

(statearr_26254[(9)] = inst_26229);

return statearr_26254;
})();
var statearr_26255_26268 = state_26252__$1;
(statearr_26255_26268[(2)] = null);

(statearr_26255_26268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (2))){
var inst_26229 = (state_26252[(9)]);
var inst_26235 = (state_26252[(10)]);
var inst_26234 = cljs.core.seq.call(null,inst_26229);
var inst_26235__$1 = cljs.core.first.call(null,inst_26234);
var inst_26236 = cljs.core.next.call(null,inst_26234);
var inst_26237 = (inst_26235__$1 == null);
var inst_26238 = cljs.core.not.call(null,inst_26237);
var state_26252__$1 = (function (){var statearr_26256 = state_26252;
(statearr_26256[(11)] = inst_26236);

(statearr_26256[(10)] = inst_26235__$1);

return statearr_26256;
})();
if(inst_26238){
var statearr_26257_26269 = state_26252__$1;
(statearr_26257_26269[(1)] = (4));

} else {
var statearr_26258_26270 = state_26252__$1;
(statearr_26258_26270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (3))){
var inst_26250 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26252__$1,inst_26250);
} else {
if((state_val_26253 === (4))){
var inst_26235 = (state_26252[(10)]);
var inst_26240 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26235);
var state_26252__$1 = state_26252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26252__$1,(7),inst_26240);
} else {
if((state_val_26253 === (5))){
var inst_26246 = cljs.core.async.close_BANG_.call(null,out);
var state_26252__$1 = state_26252;
var statearr_26259_26271 = state_26252__$1;
(statearr_26259_26271[(2)] = inst_26246);

(statearr_26259_26271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (6))){
var inst_26248 = (state_26252[(2)]);
var state_26252__$1 = state_26252;
var statearr_26260_26272 = state_26252__$1;
(statearr_26260_26272[(2)] = inst_26248);

(statearr_26260_26272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26253 === (7))){
var inst_26236 = (state_26252[(11)]);
var inst_26242 = (state_26252[(2)]);
var inst_26243 = cljs.core.async.put_BANG_.call(null,out,inst_26242);
var inst_26229 = inst_26236;
var state_26252__$1 = (function (){var statearr_26261 = state_26252;
(statearr_26261[(9)] = inst_26229);

(statearr_26261[(12)] = inst_26243);

return statearr_26261;
})();
var statearr_26262_26273 = state_26252__$1;
(statearr_26262_26273[(2)] = null);

(statearr_26262_26273[(1)] = (2));


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
});})(c__22559__auto___26267,out))
;
return ((function (switch__22464__auto__,c__22559__auto___26267,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____0 = (function (){
var statearr_26263 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26263[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__);

(statearr_26263[(1)] = (1));

return statearr_26263;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____1 = (function (state_26252){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_26252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e26264){if((e26264 instanceof Object)){
var ex__22468__auto__ = e26264;
var statearr_26265_26274 = state_26252;
(statearr_26265_26274[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26275 = state_26252;
state_26252 = G__26275;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__ = function(state_26252){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____1.call(this,state_26252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto___26267,out))
})();
var state__22561__auto__ = (function (){var statearr_26266 = f__22560__auto__.call(null);
(statearr_26266[(6)] = c__22559__auto___26267);

return statearr_26266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto___26267,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26276,opts){
var map__26277 = p__26276;
var map__26277__$1 = (((((!((map__26277 == null))))?(((((map__26277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26277):map__26277);
var eval_body = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e26279){var e = e26279;
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
return (function (p1__26280_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26280_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26281){
var vec__26282 = p__26281;
var k = cljs.core.nth.call(null,vec__26282,(0),null);
var v = cljs.core.nth.call(null,vec__26282,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26285){
var vec__26286 = p__26285;
var k = cljs.core.nth.call(null,vec__26286,(0),null);
var v = cljs.core.nth.call(null,vec__26286,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26292,p__26293){
var map__26294 = p__26292;
var map__26294__$1 = (((((!((map__26294 == null))))?(((((map__26294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26294):map__26294);
var opts = map__26294__$1;
var before_jsload = cljs.core.get.call(null,map__26294__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26294__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26294__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26295 = p__26293;
var map__26295__$1 = (((((!((map__26295 == null))))?(((((map__26295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26295):map__26295);
var msg = map__26295__$1;
var files = cljs.core.get.call(null,map__26295__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26295__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26295__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22559__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22560__auto__ = (function (){var switch__22464__auto__ = ((function (c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26449){
var state_val_26450 = (state_26449[(1)]);
if((state_val_26450 === (7))){
var inst_26310 = (state_26449[(7)]);
var inst_26311 = (state_26449[(8)]);
var inst_26312 = (state_26449[(9)]);
var inst_26309 = (state_26449[(10)]);
var inst_26317 = cljs.core._nth.call(null,inst_26310,inst_26312);
var inst_26318 = figwheel.client.file_reloading.eval_body.call(null,inst_26317,opts);
var inst_26319 = (inst_26312 + (1));
var tmp26451 = inst_26310;
var tmp26452 = inst_26311;
var tmp26453 = inst_26309;
var inst_26309__$1 = tmp26453;
var inst_26310__$1 = tmp26451;
var inst_26311__$1 = tmp26452;
var inst_26312__$1 = inst_26319;
var state_26449__$1 = (function (){var statearr_26454 = state_26449;
(statearr_26454[(7)] = inst_26310__$1);

(statearr_26454[(11)] = inst_26318);

(statearr_26454[(8)] = inst_26311__$1);

(statearr_26454[(9)] = inst_26312__$1);

(statearr_26454[(10)] = inst_26309__$1);

return statearr_26454;
})();
var statearr_26455_26538 = state_26449__$1;
(statearr_26455_26538[(2)] = null);

(statearr_26455_26538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (20))){
var inst_26352 = (state_26449[(12)]);
var inst_26360 = figwheel.client.file_reloading.sort_files.call(null,inst_26352);
var state_26449__$1 = state_26449;
var statearr_26456_26539 = state_26449__$1;
(statearr_26456_26539[(2)] = inst_26360);

(statearr_26456_26539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (27))){
var state_26449__$1 = state_26449;
var statearr_26457_26540 = state_26449__$1;
(statearr_26457_26540[(2)] = null);

(statearr_26457_26540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (1))){
var inst_26301 = (state_26449[(13)]);
var inst_26298 = before_jsload.call(null,files);
var inst_26299 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26300 = (function (){return ((function (inst_26301,inst_26298,inst_26299,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26289_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26289_SHARP_);
});
;})(inst_26301,inst_26298,inst_26299,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26301__$1 = cljs.core.filter.call(null,inst_26300,files);
var inst_26302 = cljs.core.not_empty.call(null,inst_26301__$1);
var state_26449__$1 = (function (){var statearr_26458 = state_26449;
(statearr_26458[(13)] = inst_26301__$1);

(statearr_26458[(14)] = inst_26299);

(statearr_26458[(15)] = inst_26298);

return statearr_26458;
})();
if(cljs.core.truth_(inst_26302)){
var statearr_26459_26541 = state_26449__$1;
(statearr_26459_26541[(1)] = (2));

} else {
var statearr_26460_26542 = state_26449__$1;
(statearr_26460_26542[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (24))){
var state_26449__$1 = state_26449;
var statearr_26461_26543 = state_26449__$1;
(statearr_26461_26543[(2)] = null);

(statearr_26461_26543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (39))){
var inst_26402 = (state_26449[(16)]);
var state_26449__$1 = state_26449;
var statearr_26462_26544 = state_26449__$1;
(statearr_26462_26544[(2)] = inst_26402);

(statearr_26462_26544[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (46))){
var inst_26444 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26463_26545 = state_26449__$1;
(statearr_26463_26545[(2)] = inst_26444);

(statearr_26463_26545[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (4))){
var inst_26346 = (state_26449[(2)]);
var inst_26347 = cljs.core.List.EMPTY;
var inst_26348 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26347);
var inst_26349 = (function (){return ((function (inst_26346,inst_26347,inst_26348,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26290_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26290_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26290_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26290_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_26346,inst_26347,inst_26348,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26350 = cljs.core.filter.call(null,inst_26349,files);
var inst_26351 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26352 = cljs.core.concat.call(null,inst_26350,inst_26351);
var state_26449__$1 = (function (){var statearr_26464 = state_26449;
(statearr_26464[(17)] = inst_26346);

(statearr_26464[(18)] = inst_26348);

(statearr_26464[(12)] = inst_26352);

return statearr_26464;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26465_26546 = state_26449__$1;
(statearr_26465_26546[(1)] = (16));

} else {
var statearr_26466_26547 = state_26449__$1;
(statearr_26466_26547[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (15))){
var inst_26336 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26467_26548 = state_26449__$1;
(statearr_26467_26548[(2)] = inst_26336);

(statearr_26467_26548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (21))){
var inst_26362 = (state_26449[(19)]);
var inst_26362__$1 = (state_26449[(2)]);
var inst_26363 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26362__$1);
var state_26449__$1 = (function (){var statearr_26468 = state_26449;
(statearr_26468[(19)] = inst_26362__$1);

return statearr_26468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26449__$1,(22),inst_26363);
} else {
if((state_val_26450 === (31))){
var inst_26447 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26449__$1,inst_26447);
} else {
if((state_val_26450 === (32))){
var inst_26402 = (state_26449[(16)]);
var inst_26407 = inst_26402.cljs$lang$protocol_mask$partition0$;
var inst_26408 = (inst_26407 & (64));
var inst_26409 = inst_26402.cljs$core$ISeq$;
var inst_26410 = (cljs.core.PROTOCOL_SENTINEL === inst_26409);
var inst_26411 = ((inst_26408) || (inst_26410));
var state_26449__$1 = state_26449;
if(cljs.core.truth_(inst_26411)){
var statearr_26469_26549 = state_26449__$1;
(statearr_26469_26549[(1)] = (35));

} else {
var statearr_26470_26550 = state_26449__$1;
(statearr_26470_26550[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (40))){
var inst_26424 = (state_26449[(20)]);
var inst_26423 = (state_26449[(2)]);
var inst_26424__$1 = cljs.core.get.call(null,inst_26423,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26425 = cljs.core.get.call(null,inst_26423,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26426 = cljs.core.not_empty.call(null,inst_26424__$1);
var state_26449__$1 = (function (){var statearr_26471 = state_26449;
(statearr_26471[(20)] = inst_26424__$1);

(statearr_26471[(21)] = inst_26425);

return statearr_26471;
})();
if(cljs.core.truth_(inst_26426)){
var statearr_26472_26551 = state_26449__$1;
(statearr_26472_26551[(1)] = (41));

} else {
var statearr_26473_26552 = state_26449__$1;
(statearr_26473_26552[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (33))){
var state_26449__$1 = state_26449;
var statearr_26474_26553 = state_26449__$1;
(statearr_26474_26553[(2)] = false);

(statearr_26474_26553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (13))){
var inst_26322 = (state_26449[(22)]);
var inst_26326 = cljs.core.chunk_first.call(null,inst_26322);
var inst_26327 = cljs.core.chunk_rest.call(null,inst_26322);
var inst_26328 = cljs.core.count.call(null,inst_26326);
var inst_26309 = inst_26327;
var inst_26310 = inst_26326;
var inst_26311 = inst_26328;
var inst_26312 = (0);
var state_26449__$1 = (function (){var statearr_26475 = state_26449;
(statearr_26475[(7)] = inst_26310);

(statearr_26475[(8)] = inst_26311);

(statearr_26475[(9)] = inst_26312);

(statearr_26475[(10)] = inst_26309);

return statearr_26475;
})();
var statearr_26476_26554 = state_26449__$1;
(statearr_26476_26554[(2)] = null);

(statearr_26476_26554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (22))){
var inst_26366 = (state_26449[(23)]);
var inst_26362 = (state_26449[(19)]);
var inst_26370 = (state_26449[(24)]);
var inst_26365 = (state_26449[(25)]);
var inst_26365__$1 = (state_26449[(2)]);
var inst_26366__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26365__$1);
var inst_26367 = (function (){var all_files = inst_26362;
var res_SINGLEQUOTE_ = inst_26365__$1;
var res = inst_26366__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26366,inst_26362,inst_26370,inst_26365,inst_26365__$1,inst_26366__$1,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26291_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26291_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26366,inst_26362,inst_26370,inst_26365,inst_26365__$1,inst_26366__$1,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26368 = cljs.core.filter.call(null,inst_26367,inst_26365__$1);
var inst_26369 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26370__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26369);
var inst_26371 = cljs.core.not_empty.call(null,inst_26370__$1);
var state_26449__$1 = (function (){var statearr_26477 = state_26449;
(statearr_26477[(23)] = inst_26366__$1);

(statearr_26477[(26)] = inst_26368);

(statearr_26477[(24)] = inst_26370__$1);

(statearr_26477[(25)] = inst_26365__$1);

return statearr_26477;
})();
if(cljs.core.truth_(inst_26371)){
var statearr_26478_26555 = state_26449__$1;
(statearr_26478_26555[(1)] = (23));

} else {
var statearr_26479_26556 = state_26449__$1;
(statearr_26479_26556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (36))){
var state_26449__$1 = state_26449;
var statearr_26480_26557 = state_26449__$1;
(statearr_26480_26557[(2)] = false);

(statearr_26480_26557[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (41))){
var inst_26424 = (state_26449[(20)]);
var inst_26428 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26429 = cljs.core.map.call(null,inst_26428,inst_26424);
var inst_26430 = cljs.core.pr_str.call(null,inst_26429);
var inst_26431 = ["figwheel-no-load meta-data: ",inst_26430].join('');
var inst_26432 = figwheel.client.utils.log.call(null,inst_26431);
var state_26449__$1 = state_26449;
var statearr_26481_26558 = state_26449__$1;
(statearr_26481_26558[(2)] = inst_26432);

(statearr_26481_26558[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (43))){
var inst_26425 = (state_26449[(21)]);
var inst_26435 = (state_26449[(2)]);
var inst_26436 = cljs.core.not_empty.call(null,inst_26425);
var state_26449__$1 = (function (){var statearr_26482 = state_26449;
(statearr_26482[(27)] = inst_26435);

return statearr_26482;
})();
if(cljs.core.truth_(inst_26436)){
var statearr_26483_26559 = state_26449__$1;
(statearr_26483_26559[(1)] = (44));

} else {
var statearr_26484_26560 = state_26449__$1;
(statearr_26484_26560[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (29))){
var inst_26366 = (state_26449[(23)]);
var inst_26368 = (state_26449[(26)]);
var inst_26362 = (state_26449[(19)]);
var inst_26370 = (state_26449[(24)]);
var inst_26402 = (state_26449[(16)]);
var inst_26365 = (state_26449[(25)]);
var inst_26398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26401 = (function (){var all_files = inst_26362;
var res_SINGLEQUOTE_ = inst_26365;
var res = inst_26366;
var files_not_loaded = inst_26368;
var dependencies_that_loaded = inst_26370;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26402,inst_26365,inst_26398,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26400){
var map__26485 = p__26400;
var map__26485__$1 = (((((!((map__26485 == null))))?(((((map__26485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26485):map__26485);
var namespace = cljs.core.get.call(null,map__26485__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26402,inst_26365,inst_26398,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26402__$1 = cljs.core.group_by.call(null,inst_26401,inst_26368);
var inst_26404 = (inst_26402__$1 == null);
var inst_26405 = cljs.core.not.call(null,inst_26404);
var state_26449__$1 = (function (){var statearr_26487 = state_26449;
(statearr_26487[(28)] = inst_26398);

(statearr_26487[(16)] = inst_26402__$1);

return statearr_26487;
})();
if(inst_26405){
var statearr_26488_26561 = state_26449__$1;
(statearr_26488_26561[(1)] = (32));

} else {
var statearr_26489_26562 = state_26449__$1;
(statearr_26489_26562[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (44))){
var inst_26425 = (state_26449[(21)]);
var inst_26438 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26425);
var inst_26439 = cljs.core.pr_str.call(null,inst_26438);
var inst_26440 = ["not required: ",inst_26439].join('');
var inst_26441 = figwheel.client.utils.log.call(null,inst_26440);
var state_26449__$1 = state_26449;
var statearr_26490_26563 = state_26449__$1;
(statearr_26490_26563[(2)] = inst_26441);

(statearr_26490_26563[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (6))){
var inst_26343 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26491_26564 = state_26449__$1;
(statearr_26491_26564[(2)] = inst_26343);

(statearr_26491_26564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (28))){
var inst_26368 = (state_26449[(26)]);
var inst_26395 = (state_26449[(2)]);
var inst_26396 = cljs.core.not_empty.call(null,inst_26368);
var state_26449__$1 = (function (){var statearr_26492 = state_26449;
(statearr_26492[(29)] = inst_26395);

return statearr_26492;
})();
if(cljs.core.truth_(inst_26396)){
var statearr_26493_26565 = state_26449__$1;
(statearr_26493_26565[(1)] = (29));

} else {
var statearr_26494_26566 = state_26449__$1;
(statearr_26494_26566[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (25))){
var inst_26366 = (state_26449[(23)]);
var inst_26382 = (state_26449[(2)]);
var inst_26383 = cljs.core.not_empty.call(null,inst_26366);
var state_26449__$1 = (function (){var statearr_26495 = state_26449;
(statearr_26495[(30)] = inst_26382);

return statearr_26495;
})();
if(cljs.core.truth_(inst_26383)){
var statearr_26496_26567 = state_26449__$1;
(statearr_26496_26567[(1)] = (26));

} else {
var statearr_26497_26568 = state_26449__$1;
(statearr_26497_26568[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (34))){
var inst_26418 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
if(cljs.core.truth_(inst_26418)){
var statearr_26498_26569 = state_26449__$1;
(statearr_26498_26569[(1)] = (38));

} else {
var statearr_26499_26570 = state_26449__$1;
(statearr_26499_26570[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (17))){
var state_26449__$1 = state_26449;
var statearr_26500_26571 = state_26449__$1;
(statearr_26500_26571[(2)] = recompile_dependents);

(statearr_26500_26571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (3))){
var state_26449__$1 = state_26449;
var statearr_26501_26572 = state_26449__$1;
(statearr_26501_26572[(2)] = null);

(statearr_26501_26572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (12))){
var inst_26339 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26502_26573 = state_26449__$1;
(statearr_26502_26573[(2)] = inst_26339);

(statearr_26502_26573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (2))){
var inst_26301 = (state_26449[(13)]);
var inst_26308 = cljs.core.seq.call(null,inst_26301);
var inst_26309 = inst_26308;
var inst_26310 = null;
var inst_26311 = (0);
var inst_26312 = (0);
var state_26449__$1 = (function (){var statearr_26503 = state_26449;
(statearr_26503[(7)] = inst_26310);

(statearr_26503[(8)] = inst_26311);

(statearr_26503[(9)] = inst_26312);

(statearr_26503[(10)] = inst_26309);

return statearr_26503;
})();
var statearr_26504_26574 = state_26449__$1;
(statearr_26504_26574[(2)] = null);

(statearr_26504_26574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (23))){
var inst_26366 = (state_26449[(23)]);
var inst_26368 = (state_26449[(26)]);
var inst_26362 = (state_26449[(19)]);
var inst_26370 = (state_26449[(24)]);
var inst_26365 = (state_26449[(25)]);
var inst_26373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26375 = (function (){var all_files = inst_26362;
var res_SINGLEQUOTE_ = inst_26365;
var res = inst_26366;
var files_not_loaded = inst_26368;
var dependencies_that_loaded = inst_26370;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26365,inst_26373,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26374){
var map__26505 = p__26374;
var map__26505__$1 = (((((!((map__26505 == null))))?(((((map__26505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26505):map__26505);
var request_url = cljs.core.get.call(null,map__26505__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26365,inst_26373,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26376 = cljs.core.reverse.call(null,inst_26370);
var inst_26377 = cljs.core.map.call(null,inst_26375,inst_26376);
var inst_26378 = cljs.core.pr_str.call(null,inst_26377);
var inst_26379 = figwheel.client.utils.log.call(null,inst_26378);
var state_26449__$1 = (function (){var statearr_26507 = state_26449;
(statearr_26507[(31)] = inst_26373);

return statearr_26507;
})();
var statearr_26508_26575 = state_26449__$1;
(statearr_26508_26575[(2)] = inst_26379);

(statearr_26508_26575[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (35))){
var state_26449__$1 = state_26449;
var statearr_26509_26576 = state_26449__$1;
(statearr_26509_26576[(2)] = true);

(statearr_26509_26576[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (19))){
var inst_26352 = (state_26449[(12)]);
var inst_26358 = figwheel.client.file_reloading.expand_files.call(null,inst_26352);
var state_26449__$1 = state_26449;
var statearr_26510_26577 = state_26449__$1;
(statearr_26510_26577[(2)] = inst_26358);

(statearr_26510_26577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (11))){
var state_26449__$1 = state_26449;
var statearr_26511_26578 = state_26449__$1;
(statearr_26511_26578[(2)] = null);

(statearr_26511_26578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (9))){
var inst_26341 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26512_26579 = state_26449__$1;
(statearr_26512_26579[(2)] = inst_26341);

(statearr_26512_26579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (5))){
var inst_26311 = (state_26449[(8)]);
var inst_26312 = (state_26449[(9)]);
var inst_26314 = (inst_26312 < inst_26311);
var inst_26315 = inst_26314;
var state_26449__$1 = state_26449;
if(cljs.core.truth_(inst_26315)){
var statearr_26513_26580 = state_26449__$1;
(statearr_26513_26580[(1)] = (7));

} else {
var statearr_26514_26581 = state_26449__$1;
(statearr_26514_26581[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (14))){
var inst_26322 = (state_26449[(22)]);
var inst_26331 = cljs.core.first.call(null,inst_26322);
var inst_26332 = figwheel.client.file_reloading.eval_body.call(null,inst_26331,opts);
var inst_26333 = cljs.core.next.call(null,inst_26322);
var inst_26309 = inst_26333;
var inst_26310 = null;
var inst_26311 = (0);
var inst_26312 = (0);
var state_26449__$1 = (function (){var statearr_26515 = state_26449;
(statearr_26515[(7)] = inst_26310);

(statearr_26515[(8)] = inst_26311);

(statearr_26515[(9)] = inst_26312);

(statearr_26515[(10)] = inst_26309);

(statearr_26515[(32)] = inst_26332);

return statearr_26515;
})();
var statearr_26516_26582 = state_26449__$1;
(statearr_26516_26582[(2)] = null);

(statearr_26516_26582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (45))){
var state_26449__$1 = state_26449;
var statearr_26517_26583 = state_26449__$1;
(statearr_26517_26583[(2)] = null);

(statearr_26517_26583[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (26))){
var inst_26366 = (state_26449[(23)]);
var inst_26368 = (state_26449[(26)]);
var inst_26362 = (state_26449[(19)]);
var inst_26370 = (state_26449[(24)]);
var inst_26365 = (state_26449[(25)]);
var inst_26385 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26387 = (function (){var all_files = inst_26362;
var res_SINGLEQUOTE_ = inst_26365;
var res = inst_26366;
var files_not_loaded = inst_26368;
var dependencies_that_loaded = inst_26370;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26365,inst_26385,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26386){
var map__26518 = p__26386;
var map__26518__$1 = (((((!((map__26518 == null))))?(((((map__26518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26518):map__26518);
var namespace = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26365,inst_26385,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26388 = cljs.core.map.call(null,inst_26387,inst_26366);
var inst_26389 = cljs.core.pr_str.call(null,inst_26388);
var inst_26390 = figwheel.client.utils.log.call(null,inst_26389);
var inst_26391 = (function (){var all_files = inst_26362;
var res_SINGLEQUOTE_ = inst_26365;
var res = inst_26366;
var files_not_loaded = inst_26368;
var dependencies_that_loaded = inst_26370;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26365,inst_26385,inst_26387,inst_26388,inst_26389,inst_26390,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26366,inst_26368,inst_26362,inst_26370,inst_26365,inst_26385,inst_26387,inst_26388,inst_26389,inst_26390,state_val_26450,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26392 = setTimeout(inst_26391,(10));
var state_26449__$1 = (function (){var statearr_26520 = state_26449;
(statearr_26520[(33)] = inst_26390);

(statearr_26520[(34)] = inst_26385);

return statearr_26520;
})();
var statearr_26521_26584 = state_26449__$1;
(statearr_26521_26584[(2)] = inst_26392);

(statearr_26521_26584[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (16))){
var state_26449__$1 = state_26449;
var statearr_26522_26585 = state_26449__$1;
(statearr_26522_26585[(2)] = reload_dependents);

(statearr_26522_26585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (38))){
var inst_26402 = (state_26449[(16)]);
var inst_26420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26402);
var state_26449__$1 = state_26449;
var statearr_26523_26586 = state_26449__$1;
(statearr_26523_26586[(2)] = inst_26420);

(statearr_26523_26586[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (30))){
var state_26449__$1 = state_26449;
var statearr_26524_26587 = state_26449__$1;
(statearr_26524_26587[(2)] = null);

(statearr_26524_26587[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (10))){
var inst_26322 = (state_26449[(22)]);
var inst_26324 = cljs.core.chunked_seq_QMARK_.call(null,inst_26322);
var state_26449__$1 = state_26449;
if(inst_26324){
var statearr_26525_26588 = state_26449__$1;
(statearr_26525_26588[(1)] = (13));

} else {
var statearr_26526_26589 = state_26449__$1;
(statearr_26526_26589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (18))){
var inst_26356 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
if(cljs.core.truth_(inst_26356)){
var statearr_26527_26590 = state_26449__$1;
(statearr_26527_26590[(1)] = (19));

} else {
var statearr_26528_26591 = state_26449__$1;
(statearr_26528_26591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (42))){
var state_26449__$1 = state_26449;
var statearr_26529_26592 = state_26449__$1;
(statearr_26529_26592[(2)] = null);

(statearr_26529_26592[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (37))){
var inst_26415 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26530_26593 = state_26449__$1;
(statearr_26530_26593[(2)] = inst_26415);

(statearr_26530_26593[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (8))){
var inst_26322 = (state_26449[(22)]);
var inst_26309 = (state_26449[(10)]);
var inst_26322__$1 = cljs.core.seq.call(null,inst_26309);
var state_26449__$1 = (function (){var statearr_26531 = state_26449;
(statearr_26531[(22)] = inst_26322__$1);

return statearr_26531;
})();
if(inst_26322__$1){
var statearr_26532_26594 = state_26449__$1;
(statearr_26532_26594[(1)] = (10));

} else {
var statearr_26533_26595 = state_26449__$1;
(statearr_26533_26595[(1)] = (11));

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
});})(c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22464__auto__,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____0 = (function (){
var statearr_26534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26534[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__);

(statearr_26534[(1)] = (1));

return statearr_26534;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____1 = (function (state_26449){
while(true){
var ret_value__22466__auto__ = (function (){try{while(true){
var result__22467__auto__ = switch__22464__auto__.call(null,state_26449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22467__auto__;
}
break;
}
}catch (e26535){if((e26535 instanceof Object)){
var ex__22468__auto__ = e26535;
var statearr_26536_26596 = state_26449;
(statearr_26536_26596[(5)] = ex__22468__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26597 = state_26449;
state_26449 = G__26597;
continue;
} else {
return ret_value__22466__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__ = function(state_26449){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____1.call(this,state_26449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22465__auto__;
})()
;})(switch__22464__auto__,c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22561__auto__ = (function (){var statearr_26537 = f__22560__auto__.call(null);
(statearr_26537[(6)] = c__22559__auto__);

return statearr_26537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22561__auto__);
});})(c__22559__auto__,map__26294,map__26294__$1,opts,before_jsload,on_jsload,reload_dependents,map__26295,map__26295__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22559__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26600,link){
var map__26601 = p__26600;
var map__26601__$1 = (((((!((map__26601 == null))))?(((((map__26601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26601):map__26601);
var file = cljs.core.get.call(null,map__26601__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__26601,map__26601__$1,file){
return (function (p1__26598_SHARP_,p2__26599_SHARP_){
if(cljs.core._EQ_.call(null,p1__26598_SHARP_,p2__26599_SHARP_)){
return p1__26598_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__26601,map__26601__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26604){
var map__26605 = p__26604;
var map__26605__$1 = (((((!((map__26605 == null))))?(((((map__26605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26605):map__26605);
var match_length = cljs.core.get.call(null,map__26605__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26605__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26603_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26603_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26607_SHARP_,p2__26608_SHARP_){
return cljs.core.assoc.call(null,p1__26607_SHARP_,cljs.core.get.call(null,p2__26608_SHARP_,key),p2__26608_SHARP_);
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
var loaded_f_datas_26609 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26609);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26609);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26610,p__26611){
var map__26612 = p__26610;
var map__26612__$1 = (((((!((map__26612 == null))))?(((((map__26612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26612):map__26612);
var on_cssload = cljs.core.get.call(null,map__26612__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26613 = p__26611;
var map__26613__$1 = (((((!((map__26613 == null))))?(((((map__26613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26613):map__26613);
var files_msg = map__26613__$1;
var files = cljs.core.get.call(null,map__26613__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1594380798955
