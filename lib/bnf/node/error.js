'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorNodeParseTree = require('../parseTree/errorNode');

var ErrorNode = function () {
  function ErrorNode(content, message) {
    _classCallCheck(this, ErrorNode);

    this.content = content;
    this.message = message;
  }

  _createClass(ErrorNode, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getMessage',
    value: function getMessage() {
      return this.message;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var errorNode = this,
          ///
      errorNodeParseTree = ErrorNodeParseTree.fromErrorNode(errorNode),
          parseTree = errorNodeParseTree; ///

      return parseTree;
    }
  }]);

  return ErrorNode;
}();

module.exports = ErrorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvck5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJlcnJvck5vZGUiLCJlcnJvck5vZGVQYXJzZVRyZWUiLCJmcm9tRXJyb3JOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHFCQUFxQkMsUUFBUSx3QkFBUixDQUF6Qjs7SUFFTUMsUztBQUNKLHFCQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QjtBQUFBOztBQUM1QixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0QsT0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsWUFBWSxJQUFoQjtBQUFBLFVBQXVCO0FBQ25CQywyQkFBcUJOLG1CQUFtQk8sYUFBbkIsQ0FBaUNGLFNBQWpDLENBRHpCO0FBQUEsVUFFSUcsWUFBWUYsa0JBRmhCLENBRGEsQ0FHd0I7O0FBRXJDLGFBQU9FLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJSLFNBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXJyb3JOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL2Vycm9yTm9kZScpO1xuXG5jbGFzcyBFcnJvck5vZGUge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBtZXNzYWdlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBlcnJvck5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIGVycm9yTm9kZVBhcnNlVHJlZSA9IEVycm9yTm9kZVBhcnNlVHJlZS5mcm9tRXJyb3JOb2RlKGVycm9yTm9kZSksXG4gICAgICAgIHBhcnNlVHJlZSA9IGVycm9yTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZTtcbiJdfQ==