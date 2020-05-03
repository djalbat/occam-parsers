"use strict";

var _ruleName = _interopRequireDefault(require("./ruleName"));

var _childNodes = _interopRequireDefault(require("./childNodes"));

var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));

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

var NonTerminalNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(NonTerminalNodeParseTree, _VerticalBranchParseT);

  function NonTerminalNodeParseTree() {
    _classCallCheck(this, NonTerminalNodeParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalNodeParseTree).apply(this, arguments));
  }

  _createClass(NonTerminalNodeParseTree, null, [{
    key: "fromNonTerminalNodeAndTokens",
    value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
      var childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = (0, _array.first)(childNodes),
          childNode = firstChildNode,
          childNodesLength = childNodes.length,
          childNodeOrNodesParseTree = childNodesLength === 1 ? childNode.asParseTree(tokens) : _childNodes["default"].fromChildNodesAndTokens(childNodes, tokens),
          ruleNameParseTree = _ruleName["default"].fromNonTerminalNodeAndTokens(nonTerminalNode, tokens);

      var ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
      var childNodeOrNodesParseTreeVerticalBranchPosition = childNodeOrNodesParseTree.getVerticalBranchPosition(),
          verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodeOrNodesParseTreeVerticalBranchPosition;
      var leftMarginWidth = undefined;

      if (false) {} else if (verticalBranchPositionsDifference < 0) {
        leftMarginWidth = -verticalBranchPositionsDifference;
        ruleNameParseTree.addLeftMargin(leftMarginWidth);
      } else if (verticalBranchPositionsDifference > 0) {
        leftMarginWidth = +verticalBranchPositionsDifference;
        childNodeOrNodesParseTree.addLeftMargin(leftMarginWidth);
      }

      var ruleNameParseTreeWidth = ruleNameParseTree.getWidth(),
          childNodeOrNodesParseTreeWidth = childNodeOrNodesParseTree.getWidth(),
          widthsDifference = ruleNameParseTreeWidth - childNodeOrNodesParseTreeWidth;
      var rightMarginWidth = undefined;

      if (false) {} else if (widthsDifference < 0) {
        rightMarginWidth = -widthsDifference;
        ruleNameParseTree.addRightMargin(rightMarginWidth);
      } else if (widthsDifference > 0) {
        rightMarginWidth = +widthsDifference;
        childNodeOrNodesParseTree.addRightMargin(rightMarginWidth);
      }

      ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

      var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(),
          nonTerminalNodeParseTreeDepth = ruleNameParseTreeDepth,
          ///
      verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition,
          ///
      nonTerminalNodeParseTree = _verticalBranch["default"].fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, nonTerminalNodeParseTreeDepth, verticalBranchPosition);

      nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
      nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);
      return nonTerminalNodeParseTree;
    }
  }]);

  return NonTerminalNodeParseTree;
}(_verticalBranch["default"]);

module.exports = NonTerminalNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiUnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIiwibGVmdE1hcmdpbldpZHRoIiwidW5kZWZpbmVkIiwiYWRkTGVmdE1hcmdpbiIsInJ1bGVOYW1lUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aCIsIndpZHRoc0RpZmZlcmVuY2UiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJydWxlTmFtZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWVEZXB0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Cb3R0b20iLCJt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LDBCOztBQThEdkNJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZDLHdCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU5hbWVQYXJzZVRyZWUgZnJvbSBcIi4vcnVsZU5hbWVcIjtcbmltcG9ydCBDaGlsZE5vZGVzUGFyc2VUcmVlIGZyb20gXCIuL2NoaWxkTm9kZXNcIjtcbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgY2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWxkTm9kZXNQYXJzZVRyZWUuZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFJ1bGVOYW1lUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICAgIFxuICAgIGxldCBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG4gICAgXG4gICAgY29uc3QgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICBcbiAgICBsZXQgbGVmdE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IC12ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB3aWR0aHNEaWZmZXJlbmNlID0gcnVsZU5hbWVQYXJzZVRyZWVXaWR0aCAtIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aDtcbiAgICBcbiAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IC13aWR0aHNEaWZmZXJlbmNlO1xuICAgICAgXG4gICAgICBydWxlTmFtZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gK3dpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgY29uc3QgcnVsZU5hbWVQYXJzZVRyZWVEZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZURlcHRoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQocnVsZU5hbWVQYXJzZVRyZWUpO1xuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbShjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4iXX0=