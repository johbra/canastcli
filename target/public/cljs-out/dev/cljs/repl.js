// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24711){
var map__24712 = p__24711;
var map__24712__$1 = (((((!((map__24712 == null))))?(((((map__24712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24712):map__24712);
var m = map__24712__$1;
var n = cljs.core.get.call(null,map__24712__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24712__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24714_24746 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24715_24747 = null;
var count__24716_24748 = (0);
var i__24717_24749 = (0);
while(true){
if((i__24717_24749 < count__24716_24748)){
var f_24750 = cljs.core._nth.call(null,chunk__24715_24747,i__24717_24749);
cljs.core.println.call(null,"  ",f_24750);


var G__24751 = seq__24714_24746;
var G__24752 = chunk__24715_24747;
var G__24753 = count__24716_24748;
var G__24754 = (i__24717_24749 + (1));
seq__24714_24746 = G__24751;
chunk__24715_24747 = G__24752;
count__24716_24748 = G__24753;
i__24717_24749 = G__24754;
continue;
} else {
var temp__5735__auto___24755 = cljs.core.seq.call(null,seq__24714_24746);
if(temp__5735__auto___24755){
var seq__24714_24756__$1 = temp__5735__auto___24755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24714_24756__$1)){
var c__4556__auto___24757 = cljs.core.chunk_first.call(null,seq__24714_24756__$1);
var G__24758 = cljs.core.chunk_rest.call(null,seq__24714_24756__$1);
var G__24759 = c__4556__auto___24757;
var G__24760 = cljs.core.count.call(null,c__4556__auto___24757);
var G__24761 = (0);
seq__24714_24746 = G__24758;
chunk__24715_24747 = G__24759;
count__24716_24748 = G__24760;
i__24717_24749 = G__24761;
continue;
} else {
var f_24762 = cljs.core.first.call(null,seq__24714_24756__$1);
cljs.core.println.call(null,"  ",f_24762);


var G__24763 = cljs.core.next.call(null,seq__24714_24756__$1);
var G__24764 = null;
var G__24765 = (0);
var G__24766 = (0);
seq__24714_24746 = G__24763;
chunk__24715_24747 = G__24764;
count__24716_24748 = G__24765;
i__24717_24749 = G__24766;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24767 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24767);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24767)))?cljs.core.second.call(null,arglists_24767):arglists_24767));
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
var seq__24718_24768 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24719_24769 = null;
var count__24720_24770 = (0);
var i__24721_24771 = (0);
while(true){
if((i__24721_24771 < count__24720_24770)){
var vec__24732_24772 = cljs.core._nth.call(null,chunk__24719_24769,i__24721_24771);
var name_24773 = cljs.core.nth.call(null,vec__24732_24772,(0),null);
var map__24735_24774 = cljs.core.nth.call(null,vec__24732_24772,(1),null);
var map__24735_24775__$1 = (((((!((map__24735_24774 == null))))?(((((map__24735_24774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24735_24774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24735_24774):map__24735_24774);
var doc_24776 = cljs.core.get.call(null,map__24735_24775__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24777 = cljs.core.get.call(null,map__24735_24775__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24773);

cljs.core.println.call(null," ",arglists_24777);

if(cljs.core.truth_(doc_24776)){
cljs.core.println.call(null," ",doc_24776);
} else {
}


var G__24778 = seq__24718_24768;
var G__24779 = chunk__24719_24769;
var G__24780 = count__24720_24770;
var G__24781 = (i__24721_24771 + (1));
seq__24718_24768 = G__24778;
chunk__24719_24769 = G__24779;
count__24720_24770 = G__24780;
i__24721_24771 = G__24781;
continue;
} else {
var temp__5735__auto___24782 = cljs.core.seq.call(null,seq__24718_24768);
if(temp__5735__auto___24782){
var seq__24718_24783__$1 = temp__5735__auto___24782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24718_24783__$1)){
var c__4556__auto___24784 = cljs.core.chunk_first.call(null,seq__24718_24783__$1);
var G__24785 = cljs.core.chunk_rest.call(null,seq__24718_24783__$1);
var G__24786 = c__4556__auto___24784;
var G__24787 = cljs.core.count.call(null,c__4556__auto___24784);
var G__24788 = (0);
seq__24718_24768 = G__24785;
chunk__24719_24769 = G__24786;
count__24720_24770 = G__24787;
i__24721_24771 = G__24788;
continue;
} else {
var vec__24737_24789 = cljs.core.first.call(null,seq__24718_24783__$1);
var name_24790 = cljs.core.nth.call(null,vec__24737_24789,(0),null);
var map__24740_24791 = cljs.core.nth.call(null,vec__24737_24789,(1),null);
var map__24740_24792__$1 = (((((!((map__24740_24791 == null))))?(((((map__24740_24791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24740_24791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24740_24791):map__24740_24791);
var doc_24793 = cljs.core.get.call(null,map__24740_24792__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24794 = cljs.core.get.call(null,map__24740_24792__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24790);

cljs.core.println.call(null," ",arglists_24794);

if(cljs.core.truth_(doc_24793)){
cljs.core.println.call(null," ",doc_24793);
} else {
}


var G__24795 = cljs.core.next.call(null,seq__24718_24783__$1);
var G__24796 = null;
var G__24797 = (0);
var G__24798 = (0);
seq__24718_24768 = G__24795;
chunk__24719_24769 = G__24796;
count__24720_24770 = G__24797;
i__24721_24771 = G__24798;
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

var seq__24742 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24743 = null;
var count__24744 = (0);
var i__24745 = (0);
while(true){
if((i__24745 < count__24744)){
var role = cljs.core._nth.call(null,chunk__24743,i__24745);
var temp__5735__auto___24799__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24799__$1)){
var spec_24800 = temp__5735__auto___24799__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24800));
} else {
}


var G__24801 = seq__24742;
var G__24802 = chunk__24743;
var G__24803 = count__24744;
var G__24804 = (i__24745 + (1));
seq__24742 = G__24801;
chunk__24743 = G__24802;
count__24744 = G__24803;
i__24745 = G__24804;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__24742);
if(temp__5735__auto____$1){
var seq__24742__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24742__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24742__$1);
var G__24805 = cljs.core.chunk_rest.call(null,seq__24742__$1);
var G__24806 = c__4556__auto__;
var G__24807 = cljs.core.count.call(null,c__4556__auto__);
var G__24808 = (0);
seq__24742 = G__24805;
chunk__24743 = G__24806;
count__24744 = G__24807;
i__24745 = G__24808;
continue;
} else {
var role = cljs.core.first.call(null,seq__24742__$1);
var temp__5735__auto___24809__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___24809__$2)){
var spec_24810 = temp__5735__auto___24809__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24810));
} else {
}


var G__24811 = cljs.core.next.call(null,seq__24742__$1);
var G__24812 = null;
var G__24813 = (0);
var G__24814 = (0);
seq__24742 = G__24811;
chunk__24743 = G__24812;
count__24744 = G__24813;
i__24745 = G__24814;
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
var G__24815 = cljs.core.conj.call(null,via,t);
var G__24816 = cljs.core.ex_cause.call(null,t);
via = G__24815;
t = G__24816;
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
var map__24819 = datafied_throwable;
var map__24819__$1 = (((((!((map__24819 == null))))?(((((map__24819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24819):map__24819);
var via = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24820 = cljs.core.last.call(null,via);
var map__24820__$1 = (((((!((map__24820 == null))))?(((((map__24820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24820):map__24820);
var type = cljs.core.get.call(null,map__24820__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__24820__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__24820__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24821 = data;
var map__24821__$1 = (((((!((map__24821 == null))))?(((((map__24821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24821):map__24821);
var problems = cljs.core.get.call(null,map__24821__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__24821__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__24821__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24822 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__24822__$1 = (((((!((map__24822 == null))))?(((((map__24822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24822):map__24822);
var top_data = map__24822__$1;
var source = cljs.core.get.call(null,map__24822__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__24827 = phase;
var G__24827__$1 = (((G__24827 instanceof cljs.core.Keyword))?G__24827.fqn:null);
switch (G__24827__$1) {
case "read-source":
var map__24828 = data;
var map__24828__$1 = (((((!((map__24828 == null))))?(((((map__24828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24828):map__24828);
var line = cljs.core.get.call(null,map__24828__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24828__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24830 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__24830__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24830,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24830);
var G__24830__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24830__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24830__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24830__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24831 = top_data;
var G__24831__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24831,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24831);
var G__24831__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24831__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24831__$1);
var G__24831__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24831__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24831__$2);
var G__24831__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24831__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24831__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24831__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24831__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24832 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24832,(0),null);
var method = cljs.core.nth.call(null,vec__24832,(1),null);
var file = cljs.core.nth.call(null,vec__24832,(2),null);
var line = cljs.core.nth.call(null,vec__24832,(3),null);
var G__24835 = top_data;
var G__24835__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__24835,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24835);
var G__24835__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__24835__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24835__$1);
var G__24835__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__24835__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24835__$2);
var G__24835__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24835__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24835__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24835__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24835__$4;
}

break;
case "execution":
var vec__24836 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24836,(0),null);
var method = cljs.core.nth.call(null,vec__24836,(1),null);
var file = cljs.core.nth.call(null,vec__24836,(2),null);
var line = cljs.core.nth.call(null,vec__24836,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__24818_SHARP_){
var or__4126__auto__ = (p1__24818_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__24818_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__24839 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24839__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__24839,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24839);
var G__24839__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24839__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24839__$1);
var G__24839__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__24839__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24839__$2);
var G__24839__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__24839__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24839__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24839__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24839__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24827__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24843){
var map__24844 = p__24843;
var map__24844__$1 = (((((!((map__24844 == null))))?(((((map__24844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24844):map__24844);
var triage_data = map__24844__$1;
var phase = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__24844__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__24846 = phase;
var G__24846__$1 = (((G__24846 instanceof cljs.core.Keyword))?G__24846.fqn:null);
switch (G__24846__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24847_24856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24848_24857 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24849_24858 = true;
var _STAR_print_fn_STAR__temp_val__24850_24859 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24849_24858);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24850_24859);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24841_SHARP_){
return cljs.core.dissoc.call(null,p1__24841_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24848_24857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24847_24856);
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
var _STAR_print_newline_STAR__orig_val__24851_24860 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24852_24861 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24853_24862 = true;
var _STAR_print_fn_STAR__temp_val__24854_24863 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24853_24862);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24854_24863);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24842_SHARP_){
return cljs.core.dissoc.call(null,p1__24842_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24852_24861);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24851_24860);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24846__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
