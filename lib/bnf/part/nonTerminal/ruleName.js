"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));

var _partTypes = require("../../partTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    value: function parse(nodes, context, callback) {
      var parsed;
      var rule = this.findRule(context);

      if (rule === null) {
        parsed = false;
      } else {
        var ruleNode = rule.parse(context, callback);
        parsed = ruleNode !== null;

        if (parsed) {
          nodes.push(ruleNode);
        }
      }

      return parsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbnRleHQiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJub2RlcyIsImNhbGxiYWNrIiwicGFyc2VkIiwiZmluZFJ1bGUiLCJydWxlTm9kZSIsInBhcnNlIiwicHVzaCIsImxvb2tBaGVhZFN0cmluZyIsInN0cmluZyIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLGUsR0FBb0JDLDJCLENBQXBCRCxlOztJQUVhRSxZOzs7OztBQUNuQix3QkFBWUMsUUFBWixFQUF5QztBQUFBOztBQUFBLFFBQW5CQyxTQUFtQix1RUFBUCxLQUFPOztBQUFBOztBQUN2QyxRQUFNQyxJQUFJLEdBQUdDLDJCQUFiLENBRHVDLENBQ1I7O0FBRS9CLDhCQUFNRCxJQUFOO0FBRUEsVUFBS0YsUUFBTCxHQUFnQkEsUUFBaEI7QUFFQSxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQVB1QztBQVF4Qzs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtDLFNBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQU1HLFlBQVksR0FBRyxJQUFyQjtBQUVBLGFBQU9BLFlBQVA7QUFDRDs7O2lDQUVZSCxTLEVBQVc7QUFDdEIsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7OzZCQUVRSSxPLEVBQVM7QUFDaEIsVUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUNFLFVBQVIsRUFBaEI7QUFBQSxVQUNNQyxJQUFJLEdBQUdGLE9BQU8sQ0FBQyxLQUFLTixRQUFOLENBQVAsSUFBMEIsSUFEdkMsQ0FEZ0IsQ0FFOEI7O0FBRTlDLGFBQU9RLElBQVA7QUFDRDs7OzBCQUVLQyxLLEVBQU9KLE8sRUFBU0ssUSxFQUFVO0FBQzlCLFVBQUlDLE1BQUo7QUFFQSxVQUFNSCxJQUFJLEdBQUcsS0FBS0ksUUFBTCxDQUFjUCxPQUFkLENBQWI7O0FBRUEsVUFBSUcsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJHLFFBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTUUsUUFBUSxHQUFHTCxJQUFJLENBQUNNLEtBQUwsQ0FBV1QsT0FBWCxFQUFvQkssUUFBcEIsQ0FBakI7QUFFQUMsUUFBQUEsTUFBTSxHQUFJRSxRQUFRLEtBQUssSUFBdkI7O0FBRUEsWUFBSUYsTUFBSixFQUFZO0FBQ1ZGLFVBQUFBLEtBQUssQ0FBQ00sSUFBTixDQUFXRixRQUFYO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1LLGVBQWUsR0FBRyxLQUFLZixTQUFMLEdBQ0VKLGVBREYsR0FFSSxFQUY1QjtBQUFBLFVBR01vQixNQUFNLGFBQU0sS0FBS2pCLFFBQVgsU0FBc0JnQixlQUF0QixDQUhaO0FBS0EsYUFBT0MsTUFBUDtBQUNEOzs7NEJBRU87QUFBRSxxRkFBbUJsQixZQUFuQixFQUFpQyxLQUFLQyxRQUF0QyxFQUFnRCxLQUFLQyxTQUFyRDtBQUFrRTs7OztFQWpFcENpQix1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBSdWxlTmFtZVBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBsb29rQWhlYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHR5cGUgPSBSdWxlTmFtZVBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuXG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cbiAgXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgaXNMb29rQWhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9va0FoZWFkO1xuICB9XG5cbiAgaXNSdWxlTmFtZVBhcnQoKSB7XG4gICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnQ7XG4gIH1cblxuICBzZXRMb29rQWhlYWQobG9va0FoZWFkKSB7XG4gICAgdGhpcy5sb29rQWhlYWQgPSBsb29rQWhlYWQ7XG4gIH1cblxuICBmaW5kUnVsZShjb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IGNvbnRleHQuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3RoaXMucnVsZU5hbWVdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmZpbmRSdWxlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlTm9kZSA9IHJ1bGUucGFyc2UoY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgICBwYXJzZWQgPSAocnVsZU5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWRTdHJpbmcgPSB0aGlzLmxvb2tBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJ1bGVOYW1lUGFydCwgdGhpcy5ydWxlTmFtZSwgdGhpcy5sb29rQWhlYWQpOyB9XG59XG4iXX0=