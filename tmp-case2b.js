var ok = false;
try {
  var a = []; a.constructor = null; a.filter(function(){});
} catch (e) {
  ok = e && e.constructor && e.constructor.name === 'TypeError';
}
if (!ok) throw new Error('expected TypeError');
