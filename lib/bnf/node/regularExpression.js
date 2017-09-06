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
            value: function generatePart(noWhitespace) {
                  var regularExpression = this.getRegularExpression(),
                      regularExpressionPart = new RegularExpressionPart(regularExpression, noWhitespace);

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
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(RegularExpressionNode, nodes, ruleName);
            }
      }]);

      return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;

RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsIm5vV2hpdGVzcGFjZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJub2RlcyIsInJ1bGVOYW1lIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLHdCQUF3QkYsUUFBUSxvQ0FBUixDQUY5Qjs7SUFJUUcsSyxHQUFrQkosYyxDQUFsQkksSztJQUFPQyxNLEdBQVdMLGMsQ0FBWEssTTs7SUFFVEMscUI7Ozs7Ozs7Ozs7O3lDQUNTQyxZLEVBQWM7QUFDekIsc0JBQU1DLG9CQUFvQixLQUFLQyxvQkFBTCxFQUExQjtBQUFBLHNCQUNNQyx3QkFBd0IsSUFBSVAscUJBQUosQ0FBMEJLLGlCQUExQixFQUE2Q0QsWUFBN0MsQ0FEOUI7O0FBR0EseUJBQU9HLHFCQUFQO0FBQ0Q7OzttREFFc0I7QUFDckIsc0JBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJULE1BQU1PLFVBQU4sQ0FEdkI7QUFBQSxzQkFFTUcsZUFBZUQsY0FGckI7QUFBQSxzQkFFc0M7QUFDaENFLHdDQUFzQkQsYUFBYUUsVUFBYixFQUg1QjtBQUFBLHNCQUlNQyxVQUFVRixvQkFBb0JHLEtBQXBCLENBQTBCWixzQkFBc0JFLGlCQUFoRCxDQUpoQjtBQUFBLHNCQUtNVyxjQUFjZCxPQUFPWSxPQUFQLENBTHBCO0FBQUEsc0JBTU1HLFVBQVVELFdBTmhCO0FBQUEsc0JBTTZCO0FBQ3ZCWCxzQ0FBb0IsSUFBSWEsTUFBSixDQUFXRCxPQUFYLENBUDFCLENBRHFCLENBUTJCOztBQUVoRCx5QkFBT1osaUJBQVA7QUFDRDs7O2lEQUUyQmMsSyxFQUFPQyxRLEVBQVU7QUFBRSx5QkFBT3JCLGdCQUFnQnNCLG9CQUFoQixDQUFxQ2xCLHFCQUFyQyxFQUE0RGdCLEtBQTVELEVBQW1FQyxRQUFuRSxDQUFQO0FBQXNGOzs7O0VBckJuR3JCLGU7O0FBd0JwQ3VCLE9BQU9DLE9BQVAsR0FBaUJwQixxQkFBakI7O0FBRUFBLHNCQUFzQkUsaUJBQXRCLEdBQTBDLHdCQUExQyIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IHRoaXMuZ2V0UmVndWxhckV4cHJlc3Npb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ3VsYXJFeHByZXNzaW9uLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiAgfVxuXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goUmVndWxhckV4cHJlc3Npb25Ob2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKFJlZ3VsYXJFeHByZXNzaW9uTm9kZSwgbm9kZXMsIHJ1bGVOYW1lKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uTm9kZTtcblxuUmVndWxhckV4cHJlc3Npb25Ob2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC8oKD86XFxcXC58W15cXC9dKSopXFwvJC87XG4iXX0=