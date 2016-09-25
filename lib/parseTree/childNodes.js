'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree'),
    EmptyParseTree = require('../parseTree/empty');

var ChildNodesParseTree = function (_ParseTree) {
  _inherits(ChildNodesParseTree, _ParseTree);

  function ChildNodesParseTree() {
    _classCallCheck(this, ChildNodesParseTree);

    return _possibleConstructorReturn(this, (ChildNodesParseTree.__proto__ || Object.getPrototypeOf(ChildNodesParseTree)).apply(this, arguments));
  }

  _createClass(ChildNodesParseTree, null, [{
    key: 'fromChildNodes',
    value: function fromChildNodes(childNodes) {
      var childNodesParseTree = childNodes.map(function (childNode) {
        var childNodeParseTree = childNode.getParseTree();

        return childNodeParseTree;
      }),
          childNodesParseTreeLength = childNodesParseTree.length,
          childNodesParseTreeDepth = childNodesParseTree.reduce(function (childNodesParseTreeDepth, childNodeParseTree) {
        var childNodeParseTreeDepth = childNodeParseTree.getDepth();

        childNodesParseTreeDepth = Math.max(childNodesParseTreeDepth, childNodeParseTreeDepth);

        return childNodesParseTreeDepth;
      }, 0),
          emptyParseTree = EmptyParseTree.fromDepth(childNodesParseTreeDepth),
          parseTree = emptyParseTree; ///

      childNodesParseTree.forEach(function (childNodeParseTree, index) {
        var childNodeParseTreeDepth = childNodeParseTree.getDepth(),
            clonedChildParseTree = childNodeParseTree.clone(),
            lastChildParseTree = index === childNodesParseTreeLength - 1;

        if (!lastChildParseTree) {
          var rightMarginWidth = 1;

          clonedChildParseTree.addRightMargin(rightMarginWidth);
        }

        if (childNodeParseTreeDepth < childNodesParseTreeDepth) {
          var bottomMarginDepth = childNodesParseTreeDepth - childNodeParseTreeDepth;

          clonedChildParseTree.addBottomMargin(bottomMarginDepth);
        }

        parseTree.appendToRight(clonedChildParseTree);
      });

      return parseTree;
    }
  }]);

  return ChildNodesParseTree;
}(ParseTree);

module.exports = ChildNodesParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWUiLCJyZXF1aXJlIiwiRW1wdHlQYXJzZVRyZWUiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlcyIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJtYXAiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJjaGlsZE5vZGVzUGFyc2VUcmVlTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2Rlc1BhcnNlVHJlZURlcHRoIiwicmVkdWNlIiwiY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsIk1hdGgiLCJtYXgiLCJlbXB0eVBhcnNlVHJlZSIsImZyb21EZXB0aCIsInBhcnNlVHJlZSIsImZvckVhY2giLCJpbmRleCIsImNsb25lZENoaWxkUGFyc2VUcmVlIiwiY2xvbmUiLCJsYXN0Q2hpbGRQYXJzZVRyZWUiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjtBQUFBLElBQ0lDLGlCQUFpQkQsUUFBUSxvQkFBUixDQURyQjs7SUFHTUUsbUI7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQ2hDLFVBQUlDLHNCQUFzQkQsV0FBV0UsR0FBWCxDQUFlLFVBQVNDLFNBQVQsRUFBb0I7QUFDdkQsWUFBSUMscUJBQXFCRCxVQUFVRSxZQUFWLEVBQXpCOztBQUVBLGVBQU9ELGtCQUFQO0FBQ0QsT0FKcUIsQ0FBMUI7QUFBQSxVQUtJRSw0QkFBNEJMLG9CQUFvQk0sTUFMcEQ7QUFBQSxVQU1JQywyQkFBMkJQLG9CQUFvQlEsTUFBcEIsQ0FBMkIsVUFBU0Qsd0JBQVQsRUFBbUNKLGtCQUFuQyxFQUF1RDtBQUMzRyxZQUFJTSwwQkFBMEJOLG1CQUFtQk8sUUFBbkIsRUFBOUI7O0FBRUFILG1DQUEyQkksS0FBS0MsR0FBTCxDQUFTTCx3QkFBVCxFQUFtQ0UsdUJBQW5DLENBQTNCOztBQUVBLGVBQU9GLHdCQUFQO0FBQ0QsT0FOMEIsRUFNeEIsQ0FOd0IsQ0FOL0I7QUFBQSxVQWFJTSxpQkFBaUJoQixlQUFlaUIsU0FBZixDQUF5QlAsd0JBQXpCLENBYnJCO0FBQUEsVUFjSVEsWUFBWUYsY0FkaEIsQ0FEZ0MsQ0FlQTs7QUFFaENiLDBCQUFvQmdCLE9BQXBCLENBQTRCLFVBQVNiLGtCQUFULEVBQTZCYyxLQUE3QixFQUFvQztBQUM5RCxZQUFJUiwwQkFBMEJOLG1CQUFtQk8sUUFBbkIsRUFBOUI7QUFBQSxZQUNJUSx1QkFBdUJmLG1CQUFtQmdCLEtBQW5CLEVBRDNCO0FBQUEsWUFFSUMscUJBQXNCSCxVQUFVWiw0QkFBNEIsQ0FGaEU7O0FBSUEsWUFBSSxDQUFDZSxrQkFBTCxFQUF5QjtBQUN2QixjQUFJQyxtQkFBbUIsQ0FBdkI7O0FBRUFILCtCQUFxQkksY0FBckIsQ0FBb0NELGdCQUFwQztBQUNEOztBQUVELFlBQUlaLDBCQUEwQkYsd0JBQTlCLEVBQXdEO0FBQ3RELGNBQUlnQixvQkFBb0JoQiwyQkFBMkJFLHVCQUFuRDs7QUFFQVMsK0JBQXFCTSxlQUFyQixDQUFxQ0QsaUJBQXJDO0FBQ0Q7O0FBRURSLGtCQUFVVSxhQUFWLENBQXdCUCxvQkFBeEI7QUFDRCxPQWxCRDs7QUFvQkEsYUFBT0gsU0FBUDtBQUNEOzs7O0VBdkMrQnBCLFM7O0FBMENsQytCLE9BQU9DLE9BQVAsR0FBaUI3QixtQkFBakIiLCJmaWxlIjoiY2hpbGROb2Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpLFxuICAgIEVtcHR5UGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL2VtcHR5Jyk7XG5cbmNsYXNzIENoaWxkTm9kZXNQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHZhciBjaGlsZE5vZGVzUGFyc2VUcmVlID0gY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWU7XG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlTGVuZ3RoID0gY2hpbGROb2Rlc1BhcnNlVHJlZS5sZW5ndGgsXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZXNQYXJzZVRyZWUucmVkdWNlKGZ1bmN0aW9uKGNoaWxkTm9kZXNQYXJzZVRyZWVEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVzUGFyc2VUcmVlRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlRGVwdGg7XG4gICAgICAgIH0sIDApLFxuICAgICAgICBlbXB0eVBhcnNlVHJlZSA9IEVtcHR5UGFyc2VUcmVlLmZyb21EZXB0aChjaGlsZE5vZGVzUGFyc2VUcmVlRGVwdGgpLFxuICAgICAgICBwYXJzZVRyZWUgPSBlbXB0eVBhcnNlVHJlZTsgLy8vXG5cbiAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgdmFyIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgY2xvbmVkQ2hpbGRQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUuY2xvbmUoKSxcbiAgICAgICAgICBsYXN0Q2hpbGRQYXJzZVRyZWUgPSAoaW5kZXggPT09IGNoaWxkTm9kZXNQYXJzZVRyZWVMZW5ndGggLSAxKTtcblxuICAgICAgaWYgKCFsYXN0Q2hpbGRQYXJzZVRyZWUpIHtcbiAgICAgICAgdmFyIHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgIGNsb25lZENoaWxkUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVzUGFyc2VUcmVlRGVwdGgpIHtcbiAgICAgICAgdmFyIGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2Rlc1BhcnNlVHJlZURlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgY2xvbmVkQ2hpbGRQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGRQYXJzZVRyZWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkTm9kZXNQYXJzZVRyZWU7XG4iXX0=