// Compiled by ClojureScript 1.10.339 {}
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
if(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return (v > (0));
} else {
return and__3938__auto__;
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
if(!((o == null))){
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
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__20882_SHARP_,p2__20881_SHARP_){
var vec__20883 = clojure.string.split.call(null,p2__20881_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__20883,(0),null);
var v = cljs.core.nth.call(null,vec__20883,(1),null);
return cljs.core.update.call(null,p1__20882_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),cljs_http.client.acc_param,no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__20886_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__20886_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__20887){
var vec__20888 = p__20887;
var k = cljs.core.nth.call(null,vec__20888,(0),null);
var v = cljs.core.nth.call(null,vec__20888,(1),null);
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
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__20891_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20891_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
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
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__3938__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
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
var temp__5455__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
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
return cljs.core.async.map.call(null,(function (p1__20892_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20892_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20899 = arguments.length;
var i__4532__auto___20900 = (0);
while(true){
if((i__4532__auto___20900 < len__4531__auto___20899)){
args__4534__auto__.push((arguments[i__4532__auto___20900]));

var G__20901 = (i__4532__auto___20900 + (1));
i__4532__auto___20900 = G__20901;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20895){
var vec__20896 = p__20895;
var default_headers = cljs.core.nth.call(null,vec__20896,(0),null);
return ((function (vec__20896,default_headers){
return (function (request){
var temp__5455__auto__ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var default_headers__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20896,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq20893){
var G__20894 = cljs.core.first.call(null,seq20893);
var seq20893__$1 = cljs.core.next.call(null,seq20893);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20894,seq20893__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20908 = arguments.length;
var i__4532__auto___20909 = (0);
while(true){
if((i__4532__auto___20909 < len__4531__auto___20908)){
args__4534__auto__.push((arguments[i__4532__auto___20909]));

var G__20910 = (i__4532__auto___20909 + (1));
i__4532__auto___20909 = G__20910;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20904){
var vec__20905 = p__20904;
var accept = cljs.core.nth.call(null,vec__20905,(0),null);
return ((function (vec__20905,accept){
return (function (request){
var temp__5455__auto__ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var accept__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20905,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq20902){
var G__20903 = cljs.core.first.call(null,seq20902);
var seq20902__$1 = cljs.core.next.call(null,seq20902);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20903,seq20902__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20917 = arguments.length;
var i__4532__auto___20918 = (0);
while(true){
if((i__4532__auto___20918 < len__4531__auto___20917)){
args__4534__auto__.push((arguments[i__4532__auto___20918]));

var G__20919 = (i__4532__auto___20918 + (1));
i__4532__auto___20918 = G__20919;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20913){
var vec__20914 = p__20913;
var content_type = cljs.core.nth.call(null,vec__20914,(0),null);
return ((function (vec__20914,content_type){
return (function (request){
var temp__5455__auto__ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var content_type__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20914,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq20911){
var G__20912 = cljs.core.first.call(null,seq20911);
var seq20911__$1 = cljs.core.next.call(null,seq20911);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20912,seq20911__$1);
});

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
var temp__5455__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var map__20920 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20920__$1 = ((((!((map__20920 == null)))?(((((map__20920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20920):map__20920);
var encoding = cljs.core.get.call(null,map__20920__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__20920__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__20924 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20924__$1 = ((((!((map__20924 == null)))?(((((map__20924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924):map__20924);
var decoding = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__20924,map__20924__$1,decoding,decoding_opts){
return (function (p1__20922_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__20922_SHARP_,decoding,decoding_opts);
});})(map__20924,map__20924__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__20924,map__20924__$1,decoding,decoding_opts,transit_decode){
return (function (p1__20923_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20923_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__20924,map__20924__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
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
return cljs.core.async.map.call(null,(function (p1__20926_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20926_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__20927){
var map__20928 = p__20927;
var map__20928__$1 = ((((!((map__20928 == null)))?(((((map__20928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20928):map__20928);
var req = map__20928__$1;
var query_params = cljs.core.get.call(null,map__20928__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__20930){
var map__20931 = p__20930;
var map__20931__$1 = ((((!((map__20931 == null)))?(((((map__20931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20931):map__20931);
var request = map__20931__$1;
var form_params = cljs.core.get.call(null,map__20931__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__20931__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__20931__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__3938__auto__ = form_params;
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3938__auto__;
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
var seq__20933_20943 = cljs.core.seq.call(null,params);
var chunk__20934_20944 = null;
var count__20935_20945 = (0);
var i__20936_20946 = (0);
while(true){
if((i__20936_20946 < count__20935_20945)){
var vec__20937_20947 = cljs.core._nth.call(null,chunk__20934_20944,i__20936_20946);
var k_20948 = cljs.core.nth.call(null,vec__20937_20947,(0),null);
var v_20949 = cljs.core.nth.call(null,vec__20937_20947,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20949)){
form_data.append(cljs.core.name.call(null,k_20948),cljs.core.first.call(null,v_20949),cljs.core.second.call(null,v_20949));
} else {
form_data.append(cljs.core.name.call(null,k_20948),v_20949);
}


var G__20950 = seq__20933_20943;
var G__20951 = chunk__20934_20944;
var G__20952 = count__20935_20945;
var G__20953 = (i__20936_20946 + (1));
seq__20933_20943 = G__20950;
chunk__20934_20944 = G__20951;
count__20935_20945 = G__20952;
i__20936_20946 = G__20953;
continue;
} else {
var temp__5457__auto___20954 = cljs.core.seq.call(null,seq__20933_20943);
if(temp__5457__auto___20954){
var seq__20933_20955__$1 = temp__5457__auto___20954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20933_20955__$1)){
var c__4351__auto___20956 = cljs.core.chunk_first.call(null,seq__20933_20955__$1);
var G__20957 = cljs.core.chunk_rest.call(null,seq__20933_20955__$1);
var G__20958 = c__4351__auto___20956;
var G__20959 = cljs.core.count.call(null,c__4351__auto___20956);
var G__20960 = (0);
seq__20933_20943 = G__20957;
chunk__20934_20944 = G__20958;
count__20935_20945 = G__20959;
i__20936_20946 = G__20960;
continue;
} else {
var vec__20940_20961 = cljs.core.first.call(null,seq__20933_20955__$1);
var k_20962 = cljs.core.nth.call(null,vec__20940_20961,(0),null);
var v_20963 = cljs.core.nth.call(null,vec__20940_20961,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20963)){
form_data.append(cljs.core.name.call(null,k_20962),cljs.core.first.call(null,v_20963),cljs.core.second.call(null,v_20963));
} else {
form_data.append(cljs.core.name.call(null,k_20962),v_20963);
}


var G__20964 = cljs.core.next.call(null,seq__20933_20955__$1);
var G__20965 = null;
var G__20966 = (0);
var G__20967 = (0);
seq__20933_20943 = G__20964;
chunk__20934_20944 = G__20965;
count__20935_20945 = G__20966;
i__20936_20946 = G__20967;
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
return (function (p__20968){
var map__20969 = p__20968;
var map__20969__$1 = ((((!((map__20969 == null)))?(((((map__20969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20969):map__20969);
var request = map__20969__$1;
var multipart_params = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__3938__auto__ = multipart_params;
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3938__auto__;
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
var temp__5455__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__20971_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__20971_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__20973){
var map__20974 = p__20973;
var map__20974__$1 = ((((!((map__20974 == null)))?(((((map__20974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20974):map__20974);
var req = map__20974__$1;
var query_params = cljs.core.get.call(null,map__20974__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5455__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5455__auto__,map__20974,map__20974__$1,req,query_params){
return (function (p1__20972_SHARP_){
return cljs.core.merge.call(null,p1__20972_SHARP_,query_params);
});})(spec,temp__5455__auto__,map__20974,map__20974__$1,req,query_params))
));
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
var args__4534__auto__ = [];
var len__4531__auto___20982 = arguments.length;
var i__4532__auto___20983 = (0);
while(true){
if((i__4532__auto___20983 < len__4531__auto___20982)){
args__4534__auto__.push((arguments[i__4532__auto___20983]));

var G__20984 = (i__4532__auto___20983 + (1));
i__4532__auto___20983 = G__20984;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20978){
var vec__20979 = p__20978;
var credentials = cljs.core.nth.call(null,vec__20979,(0),null);
return ((function (vec__20979,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__20979,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq20976){
var G__20977 = cljs.core.first.call(null,seq20976);
var seq20976__$1 = cljs.core.next.call(null,seq20976);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20977,seq20976__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5455__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var oauth_token = temp__5455__auto__;
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
var temp__5455__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var custom_channel = temp__5455__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___20991 = arguments.length;
var i__4532__auto___20992 = (0);
while(true){
if((i__4532__auto___20992 < len__4531__auto___20991)){
args__4534__auto__.push((arguments[i__4532__auto___20992]));

var G__20993 = (i__4532__auto___20992 + (1));
i__4532__auto___20992 = G__20993;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20987){
var vec__20988 = p__20987;
var req = cljs.core.nth.call(null,vec__20988,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.delete$.cljs$lang$applyTo = (function (seq20985){
var G__20986 = cljs.core.first.call(null,seq20985);
var seq20985__$1 = cljs.core.next.call(null,seq20985);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20986,seq20985__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21000 = arguments.length;
var i__4532__auto___21001 = (0);
while(true){
if((i__4532__auto___21001 < len__4531__auto___21000)){
args__4534__auto__.push((arguments[i__4532__auto___21001]));

var G__21002 = (i__4532__auto___21001 + (1));
i__4532__auto___21001 = G__21002;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20996){
var vec__20997 = p__20996;
var req = cljs.core.nth.call(null,vec__20997,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.get.cljs$lang$applyTo = (function (seq20994){
var G__20995 = cljs.core.first.call(null,seq20994);
var seq20994__$1 = cljs.core.next.call(null,seq20994);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20995,seq20994__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21009 = arguments.length;
var i__4532__auto___21010 = (0);
while(true){
if((i__4532__auto___21010 < len__4531__auto___21009)){
args__4534__auto__.push((arguments[i__4532__auto___21010]));

var G__21011 = (i__4532__auto___21010 + (1));
i__4532__auto___21010 = G__21011;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21005){
var vec__21006 = p__21005;
var req = cljs.core.nth.call(null,vec__21006,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.head.cljs$lang$applyTo = (function (seq21003){
var G__21004 = cljs.core.first.call(null,seq21003);
var seq21003__$1 = cljs.core.next.call(null,seq21003);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21004,seq21003__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21018 = arguments.length;
var i__4532__auto___21019 = (0);
while(true){
if((i__4532__auto___21019 < len__4531__auto___21018)){
args__4534__auto__.push((arguments[i__4532__auto___21019]));

var G__21020 = (i__4532__auto___21019 + (1));
i__4532__auto___21019 = G__21020;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21014){
var vec__21015 = p__21014;
var req = cljs.core.nth.call(null,vec__21015,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq21012){
var G__21013 = cljs.core.first.call(null,seq21012);
var seq21012__$1 = cljs.core.next.call(null,seq21012);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21013,seq21012__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21027 = arguments.length;
var i__4532__auto___21028 = (0);
while(true){
if((i__4532__auto___21028 < len__4531__auto___21027)){
args__4534__auto__.push((arguments[i__4532__auto___21028]));

var G__21029 = (i__4532__auto___21028 + (1));
i__4532__auto___21028 = G__21029;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21023){
var vec__21024 = p__21023;
var req = cljs.core.nth.call(null,vec__21024,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.move.cljs$lang$applyTo = (function (seq21021){
var G__21022 = cljs.core.first.call(null,seq21021);
var seq21021__$1 = cljs.core.next.call(null,seq21021);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21022,seq21021__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21036 = arguments.length;
var i__4532__auto___21037 = (0);
while(true){
if((i__4532__auto___21037 < len__4531__auto___21036)){
args__4534__auto__.push((arguments[i__4532__auto___21037]));

var G__21038 = (i__4532__auto___21037 + (1));
i__4532__auto___21037 = G__21038;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21032){
var vec__21033 = p__21032;
var req = cljs.core.nth.call(null,vec__21033,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.options.cljs$lang$applyTo = (function (seq21030){
var G__21031 = cljs.core.first.call(null,seq21030);
var seq21030__$1 = cljs.core.next.call(null,seq21030);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21031,seq21030__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21045 = arguments.length;
var i__4532__auto___21046 = (0);
while(true){
if((i__4532__auto___21046 < len__4531__auto___21045)){
args__4534__auto__.push((arguments[i__4532__auto___21046]));

var G__21047 = (i__4532__auto___21046 + (1));
i__4532__auto___21046 = G__21047;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21041){
var vec__21042 = p__21041;
var req = cljs.core.nth.call(null,vec__21042,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.patch.cljs$lang$applyTo = (function (seq21039){
var G__21040 = cljs.core.first.call(null,seq21039);
var seq21039__$1 = cljs.core.next.call(null,seq21039);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21040,seq21039__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21054 = arguments.length;
var i__4532__auto___21055 = (0);
while(true){
if((i__4532__auto___21055 < len__4531__auto___21054)){
args__4534__auto__.push((arguments[i__4532__auto___21055]));

var G__21056 = (i__4532__auto___21055 + (1));
i__4532__auto___21055 = G__21056;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21050){
var vec__21051 = p__21050;
var req = cljs.core.nth.call(null,vec__21051,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.post.cljs$lang$applyTo = (function (seq21048){
var G__21049 = cljs.core.first.call(null,seq21048);
var seq21048__$1 = cljs.core.next.call(null,seq21048);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21049,seq21048__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21063 = arguments.length;
var i__4532__auto___21064 = (0);
while(true){
if((i__4532__auto___21064 < len__4531__auto___21063)){
args__4534__auto__.push((arguments[i__4532__auto___21064]));

var G__21065 = (i__4532__auto___21064 + (1));
i__4532__auto___21064 = G__21065;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21059){
var vec__21060 = p__21059;
var req = cljs.core.nth.call(null,vec__21060,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.put.cljs$lang$applyTo = (function (seq21057){
var G__21058 = cljs.core.first.call(null,seq21057);
var seq21057__$1 = cljs.core.next.call(null,seq21057);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21058,seq21057__$1);
});


//# sourceMappingURL=client.js.map
