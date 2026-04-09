/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/**
 * Shared Jest preset for handling ESM-only dependencies.
 *
 * archiver-node and several of its transitive dependencies ship as
 * ESM-only packages. Since tests run in CJS mode, we use babel-jest
 * with @babel/plugin-transform-modules-commonjs to transpile them.
 */
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": ["babel-jest", { plugins: ["@babel/plugin-transform-modules-commonjs"] }]
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(archiver-node|is-stream|zip-stream|compress-commons|crc32-stream|minimatch|balanced-match|brace-expansion)/)"
  ],
};
