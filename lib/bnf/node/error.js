'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorNodeParseTree = require('../parseTree/errorNode');

var ErrorNode = function () {
  function ErrorNode(message) {
    _classCallCheck(this, ErrorNode);

    this.message = message;
  }

  _createClass(ErrorNode, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvck5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwibWVzc2FnZSIsImVycm9yTm9kZSIsImVycm9yTm9kZVBhcnNlVHJlZSIsImZyb21FcnJvck5vZGUiLCJwYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEscUJBQXFCQyxRQUFRLHdCQUFSLENBQXpCOztJQUVNQyxTO0FBQ0oscUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtBLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsWUFBWSxJQUFoQjtBQUFBLFVBQXVCO0FBQ25CQywyQkFBcUJMLG1CQUFtQk0sYUFBbkIsQ0FBaUNGLFNBQWpDLENBRHpCO0FBQUEsVUFFSUcsWUFBWUYsa0JBRmhCLENBRGEsQ0FHd0I7O0FBRXJDLGFBQU9FLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJQLFNBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXJyb3JOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL2Vycm9yTm9kZScpO1xuXG5jbGFzcyBFcnJvck5vZGUge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIGdldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgZXJyb3JOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICBlcnJvck5vZGVQYXJzZVRyZWUgPSBFcnJvck5vZGVQYXJzZVRyZWUuZnJvbUVycm9yTm9kZShlcnJvck5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSBlcnJvck5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck5vZGU7XG4iXX0=