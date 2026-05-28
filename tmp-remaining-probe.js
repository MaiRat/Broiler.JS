var out=[];
// split
var actual = ''.split(); out.push('split0:'+actual.length+':'+JSON.stringify(actual[0]));
actual = 'a'.split(/-/); out.push('split1:'+actual.length+':'+JSON.stringify(actual[0]));
// matchAll species
var count=0,argsLen=-1; var regexp=/\d/u; regexp.constructor={ [Symbol.species]: function(){ count++; argsLen=arguments.length; return /\w/g; } }; var iter=regexp[Symbol.matchAll]('a*b'); var r1=iter.next(); var r2=iter.next(); out.push('matchAll:'+count+':'+argsLen+':'+String(r1.done)+':'+JSON.stringify(r1.value&&r1.value[0])+':'+String(r2.done));
// compPropNames syntax samples
function syntaxStatus(src){ try { Function(src); return 'ok'; } catch(e){ return e.name+':'+e.message; } }
out.push('cp1:'+syntaxStatus('({[expr]})'));
out.push('cp2:'+syntaxStatus('({[1, 2]: 3})'));
out.push('cp3:'+syntaxStatus('function f() { {[x]: 1} }'));
// eval tco smaller
var c=0; function f(n){ 'use strict'; if(n===0){ c+=1; return 'done'; } return eval(n-1); } eval=f; var tr; try{ tr=f(3); }catch(e){ tr='ERR:'+e; } out.push('evalg:'+c+':'+String(tr));
throw out.join('\n');
