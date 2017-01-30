'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('./nonTerminal');

var DiscardSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardSecondChildNode, _NonTerminalNode);

  function DiscardSecondChildNode() {
    _classCallCheck(this, DiscardSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardSecondChildNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromChildNodesAndProductionName(childNodes, productionName, DiscardSecondChildNode);

      nodes = [discardSecondChildNode]; ///

      return nodes;
    }
  }]);

  return DiscardSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardSecondChildNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9kaXNjYXJkU2Vjb25kQ2hpbGQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpc2NhcmRTZWNvbmRDaGlsZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsImRpc2NhcmRTZWNvbmQiLCJkaXNjYXJkU2Vjb25kQ2hpbGROb2RlIiwiZnJvbUNoaWxkTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxpQkFBUixDQUFoQjtBQUFBLElBQ0lDLGtCQUFrQkQsUUFBUSxlQUFSLENBRHRCOztJQUdNRSxzQjs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxhQUFhTixVQUFVTyxhQUFWLENBQXdCSCxLQUF4QixDQUFqQjtBQUFBLFVBQ0lJLHlCQUF5Qk4sZ0JBQWdCTywrQkFBaEIsQ0FBZ0RILFVBQWhELEVBQTRERCxjQUE1RCxFQUE0RUYsc0JBQTVFLENBRDdCOztBQUdBQyxjQUFRLENBQUNJLHNCQUFELENBQVIsQ0FKc0MsQ0FJSjs7QUFFbEMsYUFBT0osS0FBUDtBQUNEOzs7O0VBUmtDRixlOztBQVdyQ1EsT0FBT0MsT0FBUCxHQUFpQlIsc0JBQWpCIiwiZmlsZSI6ImRpc2NhcmRTZWNvbmRDaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpLFxuICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZFNlY29uZChub2RlcyksXG4gICAgICAgIGRpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbUNoaWxkTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgRGlzY2FyZFNlY29uZENoaWxkTm9kZSk7XG5cbiAgICBub2RlcyA9IFtkaXNjYXJkU2Vjb25kQ2hpbGROb2RlXTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlO1xuIl19