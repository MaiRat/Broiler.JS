# Compliance dashboard

This dashboard is the public status page for Broiler.JS standards compliance. It intentionally separates measured results from goals so the project does not overstate conformance before evidence is available.

## Current evidence

| Area | Latest recorded result | Evidence |
| --- | --- | --- |
| Repository xUnit tests | 2026-05-09 local baseline on commit `3ef214c`: 247 passed, 0 failed, 0 skipped | `dotnet test Broiler.JS.slnx` with TRX logs captured during the compliance review for this issue. |
| test262 | Pending harness integration | Pin an upstream test262 commit and publish totals here. |
| engine262 tests | Pending harness integration | Add command and totals after the first run. |
| Comparative engine checks | Pending curated matrix | Compare selected passing/failing areas against V8, SpiderMonkey, JavaScriptCore, Jint, and engine262 when results are available. |

## Compliance workstreams

- [x] Review the documents in `docs/compliance/` against the current repository layout and validation process.
- [x] Record the repository-test baseline required by `process.md`.
- [ ] Add a pinned `test262` harness run and publish suite totals here.
- [ ] Add an `engine262` cross-check run and publish suite totals here.
- [ ] Expand syntax-compliance coverage for parser gaps called out in `known-gaps.md`.
- [ ] Expand built-in compliance coverage for the high-risk areas called out in `known-gaps.md`.
- [ ] Publish a comparative engine matrix for release-time regression tracking.

## Regression tracking

- A compliance run is complete only when raw logs and summary totals are linked from this file.
- Failing tests that represent unsupported syntax, missing built-ins, host limitations, or known bugs must be summarized in `known-gaps.md`.
- A result row should never claim “fully compliant” or “most compliant” unless the linked public suites and comparison data support that claim.

## Next automation steps

1. Add a CI job that restores Broiler.JS and runs repository tests.
2. Add a separate scheduled compliance job that downloads or caches pinned test262 inputs.
3. Publish machine-readable totals as CI artifacts and update this dashboard for releases.
4. Track pass-rate deltas per suite revision to detect regressions.
