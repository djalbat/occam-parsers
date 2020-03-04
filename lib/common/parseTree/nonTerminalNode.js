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

var arrayUtilities = require('../../utilities/array'),
    RuleNameParseTree = require('./ruleName'),
    ChildNodesParseTree = require('./childNodes'),
    VerticalBranchParseTree = require('./verticalBranch');

var first = arrayUtilities.first;

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
          firstChildNode = first(childNodes),
          childNode = firstChildNode,
          childNodesLength = childNodes.length,
          childNodeOrNodesParseTree = childNodesLength === 1 ? childNode.asParseTree(tokens) : ChildNodesParseTree.fromChildNodesAndTokens(childNodes, tokens),
          ruleNameParseTree = RuleNameParseTree.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
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
      nonTerminalNodeParseTree = VerticalBranchParseTree.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, nonTerminalNodeParseTreeDepth, verticalBranchPosition);
      nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
      nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);
      return nonTerminalNodeParseTree;
    }
  }]);

  return NonTerminalNodeParseTree;
}(VerticalBranchParseTree);

module.exports = NonTerminalNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJSdWxlTmFtZVBhcnNlVHJlZSIsIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZpcnN0IiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSIsImxlZnRNYXJnaW5XaWR0aCIsInVuZGVmaW5lZCIsImFkZExlZnRNYXJnaW4iLCJydWxlTmFtZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlV2lkdGgiLCJ3aWR0aHNEaWZmZXJlbmNlIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZFJpZ2h0TWFyZ2luIiwicnVsZU5hbWVQYXJzZVRyZWVEZXB0aCIsImdldERlcHRoIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIs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QSxVQUV3RTtBQUNsRWlCLE1BQUFBLHdCQUF3QixHQUFHakMsdUJBQXVCLENBQUNrQyxrQ0FBeEIsQ0FBMkRoQyx3QkFBM0QsRUFBcUY2Qiw2QkFBckYsRUFBb0hDLHNCQUFwSCxDQUhqQztBQUtBQyxNQUFBQSx3QkFBd0IsQ0FBQ0UsYUFBekIsQ0FBdUNyQixpQkFBdkM7QUFDQW1CLE1BQUFBLHdCQUF3QixDQUFDRyxjQUF6QixDQUF3Q3pCLHlCQUF4QztBQUVBLGFBQU9zQix3QkFBUDtBQUNEOzs7O0VBM0RvQ2pDLHVCOztBQThEdkNxQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJwQyx3QkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBSdWxlTmFtZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vcnVsZU5hbWUnKSxcbiAgICAgIENoaWxkTm9kZXNQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2NoaWxkTm9kZXMnKSxcbiAgICAgIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgY2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWxkTm9kZXNQYXJzZVRyZWUuZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFJ1bGVOYW1lUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICAgIFxuICAgIGxldCBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG4gICAgXG4gICAgY29uc3QgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICBcbiAgICBsZXQgbGVmdE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IC12ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB3aWR0aHNEaWZmZXJlbmNlID0gcnVsZU5hbWVQYXJzZVRyZWVXaWR0aCAtIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aDtcbiAgICBcbiAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IC13aWR0aHNEaWZmZXJlbmNlO1xuICAgICAgXG4gICAgICBydWxlTmFtZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gK3dpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgY29uc3QgcnVsZU5hbWVQYXJzZVRyZWVEZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZURlcHRoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQocnVsZU5hbWVQYXJzZVRyZWUpO1xuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbShjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4iXX0=