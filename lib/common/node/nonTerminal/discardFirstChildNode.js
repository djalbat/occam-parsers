'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardFirstChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFirstChildNode, _NonTerminalNode);

  function DiscardFirstChildNode() {
    _classCallCheck(this, DiscardFirstChildNode);

    return _possibleConstructorReturn(this, (DiscardFirstChildNode.__proto__ || Object.getPrototypeOf(DiscardFirstChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFirstChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardFirst(nodes),
          ///
      discardFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardFirstChildNode);

      return discardFirstChildNode;
    }
  }]);

  return DiscardFirstChildNode;
}(NonTerminalNode);

module.exports = DiscardFirstChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkRmlyc3RDaGlsZE5vZGUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkRpc2NhcmRGaXJzdENoaWxkTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiZGlzY2FyZEZpcnN0IiwiZGlzY2FyZEZpcnN0Q2hpbGROb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxxQkFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHTUUscUI7Ozs7Ozs7Ozs7O3lDQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0MsVUFBTUMsYUFBYU4sVUFBVU8sWUFBVixDQUF1QkgsS0FBdkIsQ0FBbkI7QUFBQSxVQUFrRDtBQUM1Q0ksOEJBQXdCTixnQkFBZ0JPLHlCQUFoQixDQUEwQ0osUUFBMUMsRUFBb0RDLFVBQXBELEVBQWdFSCxxQkFBaEUsQ0FEOUI7O0FBR0EsYUFBT0sscUJBQVA7QUFDRDs7OztFQU5pQ04sZTs7QUFTcENRLE9BQU9DLE9BQVAsR0FBaUJSLHFCQUFqQiIsImZpbGUiOiJkaXNjYXJkRmlyc3RDaGlsZE5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaXJzdChub2RlcyksIC8vL1xuICAgICAgICAgIGRpc2NhcmRGaXJzdENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBEaXNjYXJkRmlyc3RDaGlsZE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpc2NhcmRGaXJzdENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRGaXJzdENoaWxkTm9kZTtcbiJdfQ==