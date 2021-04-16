// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcli.drop_file_stream.exists_file_named = (function canastcli$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_19263){
var state_val_19264 = (state_19263[(1)]);
if((state_val_19264 === (1))){
var inst_19246 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_19247 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_19248 = ["Authorization"];
var inst_19249 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_19250 = cljs.core.PersistentHashMap.fromArrays(inst_19248,inst_19249);
var inst_19251 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_19252 = [inst_19246];
var inst_19253 = cljs.core.PersistentHashMap.fromArrays(inst_19251,inst_19252);
var inst_19254 = [false,inst_19250,inst_19253];
var inst_19255 = cljs.core.PersistentHashMap.fromArrays(inst_19247,inst_19254);
var inst_19256 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_19255);
var state_19263__$1 = state_19263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19263__$1,(2),inst_19256);
} else {
if((state_val_19264 === (2))){
var inst_19258 = (state_19263[(2)]);
var inst_19259 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19258);
var inst_19260 = cljs.core._EQ_.call(null,inst_19259,(200));
var inst_19261 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_19260);
var state_19263__$1 = state_19263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19263__$1,inst_19261);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____0 = (function (){
var statearr_19265 = [null,null,null,null,null,null,null];
(statearr_19265[(0)] = canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__);

(statearr_19265[(1)] = (1));

return statearr_19265;
});
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____1 = (function (state_19263){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_19263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e19266){if((e19266 instanceof Object)){
var ex__16941__auto__ = e19266;
var statearr_19267_19269 = state_19263;
(statearr_19267_19269[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19270 = state_19263;
state_19263 = G__19270;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__ = function(state_19263){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____1.call(this,state_19263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_19268 = f__17033__auto__.call(null);
(statearr_19268[(6)] = c__17032__auto__);

return statearr_19268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.delete_file_named = (function canastcli$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_19285){
var state_val_19286 = (state_19285[(1)]);
if((state_val_19286 === (1))){
var inst_19271 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_19272 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_19273 = ["Authorization"];
var inst_19274 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_19275 = cljs.core.PersistentHashMap.fromArrays(inst_19273,inst_19274);
var inst_19276 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_19277 = [inst_19271];
var inst_19278 = cljs.core.PersistentHashMap.fromArrays(inst_19276,inst_19277);
var inst_19279 = [false,inst_19275,inst_19278];
var inst_19280 = cljs.core.PersistentHashMap.fromArrays(inst_19272,inst_19279);
var inst_19281 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete",inst_19280);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19285__$1,(2),inst_19281);
} else {
if((state_val_19286 === (2))){
var inst_19283 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19285__$1,inst_19283);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____0 = (function (){
var statearr_19287 = [null,null,null,null,null,null,null];
(statearr_19287[(0)] = canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__);

(statearr_19287[(1)] = (1));

return statearr_19287;
});
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____1 = (function (state_19285){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_19285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e19288){if((e19288 instanceof Object)){
var ex__16941__auto__ = e19288;
var statearr_19289_19291 = state_19285;
(statearr_19289_19291[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19292 = state_19285;
state_19285 = G__19292;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__ = function(state_19285){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____1.call(this,state_19285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_19290 = f__17033__auto__.call(null);
(statearr_19290[(6)] = c__17032__auto__);

return statearr_19290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.get_contents_of = (function canastcli$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_19306){
var state_val_19307 = (state_19306[(1)]);
if((state_val_19307 === (1))){
var inst_19293 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_19294 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_19295 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_19296 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_19293,"text/plain; charset=utf-8"];
var inst_19297 = cljs.core.PersistentHashMap.fromArrays(inst_19295,inst_19296);
var inst_19298 = [false,inst_19297];
var inst_19299 = cljs.core.PersistentHashMap.fromArrays(inst_19294,inst_19298);
var inst_19300 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_19299);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19306__$1,(2),inst_19300);
} else {
if((state_val_19307 === (2))){
var inst_19302 = (state_19306[(2)]);
var inst_19303 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19302);
var inst_19304 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_19303);
var state_19306__$1 = state_19306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19306__$1,inst_19304);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____0 = (function (){
var statearr_19308 = [null,null,null,null,null,null,null];
(statearr_19308[(0)] = canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__);

(statearr_19308[(1)] = (1));

return statearr_19308;
});
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____1 = (function (state_19306){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_19306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e19309){if((e19309 instanceof Object)){
var ex__16941__auto__ = e19309;
var statearr_19310_19312 = state_19306;
(statearr_19310_19312[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19313 = state_19306;
state_19306 = G__19313;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__ = function(state_19306){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____1.call(this,state_19306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_19311 = f__17033__auto__.call(null);
(statearr_19311[(6)] = c__17032__auto__);

return statearr_19311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.lies_edn = (function canastcli$drop_file_stream$lies_edn(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_19328){
var state_val_19329 = (state_19328[(1)]);
if((state_val_19329 === (1))){
var inst_19314 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_19315 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_19316 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_19317 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_19314,"text/plain; charset=utf-8"];
var inst_19318 = cljs.core.PersistentHashMap.fromArrays(inst_19316,inst_19317);
var inst_19319 = [false,inst_19318];
var inst_19320 = cljs.core.PersistentHashMap.fromArrays(inst_19315,inst_19319);
var inst_19321 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_19320);
var state_19328__$1 = state_19328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19328__$1,(2),inst_19321);
} else {
if((state_val_19329 === (2))){
var inst_19323 = (state_19328[(2)]);
var inst_19324 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19323);
var inst_19325 = cljs.reader.read_string.call(null,inst_19324);
var inst_19326 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_19325);
var state_19328__$1 = state_19328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19328__$1,inst_19326);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____0 = (function (){
var statearr_19330 = [null,null,null,null,null,null,null];
(statearr_19330[(0)] = canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__);

(statearr_19330[(1)] = (1));

return statearr_19330;
});
var canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____1 = (function (state_19328){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_19328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e19331){if((e19331 instanceof Object)){
var ex__16941__auto__ = e19331;
var statearr_19332_19334 = state_19328;
(statearr_19332_19334[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19335 = state_19328;
state_19328 = G__19335;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__ = function(state_19328){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____1.call(this,state_19328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_19333 = f__17033__auto__.call(null);
(statearr_19333[(6)] = c__17032__auto__);

return statearr_19333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.lies_welt = (function canastcli$drop_file_stream$lies_welt(f_name,w){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_19350){
var state_val_19351 = (state_19350[(1)]);
if((state_val_19351 === (1))){
var inst_19336 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_19337 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_19338 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_19339 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_19336,"text/plain; charset=utf-8"];
var inst_19340 = cljs.core.PersistentHashMap.fromArrays(inst_19338,inst_19339);
var inst_19341 = [false,inst_19340];
var inst_19342 = cljs.core.PersistentHashMap.fromArrays(inst_19337,inst_19341);
var inst_19343 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_19342);
var state_19350__$1 = state_19350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19350__$1,(2),inst_19343);
} else {
if((state_val_19351 === (2))){
var inst_19345 = (state_19350[(2)]);
var inst_19346 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19345);
var inst_19347 = cljs.reader.read_string.call(null,inst_19346);
var inst_19348 = cljs.core.reset_BANG_.call(null,w,inst_19347);
var state_19350__$1 = state_19350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19350__$1,inst_19348);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____0 = (function (){
var statearr_19352 = [null,null,null,null,null,null,null];
(statearr_19352[(0)] = canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__);

(statearr_19352[(1)] = (1));

return statearr_19352;
});
var canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____1 = (function (state_19350){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_19350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e19353){if((e19353 instanceof Object)){
var ex__16941__auto__ = e19353;
var statearr_19354_19356 = state_19350;
(statearr_19354_19356[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19357 = state_19350;
state_19350 = G__19357;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__ = function(state_19350){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____1.call(this,state_19350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_19355 = f__17033__auto__.call(null);
(statearr_19355[(6)] = c__17032__auto__);

return statearr_19355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.write_text = (function canastcli$drop_file_stream$write_text(text,f_name){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_19388){
var state_val_19389 = (state_19388[(1)]);
if((state_val_19389 === (1))){
var state_19388__$1 = state_19388;
var statearr_19390_19402 = state_19388__$1;
(statearr_19390_19402[(2)] = null);

(statearr_19390_19402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (2))){
var inst_19359 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_19360 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_19361 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_19362 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_19359,"application/octet-stream"];
var inst_19363 = cljs.core.PersistentHashMap.fromArrays(inst_19361,inst_19362);
var inst_19364 = [false,inst_19363,text];
var inst_19365 = cljs.core.PersistentHashMap.fromArrays(inst_19360,inst_19364);
var inst_19366 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_19365);
var state_19388__$1 = state_19388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19388__$1,(4),inst_19366);
} else {
if((state_val_19389 === (3))){
var inst_19386 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19388__$1,inst_19386);
} else {
if((state_val_19389 === (4))){
var inst_19368 = (state_19388[(7)]);
var inst_19368__$1 = (state_19388[(2)]);
var inst_19369 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19368__$1);
var inst_19370 = console.log(inst_19369);
var inst_19371 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_19368__$1);
var inst_19372 = cljs.core._EQ_.call(null,inst_19371,(429));
var state_19388__$1 = (function (){var statearr_19391 = state_19388;
(statearr_19391[(8)] = inst_19370);

(statearr_19391[(7)] = inst_19368__$1);

return statearr_19391;
})();
if(inst_19372){
var statearr_19392_19403 = state_19388__$1;
(statearr_19392_19403[(1)] = (5));

} else {
var statearr_19393_19404 = state_19388__$1;
(statearr_19393_19404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (5))){
var inst_19368 = (state_19388[(7)]);
var inst_19374 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19368);
var inst_19375 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_19374);
var inst_19376 = new cljs.core.Keyword(null,"retry_after","retry_after",1236499010).cljs$core$IFn$_invoke$arity$1(inst_19375);
var inst_19377 = (inst_19376 * (1000));
var inst_19378 = cljs.core.async.timeout.call(null,inst_19377);
var state_19388__$1 = state_19388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19388__$1,(8),inst_19378);
} else {
if((state_val_19389 === (6))){
var state_19388__$1 = state_19388;
var statearr_19394_19405 = state_19388__$1;
(statearr_19394_19405[(2)] = null);

(statearr_19394_19405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (7))){
var inst_19384 = (state_19388[(2)]);
var state_19388__$1 = state_19388;
var statearr_19395_19406 = state_19388__$1;
(statearr_19395_19406[(2)] = inst_19384);

(statearr_19395_19406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19389 === (8))){
var inst_19380 = (state_19388[(2)]);
var state_19388__$1 = (function (){var statearr_19396 = state_19388;
(statearr_19396[(9)] = inst_19380);

return statearr_19396;
})();
var statearr_19397_19407 = state_19388__$1;
(statearr_19397_19407[(2)] = null);

(statearr_19397_19407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____0 = (function (){
var statearr_19398 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19398[(0)] = canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__);

(statearr_19398[(1)] = (1));

return statearr_19398;
});
var canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____1 = (function (state_19388){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_19388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e19399){if((e19399 instanceof Object)){
var ex__16941__auto__ = e19399;
var statearr_19400_19408 = state_19388;
(statearr_19400_19408[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19409 = state_19388;
state_19388 = G__19409;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__ = function(state_19388){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____1.call(this,state_19388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_19401 = f__17033__auto__.call(null);
(statearr_19401[(6)] = c__17032__auto__);

return statearr_19401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.log_neues_spiel = (function canastcli$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_19428){
var state_val_19429 = (state_19428[(1)]);
if((state_val_19429 === (1))){
var inst_19410 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_19411 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_19412 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_19413 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_19410,"text/plain; charset=utf-8"];
var inst_19414 = cljs.core.PersistentHashMap.fromArrays(inst_19412,inst_19413);
var inst_19415 = [false,inst_19414];
var inst_19416 = cljs.core.PersistentHashMap.fromArrays(inst_19411,inst_19415);
var inst_19417 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_19416);
var state_19428__$1 = state_19428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19428__$1,(2),inst_19417);
} else {
if((state_val_19429 === (2))){
var inst_19419 = (state_19428[(2)]);
var inst_19420 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_19419);
var inst_19421 = (new Date());
var inst_19422 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19420),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19421),"\n"].join('');
var inst_19423 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_19422);
var inst_19424 = cljs.core.deref.call(null,w);
var inst_19425 = ziel.call(null,inst_19424);
var inst_19426 = canastcli.drop_file_stream.write_text.call(null,inst_19425,"logs.txt");
var state_19428__$1 = (function (){var statearr_19430 = state_19428;
(statearr_19430[(7)] = inst_19423);

return statearr_19430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19428__$1,inst_19426);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____0 = (function (){
var statearr_19431 = [null,null,null,null,null,null,null,null];
(statearr_19431[(0)] = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__);

(statearr_19431[(1)] = (1));

return statearr_19431;
});
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____1 = (function (state_19428){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_19428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e19432){if((e19432 instanceof Object)){
var ex__16941__auto__ = e19432;
var statearr_19433_19435 = state_19428;
(statearr_19433_19435[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19436 = state_19428;
state_19428 = G__19436;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__ = function(state_19428){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____1.call(this,state_19428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_19434 = f__17033__auto__.call(null);
(statearr_19434[(6)] = c__17032__auto__);

return statearr_19434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
