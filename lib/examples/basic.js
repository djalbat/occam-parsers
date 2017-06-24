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
      var content = '1+2/3',
          lexicalGrammar = BasicLexer.grammar,
          extendedBNFGrammar = grammar; ///

      Example.run(content, lexicalGrammar, extendedBNFGrammar, updateHandler);

      updateHandler();
    }
  }]);

  return BasicExample;
}();

function updateHandler() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJCYXNpY1BhcnNlciIsIkJhc2ljTGV4ZXIiLCJCYXNpY0V4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicHJvZHVjdGlvbk5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImJhc2ljUGFyc2VyIiwiZnJvbUdyYW1tYXIiLCJwYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUUsVUFBVUYsUUFBUSxrQkFBUixDQURoQjtBQUFBLElBRU1HLGNBQWNILFFBQVEsaUJBQVIsQ0FGcEI7O0lBSVFJLFUsR0FBZUwsTSxDQUFmSyxVOztJQUVGQyxZOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsVUFBVSxPQUFoQjtBQUFBLFVBQ01DLGlCQUFpQkgsV0FBV0YsT0FEbEM7QUFBQSxVQUVNTSxxQkFBcUJOLE9BRjNCLENBRFcsQ0FHeUI7O0FBRXBDRCxjQUFRUSxHQUFSLENBQVlILE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDQyxrQkFBckMsRUFBeURFLGFBQXpEOztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLGlCQUFpQixJQUF2Qjs7QUFFQVYsVUFBUVcsV0FBUixDQUFvQlIsVUFBcEI7O0FBRUFILFVBQVFZLFlBQVIsQ0FBcUIsVUFBU1gsT0FBVCxFQUFrQjtBQUNyQyxRQUFNWSxjQUFjWCxZQUFZWSxXQUFaLENBQXdCYixPQUF4QixDQUFwQjtBQUFBLFFBQ01jLFNBQVNGLFdBRGYsQ0FEcUMsQ0FFVDs7QUFFNUIsV0FBT0UsTUFBUDtBQUNELEdBTEQ7O0FBT0FmLFVBQVFnQixlQUFSLENBQXdCTixjQUF4QjtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQiIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vYmFzaWMvZ3JhbW1hcicpLFxuICAgICAgQmFzaWNQYXJzZXIgPSByZXF1aXJlKCcuLi9iYXNpYy9wYXJzZXInKTtcblxuY29uc3QgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJhc2ljRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgY29udGVudCA9ICcxKzIvMycsXG4gICAgICAgICAgbGV4aWNhbEdyYW1tYXIgPSBCYXNpY0xleGVyLmdyYW1tYXIsXG4gICAgICAgICAgZXh0ZW5kZWRCTkZHcmFtbWFyID0gZ3JhbW1hcjsgLy8vXG4gICAgXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEdyYW1tYXIsIGV4dGVuZGVkQk5GR3JhbW1hciwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBudWxsO1xuICBcbiAgRXhhbXBsZS51cGRhdGVMZXhlcihCYXNpY0xleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihncmFtbWFyKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBwYXJzZXIgPSBiYXNpY1BhcnNlcjsgLy8nXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjsgXG4gIH0pO1xuICBcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocHJvZHVjdGlvbk5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcbiJdfQ==