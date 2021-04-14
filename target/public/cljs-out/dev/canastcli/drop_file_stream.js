// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcli.drop_file_stream.exists_file_named = (function canastcli$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__16460__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16461__auto__ = (function (){var switch__16437__auto__ = (function (state_20567){
var state_val_20568 = (state_20567[(1)]);
if((state_val_20568 === (1))){
var inst_20550 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_20551 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_20552 = ["Authorization"];
var inst_20553 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_20554 = cljs.core.PersistentHashMap.fromArrays(inst_20552,inst_20553);
var inst_20555 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_20556 = [inst_20550];
var inst_20557 = cljs.core.PersistentHashMap.fromArrays(inst_20555,inst_20556);
var inst_20558 = [false,inst_20554,inst_20557];
var inst_20559 = cljs.core.PersistentHashMap.fromArrays(inst_20551,inst_20558);
var inst_20560 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_20559);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20567__$1,(2),inst_20560);
} else {
if((state_val_20568 === (2))){
var inst_20562 = (state_20567[(2)]);
var inst_20563 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_20562);
var inst_20564 = cljs.core._EQ_.call(null,inst_20563,(200));
var inst_20565 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_20564);
var state_20567__$1 = state_20567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20567__$1,inst_20565);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto__ = null;
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto____0 = (function (){
var statearr_20569 = [null,null,null,null,null,null,null];
(statearr_20569[(0)] = canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto__);

(statearr_20569[(1)] = (1));

return statearr_20569;
});
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto____1 = (function (state_20567){
while(true){
var ret_value__16439__auto__ = (function (){try{while(true){
var result__16440__auto__ = switch__16437__auto__.call(null,state_20567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16440__auto__;
}
break;
}
}catch (e20570){if((e20570 instanceof Object)){
var ex__16441__auto__ = e20570;
var statearr_20571_20573 = state_20567;
(statearr_20571_20573[(5)] = ex__16441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20574 = state_20567;
state_20567 = G__20574;
continue;
} else {
return ret_value__16439__auto__;
}
break;
}
});
canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto__ = function(state_20567){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto____1.call(this,state_20567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto____0;
canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto____1;
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16438__auto__;
})()
})();
var state__16462__auto__ = (function (){var statearr_20572 = f__16461__auto__.call(null);
(statearr_20572[(6)] = c__16460__auto__);

return statearr_20572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16462__auto__);
}));

return c__16460__auto__;
});
canastcli.drop_file_stream.delete_file_named = (function canastcli$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__16460__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16461__auto__ = (function (){var switch__16437__auto__ = (function (state_20589){
var state_val_20590 = (state_20589[(1)]);
if((state_val_20590 === (1))){
var inst_20575 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_20576 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_20577 = ["Authorization"];
var inst_20578 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_20579 = cljs.core.PersistentHashMap.fromArrays(inst_20577,inst_20578);
var inst_20580 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_20581 = [inst_20575];
var inst_20582 = cljs.core.PersistentHashMap.fromArrays(inst_20580,inst_20581);
var inst_20583 = [false,inst_20579,inst_20582];
var inst_20584 = cljs.core.PersistentHashMap.fromArrays(inst_20576,inst_20583);
var inst_20585 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete",inst_20584);
var state_20589__$1 = state_20589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20589__$1,(2),inst_20585);
} else {
if((state_val_20590 === (2))){
var inst_20587 = (state_20589[(2)]);
var state_20589__$1 = state_20589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20589__$1,inst_20587);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto__ = null;
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto____0 = (function (){
var statearr_20591 = [null,null,null,null,null,null,null];
(statearr_20591[(0)] = canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto__);

(statearr_20591[(1)] = (1));

return statearr_20591;
});
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto____1 = (function (state_20589){
while(true){
var ret_value__16439__auto__ = (function (){try{while(true){
var result__16440__auto__ = switch__16437__auto__.call(null,state_20589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16440__auto__;
}
break;
}
}catch (e20592){if((e20592 instanceof Object)){
var ex__16441__auto__ = e20592;
var statearr_20593_20595 = state_20589;
(statearr_20593_20595[(5)] = ex__16441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20596 = state_20589;
state_20589 = G__20596;
continue;
} else {
return ret_value__16439__auto__;
}
break;
}
});
canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto__ = function(state_20589){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto____1.call(this,state_20589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto____0;
canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto____1;
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16438__auto__;
})()
})();
var state__16462__auto__ = (function (){var statearr_20594 = f__16461__auto__.call(null);
(statearr_20594[(6)] = c__16460__auto__);

return statearr_20594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16462__auto__);
}));

return c__16460__auto__;
});
canastcli.drop_file_stream.get_contents_of = (function canastcli$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__16460__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16461__auto__ = (function (){var switch__16437__auto__ = (function (state_20610){
var state_val_20611 = (state_20610[(1)]);
if((state_val_20611 === (1))){
var inst_20597 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_20598 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_20599 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_20600 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_20597,"text/plain; charset=utf-8"];
var inst_20601 = cljs.core.PersistentHashMap.fromArrays(inst_20599,inst_20600);
var inst_20602 = [false,inst_20601];
var inst_20603 = cljs.core.PersistentHashMap.fromArrays(inst_20598,inst_20602);
var inst_20604 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_20603);
var state_20610__$1 = state_20610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20610__$1,(2),inst_20604);
} else {
if((state_val_20611 === (2))){
var inst_20606 = (state_20610[(2)]);
var inst_20607 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20606);
var inst_20608 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_20607);
var state_20610__$1 = state_20610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20610__$1,inst_20608);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto__ = null;
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto____0 = (function (){
var statearr_20612 = [null,null,null,null,null,null,null];
(statearr_20612[(0)] = canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto__);

(statearr_20612[(1)] = (1));

return statearr_20612;
});
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto____1 = (function (state_20610){
while(true){
var ret_value__16439__auto__ = (function (){try{while(true){
var result__16440__auto__ = switch__16437__auto__.call(null,state_20610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16440__auto__;
}
break;
}
}catch (e20613){if((e20613 instanceof Object)){
var ex__16441__auto__ = e20613;
var statearr_20614_20616 = state_20610;
(statearr_20614_20616[(5)] = ex__16441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20617 = state_20610;
state_20610 = G__20617;
continue;
} else {
return ret_value__16439__auto__;
}
break;
}
});
canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto__ = function(state_20610){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto____1.call(this,state_20610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto____0;
canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto____1;
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16438__auto__;
})()
})();
var state__16462__auto__ = (function (){var statearr_20615 = f__16461__auto__.call(null);
(statearr_20615[(6)] = c__16460__auto__);

return statearr_20615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16462__auto__);
}));

return c__16460__auto__;
});
canastcli.drop_file_stream.lies_edn = (function canastcli$drop_file_stream$lies_edn(f_name,w,ziel){
var c__16460__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16461__auto__ = (function (){var switch__16437__auto__ = (function (state_20632){
var state_val_20633 = (state_20632[(1)]);
if((state_val_20633 === (1))){
var inst_20618 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_20619 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_20620 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_20621 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_20618,"text/plain; charset=utf-8"];
var inst_20622 = cljs.core.PersistentHashMap.fromArrays(inst_20620,inst_20621);
var inst_20623 = [false,inst_20622];
var inst_20624 = cljs.core.PersistentHashMap.fromArrays(inst_20619,inst_20623);
var inst_20625 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_20624);
var state_20632__$1 = state_20632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20632__$1,(2),inst_20625);
} else {
if((state_val_20633 === (2))){
var inst_20627 = (state_20632[(2)]);
var inst_20628 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20627);
var inst_20629 = cljs.reader.read_string.call(null,inst_20628);
var inst_20630 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_20629);
var state_20632__$1 = state_20632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20632__$1,inst_20630);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto__ = null;
var canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto____0 = (function (){
var statearr_20634 = [null,null,null,null,null,null,null];
(statearr_20634[(0)] = canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto__);

(statearr_20634[(1)] = (1));

return statearr_20634;
});
var canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto____1 = (function (state_20632){
while(true){
var ret_value__16439__auto__ = (function (){try{while(true){
var result__16440__auto__ = switch__16437__auto__.call(null,state_20632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16440__auto__;
}
break;
}
}catch (e20635){if((e20635 instanceof Object)){
var ex__16441__auto__ = e20635;
var statearr_20636_20638 = state_20632;
(statearr_20636_20638[(5)] = ex__16441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20639 = state_20632;
state_20632 = G__20639;
continue;
} else {
return ret_value__16439__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto__ = function(state_20632){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto____1.call(this,state_20632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto____0;
canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto____1;
return canastcli$drop_file_stream$lies_edn_$_state_machine__16438__auto__;
})()
})();
var state__16462__auto__ = (function (){var statearr_20637 = f__16461__auto__.call(null);
(statearr_20637[(6)] = c__16460__auto__);

return statearr_20637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16462__auto__);
}));

return c__16460__auto__;
});
canastcli.drop_file_stream.lies_welt = (function canastcli$drop_file_stream$lies_welt(f_name,w){
var c__16460__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16461__auto__ = (function (){var switch__16437__auto__ = (function (state_20654){
var state_val_20655 = (state_20654[(1)]);
if((state_val_20655 === (1))){
var inst_20640 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_20641 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_20642 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_20643 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_20640,"text/plain; charset=utf-8"];
var inst_20644 = cljs.core.PersistentHashMap.fromArrays(inst_20642,inst_20643);
var inst_20645 = [false,inst_20644];
var inst_20646 = cljs.core.PersistentHashMap.fromArrays(inst_20641,inst_20645);
var inst_20647 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_20646);
var state_20654__$1 = state_20654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20654__$1,(2),inst_20647);
} else {
if((state_val_20655 === (2))){
var inst_20649 = (state_20654[(2)]);
var inst_20650 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20649);
var inst_20651 = cljs.reader.read_string.call(null,inst_20650);
var inst_20652 = cljs.core.reset_BANG_.call(null,w,inst_20651);
var state_20654__$1 = state_20654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20654__$1,inst_20652);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto__ = null;
var canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto____0 = (function (){
var statearr_20656 = [null,null,null,null,null,null,null];
(statearr_20656[(0)] = canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto__);

(statearr_20656[(1)] = (1));

return statearr_20656;
});
var canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto____1 = (function (state_20654){
while(true){
var ret_value__16439__auto__ = (function (){try{while(true){
var result__16440__auto__ = switch__16437__auto__.call(null,state_20654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16440__auto__;
}
break;
}
}catch (e20657){if((e20657 instanceof Object)){
var ex__16441__auto__ = e20657;
var statearr_20658_20660 = state_20654;
(statearr_20658_20660[(5)] = ex__16441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20661 = state_20654;
state_20654 = G__20661;
continue;
} else {
return ret_value__16439__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto__ = function(state_20654){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto____1.call(this,state_20654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto____0;
canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto____1;
return canastcli$drop_file_stream$lies_welt_$_state_machine__16438__auto__;
})()
})();
var state__16462__auto__ = (function (){var statearr_20659 = f__16461__auto__.call(null);
(statearr_20659[(6)] = c__16460__auto__);

return statearr_20659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16462__auto__);
}));

return c__16460__auto__;
});
canastcli.drop_file_stream.write_text = (function canastcli$drop_file_stream$write_text(text,f_name){
var c__16460__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16461__auto__ = (function (){var switch__16437__auto__ = (function (state_20701){
var state_val_20702 = (state_20701[(1)]);
if((state_val_20702 === (7))){
var inst_20697 = (state_20701[(2)]);
var state_20701__$1 = state_20701;
var statearr_20703_20718 = state_20701__$1;
(statearr_20703_20718[(2)] = inst_20697);

(statearr_20703_20718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20702 === (1))){
var inst_20662 = (state_20701[(7)]);
var inst_20662__$1 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_20663 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_20664 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_20665 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_20662__$1,"application/octet-stream"];
var inst_20666 = cljs.core.PersistentHashMap.fromArrays(inst_20664,inst_20665);
var inst_20667 = [false,inst_20666,text];
var inst_20668 = cljs.core.PersistentHashMap.fromArrays(inst_20663,inst_20667);
var inst_20669 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_20668);
var state_20701__$1 = (function (){var statearr_20704 = state_20701;
(statearr_20704[(7)] = inst_20662__$1);

return statearr_20704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20701__$1,(2),inst_20669);
} else {
if((state_val_20702 === (4))){
var inst_20699 = (state_20701[(2)]);
var state_20701__$1 = state_20701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20701__$1,inst_20699);
} else {
if((state_val_20702 === (6))){
var state_20701__$1 = state_20701;
var statearr_20705_20719 = state_20701__$1;
(statearr_20705_20719[(2)] = null);

(statearr_20705_20719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20702 === (3))){
var inst_20673 = (state_20701[(8)]);
var inst_20675 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_20673);
var inst_20676 = cljs.core._EQ_.call(null,inst_20675,(429));
var state_20701__$1 = state_20701;
if(inst_20676){
var statearr_20707_20720 = state_20701__$1;
(statearr_20707_20720[(1)] = (5));

} else {
var statearr_20708_20721 = state_20701__$1;
(statearr_20708_20721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20702 === (2))){
var inst_20662 = (state_20701[(7)]);
var inst_20671 = (state_20701[(2)]);
var inst_20672 = inst_20662;
var inst_20673 = inst_20671;
var state_20701__$1 = (function (){var statearr_20709 = state_20701;
(statearr_20709[(8)] = inst_20673);

(statearr_20709[(9)] = inst_20672);

return statearr_20709;
})();
var statearr_20710_20722 = state_20701__$1;
(statearr_20710_20722[(2)] = null);

(statearr_20710_20722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20702 === (9))){
var inst_20672 = (state_20701[(9)]);
var inst_20693 = (state_20701[(2)]);
var tmp20706 = inst_20672;
var inst_20672__$1 = tmp20706;
var inst_20673 = inst_20693;
var state_20701__$1 = (function (){var statearr_20711 = state_20701;
(statearr_20711[(8)] = inst_20673);

(statearr_20711[(9)] = inst_20672__$1);

return statearr_20711;
})();
var statearr_20712_20723 = state_20701__$1;
(statearr_20712_20723[(2)] = null);

(statearr_20712_20723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20702 === (5))){
var inst_20673 = (state_20701[(8)]);
var inst_20678 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20673);
var inst_20679 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_20678);
var inst_20680 = new cljs.core.Keyword(null,"retry_after","retry_after",1236499010).cljs$core$IFn$_invoke$arity$1(inst_20679);
var inst_20681 = (inst_20680 * (1000));
var inst_20682 = cljs.core.async.timeout.call(null,inst_20681);
var state_20701__$1 = state_20701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20701__$1,(8),inst_20682);
} else {
if((state_val_20702 === (8))){
var inst_20672 = (state_20701[(9)]);
var inst_20684 = (state_20701[(2)]);
var inst_20685 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_20686 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_20687 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_20672,"application/octet-stream"];
var inst_20688 = cljs.core.PersistentHashMap.fromArrays(inst_20686,inst_20687);
var inst_20689 = [false,inst_20688,text];
var inst_20690 = cljs.core.PersistentHashMap.fromArrays(inst_20685,inst_20689);
var inst_20691 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_20690);
var state_20701__$1 = (function (){var statearr_20713 = state_20701;
(statearr_20713[(10)] = inst_20684);

return statearr_20713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20701__$1,(9),inst_20691);
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
}
});
return (function() {
var canastcli$drop_file_stream$write_text_$_state_machine__16438__auto__ = null;
var canastcli$drop_file_stream$write_text_$_state_machine__16438__auto____0 = (function (){
var statearr_20714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20714[(0)] = canastcli$drop_file_stream$write_text_$_state_machine__16438__auto__);

(statearr_20714[(1)] = (1));

return statearr_20714;
});
var canastcli$drop_file_stream$write_text_$_state_machine__16438__auto____1 = (function (state_20701){
while(true){
var ret_value__16439__auto__ = (function (){try{while(true){
var result__16440__auto__ = switch__16437__auto__.call(null,state_20701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16440__auto__;
}
break;
}
}catch (e20715){if((e20715 instanceof Object)){
var ex__16441__auto__ = e20715;
var statearr_20716_20724 = state_20701;
(statearr_20716_20724[(5)] = ex__16441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20725 = state_20701;
state_20701 = G__20725;
continue;
} else {
return ret_value__16439__auto__;
}
break;
}
});
canastcli$drop_file_stream$write_text_$_state_machine__16438__auto__ = function(state_20701){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$write_text_$_state_machine__16438__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$write_text_$_state_machine__16438__auto____1.call(this,state_20701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$write_text_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$write_text_$_state_machine__16438__auto____0;
canastcli$drop_file_stream$write_text_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$write_text_$_state_machine__16438__auto____1;
return canastcli$drop_file_stream$write_text_$_state_machine__16438__auto__;
})()
})();
var state__16462__auto__ = (function (){var statearr_20717 = f__16461__auto__.call(null);
(statearr_20717[(6)] = c__16460__auto__);

return statearr_20717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16462__auto__);
}));

return c__16460__auto__;
});
canastcli.drop_file_stream.log_neues_spiel = (function canastcli$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__16460__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16461__auto__ = (function (){var switch__16437__auto__ = (function (state_20744){
var state_val_20745 = (state_20744[(1)]);
if((state_val_20745 === (1))){
var inst_20726 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_20727 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_20728 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_20729 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_20726,"text/plain; charset=utf-8"];
var inst_20730 = cljs.core.PersistentHashMap.fromArrays(inst_20728,inst_20729);
var inst_20731 = [false,inst_20730];
var inst_20732 = cljs.core.PersistentHashMap.fromArrays(inst_20727,inst_20731);
var inst_20733 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_20732);
var state_20744__$1 = state_20744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20744__$1,(2),inst_20733);
} else {
if((state_val_20745 === (2))){
var inst_20735 = (state_20744[(2)]);
var inst_20736 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20735);
var inst_20737 = (new Date());
var inst_20738 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20736),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20737),"\n"].join('');
var inst_20739 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_20738);
var inst_20740 = cljs.core.deref.call(null,w);
var inst_20741 = ziel.call(null,inst_20740);
var inst_20742 = canastcli.drop_file_stream.write_text.call(null,inst_20741,"logs.txt");
var state_20744__$1 = (function (){var statearr_20746 = state_20744;
(statearr_20746[(7)] = inst_20739);

return statearr_20746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20744__$1,inst_20742);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto__ = null;
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto____0 = (function (){
var statearr_20747 = [null,null,null,null,null,null,null,null];
(statearr_20747[(0)] = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto__);

(statearr_20747[(1)] = (1));

return statearr_20747;
});
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto____1 = (function (state_20744){
while(true){
var ret_value__16439__auto__ = (function (){try{while(true){
var result__16440__auto__ = switch__16437__auto__.call(null,state_20744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16440__auto__;
}
break;
}
}catch (e20748){if((e20748 instanceof Object)){
var ex__16441__auto__ = e20748;
var statearr_20749_20751 = state_20744;
(statearr_20749_20751[(5)] = ex__16441__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20752 = state_20744;
state_20744 = G__20752;
continue;
} else {
return ret_value__16439__auto__;
}
break;
}
});
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto__ = function(state_20744){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto____1.call(this,state_20744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto____0;
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto____1;
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16438__auto__;
})()
})();
var state__16462__auto__ = (function (){var statearr_20750 = f__16461__auto__.call(null);
(statearr_20750[(6)] = c__16460__auto__);

return statearr_20750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16462__auto__);
}));

return c__16460__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
