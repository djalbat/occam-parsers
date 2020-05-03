"use strict";

var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));

var _horizontalBranch = _interopRequireDefault(require("./horizontalBranch"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
        var firstChildNodeParseTree = (0, _array.first)(childNodeParseTrees);
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
            verticalBranchParseTree = _verticalBranch["default"].fromWidth(width),
            horizontalBranchParseTree = _horizontalBranch["default"].fromWidth(width),
            leftMarginWidth = firstVerticalBranchPosition,
            rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;

        verticalBranchParseTree.addLeftMargin(leftMarginWidth);
        verticalBranchParseTree.addRightMargin(rightMarginWidth);
        horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
        horizontalBranchParseTree.addRightMargin(rightMarginWidth);
        var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();
        childNodesParseTree = _verticalBranch["default"].fromDepthAndVerticalBranchPosition(ChildNodesParseTree, childNodeParseTreesDepth, verticalBranchPosition);
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
}(_verticalBranch["default"]);

module.exports = ChildNodesParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZXMiLCJ0b2tlbnMiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlUGFyc2VUcmVlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwicHVzaCIsImNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInVuZGVmaW5lZCIsImxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZSIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsIndpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibGVmdE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLG1COzs7Ozs7Ozs7Ozs0Q0FDMkJDLFUsRUFBWUMsTSxFQUFRO0FBQ2pELFVBQUlDLG1CQUFKO0FBRUEsVUFBTUMsbUJBQW1CLEdBQUdILFVBQVUsQ0FBQ0ksTUFBWCxDQUFrQixVQUFTRCxtQkFBVCxFQUE4QkUsU0FBOUIsRUFBeUM7QUFDL0UsWUFBTUMsa0JBQWtCLEdBQUdELFNBQVMsQ0FBQ0UsV0FBVixDQUFzQk4sTUFBdEIsQ0FBM0I7QUFFQUUsUUFBQUEsbUJBQW1CLENBQUNLLElBQXBCLENBQXlCRixrQkFBekI7QUFFQSxlQUFPSCxtQkFBUDtBQUNELE9BTnFCLEVBTW5CLEVBTm1CLENBQTVCO0FBQUEsVUFPTU0seUJBQXlCLEdBQUdOLG1CQUFtQixDQUFDTyxNQVB0RDs7QUFTQSxVQUFJRCx5QkFBeUIsS0FBSyxDQUFsQyxFQUFxQztBQUNuQyxZQUFNRSx1QkFBdUIsR0FBRyxrQkFBTVIsbUJBQU4sQ0FBaEM7QUFFQUQsUUFBQUEsbUJBQW1CLEdBQUdTLHVCQUF0QixDQUhtQyxDQUdhO0FBQ2pELE9BSkQsTUFJTztBQUNMLFlBQUlDLDJCQUEyQixHQUFHQyxTQUFsQztBQUFBLFlBQ0lDLDBCQUEwQixHQUFHLENBRGpDO0FBQUEsWUFFSUMsd0JBQXdCLEdBQUcsQ0FGL0I7QUFBQSxZQUdJQyx3QkFBd0IsR0FBRyxDQUgvQjtBQUtBYixRQUFBQSxtQkFBbUIsQ0FBQ2MsT0FBcEIsQ0FBNEIsVUFBU1gsa0JBQVQsRUFBNkJZLEtBQTdCLEVBQW9DO0FBQzlELGNBQU1DLHVCQUF1QixHQUFHYixrQkFBa0IsQ0FBQ2MsUUFBbkIsRUFBaEM7QUFBQSxjQUNNQyx1QkFB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Q0Q7O0FBRUQsYUFBTzVCLG1CQUFQO0FBQ0Q7Ozs7RUEzRitCNkIsMEI7O0FBOEZsQ2dCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpELG1CQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcbmltcG9ydCBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL2hvcml6b250YWxCcmFuY2hcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIENoaWxkTm9kZXNQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyhjaGlsZE5vZGVzLCB0b2tlbnMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BhcnNlVHJlZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLnB1c2goY2hpbGROb2RlUGFyc2VUcmVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zdCBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgICAgIGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gMTtcblxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3aWR0aCA9IGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICsgMSxcbiAgICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24sXG4gICAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIC0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGg7XG5cbiAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgICBjb25zdCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDaGlsZE5vZGVzUGFyc2VUcmVlLCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUuY2xvbmUoKTtcblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgY29uc3QgYm90dG9tTWFyZ2luRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggLSBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSk7XG4gICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkTm9kZXNQYXJzZVRyZWU7XG4iXX0=