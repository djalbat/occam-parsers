'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var BasicParser = require('../basic/parser'),
    Example = require('../example');

var Textarea = easy.Textarea,
    BasicLexer = lexers.BasicLexer;


var lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
    lexicalGrammar = BasicLexer.grammar,
    bnfGrammar = '\n  \n    expression                 ::= term operatorThenTerm*\n    \n    operatorThenTerm           ::= operator term\n    \n    operator                   ::= \'+\' | \'-\' | \'*\' | \'/\'\n    \n    term                       ::= naturalNumber | parenthesizedExpression\n    \n    naturalNumber              ::= /^\\d+$/\n    \n    parenthesizedExpression    ::= \'(\' expression \')\'\n          \n';

var lexicalGrammarTextarea = void 0,
    basicLexer = null,
    basicParser = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);

      var bnfGrammarTextareaValue = bnfGrammar,
          ///
      lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '); ///

      lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

      Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

      Example.onBNFGrammarTextareaKeyUp(update);

      Example.onContentTextareaKeyUp(update);

      lexicalGrammarTextarea.onKeyUp(update);

      update();
    }
  }]);

  return BasicExample;
}();

function update() {
  updateBasicLexer();

  updateBasicParser();

  if (basicLexer !== null) {
    var production = null; ///

    Example.updateParseTreeTextarea(basicLexer, basicParser, production);
  } else {
    Example.clearParseTreeTextarea();
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  var lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

  var lexicalGrammar = null;

  try {
    lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
  } catch (error) {}

  var lexicalGrammarValid = lexicalGrammar !== null;

  if (lexicalGrammarValid) {
    basicLexer = BasicLexer.fromGrammar(lexicalGrammar);

    lexicalGrammarTextarea.removeClass('error');
  } else {
    lexicalGrammarTextarea.addClass('error');

    basicLexer = null;
  }
}

function updateBasicParser() {
  var bnfGrammarTextareaValue = Example.getBNFGrammarTextareaValue(),
      bnfGrammar = bnfGrammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(bnfGrammar);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkJhc2ljUGFyc2VyIiwiRXhhbXBsZSIsIlRleHRhcmVhIiwiQmFzaWNMZXhlciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciIsImxleGljYWxHcmFtbWFyIiwiZ3JhbW1hciIsImJuZkdyYW1tYXIiLCJsZXhpY2FsR3JhbW1hclRleHRhcmVhIiwiYmFzaWNMZXhlciIsImJhc2ljUGFyc2VyIiwiQmFzaWNFeGFtcGxlIiwiYm5mR3JhbW1hclRleHRhcmVhVmFsdWUiLCJsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJzZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsIm9uQk5GR3JhbW1hclRleHRhcmVhS2V5VXAiLCJ1cGRhdGUiLCJvbkNvbnRlbnRUZXh0YXJlYUtleVVwIiwib25LZXlVcCIsInVwZGF0ZUJhc2ljTGV4ZXIiLCJ1cGRhdGVCYXNpY1BhcnNlciIsInByb2R1Y3Rpb24iLCJ1cGRhdGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFyc2VUcmVlVGV4dGFyZWEiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEdyYW1tYXJWYWxpZCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxjQUFjRixRQUFRLGlCQUFSLENBQXBCO0FBQUEsSUFDTUcsVUFBVUgsUUFBUSxZQUFSLENBRGhCOztBQUdNLElBQUVJLFFBQUYsR0FBZUwsSUFBZixDQUFFSyxRQUFGO0FBQUEsSUFDRUMsVUFERixHQUNpQkosTUFEakIsQ0FDRUksVUFERjs7O0FBR04sSUFBTUMsaUNBQWlDLHlCQUF2QztBQUFBLElBQ01DLGlCQUFpQkYsV0FBV0csT0FEbEM7QUFBQSxJQUVNQyxrYUFGTjs7QUFrQkEsSUFBSUMsK0JBQUo7QUFBQSxJQUNJQyxhQUFhLElBRGpCO0FBQUEsSUFFSUMsY0FBYyxJQUZsQjs7SUFJTUMsWTs7Ozs7OzswQkFDUztBQUNYSCwrQkFBeUIsSUFBSU4sUUFBSixDQUFhRSw4QkFBYixDQUF6Qjs7QUFFQSxVQUFNUSwwQkFBMEJMLFVBQWhDO0FBQUEsVUFBNEM7QUFDdENNLG9DQUE4QkMsS0FBS0MsU0FBTCxDQUFlVixjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBRHBDLENBSFcsQ0FJcUU7O0FBRWhGRyw2QkFBdUJRLFFBQXZCLENBQWdDSCwyQkFBaEM7O0FBRUFaLGNBQVFnQiwwQkFBUixDQUFtQ0wsdUJBQW5DOztBQUVBWCxjQUFRaUIseUJBQVIsQ0FBa0NDLE1BQWxDOztBQUVBbEIsY0FBUW1CLHNCQUFSLENBQStCRCxNQUEvQjs7QUFFQVgsNkJBQXVCYSxPQUF2QixDQUErQkYsTUFBL0I7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJHOztBQUVBQzs7QUFFQSxNQUFJZCxlQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLFFBQU1lLGFBQWEsSUFBbkIsQ0FEdUIsQ0FDRzs7QUFFMUJ2QixZQUFRd0IsdUJBQVIsQ0FBZ0NoQixVQUFoQyxFQUE0Q0MsV0FBNUMsRUFBeURjLFVBQXpEO0FBQ0QsR0FKRCxNQUlPO0FBQ0x2QixZQUFReUIsc0JBQVI7QUFDRDtBQUNGOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCakIsWUFBakI7O0FBRUEsU0FBU1csZ0JBQVQsR0FBNEI7QUFDMUIsTUFBTVQsOEJBQThCTCx1QkFBdUJxQixRQUF2QixFQUFwQzs7QUFFQSxNQUFJeEIsaUJBQWlCLElBQXJCOztBQUVBLE1BQUk7QUFDRkEscUJBQWlCUyxLQUFLZ0IsS0FBTCxDQUFXakIsMkJBQVgsQ0FBakI7QUFDRCxHQUZELENBRUUsT0FBT2tCLEtBQVAsRUFBYyxDQUFFOztBQUVsQixNQUFNQyxzQkFBdUIzQixtQkFBbUIsSUFBaEQ7O0FBRUEsTUFBSTJCLG1CQUFKLEVBQXlCO0FBQ3ZCdkIsaUJBQWFOLFdBQVc4QixXQUFYLENBQXVCNUIsY0FBdkIsQ0FBYjs7QUFFQUcsMkJBQXVCMEIsV0FBdkIsQ0FBbUMsT0FBbkM7QUFDRCxHQUpELE1BSU87QUFDTDFCLDJCQUF1QjJCLFFBQXZCLENBQWdDLE9BQWhDOztBQUVBMUIsaUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU2MsaUJBQVQsR0FBNkI7QUFDM0IsTUFBTVgsMEJBQTBCWCxRQUFRbUMsMEJBQVIsRUFBaEM7QUFBQSxNQUNNN0IsYUFBYUssdUJBRG5CLENBRDJCLENBRWlCOztBQUU1Q0YsZ0JBQWNWLFlBQVlpQyxXQUFaLENBQXdCMUIsVUFBeEIsQ0FBZDtBQUNEIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsR3JhbW1hcicsXG4gICAgICBsZXhpY2FsR3JhbW1hciA9IEJhc2ljTGV4ZXIuZ3JhbW1hcixcbiAgICAgIGJuZkdyYW1tYXIgPSBgXG4gIFxuICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gICAgXG4gICAgb3BlcmF0b3JUaGVuVGVybSAgICAgICAgICAgOjo9IG9wZXJhdG9yIHRlcm1cbiAgICBcbiAgICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICA6Oj0gJysnIHwgJy0nIHwgJyonIHwgJy8nXG4gICAgXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICAgIFxuICAgIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICAgIDo6PSAvXlxcXFxkKyQvXG4gICAgXG4gICAgcGFyZW50aGVzaXplZEV4cHJlc3Npb24gICAgOjo9ICcoJyBleHByZXNzaW9uICcpJ1xuICAgICAgICAgIFxuYDtcblxubGV0IGxleGljYWxHcmFtbWFyVGV4dGFyZWEsXG4gICAgYmFzaWNMZXhlciA9IG51bGwsXG4gICAgYmFzaWNQYXJzZXIgPSBudWxsO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gYm5mR3JhbW1hciwgLy8vXG4gICAgICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEdyYW1tYXIsIG51bGwsICcgICcpOyAvLy9cblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVCYXNpY0xleGVyKCk7XG5cbiAgdXBkYXRlQmFzaWNQYXJzZXIoKTtcblxuICBpZiAoYmFzaWNMZXhlciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBudWxsOyAgLy8vXG5cbiAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGJhc2ljTGV4ZXIsIGJhc2ljUGFyc2VyLCBwcm9kdWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNMZXhlcigpIHtcbiAgY29uc3QgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlID0gbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gIGxldCBsZXhpY2FsR3JhbW1hciA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBsZXhpY2FsR3JhbW1hciA9IEpTT04ucGFyc2UobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgY29uc3QgbGV4aWNhbEdyYW1tYXJWYWxpZCA9IChsZXhpY2FsR3JhbW1hciAhPT0gbnVsbCk7XG5cbiAgaWYgKGxleGljYWxHcmFtbWFyVmFsaWQpIHtcbiAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihsZXhpY2FsR3JhbW1hcik7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBiYXNpY0xleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY1BhcnNlcigpIHtcbiAgY29uc3QgYm5mR3JhbW1hclRleHRhcmVhVmFsdWUgPSBFeGFtcGxlLmdldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKCksXG4gICAgICAgIGJuZkdyYW1tYXIgPSBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihibmZHcmFtbWFyKTtcbn1cbiJdfQ==