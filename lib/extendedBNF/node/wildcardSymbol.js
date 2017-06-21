'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WildcardPart = require('../part/wildcard'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var WildcardSymbolNode = function (_NonTerminalNode) {
  _inherits(WildcardSymbolNode, _NonTerminalNode);

  function WildcardSymbolNode() {
    _classCallCheck(this, WildcardSymbolNode);

    return _possibleConstructorReturn(this, (WildcardSymbolNode.__proto__ || Object.getPrototypeOf(WildcardSymbolNode)).apply(this, arguments));
  }

  _createClass(WildcardSymbolNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var WildcardPart = Parts['WildcardPart'],
          wildcardPart = new WildcardPart(noWhitespace);

      return wildcardPart;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, WildcardSymbolNode);
    }
  }]);

  return WildcardSymbolNode;
}(NonTerminalNode);

module.exports = WildcardSymbolNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3dpbGRjYXJkU3ltYm9sLmpzIl0sIm5hbWVzIjpbIldpbGRjYXJkUGFydCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJXaWxkY2FyZFN5bWJvbE5vZGUiLCJQYXJ0cyIsIm5vV2hpdGVzcGFjZSIsIndpbGRjYXJkUGFydCIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxrQkFBUixDQUFyQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4Qjs7SUFHTUUsa0I7Ozs7Ozs7Ozs7O2lDQUNTQyxLLEVBQU9DLFksRUFBYztBQUNoQyxVQUFNTCxlQUFlSSxNQUFNLGNBQU4sQ0FBckI7QUFBQSxVQUNNRSxlQUFlLElBQUlOLFlBQUosQ0FBaUJLLFlBQWpCLENBRHJCOztBQUdBLGFBQU9DLFlBQVA7QUFDRDs7OytDQUVpQ0MsSyxFQUFPQyxjLEVBQWdCO0FBQUUsYUFBT04sZ0JBQWdCTywwQkFBaEIsQ0FBMkNGLEtBQTNDLEVBQWtEQyxjQUFsRCxFQUFrRUwsa0JBQWxFLENBQVA7QUFBK0Y7Ozs7RUFSM0hELGU7O0FBV2pDUSxPQUFPQyxPQUFQLEdBQWlCUixrQkFBakIiLCJmaWxlIjoid2lsZGNhcmRTeW1ib2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFdpbGRjYXJkUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvd2lsZGNhcmQnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFdpbGRjYXJkU3ltYm9sTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChQYXJ0cywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgV2lsZGNhcmRQYXJ0ID0gUGFydHNbJ1dpbGRjYXJkUGFydCddLFxuICAgICAgICAgIHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiB3aWxkY2FyZFBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBXaWxkY2FyZFN5bWJvbE5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRTeW1ib2xOb2RlO1xuIl19