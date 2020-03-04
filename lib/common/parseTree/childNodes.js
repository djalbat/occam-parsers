'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var necessary = require('necessary');

var VerticalBranchParseTree = require('./verticalBranch'),
    HorizontalBranchParseTree = require('./horizontalBranch');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlcyIsInRva2VucyIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJjaGlsZE5vZGVQYXJzZVRyZWVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJwdXNoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlIiwiZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidW5kZWZpbmVkIiwibGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgiLCJmb3JFYWNoIiwiaW5kZXgiLCJjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCIsImdldFdpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJsZWZ0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUiLCJjbG9uZSIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYWRkQm90dG9tTWFyZ2luIiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF6Qjs7QUFFQSxJQUFNQyx1QkFBdUIsR0FBR0QsT0FBTyxDQUFDLGtCQUFELENBQXZDO0FBQUEsSUFDTUUseUJBQXlCLEdBQUdGLE9BQU8sQ0FBQyxvQkFBRCxDQUR6Qzs7QUFHTSxJQUFFRyxjQUFGLEdBQXFCSixTQUFyQixDQUFFSSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZRCxjQURaLENBQ0VDLEtBREY7O0lBR0FDLG1COzs7Ozs7Ozs7Ozs0Q0FDMkJDLFUsRUFBWUMsTSxFQUFRO0FBQ2pELFVBQUlDLG1CQUFKO0FBRUEsVUFBTUMsbUJBQW1CLEdBQUdILFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQixVQUFTRCxtQkFBVCxFQUE4QkUsU0FBOUIsRUFBeUM7QUFDL0UsWUFBTUMsa0JBQWtCLEdBQUdELFNBQVMsQ0FBQ0UsV0FBVixDQUFzQk4sTUFBdEIsQ0FBM0I7QUFFQUUsUUFBQUEsbUJBQW1CLENBQUNLLElBQXBCLENBQXlCRixrQkFBekI7QUFFQSxlQUFPSCxtQkFBUDtBQUNELE9BTnFCLEVBTW5CLEVBTm1CLENBQTVCO0FBQUEsVUFPTU0seUJBQXlCLEdBQUdOLG1CQUFtQixDQUFDTyxNQVB0RDs7QUFTQSxVQUFJRCx5QkFBeUIsS0FBSyxDQUFsQyxFQUFxQztBQUNuQyxZQUFNRSx1QkFBdUIsR0FBR2IsS0FBSyxDQUFDSyxtQkFBRCxDQUFyQztBQUVBRCxRQUFBQSxtQkFBbUIsR0FBR1MsdUJBQXRCLENBSG1DLENBR2E7QUFDakQsT0FKRCxNQUlPO0FB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OUIsRUFBd0Q7QUFDdEQsZ0JBQU15QixpQkFBaUIsR0FBR3pCLHdCQUF3QixHQUFHSyx1QkFBckQ7QUFFQWtCLFlBQUFBLHdCQUF3QixDQUFDRyxlQUF6QixDQUF5Q0QsaUJBQXpDO0FBQ0Q7O0FBRUR2QyxVQUFBQSxtQkFBbUIsQ0FBQ3lDLGFBQXBCLENBQWtDSix3QkFBbEM7QUFDRCxTQWpCRDtBQW1CQXJDLFFBQUFBLG1CQUFtQixDQUFDMEMsV0FBcEIsQ0FBZ0NaLHlCQUFoQztBQUNBOUIsUUFBQUEsbUJBQW1CLENBQUMwQyxXQUFwQixDQUFnQ2QsdUJBQWhDO0FBQ0Q7O0FBRUQsYUFBTzVCLG1CQUFQO0FBQ0Q7Ozs7RUEzRitCUCx1Qjs7QUE4RmxDa0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0MsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyksXG4gICAgICBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi9ob3Jpem9udGFsQnJhbmNoJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBDaGlsZE5vZGVzUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNQYXJzZVRyZWU7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlcywgY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5wdXNoKGNoaWxkTm9kZVBhcnNlVHJlZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBmaXJzdChjaGlsZE5vZGVQYXJzZVRyZWVzKTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB1bmRlZmluZWQsXG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gMDtcblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgbGFzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IDE7XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgd2lkdGggPSBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArIDEsXG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKSxcbiAgICAgICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLmNsb25lKCk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zdCByaWdodE1hcmdpbldpZHRoID0gMTtcblxuICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCkge1xuICAgICAgICAgIGNvbnN0IGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AoaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZE5vZGVzUGFyc2VUcmVlO1xuIl19