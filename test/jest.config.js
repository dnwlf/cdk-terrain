/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const esmPreset = require("../jest.preset");

module.exports = {
  ...esmPreset,
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/*test.ts'],
  modulePathIgnorePatterns: ["main-test.ts"],
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testTimeout: 300000
}
