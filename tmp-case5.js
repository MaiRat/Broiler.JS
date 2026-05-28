var ok = false;
try { [1].flatMap({}); } catch (e) { ok = e && e.constructor && e.constructor.name === 'TypeError'; }
if (!ok) throw new Error('expected TypeError');
