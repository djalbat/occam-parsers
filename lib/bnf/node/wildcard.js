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
    WildcardPart = require('../part/terminal/wildcard');

var WildcardNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(WildcardNode, _NonTerminalNode);

  function WildcardNode() {
    _classCallCheck(this, WildcardNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(WildcardNode).apply(this, arguments));
  }

  _createClass(WildcardNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var wildcardPart = new WildcardPart();
      return wildcardPart;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(WildcardNode, ruleName, childNodes);
    }
  }]);

  return WildcardNode;
}(NonTerminalNode);

module.exports = WildcardNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbGRjYXJkLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJXaWxkY2FyZFBhcnQiLCJXaWxkY2FyZE5vZGUiLCJsb29rQWhlYWQiLCJ3aWxkY2FyZFBhcnQiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxPQUFPLENBQUMsK0JBQUQsQ0FBL0I7QUFBQSxJQUNNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQywyQkFBRCxDQUQ1Qjs7SUFHTUUsWTs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxZQUFZLEdBQUcsSUFBSUgsWUFBSixFQUFyQjtBQUVBLGFBQU9HLFlBQVA7QUFDRDs7OzhDQUVnQ0MsUSxFQUFVQyxVLEVBQVk7QUFBRSxhQUFPUCxlQUFlLENBQUNRLHlCQUFoQixDQUEwQ0wsWUFBMUMsRUFBd0RHLFFBQXhELEVBQWtFQyxVQUFsRSxDQUFQO0FBQXVGOzs7O0VBUHZIUCxlOztBQVUzQlMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUCxZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFdpbGRjYXJkUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvd2lsZGNhcmQnKTtcblxuY2xhc3MgV2lsZGNhcmROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQoKTtcblxuICAgIHJldHVybiB3aWxkY2FyZFBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoV2lsZGNhcmROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZE5vZGU7XG4iXX0=