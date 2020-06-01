"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));

var _horizontalBranch = _interopRequireDefault(require("./horizontalBranch"));

var _array = require("../../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ChildNodesParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(ChildNodesParseTree, _VerticalBranchParseT);

  var _super = _createSuper(ChildNodesParseTree);

  function ChildNodesParseTree() {
    _classCallCheck(this, ChildNodesParseTree);

    return _super.apply(this, arguments);
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

exports["default"] = ChildNodesParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZXMiLCJ0b2tlbnMiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlUGFyc2VUcmVlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwicHVzaCIsImNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInVuZGVmaW5lZCIsImxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZSIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsIndpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibGVmdE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7OzRDQUNZQyxVLEVBQVlDLE0sRUFBUTtBQUNqRCxVQUFJQyxtQkFBSjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHSCxVQUFVLENBQUNJLE1BQVgsQ0FBa0IsVUFBQ0QsbUJBQUQsRUFBc0JFLFNBQXRCLEVBQW9DO0FBQzFFLFlBQU1DLGtCQUFrQixHQUFHRCxTQUFTLENBQUNFLFdBQVYsQ0FBc0JOLE1BQXRCLENBQTNCO0FBRUFFLFFBQUFBLG1CQUFtQixDQUFDSyxJQUFwQixDQUF5QkYsa0JBQXpCO0FBRUEsZUFBT0gsbUJBQVA7QUFDRCxPQU5xQixFQU1uQixFQU5tQixDQUE1QjtBQUFBLFVBT01NLHlCQUF5QixHQUFHTixtQkFBbUIsQ0FBQ08sTUFQdEQ7O0FBU0EsVUFBSUQseUJBQXlCLEtBQUssQ0FBbEMsRUFBcUM7QUFDbkMsWUFBTUUsdUJBQXVCLEdBQUcsa0JBQU1SLG1CQUFOLENBQWhDO0FBRUFELFFBQUFBLG1CQUFtQixHQUFHUyx1QkFBdEIsQ0FIbUMsQ0FHYTtBQUNqRCxPQUpELE1BSU87QUFDTCxZQUFJQywyQkFBMkIsR0FBR0MsU0FBbEM7QUFBQSxZQUNJQywwQkFBMEIsR0FBRyxDQURqQztBQUFBLFlBRUlDLHdCQUF3QixHQUFHLENBRi9CO0FBQUEsWUFHSUMsd0JBQXdCLEdBQUcsQ0FIL0I7QUFLQWIsUUFBQUEsbUJBQW1CLENBQUNjLE9BQXBCLENBQTRCLFVBQUNYLGtCQUFELEVBQXFCWSxLQUFyQixFQUErQjtBQUN6RCxjQUFNQyx1QkFBdUIsR0FBR2Isa0JBQWtCLENBQUNjLFFBQW5CLEVBQWhDO0FBQUEsY0FDTUMsdUJBQXVCLEdBQUdm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LGFBQU81QixtQkFBUDtBQUNEOzs7O0VBM0Y4QzZCLDBCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucykge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLnB1c2goY2hpbGROb2RlUGFyc2VUcmVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgbGFzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IDE7XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgd2lkdGggPSBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArIDEsXG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG4iXX0=