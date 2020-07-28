// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18494){
var map__18495 = p__18494;
var map__18495__$1 = (((((!((map__18495 == null))))?(((((map__18495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18495):map__18495);
var m = map__18495__$1;
var n = cljs.core.get.call(null,map__18495__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18495__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18497_18529 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18498_18530 = null;
var count__18499_18531 = (0);
var i__18500_18532 = (0);
while(true){
if((i__18500_18532 < count__18499_18531)){
var f_18533 = cljs.core._nth.call(null,chunk__18498_18530,i__18500_18532);
cljs.core.println.call(null,"  ",f_18533);


var G__18534 = seq__18497_18529;
var G__18535 = chunk__18498_18530;
var G__18536 = count__18499_18531;
var G__18537 = (i__18500_18532 + (1));
seq__18497_18529 = G__18534;
chunk__18498_18530 = G__18535;
count__18499_18531 = G__18536;
i__18500_18532 = G__18537;
continue;
} else {
var temp__5735__auto___18538 = cljs.core.seq.call(null,seq__18497_18529);
if(temp__5735__auto___18538){
var seq__18497_18539__$1 = temp__5735__auto___18538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18497_18539__$1)){
var c__4556__auto___18540 = cljs.core.chunk_first.call(null,seq__18497_18539__$1);
var G__18541 = cljs.core.chunk_rest.call(null,seq__18497_18539__$1);
var G__18542 = c__4556__auto___18540;
var G__18543 = cljs.core.count.call(null,c__4556__auto___18540);
var G__18544 = (0);
seq__18497_18529 = G__18541;
chunk__18498_18530 = G__18542;
count__18499_18531 = G__18543;
i__18500_18532 = G__18544;
continue;
} else {
var f_18545 = cljs.core.first.call(null,seq__18497_18539__$1);
cljs.core.println.call(null,"  ",f_18545);


var G__18546 = cljs.core.next.call(null,seq__18497_18539__$1);
var G__18547 = null;
var G__18548 = (0);
var G__18549 = (0);
seq__18497_18529 = G__18546;
chunk__18498_18530 = G__18547;
count__18499_18531 = G__18548;
i__18500_18532 = G__18549;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18550 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18550);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18550)))?cljs.core.second.call(null,arglists_18550):arglists_18550));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18501_18551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18502_18552 = null;
var count__18503_18553 = (0);
var i__18504_18554 = (0);
while(true){
if((i__18504_18554 < count__18503_18553)){
var vec__18515_18555 = cljs.core._nth.call(null,chunk__18502_18552,i__18504_18554);
var name_18556 = cljs.core.nth.call(null,vec__18515_18555,(0),null);
var map__18518_18557 = cljs.core.nth.call(null,vec__18515_18555,(1),null);
var map__18518_18558__$1 = (((((!((map__18518_18557 == null))))?(((((map__18518_18557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18518_18557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18518_18557):map__18518_18557);
var doc_18559 = cljs.core.get.call(null,map__18518_18558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18560 = cljs.core.get.call(null,map__18518_18558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18556);

cljs.core.println.call(null," ",arglists_18560);

if(cljs.core.truth_(doc_18559)){
cljs.core.println.call(null," ",doc_18559);
} else {
}


var G__18561 = seq__18501_18551;
var G__18562 = chunk__18502_18552;
var G__18563 = count__18503_18553;
var G__18564 = (i__18504_18554 + (1));
seq__18501_18551 = G__18561;
chunk__18502_18552 = G__18562;
count__18503_18553 = G__18563;
i__18504_18554 = G__18564;
continue;
} else {
var temp__5735__auto___18565 = cljs.core.seq.call(null,seq__18501_18551);
if(temp__5735__auto___18565){
var seq__18501_18566__$1 = temp__5735__auto___18565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18501_18566__$1)){
var c__4556__auto___18567 = cljs.core.chunk_first.call(null,seq__18501_18566__$1);
var G__18568 = cljs.core.chunk_rest.call(null,seq__18501_18566__$1);
var G__18569 = c__4556__auto___18567;
var G__18570 = cljs.core.count.call(null,c__4556__auto___18567);
var G__18571 = (0);
seq__18501_18551 = G__18568;
chunk__18502_18552 = G__18569;
count__18503_18553 = G__18570;
i__18504_18554 = G__18571;
continue;
} else {
var vec__18520_18572 = cljs.core.first.call(null,seq__18501_18566__$1);
var name_18573 = cljs.core.nth.call(null,vec__18520_18572,(0),null);
var map__18523_18574 = cljs.core.nth.call(null,vec__18520_18572,(1),null);
var map__18523_18575__$1 = (((((!((map__18523_18574 == null))))?(((((map__18523_18574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18523_18574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18523_18574):map__18523_18574);
var doc_18576 = cljs.core.get.call(null,map__18523_18575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18577 = cljs.core.get.call(null,map__18523_18575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18573);

cljs.core.println.call(null," ",arglists_18577);

if(cljs.core.truth_(doc_18576)){
cljs.core.println.call(null," ",doc_18576);
} else {
}


var G__18578 = cljs.core.next.call(null,seq__18501_18566__$1);
var G__18579 = null;
var G__18580 = (0);
var G__18581 = (0);
seq__18501_18551 = G__18578;
chunk__18502_18552 = G__18579;
count__18503_18553 = G__18580;
i__18504_18554 = G__18581;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__18525 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18526 = null;
var count__18527 = (0);
var i__18528 = (0);
while(true){
if((i__18528 < count__18527)){
var role = cljs.core._nth.call(null,chunk__18526,i__18528);
var temp__5735__auto___18582__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18582__$1)){
var spec_18583 = temp__5735__auto___18582__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18583));
} else {
}


var G__18584 = seq__18525;
var G__18585 = chunk__18526;
var G__18586 = count__18527;
var G__18587 = (i__18528 + (1));
seq__18525 = G__18584;
chunk__18526 = G__18585;
count__18527 = G__18586;
i__18528 = G__18587;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__18525);
if(temp__5735__auto____$1){
var seq__18525__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18525__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18525__$1);
var G__18588 = cljs.core.chunk_rest.call(null,seq__18525__$1);
var G__18589 = c__4556__auto__;
var G__18590 = cljs.core.count.call(null,c__4556__auto__);
var G__18591 = (0);
seq__18525 = G__18588;
chunk__18526 = G__18589;
count__18527 = G__18590;
i__18528 = G__18591;
continue;
} else {
var role = cljs.core.first.call(null,seq__18525__$1);
var temp__5735__auto___18592__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18592__$2)){
var spec_18593 = temp__5735__auto___18592__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18593));
} else {
}


var G__18594 = cljs.core.next.call(null,seq__18525__$1);
var G__18595 = null;
var G__18596 = (0);
var G__18597 = (0);
seq__18525 = G__18594;
chunk__18526 = G__18595;
count__18527 = G__18596;
i__18528 = G__18597;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18598 = cljs.core.conj.call(null,via,t);
var G__18599 = cljs.core.ex_cause.call(null,t);
via = G__18598;
t = G__18599;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18602 = datafied_throwable;
var map__18602__$1 = (((((!((map__18602 == null))))?(((((map__18602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18602):map__18602);
var via = cljs.core.get.call(null,map__18602__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18602__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18602__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18603 = cljs.core.last.call(null,via);
var map__18603__$1 = (((((!((map__18603 == null))))?(((((map__18603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18603):map__18603);
var type = cljs.core.get.call(null,map__18603__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18603__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18603__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18604 = data;
var map__18604__$1 = (((((!((map__18604 == null))))?(((((map__18604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18604):map__18604);
var problems = cljs.core.get.call(null,map__18604__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18604__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18604__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18605 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18605__$1 = (((((!((map__18605 == null))))?(((((map__18605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18605):map__18605);
var top_data = map__18605__$1;
var source = cljs.core.get.call(null,map__18605__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18610 = phase;
var G__18610__$1 = (((G__18610 instanceof cljs.core.Keyword))?G__18610.fqn:null);
switch (G__18610__$1) {
case "read-source":
var map__18611 = data;
var map__18611__$1 = (((((!((map__18611 == null))))?(((((map__18611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18611):map__18611);
var line = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18611__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18613 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18613__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18613,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18613);
var G__18613__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18613__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18613__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18613__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18614 = top_data;
var G__18614__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18614,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18614);
var G__18614__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18614__$1);
var G__18614__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18614__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18614__$2);
var G__18614__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18614__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18614__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18614__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18614__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18615 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18615,(0),null);
var method = cljs.core.nth.call(null,vec__18615,(1),null);
var file = cljs.core.nth.call(null,vec__18615,(2),null);
var line = cljs.core.nth.call(null,vec__18615,(3),null);
var G__18618 = top_data;
var G__18618__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18618,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18618);
var G__18618__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18618__$1);
var G__18618__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__18618__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18618__$2);
var G__18618__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18618__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18618__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18618__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18618__$4;
}

break;
case "execution":
var vec__18619 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18619,(0),null);
var method = cljs.core.nth.call(null,vec__18619,(1),null);
var file = cljs.core.nth.call(null,vec__18619,(2),null);
var line = cljs.core.nth.call(null,vec__18619,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__18601_SHARP_){
var or__4126__auto__ = (p1__18601_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18601_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__18622 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18622__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18622,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18622);
var G__18622__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18622__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18622__$1);
var G__18622__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__18622__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18622__$2);
var G__18622__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18622__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18622__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18622__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18622__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18610__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18626){
var map__18627 = p__18626;
var map__18627__$1 = (((((!((map__18627 == null))))?(((((map__18627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18627):map__18627);
var triage_data = map__18627__$1;
var phase = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18627__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18629 = phase;
var G__18629__$1 = (((G__18629 instanceof cljs.core.Keyword))?G__18629.fqn:null);
switch (G__18629__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18630_18639 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18631_18640 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18632_18641 = true;
var _STAR_print_fn_STAR__temp_val__18633_18642 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18632_18641);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18633_18642);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18624_SHARP_){
return cljs.core.dissoc.call(null,p1__18624_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18631_18640);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18630_18639);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18634_18643 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18635_18644 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18636_18645 = true;
var _STAR_print_fn_STAR__temp_val__18637_18646 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18636_18645);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18637_18646);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18625_SHARP_){
return cljs.core.dissoc.call(null,p1__18625_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18635_18644);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18634_18643);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18629__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
