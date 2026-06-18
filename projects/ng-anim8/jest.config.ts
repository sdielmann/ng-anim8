import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets/index.js';

const config: Config = {
  ...createCjsPreset(),
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts',
  ],
  roots: ['<rootDir>/src'],
  collectCoverage: false,
  coverageReporters: ['cobertura'],
  coverageDirectory: '<rootDir>/coverage/ng-anim8',
};

export default config;
