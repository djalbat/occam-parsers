'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var bnf = require('../bnf/bnf'),
    Example = require('../example'),
    BNFParser = require('../bnf/parser');

var BNFLexer = lexers.BNFLexer;

var BNFExample = function () {
  function BNFExample() {
    _classCallCheck(this, BNFExample);
  }

  _createClass(BNFExample, null, [{
    key: 'run',
    value: function run() {
      var content = bnf,
          lexicalEntries = BNFLexer.entries; ///

      Example.run(content, lexicalEntries, bnf, updateHandler);

      updateHandler();
    }
  }]);

  return BNFExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(BNFLexer);

  Example.updateParser(function (bnf) {
    var bnfParser = BNFParser.fromNothing(),
        parser = bnfParser; ///

    return parser;
  });

  var node = Example.updateParseTree(ruleName);

  BNFParser.generateRules(node);
}

module.exports = BNFExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9ibmYuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsImJuZiIsIkV4YW1wbGUiLCJCTkZQYXJzZXIiLCJCTkZMZXhlciIsIkJORkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwicnVuIiwidXBkYXRlSGFuZGxlciIsInJ1bGVOYW1lIiwidXBkYXRlTGV4ZXIiLCJ1cGRhdGVQYXJzZXIiLCJibmZQYXJzZXIiLCJmcm9tTm90aGluZyIsInBhcnNlciIsIm5vZGUiLCJ1cGRhdGVQYXJzZVRyZWUiLCJnZW5lcmF0ZVJ1bGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE1BQU1ELFFBQVEsWUFBUixDQUFaO0FBQUEsSUFDTUUsVUFBVUYsUUFBUSxZQUFSLENBRGhCO0FBQUEsSUFFTUcsWUFBWUgsUUFBUSxlQUFSLENBRmxCOztJQUlRSSxRLEdBQWFMLE0sQ0FBYkssUTs7SUFFRkMsVTs7Ozs7OzswQkFDUztBQUNYLFVBQU1DLFVBQVVMLEdBQWhCO0FBQUEsVUFDTU0saUJBQWlCSCxTQUFTSSxPQURoQyxDQURXLENBRStCOztBQUUxQ04sY0FBUU8sR0FBUixDQUFZSCxPQUFaLEVBQXFCQyxjQUFyQixFQUFxQ04sR0FBckMsRUFBMENTLGFBQTFDOztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLFdBQVcsSUFBakI7O0FBRUFULFVBQVFVLFdBQVIsQ0FBb0JSLFFBQXBCOztBQUVBRixVQUFRVyxZQUFSLENBQXFCLFVBQVNaLEdBQVQsRUFBYztBQUNqQyxRQUFNYSxZQUFZWCxVQUFVWSxXQUFWLEVBQWxCO0FBQUEsUUFDTUMsU0FBU0YsU0FEZixDQURpQyxDQUVQOztBQUUxQixXQUFPRSxNQUFQO0FBQ0QsR0FMRDs7QUFPQSxNQUFNQyxPQUFPZixRQUFRZ0IsZUFBUixDQUF3QlAsUUFBeEIsQ0FBYjs7QUFFQVIsWUFBVWdCLGFBQVYsQ0FBd0JGLElBQXhCO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJoQixVQUFqQiIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuLi9ibmYvYm5mJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJORkV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBibmYsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBCTkZMZXhlci5lbnRyaWVzOyAgLy8vXG4gIFxuICAgIEV4YW1wbGUucnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdXBkYXRlSGFuZGxlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gbnVsbDtcblxuICBFeGFtcGxlLnVwZGF0ZUxleGVyKEJORkxleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihibmYpIHtcbiAgICBjb25zdCBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBibmZQYXJzZXI7IC8vL1xuICAgIFxuICAgIHJldHVybiBwYXJzZXI7XG4gIH0pO1xuXG4gIGNvbnN0IG5vZGUgPSBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSk7XG5cbiAgQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZTtcbiJdfQ==