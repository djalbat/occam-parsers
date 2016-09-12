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
    var blank = content.search(/^\s*$/) === 0;

    if (!blank) {
      var matches = content.match(/^\s+(\|.*)$/),
          continuing = matches !== null;

      if (continuing) {
        var previousContent = contents.pop(),
            firstMatch = first(matches),
            continuingContent = ' ' + firstMatch; ///

        previousContent = previousContent + continuingContent;

        content = previousContent;
      }

      contents.push(content);
    }

    return contents;
  }, []);

  return contents;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZMZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkJORkxleGVyIiwiZ3JhbW1hciIsInNwZWNpYWxTeW1ib2xzIiwiY29udGVudHMiLCJjb250ZW50c0Zyb21HcmFtbWFyIiwibGluZXMiLCJtYXAiLCJjb250ZW50IiwibGluZSIsImZyb21Db250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInNwbGl0IiwicmVkdWNlIiwiYmxhbmsiLCJzZWFyY2giLCJtYXRjaGVzIiwibWF0Y2giLCJjb250aW51aW5nIiwicHJldmlvdXNDb250ZW50IiwicG9wIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiY29udGludWluZ0NvbnRlbnQiLCJwdXNoIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLGlCQUFSLENBQVg7O0lBRU1DLFE7Ozs7Ozs7cUNBQ29CQyxPLEVBQVNDLGMsRUFBZ0I7QUFDL0MsVUFBSUMsV0FBV0Msb0JBQW9CSCxPQUFwQixDQUFmO0FBQUEsVUFDSUksUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNDLE9BQVQsRUFBa0I7QUFDekMsWUFBSUMsT0FBT1YsS0FBS1csV0FBTCxDQUFpQkYsT0FBakIsRUFBMEJMLGNBQTFCLENBQVg7O0FBRUEsZUFBT00sSUFBUDtBQUNELE9BSlcsQ0FEWjs7QUFPQSxhQUFPSCxLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCWCxRQUFqQjs7QUFFQSxTQUFTSSxtQkFBVCxDQUE2QkgsT0FBN0IsRUFBc0M7QUFDcEMsTUFBSUUsV0FBV0YsUUFBUVcsS0FBUixDQUFjLElBQWQsRUFBb0JDLE1BQXBCLENBQTJCLFVBQVVWLFFBQVYsRUFBb0JJLE9BQXBCLEVBQTZCO0FBQ3JFLFFBQUlPLFFBQVNQLFFBQVFRLE1BQVIsQ0FBZSxPQUFmLE1BQTRCLENBQXpDOztBQUVBLFFBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsVUFBSUUsVUFBVVQsUUFBUVUsS0FBUixDQUFjLGFBQWQsQ0FBZDtBQUFBLFVBQ0lDLGFBQWNGLFlBQVksSUFEOUI7O0FBR0EsVUFBSUUsVUFBSixFQUFnQjtBQUNkLFlBQUlDLGtCQUFrQmhCLFNBQVNpQixHQUFULEVBQXRCO0FBQUEsWUFDSUMsYUFBYUMsTUFBTU4sT0FBTixDQURqQjtBQUFBLFlBRUlPLG9CQUFvQixNQUFNRixVQUY5QixDQURjLENBRzRCOztBQUUxQ0YsMEJBQWtCQSxrQkFBa0JJLGlCQUFwQzs7QUFFQWhCLGtCQUFVWSxlQUFWO0FBQ0Q7O0FBRURoQixlQUFTcUIsSUFBVCxDQUFjakIsT0FBZDtBQUNEOztBQUVELFdBQU9KLFFBQVA7QUFDRCxHQXJCYyxFQXFCWixFQXJCWSxDQUFmOztBQXVCQSxTQUFPQSxRQUFQO0FBQ0Q7O0FBRUQsU0FBU21CLEtBQVQsQ0FBZUcsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImJuZkxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vYm5mTGV4ZXIvbGluZScpO1xuXG5jbGFzcyBCTkZMZXhlciB7XG4gIHN0YXRpYyBsaW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIsIHNwZWNpYWxTeW1ib2xzKSB7XG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgdmFyIGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIHNwZWNpYWxTeW1ib2xzKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcblxuZnVuY3Rpb24gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gIHZhciBjb250ZW50cyA9IGdyYW1tYXIuc3BsaXQoJ1xcbicpLnJlZHVjZShmdW5jdGlvbiAoY29udGVudHMsIGNvbnRlbnQpIHtcbiAgICB2YXIgYmxhbmsgPSAoY29udGVudC5zZWFyY2goL15cXHMqJC8pID09PSAwKTtcblxuICAgIGlmICghYmxhbmspIHtcbiAgICAgIHZhciBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxccysoXFx8LiopJC8pLFxuICAgICAgICAgIGNvbnRpbnVpbmcgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmIChjb250aW51aW5nKSB7XG4gICAgICAgIHZhciBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIGNvbnRpbnVpbmdDb250ZW50ID0gJyAnICsgZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgICAgcHJldmlvdXNDb250ZW50ID0gcHJldmlvdXNDb250ZW50ICsgY29udGludWluZ0NvbnRlbnQ7XG5cbiAgICAgICAgY29udGVudCA9IHByZXZpb3VzQ29udGVudDtcbiAgICAgIH1cblxuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY29udGVudHM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19