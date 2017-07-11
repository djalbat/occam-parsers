'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var TransparentFirstChildNode = function (_NonTerminalNode) {
      _inherits(TransparentFirstChildNode, _NonTerminalNode);

      function TransparentFirstChildNode() {
            _classCallCheck(this, TransparentFirstChildNode);

            return _possibleConstructorReturn(this, (TransparentFirstChildNode.__proto__ || Object.getPrototypeOf(TransparentFirstChildNode)).apply(this, arguments));
      }

      _createClass(TransparentFirstChildNode, null, [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  var firstNode = arrayUtil.first(nodes),
                      childNodes = firstNode.getChildNodes(),
                      transparentFirstChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, TransparentFirstChildNode);

                  return transparentFirstChildNode;
            }
      }]);

      return TransparentFirstChildNode;
}(NonTerminalNode);

module.exports = TransparentFirstChildNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudEZpcnN0Q2hpbGROb2RlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJUcmFuc3BhcmVudEZpcnN0Q2hpbGROb2RlIiwibm9kZXMiLCJydWxlTmFtZSIsImZpcnN0Tm9kZSIsImZpcnN0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJ0cmFuc3BhcmVudEZpcnN0Q2hpbGROb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxxQkFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxnQkFBUixDQUR4Qjs7SUFHTUUseUI7Ozs7Ozs7Ozs7O2lEQUN3QkMsSyxFQUFPQyxRLEVBQVU7QUFDM0Msc0JBQU1DLFlBQVlOLFVBQVVPLEtBQVYsQ0FBZ0JILEtBQWhCLENBQWxCO0FBQUEsc0JBQ01JLGFBQWFGLFVBQVVHLGFBQVYsRUFEbkI7QUFBQSxzQkFFTUMsNEJBQTRCUixnQkFBZ0JTLHlCQUFoQixDQUEwQ04sUUFBMUMsRUFBb0RHLFVBQXBELEVBQWdFTCx5QkFBaEUsQ0FGbEM7O0FBSUEseUJBQU9PLHlCQUFQO0FBQ0Q7Ozs7RUFQcUNSLGU7O0FBVXhDVSxPQUFPQyxPQUFQLEdBQWlCVix5QkFBakIiLCJmaWxlIjoidHJhbnNwYXJlbnRGaXJzdENoaWxkTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRGaXJzdENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBmaXJzdE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHRyYW5zcGFyZW50Rmlyc3RDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgVHJhbnNwYXJlbnRGaXJzdENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4gdHJhbnNwYXJlbnRGaXJzdENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50Rmlyc3RDaGlsZE5vZGU7XG4iXX0=