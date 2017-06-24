'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../extendedBNF/grammar'),
    ExtendedBNFParser = require('../extendedBNF/parser');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer;

var ExtendedBNFExample = function () {
  function ExtendedBNFExample() {
    _classCallCheck(this, ExtendedBNFExample);
  }

  _createClass(ExtendedBNFExample, null, [{
    key: 'run',
    value: function run() {
      var lexicalGrammar = ExtendedBNFLexer.grammar,
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '),
          ///
      bnfGrammarTextareaValue = grammar,
          ///
      contentTextareaValue = grammar; ///

      Example.setContentTextareaValue(contentTextareaValue);

      Example.setLexicalGrammarTextareaValue(lexicalGrammarTextareaValue);

      Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

      Example.onContentTextareaKeyUp(update);

      Example.onLexicalGrammarTextareaKeyUp(update);

      Example.onExtendedBNFGrammarTextareaKeyUp(update);

      update();
    }
  }]);

  return ExtendedBNFExample;
}();

function update() {
  var productionName = null;

  Example.updateLexer(ExtendedBNFLexer);

  Example.updateParser(function (grammar) {
    var extendedBNFParser = ExtendedBNFParser.fromNothing(),
        parser = extendedBNFParser; ///

    return parser;
  });

  Example.updateParseTree(productionName);
}

module.exports = ExtendedBNFExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9leHRlbmRlZEJORi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJFeHRlbmRlZEJORlBhcnNlciIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJFeHRlbmRlZEJORkV4YW1wbGUiLCJsZXhpY2FsR3JhbW1hciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwic2V0Q29udGVudFRleHRhcmVhVmFsdWUiLCJzZXRMZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwib25Db250ZW50VGV4dGFyZWFLZXlVcCIsInVwZGF0ZSIsIm9uTGV4aWNhbEdyYW1tYXJUZXh0YXJlYUtleVVwIiwib25FeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYUtleVVwIiwicHJvZHVjdGlvbk5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImV4dGVuZGVkQk5GUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJwYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUUsVUFBVUYsUUFBUSx3QkFBUixDQURoQjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjs7SUFJUUksZ0IsR0FBcUJMLE0sQ0FBckJLLGdCOztJQUVGQyxrQjs7Ozs7OzswQkFDUztBQUNYLFVBQU1DLGlCQUFpQkYsaUJBQWlCRixPQUF4QztBQUFBLFVBQ01LLDhCQUE4QkMsS0FBS0MsU0FBTCxDQUFlSCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBRHBDO0FBQUEsVUFDZ0Y7QUFDMUVJLGdDQUEwQlIsT0FGaEM7QUFBQSxVQUUwQztBQUNwQ1MsNkJBQXVCVCxPQUg3QixDQURXLENBSTJCOztBQUV0Q0QsY0FBUVcsdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQVYsY0FBUVksOEJBQVIsQ0FBdUNOLDJCQUF2Qzs7QUFFQU4sY0FBUWEsa0NBQVIsQ0FBMkNKLHVCQUEzQzs7QUFFQVQsY0FBUWMsc0JBQVIsQ0FBK0JDLE1BQS9COztBQUVBZixjQUFRZ0IsNkJBQVIsQ0FBc0NELE1BQXRDOztBQUVBZixjQUFRaUIsaUNBQVIsQ0FBMENGLE1BQTFDOztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCLE1BQU1HLGlCQUFpQixJQUF2Qjs7QUFFQWxCLFVBQVFtQixXQUFSLENBQW9CaEIsZ0JBQXBCOztBQUVBSCxVQUFRb0IsWUFBUixDQUFxQixVQUFTbkIsT0FBVCxFQUFrQjtBQUNyQyxRQUFNb0Isb0JBQW9CbkIsa0JBQWtCb0IsV0FBbEIsRUFBMUI7QUFBQSxRQUNNQyxTQUFTRixpQkFEZixDQURxQyxDQUVIOztBQUVsQyxXQUFPRSxNQUFQO0FBQ0QsR0FMRDs7QUFPQXZCLFVBQVF3QixlQUFSLENBQXdCTixjQUF4QjtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCdEIsa0JBQWpCIiwiZmlsZSI6ImV4dGVuZGVkQk5GLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9ncmFtbWFyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgRXh0ZW5kZWRCTkZFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCBsZXhpY2FsR3JhbW1hciA9IEV4dGVuZGVkQk5GTGV4ZXIuZ3JhbW1hcixcbiAgICAgICAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsR3JhbW1hciwgbnVsbCwgJyAgJyksIC8vL1xuICAgICAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hciwgIC8vL1xuICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldENvbnRlbnRUZXh0YXJlYVZhbHVlKGNvbnRlbnRUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0TGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uTGV4aWNhbEdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uRXh0ZW5kZWRCTkZHcmFtbWFyVGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IG51bGw7XG5cbiAgRXhhbXBsZS51cGRhdGVMZXhlcihFeHRlbmRlZEJORkxleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihncmFtbWFyKSB7XG4gICAgY29uc3QgZXh0ZW5kZWRCTkZQYXJzZXIgPSBFeHRlbmRlZEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlciA9IGV4dGVuZGVkQk5GUGFyc2VyOyAvLy9cbiAgICBcbiAgICByZXR1cm4gcGFyc2VyO1xuICB9KTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShwcm9kdWN0aW9uTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kZWRCTkZFeGFtcGxlO1xuIl19