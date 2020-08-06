// Compiled by ClojureScript 1.10.520 {}
goog.provide('space_wars.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quiltools.core');
goog.require('clojure.string');
goog.require('clojure.set');
space_wars.core.world_height = (500);
space_wars.core.world_width = (500);
space_wars.core.vu = (3);
space_wars.core.size_ufo = (40);
space_wars.core.size_ufo2 = (space_wars.core.size_ufo / (2));
space_wars.core.max_ufos = (7);
space_wars.core.wt = (40);
space_wars.core.wt2 = (space_wars.core.wt / (2));
space_wars.core.ht = (0.4 * space_wars.core.wt);
space_wars.core.yt = (space_wars.core.world_height - space_wars.core.ht);
space_wars.core.wm = (0.2 * space_wars.core.wt);
space_wars.core.max_missiles = (5);
space_wars.core.wb = (0.2 * space_wars.core.size_ufo);
space_wars.core.max_bombs = (1);
space_wars.core.top_margin = (24);
space_wars.core.frame_rate = (30);
space_wars.core.colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rich-black","rich-black",-1218026336),new cljs.core.Keyword(null,"electric-red","electric-red",-88027711),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"rose-garnet","rose-garnet",37248167),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"dogwood-rose","dogwood-rose",62745363),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975),new cljs.core.Keyword(null,"kiwi","kiwi",-823230888),new cljs.core.Keyword(null,"light-blue","light-blue",-931755143),new cljs.core.Keyword(null,"yellow-rose","yellow-rose",-1393460454),new cljs.core.Keyword(null,"guppie-green","guppie-green",-848884229),new cljs.core.Keyword(null,"light-yellow","light-yellow",1919187967)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(11),(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(5),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(149),(38)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(103),(103),(102)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(151),(2),(70)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(79),(175),(68)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(215),(25),(111)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(195),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(129),(236)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(23),(45)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(231),(86)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(232),(246)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(254),(240),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(204),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(253),(253),(151)], null)]);
space_wars.core.rand_n = (function space_wars$core$rand_n(a,b){

return (a + cljs.core.rand.call(null,(b - a)));
});
space_wars.core.rand_x = (function space_wars$core$rand_x(x){

if(quiltools.core.n_ticks_QMARK_.call(null,(3))){
var delta = (0.24 * space_wars.core.size_ufo);
return (space_wars.core.rand_n.call(null,(x - delta),(x + delta)) | (0));
} else {
return x;
}
});
space_wars.core.rand_coords = (function space_wars$core$rand_coords(n){

return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[space_wars.core.rand_n.call(null,(0),space_wars.core.world_width),space_wars.core.rand_n.call(null,(0),space_wars.core.world_height)],null));
})));
});
space_wars.core.draw_missiles_BANG_ = (function space_wars$core$draw_missiles_BANG_(missiles){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

var w_29896 = (0.4 * space_wars.core.size_ufo);
var missile_img_29897 = ((function (w_29896){
return (function (){
return quil.core.quad.call(null,0.5,0.2,(1),(1),0.5,0.7,(0),(1));
});})(w_29896))
;
var seq__29880_29898 = cljs.core.seq.call(null,missiles);
var chunk__29881_29899 = null;
var count__29882_29900 = (0);
var i__29883_29901 = (0);
while(true){
if((i__29883_29901 < count__29882_29900)){
var vec__29890_29902 = cljs.core._nth.call(null,chunk__29881_29899,i__29883_29901);
var x_29903 = cljs.core.nth.call(null,vec__29890_29902,(0),null);
var y_29904 = cljs.core.nth.call(null,vec__29890_29902,(1),null);
quiltools.core.at.call(null,x_29903,y_29904,quiltools.core.in$.call(null,w_29896,w_29896,missile_img_29897)).call(null);


var G__29905 = seq__29880_29898;
var G__29906 = chunk__29881_29899;
var G__29907 = count__29882_29900;
var G__29908 = (i__29883_29901 + (1));
seq__29880_29898 = G__29905;
chunk__29881_29899 = G__29906;
count__29882_29900 = G__29907;
i__29883_29901 = G__29908;
continue;
} else {
var temp__5735__auto___29909 = cljs.core.seq.call(null,seq__29880_29898);
if(temp__5735__auto___29909){
var seq__29880_29910__$1 = temp__5735__auto___29909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29880_29910__$1)){
var c__4550__auto___29911 = cljs.core.chunk_first.call(null,seq__29880_29910__$1);
var G__29912 = cljs.core.chunk_rest.call(null,seq__29880_29910__$1);
var G__29913 = c__4550__auto___29911;
var G__29914 = cljs.core.count.call(null,c__4550__auto___29911);
var G__29915 = (0);
seq__29880_29898 = G__29912;
chunk__29881_29899 = G__29913;
count__29882_29900 = G__29914;
i__29883_29901 = G__29915;
continue;
} else {
var vec__29893_29916 = cljs.core.first.call(null,seq__29880_29910__$1);
var x_29917 = cljs.core.nth.call(null,vec__29893_29916,(0),null);
var y_29918 = cljs.core.nth.call(null,vec__29893_29916,(1),null);
quiltools.core.at.call(null,x_29917,y_29918,quiltools.core.in$.call(null,w_29896,w_29896,missile_img_29897)).call(null);


var G__29919 = cljs.core.next.call(null,seq__29880_29910__$1);
var G__29920 = null;
var G__29921 = (0);
var G__29922 = (0);
seq__29880_29898 = G__29919;
chunk__29881_29899 = G__29920;
count__29882_29900 = G__29921;
i__29883_29901 = G__29922;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
space_wars.core.draw_bombs_BANG_ = (function space_wars$core$draw_bombs_BANG_(missiles){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

var w_29939 = (0.24 * space_wars.core.size_ufo);
var seq__29923_29940 = cljs.core.seq.call(null,missiles);
var chunk__29924_29941 = null;
var count__29925_29942 = (0);
var i__29926_29943 = (0);
while(true){
if((i__29926_29943 < count__29925_29942)){
var vec__29933_29944 = cljs.core._nth.call(null,chunk__29924_29941,i__29926_29943);
var x_29945 = cljs.core.nth.call(null,vec__29933_29944,(0),null);
var y_29946 = cljs.core.nth.call(null,vec__29933_29944,(1),null);
quil.core.ellipse.call(null,x_29945,y_29946,w_29939,w_29939);


var G__29947 = seq__29923_29940;
var G__29948 = chunk__29924_29941;
var G__29949 = count__29925_29942;
var G__29950 = (i__29926_29943 + (1));
seq__29923_29940 = G__29947;
chunk__29924_29941 = G__29948;
count__29925_29942 = G__29949;
i__29926_29943 = G__29950;
continue;
} else {
var temp__5735__auto___29951 = cljs.core.seq.call(null,seq__29923_29940);
if(temp__5735__auto___29951){
var seq__29923_29952__$1 = temp__5735__auto___29951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29923_29952__$1)){
var c__4550__auto___29953 = cljs.core.chunk_first.call(null,seq__29923_29952__$1);
var G__29954 = cljs.core.chunk_rest.call(null,seq__29923_29952__$1);
var G__29955 = c__4550__auto___29953;
var G__29956 = cljs.core.count.call(null,c__4550__auto___29953);
var G__29957 = (0);
seq__29923_29940 = G__29954;
chunk__29924_29941 = G__29955;
count__29925_29942 = G__29956;
i__29926_29943 = G__29957;
continue;
} else {
var vec__29936_29958 = cljs.core.first.call(null,seq__29923_29952__$1);
var x_29959 = cljs.core.nth.call(null,vec__29936_29958,(0),null);
var y_29960 = cljs.core.nth.call(null,vec__29936_29958,(1),null);
quil.core.ellipse.call(null,x_29959,y_29960,w_29939,w_29939);


var G__29961 = cljs.core.next.call(null,seq__29923_29952__$1);
var G__29962 = null;
var G__29963 = (0);
var G__29964 = (0);
seq__29923_29940 = G__29961;
chunk__29924_29941 = G__29962;
count__29925_29942 = G__29963;
i__29926_29943 = G__29964;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
space_wars.core.alien_img = (function space_wars$core$alien_img(){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

quil.core.no_stroke.call(null);

quil.core.rect.call(null,0.4,(0),0.2,0.1);

quil.core.rect.call(null,0.3,0.1,0.4,0.1);

quil.core.rect.call(null,0.2,0.2,0.6,0.1);

quil.core.rect.call(null,(0),0.3,(1),0.2);

quil.core.rect.call(null,0.3,0.5,0.1,0.1);

quil.core.rect.call(null,0.6,0.5,0.1,0.1);

quil.core.rect.call(null,0.2,0.6,0.1,0.1);

quil.core.rect.call(null,0.7,0.6,0.1,0.1);

quil.core.rect.call(null,0.3,0.7,0.1,0.1);

quil.core.rect.call(null,0.6,0.7,0.1,0.1);

quil.core.fill.call(null,(255));

quil.core.rect.call(null,0.3,0.3,0.1,0.1);

quil.core.rect.call(null,0.6,0.3,0.1,0.1);

return quil.core.pop_style.call(null);
});
space_wars.core.xdraw_bombs_BANG_ = (function space_wars$core$xdraw_bombs_BANG_(bombs){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

var w_29981 = (0.8 * space_wars.core.size_ufo);
var seq__29965_29982 = cljs.core.seq.call(null,bombs);
var chunk__29966_29983 = null;
var count__29967_29984 = (0);
var i__29968_29985 = (0);
while(true){
if((i__29968_29985 < count__29967_29984)){
var vec__29975_29986 = cljs.core._nth.call(null,chunk__29966_29983,i__29968_29985);
var x_29987 = cljs.core.nth.call(null,vec__29975_29986,(0),null);
var y_29988 = cljs.core.nth.call(null,vec__29975_29986,(1),null);
quiltools.core.at.call(null,x_29987,y_29988,quiltools.core.in$.call(null,w_29981,w_29981,space_wars.core.alien_img)).call(null);


var G__29989 = seq__29965_29982;
var G__29990 = chunk__29966_29983;
var G__29991 = count__29967_29984;
var G__29992 = (i__29968_29985 + (1));
seq__29965_29982 = G__29989;
chunk__29966_29983 = G__29990;
count__29967_29984 = G__29991;
i__29968_29985 = G__29992;
continue;
} else {
var temp__5735__auto___29993 = cljs.core.seq.call(null,seq__29965_29982);
if(temp__5735__auto___29993){
var seq__29965_29994__$1 = temp__5735__auto___29993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29965_29994__$1)){
var c__4550__auto___29995 = cljs.core.chunk_first.call(null,seq__29965_29994__$1);
var G__29996 = cljs.core.chunk_rest.call(null,seq__29965_29994__$1);
var G__29997 = c__4550__auto___29995;
var G__29998 = cljs.core.count.call(null,c__4550__auto___29995);
var G__29999 = (0);
seq__29965_29982 = G__29996;
chunk__29966_29983 = G__29997;
count__29967_29984 = G__29998;
i__29968_29985 = G__29999;
continue;
} else {
var vec__29978_30000 = cljs.core.first.call(null,seq__29965_29994__$1);
var x_30001 = cljs.core.nth.call(null,vec__29978_30000,(0),null);
var y_30002 = cljs.core.nth.call(null,vec__29978_30000,(1),null);
quiltools.core.at.call(null,x_30001,y_30002,quiltools.core.in$.call(null,w_29981,w_29981,space_wars.core.alien_img)).call(null);


var G__30003 = cljs.core.next.call(null,seq__29965_29994__$1);
var G__30004 = null;
var G__30005 = (0);
var G__30006 = (0);
seq__29965_29982 = G__30003;
chunk__29966_29983 = G__30004;
count__29967_29984 = G__30005;
i__29968_29985 = G__30006;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
space_wars.core.munition_img = (function space_wars$core$munition_img(n_missiles){

return (function (){
quil.core.push_style.call(null);

quil.core.stroke.call(null,(120));

var spacing_30011 = 0.04;
var w_30012 = (((1) - (spacing_30011 * (space_wars.core.max_missiles - (1)))) / space_wars.core.max_missiles);
var seq__30007_30013 = cljs.core.seq.call(null,cljs.core.range.call(null,space_wars.core.max_missiles));
var chunk__30008_30014 = null;
var count__30009_30015 = (0);
var i__30010_30016 = (0);
while(true){
if((i__30010_30016 < count__30009_30015)){
var n_30017 = cljs.core._nth.call(null,chunk__30008_30014,i__30010_30016);
if((n_30017 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));
}

quil.core.ellipse.call(null,((w_30012 / (2)) + (n_30017 * (w_30012 + spacing_30011))),(0),w_30012,w_30012);


var G__30018 = seq__30007_30013;
var G__30019 = chunk__30008_30014;
var G__30020 = count__30009_30015;
var G__30021 = (i__30010_30016 + (1));
seq__30007_30013 = G__30018;
chunk__30008_30014 = G__30019;
count__30009_30015 = G__30020;
i__30010_30016 = G__30021;
continue;
} else {
var temp__5735__auto___30022 = cljs.core.seq.call(null,seq__30007_30013);
if(temp__5735__auto___30022){
var seq__30007_30023__$1 = temp__5735__auto___30022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30007_30023__$1)){
var c__4550__auto___30024 = cljs.core.chunk_first.call(null,seq__30007_30023__$1);
var G__30025 = cljs.core.chunk_rest.call(null,seq__30007_30023__$1);
var G__30026 = c__4550__auto___30024;
var G__30027 = cljs.core.count.call(null,c__4550__auto___30024);
var G__30028 = (0);
seq__30007_30013 = G__30025;
chunk__30008_30014 = G__30026;
count__30009_30015 = G__30027;
i__30010_30016 = G__30028;
continue;
} else {
var n_30029 = cljs.core.first.call(null,seq__30007_30023__$1);
if((n_30029 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));
}

quil.core.ellipse.call(null,((w_30012 / (2)) + (n_30029 * (w_30012 + spacing_30011))),(0),w_30012,w_30012);


var G__30030 = cljs.core.next.call(null,seq__30007_30023__$1);
var G__30031 = null;
var G__30032 = (0);
var G__30033 = (0);
seq__30007_30013 = G__30030;
chunk__30008_30014 = G__30031;
count__30009_30015 = G__30032;
i__30010_30016 = G__30033;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
});
space_wars.core.draw_munitions_BANG_ = (function space_wars$core$draw_munitions_BANG_(n_missiles){

var w = ((12) * space_wars.core.max_missiles);
var x0 = (space_wars.core.world_width - (1.1 * w));
return quiltools.core.at.call(null,x0,space_wars.core.top_margin,quiltools.core.in$.call(null,w,w,space_wars.core.munition_img.call(null,n_missiles))).call(null);
});
space_wars.core.ufo_img = (function space_wars$core$ufo_img(color){
return (function (){
cljs.core.apply.call(null,quil.core.fill,color.call(null,space_wars.core.colors));

quil.core.arc.call(null,0.5,0.2,0.6,0.4,quil.core.PI,quil.core.TWO_PI,new cljs.core.Keyword(null,"pie","pie",1530441672));

return quil.core.ellipse.call(null,0.5,0.25,(1),0.2);
});
});
space_wars.core.draw_ufos_BANG_ = (function space_wars$core$draw_ufos_BANG_(ufos){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

quil.core.stroke_weight.call(null,(1));

var seq__30034_30050 = cljs.core.seq.call(null,ufos);
var chunk__30035_30051 = null;
var count__30036_30052 = (0);
var i__30037_30053 = (0);
while(true){
if((i__30037_30053 < count__30036_30052)){
var vec__30044_30054 = cljs.core._nth.call(null,chunk__30035_30051,i__30037_30053);
var xu_30055 = cljs.core.nth.call(null,vec__30044_30054,(0),null);
var yu_30056 = cljs.core.nth.call(null,vec__30044_30054,(1),null);
quiltools.core.at.call(null,xu_30055,yu_30056,quiltools.core.in$.call(null,space_wars.core.size_ufo,space_wars.core.size_ufo,space_wars.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__30057 = seq__30034_30050;
var G__30058 = chunk__30035_30051;
var G__30059 = count__30036_30052;
var G__30060 = (i__30037_30053 + (1));
seq__30034_30050 = G__30057;
chunk__30035_30051 = G__30058;
count__30036_30052 = G__30059;
i__30037_30053 = G__30060;
continue;
} else {
var temp__5735__auto___30061 = cljs.core.seq.call(null,seq__30034_30050);
if(temp__5735__auto___30061){
var seq__30034_30062__$1 = temp__5735__auto___30061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30034_30062__$1)){
var c__4550__auto___30063 = cljs.core.chunk_first.call(null,seq__30034_30062__$1);
var G__30064 = cljs.core.chunk_rest.call(null,seq__30034_30062__$1);
var G__30065 = c__4550__auto___30063;
var G__30066 = cljs.core.count.call(null,c__4550__auto___30063);
var G__30067 = (0);
seq__30034_30050 = G__30064;
chunk__30035_30051 = G__30065;
count__30036_30052 = G__30066;
i__30037_30053 = G__30067;
continue;
} else {
var vec__30047_30068 = cljs.core.first.call(null,seq__30034_30062__$1);
var xu_30069 = cljs.core.nth.call(null,vec__30047_30068,(0),null);
var yu_30070 = cljs.core.nth.call(null,vec__30047_30068,(1),null);
quiltools.core.at.call(null,xu_30069,yu_30070,quiltools.core.in$.call(null,space_wars.core.size_ufo,space_wars.core.size_ufo,space_wars.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__30071 = cljs.core.next.call(null,seq__30034_30062__$1);
var G__30072 = null;
var G__30073 = (0);
var G__30074 = (0);
seq__30034_30050 = G__30071;
chunk__30035_30051 = G__30072;
count__30036_30052 = G__30073;
i__30037_30053 = G__30074;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
space_wars.core.draw_tank_BANG_ = (function space_wars$core$draw_tank_BANG_(tank){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),space_wars.core.yt,space_wars.core.wt,space_wars.core.ht);

return quil.core.pop_style.call(null);
});
space_wars.core.draw_menu_BANG_ = (function space_wars$core$draw_menu_BANG_(score,lifes){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var lifes_y_30075 = ((2) * space_wars.core.top_margin);
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),space_wars.core.top_margin,space_wars.core.top_margin);

quil.core.text.call(null,["lifes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lifes)].join(''),space_wars.core.top_margin,lifes_y_30075);

return quil.core.pop_style.call(null);
});
space_wars.core.draw_score_BANG_ = (function space_wars$core$draw_score_BANG_(score){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var txt_pos_30076 = space_wars.core.top_margin;
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),txt_pos_30076,txt_pos_30076);

return quil.core.pop_style.call(null);
});
space_wars.core.flash_ufo_BANG_ = (function space_wars$core$flash_ufo_BANG_(x,y,counter){
quil.core.push_style.call(null);

var blink_time_30077 = (4);
var colors_30078 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yellow-rose","yellow-rose",-1393460454),new cljs.core.Keyword(null,"electric-red","electric-red",-88027711),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"rose-garnet","rose-garnet",37248167)], null);
var phase_30079 = cljs.core.mod.call(null,cljs.core.quot.call(null,counter,blink_time_30077),cljs.core.count.call(null,colors_30078));
var next_color_30080 = colors_30078.call(null,phase_30079);
quiltools.core.at.call(null,x,y,quiltools.core.in$.call(null,space_wars.core.size_ufo,space_wars.core.size_ufo,space_wars.core.ufo_img.call(null,next_color_30080))).call(null);

return quil.core.pop_style.call(null);
});
space_wars.core.descend_ufo_BANG_ = (function space_wars$core$descend_ufo_BANG_(x,y,counter){
var dy = cljs.core.mod.call(null,counter,(30));
return space_wars.core.flash_ufo_BANG_.call(null,x,(y + dy),counter);
});
space_wars.core.draw_explosion_BANG_ = (function space_wars$core$draw_explosion_BANG_(p__30081){
var map__30082 = p__30081;
var map__30082__$1 = (((((!((map__30082 == null))))?(((((map__30082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30082):map__30082);
var hit = map__30082__$1;
var x = cljs.core.get.call(null,map__30082__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__30082__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var counter = cljs.core.get.call(null,map__30082__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
if(((((0) <= counter)) && ((counter <= (30))))){
return space_wars.core.flash_ufo_BANG_.call(null,x,y,counter);
} else {
if(((((21) <= counter)) && ((counter <= (60))))){
return space_wars.core.descend_ufo_BANG_.call(null,x,y,counter);
} else {
return null;
}
}
});
space_wars.core.draw_stars_BANG_ = (function space_wars$core$draw_stars_BANG_(star_coords){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var star_size_30100 = (space_wars.core.world_width / (160));
var seq__30084_30101 = cljs.core.seq.call(null,star_coords);
var chunk__30085_30102 = null;
var count__30086_30103 = (0);
var i__30087_30104 = (0);
while(true){
if((i__30087_30104 < count__30086_30103)){
var vec__30094_30105 = cljs.core._nth.call(null,chunk__30085_30102,i__30087_30104);
var x_30106 = cljs.core.nth.call(null,vec__30094_30105,(0),null);
var y_30107 = cljs.core.nth.call(null,vec__30094_30105,(1),null);
quil.core.ellipse.call(null,x_30106,y_30107,star_size_30100,star_size_30100);


var G__30108 = seq__30084_30101;
var G__30109 = chunk__30085_30102;
var G__30110 = count__30086_30103;
var G__30111 = (i__30087_30104 + (1));
seq__30084_30101 = G__30108;
chunk__30085_30102 = G__30109;
count__30086_30103 = G__30110;
i__30087_30104 = G__30111;
continue;
} else {
var temp__5735__auto___30112 = cljs.core.seq.call(null,seq__30084_30101);
if(temp__5735__auto___30112){
var seq__30084_30113__$1 = temp__5735__auto___30112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30084_30113__$1)){
var c__4550__auto___30114 = cljs.core.chunk_first.call(null,seq__30084_30113__$1);
var G__30115 = cljs.core.chunk_rest.call(null,seq__30084_30113__$1);
var G__30116 = c__4550__auto___30114;
var G__30117 = cljs.core.count.call(null,c__4550__auto___30114);
var G__30118 = (0);
seq__30084_30101 = G__30115;
chunk__30085_30102 = G__30116;
count__30086_30103 = G__30117;
i__30087_30104 = G__30118;
continue;
} else {
var vec__30097_30119 = cljs.core.first.call(null,seq__30084_30113__$1);
var x_30120 = cljs.core.nth.call(null,vec__30097_30119,(0),null);
var y_30121 = cljs.core.nth.call(null,vec__30097_30119,(1),null);
quil.core.ellipse.call(null,x_30120,y_30121,star_size_30100,star_size_30100);


var G__30122 = cljs.core.next.call(null,seq__30084_30113__$1);
var G__30123 = null;
var G__30124 = (0);
var G__30125 = (0);
seq__30084_30101 = G__30122;
chunk__30085_30102 = G__30123;
count__30086_30103 = G__30124;
i__30087_30104 = G__30125;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
space_wars.core.game_over_img = (function space_wars$core$game_over_img(){
quil.core.push_style.call(null);

quil.core.fill.call(null,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

cljs.core.apply.call(null,quil.core.stroke,new cljs.core.Keyword(null,"guppie-green","guppie-green",-848884229).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

quil.core.rect.call(null,(0),(0),(1),(1));

quil.core.stroke.call(null,(255));

quil.core.fill.call(null,(255));

quil.core.text_size.call(null,0.2);

quil.core.text.call(null,"GAME OVER",0.16,0.3);

quil.core.text_size.call(null,0.08);

quil.core.fill.call(null,(255));

quil.core.stroke.call(null,(255));

quil.core.text.call(null,"Press q to exit",0.25,0.625);

quil.core.text.call(null,"Press any key to play again",0.08,0.5);

return quil.core.pop_style.call(null);
});
space_wars.core.draw_game_over_BANG_ = (function space_wars$core$draw_game_over_BANG_(){
return quiltools.core.at.call(null,(0.25 * space_wars.core.world_width),(0.25 * space_wars.core.world_height),quiltools.core.in$.call(null,(0.5 * space_wars.core.world_width),(0.375 * space_wars.core.world_height),space_wars.core.game_over_img)).call(null);
});
space_wars.core.escaped = (function space_wars$core$escaped(s){

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p__30126){
var vec__30127 = p__30126;
var _ = cljs.core.nth.call(null,vec__30127,(0),null);
var y = cljs.core.nth.call(null,vec__30127,(1),null);
return (((y > space_wars.core.world_height)) || ((y < (0))));
}),s));
});
space_wars.core.update_missiles = (function space_wars$core$update_missiles(missiles){

var dy = ((-2) * space_wars.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (dy){
return (function (p__30130){
var vec__30131 = p__30130;
var x = cljs.core.nth.call(null,vec__30131,(0),null);
var y = cljs.core.nth.call(null,vec__30131,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(dy))
,missiles));
});
space_wars.core.add_new_QMARK_ = (function space_wars$core$add_new_QMARK_(s,limit,freq){

return (((cljs.core.count.call(null,s) <= limit)) && (quiltools.core.n_ticks_QMARK_.call(null,(freq * space_wars.core.frame_rate))));
});
space_wars.core.collision_QMARK_ = (function space_wars$core$collision_QMARK_(p__30134,p__30135,wa,ha,wb,hb){
var vec__30136 = p__30134;
var xa = cljs.core.nth.call(null,vec__30136,(0),null);
var ya = cljs.core.nth.call(null,vec__30136,(1),null);
var vec__30139 = p__30135;
var xb = cljs.core.nth.call(null,vec__30139,(0),null);
var yb = cljs.core.nth.call(null,vec__30139,(1),null);

return ((((((xb - wa) <= xa)) && ((xa <= (xb + wb))))) && (((((yb - ha) <= ya)) && ((ya <= (yb + hb))))));
});
space_wars.core.detect_explosions = (function space_wars$core$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function space_wars$core$detect_explosions_$_iter__30142(s__30143){
return (new cljs.core.LazySeq(null,(function (){
var s__30143__$1 = s__30143;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__30143__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__30143__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function space_wars$core$detect_explosions_$_iter__30142_$_iter__30144(s__30145){
return (new cljs.core.LazySeq(null,((function (s__30143__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__30145__$1 = s__30145;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__30145__$1);
if(temp__5735__auto____$1){
var s__30145__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30145__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30145__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30147 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30146 = (0);
while(true){
if((i__30146 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__30146);
if(space_wars.core.collision_QMARK_.call(null,ufo,missile,space_wars.core.size_ufo,space_wars.core.size_ufo,space_wars.core.wm,space_wars.core.wm)){
cljs.core.chunk_append.call(null,b__30147,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__30148 = (i__30146 + (1));
i__30146 = G__30148;
continue;
} else {
var G__30149 = (i__30146 + (1));
i__30146 = G__30149;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30147),space_wars$core$detect_explosions_$_iter__30142_$_iter__30144.call(null,cljs.core.chunk_rest.call(null,s__30145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30147),null);
}
} else {
var missile = cljs.core.first.call(null,s__30145__$2);
if(space_wars.core.collision_QMARK_.call(null,ufo,missile,space_wars.core.size_ufo,space_wars.core.size_ufo,space_wars.core.wm,space_wars.core.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),space_wars$core$detect_explosions_$_iter__30142_$_iter__30144.call(null,cljs.core.rest.call(null,s__30145__$2)));
} else {
var G__30150 = cljs.core.rest.call(null,s__30145__$2);
s__30145__$1 = G__30150;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30143__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__30143__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,space_wars$core$detect_explosions_$_iter__30142.call(null,cljs.core.rest.call(null,s__30143__$1)));
} else {
var G__30151 = cljs.core.rest.call(null,s__30143__$1);
s__30143__$1 = G__30151;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,ufos);
})());
});
space_wars.core.exploded = (function space_wars$core$exploded(bombs,p__30153){
var map__30154 = p__30153;
var map__30154__$1 = (((((!((map__30154 == null))))?(((((map__30154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30154):map__30154);
var xt = cljs.core.get.call(null,map__30154__$1,new cljs.core.Keyword(null,"x","x",2099068185));

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (map__30154,map__30154__$1,xt){
return (function (p1__30152_SHARP_){
return space_wars.core.collision_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,space_wars.core.yt], null),p1__30152_SHARP_,space_wars.core.wt,space_wars.core.ht,space_wars.core.wb,space_wars.core.wb);
});})(map__30154,map__30154__$1,xt))
,bombs));
});
space_wars.core.new_bomb = (function space_wars$core$new_bomb(ufos){
var vec__30156 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ufos));
var x = cljs.core.nth.call(null,vec__30156,(0),null);
var y = cljs.core.nth.call(null,vec__30156,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(space_wars.core.size_ufo2 + x),(space_wars.core.size_ufo2 + y)], null);
});
space_wars.core.update_bombs = (function space_wars$core$update_bombs(bombs,ufos){

var freq = (1);
var new_bombs = ((((cljs.core.seq.call(null,ufos)) && (space_wars.core.add_new_QMARK_.call(null,bombs,space_wars.core.max_bombs,freq))))?cljs.core.conj.call(null,bombs,space_wars.core.new_bomb.call(null,ufos)):bombs);
var dy = ((3) * space_wars.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_bombs,dy){
return (function (p__30159){
var vec__30160 = p__30159;
var x = cljs.core.nth.call(null,vec__30160,(0),null);
var y = cljs.core.nth.call(null,vec__30160,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(freq,new_bombs,dy))
,new_bombs));
});
space_wars.core.update_hits = (function space_wars$core$update_hits(hits,new_hits){

var end_counter = (90);
var remaining = cljs.core.remove.call(null,((function (end_counter){
return (function (hit){
return (new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(hit) >= end_counter);
});})(end_counter))
,hits);
var updated_hits = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (end_counter,remaining){
return (function (hit){
return cljs.core.update.call(null,hit,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.inc);
});})(end_counter,remaining))
,remaining));
return cljs.core.into.call(null,updated_hits,new_hits);
});
space_wars.core.update_tank = (function space_wars$core$update_tank(p__30163){
var map__30164 = p__30163;
var map__30164__$1 = (((((!((map__30164 == null))))?(((((map__30164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30164):map__30164);
var tank = map__30164__$1;
var x = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dir = cljs.core.get.call(null,map__30164__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));

var dx = (8);
var nxt_x = (x + (dir * dx));
var ouside_canvas_QMARK_ = ((function (dx,nxt_x,map__30164,map__30164__$1,tank,x,dir){
return (function (){
return (((nxt_x > (space_wars.core.world_width - space_wars.core.wt))) || ((nxt_x < (0))));
});})(dx,nxt_x,map__30164,map__30164__$1,tank,x,dir))
;
var dir_nxt = ((ouside_canvas_QMARK_.call(null))?((-1) * dir):dir);
return cljs.core.assoc.call(null,tank,new cljs.core.Keyword(null,"x","x",2099068185),((dir_nxt * dx) + x),new cljs.core.Keyword(null,"dir","dir",1734754661),dir_nxt);
});
space_wars.core.move_stars = (function space_wars$core$move_stars(star_coords){

var offset = 0.8;
var iter__4523__auto__ = ((function (offset){
return (function space_wars$core$move_stars_$_iter__30166(s__30167){
return (new cljs.core.LazySeq(null,((function (offset){
return (function (){
var s__30167__$1 = s__30167;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__30167__$1);
if(temp__5735__auto__){
var s__30167__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30167__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30167__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30169 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30168 = (0);
while(true){
if((i__30168 < size__4522__auto__)){
var vec__30170 = cljs.core._nth.call(null,c__4521__auto__,i__30168);
var x = cljs.core.nth.call(null,vec__30170,(0),null);
var y = cljs.core.nth.call(null,vec__30170,(1),null);
cljs.core.chunk_append.call(null,b__30169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(offset + y),space_wars.core.world_height)], null));

var G__30176 = (i__30168 + (1));
i__30168 = G__30176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30169),space_wars$core$move_stars_$_iter__30166.call(null,cljs.core.chunk_rest.call(null,s__30167__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30169),null);
}
} else {
var vec__30173 = cljs.core.first.call(null,s__30167__$2);
var x = cljs.core.nth.call(null,vec__30173,(0),null);
var y = cljs.core.nth.call(null,vec__30173,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(offset + y),space_wars.core.world_height)], null),space_wars$core$move_stars_$_iter__30166.call(null,cljs.core.rest.call(null,s__30167__$2)));
}
} else {
return null;
}
break;
}
});})(offset))
,null,null));
});})(offset))
;
return iter__4523__auto__.call(null,star_coords);
});
space_wars.core.new_ufo = (function space_wars$core$new_ufo(){
var margin = (space_wars.core.world_width / (25));
var x = (space_wars.core.rand_n.call(null,margin,(space_wars.core.world_width - margin)) | (0));
var y = space_wars.core.size_ufo2;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
space_wars.core.update_ufos = (function space_wars$core$update_ufos(ufos){

var freq = (1);
var new_ufos = ((space_wars.core.add_new_QMARK_.call(null,ufos,space_wars.core.max_ufos,freq))?cljs.core.conj.call(null,ufos,space_wars.core.new_ufo.call(null)):ufos);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_ufos){
return (function (p__30177){
var vec__30178 = p__30177;
var x = cljs.core.nth.call(null,vec__30178,(0),null);
var y = cljs.core.nth.call(null,vec__30178,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_wars.core.rand_x.call(null,x),(y + space_wars.core.vu)], null);
});})(freq,new_ufos))
,new_ufos));
});
space_wars.core.init_state_BANG_ = (function space_wars$core$init_state_BANG_(){
var w2 = (space_wars.core.world_width / (2));
var n_stars = (48);
var star_coords = space_wars.core.rand_coords.call(null,n_stars);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lifes","lifes",-2077908604),new cljs.core.Keyword(null,"star-coords","star-coords",-355870036),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"missiles","missiles",-600699149),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"ufos","ufos",2106350236),new cljs.core.Keyword(null,"bombs","bombs",1955561180),new cljs.core.Keyword(null,"state-counter","state-counter",494277693)],[(3),star_coords,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),w2,new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null),cljs.core.PersistentHashSet.EMPTY,(0),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w2,space_wars.core.size_ufo2], null)]),cljs.core.PersistentHashSet.EMPTY,(0)]);
});
space_wars.core.setup = (function space_wars$core$setup(){
quil.core.frame_rate.call(null,space_wars.core.frame_rate);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

quil.core.text_font.call(null,"VT323-Regular");

quil.core.text_size.call(null,(20));

return space_wars.core.init_state_BANG_.call(null);
});
space_wars.core.update_state = (function space_wars$core$update_state(p__30181){
var map__30182 = p__30181;
var map__30182__$1 = (((((!((map__30182 == null))))?(((((map__30182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30182):map__30182);
var state = map__30182__$1;
var ufos = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var state_counter = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"state-counter","state-counter",494277693));
var lifes = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var star_coords = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"star-coords","star-coords",-355870036));
var hits = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__30182__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var bg_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"star-coords","star-coords",-355870036),space_wars.core.move_stars.call(null,star_coords));
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),game_state)) && ((lifes === (0))))){
return cljs.core.assoc.call(null,bg_state,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"state-counter","state-counter",494277693),(0));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)){
if((state_counter < (90))){
return cljs.core.update.call(null,bg_state,new cljs.core.Keyword(null,"state-counter","state-counter",494277693),cljs.core.inc);
} else {
return cljs.core.assoc.call(null,bg_state,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"ready","ready",1086465795));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)){
return bg_state;
} else {
var explosions = space_wars.core.detect_explosions.call(null,ufos,missiles);
var ufos_exploded = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,explosions));
var ufos_escaped = space_wars.core.escaped.call(null,ufos);
var ufos_remaining = clojure.set.difference.call(null,ufos,ufos_exploded,ufos_escaped);
var ufos_next = space_wars.core.update_ufos.call(null,ufos_remaining);
var hits_new = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__30182,map__30182__$1,state,ufos,bombs,state_counter,lifes,star_coords,hits,game_state,tank,missiles,score){
return (function (p__30184){
var vec__30185 = p__30184;
var x = cljs.core.nth.call(null,vec__30185,(0),null);
var y = cljs.core.nth.call(null,vec__30185,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"counter","counter",804008177),(0)], null);
});})(explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__30182,map__30182__$1,state,ufos,bombs,state_counter,lifes,star_coords,hits,game_state,tank,missiles,score))
,ufos_exploded));
var hits_next = space_wars.core.update_hits.call(null,hits,hits_new);
var missiles_exploded = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.second,explosions));
var missiles_remaining = clojure.set.difference.call(null,missiles,missiles_exploded,space_wars.core.escaped.call(null,missiles));
var missiles_next = space_wars.core.update_missiles.call(null,missiles_remaining);
var bombs_exploded = space_wars.core.exploded.call(null,bombs,tank);
var bombs_remaining = clojure.set.difference.call(null,bombs,bombs_exploded,space_wars.core.escaped.call(null,bombs));
var bombs_next = space_wars.core.update_bombs.call(null,bombs_remaining,ufos_remaining);
var score_next = ((score + cljs.core.count.call(null,ufos_exploded)) + (- cljs.core.count.call(null,ufos_escaped)));
var lifes_next = (lifes - cljs.core.count.call(null,bombs_exploded));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,bg_state,new cljs.core.Keyword(null,"tank","tank",-798661744),space_wars.core.update_tank.call(null,tank)),new cljs.core.Keyword(null,"missiles","missiles",-600699149),missiles_next),new cljs.core.Keyword(null,"bombs","bombs",1955561180),bombs_next),new cljs.core.Keyword(null,"ufos","ufos",2106350236),ufos_next),new cljs.core.Keyword(null,"hits","hits",-2120002930),hits_next),new cljs.core.Keyword(null,"score","score",-1963588780),score_next),new cljs.core.Keyword(null,"lifes","lifes",-2077908604),lifes_next);

}
}
}
});
space_wars.core.key_handler = (function space_wars$core$key_handler(p__30188,p__30189){
var map__30190 = p__30188;
var map__30190__$1 = (((((!((map__30190 == null))))?(((((map__30190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30190):map__30190);
var state = map__30190__$1;
var tank = cljs.core.get.call(null,map__30190__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__30190__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var game_state = cljs.core.get.call(null,map__30190__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var map__30191 = p__30189;
var map__30191__$1 = (((((!((map__30191 == null))))?(((((map__30191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30191):map__30191);
var key = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)){
return state;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"q","q",689001697),key)){
return quil.core.exit.call(null);
} else {
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
return space_wars.core.init_state_BANG_.call(null);
} else {
return state;

}
}
} else {
var left = (37);
var right = (39);
if(cljs.core._EQ_.call(null,right,key_code)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(1));
} else {
if(cljs.core._EQ_.call(null,left,key_code)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(-1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"space","space",348133475),key)){
if((cljs.core.count.call(null,missiles) < space_wars.core.max_missiles)){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"missiles","missiles",-600699149),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),(space_wars.core.world_height - space_wars.core.wt2)], null));
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
});
space_wars.core.draw_state = (function space_wars$core$draw_state(p__30194){
var map__30195 = p__30194;
var map__30195__$1 = (((((!((map__30195 == null))))?(((((map__30195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30195):map__30195);
var state = map__30195__$1;
var ufos = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var lifes = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var star_coords = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"star-coords","star-coords",-355870036));
var hits = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(space_wars.core.colors));

space_wars.core.draw_stars_BANG_.call(null,star_coords);

space_wars.core.draw_missiles_BANG_.call(null,missiles);

space_wars.core.draw_bombs_BANG_.call(null,bombs);

space_wars.core.draw_munitions_BANG_.call(null,cljs.core.count.call(null,missiles));

space_wars.core.draw_menu_BANG_.call(null,score,lifes);

space_wars.core.draw_ufos_BANG_.call(null,ufos);

space_wars.core.draw_tank_BANG_.call(null,tank);

var seq__30197_30201 = cljs.core.seq.call(null,hits);
var chunk__30198_30202 = null;
var count__30199_30203 = (0);
var i__30200_30204 = (0);
while(true){
if((i__30200_30204 < count__30199_30203)){
var hit_30205 = cljs.core._nth.call(null,chunk__30198_30202,i__30200_30204);
space_wars.core.draw_explosion_BANG_.call(null,hit_30205);


var G__30206 = seq__30197_30201;
var G__30207 = chunk__30198_30202;
var G__30208 = count__30199_30203;
var G__30209 = (i__30200_30204 + (1));
seq__30197_30201 = G__30206;
chunk__30198_30202 = G__30207;
count__30199_30203 = G__30208;
i__30200_30204 = G__30209;
continue;
} else {
var temp__5735__auto___30210 = cljs.core.seq.call(null,seq__30197_30201);
if(temp__5735__auto___30210){
var seq__30197_30211__$1 = temp__5735__auto___30210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30197_30211__$1)){
var c__4550__auto___30212 = cljs.core.chunk_first.call(null,seq__30197_30211__$1);
var G__30213 = cljs.core.chunk_rest.call(null,seq__30197_30211__$1);
var G__30214 = c__4550__auto___30212;
var G__30215 = cljs.core.count.call(null,c__4550__auto___30212);
var G__30216 = (0);
seq__30197_30201 = G__30213;
chunk__30198_30202 = G__30214;
count__30199_30203 = G__30215;
i__30200_30204 = G__30216;
continue;
} else {
var hit_30217 = cljs.core.first.call(null,seq__30197_30211__$1);
space_wars.core.draw_explosion_BANG_.call(null,hit_30217);


var G__30218 = cljs.core.next.call(null,seq__30197_30211__$1);
var G__30219 = null;
var G__30220 = (0);
var G__30221 = (0);
seq__30197_30201 = G__30218;
chunk__30198_30202 = G__30219;
count__30199_30203 = G__30220;
i__30200_30204 = G__30221;
continue;
}
} else {
}
}
break;
}

if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)))){
return space_wars.core.draw_game_over_BANG_.call(null);
} else {
return null;
}
});
space_wars.core.run_sketch = (function space_wars$core$run_sketch(){
space_wars.core.space_wars = (function space_wars$core$run_sketch_$_space_wars(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"space-wars",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267)], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,space_wars.core.update_state))?(function() { 
var G__30222__delegate = function (args){
return cljs.core.apply.call(null,space_wars.core.update_state,args);
};
var G__30222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30223__i = 0, G__30223__a = new Array(arguments.length -  0);
while (G__30223__i < G__30223__a.length) {G__30223__a[G__30223__i] = arguments[G__30223__i + 0]; ++G__30223__i;}
  args = new cljs.core.IndexedSeq(G__30223__a,0,null);
} 
return G__30222__delegate.call(this,args);};
G__30222.cljs$lang$maxFixedArity = 0;
G__30222.cljs$lang$applyTo = (function (arglist__30224){
var args = cljs.core.seq(arglist__30224);
return G__30222__delegate(args);
});
G__30222.cljs$core$IFn$_invoke$arity$variadic = G__30222__delegate;
return G__30222;
})()
:space_wars.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_wars.core.world_width,space_wars.core.world_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,space_wars.core.setup))?(function() { 
var G__30225__delegate = function (args){
return cljs.core.apply.call(null,space_wars.core.setup,args);
};
var G__30225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30226__i = 0, G__30226__a = new Array(arguments.length -  0);
while (G__30226__i < G__30226__a.length) {G__30226__a[G__30226__i] = arguments[G__30226__i + 0]; ++G__30226__i;}
  args = new cljs.core.IndexedSeq(G__30226__a,0,null);
} 
return G__30225__delegate.call(this,args);};
G__30225.cljs$lang$maxFixedArity = 0;
G__30225.cljs$lang$applyTo = (function (arglist__30227){
var args = cljs.core.seq(arglist__30227);
return G__30225__delegate(args);
});
G__30225.cljs$core$IFn$_invoke$arity$variadic = G__30225__delegate;
return G__30225;
})()
:space_wars.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,space_wars.core.key_handler))?(function() { 
var G__30228__delegate = function (args){
return cljs.core.apply.call(null,space_wars.core.key_handler,args);
};
var G__30228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30229__i = 0, G__30229__a = new Array(arguments.length -  0);
while (G__30229__i < G__30229__a.length) {G__30229__a[G__30229__i] = arguments[G__30229__i + 0]; ++G__30229__i;}
  args = new cljs.core.IndexedSeq(G__30229__a,0,null);
} 
return G__30228__delegate.call(this,args);};
G__30228.cljs$lang$maxFixedArity = 0;
G__30228.cljs$lang$applyTo = (function (arglist__30230){
var args = cljs.core.seq(arglist__30230);
return G__30228__delegate(args);
});
G__30228.cljs$core$IFn$_invoke$arity$variadic = G__30228__delegate;
return G__30228;
})()
:space_wars.core.key_handler),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,space_wars.core.draw_state))?(function() { 
var G__30231__delegate = function (args){
return cljs.core.apply.call(null,space_wars.core.draw_state,args);
};
var G__30231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30232__i = 0, G__30232__a = new Array(arguments.length -  0);
while (G__30232__i < G__30232__a.length) {G__30232__a[G__30232__i] = arguments[G__30232__i + 0]; ++G__30232__i;}
  args = new cljs.core.IndexedSeq(G__30232__a,0,null);
} 
return G__30231__delegate.call(this,args);};
G__30231.cljs$lang$maxFixedArity = 0;
G__30231.cljs$lang$applyTo = (function (arglist__30233){
var args = cljs.core.seq(arglist__30233);
return G__30231__delegate(args);
});
G__30231.cljs$core$IFn$_invoke$arity$variadic = G__30231__delegate;
return G__30231;
})()
:space_wars.core.draw_state));
});
goog.exportSymbol('space_wars.core.space_wars', space_wars.core.space_wars);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26520__26521__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26520__26521__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267)], null)))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),space_wars.core.space_wars,new cljs.core.Keyword(null,"host-id","host-id",742376279),"space-wars"], null));
}
});
goog.exportSymbol('space_wars.core.run_sketch', space_wars.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1594846083464
