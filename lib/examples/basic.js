'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var _BasicParser = BasicParser,
          bnf = _BasicParser.bnf,
          content = '1+2/3',
          lexicalEntries = entries; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9iYXNpYy5qcyJdLCJuYW1lcyI6WyJCYXNpY0V4YW1wbGUiLCJCYXNpY1BhcnNlciIsImJuZiIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJFeGFtcGxlIiwicnVuIiwidXBkYXRlSGFuZGxlciIsInJ1bGVOYW1lIiwidXBkYXRlTGV4ZXIiLCJCYXNpY0xleGVyIiwidXBkYXRlUGFyc2VyIiwiYmFzaWNQYXJzZXIiLCJmcm9tQk5GIiwicGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxZOzs7Ozs7OzBCQUNTO0FBQUEseUJBQ0tDLFdBREw7QUFBQSxVQUNIQyxHQURHLGdCQUNIQSxHQURHO0FBQUEsVUFFTEMsT0FGSyxHQUVLLE9BRkw7QUFBQSxVQUdMQyxjQUhLLEdBR1lDLE9BSFosRUFHcUI7O0FBRWhDQyxjQUFRQyxHQUFSLENBQVlKLE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDRixHQUFyQyxFQUEwQ00sYUFBMUM7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdILFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsV0FBVyxJQUFqQjs7QUFFQUgsVUFBUUksV0FBUixDQUFvQkMsVUFBcEI7O0FBRUFMLFVBQVFNLFlBQVIsQ0FBcUIsVUFBU1YsR0FBVCxFQUFjO0FBQ2pDLFFBQU1XLGNBQWNaLFlBQVlhLE9BQVosQ0FBb0JaLEdBQXBCLENBQXBCO0FBQUEsUUFDTWEsU0FBU0YsV0FEZixDQURpQyxDQUVMOztBQUU1QixXQUFPRSxNQUFQO0FBQ0QsR0FMRDs7QUFPQVQsVUFBUVUsZUFBUixDQUF3QlAsUUFBeEI7QUFDRDs7QUFFRFEsT0FBT0MsT0FBUCxHQUFpQmxCLFlBQWpCIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHsgYm5mIH0gPSBCYXNpY1BhcnNlcixcbiAgICAgICAgICBjb250ZW50ID0gJzErMi8zJyxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgRXhhbXBsZS5ydW4oY29udGVudCwgbGV4aWNhbEVudHJpZXMsIGJuZiwgdXBkYXRlSGFuZGxlcik7XG5cbiAgICB1cGRhdGVIYW5kbGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBudWxsO1xuICBcbiAgRXhhbXBsZS51cGRhdGVMZXhlcihCYXNpY0xleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihibmYpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBiYXNpY1BhcnNlcjsgLy8nXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjsgXG4gIH0pO1xuICBcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcbiJdfQ==