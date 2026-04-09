/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

module.exports = {
  roots: [
    "<rootDir>"
  ],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": ["babel-jest", { plugins: ["@babel/plugin-transform-modules-commonjs"] }]
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(archiver-node|is-stream|zip-stream|compress-commons|crc32-stream|minimatch|balanced-match|brace-expansion)/)"
  ],
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
  prettierPath: "<rootDir>/node_modules/prettier",
}
