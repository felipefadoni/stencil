import { p as promiseResolve, b as bootstrapLazy } from './index-d78f6f6d.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["custom-button_2",[[1,"custom-button"],[0,"custom-clock",{"time":[32]}]]]], options);
  });
};

export { defineCustomElements };
