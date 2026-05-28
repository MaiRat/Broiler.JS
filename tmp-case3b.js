var ok = false;
try {
  var A = function(_length) { this.length = 0; Object.preventExtensions(this); };
  var arr = [1]; arr.constructor = {}; arr.constructor[Symbol.species] = A;
  arr.filter(function(){ return true; });
} catch (e) {
  ok = e && e.constructor && e.constructor.name === 'TypeError';
}
if (!ok) throw new Error('expected TypeError');
