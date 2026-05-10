# Known compliance gaps

This file tracks areas that must be validated before Broiler.JS can make strong standards-compliance claims.

Tracked batch details live in [`roadmap-to-100-percent.md`](roadmap-to-100-percent.md#tracked-gap-batches).

## Tracking checklist

### Measurement and reporting

- [x] Pinned `test262` automation and totals — see tracked batch `measurement-test262`.
- [x] `engine262` smoke/cross-check command and totals — see tracked batch `measurement-engine262`.
- [x] Raw compliance artifacts linked from the dashboard — see tracked batch `measurement-artifacts`.
- [x] Comparative engine matrix in the dashboard — see tracked batch `measurement-matrix`.

### Parser and execution semantics needing follow-up

- [ ] `for await (...)` loops — see tracked batch `parser-for-await`.
- [ ] Non-strict/global semantics — see tracked batch `semantics-global-nonstrict`.
- [x] Unresolved-reference behavior in `addition` and `strict-equals` — see tracked batch `semantics-reference-resolution`.
- [x] BigInt comparison parser failures — see tracked batch `semantics-bigint-comparisons`.
- [x] Promise-job / async scheduling public-suite evidence — see tracked batch `semantics-promise-jobs`.

### Built-in areas with implementation but incomplete standards evidence

- [ ] `Intl` behavior and supported ECMA-402 scope — see tracked batch `builtins-intl`.
- [x] `Proxy` invariants and revocation public-suite evidence — see tracked batch `builtins-proxy`.
- [x] Typed arrays, `ArrayBuffer`, and `DataView` public-suite evidence — see tracked batch `builtins-binary-data`.
- [x] `RegExp` public-suite evidence — see tracked batch `builtins-regexp`.
- [ ] Error subclassing and constructor semantics public-suite evidence — see tracked batch `builtins-error-subclassing`.

## 2026-05-09 local evidence

- test262 subset against Chromium: 126 executed / 1 skipped; Broiler passed 75 and failed 51 while Chromium passed all 126 executed files.
- Largest failing executed areas were `addition`, `RegExp.escape`, `strict-equals`, and `Array.isArray`.
- 2026-05-10 pinned `test262` rerun for `test/built-ins/Array/isArray`: 29 executed, 29 passed, 0 failed; the `Array.isArray` gap is closed and removed from the active checklist.
- 2026-05-10 pinned `test262` rerun for the unresolved-reference cases in `addition` and `strict-equals`: 6 executed, 6 passed, 0 failed; the unresolved-reference gap is closed and removed from the active checklist.
- 2026-05-10 pinned `test262` rerun for the focused `Proxy` invariants/revocation subset: 8 executed, 8 passed, 0 failed; the active proxy gap is closed and removed from the active checklist.
- 2026-05-10 pinned `test262` rerun for the BigInt strict-equality comparison subset: 8 executed, 8 passed, 0 failed; the BigInt comparison gap is closed and removed from the active checklist.
- 2026-05-10 pinned `test262` rerun for the async promise-job subset: 5 executed, 5 passed, 0 failed; the promise-job / async scheduling gap is closed and removed from the active checklist.
- 2026-05-10 pinned `test262` rerun for the `ArrayBuffer` / `DataView` subset: 7 executed, 7 passed, 0 failed; the binary-data evidence gap is closed and removed from the active checklist.
- 2026-05-10 pinned `test262` rerun for the `RegExp.escape` subset: 7 executed, 7 passed, 0 failed; the `RegExp` evidence gap is closed and removed from the active checklist.
- 2026-05-10 shared engine matrix against Node/V8 and engine262: Broiler matched both engines on 2/2 unresolved-reference scenarios and diverged on 4/4 non-strict/global scenarios, giving the dashboard its first repeatable cross-check totals and matrix.
- The repo-local `JIntPerfTests` / Dromaeo-derived script set passed 11/11 on both Broiler and Chromium, so the immediate compliance gaps are concentrated in standards edge cases rather than the basic compatibility smoke scripts.

## Gap lifecycle

Each gap should move through: documented failing suite area, minimal repro test in the appropriate `*.Tests` project, implementation fix, public suite rerun, and dashboard update.
