// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._header[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._header["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._has_body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22583 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22583["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22584 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22584["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22585 = temp__5455__auto____$2;
return (o22585["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22586 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22586["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22587 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22587["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22588 = temp__5455__auto____$2;
return (o22588["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22589 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22589["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22590 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22590["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22591 = temp__5455__auto____$2;
return (o22591["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22592 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22592["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22593 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22593["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22594 = temp__5455__auto____$2;
return (o22594["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22595 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22595["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22596 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22596["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22597 = temp__5455__auto____$2;
return (o22597["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22598 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22598["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22599 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22599["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22600 = temp__5455__auto____$2;
return (o22600["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22601 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22601["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22602 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22602["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22603 = temp__5455__auto____$2;
return (o22603["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22605 = arguments.length;
var i__4532__auto___22606 = (0);
while(true){
if((i__4532__auto___22606 < len__4531__auto___22605)){
args__4534__auto__.push((arguments[i__4532__auto___22606]));

var G__22607 = (i__4532__auto___22606 + (1));
i__4532__auto___22606 = G__22607;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq22604){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22604));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22609 = arguments.length;
var i__4532__auto___22610 = (0);
while(true){
if((i__4532__auto___22610 < len__4531__auto___22609)){
args__4534__auto__.push((arguments[i__4532__auto___22610]));

var G__22611 = (i__4532__auto___22610 + (1));
i__4532__auto___22610 = G__22611;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq22608){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22608));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22613 = arguments.length;
var i__4532__auto___22614 = (0);
while(true){
if((i__4532__auto___22614 < len__4531__auto___22613)){
args__4534__auto__.push((arguments[i__4532__auto___22614]));

var G__22615 = (i__4532__auto___22614 + (1));
i__4532__auto___22614 = G__22615;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq22612){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22612));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22617 = arguments.length;
var i__4532__auto___22618 = (0);
while(true){
if((i__4532__auto___22618 < len__4531__auto___22617)){
args__4534__auto__.push((arguments[i__4532__auto___22618]));

var G__22619 = (i__4532__auto___22618 + (1));
i__4532__auto___22618 = G__22619;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22616){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22616));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22621 = arguments.length;
var i__4532__auto___22622 = (0);
while(true){
if((i__4532__auto___22622 < len__4531__auto___22621)){
args__4534__auto__.push((arguments[i__4532__auto___22622]));

var G__22623 = (i__4532__auto___22622 + (1));
i__4532__auto___22622 = G__22623;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq22620){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22620));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22625 = arguments.length;
var i__4532__auto___22626 = (0);
while(true){
if((i__4532__auto___22626 < len__4531__auto___22625)){
args__4534__auto__.push((arguments[i__4532__auto___22626]));

var G__22627 = (i__4532__auto___22626 + (1));
i__4532__auto___22626 = G__22627;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq22624){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22624));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22629 = arguments.length;
var i__4532__auto___22630 = (0);
while(true){
if((i__4532__auto___22630 < len__4531__auto___22629)){
args__4534__auto__.push((arguments[i__4532__auto___22630]));

var G__22631 = (i__4532__auto___22630 + (1));
i__4532__auto___22630 = G__22631;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq22628){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22628));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22639 = arguments.length;
var i__4532__auto___22640 = (0);
while(true){
if((i__4532__auto___22640 < len__4531__auto___22639)){
args__4534__auto__.push((arguments[i__4532__auto___22640]));

var G__22641 = (i__4532__auto___22640 + (1));
i__4532__auto___22640 = G__22641;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22635){
var vec__22636 = p__22635;
var state_override = cljs.core.nth.call(null,vec__22636,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__22636,state_override){
return (function (p1__22632_SHARP_){
return cljs.core.merge.call(null,p1__22632_SHARP_,state_override);
});})(vec__22636,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq22633){
var G__22634 = cljs.core.first.call(null,seq22633);
var seq22633__$1 = cljs.core.next.call(null,seq22633);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22634,seq22633__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22643 = arguments.length;
var i__4532__auto___22644 = (0);
while(true){
if((i__4532__auto___22644 < len__4531__auto___22643)){
args__4534__auto__.push((arguments[i__4532__auto___22644]));

var G__22645 = (i__4532__auto___22644 + (1));
i__4532__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq22642){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22642));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22648 = arguments.length;
var i__4532__auto___22649 = (0);
while(true){
if((i__4532__auto___22649 < len__4531__auto___22648)){
args__4534__auto__.push((arguments[i__4532__auto___22649]));

var G__22650 = (i__4532__auto___22649 + (1));
i__4532__auto___22649 = G__22650;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22646){
var G__22647 = cljs.core.first.call(null,seq22646);
var seq22646__$1 = cljs.core.next.call(null,seq22646);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22647,seq22646__$1);
});


//# sourceMappingURL=format.js.map
