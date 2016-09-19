'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp) {
    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = false,
          index = context.getIndex(),
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            matches = this.regExp.exec(inputSubstring);

        if (matches && matches.index === 0) {
          var firstMatch = first(matches),
              amount = firstMatch.length; ///

          context.advance(amount);

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp) {
      var regularExpressionPart = null,
          regularExpressionRegExp = /\/([^/]+)\//,
          matches = symbol.match(regularExpressionRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            pattern = secondMatch,
            ///
        regExp = new RegExp(pattern);

        regularExpressionPart = new RegularExpressionPart(regExp);
      }

      return regularExpressionPart;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiZ2V0SW5kZXgiLCJpbnB1dExlbmd0aCIsImxlbmd0aCIsImlucHV0U3Vic3RyaW5nIiwic3Vic3RyIiwibWF0Y2hlcyIsImV4ZWMiLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJhbW91bnQiLCJhZHZhbmNlIiwic3ltYm9sIiwidGVybWluYWxTeW1ib2xzUmVnRXhwIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwicmVndWxhckV4cHJlc3Npb25SZWdFeHAiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwicGF0dGVybiIsIlJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxxQjtBQUNKLGlDQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBYjtBQUFBLFVBQ0lDLFFBQVFILFFBQVFJLFFBQVIsRUFEWjtBQUFBLFVBRUlDLGNBQWNOLE1BQU1PLE1BRnhCOztBQUlBLFVBQUlILFFBQVFFLFdBQVosRUFBeUI7QUFDdkIsWUFBSUUsaUJBQWlCUixNQUFNUyxNQUFOLENBQWFMLEtBQWIsQ0FBckI7QUFBQSxZQUNJTSxVQUFVLEtBQUtYLE1BQUwsQ0FBWVksSUFBWixDQUFpQkgsY0FBakIsQ0FEZDs7QUFHQSxZQUFJRSxXQUFXQSxRQUFRTixLQUFSLEtBQWtCLENBQWpDLEVBQW9DO0FBQ2xDLGNBQUlRLGFBQWFDLE1BQU1ILE9BQU4sQ0FBakI7QUFBQSxjQUNJSSxTQUFTRixXQUFXTCxNQUR4QixDQURrQyxDQUVEOztBQUVqQ04sa0JBQVFjLE9BQVIsQ0FBZ0JELE1BQWhCOztBQUVBWCxtQkFBUyxJQUFUO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPQSxNQUFQO0FBQ0Q7OzsrQkFFaUJhLE0sRUFBUUMscUIsRUFBdUI7QUFDL0MsVUFBSUMsd0JBQXdCLElBQTVCO0FBQUEsVUFDSUMsMEJBQTBCLGFBRDlCO0FBQUEsVUFFSVQsVUFBVU0sT0FBT0ksS0FBUCxDQUFhRCx1QkFBYixDQUZkOztBQUlBLFVBQUlULFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSVcsY0FBY0MsT0FBT1osT0FBUCxDQUFsQjtBQUFBLFlBQ0lhLFVBQVVGLFdBRGQ7QUFBQSxZQUM0QjtBQUN4QnRCLGlCQUFTLElBQUl5QixNQUFKLENBQVdELE9BQVgsQ0FGYjs7QUFJQUwsZ0NBQXdCLElBQUlwQixxQkFBSixDQUEwQkMsTUFBMUIsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPbUIscUJBQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUI1QixxQkFBakI7O0FBRUEsU0FBU2UsS0FBVCxDQUFlYyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDMUMsU0FBU0wsTUFBVCxDQUFnQkssS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cblxuICBwYXJzZShpbnB1dCwgY29udGV4dCwgcHJvZHVjdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VkID0gZmFsc2UsXG4gICAgICAgIGluZGV4ID0gY29udGV4dC5nZXRJbmRleCgpLFxuICAgICAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJzdHJpbmcgPSBpbnB1dC5zdWJzdHIoaW5kZXgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC5leGVjKGlucHV0U3Vic3RyaW5nKTtcblxuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5pbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgYW1vdW50ID0gZmlyc3RNYXRjaC5sZW5ndGg7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkdmFuY2UoYW1vdW50KTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCkge1xuICAgIHZhciByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBudWxsLFxuICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaCwgIC8vL1xuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==