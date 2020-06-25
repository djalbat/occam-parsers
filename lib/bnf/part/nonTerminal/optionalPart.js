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

var questionMark = _occamLexers.specialSymbols.questionMark;

var OptionalPartPart = /*#__PURE__*/function (_NonTerminalPart) {
  _inherits(OptionalPartPart, _NonTerminalPart);

  var _super = _createSuper(OptionalPartPart);

  function OptionalPartPart(part) {
    var _this;

    _classCallCheck(this, OptionalPartPart);

    var type = _partTypes.OptionalPartPartType; ///

    _this = _super.call(this, type);
    _this.part = part;
    return _this;
  }

  _createClass(OptionalPartPart, [{
    key: "getPart",
    value: function getPart() {
      return this.part;
    }
  }, {
    key: "parse",
    value: function parse(context) {
      var nodes = [];
      var part = this.getPart(),
          partNodeOrNodes = part.parse(context),
          parsed = partNodeOrNodes !== null;

      if (parsed) {
        nodes = partNodeOrNodes;
      }

      return nodes;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(OptionalPartPart.prototype), "clone", this).call(this, OptionalPartPart, this.part);
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = questionMark,
          ///
      partString = this.part.asString(),
          string = "".concat(partString).concat(operatorString);
      return string;
    }
  }]);

  return OptionalPartPart;
}(_nonTerminal["default"]);

exports["default"] = OptionalPartPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUGFydC5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiY29udGV4dCIsIm5vZGVzIiwiZ2V0UGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFyc2VkIiwib3BlcmF0b3JTdHJpbmciLCJwYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJzdHJpbmciLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxZLEdBQWlCQywyQixDQUFqQkQsWTs7SUFFYUUsZ0I7Ozs7O0FBQ25CLDRCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLFFBQU1DLElBQUksR0FBR0MsK0JBQWIsQ0FEZ0IsQ0FDbUI7O0FBRW5DLDhCQUFNRCxJQUFOO0FBRUEsVUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBTGdCO0FBTWpCOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQSxJQUFaO0FBQ0Q7OzswQkFFS0csTyxFQUFTO0FBQ2IsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFQSxVQUFNSixJQUFJLEdBQUcsS0FBS0ssT0FBTCxFQUFiO0FBQUEsVUFDTUMsZUFBZSxHQUFHTixJQUFJLENBQUNPLEtBQUwsQ0FBV0osT0FBWCxDQUR4QjtBQUFBLFVBRU1LLE1BQU0sR0FBSUYsZUFBZSxLQUFLLElBRnBDOztBQUlBLFVBQUlFLE1BQUosRUFBWTtBQUNWSixRQUFBQSxLQUFLLEdBQUdFLGVBQVI7QUFDRDs7QUFFRCxhQUFPRixLQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHlGQUFtQkwsZ0JBQW5CLEVBQXFDLEtBQUtDLElBQTFDO0FBQWtEOzs7K0JBRWpEO0FBQ1QsVUFBTVMsY0FBYyxHQUFHWixZQUF2QjtBQUFBLFVBQXNDO0FBQ2hDYSxNQUFBQSxVQUFVLEdBQUcsS0FBS1YsSUFBTCxDQUFVVyxRQUFWLEVBRG5CO0FBQUEsVUFFTUMsTUFBTSxhQUFNRixVQUFOLFNBQW1CRCxjQUFuQixDQUZaO0FBSUEsYUFBT0csTUFBUDtBQUNEOzs7O0VBbkMyQ0MsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT3B0aW9uYWxQYXJ0UGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQpLFxuICAgICAgICAgIHBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPcHRpb25hbFBhcnRQYXJ0LCB0aGlzLnBhcnQpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBxdWVzdGlvbk1hcmssICAvLy9cbiAgICAgICAgICBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iXX0=