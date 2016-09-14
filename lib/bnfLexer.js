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

    matches = content.match(/^(.+)::=(.+)$/);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

    matches = content.match(/^\s*(\|.*)$/);

    if (matches !== null) {
      var previousContent = contents.pop(),
          firstMatch = first(matches),
          continuingContent = ' ' + firstMatch; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZMZXhlci5qcyJdLCJuYW1lcyI6WyJMaW5lIiwicmVxdWlyZSIsIkJORkxleGVyIiwiZ3JhbW1hciIsInNwZWNpYWxTeW1ib2xzIiwiY29udGVudHMiLCJjb250ZW50c0Zyb21HcmFtbWFyIiwibGluZXMiLCJtYXAiLCJjb250ZW50IiwibGluZSIsImZyb21Db250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInNwbGl0IiwicmVkdWNlIiwibWF0Y2hlcyIsIm1hdGNoIiwicHVzaCIsInByZXZpb3VzQ29udGVudCIsInBvcCIsImZpcnN0TWF0Y2giLCJmaXJzdCIsImNvbnRpbnVpbmdDb250ZW50IiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLGlCQUFSLENBQVg7O0lBRU1DLFE7Ozs7Ozs7cUNBQ29CQyxPLEVBQVNDLGMsRUFBZ0I7QUFDL0MsVUFBSUMsV0FBV0Msb0JBQW9CSCxPQUFwQixDQUFmO0FBQUEsVUFDSUksUUFBUUYsU0FBU0csR0FBVCxDQUFhLFVBQVNDLE9BQVQsRUFBa0I7QUFDekMsWUFBSUMsT0FBT1YsS0FBS1csV0FBTCxDQUFpQkYsT0FBakIsRUFBMEJMLGNBQTFCLENBQVg7O0FBRUEsZUFBT00sSUFBUDtBQUNELE9BSlcsQ0FEWjs7QUFPQSxhQUFPSCxLQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCWCxRQUFqQjs7QUFFQSxTQUFTSSxtQkFBVCxDQUE2QkgsT0FBN0IsRUFBc0M7QUFDcEMsTUFBSUUsV0FBV0YsUUFBUVcsS0FBUixDQUFjLElBQWQsRUFBb0JDLE1BQXBCLENBQTJCLFVBQVVWLFFBQVYsRUFBb0JJLE9BQXBCLEVBQTZCO0FBQ3JFLFFBQUlPLE9BQUo7O0FBRUFBLGNBQVVQLFFBQVFRLEtBQVIsQ0FBYyxlQUFkLENBQVY7O0FBRUEsUUFBSUQsWUFBWSxJQUFoQixFQUFzQjtBQUNwQlgsZUFBU2EsSUFBVCxDQUFjVCxPQUFkOztBQUVBLGFBQU9KLFFBQVA7QUFDRDs7QUFFRFcsY0FBVVAsUUFBUVEsS0FBUixDQUFjLGFBQWQsQ0FBVjs7QUFFQSxRQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFVBQUlHLGtCQUFrQmQsU0FBU2UsR0FBVCxFQUF0QjtBQUFBLFVBQ0lDLGFBQWFDLE1BQU1OLE9BQU4sQ0FEakI7QUFBQSxVQUVJTyxvQkFBb0IsTUFBTUYsVUFGOUIsQ0FEb0IsQ0FHc0I7O0FBRTFDWixnQkFBVVUsa0JBQWtCSSxpQkFBNUI7O0FBRUFsQixlQUFTYSxJQUFULENBQWNULE9BQWQ7O0FBRUEsYUFBT0osUUFBUDtBQUNEOztBQUVELFdBQU9BLFFBQVA7QUFDRCxHQTFCYyxFQTBCWixFQTFCWSxDQUFmOztBQTRCQSxTQUFPQSxRQUFQO0FBQ0Q7O0FBRUQsU0FBU2lCLEtBQVQsQ0FBZUUsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImJuZkxleGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGluZSA9IHJlcXVpcmUoJy4vYm5mTGV4ZXIvbGluZScpO1xuXG5jbGFzcyBCTkZMZXhlciB7XG4gIHN0YXRpYyBsaW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIsIHNwZWNpYWxTeW1ib2xzKSB7XG4gICAgdmFyIGNvbnRlbnRzID0gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgdmFyIGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIHNwZWNpYWxTeW1ib2xzKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcblxuZnVuY3Rpb24gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gIHZhciBjb250ZW50cyA9IGdyYW1tYXIuc3BsaXQoJ1xcbicpLnJlZHVjZShmdW5jdGlvbiAoY29udGVudHMsIGNvbnRlbnQpIHtcbiAgICB2YXIgbWF0Y2hlcztcblxuICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKC4rKTo6PSguKykkLyk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eXFxzKihcXHwuKikkLyk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgdmFyIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnRzLnBvcCgpLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICBjb250aW51aW5nQ29udGVudCA9ICcgJyArIGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBjb250ZW50ID0gcHJldmlvdXNDb250ZW50ICsgY29udGludWluZ0NvbnRlbnQ7XG5cbiAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG5cbiAgICAgIHJldHVybiBjb250ZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY29udGVudHM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19