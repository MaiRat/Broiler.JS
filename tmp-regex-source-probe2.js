var s = /<(\/)?([^<>]+)>/.source;
var codes=[]; for (var i=0;i<s.length;i++) codes.push(s.charCodeAt(i));
throw s.length + '|' + codes.join(',');
