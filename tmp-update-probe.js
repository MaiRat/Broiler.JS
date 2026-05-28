var out=[];
var a=0; (function(){ ++a; })(); out.push('prefix-fn:'+a);
var b=0; (function(){ b++; })(); out.push('postfix-fn:'+b);
var c=0; ({m:function(){ ++c; }}).m(); out.push('prefix-method:'+c);
var d=0; ({m:function(){ d++; }}).m(); out.push('postfix-method:'+d);
throw out.join('\n');
