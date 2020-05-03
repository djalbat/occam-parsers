"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var necessary = require("necessary");

var VerticalBranchParseTree = require("./verticalBranch"),
    HorizontalBranchParseTree = require("./horizontalBranch");

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;

var ChildNodesParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(ChildNodesParseTree, _VerticalBranchParseT);

  function ChildNodesParseTree() {
    _classCallCheck(this, ChildNodesParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChildNodesParseTree).apply(this, arguments));
  }

  _createClass(ChildNodesParseTree, null, [{
    key: "fromChildNodesAndTokens",
    value: function fromChildNodesAndTokens(childNodes, tokens) {
      var childNodesParseTree;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlcyIsInRva2VucyIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJjaGlsZE5vZGVQYXJzZVRyZWVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJwdXNoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlIiwiZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidW5kZWZpbmVkIiwibGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgiLCJmb3JFYWNoIiwiaW5kZXgiLCJjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCIsImdldFdpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJsZWZ0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUiLCJjbG9uZSIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYWRkQm90dG9tTWFyZ2luIiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF6Qjs7QUFFQSxJQUFNQyx1QkFBdUIsR0FBR0QsT0FBTyxDQUFDLGtCQUFELENBQXZDO0FBQUEsSUFDTUUseUJBQXlCLEdBQUdGLE9BQU8sQ0FBQyxvQkFBRCxDQUR6Qzs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixTQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLG1COzs7Ozs7Ozs7Ozs0Q0FDMkJDLFUsRUFBWUMsTSxFQUFRO0FBQ2pELFVBQUlDLG1CQUFKO0FBRUEsVUFBTUMsbUJBQW1CLEdBQUdILFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQixVQUFTRCxtQkFBVCxFQUE4QkUsU0FBOUIsRUFBeUM7QUFDL0UsWUFBTUMsa0JBQWtCLEdBQUdELFNBQVMsQ0FBQ0UsV0FBVixDQUFzQk4sTUFBdEIsQ0FBM0I7QUFFQUUsUUFBQUEsbUJBQW1CLENBQUNLLElBQXBCLENBQXlCRixrQkFBekI7QUFFQSxlQUFPSCxtQkFBUDtBQUNELE9BTnFCLEVBTW5CLEVBTm1CLENBQTVCO0FBQUEsVUFPTU0seUJBQXlCLEdBQUdOLG1CQUFtQixDQUFDTyxNQVB0RDs7QUFTQSxVQUFJRCx5QkFBeUIsS0FBSyxDQUFsQyxFQUFxQztBQUNuQyxZQUFNRSx1QkFBdUIsR0FBR2IsS0FBSyxDQUFDSyxtQkFBRCxDQUFyQztBQUVBRCxRQUFBQSxtQkFBbUIsR0FBR1MsdUJBQXRCLENBSG1DLENBR2E7QUFDakQsT0FKRCxNQUlPO0FB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OUIsRUFBd0Q7QUFDdEQsZ0JBQU15QixpQkFBaUIsR0FBR3pCLHdCQUF3QixHQUFHSyx1QkFBckQ7QUFFQWtCLFlBQUFBLHdCQUF3QixDQUFDRyxlQUF6QixDQUF5Q0QsaUJBQXpDO0FBQ0Q7O0FBRUR2QyxVQUFBQSxtQkFBbUIsQ0FBQ3lDLGFBQXBCLENBQWtDSix3QkFBbEM7QUFDRCxTQWpCRDtBQW1CQXJDLFFBQUFBLG1CQUFtQixDQUFDMEMsV0FBcEIsQ0FBZ0NaLHlCQUFoQztBQUNBOUIsUUFBQUEsbUJBQW1CLENBQUMwQyxXQUFwQixDQUFnQ2QsdUJBQWhDO0FBQ0Q7O0FBRUQsYUFBTzVCLG1CQUFQO0FBQ0Q7Ozs7RUEzRitCUCx1Qjs7QUE4RmxDa0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0MsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoXCJuZWNlc3NhcnlcIik7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZShcIi4vdmVydGljYWxCcmFuY2hcIiksXG4gICAgICBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZShcIi4vaG9yaXpvbnRhbEJyYW5jaFwiKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENoaWxkTm9kZXNQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyhjaGlsZE5vZGVzLCB0b2tlbnMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BhcnNlVHJlZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLnB1c2goY2hpbGROb2RlUGFyc2VUcmVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zdCBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgICAgIGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gMTtcblxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3aWR0aCA9IGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICsgMSxcbiAgICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24sXG4gICAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIC0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGg7XG5cbiAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgICBjb25zdCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDaGlsZE5vZGVzUGFyc2VUcmVlLCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUuY2xvbmUoKTtcblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgY29uc3QgYm90dG9tTWFyZ2luRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggLSBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSk7XG4gICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkTm9kZXNQYXJzZVRyZWU7XG4iXX0=