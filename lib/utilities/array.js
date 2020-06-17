"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.even = even;
exports.allButFirst = allButFirst;
exports.allButFirstAndLast = allButFirstAndLast;
exports.backwardsSome = exports.forwardsSome = exports.concat = exports.last = exports.third = exports.second = exports.first = void 0;

var _necessary = require("necessary");

var first = _necessary.arrayUtilities.first,
    second = _necessary.arrayUtilities.second,
    third = _necessary.arrayUtilities.third,
    last = _necessary.arrayUtilities.last,
    concat = _necessary.arrayUtilities.concat,
    forwardsSome = _necessary.arrayUtilities.forwardsSome,
    backwardsSome = _necessary.arrayUtilities.backwardsSome;
exports.backwardsSome = backwardsSome;
exports.forwardsSome = forwardsSome;
exports.concat = concat;
exports.last = last;
exports.third = third;
exports.second = second;
exports.first = first;

function even(array) {
  return array.filter(function (entry, index) {
    return isEven(index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ0aGlyZCIsImxhc3QiLCJjb25jYXQiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwiZXZlbiIsImFycmF5IiwiZmlsdGVyIiwiZW50cnkiLCJpbmRleCIsImlzRXZlbiIsImFsbEJ1dEZpcnN0Iiwic2xpY2UiLCJzaGlmdCIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsInBvcCIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQTs7SUFFZUEsSyxHQUFvRUMseUIsQ0FBcEVELEs7SUFBT0UsTSxHQUE2REQseUIsQ0FBN0RDLE07SUFBUUMsSyxHQUFxREYseUIsQ0FBckRFLEs7SUFBT0MsSSxHQUE4Q0gseUIsQ0FBOUNHLEk7SUFBTUMsTSxHQUF3Q0oseUIsQ0FBeENJLE07SUFBUUMsWSxHQUFnQ0wseUIsQ0FBaENLLFk7SUFBY0MsYSxHQUFrQk4seUIsQ0FBbEJNLGE7Ozs7Ozs7OztBQUUxRCxTQUFTQyxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxXQUFrQkMsTUFBTSxDQUFDRCxLQUFELENBQXhCO0FBQUEsR0FBYixDQUFQO0FBQXVEOztBQUU5RSxTQUFTRSxXQUFULENBQXFCTCxLQUFyQixFQUE0QjtBQUNqQ0EsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNNLEtBQU4sRUFBUixDQURpQyxDQUNUOztBQUV4Qk4sRUFBQUEsS0FBSyxDQUFDTyxLQUFOO0FBRUEsU0FBT1AsS0FBUDtBQUNEOztBQUVNLFNBQVNRLGtCQUFULENBQTRCUixLQUE1QixFQUFtQztBQUN4Q0EsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNNLEtBQU4sRUFBUixDQUR3QyxDQUNoQjs7QUFFeEJOLEVBQUFBLEtBQUssQ0FBQ08sS0FBTjtBQUVBUCxFQUFBQSxLQUFLLENBQUNTLEdBQU47QUFFQSxTQUFPVCxLQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksTUFBVCxDQUFnQkQsS0FBaEIsRUFBdUI7QUFDckIsTUFBTUosSUFBSSxHQUFJVyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsS0FBSyxHQUFDLENBQWpCLE1BQXdCQSxLQUFLLEdBQUMsQ0FBNUM7QUFFQSxTQUFPSixJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBsYXN0LCBjb25jYXQsIGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVuKGFycmF5KSB7IHJldHVybiBhcnJheS5maWx0ZXIoKGVudHJ5LCBpbmRleCkgPT4gaXNFdmVuKGluZGV4KSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEJ1dEZpcnN0KGFycmF5KSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTsgIC8vL1xuXG4gIGFycmF5LnNoaWZ0KCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsQnV0Rmlyc3RBbmRMYXN0KGFycmF5KSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTsgIC8vL1xuXG4gIGFycmF5LnNoaWZ0KCk7XG5cbiAgYXJyYXkucG9wKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBpc0V2ZW4oaW5kZXgpIHtcbiAgY29uc3QgZXZlbiA9IChNYXRoLmZsb29yKGluZGV4LzIpID09PSBpbmRleC8yKTtcblxuICByZXR1cm4gZXZlbjtcbn1cbiJdfQ==