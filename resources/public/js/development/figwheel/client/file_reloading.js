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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27414_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27414_SHARP_));
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
var seq__27415 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27416 = null;
var count__27417 = (0);
var i__27418 = (0);
while(true){
if((i__27418 < count__27417)){
var n = cljs.core._nth.call(null,chunk__27416,i__27418);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27419 = seq__27415;
var G__27420 = chunk__27416;
var G__27421 = count__27417;
var G__27422 = (i__27418 + (1));
seq__27415 = G__27419;
chunk__27416 = G__27420;
count__27417 = G__27421;
i__27418 = G__27422;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27415);
if(temp__5735__auto__){
var seq__27415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27415__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27415__$1);
var G__27423 = cljs.core.chunk_rest.call(null,seq__27415__$1);
var G__27424 = c__4550__auto__;
var G__27425 = cljs.core.count.call(null,c__4550__auto__);
var G__27426 = (0);
seq__27415 = G__27423;
chunk__27416 = G__27424;
count__27417 = G__27425;
i__27418 = G__27426;
continue;
} else {
var n = cljs.core.first.call(null,seq__27415__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27427 = cljs.core.next.call(null,seq__27415__$1);
var G__27428 = null;
var G__27429 = (0);
var G__27430 = (0);
seq__27415 = G__27427;
chunk__27416 = G__27428;
count__27417 = G__27429;
i__27418 = G__27430;
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
return cljs.core.some.call(null,(function (p__27431){
var vec__27432 = p__27431;
var _ = cljs.core.nth.call(null,vec__27432,(0),null);
var v = cljs.core.nth.call(null,vec__27432,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__27435){
var vec__27436 = p__27435;
var k = cljs.core.nth.call(null,vec__27436,(0),null);
var v = cljs.core.nth.call(null,vec__27436,(1),null);
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

var seq__27448_27456 = cljs.core.seq.call(null,deps);
var chunk__27449_27457 = null;
var count__27450_27458 = (0);
var i__27451_27459 = (0);
while(true){
if((i__27451_27459 < count__27450_27458)){
var dep_27460 = cljs.core._nth.call(null,chunk__27449_27457,i__27451_27459);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27460;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27460));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27460,(depth + (1)),state);
} else {
}


var G__27461 = seq__27448_27456;
var G__27462 = chunk__27449_27457;
var G__27463 = count__27450_27458;
var G__27464 = (i__27451_27459 + (1));
seq__27448_27456 = G__27461;
chunk__27449_27457 = G__27462;
count__27450_27458 = G__27463;
i__27451_27459 = G__27464;
continue;
} else {
var temp__5735__auto___27465 = cljs.core.seq.call(null,seq__27448_27456);
if(temp__5735__auto___27465){
var seq__27448_27466__$1 = temp__5735__auto___27465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27448_27466__$1)){
var c__4550__auto___27467 = cljs.core.chunk_first.call(null,seq__27448_27466__$1);
var G__27468 = cljs.core.chunk_rest.call(null,seq__27448_27466__$1);
var G__27469 = c__4550__auto___27467;
var G__27470 = cljs.core.count.call(null,c__4550__auto___27467);
var G__27471 = (0);
seq__27448_27456 = G__27468;
chunk__27449_27457 = G__27469;
count__27450_27458 = G__27470;
i__27451_27459 = G__27471;
continue;
} else {
var dep_27472 = cljs.core.first.call(null,seq__27448_27466__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_27472;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27472));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27472,(depth + (1)),state);
} else {
}


var G__27473 = cljs.core.next.call(null,seq__27448_27466__$1);
var G__27474 = null;
var G__27475 = (0);
var G__27476 = (0);
seq__27448_27456 = G__27473;
chunk__27449_27457 = G__27474;
count__27450_27458 = G__27475;
i__27451_27459 = G__27476;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27452){
var vec__27453 = p__27452;
var seq__27454 = cljs.core.seq.call(null,vec__27453);
var first__27455 = cljs.core.first.call(null,seq__27454);
var seq__27454__$1 = cljs.core.next.call(null,seq__27454);
var x = first__27455;
var xs = seq__27454__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27453,seq__27454,first__27455,seq__27454__$1,x,xs,get_deps__$1){
return (function (p1__27439_SHARP_){
return clojure.set.difference.call(null,p1__27439_SHARP_,x);
});})(vec__27453,seq__27454,first__27455,seq__27454__$1,x,xs,get_deps__$1))
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
var seq__27477 = cljs.core.seq.call(null,provides);
var chunk__27478 = null;
var count__27479 = (0);
var i__27480 = (0);
while(true){
if((i__27480 < count__27479)){
var prov = cljs.core._nth.call(null,chunk__27478,i__27480);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27489_27497 = cljs.core.seq.call(null,requires);
var chunk__27490_27498 = null;
var count__27491_27499 = (0);
var i__27492_27500 = (0);
while(true){
if((i__27492_27500 < count__27491_27499)){
var req_27501 = cljs.core._nth.call(null,chunk__27490_27498,i__27492_27500);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27501,prov);


var G__27502 = seq__27489_27497;
var G__27503 = chunk__27490_27498;
var G__27504 = count__27491_27499;
var G__27505 = (i__27492_27500 + (1));
seq__27489_27497 = G__27502;
chunk__27490_27498 = G__27503;
count__27491_27499 = G__27504;
i__27492_27500 = G__27505;
continue;
} else {
var temp__5735__auto___27506 = cljs.core.seq.call(null,seq__27489_27497);
if(temp__5735__auto___27506){
var seq__27489_27507__$1 = temp__5735__auto___27506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27489_27507__$1)){
var c__4550__auto___27508 = cljs.core.chunk_first.call(null,seq__27489_27507__$1);
var G__27509 = cljs.core.chunk_rest.call(null,seq__27489_27507__$1);
var G__27510 = c__4550__auto___27508;
var G__27511 = cljs.core.count.call(null,c__4550__auto___27508);
var G__27512 = (0);
seq__27489_27497 = G__27509;
chunk__27490_27498 = G__27510;
count__27491_27499 = G__27511;
i__27492_27500 = G__27512;
continue;
} else {
var req_27513 = cljs.core.first.call(null,seq__27489_27507__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27513,prov);


var G__27514 = cljs.core.next.call(null,seq__27489_27507__$1);
var G__27515 = null;
var G__27516 = (0);
var G__27517 = (0);
seq__27489_27497 = G__27514;
chunk__27490_27498 = G__27515;
count__27491_27499 = G__27516;
i__27492_27500 = G__27517;
continue;
}
} else {
}
}
break;
}


var G__27518 = seq__27477;
var G__27519 = chunk__27478;
var G__27520 = count__27479;
var G__27521 = (i__27480 + (1));
seq__27477 = G__27518;
chunk__27478 = G__27519;
count__27479 = G__27520;
i__27480 = G__27521;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__27477);
if(temp__5735__auto__){
var seq__27477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27477__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27477__$1);
var G__27522 = cljs.core.chunk_rest.call(null,seq__27477__$1);
var G__27523 = c__4550__auto__;
var G__27524 = cljs.core.count.call(null,c__4550__auto__);
var G__27525 = (0);
seq__27477 = G__27522;
chunk__27478 = G__27523;
count__27479 = G__27524;
i__27480 = G__27525;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27477__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27493_27526 = cljs.core.seq.call(null,requires);
var chunk__27494_27527 = null;
var count__27495_27528 = (0);
var i__27496_27529 = (0);
while(true){
if((i__27496_27529 < count__27495_27528)){
var req_27530 = cljs.core._nth.call(null,chunk__27494_27527,i__27496_27529);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27530,prov);


var G__27531 = seq__27493_27526;
var G__27532 = chunk__27494_27527;
var G__27533 = count__27495_27528;
var G__27534 = (i__27496_27529 + (1));
seq__27493_27526 = G__27531;
chunk__27494_27527 = G__27532;
count__27495_27528 = G__27533;
i__27496_27529 = G__27534;
continue;
} else {
var temp__5735__auto___27535__$1 = cljs.core.seq.call(null,seq__27493_27526);
if(temp__5735__auto___27535__$1){
var seq__27493_27536__$1 = temp__5735__auto___27535__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27493_27536__$1)){
var c__4550__auto___27537 = cljs.core.chunk_first.call(null,seq__27493_27536__$1);
var G__27538 = cljs.core.chunk_rest.call(null,seq__27493_27536__$1);
var G__27539 = c__4550__auto___27537;
var G__27540 = cljs.core.count.call(null,c__4550__auto___27537);
var G__27541 = (0);
seq__27493_27526 = G__27538;
chunk__27494_27527 = G__27539;
count__27495_27528 = G__27540;
i__27496_27529 = G__27541;
continue;
} else {
var req_27542 = cljs.core.first.call(null,seq__27493_27536__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27542,prov);


var G__27543 = cljs.core.next.call(null,seq__27493_27536__$1);
var G__27544 = null;
var G__27545 = (0);
var G__27546 = (0);
seq__27493_27526 = G__27543;
chunk__27494_27527 = G__27544;
count__27495_27528 = G__27545;
i__27496_27529 = G__27546;
continue;
}
} else {
}
}
break;
}


var G__27547 = cljs.core.next.call(null,seq__27477__$1);
var G__27548 = null;
var G__27549 = (0);
var G__27550 = (0);
seq__27477 = G__27547;
chunk__27478 = G__27548;
count__27479 = G__27549;
i__27480 = G__27550;
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
var seq__27551_27555 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27552_27556 = null;
var count__27553_27557 = (0);
var i__27554_27558 = (0);
while(true){
if((i__27554_27558 < count__27553_27557)){
var ns_27559 = cljs.core._nth.call(null,chunk__27552_27556,i__27554_27558);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27559);


var G__27560 = seq__27551_27555;
var G__27561 = chunk__27552_27556;
var G__27562 = count__27553_27557;
var G__27563 = (i__27554_27558 + (1));
seq__27551_27555 = G__27560;
chunk__27552_27556 = G__27561;
count__27553_27557 = G__27562;
i__27554_27558 = G__27563;
continue;
} else {
var temp__5735__auto___27564 = cljs.core.seq.call(null,seq__27551_27555);
if(temp__5735__auto___27564){
var seq__27551_27565__$1 = temp__5735__auto___27564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27551_27565__$1)){
var c__4550__auto___27566 = cljs.core.chunk_first.call(null,seq__27551_27565__$1);
var G__27567 = cljs.core.chunk_rest.call(null,seq__27551_27565__$1);
var G__27568 = c__4550__auto___27566;
var G__27569 = cljs.core.count.call(null,c__4550__auto___27566);
var G__27570 = (0);
seq__27551_27555 = G__27567;
chunk__27552_27556 = G__27568;
count__27553_27557 = G__27569;
i__27554_27558 = G__27570;
continue;
} else {
var ns_27571 = cljs.core.first.call(null,seq__27551_27565__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27571);


var G__27572 = cljs.core.next.call(null,seq__27551_27565__$1);
var G__27573 = null;
var G__27574 = (0);
var G__27575 = (0);
seq__27551_27555 = G__27572;
chunk__27552_27556 = G__27573;
count__27553_27557 = G__27574;
i__27554_27558 = G__27575;
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
var G__27576__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27577__i = 0, G__27577__a = new Array(arguments.length -  0);
while (G__27577__i < G__27577__a.length) {G__27577__a[G__27577__i] = arguments[G__27577__i + 0]; ++G__27577__i;}
  args = new cljs.core.IndexedSeq(G__27577__a,0,null);
} 
return G__27576__delegate.call(this,args);};
G__27576.cljs$lang$maxFixedArity = 0;
G__27576.cljs$lang$applyTo = (function (arglist__27578){
var args = cljs.core.seq(arglist__27578);
return G__27576__delegate(args);
});
G__27576.cljs$core$IFn$_invoke$arity$variadic = G__27576__delegate;
return G__27576;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27579_SHARP_,p2__27580_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27579_SHARP_)),p2__27580_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27581_SHARP_,p2__27582_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27581_SHARP_),p2__27582_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27583 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27583.addCallback(((function (G__27583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27583))
);

G__27583.addErrback(((function (G__27583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27583))
);

return G__27583;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27584){if((e27584 instanceof Error)){
var e = e27584;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27584;

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
}catch (e27585){if((e27585 instanceof Error)){
var e = e27585;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27585;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27586 = cljs.core._EQ_;
var expr__27587 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27586.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27587))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27586.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27587))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27586.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27587))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27586,expr__27587){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27586,expr__27587))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27589,callback){
var map__27590 = p__27589;
var map__27590__$1 = (((((!((map__27590 == null))))?(((((map__27590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27590):map__27590);
var file_msg = map__27590__$1;
var request_url = cljs.core.get.call(null,map__27590__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27590,map__27590__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27590,map__27590__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__){
return (function (state_27628){
var state_val_27629 = (state_27628[(1)]);
if((state_val_27629 === (7))){
var inst_27624 = (state_27628[(2)]);
var state_27628__$1 = state_27628;
var statearr_27630_27656 = state_27628__$1;
(statearr_27630_27656[(2)] = inst_27624);

(statearr_27630_27656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (1))){
var state_27628__$1 = state_27628;
var statearr_27631_27657 = state_27628__$1;
(statearr_27631_27657[(2)] = null);

(statearr_27631_27657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (4))){
var inst_27594 = (state_27628[(7)]);
var inst_27594__$1 = (state_27628[(2)]);
var state_27628__$1 = (function (){var statearr_27632 = state_27628;
(statearr_27632[(7)] = inst_27594__$1);

return statearr_27632;
})();
if(cljs.core.truth_(inst_27594__$1)){
var statearr_27633_27658 = state_27628__$1;
(statearr_27633_27658[(1)] = (5));

} else {
var statearr_27634_27659 = state_27628__$1;
(statearr_27634_27659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (15))){
var inst_27607 = (state_27628[(8)]);
var inst_27609 = (state_27628[(9)]);
var inst_27611 = inst_27609.call(null,inst_27607);
var state_27628__$1 = state_27628;
var statearr_27635_27660 = state_27628__$1;
(statearr_27635_27660[(2)] = inst_27611);

(statearr_27635_27660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (13))){
var inst_27618 = (state_27628[(2)]);
var state_27628__$1 = state_27628;
var statearr_27636_27661 = state_27628__$1;
(statearr_27636_27661[(2)] = inst_27618);

(statearr_27636_27661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (6))){
var state_27628__$1 = state_27628;
var statearr_27637_27662 = state_27628__$1;
(statearr_27637_27662[(2)] = null);

(statearr_27637_27662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (17))){
var inst_27615 = (state_27628[(2)]);
var state_27628__$1 = state_27628;
var statearr_27638_27663 = state_27628__$1;
(statearr_27638_27663[(2)] = inst_27615);

(statearr_27638_27663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (3))){
var inst_27626 = (state_27628[(2)]);
var state_27628__$1 = state_27628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27628__$1,inst_27626);
} else {
if((state_val_27629 === (12))){
var state_27628__$1 = state_27628;
var statearr_27639_27664 = state_27628__$1;
(statearr_27639_27664[(2)] = null);

(statearr_27639_27664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (2))){
var state_27628__$1 = state_27628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27628__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27629 === (11))){
var inst_27599 = (state_27628[(10)]);
var inst_27605 = figwheel.client.file_reloading.blocking_load.call(null,inst_27599);
var state_27628__$1 = state_27628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27628__$1,(14),inst_27605);
} else {
if((state_val_27629 === (9))){
var inst_27599 = (state_27628[(10)]);
var state_27628__$1 = state_27628;
if(cljs.core.truth_(inst_27599)){
var statearr_27640_27665 = state_27628__$1;
(statearr_27640_27665[(1)] = (11));

} else {
var statearr_27641_27666 = state_27628__$1;
(statearr_27641_27666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (5))){
var inst_27600 = (state_27628[(11)]);
var inst_27594 = (state_27628[(7)]);
var inst_27599 = cljs.core.nth.call(null,inst_27594,(0),null);
var inst_27600__$1 = cljs.core.nth.call(null,inst_27594,(1),null);
var state_27628__$1 = (function (){var statearr_27642 = state_27628;
(statearr_27642[(10)] = inst_27599);

(statearr_27642[(11)] = inst_27600__$1);

return statearr_27642;
})();
if(cljs.core.truth_(inst_27600__$1)){
var statearr_27643_27667 = state_27628__$1;
(statearr_27643_27667[(1)] = (8));

} else {
var statearr_27644_27668 = state_27628__$1;
(statearr_27644_27668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (14))){
var inst_27609 = (state_27628[(9)]);
var inst_27599 = (state_27628[(10)]);
var inst_27607 = (state_27628[(2)]);
var inst_27608 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27609__$1 = cljs.core.get.call(null,inst_27608,inst_27599);
var state_27628__$1 = (function (){var statearr_27645 = state_27628;
(statearr_27645[(8)] = inst_27607);

(statearr_27645[(9)] = inst_27609__$1);

return statearr_27645;
})();
if(cljs.core.truth_(inst_27609__$1)){
var statearr_27646_27669 = state_27628__$1;
(statearr_27646_27669[(1)] = (15));

} else {
var statearr_27647_27670 = state_27628__$1;
(statearr_27647_27670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (16))){
var inst_27607 = (state_27628[(8)]);
var inst_27613 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27607);
var state_27628__$1 = state_27628;
var statearr_27648_27671 = state_27628__$1;
(statearr_27648_27671[(2)] = inst_27613);

(statearr_27648_27671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (10))){
var inst_27620 = (state_27628[(2)]);
var state_27628__$1 = (function (){var statearr_27649 = state_27628;
(statearr_27649[(12)] = inst_27620);

return statearr_27649;
})();
var statearr_27650_27672 = state_27628__$1;
(statearr_27650_27672[(2)] = null);

(statearr_27650_27672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27629 === (8))){
var inst_27600 = (state_27628[(11)]);
var inst_27602 = eval(inst_27600);
var state_27628__$1 = state_27628;
var statearr_27651_27673 = state_27628__$1;
(statearr_27651_27673[(2)] = inst_27602);

(statearr_27651_27673[(1)] = (10));


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
});})(c__24031__auto__))
;
return ((function (switch__23936__auto__,c__24031__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23937__auto__ = null;
var figwheel$client$file_reloading$state_machine__23937__auto____0 = (function (){
var statearr_27652 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27652[(0)] = figwheel$client$file_reloading$state_machine__23937__auto__);

(statearr_27652[(1)] = (1));

return statearr_27652;
});
var figwheel$client$file_reloading$state_machine__23937__auto____1 = (function (state_27628){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_27628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e27653){if((e27653 instanceof Object)){
var ex__23940__auto__ = e27653;
var statearr_27654_27674 = state_27628;
(statearr_27654_27674[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27675 = state_27628;
state_27628 = G__27675;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23937__auto__ = function(state_27628){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23937__auto____1.call(this,state_27628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23937__auto____0;
figwheel$client$file_reloading$state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23937__auto____1;
return figwheel$client$file_reloading$state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__))
})();
var state__24033__auto__ = (function (){var statearr_27655 = f__24032__auto__.call(null);
(statearr_27655[(6)] = c__24031__auto__);

return statearr_27655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__))
);

return c__24031__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27677 = arguments.length;
switch (G__27677) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27679,callback){
var map__27680 = p__27679;
var map__27680__$1 = (((((!((map__27680 == null))))?(((((map__27680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27680):map__27680);
var file_msg = map__27680__$1;
var namespace = cljs.core.get.call(null,map__27680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27680,map__27680__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27680,map__27680__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27682){
var map__27683 = p__27682;
var map__27683__$1 = (((((!((map__27683 == null))))?(((((map__27683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27683):map__27683);
var file_msg = map__27683__$1;
var namespace = cljs.core.get.call(null,map__27683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27685){
var map__27686 = p__27685;
var map__27686__$1 = (((((!((map__27686 == null))))?(((((map__27686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27686):map__27686);
var file_msg = map__27686__$1;
var namespace = cljs.core.get.call(null,map__27686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27688,callback){
var map__27689 = p__27688;
var map__27689__$1 = (((((!((map__27689 == null))))?(((((map__27689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27689):map__27689);
var file_msg = map__27689__$1;
var request_url = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27689__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24031__auto___27739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto___27739,out){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto___27739,out){
return (function (state_27724){
var state_val_27725 = (state_27724[(1)]);
if((state_val_27725 === (1))){
var inst_27698 = cljs.core.seq.call(null,files);
var inst_27699 = cljs.core.first.call(null,inst_27698);
var inst_27700 = cljs.core.next.call(null,inst_27698);
var inst_27701 = files;
var state_27724__$1 = (function (){var statearr_27726 = state_27724;
(statearr_27726[(7)] = inst_27701);

(statearr_27726[(8)] = inst_27699);

(statearr_27726[(9)] = inst_27700);

return statearr_27726;
})();
var statearr_27727_27740 = state_27724__$1;
(statearr_27727_27740[(2)] = null);

(statearr_27727_27740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27725 === (2))){
var inst_27701 = (state_27724[(7)]);
var inst_27707 = (state_27724[(10)]);
var inst_27706 = cljs.core.seq.call(null,inst_27701);
var inst_27707__$1 = cljs.core.first.call(null,inst_27706);
var inst_27708 = cljs.core.next.call(null,inst_27706);
var inst_27709 = (inst_27707__$1 == null);
var inst_27710 = cljs.core.not.call(null,inst_27709);
var state_27724__$1 = (function (){var statearr_27728 = state_27724;
(statearr_27728[(11)] = inst_27708);

(statearr_27728[(10)] = inst_27707__$1);

return statearr_27728;
})();
if(inst_27710){
var statearr_27729_27741 = state_27724__$1;
(statearr_27729_27741[(1)] = (4));

} else {
var statearr_27730_27742 = state_27724__$1;
(statearr_27730_27742[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27725 === (3))){
var inst_27722 = (state_27724[(2)]);
var state_27724__$1 = state_27724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27724__$1,inst_27722);
} else {
if((state_val_27725 === (4))){
var inst_27707 = (state_27724[(10)]);
var inst_27712 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27707);
var state_27724__$1 = state_27724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27724__$1,(7),inst_27712);
} else {
if((state_val_27725 === (5))){
var inst_27718 = cljs.core.async.close_BANG_.call(null,out);
var state_27724__$1 = state_27724;
var statearr_27731_27743 = state_27724__$1;
(statearr_27731_27743[(2)] = inst_27718);

(statearr_27731_27743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27725 === (6))){
var inst_27720 = (state_27724[(2)]);
var state_27724__$1 = state_27724;
var statearr_27732_27744 = state_27724__$1;
(statearr_27732_27744[(2)] = inst_27720);

(statearr_27732_27744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27725 === (7))){
var inst_27708 = (state_27724[(11)]);
var inst_27714 = (state_27724[(2)]);
var inst_27715 = cljs.core.async.put_BANG_.call(null,out,inst_27714);
var inst_27701 = inst_27708;
var state_27724__$1 = (function (){var statearr_27733 = state_27724;
(statearr_27733[(7)] = inst_27701);

(statearr_27733[(12)] = inst_27715);

return statearr_27733;
})();
var statearr_27734_27745 = state_27724__$1;
(statearr_27734_27745[(2)] = null);

(statearr_27734_27745[(1)] = (2));


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
});})(c__24031__auto___27739,out))
;
return ((function (switch__23936__auto__,c__24031__auto___27739,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto____0 = (function (){
var statearr_27735 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27735[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto__);

(statearr_27735[(1)] = (1));

return statearr_27735;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto____1 = (function (state_27724){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_27724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e27736){if((e27736 instanceof Object)){
var ex__23940__auto__ = e27736;
var statearr_27737_27746 = state_27724;
(statearr_27737_27746[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27747 = state_27724;
state_27724 = G__27747;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto__ = function(state_27724){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto____1.call(this,state_27724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto___27739,out))
})();
var state__24033__auto__ = (function (){var statearr_27738 = f__24032__auto__.call(null);
(statearr_27738[(6)] = c__24031__auto___27739);

return statearr_27738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto___27739,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27748,opts){
var map__27749 = p__27748;
var map__27749__$1 = (((((!((map__27749 == null))))?(((((map__27749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27749):map__27749);
var eval_body = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27751){var e = e27751;
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
return (function (p1__27752_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27752_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27753){
var vec__27754 = p__27753;
var k = cljs.core.nth.call(null,vec__27754,(0),null);
var v = cljs.core.nth.call(null,vec__27754,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27757){
var vec__27758 = p__27757;
var k = cljs.core.nth.call(null,vec__27758,(0),null);
var v = cljs.core.nth.call(null,vec__27758,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27764,p__27765){
var map__27766 = p__27764;
var map__27766__$1 = (((((!((map__27766 == null))))?(((((map__27766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27766):map__27766);
var opts = map__27766__$1;
var before_jsload = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27766__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27767 = p__27765;
var map__27767__$1 = (((((!((map__27767 == null))))?(((((map__27767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27767):map__27767);
var msg = map__27767__$1;
var files = cljs.core.get.call(null,map__27767__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27767__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27767__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24031__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24032__auto__ = (function (){var switch__23936__auto__ = ((function (c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27921){
var state_val_27922 = (state_27921[(1)]);
if((state_val_27922 === (7))){
var inst_27781 = (state_27921[(7)]);
var inst_27784 = (state_27921[(8)]);
var inst_27782 = (state_27921[(9)]);
var inst_27783 = (state_27921[(10)]);
var inst_27789 = cljs.core._nth.call(null,inst_27782,inst_27784);
var inst_27790 = figwheel.client.file_reloading.eval_body.call(null,inst_27789,opts);
var inst_27791 = (inst_27784 + (1));
var tmp27923 = inst_27781;
var tmp27924 = inst_27782;
var tmp27925 = inst_27783;
var inst_27781__$1 = tmp27923;
var inst_27782__$1 = tmp27924;
var inst_27783__$1 = tmp27925;
var inst_27784__$1 = inst_27791;
var state_27921__$1 = (function (){var statearr_27926 = state_27921;
(statearr_27926[(7)] = inst_27781__$1);

(statearr_27926[(8)] = inst_27784__$1);

(statearr_27926[(9)] = inst_27782__$1);

(statearr_27926[(11)] = inst_27790);

(statearr_27926[(10)] = inst_27783__$1);

return statearr_27926;
})();
var statearr_27927_28010 = state_27921__$1;
(statearr_27927_28010[(2)] = null);

(statearr_27927_28010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (20))){
var inst_27824 = (state_27921[(12)]);
var inst_27832 = figwheel.client.file_reloading.sort_files.call(null,inst_27824);
var state_27921__$1 = state_27921;
var statearr_27928_28011 = state_27921__$1;
(statearr_27928_28011[(2)] = inst_27832);

(statearr_27928_28011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (27))){
var state_27921__$1 = state_27921;
var statearr_27929_28012 = state_27921__$1;
(statearr_27929_28012[(2)] = null);

(statearr_27929_28012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (1))){
var inst_27773 = (state_27921[(13)]);
var inst_27770 = before_jsload.call(null,files);
var inst_27771 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27772 = (function (){return ((function (inst_27773,inst_27770,inst_27771,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27761_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27761_SHARP_);
});
;})(inst_27773,inst_27770,inst_27771,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27773__$1 = cljs.core.filter.call(null,inst_27772,files);
var inst_27774 = cljs.core.not_empty.call(null,inst_27773__$1);
var state_27921__$1 = (function (){var statearr_27930 = state_27921;
(statearr_27930[(14)] = inst_27770);

(statearr_27930[(15)] = inst_27771);

(statearr_27930[(13)] = inst_27773__$1);

return statearr_27930;
})();
if(cljs.core.truth_(inst_27774)){
var statearr_27931_28013 = state_27921__$1;
(statearr_27931_28013[(1)] = (2));

} else {
var statearr_27932_28014 = state_27921__$1;
(statearr_27932_28014[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (24))){
var state_27921__$1 = state_27921;
var statearr_27933_28015 = state_27921__$1;
(statearr_27933_28015[(2)] = null);

(statearr_27933_28015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (39))){
var inst_27874 = (state_27921[(16)]);
var state_27921__$1 = state_27921;
var statearr_27934_28016 = state_27921__$1;
(statearr_27934_28016[(2)] = inst_27874);

(statearr_27934_28016[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (46))){
var inst_27916 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27935_28017 = state_27921__$1;
(statearr_27935_28017[(2)] = inst_27916);

(statearr_27935_28017[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (4))){
var inst_27818 = (state_27921[(2)]);
var inst_27819 = cljs.core.List.EMPTY;
var inst_27820 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27819);
var inst_27821 = (function (){return ((function (inst_27818,inst_27819,inst_27820,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27762_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27762_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27762_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27762_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_27818,inst_27819,inst_27820,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27822 = cljs.core.filter.call(null,inst_27821,files);
var inst_27823 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27824 = cljs.core.concat.call(null,inst_27822,inst_27823);
var state_27921__$1 = (function (){var statearr_27936 = state_27921;
(statearr_27936[(17)] = inst_27820);

(statearr_27936[(12)] = inst_27824);

(statearr_27936[(18)] = inst_27818);

return statearr_27936;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27937_28018 = state_27921__$1;
(statearr_27937_28018[(1)] = (16));

} else {
var statearr_27938_28019 = state_27921__$1;
(statearr_27938_28019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (15))){
var inst_27808 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27939_28020 = state_27921__$1;
(statearr_27939_28020[(2)] = inst_27808);

(statearr_27939_28020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (21))){
var inst_27834 = (state_27921[(19)]);
var inst_27834__$1 = (state_27921[(2)]);
var inst_27835 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27834__$1);
var state_27921__$1 = (function (){var statearr_27940 = state_27921;
(statearr_27940[(19)] = inst_27834__$1);

return statearr_27940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27921__$1,(22),inst_27835);
} else {
if((state_val_27922 === (31))){
var inst_27919 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27921__$1,inst_27919);
} else {
if((state_val_27922 === (32))){
var inst_27874 = (state_27921[(16)]);
var inst_27879 = inst_27874.cljs$lang$protocol_mask$partition0$;
var inst_27880 = (inst_27879 & (64));
var inst_27881 = inst_27874.cljs$core$ISeq$;
var inst_27882 = (cljs.core.PROTOCOL_SENTINEL === inst_27881);
var inst_27883 = ((inst_27880) || (inst_27882));
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27883)){
var statearr_27941_28021 = state_27921__$1;
(statearr_27941_28021[(1)] = (35));

} else {
var statearr_27942_28022 = state_27921__$1;
(statearr_27942_28022[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (40))){
var inst_27896 = (state_27921[(20)]);
var inst_27895 = (state_27921[(2)]);
var inst_27896__$1 = cljs.core.get.call(null,inst_27895,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27897 = cljs.core.get.call(null,inst_27895,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27898 = cljs.core.not_empty.call(null,inst_27896__$1);
var state_27921__$1 = (function (){var statearr_27943 = state_27921;
(statearr_27943[(20)] = inst_27896__$1);

(statearr_27943[(21)] = inst_27897);

return statearr_27943;
})();
if(cljs.core.truth_(inst_27898)){
var statearr_27944_28023 = state_27921__$1;
(statearr_27944_28023[(1)] = (41));

} else {
var statearr_27945_28024 = state_27921__$1;
(statearr_27945_28024[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (33))){
var state_27921__$1 = state_27921;
var statearr_27946_28025 = state_27921__$1;
(statearr_27946_28025[(2)] = false);

(statearr_27946_28025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (13))){
var inst_27794 = (state_27921[(22)]);
var inst_27798 = cljs.core.chunk_first.call(null,inst_27794);
var inst_27799 = cljs.core.chunk_rest.call(null,inst_27794);
var inst_27800 = cljs.core.count.call(null,inst_27798);
var inst_27781 = inst_27799;
var inst_27782 = inst_27798;
var inst_27783 = inst_27800;
var inst_27784 = (0);
var state_27921__$1 = (function (){var statearr_27947 = state_27921;
(statearr_27947[(7)] = inst_27781);

(statearr_27947[(8)] = inst_27784);

(statearr_27947[(9)] = inst_27782);

(statearr_27947[(10)] = inst_27783);

return statearr_27947;
})();
var statearr_27948_28026 = state_27921__$1;
(statearr_27948_28026[(2)] = null);

(statearr_27948_28026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (22))){
var inst_27838 = (state_27921[(23)]);
var inst_27834 = (state_27921[(19)]);
var inst_27837 = (state_27921[(24)]);
var inst_27842 = (state_27921[(25)]);
var inst_27837__$1 = (state_27921[(2)]);
var inst_27838__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27837__$1);
var inst_27839 = (function (){var all_files = inst_27834;
var res_SINGLEQUOTE_ = inst_27837__$1;
var res = inst_27838__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27838,inst_27834,inst_27837,inst_27842,inst_27837__$1,inst_27838__$1,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27763_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27763_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27838,inst_27834,inst_27837,inst_27842,inst_27837__$1,inst_27838__$1,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27840 = cljs.core.filter.call(null,inst_27839,inst_27837__$1);
var inst_27841 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27842__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27841);
var inst_27843 = cljs.core.not_empty.call(null,inst_27842__$1);
var state_27921__$1 = (function (){var statearr_27949 = state_27921;
(statearr_27949[(23)] = inst_27838__$1);

(statearr_27949[(24)] = inst_27837__$1);

(statearr_27949[(25)] = inst_27842__$1);

(statearr_27949[(26)] = inst_27840);

return statearr_27949;
})();
if(cljs.core.truth_(inst_27843)){
var statearr_27950_28027 = state_27921__$1;
(statearr_27950_28027[(1)] = (23));

} else {
var statearr_27951_28028 = state_27921__$1;
(statearr_27951_28028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (36))){
var state_27921__$1 = state_27921;
var statearr_27952_28029 = state_27921__$1;
(statearr_27952_28029[(2)] = false);

(statearr_27952_28029[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (41))){
var inst_27896 = (state_27921[(20)]);
var inst_27900 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27901 = cljs.core.map.call(null,inst_27900,inst_27896);
var inst_27902 = cljs.core.pr_str.call(null,inst_27901);
var inst_27903 = ["figwheel-no-load meta-data: ",inst_27902].join('');
var inst_27904 = figwheel.client.utils.log.call(null,inst_27903);
var state_27921__$1 = state_27921;
var statearr_27953_28030 = state_27921__$1;
(statearr_27953_28030[(2)] = inst_27904);

(statearr_27953_28030[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (43))){
var inst_27897 = (state_27921[(21)]);
var inst_27907 = (state_27921[(2)]);
var inst_27908 = cljs.core.not_empty.call(null,inst_27897);
var state_27921__$1 = (function (){var statearr_27954 = state_27921;
(statearr_27954[(27)] = inst_27907);

return statearr_27954;
})();
if(cljs.core.truth_(inst_27908)){
var statearr_27955_28031 = state_27921__$1;
(statearr_27955_28031[(1)] = (44));

} else {
var statearr_27956_28032 = state_27921__$1;
(statearr_27956_28032[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (29))){
var inst_27838 = (state_27921[(23)]);
var inst_27834 = (state_27921[(19)]);
var inst_27874 = (state_27921[(16)]);
var inst_27837 = (state_27921[(24)]);
var inst_27842 = (state_27921[(25)]);
var inst_27840 = (state_27921[(26)]);
var inst_27870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27873 = (function (){var all_files = inst_27834;
var res_SINGLEQUOTE_ = inst_27837;
var res = inst_27838;
var files_not_loaded = inst_27840;
var dependencies_that_loaded = inst_27842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27874,inst_27837,inst_27842,inst_27840,inst_27870,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27872){
var map__27957 = p__27872;
var map__27957__$1 = (((((!((map__27957 == null))))?(((((map__27957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27957):map__27957);
var namespace = cljs.core.get.call(null,map__27957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27874,inst_27837,inst_27842,inst_27840,inst_27870,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27874__$1 = cljs.core.group_by.call(null,inst_27873,inst_27840);
var inst_27876 = (inst_27874__$1 == null);
var inst_27877 = cljs.core.not.call(null,inst_27876);
var state_27921__$1 = (function (){var statearr_27959 = state_27921;
(statearr_27959[(16)] = inst_27874__$1);

(statearr_27959[(28)] = inst_27870);

return statearr_27959;
})();
if(inst_27877){
var statearr_27960_28033 = state_27921__$1;
(statearr_27960_28033[(1)] = (32));

} else {
var statearr_27961_28034 = state_27921__$1;
(statearr_27961_28034[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (44))){
var inst_27897 = (state_27921[(21)]);
var inst_27910 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27897);
var inst_27911 = cljs.core.pr_str.call(null,inst_27910);
var inst_27912 = ["not required: ",inst_27911].join('');
var inst_27913 = figwheel.client.utils.log.call(null,inst_27912);
var state_27921__$1 = state_27921;
var statearr_27962_28035 = state_27921__$1;
(statearr_27962_28035[(2)] = inst_27913);

(statearr_27962_28035[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (6))){
var inst_27815 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27963_28036 = state_27921__$1;
(statearr_27963_28036[(2)] = inst_27815);

(statearr_27963_28036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (28))){
var inst_27840 = (state_27921[(26)]);
var inst_27867 = (state_27921[(2)]);
var inst_27868 = cljs.core.not_empty.call(null,inst_27840);
var state_27921__$1 = (function (){var statearr_27964 = state_27921;
(statearr_27964[(29)] = inst_27867);

return statearr_27964;
})();
if(cljs.core.truth_(inst_27868)){
var statearr_27965_28037 = state_27921__$1;
(statearr_27965_28037[(1)] = (29));

} else {
var statearr_27966_28038 = state_27921__$1;
(statearr_27966_28038[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (25))){
var inst_27838 = (state_27921[(23)]);
var inst_27854 = (state_27921[(2)]);
var inst_27855 = cljs.core.not_empty.call(null,inst_27838);
var state_27921__$1 = (function (){var statearr_27967 = state_27921;
(statearr_27967[(30)] = inst_27854);

return statearr_27967;
})();
if(cljs.core.truth_(inst_27855)){
var statearr_27968_28039 = state_27921__$1;
(statearr_27968_28039[(1)] = (26));

} else {
var statearr_27969_28040 = state_27921__$1;
(statearr_27969_28040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (34))){
var inst_27890 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27890)){
var statearr_27970_28041 = state_27921__$1;
(statearr_27970_28041[(1)] = (38));

} else {
var statearr_27971_28042 = state_27921__$1;
(statearr_27971_28042[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (17))){
var state_27921__$1 = state_27921;
var statearr_27972_28043 = state_27921__$1;
(statearr_27972_28043[(2)] = recompile_dependents);

(statearr_27972_28043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (3))){
var state_27921__$1 = state_27921;
var statearr_27973_28044 = state_27921__$1;
(statearr_27973_28044[(2)] = null);

(statearr_27973_28044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (12))){
var inst_27811 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27974_28045 = state_27921__$1;
(statearr_27974_28045[(2)] = inst_27811);

(statearr_27974_28045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (2))){
var inst_27773 = (state_27921[(13)]);
var inst_27780 = cljs.core.seq.call(null,inst_27773);
var inst_27781 = inst_27780;
var inst_27782 = null;
var inst_27783 = (0);
var inst_27784 = (0);
var state_27921__$1 = (function (){var statearr_27975 = state_27921;
(statearr_27975[(7)] = inst_27781);

(statearr_27975[(8)] = inst_27784);

(statearr_27975[(9)] = inst_27782);

(statearr_27975[(10)] = inst_27783);

return statearr_27975;
})();
var statearr_27976_28046 = state_27921__$1;
(statearr_27976_28046[(2)] = null);

(statearr_27976_28046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (23))){
var inst_27838 = (state_27921[(23)]);
var inst_27834 = (state_27921[(19)]);
var inst_27837 = (state_27921[(24)]);
var inst_27842 = (state_27921[(25)]);
var inst_27840 = (state_27921[(26)]);
var inst_27845 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27847 = (function (){var all_files = inst_27834;
var res_SINGLEQUOTE_ = inst_27837;
var res = inst_27838;
var files_not_loaded = inst_27840;
var dependencies_that_loaded = inst_27842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27837,inst_27842,inst_27840,inst_27845,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27846){
var map__27977 = p__27846;
var map__27977__$1 = (((((!((map__27977 == null))))?(((((map__27977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27977):map__27977);
var request_url = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27837,inst_27842,inst_27840,inst_27845,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27848 = cljs.core.reverse.call(null,inst_27842);
var inst_27849 = cljs.core.map.call(null,inst_27847,inst_27848);
var inst_27850 = cljs.core.pr_str.call(null,inst_27849);
var inst_27851 = figwheel.client.utils.log.call(null,inst_27850);
var state_27921__$1 = (function (){var statearr_27979 = state_27921;
(statearr_27979[(31)] = inst_27845);

return statearr_27979;
})();
var statearr_27980_28047 = state_27921__$1;
(statearr_27980_28047[(2)] = inst_27851);

(statearr_27980_28047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (35))){
var state_27921__$1 = state_27921;
var statearr_27981_28048 = state_27921__$1;
(statearr_27981_28048[(2)] = true);

(statearr_27981_28048[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (19))){
var inst_27824 = (state_27921[(12)]);
var inst_27830 = figwheel.client.file_reloading.expand_files.call(null,inst_27824);
var state_27921__$1 = state_27921;
var statearr_27982_28049 = state_27921__$1;
(statearr_27982_28049[(2)] = inst_27830);

(statearr_27982_28049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (11))){
var state_27921__$1 = state_27921;
var statearr_27983_28050 = state_27921__$1;
(statearr_27983_28050[(2)] = null);

(statearr_27983_28050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (9))){
var inst_27813 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27984_28051 = state_27921__$1;
(statearr_27984_28051[(2)] = inst_27813);

(statearr_27984_28051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (5))){
var inst_27784 = (state_27921[(8)]);
var inst_27783 = (state_27921[(10)]);
var inst_27786 = (inst_27784 < inst_27783);
var inst_27787 = inst_27786;
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27787)){
var statearr_27985_28052 = state_27921__$1;
(statearr_27985_28052[(1)] = (7));

} else {
var statearr_27986_28053 = state_27921__$1;
(statearr_27986_28053[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (14))){
var inst_27794 = (state_27921[(22)]);
var inst_27803 = cljs.core.first.call(null,inst_27794);
var inst_27804 = figwheel.client.file_reloading.eval_body.call(null,inst_27803,opts);
var inst_27805 = cljs.core.next.call(null,inst_27794);
var inst_27781 = inst_27805;
var inst_27782 = null;
var inst_27783 = (0);
var inst_27784 = (0);
var state_27921__$1 = (function (){var statearr_27987 = state_27921;
(statearr_27987[(32)] = inst_27804);

(statearr_27987[(7)] = inst_27781);

(statearr_27987[(8)] = inst_27784);

(statearr_27987[(9)] = inst_27782);

(statearr_27987[(10)] = inst_27783);

return statearr_27987;
})();
var statearr_27988_28054 = state_27921__$1;
(statearr_27988_28054[(2)] = null);

(statearr_27988_28054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (45))){
var state_27921__$1 = state_27921;
var statearr_27989_28055 = state_27921__$1;
(statearr_27989_28055[(2)] = null);

(statearr_27989_28055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (26))){
var inst_27838 = (state_27921[(23)]);
var inst_27834 = (state_27921[(19)]);
var inst_27837 = (state_27921[(24)]);
var inst_27842 = (state_27921[(25)]);
var inst_27840 = (state_27921[(26)]);
var inst_27857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27859 = (function (){var all_files = inst_27834;
var res_SINGLEQUOTE_ = inst_27837;
var res = inst_27838;
var files_not_loaded = inst_27840;
var dependencies_that_loaded = inst_27842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27837,inst_27842,inst_27840,inst_27857,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27858){
var map__27990 = p__27858;
var map__27990__$1 = (((((!((map__27990 == null))))?(((((map__27990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27990):map__27990);
var namespace = cljs.core.get.call(null,map__27990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27837,inst_27842,inst_27840,inst_27857,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27860 = cljs.core.map.call(null,inst_27859,inst_27838);
var inst_27861 = cljs.core.pr_str.call(null,inst_27860);
var inst_27862 = figwheel.client.utils.log.call(null,inst_27861);
var inst_27863 = (function (){var all_files = inst_27834;
var res_SINGLEQUOTE_ = inst_27837;
var res = inst_27838;
var files_not_loaded = inst_27840;
var dependencies_that_loaded = inst_27842;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27837,inst_27842,inst_27840,inst_27857,inst_27859,inst_27860,inst_27861,inst_27862,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27838,inst_27834,inst_27837,inst_27842,inst_27840,inst_27857,inst_27859,inst_27860,inst_27861,inst_27862,state_val_27922,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27864 = setTimeout(inst_27863,(10));
var state_27921__$1 = (function (){var statearr_27992 = state_27921;
(statearr_27992[(33)] = inst_27857);

(statearr_27992[(34)] = inst_27862);

return statearr_27992;
})();
var statearr_27993_28056 = state_27921__$1;
(statearr_27993_28056[(2)] = inst_27864);

(statearr_27993_28056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (16))){
var state_27921__$1 = state_27921;
var statearr_27994_28057 = state_27921__$1;
(statearr_27994_28057[(2)] = reload_dependents);

(statearr_27994_28057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (38))){
var inst_27874 = (state_27921[(16)]);
var inst_27892 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27874);
var state_27921__$1 = state_27921;
var statearr_27995_28058 = state_27921__$1;
(statearr_27995_28058[(2)] = inst_27892);

(statearr_27995_28058[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (30))){
var state_27921__$1 = state_27921;
var statearr_27996_28059 = state_27921__$1;
(statearr_27996_28059[(2)] = null);

(statearr_27996_28059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (10))){
var inst_27794 = (state_27921[(22)]);
var inst_27796 = cljs.core.chunked_seq_QMARK_.call(null,inst_27794);
var state_27921__$1 = state_27921;
if(inst_27796){
var statearr_27997_28060 = state_27921__$1;
(statearr_27997_28060[(1)] = (13));

} else {
var statearr_27998_28061 = state_27921__$1;
(statearr_27998_28061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (18))){
var inst_27828 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27828)){
var statearr_27999_28062 = state_27921__$1;
(statearr_27999_28062[(1)] = (19));

} else {
var statearr_28000_28063 = state_27921__$1;
(statearr_28000_28063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (42))){
var state_27921__$1 = state_27921;
var statearr_28001_28064 = state_27921__$1;
(statearr_28001_28064[(2)] = null);

(statearr_28001_28064[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (37))){
var inst_27887 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_28002_28065 = state_27921__$1;
(statearr_28002_28065[(2)] = inst_27887);

(statearr_28002_28065[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (8))){
var inst_27781 = (state_27921[(7)]);
var inst_27794 = (state_27921[(22)]);
var inst_27794__$1 = cljs.core.seq.call(null,inst_27781);
var state_27921__$1 = (function (){var statearr_28003 = state_27921;
(statearr_28003[(22)] = inst_27794__$1);

return statearr_28003;
})();
if(inst_27794__$1){
var statearr_28004_28066 = state_27921__$1;
(statearr_28004_28066[(1)] = (10));

} else {
var statearr_28005_28067 = state_27921__$1;
(statearr_28005_28067[(1)] = (11));

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
});})(c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23936__auto__,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto____0 = (function (){
var statearr_28006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28006[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto__);

(statearr_28006[(1)] = (1));

return statearr_28006;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto____1 = (function (state_27921){
while(true){
var ret_value__23938__auto__ = (function (){try{while(true){
var result__23939__auto__ = switch__23936__auto__.call(null,state_27921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23939__auto__;
}
break;
}
}catch (e28007){if((e28007 instanceof Object)){
var ex__23940__auto__ = e28007;
var statearr_28008_28068 = state_27921;
(statearr_28008_28068[(5)] = ex__23940__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23938__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28069 = state_27921;
state_27921 = G__28069;
continue;
} else {
return ret_value__23938__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto__ = function(state_27921){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto____1.call(this,state_27921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23937__auto__;
})()
;})(switch__23936__auto__,c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24033__auto__ = (function (){var statearr_28009 = f__24032__auto__.call(null);
(statearr_28009[(6)] = c__24031__auto__);

return statearr_28009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24033__auto__);
});})(c__24031__auto__,map__27766,map__27766__$1,opts,before_jsload,on_jsload,reload_dependents,map__27767,map__27767__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24031__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28072,link){
var map__28073 = p__28072;
var map__28073__$1 = (((((!((map__28073 == null))))?(((((map__28073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28073):map__28073);
var file = cljs.core.get.call(null,map__28073__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__28073,map__28073__$1,file){
return (function (p1__28070_SHARP_,p2__28071_SHARP_){
if(cljs.core._EQ_.call(null,p1__28070_SHARP_,p2__28071_SHARP_)){
return p1__28070_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__28073,map__28073__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28076){
var map__28077 = p__28076;
var map__28077__$1 = (((((!((map__28077 == null))))?(((((map__28077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28077):map__28077);
var match_length = cljs.core.get.call(null,map__28077__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28077__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28075_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28075_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28079_SHARP_,p2__28080_SHARP_){
return cljs.core.assoc.call(null,p1__28079_SHARP_,cljs.core.get.call(null,p2__28080_SHARP_,key),p2__28080_SHARP_);
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
var loaded_f_datas_28081 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28081);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28081);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28082,p__28083){
var map__28084 = p__28082;
var map__28084__$1 = (((((!((map__28084 == null))))?(((((map__28084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28084):map__28084);
var on_cssload = cljs.core.get.call(null,map__28084__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28085 = p__28083;
var map__28085__$1 = (((((!((map__28085 == null))))?(((((map__28085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28085):map__28085);
var files_msg = map__28085__$1;
var files = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1594984088679
