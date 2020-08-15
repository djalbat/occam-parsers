"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = _interopRequireDefault(require("./context"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CommonParser = /*#__PURE__*/function () {
  function CommonParser(startRule, ruleMap) {
    _classCallCheck(this, CommonParser);

    this.startRule = startRule;
    this.ruleMap = ruleMap;
  }

  _createClass(CommonParser, [{
    key: "getStartRule",
    value: function getStartRule() {
      return this.startRule;
    }
  }, {
    key: "getRuleMap",
    value: function getRuleMap() {
      return this.ruleMap;
    }
  }, {
    key: "parse",
    value: function parse(tokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.startRule;

      var context = _context["default"].fromTokensAndRuleMap(tokens, this.ruleMap),
          ruleNode = rule.parse(context),
          node = ruleNode; ///


      return node;
    }
  }], [{
    key: "fromRules",
    value: function fromRules(Parser, rules) {
      var firstRule = (0, _array.first)(rules),
          startRule = firstRule,
          ///
      ruleMap = rules.reduce(function (ruleMap, rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
        return ruleMap;
      }, {}),
          parser = new Parser(startRule, ruleMap);
      return parser;
    }
  }]);

  return CommonParser;
}();

exports["default"] = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDb21tb25QYXJzZXIiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwidG9rZW5zIiwicnVsZSIsImNvbnRleHQiLCJDb250ZXh0IiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJydWxlTm9kZSIsInBhcnNlIiwibm9kZSIsIlBhcnNlciIsInJ1bGVzIiwiZmlyc3RSdWxlIiwicmVkdWNlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwicGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0lBRXFCQSxZO0FBQ25CLHdCQUFZQyxTQUFaLEVBQXVCQyxPQUF2QixFQUFnQztBQUFBOztBQUM5QixTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLRCxTQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7MEJBRUtDLE0sRUFBK0I7QUFBQSxVQUF2QkMsSUFBdUIsdUVBQWhCLEtBQUtILFNBQVc7O0FBQ25DLFVBQU1JLE9BQU8sR0FBR0Msb0JBQVFDLG9CQUFSLENBQTZCSixNQUE3QixFQUFxQyxLQUFLRCxPQUExQyxDQUFoQjtBQUFBLFVBQ01NLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxLQUFMLENBQVdKLE9BQVgsQ0FEakI7QUFBQSxVQUVNSyxJQUFJLEdBQUdGLFFBRmIsQ0FEbUMsQ0FHWjs7O0FBRXZCLGFBQU9FLElBQVA7QUFDRDs7OzhCQUVnQkMsTSxFQUFRQyxLLEVBQU87QUFDOUIsVUFBTUMsU0FBUyxHQUFHLGtCQUFNRCxLQUFOLENBQWxCO0FBQUEsVUFDTVgsU0FBUyxHQUFHWSxTQURsQjtBQUFBLFVBQzhCO0FBQ3hCWCxNQUFBQSxPQUFPLEdBQUdVLEtBQUssQ0FBQ0UsTUFBTixDQUFhLFVBQUNaLE9BQUQsRUFBVUUsSUFBVixFQUFtQjtBQUN4QyxZQUFNVyxRQUFRLEdBQUdYLElBQUksQ0FBQ1ksT0FBTCxFQUFqQjtBQUVBZCxRQUFBQSxPQUFPLENBQUNhLFFBQUQsQ0FBUCxHQUFvQlgsSUFBcEI7QUFFQSxlQUFPRixPQUFQO0FBQ0QsT0FOUyxFQU1QLEVBTk8sQ0FGaEI7QUFBQSxVQVNNZSxNQUFNLEdBQUcsSUFBSU4sTUFBSixDQUFXVixTQUFYLEVBQXNCQyxPQUF0QixDQVRmO0FBV0EsYUFBT2UsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gQ29udGV4dC5mcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHRoaXMucnVsZU1hcCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLnBhcnNlKGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBydWxlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMoUGFyc2VyLCBydWxlcykge1xuICAgIGNvbnN0IGZpcnN0UnVsZSA9IGZpcnN0KHJ1bGVzKSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBmaXJzdFJ1bGUsICAvLy9cbiAgICAgICAgICBydWxlTWFwID0gcnVsZXMucmVkdWNlKChydWxlTWFwLCBydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgICAgICBydWxlTWFwW3J1bGVOYW1lXSA9IHJ1bGU7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlTWFwO1xuICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG59XG4iXX0=