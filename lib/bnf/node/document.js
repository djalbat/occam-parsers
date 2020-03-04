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

var ruleNames = require('../ruleNames'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RuleRuleName = ruleNames.RuleRuleName;

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
              ruleNameRuleRuleName = ruleName === RuleRuleName,
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
      return NonTerminalNode.fromRuleNameAndChildNodes(DocumentNode, ruleName, childNodes);
    }
  }]);

  return DocumentNode;
}(NonTerminalNode);

module.exports = DocumentNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJ1bGVOYW1lcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJSdWxlUnVsZU5hbWUiLCJEb2N1bWVudE5vZGUiLCJSdWxlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTm9kZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVJ1bGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwdXNoIiwicnVsZXMiLCJtYXAiLCJydWxlIiwiZ2VuZXJhdGVSdWxlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBekI7QUFBQSxJQUNNQyxlQUFlLEdBQUdELE9BQU8sQ0FBQywrQkFBRCxDQUQvQjs7SUFHUUUsWSxHQUFpQkgsUyxDQUFqQkcsWTs7SUFFRkMsWTs7Ozs7Ozs7Ozs7a0NBQ1VDLEksRUFBTTtBQUNsQixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxNQUFYLENBQWtCLFVBQVNELFNBQVQsRUFBb0JFLFNBQXBCLEVBQStCO0FBQzNELFlBQU1DLHdCQUF3QixHQUFHRCxTQUFTLENBQUNFLGlCQUFWLEVBQWpDOztBQUVBLFlBQUlELHdCQUFKLEVBQThCO0FBQzVCLGNBQU1FLGVBQWUsR0FBR0gsU0FBeEI7QUFBQSxjQUFvQztBQUM5QkksVUFBQUEsUUFBUSxHQUFHSixTQUFTLENBQUNLLFdBQVYsRUFEakI7QUFBQSxjQUVNQyxvQkFBb0IsR0FBSUYsUUFBUSxLQUFLWCxZQUYzQztBQUFBLGNBR01jLHVCQUF1QixHQUFHRCxvQkFIaEMsQ0FENEIsQ0FJMkI7O0FBRXZELGNBQUlDLHVCQUFKLEVBQTZCO0FBQzNCLGdCQUFNQyxRQUFRLEdBQUdMLGVBQWpCLENBRDJCLENBQ087O0FBRWxDTCxZQUFBQSxTQUFTLENBQUNXLElBQVYsQ0FBZUQsUUFBZjtBQUNEO0FBQ0Y7O0FBRUQsZUFBT1YsU0FBUDtBQUNELE9BakJXLEVBaUJULEVBakJTLENBRGxCO0FBQUEsVUFtQk1ZLEtBQUssR0FBR1osU0FBUyxDQUFDYSxHQUFWLENBQWMsVUFBU0gsUUFBVCxFQUFtQjtBQUN2QyxZQUFNSSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssWUFBVCxDQUFzQmxCLElBQXRCLENBQWI7QUFFQSxlQUFPaUIsSUFBUDtBQUNELE9BSk8sQ0FuQmQ7QUF5QkEsYUFBT0YsS0FBUDtBQUNEOzs7OENBRWdDTixRLEVBQVVSLFUsRUFBWTtBQUFFLGFBQU9KLGVBQWUsQ0FBQ3NCLHlCQUFoQixDQUEwQ3BCLFlBQTFDLEVBQXdEVSxRQUF4RCxFQUFrRVIsVUFBbEUsQ0FBUDtBQUF1Rjs7OztFQTlCdkhKLGU7O0FBaUMzQnVCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRCLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgUnVsZVJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBydWxlTm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbihydWxlTm9kZXMsIGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lUnVsZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBSdWxlUnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTm9kZSA9IHJ1bGVOYW1lUnVsZVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICAgICAgcnVsZU5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTm9kZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcChmdW5jdGlvbihydWxlTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOb2RlLmdlbmVyYXRlUnVsZShSdWxlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERvY3VtZW50Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnROb2RlO1xuIl19