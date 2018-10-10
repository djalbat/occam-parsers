'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    FlorenceParser = require('../florence/parser');

var Input = easy.Input,
    FlorenceLexer = lexers.FlorenceLexer;


var ruleNameInputSelector = '#ruleName';

var ruleNameInput = void 0;

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  ruleNameInput = new Input(ruleNameInputSelector);

                  ruleNameInput.onKeyUp(updateHandler);

                  var bnf = FlorenceParser.bnf,
                      content = '',
                      lexicalEntries = FlorenceLexer.entries; ///

                  Example.run(content, lexicalEntries, bnf, updateHandler);

                  updateHandler();
            }
      }]);

      return FlorenceExample;
}();

module.exports = FlorenceExample;

function updateHandler() {
      var ruleNameInputValue = ruleNameInput.getValue(),
          ruleName = ruleNameInputValue;

      Example.updateLexer(FlorenceLexer);

      Example.updateParser(function (bnf) {
            var florenceParser = FlorenceParser.fromBNF(bnf),
                parser = florenceParser; ///

            return parser;
      });

      Example.updateParseTree(ruleName);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJGbG9yZW5jZVBhcnNlciIsIklucHV0IiwiRmxvcmVuY2VMZXhlciIsInJ1bGVOYW1lSW5wdXRTZWxlY3RvciIsInJ1bGVOYW1lSW5wdXQiLCJGbG9yZW5jZUV4YW1wbGUiLCJvbktleVVwIiwidXBkYXRlSGFuZGxlciIsImJuZiIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJydW4iLCJtb2R1bGUiLCJleHBvcnRzIiwicnVsZU5hbWVJbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJydWxlTmFtZSIsInVwZGF0ZUxleGVyIiwidXBkYXRlUGFyc2VyIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tQk5GIiwicGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxpQkFBaUJILFFBQVEsb0JBQVIsQ0FEdkI7O0FBR00sSUFBRUksS0FBRixHQUFZTCxJQUFaLENBQUVLLEtBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CSixNQURwQixDQUNFSSxhQURGOzs7QUFHTixJQUFNQyx3QkFBd0IsV0FBOUI7O0FBRUEsSUFBSUMsc0JBQUo7O0lBRU1DLGU7Ozs7Ozs7a0NBQ1M7QUFDWEQsa0NBQWdCLElBQUlILEtBQUosQ0FBVUUscUJBQVYsQ0FBaEI7O0FBRUFDLGdDQUFjRSxPQUFkLENBQXNCQyxhQUF0Qjs7QUFFTSxzQkFBRUMsR0FBRixHQUFVUixjQUFWLENBQUVRLEdBQUY7QUFBQSxzQkFDQUMsT0FEQSxHQUNVLEVBRFY7QUFBQSxzQkFFQUMsY0FGQSxHQUVpQlIsY0FBY1MsT0FGL0IsQ0FMSyxDQU9tQzs7QUFFOUNaLDBCQUFRYSxHQUFSLENBQVlILE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDRixHQUFyQyxFQUEwQ0QsYUFBMUM7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCVCxlQUFqQjs7QUFFQSxTQUFTRSxhQUFULEdBQXlCO0FBQ3ZCLFVBQU1RLHFCQUFxQlgsY0FBY1ksUUFBZCxFQUEzQjtBQUFBLFVBQ01DLFdBQVdGLGtCQURqQjs7QUFHQWhCLGNBQVFtQixXQUFSLENBQW9CaEIsYUFBcEI7O0FBRUFILGNBQVFvQixZQUFSLENBQXFCLFVBQVNYLEdBQVQsRUFBYztBQUNqQyxnQkFBTVksaUJBQWlCcEIsZUFBZXFCLE9BQWYsQ0FBdUJiLEdBQXZCLENBQXZCO0FBQUEsZ0JBQ01jLFNBQVNGLGNBRGYsQ0FEaUMsQ0FFRDs7QUFFaEMsbUJBQU9FLE1BQVA7QUFDRCxPQUxEOztBQU9BdkIsY0FBUXdCLGVBQVIsQ0FBd0JOLFFBQXhCO0FBQ0QiLCJmaWxlIjoiZmxvcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvcGFyc2VyJyk7XG5cbmNvbnN0IHsgSW5wdXQgfSA9IGVhc3ksXG4gICAgICB7IEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgcnVsZU5hbWVJbnB1dFNlbGVjdG9yID0gJyNydWxlTmFtZSc7XG5cbmxldCBydWxlTmFtZUlucHV0O1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHJ1bGVOYW1lSW5wdXQgPSBuZXcgSW5wdXQocnVsZU5hbWVJbnB1dFNlbGVjdG9yKTtcblxuICAgIHJ1bGVOYW1lSW5wdXQub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGNvbnN0IHsgYm5mIH0gPSBGbG9yZW5jZVBhcnNlcixcbiAgICAgICAgICBjb250ZW50ID0gJycsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBGbG9yZW5jZUxleGVyLmVudHJpZXM7IC8vL1xuXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGJuZiwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lSW5wdXRWYWx1ZSA9IHJ1bGVOYW1lSW5wdXQuZ2V0VmFsdWUoKSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZUlucHV0VmFsdWU7XG5cbiAgRXhhbXBsZS51cGRhdGVMZXhlcihGbG9yZW5jZUxleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihibmYpIHtcbiAgICBjb25zdCBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBmbG9yZW5jZVBhcnNlcjsgIC8vL1xuICAgIFxuICAgIHJldHVybiBwYXJzZXI7XG4gIH0pO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHJ1bGVOYW1lKTtcbn1cbiJdfQ==