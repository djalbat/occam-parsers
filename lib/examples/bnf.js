'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../bnf/grammar'),
    BNFParser = require('../bnf/parser');

var Textarea = easy.Textarea,
    BNFLexer = lexers.BNFLexer;


var lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
    lexicalGrammar = BNFLexer.grammar;

var lexicalGrammarTextarea = void 0,
    bnfLexer = null,
    bnfParser = null;

var BNFExample = function () {
  function BNFExample() {
    _classCallCheck(this, BNFExample);
  }

  _createClass(BNFExample, null, [{
    key: 'run',
    value: function run() {
      lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);

      var bnfGrammarTextareaValue = grammar,
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

  return BNFExample;
}();

function update() {
  updateBNFLexer();

  updateBNFParser();

  // if (bnfLexer !== null) {
  //   const production = null;  ///
  //
  //   Example.updateParseTreeTextarea(bnfLexer, bnfParser, production);
  // } else {
  //   Example.clearParseTreeTextarea();
  // }
}

module.exports = BNFExample;

function updateBNFLexer() {
  var lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

  var lexicalGrammar = null;

  try {
    lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
  } catch (error) {}

  var lexicalGrammarValid = lexicalGrammar !== null;

  if (lexicalGrammarValid) {
    bnfLexer = BNFLexer.fromGrammar(lexicalGrammar);

    lexicalGrammarTextarea.removeClass('error');
  } else {
    lexicalGrammarTextarea.addClass('error');

    bnfLexer = null;
  }
}

function updateBNFParser() {
  bnfParser = BNFParser.fromNothing();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9ibmYuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJFeGFtcGxlIiwiZ3JhbW1hciIsIkJORlBhcnNlciIsIlRleHRhcmVhIiwiQk5GTGV4ZXIiLCJsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJsZXhpY2FsR3JhbW1hciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWEiLCJibmZMZXhlciIsImJuZlBhcnNlciIsIkJORkV4YW1wbGUiLCJibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsInNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwib25CTkZHcmFtbWFyVGV4dGFyZWFLZXlVcCIsInVwZGF0ZSIsIm9uQ29udGVudFRleHRhcmVhS2V5VXAiLCJvbktleVVwIiwidXBkYXRlQk5GTGV4ZXIiLCJ1cGRhdGVCTkZQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0VmFsdWUiLCJwYXJzZSIsImVycm9yIiwibGV4aWNhbEdyYW1tYXJWYWxpZCIsImZyb21HcmFtbWFyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxVQUFVSCxRQUFRLGdCQUFSLENBRGhCO0FBQUEsSUFFTUksWUFBWUosUUFBUSxlQUFSLENBRmxCOztBQUlNLElBQUVLLFFBQUYsR0FBZU4sSUFBZixDQUFFTSxRQUFGO0FBQUEsSUFDRUMsUUFERixHQUNlTCxNQURmLENBQ0VLLFFBREY7OztBQUdOLElBQU1DLGlDQUFpQyx5QkFBdkM7QUFBQSxJQUNNQyxpQkFBaUJGLFNBQVNILE9BRGhDOztBQUdBLElBQUlNLCtCQUFKO0FBQUEsSUFDSUMsV0FBVyxJQURmO0FBQUEsSUFFSUMsWUFBWSxJQUZoQjs7SUFJTUMsVTs7Ozs7OzswQkFDUztBQUNYSCwrQkFBeUIsSUFBSUosUUFBSixDQUFhRSw4QkFBYixDQUF6Qjs7QUFFQSxVQUFNTSwwQkFBMEJWLE9BQWhDO0FBQUEsVUFBeUM7QUFDbkNXLG9DQUE4QkMsS0FBS0MsU0FBTCxDQUFlUixjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBRHBDLENBSFcsQ0FJcUU7O0FBRWhGQyw2QkFBdUJRLFFBQXZCLENBQWdDSCwyQkFBaEM7O0FBRUFaLGNBQVFnQiwwQkFBUixDQUFtQ0wsdUJBQW5DOztBQUVBWCxjQUFRaUIseUJBQVIsQ0FBa0NDLE1BQWxDOztBQUVBbEIsY0FBUW1CLHNCQUFSLENBQStCRCxNQUEvQjs7QUFFQVgsNkJBQXVCYSxPQUF2QixDQUErQkYsTUFBL0I7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJHOztBQUVBQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZCxVQUFqQjs7QUFFQSxTQUFTVyxjQUFULEdBQTBCO0FBQ3hCLE1BQU1ULDhCQUE4QkwsdUJBQXVCa0IsUUFBdkIsRUFBcEM7O0FBRUEsTUFBSW5CLGlCQUFpQixJQUFyQjs7QUFFQSxNQUFJO0FBQ0ZBLHFCQUFpQk8sS0FBS2EsS0FBTCxDQUFXZCwyQkFBWCxDQUFqQjtBQUNELEdBRkQsQ0FFRSxPQUFPZSxLQUFQLEVBQWMsQ0FBRTs7QUFFbEIsTUFBTUMsc0JBQXVCdEIsbUJBQW1CLElBQWhEOztBQUVBLE1BQUlzQixtQkFBSixFQUF5QjtBQUN2QnBCLGVBQVdKLFNBQVN5QixXQUFULENBQXFCdkIsY0FBckIsQ0FBWDs7QUFFQUMsMkJBQXVCdUIsV0FBdkIsQ0FBbUMsT0FBbkM7QUFDRCxHQUpELE1BSU87QUFDTHZCLDJCQUF1QndCLFFBQXZCLENBQWdDLE9BQWhDOztBQUVBdkIsZUFBVyxJQUFYO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTYyxlQUFULEdBQTJCO0FBQ3pCYixjQUFZUCxVQUFVOEIsV0FBVixFQUFaO0FBQ0QiLCJmaWxlIjoiYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vYm5mL2dyYW1tYXInKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxHcmFtbWFyJyxcbiAgICAgIGxleGljYWxHcmFtbWFyID0gQk5GTGV4ZXIuZ3JhbW1hcjtcblxubGV0IGxleGljYWxHcmFtbWFyVGV4dGFyZWEsXG4gICAgYm5mTGV4ZXIgPSBudWxsLFxuICAgIGJuZlBhcnNlciA9IG51bGw7XG5cbmNsYXNzIEJORkV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEdyYW1tYXIsIG51bGwsICcgICcpOyAvLy9cblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVCTkZMZXhlcigpO1xuXG4gIHVwZGF0ZUJORlBhcnNlcigpO1xuXG4gIC8vIGlmIChibmZMZXhlciAhPT0gbnVsbCkge1xuICAvLyAgIGNvbnN0IHByb2R1Y3Rpb24gPSBudWxsOyAgLy8vXG4gIC8vXG4gIC8vICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShibmZMZXhlciwgYm5mUGFyc2VyLCBwcm9kdWN0aW9uKTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgLy8gfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkV4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJORkxleGVyKCkge1xuICBjb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgbGV0IGxleGljYWxHcmFtbWFyID0gbnVsbDtcblxuICB0cnkge1xuICAgIGxleGljYWxHcmFtbWFyID0gSlNPTi5wYXJzZShsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge31cblxuICBjb25zdCBsZXhpY2FsR3JhbW1hclZhbGlkID0gKGxleGljYWxHcmFtbWFyICE9PSBudWxsKTtcblxuICBpZiAobGV4aWNhbEdyYW1tYXJWYWxpZCkge1xuICAgIGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbUdyYW1tYXIobGV4aWNhbEdyYW1tYXIpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgYm5mTGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJORlBhcnNlcigpIHtcbiAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG59XG4iXX0=