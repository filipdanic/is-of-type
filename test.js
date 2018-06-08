const test = require('tape');

const isDefined = require('./readme').isDefined ;
const isDef = require('./readme').isDef ;
const isNull = require('./readme').isNull ;
const isDefinedAndNotNull = require('./readme').isDefinedAndNotNull ;
const isDefAndNotNull = require('./readme').isDefAndNotNull ;
const isArray = require('./readme').isArray ;
const isBoolean = require('./readme').isBoolean ;
const isBool = require('./readme').isBool ;
const isFunction = require('./readme').isFunction;
const isFn = require('./readme').isFn;
const isObject = require('./readme').isObject ;
const isString = require('./readme').isString ;
const isNumber = require('./readme').isNumber ;
const isNaN = require('./readme').isNaN ;
const isNumberAndNotNaN = require('./readme').isNumberAndNotNaN;


test('(un)defined and null checkers work', (t) => {
  t.plan(25);
  t.equal(isDefined(0), true);
  t.equal(isDefined(null), true);
  t.equal(isDefined(''), true);
  t.equal(isDefined([]), true);
  t.equal(isDefined(undefined), false);

  t.equal(isDef(0), true);
  t.equal(isDef(null), true);
  t.equal(isDef(''), true);
  t.equal(isDef([]), true);
  t.equal(isDef(undefined), false);

  t.equal(isNull(0), false);
  t.equal(isNull(''), false);
  t.equal(isNull([]), false);
  t.equal(isNull(undefined), false);
  t.equal(isNull(null), true);

  t.equal(isDefinedAndNotNull(0), true);
  t.equal(isDefinedAndNotNull(''), true);
  t.equal(isDefinedAndNotNull([]), true);
  t.equal(isDefinedAndNotNull(undefined), false);
  t.equal(isDefinedAndNotNull(null), false);

  t.equal(isDefAndNotNull(0), true);
  t.equal(isDefAndNotNull(''), true);
  t.equal(isDefAndNotNull([]), true);
  t.equal(isDefAndNotNull(undefined), false);
  t.equal(isDefAndNotNull(null), false);
  t.end();
});

test('basic isX work', (t) => {
  t.plan(19);

  t.equal(isArray({}), false);
  t.equal(isArray([]), true);

  t.equal(isBoolean(1), false);
  t.equal(isBoolean('true'), false);
  t.equal(isBoolean(false), true);

  t.equal(isBool(1), false);
  t.equal(isBool('true'), false);
  t.equal(isBool(false), true);

  t.equal(isObject([]), true);
  t.equal(isObject({}), true);

  t.equal(isFunction(), false);
  t.equal(isFunction({}), false);
  t.equal(isFunction(() => ({})), true);

  t.equal(isFn(), false);
  t.equal(isFn({}), false);
  t.equal(isFn(() => ({})), true);

  t.equal(isString(''), true);
  t.equal(isString('fooo'), true);
  t.equal(isString(11), false);
  t.end();
});

test('number checks work', (t) => {
  t.plan(12);

  // 1 divided by 0 is Infinity in JS
  t.equal(isNumber(1), true);
  t.equal(isNumber(1/0), true);
  t.equal(isNumber(NaN), true);
  t.equal(isNumber('1'), false);

  t.equal(isNaN(NaN), true);
  t.equal(isNaN(1/0), false);
  t.equal(isNaN(null), false);
  t.equal(isNaN(), false);

  t.equal(isNumberAndNotNaN(1), true);
  t.equal(isNumberAndNotNaN(1/0), true);
  t.equal(isNumberAndNotNaN('1'), false);
  t.equal(isNumberAndNotNaN(NaN), false);
  t.end();
});
