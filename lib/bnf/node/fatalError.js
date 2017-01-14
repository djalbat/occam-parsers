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
  }]);

  return FatalErrorNode;
}();

module.exports = FatalErrorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9mYXRhbEVycm9yLmpzIl0sIm5hbWVzIjpbIkZhdGFsRXJyb3JOb2RlUGFyc2VUcmVlIiwicmVxdWlyZSIsIkZhdGFsRXJyb3JOb2RlIiwibWVzc2FnZSIsImZhdGFsRXJyb3JOb2RlIiwiZmF0YWxFcnJvck5vZGVQYXJzZVRyZWUiLCJmcm9tRmF0YWxFcnJvck5vZGUiLCJwYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsMEJBQTBCQyxRQUFRLDZCQUFSLENBQTlCOztJQUVNQyxjO0FBQ0osMEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7aUNBRVk7QUFDWCxhQUFPLEtBQUtBLE9BQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsaUJBQWlCLElBQXJCO0FBQUEsVUFBNEI7QUFDeEJDLGdDQUEwQkwsd0JBQXdCTSxrQkFBeEIsQ0FBMkNGLGNBQTNDLENBRDlCO0FBQUEsVUFFSUcsWUFBWUYsdUJBRmhCLENBRGEsQ0FHNkI7O0FBRTFDLGFBQU9FLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJQLGNBQWpCIiwiZmlsZSI6ImZhdGFsRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBGYXRhbEVycm9yTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9mYXRhbEVycm9yTm9kZScpO1xuXG5jbGFzcyBGYXRhbEVycm9yTm9kZSB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgZ2V0TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBmYXRhbEVycm9yTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgZmF0YWxFcnJvck5vZGVQYXJzZVRyZWUgPSBGYXRhbEVycm9yTm9kZVBhcnNlVHJlZS5mcm9tRmF0YWxFcnJvck5vZGUoZmF0YWxFcnJvck5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSBmYXRhbEVycm9yTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhdGFsRXJyb3JOb2RlO1xuIl19