'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal'),
    WildcardPart = require('../part/terminal/wildcard');

var WildcardNode = function (_NonTerminalNode) {
  _inherits(WildcardNode, _NonTerminalNode);

  function WildcardNode() {
    _classCallCheck(this, WildcardNode);

    return _possibleConstructorReturn(this, (WildcardNode.__proto__ || Object.getPrototypeOf(WildcardNode)).apply(this, arguments));
  }

  _createClass(WildcardNode, [{
    key: 'generatePart',
    value: function generatePart(nonWhitespace, lookAhead) {
      var wildcardPart = new WildcardPart(nonWhitespace);

      return wildcardPart;
    }
  }], [{
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(WildcardNode, ruleName, childNodes);
    }
  }]);

  return WildcardNode;
}(NonTerminalNode);

module.exports = WildcardNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS93aWxkY2FyZC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiV2lsZGNhcmRQYXJ0IiwiV2lsZGNhcmROb2RlIiwibm9uV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsIndpbGRjYXJkUGFydCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGtCQUFrQkMsUUFBUSwrQkFBUixDQUF4QjtBQUFBLElBQ01DLGVBQWVELFFBQVEsMkJBQVIsQ0FEckI7O0lBR01FLFk7Ozs7Ozs7Ozs7O2lDQUNTQyxhLEVBQWVDLFMsRUFBVztBQUNyQyxVQUFNQyxlQUFlLElBQUlKLFlBQUosQ0FBaUJFLGFBQWpCLENBQXJCOztBQUVBLGFBQU9FLFlBQVA7QUFDRDs7OzhDQUVnQ0MsUSxFQUFVQyxVLEVBQVk7QUFBRSxhQUFPUixnQkFBZ0JTLHlCQUFoQixDQUEwQ04sWUFBMUMsRUFBd0RJLFFBQXhELEVBQWtFQyxVQUFsRSxDQUFQO0FBQXVGOzs7O0VBUHZIUixlOztBQVUzQlUsT0FBT0MsT0FBUCxHQUFpQlIsWUFBakIiLCJmaWxlIjoid2lsZGNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBXaWxkY2FyZFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3dpbGRjYXJkJyk7XG5cbmNsYXNzIFdpbGRjYXJkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub25XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCB3aWxkY2FyZFBhcnQgPSBuZXcgV2lsZGNhcmRQYXJ0KG5vbldoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHdpbGRjYXJkUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhXaWxkY2FyZE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbGRjYXJkTm9kZTtcbiJdfQ==