"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.even = even;
exports.concat = concat;
exports.allButFirst = allButFirst;
exports.allButFirstAndLast = allButFirstAndLast;
exports.backwardsSome = exports.forwardsSome = exports.push = exports.last = exports.third = exports.second = exports.first = void 0;

var _necessary = require("necessary");

var first = _necessary.arrayUtilities.first,
    second = _necessary.arrayUtilities.second,
    third = _necessary.arrayUtilities.third,
    last = _necessary.arrayUtilities.last,
    push = _necessary.arrayUtilities.push,
    forwardsSome = _necessary.arrayUtilities.forwardsSome,
    backwardsSome = _necessary.arrayUtilities.backwardsSome;
exports.backwardsSome = backwardsSome;
exports.forwardsSome = forwardsSome;
exports.push = push;
exports.last = last;
exports.third = third;
exports.second = second;
exports.first = first;

function even(array) {
  return array.filter(function (entry, index) {
    return isEven(index);
  });
}

function concat(array1) {
  for (var _len = arguments.length, elementOrArray2Array = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elementOrArray2Array[_key - 1] = arguments[_key];
  }

  elementOrArray2Array.forEach(function (elementOrArray2) {
    var array2 = elementOrArray2 instanceof Array ? elementOrArray2 : [elementOrArray2];
    push(array1, array2);
  });
}

function allButFirst(array) {
  array = array.slice(); ///

  array.shift();
  return array;
}

function allButFirstAndLast(array) {
  array = array.slice(); ///

  array.shift();
  array.pop();
  return array;
}

function isEven(index) {
  var even = Math.floor(index / 2) === index / 2;
  return even;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ0aGlyZCIsImxhc3QiLCJwdXNoIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsImV2ZW4iLCJhcnJheSIsImZpbHRlciIsImVudHJ5IiwiaW5kZXgiLCJpc0V2ZW4iLCJjb25jYXQiLCJhcnJheTEiLCJlbGVtZW50T3JBcnJheTJBcnJheSIsImZvckVhY2giLCJlbGVtZW50T3JBcnJheTIiLCJhcnJheTIiLCJBcnJheSIsImFsbEJ1dEZpcnN0Iiwic2xpY2UiLCJzaGlmdCIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsInBvcCIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBRUE7O0lBRWVBLEssR0FBa0VDLHlCLENBQWxFRCxLO0lBQU9FLE0sR0FBMkRELHlCLENBQTNEQyxNO0lBQVFDLEssR0FBbURGLHlCLENBQW5ERSxLO0lBQU9DLEksR0FBNENILHlCLENBQTVDRyxJO0lBQU1DLEksR0FBc0NKLHlCLENBQXRDSSxJO0lBQU1DLFksR0FBZ0NMLHlCLENBQWhDSyxZO0lBQWNDLGEsR0FBa0JOLHlCLENBQWxCTSxhOzs7Ozs7Ozs7QUFFeEQsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUUsU0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FBa0JDLE1BQU0sQ0FBQ0QsS0FBRCxDQUF4QjtBQUFBLEdBQWIsQ0FBUDtBQUF1RDs7QUFFOUUsU0FBU0UsTUFBVCxDQUFnQkMsTUFBaEIsRUFBaUQ7QUFBQSxvQ0FBdEJDLG9CQUFzQjtBQUF0QkEsSUFBQUEsb0JBQXNCO0FBQUE7O0FBQ3REQSxFQUFBQSxvQkFBb0IsQ0FBQ0MsT0FBckIsQ0FBNkIsVUFBQ0MsZUFBRCxFQUFxQjtBQUNoRCxRQUFNQyxNQUFNLEdBQUlELGVBQWUsWUFBWUUsS0FBNUIsR0FDR0YsZUFESCxHQUVHLENBQUVBLGVBQUYsQ0FGbEI7QUFJQWIsSUFBQUEsSUFBSSxDQUFDVSxNQUFELEVBQVNJLE1BQVQsQ0FBSjtBQUNELEdBTkQ7QUFPRDs7QUFFTSxTQUFTRSxXQUFULENBQXFCWixLQUFyQixFQUE0QjtBQUNqQ0EsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNhLEtBQU4sRUFBUixDQURpQyxDQUNUOztBQUV4QmIsRUFBQUEsS0FBSyxDQUFDYyxLQUFOO0FBRUEsU0FBT2QsS0FBUDtBQUNEOztBQUVNLFNBQVNlLGtCQUFULENBQTRCZixLQUE1QixFQUFtQztBQUN4Q0EsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNhLEtBQU4sRUFBUixDQUR3QyxDQUNoQjs7QUFFeEJiLEVBQUFBLEtBQUssQ0FBQ2MsS0FBTjtBQUVBZCxFQUFBQSxLQUFLLENBQUNnQixHQUFOO0FBRUEsU0FBT2hCLEtBQVA7QUFDRDs7QUFFRCxTQUFTSSxNQUFULENBQWdCRCxLQUFoQixFQUF1QjtBQUNyQixNQUFNSixJQUFJLEdBQUlrQixJQUFJLENBQUNDLEtBQUwsQ0FBV2YsS0FBSyxHQUFDLENBQWpCLE1BQXdCQSxLQUFLLEdBQUMsQ0FBNUM7QUFFQSxTQUFPSixJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBsYXN0LCBwdXNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbihhcnJheSkgeyByZXR1cm4gYXJyYXkuZmlsdGVyKChlbnRyeSwgaW5kZXgpID0+IGlzRXZlbihpbmRleCkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCAuLi5lbGVtZW50T3JBcnJheTJBcnJheSkge1xuICBlbGVtZW50T3JBcnJheTJBcnJheS5mb3JFYWNoKChlbGVtZW50T3JBcnJheTIpID0+IHtcbiAgICBjb25zdCBhcnJheTIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG5cbiAgICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxCdXRGaXJzdChhcnJheSkge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7ICAvLy9cblxuICBhcnJheS5zaGlmdCgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEJ1dEZpcnN0QW5kTGFzdChhcnJheSkge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7ICAvLy9cblxuICBhcnJheS5zaGlmdCgpO1xuXG4gIGFycmF5LnBvcCgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFdmVuKGluZGV4KSB7XG4gIGNvbnN0IGV2ZW4gPSAoTWF0aC5mbG9vcihpbmRleC8yKSA9PT0gaW5kZXgvMik7XG5cbiAgcmV0dXJuIGV2ZW47XG59XG4iXX0=