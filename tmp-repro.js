var f = new Intl.NumberFormat().format;
throw new Error([
  Object.getOwnPropertyDescriptor(Object.prototype, Symbol.toStringTag) === undefined,
  Object.prototype.toString.call(f),
  Object.prototype.toString.call(new Intl.DateTimeFormat().format),
  Object.prototype.toString.call(Intl.NumberFormat.supportedLocalesOf)
].join('|'));
