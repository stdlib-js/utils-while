<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# while

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function while a test condition is true.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import whilst from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-while@deno/mod.js';
```

#### whilst( predicate, fcn\[, thisArg ] )

Invokes a `function` until a `predicate` function returns `false`.

```javascript
function predicate( i ) {
    return ( i < 5 );
}

function beep( i ) {
    console.log( 'boop: %d', i );
}

whilst( predicate, beep );
/* =>
    boop: 0
    boop: 1
    boop: 2
    boop: 3
    boop: 4
*/
```

Both the `predicate` function and the `function` to invoke are provided a single argument:

-   `i`: iteration number (starting from zero)

To set the function execution context for the invoked function, provide a `thisArg`.

```javascript
function predicate( i ) {
    return ( i < 5 );
}

function count() {
    this.count += 1;
}

var context = {
    'count': 0
};

whilst( predicate, count, context );

console.log( context.count );
// => 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import whilst from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-while@deno/mod.js';

function predicate() {
    return ( randu() > 0.05 );
}

function log( i ) {
    console.log( i );
}

whilst( predicate, log );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/do-until`][@stdlib/utils/do-until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/do-while`][@stdlib/utils/do-while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/until`][@stdlib/utils/until]</span><span class="delimiter">: </span><span class="description">invoke a function until a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/async/while`][@stdlib/utils/async/while]</span><span class="delimiter">: </span><span class="description">invoke a function while a test condition is true.</span>
-   <span class="package-name">[`@stdlib/utils/while-each`][@stdlib/utils/while-each]</span><span class="delimiter">: </span><span class="description">while a test condition is true, invoke a function for each element in a collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-while.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-while

[test-image]: https://github.com/stdlib-js/utils-while/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-while/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-while/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-while?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-while.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-while/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-while/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-while/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-while/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-while/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/do-until]: https://github.com/stdlib-js/utils-do-until/tree/deno

[@stdlib/utils/do-while]: https://github.com/stdlib-js/utils-do-while/tree/deno

[@stdlib/utils/until]: https://github.com/stdlib-js/utils-until/tree/deno

[@stdlib/utils/async/while]: https://github.com/stdlib-js/utils-async-while/tree/deno

[@stdlib/utils/while-each]: https://github.com/stdlib-js/utils-while-each/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
