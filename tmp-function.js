function thrownCtor(fn) {
  try { fn(); return 'no-throw'; } catch (e) { return e && e.constructor ? e.constructor.name + ':' + e.message : typeof e; }
}
var results = [
  (function () {
    function f() { 'use strict'; gNonStrict(); }
    function gNonStrict() { return gNonStrict.caller || gNonStrict.caller.throwTypeError; }
    try { f.bind()(); return 'no-throw'; } catch (e) { return e.constructor.name + ':' + e.message; }
  })(),
  (function () {
    try {
      let fr = new FinalizationRegistry(() => {});
      let token = {};
      fr.register(token);
      new fr.unregister(token);
      return 'no-throw';
    } catch (e) { return e.constructor.name + ':' + e.message; }
  })()
];
throw new Error(results.join('|'));
