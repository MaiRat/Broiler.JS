var out=[];
out.push('split:'+ 'a'.split(/-/).length + ':' + JSON.stringify('a'.split(/-/)[0]));
var count=0,argsLen=-1; var regexp=/\d/u; regexp.constructor={ [Symbol.species]: function(){ count++; argsLen=arguments.length; return /\w/g; } }; var iter=regexp[Symbol.matchAll]('a*b'); var r1=iter.next(); var r2=iter.next(); out.push('matchAll:'+count+':'+argsLen+':'+String(r1.done)+':'+JSON.stringify(r1.value&&r1.value[0])+':'+String(r2.done));
function syntaxStatus(src){ try { Function(src); return 'ok'; } catch(e){ return e.name; } }
out.push('cp:'+syntaxStatus('({[expr]})'));
throw out.join('\n');
