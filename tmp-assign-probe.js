var out = [];
function record(label, fn) { try { fn(); } catch (e) { out.push(label + ':ERR:' + e); return; } out.push(label); }

var g1 = 0; (function(){ g1++; })(); out.push('inc-fn:' + g1);
var g2 = 0; (function(){ g2 += 1; })(); out.push('addassign-fn:' + g2);
var g3 = 0; (function(){ g3 = g3 + 1; })(); out.push('assignexpr-fn:' + g3);
var g4 = 0; ({ m: function(){ g4++; } }).m(); out.push('inc-method:' + g4);
var g5 = 0; ({ m: function(){ g5 += 1; } }).m(); out.push('addassign-method:' + g5);
var g6 = 0; ({ m: function(){ g6 = g6 + 1; } }).m(); out.push('assignexpr-method:' + g6);
var g7 = 0; new (function(){ g7++; })(); out.push('inc-ctor:' + g7);
var g8 = 0; new (function(){ g8 += 1; })(); out.push('addassign-ctor:' + g8);
var g9 = 0; new (function(){ g9 = g9 + 1; })(); out.push('assignexpr-ctor:' + g9);
var g10 = 0; var obj = { toString: function(){ g10++; return 'x'; } }; String(obj); out.push('inc-tostring:' + g10);
var g11 = 0; var obj2 = { toString: function(){ g11 += 1; return 'x'; } }; String(obj2); out.push('addassign-tostring:' + g11);
var g12 = 0; var obj3 = { toString: function(){ g12 = g12 + 1; return 'x'; } }; String(obj3); out.push('assignexpr-tostring:' + g12);
throw out.join('\n');
