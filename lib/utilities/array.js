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
    var even = Math.floor(index / 2) === index / 2;
    return even;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwibGFzdCIsInB1c2giLCJmaWx0ZXIiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwiZXZlbiIsImFycmF5IiwiZW50cnkiLCJpbmRleCIsImlzRXZlbiIsImFsbEJ1dEZpcnN0Iiwic2xpY2UiLCJzaGlmdCIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsInBvcCIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQU1JLElBQUksR0FBSixJQUFJO1FBRUosV0FBVyxHQUFYLFdBQVc7UUFRWCxrQkFBa0IsR0FBbEIsa0JBQWtCOztBQWRILEdBQVcsQ0FBWCxVQUFXO0FBRW5DLEdBQUssQ0FBRyxLQUFLLEdBRlcsVUFBVyxnQkFFM0IsS0FBSyxFQUFFLE1BQU0sR0FGRyxVQUFXLGdCQUVwQixNQUFNLEVBQUUsS0FBSyxHQUZKLFVBQVcsZ0JBRVosS0FBSyxFQUFFLElBQUksR0FGVixVQUFXLGdCQUVMLElBQUksRUFBRSxJQUFJLEdBRmhCLFVBQVcsZ0JBRUMsSUFBSSxFQUFFLE1BQU0sR0FGeEIsVUFBVyxnQkFFTyxNQUFNLEVBQUUsWUFBWSxHQUZ0QyxVQUFXLGdCQUVlLFlBQVksRUFBRSxhQUFhLEdBRnJELFVBQVcsZ0JBRTZCLGFBQWE7UUFBckUsS0FBSyxHQUFMLEtBQUs7UUFBRSxNQUFNLEdBQU4sTUFBTTtRQUFFLEtBQUssR0FBTCxLQUFLO1FBQUUsSUFBSSxHQUFKLElBQUk7UUFBRSxJQUFJLEdBQUosSUFBSTtRQUFFLE1BQU0sR0FBTixNQUFNO1FBQUUsWUFBWSxHQUFaLFlBQVk7UUFBRSxhQUFhLEdBQWIsYUFBYTtTQUVwRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsS0FBSyxFQUFFLEtBQUs7UUFBSyxNQUFNLENBQU4sTUFBTSxDQUFDLEtBQUs7O0FBQUksQ0FBQztTQUVyRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNCLEtBQUssQ0FBQyxLQUFLO0lBRVgsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDO1NBRWUsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNCLEtBQUssQ0FBQyxLQUFLO0lBRVgsS0FBSyxDQUFDLEdBQUc7SUFFVCxNQUFNLENBQUMsS0FBSztBQUNkLENBQUM7U0FFUSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsR0FBSyxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFDLENBQUM7SUFFN0MsTUFBTSxDQUFDLElBQUk7QUFDYixDQUFDIn0=