'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FatalErrorNodeParseTree = require('../parseTree/fatalErrorNode');

var FatalErrorNode = function () {
  function FatalErrorNode(message) {
    _classCallCheck(this, FatalErrorNode);

    this.message = message;
  }

  _createClass(FatalErrorNode, [{
    key: 'getMessage',
    value: function getMessage() {
      return this.message;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var fatalErrorNode = this,
          ///
      fatalErrorNodeParseTree = FatalErrorNodeParseTree.fromFatalErrorNode(fatalErrorNode),
          parseTree = fatalErrorNodeParseTree; ///

      return parseTree;
    }
  }, {
    key: 'update',
    value: function update() {}
  }]);

  return FatalErrorNode;
}();

module.exports = FatalErrorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9mYXRhbEVycm9yLmpzIl0sIm5hbWVzIjpbIkZhdGFsRXJyb3JOb2RlUGFyc2VUcmVlIiwicmVxdWlyZSIsIkZhdGFsRXJyb3JOb2RlIiwibWVzc2FnZSIsImZhdGFsRXJyb3JOb2RlIiwiZmF0YWxFcnJvck5vZGVQYXJzZVRyZWUiLCJmcm9tRmF0YWxFcnJvck5vZGUiLCJwYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsMEJBQTBCQyxRQUFRLDZCQUFSLENBQTlCOztJQUVNQyxjO0FBQ0osMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtBLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsaUJBQWlCLElBQXJCO0FBQUEsVUFBNEI7QUFDeEJDLGdDQUEwQkwsd0JBQXdCTSxrQkFBeEIsQ0FBMkNGLGNBQTNDLENBRDlCO0FBQUEsVUFFSUcsWUFBWUYsdUJBRmhCLENBRGEsQ0FHNkI7O0FBRTFDLGFBQU9FLFNBQVA7QUFDRDs7OzZCQUVRLENBRVI7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUCxjQUFqQiIsImZpbGUiOiJmYXRhbEVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRmF0YWxFcnJvck5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvZmF0YWxFcnJvck5vZGUnKTtcblxuY2xhc3MgRmF0YWxFcnJvck5vZGUge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIGdldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgZmF0YWxFcnJvck5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIGZhdGFsRXJyb3JOb2RlUGFyc2VUcmVlID0gRmF0YWxFcnJvck5vZGVQYXJzZVRyZWUuZnJvbUZhdGFsRXJyb3JOb2RlKGZhdGFsRXJyb3JOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gZmF0YWxFcnJvck5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbiAgXG4gIHVwZGF0ZSgpIHtcbiAgICBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhdGFsRXJyb3JOb2RlO1xuIl19