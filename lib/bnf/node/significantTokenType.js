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
            value: function generatePart(nonWhitespace, lookAhead) {
                  var significantTokenType = this.getSignificantTokenType(),
                      significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, nonWhitespace);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlNpZ25pZmljYW50VG9rZW5UeXBlTm9kZSIsIm5vbldoaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFNpZ25pZmljYW50VG9rZW5UeXBlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwicmVndWxhckV4cHJlc3Npb24iLCJzZWNvbmRNYXRjaCIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUsMkJBQTJCRixRQUFRLHVDQUFSLENBRmpDOztJQUlRRyxLLEdBQWtCSixjLENBQWxCSSxLO0lBQU9DLE0sR0FBV0wsYyxDQUFYSyxNOztJQUVUQyx3Qjs7Ozs7Ozs7Ozs7eUNBQ1NDLGEsRUFBZUMsUyxFQUFXO0FBQ3JDLHNCQUFNQyx1QkFBdUIsS0FBS0MsdUJBQUwsRUFBN0I7QUFBQSxzQkFDTUMsMkJBQTJCLElBQUlSLHdCQUFKLENBQTZCTSxvQkFBN0IsRUFBbURGLGFBQW5ELENBRGpDOztBQUdBLHlCQUFPSSx3QkFBUDtBQUNEOzs7c0RBRXlCO0FBQ3hCLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCVixNQUFNUSxVQUFOLENBRHZCO0FBQUEsc0JBRU1HLGVBQWVELGNBRnJCO0FBQUEsc0JBRXNDO0FBQ2hDRSx3Q0FBc0JELGFBQWFFLFVBQWIsRUFINUI7QUFBQSxzQkFJTUMsVUFBVUYsb0JBQW9CRyxLQUFwQixDQUEwQmIseUJBQXlCYyxpQkFBbkQsQ0FKaEI7QUFBQSxzQkFLTUMsY0FBY2hCLE9BQU9hLE9BQVAsQ0FMcEI7QUFBQSxzQkFNTVQsdUJBQXVCWSxXQU43QixDQUR3QixDQU9rQjs7QUFFMUMseUJBQU9aLG9CQUFQO0FBQ0Q7OztzREFFZ0NhLFEsRUFBVVYsVSxFQUFZO0FBQUUseUJBQU9WLGdCQUFnQnFCLHlCQUFoQixDQUEwQ2pCLHdCQUExQyxFQUFvRWdCLFFBQXBFLEVBQThFVixVQUE5RSxDQUFQO0FBQW1HOzs7O0VBcEJ2SFYsZTs7QUF1QnZDc0IsT0FBT0MsT0FBUCxHQUFpQm5CLHdCQUFqQjs7QUFFQUEseUJBQXlCYyxpQkFBekIsR0FBNkMsZ0JBQTdDIiwiZmlsZSI6InNpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vbldoaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5nZXRTaWduaWZpY2FudFRva2VuVHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoc2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vbldoaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhTaWduaWZpY2FudFRva2VuVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcblxuU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXFsoW15cXF1dKylcXF0kLztcbiJdfQ==