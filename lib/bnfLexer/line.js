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
      var matches = content.match(Line.nameExpressionRegExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          name = secondMatch,
          ///
      expression = thirdMatch,
          ///
      choices = expression.split(Line.choiceDelimiterRegExp),
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

Line.choiceDelimiterRegExp = /\s+\|\s+/;
Line.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
Line.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;

module.exports = Line;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbIlN5bWJvbFNlcXVlbmNlIiwicmVxdWlyZSIsIkxpbmUiLCJuYW1lIiwic3ltYm9sU2VxdWVuY2VzIiwiY2IiLCJtYXAiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwibmFtZUV4cHJlc3Npb25SZWdFeHAiLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInRoaXJkTWF0Y2giLCJ0aGlyZCIsImV4cHJlc3Npb24iLCJjaG9pY2VzIiwic3BsaXQiLCJjaG9pY2VEZWxpbWl0ZXJSZWdFeHAiLCJjaG9pY2UiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21DaG9pY2UiLCJsaW5lIiwiY29udGludWVkRXhwcmVzc2lvblJlZ0V4cCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFpQkMsUUFBUSxrQkFBUixDQUFyQjs7SUFFTUMsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxlQUFsQixFQUFtQztBQUFBOztBQUNqQyxTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7Ozt1Q0FFa0JFLEUsRUFBSTtBQUNyQixhQUFPLEtBQUtELGVBQUwsQ0FBcUJFLEdBQXJCLENBQXlCRCxFQUF6QixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWNQLEtBQUtRLG9CQUFuQixDQUFkO0FBQUEsVUFDSUMsY0FBY0MsT0FBT0osT0FBUCxDQURsQjtBQUFBLFVBRUlLLGFBQWFDLE1BQU1OLE9BQU4sQ0FGakI7QUFBQSxVQUdJTCxPQUFPUSxXQUhYO0FBQUEsVUFHd0I7QUFDcEJJLG1CQUFhRixVQUpqQjtBQUFBLFVBSTZCO0FBQ3pCRyxnQkFBVUQsV0FBV0UsS0FBWCxDQUFpQmYsS0FBS2dCLHFCQUF0QixDQUxkO0FBQUEsVUFNSWQsa0JBQWtCWSxRQUFRVixHQUFSLENBQVksVUFBU2EsTUFBVCxFQUFpQjtBQUM3QyxZQUFJQyxpQkFBaUJwQixlQUFlcUIsVUFBZixDQUEwQkYsTUFBMUIsQ0FBckI7O0FBRUEsZUFBT0MsY0FBUDtBQUNELE9BSmlCLENBTnRCOztBQVlBLFVBQUlFLE9BQU8sSUFBSXBCLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxlQUFmLENBQVg7O0FBRUEsYUFBT2tCLElBQVA7QUFDRDs7Ozs7O0FBR0hwQixLQUFLZ0IscUJBQUwsR0FBNkIsVUFBN0I7QUFDQWhCLEtBQUtRLG9CQUFMLEdBQTRCLDZCQUE1QjtBQUNBUixLQUFLcUIseUJBQUwsR0FBaUMsb0JBQWpDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCdkIsSUFBakI7O0FBRUEsU0FBU1UsTUFBVCxDQUFnQmMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWixLQUFULENBQWVZLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3ltYm9sU2VxdWVuY2UgPSByZXF1aXJlKCcuL3N5bWJvbFNlcXVlbmNlJyk7XG5cbmNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3ltYm9sU2VxdWVuY2VzID0gc3ltYm9sU2VxdWVuY2VzO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIG1hcFN5bWJvbFNlcXVlbmNlcyhjYikge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbFNlcXVlbmNlcy5tYXAoY2IpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXJkTWF0Y2gsIC8vL1xuICAgICAgICBjaG9pY2VzID0gZXhwcmVzc2lvbi5zcGxpdChMaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCksXG4gICAgICAgIHN5bWJvbFNlcXVlbmNlcyA9IGNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgIHZhciBzeW1ib2xTZXF1ZW5jZSA9IFN5bWJvbFNlcXVlbmNlLmZyb21DaG9pY2UoY2hvaWNlKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gc3ltYm9sU2VxdWVuY2U7XG4gICAgICAgIH0pO1xuICAgIFxuICAgIHZhciBsaW5lID0gbmV3IExpbmUobmFtZSwgc3ltYm9sU2VxdWVuY2VzKTtcbiAgICBcbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5MaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCA9IC9cXHMrXFx8XFxzKy87XG5MaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwID0gL15cXHMqKC4qPylcXHMrOjo9XFxzKyguKj8pXFxzKiQvO1xuTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwID0gL15cXHMqKFxcfFxccysuKj8pXFxzKiQvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIl19