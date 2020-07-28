// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcli.drop_file_stream.exists_file_named = (function canastcli$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_21327){
var state_val_21328 = (state_21327[(1)]);
if((state_val_21328 === (1))){
var inst_21310 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_21311 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_21312 = ["Authorization"];
var inst_21313 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_21314 = cljs.core.PersistentHashMap.fromArrays(inst_21312,inst_21313);
var inst_21315 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_21316 = [inst_21310];
var inst_21317 = cljs.core.PersistentHashMap.fromArrays(inst_21315,inst_21316);
var inst_21318 = [false,inst_21314,inst_21317];
var inst_21319 = cljs.core.PersistentHashMap.fromArrays(inst_21311,inst_21318);
var inst_21320 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_21319);
var state_21327__$1 = state_21327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21327__$1,(2),inst_21320);
} else {
if((state_val_21328 === (2))){
var inst_21322 = (state_21327[(2)]);
var inst_21323 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_21322);
var inst_21324 = cljs.core._EQ_.call(null,inst_21323,(200));
var inst_21325 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21324);
var state_21327__$1 = state_21327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21327__$1,inst_21325);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto__ = null;
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto____0 = (function (){
var statearr_21329 = [null,null,null,null,null,null,null];
(statearr_21329[(0)] = canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto__);

(statearr_21329[(1)] = (1));

return statearr_21329;
});
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto____1 = (function (state_21327){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_21327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e21330){if((e21330 instanceof Object)){
var ex__16797__auto__ = e21330;
var statearr_21331_21333 = state_21327;
(statearr_21331_21333[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21334 = state_21327;
state_21327 = G__21334;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto__ = function(state_21327){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto____1.call(this,state_21327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto____0;
canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto____1;
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_21332 = f__16961__auto__.call(null);
(statearr_21332[(6)] = c__16960__auto__);

return statearr_21332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
canastcli.drop_file_stream.delete_file_named = (function canastcli$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_21350){
var state_val_21351 = (state_21350[(1)]);
if((state_val_21351 === (1))){
var inst_21335 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_21336 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_21337 = ["Authorization"];
var inst_21338 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_21339 = cljs.core.PersistentHashMap.fromArrays(inst_21337,inst_21338);
var inst_21340 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_21341 = [inst_21335];
var inst_21342 = cljs.core.PersistentHashMap.fromArrays(inst_21340,inst_21341);
var inst_21343 = [false,inst_21339,inst_21342];
var inst_21344 = cljs.core.PersistentHashMap.fromArrays(inst_21336,inst_21343);
var inst_21345 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_21344);
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21350__$1,(2),inst_21345);
} else {
if((state_val_21351 === (2))){
var inst_21347 = (state_21350[(2)]);
var inst_21348 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_21350__$1 = (function (){var statearr_21352 = state_21350;
(statearr_21352[(7)] = inst_21347);

return statearr_21352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21350__$1,inst_21348);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto__ = null;
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto____0 = (function (){
var statearr_21353 = [null,null,null,null,null,null,null,null];
(statearr_21353[(0)] = canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto__);

(statearr_21353[(1)] = (1));

return statearr_21353;
});
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto____1 = (function (state_21350){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_21350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e21354){if((e21354 instanceof Object)){
var ex__16797__auto__ = e21354;
var statearr_21355_21357 = state_21350;
(statearr_21355_21357[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21358 = state_21350;
state_21350 = G__21358;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto__ = function(state_21350){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto____1.call(this,state_21350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto____0;
canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto____1;
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_21356 = f__16961__auto__.call(null);
(statearr_21356[(6)] = c__16960__auto__);

return statearr_21356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
canastcli.drop_file_stream.get_contents_of = (function canastcli$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_21372){
var state_val_21373 = (state_21372[(1)]);
if((state_val_21373 === (1))){
var inst_21359 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21360 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21361 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21362 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21359,"text/plain; charset=utf-8"];
var inst_21363 = cljs.core.PersistentHashMap.fromArrays(inst_21361,inst_21362);
var inst_21364 = [false,inst_21363];
var inst_21365 = cljs.core.PersistentHashMap.fromArrays(inst_21360,inst_21364);
var inst_21366 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21365);
var state_21372__$1 = state_21372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21372__$1,(2),inst_21366);
} else {
if((state_val_21373 === (2))){
var inst_21368 = (state_21372[(2)]);
var inst_21369 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21368);
var inst_21370 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21369);
var state_21372__$1 = state_21372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21372__$1,inst_21370);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto__ = null;
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto____0 = (function (){
var statearr_21374 = [null,null,null,null,null,null,null];
(statearr_21374[(0)] = canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto__);

(statearr_21374[(1)] = (1));

return statearr_21374;
});
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto____1 = (function (state_21372){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_21372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e21375){if((e21375 instanceof Object)){
var ex__16797__auto__ = e21375;
var statearr_21376_21378 = state_21372;
(statearr_21376_21378[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21379 = state_21372;
state_21372 = G__21379;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto__ = function(state_21372){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto____1.call(this,state_21372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto____0;
canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto____1;
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_21377 = f__16961__auto__.call(null);
(statearr_21377[(6)] = c__16960__auto__);

return statearr_21377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
canastcli.drop_file_stream.lies_edn = (function canastcli$drop_file_stream$lies_edn(f_name,w,ziel){
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_21394){
var state_val_21395 = (state_21394[(1)]);
if((state_val_21395 === (1))){
var inst_21380 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21381 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21382 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21383 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21380,"text/plain; charset=utf-8"];
var inst_21384 = cljs.core.PersistentHashMap.fromArrays(inst_21382,inst_21383);
var inst_21385 = [false,inst_21384];
var inst_21386 = cljs.core.PersistentHashMap.fromArrays(inst_21381,inst_21385);
var inst_21387 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21386);
var state_21394__$1 = state_21394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21394__$1,(2),inst_21387);
} else {
if((state_val_21395 === (2))){
var inst_21389 = (state_21394[(2)]);
var inst_21390 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21389);
var inst_21391 = cljs.reader.read_string.call(null,inst_21390);
var inst_21392 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21391);
var state_21394__$1 = state_21394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21394__$1,inst_21392);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto__ = null;
var canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto____0 = (function (){
var statearr_21396 = [null,null,null,null,null,null,null];
(statearr_21396[(0)] = canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto__);

(statearr_21396[(1)] = (1));

return statearr_21396;
});
var canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto____1 = (function (state_21394){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_21394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e21397){if((e21397 instanceof Object)){
var ex__16797__auto__ = e21397;
var statearr_21398_21400 = state_21394;
(statearr_21398_21400[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21401 = state_21394;
state_21394 = G__21401;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto__ = function(state_21394){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto____1.call(this,state_21394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto____0;
canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto____1;
return canastcli$drop_file_stream$lies_edn_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_21399 = f__16961__auto__.call(null);
(statearr_21399[(6)] = c__16960__auto__);

return statearr_21399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
canastcli.drop_file_stream.lies_welt = (function canastcli$drop_file_stream$lies_welt(f_name,w){
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_21416){
var state_val_21417 = (state_21416[(1)]);
if((state_val_21417 === (1))){
var inst_21402 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21403 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21404 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21405 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21402,"text/plain; charset=utf-8"];
var inst_21406 = cljs.core.PersistentHashMap.fromArrays(inst_21404,inst_21405);
var inst_21407 = [false,inst_21406];
var inst_21408 = cljs.core.PersistentHashMap.fromArrays(inst_21403,inst_21407);
var inst_21409 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21408);
var state_21416__$1 = state_21416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21416__$1,(2),inst_21409);
} else {
if((state_val_21417 === (2))){
var inst_21411 = (state_21416[(2)]);
var inst_21412 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21411);
var inst_21413 = cljs.reader.read_string.call(null,inst_21412);
var inst_21414 = cljs.core.reset_BANG_.call(null,w,inst_21413);
var state_21416__$1 = state_21416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21416__$1,inst_21414);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto__ = null;
var canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto____0 = (function (){
var statearr_21418 = [null,null,null,null,null,null,null];
(statearr_21418[(0)] = canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto__);

(statearr_21418[(1)] = (1));

return statearr_21418;
});
var canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto____1 = (function (state_21416){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_21416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e21419){if((e21419 instanceof Object)){
var ex__16797__auto__ = e21419;
var statearr_21420_21422 = state_21416;
(statearr_21420_21422[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21423 = state_21416;
state_21416 = G__21423;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto__ = function(state_21416){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto____1.call(this,state_21416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto____0;
canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto____1;
return canastcli$drop_file_stream$lies_welt_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_21421 = f__16961__auto__.call(null);
(statearr_21421[(6)] = c__16960__auto__);

return statearr_21421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
canastcli.drop_file_stream.write_text = (function canastcli$drop_file_stream$write_text(text,f_name){
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_21435){
var state_val_21436 = (state_21435[(1)]);
if((state_val_21436 === (1))){
var inst_21424 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_21425 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_21426 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21427 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21424,"application/octet-stream"];
var inst_21428 = cljs.core.PersistentHashMap.fromArrays(inst_21426,inst_21427);
var inst_21429 = [false,inst_21428,text];
var inst_21430 = cljs.core.PersistentHashMap.fromArrays(inst_21425,inst_21429);
var inst_21431 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_21430);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21435__$1,(2),inst_21431);
} else {
if((state_val_21436 === (2))){
var inst_21433 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21435__$1,inst_21433);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$write_text_$_state_machine__16794__auto__ = null;
var canastcli$drop_file_stream$write_text_$_state_machine__16794__auto____0 = (function (){
var statearr_21437 = [null,null,null,null,null,null,null];
(statearr_21437[(0)] = canastcli$drop_file_stream$write_text_$_state_machine__16794__auto__);

(statearr_21437[(1)] = (1));

return statearr_21437;
});
var canastcli$drop_file_stream$write_text_$_state_machine__16794__auto____1 = (function (state_21435){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_21435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e21438){if((e21438 instanceof Object)){
var ex__16797__auto__ = e21438;
var statearr_21439_21441 = state_21435;
(statearr_21439_21441[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21442 = state_21435;
state_21435 = G__21442;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
canastcli$drop_file_stream$write_text_$_state_machine__16794__auto__ = function(state_21435){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$write_text_$_state_machine__16794__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$write_text_$_state_machine__16794__auto____1.call(this,state_21435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$write_text_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$write_text_$_state_machine__16794__auto____0;
canastcli$drop_file_stream$write_text_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$write_text_$_state_machine__16794__auto____1;
return canastcli$drop_file_stream$write_text_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_21440 = f__16961__auto__.call(null);
(statearr_21440[(6)] = c__16960__auto__);

return statearr_21440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});
canastcli.drop_file_stream.log_neues_spiel = (function canastcli$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__16960__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16961__auto__ = (function (){var switch__16793__auto__ = (function (state_21461){
var state_val_21462 = (state_21461[(1)]);
if((state_val_21462 === (1))){
var inst_21443 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21444 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21445 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21446 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21443,"text/plain; charset=utf-8"];
var inst_21447 = cljs.core.PersistentHashMap.fromArrays(inst_21445,inst_21446);
var inst_21448 = [false,inst_21447];
var inst_21449 = cljs.core.PersistentHashMap.fromArrays(inst_21444,inst_21448);
var inst_21450 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21449);
var state_21461__$1 = state_21461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21461__$1,(2),inst_21450);
} else {
if((state_val_21462 === (2))){
var inst_21452 = (state_21461[(2)]);
var inst_21453 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21452);
var inst_21454 = (new Date());
var inst_21455 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21453),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21454),"\n"].join('');
var inst_21456 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21455);
var inst_21457 = cljs.core.deref.call(null,w);
var inst_21458 = ziel.call(null,inst_21457);
var inst_21459 = canastcli.drop_file_stream.write_text.call(null,inst_21458,"logs.txt");
var state_21461__$1 = (function (){var statearr_21463 = state_21461;
(statearr_21463[(7)] = inst_21456);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21461__$1,inst_21459);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto__ = null;
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto____0 = (function (){
var statearr_21464 = [null,null,null,null,null,null,null,null];
(statearr_21464[(0)] = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto__);

(statearr_21464[(1)] = (1));

return statearr_21464;
});
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto____1 = (function (state_21461){
while(true){
var ret_value__16795__auto__ = (function (){try{while(true){
var result__16796__auto__ = switch__16793__auto__.call(null,state_21461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16796__auto__;
}
break;
}
}catch (e21465){if((e21465 instanceof Object)){
var ex__16797__auto__ = e21465;
var statearr_21466_21468 = state_21461;
(statearr_21466_21468[(5)] = ex__16797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21469 = state_21461;
state_21461 = G__21469;
continue;
} else {
return ret_value__16795__auto__;
}
break;
}
});
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto__ = function(state_21461){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto____1.call(this,state_21461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto____0;
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto____1;
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16794__auto__;
})()
})();
var state__16962__auto__ = (function (){var statearr_21467 = f__16961__auto__.call(null);
(statearr_21467[(6)] = c__16960__auto__);

return statearr_21467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16962__auto__);
}));

return c__16960__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
