function thrownCtor(fn) {
  try { fn(); return 'no-throw'; } catch (e) { return e && e.constructor ? e.constructor.name + ':' + e.message : typeof e; }
}
var results = [
  thrownCtor(function() {
    var speciesConstructor = {};
    speciesConstructor[Symbol.species] = function() { return {}; };
    var arrayBuffer = new ArrayBuffer(8);
    arrayBuffer.constructor = speciesConstructor;
    arrayBuffer.slice();
  }),
  thrownCtor(function() {
    var speciesConstructor = {};
    var arrayBuffer = new ArrayBuffer(8);
    speciesConstructor[Symbol.species] = function() { return arrayBuffer; };
    arrayBuffer.constructor = speciesConstructor;
    arrayBuffer.slice();
  }),
  thrownCtor(function() {
    var speciesConstructor = {};
    speciesConstructor[Symbol.species] = function() { return new ArrayBuffer(4); };
    var arrayBuffer = new ArrayBuffer(8);
    arrayBuffer.constructor = speciesConstructor;
    arrayBuffer.slice();
  })
];
throw new Error(results.join('|'));
