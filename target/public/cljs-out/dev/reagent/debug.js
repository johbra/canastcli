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
var G__14234__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14235__i = 0, G__14235__a = new Array(arguments.length -  0);
while (G__14235__i < G__14235__a.length) {G__14235__a[G__14235__i] = arguments[G__14235__i + 0]; ++G__14235__i;}
  args = new cljs.core.IndexedSeq(G__14235__a,0,null);
} 
return G__14234__delegate.call(this,args);};
G__14234.cljs$lang$maxFixedArity = 0;
G__14234.cljs$lang$applyTo = (function (arglist__14236){
var args = cljs.core.seq(arglist__14236);
return G__14234__delegate(args);
});
G__14234.cljs$core$IFn$_invoke$arity$variadic = G__14234__delegate;
return G__14234;
})()
);

(o.error = (function() { 
var G__14237__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__14237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14238__i = 0, G__14238__a = new Array(arguments.length -  0);
while (G__14238__i < G__14238__a.length) {G__14238__a[G__14238__i] = arguments[G__14238__i + 0]; ++G__14238__i;}
  args = new cljs.core.IndexedSeq(G__14238__a,0,null);
} 
return G__14237__delegate.call(this,args);};
G__14237.cljs$lang$maxFixedArity = 0;
G__14237.cljs$lang$applyTo = (function (arglist__14239){
var args = cljs.core.seq(arglist__14239);
return G__14237__delegate(args);
});
G__14237.cljs$core$IFn$_invoke$arity$variadic = G__14237__delegate;
return G__14237;
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
