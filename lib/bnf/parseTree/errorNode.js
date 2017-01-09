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
            var string = errorNode.getString(),
                message = errorNode.getMessage();

            string = string + '[' + message + ']'; ///

            var stringLength = string.length,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL2Vycm9yTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInJlcXVpcmUiLCJFcnJvck5vZGVQYXJzZVRyZWUiLCJlcnJvck5vZGUiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJtZXNzYWdlIiwiZ2V0TWVzc2FnZSIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZXJyb3JOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSwwQkFBMEJDLFFBQVEsNkJBQVIsQ0FBOUI7O0lBRU1DLGtCOzs7Ozs7Ozs7OztzQ0FDaUJDLFMsRUFBVztBQUM5QixnQkFBSUMsU0FBU0QsVUFBVUUsU0FBVixFQUFiO0FBQUEsZ0JBQ0lDLFVBQVVILFVBQVVJLFVBQVYsRUFEZDs7QUFHQUgscUJBQVlBLE1BQVosU0FBc0JFLE9BQXRCLE9BSjhCLENBSUk7O0FBRWxDLGdCQUFJRSxlQUFlSixPQUFPSyxNQUExQjtBQUFBLGdCQUNJQywrQkFBK0JGLFlBRG5DO0FBQUEsZ0JBQ2lEO0FBQzdDRyxzQ0FBMEJYLHdCQUF3QlksU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUY5QjtBQUFBLGdCQUdJRyx5QkFBeUJGLHdCQUF3QkcseUJBQXhCLEVBSDdCO0FBQUEsZ0JBSUlDLHFCQUFxQmYsd0JBQXdCZ0IsVUFBeEIsQ0FBbUNaLE1BQW5DLEVBQTJDRixrQkFBM0MsRUFBK0RXLHNCQUEvRCxDQUp6Qjs7QUFNQUUsK0JBQW1CRSxXQUFuQixDQUErQk4sdUJBQS9COztBQUVBLG1CQUFPSSxrQkFBUDtBQUNEOzs7O0VBaEI4QmYsdUI7O0FBbUJqQ2tCLE9BQU9DLE9BQVAsR0FBaUJqQixrQkFBakIiLCJmaWxlIjoiZXJyb3JOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgRXJyb3JOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUVycm9yTm9kZShlcnJvck5vZGUpIHtcbiAgICB2YXIgc3RyaW5nID0gZXJyb3JOb2RlLmdldFN0cmluZygpLFxuICAgICAgICBtZXNzYWdlID0gZXJyb3JOb2RlLmdldE1lc3NhZ2UoKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ31bJHttZXNzYWdlfV1gOyAvLy9cblxuICAgIHZhciBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICBlcnJvck5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgRXJyb3JOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcbiAgICBcbiAgICBlcnJvck5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIGVycm9yTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZVBhcnNlVHJlZTtcbiJdfQ==