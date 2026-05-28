var out=[];
var log=''; var arr={length:{valueOf:function(){log+='L'; return 2;}},0:'x',1:'z'}; var sep={toString:function(){log+='S'; return 'y';}}; Array.prototype.join.call(arr, sep); out.push('join:'+log);
var rawBacktick; (function(s){ rawBacktick=s.raw[0]; })`\``; out.push('raw:'+JSON.stringify(rawBacktick));
var cooked; (function(s){ cooked=s[0]; })`\
\
\
`; out.push('cooked:'+JSON.stringify(cooked));
throw out.join('\n');
