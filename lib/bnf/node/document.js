"use strict";

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _ruleNames = require("../ruleNames");

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

var DocumentNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DocumentNode, _NonTerminalNode);

  function DocumentNode() {
    _classCallCheck(this, DocumentNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocumentNode).apply(this, arguments));
  }

  _createClass(DocumentNode, [{
    key: "generateRules",
    value: function generateRules(Rule) {
      var childNodes = this.getChildNodes(),
          ruleNodes = childNodes.reduce(function (ruleNodes, childNode) {
        var childNodeNonTerminalNode = childNode.isNonTerminalNode();

        if (childNodeNonTerminalNode) {
          var nonTerminalNode = childNode,
              ///
          ruleName = childNode.getRuleName(),
              ruleNameRuleRuleName = ruleName === _ruleNames.RuleRuleName,
              nonTerminalNodeRuleNode = ruleNameRuleRuleName; ///

          if (nonTerminalNodeRuleNode) {
            var ruleNode = nonTerminalNode; ///

            ruleNodes.push(ruleNode);
          }
        }

        return ruleNodes;
      }, []),
          rules = ruleNodes.map(function (ruleNode) {
        var rule = ruleNode.generateRule(Rule);
        return rule;
      });
      return rules;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(DocumentNode, ruleName, childNodes);
    }
  }]);

  return DocumentNode;
}(_nonTerminal["default"]);

module.exports = DocumentNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50Tm9kZSIsIlJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOb2RlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lUnVsZVJ1bGVOYW1lIiwiUnVsZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5vZGUiLCJydWxlTm9kZSIsInB1c2giLCJydWxlcyIsIm1hcCIsInJ1bGUiLCJnZW5lcmF0ZVJ1bGUiLCJOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7a0NBQ1VDLEksRUFBTTtBQUNsQixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxNQUFYLENBQWtCLFVBQVNELFNBQVQsRUFBb0JFLFNBQXBCLEVBQStCO0FBQzNELFlBQU1DLHdCQUF3QixHQUFHRCxTQUFTLENBQUNFLGlCQUFWLEVBQWpDOztBQUVBLFlBQUlELHdCQUFKLEVBQThCO0FBQzVCLGNBQU1FLGVBQWUsR0FBR0gsU0FBeEI7QUFBQSxjQUFvQztBQUM5QkksVUFBQUEsUUFBUSxHQUFHSixTQUFTLENBQUNLLFdBQVYsRUFEakI7QUFBQSxjQUVNQyxvQkFBb0IsR0FBSUYsUUFBUSxLQUFLRyx1QkFGM0M7QUFBQSxjQUdNQyx1QkFBdUIsR0FBR0Ysb0JBSGhDLENBRDRCLENBSTJCOztBQUV2RCxjQUFJRSx1QkFBSixFQUE2QjtBQUMzQixnQkFBTUMsUUFBUSxHQUFHTixlQUFqQixDQUQyQixDQUNPOztBQUVsQ0wsWUFBQUEsU0FBUyxDQUFDWSxJQUFWLENBQWVELFFBQWY7QUFDRDtBQUNGOztBQUVELGVBQU9YLFNBQVA7QUFDRCxPQWpCVyxFQWlCVCxFQWpCUyxDQURsQjtBQUFBLFVBbUJNYSxLQUFLLEdBQUdiLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQVNILFFBQVQsRUFBbUI7QUFDdkMsWUFBTUksSUFBSSxHQUFHSixRQUFRLENBQUNLLFlBQVQsQ0FBc0JuQixJQUF0QixDQUFiO0FBRUEsZUFBT2tCLElBQVA7QUFDRCxPQUpPLENBbkJkO0FBeUJBLGFBQU9GLEtBQVA7QUFDRDs7OzhDQUVnQ1AsUSxFQUFVUixVLEVBQVk7QUFBRSxhQUFPbUIsd0JBQWdCQyx5QkFBaEIsQ0FBMEN0QixZQUExQyxFQUF3RFUsUUFBeEQsRUFBa0VSLFVBQWxFLENBQVA7QUFBdUY7Ozs7RUE5QnZIbUIsdUI7O0FBaUMzQkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCeEIsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBSdWxlUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihydWxlTm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lUnVsZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBSdWxlUnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTm9kZSA9IHJ1bGVOYW1lUnVsZVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICAgICAgcnVsZU5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTm9kZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcChmdW5jdGlvbihydWxlTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERvY3VtZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnROb2RlO1xuIl19