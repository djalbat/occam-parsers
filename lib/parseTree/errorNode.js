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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvZXJyb3JOb2RlLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIkVycm9yTm9kZVBhcnNlVHJlZSIsImVycm9yTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWVzc2FnZSIsImdldE1lc3NhZ2UiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImVycm9yTm9kZVBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsMEJBQTBCQyxRQUFRLDZCQUFSLENBQTlCOztJQUVNQyxrQjs7Ozs7Ozs7Ozs7a0NBQ2lCQyxTLEVBQVc7QUFDOUIsVUFBSUMsVUFBVUQsVUFBVUUsVUFBVixFQUFkO0FBQUEsVUFDSUMsVUFBVUgsVUFBVUksVUFBVixFQURkO0FBQUEsVUFFSUMsU0FBWUosT0FBWixTQUF1QkUsT0FBdkIsTUFGSjtBQUFBLFVBR0lHLGVBQWVELE9BQU9FLE1BSDFCO0FBQUEsVUFJSUMsK0JBQStCRixZQUpuQztBQUFBLFVBSWlEO0FBQzdDRyxnQ0FBMEJaLHdCQUF3QmEsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUw5QjtBQUFBLFVBTUlHLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFON0I7QUFBQSxVQU9JQyxxQkFBcUJoQix3QkFBd0JpQixVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNOLGtCQUEzQyxFQUErRFksc0JBQS9ELENBUHpCOztBQVNBRSx5QkFBbUJFLFdBQW5CLENBQStCTix1QkFBL0I7O0FBRUEsYUFBT0ksa0JBQVA7QUFDRDs7OztFQWQ4QmhCLHVCOztBQWlCakNtQixPQUFPQyxPQUFQLEdBQWlCbEIsa0JBQWpCIiwiZmlsZSI6ImVycm9yTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIEVycm9yTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21FcnJvck5vZGUoZXJyb3JOb2RlKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBlcnJvck5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBtZXNzYWdlID0gZXJyb3JOb2RlLmdldE1lc3NhZ2UoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7Y29udGVudH1bJHttZXNzYWdlfV1gLFxuICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICBlcnJvck5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgRXJyb3JOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcbiAgICBcbiAgICBlcnJvck5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIGVycm9yTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZVBhcnNlVHJlZTtcbiJdfQ==