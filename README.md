# is-of-type

A collection of utility functions to help deal with JavaScript’s built-in types and add readability to your code. Only `~417 bytes` when minified and gzipped.

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
```

into

```javascript
import {
  isDefinedAndNotNull,
  isFunction,
  isNumberAndNotNaN,
  isNonEmptyString,
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
if (isNonEmptyString(n)) {
    // ...
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
- `isBoolean` (or `isBool`)
- `isFunction` (or `isFn`)
- `isObject`
- `isString`
- `isNonEmptyString`
- `isNumber`
- `isNaN`
- `isNumberAndNotNaN`
