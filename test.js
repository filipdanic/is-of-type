const test = require('tape');

const isDefined = require('./index').isDefined ;
const isDef = require('./index').isDef ;
const isNull = require('./index').isNull ;
const isDefinedAndNotNull = require('./index').isDefinedAndNotNull ;
const isDefAndNotNull = require('./index').isDefAndNotNull ;
const isArray = require('./index').isArray ;
const isBoolean = require('./index').isBoolean ;
const isBool = require('./index').isBool ;
const isFunction = require('./index').isFunction;
const isFn = require('./index').isFn;
const isObject = require('./index').isObject ;
const isString = require('./index').isString ;
const isNonEmptyString = require('./index').isNonEmptyString;
const isNumber = require('./index').isNumber ;
const isNaN = require('./index').isNaN ;
const isNumberAndNotNaN = require('./index').isNumberAndNotNaN;


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
  t.plan(22);

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

  t.equal(isNonEmptyString(''), false);
  t.equal(isNonEmptyString('fooo'), true);
  t.equal(isNonEmptyString(11), false);

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
