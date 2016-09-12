'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Part = require('./part');

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(input, context, productions) {
      var parsed = this.parts.every(function (part) {
        var parsed = part.parse(input, context, productions);

        return parsed;
      });

      return parsed;
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression, Parts) {
      var parts = expression.mapSymbols(function (symbol) {
        var part = Part.fromSymbol(symbol, Parts);

        return part;
      }),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZQYXJzZXIvcnVsZS5qcyJdLCJuYW1lcyI6WyJQYXJ0IiwicmVxdWlyZSIsIlJ1bGUiLCJwYXJ0cyIsImlucHV0IiwiY29udGV4dCIsInByb2R1Y3Rpb25zIiwicGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFyc2UiLCJleHByZXNzaW9uIiwiUGFydHMiLCJtYXBTeW1ib2xzIiwic3ltYm9sIiwiZnJvbVN5bWJvbCIsInJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxRQUFSLENBQVg7O0lBRU1DLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzswQkFFS0MsSyxFQUFPQyxPLEVBQVNDLFcsRUFBYTtBQUNqQyxVQUFJQyxTQUFTLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDM0MsWUFBSUYsU0FBU0UsS0FBS0MsS0FBTCxDQUFXTixLQUFYLEVBQWtCQyxPQUFsQixFQUEyQkMsV0FBM0IsQ0FBYjs7QUFFQSxlQUFPQyxNQUFQO0FBQ0QsT0FKWSxDQUFiOztBQU1BLGFBQU9BLE1BQVA7QUFDRDs7O21DQUVxQkksVSxFQUFZQyxLLEVBQU87QUFDdkMsVUFBSVQsUUFBUVEsV0FBV0UsVUFBWCxDQUFzQixVQUFTQyxNQUFULEVBQWlCO0FBQzdDLFlBQUlMLE9BQU9ULEtBQUtlLFVBQUwsQ0FBZ0JELE1BQWhCLEVBQXdCRixLQUF4QixDQUFYOztBQUVBLGVBQU9ILElBQVA7QUFDRCxPQUpPLENBQVo7QUFBQSxVQUtJTyxPQUFPLElBQUlkLElBQUosQ0FBU0MsS0FBVCxDQUxYOztBQU9BLGFBQU9hLElBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQixJQUFqQiIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFydCA9IHJlcXVpcmUoJy4vcGFydCcpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIHBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucykge1xuICAgIHZhciBwYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIHZhciBwYXJzZWQgPSBwYXJ0LnBhcnNlKGlucHV0LCBjb250ZXh0LCBwcm9kdWN0aW9ucyk7XG4gICAgICBcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBQYXJ0cykge1xuICAgIHZhciBwYXJ0cyA9IGV4cHJlc3Npb24ubWFwU3ltYm9scyhmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICB2YXIgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIFBhcnRzKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG4iXX0=