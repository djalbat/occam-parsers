'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var VerticalBranchParseTree = require('./verticalBranch'),
    HorizontalBranchParseTree = require('./horizontalBranch');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var ChildNodesParseTree = function (_VerticalBranchParseT) {
  _inherits(ChildNodesParseTree, _VerticalBranchParseT);

  function ChildNodesParseTree() {
    _classCallCheck(this, ChildNodesParseTree);

    return _possibleConstructorReturn(this, (ChildNodesParseTree.__proto__ || Object.getPrototypeOf(ChildNodesParseTree)).apply(this, arguments));
  }

  _createClass(ChildNodesParseTree, null, [{
    key: 'fromChildNodesAndTokens',
    value: function fromChildNodesAndTokens(childNodes, tokens) {
      var childNodesParseTree = void 0;

      var childNodeParseTrees = childNodes.reduce(function (childNodeParseTrees, childNode) {
        var childNodeParseTree = childNode.asParseTree(tokens);

        childNodeParseTrees.push(childNodeParseTree);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL2NoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlcyIsInRva2VucyIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJjaGlsZE5vZGVQYXJzZVRyZWVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJwdXNoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlIiwiZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidW5kZWZpbmVkIiwibGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgiLCJmb3JFYWNoIiwiaW5kZXgiLCJjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCIsImdldFdpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJsZWZ0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUiLCJjbG9uZSIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYWRkQm90dG9tTWFyZ2luIiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsMEJBQTBCRCxRQUFRLGtCQUFSLENBQWhDO0FBQUEsSUFDTUUsNEJBQTRCRixRQUFRLG9CQUFSLENBRGxDOztBQUdNLElBQUVHLGNBQUYsR0FBcUJKLFNBQXJCLENBQUVJLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lELGNBRFosQ0FDRUMsS0FERjs7SUFHQUMsbUI7Ozs7Ozs7Ozs7OzRDQUMyQkMsVSxFQUFZQyxNLEVBQVE7QUFDakQsVUFBSUMsNEJBQUo7O0FBRUEsVUFBTUMsc0JBQXNCSCxXQUFXSSxNQUFYLENBQWtCLFVBQVNELG1CQUFULEVBQThCRSxTQUE5QixFQUF5QztBQUMvRSxZQUFNQyxxQkFBcUJELFVBQVVFLFdBQVYsQ0FBc0JOLE1BQXRCLENBQTNCOztBQUVBRSw0QkFBb0JLLElBQXBCLENBQXlCRixrQkFBekI7O0FBRUEsZUFBT0gsbUJBQVA7QUFDRCxPQU5xQixFQU1uQixFQU5tQixDQUE1QjtBQUFBLFVBT01NLDRCQUE0Qk4sb0JBQW9CTyxNQVB0RDs7QUFTQSxVQUFJRCw4QkFBOEIsQ0FBbEMsRUFBcUM7QUFDbkMsWUFBTUUsMEJBQTBCYixNQUFNSyxtQkFBTixDQUFoQzs7QUFFQUQsOEJBQXNCUyx1QkFBdEIsQ0FIbUMsQ0FHYTtBQUNqRCxPQUpELE1BSU87QUFDTCxZQUFJQyw4QkFBOEJDLFNBQWxDO0FBQUEsWUFDSUMsNkJBQTZCLENBRGpDO0FBQUEsWUFFSUMsMkJBQTJCLENBRi9CO0FBQUEsWUFHSUMsMkJBQTJCLENBSC9COztBQUtBYiw0QkFBb0JjLE9BQXBCLENBQTRCLFVBQVNYLGtCQUFULEVBQTZCWSxLQUE3QixFQUFvQztBQUM5RCxjQUFNQywwQkFBMEJiLG1CQUFtQmMsUUFBbkIsRUFBaEM7QUFBQSxjQUNNQywwQkFBMEJmLG1CQUFtQmdCLFFBQW5CLEVBRGhDOztBQUdBLGNBQUlKLFVBQVUsQ0FBZCxFQUFpQjtBQUNmLGdCQUFNUCwyQkFBMEJMLGtCQUFoQztBQUFBLGdCQUNNaUIsZ0RBQWdEWix5QkFBd0JhLHlCQUF4QixFQUR0RDs7QUFHQVosMENBQThCVyw2Q0FBOUI7QUFDRDs7QUFFRCxjQUFJTCxVQUFVVCw0QkFBNEIsQ0FBMUMsRUFBNkM7QUFDM0MsZ0JBQU1nQix5QkFBeUJuQixrQkFBL0I7QUFBQSxnQkFDTW9CLCtDQUErQ0QsdUJBQXVCRCx5QkFBdkIsRUFEckQ7O0FBR0FWLDBDQUE4QlksNENBQTlCO0FBQ0Q7O0FBRUQsY0FBSVIsUUFBUVQsNEJBQTRCLENBQXhDLEVBQTJDO0FBQ3pDSywwQ0FBOEJLLHVCQUE5QjtBQUNBTCwwQ0FBOEIsQ0FBOUI7O0FBRUFDLHdDQUE0QixDQUE1QjtBQUNEOztBQUVEQSxzQ0FBNEJJLHVCQUE1QjtBQUNBSCxxQ0FBMkJXLEtBQUtDLEdBQUwsQ0FBU1osd0JBQVQsRUFBbUNLLHVCQUFuQyxDQUEzQjtBQUNELFNBM0JEOztBQTZCQSxZQUFNUSxRQUFRZiw2QkFBNkJGLDJCQUE3QixHQUEyRCxDQUF6RTtBQUFBLFlBQ01rQiwwQkFBMEJuQyx3QkFBd0JvQyxTQUF4QixDQUFrQ0YsS0FBbEMsQ0FEaEM7QUFBQSxZQUVNRyw0QkFBNEJwQywwQkFBMEJtQyxTQUExQixDQUFvQ0YsS0FBcEMsQ0FGbEM7QUFBQSxZQUdNSSxrQkFBa0JyQiwyQkFIeEI7QUFBQSxZQUlNc0IsbUJBQW1CbkIsMkJBQTJCYyxLQUEzQixHQUFtQ0ksZUFKNUQ7O0FBTUFILGdDQUF3QkssYUFBeEIsQ0FBc0NGLGVBQXRDO0FBQ0FILGdDQUF3Qk0sY0FBeEIsQ0FBdUNGLGdCQUF2QztBQUNBRixrQ0FBMEJHLGFBQTFCLENBQXdDRixlQUF4QztBQUNBRCxrQ0FBMEJJLGNBQTFCLENBQXlDRixnQkFBekM7O0FBRUEsWUFBTUcseUJBQXlCUCx3QkFBd0JOLHlCQUF4QixFQUEvQjs7QUFFQXRCLDhCQUFzQlAsd0JBQXdCMkMsa0NBQXhCLENBQTJEdkMsbUJBQTNELEVBQWdGaUIsd0JBQWhGLEVBQTBHcUIsc0JBQTFHLENBQXRCOztBQUVBbEMsNEJBQW9CYyxPQUFwQixDQUE0QixVQUFTWCxrQkFBVCxFQUE2QlksS0FBN0IsRUFBb0M7QUFDOUQsY0FBTUcsMEJBQTBCZixtQkFBbUJnQixRQUFuQixFQUFoQztBQUFBLGNBQ01pQiwyQkFBMkJqQyxtQkFBbUJrQyxLQUFuQixFQURqQzs7QUFHQSxjQUFJdEIsUUFBUVQsNEJBQTRCLENBQXhDLEVBQTJDO0FBQ3pDLGdCQUFNeUIsb0JBQW1CLENBQXpCOztBQUVBSyxxQ0FBeUJILGNBQXpCLENBQXdDRixpQkFBeEM7QUFDRDs7QUFFRCxjQUFJYiwwQkFBMEJMLHdCQUE5QixFQUF3RDtBQUN0RCxnQkFBTXlCLG9CQUFvQnpCLDJCQUEyQkssdUJBQXJEOztBQUVBa0IscUNBQXlCRyxlQUF6QixDQUF5Q0QsaUJBQXpDO0FBQ0Q7O0FBRUR2Qyw4QkFBb0J5QyxhQUFwQixDQUFrQ0osd0JBQWxDO0FBQ0QsU0FqQkQ7O0FBbUJBckMsNEJBQW9CMEMsV0FBcEIsQ0FBZ0NaLHlCQUFoQztBQUNBOUIsNEJBQW9CMEMsV0FBcEIsQ0FBZ0NkLHVCQUFoQztBQUNEOztBQUVELGFBQU81QixtQkFBUDtBQUNEOzs7O0VBM0YrQlAsdUI7O0FBOEZsQ2tELE9BQU9DLE9BQVAsR0FBaUIvQyxtQkFBakIiLCJmaWxlIjoiY2hpbGROb2Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpLFxuICAgICAgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vaG9yaXpvbnRhbEJyYW5jaCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucykge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMucHVzaChjaGlsZE5vZGVQYXJzZVRyZWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlUGFyc2VUcmVlcztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gZmlyc3QoY2hpbGROb2RlUGFyc2VUcmVlcyk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdW5kZWZpbmVkLFxuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggPSAwLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICAgIGNvbnN0IHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENoaWxkTm9kZXNQYXJzZVRyZWUsIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGROb2Rlc1BhcnNlVHJlZTtcbiJdfQ==