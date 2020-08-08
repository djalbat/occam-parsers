"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _epsilon = _interopRequireDefault(require("../../../common/node/terminal/epsilon"));

var _terminal = _interopRequireDefault(require("../../part/terminal"));

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

var epsilon = _occamLexers.specialSymbols.epsilon;

var EpsilonPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(EpsilonPart, _TerminalPart);

  var _super = _createSuper(EpsilonPart);

  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);

    return _super.apply(this, arguments);
  }

  _createClass(EpsilonPart, [{
    key: "parse",
    value: function parse(nodes, context, callback) {
      var epsilonNode = _epsilon["default"].fromNothing();

      nodes = [].concat(_toConsumableArray(nodes), [epsilonNode]);
      return nodes;
    }
  }, {
    key: "isEpsilonPart",
    value: function isEpsilonPart() {
      var epsilonPart = true;
      return epsilonPart;
    }
  }, {
    key: "asString",
    value: function asString() {
      var string = epsilon; ///

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(EpsilonPart.prototype), "clone", this).call(this, EpsilonPart);
    }
  }]);

  return EpsilonPart;
}(_terminal["default"]);

exports["default"] = EpsilonPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiRXBzaWxvblBhcnQiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsImVwc2lsb25Ob2RlIiwiRXBzaWxvbk5vZGUiLCJmcm9tTm90aGluZyIsImVwc2lsb25QYXJ0Iiwic3RyaW5nIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsTyxHQUFZQywyQixDQUFaRCxPOztJQUVhRSxXOzs7Ozs7Ozs7Ozs7OzBCQUNiQyxLLEVBQU9DLE8sRUFBU0MsUSxFQUFVO0FBQzlCLFVBQU1DLFdBQVcsR0FBR0Msb0JBQVlDLFdBQVosRUFBcEI7O0FBRUFMLE1BQUFBLEtBQUssZ0NBQVFBLEtBQVIsSUFBZUcsV0FBZixFQUFMO0FBRUEsYUFBT0gsS0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTSxXQUFXLEdBQUcsSUFBcEI7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLE1BQU0sR0FBR1YsT0FBZixDQURTLENBQ2U7O0FBRXhCLGFBQU9VLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsb0ZBQW1CUixXQUFuQjtBQUFrQzs7OztFQXJCTFMsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBFcHNpbG9uTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvblwiO1xuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gRXBzaWxvbk5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIG5vZGVzID0gWyAuLi5ub2RlcywgZXBzaWxvbk5vZGUgXTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGlzRXBzaWxvblBhcnQoKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGVwc2lsb25QYXJ0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gZXBzaWxvbjsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShFcHNpbG9uUGFydCk7IH1cbn1cbiJdfQ==