function test(name, fn) {
  try { fn(); console.log(name + ': no-throw'); }
  catch (e) { console.log(name + ': ' + e.constructor.name + ': ' + e.message); }
}

test('every-bad-length', function() {
  var callbackfnAccessed = false;
  var obj = {0:11,1:12,length:{valueOf:function(){return {};},toString:function(){return {};}}};
  Array.prototype.every.call(obj, function(val){ callbackfnAccessed = true; return val > 10;});
  console.log('callbackfnAccessed=' + callbackfnAccessed);
});

test('fill-length-symbol', function() {
  var o = {}; o.length = Symbol(1); [].fill.call(o,1);
});

test('keys-null', function() { Array.prototype.keys.call(null); });

test('filter-species-nonext', function() {
  var A = function(_length){ this.length = 0; Object.preventExtensions(this); };
  var arr = [1]; arr.constructor = {}; arr.constructor[Symbol.species] = A;
  arr.filter(function(){ return true; });
});
