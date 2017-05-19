'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    FlorenceParser = require('../florence/parser'),
    florenceGrammar = require('../florence/grammar');

var Textarea = easy.Textarea,
    FlorenceLexer = lexers.FlorenceLexer;


var productionNameTextareaSelector = 'textarea#productionName';

var florenceLexer = FlorenceLexer.fromNothing();

var productionName = void 0,
    productionNameTextarea = void 0;

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  productionNameTextarea = new Textarea(productionNameTextareaSelector);

                  var grammarTextareaValue = florenceGrammar; ///

                  productionNameTextarea.onKeyUp(update);

                  Example.setGrammarTextareaValue(grammarTextareaValue);

                  Example.onGrammarTextareaKeyUp(update);

                  Example.onContentTextareaKeyUp(update);

                  update();
            }
      }]);

      return FlorenceExample;
}();

function update() {
      var grammarTextareaValue = Example.getGrammarTextareaValue(),
          productionNameTextareaValue = productionNameTextarea.getValue(),
          grammar = grammarTextareaValue,
          ///
      productionName = productionNameTextareaValue,
          ///
      florenceParser = FlorenceParser.fromGrammar(grammar),
          production = florenceParser.findProduction(productionName);

      Example.updateParseTree(florenceLexer, florenceParser, production);
}

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJGbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlR3JhbW1hciIsIlRleHRhcmVhIiwiRmxvcmVuY2VMZXhlciIsInByb2R1Y3Rpb25OYW1lVGV4dGFyZWFTZWxlY3RvciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsInByb2R1Y3Rpb25OYW1lIiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYSIsIkZsb3JlbmNlRXhhbXBsZSIsImdyYW1tYXJUZXh0YXJlYVZhbHVlIiwib25LZXlVcCIsInVwZGF0ZSIsInNldEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwib25HcmFtbWFyVGV4dGFyZWFLZXlVcCIsIm9uQ29udGVudFRleHRhcmVhS2V5VXAiLCJnZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsInByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwiZ3JhbW1hciIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUdyYW1tYXIiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJ1cGRhdGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNSSxrQkFBa0JKLFFBQVEscUJBQVIsQ0FGeEI7O0FBSU0sSUFBRUssUUFBRixHQUFlTixJQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CTCxNQURwQixDQUNFSyxhQURGOzs7QUFHTixJQUFNQyxpQ0FBaUMseUJBQXZDOztBQUVBLElBQU1DLGdCQUFnQkYsY0FBY0csV0FBZCxFQUF0Qjs7QUFFQSxJQUFJQyx1QkFBSjtBQUFBLElBQ0lDLCtCQURKOztJQUdNQyxlOzs7Ozs7O2tDQUNTO0FBQ1hELDJDQUF5QixJQUFJTixRQUFKLENBQWFFLDhCQUFiLENBQXpCOztBQUVBLHNCQUFNTSx1QkFBdUJULGVBQTdCLENBSFcsQ0FHbUM7O0FBRTlDTyx5Q0FBdUJHLE9BQXZCLENBQStCQyxNQUEvQjs7QUFFQWIsMEJBQVFjLHVCQUFSLENBQWdDSCxvQkFBaEM7O0FBRUFYLDBCQUFRZSxzQkFBUixDQUErQkYsTUFBL0I7O0FBRUFiLDBCQUFRZ0Isc0JBQVIsQ0FBK0JILE1BQS9COztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCLFVBQU1GLHVCQUF1QlgsUUFBUWlCLHVCQUFSLEVBQTdCO0FBQUEsVUFDTUMsOEJBQThCVCx1QkFBdUJVLFFBQXZCLEVBRHBDO0FBQUEsVUFFTUMsVUFBVVQsb0JBRmhCO0FBQUEsVUFFc0M7QUFDaENILHVCQUFpQlUsMkJBSHZCO0FBQUEsVUFHb0Q7QUFDOUNHLHVCQUFpQnBCLGVBQWVxQixXQUFmLENBQTJCRixPQUEzQixDQUp2QjtBQUFBLFVBS01HLGFBQWFGLGVBQWVHLGNBQWYsQ0FBOEJoQixjQUE5QixDQUxuQjs7QUFPQVIsY0FBUXlCLGVBQVIsQ0FBd0JuQixhQUF4QixFQUF1Q2UsY0FBdkMsRUFBdURFLFVBQXZEO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJqQixlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9wYXJzZXInKSxcbiAgICAgIGZsb3JlbmNlR3JhbW1hciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2dyYW1tYXInKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBwcm9kdWN0aW9uTmFtZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcHJvZHVjdGlvbk5hbWUnO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpO1xuXG5sZXQgcHJvZHVjdGlvbk5hbWUsXG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBwcm9kdWN0aW9uTmFtZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGZsb3JlbmNlR3JhbW1hcjsgLy8vXG5cbiAgICBwcm9kdWN0aW9uTmFtZVRleHRhcmVhLm9uS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRhcmVhVmFsdWUoZ3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5vbkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBFeGFtcGxlLmdldEdyYW1tYXJUZXh0YXJlYVZhbHVlKCksXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSA9IHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICBwcm9kdWN0aW9uID0gZmxvcmVuY2VQYXJzZXIuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGZsb3JlbmNlTGV4ZXIsIGZsb3JlbmNlUGFyc2VyLCBwcm9kdWN0aW9uKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG4iXX0=