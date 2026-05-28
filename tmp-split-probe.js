var ecmaSampleRe = /<(\/)?([^<>]+)>/;
var actual = 'A<B>bold</B>and<CODE>coded</CODE>'.split(ecmaSampleRe);
throw actual.length + '|' + actual.map(function(v){ return v === undefined ? 'u' : String(v); }).join(',');
