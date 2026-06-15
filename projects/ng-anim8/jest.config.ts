import type { Config } from 'jest';

const config: Config = {
  displayName: 'ng-anim8',
  setupFilesAfterEnv: [
    '<rootDir>/projects/ng-anim8/setup-jest.ts',
  ],
  collectCoverage: false,
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/coverage/ng-anim8',
};

export default config;
