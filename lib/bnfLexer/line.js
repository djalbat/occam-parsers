'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SymbolSequence = require('./symbolSequence');

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
          expression = trim(thirdMatch),
          choices = expression.split(/\s+\|\s+/),
          name = trim(secondMatch),
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

function trim(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbIlN5bWJvbFNlcXVlbmNlIiwicmVxdWlyZSIsIkxpbmUiLCJuYW1lIiwic3ltYm9sU2VxdWVuY2VzIiwiY2IiLCJtYXAiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uIiwidHJpbSIsImNob2ljZXMiLCJzcGxpdCIsImNob2ljZSIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbUNob2ljZSIsImxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJzdHJpbmciLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsaUJBQWlCQyxRQUFRLGtCQUFSLENBQXJCOztJQUVNQyxJO0FBQ0osZ0JBQVlDLElBQVosRUFBa0JDLGVBQWxCLEVBQW1DO0FBQUE7O0FBQ2pDLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtELElBQVo7QUFDRDs7O3VDQUVrQkUsRSxFQUFJO0FBQ3JCLGFBQU8sS0FBS0QsZUFBTCxDQUFxQkUsR0FBckIsQ0FBeUJELEVBQXpCLENBQVA7QUFDRDs7O2dDQUVrQkUsTyxFQUFTO0FBQzFCLFVBQUlDLFVBQVVELFFBQVFFLEtBQVIsQ0FBYyxlQUFkLENBQWQ7QUFBQSxVQUNJQyxjQUFjQyxPQUFPSCxPQUFQLENBRGxCO0FBQUEsVUFFSUksYUFBYUMsTUFBTUwsT0FBTixDQUZqQjtBQUFBLFVBR0lNLGFBQWFDLEtBQUtILFVBQUwsQ0FIakI7QUFBQSxVQUlJSSxVQUFVRixXQUFXRyxLQUFYLENBQWlCLFVBQWpCLENBSmQ7QUFBQSxVQUtJZCxPQUFPWSxLQUFLTCxXQUFMLENBTFg7QUFBQSxVQU1JTixrQkFBa0JZLFFBQVFWLEdBQVIsQ0FBWSxVQUFTWSxNQUFULEVBQWlCO0FBQzdDLFlBQUlDLGlCQUFpQm5CLGVBQWVvQixVQUFmLENBQTBCRixNQUExQixDQUFyQjs7QUFFQSxlQUFPQyxjQUFQO0FBQ0QsT0FKaUIsQ0FOdEI7O0FBWUEsVUFBSUUsT0FBTyxJQUFJbkIsSUFBSixDQUFTQyxJQUFULEVBQWVDLGVBQWYsQ0FBWDs7QUFFQSxhQUFPaUIsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLElBQWpCOztBQUVBLFNBQVNTLE1BQVQsQ0FBZ0JhLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7QUFDM0MsU0FBU1gsS0FBVCxDQUFlVyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNULElBQVQsQ0FBY1UsTUFBZCxFQUFzQjtBQUNwQixTQUFPQSxPQUFPQyxPQUFQLENBQWUsWUFBZixFQUE2QixFQUE3QixDQUFQO0FBQ0QiLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFN5bWJvbFNlcXVlbmNlID0gcmVxdWlyZSgnLi9zeW1ib2xTZXF1ZW5jZScpO1xuXG5jbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3ltYm9sU2VxdWVuY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN5bWJvbFNlcXVlbmNlcyA9IHN5bWJvbFNlcXVlbmNlcztcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBtYXBTeW1ib2xTZXF1ZW5jZXMoY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xTZXF1ZW5jZXMubWFwKGNiKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL14oLispOjo9KC4rKSQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IHRyaW0odGhpcmRNYXRjaCksXG4gICAgICAgIGNob2ljZXMgPSBleHByZXNzaW9uLnNwbGl0KC9cXHMrXFx8XFxzKy8pLFxuICAgICAgICBuYW1lID0gdHJpbShzZWNvbmRNYXRjaCksXG4gICAgICAgIHN5bWJvbFNlcXVlbmNlcyA9IGNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgIHZhciBzeW1ib2xTZXF1ZW5jZSA9IFN5bWJvbFNlcXVlbmNlLmZyb21DaG9pY2UoY2hvaWNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gc3ltYm9sU2VxdWVuY2U7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHZhciBsaW5lID0gbmV3IExpbmUobmFtZSwgc3ltYm9sU2VxdWVuY2VzKTtcbiAgICBcbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5mdW5jdGlvbiB0cmltKHN0cmluZykgeyBcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7IFxufVxuIl19