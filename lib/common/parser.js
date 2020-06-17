"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configuration = _interopRequireDefault(require("./configuration"));

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

      var configuration = _configuration["default"].fromTokensAndRuleMap(tokens, this.ruleMap),
          node = rule.parse(configuration);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDb21tb25QYXJzZXIiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwidG9rZW5zIiwicnVsZSIsImNvbmZpZ3VyYXRpb24iLCJDb25maWd1cmF0aW9uIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJub2RlIiwicGFyc2UiLCJQYXJzZXIiLCJydWxlcyIsImZpcnN0UnVsZSIsInJlZHVjZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsInBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztJQUVxQkEsWTtBQUNuQix3QkFBWUMsU0FBWixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFBQTs7QUFDOUIsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0QsU0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7OzBCQUVLQyxNLEVBQStCO0FBQUEsVUFBdkJDLElBQXVCLHVFQUFoQixLQUFLSCxTQUFXOztBQUNuQyxVQUFNSSxhQUFhLEdBQUdDLDBCQUFjQyxvQkFBZCxDQUFtQ0osTUFBbkMsRUFBMkMsS0FBS0QsT0FBaEQsQ0FBdEI7QUFBQSxVQUNNTSxJQUFJLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXSixhQUFYLENBRGI7O0FBR0EsYUFBT0csSUFBUDtBQUNEOzs7OEJBRWdCRSxNLEVBQVFDLEssRUFBTztBQUM5QixVQUFNQyxTQUFTLEdBQUcsa0JBQU1ELEtBQU4sQ0FBbEI7QUFBQSxVQUNNVixTQUFTLEdBQUdXLFNBRGxCO0FBQUEsVUFDOEI7QUFDeEJWLE1BQUFBLE9BQU8sR0FBR1MsS0FBSyxDQUFDRSxNQUFOLENBQWEsVUFBQ1gsT0FBRCxFQUFVRSxJQUFWLEVBQW1CO0FBQ3hDLFlBQU1VLFFBQVEsR0FBR1YsSUFBSSxDQUFDVyxPQUFMLEVBQWpCO0FBRUFiLFFBQUFBLE9BQU8sQ0FBQ1ksUUFBRCxDQUFQLEdBQW9CVixJQUFwQjtBQUVBLGVBQU9GLE9BQVA7QUFDRCxPQU5TLEVBTVAsRUFOTyxDQUZoQjtBQUFBLFVBU01jLE1BQU0sR0FBRyxJQUFJTixNQUFKLENBQVdULFNBQVgsRUFBc0JDLE9BQXRCLENBVGY7QUFXQSxhQUFPYyxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBDb25maWd1cmF0aW9uLmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBub2RlID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhQYXJzZXIsIHJ1bGVzKSB7XG4gICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QocnVsZXMpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZSwgIC8vL1xuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlcy5yZWR1Y2UoKHJ1bGVNYXAsIHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIHJ1bGVNYXBbcnVsZU5hbWVdID0gcnVsZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVNYXA7XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cbn1cbiJdfQ==