// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e,n,s){var i;if(!t(e))throw new TypeError(r("invalid argument. First argument must be a function. Value: `%s`.",e));if(!t(n))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",n));for(i=0;e(i);)n.call(s,i),i+=1}export{e as default};
//# sourceMappingURL=index.mjs.map
