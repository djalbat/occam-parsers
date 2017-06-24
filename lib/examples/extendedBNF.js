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
      var content = grammar,
          lexicalGrammar = ExtendedBNFLexer.grammar,
          extendedBNFGrammar = grammar; ///

      Example.run(content, lexicalGrammar, extendedBNFGrammar, updateHandler);

      updateHandler();
    }
  }]);

  return ExtendedBNFExample;
}();

function updateHandler() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9leHRlbmRlZEJORi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJFeHRlbmRlZEJORlBhcnNlciIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJFeHRlbmRlZEJORkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicHJvZHVjdGlvbk5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImV4dGVuZGVkQk5GUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJwYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUUsVUFBVUYsUUFBUSx3QkFBUixDQURoQjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjs7SUFJUUksZ0IsR0FBcUJMLE0sQ0FBckJLLGdCOztJQUVGQyxrQjs7Ozs7OzswQkFDUztBQUNYLFVBQU1DLFVBQVVKLE9BQWhCO0FBQUEsVUFDTUssaUJBQWlCSCxpQkFBaUJGLE9BRHhDO0FBQUEsVUFFTU0scUJBQXFCTixPQUYzQixDQURXLENBR3lCOztBQUVwQ0QsY0FBUVEsR0FBUixDQUFZSCxPQUFaLEVBQXFCQyxjQUFyQixFQUFxQ0Msa0JBQXJDLEVBQXlERSxhQUF6RDs7QUFFQUE7QUFDRDs7Ozs7O0FBR0gsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFNQyxpQkFBaUIsSUFBdkI7O0FBRUFWLFVBQVFXLFdBQVIsQ0FBb0JSLGdCQUFwQjs7QUFFQUgsVUFBUVksWUFBUixDQUFxQixVQUFTWCxPQUFULEVBQWtCO0FBQ3JDLFFBQU1ZLG9CQUFvQlgsa0JBQWtCWSxXQUFsQixFQUExQjtBQUFBLFFBQ01DLFNBQVNGLGlCQURmLENBRHFDLENBRUg7O0FBRWxDLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BZixVQUFRZ0IsZUFBUixDQUF3Qk4sY0FBeEI7QUFDRDs7QUFFRE8sT0FBT0MsT0FBUCxHQUFpQmQsa0JBQWpCIiwiZmlsZSI6ImV4dGVuZGVkQk5GLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuLi9leHRlbmRlZEJORi9ncmFtbWFyJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgRXh0ZW5kZWRCTkZFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZ3JhbW1hcixcbiAgICAgICAgICBsZXhpY2FsR3JhbW1hciA9IEV4dGVuZGVkQk5GTGV4ZXIuZ3JhbW1hcixcbiAgICAgICAgICBleHRlbmRlZEJORkdyYW1tYXIgPSBncmFtbWFyOyAvLy9cbiAgXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEdyYW1tYXIsIGV4dGVuZGVkQk5GR3JhbW1hciwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBudWxsO1xuXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoRXh0ZW5kZWRCTkZMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oZ3JhbW1hcikge1xuICAgIGNvbnN0IGV4dGVuZGVkQk5GUGFyc2VyID0gRXh0ZW5kZWRCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBleHRlbmRlZEJORlBhcnNlcjsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfSk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocHJvZHVjdGlvbk5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGVkQk5GRXhhbXBsZTtcbiJdfQ==