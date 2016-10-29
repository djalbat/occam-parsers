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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvZXJyb3JOb2RlLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIkVycm9yTm9kZVBhcnNlVHJlZSIsImVycm9yTm9kZSIsInN0cmluZyIsImdldFN0cmluZyIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJlcnJvck5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwiYXBwZW5kVG9Ub3AiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLDBCQUEwQkMsUUFBUSw2QkFBUixDQUE5Qjs7SUFFTUMsa0I7Ozs7Ozs7Ozs7O3NDQUNpQkMsUyxFQUFXO0FBQzlCLGdCQUFJQyxTQUFTRCxVQUFVRSxTQUFWLEVBQWI7QUFBQSxnQkFDSUMsVUFBVUgsVUFBVUksVUFBVixFQURkOztBQUdBSCxxQkFBWUEsTUFBWixTQUFzQkUsT0FBdEIsT0FKOEIsQ0FJSTs7QUFFbEMsZ0JBQUlFLGVBQWVKLE9BQU9LLE1BQTFCO0FBQUEsZ0JBQ0lDLCtCQUErQkYsWUFEbkM7QUFBQSxnQkFDaUQ7QUFDN0NHLHNDQUEwQlgsd0JBQXdCWSxTQUF4QixDQUFrQ0YsNEJBQWxDLENBRjlCO0FBQUEsZ0JBR0lHLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFIN0I7QUFBQSxnQkFJSUMscUJBQXFCZix3QkFBd0JnQixVQUF4QixDQUFtQ1osTUFBbkMsRUFBMkNGLGtCQUEzQyxFQUErRFcsc0JBQS9ELENBSnpCOztBQU1BRSwrQkFBbUJFLFdBQW5CLENBQStCTix1QkFBL0I7O0FBRUEsbUJBQU9JLGtCQUFQO0FBQ0Q7Ozs7RUFoQjhCZix1Qjs7QUFtQmpDa0IsT0FBT0MsT0FBUCxHQUFpQmpCLGtCQUFqQiIsImZpbGUiOiJlcnJvck5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBFcnJvck5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSkge1xuICAgIHZhciBzdHJpbmcgPSBlcnJvck5vZGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvck5vZGUuZ2V0TWVzc2FnZSgpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfVske21lc3NhZ2V9XWA7IC8vL1xuXG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSwgXG4gICAgICAgIGVycm9yTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyaW5nLCBFcnJvck5vZGVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuICAgIFxuICAgIGVycm9yTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gZXJyb3JOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JOb2RlUGFyc2VUcmVlO1xuIl19