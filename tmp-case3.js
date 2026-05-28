var A = function(_length) { this.length = 0; Object.preventExtensions(this); };
var arr = [1]; arr.constructor = {}; arr.constructor[Symbol.species] = A;
arr.filter(function(){ return true; });
