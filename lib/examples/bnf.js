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

      var lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '),
          ///
      bnfGrammarTextareaValue = grammar,
          ///
      contentTextareaValue = '\n\n    naturalNumber            ::=  /d+/\n                            \n';

      lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

      Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

      Example.setContentTextareaValue(contentTextareaValue);

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

  if (bnfLexer !== null) {
    var production = null; ///

    Example.updateParseTreeTextarea(bnfLexer, bnfParser, production);
  } else {
    Example.clearParseTreeTextarea();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9ibmYuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJFeGFtcGxlIiwiZ3JhbW1hciIsIkJORlBhcnNlciIsIlRleHRhcmVhIiwiQk5GTGV4ZXIiLCJsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IiLCJsZXhpY2FsR3JhbW1hciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWEiLCJibmZMZXhlciIsImJuZlBhcnNlciIsIkJORkV4YW1wbGUiLCJsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiYm5mR3JhbW1hclRleHRhcmVhVmFsdWUiLCJjb250ZW50VGV4dGFyZWFWYWx1ZSIsInNldFZhbHVlIiwic2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRDb250ZW50VGV4dGFyZWFWYWx1ZSIsIm9uQk5GR3JhbW1hclRleHRhcmVhS2V5VXAiLCJ1cGRhdGUiLCJvbkNvbnRlbnRUZXh0YXJlYUtleVVwIiwib25LZXlVcCIsInVwZGF0ZUJORkxleGVyIiwidXBkYXRlQk5GUGFyc2VyIiwicHJvZHVjdGlvbiIsInVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRWYWx1ZSIsInBhcnNlIiwiZXJyb3IiLCJsZXhpY2FsR3JhbW1hclZhbGlkIiwiZnJvbUdyYW1tYXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01HLFVBQVVILFFBQVEsZ0JBQVIsQ0FEaEI7QUFBQSxJQUVNSSxZQUFZSixRQUFRLGVBQVIsQ0FGbEI7O0FBSU0sSUFBRUssUUFBRixHQUFlTixJQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2VMLE1BRGYsQ0FDRUssUUFERjs7O0FBR04sSUFBTUMsaUNBQWlDLHlCQUF2QztBQUFBLElBQ01DLGlCQUFpQkYsU0FBU0gsT0FEaEM7O0FBR0EsSUFBSU0sK0JBQUo7QUFBQSxJQUNJQyxXQUFXLElBRGY7QUFBQSxJQUVJQyxZQUFZLElBRmhCOztJQUlNQyxVOzs7Ozs7OzBCQUNTO0FBQ1hILCtCQUF5QixJQUFJSixRQUFKLENBQWFFLDhCQUFiLENBQXpCOztBQUVBLFVBQU1NLDhCQUE4QkMsS0FBS0MsU0FBTCxDQUFlUCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBQXBDO0FBQUEsVUFBZ0Y7QUFDMUVRLGdDQUEwQmIsT0FEaEM7QUFBQSxVQUN5QztBQUNuQ2MseUdBRk47O0FBUUFSLDZCQUF1QlMsUUFBdkIsQ0FBZ0NMLDJCQUFoQzs7QUFFQVgsY0FBUWlCLDBCQUFSLENBQW1DSCx1QkFBbkM7O0FBRUFkLGNBQVFrQix1QkFBUixDQUFnQ0gsb0JBQWhDOztBQUVBZixjQUFRbUIseUJBQVIsQ0FBa0NDLE1BQWxDOztBQUVBcEIsY0FBUXFCLHNCQUFSLENBQStCRCxNQUEvQjs7QUFFQWIsNkJBQXVCZSxPQUF2QixDQUErQkYsTUFBL0I7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJHOztBQUVBQzs7QUFFQSxNQUFJaEIsYUFBYSxJQUFqQixFQUF1QjtBQUNyQixRQUFNaUIsYUFBYSxJQUFuQixDQURxQixDQUNLOztBQUUxQnpCLFlBQVEwQix1QkFBUixDQUFnQ2xCLFFBQWhDLEVBQTBDQyxTQUExQyxFQUFxRGdCLFVBQXJEO0FBQ0QsR0FKRCxNQUlPO0FBQ0x6QixZQUFRMkIsc0JBQVI7QUFDRDtBQUNGOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCbkIsVUFBakI7O0FBRUEsU0FBU2EsY0FBVCxHQUEwQjtBQUN4QixNQUFNWiw4QkFBOEJKLHVCQUF1QnVCLFFBQXZCLEVBQXBDOztBQUVBLE1BQUl4QixpQkFBaUIsSUFBckI7O0FBRUEsTUFBSTtBQUNGQSxxQkFBaUJNLEtBQUttQixLQUFMLENBQVdwQiwyQkFBWCxDQUFqQjtBQUNELEdBRkQsQ0FFRSxPQUFPcUIsS0FBUCxFQUFjLENBQUU7O0FBRWxCLE1BQU1DLHNCQUF1QjNCLG1CQUFtQixJQUFoRDs7QUFFQSxNQUFJMkIsbUJBQUosRUFBeUI7QUFDdkJ6QixlQUFXSixTQUFTOEIsV0FBVCxDQUFxQjVCLGNBQXJCLENBQVg7O0FBRUFDLDJCQUF1QjRCLFdBQXZCLENBQW1DLE9BQW5DO0FBQ0QsR0FKRCxNQUlPO0FBQ0w1QiwyQkFBdUI2QixRQUF2QixDQUFnQyxPQUFoQzs7QUFFQTVCLGVBQVcsSUFBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU2dCLGVBQVQsR0FBMkI7QUFDekJmLGNBQVlQLFVBQVVtQyxXQUFWLEVBQVo7QUFDRCIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuLi9ibmYvZ3JhbW1hcicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjbGV4aWNhbEdyYW1tYXInLFxuICAgICAgbGV4aWNhbEdyYW1tYXIgPSBCTkZMZXhlci5ncmFtbWFyO1xuXG5sZXQgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYSxcbiAgICBibmZMZXhlciA9IG51bGwsXG4gICAgYm5mUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQk5GRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEdyYW1tYXIsIG51bGwsICcgICcpLCAvLy9cbiAgICAgICAgICBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGdyYW1tYXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gYFxuXG4gICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgIDo6PSAgL1xcZCsvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5gO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZShsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5zZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZShibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldENvbnRlbnRUZXh0YXJlYVZhbHVlKGNvbnRlbnRUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUub25CTkZHcmFtbWFyVGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLm9uS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlQk5GTGV4ZXIoKTtcblxuICB1cGRhdGVCTkZQYXJzZXIoKTtcblxuICBpZiAoYm5mTGV4ZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uID0gbnVsbDsgIC8vL1xuXG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShibmZMZXhlciwgYm5mUGFyc2VyLCBwcm9kdWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORkV4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJORkxleGVyKCkge1xuICBjb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmdldFZhbHVlKCk7XG5cbiAgbGV0IGxleGljYWxHcmFtbWFyID0gbnVsbDtcblxuICB0cnkge1xuICAgIGxleGljYWxHcmFtbWFyID0gSlNPTi5wYXJzZShsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge31cblxuICBjb25zdCBsZXhpY2FsR3JhbW1hclZhbGlkID0gKGxleGljYWxHcmFtbWFyICE9PSBudWxsKTtcblxuICBpZiAobGV4aWNhbEdyYW1tYXJWYWxpZCkge1xuICAgIGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbUdyYW1tYXIobGV4aWNhbEdyYW1tYXIpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgYm5mTGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJORlBhcnNlcigpIHtcbiAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG59XG4iXX0=