'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var nodeUtilities = require('../../utilities/node'),
    VerticalBranchParseTree = require('./verticalBranch'),
    HorizontalBranchParseTree = require('./horizontalBranch');

var isNodeNullified = nodeUtilities.isNodeNullified,
    arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var ChildNodesParseTree = function (_VerticalBranchParseT) {
  _inherits(ChildNodesParseTree, _VerticalBranchParseT);

  function ChildNodesParseTree() {
    _classCallCheck(this, ChildNodesParseTree);

    return _possibleConstructorReturn(this, (ChildNodesParseTree.__proto__ || Object.getPrototypeOf(ChildNodesParseTree)).apply(this, arguments));
  }

  _createClass(ChildNodesParseTree, null, [{
    key: 'fromChildNodesAndTokens',
    value: function fromChildNodesAndTokens(childNodes, tokens, hideNullifiedNodes) {
      var childNodesParseTree = void 0;

      var childNodeParseTrees = childNodes.reduce(function (childNodeParseTrees, childNode) {
        var childNodeNullified = isNodeNullified(childNode);

        if (!childNodeNullified || !hideNullifiedNodes) {
          var childNodeParseTree = childNode.asParseTree(tokens, hideNullifiedNodes);

          childNodeParseTrees.push(childNodeParseTree);
        }

        return childNodeParseTrees;
      }, []),
          childNodeParseTreesLength = childNodeParseTrees.length;

      if (childNodeParseTreesLength === 1) {
        var firstChildNodeParseTree = first(childNodeParseTrees);

        childNodesParseTree = firstChildNodeParseTree; ///
      } else {
        var firstVerticalBranchPosition = undefined,
            lastVerticalBranchPosition = 0,
            childNodeParseTreesWidth = 0,
            childNodeParseTreesDepth = 0;

        childNodeParseTrees.forEach(function (childNodeParseTree, index) {
          var childNodeParseTreeWidth = childNodeParseTree.getWidth(),
              childNodeParseTreeDepth = childNodeParseTree.getDepth();

          if (index === 0) {
            var _firstChildNodeParseTree = childNodeParseTree,
                firstChildNodeParseTreeVerticalBranchPosition = _firstChildNodeParseTree.getVerticalBranchPosition();

            firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
          }

          if (index === childNodeParseTreesLength - 1) {
            var lastChildNodeParseTree = childNodeParseTree,
                lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();

            lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
          }

          if (index < childNodeParseTreesLength - 1) {
            lastVerticalBranchPosition += childNodeParseTreeWidth;
            lastVerticalBranchPosition += 1;

            childNodeParseTreesWidth += 1;
          }

          childNodeParseTreesWidth += childNodeParseTreeWidth;
          childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
        });

        var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1,
            verticalBranchParseTree = VerticalBranchParseTree.fromWidth(width),
            horizontalBranchParseTree = HorizontalBranchParseTree.fromWidth(width),
            leftMarginWidth = firstVerticalBranchPosition,
            rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;

        verticalBranchParseTree.addLeftMargin(leftMarginWidth);
        verticalBranchParseTree.addRightMargin(rightMarginWidth);
        horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
        horizontalBranchParseTree.addRightMargin(rightMarginWidth);

        var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();

        childNodesParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(ChildNodesParseTree, childNodeParseTreesDepth, verticalBranchPosition);

        childNodeParseTrees.forEach(function (childNodeParseTree, index) {
          var childNodeParseTreeDepth = childNodeParseTree.getDepth(),
              clonedChildNodeParseTree = childNodeParseTree.clone();

          if (index < childNodeParseTreesLength - 1) {
            var _rightMarginWidth = 1;

            clonedChildNodeParseTree.addRightMargin(_rightMarginWidth);
          }

          if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
            var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;

            clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
          }

          childNodesParseTree.appendToRight(clonedChildNodeParseTree);
        });

        childNodesParseTree.appendToTop(horizontalBranchParseTree);
        childNodesParseTree.appendToTop(verticalBranchParseTree);
      }

      return childNodesParseTree;
    }
  }]);

  return ChildNodesParseTree;
}(VerticalBranchParseTree);

module.exports = ChildNodesParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL2NoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIm5vZGVVdGlsaXRpZXMiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIkhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJpc05vZGVOdWxsaWZpZWQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZXMiLCJ0b2tlbnMiLCJoaWRlTnVsbGlmaWVkTm9kZXMiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlUGFyc2VUcmVlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU51bGxpZmllZCIsImNoaWxkTm9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwicHVzaCIsImNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInVuZGVmaW5lZCIsImxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZSIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsIndpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibGVmdE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLGdCQUFnQkQsUUFBUSxzQkFBUixDQUF0QjtBQUFBLElBQ01FLDBCQUEwQkYsUUFBUSxrQkFBUixDQURoQztBQUFBLElBRU1HLDRCQUE0QkgsUUFBUSxvQkFBUixDQUZsQzs7QUFJTSxJQUFFSSxlQUFGLEdBQXNCSCxhQUF0QixDQUFFRyxlQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQk4sU0FEckIsQ0FDRU0sY0FERjtBQUFBLElBRUVDLEtBRkYsR0FFWUQsY0FGWixDQUVFQyxLQUZGOztJQUlBQyxtQjs7Ozs7Ozs7Ozs7NENBQzJCQyxVLEVBQVlDLE0sRUFBUUMsa0IsRUFBb0I7QUFDckUsVUFBSUMsNEJBQUo7O0FBRUEsVUFBTUMsc0JBQXNCSixXQUFXSyxNQUFYLENBQWtCLFVBQVNELG1CQUFULEVBQThCRSxTQUE5QixFQUF5QztBQUMvRSxZQUFNQyxxQkFBcUJYLGdCQUFnQlUsU0FBaEIsQ0FBM0I7O0FBRUEsWUFBSSxDQUFDQyxrQkFBRCxJQUF1QixDQUFDTCxrQkFBNUIsRUFBZ0Q7QUFDOUMsY0FBTU0scUJBQXFCRixVQUFVRyxXQUFWLENBQXNCUixNQUF0QixFQUE4QkMsa0JBQTlCLENBQTNCOztBQUVBRSw4QkFBb0JNLElBQXBCLENBQXlCRixrQkFBekI7QUFDRDs7QUFF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QixDQUFnQ1oseUJBQWhDO0FBQ0EvQiw0QkFBb0IyQyxXQUFwQixDQUFnQ2QsdUJBQWhDO0FBQ0Q7O0FBRUQsYUFBTzdCLG1CQUFQO0FBQ0Q7Ozs7RUEvRitCVCx1Qjs7QUFrR2xDcUQsT0FBT0MsT0FBUCxHQUFpQmpELG1CQUFqQiIsImZpbGUiOiJjaGlsZE5vZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3Qgbm9kZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9ub2RlJyksXG4gICAgICBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKSxcbiAgICAgIEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2hvcml6b250YWxCcmFuY2gnKTtcblxuY29uc3QgeyBpc05vZGVOdWxsaWZpZWQgfSA9IG5vZGVVdGlsaXRpZXMsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2VucywgaGlkZU51bGxpZmllZE5vZGVzKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNQYXJzZVRyZWU7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlcywgY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOdWxsaWZpZWQgPSBpc05vZGVOdWxsaWZpZWQoY2hpbGROb2RlKTtcblxuICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGVOdWxsaWZpZWQgfHwgIWhpZGVOdWxsaWZpZWROb2Rlcykge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGUuYXNQYXJzZVRyZWUodG9rZW5zLCBoaWRlTnVsbGlmaWVkTm9kZXMpO1xuXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMucHVzaChjaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlUGFyc2VUcmVlcztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gZmlyc3QoY2hpbGROb2RlUGFyc2VUcmVlcyk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdW5kZWZpbmVkLFxuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggPSAwLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICAgIGNvbnN0IHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENoaWxkTm9kZXNQYXJzZVRyZWUsIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGROb2Rlc1BhcnNlVHJlZTtcbiJdfQ==