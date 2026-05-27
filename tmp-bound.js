function target() {}
var bound = target.bind(null);
function outcome(label, fn) {
  try { return label + ':ok:' + fn(); } catch (e) { return label + ':throw:' + e.constructor.name + ':' + e.message; }
}
throw new Error([
  'ownCaller=' + bound.hasOwnProperty('caller'),
  'ownArguments=' + bound.hasOwnProperty('arguments'),
  outcome('getCaller', function(){ return bound.caller; }),
  outcome('setCaller', function(){ bound.caller = {}; return 'assigned'; }),
  outcome('getArguments', function(){ return bound.arguments; }),
  outcome('setArguments', function(){ bound.arguments = {}; return 'assigned'; })
].join('\n'));
