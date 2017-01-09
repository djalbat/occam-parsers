'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorNodeParseTree = require('../parseTree/errorNode');

var ErrorNode = function () {
  function ErrorNode(string, message) {
    _classCallCheck(this, ErrorNode);

    this.string = string;
    this.message = message;
  }

  _createClass(ErrorNode, [{
    key: 'getString',
    value: function getString() {
      return this.string;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvck5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwic3RyaW5nIiwibWVzc2FnZSIsImVycm9yTm9kZSIsImVycm9yTm9kZVBhcnNlVHJlZSIsImZyb21FcnJvck5vZGUiLCJwYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEscUJBQXFCQyxRQUFRLHdCQUFSLENBQXpCOztJQUVNQyxTO0FBQ0oscUJBQVlDLE1BQVosRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O2dDQUdXO0FBQ1YsYUFBTyxLQUFLRCxNQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFJQyxZQUFZLElBQWhCO0FBQUEsVUFBdUI7QUFDbkJDLDJCQUFxQk4sbUJBQW1CTyxhQUFuQixDQUFpQ0YsU0FBakMsQ0FEekI7QUFBQSxVQUVJRyxZQUFZRixrQkFGaEIsQ0FEYSxDQUd3Qjs7QUFFckMsYUFBT0UsU0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlIsU0FBakIiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBFcnJvck5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvZXJyb3JOb2RlJyk7XG5cbmNsYXNzIEVycm9yTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbWVzc2FnZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cblxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIGVycm9yTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgZXJyb3JOb2RlUGFyc2VUcmVlID0gRXJyb3JOb2RlUGFyc2VUcmVlLmZyb21FcnJvck5vZGUoZXJyb3JOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gZXJyb3JOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JOb2RlO1xuIl19