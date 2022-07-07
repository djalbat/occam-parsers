"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    first: function() {
        return first;
    },
    second: function() {
        return second;
    },
    third: function() {
        return third;
    },
    fourth: function() {
        return fourth;
    },
    last: function() {
        return last;
    },
    push: function() {
        return push;
    },
    filter: function() {
        return filter;
    },
    forwardsSome: function() {
        return forwardsSome;
    },
    backwardsSome: function() {
        return backwardsSome;
    },
    even: function() {
        return even;
    },
    allButFirstAndLast: function() {
        return allButFirstAndLast;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome;
function even(array) {
    return array.filter(function(entry, index) {
        return isEven(index);
    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBsYXN0LCBwdXNoLCBmaWx0ZXIsIGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVuKGFycmF5KSB7IHJldHVybiBhcnJheS5maWx0ZXIoKGVudHJ5LCBpbmRleCkgPT4gaXNFdmVuKGluZGV4KSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEJ1dEZpcnN0QW5kTGFzdChhcnJheSkge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7ICAvLy9cblxuICBhcnJheS5zaGlmdCgpO1xuXG4gIGFycmF5LnBvcCgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFdmVuKGluZGV4KSB7XG4gIGNvbnN0IGV2ZW4gPSAoTWF0aC5mbG9vcihpbmRleC8yKSA9PT0gaW5kZXgvMik7XG5cbiAgcmV0dXJuIGV2ZW47XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsImV2ZW4iLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiZW50cnkiLCJpbmRleCIsImlzRXZlbiIsInNsaWNlIiwic2hpZnQiLCJwb3AiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFJRUEsS0FBSztlQUFMQSxLQUFLOztJQUFFQyxNQUFNO2VBQU5BLE1BQU07O0lBQUVDLEtBQUs7ZUFBTEEsS0FBSzs7SUFBRUMsTUFBTTtlQUFOQSxNQUFNOztJQUFFQyxJQUFJO2VBQUpBLElBQUk7O0lBQUVDLElBQUk7ZUFBSkEsSUFBSTs7SUFBRUMsTUFBTTtlQUFOQSxNQUFNOztJQUFFQyxZQUFZO2VBQVpBLFlBQVk7O0lBQUVDLGFBQWE7ZUFBYkEsYUFBYTs7SUFFNUVDLElBQUk7ZUFBSkEsSUFBSTs7SUFFSkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7Ozt5QkFOSCxXQUFXO0FBRW5DLElBQVFWLEtBQUssR0FBNkVXLFVBQWMsZUFBQSxDQUFoR1gsS0FBSyxFQUFFQyxNQUFNLEdBQXFFVSxVQUFjLGVBQUEsQ0FBekZWLE1BQU0sRUFBRUMsS0FBSyxHQUE4RFMsVUFBYyxlQUFBLENBQWpGVCxLQUFLLEVBQUVDLE1BQU0sR0FBc0RRLFVBQWMsZUFBQSxDQUExRVIsTUFBTSxFQUFFQyxJQUFJLEdBQWdETyxVQUFjLGVBQUEsQ0FBbEVQLElBQUksRUFBRUMsSUFBSSxHQUEwQ00sVUFBYyxlQUFBLENBQTVETixJQUFJLEVBQUVDLE1BQU0sR0FBa0NLLFVBQWMsZUFBQSxDQUF0REwsTUFBTSxFQUFFQyxZQUFZLEdBQW9CSSxVQUFjLGVBQUEsQ0FBOUNKLFlBQVksRUFBRUMsYUFBYSxHQUFLRyxVQUFjLGVBQUEsQ0FBaENILGFBQWEsQUFBb0I7QUFFekcsU0FBU0MsSUFBSSxDQUFDRyxLQUFLLEVBQUU7SUFBRSxPQUFPQSxLQUFLLENBQUNOLE1BQU0sQ0FBQyxTQUFDTyxLQUFLLEVBQUVDLEtBQUs7ZUFBS0MsTUFBTSxDQUFDRCxLQUFLLENBQUM7S0FBQSxDQUFDLENBQUM7Q0FBRTtBQUU5RSxTQUFTSixrQkFBa0IsQ0FBQ0UsS0FBSyxFQUFFO0lBQ3hDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0ksS0FBSyxFQUFFLENBQUMsQ0FBRSxHQUFHO0lBRTNCSixLQUFLLENBQUNLLEtBQUssRUFBRSxDQUFDO0lBRWRMLEtBQUssQ0FBQ00sR0FBRyxFQUFFLENBQUM7SUFFWixPQUFPTixLQUFLLENBQUM7Q0FDZDtBQUVELFNBQVNHLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFO0lBQ3JCLElBQU1MLElBQUksR0FBSVUsSUFBSSxDQUFDQyxLQUFLLENBQUNOLEtBQUssR0FBQyxDQUFDLENBQUMsS0FBS0EsS0FBSyxHQUFDLENBQUMsQUFBQyxBQUFDO0lBRS9DLE9BQU9MLElBQUksQ0FBQztDQUNiIn0=