"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ruleName = _interopRequireDefault(require("./ruleName"));

var _childNodes = _interopRequireDefault(require("./childNodes"));

var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));

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

var NonTerminalNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(NonTerminalNodeParseTree, _VerticalBranchParseT);

  var _super = _createSuper(NonTerminalNodeParseTree);

  function NonTerminalNodeParseTree() {
    _classCallCheck(this, NonTerminalNodeParseTree);

    return _super.apply(this, arguments);
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

exports["default"] = NonTerminalNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vblRlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiUnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIiwibGVmdE1hcmdpbldpZHRoIiwidW5kZWZpbmVkIiwiYWRkTGVmdE1hcmdpbiIsInJ1bGVOYW1lUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aCIsIndpZHRoc0RpZmZlcmVuY2UiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJydWxlTmFtZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWVEZXB0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Cb3R0b20iXSwi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b3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVOYW1lUGFyc2VUcmVlIGZyb20gXCIuL3J1bGVOYW1lXCI7XG5pbXBvcnQgQ2hpbGROb2Rlc1BhcnNlVHJlZSBmcm9tIFwiLi9jaGlsZE5vZGVzXCI7XG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlsZE5vZGVzUGFyc2VUcmVlLmZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2VucyksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBSdWxlTmFtZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgICBcbiAgICBsZXQgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuICAgIFxuICAgIGNvbnN0IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlID0gcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgXG4gICAgbGV0IGxlZnRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPCAwKSB7XG4gICAgICBsZWZ0TWFyZ2luV2lkdGggPSAtdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlO1xuXG4gICAgICBydWxlTmFtZVBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICBsZWZ0TWFyZ2luV2lkdGggPSArdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlO1xuXG4gICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZVBhcnNlVHJlZVdpZHRoID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgd2lkdGhzRGlmZmVyZW5jZSA9IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggLSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlV2lkdGg7XG4gICAgXG4gICAgbGV0IHJpZ2h0TWFyZ2luV2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAod2lkdGhzRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSAtd2lkdGhzRGlmZmVyZW5jZTtcbiAgICAgIFxuICAgICAgcnVsZU5hbWVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlID4gMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9ICt3aWR0aHNEaWZmZXJlbmNlO1xuXG4gICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZURlcHRoID0gcnVsZU5hbWVQYXJzZVRyZWVEZXB0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUsIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZURlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KHJ1bGVOYW1lUGFyc2VUcmVlKTtcbiAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Cb3R0b20oY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG4iXX0=