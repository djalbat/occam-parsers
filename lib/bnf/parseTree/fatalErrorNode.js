'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

var FatalErrorNodeParseTree = function (_VerticalBranchParseT) {
  _inherits(FatalErrorNodeParseTree, _VerticalBranchParseT);

  function FatalErrorNodeParseTree() {
    _classCallCheck(this, FatalErrorNodeParseTree);

    return _possibleConstructorReturn(this, (FatalErrorNodeParseTree.__proto__ || Object.getPrototypeOf(FatalErrorNodeParseTree)).apply(this, arguments));
  }

  _createClass(FatalErrorNodeParseTree, null, [{
    key: 'fromFatalErrorNode',
    value: function fromFatalErrorNode(fatalErrorNode) {
      var message = fatalErrorNode.getMessage(),
          string = 'ERROR:' + message,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          errorNodeParseTree = VerticalBranchParseTree.fromString(string, FatalErrorNodeParseTree, verticalBranchPosition);

      errorNodeParseTree.appendToTop(verticalBranchParseTree);

      return errorNodeParseTree;
    }
  }]);

  return FatalErrorNodeParseTree;
}(VerticalBranchParseTree);

module.exports = FatalErrorNodeParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL2ZhdGFsRXJyb3JOb2RlLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIkZhdGFsRXJyb3JOb2RlUGFyc2VUcmVlIiwiZmF0YWxFcnJvck5vZGUiLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZXJyb3JOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSwwQkFBMEJDLFFBQVEsNkJBQVIsQ0FBOUI7O0lBRU1DLHVCOzs7Ozs7Ozs7Ozt1Q0FDc0JDLGMsRUFBZ0I7QUFDeEMsVUFBSUMsVUFBVUQsZUFBZUUsVUFBZixFQUFkO0FBQUEsVUFDSUMsb0JBQWtCRixPQUR0QjtBQUFBLFVBRUlHLGVBQWVELE9BQU9FLE1BRjFCO0FBQUEsVUFHSUMsK0JBQStCRixZQUhuQztBQUFBLFVBR2lEO0FBQzdDRyxnQ0FBMEJWLHdCQUF3QlcsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUo5QjtBQUFBLFVBS0lHLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFMN0I7QUFBQSxVQU1JQyxxQkFBcUJkLHdCQUF3QmUsVUFBeEIsQ0FBbUNULE1BQW5DLEVBQTJDSix1QkFBM0MsRUFBb0VVLHNCQUFwRSxDQU56Qjs7QUFRQUUseUJBQW1CRSxXQUFuQixDQUErQk4sdUJBQS9COztBQUVBLGFBQU9JLGtCQUFQO0FBQ0Q7Ozs7RUFibUNkLHVCOztBQWdCdENpQixPQUFPQyxPQUFQLEdBQWlCaEIsdUJBQWpCIiwiZmlsZSI6ImZhdGFsRXJyb3JOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgRmF0YWxFcnJvck5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRmF0YWxFcnJvck5vZGUoZmF0YWxFcnJvck5vZGUpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGZhdGFsRXJyb3JOb2RlLmdldE1lc3NhZ2UoKSxcbiAgICAgICAgc3RyaW5nID0gYEVSUk9SOiR7bWVzc2FnZX1gLFxuICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICBlcnJvck5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgRmF0YWxFcnJvck5vZGVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuICAgIFxuICAgIGVycm9yTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gZXJyb3JOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmF0YWxFcnJvck5vZGVQYXJzZVRyZWU7XG4iXX0=