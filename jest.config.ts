import type {Config} from "@jest/types"
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// const exportedObject = {
//   clearMocks
// }

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    // "mjs",
    // "cjs",
    // "json",
    // "node"
  ],
  coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
  setupFilesAfterEnv: ['<rootDir>/__tests__/jest.setup.ts'],
}

export default config