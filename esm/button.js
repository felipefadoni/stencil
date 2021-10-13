import { p as promiseResolve, b as bootstrapLazy } from './index-d78f6f6d.js';

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["custom-button_2",[[1,"custom-button"],[0,"custom-clock",{"time":[32]}]]]], options);
});
