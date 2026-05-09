# Compliance dashboard

This dashboard is the public status page for Broiler.JS standards compliance. It intentionally separates measured results from goals so the project does not overstate conformance before evidence is available.

## Current evidence

| Area | Latest recorded result | Evidence |
| --- | --- | --- |
| Repository xUnit tests | Not recorded in this document yet | Run `dotnet test Broiler.JS.slnx` and add the CI artifact link. |
| test262 | Pending harness integration | Pin an upstream test262 commit and publish totals here. |
| engine262 tests | Pending harness integration | Add command and totals after the first run. |
| Comparative engine checks | Pending curated matrix | Compare selected passing/failing areas against V8, SpiderMonkey, JavaScriptCore, Jint, and engine262 when results are available. |

## Regression tracking

- A compliance run is complete only when raw logs and summary totals are linked from this file.
- Failing tests that represent unsupported syntax, missing built-ins, host limitations, or known bugs must be summarized in `known-gaps.md`.
- A result row should never claim “fully compliant” or “most compliant” unless the linked public suites and comparison data support that claim.

## Next automation steps

1. Add a CI job that restores Broiler.JS and runs repository tests.
2. Add a separate scheduled compliance job that downloads or caches pinned test262 inputs.
3. Publish machine-readable totals as CI artifacts and update this dashboard for releases.
4. Track pass-rate deltas per suite revision to detect regressions.
