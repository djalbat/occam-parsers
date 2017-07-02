'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WildcardPart = require('../part/wildcard'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var WildcardNode = function (_NonTerminalNode) {
  _inherits(WildcardNode, _NonTerminalNode);

  function WildcardNode() {
    _classCallCheck(this, WildcardNode);

    return _possibleConstructorReturn(this, (WildcardNode.__proto__ || Object.getPrototypeOf(WildcardNode)).apply(this, arguments));
  }

  _createClass(WildcardNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace) {
      var wildcardPart = new WildcardPart(noWhitespace);

      return wildcardPart;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, WildcardNode);
    }
  }]);

  return WildcardNode;
}(NonTerminalNode);

module.exports = WildcardNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS93aWxkY2FyZC5qcyJdLCJuYW1lcyI6WyJXaWxkY2FyZFBhcnQiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiV2lsZGNhcmROb2RlIiwibm9XaGl0ZXNwYWNlIiwid2lsZGNhcmRQYXJ0Iiwibm9kZXMiLCJydWxlTmFtZSIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGtCQUFSLENBQXJCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxZOzs7Ozs7Ozs7OztpQ0FDU0MsWSxFQUFjO0FBQ3pCLFVBQU1DLGVBQWUsSUFBSUwsWUFBSixDQUFpQkksWUFBakIsQ0FBckI7O0FBRUEsYUFBT0MsWUFBUDtBQUNEOzs7eUNBRTJCQyxLLEVBQU9DLFEsRUFBVTtBQUFFLGFBQU9MLGdCQUFnQk0sb0JBQWhCLENBQXFDRixLQUFyQyxFQUE0Q0MsUUFBNUMsRUFBc0RKLFlBQXRELENBQVA7QUFBNkU7Ozs7RUFQbkdELGU7O0FBVTNCTyxPQUFPQyxPQUFQLEdBQWlCUCxZQUFqQiIsImZpbGUiOiJ3aWxkY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgV2lsZGNhcmRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC93aWxkY2FyZCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgV2lsZGNhcmROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiB3aWxkY2FyZFBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lLCBXaWxkY2FyZE5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmROb2RlO1xuIl19