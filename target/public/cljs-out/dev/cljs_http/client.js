// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return (v > (0));
} else {
return and__4115__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.conj.call(null,o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_.call(null,s)))){
return cljs.core.reduce.call(null,(function (p1__21118_SHARP_,p2__21117_SHARP_){
var vec__21119 = clojure.string.split.call(null,p2__21117_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__21119,(0),null);
var v = cljs.core.nth.call(null,vec__21119,(1),null);
return cljs.core.update.call(null,p1__21118_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),cljs_http.client.acc_param,no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_.call(null,url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode.call(null,cljs.core.name.call(null,k)),"=",no.en.core.url_encode.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__21122_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__21122_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__21123){
var vec__21124 = p__21123;
var k = cljs.core.nth.call(null,vec__21124,(0),null);
var v = cljs.core.nth.call(null,vec__21124,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,(function (p1__21127_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21127_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method))?((cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)))?cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))):false):false))){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__21128_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21128_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21135 = arguments.length;
var i__4737__auto___21136 = (0);
while(true){
if((i__4737__auto___21136 < len__4736__auto___21135)){
args__4742__auto__.push((arguments[i__4737__auto___21136]));

var G__21137 = (i__4737__auto___21136 + (1));
i__4737__auto___21136 = G__21137;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21131){
var vec__21132 = p__21131;
var default_headers = cljs.core.nth.call(null,vec__21132,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var default_headers__$1 = temp__5733__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq21129){
var G__21130 = cljs.core.first.call(null,seq21129);
var seq21129__$1 = cljs.core.next.call(null,seq21129);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21130,seq21129__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21144 = arguments.length;
var i__4737__auto___21145 = (0);
while(true){
if((i__4737__auto___21145 < len__4736__auto___21144)){
args__4742__auto__.push((arguments[i__4737__auto___21145]));

var G__21146 = (i__4737__auto___21145 + (1));
i__4737__auto___21145 = G__21146;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21140){
var vec__21141 = p__21140;
var accept = cljs.core.nth.call(null,vec__21141,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var accept__$1 = temp__5733__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq21138){
var G__21139 = cljs.core.first.call(null,seq21138);
var seq21138__$1 = cljs.core.next.call(null,seq21138);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21139,seq21138__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21153 = arguments.length;
var i__4737__auto___21154 = (0);
while(true){
if((i__4737__auto___21154 < len__4736__auto___21153)){
args__4742__auto__.push((arguments[i__4737__auto___21154]));

var G__21155 = (i__4737__auto___21154 + (1));
i__4737__auto___21154 = G__21155;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21149){
var vec__21150 = p__21149;
var content_type = cljs.core.nth.call(null,vec__21150,(0),null);
return (function (request){
var temp__5733__auto__ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var content_type__$1 = temp__5733__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq21147){
var G__21148 = cljs.core.first.call(null,seq21147);
var seq21147__$1 = cljs.core.next.call(null,seq21147);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21148,seq21147__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var map__21156 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__21156__$1 = (((((!((map__21156 == null))))?(((((map__21156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21156):map__21156);
var encoding = cljs.core.get.call(null,map__21156__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__21156__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__21160 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__21160__$1 = (((((!((map__21160 == null))))?(((((map__21160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21160):map__21160);
var decoding = cljs.core.get.call(null,map__21160__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__21160__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__21158_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__21158_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.call(null,(function (p1__21159_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21159_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var params = temp__5733__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__21162_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21162_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__21163){
var map__21164 = p__21163;
var map__21164__$1 = (((((!((map__21164 == null))))?(((((map__21164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21164):map__21164);
var req = map__21164__$1;
var query_params = cljs.core.get.call(null,map__21164__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__21166){
var map__21167 = p__21166;
var map__21167__$1 = (((((!((map__21167 == null))))?(((((map__21167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21167):map__21167);
var request = map__21167__$1;
var form_params = cljs.core.get.call(null,map__21167__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__21167__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__21167__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4115__auto__ = form_params;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4115__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__21169_21185 = cljs.core.seq.call(null,params);
var chunk__21170_21186 = null;
var count__21171_21187 = (0);
var i__21172_21188 = (0);
while(true){
if((i__21172_21188 < count__21171_21187)){
var vec__21179_21189 = cljs.core._nth.call(null,chunk__21170_21186,i__21172_21188);
var k_21190 = cljs.core.nth.call(null,vec__21179_21189,(0),null);
var v_21191 = cljs.core.nth.call(null,vec__21179_21189,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_21191)){
form_data.append(cljs.core.name.call(null,k_21190),cljs.core.first.call(null,v_21191),cljs.core.second.call(null,v_21191));
} else {
form_data.append(cljs.core.name.call(null,k_21190),v_21191);
}


var G__21192 = seq__21169_21185;
var G__21193 = chunk__21170_21186;
var G__21194 = count__21171_21187;
var G__21195 = (i__21172_21188 + (1));
seq__21169_21185 = G__21192;
chunk__21170_21186 = G__21193;
count__21171_21187 = G__21194;
i__21172_21188 = G__21195;
continue;
} else {
var temp__5735__auto___21196 = cljs.core.seq.call(null,seq__21169_21185);
if(temp__5735__auto___21196){
var seq__21169_21197__$1 = temp__5735__auto___21196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21169_21197__$1)){
var c__4556__auto___21198 = cljs.core.chunk_first.call(null,seq__21169_21197__$1);
var G__21199 = cljs.core.chunk_rest.call(null,seq__21169_21197__$1);
var G__21200 = c__4556__auto___21198;
var G__21201 = cljs.core.count.call(null,c__4556__auto___21198);
var G__21202 = (0);
seq__21169_21185 = G__21199;
chunk__21170_21186 = G__21200;
count__21171_21187 = G__21201;
i__21172_21188 = G__21202;
continue;
} else {
var vec__21182_21203 = cljs.core.first.call(null,seq__21169_21197__$1);
var k_21204 = cljs.core.nth.call(null,vec__21182_21203,(0),null);
var v_21205 = cljs.core.nth.call(null,vec__21182_21203,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_21205)){
form_data.append(cljs.core.name.call(null,k_21204),cljs.core.first.call(null,v_21205),cljs.core.second.call(null,v_21205));
} else {
form_data.append(cljs.core.name.call(null,k_21204),v_21205);
}


var G__21206 = cljs.core.next.call(null,seq__21169_21197__$1);
var G__21207 = null;
var G__21208 = (0);
var G__21209 = (0);
seq__21169_21185 = G__21206;
chunk__21170_21186 = G__21207;
count__21171_21187 = G__21208;
i__21172_21188 = G__21209;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__21210){
var map__21211 = p__21210;
var map__21211__$1 = (((((!((map__21211 == null))))?(((((map__21211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21211):map__21211);
var request = map__21211__$1;
var multipart_params = cljs.core.get.call(null,map__21211__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__21211__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4115__auto__ = multipart_params;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4115__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5733__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__21213_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__21213_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__21215){
var map__21216 = p__21215;
var map__21216__$1 = (((((!((map__21216 == null))))?(((((map__21216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21216):map__21216);
var req = map__21216__$1;
var query_params = cljs.core.get.call(null,map__21216__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5733__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__21214_SHARP_){
return cljs.core.merge.call(null,p1__21214_SHARP_,query_params);
})));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21224 = arguments.length;
var i__4737__auto___21225 = (0);
while(true){
if((i__4737__auto___21225 < len__4736__auto___21224)){
args__4742__auto__.push((arguments[i__4737__auto___21225]));

var G__21226 = (i__4737__auto___21225 + (1));
i__4737__auto___21225 = G__21226;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__21220){
var vec__21221 = p__21220;
var credentials = cljs.core.nth.call(null,vec__21221,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_.call(null,credentials__$1)))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq21218){
var G__21219 = cljs.core.first.call(null,seq21218);
var seq21218__$1 = cljs.core.next.call(null,seq21218);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21219,seq21218__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5733__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5733__auto__)){
var oauth_token = temp__5733__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5733__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var custom_channel = temp__5733__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21233 = arguments.length;
var i__4737__auto___21234 = (0);
while(true){
if((i__4737__auto___21234 < len__4736__auto___21233)){
args__4742__auto__.push((arguments[i__4737__auto___21234]));

var G__21235 = (i__4737__auto___21234 + (1));
i__4737__auto___21234 = G__21235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21229){
var vec__21230 = p__21229;
var req = cljs.core.nth.call(null,vec__21230,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq21227){
var G__21228 = cljs.core.first.call(null,seq21227);
var seq21227__$1 = cljs.core.next.call(null,seq21227);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21228,seq21227__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21242 = arguments.length;
var i__4737__auto___21243 = (0);
while(true){
if((i__4737__auto___21243 < len__4736__auto___21242)){
args__4742__auto__.push((arguments[i__4737__auto___21243]));

var G__21244 = (i__4737__auto___21243 + (1));
i__4737__auto___21243 = G__21244;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21238){
var vec__21239 = p__21238;
var req = cljs.core.nth.call(null,vec__21239,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq21236){
var G__21237 = cljs.core.first.call(null,seq21236);
var seq21236__$1 = cljs.core.next.call(null,seq21236);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21237,seq21236__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21251 = arguments.length;
var i__4737__auto___21252 = (0);
while(true){
if((i__4737__auto___21252 < len__4736__auto___21251)){
args__4742__auto__.push((arguments[i__4737__auto___21252]));

var G__21253 = (i__4737__auto___21252 + (1));
i__4737__auto___21252 = G__21253;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21247){
var vec__21248 = p__21247;
var req = cljs.core.nth.call(null,vec__21248,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq21245){
var G__21246 = cljs.core.first.call(null,seq21245);
var seq21245__$1 = cljs.core.next.call(null,seq21245);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21246,seq21245__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21260 = arguments.length;
var i__4737__auto___21261 = (0);
while(true){
if((i__4737__auto___21261 < len__4736__auto___21260)){
args__4742__auto__.push((arguments[i__4737__auto___21261]));

var G__21262 = (i__4737__auto___21261 + (1));
i__4737__auto___21261 = G__21262;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21256){
var vec__21257 = p__21256;
var req = cljs.core.nth.call(null,vec__21257,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq21254){
var G__21255 = cljs.core.first.call(null,seq21254);
var seq21254__$1 = cljs.core.next.call(null,seq21254);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21255,seq21254__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21269 = arguments.length;
var i__4737__auto___21270 = (0);
while(true){
if((i__4737__auto___21270 < len__4736__auto___21269)){
args__4742__auto__.push((arguments[i__4737__auto___21270]));

var G__21271 = (i__4737__auto___21270 + (1));
i__4737__auto___21270 = G__21271;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21265){
var vec__21266 = p__21265;
var req = cljs.core.nth.call(null,vec__21266,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq21263){
var G__21264 = cljs.core.first.call(null,seq21263);
var seq21263__$1 = cljs.core.next.call(null,seq21263);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21264,seq21263__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21278 = arguments.length;
var i__4737__auto___21279 = (0);
while(true){
if((i__4737__auto___21279 < len__4736__auto___21278)){
args__4742__auto__.push((arguments[i__4737__auto___21279]));

var G__21280 = (i__4737__auto___21279 + (1));
i__4737__auto___21279 = G__21280;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21274){
var vec__21275 = p__21274;
var req = cljs.core.nth.call(null,vec__21275,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq21272){
var G__21273 = cljs.core.first.call(null,seq21272);
var seq21272__$1 = cljs.core.next.call(null,seq21272);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21273,seq21272__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21287 = arguments.length;
var i__4737__auto___21288 = (0);
while(true){
if((i__4737__auto___21288 < len__4736__auto___21287)){
args__4742__auto__.push((arguments[i__4737__auto___21288]));

var G__21289 = (i__4737__auto___21288 + (1));
i__4737__auto___21288 = G__21289;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21283){
var vec__21284 = p__21283;
var req = cljs.core.nth.call(null,vec__21284,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq21281){
var G__21282 = cljs.core.first.call(null,seq21281);
var seq21281__$1 = cljs.core.next.call(null,seq21281);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21282,seq21281__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21296 = arguments.length;
var i__4737__auto___21297 = (0);
while(true){
if((i__4737__auto___21297 < len__4736__auto___21296)){
args__4742__auto__.push((arguments[i__4737__auto___21297]));

var G__21298 = (i__4737__auto___21297 + (1));
i__4737__auto___21297 = G__21298;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21292){
var vec__21293 = p__21292;
var req = cljs.core.nth.call(null,vec__21293,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq21290){
var G__21291 = cljs.core.first.call(null,seq21290);
var seq21290__$1 = cljs.core.next.call(null,seq21290);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21291,seq21290__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21305 = arguments.length;
var i__4737__auto___21306 = (0);
while(true){
if((i__4737__auto___21306 < len__4736__auto___21305)){
args__4742__auto__.push((arguments[i__4737__auto___21306]));

var G__21307 = (i__4737__auto___21306 + (1));
i__4737__auto___21306 = G__21307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21301){
var vec__21302 = p__21301;
var req = cljs.core.nth.call(null,vec__21302,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq21299){
var G__21300 = cljs.core.first.call(null,seq21299);
var seq21299__$1 = cljs.core.next.call(null,seq21299);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21300,seq21299__$1);
}));


//# sourceMappingURL=client.js.map
