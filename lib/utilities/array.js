"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.even = even;
exports.concat = concat;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJ0aGlyZCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsImV2ZW4iLCJhcnJheSIsImVudHJ5IiwiaW5kZXgiLCJpc0V2ZW4iLCJjb25jYXQiLCJhcnJheTEiLCJlbGVtZW50T3JBcnJheTJBcnJheSIsImZvckVhY2giLCJlbGVtZW50T3JBcnJheTIiLCJhcnJheTIiLCJBcnJheSIsImFsbEJ1dEZpcnN0Iiwic2xpY2UiLCJzaGlmdCIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsInBvcCIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBRUE7O0lBRWVBLEssR0FBMEVDLHlCLENBQTFFRCxLO0lBQU9FLE0sR0FBbUVELHlCLENBQW5FQyxNO0lBQVFDLEssR0FBMkRGLHlCLENBQTNERSxLO0lBQU9DLEksR0FBb0RILHlCLENBQXBERyxJO0lBQU1DLEksR0FBOENKLHlCLENBQTlDSSxJO0lBQU1DLE0sR0FBd0NMLHlCLENBQXhDSyxNO0lBQVFDLFksR0FBZ0NOLHlCLENBQWhDTSxZO0lBQWNDLGEsR0FBa0JQLHlCLENBQWxCTyxhOzs7Ozs7Ozs7O0FBRWhFLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFFLFNBQU9BLEtBQUssQ0FBQ0osTUFBTixDQUFhLFVBQUNLLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQWtCQyxNQUFNLENBQUNELEtBQUQsQ0FBeEI7QUFBQSxHQUFiLENBQVA7QUFBdUQ7O0FBRTlFLFNBQVNFLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQWlEO0FBQUEsb0NBQXRCQyxvQkFBc0I7QUFBdEJBLElBQUFBLG9CQUFzQjtBQUFBOztBQUN0REEsRUFBQUEsb0JBQW9CLENBQUNDLE9BQXJCLENBQTZCLFVBQUNDLGVBQUQsRUFBcUI7QUFDaEQsUUFBTUMsTUFBTSxHQUFJRCxlQUFlLFlBQVlFLEtBQTVCLEdBQ0dGLGVBREgsR0FFRyxDQUFFQSxlQUFGLENBRmxCO0FBSUFiLElBQUFBLElBQUksQ0FBQ1UsTUFBRCxFQUFTSSxNQUFULENBQUo7QUFDRCxHQU5EO0FBT0Q7O0FBRU0sU0FBU0UsV0FBVCxDQUFxQlgsS0FBckIsRUFBNEI7QUFDakNBLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDWSxLQUFOLEVBQVIsQ0FEaUMsQ0FDVDs7QUFFeEJaLEVBQUFBLEtBQUssQ0FBQ2EsS0FBTjtBQUVBLFNBQU9iLEtBQVA7QUFDRDs7QUFFTSxTQUFTYyxrQkFBVCxDQUE0QmQsS0FBNUIsRUFBbUM7QUFDeENBLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDWSxLQUFOLEVBQVIsQ0FEd0MsQ0FDaEI7O0FBRXhCWixFQUFBQSxLQUFLLENBQUNhLEtBQU47QUFFQWIsRUFBQUEsS0FBSyxDQUFDZSxHQUFOO0FBRUEsU0FBT2YsS0FBUDtBQUNEOztBQUVELFNBQVNHLE1BQVQsQ0FBZ0JELEtBQWhCLEVBQXVCO0FBQ3JCLE1BQU1ILElBQUksR0FBSWlCLElBQUksQ0FBQ0MsS0FBTCxDQUFXZixLQUFLLEdBQUMsQ0FBakIsTUFBd0JBLEtBQUssR0FBQyxDQUE1QztBQUVBLFNBQU9ILElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuZXhwb3J0IGNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGxhc3QsIHB1c2gsIGZpbHRlciwgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW4oYXJyYXkpIHsgcmV0dXJuIGFycmF5LmZpbHRlcigoZW50cnksIGluZGV4KSA9PiBpc0V2ZW4oaW5kZXgpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgLi4uZWxlbWVudE9yQXJyYXkyQXJyYXkpIHtcbiAgZWxlbWVudE9yQXJyYXkyQXJyYXkuZm9yRWFjaCgoZWxlbWVudE9yQXJyYXkyKSA9PiB7XG4gICAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuXG4gICAgcHVzaChhcnJheTEsIGFycmF5Mik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsQnV0Rmlyc3QoYXJyYXkpIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpOyAgLy8vXG5cbiAgYXJyYXkuc2hpZnQoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxCdXRGaXJzdEFuZExhc3QoYXJyYXkpIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpOyAgLy8vXG5cbiAgYXJyYXkuc2hpZnQoKTtcblxuICBhcnJheS5wb3AoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzRXZlbihpbmRleCkge1xuICBjb25zdCBldmVuID0gKE1hdGguZmxvb3IoaW5kZXgvMikgPT09IGluZGV4LzIpO1xuXG4gIHJldHVybiBldmVuO1xufVxuIl19