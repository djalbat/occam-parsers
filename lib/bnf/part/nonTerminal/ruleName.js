"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _rule = require("../../../utilities/rule");

var _partTypes = require("../../partTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var exclamationMark = _occamLexers.specialSymbols.exclamationMark;

var RuleNamePart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(RuleNamePart, _NonTerminalPart);

  function RuleNamePart(ruleName) {
    var _this;

    var lookAhead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RuleNamePart);

    var type = _partTypes.RuleNamePartType; ///

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RuleNamePart).call(this, type));
    _this.ruleName = ruleName;
    _this.lookAhead = lookAhead;
    return _this;
  }

  _createClass(RuleNamePart, [{
    key: "getRuleName",
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: "isLookAhead",
    value: function isLookAhead() {
      return this.lookAhead;
    }
  }, {
    key: "isRuleNamePart",
    value: function isRuleNamePart() {
      var ruleNamePart = true;
      return ruleNamePart;
    }
  }, {
    key: "setLookAhead",
    value: function setLookAhead(lookAhead) {
      this.lookAhead = lookAhead;
    }
  }, {
    key: "findRule",
    value: function findRule(configuration) {
      var name = this.ruleName,
          ///
      rules = configuration.getRules(),
          rule = (0, _rule.findRuleByName)(name, rules);
      return rule;
    }
  }, {
    key: "parse",
    value: function parse(configuration) {
      var node = null;
      var rule = this.findRule(configuration);

      if (rule !== null) {
        node = rule.parse(configuration);
      }

      return node;
    }
  }, {
    key: "parseRuleWithLookAhead",
    value: function parseRuleWithLookAhead(rule, configuration, callback) {
      if (rule !== null) {
        rule.parseWithLookAhead(configuration, callback);
      }
    }
  }, {
    key: "asString",
    value: function asString() {
      var lookAheadString = this.lookAhead ? exclamationMark : "",
          string = "".concat(this.ruleName).concat(lookAheadString);
      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(RuleNamePart.prototype), "clone", this).call(this, RuleNamePart, this.ruleName, this.lookAhead);
    }
  }]);

  return RuleNamePart;
}(_nonTerminal["default"]);

exports["default"] = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJub2RlIiwiZmluZFJ1bGUiLCJwYXJzZSIsImNhbGxiYWNrIiwicGFyc2VXaXRoTG9va0FoZWFkIiwibG9va0FoZWFkU3RyaW5nIiwic3RyaW5nIiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxlLEdBQW9CQywyQixDQUFwQkQsZTs7SUFFYUUsWTs7O0FBQ25CLHdCQUFZQyxRQUFaLEVBQXlDO0FBQUE7O0FBQUEsUUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3ZDLFFBQU1DLElBQUksR0FBR0MsMkJBQWIsQ0FEdUMsQ0FDUjs7QUFFL0Isc0ZBQU1ELElBQU47QUFFQSxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBUHVDO0FBUXhDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUcsWUFBWSxHQUFHLElBQXJCO0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7aUNBRVlILFMsRUFBVztBQUN0QixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7NkJBRVFJLGEsRUFBZTtBQUN0QixVQUFNQyxJQUFJLEdBQUcsS0FBS04sUUFBbEI7QUFBQSxVQUE0QjtBQUN0Qk8sTUFBQUEsS0FBSyxHQUFHRixhQUFhLENBQUNHLFFBQWQsRUFEZDtBQUFBLFVBRU1DLElBQUksR0FBRywwQkFBZUgsSUFBZixFQUFxQkMsS0FBckIsQ0FGYjtBQUlBLGFBQU9FLElBQVA7QUFDRDs7OzBCQUVLSixhLEVBQWU7QUFDbkIsVUFBSUssSUFBSSxHQUFHLElBQVg7QUFFQSxVQUFNRCxJQUFJLEdBQUcsS0FBS0UsUUFBTCxDQUFjTixhQUFkLENBQWI7O0FBRUEsVUFBSUksSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJDLFFBQUFBLElBQUksR0FBR0QsSUFBSSxDQUFDRyxLQUFMLENBQVdQLGFBQVgsQ0FBUDtBQUNEOztBQUVELGFBQU9LLElBQVA7QUFDRDs7OzJDQUVzQkQsSSxFQUFNSixhLEVBQWVRLFEsRUFBVTtBQUNwRCxVQUFJSixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQkEsUUFBQUEsSUFBSSxDQUFDSyxrQkFBTCxDQUF3QlQsYUFBeEIsRUFBdUNRLFFBQXZDO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsVUFBTUUsZUFBZSxHQUFHLEtBQUtkLFNBQUwsR0FDRUosZUFERixHQUVJLEVBRjVCO0FBQUEsVUFHTW1CLE1BQU0sYUFBTSxLQUFLaEIsUUFBWCxTQUFzQmUsZUFBdEIsQ0FIWjtBQUtBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUscUZBQW1CakIsWUFBbkIsRUFBaUMsS0FBS0MsUUFBdEMsRUFBZ0QsS0FBS0MsU0FBckQ7QUFBa0U7Ozs7RUFoRXBDZ0IsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgZmluZFJ1bGVCeU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3J1bGVcIjtcbmltcG9ydCB7IFJ1bGVOYW1lUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGxvb2tBaGVhZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdHlwZSA9IFJ1bGVOYW1lUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb29rQWhlYWQ7XG4gIH1cblxuICBpc1J1bGVOYW1lUGFydCgpIHtcbiAgICBjb25zdCBydWxlTmFtZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIHNldExvb2tBaGVhZChsb29rQWhlYWQpIHtcbiAgICB0aGlzLmxvb2tBaGVhZCA9IGxvb2tBaGVhZDtcbiAgfVxuXG4gIGZpbmRSdWxlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5ydWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBjb25maWd1cmF0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlQnlOYW1lKG5hbWUsIHJ1bGVzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgcGFyc2UoY29uZmlndXJhdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShjb25maWd1cmF0aW9uKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlUnVsZVdpdGhMb29rQWhlYWQocnVsZSwgY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgcnVsZS5wYXJzZVdpdGhMb29rQWhlYWQoY29uZmlndXJhdGlvbiwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGxvb2tBaGVhZFN0cmluZyA9IHRoaXMubG9va0FoZWFkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoUnVsZU5hbWVQYXJ0LCB0aGlzLnJ1bGVOYW1lLCB0aGlzLmxvb2tBaGVhZCk7IH1cbn1cbiJdfQ==