// Compiled by ClojureScript 0.0-2202
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13823,args){var map__13825 = p__13823;var map__13825__$1 = ((cljs.core.seq_QMARK_.call(null,map__13825))?cljs.core.apply.call(null,cljs.core.hash_map,map__13825):map__13825);var debug = cljs.core.get.call(null,map__13825__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13823,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13823,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13826){
var p__13823 = cljs.core.first(arglist__13826);
var args = cljs.core.rest(arglist__13826);
return log__delegate(p__13823,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.add_cache_buster = (function add_cache_buster(url){return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__13827,callback){var map__13829 = p__13827;var map__13829__$1 = ((cljs.core.seq_QMARK_.call(null,map__13829))?cljs.core.apply.call(null,cljs.core.hash_map,map__13829):map__13829);var msg = map__13829__$1;var dependency_file = cljs.core.get.call(null,map__13829__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__13829__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var file = cljs.core.get.call(null,map__13829__$1,new cljs.core.Keyword(null,"file","file",1017047278));if(cljs.core.truth_((function (){var or__7874__auto__ = dependency_file;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{var deferred = goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,file));return deferred.addCallback(((function (deferred,map__13829,map__13829__$1,msg,dependency_file,namespace,file){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
});})(deferred,map__13829,map__13829__$1,msg,dependency_file,namespace,file))
);
} else
{return null;
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.reload_js_files = (function reload_js_files(files_msg,callback){var c__10276__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto__){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto__){
return (function (state_13888){var state_val_13889 = (state_13888[1]);if((state_val_13889 === 6))
{var inst_13872 = (state_13888[7]);var inst_13880 = (state_13888[2]);var inst_13881 = [inst_13872];var inst_13882 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13881,null));var inst_13883 = cljs.core.apply.call(null,callback,inst_13882);var state_13888__$1 = (function (){var statearr_13890 = state_13888;(statearr_13890[8] = inst_13880);
return statearr_13890;
})();var statearr_13891_13904 = state_13888__$1;(statearr_13891_13904[2] = inst_13883);
(statearr_13891_13904[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13889 === 5))
{var inst_13886 = (state_13888[2]);var state_13888__$1 = state_13888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13888__$1,inst_13886);
} else
{if((state_val_13889 === 4))
{var state_13888__$1 = state_13888;var statearr_13892_13905 = state_13888__$1;(statearr_13892_13905[2] = null);
(statearr_13892_13905[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13889 === 3))
{var inst_13872 = (state_13888[7]);var inst_13875 = console.log("Figwheel: loaded files");var inst_13876 = cljs.core.clj__GT_js.call(null,inst_13872);var inst_13877 = console.log(inst_13876);var inst_13878 = cljs.core.async.timeout.call(null,10);var state_13888__$1 = (function (){var statearr_13893 = state_13888;(statearr_13893[9] = inst_13877);
(statearr_13893[10] = inst_13875);
return statearr_13893;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13888__$1,6,inst_13878);
} else
{if((state_val_13889 === 2))
{var inst_13872 = (state_13888[7]);var inst_13872__$1 = (state_13888[2]);var inst_13873 = cljs.core.not_empty.call(null,inst_13872__$1);var state_13888__$1 = (function (){var statearr_13894 = state_13888;(statearr_13894[7] = inst_13872__$1);
return statearr_13894;
})();if(cljs.core.truth_(inst_13873))
{var statearr_13895_13906 = state_13888__$1;(statearr_13895_13906[1] = 3);
} else
{var statearr_13896_13907 = state_13888__$1;(statearr_13896_13907[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13889 === 1))
{var inst_13867 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13868 = cljs.core.map.call(null,figwheel.client.reload_js_file,inst_13867);var inst_13869 = cljs.core.async.merge.call(null,inst_13868);var inst_13870 = cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,inst_13869);var state_13888__$1 = state_13888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13888__$1,2,inst_13870);
} else
{return null;
}
}
}
}
}
}
});})(c__10276__auto__))
;return ((function (switch__10206__auto__,c__10276__auto__){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_13900 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13900[0] = state_machine__10207__auto__);
(statearr_13900[1] = 1);
return statearr_13900;
});
var state_machine__10207__auto____1 = (function (state_13888){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_13888);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e13901){if((e13901 instanceof Object))
{var ex__10210__auto__ = e13901;var statearr_13902_13908 = state_13888;(statearr_13902_13908[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13909 = state_13888;
state_13888 = G__13909;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_13888){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_13888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto__))
})();var state__10278__auto__ = (function (){var statearr_13903 = f__10277__auto__.call(null);(statearr_13903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto__);
return statearr_13903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto__))
);
return c__10276__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(css_path,link_href){return cljs.core._EQ_.call(null,css_path,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,link_href,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),location.host,""));
});
figwheel.client.get_correct_link = (function get_correct_link(css_path){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,css_path,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10276__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto__,parent){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto__,parent){
return (function (state_13930){var state_val_13931 = (state_13930[1]);if((state_val_13931 === 2))
{var inst_13927 = (state_13930[2]);var inst_13928 = parent.removeChild(orig_link);var state_13930__$1 = (function (){var statearr_13932 = state_13930;(statearr_13932[7] = inst_13927);
return statearr_13932;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13930__$1,inst_13928);
} else
{if((state_val_13931 === 1))
{var inst_13925 = cljs.core.async.timeout.call(null,200);var state_13930__$1 = state_13930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13930__$1,2,inst_13925);
} else
{return null;
}
}
});})(c__10276__auto__,parent))
;return ((function (switch__10206__auto__,c__10276__auto__,parent){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_13936 = [null,null,null,null,null,null,null,null];(statearr_13936[0] = state_machine__10207__auto__);
(statearr_13936[1] = 1);
return statearr_13936;
});
var state_machine__10207__auto____1 = (function (state_13930){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_13930);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e13937){if((e13937 instanceof Object))
{var ex__10210__auto__ = e13937;var statearr_13938_13940 = state_13930;(statearr_13938_13940[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13930);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13941 = state_13930;
state_13930 = G__13941;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_13930){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_13930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto__,parent))
})();var state__10278__auto__ = (function (){var statearr_13939 = f__10277__auto__.call(null);(statearr_13939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto__);
return statearr_13939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto__,parent))
);
return c__10276__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13942){var map__13944 = p__13942;var map__13944__$1 = ((cljs.core.seq_QMARK_.call(null,map__13944))?cljs.core.apply.call(null,cljs.core.hash_map,map__13944):map__13944);var file = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4090__auto__ = figwheel.client.get_correct_link.call(null,file);if(cljs.core.truth_(temp__4090__auto__))
{var link = temp__4090__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,file));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,file));
}
});
figwheel.client.reload_css_files = (function reload_css_files(files_msg,jsload_callback){var seq__13949_13953 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg));var chunk__13950_13954 = null;var count__13951_13955 = 0;var i__13952_13956 = 0;while(true){
if((i__13952_13956 < count__13951_13955))
{var f_13957 = cljs.core._nth.call(null,chunk__13950_13954,i__13952_13956);figwheel.client.reload_css_file.call(null,f_13957);
{
var G__13958 = seq__13949_13953;
var G__13959 = chunk__13950_13954;
var G__13960 = count__13951_13955;
var G__13961 = (i__13952_13956 + 1);
seq__13949_13953 = G__13958;
chunk__13950_13954 = G__13959;
count__13951_13955 = G__13960;
i__13952_13956 = G__13961;
continue;
}
} else
{var temp__4092__auto___13962 = cljs.core.seq.call(null,seq__13949_13953);if(temp__4092__auto___13962)
{var seq__13949_13963__$1 = temp__4092__auto___13962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13949_13963__$1))
{var c__8622__auto___13964 = cljs.core.chunk_first.call(null,seq__13949_13963__$1);{
var G__13965 = cljs.core.chunk_rest.call(null,seq__13949_13963__$1);
var G__13966 = c__8622__auto___13964;
var G__13967 = cljs.core.count.call(null,c__8622__auto___13964);
var G__13968 = 0;
seq__13949_13953 = G__13965;
chunk__13950_13954 = G__13966;
count__13951_13955 = G__13967;
i__13952_13956 = G__13968;
continue;
}
} else
{var f_13969 = cljs.core.first.call(null,seq__13949_13963__$1);figwheel.client.reload_css_file.call(null,f_13969);
{
var G__13970 = cljs.core.next.call(null,seq__13949_13963__$1);
var G__13971 = null;
var G__13972 = 0;
var G__13973 = 0;
seq__13949_13953 = G__13970;
chunk__13950_13954 = G__13971;
count__13951_13955 = G__13972;
i__13952_13956 = G__13973;
continue;
}
}
} else
{}
}
break;
}
console.log("Figwheel: loaded CSS files");
return console.log(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg))));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13974){var map__13979 = p__13974;var map__13979__$1 = ((cljs.core.seq_QMARK_.call(null,map__13979))?cljs.core.apply.call(null,cljs.core.hash_map,map__13979):map__13979);var opts = map__13979__$1;var jsload_callback = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__13979__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13980 = cljs.core._EQ_;var expr__13981 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13980.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__13981)))
{return figwheel.client.reload_js_files.call(null,msg,jsload_callback);
} else
{if(cljs.core.truth_(pred__13980.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__13981)))
{return figwheel.client.reload_css_files.call(null,msg,jsload_callback);
} else
{return null;
}
}
});})(socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("Figwheel: socket connection established");
});})(socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13979,map__13979__$1,opts,jsload_callback,websocket_url,retry_count))
;
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13983){var map__13987 = p__13983;var map__13987__$1 = ((cljs.core.seq_QMARK_.call(null,map__13987))?cljs.core.apply.call(null,cljs.core.hash_map,map__13987):map__13987);var opts = map__13987__$1;var jsload_callback = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),((function (map__13987,map__13987__$1,opts,jsload_callback,websocket_url,retry_count){
return (function (url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13989 = {"detail":url};return obj13989;
})())));
});})(map__13987,map__13987__$1,opts,jsload_callback,websocket_url,retry_count))
,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),[cljs.core.str("ws:"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
};
var watch_and_reload = function (var_args){
var p__13983 = null;if (arguments.length > 0) {
  p__13983 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13983);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13990){
var p__13983 = cljs.core.seq(arglist__13990);
return watch_and_reload__delegate(p__13983);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
