'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

var ErrorNodeParseTree = function (_VerticalBranchParseT) {
  _inherits(ErrorNodeParseTree, _VerticalBranchParseT);

  function ErrorNodeParseTree() {
    _classCallCheck(this, ErrorNodeParseTree);

    return _possibleConstructorReturn(this, (ErrorNodeParseTree.__proto__ || Object.getPrototypeOf(ErrorNodeParseTree)).apply(this, arguments));
  }

  _createClass(ErrorNodeParseTree, null, [{
    key: 'fromErrorNode',
    value: function fromErrorNode(errorNode) {
      var content = errorNode.getContent(),
          message = errorNode.getMessage(),
          string = content + '[' + message + ']',
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          errorNodeParseTree = VerticalBranchParseTree.fromString(string, ErrorNodeParseTree, verticalBranchPosition);

      errorNodeParseTree.appendToTop(verticalBranchParseTree);

      return errorNodeParseTree;
    }
  }]);

  return ErrorNodeParseTree;
}(VerticalBranchParseTree);

module.exports = ErrorNodeParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL2Vycm9yTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInJlcXVpcmUiLCJFcnJvck5vZGVQYXJzZVRyZWUiLCJlcnJvck5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJlcnJvck5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwiYXBwZW5kVG9Ub3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLDBCQUEwQkMsUUFBUSw2QkFBUixDQUE5Qjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7O2tDQUNpQkMsUyxFQUFXO0FBQzlCLFVBQUlDLFVBQVVELFVBQVVFLFVBQVYsRUFBZDtBQUFBLFVBQ0lDLFVBQVVILFVBQVVJLFVBQVYsRUFEZDtBQUFBLFVBRUlDLFNBQVlKLE9BQVosU0FBdUJFLE9BQXZCLE1BRko7QUFBQSxVQUdJRyxlQUFlRCxPQUFPRSxNQUgxQjtBQUFBLFVBSUlDLCtCQUErQkYsWUFKbkM7QUFBQSxVQUlpRDtBQUM3Q0csZ0NBQTBCWix3QkFBd0JhLFNBQXhCLENBQWtDRiw0QkFBbEMsQ0FMOUI7QUFBQSxVQU1JRyx5QkFBeUJGLHdCQUF3QkcseUJBQXhCLEVBTjdCO0FBQUEsVUFPSUMscUJBQXFCaEIsd0JBQXdCaUIsVUFBeEIsQ0FBbUNULE1BQW5DLEVBQTJDTixrQkFBM0MsRUFBK0RZLHNCQUEvRCxDQVB6Qjs7QUFTQUUseUJBQW1CRSxXQUFuQixDQUErQk4sdUJBQS9COztBQUVBLGFBQU9JLGtCQUFQO0FBQ0Q7Ozs7RUFkOEJoQix1Qjs7QUFpQmpDbUIsT0FBT0MsT0FBUCxHQUFpQmxCLGtCQUFqQiIsImZpbGUiOiJlcnJvck5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBFcnJvck5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSkge1xuICAgIHZhciBjb250ZW50ID0gZXJyb3JOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbWVzc2FnZSA9IGVycm9yTm9kZS5nZXRNZXNzYWdlKCksXG4gICAgICAgIHN0cmluZyA9IGAke2NvbnRlbnR9WyR7bWVzc2FnZX1dYCxcbiAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgZXJyb3JOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIEVycm9yTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG4gICAgXG4gICAgZXJyb3JOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBlcnJvck5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck5vZGVQYXJzZVRyZWU7XG4iXX0=