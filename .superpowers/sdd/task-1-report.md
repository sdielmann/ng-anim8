# Task 1 Report

## Status
Done.

## Commits
- `ef7b543` — `feat(attention): add directive skeleton`

## Test summary
- `pnpm test -- projects/ng-anim8/src/lib/attention/attention.directive.spec.ts` ✅ 5/5 passed

## Concerns
- `attention.directive.scss` is scaffolded for the next animation task and is not yet wired into Angular metadata.
- Pre-existing unrelated local changes were left untouched.

## Fix note
- Exported `Anim8AttentionDirective` and `AttentionVariant` from `projects/ng-anim8/src/public-api.ts` so package consumers can import the directive via the library barrel.
- Commit: `5f14963` (`fix(attention): export directive from public api`)
- Tests run: `pnpm test -- projects/ng-anim8/src/lib/attention/attention.directive.spec.ts` ✅
- Remaining concerns: none for this scoped export fix.
