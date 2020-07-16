// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quiltools.core');
goog.require('clojure.string');
goog.require('clojure.set');
spaceinvaders.core.world_height = (500);
spaceinvaders.core.world_width = (500);
spaceinvaders.core.vu = (3);
spaceinvaders.core.size_ufo = (40);
spaceinvaders.core.size_ufo2 = (spaceinvaders.core.size_ufo / (2));
spaceinvaders.core.max_ufos = (7);
spaceinvaders.core.wt = (40);
spaceinvaders.core.wt2 = (spaceinvaders.core.wt / (2));
spaceinvaders.core.ht = (0.4 * spaceinvaders.core.wt);
spaceinvaders.core.yt = (spaceinvaders.core.world_height - spaceinvaders.core.ht);
spaceinvaders.core.wm = (0.2 * spaceinvaders.core.wt);
spaceinvaders.core.max_missiles = (5);
spaceinvaders.core.wb = (0.2 * spaceinvaders.core.size_ufo);
spaceinvaders.core.max_bombs = (1);
spaceinvaders.core.top_margin = (24);
spaceinvaders.core.frame_rate = (30);
spaceinvaders.core.colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rich-black","rich-black",-1218026336),new cljs.core.Keyword(null,"electric-red","electric-red",-88027711),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"rose-garnet","rose-garnet",37248167),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"dogwood-rose","dogwood-rose",62745363),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975),new cljs.core.Keyword(null,"kiwi","kiwi",-823230888),new cljs.core.Keyword(null,"light-blue","light-blue",-931755143),new cljs.core.Keyword(null,"yellow-rose","yellow-rose",-1393460454),new cljs.core.Keyword(null,"guppie-green","guppie-green",-848884229),new cljs.core.Keyword(null,"light-yellow","light-yellow",1919187967)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(11),(24)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(5),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(149),(38)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(103),(103),(102)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(151),(2),(70)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(79),(175),(68)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(215),(25),(111)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(195),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(129),(236)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(23),(45)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(231),(86)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(232),(246)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(254),(240),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(204),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(253),(253),(151)], null)]);
spaceinvaders.core.rand_n = (function spaceinvaders$core$rand_n(a,b){

return (a + cljs.core.rand.call(null,(b - a)));
});
spaceinvaders.core.rand_x = (function spaceinvaders$core$rand_x(x){

if(quiltools.core.n_ticks_QMARK_.call(null,(3))){
var delta = (0.24 * spaceinvaders.core.size_ufo);
return (spaceinvaders.core.rand_n.call(null,(x - delta),(x + delta)) | (0));
} else {
return x;
}
});
spaceinvaders.core.rand_stars = (function spaceinvaders$core$rand_stars(n){

return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[spaceinvaders.core.rand_n.call(null,(0),spaceinvaders.core.world_width),spaceinvaders.core.rand_n.call(null,(0),spaceinvaders.core.world_height),(1.0 + cljs.core.rand.call(null,3.0))],null));
})));
});
spaceinvaders.core.draw_missiles_BANG_ = (function spaceinvaders$core$draw_missiles_BANG_(missiles){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

var w_38836 = (0.4 * spaceinvaders.core.size_ufo);
var missile_img_38837 = ((function (w_38836){
return (function (){
return quil.core.quad.call(null,0.5,0.2,(1),(1),0.5,0.7,(0),(1));
});})(w_38836))
;
var seq__38820_38838 = cljs.core.seq.call(null,missiles);
var chunk__38821_38839 = null;
var count__38822_38840 = (0);
var i__38823_38841 = (0);
while(true){
if((i__38823_38841 < count__38822_38840)){
var vec__38830_38842 = cljs.core._nth.call(null,chunk__38821_38839,i__38823_38841);
var x_38843 = cljs.core.nth.call(null,vec__38830_38842,(0),null);
var y_38844 = cljs.core.nth.call(null,vec__38830_38842,(1),null);
quiltools.core.at.call(null,x_38843,y_38844,quiltools.core.in$.call(null,w_38836,w_38836,missile_img_38837)).call(null);


var G__38845 = seq__38820_38838;
var G__38846 = chunk__38821_38839;
var G__38847 = count__38822_38840;
var G__38848 = (i__38823_38841 + (1));
seq__38820_38838 = G__38845;
chunk__38821_38839 = G__38846;
count__38822_38840 = G__38847;
i__38823_38841 = G__38848;
continue;
} else {
var temp__5735__auto___38849 = cljs.core.seq.call(null,seq__38820_38838);
if(temp__5735__auto___38849){
var seq__38820_38850__$1 = temp__5735__auto___38849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38820_38850__$1)){
var c__4550__auto___38851 = cljs.core.chunk_first.call(null,seq__38820_38850__$1);
var G__38852 = cljs.core.chunk_rest.call(null,seq__38820_38850__$1);
var G__38853 = c__4550__auto___38851;
var G__38854 = cljs.core.count.call(null,c__4550__auto___38851);
var G__38855 = (0);
seq__38820_38838 = G__38852;
chunk__38821_38839 = G__38853;
count__38822_38840 = G__38854;
i__38823_38841 = G__38855;
continue;
} else {
var vec__38833_38856 = cljs.core.first.call(null,seq__38820_38850__$1);
var x_38857 = cljs.core.nth.call(null,vec__38833_38856,(0),null);
var y_38858 = cljs.core.nth.call(null,vec__38833_38856,(1),null);
quiltools.core.at.call(null,x_38857,y_38858,quiltools.core.in$.call(null,w_38836,w_38836,missile_img_38837)).call(null);


var G__38859 = cljs.core.next.call(null,seq__38820_38850__$1);
var G__38860 = null;
var G__38861 = (0);
var G__38862 = (0);
seq__38820_38838 = G__38859;
chunk__38821_38839 = G__38860;
count__38822_38840 = G__38861;
i__38823_38841 = G__38862;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_bombs_BANG_ = (function spaceinvaders$core$draw_bombs_BANG_(missiles){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

var w_38879 = (0.24 * spaceinvaders.core.size_ufo);
var seq__38863_38880 = cljs.core.seq.call(null,missiles);
var chunk__38864_38881 = null;
var count__38865_38882 = (0);
var i__38866_38883 = (0);
while(true){
if((i__38866_38883 < count__38865_38882)){
var vec__38873_38884 = cljs.core._nth.call(null,chunk__38864_38881,i__38866_38883);
var x_38885 = cljs.core.nth.call(null,vec__38873_38884,(0),null);
var y_38886 = cljs.core.nth.call(null,vec__38873_38884,(1),null);
quil.core.ellipse.call(null,x_38885,y_38886,w_38879,w_38879);


var G__38887 = seq__38863_38880;
var G__38888 = chunk__38864_38881;
var G__38889 = count__38865_38882;
var G__38890 = (i__38866_38883 + (1));
seq__38863_38880 = G__38887;
chunk__38864_38881 = G__38888;
count__38865_38882 = G__38889;
i__38866_38883 = G__38890;
continue;
} else {
var temp__5735__auto___38891 = cljs.core.seq.call(null,seq__38863_38880);
if(temp__5735__auto___38891){
var seq__38863_38892__$1 = temp__5735__auto___38891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38863_38892__$1)){
var c__4550__auto___38893 = cljs.core.chunk_first.call(null,seq__38863_38892__$1);
var G__38894 = cljs.core.chunk_rest.call(null,seq__38863_38892__$1);
var G__38895 = c__4550__auto___38893;
var G__38896 = cljs.core.count.call(null,c__4550__auto___38893);
var G__38897 = (0);
seq__38863_38880 = G__38894;
chunk__38864_38881 = G__38895;
count__38865_38882 = G__38896;
i__38866_38883 = G__38897;
continue;
} else {
var vec__38876_38898 = cljs.core.first.call(null,seq__38863_38892__$1);
var x_38899 = cljs.core.nth.call(null,vec__38876_38898,(0),null);
var y_38900 = cljs.core.nth.call(null,vec__38876_38898,(1),null);
quil.core.ellipse.call(null,x_38899,y_38900,w_38879,w_38879);


var G__38901 = cljs.core.next.call(null,seq__38863_38892__$1);
var G__38902 = null;
var G__38903 = (0);
var G__38904 = (0);
seq__38863_38880 = G__38901;
chunk__38864_38881 = G__38902;
count__38865_38882 = G__38903;
i__38866_38883 = G__38904;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.core.alien_img = (function spaceinvaders$core$alien_img(){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

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
spaceinvaders.core.xdraw_bombs_BANG_ = (function spaceinvaders$core$xdraw_bombs_BANG_(bombs){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

var w_38921 = (0.8 * spaceinvaders.core.size_ufo);
var seq__38905_38922 = cljs.core.seq.call(null,bombs);
var chunk__38906_38923 = null;
var count__38907_38924 = (0);
var i__38908_38925 = (0);
while(true){
if((i__38908_38925 < count__38907_38924)){
var vec__38915_38926 = cljs.core._nth.call(null,chunk__38906_38923,i__38908_38925);
var x_38927 = cljs.core.nth.call(null,vec__38915_38926,(0),null);
var y_38928 = cljs.core.nth.call(null,vec__38915_38926,(1),null);
quiltools.core.at.call(null,x_38927,y_38928,quiltools.core.in$.call(null,w_38921,w_38921,spaceinvaders.core.alien_img)).call(null);


var G__38929 = seq__38905_38922;
var G__38930 = chunk__38906_38923;
var G__38931 = count__38907_38924;
var G__38932 = (i__38908_38925 + (1));
seq__38905_38922 = G__38929;
chunk__38906_38923 = G__38930;
count__38907_38924 = G__38931;
i__38908_38925 = G__38932;
continue;
} else {
var temp__5735__auto___38933 = cljs.core.seq.call(null,seq__38905_38922);
if(temp__5735__auto___38933){
var seq__38905_38934__$1 = temp__5735__auto___38933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38905_38934__$1)){
var c__4550__auto___38935 = cljs.core.chunk_first.call(null,seq__38905_38934__$1);
var G__38936 = cljs.core.chunk_rest.call(null,seq__38905_38934__$1);
var G__38937 = c__4550__auto___38935;
var G__38938 = cljs.core.count.call(null,c__4550__auto___38935);
var G__38939 = (0);
seq__38905_38922 = G__38936;
chunk__38906_38923 = G__38937;
count__38907_38924 = G__38938;
i__38908_38925 = G__38939;
continue;
} else {
var vec__38918_38940 = cljs.core.first.call(null,seq__38905_38934__$1);
var x_38941 = cljs.core.nth.call(null,vec__38918_38940,(0),null);
var y_38942 = cljs.core.nth.call(null,vec__38918_38940,(1),null);
quiltools.core.at.call(null,x_38941,y_38942,quiltools.core.in$.call(null,w_38921,w_38921,spaceinvaders.core.alien_img)).call(null);


var G__38943 = cljs.core.next.call(null,seq__38905_38934__$1);
var G__38944 = null;
var G__38945 = (0);
var G__38946 = (0);
seq__38905_38922 = G__38943;
chunk__38906_38923 = G__38944;
count__38907_38924 = G__38945;
i__38908_38925 = G__38946;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.core.munition_img = (function spaceinvaders$core$munition_img(n_missiles){

return (function (){
quil.core.push_style.call(null);

quil.core.stroke.call(null,(120));

var spacing_38951 = 0.04;
var w_38952 = (((1) - (spacing_38951 * (spaceinvaders.core.max_missiles - (1)))) / spaceinvaders.core.max_missiles);
var seq__38947_38953 = cljs.core.seq.call(null,cljs.core.range.call(null,spaceinvaders.core.max_missiles));
var chunk__38948_38954 = null;
var count__38949_38955 = (0);
var i__38950_38956 = (0);
while(true){
if((i__38950_38956 < count__38949_38955)){
var n_38957 = cljs.core._nth.call(null,chunk__38948_38954,i__38950_38956);
if((n_38957 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));
}

quil.core.ellipse.call(null,((w_38952 / (2)) + (n_38957 * (w_38952 + spacing_38951))),(0),w_38952,w_38952);


var G__38958 = seq__38947_38953;
var G__38959 = chunk__38948_38954;
var G__38960 = count__38949_38955;
var G__38961 = (i__38950_38956 + (1));
seq__38947_38953 = G__38958;
chunk__38948_38954 = G__38959;
count__38949_38955 = G__38960;
i__38950_38956 = G__38961;
continue;
} else {
var temp__5735__auto___38962 = cljs.core.seq.call(null,seq__38947_38953);
if(temp__5735__auto___38962){
var seq__38947_38963__$1 = temp__5735__auto___38962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38947_38963__$1)){
var c__4550__auto___38964 = cljs.core.chunk_first.call(null,seq__38947_38963__$1);
var G__38965 = cljs.core.chunk_rest.call(null,seq__38947_38963__$1);
var G__38966 = c__4550__auto___38964;
var G__38967 = cljs.core.count.call(null,c__4550__auto___38964);
var G__38968 = (0);
seq__38947_38953 = G__38965;
chunk__38948_38954 = G__38966;
count__38949_38955 = G__38967;
i__38950_38956 = G__38968;
continue;
} else {
var n_38969 = cljs.core.first.call(null,seq__38947_38963__$1);
if((n_38969 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));
}

quil.core.ellipse.call(null,((w_38952 / (2)) + (n_38969 * (w_38952 + spacing_38951))),(0),w_38952,w_38952);


var G__38970 = cljs.core.next.call(null,seq__38947_38963__$1);
var G__38971 = null;
var G__38972 = (0);
var G__38973 = (0);
seq__38947_38953 = G__38970;
chunk__38948_38954 = G__38971;
count__38949_38955 = G__38972;
i__38950_38956 = G__38973;
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
spaceinvaders.core.draw_munitions_BANG_ = (function spaceinvaders$core$draw_munitions_BANG_(n_missiles){

var w = ((12) * spaceinvaders.core.max_missiles);
var x0 = (spaceinvaders.core.world_width - (1.1 * w));
return quiltools.core.at.call(null,x0,spaceinvaders.core.top_margin,quiltools.core.in$.call(null,w,w,spaceinvaders.core.munition_img.call(null,n_missiles))).call(null);
});
spaceinvaders.core.ufo_img = (function spaceinvaders$core$ufo_img(color){
return (function (){
cljs.core.apply.call(null,quil.core.fill,color.call(null,spaceinvaders.core.colors));

quil.core.arc.call(null,0.5,0.2,0.6,0.4,quil.core.PI,quil.core.TWO_PI,new cljs.core.Keyword(null,"pie","pie",1530441672));

return quil.core.ellipse.call(null,0.5,0.25,(1),0.2);
});
});
spaceinvaders.core.draw_ufos_BANG_ = (function spaceinvaders$core$draw_ufos_BANG_(ufos){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

quil.core.stroke_weight.call(null,(1));

var seq__38974_38990 = cljs.core.seq.call(null,ufos);
var chunk__38975_38991 = null;
var count__38976_38992 = (0);
var i__38977_38993 = (0);
while(true){
if((i__38977_38993 < count__38976_38992)){
var vec__38984_38994 = cljs.core._nth.call(null,chunk__38975_38991,i__38977_38993);
var xu_38995 = cljs.core.nth.call(null,vec__38984_38994,(0),null);
var yu_38996 = cljs.core.nth.call(null,vec__38984_38994,(1),null);
quiltools.core.at.call(null,xu_38995,yu_38996,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__38997 = seq__38974_38990;
var G__38998 = chunk__38975_38991;
var G__38999 = count__38976_38992;
var G__39000 = (i__38977_38993 + (1));
seq__38974_38990 = G__38997;
chunk__38975_38991 = G__38998;
count__38976_38992 = G__38999;
i__38977_38993 = G__39000;
continue;
} else {
var temp__5735__auto___39001 = cljs.core.seq.call(null,seq__38974_38990);
if(temp__5735__auto___39001){
var seq__38974_39002__$1 = temp__5735__auto___39001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38974_39002__$1)){
var c__4550__auto___39003 = cljs.core.chunk_first.call(null,seq__38974_39002__$1);
var G__39004 = cljs.core.chunk_rest.call(null,seq__38974_39002__$1);
var G__39005 = c__4550__auto___39003;
var G__39006 = cljs.core.count.call(null,c__4550__auto___39003);
var G__39007 = (0);
seq__38974_38990 = G__39004;
chunk__38975_38991 = G__39005;
count__38976_38992 = G__39006;
i__38977_38993 = G__39007;
continue;
} else {
var vec__38987_39008 = cljs.core.first.call(null,seq__38974_39002__$1);
var xu_39009 = cljs.core.nth.call(null,vec__38987_39008,(0),null);
var yu_39010 = cljs.core.nth.call(null,vec__38987_39008,(1),null);
quiltools.core.at.call(null,xu_39009,yu_39010,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__39011 = cljs.core.next.call(null,seq__38974_39002__$1);
var G__39012 = null;
var G__39013 = (0);
var G__39014 = (0);
seq__38974_38990 = G__39011;
chunk__38975_38991 = G__39012;
count__38976_38992 = G__39013;
i__38977_38993 = G__39014;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_tank_BANG_ = (function spaceinvaders$core$draw_tank_BANG_(tank){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),spaceinvaders.core.yt,spaceinvaders.core.wt,spaceinvaders.core.ht);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_menu_BANG_ = (function spaceinvaders$core$draw_menu_BANG_(score,lifes){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var lifes_y_39015 = ((2) * spaceinvaders.core.top_margin);
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),spaceinvaders.core.top_margin,spaceinvaders.core.top_margin);

quil.core.text.call(null,["lifes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lifes)].join(''),spaceinvaders.core.top_margin,lifes_y_39015);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_score_BANG_ = (function spaceinvaders$core$draw_score_BANG_(score){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var txt_pos_39016 = spaceinvaders.core.top_margin;
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),txt_pos_39016,txt_pos_39016);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.flash_ufo_BANG_ = (function spaceinvaders$core$flash_ufo_BANG_(x,y,counter){
quil.core.push_style.call(null);

var blink_time_39017 = (4);
var colors_39018 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yellow-rose","yellow-rose",-1393460454),new cljs.core.Keyword(null,"electric-red","electric-red",-88027711),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"rose-garnet","rose-garnet",37248167)], null);
var phase_39019 = cljs.core.mod.call(null,cljs.core.quot.call(null,counter,blink_time_39017),cljs.core.count.call(null,colors_39018));
var next_color_39020 = colors_39018.call(null,phase_39019);
quiltools.core.at.call(null,x,y,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,next_color_39020))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.descend_ufo_BANG_ = (function spaceinvaders$core$descend_ufo_BANG_(x,y,counter){
var dy = cljs.core.mod.call(null,counter,(30));
return spaceinvaders.core.flash_ufo_BANG_.call(null,x,(y + dy),counter);
});
spaceinvaders.core.draw_explosion_BANG_ = (function spaceinvaders$core$draw_explosion_BANG_(p__39021){
var map__39022 = p__39021;
var map__39022__$1 = (((((!((map__39022 == null))))?(((((map__39022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39022):map__39022);
var hit = map__39022__$1;
var x = cljs.core.get.call(null,map__39022__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__39022__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var counter = cljs.core.get.call(null,map__39022__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
if(((((0) <= counter)) && ((counter <= (30))))){
return spaceinvaders.core.flash_ufo_BANG_.call(null,x,y,counter);
} else {
if(((((21) <= counter)) && ((counter <= (60))))){
return spaceinvaders.core.descend_ufo_BANG_.call(null,x,y,counter);
} else {
return null;
}
}
});
spaceinvaders.core.draw_stars_BANG_ = (function spaceinvaders$core$draw_stars_BANG_(stars){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var seq__39024_39040 = cljs.core.seq.call(null,stars);
var chunk__39025_39041 = null;
var count__39026_39042 = (0);
var i__39027_39043 = (0);
while(true){
if((i__39027_39043 < count__39026_39042)){
var vec__39034_39044 = cljs.core._nth.call(null,chunk__39025_39041,i__39027_39043);
var x_39045 = cljs.core.nth.call(null,vec__39034_39044,(0),null);
var y_39046 = cljs.core.nth.call(null,vec__39034_39044,(1),null);
var s_39047 = cljs.core.nth.call(null,vec__39034_39044,(2),null);
quil.core.ellipse.call(null,x_39045,y_39046,s_39047,s_39047);


var G__39048 = seq__39024_39040;
var G__39049 = chunk__39025_39041;
var G__39050 = count__39026_39042;
var G__39051 = (i__39027_39043 + (1));
seq__39024_39040 = G__39048;
chunk__39025_39041 = G__39049;
count__39026_39042 = G__39050;
i__39027_39043 = G__39051;
continue;
} else {
var temp__5735__auto___39052 = cljs.core.seq.call(null,seq__39024_39040);
if(temp__5735__auto___39052){
var seq__39024_39053__$1 = temp__5735__auto___39052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39024_39053__$1)){
var c__4550__auto___39054 = cljs.core.chunk_first.call(null,seq__39024_39053__$1);
var G__39055 = cljs.core.chunk_rest.call(null,seq__39024_39053__$1);
var G__39056 = c__4550__auto___39054;
var G__39057 = cljs.core.count.call(null,c__4550__auto___39054);
var G__39058 = (0);
seq__39024_39040 = G__39055;
chunk__39025_39041 = G__39056;
count__39026_39042 = G__39057;
i__39027_39043 = G__39058;
continue;
} else {
var vec__39037_39059 = cljs.core.first.call(null,seq__39024_39053__$1);
var x_39060 = cljs.core.nth.call(null,vec__39037_39059,(0),null);
var y_39061 = cljs.core.nth.call(null,vec__39037_39059,(1),null);
var s_39062 = cljs.core.nth.call(null,vec__39037_39059,(2),null);
quil.core.ellipse.call(null,x_39060,y_39061,s_39062,s_39062);


var G__39063 = cljs.core.next.call(null,seq__39024_39053__$1);
var G__39064 = null;
var G__39065 = (0);
var G__39066 = (0);
seq__39024_39040 = G__39063;
chunk__39025_39041 = G__39064;
count__39026_39042 = G__39065;
i__39027_39043 = G__39066;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.core.game_over_img = (function spaceinvaders$core$game_over_img(){
quil.core.push_style.call(null);

quil.core.fill.call(null,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

cljs.core.apply.call(null,quil.core.stroke,new cljs.core.Keyword(null,"guppie-green","guppie-green",-848884229).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

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
spaceinvaders.core.draw_game_over_BANG_ = (function spaceinvaders$core$draw_game_over_BANG_(){
return quiltools.core.at.call(null,(0.25 * spaceinvaders.core.world_width),(0.25 * spaceinvaders.core.world_height),quiltools.core.in$.call(null,(0.5 * spaceinvaders.core.world_width),(0.375 * spaceinvaders.core.world_height),spaceinvaders.core.game_over_img)).call(null);
});
spaceinvaders.core.escaped = (function spaceinvaders$core$escaped(s){

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p__39067){
var vec__39068 = p__39067;
var _ = cljs.core.nth.call(null,vec__39068,(0),null);
var y = cljs.core.nth.call(null,vec__39068,(1),null);
return (((y > spaceinvaders.core.world_height)) || ((y < (0))));
}),s));
});
spaceinvaders.core.update_missiles = (function spaceinvaders$core$update_missiles(missiles){

var dy = ((-2) * spaceinvaders.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (dy){
return (function (p__39071){
var vec__39072 = p__39071;
var x = cljs.core.nth.call(null,vec__39072,(0),null);
var y = cljs.core.nth.call(null,vec__39072,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(dy))
,missiles));
});
spaceinvaders.core.add_new_QMARK_ = (function spaceinvaders$core$add_new_QMARK_(s,limit,freq){

return (((cljs.core.count.call(null,s) <= limit)) && (quiltools.core.n_ticks_QMARK_.call(null,(freq * spaceinvaders.core.frame_rate))));
});
spaceinvaders.core.collision_QMARK_ = (function spaceinvaders$core$collision_QMARK_(p__39075,p__39076,wa,ha,wb,hb){
var vec__39077 = p__39075;
var xa = cljs.core.nth.call(null,vec__39077,(0),null);
var ya = cljs.core.nth.call(null,vec__39077,(1),null);
var vec__39080 = p__39076;
var xb = cljs.core.nth.call(null,vec__39080,(0),null);
var yb = cljs.core.nth.call(null,vec__39080,(1),null);

return ((((((xb - wa) <= xa)) && ((xa <= (xb + wb))))) && (((((yb - ha) <= ya)) && ((ya <= (yb + hb))))));
});
spaceinvaders.core.detect_explosions = (function spaceinvaders$core$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function spaceinvaders$core$detect_explosions_$_iter__39083(s__39084){
return (new cljs.core.LazySeq(null,(function (){
var s__39084__$1 = s__39084;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__39084__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__39084__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function spaceinvaders$core$detect_explosions_$_iter__39083_$_iter__39085(s__39086){
return (new cljs.core.LazySeq(null,((function (s__39084__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__39086__$1 = s__39086;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__39086__$1);
if(temp__5735__auto____$1){
var s__39086__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39086__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39086__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39088 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39087 = (0);
while(true){
if((i__39087 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__39087);
if(spaceinvaders.core.collision_QMARK_.call(null,ufo,missile,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.wm,spaceinvaders.core.wm)){
cljs.core.chunk_append.call(null,b__39088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__39089 = (i__39087 + (1));
i__39087 = G__39089;
continue;
} else {
var G__39090 = (i__39087 + (1));
i__39087 = G__39090;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39088),spaceinvaders$core$detect_explosions_$_iter__39083_$_iter__39085.call(null,cljs.core.chunk_rest.call(null,s__39086__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39088),null);
}
} else {
var missile = cljs.core.first.call(null,s__39086__$2);
if(spaceinvaders.core.collision_QMARK_.call(null,ufo,missile,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.wm,spaceinvaders.core.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),spaceinvaders$core$detect_explosions_$_iter__39083_$_iter__39085.call(null,cljs.core.rest.call(null,s__39086__$2)));
} else {
var G__39091 = cljs.core.rest.call(null,s__39086__$2);
s__39086__$1 = G__39091;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__39084__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__39084__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,spaceinvaders$core$detect_explosions_$_iter__39083.call(null,cljs.core.rest.call(null,s__39084__$1)));
} else {
var G__39092 = cljs.core.rest.call(null,s__39084__$1);
s__39084__$1 = G__39092;
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
spaceinvaders.core.exploded = (function spaceinvaders$core$exploded(bombs,p__39094){
var map__39095 = p__39094;
var map__39095__$1 = (((((!((map__39095 == null))))?(((((map__39095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39095):map__39095);
var xt = cljs.core.get.call(null,map__39095__$1,new cljs.core.Keyword(null,"x","x",2099068185));

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (map__39095,map__39095__$1,xt){
return (function (p1__39093_SHARP_){
return spaceinvaders.core.collision_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,spaceinvaders.core.yt], null),p1__39093_SHARP_,spaceinvaders.core.wt,spaceinvaders.core.ht,spaceinvaders.core.wb,spaceinvaders.core.wb);
});})(map__39095,map__39095__$1,xt))
,bombs));
});
spaceinvaders.core.new_bomb = (function spaceinvaders$core$new_bomb(ufos){
var vec__39097 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ufos));
var x = cljs.core.nth.call(null,vec__39097,(0),null);
var y = cljs.core.nth.call(null,vec__39097,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(spaceinvaders.core.size_ufo2 + x),(spaceinvaders.core.size_ufo2 + y)], null);
});
spaceinvaders.core.update_bombs = (function spaceinvaders$core$update_bombs(bombs,ufos){

var freq = (1);
var new_bombs = ((((cljs.core.seq.call(null,ufos)) && (spaceinvaders.core.add_new_QMARK_.call(null,bombs,spaceinvaders.core.max_bombs,freq))))?cljs.core.conj.call(null,bombs,spaceinvaders.core.new_bomb.call(null,ufos)):bombs);
var dy = ((3) * spaceinvaders.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_bombs,dy){
return (function (p__39100){
var vec__39101 = p__39100;
var x = cljs.core.nth.call(null,vec__39101,(0),null);
var y = cljs.core.nth.call(null,vec__39101,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(freq,new_bombs,dy))
,new_bombs));
});
spaceinvaders.core.update_hits = (function spaceinvaders$core$update_hits(hits,new_hits){

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
spaceinvaders.core.update_tank = (function spaceinvaders$core$update_tank(p__39104){
var map__39105 = p__39104;
var map__39105__$1 = (((((!((map__39105 == null))))?(((((map__39105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39105):map__39105);
var tank = map__39105__$1;
var x = cljs.core.get.call(null,map__39105__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dir = cljs.core.get.call(null,map__39105__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));

var dx = (8);
var nxt_x = (x + (dir * dx));
var ouside_canvas_QMARK_ = ((function (dx,nxt_x,map__39105,map__39105__$1,tank,x,dir){
return (function (){
return (((nxt_x > (spaceinvaders.core.world_width - spaceinvaders.core.wt))) || ((nxt_x < (0))));
});})(dx,nxt_x,map__39105,map__39105__$1,tank,x,dir))
;
var dir_nxt = ((ouside_canvas_QMARK_.call(null))?((-1) * dir):dir);
return cljs.core.assoc.call(null,tank,new cljs.core.Keyword(null,"x","x",2099068185),((dir_nxt * dx) + x),new cljs.core.Keyword(null,"dir","dir",1734754661),dir_nxt);
});
spaceinvaders.core.move_stars = (function spaceinvaders$core$move_stars(stars){

var offset = 0.8;
var iter__4523__auto__ = ((function (offset){
return (function spaceinvaders$core$move_stars_$_iter__39107(s__39108){
return (new cljs.core.LazySeq(null,((function (offset){
return (function (){
var s__39108__$1 = s__39108;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__39108__$1);
if(temp__5735__auto__){
var s__39108__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39108__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39108__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39110 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39109 = (0);
while(true){
if((i__39109 < size__4522__auto__)){
var vec__39111 = cljs.core._nth.call(null,c__4521__auto__,i__39109);
var x = cljs.core.nth.call(null,vec__39111,(0),null);
var y = cljs.core.nth.call(null,vec__39111,(1),null);
var size = cljs.core.nth.call(null,vec__39111,(2),null);
cljs.core.chunk_append.call(null,b__39110,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(offset + y),spaceinvaders.core.world_height),size], null));

var G__39117 = (i__39109 + (1));
i__39109 = G__39117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39110),spaceinvaders$core$move_stars_$_iter__39107.call(null,cljs.core.chunk_rest.call(null,s__39108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39110),null);
}
} else {
var vec__39114 = cljs.core.first.call(null,s__39108__$2);
var x = cljs.core.nth.call(null,vec__39114,(0),null);
var y = cljs.core.nth.call(null,vec__39114,(1),null);
var size = cljs.core.nth.call(null,vec__39114,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(offset + y),spaceinvaders.core.world_height),size], null),spaceinvaders$core$move_stars_$_iter__39107.call(null,cljs.core.rest.call(null,s__39108__$2)));
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
return iter__4523__auto__.call(null,stars);
});
spaceinvaders.core.new_ufo = (function spaceinvaders$core$new_ufo(){
var margin = (spaceinvaders.core.world_width / (25));
var x = (spaceinvaders.core.rand_n.call(null,margin,(spaceinvaders.core.world_width - margin)) | (0));
var y = spaceinvaders.core.size_ufo2;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
spaceinvaders.core.update_ufos = (function spaceinvaders$core$update_ufos(ufos){

var freq = (1);
var new_ufos = ((spaceinvaders.core.add_new_QMARK_.call(null,ufos,spaceinvaders.core.max_ufos,freq))?cljs.core.conj.call(null,ufos,spaceinvaders.core.new_ufo.call(null)):ufos);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_ufos){
return (function (p__39118){
var vec__39119 = p__39118;
var x = cljs.core.nth.call(null,vec__39119,(0),null);
var y = cljs.core.nth.call(null,vec__39119,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceinvaders.core.rand_x.call(null,x),(y + spaceinvaders.core.vu)], null);
});})(freq,new_ufos))
,new_ufos));
});
spaceinvaders.core.init_state_BANG_ = (function spaceinvaders$core$init_state_BANG_(){
var w2 = (spaceinvaders.core.world_width / (2));
var stars = spaceinvaders.core.rand_stars.call(null,(120));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lifes","lifes",-2077908604),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"missiles","missiles",-600699149),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword(null,"ufos","ufos",2106350236),new cljs.core.Keyword(null,"bombs","bombs",1955561180),new cljs.core.Keyword(null,"state-counter","state-counter",494277693)],[(3),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),w2,new cljs.core.Keyword(null,"dir","dir",1734754661),(0)], null),cljs.core.PersistentHashSet.EMPTY,(0),stars,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w2,spaceinvaders.core.size_ufo2], null)]),cljs.core.PersistentHashSet.EMPTY,(0)]);
});
spaceinvaders.core.setup = (function spaceinvaders$core$setup(){
quil.core.frame_rate.call(null,spaceinvaders.core.frame_rate);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

quil.core.text_font.call(null,"VT323-Regular");

quil.core.text_size.call(null,(20));

return spaceinvaders.core.init_state_BANG_.call(null);
});
spaceinvaders.core.update_state = (function spaceinvaders$core$update_state(p__39122){
var map__39123 = p__39122;
var map__39123__$1 = (((((!((map__39123 == null))))?(((((map__39123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39123):map__39123);
var state = map__39123__$1;
var ufos = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var state_counter = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"state-counter","state-counter",494277693));
var lifes = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stars = cljs.core.get.call(null,map__39123__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var bg_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stars","stars",-556837771),spaceinvaders.core.move_stars.call(null,stars));
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
var explosions = spaceinvaders.core.detect_explosions.call(null,ufos,missiles);
var ufos_exploded = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,explosions));
var ufos_escaped = spaceinvaders.core.escaped.call(null,ufos);
var ufos_remaining = clojure.set.difference.call(null,ufos,ufos_exploded,ufos_escaped);
var ufos_next = spaceinvaders.core.update_ufos.call(null,ufos_remaining);
var hits_new = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__39123,map__39123__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,stars){
return (function (p__39125){
var vec__39126 = p__39125;
var x = cljs.core.nth.call(null,vec__39126,(0),null);
var y = cljs.core.nth.call(null,vec__39126,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"counter","counter",804008177),(0)], null);
});})(explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__39123,map__39123__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,stars))
,ufos_exploded));
var hits_next = spaceinvaders.core.update_hits.call(null,hits,hits_new);
var missiles_exploded = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.second,explosions));
var missiles_remaining = clojure.set.difference.call(null,missiles,missiles_exploded,spaceinvaders.core.escaped.call(null,missiles));
var missiles_next = spaceinvaders.core.update_missiles.call(null,missiles_remaining);
var bombs_exploded = spaceinvaders.core.exploded.call(null,bombs,tank);
var bombs_remaining = clojure.set.difference.call(null,bombs,bombs_exploded,spaceinvaders.core.escaped.call(null,bombs));
var bombs_next = spaceinvaders.core.update_bombs.call(null,bombs_remaining,ufos_remaining);
var score_next = ((score + cljs.core.count.call(null,ufos_exploded)) + (- cljs.core.count.call(null,ufos_escaped)));
var lifes_next = (lifes - cljs.core.count.call(null,bombs_exploded));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,bg_state,new cljs.core.Keyword(null,"tank","tank",-798661744),spaceinvaders.core.update_tank.call(null,tank)),new cljs.core.Keyword(null,"missiles","missiles",-600699149),missiles_next),new cljs.core.Keyword(null,"bombs","bombs",1955561180),bombs_next),new cljs.core.Keyword(null,"ufos","ufos",2106350236),ufos_next),new cljs.core.Keyword(null,"hits","hits",-2120002930),hits_next),new cljs.core.Keyword(null,"score","score",-1963588780),score_next),new cljs.core.Keyword(null,"lifes","lifes",-2077908604),lifes_next);

}
}
}
});
spaceinvaders.core.key_handler = (function spaceinvaders$core$key_handler(p__39129,p__39130){
var map__39131 = p__39129;
var map__39131__$1 = (((((!((map__39131 == null))))?(((((map__39131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39131):map__39131);
var state = map__39131__$1;
var tank = cljs.core.get.call(null,map__39131__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__39131__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var game_state = cljs.core.get.call(null,map__39131__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var map__39132 = p__39130;
var map__39132__$1 = (((((!((map__39132 == null))))?(((((map__39132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39132):map__39132);
var key = cljs.core.get.call(null,map__39132__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.call(null,map__39132__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)){
return state;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"q","q",689001697),key)){
return quil.core.exit.call(null);
} else {
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
return spaceinvaders.core.init_state_BANG_.call(null);
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
if((cljs.core.count.call(null,missiles) < spaceinvaders.core.max_missiles)){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"missiles","missiles",-600699149),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),(spaceinvaders.core.world_height - spaceinvaders.core.wt2)], null));
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
spaceinvaders.core.draw_state = (function spaceinvaders$core$draw_state(p__39135){
var map__39136 = p__39135;
var map__39136__$1 = (((((!((map__39136 == null))))?(((((map__39136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39136):map__39136);
var state = map__39136__$1;
var ufos = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var lifes = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stars = cljs.core.get.call(null,map__39136__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

spaceinvaders.core.draw_stars_BANG_.call(null,stars);

spaceinvaders.core.draw_missiles_BANG_.call(null,missiles);

spaceinvaders.core.draw_bombs_BANG_.call(null,bombs);

spaceinvaders.core.draw_munitions_BANG_.call(null,cljs.core.count.call(null,missiles));

spaceinvaders.core.draw_menu_BANG_.call(null,score,lifes);

spaceinvaders.core.draw_ufos_BANG_.call(null,ufos);

spaceinvaders.core.draw_tank_BANG_.call(null,tank);

var seq__39138_39142 = cljs.core.seq.call(null,hits);
var chunk__39139_39143 = null;
var count__39140_39144 = (0);
var i__39141_39145 = (0);
while(true){
if((i__39141_39145 < count__39140_39144)){
var hit_39146 = cljs.core._nth.call(null,chunk__39139_39143,i__39141_39145);
spaceinvaders.core.draw_explosion_BANG_.call(null,hit_39146);


var G__39147 = seq__39138_39142;
var G__39148 = chunk__39139_39143;
var G__39149 = count__39140_39144;
var G__39150 = (i__39141_39145 + (1));
seq__39138_39142 = G__39147;
chunk__39139_39143 = G__39148;
count__39140_39144 = G__39149;
i__39141_39145 = G__39150;
continue;
} else {
var temp__5735__auto___39151 = cljs.core.seq.call(null,seq__39138_39142);
if(temp__5735__auto___39151){
var seq__39138_39152__$1 = temp__5735__auto___39151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39138_39152__$1)){
var c__4550__auto___39153 = cljs.core.chunk_first.call(null,seq__39138_39152__$1);
var G__39154 = cljs.core.chunk_rest.call(null,seq__39138_39152__$1);
var G__39155 = c__4550__auto___39153;
var G__39156 = cljs.core.count.call(null,c__4550__auto___39153);
var G__39157 = (0);
seq__39138_39142 = G__39154;
chunk__39139_39143 = G__39155;
count__39140_39144 = G__39156;
i__39141_39145 = G__39157;
continue;
} else {
var hit_39158 = cljs.core.first.call(null,seq__39138_39152__$1);
spaceinvaders.core.draw_explosion_BANG_.call(null,hit_39158);


var G__39159 = cljs.core.next.call(null,seq__39138_39152__$1);
var G__39160 = null;
var G__39161 = (0);
var G__39162 = (0);
seq__39138_39142 = G__39159;
chunk__39139_39143 = G__39160;
count__39140_39144 = G__39161;
i__39141_39145 = G__39162;
continue;
}
} else {
}
}
break;
}

if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),game_state)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready","ready",1086465795),game_state)))){
return spaceinvaders.core.draw_game_over_BANG_.call(null);
} else {
return null;
}
});
spaceinvaders.core.run_sketch = (function spaceinvaders$core$run_sketch(){
spaceinvaders.core.spaceinvaders = (function spaceinvaders$core$run_sketch_$_spaceinvaders(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"spaceinvaders",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267)], null),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.update_state))?(function() { 
var G__39163__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.update_state,args);
};
var G__39163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39164__i = 0, G__39164__a = new Array(arguments.length -  0);
while (G__39164__i < G__39164__a.length) {G__39164__a[G__39164__i] = arguments[G__39164__i + 0]; ++G__39164__i;}
  args = new cljs.core.IndexedSeq(G__39164__a,0,null);
} 
return G__39163__delegate.call(this,args);};
G__39163.cljs$lang$maxFixedArity = 0;
G__39163.cljs$lang$applyTo = (function (arglist__39165){
var args = cljs.core.seq(arglist__39165);
return G__39163__delegate(args);
});
G__39163.cljs$core$IFn$_invoke$arity$variadic = G__39163__delegate;
return G__39163;
})()
:spaceinvaders.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceinvaders.core.world_width,spaceinvaders.core.world_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.setup))?(function() { 
var G__39166__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.setup,args);
};
var G__39166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39167__i = 0, G__39167__a = new Array(arguments.length -  0);
while (G__39167__i < G__39167__a.length) {G__39167__a[G__39167__i] = arguments[G__39167__i + 0]; ++G__39167__i;}
  args = new cljs.core.IndexedSeq(G__39167__a,0,null);
} 
return G__39166__delegate.call(this,args);};
G__39166.cljs$lang$maxFixedArity = 0;
G__39166.cljs$lang$applyTo = (function (arglist__39168){
var args = cljs.core.seq(arglist__39168);
return G__39166__delegate(args);
});
G__39166.cljs$core$IFn$_invoke$arity$variadic = G__39166__delegate;
return G__39166;
})()
:spaceinvaders.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.key_handler))?(function() { 
var G__39169__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.key_handler,args);
};
var G__39169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39170__i = 0, G__39170__a = new Array(arguments.length -  0);
while (G__39170__i < G__39170__a.length) {G__39170__a[G__39170__i] = arguments[G__39170__i + 0]; ++G__39170__i;}
  args = new cljs.core.IndexedSeq(G__39170__a,0,null);
} 
return G__39169__delegate.call(this,args);};
G__39169.cljs$lang$maxFixedArity = 0;
G__39169.cljs$lang$applyTo = (function (arglist__39171){
var args = cljs.core.seq(arglist__39171);
return G__39169__delegate(args);
});
G__39169.cljs$core$IFn$_invoke$arity$variadic = G__39169__delegate;
return G__39169;
})()
:spaceinvaders.core.key_handler),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.draw_state))?(function() { 
var G__39172__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.draw_state,args);
};
var G__39172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39173__i = 0, G__39173__a = new Array(arguments.length -  0);
while (G__39173__i < G__39173__a.length) {G__39173__a[G__39173__i] = arguments[G__39173__i + 0]; ++G__39173__i;}
  args = new cljs.core.IndexedSeq(G__39173__a,0,null);
} 
return G__39172__delegate.call(this,args);};
G__39172.cljs$lang$maxFixedArity = 0;
G__39172.cljs$lang$applyTo = (function (arglist__39174){
var args = cljs.core.seq(arglist__39174);
return G__39172__delegate(args);
});
G__39172.cljs$core$IFn$_invoke$arity$variadic = G__39172__delegate;
return G__39172;
})()
:spaceinvaders.core.draw_state));
});
goog.exportSymbol('spaceinvaders.core.spaceinvaders', spaceinvaders.core.spaceinvaders);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__34003__34004__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__34003__34004__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-on-top","keep-on-top",-970284267)], null)))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),spaceinvaders.core.spaceinvaders,new cljs.core.Keyword(null,"host-id","host-id",742376279),"spaceinvaders"], null));
}
});
goog.exportSymbol('spaceinvaders.core.run_sketch', spaceinvaders.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1594884521105
