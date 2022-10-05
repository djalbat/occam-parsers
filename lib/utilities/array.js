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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBsYXN0LCBwdXNoLCBmaWx0ZXIsIGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVuKGFycmF5KSB7IHJldHVybiBhcnJheS5maWx0ZXIoKGVudHJ5LCBpbmRleCkgPT4gaXNFdmVuKGluZGV4KSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEJ1dEZpcnN0QW5kTGFzdChhcnJheSkge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7ICAvLy9cblxuICBhcnJheS5zaGlmdCgpO1xuXG4gIGFycmF5LnBvcCgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFdmVuKGluZGV4KSB7XG4gIGNvbnN0IGV2ZW4gPSAoTWF0aC5mbG9vcihpbmRleC8yKSA9PT0gaW5kZXgvMik7XG5cbiAgcmV0dXJuIGV2ZW47XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImxhc3QiLCJwdXNoIiwiZmlsdGVyIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsImV2ZW4iLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJhcnJheVV0aWxpdGllcyIsImFycmF5IiwiZW50cnkiLCJpbmRleCIsImlzRXZlbiIsInNsaWNlIiwic2hpZnQiLCJwb3AiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUllQSxLQUFLO2VBQUxBOztJQUFPQyxNQUFNO2VBQU5BOztJQUFRQyxLQUFLO2VBQUxBOztJQUFPQyxNQUFNO2VBQU5BOztJQUFRQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxNQUFNO2VBQU5BOztJQUFRQyxZQUFZO2VBQVpBOztJQUFjQyxhQUFhO2VBQWJBOztJQUUvREMsSUFBSTtlQUFKQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7O3lCQU5lO0FBRXhCLElBQVFWLFFBQWtGVyx5QkFBYyxDQUFoR1gsT0FBT0MsU0FBMkVVLHlCQUFjLENBQXpGVixRQUFRQyxRQUFtRVMseUJBQWMsQ0FBakZULE9BQU9DLFNBQTREUSx5QkFBYyxDQUExRVIsUUFBUUMsT0FBb0RPLHlCQUFjLENBQWxFUCxNQUFNQyxPQUE4Q00seUJBQWMsQ0FBNUROLE1BQU1DLFNBQXdDSyx5QkFBYyxDQUF0REwsUUFBUUMsZUFBZ0NJLHlCQUFjLENBQTlDSixjQUFjQyxnQkFBa0JHLHlCQUFjLENBQWhDSDtBQUV4RSxTQUFTQyxLQUFLRyxLQUFLLEVBQUU7SUFBRSxPQUFPQSxNQUFNTixNQUFNLENBQUMsU0FBQ08sT0FBT0M7ZUFBVUMsT0FBT0Q7O0FBQVM7QUFFN0UsU0FBU0osbUJBQW1CRSxLQUFLLEVBQUU7SUFDeENBLFFBQVFBLE1BQU1JLEtBQUssSUFBSyxHQUFHO0lBRTNCSixNQUFNSyxLQUFLO0lBRVhMLE1BQU1NLEdBQUc7SUFFVCxPQUFPTjtBQUNUO0FBRUEsU0FBU0csT0FBT0QsS0FBSyxFQUFFO0lBQ3JCLElBQU1MLE9BQVFVLEtBQUtDLEtBQUssQ0FBQ04sUUFBTSxPQUFPQSxRQUFNO0lBRTVDLE9BQU9MO0FBQ1QifQ==