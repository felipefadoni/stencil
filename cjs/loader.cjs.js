'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0fa0251.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["custom-button_2.cjs",[[1,"custom-button"],[0,"custom-clock",{"time":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
