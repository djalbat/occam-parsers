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
  var ruleName = null;

  Example.updateLexer(ExtendedBNFLexer);

  Example.updateParser(function (grammar) {
    var extendedBNFParser = ExtendedBNFParser.fromNothing(),
        parser = extendedBNFParser; ///

    return parser;
  });

  var node = Example.updateParseTree(ruleName);

  ExtendedBNFParser.generateRules(node);
}

module.exports = ExtendedBNFExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9leHRlbmRlZEJORi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJFeHRlbmRlZEJORlBhcnNlciIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJFeHRlbmRlZEJORkV4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicnVsZU5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImV4dGVuZGVkQk5GUGFyc2VyIiwiZnJvbU5vdGhpbmciLCJwYXJzZXIiLCJub2RlIiwidXBkYXRlUGFyc2VUcmVlIiwiZ2VuZXJhdGVSdWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRSxVQUFVRixRQUFRLHdCQUFSLENBRGhCO0FBQUEsSUFFTUcsb0JBQW9CSCxRQUFRLHVCQUFSLENBRjFCOztJQUlRSSxnQixHQUFxQkwsTSxDQUFyQkssZ0I7O0lBRUZDLGtCOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsVUFBVUosT0FBaEI7QUFBQSxVQUNNSyxpQkFBaUJILGlCQUFpQkYsT0FEeEM7QUFBQSxVQUVNTSxxQkFBcUJOLE9BRjNCLENBRFcsQ0FHeUI7O0FBRXBDRCxjQUFRUSxHQUFSLENBQVlILE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDQyxrQkFBckMsRUFBeURFLGFBQXpEOztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLFdBQVcsSUFBakI7O0FBRUFWLFVBQVFXLFdBQVIsQ0FBb0JSLGdCQUFwQjs7QUFFQUgsVUFBUVksWUFBUixDQUFxQixVQUFTWCxPQUFULEVBQWtCO0FBQ3JDLFFBQU1ZLG9CQUFvQlgsa0JBQWtCWSxXQUFsQixFQUExQjtBQUFBLFFBQ01DLFNBQVNGLGlCQURmLENBRHFDLENBRUg7O0FBRWxDLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1DLE9BQU9oQixRQUFRaUIsZUFBUixDQUF3QlAsUUFBeEIsQ0FBYjs7QUFFQVIsb0JBQWtCZ0IsYUFBbEIsQ0FBZ0NGLElBQWhDO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJoQixrQkFBakIiLCJmaWxlIjoiZXh0ZW5kZWRCTkYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL2dyYW1tYXInKSxcbiAgICAgIEV4dGVuZGVkQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vZXh0ZW5kZWRCTkYvcGFyc2VyJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBFeHRlbmRlZEJORkV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBncmFtbWFyLFxuICAgICAgICAgIGxleGljYWxHcmFtbWFyID0gRXh0ZW5kZWRCTkZMZXhlci5ncmFtbWFyLFxuICAgICAgICAgIGV4dGVuZGVkQk5GR3JhbW1hciA9IGdyYW1tYXI7IC8vL1xuICBcbiAgICBFeGFtcGxlLnJ1bihjb250ZW50LCBsZXhpY2FsR3JhbW1hciwgZXh0ZW5kZWRCTkZHcmFtbWFyLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVyKCkge1xuICBjb25zdCBydWxlTmFtZSA9IG51bGw7XG5cbiAgRXhhbXBsZS51cGRhdGVMZXhlcihFeHRlbmRlZEJORkxleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihncmFtbWFyKSB7XG4gICAgY29uc3QgZXh0ZW5kZWRCTkZQYXJzZXIgPSBFeHRlbmRlZEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlciA9IGV4dGVuZGVkQk5GUGFyc2VyOyAvLy9cbiAgICBcbiAgICByZXR1cm4gcGFyc2VyO1xuICB9KTtcblxuICBjb25zdCBub2RlID0gRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpO1xuXG4gIEV4dGVuZGVkQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kZWRCTkZFeGFtcGxlO1xuIl19