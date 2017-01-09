'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('../example');

var GallinaParser = require('../gallina/parser'),
    gallinaGrammar = require('../gallina/grammar');

var gallinaLexer = GallinaLexer.fromNothing(),
    gallinaParser = GallinaParser.fromNothing();

var GallinaExample = function () {
  function GallinaExample() {
    _classCallCheck(this, GallinaExample);
  }

  _createClass(GallinaExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextAreaValue = gallinaGrammar; ///

      Example.setGrammarTextAreaValue(grammarTextAreaValue);

      update();

      Example.onContentTextAreaChange(function () {
        update();
      });
    }
  }]);

  return GallinaExample;
}();

function update() {
  Example.updateParseTree(gallinaLexer, gallinaParser);
}

module.exports = GallinaExample;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2dhbGxpbmEuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkdhbGxpbmFMZXhlciIsIkV4YW1wbGUiLCJHYWxsaW5hUGFyc2VyIiwiZ2FsbGluYUdyYW1tYXIiLCJnYWxsaW5hTGV4ZXIiLCJmcm9tTm90aGluZyIsImdhbGxpbmFQYXJzZXIiLCJHYWxsaW5hRXhhbXBsZSIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRBcmVhVmFsdWUiLCJ1cGRhdGUiLCJvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZSIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVGLE9BQU9FLFlBRDFCOztBQUdBLElBQUlDLFVBQVVGLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlHLGdCQUFnQkgsUUFBUSxtQkFBUixDQUFwQjtBQUFBLElBQ0lJLGlCQUFpQkosUUFBUSxvQkFBUixDQURyQjs7QUFHQSxJQUFJSyxlQUFlSixhQUFhSyxXQUFiLEVBQW5CO0FBQUEsSUFDSUMsZ0JBQWdCSixjQUFjRyxXQUFkLEVBRHBCOztJQUdNRSxjOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBSUMsdUJBQXVCTCxjQUEzQixDQURXLENBQ2dDOztBQUUzQ0YsY0FBUVEsdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQUU7O0FBRUFULGNBQVFVLHVCQUFSLENBQWdDLFlBQVc7QUFDekNEO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCVCxVQUFRVyxlQUFSLENBQXdCUixZQUF4QixFQUFzQ0UsYUFBdEM7QUFDRDs7QUFFRE8sT0FBT0MsT0FBUCxHQUFpQlAsY0FBakIiLCJmaWxlIjoiZ2FsbGluYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEdhbGxpbmFMZXhlciA9IGxleGVycy5HYWxsaW5hTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG52YXIgR2FsbGluYVBhcnNlciA9IHJlcXVpcmUoJy4uL2dhbGxpbmEvcGFyc2VyJyksXG4gICAgZ2FsbGluYUdyYW1tYXIgPSByZXF1aXJlKCcuLi9nYWxsaW5hL2dyYW1tYXInKTtcblxudmFyIGdhbGxpbmFMZXhlciA9IEdhbGxpbmFMZXhlci5mcm9tTm90aGluZygpLFxuICAgIGdhbGxpbmFQYXJzZXIgPSBHYWxsaW5hUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEdhbGxpbmFFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgZ3JhbW1hclRleHRBcmVhVmFsdWUgPSBnYWxsaW5hR3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEdyYW1tYXJUZXh0QXJlYVZhbHVlKGdyYW1tYXJUZXh0QXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0QXJlYUNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoZ2FsbGluYUxleGVyLCBnYWxsaW5hUGFyc2VyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsaW5hRXhhbXBsZTtcbiJdfQ==