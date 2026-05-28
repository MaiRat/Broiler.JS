var r = /<(\/)?([^<>]+)>/;
var m = r.exec('</B>');
throw m.length + '|' + m.map(function(v){ return v === undefined ? 'u' : String(v); }).join(',');
