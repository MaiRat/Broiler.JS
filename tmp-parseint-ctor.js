var ok = false;
try { new parseInt(); } catch (e) { ok = e && e.constructor && e.constructor.name === 'TypeError'; }
if (!ok) throw new Error('expected TypeError');
