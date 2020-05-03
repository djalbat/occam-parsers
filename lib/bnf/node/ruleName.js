"use strict";

var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

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
          ruleNamePart = new _ruleName["default"](ruleName, lookAhead);
      return ruleNamePart;
    }
  }, {
    key: "getRuleName",
    value: function getRuleName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = (0, _array.first)(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///

      return ruleName;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(RuleNameNode, ruleName, childNodes);
    }
  }]);

  return RuleNameNode;
}(_nonTerminal["default"]);

module.exports = RuleNameNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lTm9kZSIsImxvb2tBaGVhZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJOb25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01DLFlBQVksR0FBRyxJQUFJQyxvQkFBSixDQUFpQkgsUUFBakIsRUFBMkJELFNBQTNCLENBRHJCO0FBR0EsYUFBT0csWUFBUDtBQUNEOzs7a0NBRWE7QUFDWixVQUFNRSxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGNBQWMsR0FBRyxrQkFBTUYsVUFBTixDQUR2QjtBQUFBLFVBRU1HLFlBQVksR0FBR0QsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0UsTUFBQUEsbUJBQW1CLEdBQUdELFlBQVksQ0FBQ0UsVUFBYixFQUg1QjtBQUFBLFVBSU1ULFFBQVEsR0FBR1EsbUJBSmpCLENBRFksQ0FLMEI7O0FBRXRDLGFBQU9SLFFBQVA7QUFDRDs7OzhDQUVnQ0EsUSxFQUFVSSxVLEVBQVk7QUFBRSxhQUFPTSx3QkFBZ0JDLHlCQUFoQixDQUEwQ2IsWUFBMUMsRUFBd0RFLFFBQXhELEVBQWtFSSxVQUFsRSxDQUFQO0FBQXVGOzs7O0VBbEJ2SE0sdUI7O0FBcUIzQkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgUnVsZU5hbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUsIGxvb2tBaGVhZCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICAgIFxuICAgIHJldHVybiBydWxlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSdWxlTmFtZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lTm9kZTtcbiJdfQ==