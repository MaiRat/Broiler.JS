var ok = false;
try {
  var o = Proxy.revocable([], {});
  Object.defineProperty(o.proxy, 'constructor', { get: function(){} });
  o.revoke();
  Array.prototype.filter.call(o.proxy, function(){});
} catch (e) {
  ok = e && e.constructor && e.constructor.name === 'TypeError';
}
if (!ok) throw new Error('expected TypeError');
