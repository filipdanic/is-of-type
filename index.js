/**
 * @fileoverview
 *
 * Install:
 *  `npm install is-of-type --save`
 *   # or
 *  `yarn add is-of-type`
 *
 * Usage:
 *  All of the functions exports by this package have the following signature:
 *  fn(arg: Any): boolean
 *
 * This package exports the following utilities and their names should speak for themselves:
 *  - isDefined
 *  - isDef
 *  - isNull
 *  - isDefinedAndNotNull
 *  - isDefAndNotNull
 *  - isArray
 *  - isBoolean
 *  - isBool
 *  - isFunction
 *  - isFn
 *  - isObject
 *  - isString
 *  - isNumber
 *  - isNaN
 *  - isNumberAndNotNaN
 *
 */

/**
 * @param {*} _
 * @returns {boolean}
 */
const isDefined = (_) => _ !== undefined;

/**
 * @param {*} _
 * @returns {boolean}
 */
const isNull = (_) => _ === null;

/**
 * @param {*} _
 * @returns {boolean}
 */
const isDefinedAndNotNull = (_) => isDefined(_) && !isNull(_);

/**
 * @param {*} _
 * @returns {boolean}
 */
const isNumber = (_) => typeof _ === 'number';

/**
 * @param {*} _
 * @returns {boolean}
 */
const isNaN = (_) => Number.isNaN(_);

/**
 * @param {*} _
 * @returns {boolean}
 */
const isNumberAndNotNaN = (_) => isNumber(_) && !isNaN(_);

/**
 * @param {*} _
 * @returns {boolean}
 */
const isArray = (_) => Array.isArray(_);

/**
 * @param {*} _
 * @returns {boolean}
 */
const isBoolean = (_) => typeof _ === 'boolean';

/**
 * @param {*} _
 * @returns {boolean}
 */
const isFunction = (_) => typeof _ === 'function';

/**
 * @param {*} _
 * @returns {boolean}
 */
const isFn = (_) => typeof _ === 'function';

/**
 * @param {*} _
 * @returns {boolean}
 */
const isObject = (_) => typeof _ === 'object';

/**
 * @param {*} _
 * @returns {boolean}
 */
const isString = (_) => typeof _ === 'string';

/**
 *
 * @param _
 * @return {boolean}
 */
const isNonEmptyString = (_) => isString(_) && _.length > 0;

exports.isDefined = isDefined;
exports.isDef = isDefined;
exports.isNull = isNull;
exports.isDefinedAndNotNull = isDefinedAndNotNull;
exports.isDefAndNotNull = isDefinedAndNotNull;

exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isBool = isBoolean;
exports.isFunction = isFunction;
exports.isFn = isFn;
exports.isObject = isObject;
exports.isString = isString;
exports.isNonEmptyString = isNonEmptyString;

exports.isNumber = isNumber;
exports.isNaN = isNaN;
exports.isNumberAndNotNaN = isNumberAndNotNaN;
