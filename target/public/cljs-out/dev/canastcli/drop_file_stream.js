// Compiled by ClojureScript 1.10.773 {}
goog.provide('canastcli.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
canastcli.drop_file_stream.exists_file_named = (function canastcli$drop_file_stream$exists_file_named(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_26777){
var state_val_26778 = (state_26777[(1)]);
if((state_val_26778 === (1))){
var inst_26760 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_26761 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_26762 = ["Authorization"];
var inst_26763 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_26764 = cljs.core.PersistentHashMap.fromArrays(inst_26762,inst_26763);
var inst_26765 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_26766 = [inst_26760];
var inst_26767 = cljs.core.PersistentHashMap.fromArrays(inst_26765,inst_26766);
var inst_26768 = [false,inst_26764,inst_26767];
var inst_26769 = cljs.core.PersistentHashMap.fromArrays(inst_26761,inst_26768);
var inst_26770 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/get_metadata",inst_26769);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26777__$1,(2),inst_26770);
} else {
if((state_val_26778 === (2))){
var inst_26772 = (state_26777[(2)]);
var inst_26773 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26772);
var inst_26774 = cljs.core._EQ_.call(null,inst_26773,(200));
var inst_26775 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_26774);
var state_26777__$1 = state_26777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26777__$1,inst_26775);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____0 = (function (){
var statearr_26779 = [null,null,null,null,null,null,null];
(statearr_26779[(0)] = canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__);

(statearr_26779[(1)] = (1));

return statearr_26779;
});
var canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____1 = (function (state_26777){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_26777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e26780){if((e26780 instanceof Object)){
var ex__16941__auto__ = e26780;
var statearr_26781_26783 = state_26777;
(statearr_26781_26783[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26784 = state_26777;
state_26777 = G__26784;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__ = function(state_26777){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____1.call(this,state_26777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$exists_file_named_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_26782 = f__17033__auto__.call(null);
(statearr_26782[(6)] = c__17032__auto__);

return statearr_26782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.delete_file_named = (function canastcli$drop_file_stream$delete_file_named(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_26799){
var state_val_26800 = (state_26799[(1)]);
if((state_val_26800 === (1))){
var inst_26785 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_26786 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_26787 = ["Authorization"];
var inst_26788 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"];
var inst_26789 = cljs.core.PersistentHashMap.fromArrays(inst_26787,inst_26788);
var inst_26790 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_26791 = [inst_26785];
var inst_26792 = cljs.core.PersistentHashMap.fromArrays(inst_26790,inst_26791);
var inst_26793 = [false,inst_26789,inst_26792];
var inst_26794 = cljs.core.PersistentHashMap.fromArrays(inst_26786,inst_26793);
var inst_26795 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete",inst_26794);
var state_26799__$1 = state_26799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26799__$1,(2),inst_26795);
} else {
if((state_val_26800 === (2))){
var inst_26797 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26799__$1,inst_26797);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____0 = (function (){
var statearr_26801 = [null,null,null,null,null,null,null];
(statearr_26801[(0)] = canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__);

(statearr_26801[(1)] = (1));

return statearr_26801;
});
var canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____1 = (function (state_26799){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_26799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e26802){if((e26802 instanceof Object)){
var ex__16941__auto__ = e26802;
var statearr_26803_26805 = state_26799;
(statearr_26803_26805[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26806 = state_26799;
state_26799 = G__26806;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__ = function(state_26799){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____1.call(this,state_26799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$delete_file_named_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_26804 = f__17033__auto__.call(null);
(statearr_26804[(6)] = c__17032__auto__);

return statearr_26804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.get_contents_of = (function canastcli$drop_file_stream$get_contents_of(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_26820){
var state_val_26821 = (state_26820[(1)]);
if((state_val_26821 === (1))){
var inst_26807 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_26808 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_26809 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26810 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_26807,"text/plain; charset=utf-8"];
var inst_26811 = cljs.core.PersistentHashMap.fromArrays(inst_26809,inst_26810);
var inst_26812 = [false,inst_26811];
var inst_26813 = cljs.core.PersistentHashMap.fromArrays(inst_26808,inst_26812);
var inst_26814 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_26813);
var state_26820__$1 = state_26820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26820__$1,(2),inst_26814);
} else {
if((state_val_26821 === (2))){
var inst_26816 = (state_26820[(2)]);
var inst_26817 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26816);
var inst_26818 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_26817);
var state_26820__$1 = state_26820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26820__$1,inst_26818);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____0 = (function (){
var statearr_26822 = [null,null,null,null,null,null,null];
(statearr_26822[(0)] = canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__);

(statearr_26822[(1)] = (1));

return statearr_26822;
});
var canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____1 = (function (state_26820){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_26820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e26823){if((e26823 instanceof Object)){
var ex__16941__auto__ = e26823;
var statearr_26824_26826 = state_26820;
(statearr_26824_26826[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26827 = state_26820;
state_26820 = G__26827;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__ = function(state_26820){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____1.call(this,state_26820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$get_contents_of_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_26825 = f__17033__auto__.call(null);
(statearr_26825[(6)] = c__17032__auto__);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.lies_edn = (function canastcli$drop_file_stream$lies_edn(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_26842){
var state_val_26843 = (state_26842[(1)]);
if((state_val_26843 === (1))){
var inst_26828 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_26829 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_26830 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26831 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_26828,"text/plain; charset=utf-8"];
var inst_26832 = cljs.core.PersistentHashMap.fromArrays(inst_26830,inst_26831);
var inst_26833 = [false,inst_26832];
var inst_26834 = cljs.core.PersistentHashMap.fromArrays(inst_26829,inst_26833);
var inst_26835 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_26834);
var state_26842__$1 = state_26842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26842__$1,(2),inst_26835);
} else {
if((state_val_26843 === (2))){
var inst_26837 = (state_26842[(2)]);
var inst_26838 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26837);
var inst_26839 = cljs.reader.read_string.call(null,inst_26838);
var inst_26840 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_26839);
var state_26842__$1 = state_26842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26842__$1,inst_26840);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____0 = (function (){
var statearr_26844 = [null,null,null,null,null,null,null];
(statearr_26844[(0)] = canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__);

(statearr_26844[(1)] = (1));

return statearr_26844;
});
var canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____1 = (function (state_26842){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_26842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e26845){if((e26845 instanceof Object)){
var ex__16941__auto__ = e26845;
var statearr_26846_26848 = state_26842;
(statearr_26846_26848[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26849 = state_26842;
state_26842 = G__26849;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__ = function(state_26842){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____1.call(this,state_26842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$lies_edn_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_26847 = f__17033__auto__.call(null);
(statearr_26847[(6)] = c__17032__auto__);

return statearr_26847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.lies_welt = (function canastcli$drop_file_stream$lies_welt(f_name,w){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_26864){
var state_val_26865 = (state_26864[(1)]);
if((state_val_26865 === (1))){
var inst_26850 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_26851 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_26852 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26853 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_26850,"text/plain; charset=utf-8"];
var inst_26854 = cljs.core.PersistentHashMap.fromArrays(inst_26852,inst_26853);
var inst_26855 = [false,inst_26854];
var inst_26856 = cljs.core.PersistentHashMap.fromArrays(inst_26851,inst_26855);
var inst_26857 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_26856);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26864__$1,(2),inst_26857);
} else {
if((state_val_26865 === (2))){
var inst_26859 = (state_26864[(2)]);
var inst_26860 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26859);
var inst_26861 = cljs.reader.read_string.call(null,inst_26860);
var inst_26862 = cljs.core.reset_BANG_.call(null,w,inst_26861);
var state_26864__$1 = state_26864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26864__$1,inst_26862);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null];
(statearr_26866[(0)] = canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____1 = (function (state_26864){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_26864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__16941__auto__ = e26867;
var statearr_26868_26870 = state_26864;
(statearr_26868_26870[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26871 = state_26864;
state_26864 = G__26871;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__ = function(state_26864){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____1.call(this,state_26864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$lies_welt_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_26869 = f__17033__auto__.call(null);
(statearr_26869[(6)] = c__17032__auto__);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.write_text = (function canastcli$drop_file_stream$write_text(text,f_name){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (1))){
var state_26900__$1 = state_26900;
var statearr_26902_26914 = state_26900__$1;
(statearr_26902_26914[(2)] = null);

(statearr_26902_26914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (2))){
var inst_26873 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"",",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_26874 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_26875 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26876 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_26873,"application/octet-stream"];
var inst_26877 = cljs.core.PersistentHashMap.fromArrays(inst_26875,inst_26876);
var inst_26878 = [false,inst_26877,text];
var inst_26879 = cljs.core.PersistentHashMap.fromArrays(inst_26874,inst_26878);
var inst_26880 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_26879);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(4),inst_26880);
} else {
if((state_val_26901 === (3))){
var inst_26898 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26900__$1,inst_26898);
} else {
if((state_val_26901 === (4))){
var inst_26882 = (state_26900[(7)]);
var inst_26882__$1 = (state_26900[(2)]);
var inst_26883 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26882__$1);
var inst_26884 = cljs.core._EQ_.call(null,inst_26883,(429));
var state_26900__$1 = (function (){var statearr_26903 = state_26900;
(statearr_26903[(7)] = inst_26882__$1);

return statearr_26903;
})();
if(inst_26884){
var statearr_26904_26915 = state_26900__$1;
(statearr_26904_26915[(1)] = (5));

} else {
var statearr_26905_26916 = state_26900__$1;
(statearr_26905_26916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (5))){
var inst_26882 = (state_26900[(7)]);
var inst_26886 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26882);
var inst_26887 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_26886);
var inst_26888 = new cljs.core.Keyword(null,"retry_after","retry_after",1236499010).cljs$core$IFn$_invoke$arity$1(inst_26887);
var inst_26889 = (inst_26888 * (1000));
var inst_26890 = cljs.core.async.timeout.call(null,inst_26889);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(8),inst_26890);
} else {
if((state_val_26901 === (6))){
var state_26900__$1 = state_26900;
var statearr_26906_26917 = state_26900__$1;
(statearr_26906_26917[(2)] = null);

(statearr_26906_26917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (7))){
var inst_26896 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26907_26918 = state_26900__$1;
(statearr_26907_26918[(2)] = inst_26896);

(statearr_26907_26918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (8))){
var inst_26892 = (state_26900[(2)]);
var state_26900__$1 = (function (){var statearr_26908 = state_26900;
(statearr_26908[(8)] = inst_26892);

return statearr_26908;
})();
var statearr_26909_26919 = state_26900__$1;
(statearr_26909_26919[(2)] = null);

(statearr_26909_26919[(1)] = (2));


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
var statearr_26910 = [null,null,null,null,null,null,null,null,null];
(statearr_26910[(0)] = canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__);

(statearr_26910[(1)] = (1));

return statearr_26910;
});
var canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____1 = (function (state_26900){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_26900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e26911){if((e26911 instanceof Object)){
var ex__16941__auto__ = e26911;
var statearr_26912_26920 = state_26900;
(statearr_26912_26920[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26921 = state_26900;
state_26900 = G__26921;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$write_text_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$write_text_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_26913 = f__17033__auto__.call(null);
(statearr_26913[(6)] = c__17032__auto__);

return statearr_26913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});
canastcli.drop_file_stream.log_neues_spiel = (function canastcli$drop_file_stream$log_neues_spiel(f_name,w,ziel){
var c__17032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17033__auto__ = (function (){var switch__16937__auto__ = (function (state_26940){
var state_val_26941 = (state_26940[(1)]);
if((state_val_26941 === (1))){
var inst_26922 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_26923 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_26924 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_26925 = ["Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp",inst_26922,"text/plain; charset=utf-8"];
var inst_26926 = cljs.core.PersistentHashMap.fromArrays(inst_26924,inst_26925);
var inst_26927 = [false,inst_26926];
var inst_26928 = cljs.core.PersistentHashMap.fromArrays(inst_26923,inst_26927);
var inst_26929 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_26928);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26940__$1,(2),inst_26929);
} else {
if((state_val_26941 === (2))){
var inst_26931 = (state_26940[(2)]);
var inst_26932 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26931);
var inst_26933 = (new Date());
var inst_26934 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26932),"Neues Spiel ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26933),"\n"].join('');
var inst_26935 = cljs.core.swap_BANG_.call(null,w,cljs.core.assoc,ziel,inst_26934);
var inst_26936 = cljs.core.deref.call(null,w);
var inst_26937 = ziel.call(null,inst_26936);
var inst_26938 = canastcli.drop_file_stream.write_text.call(null,inst_26937,"logs.txt");
var state_26940__$1 = (function (){var statearr_26942 = state_26940;
(statearr_26942[(7)] = inst_26935);

return statearr_26942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26940__$1,inst_26938);
} else {
return null;
}
}
});
return (function() {
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__ = null;
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____0 = (function (){
var statearr_26943 = [null,null,null,null,null,null,null,null];
(statearr_26943[(0)] = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__);

(statearr_26943[(1)] = (1));

return statearr_26943;
});
var canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____1 = (function (state_26940){
while(true){
var ret_value__16939__auto__ = (function (){try{while(true){
var result__16940__auto__ = switch__16937__auto__.call(null,state_26940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16940__auto__;
}
break;
}
}catch (e26944){if((e26944 instanceof Object)){
var ex__16941__auto__ = e26944;
var statearr_26945_26947 = state_26940;
(statearr_26945_26947[(5)] = ex__16941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26948 = state_26940;
state_26940 = G__26948;
continue;
} else {
return ret_value__16939__auto__;
}
break;
}
});
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__ = function(state_26940){
switch(arguments.length){
case 0:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____0.call(this);
case 1:
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____1.call(this,state_26940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$0 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____0;
canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__.cljs$core$IFn$_invoke$arity$1 = canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto____1;
return canastcli$drop_file_stream$log_neues_spiel_$_state_machine__16938__auto__;
})()
})();
var state__17034__auto__ = (function (){var statearr_26946 = f__17033__auto__.call(null);
(statearr_26946[(6)] = c__17032__auto__);

return statearr_26946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17034__auto__);
}));

return c__17032__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
