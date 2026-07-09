# Task 2 Report

- Status: done
- Commits: 30be826 feat(attention): add imperative replay behavior
- Test summary: `pnpm exec jest --config projects/ng-anim8/jest.config.ts projects/ng-anim8/src/lib/attention/attention.directive.spec.ts --runInBand` passed (9/9)
- Concerns: none

## Fix report

- Changed `Anim8AttentionDirective` so its host `animationend` cleanup only removes `anim8-attention--active` when the event target is the host itself.
- Added a focused regression test proving a bubbled `animationend` from projected content does not clear the host class.
- Commit: `aa6d501` `fix(attention): ignore bubbled animationend events`
- Tests run: `pnpm exec jest --config projects/ng-anim8/jest.config.ts projects/ng-anim8/src/lib/attention/attention.directive.spec.ts --runInBand`
- Remaining concerns: none
