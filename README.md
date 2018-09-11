# is-of-type

A collection of utility functions to help deal with JavaScript’s built-in types and add readability to your code. Only `~430 bytes` when minified and gzipped.

## Install
``` bash
`npm install is-of-type --save`
# or
`yarn add is-of-type`
```

## Usage

All of the functions exports by this package have the following signature: `fn(arg: Any): boolean`.

This package helps you turn:

```javascript
if (x !== null && x !== undefined) {
    //...
}
if (typeof fn === 'function') {
    fn();
}
if (typeof n === 'number' && !isNaN(n)) {
    // ...
}
if (typeof s === 'string' && s.length > 0) {
    // ...
}
if (typeof o === 'object') {
   // ...
}
```

into

```javascript
import {
  isDefinedAndNotNull,
  isFunction,
  isNumberAndNotNaN,
  isNonEmptyString,
  isObject,
} from 'is-of-type';

if (isDefinedAndNotNull(x)) {
    //...
}
if (isFunction(fn)) {
    fn();
}
if (isNumberAndNotNaN(n)) {
    // ...
}
if (isNonEmptyString(s)) {
    // ...
}
if (isObject(o)) {
    /*
     * Identical to typeof o === 'object', so let’s null, Array, Set, Map etc. pass
     * You can compose your own method to improve this, e.g:
     * const isRealObject = (o) => {
     *   return isObjecy(o) && !isNull(o);
     * }
     */
}
```

And many other checks that are easier to read and composable.

## List of Functions

This package exports the following utilities:
- `isDefined` (or `isDef`)
- `isNull`
- `isDefinedAndNotNull`
- `isDefAndNotNull`
- `isArray`
- `isNonEmptyArray`
- `isBoolean` (or `isBool`)
- `isFunction` (or `isFn`)
- `isObject`
  - Strict check `typeof o === object'`
  - So returns true for `Array`, `null`, `Set`, `Map`, `Date`, and `regex`.
- `isDate`
- `isString`
- `isNonEmptyString`
- `isNumber`
- `isNaN`
- `isNumberAndNotNaN`
