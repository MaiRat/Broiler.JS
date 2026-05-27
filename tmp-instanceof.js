Function.prototype.prototype = "";
function outcome() {
  try {
    return [] instanceof Function.prototype;
  } catch (e) {
    return e.constructor.name + ':' + e.message;
  }
}
throw new Error(String(outcome()));
