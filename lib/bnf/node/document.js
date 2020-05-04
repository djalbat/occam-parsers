"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = DocumentNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbIkRvY3VtZW50Tm9kZSIsIlJ1bGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOb2RlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lUnVsZVJ1bGVOYW1lIiwiUnVsZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5vZGUiLCJydWxlTm9kZSIsInB1c2giLCJydWxlcyIsIm1hcCIsInJ1bGUiLCJnZW5lcmF0ZVJ1bGUiLCJOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7OztrQ0FDTEMsSSxFQUFNO0FBQ2xCLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsU0FBUyxHQUFHRixVQUFVLENBQUNHLE1BQVgsQ0FBa0IsVUFBQ0QsU0FBRCxFQUFZRSxTQUFaLEVBQTBCO0FBQ3RELFlBQU1DLHdCQUF3QixHQUFHRCxTQUFTLENBQUNFLGlCQUFWLEVBQWpDOztBQUVBLFlBQUlELHdCQUFKLEVBQThCO0FBQzVCLGNBQU1FLGVBQWUsR0FBR0gsU0FBeEI7QUFBQSxjQUFvQztBQUM5QkksVUFBQUEsUUFBUSxHQUFHSixTQUFTLENBQUNLLFdBQVYsRUFEakI7QUFBQSxjQUVNQyxvQkFBb0IsR0FBSUYsUUFBUSxLQUFLRyx1QkFGM0M7QUFBQSxjQUdNQyx1QkFBdUIsR0FBR0Ysb0JBSGhDLENBRDRCLENBSTJCOztBQUV2RCxjQUFJRSx1QkFBSixFQUE2QjtBQUMzQixnQkFBTUMsUUFBUSxHQUFHTixlQUFqQixDQUQyQixDQUNPOztBQUVsQ0wsWUFBQUEsU0FBUyxDQUFDWSxJQUFWLENBQWVELFFBQWY7QUFDRDtBQUNGOztBQUVELGVBQU9YLFNBQVA7QUFDRCxPQWpCVyxFQWlCVCxFQWpCUyxDQURsQjtBQUFBLFVBbUJNYSxLQUFLLEdBQUdiLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQUNILFFBQUQsRUFBYztBQUNsQyxZQUFNSSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssWUFBVCxDQUFzQm5CLElBQXRCLENBQWI7QUFFQSxlQUFPa0IsSUFBUDtBQUNELE9BSk8sQ0FuQmQ7QUF5QkEsYUFBT0YsS0FBUDtBQUNEOzs7OENBRWdDUCxRLEVBQVVSLFUsRUFBWTtBQUFFLGFBQU9tQix3QkFBZ0JDLHlCQUFoQixDQUEwQ3RCLFlBQTFDLEVBQXdEVSxRQUF4RCxFQUFrRVIsVUFBbEUsQ0FBUDtBQUF1Rjs7OztFQTlCeEdtQix1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb21cIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IFJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVSdWxlcyhSdWxlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOb2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChydWxlTm9kZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gY2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lUnVsZVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBSdWxlUnVsZU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTm9kZSA9IHJ1bGVOYW1lUnVsZVJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICAgICAgcnVsZU5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTm9kZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcCgocnVsZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlTm9kZS5nZW5lcmF0ZVJ1bGUoUnVsZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEb2N1bWVudE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl19