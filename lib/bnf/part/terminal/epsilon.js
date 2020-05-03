"use strict";

var _occamLexers = require("occam-lexers");

var _epsilon = _interopRequireDefault(require("../../../common/node/terminal/epsilon"));

var _terminal = _interopRequireDefault(require("../../part/terminal"));

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

var epsilon = _occamLexers.specialSymbols.epsilon;

var EpsilonPart = /*#__PURE__*/function (_TerminalPart) {
  _inherits(EpsilonPart, _TerminalPart);

  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonPart).apply(this, arguments));
  }

  _createClass(EpsilonPart, [{
    key: "parse",
    value: function parse(configuration) {
      var epsilonNode = _epsilon["default"].fromNothing();

      return epsilonNode;
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

module.exports = EpsilonPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiRXBzaWxvblBhcnQiLCJjb25maWd1cmF0aW9uIiwiZXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsImZyb21Ob3RoaW5nIiwiZXBzaWxvblBhcnQiLCJzdHJpbmciLCJUZXJtaW5hbFBhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsTyxHQUFZQywyQixDQUFaRCxPOztJQUVGRSxXOzs7Ozs7Ozs7OzswQkFDRUMsYSxFQUFlO0FBQ25CLFVBQU1DLFdBQVcsR0FBR0Msb0JBQVlDLFdBQVosRUFBcEI7O0FBRUEsYUFBT0YsV0FBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxXQUFXLEdBQUcsSUFBcEI7QUFFQSxhQUFPQSxXQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLE1BQU0sR0FBR1IsT0FBZixDQURTLENBQ2U7O0FBRXhCLGFBQU9RLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsb0ZBQW1CTixXQUFuQjtBQUFrQzs7OztFQW5CcEJPLG9COztBQXNCMUJDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsV0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBFcHNpbG9uTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvblwiO1xuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFcHNpbG9uUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IEVwc2lsb25Ob2RlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBpc0Vwc2lsb25QYXJ0KCkge1xuICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGVwc2lsb247IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoRXBzaWxvblBhcnQpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblBhcnQ7XG4iXX0=