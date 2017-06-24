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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3dpbGRjYXJkLmpzIl0sIm5hbWVzIjpbIldpbGRjYXJkUGFydCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJXaWxkY2FyZE5vZGUiLCJub1doaXRlc3BhY2UiLCJ3aWxkY2FyZFBhcnQiLCJub2RlcyIsInJ1bGVOYW1lIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsa0JBQVIsQ0FBckI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7O0lBR01FLFk7Ozs7Ozs7Ozs7O2lDQUNTQyxZLEVBQWM7QUFDekIsVUFBTUMsZUFBZSxJQUFJTCxZQUFKLENBQWlCSSxZQUFqQixDQUFyQjs7QUFFQSxhQUFPQyxZQUFQO0FBQ0Q7Ozt5Q0FFMkJDLEssRUFBT0MsUSxFQUFVO0FBQUUsYUFBT0wsZ0JBQWdCTSxvQkFBaEIsQ0FBcUNGLEtBQXJDLEVBQTRDQyxRQUE1QyxFQUFzREosWUFBdEQsQ0FBUDtBQUE2RTs7OztFQVBuR0QsZTs7QUFVM0JPLE9BQU9DLE9BQVAsR0FBaUJQLFlBQWpCIiwiZmlsZSI6IndpbGRjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBXaWxkY2FyZFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3dpbGRjYXJkJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBXaWxkY2FyZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3Qgd2lsZGNhcmRQYXJ0ID0gbmV3IFdpbGRjYXJkUGFydChub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHdpbGRjYXJkUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUsIFdpbGRjYXJkTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZE5vZGU7XG4iXX0=