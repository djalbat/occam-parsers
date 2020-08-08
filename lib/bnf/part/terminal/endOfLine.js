"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _terminal = _interopRequireDefault(require("../../part/terminal"));

var _endOfLine = _interopRequireDefault(require("../../../common/node/terminal/endOfLine"));

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

var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;

var EndOfLinePart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(EndOfLinePart, _TerminalPart);

  var _super = _createSuper(EndOfLinePart);

  function EndOfLinePart() {
    _classCallCheck(this, EndOfLinePart);

    return _super.apply(this, arguments);
  }

  _createClass(EndOfLinePart, [{
    key: "parse",
    value: function parse(nodes, context, callback) {
      var endOfLineNode = null;
      var savedIndex = context.getSavedIndex(),
          nextSignificantToken = context.getNextSignificantToken(),
          significantToken = nextSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();

        if (significantTokenEndOfLineToken) {
          endOfLineNode = _endOfLine["default"].fromSignificantToken(significantToken);
        }
      }

      nodes = endOfLineNode === null ? null : [].concat(_toConsumableArray(nodes), [endOfLineNode]);

      if (nodes === null) {
        context.backtrack(savedIndex);
      }

      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = END_OF_LINE; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(EndOfLinePart.prototype), "clone", this).call(this, EndOfLinePart);
    }
  }]);

  return EndOfLinePart;
}(_terminal["default"]);

exports["default"] = EndOfLinePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJFTkRfT0ZfTElORSIsInNwZWNpYWxTeW1ib2xzIiwiRW5kT2ZMaW5lUGFydCIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwiZW5kT2ZMaW5lTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwiYmFja3RyYWNrIiwic3RyaW5nIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsVyxHQUFnQkMsMkIsQ0FBaEJELFc7O0lBRWFFLGE7Ozs7Ozs7Ozs7Ozs7MEJBQ2JDLEssRUFBT0MsTyxFQUFTQyxRLEVBQVU7QUFDOUIsVUFBSUMsYUFBYSxHQUFHLElBQXBCO0FBRUEsVUFBTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQVIsRUFBbkI7QUFBQSxVQUNJQyxvQkFBb0IsR0FBR0wsT0FBTyxDQUFDTSx1QkFBUixFQUQzQjtBQUFBLFVBRU1DLGdCQUFnQixHQUFHRixvQkFGekIsQ0FIOEIsQ0FLaUI7O0FBRS9DLFVBQUlFLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCLFlBQU1DLDhCQUE4QixHQUFHRCxnQkFBZ0IsQ0FBQ0UsZ0JBQWpCLEVBQXZDOztBQUVBLFlBQUlELDhCQUFKLEVBQW9DO0FBQ2xDTixVQUFBQSxhQUFhLEdBQUdRLHNCQUFjQyxvQkFBZCxDQUFtQ0osZ0JBQW5DLENBQWhCO0FBQ0Q7QUFDRjs7QUFFRFIsTUFBQUEsS0FBSyxHQUFJRyxhQUFhLEtBQUssSUFBbkIsR0FDRSxJQURGLGdDQUVTSCxLQUZULElBRWdCRyxhQUZoQixFQUFSOztBQUlBLFVBQUlILEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCQyxRQUFBQSxPQUFPLENBQUNZLFNBQVIsQ0FBa0JULFVBQWxCO0FBQ0Q7O0FBRUQsYUFBT0osS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNYyxNQUFNLEdBQUdqQixXQUFmLENBRFMsQ0FDbUI7O0FBRTVCLGFBQU9pQixNQUFQO0FBQ0Q7Ozs0QkFFTztBQUFFLHNGQUFtQmYsYUFBbkI7QUFBb0M7Ozs7RUFqQ0xnQixvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IEVuZE9mTGluZU5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBlbmRPZkxpbmVOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICBlbmRPZkxpbmVOb2RlID0gRW5kT2ZMaW5lTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlcyA9IChlbmRPZkxpbmVOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgIFsgLi4ubm9kZXMsIGVuZE9mTGluZU5vZGUgXTtcblxuICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU5EX09GX0xJTkU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lUGFydCk7IH1cbn1cbiJdfQ==