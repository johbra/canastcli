// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17471){
var map__17472 = p__17471;
var map__17472__$1 = (((((!((map__17472 == null))))?(((((map__17472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17472):map__17472);
var m = map__17472__$1;
var n = cljs.core.get.call(null,map__17472__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17472__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17474_17506 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17475_17507 = null;
var count__17476_17508 = (0);
var i__17477_17509 = (0);
while(true){
if((i__17477_17509 < count__17476_17508)){
var f_17510 = cljs.core._nth.call(null,chunk__17475_17507,i__17477_17509);
cljs.core.println.call(null,"  ",f_17510);


var G__17511 = seq__17474_17506;
var G__17512 = chunk__17475_17507;
var G__17513 = count__17476_17508;
var G__17514 = (i__17477_17509 + (1));
seq__17474_17506 = G__17511;
chunk__17475_17507 = G__17512;
count__17476_17508 = G__17513;
i__17477_17509 = G__17514;
continue;
} else {
var temp__5735__auto___17515 = cljs.core.seq.call(null,seq__17474_17506);
if(temp__5735__auto___17515){
var seq__17474_17516__$1 = temp__5735__auto___17515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17474_17516__$1)){
var c__4556__auto___17517 = cljs.core.chunk_first.call(null,seq__17474_17516__$1);
var G__17518 = cljs.core.chunk_rest.call(null,seq__17474_17516__$1);
var G__17519 = c__4556__auto___17517;
var G__17520 = cljs.core.count.call(null,c__4556__auto___17517);
var G__17521 = (0);
seq__17474_17506 = G__17518;
chunk__17475_17507 = G__17519;
count__17476_17508 = G__17520;
i__17477_17509 = G__17521;
continue;
} else {
var f_17522 = cljs.core.first.call(null,seq__17474_17516__$1);
cljs.core.println.call(null,"  ",f_17522);


var G__17523 = cljs.core.next.call(null,seq__17474_17516__$1);
var G__17524 = null;
var G__17525 = (0);
var G__17526 = (0);
seq__17474_17506 = G__17523;
chunk__17475_17507 = G__17524;
count__17476_17508 = G__17525;
i__17477_17509 = G__17526;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17527 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17527);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17527)))?cljs.core.second.call(null,arglists_17527):arglists_17527));
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
var seq__17478_17528 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17479_17529 = null;
var count__17480_17530 = (0);
var i__17481_17531 = (0);
while(true){
if((i__17481_17531 < count__17480_17530)){
var vec__17492_17532 = cljs.core._nth.call(null,chunk__17479_17529,i__17481_17531);
var name_17533 = cljs.core.nth.call(null,vec__17492_17532,(0),null);
var map__17495_17534 = cljs.core.nth.call(null,vec__17492_17532,(1),null);
var map__17495_17535__$1 = (((((!((map__17495_17534 == null))))?(((((map__17495_17534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17495_17534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17495_17534):map__17495_17534);
var doc_17536 = cljs.core.get.call(null,map__17495_17535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17537 = cljs.core.get.call(null,map__17495_17535__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17533);

cljs.core.println.call(null," ",arglists_17537);

if(cljs.core.truth_(doc_17536)){
cljs.core.println.call(null," ",doc_17536);
} else {
}


var G__17538 = seq__17478_17528;
var G__17539 = chunk__17479_17529;
var G__17540 = count__17480_17530;
var G__17541 = (i__17481_17531 + (1));
seq__17478_17528 = G__17538;
chunk__17479_17529 = G__17539;
count__17480_17530 = G__17540;
i__17481_17531 = G__17541;
continue;
} else {
var temp__5735__auto___17542 = cljs.core.seq.call(null,seq__17478_17528);
if(temp__5735__auto___17542){
var seq__17478_17543__$1 = temp__5735__auto___17542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17478_17543__$1)){
var c__4556__auto___17544 = cljs.core.chunk_first.call(null,seq__17478_17543__$1);
var G__17545 = cljs.core.chunk_rest.call(null,seq__17478_17543__$1);
var G__17546 = c__4556__auto___17544;
var G__17547 = cljs.core.count.call(null,c__4556__auto___17544);
var G__17548 = (0);
seq__17478_17528 = G__17545;
chunk__17479_17529 = G__17546;
count__17480_17530 = G__17547;
i__17481_17531 = G__17548;
continue;
} else {
var vec__17497_17549 = cljs.core.first.call(null,seq__17478_17543__$1);
var name_17550 = cljs.core.nth.call(null,vec__17497_17549,(0),null);
var map__17500_17551 = cljs.core.nth.call(null,vec__17497_17549,(1),null);
var map__17500_17552__$1 = (((((!((map__17500_17551 == null))))?(((((map__17500_17551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17500_17551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17500_17551):map__17500_17551);
var doc_17553 = cljs.core.get.call(null,map__17500_17552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17554 = cljs.core.get.call(null,map__17500_17552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17550);

cljs.core.println.call(null," ",arglists_17554);

if(cljs.core.truth_(doc_17553)){
cljs.core.println.call(null," ",doc_17553);
} else {
}


var G__17555 = cljs.core.next.call(null,seq__17478_17543__$1);
var G__17556 = null;
var G__17557 = (0);
var G__17558 = (0);
seq__17478_17528 = G__17555;
chunk__17479_17529 = G__17556;
count__17480_17530 = G__17557;
i__17481_17531 = G__17558;
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

var seq__17502 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17503 = null;
var count__17504 = (0);
var i__17505 = (0);
while(true){
if((i__17505 < count__17504)){
var role = cljs.core._nth.call(null,chunk__17503,i__17505);
var temp__5735__auto___17559__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___17559__$1)){
var spec_17560 = temp__5735__auto___17559__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17560));
} else {
}


var G__17561 = seq__17502;
var G__17562 = chunk__17503;
var G__17563 = count__17504;
var G__17564 = (i__17505 + (1));
seq__17502 = G__17561;
chunk__17503 = G__17562;
count__17504 = G__17563;
i__17505 = G__17564;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__17502);
if(temp__5735__auto____$1){
var seq__17502__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17502__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__17502__$1);
var G__17565 = cljs.core.chunk_rest.call(null,seq__17502__$1);
var G__17566 = c__4556__auto__;
var G__17567 = cljs.core.count.call(null,c__4556__auto__);
var G__17568 = (0);
seq__17502 = G__17565;
chunk__17503 = G__17566;
count__17504 = G__17567;
i__17505 = G__17568;
continue;
} else {
var role = cljs.core.first.call(null,seq__17502__$1);
var temp__5735__auto___17569__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___17569__$2)){
var spec_17570 = temp__5735__auto___17569__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17570));
} else {
}


var G__17571 = cljs.core.next.call(null,seq__17502__$1);
var G__17572 = null;
var G__17573 = (0);
var G__17574 = (0);
seq__17502 = G__17571;
chunk__17503 = G__17572;
count__17504 = G__17573;
i__17505 = G__17574;
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
var G__17575 = cljs.core.conj.call(null,via,t);
var G__17576 = cljs.core.ex_cause.call(null,t);
via = G__17575;
t = G__17576;
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
var map__17579 = datafied_throwable;
var map__17579__$1 = (((((!((map__17579 == null))))?(((((map__17579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17579):map__17579);
var via = cljs.core.get.call(null,map__17579__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__17579__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__17579__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17580 = cljs.core.last.call(null,via);
var map__17580__$1 = (((((!((map__17580 == null))))?(((((map__17580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17580):map__17580);
var type = cljs.core.get.call(null,map__17580__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__17580__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__17580__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17581 = data;
var map__17581__$1 = (((((!((map__17581 == null))))?(((((map__17581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17581):map__17581);
var problems = cljs.core.get.call(null,map__17581__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__17581__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__17581__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17582 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__17582__$1 = (((((!((map__17582 == null))))?(((((map__17582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17582):map__17582);
var top_data = map__17582__$1;
var source = cljs.core.get.call(null,map__17582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__17587 = phase;
var G__17587__$1 = (((G__17587 instanceof cljs.core.Keyword))?G__17587.fqn:null);
switch (G__17587__$1) {
case "read-source":
var map__17588 = data;
var map__17588__$1 = (((((!((map__17588 == null))))?(((((map__17588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17588):map__17588);
var line = cljs.core.get.call(null,map__17588__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17588__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17590 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__17590__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17590,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17590);
var G__17590__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17590__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17590__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17590__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17591 = top_data;
var G__17591__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17591,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17591);
var G__17591__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17591__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17591__$1);
var G__17591__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17591__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17591__$2);
var G__17591__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17591__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17591__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17591__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17591__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17592 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17592,(0),null);
var method = cljs.core.nth.call(null,vec__17592,(1),null);
var file = cljs.core.nth.call(null,vec__17592,(2),null);
var line = cljs.core.nth.call(null,vec__17592,(3),null);
var G__17595 = top_data;
var G__17595__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__17595,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17595);
var G__17595__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__17595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17595__$1);
var G__17595__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__17595__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17595__$2);
var G__17595__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17595__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17595__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17595__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17595__$4;
}

break;
case "execution":
var vec__17596 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17596,(0),null);
var method = cljs.core.nth.call(null,vec__17596,(1),null);
var file = cljs.core.nth.call(null,vec__17596,(2),null);
var line = cljs.core.nth.call(null,vec__17596,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__17578_SHARP_){
var or__4126__auto__ = (p1__17578_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__17578_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__17599 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17599__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__17599,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17599);
var G__17599__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17599__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17599__$1);
var G__17599__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__17599__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17599__$2);
var G__17599__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__17599__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17599__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17599__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17599__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17587__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17603){
var map__17604 = p__17603;
var map__17604__$1 = (((((!((map__17604 == null))))?(((((map__17604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17604):map__17604);
var triage_data = map__17604__$1;
var phase = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__17604__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17606 = phase;
var G__17606__$1 = (((G__17606 instanceof cljs.core.Keyword))?G__17606.fqn:null);
switch (G__17606__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17607_17616 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17608_17617 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17609_17618 = true;
var _STAR_print_fn_STAR__temp_val__17610_17619 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17609_17618);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17610_17619);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17601_SHARP_){
return cljs.core.dissoc.call(null,p1__17601_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17608_17617);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17607_17616);
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
var _STAR_print_newline_STAR__orig_val__17611_17620 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17612_17621 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17613_17622 = true;
var _STAR_print_fn_STAR__temp_val__17614_17623 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17613_17622);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17614_17623);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17602_SHARP_){
return cljs.core.dissoc.call(null,p1__17602_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17612_17621);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17611_17620);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17606__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
