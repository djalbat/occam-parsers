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

var RuleNamePart = require("../part/nonTerminal/ruleName"),
    arrayUtilities = require("../../utilities/array"),
    NonTerminalNode = require("../../common/node/nonTerminal");

var first = arrayUtilities.first;

var RuleNameNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RuleNameNode, _NonTerminalNode);

  function RuleNameNode() {
    _classCallCheck(this, RuleNameNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameNode).apply(this, arguments));
  }

  _createClass(RuleNameNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var ruleName = this.getRuleName(),
          ruleNamePart = new RuleNamePart(ruleName, lookAhead);
      return ruleNamePart;
    }
  }, {
    key: "getRuleName",
    value: function getRuleName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///

      return ruleName;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(RuleNameNode, ruleName, childNodes);
    }
  }]);

  return RuleNameNode;
}(NonTerminalNode);

module.exports = RuleNameNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFydCIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiUnVsZU5hbWVOb2RlIiwibG9va0FoZWFkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyw4QkFBRCxDQUE1QjtBQUFBLElBQ01DLGNBQWMsR0FBR0QsT0FBTyxDQUFDLHVCQUFELENBRDlCO0FBQUEsSUFFTUUsZUFBZSxHQUFHRixPQUFPLENBQUMsK0JBQUQsQ0FGL0I7O0lBSVFHLEssR0FBVUYsYyxDQUFWRSxLOztJQUVGQyxZOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsVUFDTUMsWUFBWSxHQUFHLElBQUlULFlBQUosQ0FBaUJPLFFBQWpCLEVBQTJCRCxTQUEzQixDQURyQjtBQUdBLGFBQU9HLFlBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxjQUFjLEdBQUdSLEtBQUssQ0FBQ00sVUFBRCxDQUQ1QjtBQUFBLFVBRU1HLFlBQVksR0FBR0QsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0UsTUFBQUEsbUJBQW1CLEdBQUdELFlBQVksQ0FBQ0UsVUFBYixFQUg1QjtBQUFBLFVBSU1SLFFBQVEsR0FBR08sbUJBSmpCLENBRFksQ0FLMEI7O0FBRXRDLGFBQU9QLFFBQVA7QUFDRDs7OzhDQUVnQ0EsUSxFQUFVRyxVLEVBQVk7QUFBRSxhQUFPUCxlQUFlLENBQUNhLHlCQUFoQixDQUEwQ1gsWUFBMUMsRUFBd0RFLFFBQXhELEVBQWtFRyxVQUFsRSxDQUFQO0FBQXVGOzs7O0VBbEJ2SFAsZTs7QUFxQjNCYyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCIpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUnVsZU5hbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICAgIFxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTmFtZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lTm9kZTtcbiJdfQ==