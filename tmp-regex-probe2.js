var r = new RegExp(/<(\/)?([^<>]+)>/, 'y');
var m = r.exec('</B>');
throw (m === null ? 'null' : m.length + '|' + m.map(function(v){ return v === undefined ? 'u' : String(v); }).join(','));
