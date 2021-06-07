import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
  },
  testEnvironment: 'jsdom',
};
export default config;
