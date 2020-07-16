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
spaceinvaders.core.wm = (0.4 * spaceinvaders.core.wt);
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
var delta = (0.1 * spaceinvaders.core.size_ufo);
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

var missile_img_50619 = (function (){
return quil.core.quad.call(null,0.5,0.2,(1),(1),0.5,0.7,(0),(1));
});
var seq__50603_50620 = cljs.core.seq.call(null,missiles);
var chunk__50604_50621 = null;
var count__50605_50622 = (0);
var i__50606_50623 = (0);
while(true){
if((i__50606_50623 < count__50605_50622)){
var vec__50613_50624 = cljs.core._nth.call(null,chunk__50604_50621,i__50606_50623);
var x_50625 = cljs.core.nth.call(null,vec__50613_50624,(0),null);
var y_50626 = cljs.core.nth.call(null,vec__50613_50624,(1),null);
quiltools.core.at.call(null,x_50625,y_50626,quiltools.core.in$.call(null,spaceinvaders.core.wm,spaceinvaders.core.wm,missile_img_50619)).call(null);


var G__50627 = seq__50603_50620;
var G__50628 = chunk__50604_50621;
var G__50629 = count__50605_50622;
var G__50630 = (i__50606_50623 + (1));
seq__50603_50620 = G__50627;
chunk__50604_50621 = G__50628;
count__50605_50622 = G__50629;
i__50606_50623 = G__50630;
continue;
} else {
var temp__5735__auto___50631 = cljs.core.seq.call(null,seq__50603_50620);
if(temp__5735__auto___50631){
var seq__50603_50632__$1 = temp__5735__auto___50631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50603_50632__$1)){
var c__4550__auto___50633 = cljs.core.chunk_first.call(null,seq__50603_50632__$1);
var G__50634 = cljs.core.chunk_rest.call(null,seq__50603_50632__$1);
var G__50635 = c__4550__auto___50633;
var G__50636 = cljs.core.count.call(null,c__4550__auto___50633);
var G__50637 = (0);
seq__50603_50620 = G__50634;
chunk__50604_50621 = G__50635;
count__50605_50622 = G__50636;
i__50606_50623 = G__50637;
continue;
} else {
var vec__50616_50638 = cljs.core.first.call(null,seq__50603_50632__$1);
var x_50639 = cljs.core.nth.call(null,vec__50616_50638,(0),null);
var y_50640 = cljs.core.nth.call(null,vec__50616_50638,(1),null);
quiltools.core.at.call(null,x_50639,y_50640,quiltools.core.in$.call(null,spaceinvaders.core.wm,spaceinvaders.core.wm,missile_img_50619)).call(null);


var G__50641 = cljs.core.next.call(null,seq__50603_50632__$1);
var G__50642 = null;
var G__50643 = (0);
var G__50644 = (0);
seq__50603_50620 = G__50641;
chunk__50604_50621 = G__50642;
count__50605_50622 = G__50643;
i__50606_50623 = G__50644;
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

var w_50661 = (0.24 * spaceinvaders.core.size_ufo);
var seq__50645_50662 = cljs.core.seq.call(null,missiles);
var chunk__50646_50663 = null;
var count__50647_50664 = (0);
var i__50648_50665 = (0);
while(true){
if((i__50648_50665 < count__50647_50664)){
var vec__50655_50666 = cljs.core._nth.call(null,chunk__50646_50663,i__50648_50665);
var x_50667 = cljs.core.nth.call(null,vec__50655_50666,(0),null);
var y_50668 = cljs.core.nth.call(null,vec__50655_50666,(1),null);
quil.core.ellipse.call(null,x_50667,y_50668,w_50661,w_50661);


var G__50669 = seq__50645_50662;
var G__50670 = chunk__50646_50663;
var G__50671 = count__50647_50664;
var G__50672 = (i__50648_50665 + (1));
seq__50645_50662 = G__50669;
chunk__50646_50663 = G__50670;
count__50647_50664 = G__50671;
i__50648_50665 = G__50672;
continue;
} else {
var temp__5735__auto___50673 = cljs.core.seq.call(null,seq__50645_50662);
if(temp__5735__auto___50673){
var seq__50645_50674__$1 = temp__5735__auto___50673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50645_50674__$1)){
var c__4550__auto___50675 = cljs.core.chunk_first.call(null,seq__50645_50674__$1);
var G__50676 = cljs.core.chunk_rest.call(null,seq__50645_50674__$1);
var G__50677 = c__4550__auto___50675;
var G__50678 = cljs.core.count.call(null,c__4550__auto___50675);
var G__50679 = (0);
seq__50645_50662 = G__50676;
chunk__50646_50663 = G__50677;
count__50647_50664 = G__50678;
i__50648_50665 = G__50679;
continue;
} else {
var vec__50658_50680 = cljs.core.first.call(null,seq__50645_50674__$1);
var x_50681 = cljs.core.nth.call(null,vec__50658_50680,(0),null);
var y_50682 = cljs.core.nth.call(null,vec__50658_50680,(1),null);
quil.core.ellipse.call(null,x_50681,y_50682,w_50661,w_50661);


var G__50683 = cljs.core.next.call(null,seq__50645_50674__$1);
var G__50684 = null;
var G__50685 = (0);
var G__50686 = (0);
seq__50645_50662 = G__50683;
chunk__50646_50663 = G__50684;
count__50647_50664 = G__50685;
i__50648_50665 = G__50686;
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

var w_50703 = (0.8 * spaceinvaders.core.size_ufo);
var seq__50687_50704 = cljs.core.seq.call(null,bombs);
var chunk__50688_50705 = null;
var count__50689_50706 = (0);
var i__50690_50707 = (0);
while(true){
if((i__50690_50707 < count__50689_50706)){
var vec__50697_50708 = cljs.core._nth.call(null,chunk__50688_50705,i__50690_50707);
var x_50709 = cljs.core.nth.call(null,vec__50697_50708,(0),null);
var y_50710 = cljs.core.nth.call(null,vec__50697_50708,(1),null);
quiltools.core.at.call(null,x_50709,y_50710,quiltools.core.in$.call(null,w_50703,w_50703,spaceinvaders.core.alien_img)).call(null);


var G__50711 = seq__50687_50704;
var G__50712 = chunk__50688_50705;
var G__50713 = count__50689_50706;
var G__50714 = (i__50690_50707 + (1));
seq__50687_50704 = G__50711;
chunk__50688_50705 = G__50712;
count__50689_50706 = G__50713;
i__50690_50707 = G__50714;
continue;
} else {
var temp__5735__auto___50715 = cljs.core.seq.call(null,seq__50687_50704);
if(temp__5735__auto___50715){
var seq__50687_50716__$1 = temp__5735__auto___50715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50687_50716__$1)){
var c__4550__auto___50717 = cljs.core.chunk_first.call(null,seq__50687_50716__$1);
var G__50718 = cljs.core.chunk_rest.call(null,seq__50687_50716__$1);
var G__50719 = c__4550__auto___50717;
var G__50720 = cljs.core.count.call(null,c__4550__auto___50717);
var G__50721 = (0);
seq__50687_50704 = G__50718;
chunk__50688_50705 = G__50719;
count__50689_50706 = G__50720;
i__50690_50707 = G__50721;
continue;
} else {
var vec__50700_50722 = cljs.core.first.call(null,seq__50687_50716__$1);
var x_50723 = cljs.core.nth.call(null,vec__50700_50722,(0),null);
var y_50724 = cljs.core.nth.call(null,vec__50700_50722,(1),null);
quiltools.core.at.call(null,x_50723,y_50724,quiltools.core.in$.call(null,w_50703,w_50703,spaceinvaders.core.alien_img)).call(null);


var G__50725 = cljs.core.next.call(null,seq__50687_50716__$1);
var G__50726 = null;
var G__50727 = (0);
var G__50728 = (0);
seq__50687_50704 = G__50725;
chunk__50688_50705 = G__50726;
count__50689_50706 = G__50727;
i__50690_50707 = G__50728;
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

var spacing_50733 = 0.04;
var w_50734 = (((1) - (spacing_50733 * (spaceinvaders.core.max_missiles - (1)))) / spaceinvaders.core.max_missiles);
var seq__50729_50735 = cljs.core.seq.call(null,cljs.core.range.call(null,spaceinvaders.core.max_missiles));
var chunk__50730_50736 = null;
var count__50731_50737 = (0);
var i__50732_50738 = (0);
while(true){
if((i__50732_50738 < count__50731_50737)){
var n_50739 = cljs.core._nth.call(null,chunk__50730_50736,i__50732_50738);
if((n_50739 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));
}

quil.core.ellipse.call(null,((w_50734 / (2)) + (n_50739 * (w_50734 + spacing_50733))),(0),w_50734,w_50734);


var G__50740 = seq__50729_50735;
var G__50741 = chunk__50730_50736;
var G__50742 = count__50731_50737;
var G__50743 = (i__50732_50738 + (1));
seq__50729_50735 = G__50740;
chunk__50730_50736 = G__50741;
count__50731_50737 = G__50742;
i__50732_50738 = G__50743;
continue;
} else {
var temp__5735__auto___50744 = cljs.core.seq.call(null,seq__50729_50735);
if(temp__5735__auto___50744){
var seq__50729_50745__$1 = temp__5735__auto___50744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50729_50745__$1)){
var c__4550__auto___50746 = cljs.core.chunk_first.call(null,seq__50729_50745__$1);
var G__50747 = cljs.core.chunk_rest.call(null,seq__50729_50745__$1);
var G__50748 = c__4550__auto___50746;
var G__50749 = cljs.core.count.call(null,c__4550__auto___50746);
var G__50750 = (0);
seq__50729_50735 = G__50747;
chunk__50730_50736 = G__50748;
count__50731_50737 = G__50749;
i__50732_50738 = G__50750;
continue;
} else {
var n_50751 = cljs.core.first.call(null,seq__50729_50745__$1);
if((n_50751 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));
}

quil.core.ellipse.call(null,((w_50734 / (2)) + (n_50751 * (w_50734 + spacing_50733))),(0),w_50734,w_50734);


var G__50752 = cljs.core.next.call(null,seq__50729_50745__$1);
var G__50753 = null;
var G__50754 = (0);
var G__50755 = (0);
seq__50729_50735 = G__50752;
chunk__50730_50736 = G__50753;
count__50731_50737 = G__50754;
i__50732_50738 = G__50755;
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

var seq__50756_50772 = cljs.core.seq.call(null,ufos);
var chunk__50757_50773 = null;
var count__50758_50774 = (0);
var i__50759_50775 = (0);
while(true){
if((i__50759_50775 < count__50758_50774)){
var vec__50766_50776 = cljs.core._nth.call(null,chunk__50757_50773,i__50759_50775);
var xu_50777 = cljs.core.nth.call(null,vec__50766_50776,(0),null);
var yu_50778 = cljs.core.nth.call(null,vec__50766_50776,(1),null);
quiltools.core.at.call(null,xu_50777,yu_50778,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__50779 = seq__50756_50772;
var G__50780 = chunk__50757_50773;
var G__50781 = count__50758_50774;
var G__50782 = (i__50759_50775 + (1));
seq__50756_50772 = G__50779;
chunk__50757_50773 = G__50780;
count__50758_50774 = G__50781;
i__50759_50775 = G__50782;
continue;
} else {
var temp__5735__auto___50783 = cljs.core.seq.call(null,seq__50756_50772);
if(temp__5735__auto___50783){
var seq__50756_50784__$1 = temp__5735__auto___50783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50756_50784__$1)){
var c__4550__auto___50785 = cljs.core.chunk_first.call(null,seq__50756_50784__$1);
var G__50786 = cljs.core.chunk_rest.call(null,seq__50756_50784__$1);
var G__50787 = c__4550__auto___50785;
var G__50788 = cljs.core.count.call(null,c__4550__auto___50785);
var G__50789 = (0);
seq__50756_50772 = G__50786;
chunk__50757_50773 = G__50787;
count__50758_50774 = G__50788;
i__50759_50775 = G__50789;
continue;
} else {
var vec__50769_50790 = cljs.core.first.call(null,seq__50756_50784__$1);
var xu_50791 = cljs.core.nth.call(null,vec__50769_50790,(0),null);
var yu_50792 = cljs.core.nth.call(null,vec__50769_50790,(1),null);
quiltools.core.at.call(null,xu_50791,yu_50792,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__50793 = cljs.core.next.call(null,seq__50756_50784__$1);
var G__50794 = null;
var G__50795 = (0);
var G__50796 = (0);
seq__50756_50772 = G__50793;
chunk__50757_50773 = G__50794;
count__50758_50774 = G__50795;
i__50759_50775 = G__50796;
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

var lifes_y_50797 = ((2) * spaceinvaders.core.top_margin);
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),spaceinvaders.core.top_margin,spaceinvaders.core.top_margin);

quil.core.text.call(null,["lifes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lifes)].join(''),spaceinvaders.core.top_margin,lifes_y_50797);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_score_BANG_ = (function spaceinvaders$core$draw_score_BANG_(score){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var txt_pos_50798 = spaceinvaders.core.top_margin;
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),txt_pos_50798,txt_pos_50798);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.flash_ufo_BANG_ = (function spaceinvaders$core$flash_ufo_BANG_(x,y,counter){
quil.core.push_style.call(null);

var blink_time_50799 = (4);
var colors_50800 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yellow-rose","yellow-rose",-1393460454),new cljs.core.Keyword(null,"electric-red","electric-red",-88027711),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"rose-garnet","rose-garnet",37248167)], null);
var phase_50801 = cljs.core.mod.call(null,cljs.core.quot.call(null,counter,blink_time_50799),cljs.core.count.call(null,colors_50800));
var next_color_50802 = colors_50800.call(null,phase_50801);
quiltools.core.at.call(null,x,y,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,next_color_50802))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.descend_ufo_BANG_ = (function spaceinvaders$core$descend_ufo_BANG_(x,y,counter){
var dy = cljs.core.mod.call(null,counter,(30));
return spaceinvaders.core.flash_ufo_BANG_.call(null,x,(y + dy),counter);
});
spaceinvaders.core.draw_explosion_BANG_ = (function spaceinvaders$core$draw_explosion_BANG_(p__50803){
var map__50804 = p__50803;
var map__50804__$1 = (((((!((map__50804 == null))))?(((((map__50804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50804):map__50804);
var hit = map__50804__$1;
var x = cljs.core.get.call(null,map__50804__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__50804__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var counter = cljs.core.get.call(null,map__50804__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
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

var seq__50806_50822 = cljs.core.seq.call(null,stars);
var chunk__50807_50823 = null;
var count__50808_50824 = (0);
var i__50809_50825 = (0);
while(true){
if((i__50809_50825 < count__50808_50824)){
var vec__50816_50826 = cljs.core._nth.call(null,chunk__50807_50823,i__50809_50825);
var x_50827 = cljs.core.nth.call(null,vec__50816_50826,(0),null);
var y_50828 = cljs.core.nth.call(null,vec__50816_50826,(1),null);
var s_50829 = cljs.core.nth.call(null,vec__50816_50826,(2),null);
quil.core.ellipse.call(null,x_50827,y_50828,s_50829,s_50829);


var G__50830 = seq__50806_50822;
var G__50831 = chunk__50807_50823;
var G__50832 = count__50808_50824;
var G__50833 = (i__50809_50825 + (1));
seq__50806_50822 = G__50830;
chunk__50807_50823 = G__50831;
count__50808_50824 = G__50832;
i__50809_50825 = G__50833;
continue;
} else {
var temp__5735__auto___50834 = cljs.core.seq.call(null,seq__50806_50822);
if(temp__5735__auto___50834){
var seq__50806_50835__$1 = temp__5735__auto___50834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50806_50835__$1)){
var c__4550__auto___50836 = cljs.core.chunk_first.call(null,seq__50806_50835__$1);
var G__50837 = cljs.core.chunk_rest.call(null,seq__50806_50835__$1);
var G__50838 = c__4550__auto___50836;
var G__50839 = cljs.core.count.call(null,c__4550__auto___50836);
var G__50840 = (0);
seq__50806_50822 = G__50837;
chunk__50807_50823 = G__50838;
count__50808_50824 = G__50839;
i__50809_50825 = G__50840;
continue;
} else {
var vec__50819_50841 = cljs.core.first.call(null,seq__50806_50835__$1);
var x_50842 = cljs.core.nth.call(null,vec__50819_50841,(0),null);
var y_50843 = cljs.core.nth.call(null,vec__50819_50841,(1),null);
var s_50844 = cljs.core.nth.call(null,vec__50819_50841,(2),null);
quil.core.ellipse.call(null,x_50842,y_50843,s_50844,s_50844);


var G__50845 = cljs.core.next.call(null,seq__50806_50835__$1);
var G__50846 = null;
var G__50847 = (0);
var G__50848 = (0);
seq__50806_50822 = G__50845;
chunk__50807_50823 = G__50846;
count__50808_50824 = G__50847;
i__50809_50825 = G__50848;
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

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p__50849){
var vec__50850 = p__50849;
var _ = cljs.core.nth.call(null,vec__50850,(0),null);
var y = cljs.core.nth.call(null,vec__50850,(1),null);
return (((y > spaceinvaders.core.world_height)) || ((y < (0))));
}),s));
});
spaceinvaders.core.update_missiles = (function spaceinvaders$core$update_missiles(missiles){

var dy = ((-2) * spaceinvaders.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (dy){
return (function (p__50853){
var vec__50854 = p__50853;
var x = cljs.core.nth.call(null,vec__50854,(0),null);
var y = cljs.core.nth.call(null,vec__50854,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(dy))
,missiles));
});
spaceinvaders.core.add_new_QMARK_ = (function spaceinvaders$core$add_new_QMARK_(s,limit,freq){

return (((cljs.core.count.call(null,s) <= limit)) && (quiltools.core.n_ticks_QMARK_.call(null,(freq * spaceinvaders.core.frame_rate))));
});
spaceinvaders.core.collision_QMARK_ = (function spaceinvaders$core$collision_QMARK_(p__50857,p__50858,wa,ha,wb,hb){
var vec__50859 = p__50857;
var xa = cljs.core.nth.call(null,vec__50859,(0),null);
var ya = cljs.core.nth.call(null,vec__50859,(1),null);
var vec__50862 = p__50858;
var xb = cljs.core.nth.call(null,vec__50862,(0),null);
var yb = cljs.core.nth.call(null,vec__50862,(1),null);

return ((((((xb - wa) <= xa)) && ((xa <= (xb + wb))))) && (((((yb - ha) <= ya)) && ((ya <= (yb + hb))))));
});
spaceinvaders.core.detect_explosions = (function spaceinvaders$core$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function spaceinvaders$core$detect_explosions_$_iter__50865(s__50866){
return (new cljs.core.LazySeq(null,(function (){
var s__50866__$1 = s__50866;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__50866__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__50866__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function spaceinvaders$core$detect_explosions_$_iter__50865_$_iter__50867(s__50868){
return (new cljs.core.LazySeq(null,((function (s__50866__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__50868__$1 = s__50868;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__50868__$1);
if(temp__5735__auto____$1){
var s__50868__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50868__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__50868__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__50870 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__50869 = (0);
while(true){
if((i__50869 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__50869);
if(spaceinvaders.core.collision_QMARK_.call(null,ufo,missile,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.wm,spaceinvaders.core.wm)){
cljs.core.chunk_append.call(null,b__50870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__50871 = (i__50869 + (1));
i__50869 = G__50871;
continue;
} else {
var G__50872 = (i__50869 + (1));
i__50869 = G__50872;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50870),spaceinvaders$core$detect_explosions_$_iter__50865_$_iter__50867.call(null,cljs.core.chunk_rest.call(null,s__50868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50870),null);
}
} else {
var missile = cljs.core.first.call(null,s__50868__$2);
if(spaceinvaders.core.collision_QMARK_.call(null,ufo,missile,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.wm,spaceinvaders.core.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),spaceinvaders$core$detect_explosions_$_iter__50865_$_iter__50867.call(null,cljs.core.rest.call(null,s__50868__$2)));
} else {
var G__50873 = cljs.core.rest.call(null,s__50868__$2);
s__50868__$1 = G__50873;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__50866__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__50866__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,spaceinvaders$core$detect_explosions_$_iter__50865.call(null,cljs.core.rest.call(null,s__50866__$1)));
} else {
var G__50874 = cljs.core.rest.call(null,s__50866__$1);
s__50866__$1 = G__50874;
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
spaceinvaders.core.exploded = (function spaceinvaders$core$exploded(bombs,p__50876){
var map__50877 = p__50876;
var map__50877__$1 = (((((!((map__50877 == null))))?(((((map__50877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50877):map__50877);
var xt = cljs.core.get.call(null,map__50877__$1,new cljs.core.Keyword(null,"x","x",2099068185));

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (map__50877,map__50877__$1,xt){
return (function (p1__50875_SHARP_){
return spaceinvaders.core.collision_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,spaceinvaders.core.yt], null),p1__50875_SHARP_,spaceinvaders.core.wt,spaceinvaders.core.ht,spaceinvaders.core.wb,spaceinvaders.core.wb);
});})(map__50877,map__50877__$1,xt))
,bombs));
});
spaceinvaders.core.new_bomb = (function spaceinvaders$core$new_bomb(ufos){
var vec__50879 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ufos));
var x = cljs.core.nth.call(null,vec__50879,(0),null);
var y = cljs.core.nth.call(null,vec__50879,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(spaceinvaders.core.size_ufo2 + x),(spaceinvaders.core.size_ufo2 + y)], null);
});
spaceinvaders.core.update_bombs = (function spaceinvaders$core$update_bombs(bombs,ufos){

var freq = (1);
var new_bombs = ((((cljs.core.seq.call(null,ufos)) && (spaceinvaders.core.add_new_QMARK_.call(null,bombs,spaceinvaders.core.max_bombs,freq))))?cljs.core.conj.call(null,bombs,spaceinvaders.core.new_bomb.call(null,ufos)):bombs);
var dy = ((3) * spaceinvaders.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_bombs,dy){
return (function (p__50882){
var vec__50883 = p__50882;
var x = cljs.core.nth.call(null,vec__50883,(0),null);
var y = cljs.core.nth.call(null,vec__50883,(1),null);
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
spaceinvaders.core.move_tank = (function spaceinvaders$core$move_tank(p__50886){
var map__50887 = p__50886;
var map__50887__$1 = (((((!((map__50887 == null))))?(((((map__50887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50887):map__50887);
var tank = map__50887__$1;
var x = cljs.core.get.call(null,map__50887__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dir = cljs.core.get.call(null,map__50887__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var speed = cljs.core.get.call(null,map__50887__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));

var nxt_x = (x + (dir * speed));
var ouside_canvas_QMARK_ = ((function (nxt_x,map__50887,map__50887__$1,tank,x,dir,speed){
return (function (){
return (((nxt_x > (spaceinvaders.core.world_width - spaceinvaders.core.wt))) || ((nxt_x < (0))));
});})(nxt_x,map__50887,map__50887__$1,tank,x,dir,speed))
;
var nxt_dir = ((ouside_canvas_QMARK_.call(null))?((-1) * dir):dir);
return cljs.core.assoc.call(null,tank,new cljs.core.Keyword(null,"x","x",2099068185),((nxt_dir * speed) + x),new cljs.core.Keyword(null,"dir","dir",1734754661),nxt_dir);
});
spaceinvaders.core.move_stars = (function spaceinvaders$core$move_stars(stars){
var iter__4523__auto__ = (function spaceinvaders$core$move_stars_$_iter__50889(s__50890){
return (new cljs.core.LazySeq(null,(function (){
var s__50890__$1 = s__50890;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__50890__$1);
if(temp__5735__auto__){
var s__50890__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50890__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__50890__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__50892 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__50891 = (0);
while(true){
if((i__50891 < size__4522__auto__)){
var vec__50893 = cljs.core._nth.call(null,c__4521__auto__,i__50891);
var x = cljs.core.nth.call(null,vec__50893,(0),null);
var y = cljs.core.nth.call(null,vec__50893,(1),null);
var size = cljs.core.nth.call(null,vec__50893,(2),null);
cljs.core.chunk_append.call(null,b__50892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),spaceinvaders.core.world_height),size], null));

var G__50899 = (i__50891 + (1));
i__50891 = G__50899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50892),spaceinvaders$core$move_stars_$_iter__50889.call(null,cljs.core.chunk_rest.call(null,s__50890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50892),null);
}
} else {
var vec__50896 = cljs.core.first.call(null,s__50890__$2);
var x = cljs.core.nth.call(null,vec__50896,(0),null);
var y = cljs.core.nth.call(null,vec__50896,(1),null);
var size = cljs.core.nth.call(null,vec__50896,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),spaceinvaders.core.world_height),size], null),spaceinvaders$core$move_stars_$_iter__50889.call(null,cljs.core.rest.call(null,s__50890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,stars);
});
spaceinvaders.core.create_ufo = (function spaceinvaders$core$create_ufo(){
var margin = (spaceinvaders.core.world_width / (25));
var x = (spaceinvaders.core.rand_n.call(null,margin,(spaceinvaders.core.world_width - margin)) | (0));
var y = spaceinvaders.core.size_ufo2;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
spaceinvaders.core.update_ufos = (function spaceinvaders$core$update_ufos(ufos){

var freq = (1);
var new_ufos = ((spaceinvaders.core.add_new_QMARK_.call(null,ufos,spaceinvaders.core.max_ufos,freq))?cljs.core.conj.call(null,ufos,spaceinvaders.core.create_ufo.call(null)):ufos);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_ufos){
return (function (p__50900){
var vec__50901 = p__50900;
var x = cljs.core.nth.call(null,vec__50901,(0),null);
var y = cljs.core.nth.call(null,vec__50901,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceinvaders.core.rand_x.call(null,x),(y + spaceinvaders.core.vu)], null);
});})(freq,new_ufos))
,new_ufos));
});
spaceinvaders.core.create_tank = (function spaceinvaders$core$create_tank(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(spaceinvaders.core.world_width / (2)),new cljs.core.Keyword(null,"dir","dir",1734754661),(0),new cljs.core.Keyword(null,"speed","speed",1257663751),8.0], null);
});
spaceinvaders.core.init_state_BANG_ = (function spaceinvaders$core$init_state_BANG_(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lifes","lifes",-2077908604),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"missiles","missiles",-600699149),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"stars","stars",-556837771),new cljs.core.Keyword(null,"ufos","ufos",2106350236),new cljs.core.Keyword(null,"bombs","bombs",1955561180),new cljs.core.Keyword(null,"state-counter","state-counter",494277693)],[(3),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"playing","playing",70013335),spaceinvaders.core.create_tank.call(null),cljs.core.PersistentHashSet.EMPTY,(0),spaceinvaders.core.rand_stars.call(null,(120)),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,(0)]);
});
spaceinvaders.core.setup = (function spaceinvaders$core$setup(){
quil.core.frame_rate.call(null,spaceinvaders.core.frame_rate);

cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

quil.core.text_font.call(null,"VT323-Regular");

quil.core.text_size.call(null,(20));

return spaceinvaders.core.init_state_BANG_.call(null);
});
spaceinvaders.core.update_state = (function spaceinvaders$core$update_state(p__50904){
var map__50905 = p__50904;
var map__50905__$1 = (((((!((map__50905 == null))))?(((((map__50905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50905):map__50905);
var state = map__50905__$1;
var ufos = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var state_counter = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"state-counter","state-counter",494277693));
var lifes = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stars = cljs.core.get.call(null,map__50905__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
var bg_state = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"stars","stars",-556837771),spaceinvaders.core.move_stars);
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
var hits_new = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__50905,map__50905__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,stars){
return (function (p__50907){
var vec__50908 = p__50907;
var x = cljs.core.nth.call(null,vec__50908,(0),null);
var y = cljs.core.nth.call(null,vec__50908,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"counter","counter",804008177),(0)], null);
});})(explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__50905,map__50905__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,stars))
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
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,bg_state,new cljs.core.Keyword(null,"tank","tank",-798661744),spaceinvaders.core.move_tank),new cljs.core.Keyword(null,"missiles","missiles",-600699149),missiles_next),new cljs.core.Keyword(null,"bombs","bombs",1955561180),bombs_next),new cljs.core.Keyword(null,"ufos","ufos",2106350236),ufos_next),new cljs.core.Keyword(null,"hits","hits",-2120002930),hits_next),new cljs.core.Keyword(null,"score","score",-1963588780),score_next),new cljs.core.Keyword(null,"lifes","lifes",-2077908604),lifes_next);

}
}
}
});
spaceinvaders.core.speed_up = (function spaceinvaders$core$speed_up(speed){
var x__4222__auto__ = 16.0;
var y__4223__auto__ = (speed + (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
spaceinvaders.core.speed_down = (function spaceinvaders$core$speed_down(speed){
var x__4219__auto__ = 0.0;
var y__4220__auto__ = (speed - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
spaceinvaders.core.key_handler = (function spaceinvaders$core$key_handler(p__50911,p__50912){
var map__50913 = p__50911;
var map__50913__$1 = (((((!((map__50913 == null))))?(((((map__50913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50913):map__50913);
var state = map__50913__$1;
var tank = cljs.core.get.call(null,map__50913__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__50913__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var game_state = cljs.core.get.call(null,map__50913__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var map__50914 = p__50912;
var map__50914__$1 = (((((!((map__50914 == null))))?(((((map__50914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50914):map__50914);
var key = cljs.core.get.call(null,map__50914__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.call(null,map__50914__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
console.log(cljs.core.pr_str.call(null,key_code));

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
var up = (38);
var down = (40);
if(cljs.core._EQ_.call(null,right,key_code)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(1));
} else {
if(cljs.core._EQ_.call(null,left,key_code)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"dir","dir",1734754661)], null),(-1));
} else {
if(cljs.core._EQ_.call(null,up,key_code)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),spaceinvaders.core.speed_up);
} else {
if(cljs.core._EQ_.call(null,down,key_code)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tank","tank",-798661744),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),spaceinvaders.core.speed_down);
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

}
}
});
spaceinvaders.core.draw_state = (function spaceinvaders$core$draw_state(p__50917){
var map__50918 = p__50917;
var map__50918__$1 = (((((!((map__50918 == null))))?(((((map__50918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50918):map__50918);
var state = map__50918__$1;
var ufos = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var lifes = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stars = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

spaceinvaders.core.draw_stars_BANG_.call(null,stars);

spaceinvaders.core.draw_missiles_BANG_.call(null,missiles);

spaceinvaders.core.draw_bombs_BANG_.call(null,bombs);

spaceinvaders.core.draw_munitions_BANG_.call(null,cljs.core.count.call(null,missiles));

spaceinvaders.core.draw_menu_BANG_.call(null,score,lifes);

spaceinvaders.core.draw_ufos_BANG_.call(null,ufos);

spaceinvaders.core.draw_tank_BANG_.call(null,tank);

var seq__50920_50924 = cljs.core.seq.call(null,hits);
var chunk__50921_50925 = null;
var count__50922_50926 = (0);
var i__50923_50927 = (0);
while(true){
if((i__50923_50927 < count__50922_50926)){
var hit_50928 = cljs.core._nth.call(null,chunk__50921_50925,i__50923_50927);
spaceinvaders.core.draw_explosion_BANG_.call(null,hit_50928);


var G__50929 = seq__50920_50924;
var G__50930 = chunk__50921_50925;
var G__50931 = count__50922_50926;
var G__50932 = (i__50923_50927 + (1));
seq__50920_50924 = G__50929;
chunk__50921_50925 = G__50930;
count__50922_50926 = G__50931;
i__50923_50927 = G__50932;
continue;
} else {
var temp__5735__auto___50933 = cljs.core.seq.call(null,seq__50920_50924);
if(temp__5735__auto___50933){
var seq__50920_50934__$1 = temp__5735__auto___50933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50920_50934__$1)){
var c__4550__auto___50935 = cljs.core.chunk_first.call(null,seq__50920_50934__$1);
var G__50936 = cljs.core.chunk_rest.call(null,seq__50920_50934__$1);
var G__50937 = c__4550__auto___50935;
var G__50938 = cljs.core.count.call(null,c__4550__auto___50935);
var G__50939 = (0);
seq__50920_50924 = G__50936;
chunk__50921_50925 = G__50937;
count__50922_50926 = G__50938;
i__50923_50927 = G__50939;
continue;
} else {
var hit_50940 = cljs.core.first.call(null,seq__50920_50934__$1);
spaceinvaders.core.draw_explosion_BANG_.call(null,hit_50940);


var G__50941 = cljs.core.next.call(null,seq__50920_50934__$1);
var G__50942 = null;
var G__50943 = (0);
var G__50944 = (0);
seq__50920_50924 = G__50941;
chunk__50921_50925 = G__50942;
count__50922_50926 = G__50943;
i__50923_50927 = G__50944;
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
var G__50945__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.update_state,args);
};
var G__50945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50946__i = 0, G__50946__a = new Array(arguments.length -  0);
while (G__50946__i < G__50946__a.length) {G__50946__a[G__50946__i] = arguments[G__50946__i + 0]; ++G__50946__i;}
  args = new cljs.core.IndexedSeq(G__50946__a,0,null);
} 
return G__50945__delegate.call(this,args);};
G__50945.cljs$lang$maxFixedArity = 0;
G__50945.cljs$lang$applyTo = (function (arglist__50947){
var args = cljs.core.seq(arglist__50947);
return G__50945__delegate(args);
});
G__50945.cljs$core$IFn$_invoke$arity$variadic = G__50945__delegate;
return G__50945;
})()
:spaceinvaders.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceinvaders.core.world_width,spaceinvaders.core.world_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.setup))?(function() { 
var G__50948__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.setup,args);
};
var G__50948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50949__i = 0, G__50949__a = new Array(arguments.length -  0);
while (G__50949__i < G__50949__a.length) {G__50949__a[G__50949__i] = arguments[G__50949__i + 0]; ++G__50949__i;}
  args = new cljs.core.IndexedSeq(G__50949__a,0,null);
} 
return G__50948__delegate.call(this,args);};
G__50948.cljs$lang$maxFixedArity = 0;
G__50948.cljs$lang$applyTo = (function (arglist__50950){
var args = cljs.core.seq(arglist__50950);
return G__50948__delegate(args);
});
G__50948.cljs$core$IFn$_invoke$arity$variadic = G__50948__delegate;
return G__50948;
})()
:spaceinvaders.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.key_handler))?(function() { 
var G__50951__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.key_handler,args);
};
var G__50951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50952__i = 0, G__50952__a = new Array(arguments.length -  0);
while (G__50952__i < G__50952__a.length) {G__50952__a[G__50952__i] = arguments[G__50952__i + 0]; ++G__50952__i;}
  args = new cljs.core.IndexedSeq(G__50952__a,0,null);
} 
return G__50951__delegate.call(this,args);};
G__50951.cljs$lang$maxFixedArity = 0;
G__50951.cljs$lang$applyTo = (function (arglist__50953){
var args = cljs.core.seq(arglist__50953);
return G__50951__delegate(args);
});
G__50951.cljs$core$IFn$_invoke$arity$variadic = G__50951__delegate;
return G__50951;
})()
:spaceinvaders.core.key_handler),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.draw_state))?(function() { 
var G__50954__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.draw_state,args);
};
var G__50954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50955__i = 0, G__50955__a = new Array(arguments.length -  0);
while (G__50955__i < G__50955__a.length) {G__50955__a[G__50955__i] = arguments[G__50955__i + 0]; ++G__50955__i;}
  args = new cljs.core.IndexedSeq(G__50955__a,0,null);
} 
return G__50954__delegate.call(this,args);};
G__50954.cljs$lang$maxFixedArity = 0;
G__50954.cljs$lang$applyTo = (function (arglist__50956){
var args = cljs.core.seq(arglist__50956);
return G__50954__delegate(args);
});
G__50954.cljs$core$IFn$_invoke$arity$variadic = G__50954__delegate;
return G__50954;
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

//# sourceMappingURL=core.js.map?rel=1594891322749
