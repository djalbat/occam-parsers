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
  var ruleName = null;

  Example.updateLexer(BasicLexer);

  Example.updateParser(function (grammar) {
    var basicParser = BasicParser.fromGrammar(grammar),
        parser = basicParser; //'

    return parser;
  });

  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiRXhhbXBsZSIsImdyYW1tYXIiLCJCYXNpY1BhcnNlciIsIkJhc2ljTGV4ZXIiLCJCYXNpY0V4YW1wbGUiLCJjb250ZW50IiwibGV4aWNhbEdyYW1tYXIiLCJleHRlbmRlZEJORkdyYW1tYXIiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicnVsZU5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImJhc2ljUGFyc2VyIiwiZnJvbUdyYW1tYXIiLCJwYXJzZXIiLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUUsVUFBVUYsUUFBUSxrQkFBUixDQURoQjtBQUFBLElBRU1HLGNBQWNILFFBQVEsaUJBQVIsQ0FGcEI7O0lBSVFJLFUsR0FBZUwsTSxDQUFmSyxVOztJQUVGQyxZOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsVUFBVSxPQUFoQjtBQUFBLFVBQ01DLGlCQUFpQkgsV0FBV0YsT0FEbEM7QUFBQSxVQUVNTSxxQkFBcUJOLE9BRjNCLENBRFcsQ0FHeUI7O0FBRXBDRCxjQUFRUSxHQUFSLENBQVlILE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDQyxrQkFBckMsRUFBeURFLGFBQXpEOztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLFdBQVcsSUFBakI7O0FBRUFWLFVBQVFXLFdBQVIsQ0FBb0JSLFVBQXBCOztBQUVBSCxVQUFRWSxZQUFSLENBQXFCLFVBQVNYLE9BQVQsRUFBa0I7QUFDckMsUUFBTVksY0FBY1gsWUFBWVksV0FBWixDQUF3QmIsT0FBeEIsQ0FBcEI7QUFBQSxRQUNNYyxTQUFTRixXQURmLENBRHFDLENBRVQ7O0FBRTVCLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BZixVQUFRZ0IsZUFBUixDQUF3Qk4sUUFBeEI7QUFDRDs7QUFFRE8sT0FBT0MsT0FBUCxHQUFpQmQsWUFBakIiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2Jhc2ljL2dyYW1tYXInKSxcbiAgICAgIEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnMSsyLzMnLFxuICAgICAgICAgIGxleGljYWxHcmFtbWFyID0gQmFzaWNMZXhlci5ncmFtbWFyLFxuICAgICAgICAgIGV4dGVuZGVkQk5GR3JhbW1hciA9IGdyYW1tYXI7IC8vL1xuICAgIFxuICAgIEV4YW1wbGUucnVuKGNvbnRlbnQsIGxleGljYWxHcmFtbWFyLCBleHRlbmRlZEJORkdyYW1tYXIsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdXBkYXRlSGFuZGxlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gbnVsbDtcbiAgXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoQmFzaWNMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oZ3JhbW1hcikge1xuICAgIGNvbnN0IGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgcGFyc2VyID0gYmFzaWNQYXJzZXI7IC8vJ1xuICAgIFxuICAgIHJldHVybiBwYXJzZXI7IFxuICB9KTtcbiAgXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHJ1bGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG4iXX0=