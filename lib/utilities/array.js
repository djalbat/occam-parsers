"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.even = even;
exports.allButFirst = allButFirst;
exports.allButFirstAndLast = allButFirstAndLast;
exports.backwardsSome = exports.forwardsSome = exports.filter = exports.push = exports.last = exports.third = exports.second = exports.first = void 0;

var _necessary = require("necessary");

var first = _necessary.arrayUtilities.first,
    second = _necessary.arrayUtilities.second,
    third = _necessary.arrayUtilities.third,
    last = _necessary.arrayUtilities.last,
    push = _necessary.arrayUtilities.push,
    filter = _necessary.arrayUtilities.filter,
    forwardsSome = _necessary.arrayUtilities.forwardsSome,
    backwardsSome = _necessary.arrayUtilities.backwardsSome;
exports.backwardsSome = backwardsSome;
exports.forwardsSome = forwardsSome;
exports.filter = filter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ0aGlyZCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsImV2ZW4iLCJhcnJheSIsImVudHJ5IiwiaW5kZXgiLCJpc0V2ZW4iLCJhbGxCdXRGaXJzdCIsInNsaWNlIiwic2hpZnQiLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJwb3AiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUE7O0lBRWVBLEssR0FBMEVDLHlCLENBQTFFRCxLO0lBQU9FLE0sR0FBbUVELHlCLENBQW5FQyxNO0lBQVFDLEssR0FBMkRGLHlCLENBQTNERSxLO0lBQU9DLEksR0FBb0RILHlCLENBQXBERyxJO0lBQU1DLEksR0FBOENKLHlCLENBQTlDSSxJO0lBQU1DLE0sR0FBd0NMLHlCLENBQXhDSyxNO0lBQVFDLFksR0FBZ0NOLHlCLENBQWhDTSxZO0lBQWNDLGEsR0FBa0JQLHlCLENBQWxCTyxhOzs7Ozs7Ozs7O0FBRWhFLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFFLFNBQU9BLEtBQUssQ0FBQ0osTUFBTixDQUFhLFVBQUNLLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQWtCQyxNQUFNLENBQUNELEtBQUQsQ0FBeEI7QUFBQSxHQUFiLENBQVA7QUFBdUQ7O0FBRTlFLFNBQVNFLFdBQVQsQ0FBcUJKLEtBQXJCLEVBQTRCO0FBQ2pDQSxFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0ssS0FBTixFQUFSLENBRGlDLENBQ1Q7O0FBRXhCTCxFQUFBQSxLQUFLLENBQUNNLEtBQU47QUFFQSxTQUFPTixLQUFQO0FBQ0Q7O0FBRU0sU0FBU08sa0JBQVQsQ0FBNEJQLEtBQTVCLEVBQW1DO0FBQ3hDQSxFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0ssS0FBTixFQUFSLENBRHdDLENBQ2hCOztBQUV4QkwsRUFBQUEsS0FBSyxDQUFDTSxLQUFOO0FBRUFOLEVBQUFBLEtBQUssQ0FBQ1EsR0FBTjtBQUVBLFNBQU9SLEtBQVA7QUFDRDs7QUFFRCxTQUFTRyxNQUFULENBQWdCRCxLQUFoQixFQUF1QjtBQUNyQixNQUFNSCxJQUFJLEdBQUlVLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixLQUFLLEdBQUMsQ0FBakIsTUFBd0JBLEtBQUssR0FBQyxDQUE1QztBQUVBLFNBQU9ILElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuZXhwb3J0IGNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGxhc3QsIHB1c2gsIGZpbHRlciwgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW4oYXJyYXkpIHsgcmV0dXJuIGFycmF5LmZpbHRlcigoZW50cnksIGluZGV4KSA9PiBpc0V2ZW4oaW5kZXgpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsQnV0Rmlyc3QoYXJyYXkpIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpOyAgLy8vXG5cbiAgYXJyYXkuc2hpZnQoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxCdXRGaXJzdEFuZExhc3QoYXJyYXkpIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpOyAgLy8vXG5cbiAgYXJyYXkuc2hpZnQoKTtcblxuICBhcnJheS5wb3AoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzRXZlbihpbmRleCkge1xuICBjb25zdCBldmVuID0gKE1hdGguZmxvb3IoaW5kZXgvMikgPT09IGluZGV4LzIpO1xuXG4gIHJldHVybiBldmVuO1xufVxuIl19