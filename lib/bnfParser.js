'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('./bnfParser/production');

var BNFParser = function () {
  function BNFParser() {
    _classCallCheck(this, BNFParser);
  }

  _createClass(BNFParser, null, [{
    key: 'parse',
    value: function parse(lines, specialSymbolsRegExpPattern, mappings) {
      var productions;

      try {
        var specialSymbolsRegExp = new RegExp('^(?:' + specialSymbolsRegExpPattern + ')$');

        productions = lines.map(function (line) {
          var production = Production.fromLine(line, specialSymbolsRegExp, mappings);

          return production;
        });
      } catch (exception) {
        productions = [];
      }

      return productions;
    }
  }]);

  return BNFParser;
}();

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsInNwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybiIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJzcGVjaWFsU3ltYm9sc1JlZ0V4cCIsIlJlZ0V4cCIsIm1hcCIsImxpbmUiLCJwcm9kdWN0aW9uIiwiZnJvbUxpbmUiLCJleGNlcHRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSx3QkFBUixDQUFqQjs7SUFFTUMsUzs7Ozs7OzswQkFDU0MsSyxFQUFPQywyQixFQUE2QkMsUSxFQUFVO0FBQ3pELFVBQUlDLFdBQUo7O0FBRUEsVUFBSTtBQUNGLFlBQUlDLHVCQUF1QixJQUFJQyxNQUFKLENBQVcsU0FBU0osMkJBQVQsR0FBdUMsSUFBbEQsQ0FBM0I7O0FBRUFFLHNCQUFjSCxNQUFNTSxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQ3JDLGNBQUlDLGFBQWFYLFdBQVdZLFFBQVgsQ0FBb0JGLElBQXBCLEVBQTBCSCxvQkFBMUIsRUFBZ0RGLFFBQWhELENBQWpCOztBQUVBLGlCQUFPTSxVQUFQO0FBQ0QsU0FKYSxDQUFkO0FBS0QsT0FSRCxDQVFFLE9BQU1FLFNBQU4sRUFBaUI7QUFDakJQLHNCQUFjLEVBQWQ7QUFDRDs7QUFFRCxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdIUSxPQUFPQyxPQUFQLEdBQWlCYixTQUFqQiIsImZpbGUiOiJibmZQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9ibmZQYXJzZXIvcHJvZHVjdGlvbicpO1xuXG5jbGFzcyBCTkZQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UobGluZXMsIHNwZWNpYWxTeW1ib2xzUmVnRXhwUGF0dGVybiwgbWFwcGluZ3MpIHtcbiAgICB2YXIgcHJvZHVjdGlvbnM7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIHNwZWNpYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCgnXig/OicgKyBzcGVjaWFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4gKyAnKSQnKTtcblxuICAgICAgcHJvZHVjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICB2YXIgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbUxpbmUobGluZSwgc3BlY2lhbFN5bWJvbHNSZWdFeHAsIG1hcHBpbmdzKTtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcblxuIl19