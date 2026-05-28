var out=[];
(function(){ var a=0; a++; out.push('local-post:'+a); })();
(function(){ var b=0; ++b; out.push('local-pre:'+b); })();
(function(){ var c={x:0}; c.x++; out.push('member-post:'+c.x); })();
(function(){ var d={x:0}; ++d.x; out.push('member-pre:'+d.x); })();
throw out.join('\n');
