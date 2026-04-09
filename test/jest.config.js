/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/*test.ts'],
  modulePathIgnorePatterns: ["main-test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": ["babel-jest", { plugins: ["@babel/plugin-transform-modules-commonjs"] }]
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(archiver-node|is-stream|zip-stream|compress-commons|crc32-stream|minimatch|balanced-match|brace-expansion)/)"
  ],
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testTimeout: 300000
}
