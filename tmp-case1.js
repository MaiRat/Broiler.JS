var obj = {0:11,1:12,length:{valueOf:function(){return {};},toString:function(){return {};}}};
Array.prototype.every.call(obj, function(val){ return val > 10;});
