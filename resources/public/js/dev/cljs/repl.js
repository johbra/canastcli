// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15154){
var map__15155 = p__15154;
var map__15155__$1 = (((((!((map__15155 == null))))?(((((map__15155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15155):map__15155);
var m = map__15155__$1;
var n = cljs.core.get.call(null,map__15155__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15155__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__15157_15189 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15158_15190 = null;
var count__15159_15191 = (0);
var i__15160_15192 = (0);
while(true){
if((i__15160_15192 < count__15159_15191)){
var f_15193 = cljs.core._nth.call(null,chunk__15158_15190,i__15160_15192);
cljs.core.println.call(null,"  ",f_15193);


var G__15194 = seq__15157_15189;
var G__15195 = chunk__15158_15190;
var G__15196 = count__15159_15191;
var G__15197 = (i__15160_15192 + (1));
seq__15157_15189 = G__15194;
chunk__15158_15190 = G__15195;
count__15159_15191 = G__15196;
i__15160_15192 = G__15197;
continue;
} else {
var temp__5735__auto___15198 = cljs.core.seq.call(null,seq__15157_15189);
if(temp__5735__auto___15198){
var seq__15157_15199__$1 = temp__5735__auto___15198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15157_15199__$1)){
var c__4556__auto___15200 = cljs.core.chunk_first.call(null,seq__15157_15199__$1);
var G__15201 = cljs.core.chunk_rest.call(null,seq__15157_15199__$1);
var G__15202 = c__4556__auto___15200;
var G__15203 = cljs.core.count.call(null,c__4556__auto___15200);
var G__15204 = (0);
seq__15157_15189 = G__15201;
chunk__15158_15190 = G__15202;
count__15159_15191 = G__15203;
i__15160_15192 = G__15204;
continue;
} else {
var f_15205 = cljs.core.first.call(null,seq__15157_15199__$1);
cljs.core.println.call(null,"  ",f_15205);


var G__15206 = cljs.core.next.call(null,seq__15157_15199__$1);
var G__15207 = null;
var G__15208 = (0);
var G__15209 = (0);
seq__15157_15189 = G__15206;
chunk__15158_15190 = G__15207;
count__15159_15191 = G__15208;
i__15160_15192 = G__15209;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15210 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15210);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15210)))?cljs.core.second.call(null,arglists_15210):arglists_15210));
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
var seq__15161_15211 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15162_15212 = null;
var count__15163_15213 = (0);
var i__15164_15214 = (0);
while(true){
if((i__15164_15214 < count__15163_15213)){
var vec__15175_15215 = cljs.core._nth.call(null,chunk__15162_15212,i__15164_15214);
var name_15216 = cljs.core.nth.call(null,vec__15175_15215,(0),null);
var map__15178_15217 = cljs.core.nth.call(null,vec__15175_15215,(1),null);
var map__15178_15218__$1 = (((((!((map__15178_15217 == null))))?(((((map__15178_15217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15178_15217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15178_15217):map__15178_15217);
var doc_15219 = cljs.core.get.call(null,map__15178_15218__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15220 = cljs.core.get.call(null,map__15178_15218__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15216);

cljs.core.println.call(null," ",arglists_15220);

if(cljs.core.truth_(doc_15219)){
cljs.core.println.call(null," ",doc_15219);
} else {
}


var G__15221 = seq__15161_15211;
var G__15222 = chunk__15162_15212;
var G__15223 = count__15163_15213;
var G__15224 = (i__15164_15214 + (1));
seq__15161_15211 = G__15221;
chunk__15162_15212 = G__15222;
count__15163_15213 = G__15223;
i__15164_15214 = G__15224;
continue;
} else {
var temp__5735__auto___15225 = cljs.core.seq.call(null,seq__15161_15211);
if(temp__5735__auto___15225){
var seq__15161_15226__$1 = temp__5735__auto___15225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15161_15226__$1)){
var c__4556__auto___15227 = cljs.core.chunk_first.call(null,seq__15161_15226__$1);
var G__15228 = cljs.core.chunk_rest.call(null,seq__15161_15226__$1);
var G__15229 = c__4556__auto___15227;
var G__15230 = cljs.core.count.call(null,c__4556__auto___15227);
var G__15231 = (0);
seq__15161_15211 = G__15228;
chunk__15162_15212 = G__15229;
count__15163_15213 = G__15230;
i__15164_15214 = G__15231;
continue;
} else {
var vec__15180_15232 = cljs.core.first.call(null,seq__15161_15226__$1);
var name_15233 = cljs.core.nth.call(null,vec__15180_15232,(0),null);
var map__15183_15234 = cljs.core.nth.call(null,vec__15180_15232,(1),null);
var map__15183_15235__$1 = (((((!((map__15183_15234 == null))))?(((((map__15183_15234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15183_15234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15183_15234):map__15183_15234);
var doc_15236 = cljs.core.get.call(null,map__15183_15235__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15237 = cljs.core.get.call(null,map__15183_15235__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15233);

cljs.core.println.call(null," ",arglists_15237);

if(cljs.core.truth_(doc_15236)){
cljs.core.println.call(null," ",doc_15236);
} else {
}


var G__15238 = cljs.core.next.call(null,seq__15161_15226__$1);
var G__15239 = null;
var G__15240 = (0);
var G__15241 = (0);
seq__15161_15211 = G__15238;
chunk__15162_15212 = G__15239;
count__15163_15213 = G__15240;
i__15164_15214 = G__15241;
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

var seq__15185 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15186 = null;
var count__15187 = (0);
var i__15188 = (0);
while(true){
if((i__15188 < count__15187)){
var role = cljs.core._nth.call(null,chunk__15186,i__15188);
var temp__5735__auto___15242__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___15242__$1)){
var spec_15243 = temp__5735__auto___15242__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15243));
} else {
}


var G__15244 = seq__15185;
var G__15245 = chunk__15186;
var G__15246 = count__15187;
var G__15247 = (i__15188 + (1));
seq__15185 = G__15244;
chunk__15186 = G__15245;
count__15187 = G__15246;
i__15188 = G__15247;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__15185);
if(temp__5735__auto____$1){
var seq__15185__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15185__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__15185__$1);
var G__15248 = cljs.core.chunk_rest.call(null,seq__15185__$1);
var G__15249 = c__4556__auto__;
var G__15250 = cljs.core.count.call(null,c__4556__auto__);
var G__15251 = (0);
seq__15185 = G__15248;
chunk__15186 = G__15249;
count__15187 = G__15250;
i__15188 = G__15251;
continue;
} else {
var role = cljs.core.first.call(null,seq__15185__$1);
var temp__5735__auto___15252__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___15252__$2)){
var spec_15253 = temp__5735__auto___15252__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15253));
} else {
}


var G__15254 = cljs.core.next.call(null,seq__15185__$1);
var G__15255 = null;
var G__15256 = (0);
var G__15257 = (0);
seq__15185 = G__15254;
chunk__15186 = G__15255;
count__15187 = G__15256;
i__15188 = G__15257;
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
var G__15258 = cljs.core.conj.call(null,via,t);
var G__15259 = cljs.core.ex_cause.call(null,t);
via = G__15258;
t = G__15259;
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
var map__15262 = datafied_throwable;
var map__15262__$1 = (((((!((map__15262 == null))))?(((((map__15262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15262):map__15262);
var via = cljs.core.get.call(null,map__15262__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__15262__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__15262__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15263 = cljs.core.last.call(null,via);
var map__15263__$1 = (((((!((map__15263 == null))))?(((((map__15263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15263):map__15263);
var type = cljs.core.get.call(null,map__15263__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__15263__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__15263__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15264 = data;
var map__15264__$1 = (((((!((map__15264 == null))))?(((((map__15264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15264):map__15264);
var problems = cljs.core.get.call(null,map__15264__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__15264__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__15264__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15265 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__15265__$1 = (((((!((map__15265 == null))))?(((((map__15265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15265):map__15265);
var top_data = map__15265__$1;
var source = cljs.core.get.call(null,map__15265__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__15270 = phase;
var G__15270__$1 = (((G__15270 instanceof cljs.core.Keyword))?G__15270.fqn:null);
switch (G__15270__$1) {
case "read-source":
var map__15271 = data;
var map__15271__$1 = (((((!((map__15271 == null))))?(((((map__15271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15271):map__15271);
var line = cljs.core.get.call(null,map__15271__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15271__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15273 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__15273__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15273,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15273);
var G__15273__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15273__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15273__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15273__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15274 = top_data;
var G__15274__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15274,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15274);
var G__15274__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15274__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15274__$1);
var G__15274__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15274__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15274__$2);
var G__15274__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15274__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15274__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15274__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15274__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15275 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15275,(0),null);
var method = cljs.core.nth.call(null,vec__15275,(1),null);
var file = cljs.core.nth.call(null,vec__15275,(2),null);
var line = cljs.core.nth.call(null,vec__15275,(3),null);
var G__15278 = top_data;
var G__15278__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__15278,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15278);
var G__15278__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__15278__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15278__$1);
var G__15278__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__15278__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15278__$2);
var G__15278__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15278__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15278__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15278__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15278__$4;
}

break;
case "execution":
var vec__15279 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15279,(0),null);
var method = cljs.core.nth.call(null,vec__15279,(1),null);
var file = cljs.core.nth.call(null,vec__15279,(2),null);
var line = cljs.core.nth.call(null,vec__15279,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__15261_SHARP_){
var or__4126__auto__ = (p1__15261_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__15261_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__15282 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15282__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__15282,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15282);
var G__15282__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15282__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15282__$1);
var G__15282__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__15282__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15282__$2);
var G__15282__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__15282__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15282__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15282__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15282__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15270__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15286){
var map__15287 = p__15286;
var map__15287__$1 = (((((!((map__15287 == null))))?(((((map__15287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15287):map__15287);
var triage_data = map__15287__$1;
var phase = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__15287__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__15289 = phase;
var G__15289__$1 = (((G__15289 instanceof cljs.core.Keyword))?G__15289.fqn:null);
switch (G__15289__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15290_15299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15291_15300 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15292_15301 = true;
var _STAR_print_fn_STAR__temp_val__15293_15302 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15292_15301);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15293_15302);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__15284_SHARP_){
return cljs.core.dissoc.call(null,p1__15284_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15291_15300);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15290_15299);
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
var _STAR_print_newline_STAR__orig_val__15294_15303 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15295_15304 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15296_15305 = true;
var _STAR_print_fn_STAR__temp_val__15297_15306 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15296_15305);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15297_15306);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__15285_SHARP_){
return cljs.core.dissoc.call(null,p1__15285_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15295_15304);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15294_15303);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15289__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
