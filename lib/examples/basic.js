'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var bnf = require('../basic/bnf'),
    Example = require('../example'),
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
          lexicalEntries = BasicLexer.entries; /// 

      Example.run(content, lexicalEntries, bnf, updateHandler);

      updateHandler();
    }
  }]);

  return BasicExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(BasicLexer);

  Example.updateParser(function (bnf) {
    var basicParser = BasicParser.fromBNF(bnf),
        parser = basicParser; //'

    return parser;
  });

  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiYm5mIiwiRXhhbXBsZSIsIkJhc2ljUGFyc2VyIiwiQmFzaWNMZXhlciIsIkJhc2ljRXhhbXBsZSIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJydW4iLCJ1cGRhdGVIYW5kbGVyIiwicnVsZU5hbWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsImJhc2ljUGFyc2VyIiwiZnJvbUJORiIsInBhcnNlciIsInVwZGF0ZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxNQUFNRCxRQUFRLGNBQVIsQ0FBWjtBQUFBLElBQ01FLFVBQVVGLFFBQVEsWUFBUixDQURoQjtBQUFBLElBRU1HLGNBQWNILFFBQVEsaUJBQVIsQ0FGcEI7O0lBSVFJLFUsR0FBZUwsTSxDQUFmSyxVOztJQUVGQyxZOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsVUFBVSxPQUFoQjtBQUFBLFVBQ01DLGlCQUFpQkgsV0FBV0ksT0FEbEMsQ0FEVyxDQUVnQzs7QUFFM0NOLGNBQVFPLEdBQVIsQ0FBWUgsT0FBWixFQUFxQkMsY0FBckIsRUFBcUNOLEdBQXJDLEVBQTBDUyxhQUExQzs7QUFFQUE7QUFDRDs7Ozs7O0FBR0gsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixNQUFNQyxXQUFXLElBQWpCOztBQUVBVCxVQUFRVSxXQUFSLENBQW9CUixVQUFwQjs7QUFFQUYsVUFBUVcsWUFBUixDQUFxQixVQUFTWixHQUFULEVBQWM7QUFDakMsUUFBTWEsY0FBY1gsWUFBWVksT0FBWixDQUFvQmQsR0FBcEIsQ0FBcEI7QUFBQSxRQUNNZSxTQUFTRixXQURmLENBRGlDLENBRUw7O0FBRTVCLFdBQU9FLE1BQVA7QUFDRCxHQUxEOztBQU9BZCxVQUFRZSxlQUFSLENBQXdCTixRQUF4QjtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQiIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGJuZiA9IHJlcXVpcmUoJy4uL2Jhc2ljL2JuZicpLFxuICAgICAgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnMSsyLzMnLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gQmFzaWNMZXhlci5lbnRyaWVzOyAvLy8gXG4gICAgXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGJuZiwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBudWxsO1xuICBcbiAgRXhhbXBsZS51cGRhdGVMZXhlcihCYXNpY0xleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihibmYpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBiYXNpY1BhcnNlcjsgLy8nXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjsgXG4gIH0pO1xuICBcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcbiJdfQ==