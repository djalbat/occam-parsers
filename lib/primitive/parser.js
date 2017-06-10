'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('../common/production'),
    ErrorNode = require('../common/node/nonTerminal/error'),
    grammarUtil = require('../grammar/util');

var PrimitiveParser = function () {
  function PrimitiveParser() {
    _classCallCheck(this, PrimitiveParser);
  }

  _createClass(PrimitiveParser, null, [{
    key: 'parse',
    value: function parse(lines, significantTokenTypes, mappings) {
      var productions = void 0;

      mappings = Object.assign({
        'error': ErrorNode
      }, mappings);

      try {
        productions = lines.map(function (line) {
          var production = Production.fromLine(line, significantTokenTypes, mappings);

          return production;
        });
      } catch (error) {
        productions = [];
      }

      productions = grammarUtil.eliminateCycles(productions);

      // productions = grammarUtil.eliminateLeftRecursion(productions);

      return productions;
    }
  }]);

  return PrimitiveParser;
}();

module.exports = PrimitiveParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiZ3JhbW1hclV0aWwiLCJQcmltaXRpdmVQYXJzZXIiLCJsaW5lcyIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwicHJvZHVjdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXAiLCJsaW5lIiwicHJvZHVjdGlvbiIsImZyb21MaW5lIiwiZXJyb3IiLCJlbGltaW5hdGVDeWNsZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxzQkFBUixDQUFuQjtBQUFBLElBQ01DLFlBQVlELFFBQVEsa0NBQVIsQ0FEbEI7QUFBQSxJQUVNRSxjQUFjRixRQUFRLGlCQUFSLENBRnBCOztJQUlNRyxlOzs7Ozs7OzBCQUNTQyxLLEVBQU9DLHFCLEVBQXVCQyxRLEVBQVU7QUFDbkQsVUFBSUMsb0JBQUo7O0FBRUFELGlCQUFXRSxPQUFPQyxNQUFQLENBQWM7QUFDdkIsaUJBQVNSO0FBRGMsT0FBZCxFQUVSSyxRQUZRLENBQVg7O0FBSUEsVUFBSTtBQUNGQyxzQkFBY0gsTUFBTU0sR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUNyQyxjQUFNQyxhQUFhYixXQUFXYyxRQUFYLENBQW9CRixJQUFwQixFQUEwQk4scUJBQTFCLEVBQWlEQyxRQUFqRCxDQUFuQjs7QUFFQSxpQkFBT00sVUFBUDtBQUNELFNBSmEsQ0FBZDtBQUtELE9BTkQsQ0FNRSxPQUFNRSxLQUFOLEVBQWE7QUFDYlAsc0JBQWMsRUFBZDtBQUNEOztBQUVEQSxvQkFBY0wsWUFBWWEsZUFBWixDQUE0QlIsV0FBNUIsQ0FBZDs7QUFFSDs7QUFFRyxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdIUyxPQUFPQyxPQUFQLEdBQWlCZCxlQUFqQiIsImZpbGUiOiJwYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbicpLFxuICAgICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZXJyb3InKSxcbiAgICAgIGdyYW1tYXJVdGlsID0gcmVxdWlyZSgnLi4vZ3JhbW1hci91dGlsJyk7XG5cbmNsYXNzIFByaW1pdGl2ZVBhcnNlciB7XG4gIHN0YXRpYyBwYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIGxldCBwcm9kdWN0aW9ucztcblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAnZXJyb3InOiBFcnJvck5vZGVcbiAgICB9LCBtYXBwaW5ncyk7XG5cbiAgICB0cnkge1xuICAgICAgcHJvZHVjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICBjb25zdCBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbi5mcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKTtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHByb2R1Y3Rpb25zID0gW107XG4gICAgfVxuICAgIFxuICAgIHByb2R1Y3Rpb25zID0gZ3JhbW1hclV0aWwuZWxpbWluYXRlQ3ljbGVzKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAvLyBwcm9kdWN0aW9ucyA9IGdyYW1tYXJVdGlsLmVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJpbWl0aXZlUGFyc2VyO1xuXG4iXX0=