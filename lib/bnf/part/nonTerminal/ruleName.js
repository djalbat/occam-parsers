"use strict";

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

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbmZpZ3VyYXRpb24iLCJuYW1lIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJub2RlIiwiZmluZFJ1bGUiLCJwYXJzZSIsImNhbGxiYWNrIiwicGFyc2VXaXRoTG9va0FoZWFkIiwibG9va0FoZWFkU3RyaW5nIiwic3RyaW5nIiwiTm9uVGVybWluYWxQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLGUsR0FBb0JDLDJCLENBQXBCRCxlOztJQUVGRSxZOzs7QUFDSix3QkFBWUMsUUFBWixFQUF5QztBQUFBOztBQUFBLFFBQW5CQyxTQUFtQix1RUFBUCxLQUFPOztBQUFBOztBQUN2QyxRQUFNQyxJQUFJLEdBQUdDLDJCQUFiLENBRHVDLENBQ1I7O0FBRS9CLHNGQUFNRCxJQUFOO0FBRUEsVUFBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQVB1QztBQVF4Qzs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1HLFlBQVksR0FBRyxJQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O2lDQUVZSCxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzZCQUVRSSxhLEVBQWU7QUFDdEIsVUFBTUMsSUFBSSxHQUFHLEtBQUtOLFFBQWxCO0FBQUEsVUFBNEI7QUFDdEJPLE1BQUFBLEtBQUssR0FBR0YsYUFBYSxDQUFDRyxRQUFkLEVBRGQ7QUFBQSxVQUVNQyxJQUFJLEdBQUcsMEJBQWVILElBQWYsRUFBcUJDLEtBQXJCLENBRmI7QUFJQSxhQUFPRSxJQUFQO0FBQ0Q7OzswQkFFS0osYSxFQUFlO0FBQ25CLFVBQUlLLElBQUksR0FBRyxJQUFYO0FBRUEsVUFBTUQsSUFBSSxHQUFHLEtBQUtFLFFBQUwsQ0FBY04sYUFBZCxDQUFiOztBQUVBLFVBQUlJLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCQyxRQUFBQSxJQUFJLEdBQUdELElBQUksQ0FBQ0csS0FBTCxDQUFXUCxhQUFYLENBQVA7QUFDRDs7QUFFRCxhQUFPSyxJQUFQO0FBQ0Q7OzsyQ0FFc0JELEksRUFBTUosYSxFQUFlUSxRLEVBQVU7QUFDcEQsVUFBSUosSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJBLFFBQUFBLElBQUksQ0FBQ0ssa0JBQUwsQ0FBd0JULGFBQXhCLEVBQXVDUSxRQUF2QztBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1FLGVBQWUsR0FBRyxLQUFLZCxTQUFMLEdBQ0VKLGVBREYsR0FFSSxFQUY1QjtBQUFBLFVBR01tQixNQUFNLGFBQU0sS0FBS2hCLFFBQVgsU0FBc0JlLGVBQXRCLENBSFo7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHFGQUFtQmpCLFlBQW5CLEVBQWlDLEtBQUtDLFFBQXRDLEVBQWdELEtBQUtDLFNBQXJEO0FBQWtFOzs7O0VBaEVuRGdCLHVCOztBQW1FM0JDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBCLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpbmRSdWxlQnlOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBsb29rQWhlYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzZXRMb29rQWhlYWQobG9va0FoZWFkKSB7XG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBmaW5kUnVsZShjb25maWd1cmF0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gY29uZmlndXJhdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuZmluZFJ1bGUoY29uZmlndXJhdGlvbik7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IHJ1bGUucGFyc2UoY29uZmlndXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZVJ1bGVXaXRoTG9va0FoZWFkKHJ1bGUsIGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIHJ1bGUucGFyc2VXaXRoTG9va0FoZWFkKGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWRTdHJpbmcgPSB0aGlzLmxvb2tBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJ1bGVOYW1lUGFydCwgdGhpcy5ydWxlTmFtZSwgdGhpcy5sb29rQWhlYWQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVQYXJ0O1xuIl19