// Compiled by ClojureScript 0.0-2202
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.render');
goog.require('sablono.render');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__18277__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18276 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18276,0,null);var body = cljs.core.nthnext.call(null,vec__18276,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18277 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18277__delegate.call(this,args);};
G__18277.cljs$lang$maxFixedArity = 0;
G__18277.cljs$lang$applyTo = (function (arglist__18278){
var args = cljs.core.seq(arglist__18278);
return G__18277__delegate(args);
});
G__18277.cljs$core$IFn$_invoke$arity$variadic = G__18277__delegate;
return G__18277;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__8591__auto__ = (function iter__18283(s__18284){return (new cljs.core.LazySeq(null,(function (){var s__18284__$1 = s__18284;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18284__$1);if(temp__4092__auto__)
{var s__18284__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18284__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__18284__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__18286 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__18285 = 0;while(true){
if((i__18285 < size__8590__auto__))
{var args = cljs.core._nth.call(null,c__8589__auto__,i__18285);cljs.core.chunk_append.call(null,b__18286,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__18287 = (i__18285 + 1);
i__18285 = G__18287;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18286),iter__18283.call(null,cljs.core.chunk_rest.call(null,s__18284__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18286),null);
}
} else
{var args = cljs.core.first.call(null,s__18284__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__18283.call(null,cljs.core.rest.call(null,s__18284__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__8591__auto__ = (function iter__18292(s__18293){return (new cljs.core.LazySeq(null,(function (){var s__18293__$1 = s__18293;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18293__$1);if(temp__4092__auto__)
{var s__18293__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18293__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__18293__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__18295 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__18294 = 0;while(true){
if((i__18294 < size__8590__auto__))
{var script = cljs.core._nth.call(null,c__8589__auto__,i__18294);cljs.core.chunk_append.call(null,b__18295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__18296 = (i__18294 + 1);
i__18294 = G__18296;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18295),iter__18292.call(null,cljs.core.chunk_rest.call(null,s__18293__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18295),null);
}
} else
{var script = cljs.core.first.call(null,s__18293__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__18292.call(null,cljs.core.rest.call(null,s__18293__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__18297){
var scripts = cljs.core.seq(arglist__18297);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__8591__auto__ = (function iter__18302(s__18303){return (new cljs.core.LazySeq(null,(function (){var s__18303__$1 = s__18303;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18303__$1);if(temp__4092__auto__)
{var s__18303__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18303__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__18303__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__18305 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__18304 = 0;while(true){
if((i__18304 < size__8590__auto__))
{var style = cljs.core._nth.call(null,c__8589__auto__,i__18304);cljs.core.chunk_append.call(null,b__18305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__18306 = (i__18304 + 1);
i__18304 = G__18306;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18305),iter__18302.call(null,cljs.core.chunk_rest.call(null,s__18303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18305),null);
}
} else
{var style = cljs.core.first.call(null,s__18303__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__18302.call(null,cljs.core.rest.call(null,s__18303__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__18307){
var styles = cljs.core.seq(arglist__18307);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to18308 = (function() { 
var link_to18308__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18308 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18308__delegate.call(this,url,content);};
link_to18308.cljs$lang$maxFixedArity = 1;
link_to18308.cljs$lang$applyTo = (function (arglist__18309){
var url = cljs.core.first(arglist__18309);
var content = cljs.core.rest(arglist__18309);
return link_to18308__delegate(url,content);
});
link_to18308.cljs$core$IFn$_invoke$arity$variadic = link_to18308__delegate;
return link_to18308;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18308);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18310 = (function() { 
var mail_to18310__delegate = function (e_mail,p__18311){var vec__18313 = p__18311;var content = cljs.core.nth.call(null,vec__18313,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__7874__auto__ = content;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18310 = function (e_mail,var_args){
var p__18311 = null;if (arguments.length > 1) {
  p__18311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18310__delegate.call(this,e_mail,p__18311);};
mail_to18310.cljs$lang$maxFixedArity = 1;
mail_to18310.cljs$lang$applyTo = (function (arglist__18314){
var e_mail = cljs.core.first(arglist__18314);
var p__18311 = cljs.core.rest(arglist__18314);
return mail_to18310__delegate(e_mail,p__18311);
});
mail_to18310.cljs$core$IFn$_invoke$arity$variadic = mail_to18310__delegate;
return mail_to18310;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18310);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18315 = (function unordered_list18315(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__8591__auto__ = (function iter__18320(s__18321){return (new cljs.core.LazySeq(null,(function (){var s__18321__$1 = s__18321;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18321__$1);if(temp__4092__auto__)
{var s__18321__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18321__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__18321__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__18323 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__18322 = 0;while(true){
if((i__18322 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__18322);cljs.core.chunk_append.call(null,b__18323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__18324 = (i__18322 + 1);
i__18322 = G__18324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18323),iter__18320.call(null,cljs.core.chunk_rest.call(null,s__18321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18323),null);
}
} else
{var x = cljs.core.first.call(null,s__18321__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__18320.call(null,cljs.core.rest.call(null,s__18321__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18315);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18325 = (function ordered_list18325(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__8591__auto__ = (function iter__18330(s__18331){return (new cljs.core.LazySeq(null,(function (){var s__18331__$1 = s__18331;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18331__$1);if(temp__4092__auto__)
{var s__18331__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18331__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__18331__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__18333 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__18332 = 0;while(true){
if((i__18332 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__18332);cljs.core.chunk_append.call(null,b__18333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__18334 = (i__18332 + 1);
i__18332 = G__18334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18333),iter__18330.call(null,cljs.core.chunk_rest.call(null,s__18331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18333),null);
}
} else
{var x = cljs.core.first.call(null,s__18331__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__18330.call(null,cljs.core.rest.call(null,s__18331__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18325);
/**
* Create an image element.
*/
sablono.core.image18335 = (function() {
var image18335 = null;
var image18335__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image18335__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image18335 = function(src,alt){
switch(arguments.length){
case 1:
return image18335__1.call(this,src);
case 2:
return image18335__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18335.cljs$core$IFn$_invoke$arity$1 = image18335__1;
image18335.cljs$core$IFn$_invoke$arity$2 = image18335__2;
return image18335;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18335);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18336_SHARP_,p2__18337_SHARP_){return [cljs.core.str(p1__18336_SHARP_),cljs.core.str("["),cljs.core.str(p2__18337_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18338_SHARP_,p2__18339_SHARP_){return [cljs.core.str(p1__18338_SHARP_),cljs.core.str("-"),cljs.core.str(p2__18339_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18340 = (function() {
var hidden_field18340 = null;
var hidden_field18340__1 = (function (name){return hidden_field18340.call(null,name,null);
});
var hidden_field18340__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field18340 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field18340__1.call(this,name);
case 2:
return hidden_field18340__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18340.cljs$core$IFn$_invoke$arity$1 = hidden_field18340__1;
hidden_field18340.cljs$core$IFn$_invoke$arity$2 = hidden_field18340__2;
return hidden_field18340;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18340);
/**
* Creates a new text input field.
*/
sablono.core.text_field18341 = (function() {
var text_field18341 = null;
var text_field18341__1 = (function (name){return text_field18341.call(null,name,null);
});
var text_field18341__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field18341 = function(name,value){
switch(arguments.length){
case 1:
return text_field18341__1.call(this,name);
case 2:
return text_field18341__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18341.cljs$core$IFn$_invoke$arity$1 = text_field18341__1;
text_field18341.cljs$core$IFn$_invoke$arity$2 = text_field18341__2;
return text_field18341;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18341);
/**
* Creates a new password field.
*/
sablono.core.password_field18342 = (function() {
var password_field18342 = null;
var password_field18342__1 = (function (name){return password_field18342.call(null,name,null);
});
var password_field18342__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field18342 = function(name,value){
switch(arguments.length){
case 1:
return password_field18342__1.call(this,name);
case 2:
return password_field18342__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18342.cljs$core$IFn$_invoke$arity$1 = password_field18342__1;
password_field18342.cljs$core$IFn$_invoke$arity$2 = password_field18342__2;
return password_field18342;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18342);
/**
* Creates a new email input field.
*/
sablono.core.email_field18343 = (function() {
var email_field18343 = null;
var email_field18343__1 = (function (name){return email_field18343.call(null,name,null);
});
var email_field18343__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field18343 = function(name,value){
switch(arguments.length){
case 1:
return email_field18343__1.call(this,name);
case 2:
return email_field18343__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18343.cljs$core$IFn$_invoke$arity$1 = email_field18343__1;
email_field18343.cljs$core$IFn$_invoke$arity$2 = email_field18343__2;
return email_field18343;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18343);
/**
* Creates a check box.
*/
sablono.core.check_box18344 = (function() {
var check_box18344 = null;
var check_box18344__1 = (function (name){return check_box18344.call(null,name,null);
});
var check_box18344__2 = (function (name,checked_QMARK_){return check_box18344.call(null,name,checked_QMARK_,"true");
});
var check_box18344__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box18344 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18344__1.call(this,name);
case 2:
return check_box18344__2.call(this,name,checked_QMARK_);
case 3:
return check_box18344__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18344.cljs$core$IFn$_invoke$arity$1 = check_box18344__1;
check_box18344.cljs$core$IFn$_invoke$arity$2 = check_box18344__2;
check_box18344.cljs$core$IFn$_invoke$arity$3 = check_box18344__3;
return check_box18344;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18344);
/**
* Creates a radio button.
*/
sablono.core.radio_button18345 = (function() {
var radio_button18345 = null;
var radio_button18345__1 = (function (group){return radio_button18345.call(null,group,null);
});
var radio_button18345__2 = (function (group,checked_QMARK_){return radio_button18345.call(null,group,checked_QMARK_,"true");
});
var radio_button18345__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button18345 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18345__1.call(this,group);
case 2:
return radio_button18345__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18345__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18345.cljs$core$IFn$_invoke$arity$1 = radio_button18345__1;
radio_button18345.cljs$core$IFn$_invoke$arity$2 = radio_button18345__2;
radio_button18345.cljs$core$IFn$_invoke$arity$3 = radio_button18345__3;
return radio_button18345;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18345);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18346 = (function() {
var select_options18346 = null;
var select_options18346__1 = (function (coll){return select_options18346.call(null,coll,null);
});
var select_options18346__2 = (function (coll,selected){var iter__8591__auto__ = (function iter__18355(s__18356){return (new cljs.core.LazySeq(null,(function (){var s__18356__$1 = s__18356;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18356__$1);if(temp__4092__auto__)
{var s__18356__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18356__$2))
{var c__8589__auto__ = cljs.core.chunk_first.call(null,s__18356__$2);var size__8590__auto__ = cljs.core.count.call(null,c__8589__auto__);var b__18358 = cljs.core.chunk_buffer.call(null,size__8590__auto__);if((function (){var i__18357 = 0;while(true){
if((i__18357 < size__8590__auto__))
{var x = cljs.core._nth.call(null,c__8589__auto__,i__18357);cljs.core.chunk_append.call(null,b__18358,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18361 = x;var text = cljs.core.nth.call(null,vec__18361,0,null);var val = cljs.core.nth.call(null,vec__18361,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options18346.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18363 = (i__18357 + 1);
i__18357 = G__18363;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18358),iter__18355.call(null,cljs.core.chunk_rest.call(null,s__18356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18358),null);
}
} else
{var x = cljs.core.first.call(null,s__18356__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18362 = x;var text = cljs.core.nth.call(null,vec__18362,0,null);var val = cljs.core.nth.call(null,vec__18362,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options18346.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18355.call(null,cljs.core.rest.call(null,s__18356__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8591__auto__.call(null,coll);
});
select_options18346 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18346__1.call(this,coll);
case 2:
return select_options18346__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18346.cljs$core$IFn$_invoke$arity$1 = select_options18346__1;
select_options18346.cljs$core$IFn$_invoke$arity$2 = select_options18346__2;
return select_options18346;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18346);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18364 = (function() {
var drop_down18364 = null;
var drop_down18364__2 = (function (name,options){return drop_down18364.call(null,name,options,null);
});
var drop_down18364__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18364 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18364__2.call(this,name,options);
case 3:
return drop_down18364__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18364.cljs$core$IFn$_invoke$arity$2 = drop_down18364__2;
drop_down18364.cljs$core$IFn$_invoke$arity$3 = drop_down18364__3;
return drop_down18364;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18364);
/**
* Creates a text area element.
*/
sablono.core.text_area18365 = (function() {
var text_area18365 = null;
var text_area18365__1 = (function (name){return text_area18365.call(null,name,null);
});
var text_area18365__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area18365 = function(name,value){
switch(arguments.length){
case 1:
return text_area18365__1.call(this,name);
case 2:
return text_area18365__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18365.cljs$core$IFn$_invoke$arity$1 = text_area18365__1;
text_area18365.cljs$core$IFn$_invoke$arity$2 = text_area18365__2;
return text_area18365;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18365);
/**
* Creates a file upload input.
*/
sablono.core.file_upload18366 = (function file_upload18366(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload18366);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18367 = (function label18367(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18367);
/**
* Creates a submit button.
*/
sablono.core.submit_button18368 = (function submit_button18368(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18368);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18369 = (function reset_button18369(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18369);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18370 = (function() { 
var form_to18370__delegate = function (p__18371,body){var vec__18373 = p__18371;var method = cljs.core.nth.call(null,vec__18373,0,null);var action = cljs.core.nth.call(null,vec__18373,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18370 = function (p__18371,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18370__delegate.call(this,p__18371,body);};
form_to18370.cljs$lang$maxFixedArity = 1;
form_to18370.cljs$lang$applyTo = (function (arglist__18374){
var p__18371 = cljs.core.first(arglist__18374);
var body = cljs.core.rest(arglist__18374);
return form_to18370__delegate(p__18371,body);
});
form_to18370.cljs$core$IFn$_invoke$arity$variadic = form_to18370__delegate;
return form_to18370;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18370);
