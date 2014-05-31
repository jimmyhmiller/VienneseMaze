// Compiled by ClojureScript 0.0-2202
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13994 = (function (f,fn_handler,meta13995){
this.f = f;
this.fn_handler = fn_handler;
this.meta13995 = meta13995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13994.cljs$lang$type = true;
cljs.core.async.t13994.cljs$lang$ctorStr = "cljs.core.async/t13994";
cljs.core.async.t13994.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t13994");
});
cljs.core.async.t13994.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13996){var self__ = this;
var _13996__$1 = this;return self__.meta13995;
});
cljs.core.async.t13994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13996,meta13995__$1){var self__ = this;
var _13996__$1 = this;return (new cljs.core.async.t13994(self__.f,self__.fn_handler,meta13995__$1));
});
cljs.core.async.__GT_t13994 = (function __GT_t13994(f__$1,fn_handler__$1,meta13995){return (new cljs.core.async.t13994(f__$1,fn_handler__$1,meta13995));
});
}
return (new cljs.core.async.t13994(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13998 = buff;if(G__13998)
{var bit__8524__auto__ = null;if(cljs.core.truth_((function (){var or__7874__auto__ = bit__8524__auto__;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return G__13998.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13998.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13998);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13998);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13999 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13999);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13999,ret){
return (function (){return fn1.call(null,val_13999);
});})(val_13999,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8722__auto___14000 = n;var x_14001 = 0;while(true){
if((x_14001 < n__8722__auto___14000))
{(a[x_14001] = 0);
{
var G__14002 = (x_14001 + 1);
x_14001 = G__14002;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14003 = (i + 1);
i = G__14003;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14007 = (function (flag,alt_flag,meta14008){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14008 = meta14008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14007.cljs$lang$type = true;
cljs.core.async.t14007.cljs$lang$ctorStr = "cljs.core.async/t14007";
cljs.core.async.t14007.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14007");
});})(flag))
;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14009){var self__ = this;
var _14009__$1 = this;return self__.meta14008;
});})(flag))
;
cljs.core.async.t14007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14009,meta14008__$1){var self__ = this;
var _14009__$1 = this;return (new cljs.core.async.t14007(self__.flag,self__.alt_flag,meta14008__$1));
});})(flag))
;
cljs.core.async.__GT_t14007 = ((function (flag){
return (function __GT_t14007(flag__$1,alt_flag__$1,meta14008){return (new cljs.core.async.t14007(flag__$1,alt_flag__$1,meta14008));
});})(flag))
;
}
return (new cljs.core.async.t14007(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14013 = (function (cb,flag,alt_handler,meta14014){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14014 = meta14014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14013.cljs$lang$type = true;
cljs.core.async.t14013.cljs$lang$ctorStr = "cljs.core.async/t14013";
cljs.core.async.t14013.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14013");
});
cljs.core.async.t14013.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14015){var self__ = this;
var _14015__$1 = this;return self__.meta14014;
});
cljs.core.async.t14013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14015,meta14014__$1){var self__ = this;
var _14015__$1 = this;return (new cljs.core.async.t14013(self__.cb,self__.flag,self__.alt_handler,meta14014__$1));
});
cljs.core.async.__GT_t14013 = (function __GT_t14013(cb__$1,flag__$1,alt_handler__$1,meta14014){return (new cljs.core.async.t14013(cb__$1,flag__$1,alt_handler__$1,meta14014));
});
}
return (new cljs.core.async.t14013(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14016_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14016_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14017_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14017_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7874__auto__ = wport;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14018 = (i + 1);
i = G__14018;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7874__auto__ = ret;if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7862__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7862__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7862__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14019){var map__14021 = p__14019;var map__14021__$1 = ((cljs.core.seq_QMARK_.call(null,map__14021))?cljs.core.apply.call(null,cljs.core.hash_map,map__14021):map__14021);var opts = map__14021__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14019 = null;if (arguments.length > 1) {
  p__14019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14019);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14022){
var ports = cljs.core.first(arglist__14022);
var p__14019 = cljs.core.rest(arglist__14022);
return alts_BANG___delegate(ports,p__14019);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14030 = (function (ch,f,map_LT_,meta14031){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14031 = meta14031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14030.cljs$lang$type = true;
cljs.core.async.t14030.cljs$lang$ctorStr = "cljs.core.async/t14030";
cljs.core.async.t14030.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14030");
});
cljs.core.async.t14030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14033 = (function (fn1,_,meta14031,ch,f,map_LT_,meta14034){
this.fn1 = fn1;
this._ = _;
this.meta14031 = meta14031;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14034 = meta14034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14033.cljs$lang$type = true;
cljs.core.async.t14033.cljs$lang$ctorStr = "cljs.core.async/t14033";
cljs.core.async.t14033.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14033");
});})(___$1))
;
cljs.core.async.t14033.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14033.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14023_SHARP_){return f1.call(null,(((p1__14023_SHARP_ == null))?null:self__.f.call(null,p1__14023_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14035){var self__ = this;
var _14035__$1 = this;return self__.meta14034;
});})(___$1))
;
cljs.core.async.t14033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14035,meta14034__$1){var self__ = this;
var _14035__$1 = this;return (new cljs.core.async.t14033(self__.fn1,self__._,self__.meta14031,self__.ch,self__.f,self__.map_LT_,meta14034__$1));
});})(___$1))
;
cljs.core.async.__GT_t14033 = ((function (___$1){
return (function __GT_t14033(fn1__$1,___$2,meta14031__$1,ch__$2,f__$2,map_LT___$2,meta14034){return (new cljs.core.async.t14033(fn1__$1,___$2,meta14031__$1,ch__$2,f__$2,map_LT___$2,meta14034));
});})(___$1))
;
}
return (new cljs.core.async.t14033(fn1,___$1,self__.meta14031,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7862__auto__ = ret;if(cljs.core.truth_(and__7862__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7862__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14030.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14032){var self__ = this;
var _14032__$1 = this;return self__.meta14031;
});
cljs.core.async.t14030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14032,meta14031__$1){var self__ = this;
var _14032__$1 = this;return (new cljs.core.async.t14030(self__.ch,self__.f,self__.map_LT_,meta14031__$1));
});
cljs.core.async.__GT_t14030 = (function __GT_t14030(ch__$1,f__$1,map_LT___$1,meta14031){return (new cljs.core.async.t14030(ch__$1,f__$1,map_LT___$1,meta14031));
});
}
return (new cljs.core.async.t14030(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14039 = (function (ch,f,map_GT_,meta14040){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14040 = meta14040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14039.cljs$lang$type = true;
cljs.core.async.t14039.cljs$lang$ctorStr = "cljs.core.async/t14039";
cljs.core.async.t14039.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14039");
});
cljs.core.async.t14039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14041){var self__ = this;
var _14041__$1 = this;return self__.meta14040;
});
cljs.core.async.t14039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14041,meta14040__$1){var self__ = this;
var _14041__$1 = this;return (new cljs.core.async.t14039(self__.ch,self__.f,self__.map_GT_,meta14040__$1));
});
cljs.core.async.__GT_t14039 = (function __GT_t14039(ch__$1,f__$1,map_GT___$1,meta14040){return (new cljs.core.async.t14039(ch__$1,f__$1,map_GT___$1,meta14040));
});
}
return (new cljs.core.async.t14039(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14045 = (function (ch,p,filter_GT_,meta14046){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14046 = meta14046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14045.cljs$lang$type = true;
cljs.core.async.t14045.cljs$lang$ctorStr = "cljs.core.async/t14045";
cljs.core.async.t14045.cljs$lang$ctorPrWriter = (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t14045");
});
cljs.core.async.t14045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14045.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14047){var self__ = this;
var _14047__$1 = this;return self__.meta14046;
});
cljs.core.async.t14045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14047,meta14046__$1){var self__ = this;
var _14047__$1 = this;return (new cljs.core.async.t14045(self__.ch,self__.p,self__.filter_GT_,meta14046__$1));
});
cljs.core.async.__GT_t14045 = (function __GT_t14045(ch__$1,p__$1,filter_GT___$1,meta14046){return (new cljs.core.async.t14045(ch__$1,p__$1,filter_GT___$1,meta14046));
});
}
return (new cljs.core.async.t14045(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10276__auto___14130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___14130,out){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___14130,out){
return (function (state_14109){var state_val_14110 = (state_14109[1]);if((state_val_14110 === 1))
{var state_14109__$1 = state_14109;var statearr_14111_14131 = state_14109__$1;(statearr_14111_14131[2] = null);
(statearr_14111_14131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 2))
{var state_14109__$1 = state_14109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14109__$1,4,ch);
} else
{if((state_val_14110 === 3))
{var inst_14107 = (state_14109[2]);var state_14109__$1 = state_14109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14109__$1,inst_14107);
} else
{if((state_val_14110 === 4))
{var inst_14091 = (state_14109[7]);var inst_14091__$1 = (state_14109[2]);var inst_14092 = (inst_14091__$1 == null);var state_14109__$1 = (function (){var statearr_14112 = state_14109;(statearr_14112[7] = inst_14091__$1);
return statearr_14112;
})();if(cljs.core.truth_(inst_14092))
{var statearr_14113_14132 = state_14109__$1;(statearr_14113_14132[1] = 5);
} else
{var statearr_14114_14133 = state_14109__$1;(statearr_14114_14133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 5))
{var inst_14094 = cljs.core.async.close_BANG_.call(null,out);var state_14109__$1 = state_14109;var statearr_14115_14134 = state_14109__$1;(statearr_14115_14134[2] = inst_14094);
(statearr_14115_14134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 6))
{var inst_14091 = (state_14109[7]);var inst_14096 = p.call(null,inst_14091);var state_14109__$1 = state_14109;if(cljs.core.truth_(inst_14096))
{var statearr_14116_14135 = state_14109__$1;(statearr_14116_14135[1] = 8);
} else
{var statearr_14117_14136 = state_14109__$1;(statearr_14117_14136[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 7))
{var inst_14105 = (state_14109[2]);var state_14109__$1 = state_14109;var statearr_14118_14137 = state_14109__$1;(statearr_14118_14137[2] = inst_14105);
(statearr_14118_14137[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 8))
{var inst_14091 = (state_14109[7]);var state_14109__$1 = state_14109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14109__$1,11,out,inst_14091);
} else
{if((state_val_14110 === 9))
{var state_14109__$1 = state_14109;var statearr_14119_14138 = state_14109__$1;(statearr_14119_14138[2] = null);
(statearr_14119_14138[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 10))
{var inst_14102 = (state_14109[2]);var state_14109__$1 = (function (){var statearr_14120 = state_14109;(statearr_14120[8] = inst_14102);
return statearr_14120;
})();var statearr_14121_14139 = state_14109__$1;(statearr_14121_14139[2] = null);
(statearr_14121_14139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 11))
{var inst_14099 = (state_14109[2]);var state_14109__$1 = state_14109;var statearr_14122_14140 = state_14109__$1;(statearr_14122_14140[2] = inst_14099);
(statearr_14122_14140[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___14130,out))
;return ((function (switch__10206__auto__,c__10276__auto___14130,out){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_14126 = [null,null,null,null,null,null,null,null,null];(statearr_14126[0] = state_machine__10207__auto__);
(statearr_14126[1] = 1);
return statearr_14126;
});
var state_machine__10207__auto____1 = (function (state_14109){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_14109);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e14127){if((e14127 instanceof Object))
{var ex__10210__auto__ = e14127;var statearr_14128_14141 = state_14109;(statearr_14128_14141[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14109);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14142 = state_14109;
state_14109 = G__14142;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_14109){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_14109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___14130,out))
})();var state__10278__auto__ = (function (){var statearr_14129 = f__10277__auto__.call(null);(statearr_14129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___14130);
return statearr_14129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___14130,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10276__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto__){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto__){
return (function (state_14308){var state_val_14309 = (state_14308[1]);if((state_val_14309 === 1))
{var state_14308__$1 = state_14308;var statearr_14310_14351 = state_14308__$1;(statearr_14310_14351[2] = null);
(statearr_14310_14351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 2))
{var state_14308__$1 = state_14308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14308__$1,4,in$);
} else
{if((state_val_14309 === 3))
{var inst_14306 = (state_14308[2]);var state_14308__$1 = state_14308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14308__$1,inst_14306);
} else
{if((state_val_14309 === 4))
{var inst_14249 = (state_14308[7]);var inst_14249__$1 = (state_14308[2]);var inst_14250 = (inst_14249__$1 == null);var state_14308__$1 = (function (){var statearr_14311 = state_14308;(statearr_14311[7] = inst_14249__$1);
return statearr_14311;
})();if(cljs.core.truth_(inst_14250))
{var statearr_14312_14352 = state_14308__$1;(statearr_14312_14352[1] = 5);
} else
{var statearr_14313_14353 = state_14308__$1;(statearr_14313_14353[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 5))
{var inst_14252 = cljs.core.async.close_BANG_.call(null,out);var state_14308__$1 = state_14308;var statearr_14314_14354 = state_14308__$1;(statearr_14314_14354[2] = inst_14252);
(statearr_14314_14354[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 6))
{var inst_14249 = (state_14308[7]);var inst_14258 = f.call(null,inst_14249);var inst_14259 = cljs.core.seq.call(null,inst_14258);var inst_14260 = inst_14259;var inst_14261 = null;var inst_14262 = 0;var inst_14263 = 0;var state_14308__$1 = (function (){var statearr_14315 = state_14308;(statearr_14315[8] = inst_14261);
(statearr_14315[9] = inst_14260);
(statearr_14315[10] = inst_14263);
(statearr_14315[11] = inst_14262);
return statearr_14315;
})();var statearr_14316_14355 = state_14308__$1;(statearr_14316_14355[2] = null);
(statearr_14316_14355[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 7))
{var inst_14304 = (state_14308[2]);var state_14308__$1 = state_14308;var statearr_14317_14356 = state_14308__$1;(statearr_14317_14356[2] = inst_14304);
(statearr_14317_14356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 8))
{var inst_14263 = (state_14308[10]);var inst_14262 = (state_14308[11]);var inst_14265 = (inst_14263 < inst_14262);var inst_14266 = inst_14265;var state_14308__$1 = state_14308;if(cljs.core.truth_(inst_14266))
{var statearr_14318_14357 = state_14308__$1;(statearr_14318_14357[1] = 10);
} else
{var statearr_14319_14358 = state_14308__$1;(statearr_14319_14358[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 9))
{var inst_14296 = (state_14308[2]);var inst_14297 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14308__$1 = (function (){var statearr_14320 = state_14308;(statearr_14320[12] = inst_14296);
return statearr_14320;
})();if(cljs.core.truth_(inst_14297))
{var statearr_14321_14359 = state_14308__$1;(statearr_14321_14359[1] = 21);
} else
{var statearr_14322_14360 = state_14308__$1;(statearr_14322_14360[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 10))
{var inst_14261 = (state_14308[8]);var inst_14263 = (state_14308[10]);var inst_14268 = cljs.core._nth.call(null,inst_14261,inst_14263);var state_14308__$1 = state_14308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14308__$1,13,out,inst_14268);
} else
{if((state_val_14309 === 11))
{var inst_14260 = (state_14308[9]);var inst_14274 = (state_14308[13]);var inst_14274__$1 = cljs.core.seq.call(null,inst_14260);var state_14308__$1 = (function (){var statearr_14326 = state_14308;(statearr_14326[13] = inst_14274__$1);
return statearr_14326;
})();if(inst_14274__$1)
{var statearr_14327_14361 = state_14308__$1;(statearr_14327_14361[1] = 14);
} else
{var statearr_14328_14362 = state_14308__$1;(statearr_14328_14362[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 12))
{var inst_14294 = (state_14308[2]);var state_14308__$1 = state_14308;var statearr_14329_14363 = state_14308__$1;(statearr_14329_14363[2] = inst_14294);
(statearr_14329_14363[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 13))
{var inst_14261 = (state_14308[8]);var inst_14260 = (state_14308[9]);var inst_14263 = (state_14308[10]);var inst_14262 = (state_14308[11]);var inst_14270 = (state_14308[2]);var inst_14271 = (inst_14263 + 1);var tmp14323 = inst_14261;var tmp14324 = inst_14260;var tmp14325 = inst_14262;var inst_14260__$1 = tmp14324;var inst_14261__$1 = tmp14323;var inst_14262__$1 = tmp14325;var inst_14263__$1 = inst_14271;var state_14308__$1 = (function (){var statearr_14330 = state_14308;(statearr_14330[14] = inst_14270);
(statearr_14330[8] = inst_14261__$1);
(statearr_14330[9] = inst_14260__$1);
(statearr_14330[10] = inst_14263__$1);
(statearr_14330[11] = inst_14262__$1);
return statearr_14330;
})();var statearr_14331_14364 = state_14308__$1;(statearr_14331_14364[2] = null);
(statearr_14331_14364[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 14))
{var inst_14274 = (state_14308[13]);var inst_14276 = cljs.core.chunked_seq_QMARK_.call(null,inst_14274);var state_14308__$1 = state_14308;if(inst_14276)
{var statearr_14332_14365 = state_14308__$1;(statearr_14332_14365[1] = 17);
} else
{var statearr_14333_14366 = state_14308__$1;(statearr_14333_14366[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 15))
{var state_14308__$1 = state_14308;var statearr_14334_14367 = state_14308__$1;(statearr_14334_14367[2] = null);
(statearr_14334_14367[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 16))
{var inst_14292 = (state_14308[2]);var state_14308__$1 = state_14308;var statearr_14335_14368 = state_14308__$1;(statearr_14335_14368[2] = inst_14292);
(statearr_14335_14368[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 17))
{var inst_14274 = (state_14308[13]);var inst_14278 = cljs.core.chunk_first.call(null,inst_14274);var inst_14279 = cljs.core.chunk_rest.call(null,inst_14274);var inst_14280 = cljs.core.count.call(null,inst_14278);var inst_14260 = inst_14279;var inst_14261 = inst_14278;var inst_14262 = inst_14280;var inst_14263 = 0;var state_14308__$1 = (function (){var statearr_14336 = state_14308;(statearr_14336[8] = inst_14261);
(statearr_14336[9] = inst_14260);
(statearr_14336[10] = inst_14263);
(statearr_14336[11] = inst_14262);
return statearr_14336;
})();var statearr_14337_14369 = state_14308__$1;(statearr_14337_14369[2] = null);
(statearr_14337_14369[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 18))
{var inst_14274 = (state_14308[13]);var inst_14283 = cljs.core.first.call(null,inst_14274);var state_14308__$1 = state_14308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14308__$1,20,out,inst_14283);
} else
{if((state_val_14309 === 19))
{var inst_14289 = (state_14308[2]);var state_14308__$1 = state_14308;var statearr_14338_14370 = state_14308__$1;(statearr_14338_14370[2] = inst_14289);
(statearr_14338_14370[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 20))
{var inst_14274 = (state_14308[13]);var inst_14285 = (state_14308[2]);var inst_14286 = cljs.core.next.call(null,inst_14274);var inst_14260 = inst_14286;var inst_14261 = null;var inst_14262 = 0;var inst_14263 = 0;var state_14308__$1 = (function (){var statearr_14339 = state_14308;(statearr_14339[15] = inst_14285);
(statearr_14339[8] = inst_14261);
(statearr_14339[9] = inst_14260);
(statearr_14339[10] = inst_14263);
(statearr_14339[11] = inst_14262);
return statearr_14339;
})();var statearr_14340_14371 = state_14308__$1;(statearr_14340_14371[2] = null);
(statearr_14340_14371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 21))
{var state_14308__$1 = state_14308;var statearr_14341_14372 = state_14308__$1;(statearr_14341_14372[2] = null);
(statearr_14341_14372[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 22))
{var state_14308__$1 = state_14308;var statearr_14342_14373 = state_14308__$1;(statearr_14342_14373[2] = null);
(statearr_14342_14373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14309 === 23))
{var inst_14302 = (state_14308[2]);var state_14308__$1 = state_14308;var statearr_14343_14374 = state_14308__$1;(statearr_14343_14374[2] = inst_14302);
(statearr_14343_14374[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__10207__auto____0 = (function (){var statearr_14347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14347[0] = state_machine__10207__auto__);
(statearr_14347[1] = 1);
return statearr_14347;
});
var state_machine__10207__auto____1 = (function (state_14308){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_14308);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e14348){if((e14348 instanceof Object))
{var ex__10210__auto__ = e14348;var statearr_14349_14375 = state_14308;(statearr_14349_14375[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14308);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14376 = state_14308;
state_14308 = G__14376;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_14308){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_14308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto__))
})();var state__10278__auto__ = (function (){var statearr_14350 = f__10277__auto__.call(null);(statearr_14350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto__);
return statearr_14350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto__))
);
return c__10276__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10276__auto___14471 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___14471){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___14471){
return (function (state_14447){var state_val_14448 = (state_14447[1]);if((state_val_14448 === 1))
{var state_14447__$1 = state_14447;var statearr_14449_14472 = state_14447__$1;(statearr_14449_14472[2] = null);
(statearr_14449_14472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 2))
{var state_14447__$1 = state_14447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14447__$1,4,from);
} else
{if((state_val_14448 === 3))
{var inst_14445 = (state_14447[2]);var state_14447__$1 = state_14447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14447__$1,inst_14445);
} else
{if((state_val_14448 === 4))
{var inst_14426 = (state_14447[7]);var inst_14426__$1 = (state_14447[2]);var inst_14427 = (inst_14426__$1 == null);var state_14447__$1 = (function (){var statearr_14450 = state_14447;(statearr_14450[7] = inst_14426__$1);
return statearr_14450;
})();if(cljs.core.truth_(inst_14427))
{var statearr_14451_14473 = state_14447__$1;(statearr_14451_14473[1] = 5);
} else
{var statearr_14452_14474 = state_14447__$1;(statearr_14452_14474[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 5))
{var state_14447__$1 = state_14447;if(cljs.core.truth_(close_QMARK_))
{var statearr_14453_14475 = state_14447__$1;(statearr_14453_14475[1] = 8);
} else
{var statearr_14454_14476 = state_14447__$1;(statearr_14454_14476[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 6))
{var inst_14426 = (state_14447[7]);var state_14447__$1 = state_14447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14447__$1,11,to,inst_14426);
} else
{if((state_val_14448 === 7))
{var inst_14443 = (state_14447[2]);var state_14447__$1 = state_14447;var statearr_14455_14477 = state_14447__$1;(statearr_14455_14477[2] = inst_14443);
(statearr_14455_14477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 8))
{var inst_14430 = cljs.core.async.close_BANG_.call(null,to);var state_14447__$1 = state_14447;var statearr_14456_14478 = state_14447__$1;(statearr_14456_14478[2] = inst_14430);
(statearr_14456_14478[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 9))
{var state_14447__$1 = state_14447;var statearr_14457_14479 = state_14447__$1;(statearr_14457_14479[2] = null);
(statearr_14457_14479[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 10))
{var inst_14433 = (state_14447[2]);var state_14447__$1 = state_14447;var statearr_14458_14480 = state_14447__$1;(statearr_14458_14480[2] = inst_14433);
(statearr_14458_14480[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 11))
{var inst_14436 = (state_14447[2]);var state_14447__$1 = state_14447;if(cljs.core.truth_(inst_14436))
{var statearr_14459_14481 = state_14447__$1;(statearr_14459_14481[1] = 12);
} else
{var statearr_14460_14482 = state_14447__$1;(statearr_14460_14482[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 12))
{var state_14447__$1 = state_14447;var statearr_14461_14483 = state_14447__$1;(statearr_14461_14483[2] = null);
(statearr_14461_14483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 13))
{var state_14447__$1 = state_14447;var statearr_14462_14484 = state_14447__$1;(statearr_14462_14484[2] = null);
(statearr_14462_14484[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 14))
{var inst_14441 = (state_14447[2]);var state_14447__$1 = state_14447;var statearr_14463_14485 = state_14447__$1;(statearr_14463_14485[2] = inst_14441);
(statearr_14463_14485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___14471))
;return ((function (switch__10206__auto__,c__10276__auto___14471){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_14467 = [null,null,null,null,null,null,null,null];(statearr_14467[0] = state_machine__10207__auto__);
(statearr_14467[1] = 1);
return statearr_14467;
});
var state_machine__10207__auto____1 = (function (state_14447){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_14447);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e14468){if((e14468 instanceof Object))
{var ex__10210__auto__ = e14468;var statearr_14469_14486 = state_14447;(statearr_14469_14486[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14447);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14487 = state_14447;
state_14447 = G__14487;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_14447){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_14447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___14471))
})();var state__10278__auto__ = (function (){var statearr_14470 = f__10277__auto__.call(null);(statearr_14470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___14471);
return statearr_14470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___14471))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10276__auto___14588 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___14588,tc,fc){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___14588,tc,fc){
return (function (state_14563){var state_val_14564 = (state_14563[1]);if((state_val_14564 === 1))
{var state_14563__$1 = state_14563;var statearr_14565_14589 = state_14563__$1;(statearr_14565_14589[2] = null);
(statearr_14565_14589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 2))
{var state_14563__$1 = state_14563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14563__$1,4,ch);
} else
{if((state_val_14564 === 3))
{var inst_14561 = (state_14563[2]);var state_14563__$1 = state_14563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14563__$1,inst_14561);
} else
{if((state_val_14564 === 4))
{var inst_14540 = (state_14563[7]);var inst_14540__$1 = (state_14563[2]);var inst_14541 = (inst_14540__$1 == null);var state_14563__$1 = (function (){var statearr_14566 = state_14563;(statearr_14566[7] = inst_14540__$1);
return statearr_14566;
})();if(cljs.core.truth_(inst_14541))
{var statearr_14567_14590 = state_14563__$1;(statearr_14567_14590[1] = 5);
} else
{var statearr_14568_14591 = state_14563__$1;(statearr_14568_14591[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 5))
{var inst_14543 = cljs.core.async.close_BANG_.call(null,tc);var inst_14544 = cljs.core.async.close_BANG_.call(null,fc);var state_14563__$1 = (function (){var statearr_14569 = state_14563;(statearr_14569[8] = inst_14543);
return statearr_14569;
})();var statearr_14570_14592 = state_14563__$1;(statearr_14570_14592[2] = inst_14544);
(statearr_14570_14592[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 6))
{var inst_14540 = (state_14563[7]);var inst_14546 = p.call(null,inst_14540);var state_14563__$1 = state_14563;if(cljs.core.truth_(inst_14546))
{var statearr_14571_14593 = state_14563__$1;(statearr_14571_14593[1] = 9);
} else
{var statearr_14572_14594 = state_14563__$1;(statearr_14572_14594[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 7))
{var inst_14559 = (state_14563[2]);var state_14563__$1 = state_14563;var statearr_14573_14595 = state_14563__$1;(statearr_14573_14595[2] = inst_14559);
(statearr_14573_14595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 8))
{var inst_14552 = (state_14563[2]);var state_14563__$1 = state_14563;if(cljs.core.truth_(inst_14552))
{var statearr_14574_14596 = state_14563__$1;(statearr_14574_14596[1] = 12);
} else
{var statearr_14575_14597 = state_14563__$1;(statearr_14575_14597[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 9))
{var state_14563__$1 = state_14563;var statearr_14576_14598 = state_14563__$1;(statearr_14576_14598[2] = tc);
(statearr_14576_14598[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 10))
{var state_14563__$1 = state_14563;var statearr_14577_14599 = state_14563__$1;(statearr_14577_14599[2] = fc);
(statearr_14577_14599[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 11))
{var inst_14540 = (state_14563[7]);var inst_14550 = (state_14563[2]);var state_14563__$1 = state_14563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14563__$1,8,inst_14550,inst_14540);
} else
{if((state_val_14564 === 12))
{var state_14563__$1 = state_14563;var statearr_14578_14600 = state_14563__$1;(statearr_14578_14600[2] = null);
(statearr_14578_14600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 13))
{var state_14563__$1 = state_14563;var statearr_14579_14601 = state_14563__$1;(statearr_14579_14601[2] = null);
(statearr_14579_14601[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 14))
{var inst_14557 = (state_14563[2]);var state_14563__$1 = state_14563;var statearr_14580_14602 = state_14563__$1;(statearr_14580_14602[2] = inst_14557);
(statearr_14580_14602[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___14588,tc,fc))
;return ((function (switch__10206__auto__,c__10276__auto___14588,tc,fc){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_14584 = [null,null,null,null,null,null,null,null,null];(statearr_14584[0] = state_machine__10207__auto__);
(statearr_14584[1] = 1);
return statearr_14584;
});
var state_machine__10207__auto____1 = (function (state_14563){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_14563);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e14585){if((e14585 instanceof Object))
{var ex__10210__auto__ = e14585;var statearr_14586_14603 = state_14563;(statearr_14586_14603[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14604 = state_14563;
state_14563 = G__14604;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_14563){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_14563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___14588,tc,fc))
})();var state__10278__auto__ = (function (){var statearr_14587 = f__10277__auto__.call(null);(statearr_14587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___14588);
return statearr_14587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___14588,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10276__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto__){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto__){
return (function (state_14651){var state_val_14652 = (state_14651[1]);if((state_val_14652 === 7))
{var inst_14647 = (state_14651[2]);var state_14651__$1 = state_14651;var statearr_14653_14669 = state_14651__$1;(statearr_14653_14669[2] = inst_14647);
(statearr_14653_14669[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14652 === 6))
{var inst_14640 = (state_14651[7]);var inst_14637 = (state_14651[8]);var inst_14644 = f.call(null,inst_14637,inst_14640);var inst_14637__$1 = inst_14644;var state_14651__$1 = (function (){var statearr_14654 = state_14651;(statearr_14654[8] = inst_14637__$1);
return statearr_14654;
})();var statearr_14655_14670 = state_14651__$1;(statearr_14655_14670[2] = null);
(statearr_14655_14670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14652 === 5))
{var inst_14637 = (state_14651[8]);var state_14651__$1 = state_14651;var statearr_14656_14671 = state_14651__$1;(statearr_14656_14671[2] = inst_14637);
(statearr_14656_14671[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14652 === 4))
{var inst_14640 = (state_14651[7]);var inst_14640__$1 = (state_14651[2]);var inst_14641 = (inst_14640__$1 == null);var state_14651__$1 = (function (){var statearr_14657 = state_14651;(statearr_14657[7] = inst_14640__$1);
return statearr_14657;
})();if(cljs.core.truth_(inst_14641))
{var statearr_14658_14672 = state_14651__$1;(statearr_14658_14672[1] = 5);
} else
{var statearr_14659_14673 = state_14651__$1;(statearr_14659_14673[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14652 === 3))
{var inst_14649 = (state_14651[2]);var state_14651__$1 = state_14651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14651__$1,inst_14649);
} else
{if((state_val_14652 === 2))
{var state_14651__$1 = state_14651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14651__$1,4,ch);
} else
{if((state_val_14652 === 1))
{var inst_14637 = init;var state_14651__$1 = (function (){var statearr_14660 = state_14651;(statearr_14660[8] = inst_14637);
return statearr_14660;
})();var statearr_14661_14674 = state_14651__$1;(statearr_14661_14674[2] = null);
(statearr_14661_14674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
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
var state_machine__10207__auto____0 = (function (){var statearr_14665 = [null,null,null,null,null,null,null,null,null];(statearr_14665[0] = state_machine__10207__auto__);
(statearr_14665[1] = 1);
return statearr_14665;
});
var state_machine__10207__auto____1 = (function (state_14651){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_14651);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e14666){if((e14666 instanceof Object))
{var ex__10210__auto__ = e14666;var statearr_14667_14675 = state_14651;(statearr_14667_14675[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14651);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14676 = state_14651;
state_14651 = G__14676;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_14651){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_14651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto__))
})();var state__10278__auto__ = (function (){var statearr_14668 = f__10277__auto__.call(null);(statearr_14668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto__);
return statearr_14668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto__))
);
return c__10276__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10276__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto__){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto__){
return (function (state_14750){var state_val_14751 = (state_14750[1]);if((state_val_14751 === 1))
{var inst_14726 = cljs.core.seq.call(null,coll);var inst_14727 = inst_14726;var state_14750__$1 = (function (){var statearr_14752 = state_14750;(statearr_14752[7] = inst_14727);
return statearr_14752;
})();var statearr_14753_14775 = state_14750__$1;(statearr_14753_14775[2] = null);
(statearr_14753_14775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 2))
{var inst_14727 = (state_14750[7]);var state_14750__$1 = state_14750;if(cljs.core.truth_(inst_14727))
{var statearr_14754_14776 = state_14750__$1;(statearr_14754_14776[1] = 4);
} else
{var statearr_14755_14777 = state_14750__$1;(statearr_14755_14777[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 3))
{var inst_14748 = (state_14750[2]);var state_14750__$1 = state_14750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14750__$1,inst_14748);
} else
{if((state_val_14751 === 4))
{var inst_14727 = (state_14750[7]);var inst_14730 = cljs.core.first.call(null,inst_14727);var state_14750__$1 = state_14750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14750__$1,7,ch,inst_14730);
} else
{if((state_val_14751 === 5))
{var inst_14727 = (state_14750[7]);var state_14750__$1 = state_14750;var statearr_14756_14778 = state_14750__$1;(statearr_14756_14778[2] = inst_14727);
(statearr_14756_14778[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 6))
{var inst_14735 = (state_14750[2]);var state_14750__$1 = state_14750;if(cljs.core.truth_(inst_14735))
{var statearr_14757_14779 = state_14750__$1;(statearr_14757_14779[1] = 8);
} else
{var statearr_14758_14780 = state_14750__$1;(statearr_14758_14780[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 7))
{var inst_14732 = (state_14750[2]);var state_14750__$1 = state_14750;var statearr_14759_14781 = state_14750__$1;(statearr_14759_14781[2] = inst_14732);
(statearr_14759_14781[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 8))
{var inst_14727 = (state_14750[7]);var inst_14737 = cljs.core.next.call(null,inst_14727);var inst_14727__$1 = inst_14737;var state_14750__$1 = (function (){var statearr_14760 = state_14750;(statearr_14760[7] = inst_14727__$1);
return statearr_14760;
})();var statearr_14761_14782 = state_14750__$1;(statearr_14761_14782[2] = null);
(statearr_14761_14782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 9))
{var state_14750__$1 = state_14750;if(cljs.core.truth_(close_QMARK_))
{var statearr_14762_14783 = state_14750__$1;(statearr_14762_14783[1] = 11);
} else
{var statearr_14763_14784 = state_14750__$1;(statearr_14763_14784[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 10))
{var inst_14746 = (state_14750[2]);var state_14750__$1 = state_14750;var statearr_14764_14785 = state_14750__$1;(statearr_14764_14785[2] = inst_14746);
(statearr_14764_14785[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 11))
{var inst_14741 = cljs.core.async.close_BANG_.call(null,ch);var state_14750__$1 = state_14750;var statearr_14765_14786 = state_14750__$1;(statearr_14765_14786[2] = inst_14741);
(statearr_14765_14786[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 12))
{var state_14750__$1 = state_14750;var statearr_14766_14787 = state_14750__$1;(statearr_14766_14787[2] = null);
(statearr_14766_14787[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 13))
{var inst_14744 = (state_14750[2]);var state_14750__$1 = state_14750;var statearr_14767_14788 = state_14750__$1;(statearr_14767_14788[2] = inst_14744);
(statearr_14767_14788[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
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
var state_machine__10207__auto____0 = (function (){var statearr_14771 = [null,null,null,null,null,null,null,null];(statearr_14771[0] = state_machine__10207__auto__);
(statearr_14771[1] = 1);
return statearr_14771;
});
var state_machine__10207__auto____1 = (function (state_14750){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_14750);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e14772){if((e14772 instanceof Object))
{var ex__10210__auto__ = e14772;var statearr_14773_14789 = state_14750;(statearr_14773_14789[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14750);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14790 = state_14750;
state_14750 = G__14790;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_14750){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_14750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto__))
})();var state__10278__auto__ = (function (){var statearr_14774 = f__10277__auto__.call(null);(statearr_14774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto__);
return statearr_14774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto__))
);
return c__10276__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14792 = {};return obj14792;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7862__auto__ = _;if(and__7862__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8501__auto__ = (((_ == null))?null:_);return (function (){var or__7874__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14794 = {};return obj14794;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15016 = (function (cs,ch,mult,meta15017){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15017 = meta15017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15016.cljs$lang$type = true;
cljs.core.async.t15016.cljs$lang$ctorStr = "cljs.core.async/t15016";
cljs.core.async.t15016.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15016");
});})(cs))
;
cljs.core.async.t15016.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15016.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15016.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15016.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15016.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15018){var self__ = this;
var _15018__$1 = this;return self__.meta15017;
});})(cs))
;
cljs.core.async.t15016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15018,meta15017__$1){var self__ = this;
var _15018__$1 = this;return (new cljs.core.async.t15016(self__.cs,self__.ch,self__.mult,meta15017__$1));
});})(cs))
;
cljs.core.async.__GT_t15016 = ((function (cs){
return (function __GT_t15016(cs__$1,ch__$1,mult__$1,meta15017){return (new cljs.core.async.t15016(cs__$1,ch__$1,mult__$1,meta15017));
});})(cs))
;
}
return (new cljs.core.async.t15016(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10276__auto___15237 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___15237,cs,m,dchan,dctr,done){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___15237,cs,m,dchan,dctr,done){
return (function (state_15149){var state_val_15150 = (state_15149[1]);if((state_val_15150 === 32))
{var inst_15091 = (state_15149[7]);var inst_15092 = (state_15149[8]);var inst_15090 = (state_15149[9]);var inst_15089 = (state_15149[10]);var inst_15104 = (state_15149[2]);var inst_15105 = (inst_15092 + 1);var tmp15151 = inst_15091;var tmp15152 = inst_15090;var tmp15153 = inst_15089;var inst_15089__$1 = tmp15153;var inst_15090__$1 = tmp15152;var inst_15091__$1 = tmp15151;var inst_15092__$1 = inst_15105;var state_15149__$1 = (function (){var statearr_15154 = state_15149;(statearr_15154[11] = inst_15104);
(statearr_15154[7] = inst_15091__$1);
(statearr_15154[8] = inst_15092__$1);
(statearr_15154[9] = inst_15090__$1);
(statearr_15154[10] = inst_15089__$1);
return statearr_15154;
})();var statearr_15155_15238 = state_15149__$1;(statearr_15155_15238[2] = null);
(statearr_15155_15238[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 1))
{var state_15149__$1 = state_15149;var statearr_15156_15239 = state_15149__$1;(statearr_15156_15239[2] = null);
(statearr_15156_15239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 33))
{var inst_15108 = (state_15149[12]);var inst_15110 = cljs.core.chunked_seq_QMARK_.call(null,inst_15108);var state_15149__$1 = state_15149;if(inst_15110)
{var statearr_15157_15240 = state_15149__$1;(statearr_15157_15240[1] = 36);
} else
{var statearr_15158_15241 = state_15149__$1;(statearr_15158_15241[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 2))
{var state_15149__$1 = state_15149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15149__$1,4,ch);
} else
{if((state_val_15150 === 34))
{var state_15149__$1 = state_15149;var statearr_15159_15242 = state_15149__$1;(statearr_15159_15242[2] = null);
(statearr_15159_15242[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 3))
{var inst_15147 = (state_15149[2]);var state_15149__$1 = state_15149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15149__$1,inst_15147);
} else
{if((state_val_15150 === 35))
{var inst_15131 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15160_15243 = state_15149__$1;(statearr_15160_15243[2] = inst_15131);
(statearr_15160_15243[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 4))
{var inst_15021 = (state_15149[13]);var inst_15021__$1 = (state_15149[2]);var inst_15022 = (inst_15021__$1 == null);var state_15149__$1 = (function (){var statearr_15161 = state_15149;(statearr_15161[13] = inst_15021__$1);
return statearr_15161;
})();if(cljs.core.truth_(inst_15022))
{var statearr_15162_15244 = state_15149__$1;(statearr_15162_15244[1] = 5);
} else
{var statearr_15163_15245 = state_15149__$1;(statearr_15163_15245[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 36))
{var inst_15108 = (state_15149[12]);var inst_15112 = cljs.core.chunk_first.call(null,inst_15108);var inst_15113 = cljs.core.chunk_rest.call(null,inst_15108);var inst_15114 = cljs.core.count.call(null,inst_15112);var inst_15089 = inst_15113;var inst_15090 = inst_15112;var inst_15091 = inst_15114;var inst_15092 = 0;var state_15149__$1 = (function (){var statearr_15164 = state_15149;(statearr_15164[7] = inst_15091);
(statearr_15164[8] = inst_15092);
(statearr_15164[9] = inst_15090);
(statearr_15164[10] = inst_15089);
return statearr_15164;
})();var statearr_15165_15246 = state_15149__$1;(statearr_15165_15246[2] = null);
(statearr_15165_15246[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 5))
{var inst_15028 = cljs.core.deref.call(null,cs);var inst_15029 = cljs.core.seq.call(null,inst_15028);var inst_15030 = inst_15029;var inst_15031 = null;var inst_15032 = 0;var inst_15033 = 0;var state_15149__$1 = (function (){var statearr_15166 = state_15149;(statearr_15166[14] = inst_15031);
(statearr_15166[15] = inst_15030);
(statearr_15166[16] = inst_15033);
(statearr_15166[17] = inst_15032);
return statearr_15166;
})();var statearr_15167_15247 = state_15149__$1;(statearr_15167_15247[2] = null);
(statearr_15167_15247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 37))
{var inst_15021 = (state_15149[13]);var inst_15108 = (state_15149[12]);var inst_15117 = (state_15149[18]);var inst_15117__$1 = cljs.core.first.call(null,inst_15108);var inst_15118 = cljs.core.async.put_BANG_.call(null,inst_15117__$1,inst_15021,done);var state_15149__$1 = (function (){var statearr_15168 = state_15149;(statearr_15168[18] = inst_15117__$1);
return statearr_15168;
})();if(cljs.core.truth_(inst_15118))
{var statearr_15169_15248 = state_15149__$1;(statearr_15169_15248[1] = 39);
} else
{var statearr_15170_15249 = state_15149__$1;(statearr_15170_15249[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 6))
{var inst_15081 = (state_15149[19]);var inst_15080 = cljs.core.deref.call(null,cs);var inst_15081__$1 = cljs.core.keys.call(null,inst_15080);var inst_15082 = cljs.core.count.call(null,inst_15081__$1);var inst_15083 = cljs.core.reset_BANG_.call(null,dctr,inst_15082);var inst_15088 = cljs.core.seq.call(null,inst_15081__$1);var inst_15089 = inst_15088;var inst_15090 = null;var inst_15091 = 0;var inst_15092 = 0;var state_15149__$1 = (function (){var statearr_15171 = state_15149;(statearr_15171[19] = inst_15081__$1);
(statearr_15171[20] = inst_15083);
(statearr_15171[7] = inst_15091);
(statearr_15171[8] = inst_15092);
(statearr_15171[9] = inst_15090);
(statearr_15171[10] = inst_15089);
return statearr_15171;
})();var statearr_15172_15250 = state_15149__$1;(statearr_15172_15250[2] = null);
(statearr_15172_15250[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 38))
{var inst_15128 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15173_15251 = state_15149__$1;(statearr_15173_15251[2] = inst_15128);
(statearr_15173_15251[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 7))
{var inst_15145 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15174_15252 = state_15149__$1;(statearr_15174_15252[2] = inst_15145);
(statearr_15174_15252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 39))
{var state_15149__$1 = state_15149;var statearr_15175_15253 = state_15149__$1;(statearr_15175_15253[2] = null);
(statearr_15175_15253[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 8))
{var inst_15033 = (state_15149[16]);var inst_15032 = (state_15149[17]);var inst_15035 = (inst_15033 < inst_15032);var inst_15036 = inst_15035;var state_15149__$1 = state_15149;if(cljs.core.truth_(inst_15036))
{var statearr_15176_15254 = state_15149__$1;(statearr_15176_15254[1] = 10);
} else
{var statearr_15177_15255 = state_15149__$1;(statearr_15177_15255[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 40))
{var inst_15117 = (state_15149[18]);var inst_15121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15122 = cljs.core.async.untap_STAR_.call(null,m,inst_15117);var state_15149__$1 = (function (){var statearr_15178 = state_15149;(statearr_15178[21] = inst_15121);
return statearr_15178;
})();var statearr_15179_15256 = state_15149__$1;(statearr_15179_15256[2] = inst_15122);
(statearr_15179_15256[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 9))
{var inst_15078 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15180_15257 = state_15149__$1;(statearr_15180_15257[2] = inst_15078);
(statearr_15180_15257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 41))
{var inst_15108 = (state_15149[12]);var inst_15124 = (state_15149[2]);var inst_15125 = cljs.core.next.call(null,inst_15108);var inst_15089 = inst_15125;var inst_15090 = null;var inst_15091 = 0;var inst_15092 = 0;var state_15149__$1 = (function (){var statearr_15181 = state_15149;(statearr_15181[22] = inst_15124);
(statearr_15181[7] = inst_15091);
(statearr_15181[8] = inst_15092);
(statearr_15181[9] = inst_15090);
(statearr_15181[10] = inst_15089);
return statearr_15181;
})();var statearr_15182_15258 = state_15149__$1;(statearr_15182_15258[2] = null);
(statearr_15182_15258[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 10))
{var inst_15031 = (state_15149[14]);var inst_15033 = (state_15149[16]);var inst_15039 = cljs.core._nth.call(null,inst_15031,inst_15033);var inst_15040 = cljs.core.nth.call(null,inst_15039,0,null);var inst_15041 = cljs.core.nth.call(null,inst_15039,1,null);var state_15149__$1 = (function (){var statearr_15183 = state_15149;(statearr_15183[23] = inst_15040);
return statearr_15183;
})();if(cljs.core.truth_(inst_15041))
{var statearr_15184_15259 = state_15149__$1;(statearr_15184_15259[1] = 13);
} else
{var statearr_15185_15260 = state_15149__$1;(statearr_15185_15260[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 42))
{var state_15149__$1 = state_15149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15149__$1,45,dchan);
} else
{if((state_val_15150 === 11))
{var inst_15030 = (state_15149[15]);var inst_15050 = (state_15149[24]);var inst_15050__$1 = cljs.core.seq.call(null,inst_15030);var state_15149__$1 = (function (){var statearr_15186 = state_15149;(statearr_15186[24] = inst_15050__$1);
return statearr_15186;
})();if(inst_15050__$1)
{var statearr_15187_15261 = state_15149__$1;(statearr_15187_15261[1] = 16);
} else
{var statearr_15188_15262 = state_15149__$1;(statearr_15188_15262[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 43))
{var state_15149__$1 = state_15149;var statearr_15189_15263 = state_15149__$1;(statearr_15189_15263[2] = null);
(statearr_15189_15263[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 12))
{var inst_15076 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15190_15264 = state_15149__$1;(statearr_15190_15264[2] = inst_15076);
(statearr_15190_15264[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 44))
{var inst_15142 = (state_15149[2]);var state_15149__$1 = (function (){var statearr_15191 = state_15149;(statearr_15191[25] = inst_15142);
return statearr_15191;
})();var statearr_15192_15265 = state_15149__$1;(statearr_15192_15265[2] = null);
(statearr_15192_15265[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 13))
{var inst_15040 = (state_15149[23]);var inst_15043 = cljs.core.async.close_BANG_.call(null,inst_15040);var state_15149__$1 = state_15149;var statearr_15193_15266 = state_15149__$1;(statearr_15193_15266[2] = inst_15043);
(statearr_15193_15266[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 45))
{var inst_15139 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15197_15267 = state_15149__$1;(statearr_15197_15267[2] = inst_15139);
(statearr_15197_15267[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 14))
{var state_15149__$1 = state_15149;var statearr_15198_15268 = state_15149__$1;(statearr_15198_15268[2] = null);
(statearr_15198_15268[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 15))
{var inst_15031 = (state_15149[14]);var inst_15030 = (state_15149[15]);var inst_15033 = (state_15149[16]);var inst_15032 = (state_15149[17]);var inst_15046 = (state_15149[2]);var inst_15047 = (inst_15033 + 1);var tmp15194 = inst_15031;var tmp15195 = inst_15030;var tmp15196 = inst_15032;var inst_15030__$1 = tmp15195;var inst_15031__$1 = tmp15194;var inst_15032__$1 = tmp15196;var inst_15033__$1 = inst_15047;var state_15149__$1 = (function (){var statearr_15199 = state_15149;(statearr_15199[14] = inst_15031__$1);
(statearr_15199[15] = inst_15030__$1);
(statearr_15199[16] = inst_15033__$1);
(statearr_15199[17] = inst_15032__$1);
(statearr_15199[26] = inst_15046);
return statearr_15199;
})();var statearr_15200_15269 = state_15149__$1;(statearr_15200_15269[2] = null);
(statearr_15200_15269[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 16))
{var inst_15050 = (state_15149[24]);var inst_15052 = cljs.core.chunked_seq_QMARK_.call(null,inst_15050);var state_15149__$1 = state_15149;if(inst_15052)
{var statearr_15201_15270 = state_15149__$1;(statearr_15201_15270[1] = 19);
} else
{var statearr_15202_15271 = state_15149__$1;(statearr_15202_15271[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 17))
{var state_15149__$1 = state_15149;var statearr_15203_15272 = state_15149__$1;(statearr_15203_15272[2] = null);
(statearr_15203_15272[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 18))
{var inst_15074 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15204_15273 = state_15149__$1;(statearr_15204_15273[2] = inst_15074);
(statearr_15204_15273[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 19))
{var inst_15050 = (state_15149[24]);var inst_15054 = cljs.core.chunk_first.call(null,inst_15050);var inst_15055 = cljs.core.chunk_rest.call(null,inst_15050);var inst_15056 = cljs.core.count.call(null,inst_15054);var inst_15030 = inst_15055;var inst_15031 = inst_15054;var inst_15032 = inst_15056;var inst_15033 = 0;var state_15149__$1 = (function (){var statearr_15205 = state_15149;(statearr_15205[14] = inst_15031);
(statearr_15205[15] = inst_15030);
(statearr_15205[16] = inst_15033);
(statearr_15205[17] = inst_15032);
return statearr_15205;
})();var statearr_15206_15274 = state_15149__$1;(statearr_15206_15274[2] = null);
(statearr_15206_15274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 20))
{var inst_15050 = (state_15149[24]);var inst_15060 = cljs.core.first.call(null,inst_15050);var inst_15061 = cljs.core.nth.call(null,inst_15060,0,null);var inst_15062 = cljs.core.nth.call(null,inst_15060,1,null);var state_15149__$1 = (function (){var statearr_15207 = state_15149;(statearr_15207[27] = inst_15061);
return statearr_15207;
})();if(cljs.core.truth_(inst_15062))
{var statearr_15208_15275 = state_15149__$1;(statearr_15208_15275[1] = 22);
} else
{var statearr_15209_15276 = state_15149__$1;(statearr_15209_15276[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 21))
{var inst_15071 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15210_15277 = state_15149__$1;(statearr_15210_15277[2] = inst_15071);
(statearr_15210_15277[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 22))
{var inst_15061 = (state_15149[27]);var inst_15064 = cljs.core.async.close_BANG_.call(null,inst_15061);var state_15149__$1 = state_15149;var statearr_15211_15278 = state_15149__$1;(statearr_15211_15278[2] = inst_15064);
(statearr_15211_15278[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 23))
{var state_15149__$1 = state_15149;var statearr_15212_15279 = state_15149__$1;(statearr_15212_15279[2] = null);
(statearr_15212_15279[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 24))
{var inst_15050 = (state_15149[24]);var inst_15067 = (state_15149[2]);var inst_15068 = cljs.core.next.call(null,inst_15050);var inst_15030 = inst_15068;var inst_15031 = null;var inst_15032 = 0;var inst_15033 = 0;var state_15149__$1 = (function (){var statearr_15213 = state_15149;(statearr_15213[28] = inst_15067);
(statearr_15213[14] = inst_15031);
(statearr_15213[15] = inst_15030);
(statearr_15213[16] = inst_15033);
(statearr_15213[17] = inst_15032);
return statearr_15213;
})();var statearr_15214_15280 = state_15149__$1;(statearr_15214_15280[2] = null);
(statearr_15214_15280[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 25))
{var inst_15091 = (state_15149[7]);var inst_15092 = (state_15149[8]);var inst_15094 = (inst_15092 < inst_15091);var inst_15095 = inst_15094;var state_15149__$1 = state_15149;if(cljs.core.truth_(inst_15095))
{var statearr_15215_15281 = state_15149__$1;(statearr_15215_15281[1] = 27);
} else
{var statearr_15216_15282 = state_15149__$1;(statearr_15216_15282[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 26))
{var inst_15081 = (state_15149[19]);var inst_15135 = (state_15149[2]);var inst_15136 = cljs.core.seq.call(null,inst_15081);var state_15149__$1 = (function (){var statearr_15217 = state_15149;(statearr_15217[29] = inst_15135);
return statearr_15217;
})();if(inst_15136)
{var statearr_15218_15283 = state_15149__$1;(statearr_15218_15283[1] = 42);
} else
{var statearr_15219_15284 = state_15149__$1;(statearr_15219_15284[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 27))
{var inst_15097 = (state_15149[30]);var inst_15021 = (state_15149[13]);var inst_15092 = (state_15149[8]);var inst_15090 = (state_15149[9]);var inst_15097__$1 = cljs.core._nth.call(null,inst_15090,inst_15092);var inst_15098 = cljs.core.async.put_BANG_.call(null,inst_15097__$1,inst_15021,done);var state_15149__$1 = (function (){var statearr_15220 = state_15149;(statearr_15220[30] = inst_15097__$1);
return statearr_15220;
})();if(cljs.core.truth_(inst_15098))
{var statearr_15221_15285 = state_15149__$1;(statearr_15221_15285[1] = 30);
} else
{var statearr_15222_15286 = state_15149__$1;(statearr_15222_15286[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 28))
{var inst_15089 = (state_15149[10]);var inst_15108 = (state_15149[12]);var inst_15108__$1 = cljs.core.seq.call(null,inst_15089);var state_15149__$1 = (function (){var statearr_15223 = state_15149;(statearr_15223[12] = inst_15108__$1);
return statearr_15223;
})();if(inst_15108__$1)
{var statearr_15224_15287 = state_15149__$1;(statearr_15224_15287[1] = 33);
} else
{var statearr_15225_15288 = state_15149__$1;(statearr_15225_15288[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 29))
{var inst_15133 = (state_15149[2]);var state_15149__$1 = state_15149;var statearr_15226_15289 = state_15149__$1;(statearr_15226_15289[2] = inst_15133);
(statearr_15226_15289[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 30))
{var state_15149__$1 = state_15149;var statearr_15227_15290 = state_15149__$1;(statearr_15227_15290[2] = null);
(statearr_15227_15290[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15150 === 31))
{var inst_15097 = (state_15149[30]);var inst_15101 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15102 = cljs.core.async.untap_STAR_.call(null,m,inst_15097);var state_15149__$1 = (function (){var statearr_15228 = state_15149;(statearr_15228[31] = inst_15101);
return statearr_15228;
})();var statearr_15229_15291 = state_15149__$1;(statearr_15229_15291[2] = inst_15102);
(statearr_15229_15291[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___15237,cs,m,dchan,dctr,done))
;return ((function (switch__10206__auto__,c__10276__auto___15237,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_15233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15233[0] = state_machine__10207__auto__);
(statearr_15233[1] = 1);
return statearr_15233;
});
var state_machine__10207__auto____1 = (function (state_15149){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_15149);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e15234){if((e15234 instanceof Object))
{var ex__10210__auto__ = e15234;var statearr_15235_15292 = state_15149;(statearr_15235_15292[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15293 = state_15149;
state_15149 = G__15293;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_15149){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_15149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___15237,cs,m,dchan,dctr,done))
})();var state__10278__auto__ = (function (){var statearr_15236 = f__10277__auto__.call(null);(statearr_15236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___15237);
return statearr_15236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___15237,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15295 = {};return obj15295;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7862__auto__ = m;if(and__7862__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8501__auto__ = (((m == null))?null:m);return (function (){var or__7874__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15415 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15415 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15416){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15416 = meta15416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15415.cljs$lang$type = true;
cljs.core.async.t15415.cljs$lang$ctorStr = "cljs.core.async/t15415";
cljs.core.async.t15415.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15415");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15417){var self__ = this;
var _15417__$1 = this;return self__.meta15416;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15417,meta15416__$1){var self__ = this;
var _15417__$1 = this;return (new cljs.core.async.t15415(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15416__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15415 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15415(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15416){return (new cljs.core.async.t15415(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15416));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15415(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10276__auto___15534 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___15534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___15534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15487){var state_val_15488 = (state_15487[1]);if((state_val_15488 === 1))
{var inst_15421 = (state_15487[7]);var inst_15421__$1 = calc_state.call(null);var inst_15422 = cljs.core.seq_QMARK_.call(null,inst_15421__$1);var state_15487__$1 = (function (){var statearr_15489 = state_15487;(statearr_15489[7] = inst_15421__$1);
return statearr_15489;
})();if(inst_15422)
{var statearr_15490_15535 = state_15487__$1;(statearr_15490_15535[1] = 2);
} else
{var statearr_15491_15536 = state_15487__$1;(statearr_15491_15536[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 2))
{var inst_15421 = (state_15487[7]);var inst_15424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15421);var state_15487__$1 = state_15487;var statearr_15492_15537 = state_15487__$1;(statearr_15492_15537[2] = inst_15424);
(statearr_15492_15537[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 3))
{var inst_15421 = (state_15487[7]);var state_15487__$1 = state_15487;var statearr_15493_15538 = state_15487__$1;(statearr_15493_15538[2] = inst_15421);
(statearr_15493_15538[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 4))
{var inst_15421 = (state_15487[7]);var inst_15427 = (state_15487[2]);var inst_15428 = cljs.core.get.call(null,inst_15427,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15429 = cljs.core.get.call(null,inst_15427,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15430 = cljs.core.get.call(null,inst_15427,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15431 = inst_15421;var state_15487__$1 = (function (){var statearr_15494 = state_15487;(statearr_15494[8] = inst_15430);
(statearr_15494[9] = inst_15431);
(statearr_15494[10] = inst_15428);
(statearr_15494[11] = inst_15429);
return statearr_15494;
})();var statearr_15495_15539 = state_15487__$1;(statearr_15495_15539[2] = null);
(statearr_15495_15539[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 5))
{var inst_15431 = (state_15487[9]);var inst_15434 = cljs.core.seq_QMARK_.call(null,inst_15431);var state_15487__$1 = state_15487;if(inst_15434)
{var statearr_15496_15540 = state_15487__$1;(statearr_15496_15540[1] = 7);
} else
{var statearr_15497_15541 = state_15487__$1;(statearr_15497_15541[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 6))
{var inst_15485 = (state_15487[2]);var state_15487__$1 = state_15487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15487__$1,inst_15485);
} else
{if((state_val_15488 === 7))
{var inst_15431 = (state_15487[9]);var inst_15436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15431);var state_15487__$1 = state_15487;var statearr_15498_15542 = state_15487__$1;(statearr_15498_15542[2] = inst_15436);
(statearr_15498_15542[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 8))
{var inst_15431 = (state_15487[9]);var state_15487__$1 = state_15487;var statearr_15499_15543 = state_15487__$1;(statearr_15499_15543[2] = inst_15431);
(statearr_15499_15543[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 9))
{var inst_15439 = (state_15487[12]);var inst_15439__$1 = (state_15487[2]);var inst_15440 = cljs.core.get.call(null,inst_15439__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15441 = cljs.core.get.call(null,inst_15439__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15442 = cljs.core.get.call(null,inst_15439__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15487__$1 = (function (){var statearr_15500 = state_15487;(statearr_15500[12] = inst_15439__$1);
(statearr_15500[13] = inst_15441);
(statearr_15500[14] = inst_15442);
return statearr_15500;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15487__$1,10,inst_15440);
} else
{if((state_val_15488 === 10))
{var inst_15447 = (state_15487[15]);var inst_15446 = (state_15487[16]);var inst_15445 = (state_15487[2]);var inst_15446__$1 = cljs.core.nth.call(null,inst_15445,0,null);var inst_15447__$1 = cljs.core.nth.call(null,inst_15445,1,null);var inst_15448 = (inst_15446__$1 == null);var inst_15449 = cljs.core._EQ_.call(null,inst_15447__$1,change);var inst_15450 = (inst_15448) || (inst_15449);var state_15487__$1 = (function (){var statearr_15501 = state_15487;(statearr_15501[15] = inst_15447__$1);
(statearr_15501[16] = inst_15446__$1);
return statearr_15501;
})();if(cljs.core.truth_(inst_15450))
{var statearr_15502_15544 = state_15487__$1;(statearr_15502_15544[1] = 11);
} else
{var statearr_15503_15545 = state_15487__$1;(statearr_15503_15545[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 11))
{var inst_15446 = (state_15487[16]);var inst_15452 = (inst_15446 == null);var state_15487__$1 = state_15487;if(cljs.core.truth_(inst_15452))
{var statearr_15504_15546 = state_15487__$1;(statearr_15504_15546[1] = 14);
} else
{var statearr_15505_15547 = state_15487__$1;(statearr_15505_15547[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 12))
{var inst_15461 = (state_15487[17]);var inst_15447 = (state_15487[15]);var inst_15442 = (state_15487[14]);var inst_15461__$1 = inst_15442.call(null,inst_15447);var state_15487__$1 = (function (){var statearr_15506 = state_15487;(statearr_15506[17] = inst_15461__$1);
return statearr_15506;
})();if(cljs.core.truth_(inst_15461__$1))
{var statearr_15507_15548 = state_15487__$1;(statearr_15507_15548[1] = 17);
} else
{var statearr_15508_15549 = state_15487__$1;(statearr_15508_15549[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 13))
{var inst_15483 = (state_15487[2]);var state_15487__$1 = state_15487;var statearr_15509_15550 = state_15487__$1;(statearr_15509_15550[2] = inst_15483);
(statearr_15509_15550[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 14))
{var inst_15447 = (state_15487[15]);var inst_15454 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15447);var state_15487__$1 = state_15487;var statearr_15510_15551 = state_15487__$1;(statearr_15510_15551[2] = inst_15454);
(statearr_15510_15551[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 15))
{var state_15487__$1 = state_15487;var statearr_15511_15552 = state_15487__$1;(statearr_15511_15552[2] = null);
(statearr_15511_15552[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 16))
{var inst_15457 = (state_15487[2]);var inst_15458 = calc_state.call(null);var inst_15431 = inst_15458;var state_15487__$1 = (function (){var statearr_15512 = state_15487;(statearr_15512[18] = inst_15457);
(statearr_15512[9] = inst_15431);
return statearr_15512;
})();var statearr_15513_15553 = state_15487__$1;(statearr_15513_15553[2] = null);
(statearr_15513_15553[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 17))
{var inst_15461 = (state_15487[17]);var state_15487__$1 = state_15487;var statearr_15514_15554 = state_15487__$1;(statearr_15514_15554[2] = inst_15461);
(statearr_15514_15554[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 18))
{var inst_15447 = (state_15487[15]);var inst_15441 = (state_15487[13]);var inst_15442 = (state_15487[14]);var inst_15464 = cljs.core.empty_QMARK_.call(null,inst_15442);var inst_15465 = inst_15441.call(null,inst_15447);var inst_15466 = cljs.core.not.call(null,inst_15465);var inst_15467 = (inst_15464) && (inst_15466);var state_15487__$1 = state_15487;var statearr_15515_15555 = state_15487__$1;(statearr_15515_15555[2] = inst_15467);
(statearr_15515_15555[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 19))
{var inst_15469 = (state_15487[2]);var state_15487__$1 = state_15487;if(cljs.core.truth_(inst_15469))
{var statearr_15516_15556 = state_15487__$1;(statearr_15516_15556[1] = 20);
} else
{var statearr_15517_15557 = state_15487__$1;(statearr_15517_15557[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 20))
{var inst_15446 = (state_15487[16]);var state_15487__$1 = state_15487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15487__$1,23,out,inst_15446);
} else
{if((state_val_15488 === 21))
{var inst_15439 = (state_15487[12]);var inst_15431 = inst_15439;var state_15487__$1 = (function (){var statearr_15518 = state_15487;(statearr_15518[9] = inst_15431);
return statearr_15518;
})();var statearr_15519_15558 = state_15487__$1;(statearr_15519_15558[2] = null);
(statearr_15519_15558[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 22))
{var inst_15481 = (state_15487[2]);var state_15487__$1 = state_15487;var statearr_15520_15559 = state_15487__$1;(statearr_15520_15559[2] = inst_15481);
(statearr_15520_15559[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 23))
{var inst_15472 = (state_15487[2]);var state_15487__$1 = state_15487;if(cljs.core.truth_(inst_15472))
{var statearr_15521_15560 = state_15487__$1;(statearr_15521_15560[1] = 24);
} else
{var statearr_15522_15561 = state_15487__$1;(statearr_15522_15561[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 24))
{var inst_15439 = (state_15487[12]);var inst_15431 = inst_15439;var state_15487__$1 = (function (){var statearr_15523 = state_15487;(statearr_15523[9] = inst_15431);
return statearr_15523;
})();var statearr_15524_15562 = state_15487__$1;(statearr_15524_15562[2] = null);
(statearr_15524_15562[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 25))
{var state_15487__$1 = state_15487;var statearr_15525_15563 = state_15487__$1;(statearr_15525_15563[2] = null);
(statearr_15525_15563[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15488 === 26))
{var inst_15477 = (state_15487[2]);var state_15487__$1 = state_15487;var statearr_15526_15564 = state_15487__$1;(statearr_15526_15564[2] = inst_15477);
(statearr_15526_15564[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___15534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10206__auto__,c__10276__auto___15534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_15530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15530[0] = state_machine__10207__auto__);
(statearr_15530[1] = 1);
return statearr_15530;
});
var state_machine__10207__auto____1 = (function (state_15487){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_15487);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e15531){if((e15531 instanceof Object))
{var ex__10210__auto__ = e15531;var statearr_15532_15565 = state_15487;(statearr_15532_15565[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15566 = state_15487;
state_15487 = G__15566;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_15487){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_15487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___15534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10278__auto__ = (function (){var statearr_15533 = f__10277__auto__.call(null);(statearr_15533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___15534);
return statearr_15533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___15534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15568 = {};return obj15568;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7862__auto__ = p;if(and__7862__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7862__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8501__auto__ = (((p == null))?null:p);return (function (){var or__7874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8501__auto__)]);if(or__7874__auto__)
{return or__7874__auto__;
} else
{var or__7874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7874__auto____$1)
{return or__7874__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7874__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7874__auto__))
{return or__7874__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7874__auto__,mults){
return (function (p1__15569_SHARP_){if(cljs.core.truth_(p1__15569_SHARP_.call(null,topic)))
{return p1__15569_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15569_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7874__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15684 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15685){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15685 = meta15685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15684.cljs$lang$type = true;
cljs.core.async.t15684.cljs$lang$ctorStr = "cljs.core.async/t15684";
cljs.core.async.t15684.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8441__auto__,writer__8442__auto__,opt__8443__auto__){return cljs.core._write.call(null,writer__8442__auto__,"cljs.core.async/t15684");
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15686){var self__ = this;
var _15686__$1 = this;return self__.meta15685;
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15686,meta15685__$1){var self__ = this;
var _15686__$1 = this;return (new cljs.core.async.t15684(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15685__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15684 = ((function (mults,ensure_mult){
return (function __GT_t15684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15685){return (new cljs.core.async.t15684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15685));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15684(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10276__auto___15798 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___15798,mults,ensure_mult,p){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___15798,mults,ensure_mult,p){
return (function (state_15754){var state_val_15755 = (state_15754[1]);if((state_val_15755 === 1))
{var state_15754__$1 = state_15754;var statearr_15756_15799 = state_15754__$1;(statearr_15756_15799[2] = null);
(statearr_15756_15799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 2))
{var state_15754__$1 = state_15754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15754__$1,4,ch);
} else
{if((state_val_15755 === 3))
{var inst_15752 = (state_15754[2]);var state_15754__$1 = state_15754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15754__$1,inst_15752);
} else
{if((state_val_15755 === 4))
{var inst_15689 = (state_15754[7]);var inst_15689__$1 = (state_15754[2]);var inst_15690 = (inst_15689__$1 == null);var state_15754__$1 = (function (){var statearr_15757 = state_15754;(statearr_15757[7] = inst_15689__$1);
return statearr_15757;
})();if(cljs.core.truth_(inst_15690))
{var statearr_15758_15800 = state_15754__$1;(statearr_15758_15800[1] = 5);
} else
{var statearr_15759_15801 = state_15754__$1;(statearr_15759_15801[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 5))
{var inst_15696 = cljs.core.deref.call(null,mults);var inst_15697 = cljs.core.vals.call(null,inst_15696);var inst_15698 = cljs.core.seq.call(null,inst_15697);var inst_15699 = inst_15698;var inst_15700 = null;var inst_15701 = 0;var inst_15702 = 0;var state_15754__$1 = (function (){var statearr_15760 = state_15754;(statearr_15760[8] = inst_15701);
(statearr_15760[9] = inst_15700);
(statearr_15760[10] = inst_15699);
(statearr_15760[11] = inst_15702);
return statearr_15760;
})();var statearr_15761_15802 = state_15754__$1;(statearr_15761_15802[2] = null);
(statearr_15761_15802[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 6))
{var inst_15737 = (state_15754[12]);var inst_15689 = (state_15754[7]);var inst_15737__$1 = topic_fn.call(null,inst_15689);var inst_15738 = cljs.core.deref.call(null,mults);var inst_15739 = cljs.core.get.call(null,inst_15738,inst_15737__$1);var inst_15740 = cljs.core.async.muxch_STAR_.call(null,inst_15739);var state_15754__$1 = (function (){var statearr_15762 = state_15754;(statearr_15762[12] = inst_15737__$1);
return statearr_15762;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15754__$1,19,inst_15740,inst_15689);
} else
{if((state_val_15755 === 7))
{var inst_15750 = (state_15754[2]);var state_15754__$1 = state_15754;var statearr_15763_15803 = state_15754__$1;(statearr_15763_15803[2] = inst_15750);
(statearr_15763_15803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 8))
{var inst_15701 = (state_15754[8]);var inst_15702 = (state_15754[11]);var inst_15704 = (inst_15702 < inst_15701);var inst_15705 = inst_15704;var state_15754__$1 = state_15754;if(cljs.core.truth_(inst_15705))
{var statearr_15767_15804 = state_15754__$1;(statearr_15767_15804[1] = 10);
} else
{var statearr_15768_15805 = state_15754__$1;(statearr_15768_15805[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 9))
{var inst_15735 = (state_15754[2]);var state_15754__$1 = state_15754;var statearr_15769_15806 = state_15754__$1;(statearr_15769_15806[2] = inst_15735);
(statearr_15769_15806[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 10))
{var inst_15701 = (state_15754[8]);var inst_15700 = (state_15754[9]);var inst_15699 = (state_15754[10]);var inst_15702 = (state_15754[11]);var inst_15707 = cljs.core._nth.call(null,inst_15700,inst_15702);var inst_15708 = cljs.core.async.muxch_STAR_.call(null,inst_15707);var inst_15709 = cljs.core.async.close_BANG_.call(null,inst_15708);var inst_15710 = (inst_15702 + 1);var tmp15764 = inst_15701;var tmp15765 = inst_15700;var tmp15766 = inst_15699;var inst_15699__$1 = tmp15766;var inst_15700__$1 = tmp15765;var inst_15701__$1 = tmp15764;var inst_15702__$1 = inst_15710;var state_15754__$1 = (function (){var statearr_15770 = state_15754;(statearr_15770[13] = inst_15709);
(statearr_15770[8] = inst_15701__$1);
(statearr_15770[9] = inst_15700__$1);
(statearr_15770[10] = inst_15699__$1);
(statearr_15770[11] = inst_15702__$1);
return statearr_15770;
})();var statearr_15771_15807 = state_15754__$1;(statearr_15771_15807[2] = null);
(statearr_15771_15807[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 11))
{var inst_15699 = (state_15754[10]);var inst_15713 = (state_15754[14]);var inst_15713__$1 = cljs.core.seq.call(null,inst_15699);var state_15754__$1 = (function (){var statearr_15772 = state_15754;(statearr_15772[14] = inst_15713__$1);
return statearr_15772;
})();if(inst_15713__$1)
{var statearr_15773_15808 = state_15754__$1;(statearr_15773_15808[1] = 13);
} else
{var statearr_15774_15809 = state_15754__$1;(statearr_15774_15809[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 12))
{var inst_15733 = (state_15754[2]);var state_15754__$1 = state_15754;var statearr_15775_15810 = state_15754__$1;(statearr_15775_15810[2] = inst_15733);
(statearr_15775_15810[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 13))
{var inst_15713 = (state_15754[14]);var inst_15715 = cljs.core.chunked_seq_QMARK_.call(null,inst_15713);var state_15754__$1 = state_15754;if(inst_15715)
{var statearr_15776_15811 = state_15754__$1;(statearr_15776_15811[1] = 16);
} else
{var statearr_15777_15812 = state_15754__$1;(statearr_15777_15812[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 14))
{var state_15754__$1 = state_15754;var statearr_15778_15813 = state_15754__$1;(statearr_15778_15813[2] = null);
(statearr_15778_15813[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 15))
{var inst_15731 = (state_15754[2]);var state_15754__$1 = state_15754;var statearr_15779_15814 = state_15754__$1;(statearr_15779_15814[2] = inst_15731);
(statearr_15779_15814[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 16))
{var inst_15713 = (state_15754[14]);var inst_15717 = cljs.core.chunk_first.call(null,inst_15713);var inst_15718 = cljs.core.chunk_rest.call(null,inst_15713);var inst_15719 = cljs.core.count.call(null,inst_15717);var inst_15699 = inst_15718;var inst_15700 = inst_15717;var inst_15701 = inst_15719;var inst_15702 = 0;var state_15754__$1 = (function (){var statearr_15780 = state_15754;(statearr_15780[8] = inst_15701);
(statearr_15780[9] = inst_15700);
(statearr_15780[10] = inst_15699);
(statearr_15780[11] = inst_15702);
return statearr_15780;
})();var statearr_15781_15815 = state_15754__$1;(statearr_15781_15815[2] = null);
(statearr_15781_15815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 17))
{var inst_15713 = (state_15754[14]);var inst_15722 = cljs.core.first.call(null,inst_15713);var inst_15723 = cljs.core.async.muxch_STAR_.call(null,inst_15722);var inst_15724 = cljs.core.async.close_BANG_.call(null,inst_15723);var inst_15725 = cljs.core.next.call(null,inst_15713);var inst_15699 = inst_15725;var inst_15700 = null;var inst_15701 = 0;var inst_15702 = 0;var state_15754__$1 = (function (){var statearr_15782 = state_15754;(statearr_15782[8] = inst_15701);
(statearr_15782[9] = inst_15700);
(statearr_15782[15] = inst_15724);
(statearr_15782[10] = inst_15699);
(statearr_15782[11] = inst_15702);
return statearr_15782;
})();var statearr_15783_15816 = state_15754__$1;(statearr_15783_15816[2] = null);
(statearr_15783_15816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 18))
{var inst_15728 = (state_15754[2]);var state_15754__$1 = state_15754;var statearr_15784_15817 = state_15754__$1;(statearr_15784_15817[2] = inst_15728);
(statearr_15784_15817[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 19))
{var inst_15742 = (state_15754[2]);var state_15754__$1 = state_15754;if(cljs.core.truth_(inst_15742))
{var statearr_15785_15818 = state_15754__$1;(statearr_15785_15818[1] = 20);
} else
{var statearr_15786_15819 = state_15754__$1;(statearr_15786_15819[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 20))
{var state_15754__$1 = state_15754;var statearr_15787_15820 = state_15754__$1;(statearr_15787_15820[2] = null);
(statearr_15787_15820[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 21))
{var inst_15737 = (state_15754[12]);var inst_15745 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15737);var state_15754__$1 = state_15754;var statearr_15788_15821 = state_15754__$1;(statearr_15788_15821[2] = inst_15745);
(statearr_15788_15821[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15755 === 22))
{var inst_15747 = (state_15754[2]);var state_15754__$1 = (function (){var statearr_15789 = state_15754;(statearr_15789[16] = inst_15747);
return statearr_15789;
})();var statearr_15790_15822 = state_15754__$1;(statearr_15790_15822[2] = null);
(statearr_15790_15822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___15798,mults,ensure_mult,p))
;return ((function (switch__10206__auto__,c__10276__auto___15798,mults,ensure_mult,p){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_15794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15794[0] = state_machine__10207__auto__);
(statearr_15794[1] = 1);
return statearr_15794;
});
var state_machine__10207__auto____1 = (function (state_15754){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_15754);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e15795){if((e15795 instanceof Object))
{var ex__10210__auto__ = e15795;var statearr_15796_15823 = state_15754;(statearr_15796_15823[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15824 = state_15754;
state_15754 = G__15824;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_15754){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_15754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___15798,mults,ensure_mult,p))
})();var state__10278__auto__ = (function (){var statearr_15797 = f__10277__auto__.call(null);(statearr_15797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___15798);
return statearr_15797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___15798,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10276__auto___15961 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___15961,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___15961,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15931){var state_val_15932 = (state_15931[1]);if((state_val_15932 === 1))
{var state_15931__$1 = state_15931;var statearr_15933_15962 = state_15931__$1;(statearr_15933_15962[2] = null);
(statearr_15933_15962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 2))
{var inst_15894 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15895 = 0;var state_15931__$1 = (function (){var statearr_15934 = state_15931;(statearr_15934[7] = inst_15894);
(statearr_15934[8] = inst_15895);
return statearr_15934;
})();var statearr_15935_15963 = state_15931__$1;(statearr_15935_15963[2] = null);
(statearr_15935_15963[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 3))
{var inst_15929 = (state_15931[2]);var state_15931__$1 = state_15931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15931__$1,inst_15929);
} else
{if((state_val_15932 === 4))
{var inst_15895 = (state_15931[8]);var inst_15897 = (inst_15895 < cnt);var state_15931__$1 = state_15931;if(cljs.core.truth_(inst_15897))
{var statearr_15936_15964 = state_15931__$1;(statearr_15936_15964[1] = 6);
} else
{var statearr_15937_15965 = state_15931__$1;(statearr_15937_15965[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 5))
{var inst_15915 = (state_15931[2]);var state_15931__$1 = (function (){var statearr_15938 = state_15931;(statearr_15938[9] = inst_15915);
return statearr_15938;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15931__$1,12,dchan);
} else
{if((state_val_15932 === 6))
{var state_15931__$1 = state_15931;var statearr_15939_15966 = state_15931__$1;(statearr_15939_15966[2] = null);
(statearr_15939_15966[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 7))
{var state_15931__$1 = state_15931;var statearr_15940_15967 = state_15931__$1;(statearr_15940_15967[2] = null);
(statearr_15940_15967[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 8))
{var inst_15913 = (state_15931[2]);var state_15931__$1 = state_15931;var statearr_15941_15968 = state_15931__$1;(statearr_15941_15968[2] = inst_15913);
(statearr_15941_15968[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 9))
{var inst_15895 = (state_15931[8]);var inst_15908 = (state_15931[2]);var inst_15909 = (inst_15895 + 1);var inst_15895__$1 = inst_15909;var state_15931__$1 = (function (){var statearr_15942 = state_15931;(statearr_15942[8] = inst_15895__$1);
(statearr_15942[10] = inst_15908);
return statearr_15942;
})();var statearr_15943_15969 = state_15931__$1;(statearr_15943_15969[2] = null);
(statearr_15943_15969[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 10))
{var inst_15899 = (state_15931[2]);var inst_15900 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15931__$1 = (function (){var statearr_15944 = state_15931;(statearr_15944[11] = inst_15899);
return statearr_15944;
})();var statearr_15945_15970 = state_15931__$1;(statearr_15945_15970[2] = inst_15900);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15931__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 11))
{var inst_15895 = (state_15931[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15931,10,Object,null,9);var inst_15904 = chs__$1.call(null,inst_15895);var inst_15905 = done.call(null,inst_15895);var inst_15906 = cljs.core.async.take_BANG_.call(null,inst_15904,inst_15905);var state_15931__$1 = state_15931;var statearr_15946_15971 = state_15931__$1;(statearr_15946_15971[2] = inst_15906);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15931__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 12))
{var inst_15917 = (state_15931[12]);var inst_15917__$1 = (state_15931[2]);var inst_15918 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15917__$1);var state_15931__$1 = (function (){var statearr_15947 = state_15931;(statearr_15947[12] = inst_15917__$1);
return statearr_15947;
})();if(cljs.core.truth_(inst_15918))
{var statearr_15948_15972 = state_15931__$1;(statearr_15948_15972[1] = 13);
} else
{var statearr_15949_15973 = state_15931__$1;(statearr_15949_15973[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 13))
{var inst_15920 = cljs.core.async.close_BANG_.call(null,out);var state_15931__$1 = state_15931;var statearr_15950_15974 = state_15931__$1;(statearr_15950_15974[2] = inst_15920);
(statearr_15950_15974[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 14))
{var inst_15917 = (state_15931[12]);var inst_15922 = cljs.core.apply.call(null,f,inst_15917);var state_15931__$1 = state_15931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15931__$1,16,out,inst_15922);
} else
{if((state_val_15932 === 15))
{var inst_15927 = (state_15931[2]);var state_15931__$1 = state_15931;var statearr_15951_15975 = state_15931__$1;(statearr_15951_15975[2] = inst_15927);
(statearr_15951_15975[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15932 === 16))
{var inst_15924 = (state_15931[2]);var state_15931__$1 = (function (){var statearr_15952 = state_15931;(statearr_15952[13] = inst_15924);
return statearr_15952;
})();var statearr_15953_15976 = state_15931__$1;(statearr_15953_15976[2] = null);
(statearr_15953_15976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___15961,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10206__auto__,c__10276__auto___15961,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_15957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15957[0] = state_machine__10207__auto__);
(statearr_15957[1] = 1);
return statearr_15957;
});
var state_machine__10207__auto____1 = (function (state_15931){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_15931);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e15958){if((e15958 instanceof Object))
{var ex__10210__auto__ = e15958;var statearr_15959_15977 = state_15931;(statearr_15959_15977[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15978 = state_15931;
state_15931 = G__15978;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_15931){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_15931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___15961,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10278__auto__ = (function (){var statearr_15960 = f__10277__auto__.call(null);(statearr_15960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___15961);
return statearr_15960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___15961,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10276__auto___16086 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___16086,out){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___16086,out){
return (function (state_16062){var state_val_16063 = (state_16062[1]);if((state_val_16063 === 1))
{var inst_16033 = cljs.core.vec.call(null,chs);var inst_16034 = inst_16033;var state_16062__$1 = (function (){var statearr_16064 = state_16062;(statearr_16064[7] = inst_16034);
return statearr_16064;
})();var statearr_16065_16087 = state_16062__$1;(statearr_16065_16087[2] = null);
(statearr_16065_16087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16063 === 2))
{var inst_16034 = (state_16062[7]);var inst_16036 = cljs.core.count.call(null,inst_16034);var inst_16037 = (inst_16036 > 0);var state_16062__$1 = state_16062;if(cljs.core.truth_(inst_16037))
{var statearr_16066_16088 = state_16062__$1;(statearr_16066_16088[1] = 4);
} else
{var statearr_16067_16089 = state_16062__$1;(statearr_16067_16089[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16063 === 3))
{var inst_16060 = (state_16062[2]);var state_16062__$1 = state_16062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16062__$1,inst_16060);
} else
{if((state_val_16063 === 4))
{var inst_16034 = (state_16062[7]);var state_16062__$1 = state_16062;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16062__$1,7,inst_16034);
} else
{if((state_val_16063 === 5))
{var inst_16056 = cljs.core.async.close_BANG_.call(null,out);var state_16062__$1 = state_16062;var statearr_16068_16090 = state_16062__$1;(statearr_16068_16090[2] = inst_16056);
(statearr_16068_16090[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16063 === 6))
{var inst_16058 = (state_16062[2]);var state_16062__$1 = state_16062;var statearr_16069_16091 = state_16062__$1;(statearr_16069_16091[2] = inst_16058);
(statearr_16069_16091[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16063 === 7))
{var inst_16041 = (state_16062[8]);var inst_16042 = (state_16062[9]);var inst_16041__$1 = (state_16062[2]);var inst_16042__$1 = cljs.core.nth.call(null,inst_16041__$1,0,null);var inst_16043 = cljs.core.nth.call(null,inst_16041__$1,1,null);var inst_16044 = (inst_16042__$1 == null);var state_16062__$1 = (function (){var statearr_16070 = state_16062;(statearr_16070[8] = inst_16041__$1);
(statearr_16070[10] = inst_16043);
(statearr_16070[9] = inst_16042__$1);
return statearr_16070;
})();if(cljs.core.truth_(inst_16044))
{var statearr_16071_16092 = state_16062__$1;(statearr_16071_16092[1] = 8);
} else
{var statearr_16072_16093 = state_16062__$1;(statearr_16072_16093[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16063 === 8))
{var inst_16041 = (state_16062[8]);var inst_16034 = (state_16062[7]);var inst_16043 = (state_16062[10]);var inst_16042 = (state_16062[9]);var inst_16046 = (function (){var c = inst_16043;var v = inst_16042;var vec__16039 = inst_16041;var cs = inst_16034;return ((function (c,v,vec__16039,cs,inst_16041,inst_16034,inst_16043,inst_16042,state_val_16063,c__10276__auto___16086,out){
return (function (p1__15979_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15979_SHARP_);
});
;})(c,v,vec__16039,cs,inst_16041,inst_16034,inst_16043,inst_16042,state_val_16063,c__10276__auto___16086,out))
})();var inst_16047 = cljs.core.filterv.call(null,inst_16046,inst_16034);var inst_16034__$1 = inst_16047;var state_16062__$1 = (function (){var statearr_16073 = state_16062;(statearr_16073[7] = inst_16034__$1);
return statearr_16073;
})();var statearr_16074_16094 = state_16062__$1;(statearr_16074_16094[2] = null);
(statearr_16074_16094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16063 === 9))
{var inst_16042 = (state_16062[9]);var state_16062__$1 = state_16062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16062__$1,11,out,inst_16042);
} else
{if((state_val_16063 === 10))
{var inst_16054 = (state_16062[2]);var state_16062__$1 = state_16062;var statearr_16076_16095 = state_16062__$1;(statearr_16076_16095[2] = inst_16054);
(statearr_16076_16095[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16063 === 11))
{var inst_16034 = (state_16062[7]);var inst_16051 = (state_16062[2]);var tmp16075 = inst_16034;var inst_16034__$1 = tmp16075;var state_16062__$1 = (function (){var statearr_16077 = state_16062;(statearr_16077[11] = inst_16051);
(statearr_16077[7] = inst_16034__$1);
return statearr_16077;
})();var statearr_16078_16096 = state_16062__$1;(statearr_16078_16096[2] = null);
(statearr_16078_16096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___16086,out))
;return ((function (switch__10206__auto__,c__10276__auto___16086,out){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_16082 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16082[0] = state_machine__10207__auto__);
(statearr_16082[1] = 1);
return statearr_16082;
});
var state_machine__10207__auto____1 = (function (state_16062){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_16062);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e16083){if((e16083 instanceof Object))
{var ex__10210__auto__ = e16083;var statearr_16084_16097 = state_16062;(statearr_16084_16097[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16062);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16098 = state_16062;
state_16062 = G__16098;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_16062){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_16062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___16086,out))
})();var state__10278__auto__ = (function (){var statearr_16085 = f__10277__auto__.call(null);(statearr_16085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___16086);
return statearr_16085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___16086,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10276__auto___16191 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___16191,out){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___16191,out){
return (function (state_16168){var state_val_16169 = (state_16168[1]);if((state_val_16169 === 1))
{var inst_16145 = 0;var state_16168__$1 = (function (){var statearr_16170 = state_16168;(statearr_16170[7] = inst_16145);
return statearr_16170;
})();var statearr_16171_16192 = state_16168__$1;(statearr_16171_16192[2] = null);
(statearr_16171_16192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16169 === 2))
{var inst_16145 = (state_16168[7]);var inst_16147 = (inst_16145 < n);var state_16168__$1 = state_16168;if(cljs.core.truth_(inst_16147))
{var statearr_16172_16193 = state_16168__$1;(statearr_16172_16193[1] = 4);
} else
{var statearr_16173_16194 = state_16168__$1;(statearr_16173_16194[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16169 === 3))
{var inst_16165 = (state_16168[2]);var inst_16166 = cljs.core.async.close_BANG_.call(null,out);var state_16168__$1 = (function (){var statearr_16174 = state_16168;(statearr_16174[8] = inst_16165);
return statearr_16174;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16168__$1,inst_16166);
} else
{if((state_val_16169 === 4))
{var state_16168__$1 = state_16168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16168__$1,7,ch);
} else
{if((state_val_16169 === 5))
{var state_16168__$1 = state_16168;var statearr_16175_16195 = state_16168__$1;(statearr_16175_16195[2] = null);
(statearr_16175_16195[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16169 === 6))
{var inst_16163 = (state_16168[2]);var state_16168__$1 = state_16168;var statearr_16176_16196 = state_16168__$1;(statearr_16176_16196[2] = inst_16163);
(statearr_16176_16196[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16169 === 7))
{var inst_16150 = (state_16168[9]);var inst_16150__$1 = (state_16168[2]);var inst_16151 = (inst_16150__$1 == null);var inst_16152 = cljs.core.not.call(null,inst_16151);var state_16168__$1 = (function (){var statearr_16177 = state_16168;(statearr_16177[9] = inst_16150__$1);
return statearr_16177;
})();if(inst_16152)
{var statearr_16178_16197 = state_16168__$1;(statearr_16178_16197[1] = 8);
} else
{var statearr_16179_16198 = state_16168__$1;(statearr_16179_16198[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16169 === 8))
{var inst_16150 = (state_16168[9]);var state_16168__$1 = state_16168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16168__$1,11,out,inst_16150);
} else
{if((state_val_16169 === 9))
{var state_16168__$1 = state_16168;var statearr_16180_16199 = state_16168__$1;(statearr_16180_16199[2] = null);
(statearr_16180_16199[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16169 === 10))
{var inst_16160 = (state_16168[2]);var state_16168__$1 = state_16168;var statearr_16181_16200 = state_16168__$1;(statearr_16181_16200[2] = inst_16160);
(statearr_16181_16200[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16169 === 11))
{var inst_16145 = (state_16168[7]);var inst_16155 = (state_16168[2]);var inst_16156 = (inst_16145 + 1);var inst_16145__$1 = inst_16156;var state_16168__$1 = (function (){var statearr_16182 = state_16168;(statearr_16182[7] = inst_16145__$1);
(statearr_16182[10] = inst_16155);
return statearr_16182;
})();var statearr_16183_16201 = state_16168__$1;(statearr_16183_16201[2] = null);
(statearr_16183_16201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___16191,out))
;return ((function (switch__10206__auto__,c__10276__auto___16191,out){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_16187 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16187[0] = state_machine__10207__auto__);
(statearr_16187[1] = 1);
return statearr_16187;
});
var state_machine__10207__auto____1 = (function (state_16168){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_16168);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e16188){if((e16188 instanceof Object))
{var ex__10210__auto__ = e16188;var statearr_16189_16202 = state_16168;(statearr_16189_16202[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16203 = state_16168;
state_16168 = G__16203;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_16168){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_16168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___16191,out))
})();var state__10278__auto__ = (function (){var statearr_16190 = f__10277__auto__.call(null);(statearr_16190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___16191);
return statearr_16190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___16191,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10276__auto___16300 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___16300,out){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___16300,out){
return (function (state_16275){var state_val_16276 = (state_16275[1]);if((state_val_16276 === 1))
{var inst_16252 = null;var state_16275__$1 = (function (){var statearr_16277 = state_16275;(statearr_16277[7] = inst_16252);
return statearr_16277;
})();var statearr_16278_16301 = state_16275__$1;(statearr_16278_16301[2] = null);
(statearr_16278_16301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16276 === 2))
{var state_16275__$1 = state_16275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16275__$1,4,ch);
} else
{if((state_val_16276 === 3))
{var inst_16272 = (state_16275[2]);var inst_16273 = cljs.core.async.close_BANG_.call(null,out);var state_16275__$1 = (function (){var statearr_16279 = state_16275;(statearr_16279[8] = inst_16272);
return statearr_16279;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16275__$1,inst_16273);
} else
{if((state_val_16276 === 4))
{var inst_16255 = (state_16275[9]);var inst_16255__$1 = (state_16275[2]);var inst_16256 = (inst_16255__$1 == null);var inst_16257 = cljs.core.not.call(null,inst_16256);var state_16275__$1 = (function (){var statearr_16280 = state_16275;(statearr_16280[9] = inst_16255__$1);
return statearr_16280;
})();if(inst_16257)
{var statearr_16281_16302 = state_16275__$1;(statearr_16281_16302[1] = 5);
} else
{var statearr_16282_16303 = state_16275__$1;(statearr_16282_16303[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16276 === 5))
{var inst_16255 = (state_16275[9]);var inst_16252 = (state_16275[7]);var inst_16259 = cljs.core._EQ_.call(null,inst_16255,inst_16252);var state_16275__$1 = state_16275;if(inst_16259)
{var statearr_16283_16304 = state_16275__$1;(statearr_16283_16304[1] = 8);
} else
{var statearr_16284_16305 = state_16275__$1;(statearr_16284_16305[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16276 === 6))
{var state_16275__$1 = state_16275;var statearr_16286_16306 = state_16275__$1;(statearr_16286_16306[2] = null);
(statearr_16286_16306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16276 === 7))
{var inst_16270 = (state_16275[2]);var state_16275__$1 = state_16275;var statearr_16287_16307 = state_16275__$1;(statearr_16287_16307[2] = inst_16270);
(statearr_16287_16307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16276 === 8))
{var inst_16252 = (state_16275[7]);var tmp16285 = inst_16252;var inst_16252__$1 = tmp16285;var state_16275__$1 = (function (){var statearr_16288 = state_16275;(statearr_16288[7] = inst_16252__$1);
return statearr_16288;
})();var statearr_16289_16308 = state_16275__$1;(statearr_16289_16308[2] = null);
(statearr_16289_16308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16276 === 9))
{var inst_16255 = (state_16275[9]);var state_16275__$1 = state_16275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16275__$1,11,out,inst_16255);
} else
{if((state_val_16276 === 10))
{var inst_16267 = (state_16275[2]);var state_16275__$1 = state_16275;var statearr_16290_16309 = state_16275__$1;(statearr_16290_16309[2] = inst_16267);
(statearr_16290_16309[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16276 === 11))
{var inst_16255 = (state_16275[9]);var inst_16264 = (state_16275[2]);var inst_16252 = inst_16255;var state_16275__$1 = (function (){var statearr_16291 = state_16275;(statearr_16291[10] = inst_16264);
(statearr_16291[7] = inst_16252);
return statearr_16291;
})();var statearr_16292_16310 = state_16275__$1;(statearr_16292_16310[2] = null);
(statearr_16292_16310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___16300,out))
;return ((function (switch__10206__auto__,c__10276__auto___16300,out){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_16296 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16296[0] = state_machine__10207__auto__);
(statearr_16296[1] = 1);
return statearr_16296;
});
var state_machine__10207__auto____1 = (function (state_16275){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_16275);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e16297){if((e16297 instanceof Object))
{var ex__10210__auto__ = e16297;var statearr_16298_16311 = state_16275;(statearr_16298_16311[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16312 = state_16275;
state_16275 = G__16312;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_16275){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_16275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___16300,out))
})();var state__10278__auto__ = (function (){var statearr_16299 = f__10277__auto__.call(null);(statearr_16299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___16300);
return statearr_16299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___16300,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10276__auto___16447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___16447,out){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___16447,out){
return (function (state_16417){var state_val_16418 = (state_16417[1]);if((state_val_16418 === 1))
{var inst_16380 = (new Array(n));var inst_16381 = inst_16380;var inst_16382 = 0;var state_16417__$1 = (function (){var statearr_16419 = state_16417;(statearr_16419[7] = inst_16381);
(statearr_16419[8] = inst_16382);
return statearr_16419;
})();var statearr_16420_16448 = state_16417__$1;(statearr_16420_16448[2] = null);
(statearr_16420_16448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 2))
{var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16417__$1,4,ch);
} else
{if((state_val_16418 === 3))
{var inst_16415 = (state_16417[2]);var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16417__$1,inst_16415);
} else
{if((state_val_16418 === 4))
{var inst_16385 = (state_16417[9]);var inst_16385__$1 = (state_16417[2]);var inst_16386 = (inst_16385__$1 == null);var inst_16387 = cljs.core.not.call(null,inst_16386);var state_16417__$1 = (function (){var statearr_16421 = state_16417;(statearr_16421[9] = inst_16385__$1);
return statearr_16421;
})();if(inst_16387)
{var statearr_16422_16449 = state_16417__$1;(statearr_16422_16449[1] = 5);
} else
{var statearr_16423_16450 = state_16417__$1;(statearr_16423_16450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 5))
{var inst_16385 = (state_16417[9]);var inst_16390 = (state_16417[10]);var inst_16381 = (state_16417[7]);var inst_16382 = (state_16417[8]);var inst_16389 = (inst_16381[inst_16382] = inst_16385);var inst_16390__$1 = (inst_16382 + 1);var inst_16391 = (inst_16390__$1 < n);var state_16417__$1 = (function (){var statearr_16424 = state_16417;(statearr_16424[11] = inst_16389);
(statearr_16424[10] = inst_16390__$1);
return statearr_16424;
})();if(cljs.core.truth_(inst_16391))
{var statearr_16425_16451 = state_16417__$1;(statearr_16425_16451[1] = 8);
} else
{var statearr_16426_16452 = state_16417__$1;(statearr_16426_16452[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 6))
{var inst_16382 = (state_16417[8]);var inst_16403 = (inst_16382 > 0);var state_16417__$1 = state_16417;if(cljs.core.truth_(inst_16403))
{var statearr_16428_16453 = state_16417__$1;(statearr_16428_16453[1] = 12);
} else
{var statearr_16429_16454 = state_16417__$1;(statearr_16429_16454[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 7))
{var inst_16413 = (state_16417[2]);var state_16417__$1 = state_16417;var statearr_16430_16455 = state_16417__$1;(statearr_16430_16455[2] = inst_16413);
(statearr_16430_16455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 8))
{var inst_16390 = (state_16417[10]);var inst_16381 = (state_16417[7]);var tmp16427 = inst_16381;var inst_16381__$1 = tmp16427;var inst_16382 = inst_16390;var state_16417__$1 = (function (){var statearr_16431 = state_16417;(statearr_16431[7] = inst_16381__$1);
(statearr_16431[8] = inst_16382);
return statearr_16431;
})();var statearr_16432_16456 = state_16417__$1;(statearr_16432_16456[2] = null);
(statearr_16432_16456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 9))
{var inst_16381 = (state_16417[7]);var inst_16395 = cljs.core.vec.call(null,inst_16381);var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16417__$1,11,out,inst_16395);
} else
{if((state_val_16418 === 10))
{var inst_16401 = (state_16417[2]);var state_16417__$1 = state_16417;var statearr_16433_16457 = state_16417__$1;(statearr_16433_16457[2] = inst_16401);
(statearr_16433_16457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 11))
{var inst_16397 = (state_16417[2]);var inst_16398 = (new Array(n));var inst_16381 = inst_16398;var inst_16382 = 0;var state_16417__$1 = (function (){var statearr_16434 = state_16417;(statearr_16434[12] = inst_16397);
(statearr_16434[7] = inst_16381);
(statearr_16434[8] = inst_16382);
return statearr_16434;
})();var statearr_16435_16458 = state_16417__$1;(statearr_16435_16458[2] = null);
(statearr_16435_16458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 12))
{var inst_16381 = (state_16417[7]);var inst_16405 = cljs.core.vec.call(null,inst_16381);var state_16417__$1 = state_16417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16417__$1,15,out,inst_16405);
} else
{if((state_val_16418 === 13))
{var state_16417__$1 = state_16417;var statearr_16436_16459 = state_16417__$1;(statearr_16436_16459[2] = null);
(statearr_16436_16459[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 14))
{var inst_16410 = (state_16417[2]);var inst_16411 = cljs.core.async.close_BANG_.call(null,out);var state_16417__$1 = (function (){var statearr_16437 = state_16417;(statearr_16437[13] = inst_16410);
return statearr_16437;
})();var statearr_16438_16460 = state_16417__$1;(statearr_16438_16460[2] = inst_16411);
(statearr_16438_16460[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16418 === 15))
{var inst_16407 = (state_16417[2]);var state_16417__$1 = state_16417;var statearr_16439_16461 = state_16417__$1;(statearr_16439_16461[2] = inst_16407);
(statearr_16439_16461[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___16447,out))
;return ((function (switch__10206__auto__,c__10276__auto___16447,out){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_16443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16443[0] = state_machine__10207__auto__);
(statearr_16443[1] = 1);
return statearr_16443;
});
var state_machine__10207__auto____1 = (function (state_16417){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_16417);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e16444){if((e16444 instanceof Object))
{var ex__10210__auto__ = e16444;var statearr_16445_16462 = state_16417;(statearr_16445_16462[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16417);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16463 = state_16417;
state_16417 = G__16463;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_16417){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_16417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___16447,out))
})();var state__10278__auto__ = (function (){var statearr_16446 = f__10277__auto__.call(null);(statearr_16446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___16447);
return statearr_16446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___16447,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10276__auto___16606 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10276__auto___16606,out){
return (function (){var f__10277__auto__ = (function (){var switch__10206__auto__ = ((function (c__10276__auto___16606,out){
return (function (state_16576){var state_val_16577 = (state_16576[1]);if((state_val_16577 === 1))
{var inst_16535 = [];var inst_16536 = inst_16535;var inst_16537 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16576__$1 = (function (){var statearr_16578 = state_16576;(statearr_16578[7] = inst_16537);
(statearr_16578[8] = inst_16536);
return statearr_16578;
})();var statearr_16579_16607 = state_16576__$1;(statearr_16579_16607[2] = null);
(statearr_16579_16607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 2))
{var state_16576__$1 = state_16576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16576__$1,4,ch);
} else
{if((state_val_16577 === 3))
{var inst_16574 = (state_16576[2]);var state_16576__$1 = state_16576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16576__$1,inst_16574);
} else
{if((state_val_16577 === 4))
{var inst_16540 = (state_16576[9]);var inst_16540__$1 = (state_16576[2]);var inst_16541 = (inst_16540__$1 == null);var inst_16542 = cljs.core.not.call(null,inst_16541);var state_16576__$1 = (function (){var statearr_16580 = state_16576;(statearr_16580[9] = inst_16540__$1);
return statearr_16580;
})();if(inst_16542)
{var statearr_16581_16608 = state_16576__$1;(statearr_16581_16608[1] = 5);
} else
{var statearr_16582_16609 = state_16576__$1;(statearr_16582_16609[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 5))
{var inst_16544 = (state_16576[10]);var inst_16540 = (state_16576[9]);var inst_16537 = (state_16576[7]);var inst_16544__$1 = f.call(null,inst_16540);var inst_16545 = cljs.core._EQ_.call(null,inst_16544__$1,inst_16537);var inst_16546 = cljs.core.keyword_identical_QMARK_.call(null,inst_16537,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16547 = (inst_16545) || (inst_16546);var state_16576__$1 = (function (){var statearr_16583 = state_16576;(statearr_16583[10] = inst_16544__$1);
return statearr_16583;
})();if(cljs.core.truth_(inst_16547))
{var statearr_16584_16610 = state_16576__$1;(statearr_16584_16610[1] = 8);
} else
{var statearr_16585_16611 = state_16576__$1;(statearr_16585_16611[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 6))
{var inst_16536 = (state_16576[8]);var inst_16561 = inst_16536.length;var inst_16562 = (inst_16561 > 0);var state_16576__$1 = state_16576;if(cljs.core.truth_(inst_16562))
{var statearr_16587_16612 = state_16576__$1;(statearr_16587_16612[1] = 12);
} else
{var statearr_16588_16613 = state_16576__$1;(statearr_16588_16613[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 7))
{var inst_16572 = (state_16576[2]);var state_16576__$1 = state_16576;var statearr_16589_16614 = state_16576__$1;(statearr_16589_16614[2] = inst_16572);
(statearr_16589_16614[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 8))
{var inst_16544 = (state_16576[10]);var inst_16540 = (state_16576[9]);var inst_16536 = (state_16576[8]);var inst_16549 = inst_16536.push(inst_16540);var tmp16586 = inst_16536;var inst_16536__$1 = tmp16586;var inst_16537 = inst_16544;var state_16576__$1 = (function (){var statearr_16590 = state_16576;(statearr_16590[11] = inst_16549);
(statearr_16590[7] = inst_16537);
(statearr_16590[8] = inst_16536__$1);
return statearr_16590;
})();var statearr_16591_16615 = state_16576__$1;(statearr_16591_16615[2] = null);
(statearr_16591_16615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 9))
{var inst_16536 = (state_16576[8]);var inst_16552 = cljs.core.vec.call(null,inst_16536);var state_16576__$1 = state_16576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16576__$1,11,out,inst_16552);
} else
{if((state_val_16577 === 10))
{var inst_16559 = (state_16576[2]);var state_16576__$1 = state_16576;var statearr_16592_16616 = state_16576__$1;(statearr_16592_16616[2] = inst_16559);
(statearr_16592_16616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 11))
{var inst_16544 = (state_16576[10]);var inst_16540 = (state_16576[9]);var inst_16554 = (state_16576[2]);var inst_16555 = [];var inst_16556 = inst_16555.push(inst_16540);var inst_16536 = inst_16555;var inst_16537 = inst_16544;var state_16576__$1 = (function (){var statearr_16593 = state_16576;(statearr_16593[12] = inst_16556);
(statearr_16593[13] = inst_16554);
(statearr_16593[7] = inst_16537);
(statearr_16593[8] = inst_16536);
return statearr_16593;
})();var statearr_16594_16617 = state_16576__$1;(statearr_16594_16617[2] = null);
(statearr_16594_16617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 12))
{var inst_16536 = (state_16576[8]);var inst_16564 = cljs.core.vec.call(null,inst_16536);var state_16576__$1 = state_16576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16576__$1,15,out,inst_16564);
} else
{if((state_val_16577 === 13))
{var state_16576__$1 = state_16576;var statearr_16595_16618 = state_16576__$1;(statearr_16595_16618[2] = null);
(statearr_16595_16618[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 14))
{var inst_16569 = (state_16576[2]);var inst_16570 = cljs.core.async.close_BANG_.call(null,out);var state_16576__$1 = (function (){var statearr_16596 = state_16576;(statearr_16596[14] = inst_16569);
return statearr_16596;
})();var statearr_16597_16619 = state_16576__$1;(statearr_16597_16619[2] = inst_16570);
(statearr_16597_16619[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16577 === 15))
{var inst_16566 = (state_16576[2]);var state_16576__$1 = state_16576;var statearr_16598_16620 = state_16576__$1;(statearr_16598_16620[2] = inst_16566);
(statearr_16598_16620[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10276__auto___16606,out))
;return ((function (switch__10206__auto__,c__10276__auto___16606,out){
return (function() {
var state_machine__10207__auto__ = null;
var state_machine__10207__auto____0 = (function (){var statearr_16602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16602[0] = state_machine__10207__auto__);
(statearr_16602[1] = 1);
return statearr_16602;
});
var state_machine__10207__auto____1 = (function (state_16576){while(true){
var ret_value__10208__auto__ = (function (){try{while(true){
var result__10209__auto__ = switch__10206__auto__.call(null,state_16576);if(cljs.core.keyword_identical_QMARK_.call(null,result__10209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10209__auto__;
}
break;
}
}catch (e16603){if((e16603 instanceof Object))
{var ex__10210__auto__ = e16603;var statearr_16604_16621 = state_16576;(statearr_16604_16621[5] = ex__10210__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16576);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10208__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16622 = state_16576;
state_16576 = G__16622;
continue;
}
} else
{return ret_value__10208__auto__;
}
break;
}
});
state_machine__10207__auto__ = function(state_16576){
switch(arguments.length){
case 0:
return state_machine__10207__auto____0.call(this);
case 1:
return state_machine__10207__auto____1.call(this,state_16576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10207__auto____0;
state_machine__10207__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10207__auto____1;
return state_machine__10207__auto__;
})()
;})(switch__10206__auto__,c__10276__auto___16606,out))
})();var state__10278__auto__ = (function (){var statearr_16605 = f__10277__auto__.call(null);(statearr_16605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10276__auto___16606);
return statearr_16605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10278__auto__);
});})(c__10276__auto___16606,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
