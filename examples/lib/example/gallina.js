'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers'),
    GallinaLexer = lexers.GallinaLexer;

var Example = require('../example');

var GallinaParser = require('../../../es6/gallina/parser'),
    gallinaGrammar = require('../../../es6/gallina/grammar');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2dhbGxpbmEuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkdhbGxpbmFMZXhlciIsIkV4YW1wbGUiLCJHYWxsaW5hUGFyc2VyIiwiZ2FsbGluYUdyYW1tYXIiLCJnYWxsaW5hTGV4ZXIiLCJmcm9tTm90aGluZyIsImdhbGxpbmFQYXJzZXIiLCJHYWxsaW5hRXhhbXBsZSIsImdyYW1tYXJUZXh0QXJlYVZhbHVlIiwic2V0R3JhbW1hclRleHRBcmVhVmFsdWUiLCJ1cGRhdGUiLCJvbkNvbnRlbnRUZXh0QXJlYUNoYW5nZSIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ0lDLGVBQWVGLE9BQU9FLFlBRDFCOztBQUdBLElBQUlDLFVBQVVGLFFBQVEsWUFBUixDQUFkOztBQUVBLElBQUlHLGdCQUFnQkgsUUFBUSw2QkFBUixDQUFwQjtBQUFBLElBQ0lJLGlCQUFpQkosUUFBUSw4QkFBUixDQURyQjs7QUFHQSxJQUFJSyxlQUFlSixhQUFhSyxXQUFiLEVBQW5CO0FBQUEsSUFDSUMsZ0JBQWdCSixjQUFjRyxXQUFkLEVBRHBCOztJQUdNRSxjOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBSUMsdUJBQXVCTCxjQUEzQixDQURXLENBQ2dDOztBQUUzQ0YsY0FBUVEsdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQUU7O0FBRUFULGNBQVFVLHVCQUFSLENBQWdDLFlBQVc7QUFDekNEO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCVCxVQUFRVyxlQUFSLENBQXdCUixZQUF4QixFQUFzQ0UsYUFBdEM7QUFDRDs7QUFFRE8sT0FBT0MsT0FBUCxHQUFpQlAsY0FBakIiLCJmaWxlIjoiZ2FsbGluYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpLFxuICAgIEdhbGxpbmFMZXhlciA9IGxleGVycy5HYWxsaW5hTGV4ZXI7XG5cbnZhciBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG52YXIgR2FsbGluYVBhcnNlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2VzNi9nYWxsaW5hL3BhcnNlcicpLFxuICAgIGdhbGxpbmFHcmFtbWFyID0gcmVxdWlyZSgnLi4vLi4vLi4vZXM2L2dhbGxpbmEvZ3JhbW1hcicpO1xuXG52YXIgZ2FsbGluYUxleGVyID0gR2FsbGluYUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgZ2FsbGluYVBhcnNlciA9IEdhbGxpbmFQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgR2FsbGluYUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciBncmFtbWFyVGV4dEFyZWFWYWx1ZSA9IGdhbGxpbmFHcmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRBcmVhVmFsdWUoZ3JhbW1hclRleHRBcmVhVmFsdWUpO1xuXG4gICAgdXBkYXRlKCk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRBcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShnYWxsaW5hTGV4ZXIsIGdhbGxpbmFQYXJzZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxpbmFFeGFtcGxlO1xuIl19