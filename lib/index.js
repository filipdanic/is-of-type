'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var isDefined = function isDefined(_) {
  return _ !== undefined;
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isNull = function isNull(_) {
  return _ === null;
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isDefinedAndNotNull = function isDefinedAndNotNull(_) {
  return isDefined(_) && !isNull(_);
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isNumber = function isNumber(_) {
  return typeof _ === 'number';
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isNaN = function isNaN(_) {
  return Number.isNaN(_);
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isNumberAndNotNaN = function isNumberAndNotNaN(_) {
  return isNumber(_) && !isNaN(_);
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isArray = function isArray(_) {
  return Array.isArray(_);
};

/**
 *
 * @param {*} _
 * @return {boolean}
 */
var isNonEmptyArray = function isNonEmptyArray(_) {
  return isArray(_) && _.length > 0;
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isBoolean = function isBoolean(_) {
  return typeof _ === 'boolean';
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isFunction = function isFunction(_) {
  return typeof _ === 'function';
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isFn = function isFn(_) {
  return typeof _ === 'function';
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isObject = function isObject(_) {
  return (typeof _ === 'undefined' ? 'undefined' : _typeof(_)) === 'object';
};

/**
 * @param {*} _
 * @returns {boolean}
 */
var isString = function isString(_) {
  return typeof _ === 'string';
};

/**
 *
 * @param _
 * @return {boolean}
 */
var isNonEmptyString = function isNonEmptyString(_) {
  return isString(_) && _.length > 0;
};

exports.isDefined = isDefined;
exports.isDef = isDefined;
exports.isNull = isNull;
exports.isDefinedAndNotNull = isDefinedAndNotNull;
exports.isDefAndNotNull = isDefinedAndNotNull;

exports.isArray = isArray;
exports.isNonEmptyArray = isNonEmptyArray;
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