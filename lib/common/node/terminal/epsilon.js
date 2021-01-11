"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _terminal = _interopRequireDefault(require("../terminal"));

var _epsilonNode = _interopRequireDefault(require("../../parseTree/epsilonNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var epsilon = _occamLexers.specialSymbols.epsilon;

var EpsilonNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(EpsilonNode, _TerminalNode);

  var _super = _createSuper(EpsilonNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    return _super.apply(this, arguments);
  }

  _createClass(EpsilonNode, [{
    key: "getContent",
    value: function getContent() {
      var content = epsilon; ///

      return content;
    }
  }, {
    key: "isEpsilonNode",
    value: function isEpsilonNode() {
      var epsilonNode = true;
      return epsilonNode;
    }
  }, {
    key: "asParseTree",
    value: function asParseTree(tokens) {
      var epsilonNodeParseTree = _epsilonNode["default"].fromNothing(),
          parseTree = epsilonNodeParseTree; ///


      return parseTree;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var significantToken = null,
          epsilonNode = _terminal["default"].fromSignificantToken(EpsilonNode, significantToken);

      return epsilonNode;
    }
  }]);

  return EpsilonNode;
}(_terminal["default"]);

exports["default"] = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiRXBzaWxvbk5vZGUiLCJjb250ZW50IiwiZXBzaWxvbk5vZGUiLCJ0b2tlbnMiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSIsIkVwc2lsb25Ob2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJzaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLE8sR0FBWUMsMkIsQ0FBWkQsTzs7SUFFYUUsVzs7Ozs7Ozs7Ozs7OztpQ0FDTjtBQUNYLFVBQU1DLE9BQU8sR0FBR0gsT0FBaEIsQ0FEVyxDQUNlOztBQUUxQixhQUFPRyxPQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLFdBQVcsR0FBRyxJQUFwQjtBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O2dDQUVXQyxNLEVBQVE7QUFDbEIsVUFBTUMsb0JBQW9CLEdBQUdDLHdCQUFxQkMsV0FBckIsRUFBN0I7QUFBQSxVQUNNQyxTQUFTLEdBQUdILG9CQURsQixDQURrQixDQUV1Qjs7O0FBRXpDLGFBQU9HLFNBQVA7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNQyxnQkFBZ0IsR0FBRyxJQUF6QjtBQUFBLFVBQ01OLFdBQVcsR0FBR08scUJBQWFDLG9CQUFiLENBQWtDVixXQUFsQyxFQUErQ1EsZ0JBQS9DLENBRHBCOztBQUdBLGFBQU9OLFdBQVA7QUFDRDs7OztFQXpCc0NPLG9CIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IEVwc2lsb25Ob2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZXBzaWxvbk5vZGVcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbk5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlcHNpbG9uOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlUGFyc2VUcmVlID0gRXBzaWxvbk5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBlcHNpbG9uTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgICBlcHNpbG9uTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihFcHNpbG9uTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cbn1cbiJdfQ==