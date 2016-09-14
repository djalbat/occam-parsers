'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SymbolSequence = require('./symbolSequence');

var Line = function () {
  function Line(name, symbolSequences) {
    _classCallCheck(this, Line);

    this.name = name;
    this.symbolSequences = symbolSequences;
  }

  _createClass(Line, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'mapSymbolSequences',
    value: function mapSymbolSequences(cb) {
      return this.symbolSequences.map(cb);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^(.+)::=(.+)$/),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          expression = util.trimString(thirdMatch),
          choices = expression.split(/\s+\|\s+/),
          name = util.trimString(secondMatch),
          symbolSequences = choices.map(function (choice) {
        var symbolSequence = SymbolSequence.fromChoice(choice);

        return symbolSequence;
      });

      var line = new Line(name, symbolSequences);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiU3ltYm9sU2VxdWVuY2UiLCJMaW5lIiwibmFtZSIsInN5bWJvbFNlcXVlbmNlcyIsImNiIiwibWFwIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwidGhpcmRNYXRjaCIsInRoaXJkIiwiZXhwcmVzc2lvbiIsInRyaW1TdHJpbmciLCJjaG9pY2VzIiwic3BsaXQiLCJjaG9pY2UiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21DaG9pY2UiLCJsaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxTQUFSLENBQVg7QUFBQSxJQUNJQyxpQkFBaUJELFFBQVEsa0JBQVIsQ0FEckI7O0lBR01FLEk7QUFDSixnQkFBWUMsSUFBWixFQUFrQkMsZUFBbEIsRUFBbUM7QUFBQTs7QUFDakMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0QsSUFBWjtBQUNEOzs7dUNBRWtCRSxFLEVBQUk7QUFDckIsYUFBTyxLQUFLRCxlQUFMLENBQXFCRSxHQUFyQixDQUF5QkQsRUFBekIsQ0FBUDtBQUNEOzs7Z0NBRWtCRSxPLEVBQVM7QUFDMUIsVUFBSUMsVUFBVUQsUUFBUUUsS0FBUixDQUFjLGVBQWQsQ0FBZDtBQUFBLFVBQ0lDLGNBQWNDLE9BQU9ILE9BQVAsQ0FEbEI7QUFBQSxVQUVJSSxhQUFhQyxNQUFNTCxPQUFOLENBRmpCO0FBQUEsVUFHSU0sYUFBYWYsS0FBS2dCLFVBQUwsQ0FBZ0JILFVBQWhCLENBSGpCO0FBQUEsVUFJSUksVUFBVUYsV0FBV0csS0FBWCxDQUFpQixVQUFqQixDQUpkO0FBQUEsVUFLSWQsT0FBT0osS0FBS2dCLFVBQUwsQ0FBZ0JMLFdBQWhCLENBTFg7QUFBQSxVQU1JTixrQkFBa0JZLFFBQVFWLEdBQVIsQ0FBWSxVQUFTWSxNQUFULEVBQWlCO0FBQzdDLFlBQUlDLGlCQUFpQmxCLGVBQWVtQixVQUFmLENBQTBCRixNQUExQixDQUFyQjs7QUFFQSxlQUFPQyxjQUFQO0FBQ0QsT0FKaUIsQ0FOdEI7O0FBWUEsVUFBSUUsT0FBTyxJQUFJbkIsSUFBSixDQUFTQyxJQUFULEVBQWVDLGVBQWYsQ0FBWDs7QUFFQSxhQUFPaUIsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLElBQWpCOztBQUVBLFNBQVNTLE1BQVQsQ0FBZ0JhLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1gsS0FBVCxDQUFlVyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXG4gICAgU3ltYm9sU2VxdWVuY2UgPSByZXF1aXJlKCcuL3N5bWJvbFNlcXVlbmNlJyk7XG5cbmNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3ltYm9sU2VxdWVuY2VzID0gc3ltYm9sU2VxdWVuY2VzO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIG1hcFN5bWJvbFNlcXVlbmNlcyhjYikge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbFNlcXVlbmNlcy5tYXAoY2IpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXiguKyk6Oj0oLispJC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICBleHByZXNzaW9uID0gdXRpbC50cmltU3RyaW5nKHRoaXJkTWF0Y2gpLFxuICAgICAgICBjaG9pY2VzID0gZXhwcmVzc2lvbi5zcGxpdCgvXFxzK1xcfFxccysvKSxcbiAgICAgICAgbmFtZSA9IHV0aWwudHJpbVN0cmluZyhzZWNvbmRNYXRjaCksXG4gICAgICAgIHN5bWJvbFNlcXVlbmNlcyA9IGNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgIHZhciBzeW1ib2xTZXF1ZW5jZSA9IFN5bWJvbFNlcXVlbmNlLmZyb21DaG9pY2UoY2hvaWNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gc3ltYm9sU2VxdWVuY2U7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHZhciBsaW5lID0gbmV3IExpbmUobmFtZSwgc3ltYm9sU2VxdWVuY2VzKTtcbiAgICBcbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIl19