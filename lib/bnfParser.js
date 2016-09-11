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
    value: function parse(grammar, specialSymbols, Parts, mappings) {
      var lines = linesFromGrammar(grammar),
          productions = lines.map(function (line) {
        var production = Production.fromLine(line, specialSymbols, Parts, mappings);

        return production;
      });

      return productions;
    }
  }]);

  return BNFParser;
}();

module.exports = BNFParser;

function linesFromGrammar(grammar) {
  var lines = grammar.split('\n').reduce(function (lines, line) {
    var blank = line.search(/^[ \t]*$/) === 0;

    if (!blank) {
      var matches = line.match(/^[ \t]+(\|.*)$/),
          continuing = matches !== null;

      if (continuing) {
        var previousLine = lines.pop(),
            firstMatch = first(matches),
            continuingExpression = ' ' + firstMatch;

        previousLine = previousLine + continuingExpression;

        line = previousLine;
      }

      lines.push(line);
    }

    return lines;
  }, []);

  return lines;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJncmFtbWFyIiwic3BlY2lhbFN5bWJvbHMiLCJQYXJ0cyIsIm1hcHBpbmdzIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwicHJvZHVjdGlvbnMiLCJtYXAiLCJsaW5lIiwicHJvZHVjdGlvbiIsImZyb21MaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsInNwbGl0IiwicmVkdWNlIiwiYmxhbmsiLCJzZWFyY2giLCJtYXRjaGVzIiwibWF0Y2giLCJjb250aW51aW5nIiwicHJldmlvdXNMaW5lIiwicG9wIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiY29udGludWluZ0V4cHJlc3Npb24iLCJwdXNoIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxhQUFhQyxRQUFRLHdCQUFSLENBQWpCOztJQUVNQyxTOzs7Ozs7OzBCQUNTQyxPLEVBQVNDLGMsRUFBZ0JDLEssRUFBT0MsUSxFQUFVO0FBQ3JELFVBQUlDLFFBQVFDLGlCQUFpQkwsT0FBakIsQ0FBWjtBQUFBLFVBQ0lNLGNBQWNGLE1BQU1HLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDckMsWUFBSUMsYUFBYVosV0FBV2EsUUFBWCxDQUFvQkYsSUFBcEIsRUFBMEJQLGNBQTFCLEVBQTBDQyxLQUExQyxFQUFpREMsUUFBakQsQ0FBakI7O0FBRUEsZUFBT00sVUFBUDtBQUNELE9BSmEsQ0FEbEI7O0FBT0EsYUFBT0gsV0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQmIsU0FBakI7O0FBRUEsU0FBU00sZ0JBQVQsQ0FBMEJMLE9BQTFCLEVBQW1DO0FBQ2pDLE1BQUlJLFFBQVFKLFFBQVFhLEtBQVIsQ0FBYyxJQUFkLEVBQW9CQyxNQUFwQixDQUEyQixVQUFTVixLQUFULEVBQWdCSSxJQUFoQixFQUFzQjtBQUMzRCxRQUFJTyxRQUFTUCxLQUFLUSxNQUFMLENBQVksVUFBWixNQUE0QixDQUF6Qzs7QUFFQSxRQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLFVBQUlFLFVBQVVULEtBQUtVLEtBQUwsQ0FBVyxnQkFBWCxDQUFkO0FBQUEsVUFDSUMsYUFBY0YsWUFBWSxJQUQ5Qjs7QUFHQSxVQUFJRSxVQUFKLEVBQWdCO0FBQ2QsWUFBSUMsZUFBZWhCLE1BQU1pQixHQUFOLEVBQW5CO0FBQUEsWUFDSUMsYUFBYUMsTUFBTU4sT0FBTixDQURqQjtBQUFBLFlBRUlPLHVCQUF1QixNQUFNRixVQUZqQzs7QUFJQUYsdUJBQWVBLGVBQWVJLG9CQUE5Qjs7QUFFQWhCLGVBQU9ZLFlBQVA7QUFDRDs7QUFFRGhCLFlBQU1xQixJQUFOLENBQVdqQixJQUFYO0FBQ0Q7O0FBRUQsV0FBT0osS0FBUDtBQUNELEdBckJXLEVBcUJULEVBckJTLENBQVo7O0FBdUJBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTbUIsS0FBVCxDQUFlRyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiYm5mUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vYm5mUGFyc2VyL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQk5GUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGdyYW1tYXIsIHNwZWNpYWxTeW1ib2xzLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICB2YXIgbGluZXMgPSBsaW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICBwcm9kdWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgdmFyIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uLmZyb21MaW5lKGxpbmUsIHNwZWNpYWxTeW1ib2xzLCBQYXJ0cywgbWFwcGluZ3MpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuXG5mdW5jdGlvbiBsaW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgdmFyIGxpbmVzID0gZ3JhbW1hci5zcGxpdCgnXFxuJykucmVkdWNlKGZ1bmN0aW9uKGxpbmVzLCBsaW5lKSB7XG4gICAgdmFyIGJsYW5rID0gKGxpbmUuc2VhcmNoKC9eWyBcXHRdKiQvKSA9PT0gMCk7XG5cbiAgICBpZiAoIWJsYW5rKSB7XG4gICAgICB2YXIgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15bIFxcdF0rKFxcfC4qKSQvKSxcbiAgICAgICAgICBjb250aW51aW5nID0gKG1hdGNoZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAoY29udGludWluZykge1xuICAgICAgICB2YXIgcHJldmlvdXNMaW5lID0gbGluZXMucG9wKCksXG4gICAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBjb250aW51aW5nRXhwcmVzc2lvbiA9ICcgJyArIGZpcnN0TWF0Y2g7XG5cbiAgICAgICAgcHJldmlvdXNMaW5lID0gcHJldmlvdXNMaW5lICsgY29udGludWluZ0V4cHJlc3Npb247XG5cbiAgICAgICAgbGluZSA9IHByZXZpb3VzTGluZTtcbiAgICAgIH1cblxuICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbGluZXM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19