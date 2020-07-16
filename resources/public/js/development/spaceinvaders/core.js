// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('quiltools.core');
goog.require('clojure.string');
goog.require('clojure.set');
spaceinvaders.core.world_height = (600);
spaceinvaders.core.world_width = (800);
spaceinvaders.core.vu = (3);
spaceinvaders.core.size_ufo = (42);
spaceinvaders.core.size_ufo2 = (spaceinvaders.core.size_ufo / (2));
spaceinvaders.core.max_ufos = (7);
spaceinvaders.core.wt = (42);
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

var missile_img_81607 = (function (){
return quil.core.quad.call(null,0.5,0.2,(1),(1),0.5,0.7,(0),(1));
});
var seq__81591_81608 = cljs.core.seq.call(null,missiles);
var chunk__81592_81609 = null;
var count__81593_81610 = (0);
var i__81594_81611 = (0);
while(true){
if((i__81594_81611 < count__81593_81610)){
var vec__81601_81612 = cljs.core._nth.call(null,chunk__81592_81609,i__81594_81611);
var x_81613 = cljs.core.nth.call(null,vec__81601_81612,(0),null);
var y_81614 = cljs.core.nth.call(null,vec__81601_81612,(1),null);
quiltools.core.at.call(null,x_81613,y_81614,quiltools.core.in$.call(null,spaceinvaders.core.wm,spaceinvaders.core.wm,missile_img_81607)).call(null);


var G__81615 = seq__81591_81608;
var G__81616 = chunk__81592_81609;
var G__81617 = count__81593_81610;
var G__81618 = (i__81594_81611 + (1));
seq__81591_81608 = G__81615;
chunk__81592_81609 = G__81616;
count__81593_81610 = G__81617;
i__81594_81611 = G__81618;
continue;
} else {
var temp__5735__auto___81619 = cljs.core.seq.call(null,seq__81591_81608);
if(temp__5735__auto___81619){
var seq__81591_81620__$1 = temp__5735__auto___81619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81591_81620__$1)){
var c__4550__auto___81621 = cljs.core.chunk_first.call(null,seq__81591_81620__$1);
var G__81622 = cljs.core.chunk_rest.call(null,seq__81591_81620__$1);
var G__81623 = c__4550__auto___81621;
var G__81624 = cljs.core.count.call(null,c__4550__auto___81621);
var G__81625 = (0);
seq__81591_81608 = G__81622;
chunk__81592_81609 = G__81623;
count__81593_81610 = G__81624;
i__81594_81611 = G__81625;
continue;
} else {
var vec__81604_81626 = cljs.core.first.call(null,seq__81591_81620__$1);
var x_81627 = cljs.core.nth.call(null,vec__81604_81626,(0),null);
var y_81628 = cljs.core.nth.call(null,vec__81604_81626,(1),null);
quiltools.core.at.call(null,x_81627,y_81628,quiltools.core.in$.call(null,spaceinvaders.core.wm,spaceinvaders.core.wm,missile_img_81607)).call(null);


var G__81629 = cljs.core.next.call(null,seq__81591_81620__$1);
var G__81630 = null;
var G__81631 = (0);
var G__81632 = (0);
seq__81591_81608 = G__81629;
chunk__81592_81609 = G__81630;
count__81593_81610 = G__81631;
i__81594_81611 = G__81632;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_bombs_BANG_ = (function spaceinvaders$core$draw_bombs_BANG_(bombs){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

var w_81649 = (0.24 * spaceinvaders.core.size_ufo);
var seq__81633_81650 = cljs.core.seq.call(null,bombs);
var chunk__81634_81651 = null;
var count__81635_81652 = (0);
var i__81636_81653 = (0);
while(true){
if((i__81636_81653 < count__81635_81652)){
var vec__81643_81654 = cljs.core._nth.call(null,chunk__81634_81651,i__81636_81653);
var x_81655 = cljs.core.nth.call(null,vec__81643_81654,(0),null);
var y_81656 = cljs.core.nth.call(null,vec__81643_81654,(1),null);
quil.core.ellipse.call(null,x_81655,y_81656,w_81649,w_81649);


var G__81657 = seq__81633_81650;
var G__81658 = chunk__81634_81651;
var G__81659 = count__81635_81652;
var G__81660 = (i__81636_81653 + (1));
seq__81633_81650 = G__81657;
chunk__81634_81651 = G__81658;
count__81635_81652 = G__81659;
i__81636_81653 = G__81660;
continue;
} else {
var temp__5735__auto___81661 = cljs.core.seq.call(null,seq__81633_81650);
if(temp__5735__auto___81661){
var seq__81633_81662__$1 = temp__5735__auto___81661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81633_81662__$1)){
var c__4550__auto___81663 = cljs.core.chunk_first.call(null,seq__81633_81662__$1);
var G__81664 = cljs.core.chunk_rest.call(null,seq__81633_81662__$1);
var G__81665 = c__4550__auto___81663;
var G__81666 = cljs.core.count.call(null,c__4550__auto___81663);
var G__81667 = (0);
seq__81633_81650 = G__81664;
chunk__81634_81651 = G__81665;
count__81635_81652 = G__81666;
i__81636_81653 = G__81667;
continue;
} else {
var vec__81646_81668 = cljs.core.first.call(null,seq__81633_81662__$1);
var x_81669 = cljs.core.nth.call(null,vec__81646_81668,(0),null);
var y_81670 = cljs.core.nth.call(null,vec__81646_81668,(1),null);
quil.core.ellipse.call(null,x_81669,y_81670,w_81649,w_81649);


var G__81671 = cljs.core.next.call(null,seq__81633_81662__$1);
var G__81672 = null;
var G__81673 = (0);
var G__81674 = (0);
seq__81633_81650 = G__81671;
chunk__81634_81651 = G__81672;
count__81635_81652 = G__81673;
i__81636_81653 = G__81674;
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

var w_81691 = (0.8 * spaceinvaders.core.size_ufo);
var seq__81675_81692 = cljs.core.seq.call(null,bombs);
var chunk__81676_81693 = null;
var count__81677_81694 = (0);
var i__81678_81695 = (0);
while(true){
if((i__81678_81695 < count__81677_81694)){
var vec__81685_81696 = cljs.core._nth.call(null,chunk__81676_81693,i__81678_81695);
var x_81697 = cljs.core.nth.call(null,vec__81685_81696,(0),null);
var y_81698 = cljs.core.nth.call(null,vec__81685_81696,(1),null);
quiltools.core.at.call(null,x_81697,y_81698,quiltools.core.in$.call(null,w_81691,w_81691,spaceinvaders.core.alien_img)).call(null);


var G__81699 = seq__81675_81692;
var G__81700 = chunk__81676_81693;
var G__81701 = count__81677_81694;
var G__81702 = (i__81678_81695 + (1));
seq__81675_81692 = G__81699;
chunk__81676_81693 = G__81700;
count__81677_81694 = G__81701;
i__81678_81695 = G__81702;
continue;
} else {
var temp__5735__auto___81703 = cljs.core.seq.call(null,seq__81675_81692);
if(temp__5735__auto___81703){
var seq__81675_81704__$1 = temp__5735__auto___81703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81675_81704__$1)){
var c__4550__auto___81705 = cljs.core.chunk_first.call(null,seq__81675_81704__$1);
var G__81706 = cljs.core.chunk_rest.call(null,seq__81675_81704__$1);
var G__81707 = c__4550__auto___81705;
var G__81708 = cljs.core.count.call(null,c__4550__auto___81705);
var G__81709 = (0);
seq__81675_81692 = G__81706;
chunk__81676_81693 = G__81707;
count__81677_81694 = G__81708;
i__81678_81695 = G__81709;
continue;
} else {
var vec__81688_81710 = cljs.core.first.call(null,seq__81675_81704__$1);
var x_81711 = cljs.core.nth.call(null,vec__81688_81710,(0),null);
var y_81712 = cljs.core.nth.call(null,vec__81688_81710,(1),null);
quiltools.core.at.call(null,x_81711,y_81712,quiltools.core.in$.call(null,w_81691,w_81691,spaceinvaders.core.alien_img)).call(null);


var G__81713 = cljs.core.next.call(null,seq__81675_81704__$1);
var G__81714 = null;
var G__81715 = (0);
var G__81716 = (0);
seq__81675_81692 = G__81713;
chunk__81676_81693 = G__81714;
count__81677_81694 = G__81715;
i__81678_81695 = G__81716;
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

var spacing_81721 = 0.04;
var w_81722 = (((1) - (spacing_81721 * (spaceinvaders.core.max_missiles - (1)))) / spaceinvaders.core.max_missiles);
var seq__81717_81723 = cljs.core.seq.call(null,cljs.core.range.call(null,spaceinvaders.core.max_missiles));
var chunk__81718_81724 = null;
var count__81719_81725 = (0);
var i__81720_81726 = (0);
while(true){
if((i__81720_81726 < count__81719_81725)){
var n_81727 = cljs.core._nth.call(null,chunk__81718_81724,i__81720_81726);
if((n_81727 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));
}

quil.core.ellipse.call(null,((w_81722 / (2)) + (n_81727 * (w_81722 + spacing_81721))),(0),w_81722,w_81722);


var G__81728 = seq__81717_81723;
var G__81729 = chunk__81718_81724;
var G__81730 = count__81719_81725;
var G__81731 = (i__81720_81726 + (1));
seq__81717_81723 = G__81728;
chunk__81718_81724 = G__81729;
count__81719_81725 = G__81730;
i__81720_81726 = G__81731;
continue;
} else {
var temp__5735__auto___81732 = cljs.core.seq.call(null,seq__81717_81723);
if(temp__5735__auto___81732){
var seq__81717_81733__$1 = temp__5735__auto___81732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81717_81733__$1)){
var c__4550__auto___81734 = cljs.core.chunk_first.call(null,seq__81717_81733__$1);
var G__81735 = cljs.core.chunk_rest.call(null,seq__81717_81733__$1);
var G__81736 = c__4550__auto___81734;
var G__81737 = cljs.core.count.call(null,c__4550__auto___81734);
var G__81738 = (0);
seq__81717_81723 = G__81735;
chunk__81718_81724 = G__81736;
count__81719_81725 = G__81737;
i__81720_81726 = G__81738;
continue;
} else {
var n_81739 = cljs.core.first.call(null,seq__81717_81733__$1);
if((n_81739 < n_missiles)){
quil.core.no_fill.call(null);
} else {
cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"orange","orange",73816386).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));
}

quil.core.ellipse.call(null,((w_81722 / (2)) + (n_81739 * (w_81722 + spacing_81721))),(0),w_81722,w_81722);


var G__81740 = cljs.core.next.call(null,seq__81717_81733__$1);
var G__81741 = null;
var G__81742 = (0);
var G__81743 = (0);
seq__81717_81723 = G__81740;
chunk__81718_81724 = G__81741;
count__81719_81725 = G__81742;
i__81720_81726 = G__81743;
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

var seq__81744_81760 = cljs.core.seq.call(null,ufos);
var chunk__81745_81761 = null;
var count__81746_81762 = (0);
var i__81747_81763 = (0);
while(true){
if((i__81747_81763 < count__81746_81762)){
var vec__81754_81764 = cljs.core._nth.call(null,chunk__81745_81761,i__81747_81763);
var xu_81765 = cljs.core.nth.call(null,vec__81754_81764,(0),null);
var yu_81766 = cljs.core.nth.call(null,vec__81754_81764,(1),null);
quiltools.core.at.call(null,xu_81765,yu_81766,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__81767 = seq__81744_81760;
var G__81768 = chunk__81745_81761;
var G__81769 = count__81746_81762;
var G__81770 = (i__81747_81763 + (1));
seq__81744_81760 = G__81767;
chunk__81745_81761 = G__81768;
count__81746_81762 = G__81769;
i__81747_81763 = G__81770;
continue;
} else {
var temp__5735__auto___81771 = cljs.core.seq.call(null,seq__81744_81760);
if(temp__5735__auto___81771){
var seq__81744_81772__$1 = temp__5735__auto___81771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81744_81772__$1)){
var c__4550__auto___81773 = cljs.core.chunk_first.call(null,seq__81744_81772__$1);
var G__81774 = cljs.core.chunk_rest.call(null,seq__81744_81772__$1);
var G__81775 = c__4550__auto___81773;
var G__81776 = cljs.core.count.call(null,c__4550__auto___81773);
var G__81777 = (0);
seq__81744_81760 = G__81774;
chunk__81745_81761 = G__81775;
count__81746_81762 = G__81776;
i__81747_81763 = G__81777;
continue;
} else {
var vec__81757_81778 = cljs.core.first.call(null,seq__81744_81772__$1);
var xu_81779 = cljs.core.nth.call(null,vec__81757_81778,(0),null);
var yu_81780 = cljs.core.nth.call(null,vec__81757_81778,(1),null);
quiltools.core.at.call(null,xu_81779,yu_81780,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,new cljs.core.Keyword(null,"green","green",-945526839)))).call(null);


var G__81781 = cljs.core.next.call(null,seq__81744_81772__$1);
var G__81782 = null;
var G__81783 = (0);
var G__81784 = (0);
seq__81744_81760 = G__81781;
chunk__81745_81761 = G__81782;
count__81746_81762 = G__81783;
i__81747_81763 = G__81784;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.core.tank_img = (function spaceinvaders$core$tank_img(){
quil.core.no_stroke.call(null);

quil.core.rect.call(null,0.475,0.0,0.05,0.2);

quil.core.rect.call(null,0.4,0.15,0.2,0.2);

quil.core.rect.call(null,0.1,0.35,0.8,0.2);

return quil.core.rect.call(null,0.05,0.5,0.9,0.5);
});
spaceinvaders.core.draw_tank_BANG_ = (function spaceinvaders$core$draw_tank_BANG_(tank){
quil.core.push_style.call(null);

cljs.core.apply.call(null,quil.core.fill,new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

quiltools.core.at.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(tank),spaceinvaders.core.yt,quiltools.core.in$.call(null,spaceinvaders.core.wt,spaceinvaders.core.ht,spaceinvaders.core.tank_img)).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_menu_BANG_ = (function spaceinvaders$core$draw_menu_BANG_(score,lifes){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var lifes_y_81785 = ((2) * spaceinvaders.core.top_margin);
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),spaceinvaders.core.top_margin,spaceinvaders.core.top_margin);

quil.core.text.call(null,["lifes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lifes)].join(''),spaceinvaders.core.top_margin,lifes_y_81785);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.draw_score_BANG_ = (function spaceinvaders$core$draw_score_BANG_(score){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var txt_pos_81786 = spaceinvaders.core.top_margin;
quil.core.text.call(null,["score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join(''),txt_pos_81786,txt_pos_81786);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.flash_ufo_BANG_ = (function spaceinvaders$core$flash_ufo_BANG_(x,y,counter){
quil.core.push_style.call(null);

var blink_time_81787 = (4);
var colors_81788 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yellow-rose","yellow-rose",-1393460454),new cljs.core.Keyword(null,"electric-red","electric-red",-88027711),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"rose-garnet","rose-garnet",37248167)], null);
var phase_81789 = cljs.core.mod.call(null,cljs.core.quot.call(null,counter,blink_time_81787),cljs.core.count.call(null,colors_81788));
var next_color_81790 = colors_81788.call(null,phase_81789);
quiltools.core.at.call(null,x,y,quiltools.core.in$.call(null,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.ufo_img.call(null,next_color_81790))).call(null);

return quil.core.pop_style.call(null);
});
spaceinvaders.core.descend_ufo_BANG_ = (function spaceinvaders$core$descend_ufo_BANG_(x,y,counter){
var dy = cljs.core.mod.call(null,counter,(30));
return spaceinvaders.core.flash_ufo_BANG_.call(null,x,(y + dy),counter);
});
spaceinvaders.core.draw_explosion_BANG_ = (function spaceinvaders$core$draw_explosion_BANG_(p__81791){
var map__81792 = p__81791;
var map__81792__$1 = (((((!((map__81792 == null))))?(((((map__81792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81792):map__81792);
var hit = map__81792__$1;
var x = cljs.core.get.call(null,map__81792__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__81792__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var counter = cljs.core.get.call(null,map__81792__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
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

var seq__81794_81810 = cljs.core.seq.call(null,stars);
var chunk__81795_81811 = null;
var count__81796_81812 = (0);
var i__81797_81813 = (0);
while(true){
if((i__81797_81813 < count__81796_81812)){
var vec__81804_81814 = cljs.core._nth.call(null,chunk__81795_81811,i__81797_81813);
var x_81815 = cljs.core.nth.call(null,vec__81804_81814,(0),null);
var y_81816 = cljs.core.nth.call(null,vec__81804_81814,(1),null);
var s_81817 = cljs.core.nth.call(null,vec__81804_81814,(2),null);
quil.core.ellipse.call(null,x_81815,y_81816,s_81817,s_81817);


var G__81818 = seq__81794_81810;
var G__81819 = chunk__81795_81811;
var G__81820 = count__81796_81812;
var G__81821 = (i__81797_81813 + (1));
seq__81794_81810 = G__81818;
chunk__81795_81811 = G__81819;
count__81796_81812 = G__81820;
i__81797_81813 = G__81821;
continue;
} else {
var temp__5735__auto___81822 = cljs.core.seq.call(null,seq__81794_81810);
if(temp__5735__auto___81822){
var seq__81794_81823__$1 = temp__5735__auto___81822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81794_81823__$1)){
var c__4550__auto___81824 = cljs.core.chunk_first.call(null,seq__81794_81823__$1);
var G__81825 = cljs.core.chunk_rest.call(null,seq__81794_81823__$1);
var G__81826 = c__4550__auto___81824;
var G__81827 = cljs.core.count.call(null,c__4550__auto___81824);
var G__81828 = (0);
seq__81794_81810 = G__81825;
chunk__81795_81811 = G__81826;
count__81796_81812 = G__81827;
i__81797_81813 = G__81828;
continue;
} else {
var vec__81807_81829 = cljs.core.first.call(null,seq__81794_81823__$1);
var x_81830 = cljs.core.nth.call(null,vec__81807_81829,(0),null);
var y_81831 = cljs.core.nth.call(null,vec__81807_81829,(1),null);
var s_81832 = cljs.core.nth.call(null,vec__81807_81829,(2),null);
quil.core.ellipse.call(null,x_81830,y_81831,s_81832,s_81832);


var G__81833 = cljs.core.next.call(null,seq__81794_81823__$1);
var G__81834 = null;
var G__81835 = (0);
var G__81836 = (0);
seq__81794_81810 = G__81833;
chunk__81795_81811 = G__81834;
count__81796_81812 = G__81835;
i__81797_81813 = G__81836;
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

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (p__81837){
var vec__81838 = p__81837;
var _ = cljs.core.nth.call(null,vec__81838,(0),null);
var y = cljs.core.nth.call(null,vec__81838,(1),null);
return (((y > spaceinvaders.core.world_height)) || ((y < (0))));
}),s));
});
spaceinvaders.core.update_missiles = (function spaceinvaders$core$update_missiles(missiles){

var dy = ((-2) * spaceinvaders.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (dy){
return (function (p__81841){
var vec__81842 = p__81841;
var x = cljs.core.nth.call(null,vec__81842,(0),null);
var y = cljs.core.nth.call(null,vec__81842,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(dy + y)], null);
});})(dy))
,missiles));
});
spaceinvaders.core.add_new_QMARK_ = (function spaceinvaders$core$add_new_QMARK_(s,limit,freq){

return (((cljs.core.count.call(null,s) <= limit)) && (quiltools.core.n_ticks_QMARK_.call(null,(freq * spaceinvaders.core.frame_rate))));
});
spaceinvaders.core.collision_QMARK_ = (function spaceinvaders$core$collision_QMARK_(p__81845,p__81846,wa,ha,wb,hb){
var vec__81847 = p__81845;
var xa = cljs.core.nth.call(null,vec__81847,(0),null);
var ya = cljs.core.nth.call(null,vec__81847,(1),null);
var vec__81850 = p__81846;
var xb = cljs.core.nth.call(null,vec__81850,(0),null);
var yb = cljs.core.nth.call(null,vec__81850,(1),null);

return ((((((xb - wa) <= xa)) && ((xa <= (xb + wb))))) && (((((yb - ha) <= ya)) && ((ya <= (yb + hb))))));
});
spaceinvaders.core.detect_explosions = (function spaceinvaders$core$detect_explosions(ufos,missiles){

return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function spaceinvaders$core$detect_explosions_$_iter__81853(s__81854){
return (new cljs.core.LazySeq(null,(function (){
var s__81854__$1 = s__81854;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__81854__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ufo = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__81854__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function spaceinvaders$core$detect_explosions_$_iter__81853_$_iter__81855(s__81856){
return (new cljs.core.LazySeq(null,((function (s__81854__$1,ufo,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__81856__$1 = s__81856;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__81856__$1);
if(temp__5735__auto____$1){
var s__81856__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81856__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__81856__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__81858 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__81857 = (0);
while(true){
if((i__81857 < size__4522__auto__)){
var missile = cljs.core._nth.call(null,c__4521__auto__,i__81857);
if(spaceinvaders.core.collision_QMARK_.call(null,ufo,missile,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.wm,spaceinvaders.core.wm)){
cljs.core.chunk_append.call(null,b__81858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null));

var G__81859 = (i__81857 + (1));
i__81857 = G__81859;
continue;
} else {
var G__81860 = (i__81857 + (1));
i__81857 = G__81860;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81858),spaceinvaders$core$detect_explosions_$_iter__81853_$_iter__81855.call(null,cljs.core.chunk_rest.call(null,s__81856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81858),null);
}
} else {
var missile = cljs.core.first.call(null,s__81856__$2);
if(spaceinvaders.core.collision_QMARK_.call(null,ufo,missile,spaceinvaders.core.size_ufo,spaceinvaders.core.size_ufo,spaceinvaders.core.wm,spaceinvaders.core.wm)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ufo,missile], null),spaceinvaders$core$detect_explosions_$_iter__81853_$_iter__81855.call(null,cljs.core.rest.call(null,s__81856__$2)));
} else {
var G__81861 = cljs.core.rest.call(null,s__81856__$2);
s__81856__$1 = G__81861;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__81854__$1,ufo,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__81854__$1,ufo,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,missiles));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,spaceinvaders$core$detect_explosions_$_iter__81853.call(null,cljs.core.rest.call(null,s__81854__$1)));
} else {
var G__81862 = cljs.core.rest.call(null,s__81854__$1);
s__81854__$1 = G__81862;
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
spaceinvaders.core.exploded = (function spaceinvaders$core$exploded(bombs,p__81864){
var map__81865 = p__81864;
var map__81865__$1 = (((((!((map__81865 == null))))?(((((map__81865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81865):map__81865);
var xt = cljs.core.get.call(null,map__81865__$1,new cljs.core.Keyword(null,"x","x",2099068185));

return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (map__81865,map__81865__$1,xt){
return (function (p1__81863_SHARP_){
return spaceinvaders.core.collision_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,spaceinvaders.core.yt], null),p1__81863_SHARP_,spaceinvaders.core.wt,spaceinvaders.core.ht,spaceinvaders.core.wb,spaceinvaders.core.wb);
});})(map__81865,map__81865__$1,xt))
,bombs));
});
spaceinvaders.core.new_bomb = (function spaceinvaders$core$new_bomb(ufos){
var vec__81867 = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,ufos));
var x = cljs.core.nth.call(null,vec__81867,(0),null);
var y = cljs.core.nth.call(null,vec__81867,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(spaceinvaders.core.size_ufo2 + x),(spaceinvaders.core.size_ufo2 + y)], null);
});
spaceinvaders.core.update_bombs = (function spaceinvaders$core$update_bombs(bombs,ufos){

var freq = (1);
var new_bombs = ((((cljs.core.seq.call(null,ufos)) && (spaceinvaders.core.add_new_QMARK_.call(null,bombs,spaceinvaders.core.max_bombs,freq))))?cljs.core.conj.call(null,bombs,spaceinvaders.core.new_bomb.call(null,ufos)):bombs);
var dy = ((3) * spaceinvaders.core.vu);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (freq,new_bombs,dy){
return (function (p__81870){
var vec__81871 = p__81870;
var x = cljs.core.nth.call(null,vec__81871,(0),null);
var y = cljs.core.nth.call(null,vec__81871,(1),null);
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
spaceinvaders.core.move_tank = (function spaceinvaders$core$move_tank(p__81874){
var map__81875 = p__81874;
var map__81875__$1 = (((((!((map__81875 == null))))?(((((map__81875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81875):map__81875);
var tank = map__81875__$1;
var x = cljs.core.get.call(null,map__81875__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dir = cljs.core.get.call(null,map__81875__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var speed = cljs.core.get.call(null,map__81875__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));

var nxt_x = (x + (dir * speed));
var ouside_canvas_QMARK_ = ((function (nxt_x,map__81875,map__81875__$1,tank,x,dir,speed){
return (function (){
return (((nxt_x > (spaceinvaders.core.world_width - spaceinvaders.core.wt))) || ((nxt_x < (0))));
});})(nxt_x,map__81875,map__81875__$1,tank,x,dir,speed))
;
var nxt_dir = ((ouside_canvas_QMARK_.call(null))?((-1) * dir):dir);
return cljs.core.assoc.call(null,tank,new cljs.core.Keyword(null,"x","x",2099068185),((nxt_dir * speed) + x),new cljs.core.Keyword(null,"dir","dir",1734754661),nxt_dir);
});
spaceinvaders.core.move_stars = (function spaceinvaders$core$move_stars(stars){
var iter__4523__auto__ = (function spaceinvaders$core$move_stars_$_iter__81877(s__81878){
return (new cljs.core.LazySeq(null,(function (){
var s__81878__$1 = s__81878;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__81878__$1);
if(temp__5735__auto__){
var s__81878__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81878__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__81878__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__81880 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__81879 = (0);
while(true){
if((i__81879 < size__4522__auto__)){
var vec__81881 = cljs.core._nth.call(null,c__4521__auto__,i__81879);
var x = cljs.core.nth.call(null,vec__81881,(0),null);
var y = cljs.core.nth.call(null,vec__81881,(1),null);
var size = cljs.core.nth.call(null,vec__81881,(2),null);
cljs.core.chunk_append.call(null,b__81880,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),spaceinvaders.core.world_height),size], null));

var G__81887 = (i__81879 + (1));
i__81879 = G__81887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81880),spaceinvaders$core$move_stars_$_iter__81877.call(null,cljs.core.chunk_rest.call(null,s__81878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81880),null);
}
} else {
var vec__81884 = cljs.core.first.call(null,s__81878__$2);
var x = cljs.core.nth.call(null,vec__81884,(0),null);
var y = cljs.core.nth.call(null,vec__81884,(1),null);
var size = cljs.core.nth.call(null,vec__81884,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),spaceinvaders.core.world_height),size], null),spaceinvaders$core$move_stars_$_iter__81877.call(null,cljs.core.rest.call(null,s__81878__$2)));
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
return (function (p__81888){
var vec__81889 = p__81888;
var x = cljs.core.nth.call(null,vec__81889,(0),null);
var y = cljs.core.nth.call(null,vec__81889,(1),null);
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
spaceinvaders.core.update_state = (function spaceinvaders$core$update_state(p__81892){
var map__81893 = p__81892;
var map__81893__$1 = (((((!((map__81893 == null))))?(((((map__81893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81893):map__81893);
var state = map__81893__$1;
var ufos = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var state_counter = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"state-counter","state-counter",494277693));
var lifes = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stars = cljs.core.get.call(null,map__81893__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
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
var hits_new = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__81893,map__81893__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,stars){
return (function (p__81895){
var vec__81896 = p__81895;
var x = cljs.core.nth.call(null,vec__81896,(0),null);
var y = cljs.core.nth.call(null,vec__81896,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"counter","counter",804008177),(0)], null);
});})(explosions,ufos_exploded,ufos_escaped,ufos_remaining,ufos_next,bg_state,map__81893,map__81893__$1,state,ufos,bombs,state_counter,lifes,hits,game_state,tank,missiles,score,stars))
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
spaceinvaders.core.key_handler = (function spaceinvaders$core$key_handler(p__81899,p__81900){
var map__81901 = p__81899;
var map__81901__$1 = (((((!((map__81901 == null))))?(((((map__81901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81901):map__81901);
var state = map__81901__$1;
var tank = cljs.core.get.call(null,map__81901__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__81901__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var game_state = cljs.core.get.call(null,map__81901__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var map__81902 = p__81900;
var map__81902__$1 = (((((!((map__81902 == null))))?(((((map__81902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81902):map__81902);
var key = cljs.core.get.call(null,map__81902__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.call(null,map__81902__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
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
spaceinvaders.core.draw_state = (function spaceinvaders$core$draw_state(p__81905){
var map__81906 = p__81905;
var map__81906__$1 = (((((!((map__81906 == null))))?(((((map__81906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81906):map__81906);
var state = map__81906__$1;
var ufos = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"ufos","ufos",2106350236));
var bombs = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"bombs","bombs",1955561180));
var lifes = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"lifes","lifes",-2077908604));
var hits = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"hits","hits",-2120002930));
var game_state = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var tank = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"tank","tank",-798661744));
var missiles = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"missiles","missiles",-600699149));
var score = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stars = cljs.core.get.call(null,map__81906__$1,new cljs.core.Keyword(null,"stars","stars",-556837771));
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"dark-blue","dark-blue",1793677975).cljs$core$IFn$_invoke$arity$1(spaceinvaders.core.colors));

spaceinvaders.core.draw_stars_BANG_.call(null,stars);

spaceinvaders.core.draw_missiles_BANG_.call(null,missiles);

spaceinvaders.core.draw_bombs_BANG_.call(null,bombs);

spaceinvaders.core.draw_munitions_BANG_.call(null,cljs.core.count.call(null,missiles));

spaceinvaders.core.draw_menu_BANG_.call(null,score,lifes);

spaceinvaders.core.draw_ufos_BANG_.call(null,ufos);

spaceinvaders.core.draw_tank_BANG_.call(null,tank);

var seq__81908_81912 = cljs.core.seq.call(null,hits);
var chunk__81909_81913 = null;
var count__81910_81914 = (0);
var i__81911_81915 = (0);
while(true){
if((i__81911_81915 < count__81910_81914)){
var hit_81916 = cljs.core._nth.call(null,chunk__81909_81913,i__81911_81915);
spaceinvaders.core.draw_explosion_BANG_.call(null,hit_81916);


var G__81917 = seq__81908_81912;
var G__81918 = chunk__81909_81913;
var G__81919 = count__81910_81914;
var G__81920 = (i__81911_81915 + (1));
seq__81908_81912 = G__81917;
chunk__81909_81913 = G__81918;
count__81910_81914 = G__81919;
i__81911_81915 = G__81920;
continue;
} else {
var temp__5735__auto___81921 = cljs.core.seq.call(null,seq__81908_81912);
if(temp__5735__auto___81921){
var seq__81908_81922__$1 = temp__5735__auto___81921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__81908_81922__$1)){
var c__4550__auto___81923 = cljs.core.chunk_first.call(null,seq__81908_81922__$1);
var G__81924 = cljs.core.chunk_rest.call(null,seq__81908_81922__$1);
var G__81925 = c__4550__auto___81923;
var G__81926 = cljs.core.count.call(null,c__4550__auto___81923);
var G__81927 = (0);
seq__81908_81912 = G__81924;
chunk__81909_81913 = G__81925;
count__81910_81914 = G__81926;
i__81911_81915 = G__81927;
continue;
} else {
var hit_81928 = cljs.core.first.call(null,seq__81908_81922__$1);
spaceinvaders.core.draw_explosion_BANG_.call(null,hit_81928);


var G__81929 = cljs.core.next.call(null,seq__81908_81922__$1);
var G__81930 = null;
var G__81931 = (0);
var G__81932 = (0);
seq__81908_81912 = G__81929;
chunk__81909_81913 = G__81930;
count__81910_81914 = G__81931;
i__81911_81915 = G__81932;
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
var G__81933__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.update_state,args);
};
var G__81933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81934__i = 0, G__81934__a = new Array(arguments.length -  0);
while (G__81934__i < G__81934__a.length) {G__81934__a[G__81934__i] = arguments[G__81934__i + 0]; ++G__81934__i;}
  args = new cljs.core.IndexedSeq(G__81934__a,0,null);
} 
return G__81933__delegate.call(this,args);};
G__81933.cljs$lang$maxFixedArity = 0;
G__81933.cljs$lang$applyTo = (function (arglist__81935){
var args = cljs.core.seq(arglist__81935);
return G__81933__delegate(args);
});
G__81933.cljs$core$IFn$_invoke$arity$variadic = G__81933__delegate;
return G__81933;
})()
:spaceinvaders.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spaceinvaders.core.world_width,spaceinvaders.core.world_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.setup))?(function() { 
var G__81936__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.setup,args);
};
var G__81936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81937__i = 0, G__81937__a = new Array(arguments.length -  0);
while (G__81937__i < G__81937__a.length) {G__81937__a[G__81937__i] = arguments[G__81937__i + 0]; ++G__81937__i;}
  args = new cljs.core.IndexedSeq(G__81937__a,0,null);
} 
return G__81936__delegate.call(this,args);};
G__81936.cljs$lang$maxFixedArity = 0;
G__81936.cljs$lang$applyTo = (function (arglist__81938){
var args = cljs.core.seq(arglist__81938);
return G__81936__delegate(args);
});
G__81936.cljs$core$IFn$_invoke$arity$variadic = G__81936__delegate;
return G__81936;
})()
:spaceinvaders.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.key_handler))?(function() { 
var G__81939__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.key_handler,args);
};
var G__81939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81940__i = 0, G__81940__a = new Array(arguments.length -  0);
while (G__81940__i < G__81940__a.length) {G__81940__a[G__81940__i] = arguments[G__81940__i + 0]; ++G__81940__i;}
  args = new cljs.core.IndexedSeq(G__81940__a,0,null);
} 
return G__81939__delegate.call(this,args);};
G__81939.cljs$lang$maxFixedArity = 0;
G__81939.cljs$lang$applyTo = (function (arglist__81941){
var args = cljs.core.seq(arglist__81941);
return G__81939__delegate(args);
});
G__81939.cljs$core$IFn$_invoke$arity$variadic = G__81939__delegate;
return G__81939;
})()
:spaceinvaders.core.key_handler),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,spaceinvaders.core.draw_state))?(function() { 
var G__81942__delegate = function (args){
return cljs.core.apply.call(null,spaceinvaders.core.draw_state,args);
};
var G__81942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81943__i = 0, G__81943__a = new Array(arguments.length -  0);
while (G__81943__i < G__81943__a.length) {G__81943__a[G__81943__i] = arguments[G__81943__i + 0]; ++G__81943__i;}
  args = new cljs.core.IndexedSeq(G__81943__a,0,null);
} 
return G__81942__delegate.call(this,args);};
G__81942.cljs$lang$maxFixedArity = 0;
G__81942.cljs$lang$applyTo = (function (arglist__81944){
var args = cljs.core.seq(arglist__81944);
return G__81942__delegate(args);
});
G__81942.cljs$core$IFn$_invoke$arity$variadic = G__81942__delegate;
return G__81942;
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

//# sourceMappingURL=core.js.map?rel=1594910460211
