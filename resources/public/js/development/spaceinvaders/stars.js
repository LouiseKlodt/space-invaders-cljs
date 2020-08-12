// Compiled by ClojureScript 1.10.520 {}
goog.provide('spaceinvaders.stars');
goog.require('cljs.core');
goog.require('quil.core');
spaceinvaders.stars.rand_n = (function spaceinvaders$stars$rand_n(a,b){

return (a + cljs.core.rand.call(null,(b - a)));
});
spaceinvaders.stars.rand_stars = (function spaceinvaders$stars$rand_stars(n,w,h){

var star_size = 2.0;
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,((function (star_size){
return (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[spaceinvaders.stars.rand_n.call(null,(0),w),spaceinvaders.stars.rand_n.call(null,(0),h),(1.0 + cljs.core.rand.call(null,star_size))],null));
});})(star_size))
));
});
spaceinvaders.stars.draw_stars_BANG_ = (function spaceinvaders$stars$draw_stars_BANG_(stars){
quil.core.push_style.call(null);

quil.core.fill.call(null,(255));

var seq__62795_62811 = cljs.core.seq.call(null,stars);
var chunk__62796_62812 = null;
var count__62797_62813 = (0);
var i__62798_62814 = (0);
while(true){
if((i__62798_62814 < count__62797_62813)){
var vec__62805_62815 = cljs.core._nth.call(null,chunk__62796_62812,i__62798_62814);
var x_62816 = cljs.core.nth.call(null,vec__62805_62815,(0),null);
var y_62817 = cljs.core.nth.call(null,vec__62805_62815,(1),null);
var s_62818 = cljs.core.nth.call(null,vec__62805_62815,(2),null);
quil.core.ellipse.call(null,x_62816,y_62817,s_62818,s_62818);


var G__62819 = seq__62795_62811;
var G__62820 = chunk__62796_62812;
var G__62821 = count__62797_62813;
var G__62822 = (i__62798_62814 + (1));
seq__62795_62811 = G__62819;
chunk__62796_62812 = G__62820;
count__62797_62813 = G__62821;
i__62798_62814 = G__62822;
continue;
} else {
var temp__5735__auto___62823 = cljs.core.seq.call(null,seq__62795_62811);
if(temp__5735__auto___62823){
var seq__62795_62824__$1 = temp__5735__auto___62823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62795_62824__$1)){
var c__4550__auto___62825 = cljs.core.chunk_first.call(null,seq__62795_62824__$1);
var G__62826 = cljs.core.chunk_rest.call(null,seq__62795_62824__$1);
var G__62827 = c__4550__auto___62825;
var G__62828 = cljs.core.count.call(null,c__4550__auto___62825);
var G__62829 = (0);
seq__62795_62811 = G__62826;
chunk__62796_62812 = G__62827;
count__62797_62813 = G__62828;
i__62798_62814 = G__62829;
continue;
} else {
var vec__62808_62830 = cljs.core.first.call(null,seq__62795_62824__$1);
var x_62831 = cljs.core.nth.call(null,vec__62808_62830,(0),null);
var y_62832 = cljs.core.nth.call(null,vec__62808_62830,(1),null);
var s_62833 = cljs.core.nth.call(null,vec__62808_62830,(2),null);
quil.core.ellipse.call(null,x_62831,y_62832,s_62833,s_62833);


var G__62834 = cljs.core.next.call(null,seq__62795_62824__$1);
var G__62835 = null;
var G__62836 = (0);
var G__62837 = (0);
seq__62795_62811 = G__62834;
chunk__62796_62812 = G__62835;
count__62797_62813 = G__62836;
i__62798_62814 = G__62837;
continue;
}
} else {
}
}
break;
}

return quil.core.pop_style.call(null);
});
spaceinvaders.stars.move_stars = (function spaceinvaders$stars$move_stars(stars,h){
var iter__4523__auto__ = (function spaceinvaders$stars$move_stars_$_iter__62838(s__62839){
return (new cljs.core.LazySeq(null,(function (){
var s__62839__$1 = s__62839;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__62839__$1);
if(temp__5735__auto__){
var s__62839__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62839__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__62839__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__62841 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__62840 = (0);
while(true){
if((i__62840 < size__4522__auto__)){
var vec__62842 = cljs.core._nth.call(null,c__4521__auto__,i__62840);
var x = cljs.core.nth.call(null,vec__62842,(0),null);
var y = cljs.core.nth.call(null,vec__62842,(1),null);
var size = cljs.core.nth.call(null,vec__62842,(2),null);
cljs.core.chunk_append.call(null,b__62841,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),h),size], null));

var G__62848 = (i__62840 + (1));
i__62840 = G__62848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62841),spaceinvaders$stars$move_stars_$_iter__62838.call(null,cljs.core.chunk_rest.call(null,s__62839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62841),null);
}
} else {
var vec__62845 = cljs.core.first.call(null,s__62839__$2);
var x = cljs.core.nth.call(null,vec__62845,(0),null);
var y = cljs.core.nth.call(null,vec__62845,(1),null);
var size = cljs.core.nth.call(null,vec__62845,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod.call(null,(0.8 + y),h),size], null),spaceinvaders$stars$move_stars_$_iter__62838.call(null,cljs.core.rest.call(null,s__62839__$2)));
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

//# sourceMappingURL=stars.js.map?rel=1597159522352
