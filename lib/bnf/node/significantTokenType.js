'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypePart = require('../part/terminal/significantTokenType');

var first = arrayUtilities.first,
    second = arrayUtilities.second;

var SignificantTokenTypeNode = function (_NonTerminalNode) {
      _inherits(SignificantTokenTypeNode, _NonTerminalNode);

      function SignificantTokenTypeNode() {
            _classCallCheck(this, SignificantTokenTypeNode);

            return _possibleConstructorReturn(this, (SignificantTokenTypeNode.__proto__ || Object.getPrototypeOf(SignificantTokenTypeNode)).apply(this, arguments));
      }

      _createClass(SignificantTokenTypeNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace, lookAhead) {
                  var significantTokenType = this.getSignificantTokenType(),
                      significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace);

                  return significantTokenTypePart;
            }
      }, {
            key: 'getSignificantTokenType',
            value: function getSignificantTokenType() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(SignificantTokenTypeNode.regularExpression),
                      secondMatch = second(matches),
                      significantTokenType = secondMatch; ///

                  return significantTokenType;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(SignificantTokenTypeNode, ruleName, childNodes);
            }
      }]);

      return SignificantTokenTypeNode;
}(NonTerminalNode);

module.exports = SignificantTokenTypeNode;

SignificantTokenTypeNode.regularExpression = /^\[([^\]]+)\]$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsInNlY29uZE1hdGNoIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsdUNBQVIsQ0FGakM7O0lBSVFHLEssR0FBa0JKLGMsQ0FBbEJJLEs7SUFBT0MsTSxHQUFXTCxjLENBQVhLLE07O0lBRVRDLHdCOzs7Ozs7Ozs7Ozt5Q0FDU0MsWSxFQUFjQyxTLEVBQVc7QUFDcEMsc0JBQU1DLHVCQUF1QixLQUFLQyx1QkFBTCxFQUE3QjtBQUFBLHNCQUNNQywyQkFBMkIsSUFBSVIsd0JBQUosQ0FBNkJNLG9CQUE3QixFQUFtREYsWUFBbkQsQ0FEakM7O0FBR0EseUJBQU9JLHdCQUFQO0FBQ0Q7OztzREFFeUI7QUFDeEIsc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJWLE1BQU1RLFVBQU4sQ0FEdkI7QUFBQSxzQkFFTUcsZUFBZUQsY0FGckI7QUFBQSxzQkFFc0M7QUFDaENFLHdDQUFzQkQsYUFBYUUsVUFBYixFQUg1QjtBQUFBLHNCQUlNQyxVQUFVRixvQkFBb0JHLEtBQXBCLENBQTBCYix5QkFBeUJjLGlCQUFuRCxDQUpoQjtBQUFBLHNCQUtNQyxjQUFjaEIsT0FBT2EsT0FBUCxDQUxwQjtBQUFBLHNCQU1NVCx1QkFBdUJZLFdBTjdCLENBRHdCLENBT2tCOztBQUUxQyx5QkFBT1osb0JBQVA7QUFDRDs7O3NEQUVnQ2EsUSxFQUFVVixVLEVBQVk7QUFBRSx5QkFBT1YsZ0JBQWdCcUIseUJBQWhCLENBQTBDakIsd0JBQTFDLEVBQW9FZ0IsUUFBcEUsRUFBOEVWLFVBQTlFLENBQVA7QUFBbUc7Ozs7RUFwQnZIVixlOztBQXVCdkNzQixPQUFPQyxPQUFQLEdBQWlCbkIsd0JBQWpCOztBQUVBQSx5QkFBeUJjLGlCQUF6QixHQUE2QyxnQkFBN0MiLCJmaWxlIjoic2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IHRoaXMuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhTaWduaWZpY2FudFRva2VuVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcblxuU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXFsoW15cXF1dKylcXF0kLztcbiJdfQ==