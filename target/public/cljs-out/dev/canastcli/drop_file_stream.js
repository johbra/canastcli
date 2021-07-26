// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcli.drop_file_stream.exists_file_named = (function canastcli$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__10007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10008__auto__ = (function (){var switch__9984__auto__ = (function (state_10102){
var state_val_10103 = (state_10102[(1)]);
if((state_val_10103 === (1))){
var inst_10085 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_10086 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_10087 = ["Authorization"];
var inst_10088 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_10089 = cljs.core.PersistentHashMap.fromArrays(inst_10087,inst_10088);
var inst_10090 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_10091 = [inst_10085];
var inst_10092 = cljs.core.PersistentHashMap.fromArrays(inst_10090,inst_10091);
var inst_10093 = [false,inst_10089,inst_10092];
var inst_10094 = cljs.core.PersistentHashMap.fromArrays(inst_10086,inst_10093);
var inst_10095 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_10094);
var state_10102__$1 = state_10102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10102__$1,(2),inst_10095);
} else {
if((state_val_10103 === (2))){
var inst_10097 = (state_10102[(2)]);
var inst_10098 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_10097);
var inst_10099 = cljs.core._EQ_.call(null,inst_10098,(200));
var inst_10100 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_10099);
var state_10102__$1 = state_10102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10102__$1,inst_10100);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto__ = null;
var canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto____0 = (function (){
var statearr_10104 = [null,null,null,null,null,null,null];
(statearr_10104[(0)] = canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto__);

(statearr_10104[(1)] = (1));

return statearr_10104;
});
var canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto____1 = (function (state_10102){
while(true){
var ret_value__9986__auto__ = (function (){try{while(true){
var result__9987__auto__ = switch__9984__auto__.call(null,state_10102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9987__auto__;
}
break;
}
}catch (e10105){if((e10105 instanceof Object)){
var ex__9988__auto__ = e10105;
var statearr_10106_10108 = state_10102;
(statearr_10106_10108[(5)] = ex__9988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10109 = state_10102;
state_10102 = G__10109;
continue;
} else {
return ret_value__9986__auto__;
}
break;
}
});
canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto__ = function(state_10102){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto____1.call(this,state_10102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto____0;
canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto____1;
return canastcli$drop_file_stream$exists_file_named_$_state_machine__9985__auto__;
})()
})();
var state__10009__auto__ = (function (){var statearr_10107 = f__10008__auto__.call(null);
(statearr_10107[(6)] = c__10007__auto__);

return statearr_10107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10009__auto__);
}));

return c__10007__auto__;
});
canastcli.drop_file_stream.delete_file_named = (function canastcli$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__10007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10008__auto__ = (function (){var switch__9984__auto__ = (function (state_10124){
var state_val_10125 = (state_10124[(1)]);
if((state_val_10125 === (1))){
var inst_10110 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_10111 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"params","params",710516235)];
var inst_10112 = ["Authorization"];
var inst_10113 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_10114 = cljs.core.PersistentHashMap.fromArrays(inst_10112,inst_10113);
var inst_10115 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_10116 = [inst_10110];
var inst_10117 = cljs.core.PersistentHashMap.fromArrays(inst_10115,inst_10116);
var inst_10118 = [false,inst_10114,new cljs.core.Keyword(null,"json","json",1279968570),inst_10117];
var inst_10119 = cljs.core.PersistentHashMap.fromArrays(inst_10111,inst_10118);
var inst_10120 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete",inst_10119);
var state_10124__$1 = state_10124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10124__$1,(2),inst_10120);
} else {
if((state_val_10125 === (2))){
var inst_10122 = (state_10124[(2)]);
var state_10124__$1 = state_10124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10124__$1,inst_10122);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto__ = null;
var canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto____0 = (function (){
var statearr_10126 = [null,null,null,null,null,null,null];
(statearr_10126[(0)] = canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto__);

(statearr_10126[(1)] = (1));

return statearr_10126;
});
var canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto____1 = (function (state_10124){
while(true){
var ret_value__9986__auto__ = (function (){try{while(true){
var result__9987__auto__ = switch__9984__auto__.call(null,state_10124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9987__auto__;
}
break;
}
}catch (e10127){if((e10127 instanceof Object)){
var ex__9988__auto__ = e10127;
var statearr_10128_10130 = state_10124;
(statearr_10128_10130[(5)] = ex__9988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10131 = state_10124;
state_10124 = G__10131;
continue;
} else {
return ret_value__9986__auto__;
}
break;
}
});
canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto__ = function(state_10124){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto____1.call(this,state_10124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto____0;
canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto____1;
return canastcli$drop_file_stream$delete_file_named_$_state_machine__9985__auto__;
})()
})();
var state__10009__auto__ = (function (){var statearr_10129 = f__10008__auto__.call(null);
(statearr_10129[(6)] = c__10007__auto__);

return statearr_10129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10009__auto__);
}));

return c__10007__auto__;
});
canastcli.drop_file_stream.get_contents_of = (function canastcli$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__10007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10008__auto__ = (function (){var switch__9984__auto__ = (function (state_10145){
var state_val_10146 = (state_10145[(1)]);
if((state_val_10146 === (1))){
var inst_10132 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_10133 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_10134 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_10135 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_10132,"text/plain; charset=utf-8"];
var inst_10136 = cljs.core.PersistentHashMap.fromArrays(inst_10134,inst_10135);
var inst_10137 = [false,inst_10136];
var inst_10138 = cljs.core.PersistentHashMap.fromArrays(inst_10133,inst_10137);
var inst_10139 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_10138);
var state_10145__$1 = state_10145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10145__$1,(2),inst_10139);
} else {
if((state_val_10146 === (2))){
var inst_10141 = (state_10145[(2)]);
var inst_10142 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_10141);
var inst_10143 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_10142);
var state_10145__$1 = state_10145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10145__$1,inst_10143);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto__ = null;
var canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto____0 = (function (){
var statearr_10147 = [null,null,null,null,null,null,null];
(statearr_10147[(0)] = canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto__);

(statearr_10147[(1)] = (1));

return statearr_10147;
});
var canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto____1 = (function (state_10145){
while(true){
var ret_value__9986__auto__ = (function (){try{while(true){
var result__9987__auto__ = switch__9984__auto__.call(null,state_10145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9987__auto__;
}
break;
}
}catch (e10148){if((e10148 instanceof Object)){
var ex__9988__auto__ = e10148;
var statearr_10149_10151 = state_10145;
(statearr_10149_10151[(5)] = ex__9988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10152 = state_10145;
state_10145 = G__10152;
continue;
} else {
return ret_value__9986__auto__;
}
break;
}
});
canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto__ = function(state_10145){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto____1.call(this,state_10145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto____0;
canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto____1;
return canastcli$drop_file_stream$get_contents_of_$_state_machine__9985__auto__;
})()
})();
var state__10009__auto__ = (function (){var statearr_10150 = f__10008__auto__.call(null);
(statearr_10150[(6)] = c__10007__auto__);

return statearr_10150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10009__auto__);
}));

return c__10007__auto__;
});
canastcli.drop_file_stream.lies_edn = (function canastcli$drop_file_stream$lies_edn(f_name,w,ziel){
var c__10007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10008__auto__ = (function (){var switch__9984__auto__ = (function (state_10167){
var state_val_10168 = (state_10167[(1)]);
if((state_val_10168 === (1))){
var inst_10153 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_10154 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_10155 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_10156 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_10153,"text/plain; charset=utf-8"];
var inst_10157 = cljs.core.PersistentHashMap.fromArrays(inst_10155,inst_10156);
var inst_10158 = [false,inst_10157];
var inst_10159 = cljs.core.PersistentHashMap.fromArrays(inst_10154,inst_10158);
var inst_10160 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_10159);
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10167__$1,(2),inst_10160);
} else {
if((state_val_10168 === (2))){
var inst_10162 = (state_10167[(2)]);
var inst_10163 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_10162);
var inst_10164 = cljs.reader.read_string.call(null,inst_10163);
var inst_10165 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_10164);
var state_10167__$1 = state_10167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10167__$1,inst_10165);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto__ = null;
var canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto____0 = (function (){
var statearr_10169 = [null,null,null,null,null,null,null];
(statearr_10169[(0)] = canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto__);

(statearr_10169[(1)] = (1));

return statearr_10169;
});
var canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto____1 = (function (state_10167){
while(true){
var ret_value__9986__auto__ = (function (){try{while(true){
var result__9987__auto__ = switch__9984__auto__.call(null,state_10167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9987__auto__;
}
break;
}
}catch (e10170){if((e10170 instanceof Object)){
var ex__9988__auto__ = e10170;
var statearr_10171_10173 = state_10167;
(statearr_10171_10173[(5)] = ex__9988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10174 = state_10167;
state_10167 = G__10174;
continue;
} else {
return ret_value__9986__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto__ = function(state_10167){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto____1.call(this,state_10167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto____0;
canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto____1;
return canastcli$drop_file_stream$lies_edn_$_state_machine__9985__auto__;
})()
})();
var state__10009__auto__ = (function (){var statearr_10172 = f__10008__auto__.call(null);
(statearr_10172[(6)] = c__10007__auto__);

return statearr_10172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10009__auto__);
}));

return c__10007__auto__;
});
canastcli.drop_file_stream.lies_welt = (function canastcli$drop_file_stream$lies_welt(f_name,w){
var c__10007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10008__auto__ = (function (){var switch__9984__auto__ = (function (state_10189){
var state_val_10190 = (state_10189[(1)]);
if((state_val_10190 === (1))){
var inst_10175 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_10176 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_10177 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_10178 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_10175,"text/plain; charset=utf-8"];
var inst_10179 = cljs.core.PersistentHashMap.fromArrays(inst_10177,inst_10178);
var inst_10180 = [false,inst_10179];
var inst_10181 = cljs.core.PersistentHashMap.fromArrays(inst_10176,inst_10180);
var inst_10182 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_10181);
var state_10189__$1 = state_10189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10189__$1,(2),inst_10182);
} else {
if((state_val_10190 === (2))){
var inst_10184 = (state_10189[(2)]);
var inst_10185 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_10184);
var inst_10186 = cljs.reader.read_string.call(null,inst_10185);
var inst_10187 = cljs.core.reset_BANG_.call(null,w,inst_10186);
var state_10189__$1 = state_10189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10189__$1,inst_10187);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto__ = null;
var canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto____0 = (function (){
var statearr_10191 = [null,null,null,null,null,null,null];
(statearr_10191[(0)] = canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto__);

(statearr_10191[(1)] = (1));

return statearr_10191;
});
var canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto____1 = (function (state_10189){
while(true){
var ret_value__9986__auto__ = (function (){try{while(true){
var result__9987__auto__ = switch__9984__auto__.call(null,state_10189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9987__auto__;
}
break;
}
}catch (e10192){if((e10192 instanceof Object)){
var ex__9988__auto__ = e10192;
var statearr_10193_10195 = state_10189;
(statearr_10193_10195[(5)] = ex__9988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10196 = state_10189;
state_10189 = G__10196;
continue;
} else {
return ret_value__9986__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto__ = function(state_10189){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto____1.call(this,state_10189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto____0;
canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto____1;
return canastcli$drop_file_stream$lies_welt_$_state_machine__9985__auto__;
})()
})();
var state__10009__auto__ = (function (){var statearr_10194 = f__10008__auto__.call(null);
(statearr_10194[(6)] = c__10007__auto__);

return statearr_10194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10009__auto__);
}));

return c__10007__auto__;
});
canastcli.drop_file_stream.write_text = (function canastcli$drop_file_stream$write_text(text,f_name){
var c__10007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10008__auto__ = (function (){var switch__9984__auto__ = (function (state_10227){
var state_val_10228 = (state_10227[(1)]);
if((state_val_10228 === (1))){
var state_10227__$1 = state_10227;
var statearr_10229_10241 = state_10227__$1;
(statearr_10229_10241[(2)] = null);

(statearr_10229_10241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10228 === (2))){
var inst_10198 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_10199 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_10200 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_10201 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_10198,"application/octet-stream"];
var inst_10202 = cljs.core.PersistentHashMap.fromArrays(inst_10200,inst_10201);
var inst_10203 = [false,inst_10202,text];
var inst_10204 = cljs.core.PersistentHashMap.fromArrays(inst_10199,inst_10203);
var inst_10205 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_10204);
var state_10227__$1 = state_10227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10227__$1,(4),inst_10205);
} else {
if((state_val_10228 === (3))){
var inst_10225 = (state_10227[(2)]);
var state_10227__$1 = state_10227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10227__$1,inst_10225);
} else {
if((state_val_10228 === (4))){
var inst_10207 = (state_10227[(7)]);
var inst_10207__$1 = (state_10227[(2)]);
var inst_10208 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_10207__$1);
var inst_10209 = console.log(inst_10208);
var inst_10210 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_10207__$1);
var inst_10211 = cljs.core._EQ_.call(null,inst_10210,(429));
var state_10227__$1 = (function (){var statearr_10230 = state_10227;
(statearr_10230[(7)] = inst_10207__$1);

(statearr_10230[(8)] = inst_10209);

return statearr_10230;
})();
if(inst_10211){
var statearr_10231_10242 = state_10227__$1;
(statearr_10231_10242[(1)] = (5));

} else {
var statearr_10232_10243 = state_10227__$1;
(statearr_10232_10243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10228 === (5))){
var inst_10207 = (state_10227[(7)]);
var inst_10213 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_10207);
var inst_10214 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_10213);
var inst_10215 = new cljs.core.Keyword(null,"retry_after","retry_after",1236499010).cljs$core$IFn$_invoke$arity$1(inst_10214);
var inst_10216 = (inst_10215 * (1000));
var inst_10217 = cljs.core.async.timeout.call(null,inst_10216);
var state_10227__$1 = state_10227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10227__$1,(8),inst_10217);
} else {
if((state_val_10228 === (6))){
var state_10227__$1 = state_10227;
var statearr_10233_10244 = state_10227__$1;
(statearr_10233_10244[(2)] = null);

(statearr_10233_10244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10228 === (7))){
var inst_10223 = (state_10227[(2)]);
var state_10227__$1 = state_10227;
var statearr_10234_10245 = state_10227__$1;
(statearr_10234_10245[(2)] = inst_10223);

(statearr_10234_10245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10228 === (8))){
var inst_10219 = (state_10227[(2)]);
var state_10227__$1 = (function (){var statearr_10235 = state_10227;
(statearr_10235[(9)] = inst_10219);

return statearr_10235;
})();
var statearr_10236_10246 = state_10227__$1;
(statearr_10236_10246[(2)] = null);

(statearr_10236_10246[(1)] = (2));


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
var canastcli$drop_file_stream$write_text_$_state_machine__9985__auto__ = null;
var canastcli$drop_file_stream$write_text_$_state_machine__9985__auto____0 = (function (){
var statearr_10237 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10237[(0)] = canastcli$drop_file_stream$write_text_$_state_machine__9985__auto__);

(statearr_10237[(1)] = (1));

return statearr_10237;
});
var canastcli$drop_file_stream$write_text_$_state_machine__9985__auto____1 = (function (state_10227){
while(true){
var ret_value__9986__auto__ = (function (){try{while(true){
var result__9987__auto__ = switch__9984__auto__.call(null,state_10227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9987__auto__;
}
break;
}
}catch (e10238){if((e10238 instanceof Object)){
var ex__9988__auto__ = e10238;
var statearr_10239_10247 = state_10227;
(statearr_10239_10247[(5)] = ex__9988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10248 = state_10227;
state_10227 = G__10248;
continue;
} else {
return ret_value__9986__auto__;
}
break;
}
});
canastcli$drop_file_stream$write_text_$_state_machine__9985__auto__ = function(state_10227){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$write_text_$_state_machine__9985__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$write_text_$_state_machine__9985__auto____1.call(this,state_10227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$write_text_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$write_text_$_state_machine__9985__auto____0;
canastcli$drop_file_stream$write_text_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$write_text_$_state_machine__9985__auto____1;
return canastcli$drop_file_stream$write_text_$_state_machine__9985__auto__;
})()
})();
var state__10009__auto__ = (function (){var statearr_10240 = f__10008__auto__.call(null);
(statearr_10240[(6)] = c__10007__auto__);

return statearr_10240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10009__auto__);
}));

return c__10007__auto__;
});
canastcli.drop_file_stream.log_neues_spiel = (function canastcli$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__10007__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__10008__auto__ = (function (){var switch__9984__auto__ = (function (state_10267){
var state_val_10268 = (state_10267[(1)]);
if((state_val_10268 === (1))){
var inst_10249 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_10250 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_10251 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_10252 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_10249,"text/plain; charset=utf-8"];
var inst_10253 = cljs.core.PersistentHashMap.fromArrays(inst_10251,inst_10252);
var inst_10254 = [false,inst_10253];
var inst_10255 = cljs.core.PersistentHashMap.fromArrays(inst_10250,inst_10254);
var inst_10256 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_10255);
var state_10267__$1 = state_10267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10267__$1,(2),inst_10256);
} else {
if((state_val_10268 === (2))){
var inst_10258 = (state_10267[(2)]);
var inst_10259 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_10258);
var inst_10260 = (new Date());
var inst_10261 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10259),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10260),"\n"].join('');
var inst_10262 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_10261);
var inst_10263 = cljs.core.deref.call(null,w);
var inst_10264 = ziel.call(null,inst_10263);
var inst_10265 = canastcli.drop_file_stream.write_text.call(null,inst_10264,"logs.txt");
var state_10267__$1 = (function (){var statearr_10269 = state_10267;
(statearr_10269[(7)] = inst_10262);

return statearr_10269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10267__$1,inst_10265);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto__ = null;
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto____0 = (function (){
var statearr_10270 = [null,null,null,null,null,null,null,null];
(statearr_10270[(0)] = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto__);

(statearr_10270[(1)] = (1));

return statearr_10270;
});
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto____1 = (function (state_10267){
while(true){
var ret_value__9986__auto__ = (function (){try{while(true){
var result__9987__auto__ = switch__9984__auto__.call(null,state_10267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9987__auto__;
}
break;
}
}catch (e10271){if((e10271 instanceof Object)){
var ex__9988__auto__ = e10271;
var statearr_10272_10274 = state_10267;
(statearr_10272_10274[(5)] = ex__9988__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10275 = state_10267;
state_10267 = G__10275;
continue;
} else {
return ret_value__9986__auto__;
}
break;
}
});
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto__ = function(state_10267){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto____1.call(this,state_10267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto____0;
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto____1;
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__9985__auto__;
})()
})();
var state__10009__auto__ = (function (){var statearr_10273 = f__10008__auto__.call(null);
(statearr_10273[(6)] = c__10007__auto__);

return statearr_10273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10009__auto__);
}));

return c__10007__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
