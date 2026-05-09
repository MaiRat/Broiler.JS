# Known compliance gaps

This file tracks areas that must be validated before Broiler.JS can make strong standards-compliance claims.

## Unvalidated areas

- Full test262 harness integration and feature flag mapping.
- Strict mode, modules, async/generator interactions, and host-defined job queue behavior across all ECMAScript clauses.
- Internationalization behavior in `Intl` built-ins against ECMA-402 suites.
- Edge cases for `Proxy`, typed arrays, `ArrayBuffer`, `DataView`, `RegExp`, temporal scheduling of promises, and error subclassing.
- Cross-engine comparison reports against leading public engines.

## Gap lifecycle

Each gap should move through: documented failing suite area, minimal repro test in the appropriate `*.Tests` project, implementation fix, public suite rerun, and dashboard update.
