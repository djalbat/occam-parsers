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

Line.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
Line.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;
Line.choiceDelimiterRegExp = /\s+\|\s+/;

module.exports = Line;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmZMZXhlci9saW5lLmpzIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiU3ltYm9sU2VxdWVuY2UiLCJMaW5lIiwibmFtZSIsInN5bWJvbFNlcXVlbmNlcyIsImNiIiwibWFwIiwiY29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsIm5hbWVFeHByZXNzaW9uUmVnRXhwIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJ0aGlyZE1hdGNoIiwidGhpcmQiLCJleHByZXNzaW9uIiwiY2hvaWNlcyIsInNwbGl0IiwiY2hvaWNlRGVsaW1pdGVyUmVnRXhwIiwiY2hvaWNlIiwic3ltYm9sU2VxdWVuY2UiLCJmcm9tQ2hvaWNlIiwibGluZSIsImNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLFNBQVIsQ0FBWDtBQUFBLElBQ0lDLGlCQUFpQkQsUUFBUSxrQkFBUixDQURyQjs7SUFHTUUsSTtBQUNKLGdCQUFZQyxJQUFaLEVBQWtCQyxlQUFsQixFQUFtQztBQUFBOztBQUNqQyxTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRCxJQUFaO0FBQ0Q7Ozt1Q0FFa0JFLEUsRUFBSTtBQUNyQixhQUFPLEtBQUtELGVBQUwsQ0FBcUJFLEdBQXJCLENBQXlCRCxFQUF6QixDQUFQO0FBQ0Q7OztnQ0FFa0JFLE8sRUFBUztBQUMxQixVQUFJQyxVQUFVRCxRQUFRRSxLQUFSLENBQWNQLEtBQUtRLG9CQUFuQixDQUFkO0FBQUEsVUFDSUMsY0FBY0MsT0FBT0osT0FBUCxDQURsQjtBQUFBLFVBRUlLLGFBQWFDLE1BQU1OLE9BQU4sQ0FGakI7QUFBQSxVQUdJTCxPQUFPUSxXQUhYO0FBQUEsVUFHd0I7QUFDcEJJLG1CQUFhRixVQUpqQjtBQUFBLFVBSTZCO0FBQ3pCRyxnQkFBVUQsV0FBV0UsS0FBWCxDQUFpQmYsS0FBS2dCLHFCQUF0QixDQUxkO0FBQUEsVUFNSWQsa0JBQWtCWSxRQUFRVixHQUFSLENBQVksVUFBU2EsTUFBVCxFQUFpQjtBQUM3QyxZQUFJQyxpQkFBaUJuQixlQUFlb0IsVUFBZixDQUEwQkYsTUFBMUIsQ0FBckI7O0FBRUEsZUFBT0MsY0FBUDtBQUNELE9BSmlCLENBTnRCOztBQVlBLFVBQUlFLE9BQU8sSUFBSXBCLElBQUosQ0FBU0MsSUFBVCxFQUFlQyxlQUFmLENBQVg7O0FBRUEsYUFBT2tCLElBQVA7QUFDRDs7Ozs7O0FBR0hwQixLQUFLUSxvQkFBTCxHQUE0Qiw2QkFBNUI7QUFDQVIsS0FBS3FCLHlCQUFMLEdBQWlDLG9CQUFqQztBQUNBckIsS0FBS2dCLHFCQUFMLEdBQTZCLFVBQTdCOztBQUVBTSxPQUFPQyxPQUFQLEdBQWlCdkIsSUFBakI7O0FBRUEsU0FBU1UsTUFBVCxDQUFnQmMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQjtBQUMzQyxTQUFTWixLQUFULENBQWVZLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcbiAgICBTeW1ib2xTZXF1ZW5jZSA9IHJlcXVpcmUoJy4vc3ltYm9sU2VxdWVuY2UnKTtcblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN5bWJvbFNlcXVlbmNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zeW1ib2xTZXF1ZW5jZXMgPSBzeW1ib2xTZXF1ZW5jZXM7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgbWFwU3ltYm9sU2VxdWVuY2VzKGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sU2VxdWVuY2VzLm1hcChjYik7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKExpbmUubmFtZUV4cHJlc3Npb25SZWdFeHApLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICBleHByZXNzaW9uID0gdGhpcmRNYXRjaCwgLy8vXG4gICAgICAgIGNob2ljZXMgPSBleHByZXNzaW9uLnNwbGl0KExpbmUuY2hvaWNlRGVsaW1pdGVyUmVnRXhwKSxcbiAgICAgICAgc3ltYm9sU2VxdWVuY2VzID0gY2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgdmFyIHN5bWJvbFNlcXVlbmNlID0gU3ltYm9sU2VxdWVuY2UuZnJvbUNob2ljZShjaG9pY2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBzeW1ib2xTZXF1ZW5jZTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgdmFyIGxpbmUgPSBuZXcgTGluZShuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpO1xuICAgIFxuICAgIHJldHVybiBsaW5lO1xuICB9XG59XG5cbkxpbmUubmFtZUV4cHJlc3Npb25SZWdFeHAgPSAvXlxccyooLio/KVxccys6Oj1cXHMrKC4qPylcXHMqJC87XG5MaW5lLmNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAgPSAvXlxccyooXFx8XFxzKy4qPylcXHMqJC87XG5MaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCA9IC9cXHMrXFx8XFxzKy87XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG4iXX0=