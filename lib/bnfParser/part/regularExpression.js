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
          index = context.index,
          inputLength = input.length;

      if (index < inputLength) {
        var inputSubstring = input.substr(index),
            matches = this.regExp.exec(inputSubstring);

        if (matches && matches.index === 0) {
          var firstMatch = first(matches),
              firstMatchLength = firstMatch.length;

          context.index += firstMatchLength;

          parsed = true;
        }
      }

      return parsed;
    }
  }], [{
    key: 'fromSymbols',
    value: function fromSymbols(symbols, Parts) {
      var terminalPart = null,
          firstSymbol = first(symbols),
          symbol = firstSymbol,
          ///
      terminalRegExp = /\/([^/]+)\//,
          matches = symbol.match(terminalRegExp);

      if (matches !== null) {
        var pattern = matches[1],
            regExp = new RegExp(pattern);

        symbols.shift();

        terminalPart = new RegularExpressionPart(regExp);
      }

      return terminalPart;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmZQYXJzZXIvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWdFeHAiLCJpbnB1dCIsImNvbnRleHQiLCJwcm9kdWN0aW9ucyIsInBhcnNlZCIsImluZGV4IiwiaW5wdXRMZW5ndGgiLCJsZW5ndGgiLCJpbnB1dFN1YnN0cmluZyIsInN1YnN0ciIsIm1hdGNoZXMiLCJleGVjIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiZmlyc3RNYXRjaExlbmd0aCIsInN5bWJvbHMiLCJQYXJ0cyIsInRlcm1pbmFsUGFydCIsImZpcnN0U3ltYm9sIiwic3ltYm9sIiwidGVybWluYWxSZWdFeHAiLCJtYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJzaGlmdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxxQjtBQUNKLGlDQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzBCQUVLQyxLLEVBQU9DLE8sRUFBU0MsVyxFQUFhO0FBQ2pDLFVBQUlDLFNBQVMsS0FBYjtBQUFBLFVBQ0lDLFFBQVFILFFBQVFHLEtBRHBCO0FBQUEsVUFFSUMsY0FBY0wsTUFBTU0sTUFGeEI7O0FBSUEsVUFBSUYsUUFBUUMsV0FBWixFQUF5QjtBQUN2QixZQUFJRSxpQkFBaUJQLE1BQU1RLE1BQU4sQ0FBYUosS0FBYixDQUFyQjtBQUFBLFlBQ0lLLFVBQVUsS0FBS1YsTUFBTCxDQUFZVyxJQUFaLENBQWlCSCxjQUFqQixDQURkOztBQUdBLFlBQUlFLFdBQVdBLFFBQVFMLEtBQVIsS0FBa0IsQ0FBakMsRUFBb0M7QUFDbEMsY0FBSU8sYUFBYUMsTUFBTUgsT0FBTixDQUFqQjtBQUFBLGNBQ0lJLG1CQUFtQkYsV0FBV0wsTUFEbEM7O0FBR0FMLGtCQUFRRyxLQUFSLElBQWlCUyxnQkFBakI7O0FBRUFWLG1CQUFTLElBQVQ7QUFDRDtBQUNGOztBQUVELGFBQU9BLE1BQVA7QUFDRDs7O2dDQUVrQlcsTyxFQUFTQyxLLEVBQU87QUFDakMsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQ0lDLGNBQWNMLE1BQU1FLE9BQU4sQ0FEbEI7QUFBQSxVQUVJSSxTQUFTRCxXQUZiO0FBQUEsVUFFMEI7QUFDdEJFLHVCQUFpQixhQUhyQjtBQUFBLFVBSUlWLFVBQVVTLE9BQU9FLEtBQVAsQ0FBYUQsY0FBYixDQUpkOztBQU1BLFVBQUlWLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsWUFBSVksVUFBVVosUUFBUSxDQUFSLENBQWQ7QUFBQSxZQUNJVixTQUFTLElBQUl1QixNQUFKLENBQVdELE9BQVgsQ0FEYjs7QUFHQVAsZ0JBQVFTLEtBQVI7O0FBRUFQLHVCQUFlLElBQUlsQixxQkFBSixDQUEwQkMsTUFBMUIsQ0FBZjtBQUNEOztBQUVELGFBQU9pQixZQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCM0IscUJBQWpCOztBQUVBLFNBQVNjLEtBQVQsQ0FBZWMsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHApIHtcbiAgICB0aGlzLnJlZ0V4cCA9IHJlZ0V4cDtcbiAgfVxuXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSBmYWxzZSxcbiAgICAgICAgaW5kZXggPSBjb250ZXh0LmluZGV4LFxuICAgICAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuICAgIGlmIChpbmRleCA8IGlucHV0TGVuZ3RoKSB7XG4gICAgICB2YXIgaW5wdXRTdWJzdHJpbmcgPSBpbnB1dC5zdWJzdHIoaW5kZXgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLnJlZ0V4cC5leGVjKGlucHV0U3Vic3RyaW5nKTtcblxuICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5pbmRleCA9PT0gMCkge1xuICAgICAgICB2YXIgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgZmlyc3RNYXRjaExlbmd0aCA9IGZpcnN0TWF0Y2gubGVuZ3RoO1xuXG4gICAgICAgIGNvbnRleHQuaW5kZXggKz0gZmlyc3RNYXRjaExlbmd0aDtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbHMoc3ltYm9scywgUGFydHMpIHtcbiAgICB2YXIgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgZmlyc3RTeW1ib2wgPSBmaXJzdChzeW1ib2xzKSxcbiAgICAgICAgc3ltYm9sID0gZmlyc3RTeW1ib2wsIC8vL1xuICAgICAgICB0ZXJtaW5hbFJlZ0V4cCA9IC9cXC8oW14vXSspXFwvLyxcbiAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh0ZXJtaW5hbFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHBhdHRlcm4gPSBtYXRjaGVzWzFdLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG5cbiAgICAgIHN5bWJvbHMuc2hpZnQoKTtcblxuICAgICAgdGVybWluYWxQYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19