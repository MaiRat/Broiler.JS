function thrownCtor(fn) {
  try { fn(); return 'no-throw'; } catch (e) { return e && e.constructor ? e.constructor.name : typeof e; }
}
print([
  thrownCtor(function(){ Array.prototype.concat.call(null); }),
  thrownCtor(function(){ Array.prototype.entries.call(null); }),
  thrownCtor(function(){ (function() {'use strict'; return ((function(){}).bind()).caller; })(); })
].join('|'));
