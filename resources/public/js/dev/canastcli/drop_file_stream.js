// Compiled by ClojureScript 1.10.339 {}
goog.provide('canastcli.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcli.drop_file_stream.exists_file_named = (function canastcli$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_21085){
var state_val_21086 = (state_21085[(1)]);
if((state_val_21086 === (1))){
var inst_21068 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_21069 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_21070 = ["Authorization"];
var inst_21071 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_21072 = cljs.core.PersistentHashMap.fromArrays(inst_21070,inst_21071);
var inst_21073 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_21074 = [inst_21068];
var inst_21075 = cljs.core.PersistentHashMap.fromArrays(inst_21073,inst_21074);
var inst_21076 = [false,inst_21072,inst_21075];
var inst_21077 = cljs.core.PersistentHashMap.fromArrays(inst_21069,inst_21076);
var inst_21078 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_21077);
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21085__$1,(2),inst_21078);
} else {
if((state_val_21086 === (2))){
var inst_21080 = (state_21085[(2)]);
var inst_21081 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_21080);
var inst_21082 = cljs.core._EQ_.call(null,inst_21081,(200));
var inst_21083 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21082);
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21085__$1,inst_21083);
} else {
return null;
}
}
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto__ = null;
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto____0 = (function (){
var statearr_21087 = [null,null,null,null,null,null,null];
(statearr_21087[(0)] = canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto__);

(statearr_21087[(1)] = (1));

return statearr_21087;
});
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto____1 = (function (state_21085){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_21085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e21088){if((e21088 instanceof Object)){
var ex__16601__auto__ = e21088;
var statearr_21089_21091 = state_21085;
(statearr_21089_21091[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21092 = state_21085;
state_21085 = G__21092;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto__ = function(state_21085){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto____1.call(this,state_21085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto____0;
canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto____1;
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_21090 = f__16757__auto__.call(null);
(statearr_21090[(6)] = c__16756__auto__);

return statearr_21090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
canastcli.drop_file_stream.delete_file_named = (function canastcli$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_21108){
var state_val_21109 = (state_21108[(1)]);
if((state_val_21109 === (1))){
var inst_21093 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_21094 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_21095 = ["Authorization"];
var inst_21096 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_21097 = cljs.core.PersistentHashMap.fromArrays(inst_21095,inst_21096);
var inst_21098 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_21099 = [inst_21093];
var inst_21100 = cljs.core.PersistentHashMap.fromArrays(inst_21098,inst_21099);
var inst_21101 = [false,inst_21097,inst_21100];
var inst_21102 = cljs.core.PersistentHashMap.fromArrays(inst_21094,inst_21101);
var inst_21103 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_21102);
var state_21108__$1 = state_21108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21108__$1,(2),inst_21103);
} else {
if((state_val_21109 === (2))){
var inst_21105 = (state_21108[(2)]);
var inst_21106 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,false);
var state_21108__$1 = (function (){var statearr_21110 = state_21108;
(statearr_21110[(7)] = inst_21105);

return statearr_21110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21108__$1,inst_21106);
} else {
return null;
}
}
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto__ = null;
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto____0 = (function (){
var statearr_21111 = [null,null,null,null,null,null,null,null];
(statearr_21111[(0)] = canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto__);

(statearr_21111[(1)] = (1));

return statearr_21111;
});
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto____1 = (function (state_21108){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_21108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e21112){if((e21112 instanceof Object)){
var ex__16601__auto__ = e21112;
var statearr_21113_21115 = state_21108;
(statearr_21113_21115[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21116 = state_21108;
state_21108 = G__21116;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto__ = function(state_21108){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto____1.call(this,state_21108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto____0;
canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto____1;
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_21114 = f__16757__auto__.call(null);
(statearr_21114[(6)] = c__16756__auto__);

return statearr_21114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
canastcli.drop_file_stream.get_contents_of = (function canastcli$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_21130){
var state_val_21131 = (state_21130[(1)]);
if((state_val_21131 === (1))){
var inst_21117 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21118 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21119 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21120 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21117,"text/plain; charset=utf-8"];
var inst_21121 = cljs.core.PersistentHashMap.fromArrays(inst_21119,inst_21120);
var inst_21122 = [false,inst_21121];
var inst_21123 = cljs.core.PersistentHashMap.fromArrays(inst_21118,inst_21122);
var inst_21124 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21123);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(2),inst_21124);
} else {
if((state_val_21131 === (2))){
var inst_21126 = (state_21130[(2)]);
var inst_21127 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21126);
var inst_21128 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21127);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21130__$1,inst_21128);
} else {
return null;
}
}
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto__ = null;
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto____0 = (function (){
var statearr_21132 = [null,null,null,null,null,null,null];
(statearr_21132[(0)] = canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto__);

(statearr_21132[(1)] = (1));

return statearr_21132;
});
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto____1 = (function (state_21130){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_21130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e21133){if((e21133 instanceof Object)){
var ex__16601__auto__ = e21133;
var statearr_21134_21136 = state_21130;
(statearr_21134_21136[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21137 = state_21130;
state_21130 = G__21137;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto____0;
canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto____1;
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_21135 = f__16757__auto__.call(null);
(statearr_21135[(6)] = c__16756__auto__);

return statearr_21135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
canastcli.drop_file_stream.lies_edn = (function canastcli$drop_file_stream$lies_edn(f_name,w,ziel){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_21152){
var state_val_21153 = (state_21152[(1)]);
if((state_val_21153 === (1))){
var inst_21138 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21139 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21140 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21141 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21138,"text/plain; charset=utf-8"];
var inst_21142 = cljs.core.PersistentHashMap.fromArrays(inst_21140,inst_21141);
var inst_21143 = [false,inst_21142];
var inst_21144 = cljs.core.PersistentHashMap.fromArrays(inst_21139,inst_21143);
var inst_21145 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21144);
var state_21152__$1 = state_21152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21152__$1,(2),inst_21145);
} else {
if((state_val_21153 === (2))){
var inst_21147 = (state_21152[(2)]);
var inst_21148 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21147);
var inst_21149 = cljs.reader.read_string.call(null,inst_21148);
var inst_21150 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21149);
var state_21152__$1 = state_21152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21152__$1,inst_21150);
} else {
return null;
}
}
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto__ = null;
var canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto____0 = (function (){
var statearr_21154 = [null,null,null,null,null,null,null];
(statearr_21154[(0)] = canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto__);

(statearr_21154[(1)] = (1));

return statearr_21154;
});
var canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto____1 = (function (state_21152){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_21152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e21155){if((e21155 instanceof Object)){
var ex__16601__auto__ = e21155;
var statearr_21156_21158 = state_21152;
(statearr_21156_21158[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21159 = state_21152;
state_21152 = G__21159;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto__ = function(state_21152){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto____1.call(this,state_21152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto____0;
canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto____1;
return canastcli$drop_file_stream$lies_edn_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_21157 = f__16757__auto__.call(null);
(statearr_21157[(6)] = c__16756__auto__);

return statearr_21157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
canastcli.drop_file_stream.lies_welt = (function canastcli$drop_file_stream$lies_welt(f_name,w){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_21174){
var state_val_21175 = (state_21174[(1)]);
if((state_val_21175 === (1))){
var inst_21160 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21161 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21162 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21163 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21160,"text/plain; charset=utf-8"];
var inst_21164 = cljs.core.PersistentHashMap.fromArrays(inst_21162,inst_21163);
var inst_21165 = [false,inst_21164];
var inst_21166 = cljs.core.PersistentHashMap.fromArrays(inst_21161,inst_21165);
var inst_21167 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21166);
var state_21174__$1 = state_21174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21174__$1,(2),inst_21167);
} else {
if((state_val_21175 === (2))){
var inst_21169 = (state_21174[(2)]);
var inst_21170 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21169);
var inst_21171 = cljs.reader.read_string.call(null,inst_21170);
var inst_21172 = cljs.core.reset_BANG_.call(null,w,inst_21171);
var state_21174__$1 = state_21174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21174__$1,inst_21172);
} else {
return null;
}
}
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto__ = null;
var canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto____0 = (function (){
var statearr_21176 = [null,null,null,null,null,null,null];
(statearr_21176[(0)] = canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto__);

(statearr_21176[(1)] = (1));

return statearr_21176;
});
var canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto____1 = (function (state_21174){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_21174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e21177){if((e21177 instanceof Object)){
var ex__16601__auto__ = e21177;
var statearr_21178_21180 = state_21174;
(statearr_21178_21180[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21181 = state_21174;
state_21174 = G__21181;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto__ = function(state_21174){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto____1.call(this,state_21174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto____0;
canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto____1;
return canastcli$drop_file_stream$lies_welt_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_21179 = f__16757__auto__.call(null);
(statearr_21179[(6)] = c__16756__auto__);

return statearr_21179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
canastcli.drop_file_stream.write_text = (function canastcli$drop_file_stream$write_text(text,f_name){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_21193){
var state_val_21194 = (state_21193[(1)]);
if((state_val_21194 === (1))){
var inst_21182 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_21183 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_21184 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21185 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21182,"application/octet-stream"];
var inst_21186 = cljs.core.PersistentHashMap.fromArrays(inst_21184,inst_21185);
var inst_21187 = [false,inst_21186,text];
var inst_21188 = cljs.core.PersistentHashMap.fromArrays(inst_21183,inst_21187);
var inst_21189 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_21188);
var state_21193__$1 = state_21193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21193__$1,(2),inst_21189);
} else {
if((state_val_21194 === (2))){
var inst_21191 = (state_21193[(2)]);
var state_21193__$1 = state_21193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21193__$1,inst_21191);
} else {
return null;
}
}
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var canastcli$drop_file_stream$write_text_$_state_machine__16598__auto__ = null;
var canastcli$drop_file_stream$write_text_$_state_machine__16598__auto____0 = (function (){
var statearr_21195 = [null,null,null,null,null,null,null];
(statearr_21195[(0)] = canastcli$drop_file_stream$write_text_$_state_machine__16598__auto__);

(statearr_21195[(1)] = (1));

return statearr_21195;
});
var canastcli$drop_file_stream$write_text_$_state_machine__16598__auto____1 = (function (state_21193){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_21193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e21196){if((e21196 instanceof Object)){
var ex__16601__auto__ = e21196;
var statearr_21197_21199 = state_21193;
(statearr_21197_21199[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21200 = state_21193;
state_21193 = G__21200;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
canastcli$drop_file_stream$write_text_$_state_machine__16598__auto__ = function(state_21193){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$write_text_$_state_machine__16598__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$write_text_$_state_machine__16598__auto____1.call(this,state_21193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$write_text_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$write_text_$_state_machine__16598__auto____0;
canastcli$drop_file_stream$write_text_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$write_text_$_state_machine__16598__auto____1;
return canastcli$drop_file_stream$write_text_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_21198 = f__16757__auto__.call(null);
(statearr_21198[(6)] = c__16756__auto__);

return statearr_21198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});
canastcli.drop_file_stream.log_neues_spiel = (function canastcli$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__16756__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16756__auto__){
return (function (){
var f__16757__auto__ = (function (){var switch__16597__auto__ = ((function (c__16756__auto__){
return (function (state_21219){
var state_val_21220 = (state_21219[(1)]);
if((state_val_21220 === (1))){
var inst_21201 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_21202 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_21203 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_21204 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_21201,"text/plain; charset=utf-8"];
var inst_21205 = cljs.core.PersistentHashMap.fromArrays(inst_21203,inst_21204);
var inst_21206 = [false,inst_21205];
var inst_21207 = cljs.core.PersistentHashMap.fromArrays(inst_21202,inst_21206);
var inst_21208 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_21207);
var state_21219__$1 = state_21219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21219__$1,(2),inst_21208);
} else {
if((state_val_21220 === (2))){
var inst_21210 = (state_21219[(2)]);
var inst_21211 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21210);
var inst_21212 = (new Date());
var inst_21213 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21211),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21212),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
var inst_21214 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_21213);
var inst_21215 = cljs.core.deref.call(null,w);
var inst_21216 = ziel.call(null,inst_21215);
var inst_21217 = canastcli.drop_file_stream.write_text.call(null,inst_21216,"logs.txt");
var state_21219__$1 = (function (){var statearr_21221 = state_21219;
(statearr_21221[(7)] = inst_21214);

return statearr_21221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21219__$1,inst_21217);
} else {
return null;
}
}
});})(c__16756__auto__))
;
return ((function (switch__16597__auto__,c__16756__auto__){
return (function() {
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto__ = null;
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto____0 = (function (){
var statearr_21222 = [null,null,null,null,null,null,null,null];
(statearr_21222[(0)] = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto__);

(statearr_21222[(1)] = (1));

return statearr_21222;
});
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto____1 = (function (state_21219){
while(true){
var ret_value__16599__auto__ = (function (){try{while(true){
var result__16600__auto__ = switch__16597__auto__.call(null,state_21219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16600__auto__;
}
break;
}
}catch (e21223){if((e21223 instanceof Object)){
var ex__16601__auto__ = e21223;
var statearr_21224_21226 = state_21219;
(statearr_21224_21226[(5)] = ex__16601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21227 = state_21219;
state_21219 = G__21227;
continue;
} else {
return ret_value__16599__auto__;
}
break;
}
});
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto__ = function(state_21219){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto____1.call(this,state_21219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto____0;
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto____1;
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16598__auto__;
})()
;})(switch__16597__auto__,c__16756__auto__))
})();
var state__16758__auto__ = (function (){var statearr_21225 = f__16757__auto__.call(null);
(statearr_21225[(6)] = c__16756__auto__);

return statearr_21225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16758__auto__);
});})(c__16756__auto__))
);

return c__16756__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
