// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcli.drop_file_stream.exists_file_named = (function canastcli$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__10858__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10859__auto__ = (function (){var switch__10763__auto__ = (function (state_13089){
var state_val_13090 = (state_13089[(1)]);
if((state_val_13090 === (1))){
var inst_13072 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_13073 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_13074 = ["Authorization"];
var inst_13075 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_13076 = cljs.core.PersistentHashMap.fromArrays(inst_13074,inst_13075);
var inst_13077 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_13078 = [inst_13072];
var inst_13079 = cljs.core.PersistentHashMap.fromArrays(inst_13077,inst_13078);
var inst_13080 = [false,inst_13076,inst_13079];
var inst_13081 = cljs.core.PersistentHashMap.fromArrays(inst_13073,inst_13080);
var inst_13082 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_13081);
var state_13089__$1 = state_13089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13089__$1,(2),inst_13082);
} else {
if((state_val_13090 === (2))){
var inst_13084 = (state_13089[(2)]);
var inst_13085 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_13084);
var inst_13086 = cljs.core._EQ_.call(null,inst_13085,(200));
var inst_13087 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_13086);
var state_13089__$1 = state_13089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13089__$1,inst_13087);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto__ = null;
var canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto____0 = (function (){
var statearr_13091 = [null,null,null,null,null,null,null];
(statearr_13091[(0)] = canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto__);

(statearr_13091[(1)] = (1));

return statearr_13091;
});
var canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto____1 = (function (state_13089){
while(true){
var ret_value__10765__auto__ = (function (){try{while(true){
var result__10766__auto__ = switch__10763__auto__.call(null,state_13089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10766__auto__;
}
break;
}
}catch (e13092){if((e13092 instanceof Object)){
var ex__10767__auto__ = e13092;
var statearr_13093_13095 = state_13089;
(statearr_13093_13095[(5)] = ex__10767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13096 = state_13089;
state_13089 = G__13096;
continue;
} else {
return ret_value__10765__auto__;
}
break;
}
});
canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto__ = function(state_13089){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto____1.call(this,state_13089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto____0;
canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto____1;
return canastcli$drop_file_stream$exists_file_named_$_state_machine__10764__auto__;
})()
})();
var state__10860__auto__ = (function (){var statearr_13094 = f__10859__auto__.call(null);
(statearr_13094[(6)] = c__10858__auto__);

return statearr_13094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10860__auto__);
}));

return c__10858__auto__;
});
canastcli.drop_file_stream.delete_file_named = (function canastcli$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__10858__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10859__auto__ = (function (){var switch__10763__auto__ = (function (state_13112){
var state_val_13113 = (state_13112[(1)]);
if((state_val_13113 === (1))){
var inst_13097 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_13098 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_13099 = ["Authorization"];
var inst_13100 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_13101 = cljs.core.PersistentHashMap.fromArrays(inst_13099,inst_13100);
var inst_13102 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_13103 = [inst_13097];
var inst_13104 = cljs.core.PersistentHashMap.fromArrays(inst_13102,inst_13103);
var inst_13105 = [false,inst_13101,inst_13104];
var inst_13106 = cljs.core.PersistentHashMap.fromArrays(inst_13098,inst_13105);
var inst_13107 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_13106);
var state_13112__$1 = state_13112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13112__$1,(2),inst_13107);
} else {
if((state_val_13113 === (2))){
var inst_13109 = (state_13112[(2)]);
var inst_13110 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_13112__$1 = (function (){var statearr_13114 = state_13112;
(statearr_13114[(7)] = inst_13109);

return statearr_13114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13112__$1,inst_13110);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto__ = null;
var canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto____0 = (function (){
var statearr_13115 = [null,null,null,null,null,null,null,null];
(statearr_13115[(0)] = canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto__);

(statearr_13115[(1)] = (1));

return statearr_13115;
});
var canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto____1 = (function (state_13112){
while(true){
var ret_value__10765__auto__ = (function (){try{while(true){
var result__10766__auto__ = switch__10763__auto__.call(null,state_13112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10766__auto__;
}
break;
}
}catch (e13116){if((e13116 instanceof Object)){
var ex__10767__auto__ = e13116;
var statearr_13117_13119 = state_13112;
(statearr_13117_13119[(5)] = ex__10767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13120 = state_13112;
state_13112 = G__13120;
continue;
} else {
return ret_value__10765__auto__;
}
break;
}
});
canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto__ = function(state_13112){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto____1.call(this,state_13112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto____0;
canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto____1;
return canastcli$drop_file_stream$delete_file_named_$_state_machine__10764__auto__;
})()
})();
var state__10860__auto__ = (function (){var statearr_13118 = f__10859__auto__.call(null);
(statearr_13118[(6)] = c__10858__auto__);

return statearr_13118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10860__auto__);
}));

return c__10858__auto__;
});
canastcli.drop_file_stream.get_contents_of = (function canastcli$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__10858__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10859__auto__ = (function (){var switch__10763__auto__ = (function (state_13134){
var state_val_13135 = (state_13134[(1)]);
if((state_val_13135 === (1))){
var inst_13121 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_13122 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_13123 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_13124 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_13121,"text/plain; charset=utf-8"];
var inst_13125 = cljs.core.PersistentHashMap.fromArrays(inst_13123,inst_13124);
var inst_13126 = [false,inst_13125];
var inst_13127 = cljs.core.PersistentHashMap.fromArrays(inst_13122,inst_13126);
var inst_13128 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_13127);
var state_13134__$1 = state_13134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13134__$1,(2),inst_13128);
} else {
if((state_val_13135 === (2))){
var inst_13130 = (state_13134[(2)]);
var inst_13131 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13130);
var inst_13132 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_13131);
var state_13134__$1 = state_13134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13134__$1,inst_13132);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto__ = null;
var canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto____0 = (function (){
var statearr_13136 = [null,null,null,null,null,null,null];
(statearr_13136[(0)] = canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto__);

(statearr_13136[(1)] = (1));

return statearr_13136;
});
var canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto____1 = (function (state_13134){
while(true){
var ret_value__10765__auto__ = (function (){try{while(true){
var result__10766__auto__ = switch__10763__auto__.call(null,state_13134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10766__auto__;
}
break;
}
}catch (e13137){if((e13137 instanceof Object)){
var ex__10767__auto__ = e13137;
var statearr_13138_13140 = state_13134;
(statearr_13138_13140[(5)] = ex__10767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13141 = state_13134;
state_13134 = G__13141;
continue;
} else {
return ret_value__10765__auto__;
}
break;
}
});
canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto__ = function(state_13134){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto____1.call(this,state_13134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto____0;
canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto____1;
return canastcli$drop_file_stream$get_contents_of_$_state_machine__10764__auto__;
})()
})();
var state__10860__auto__ = (function (){var statearr_13139 = f__10859__auto__.call(null);
(statearr_13139[(6)] = c__10858__auto__);

return statearr_13139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10860__auto__);
}));

return c__10858__auto__;
});
canastcli.drop_file_stream.lies_edn = (function canastcli$drop_file_stream$lies_edn(f_name,w,ziel){
var c__10858__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10859__auto__ = (function (){var switch__10763__auto__ = (function (state_13156){
var state_val_13157 = (state_13156[(1)]);
if((state_val_13157 === (1))){
var inst_13142 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_13143 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_13144 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_13145 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_13142,"text/plain; charset=utf-8"];
var inst_13146 = cljs.core.PersistentHashMap.fromArrays(inst_13144,inst_13145);
var inst_13147 = [false,inst_13146];
var inst_13148 = cljs.core.PersistentHashMap.fromArrays(inst_13143,inst_13147);
var inst_13149 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_13148);
var state_13156__$1 = state_13156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13156__$1,(2),inst_13149);
} else {
if((state_val_13157 === (2))){
var inst_13151 = (state_13156[(2)]);
var inst_13152 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13151);
var inst_13153 = cljs.reader.read_string.call(null,inst_13152);
var inst_13154 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_13153);
var state_13156__$1 = state_13156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13156__$1,inst_13154);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto__ = null;
var canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto____0 = (function (){
var statearr_13158 = [null,null,null,null,null,null,null];
(statearr_13158[(0)] = canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto__);

(statearr_13158[(1)] = (1));

return statearr_13158;
});
var canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto____1 = (function (state_13156){
while(true){
var ret_value__10765__auto__ = (function (){try{while(true){
var result__10766__auto__ = switch__10763__auto__.call(null,state_13156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10766__auto__;
}
break;
}
}catch (e13159){if((e13159 instanceof Object)){
var ex__10767__auto__ = e13159;
var statearr_13160_13162 = state_13156;
(statearr_13160_13162[(5)] = ex__10767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13163 = state_13156;
state_13156 = G__13163;
continue;
} else {
return ret_value__10765__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto__ = function(state_13156){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto____1.call(this,state_13156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto____0;
canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto____1;
return canastcli$drop_file_stream$lies_edn_$_state_machine__10764__auto__;
})()
})();
var state__10860__auto__ = (function (){var statearr_13161 = f__10859__auto__.call(null);
(statearr_13161[(6)] = c__10858__auto__);

return statearr_13161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10860__auto__);
}));

return c__10858__auto__;
});
canastcli.drop_file_stream.lies_welt = (function canastcli$drop_file_stream$lies_welt(f_name,w){
var c__10858__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10859__auto__ = (function (){var switch__10763__auto__ = (function (state_13178){
var state_val_13179 = (state_13178[(1)]);
if((state_val_13179 === (1))){
var inst_13164 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_13165 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_13166 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_13167 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_13164,"text/plain; charset=utf-8"];
var inst_13168 = cljs.core.PersistentHashMap.fromArrays(inst_13166,inst_13167);
var inst_13169 = [false,inst_13168];
var inst_13170 = cljs.core.PersistentHashMap.fromArrays(inst_13165,inst_13169);
var inst_13171 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_13170);
var state_13178__$1 = state_13178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13178__$1,(2),inst_13171);
} else {
if((state_val_13179 === (2))){
var inst_13173 = (state_13178[(2)]);
var inst_13174 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13173);
var inst_13175 = cljs.reader.read_string.call(null,inst_13174);
var inst_13176 = cljs.core.reset_BANG_.call(null,w,inst_13175);
var state_13178__$1 = state_13178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13178__$1,inst_13176);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto__ = null;
var canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto____0 = (function (){
var statearr_13180 = [null,null,null,null,null,null,null];
(statearr_13180[(0)] = canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto__);

(statearr_13180[(1)] = (1));

return statearr_13180;
});
var canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto____1 = (function (state_13178){
while(true){
var ret_value__10765__auto__ = (function (){try{while(true){
var result__10766__auto__ = switch__10763__auto__.call(null,state_13178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10766__auto__;
}
break;
}
}catch (e13181){if((e13181 instanceof Object)){
var ex__10767__auto__ = e13181;
var statearr_13182_13184 = state_13178;
(statearr_13182_13184[(5)] = ex__10767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13185 = state_13178;
state_13178 = G__13185;
continue;
} else {
return ret_value__10765__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto__ = function(state_13178){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto____1.call(this,state_13178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto____0;
canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto____1;
return canastcli$drop_file_stream$lies_welt_$_state_machine__10764__auto__;
})()
})();
var state__10860__auto__ = (function (){var statearr_13183 = f__10859__auto__.call(null);
(statearr_13183[(6)] = c__10858__auto__);

return statearr_13183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10860__auto__);
}));

return c__10858__auto__;
});
canastcli.drop_file_stream.write_text = (function canastcli$drop_file_stream$write_text(text,f_name){
var c__10858__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10859__auto__ = (function (){var switch__10763__auto__ = (function (state_13197){
var state_val_13198 = (state_13197[(1)]);
if((state_val_13198 === (1))){
var inst_13186 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_13187 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_13188 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_13189 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_13186,"application/octet-stream"];
var inst_13190 = cljs.core.PersistentHashMap.fromArrays(inst_13188,inst_13189);
var inst_13191 = [false,inst_13190,text];
var inst_13192 = cljs.core.PersistentHashMap.fromArrays(inst_13187,inst_13191);
var inst_13193 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_13192);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13197__$1,(2),inst_13193);
} else {
if((state_val_13198 === (2))){
var inst_13195 = (state_13197[(2)]);
var state_13197__$1 = state_13197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13197__$1,inst_13195);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$write_text_$_state_machine__10764__auto__ = null;
var canastcli$drop_file_stream$write_text_$_state_machine__10764__auto____0 = (function (){
var statearr_13199 = [null,null,null,null,null,null,null];
(statearr_13199[(0)] = canastcli$drop_file_stream$write_text_$_state_machine__10764__auto__);

(statearr_13199[(1)] = (1));

return statearr_13199;
});
var canastcli$drop_file_stream$write_text_$_state_machine__10764__auto____1 = (function (state_13197){
while(true){
var ret_value__10765__auto__ = (function (){try{while(true){
var result__10766__auto__ = switch__10763__auto__.call(null,state_13197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10766__auto__;
}
break;
}
}catch (e13200){if((e13200 instanceof Object)){
var ex__10767__auto__ = e13200;
var statearr_13201_13203 = state_13197;
(statearr_13201_13203[(5)] = ex__10767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13204 = state_13197;
state_13197 = G__13204;
continue;
} else {
return ret_value__10765__auto__;
}
break;
}
});
canastcli$drop_file_stream$write_text_$_state_machine__10764__auto__ = function(state_13197){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$write_text_$_state_machine__10764__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$write_text_$_state_machine__10764__auto____1.call(this,state_13197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$write_text_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$write_text_$_state_machine__10764__auto____0;
canastcli$drop_file_stream$write_text_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$write_text_$_state_machine__10764__auto____1;
return canastcli$drop_file_stream$write_text_$_state_machine__10764__auto__;
})()
})();
var state__10860__auto__ = (function (){var statearr_13202 = f__10859__auto__.call(null);
(statearr_13202[(6)] = c__10858__auto__);

return statearr_13202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10860__auto__);
}));

return c__10858__auto__;
});
canastcli.drop_file_stream.log_neues_spiel = (function canastcli$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__10858__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10859__auto__ = (function (){var switch__10763__auto__ = (function (state_13223){
var state_val_13224 = (state_13223[(1)]);
if((state_val_13224 === (1))){
var inst_13205 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_13206 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_13207 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_13208 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_13205,"text/plain; charset=utf-8"];
var inst_13209 = cljs.core.PersistentHashMap.fromArrays(inst_13207,inst_13208);
var inst_13210 = [false,inst_13209];
var inst_13211 = cljs.core.PersistentHashMap.fromArrays(inst_13206,inst_13210);
var inst_13212 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_13211);
var state_13223__$1 = state_13223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13223__$1,(2),inst_13212);
} else {
if((state_val_13224 === (2))){
var inst_13214 = (state_13223[(2)]);
var inst_13215 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13214);
var inst_13216 = (new Date());
var inst_13217 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13215),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_13216),"\n"].join('');
var inst_13218 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_13217);
var inst_13219 = cljs.core.deref.call(null,w);
var inst_13220 = ziel.call(null,inst_13219);
var inst_13221 = canastcli.drop_file_stream.write_text.call(null,inst_13220,"logs.txt");
var state_13223__$1 = (function (){var statearr_13225 = state_13223;
(statearr_13225[(7)] = inst_13218);

return statearr_13225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13223__$1,inst_13221);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto__ = null;
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto____0 = (function (){
var statearr_13226 = [null,null,null,null,null,null,null,null];
(statearr_13226[(0)] = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto__);

(statearr_13226[(1)] = (1));

return statearr_13226;
});
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto____1 = (function (state_13223){
while(true){
var ret_value__10765__auto__ = (function (){try{while(true){
var result__10766__auto__ = switch__10763__auto__.call(null,state_13223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10766__auto__;
}
break;
}
}catch (e13227){if((e13227 instanceof Object)){
var ex__10767__auto__ = e13227;
var statearr_13228_13230 = state_13223;
(statearr_13228_13230[(5)] = ex__10767__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13231 = state_13223;
state_13223 = G__13231;
continue;
} else {
return ret_value__10765__auto__;
}
break;
}
});
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto__ = function(state_13223){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto____1.call(this,state_13223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto____0;
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto____1;
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__10764__auto__;
})()
})();
var state__10860__auto__ = (function (){var statearr_13229 = f__10859__auto__.call(null);
(statearr_13229[(6)] = c__10858__auto__);

return statearr_13229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10860__auto__);
}));

return c__10858__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
