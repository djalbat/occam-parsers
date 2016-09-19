'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./bnfLexer/line');

var BNFLexer = function () {
  function BNFLexer() {
    _classCallCheck(this, BNFLexer);
  }

  _createClass(BNFLexer, null, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar, specialSymbols) {
      var contents = contentsFromGrammar(grammar),
          lines = contents.map(function (content) {
        var line = Line.fromContent(content, specialSymbols);

        return line;
      });

      return lines;
    }
  }]);

  return BNFLexer;
}();

module.exports = BNFLexer;

function contentsFromGrammar(grammar) {
  var contents = grammar.split('\n').reduce(function (contents, content) {
    var matches;

    matches = content.match(Line.nameExpressionRegExp);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

    matches = content.match(Line.continuedExpressionRegExp);

    if (matches !== null) {
      var previousContent = contents.pop(),
          firstMatch = first(matches),
          continuedExpression = firstMatch,
          ///
      continuingContent = ' ' + continuedExpression;

      content = previousContent + continuingContent;

      contents.push(content);

      return contents;
    }

    return contents;
  }, []);

  return contents;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZMZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkJORkxleGVyIiwiZ3JhbW1hciIsInNwZWNpYWxTeW1ib2xzIiwiY29udGVudHMiLCJjb250ZW50c0Zyb21HcmFtbWFyIiwibGluZXMiLCJtYXAiLCJjb250ZW50IiwibGluZSIsImZyb21Db250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInNwbGl0IiwicmVkdWNlIiwibWF0Y2hlcyIsIm1hdGNoIiwibmFtZUV4cHJlc3Npb25SZWdFeHAiLCJwdXNoIiwiY29udGludWVkRXhwcmVzc2lvblJlZ0V4cCIsInByZXZpb3VzQ29udGVudCIsInBvcCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImNvbnRpbnVlZEV4cHJlc3Npb24iLCJjb250aW51aW5nQ29udGVudCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxpQkFBUixDQUFYOztJQUVNQyxROzs7Ozs7O3FDQUNvQkMsTyxFQUFTQyxjLEVBQWdCO0FBQy9DLFVBQUlDLFdBQVdDLG9CQUFvQkgsT0FBcEIsQ0FBZjtBQUFBLFVBQ0lJLFFBQVFGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTQyxPQUFULEVBQWtCO0FBQ3pDLFlBQUlDLE9BQU9WLEtBQUtXLFdBQUwsQ0FBaUJGLE9BQWpCLEVBQTBCTCxjQUExQixDQUFYOztBQUVBLGVBQU9NLElBQVA7QUFDRCxPQUpXLENBRFo7O0FBT0EsYUFBT0gsS0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQlgsUUFBakI7O0FBRUEsU0FBU0ksbUJBQVQsQ0FBNkJILE9BQTdCLEVBQXNDO0FBQ3BDLE1BQUlFLFdBQVdGLFFBQVFXLEtBQVIsQ0FBYyxJQUFkLEVBQW9CQyxNQUFwQixDQUEyQixVQUFVVixRQUFWLEVBQW9CSSxPQUFwQixFQUE2QjtBQUNyRSxRQUFJTyxPQUFKOztBQUVBQSxjQUFVUCxRQUFRUSxLQUFSLENBQWNqQixLQUFLa0Isb0JBQW5CLENBQVY7O0FBRUEsUUFBSUYsWUFBWSxJQUFoQixFQUFzQjtBQUNwQlgsZUFBU2MsSUFBVCxDQUFjVixPQUFkOztBQUVBLGFBQU9KLFFBQVA7QUFDRDs7QUFFQ1csY0FBVVAsUUFBUVEsS0FBUixDQUFjakIsS0FBS29CLHlCQUFuQixDQUFWOztBQUVGLFFBQUlKLFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsVUFBSUssa0JBQWtCaEIsU0FBU2lCLEdBQVQsRUFBdEI7QUFBQSxVQUNJQyxhQUFhQyxNQUFNUixPQUFOLENBRGpCO0FBQUEsVUFFSVMsc0JBQXNCRixVQUYxQjtBQUFBLFVBRXNDO0FBQ2xDRywwQkFBb0IsTUFBTUQsbUJBSDlCOztBQUtBaEIsZ0JBQVVZLGtCQUFrQkssaUJBQTVCOztBQUVBckIsZUFBU2MsSUFBVCxDQUFjVixPQUFkOztBQUVBLGFBQU9KLFFBQVA7QUFDRDs7QUFFRCxXQUFPQSxRQUFQO0FBQ0QsR0EzQmMsRUEyQlosRUEzQlksQ0FBZjs7QUE2QkEsU0FBT0EsUUFBUDtBQUNEOztBQUVELFNBQVNtQixLQUFULENBQWVHLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJibmZMZXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIExpbmUgPSByZXF1aXJlKCcuL2JuZkxleGVyL2xpbmUnKTtcblxuY2xhc3MgQk5GTGV4ZXIge1xuICBzdGF0aWMgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyLCBzcGVjaWFsU3ltYm9scykge1xuICAgIHZhciBjb250ZW50cyA9IGNvbnRlbnRzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgIHZhciBsaW5lID0gTGluZS5mcm9tQ29udGVudChjb250ZW50LCBzcGVjaWFsU3ltYm9scyk7XG4gICAgICBcbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GTGV4ZXI7XG5cbmZ1bmN0aW9uIGNvbnRlbnRzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICB2YXIgY29udGVudHMgPSBncmFtbWFyLnNwbGl0KCdcXG4nKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbnRlbnRzLCBjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXM7XG5cbiAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLmNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHZhciBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50cy5wb3AoKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgY29udGludWVkRXhwcmVzc2lvbiA9IGZpcnN0TWF0Y2gsIC8vL1xuICAgICAgICAgIGNvbnRpbnVpbmdDb250ZW50ID0gJyAnICsgY29udGludWVkRXhwcmVzc2lvbjtcblxuICAgICAgY29udGVudCA9IHByZXZpb3VzQ29udGVudCArIGNvbnRpbnVpbmdDb250ZW50O1xuXG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==