'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var ZeroOrMorePartsNode = function (_NonTerminalNode) {
  _inherits(ZeroOrMorePartsNode, _NonTerminalNode);

  function ZeroOrMorePartsNode() {
    _classCallCheck(this, ZeroOrMorePartsNode);

    return _possibleConstructorReturn(this, (ZeroOrMorePartsNode.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsNode)).apply(this, arguments));
  }

  _createClass(ZeroOrMorePartsNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, ZeroOrMorePartsNode);
    }
  }]);

  return ZeroOrMorePartsNode;
}(NonTerminalNode);

module.exports = ZeroOrMorePartsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiWmVyb09yTW9yZVBhcnRzTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCQyxRQUFRLCtCQUFSLENBQXhCOztJQUVNQyxtQjs7Ozs7Ozs7Ozs7eUNBQ3dCQyxLLEVBQU9DLFEsRUFBVTtBQUFFLGFBQU9KLGdCQUFnQkssb0JBQWhCLENBQXFDRixLQUFyQyxFQUE0Q0MsUUFBNUMsRUFBc0RGLG1CQUF0RCxDQUFQO0FBQW9GOzs7O0VBRG5HRixlOztBQUlsQ00sT0FBT0MsT0FBUCxHQUFpQkwsbUJBQWpCIiwiZmlsZSI6Inplcm9Pck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgWmVyb09yTW9yZVBhcnRzTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUsIFplcm9Pck1vcmVQYXJ0c05vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzTm9kZTtcbiJdfQ==