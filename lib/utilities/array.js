"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.even = even;
exports.allButFirst = allButFirst;
exports.allButFirstAndLast = allButFirstAndLast;
exports.third = exports.push = exports.filter = exports.first = exports.last = exports.second = exports.backwardsSome = exports.forwardsSome = void 0;
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome;
exports.first = first;
exports.second = second;
exports.third = third;
exports.last = last;
exports.push = push;
exports.filter = filter;
exports.forwardsSome = forwardsSome;
exports.backwardsSome = backwardsSome;
function even(array) {
    return array.filter(function(entry, index) {
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
    var even1 = Math.floor(index / 2) === index / 2;
    return even1;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgbGFzdCwgcHVzaCwgZmlsdGVyLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbihhcnJheSkgeyByZXR1cm4gYXJyYXkuZmlsdGVyKChlbnRyeSwgaW5kZXgpID0+IGlzRXZlbihpbmRleCkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxCdXRGaXJzdChhcnJheSkge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7ICAvLy9cblxuICBhcnJheS5zaGlmdCgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEJ1dEZpcnN0QW5kTGFzdChhcnJheSkge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7ICAvLy9cblxuICBhcnJheS5zaGlmdCgpO1xuXG4gIGFycmF5LnBvcCgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFdmVuKGluZGV4KSB7XG4gIGNvbnN0IGV2ZW4gPSAoTWF0aC5mbG9vcihpbmRleC8yKSA9PT0gaW5kZXgvMik7XG5cbiAgcmV0dXJuIGV2ZW47XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQU1JLElBQUksR0FBSixJQUFJO1FBRUosV0FBVyxHQUFYLFdBQVc7UUFRWCxrQkFBa0IsR0FBbEIsa0JBQWtCOztJQWRILFVBQVc7SUFFM0IsS0FBSyxHQUZXLFVBQVcsZ0JBRTNCLEtBQUssRUFBRSxNQUFNLEdBRkcsVUFBVyxnQkFFcEIsTUFBTSxFQUFFLEtBQUssR0FGSixVQUFXLGdCQUVaLEtBQUssRUFBRSxJQUFJLEdBRlYsVUFBVyxnQkFFTCxJQUFJLEVBQUUsSUFBSSxHQUZoQixVQUFXLGdCQUVDLElBQUksRUFBRSxNQUFNLEdBRnhCLFVBQVcsZ0JBRU8sTUFBTSxFQUFFLFlBQVksR0FGdEMsVUFBVyxnQkFFZSxZQUFZLEVBQUUsYUFBYSxHQUZyRCxVQUFXLGdCQUU2QixhQUFhO1FBQXJFLEtBQUssR0FBTCxLQUFLO1FBQUUsTUFBTSxHQUFOLE1BQU07UUFBRSxLQUFLLEdBQUwsS0FBSztRQUFFLElBQUksR0FBSixJQUFJO1FBQUUsSUFBSSxHQUFKLElBQUk7UUFBRSxNQUFNLEdBQU4sTUFBTTtRQUFFLFlBQVksR0FBWixZQUFZO1FBQUUsYUFBYSxHQUFiLGFBQWE7U0FFcEUsSUFBSSxDQUFDLEtBQUs7V0FBVyxLQUFLLENBQUMsTUFBTSxVQUFFLEtBQUssRUFBRSxLQUFLO2VBQUssTUFBTSxDQUFDLEtBQUs7OztTQUVoRSxXQUFXLENBQUMsS0FBSztJQUMvQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFM0IsS0FBSyxDQUFDLEtBQUs7V0FFSixLQUFLOztTQUdFLGtCQUFrQixDQUFDLEtBQUs7SUFDdEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNCLEtBQUssQ0FBQyxLQUFLO0lBRVgsS0FBSyxDQUFDLEdBQUc7V0FFRixLQUFLOztTQUdMLE1BQU0sQ0FBQyxLQUFLO1FBQ2IsS0FBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLENBQUMsTUFBTSxLQUFLLEdBQUMsQ0FBQztXQUV0QyxLQUFJIn0=