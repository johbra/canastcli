// Compiled by ClojureScript 1.10.773 {}
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
(o.warn = (function() { 
var G__8454__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8454 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8455__i = 0, G__8455__a = new Array(arguments.length -  0);
while (G__8455__i < G__8455__a.length) {G__8455__a[G__8455__i] = arguments[G__8455__i + 0]; ++G__8455__i;}
  args = new cljs.core.IndexedSeq(G__8455__a,0,null);
} 
return G__8454__delegate.call(this,args);};
G__8454.cljs$lang$maxFixedArity = 0;
G__8454.cljs$lang$applyTo = (function (arglist__8456){
var args = cljs.core.seq(arglist__8456);
return G__8454__delegate(args);
});
G__8454.cljs$core$IFn$_invoke$arity$variadic = G__8454__delegate;
return G__8454;
})()
);

(o.error = (function() { 
var G__8457__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8458__i = 0, G__8458__a = new Array(arguments.length -  0);
while (G__8458__i < G__8458__a.length) {G__8458__a[G__8458__i] = arguments[G__8458__i + 0]; ++G__8458__i;}
  args = new cljs.core.IndexedSeq(G__8458__a,0,null);
} 
return G__8457__delegate.call(this,args);};
G__8457.cljs$lang$maxFixedArity = 0;
G__8457.cljs$lang$applyTo = (function (arglist__8459){
var args = cljs.core.seq(arglist__8459);
return G__8457__delegate(args);
});
G__8457.cljs$core$IFn$_invoke$arity$variadic = G__8457__delegate;
return G__8457;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
