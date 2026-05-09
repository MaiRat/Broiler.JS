# Compliance process

Broiler.JS compliance is measured with repository tests plus public JavaScript conformance suites. The process is evidence-based: every published claim must include the suite name, suite revision, host command, filters, pass/fail totals, and links to raw output or CI artifacts.

## Required suites

| Suite | Source | Purpose | Status |
| --- | --- | --- | --- |
| test262 | https://github.com/tc39/test262 | ECMAScript language and built-in conformance | Required for release evidence; pin by commit SHA. |
| engine262 tests | https://github.com/engine262/engine262 | Independent ECMAScript semantic checks and examples | Optional cross-check suite. |
| Jint compatibility/performance scripts | Repository `OtherTests/JIntPerfTests` | Regression and comparative behavior checks already carried in this repository | Available locally. |
| Dromaeo-derived scripts | Repository `OtherTests/JIntPerfTests/Scripts` | Legacy performance/regression scenarios | Available locally with license notices. |

## Running compliance evidence

1. Restore and run repository tests with `dotnet test Broiler.JS.slnx`.
2. Clone or cache public suites outside the source tree or as CI cache inputs; do not vendor large external suites without a license and update policy.
3. Record the exact suite revision, command line, host options, and environment in `docs/compliance/dashboard.md`.
4. File or update issues for failing feature areas and link them from `docs/compliance/known-gaps.md`.
5. Treat any newly failing previously-passing test as a regression unless a suite update intentionally changed expected behavior.

## Reporting format

Each run should report:

- Date and commit under test.
- Suite name and upstream revision.
- Total, passed, failed, skipped, timed out, and unsupported counts.
- Feature tags or directories with the largest failure counts.
- Raw logs or artifact location.
- Follow-up owner or issue link for regressions.
