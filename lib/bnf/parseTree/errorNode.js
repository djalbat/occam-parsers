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
      var message = errorNode.getMessage(),
          string = 'ERROR:' + message,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL2Vycm9yTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInJlcXVpcmUiLCJFcnJvck5vZGVQYXJzZVRyZWUiLCJlcnJvck5vZGUiLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZXJyb3JOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSwwQkFBMEJDLFFBQVEsNkJBQVIsQ0FBOUI7O0lBRU1DLGtCOzs7Ozs7Ozs7OztrQ0FDaUJDLFMsRUFBVztBQUM5QixVQUFJQyxVQUFVRCxVQUFVRSxVQUFWLEVBQWQ7QUFBQSxVQUNJQyxvQkFBa0JGLE9BRHRCO0FBQUEsVUFFSUcsZUFBZUQsT0FBT0UsTUFGMUI7QUFBQSxVQUdJQywrQkFBK0JGLFlBSG5DO0FBQUEsVUFHaUQ7QUFDN0NHLGdDQUEwQlYsd0JBQXdCVyxTQUF4QixDQUFrQ0YsNEJBQWxDLENBSjlCO0FBQUEsVUFLSUcseUJBQXlCRix3QkFBd0JHLHlCQUF4QixFQUw3QjtBQUFBLFVBTUlDLHFCQUFxQmQsd0JBQXdCZSxVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNKLGtCQUEzQyxFQUErRFUsc0JBQS9ELENBTnpCOztBQVFBRSx5QkFBbUJFLFdBQW5CLENBQStCTix1QkFBL0I7O0FBRUEsYUFBT0ksa0JBQVA7QUFDRDs7OztFQWI4QmQsdUI7O0FBZ0JqQ2lCLE9BQU9DLE9BQVAsR0FBaUJoQixrQkFBakIiLCJmaWxlIjoiZXJyb3JOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgRXJyb3JOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUVycm9yTm9kZShlcnJvck5vZGUpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGVycm9yTm9kZS5nZXRNZXNzYWdlKCksXG4gICAgICAgIHN0cmluZyA9IGBFUlJPUjoke21lc3NhZ2V9YCxcbiAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgZXJyb3JOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIEVycm9yTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG4gICAgXG4gICAgZXJyb3JOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBlcnJvck5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck5vZGVQYXJzZVRyZWU7XG4iXX0=