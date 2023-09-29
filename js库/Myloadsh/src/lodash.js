/**
 *
 * @param {Array} arr
 * @param {number} [start=0]
 * @param {number} [end=arr.length]
 * @returns {Array}
 * @example
 * let arr = [1,2,3,4]
 * _.slice(arr,-2)
 * //=> [3,4]
 * _.slice(arr,-2,-1)
 * //=> [3]
 */
function slice(arr, start = 0, end = arr.length) {
  let length = arr == null ? 0 : arr.length;
  if (!length) {
    return [];
  }
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;
  let index = 0;
  let res = [];
  while (index < length) {
    res[index] = arr[start + index];
    index++;
  }
  return res;
}

/**
 * Converts `value` to a finite number.
 *
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 */
function toFinite(value) {
  const INFINITY = 1 / 0;
  const MAX_INTEGER = 1.7976931348623157e308;
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value //转为整数
 * @returns {number}
 * @see isInteger,
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value) {
  const result = toFinite(value);
  const remainder = result % 1;

  return remainder ? result - remainder : result;
}

/**
 * Converts `value` to a number.
 *
 * @param {*} value
 * @returns {number} Returns the number.
 * @see isInteger,
 * @example
 * 转换为一个数字
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
function toNumber(value) {
  let reTrim = /^\s+|\s+$/g; //去两头空格
  let reIsBinary = /^ob[01]+$/i; //判断二进制串
  const reIsOctal = /^0o[0-7]+$/i; //判断八进制字符
  const reIsBadHex = /^[-+]0x[0-9a-f]+$/i; //判断十六进制
  if (typeof value) {
    return value;
  }
  if (isSymbol(value)) {
    return NaN;
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value !== "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  const isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NaN : +value;
}

/**
 *
 * @param {*} value
 * @returns {boolean}
 */
function isObject(value) {
  return typeof value === "object" && value !== null;
}

/**
 * @param {*} value
 * @returns {string}
 * //
 */
function getTag(value) {
  const toString = Object.prototype.toString;
  if (value == null) {
    return value === null ? "[object Null]" : "[object Undefined]";
  }
  return toString.call(value);
}

/**
 *  @param {*} value
 *  @returns {boolean}
 *  //判断value 是否是原始Symbol 或者 对象Symbol
 */
function isSymbol(value) {
  const type = typeof value;
  return type === "symbol" || (type === "object" && getTag(value) === "[object Symbol]");
}

module.exports = [
  {
    name: "slice",
    fn: slice,
  },
  {
    name: "isObject",
    fn: isObject,
  },
  {
    name: "getTag",
    fn: getTag,
  },
  {
    name: "isSymbol",
    fn: isSymbol,
  },
];
