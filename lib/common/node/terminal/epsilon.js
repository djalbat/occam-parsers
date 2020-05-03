"use strict";

var _occamLexers = require("occam-lexers");

var _terminal = _interopRequireDefault(require("../terminal"));

var _epsilonNode = _interopRequireDefault(require("../../parseTree/epsilonNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var epsilon = _occamLexers.specialSymbols.epsilon;

var EpsilonNode = /*#__PURE__*/function (_TerminalNode) {
  _inherits(EpsilonNode, _TerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNode).apply(this, arguments));
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

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiRXBzaWxvbk5vZGUiLCJjb250ZW50IiwiZXBzaWxvbk5vZGUiLCJ0b2tlbnMiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSIsIkVwc2lsb25Ob2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJzaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxPLEdBQVlDLDJCLENBQVpELE87O0lBRUZFLFc7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsT0FBTyxHQUFHSCxPQUFoQixDQURXLENBQ2U7O0FBRTFCLGFBQU9HLE9BQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBRUEsYUFBT0EsV0FBUDtBQUNEOzs7Z0NBRVdDLE0sRUFBUTtBQUNsQixVQUFNQyxvQkFBb0IsR0FBR0Msd0JBQXFCQyxXQUFyQixFQUE3QjtBQUFBLFVBQ01DLFNBQVMsR0FBR0gsb0JBRGxCLENBRGtCLENBRXVCOzs7QUFFekMsYUFBT0csU0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1DLGdCQUFnQixHQUFHLElBQXpCO0FBQUEsVUFDTU4sV0FBVyxHQUFHTyxxQkFBYUMsb0JBQWIsQ0FBa0NWLFdBQWxDLEVBQStDUSxnQkFBL0MsQ0FEcEI7O0FBR0EsYUFBT04sV0FBUDtBQUNEOzs7O0VBekJ1Qk8sb0I7O0FBNEIxQkUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFcHNpbG9uTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL2Vwc2lsb25Ob2RlXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25Ob2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgZXBzaWxvbk5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRXBzaWxvbk5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvbk5vZGU7XG4iXX0=