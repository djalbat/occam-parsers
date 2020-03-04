'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EpsilonPart = require('../part/terminal/epsilon'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EpsilonNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(EpsilonNode, _NonTerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNode).apply(this, arguments));
  }

  _createClass(EpsilonNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var epsilonPart = new EpsilonPart();
      return epsilonPart;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(EpsilonNode, ruleName, childNodes);
    }
  }]);

  return EpsilonNode;
}(NonTerminalNode);

module.exports = EpsilonNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsiRXBzaWxvblBhcnQiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRXBzaWxvbk5vZGUiLCJsb29rQWhlYWQiLCJlcHNpbG9uUGFydCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQywwQkFBRCxDQUEzQjtBQUFBLElBQ01DLGVBQWUsR0FBR0QsT0FBTyxDQUFDLCtCQUFELENBRC9COztJQUdNRSxXOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQU1DLFdBQVcsR0FBRyxJQUFJTCxXQUFKLEVBQXBCO0FBRUEsYUFBT0ssV0FBUDtBQUNEOzs7OENBRWdDQyxRLEVBQVVDLFUsRUFBWTtBQUFFLGFBQU9MLGVBQWUsQ0FBQ00seUJBQWhCLENBQTBDTCxXQUExQyxFQUF1REcsUUFBdkQsRUFBaUVDLFVBQWpFLENBQVA7QUFBc0Y7Ozs7RUFQdkhMLGU7O0FBVTFCTyxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvZXBzaWxvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRXBzaWxvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKTtcblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhFcHNpbG9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvbk5vZGU7XG4iXX0=