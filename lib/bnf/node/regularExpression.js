'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    RegularExpressionPart = require('../part/regularExpression'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RegularExpressionNode = function (_NonTerminalNode) {
      _inherits(RegularExpressionNode, _NonTerminalNode);

      function RegularExpressionNode() {
            _classCallCheck(this, RegularExpressionNode);

            return _possibleConstructorReturn(this, (RegularExpressionNode.__proto__ || Object.getPrototypeOf(RegularExpressionNode)).apply(this, arguments));
      }

      _createClass(RegularExpressionNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var regularExpression = this.getRegularExpression(),
                      regularExpressionPart = new RegularExpressionPart(regularExpression, noWhitespace);

                  return regularExpressionPart;
            }
      }, {
            key: 'getRegularExpression',
            value: function getRegularExpression() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(RegularExpressionNode.regularExpression),
                      secondMatch = arrayUtil.second(matches),
                      pattern = secondMatch,
                      ///
                  regularExpression = new RegExp(pattern); ///

                  return regularExpression;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, RegularExpressionNode);
            }
      }]);

      return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;

RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwiTm9uVGVybWluYWxOb2RlIiwiUmVndWxhckV4cHJlc3Npb25Ob2RlIiwibm9XaGl0ZXNwYWNlIiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJwYXR0ZXJuIiwiUmVnRXhwIiwibm9kZXMiLCJydWxlTmFtZSIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsd0JBQXdCRCxRQUFRLDJCQUFSLENBRDlCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlNRyxxQjs7Ozs7Ozs7Ozs7eUNBQ1NDLFksRUFBYztBQUN6QixzQkFBTUMsb0JBQW9CLEtBQUtDLG9CQUFMLEVBQTFCO0FBQUEsc0JBQ01DLHdCQUF3QixJQUFJTixxQkFBSixDQUEwQkksaUJBQTFCLEVBQTZDRCxZQUE3QyxDQUQ5Qjs7QUFHQSx5QkFBT0cscUJBQVA7QUFDRDs7O21EQUVzQjtBQUNyQixzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQlgsVUFBVVksS0FBVixDQUFnQkgsVUFBaEIsQ0FEdkI7QUFBQSxzQkFFTUksZUFBZUYsY0FGckI7QUFBQSxzQkFFc0M7QUFDaENHLHdDQUFzQkQsYUFBYUUsVUFBYixFQUg1QjtBQUFBLHNCQUlNQyxVQUFVRixvQkFBb0JHLEtBQXBCLENBQTBCYixzQkFBc0JFLGlCQUFoRCxDQUpoQjtBQUFBLHNCQUtNWSxjQUFjbEIsVUFBVW1CLE1BQVYsQ0FBaUJILE9BQWpCLENBTHBCO0FBQUEsc0JBTU1JLFVBQVVGLFdBTmhCO0FBQUEsc0JBTTZCO0FBQ3ZCWixzQ0FBb0IsSUFBSWUsTUFBSixDQUFXRCxPQUFYLENBUDFCLENBRHFCLENBUTJCOztBQUVoRCx5QkFBT2QsaUJBQVA7QUFDRDs7O2lEQUUyQmdCLEssRUFBT0MsUSxFQUFVO0FBQUUseUJBQU9wQixnQkFBZ0JxQixvQkFBaEIsQ0FBcUNGLEtBQXJDLEVBQTRDQyxRQUE1QyxFQUFzRG5CLHFCQUF0RCxDQUFQO0FBQXNGOzs7O0VBckJuR0QsZTs7QUF3QnBDc0IsT0FBT0MsT0FBUCxHQUFpQnRCLHFCQUFqQjs7QUFFQUEsc0JBQXNCRSxpQkFBdEIsR0FBMEMsd0JBQTFDIiwiZmlsZSI6InJlZ3VsYXJFeHByZXNzaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSB0aGlzLmdldFJlZ3VsYXJFeHByZXNzaW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWd1bGFyRXhwcmVzc2lvbiwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaChSZWd1bGFyRXhwcmVzc2lvbk5vZGUucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gYXJyYXlVdGlsLnNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSwgUmVndWxhckV4cHJlc3Npb25Ob2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uTm9kZTtcblxuUmVndWxhckV4cHJlc3Npb25Ob2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC8oKD86XFxcXC58W15cXC9dKSopXFwvJC87XG4iXX0=