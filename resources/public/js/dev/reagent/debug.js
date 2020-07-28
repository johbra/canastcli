// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21313__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21314__i = 0, G__21314__a = new Array(arguments.length -  0);
while (G__21314__i < G__21314__a.length) {G__21314__a[G__21314__i] = arguments[G__21314__i + 0]; ++G__21314__i;}
  args = new cljs.core.IndexedSeq(G__21314__a,0,null);
} 
return G__21313__delegate.call(this,args);};
G__21313.cljs$lang$maxFixedArity = 0;
G__21313.cljs$lang$applyTo = (function (arglist__21315){
var args = cljs.core.seq(arglist__21315);
return G__21313__delegate(args);
});
G__21313.cljs$core$IFn$_invoke$arity$variadic = G__21313__delegate;
return G__21313;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21316__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21317__i = 0, G__21317__a = new Array(arguments.length -  0);
while (G__21317__i < G__21317__a.length) {G__21317__a[G__21317__i] = arguments[G__21317__i + 0]; ++G__21317__i;}
  args = new cljs.core.IndexedSeq(G__21317__a,0,null);
} 
return G__21316__delegate.call(this,args);};
G__21316.cljs$lang$maxFixedArity = 0;
G__21316.cljs$lang$applyTo = (function (arglist__21318){
var args = cljs.core.seq(arglist__21318);
return G__21316__delegate(args);
});
G__21316.cljs$core$IFn$_invoke$arity$variadic = G__21316__delegate;
return G__21316;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
