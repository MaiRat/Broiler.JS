var out=[];
function ok(label, fn){ try{ fn(); out.push(label+':ok'); } catch(e){ out.push(label+':'+e.name); } }
ok('json', function(){ JSON.parse('{["a"]:4}'); });
ok('f1', function(){ Function('({[expr]})'); });
ok('f2', function(){ Function('({get [if (0) 0;](){}})'); });
ok('f3', function(){ Function('({set [if (0) 0;](a){}})'); });
throw out.join('\n');
