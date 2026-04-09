/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const esmPreset = require("../../../jest.preset");

module.exports = {
  ...esmPreset,
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
  globalSetup: "./test/globalSetup.ts",
  globalTeardown: "./test/globalTeardown.ts",
}
