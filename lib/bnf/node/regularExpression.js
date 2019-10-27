'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    RegularExpressionPart = require('../part/terminal/regularExpression');

var first = arrayUtilities.first,
    second = arrayUtilities.second;

var RegularExpressionNode = function (_NonTerminalNode) {
      _inherits(RegularExpressionNode, _NonTerminalNode);

      function RegularExpressionNode() {
            _classCallCheck(this, RegularExpressionNode);

            return _possibleConstructorReturn(this, (RegularExpressionNode.__proto__ || Object.getPrototypeOf(RegularExpressionNode)).apply(this, arguments));
      }

      _createClass(RegularExpressionNode, [{
            key: 'generatePart',
            value: function generatePart(nonWhitespace, lookAhead) {
                  var regularExpression = this.getRegularExpression(),
                      regularExpressionPart = new RegularExpressionPart(regularExpression, nonWhitespace);

                  return regularExpressionPart;
            }
      }, {
            key: 'getRegularExpression',
            value: function getRegularExpression() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(RegularExpressionNode.regularExpression),
                      secondMatch = second(matches),
                      pattern = secondMatch,
                      ///
                  regularExpression = new RegExp(pattern); ///

                  return regularExpression;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(RegularExpressionNode, ruleName, childNodes);
            }
      }]);

      return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;

RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsIm5vbldoaXRlc3BhY2UiLCJsb29rQWhlYWQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJwYXR0ZXJuIiwiUmVnRXhwIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsdUJBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsK0JBQVIsQ0FEeEI7QUFBQSxJQUVNRSx3QkFBd0JGLFFBQVEsb0NBQVIsQ0FGOUI7O0lBSVFHLEssR0FBa0JKLGMsQ0FBbEJJLEs7SUFBT0MsTSxHQUFXTCxjLENBQVhLLE07O0lBRVRDLHFCOzs7Ozs7Ozs7Ozt5Q0FDU0MsYSxFQUFlQyxTLEVBQVc7QUFDckMsc0JBQU1DLG9CQUFvQixLQUFLQyxvQkFBTCxFQUExQjtBQUFBLHNCQUNNQyx3QkFBd0IsSUFBSVIscUJBQUosQ0FBMEJNLGlCQUExQixFQUE2Q0YsYUFBN0MsQ0FEOUI7O0FBR0EseUJBQU9JLHFCQUFQO0FBQ0Q7OzttREFFc0I7QUFDckIsc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJWLE1BQU1RLFVBQU4sQ0FEdkI7QUFBQSxzQkFFTUcsZUFBZUQsY0FGckI7QUFBQSxzQkFFc0M7QUFDaENFLHdDQUFzQkQsYUFBYUUsVUFBYixFQUg1QjtBQUFBLHNCQUlNQyxVQUFVRixvQkFBb0JHLEtBQXBCLENBQTBCYixzQkFBc0JHLGlCQUFoRCxDQUpoQjtBQUFBLHNCQUtNVyxjQUFjZixPQUFPYSxPQUFQLENBTHBCO0FBQUEsc0JBTU1HLFVBQVVELFdBTmhCO0FBQUEsc0JBTTZCO0FBQ3ZCWCxzQ0FBb0IsSUFBSWEsTUFBSixDQUFXRCxPQUFYLENBUDFCLENBRHFCLENBUTJCOztBQUVoRCx5QkFBT1osaUJBQVA7QUFDRDs7O3NEQUVnQ2MsUSxFQUFVWCxVLEVBQVk7QUFBRSx5QkFBT1YsZ0JBQWdCc0IseUJBQWhCLENBQTBDbEIscUJBQTFDLEVBQWlFaUIsUUFBakUsRUFBMkVYLFVBQTNFLENBQVA7QUFBZ0c7Ozs7RUFyQnZIVixlOztBQXdCcEN1QixPQUFPQyxPQUFQLEdBQWlCcEIscUJBQWpCOztBQUVBQSxzQkFBc0JHLGlCQUF0QixHQUEwQyx3QkFBMUMiLCJmaWxlIjoicmVndWxhckV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC9yZWd1bGFyRXhwcmVzc2lvbicpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9uV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSB0aGlzLmdldFJlZ3VsYXJFeHByZXNzaW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWd1bGFyRXhwcmVzc2lvbiwgbm9uV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaChSZWd1bGFyRXhwcmVzc2lvbk5vZGUucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHBhdHRlcm4pOyAgLy8vXG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVndWxhckV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG5cblJlZ3VsYXJFeHByZXNzaW9uTm9kZS5yZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvKCg/OlxcXFwufFteXFwvXSkqKVxcLyQvO1xuIl19