'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../basic/grammar'),
    BasicParser = require('../basic/parser');

var BasicLexer = lexers.BasicLexer;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var lexicalGrammar = BasicLexer.grammar,
          lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '),
          bnfGrammarTextareaValue = grammar,
          ///
      contentTextareaValue = '1+(2/3)';

      Example.setContentTextareaValue(contentTextareaValue);

      Example.setLexicalGrammarTextareaValue(lexicalGrammarTextareaValue);

      Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

      Example.onContentTextareaKeyUp(update);

      Example.onLexicalGrammarTextareaKeyUp(update);

      Example.onExtendedBNFGrammarTextareaKeyUp(update);

      update();
    }
  }]);

  return BasicExample;
}();

function update() {
  var productionName = null;

  Example.updateLexer(BasicLexer);

  Example.updateParser(function (grammar) {
    var basicParser = BasicParser.fromGrammar(grammar),
        parser = basicParser; //'

    return parser;
  });

  Example.updateParseTree(productionName);
}

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJCYXNpY1BhcnNlciIsIkJhc2ljTGV4ZXIiLCJCYXNpY0V4YW1wbGUiLCJsZXhpY2FsR3JhbW1hciIsImxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsImNvbnRlbnRUZXh0YXJlYVZhbHVlIiwic2V0Q29udGVudFRleHRhcmVhVmFsdWUiLCJzZXRMZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUiLCJzZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwib25Db250ZW50VGV4dGFyZWFLZXlVcCIsInVwZGF0ZSIsIm9uTGV4aWNhbEdyYW1tYXJUZXh0YXJlYUtleVVwIiwib25FeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYUtleVVwIiwicHJvZHVjdGlvbk5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImJhc2ljUGFyc2VyIiwiZnJvbUdyYW1tYXIiLCJwYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUUsVUFBVUYsUUFBUSxrQkFBUixDQURoQjtBQUFBLElBRU1HLGNBQWNILFFBQVEsaUJBQVIsQ0FGcEI7O0lBSVFJLFUsR0FBZUwsTSxDQUFmSyxVOztJQUVGQyxZOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsaUJBQWlCRixXQUFXRixPQUFsQztBQUFBLFVBQ01LLDhCQUE4QkMsS0FBS0MsU0FBTCxDQUFlSCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBRHBDO0FBQUEsVUFFTUksMEJBQTBCUixPQUZoQztBQUFBLFVBRXlDO0FBQ25DUyw2QkFBdUIsU0FIN0I7O0FBS0FWLGNBQVFXLHVCQUFSLENBQWdDRCxvQkFBaEM7O0FBRUFWLGNBQVFZLDhCQUFSLENBQXVDTiwyQkFBdkM7O0FBRUFOLGNBQVFhLGtDQUFSLENBQTJDSix1QkFBM0M7O0FBRUFULGNBQVFjLHNCQUFSLENBQStCQyxNQUEvQjs7QUFFQWYsY0FBUWdCLDZCQUFSLENBQXNDRCxNQUF0Qzs7QUFFQWYsY0FBUWlCLGlDQUFSLENBQTBDRixNQUExQzs7QUFFQUE7QUFDRDs7Ozs7O0FBR0gsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixNQUFNRyxpQkFBaUIsSUFBdkI7O0FBRUFsQixVQUFRbUIsV0FBUixDQUFvQmhCLFVBQXBCOztBQUVBSCxVQUFRb0IsWUFBUixDQUFxQixVQUFTbkIsT0FBVCxFQUFrQjtBQUNyQyxRQUFNb0IsY0FBY25CLFlBQVlvQixXQUFaLENBQXdCckIsT0FBeEIsQ0FBcEI7QUFBQSxRQUNNc0IsU0FBU0YsV0FEZixDQURxQyxDQUVUOztBQUU1QixXQUFPRSxNQUFQO0FBQ0QsR0FMRDs7QUFPQXZCLFVBQVF3QixlQUFSLENBQXdCTixjQUF4QjtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCdEIsWUFBakIiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2Jhc2ljL2dyYW1tYXInKSxcbiAgICAgIEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGxleGljYWxHcmFtbWFyID0gQmFzaWNMZXhlci5ncmFtbWFyLFxuICAgICAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxHcmFtbWFyLCBudWxsLCAnICAnKSxcbiAgICAgICAgICBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGdyYW1tYXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gJzErKDIvMyknO1xuXG4gICAgRXhhbXBsZS5zZXRDb250ZW50VGV4dGFyZWFWYWx1ZShjb250ZW50VGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldExleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZShsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5zZXRFeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkxleGljYWxHcmFtbWFyVGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBudWxsO1xuICBcbiAgRXhhbXBsZS51cGRhdGVMZXhlcihCYXNpY0xleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihncmFtbWFyKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBwYXJzZXIgPSBiYXNpY1BhcnNlcjsgLy8nXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjsgXG4gIH0pO1xuICBcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocHJvZHVjdGlvbk5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcbiJdfQ==