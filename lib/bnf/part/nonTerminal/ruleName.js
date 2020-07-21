"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _partTypes = require("../../partTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var exclamationMark = _occamLexers.specialSymbols.exclamationMark;

var RuleNamePart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(RuleNamePart, _NonTerminalPart);

  var _super = _createSuper(RuleNamePart);

  function RuleNamePart(ruleName) {
    var _this;

    var lookAhead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RuleNamePart);

    var type = _partTypes.RuleNamePartType; ///

    _this = _super.call(this, type);
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
    value: function findRule(context) {
      var ruleMap = context.getRuleMap(),
          rule = ruleMap[this.ruleName] || null; ///

      return rule;
    }
  }, {
    key: "parse",
    value: function parse(context, callback) {
      var node = null;
      var rule = this.findRule(context);

      if (rule !== null) {
        node = rule.parse(context, callback);
      }

      return node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbnRleHQiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJjYWxsYmFjayIsIm5vZGUiLCJmaW5kUnVsZSIsInBhcnNlIiwibG9va0FoZWFkU3RyaW5nIiwic3RyaW5nIiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsZSxHQUFvQkMsMkIsQ0FBcEJELGU7O0lBRWFFLFk7Ozs7O0FBQ25CLHdCQUFZQyxRQUFaLEVBQXlDO0FBQUE7O0FBQUEsUUFBbkJDLFNBQW1CLHVFQUFQLEtBQU87O0FBQUE7O0FBQ3ZDLFFBQU1DLElBQUksR0FBR0MsMkJBQWIsQ0FEdUMsQ0FDUjs7QUFFL0IsOEJBQU1ELElBQU47QUFFQSxVQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBUHVDO0FBUXhDOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRCxRQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBTUcsWUFBWSxHQUFHLElBQXJCO0FBRUEsYUFBT0EsWUFBUDtBQUNEOzs7aUNBRVlILFMsRUFBVztBQUN0QixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7NkJBRVFJLE8sRUFBUztBQUNoQixVQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsVUFBUixFQUFoQjtBQUFBLFVBQ01DLElBQUksR0FBR0YsT0FBTyxDQUFDLEtBQUtOLFFBQU4sQ0FBUCxJQUEwQixJQUR2QyxDQURnQixDQUU4Qjs7QUFFOUMsYUFBT1EsSUFBUDtBQUNEOzs7MEJBRUtILE8sRUFBU0ksUSxFQUFVO0FBQ3ZCLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBRUEsVUFBTUYsSUFBSSxHQUFHLEtBQUtHLFFBQUwsQ0FBY04sT0FBZCxDQUFiOztBQUVBLFVBQUlHLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCRSxRQUFBQSxJQUFJLEdBQUdGLElBQUksQ0FBQ0ksS0FBTCxDQUFXUCxPQUFYLEVBQW9CSSxRQUFwQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT0MsSUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRyxlQUFlLEdBQUcsS0FBS1osU0FBTCxHQUNFSixlQURGLEdBRUksRUFGNUI7QUFBQSxVQUdNaUIsTUFBTSxhQUFNLEtBQUtkLFFBQVgsU0FBc0JhLGVBQXRCLENBSFo7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHFGQUFtQmYsWUFBbkIsRUFBaUMsS0FBS0MsUUFBdEMsRUFBZ0QsS0FBS0MsU0FBckQ7QUFBa0U7Ozs7RUF6RHBDYyx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBsb29rQWhlYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzZXRMb29rQWhlYWQobG9va0FoZWFkKSB7XG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBmaW5kUnVsZShjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IGNvbnRleHQuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3RoaXMucnVsZU5hbWVdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShjb250ZXh0KTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gcnVsZS5wYXJzZShjb250ZXh0LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWRTdHJpbmcgPSB0aGlzLmxvb2tBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJ1bGVOYW1lUGFydCwgdGhpcy5ydWxlTmFtZSwgdGhpcy5sb29rQWhlYWQpOyB9XG59XG4iXX0=