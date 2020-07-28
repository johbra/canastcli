// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.log');
goog.require('goog.object');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = goog.log.getLogger("Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_14965 = (new goog.debug.Console());
var G__14953_14966 = c_14965.getFormatter();
goog.object.set(G__14953_14966,"showAbsoluteTime",false);

goog.object.set(G__14953_14966,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_14965);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,stylesheet){
var temp__5735__auto__ = stylesheet.href;
if(cljs.core.truth_(temp__5735__auto__)){
var href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__14949_SHARP_,p2__14950_SHARP_){
if(cljs.core._EQ_.call(null,p1__14949_SHARP_,p2__14950_SHARP_)){
return p1__14949_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426),stylesheet,new cljs.core.Keyword(null,"link-href","link-href",-250644450),href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.main.css_reload.truncate_url.call(null,href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.root_stylesheet = (function figwheel$main$css_reload$root_stylesheet(stylesheet){
while(true){
var temp__5733__auto__ = stylesheet.parentStyleSheet;
if(cljs.core.truth_(temp__5733__auto__)){
var parent_stylesheet = temp__5733__auto__;
var G__14967 = parent_stylesheet;
stylesheet = G__14967;
continue;
} else {
return stylesheet;
}
break;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__14954){
var map__14955 = p__14954;
var map__14955__$1 = (((((!((map__14955 == null))))?(((((map__14955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14955):map__14955);
var match_length = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__14955__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__14951_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__14951_SHARP_);
}),goog.cssom.getAllCssStyleSheets())));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return figwheel.main.css_reload.root_stylesheet.call(null,new cljs.core.Keyword(null,"stylesheet","stylesheet",-1792612426).cljs$core$IFn$_invoke$arity$1(res)).ownerNode;
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url));

return clone;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
goog.events.listenOnce(klone,"load",(function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}));

if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
return parent.appendChild(klone);
} else {
return parent.insertBefore(klone,orig_link.nextSibling);
}
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__14952_SHARP_){
return p1__14952_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5733__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),(function (){
return fin.call(null,file);
}));
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__14957 = (new Event("figwheel.after-css-load",document.body));
goog.object.add(G__14957,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__14957;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__14958_14968 = cljs.core.seq.call(null,files);
var chunk__14959_14969 = null;
var count__14960_14970 = (0);
var i__14961_14971 = (0);
while(true){
if((i__14961_14971 < count__14960_14970)){
var file_14972 = cljs.core._nth.call(null,chunk__14959_14969,i__14961_14971);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_14972);


var G__14973 = seq__14958_14968;
var G__14974 = chunk__14959_14969;
var G__14975 = count__14960_14970;
var G__14976 = (i__14961_14971 + (1));
seq__14958_14968 = G__14973;
chunk__14959_14969 = G__14974;
count__14960_14970 = G__14975;
i__14961_14971 = G__14976;
continue;
} else {
var temp__5735__auto___14977 = cljs.core.seq.call(null,seq__14958_14968);
if(temp__5735__auto___14977){
var seq__14958_14978__$1 = temp__5735__auto___14977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14958_14978__$1)){
var c__4556__auto___14979 = cljs.core.chunk_first.call(null,seq__14958_14978__$1);
var G__14980 = cljs.core.chunk_rest.call(null,seq__14958_14978__$1);
var G__14981 = c__4556__auto___14979;
var G__14982 = cljs.core.count.call(null,c__4556__auto___14979);
var G__14983 = (0);
seq__14958_14968 = G__14980;
chunk__14959_14969 = G__14981;
count__14960_14970 = G__14982;
i__14961_14971 = G__14983;
continue;
} else {
var file_14984 = cljs.core.first.call(null,seq__14958_14978__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_14984);


var G__14985 = cljs.core.next.call(null,seq__14958_14978__$1);
var G__14986 = null;
var G__14987 = (0);
var G__14988 = (0);
seq__14958_14968 = G__14985;
chunk__14959_14969 = G__14986;
count__14960_14970 = G__14987;
i__14961_14971 = G__14988;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
goog.log.info(figwheel.main.css_reload.logger,["loaded ",cljs.core.pr_str.call(null,loaded_files)].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5735__auto___14989 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5735__auto___14989)){
var not_loaded_14990 = temp__5735__auto___14989;
goog.log.warning(figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.pr_str.call(null,not_loaded_14990)].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__14962,files){
var map__14963 = p__14962;
var map__14963__$1 = (((((!((map__14963 == null))))?(((((map__14963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14963):map__14963);
var on_cssload = cljs.core.get.call(null,map__14963__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if((!((goog.global.document == null)))){
var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5735__auto__)){
var files_SINGLEQUOTE_ = temp__5735__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
