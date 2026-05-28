var results = [];
(function(s){ results.push('tag:' + arguments.length + ':' + s); })`x`;
var count = 0; var argsLen = -1; var regexp = /\d/u; regexp.constructor = { [Symbol.species]: function(){ count++; argsLen = arguments.length; return /\w/g; } }; regexp[Symbol.matchAll]('a*b'); results.push('species:' + count + ':' + argsLen);
var c2 = 0; function f(n){ 'use strict'; if (n === 0) { c2 += 1; return; } return eval(n - 1); } eval = f; f(1); results.push('eval:' + c2);
var args, callCount = 0; var spyIterator = { next: function(){ callCount += 1; args = arguments; return { done:true }; } }; var spyIterable = {}; spyIterable[Symbol.iterator] = function(){ return spyIterator; }; function* g(){ yield * spyIterable; } g().next(9876); results.push('yield:' + callCount + ':' + args.length + ':' + args[0]);
var count3 = 0; var stringifyCounter = { toString: function(){ count3++; return 'obj'; } }; [1,2].join(stringifyCounter); results.push('join:' + count3);
throw results.join('\n');
