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

var NonTerminalNode = require('../../common/node/nonTerminal'),
    ChoiceOfPartsPart = require('../part/nonTerminal/choiceOfParts');

var ChoiceOfPartsNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(ChoiceOfPartsNode, _NonTerminalNode);

  function ChoiceOfPartsNode() {
    _classCallCheck(this, ChoiceOfPartsNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsNode).apply(this, arguments));
  }

  _createClass(ChoiceOfPartsNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var childNodes = this.getChildNodes(),
          nodes = childNodes.slice(),
          part = ChoiceOfPartsPart.fromNodes(nodes);
      return part;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(ChoiceOfPartsNode, ruleName, childNodes);
    }
  }]);

  return ChoiceOfPartsNode;
}(NonTerminalNode);

module.exports = ChoiceOfPartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob2ljZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkNob2ljZU9mUGFydHNQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c05vZGUiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwiZnJvbU5vZGVzIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxPQUFPLENBQUMsK0JBQUQsQ0FBL0I7QUFBQSxJQUNNQyxpQkFBaUIsR0FBR0QsT0FBTyxDQUFDLG1DQUFELENBRGpDOztJQUdNRSxpQjs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLEtBQUssR0FBR0YsVUFBVSxDQUFDRyxLQUFYLEVBRGQ7QUFBQSxVQUVNQyxJQUFJLEdBQUdQLGlCQUFpQixDQUFDUSxTQUFsQixDQUE0QkgsS0FBNUIsQ0FGYjtBQUlBLGFBQU9FLElBQVA7QUFDRDs7OzhDQUVnQ0UsUSxFQUFVTixVLEVBQVk7QUFBRSxhQUFPTCxlQUFlLENBQUNZLHlCQUFoQixDQUEwQ1QsaUJBQTFDLEVBQTZEUSxRQUE3RCxFQUF1RU4sVUFBdkUsQ0FBUDtBQUE0Rjs7OztFQVR2SEwsZTs7QUFZaENhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsaUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMnKTtcblxuY2xhc3MgQ2hvaWNlT2ZQYXJ0c05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5zbGljZSgpLFxuICAgICAgICAgIHBhcnQgPSBDaG9pY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2hvaWNlT2ZQYXJ0c05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENob2ljZU9mUGFydHNOb2RlO1xuIl19