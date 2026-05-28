var out=[];
function ok(src){ try{ Function(src); out.push('ok:'+src); } catch(e){} }
ok('a.1'); ok('a.2'); ok('a.3'); ok('a.4'); ok('a.5'); ok('a.6'); ok('a.7'); ok('a.8');
throw out.join('\n');
