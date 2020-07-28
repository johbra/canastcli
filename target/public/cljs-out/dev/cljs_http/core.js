// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__20858){
var vec__20859 = p__20858;
var k = cljs.core.nth.call(null,vec__20859,(0),null);
var v = cljs.core.nth.call(null,vec__20859,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__20862 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__20862)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__20862)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__20862)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__20862)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__20862)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__20862)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20862)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__20863){
var map__20864 = p__20863;
var map__20864__$1 = (((((!((map__20864 == null))))?(((((map__20864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20864):map__20864);
var request = map__20864__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__20864__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__20864__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__20864__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__20866 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__20866,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__20866,response_type);

G__20866.setTimeoutInterval(timeout);

G__20866.setWithCredentials(send_credentials);

return G__20866;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__20867){
var map__20868 = p__20867;
var map__20868__$1 = (((((!((map__20868 == null))))?(((((map__20868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20868):map__20868);
var request = map__20868__$1;
var request_method = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_20892 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__20870_20893 = xhr;
G__20870_20893.setProgressEventsEnabled(true);

G__20870_20893.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_20892,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__20870_20893.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_20892,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16960__auto___20894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20881){
var state_val_20882 = (state_20881[(1)]);
if((state_val_20882 === (1))){
var state_20881__$1 = state_20881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20881__$1,(2),cancel);
} else {
if((state_val_20882 === (2))){
var inst_20872 = (state_20881[(2)]);
var inst_20873 = xhr.isComplete();
var inst_20874 = cljs.core.not.call(null,inst_20873);
var state_20881__$1 = (function (){var statearr_20883 = state_20881;
(statearr_20883[(7)] = inst_20872);

return statearr_20883;
})();
if(inst_20874){
var statearr_20884_20895 = state_20881__$1;
(statearr_20884_20895[(1)] = (3));

} else {
var statearr_20885_20896 = state_20881__$1;
(statearr_20885_20896[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (3))){
var inst_20876 = xhr.abort();
var state_20881__$1 = state_20881;
var statearr_20886_20897 = state_20881__$1;
(statearr_20886_20897[(2)] = inst_20876);

(statearr_20886_20897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (4))){
var state_20881__$1 = state_20881;
var statearr_20887_20898 = state_20881__$1;
(statearr_20887_20898[(2)] = null);

(statearr_20887_20898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20882 === (5))){
var inst_20879 = (state_20881[(2)]);
var state_20881__$1 = state_20881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20881__$1,inst_20879);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__16794__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16794__auto____0 = (function (){
var statearr_20888 = [null,null,null,null,null,null,null,null];
(statearr_20888[(0)] = cljs_http$core$xhr_$_state_machine__16794__auto__);

(statearr_20888[(1)] = (1));

return statearr_20888;
});
var cljs_http$core$xhr_$_state_machine__16794__auto____1 = (function (state_20881){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20889){if((e20889 instanceof Object)){
var ex__16797__auto__ = e20889;
var statearr_20890_20899 = state_20881;
(statearr_20890_20899[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20900 = state_20881;
state_20881 = G__20900;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16794__auto__ = function(state_20881){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16794__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16794__auto____1.call(this,state_20881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16794__auto____0;
cljs_http$core$xhr_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16794__auto____1;
return cljs_http$core$xhr_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20891 = f__16961__auto__.call(null);
(statearr_20891[(6)] = c__16960__auto___20894);

return statearr_20891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__20901){
var map__20902 = p__20901;
var map__20902__$1 = (((((!((map__20902 == null))))?(((((map__20902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20902):map__20902);
var request = map__20902__$1;
var timeout = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__20902__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_20915 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_20915], null));

if(cljs.core.truth_(cancel)){
var c__16960__auto___20916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_20908){
var state_val_20909 = (state_20908[(1)]);
if((state_val_20909 === (1))){
var state_20908__$1 = state_20908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20908__$1,(2),cancel);
} else {
if((state_val_20909 === (2))){
var inst_20905 = (state_20908[(2)]);
var inst_20906 = jsonp.cancel(req_20915);
var state_20908__$1 = (function (){var statearr_20910 = state_20908;
(statearr_20910[(7)] = inst_20905);

return statearr_20910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20908__$1,inst_20906);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__16794__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16794__auto____0 = (function (){
var statearr_20911 = [null,null,null,null,null,null,null,null];
(statearr_20911[(0)] = cljs_http$core$jsonp_$_state_machine__16794__auto__);

(statearr_20911[(1)] = (1));

return statearr_20911;
});
var cljs_http$core$jsonp_$_state_machine__16794__auto____1 = (function (state_20908){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_20908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e20912){if((e20912 instanceof Object)){
var ex__16797__auto__ = e20912;
var statearr_20913_20917 = state_20908;
(statearr_20913_20917[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20918 = state_20908;
state_20908 = G__20918;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16794__auto__ = function(state_20908){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16794__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16794__auto____1.call(this,state_20908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16794__auto____0;
cljs_http$core$jsonp_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16794__auto____1;
return cljs_http$core$jsonp_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_20914 = f__16961__auto__.call(null);
(statearr_20914[(6)] = c__16960__auto___20916);

return statearr_20914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__20919){
var map__20920 = p__20919;
var map__20920__$1 = (((((!((map__20920 == null))))?(((((map__20920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20920):map__20920);
var request = map__20920__$1;
var request_method = cljs.core.get.call(null,map__20920__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
