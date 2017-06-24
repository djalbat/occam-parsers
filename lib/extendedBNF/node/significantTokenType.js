'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    SignificantTokenTypePart = require('../part/significantTokenType'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var SignificantTokenTypeNode = function (_NonTerminalNode) {
      _inherits(SignificantTokenTypeNode, _NonTerminalNode);

      function SignificantTokenTypeNode() {
            _classCallCheck(this, SignificantTokenTypeNode);

            return _possibleConstructorReturn(this, (SignificantTokenTypeNode.__proto__ || Object.getPrototypeOf(SignificantTokenTypeNode)).apply(this, arguments));
      }

      _createClass(SignificantTokenTypeNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var significantTokenType = this.getSignificantTokenType(),
                      significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace);

                  return significantTokenTypePart;
            }
      }, {
            key: 'getSignificantTokenType',
            value: function getSignificantTokenType() {
                  var regExp = /^\[([^\]]+)\]$/,
                      childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(regExp),
                      secondMatch = arrayUtil.second(matches),
                      significantTokenType = secondMatch; ///

                  return significantTokenType;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, SignificantTokenTypeNode);
            }
      }]);

      return SignificantTokenTypeNode;
}(NonTerminalNode);

module.exports = SignificantTokenTypeNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJOb25UZXJtaW5hbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZU5vZGUiLCJub1doaXRlc3BhY2UiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwicmVnRXhwIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsIm5vZGVzIiwicnVsZU5hbWUiLCJmcm9tTm9kZXNBbmRSdWxlTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLDJCQUEyQkQsUUFBUSw4QkFBUixDQURqQztBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcsd0I7Ozs7Ozs7Ozs7O3lDQUNTQyxZLEVBQWM7QUFDekIsc0JBQU1DLHVCQUF1QixLQUFLQyx1QkFBTCxFQUE3QjtBQUFBLHNCQUNNQywyQkFBMkIsSUFBSU4sd0JBQUosQ0FBNkJJLG9CQUE3QixFQUFtREQsWUFBbkQsQ0FEakM7O0FBR0EseUJBQU9HLHdCQUFQO0FBQ0Q7OztzREFFeUI7QUFDeEIsc0JBQU1DLFNBQVMsZ0JBQWY7QUFBQSxzQkFDTUMsYUFBYSxLQUFLQyxhQUFMLEVBRG5CO0FBQUEsc0JBRU1DLGlCQUFpQlosVUFBVWEsS0FBVixDQUFnQkgsVUFBaEIsQ0FGdkI7QUFBQSxzQkFHTUksZUFBZUYsY0FIckI7QUFBQSxzQkFHc0M7QUFDaENHLHdDQUFzQkQsYUFBYUUsVUFBYixFQUo1QjtBQUFBLHNCQUtNQyxVQUFVRixvQkFBb0JHLEtBQXBCLENBQTBCVCxNQUExQixDQUxoQjtBQUFBLHNCQU1NVSxjQUFjbkIsVUFBVW9CLE1BQVYsQ0FBaUJILE9BQWpCLENBTnBCO0FBQUEsc0JBT01YLHVCQUF1QmEsV0FQN0IsQ0FEd0IsQ0FRa0I7O0FBRTFDLHlCQUFPYixvQkFBUDtBQUNEOzs7aURBRTJCZSxLLEVBQU9DLFEsRUFBVTtBQUFFLHlCQUFPbkIsZ0JBQWdCb0Isb0JBQWhCLENBQXFDRixLQUFyQyxFQUE0Q0MsUUFBNUMsRUFBc0RsQix3QkFBdEQsQ0FBUDtBQUF5Rjs7OztFQXJCbkdELGU7O0FBd0J2Q3FCLE9BQU9DLE9BQVAsR0FBaUJyQix3QkFBakIiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IHRoaXMuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFxbKFteXFxdXSspXFxdJC8sXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IGFycmF5VXRpbC5zZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lLCBTaWduaWZpY2FudFRva2VuVHlwZU5vZGUpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlO1xuIl19