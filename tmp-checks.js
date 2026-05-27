function outcome(fn) {
  try { return 'ok:' + fn(); } catch (e) { return 'throw:' + (e && e.constructor ? e.constructor.name : typeof e) + ':' + e.message; }
}
function target() {}
var bound = target.bind(null);
const toString = Intl.Locale.prototype.toString;
const pr = new Intl.PluralRules();
throw new Error([
  outcome(function(){ return bound.caller; }),
  outcome(function(){ bound.caller = {}; return 'assigned'; }),
  outcome(function(){ return bound.arguments; }),
  outcome(function(){ bound.arguments = {}; return 'assigned'; }),
  outcome(function(){ return toString.call(undefined); }),
  outcome(function(){ return toString.call({}); }),
  outcome(function(){ return pr.selectRange(undefined, 201); }),
  outcome(function(){ return pr.selectRange(102, undefined); }),
  outcome(function(){ return pr.selectRange(undefined, undefined); })
].join('\n'));
