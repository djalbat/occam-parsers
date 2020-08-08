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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      var rule = this.findRule(context),
          node = rule === null ? null : rule.parse(context, callback);

      if (node === null) {
        nodes = null;
      } else {
        nodes = [].concat(_toConsumableArray(nodes), [node]);
      }

      return nodes;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJsb29rQWhlYWQiLCJ0eXBlIiwiUnVsZU5hbWVQYXJ0VHlwZSIsInJ1bGVOYW1lUGFydCIsImNvbnRleHQiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJub2RlcyIsImNhbGxiYWNrIiwiZmluZFJ1bGUiLCJub2RlIiwicGFyc2UiLCJsb29rQWhlYWRTdHJpbmciLCJzdHJpbmciLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxlLEdBQW9CQywyQixDQUFwQkQsZTs7SUFFYUUsWTs7Ozs7QUFDbkIsd0JBQVlDLFFBQVosRUFBeUM7QUFBQTs7QUFBQSxRQUFuQkMsU0FBbUIsdUVBQVAsS0FBTzs7QUFBQTs7QUFDdkMsUUFBTUMsSUFBSSxHQUFHQywyQkFBYixDQUR1QyxDQUNSOztBQUUvQiw4QkFBTUQsSUFBTjtBQUVBLFVBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFQdUM7QUFReEM7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNRyxZQUFZLEdBQUcsSUFBckI7QUFFQSxhQUFPQSxZQUFQO0FBQ0Q7OztpQ0FFWUgsUyxFQUFXO0FBQ3RCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs2QkFFUUksTyxFQUFTO0FBQ2hCLFVBQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDRSxVQUFSLEVBQWhCO0FBQUEsVUFDTUMsSUFBSSxHQUFHRixPQUFPLENBQUMsS0FBS04sUUFBTixDQUFQLElBQTBCLElBRHZDLENBRGdCLENBRThCOztBQUU5QyxhQUFPUSxJQUFQO0FBQ0Q7OzswQkFFS0MsSyxFQUFPSixPLEVBQVNLLFEsRUFBVTtBQUM5QixVQUFNRixJQUFJLEdBQUcsS0FBS0csUUFBTCxDQUFjTixPQUFkLENBQWI7QUFBQSxVQUNNTyxJQUFJLEdBQUlKLElBQUksS0FBSyxJQUFWLEdBQ0UsSUFERixHQUVJQSxJQUFJLENBQUNLLEtBQUwsQ0FBV1IsT0FBWCxFQUFvQkssUUFBcEIsQ0FIakI7O0FBS0EsVUFBSUUsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJILFFBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLFFBQUFBLEtBQUssZ0NBQVFBLEtBQVIsSUFBZUcsSUFBZixFQUFMO0FBQ0Q7O0FBRUQsYUFBT0gsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNSyxlQUFlLEdBQUcsS0FBS2IsU0FBTCxHQUNFSixlQURGLEdBRUksRUFGNUI7QUFBQSxVQUdNa0IsTUFBTSxhQUFNLEtBQUtmLFFBQVgsU0FBc0JjLGVBQXRCLENBSFo7QUFLQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHFGQUFtQmhCLFlBQW5CLEVBQWlDLEtBQUtDLFFBQXRDLEVBQWdELEtBQUtDLFNBQXJEO0FBQWtFOzs7O0VBNURwQ2UsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUnVsZU5hbWVQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBleGNsYW1hdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgbG9va0FoZWFkID0gZmFsc2UpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIGlzUnVsZU5hbWVQYXJ0KCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgc2V0TG9va0FoZWFkKGxvb2tBaGVhZCkge1xuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgZmluZFJ1bGUoY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBjb250ZXh0LmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmZpbmRSdWxlKGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSAocnVsZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgcnVsZS5wYXJzZShjb250ZXh0LCBjYWxsYmFjayk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlcyA9IFsgLi4ubm9kZXMsIG5vZGUgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWRTdHJpbmcgPSB0aGlzLmxvb2tBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMucnVsZU5hbWV9JHtsb29rQWhlYWRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJ1bGVOYW1lUGFydCwgdGhpcy5ydWxlTmFtZSwgdGhpcy5sb29rQWhlYWQpOyB9XG59XG4iXX0=