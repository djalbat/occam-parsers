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
                  var regExp = this.getRegExp(),
                      regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);

                  return regularExpressionPart;
            }
      }, {
            key: 'getRegExp',
            value: function getRegExp() {
                  var regExp = /^\/([^\/]+)\/$/; ///

                  var childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(regExp),
                      secondMatch = arrayUtil.second(matches),
                      pattern = secondMatch; ///

                  regExp = new RegExp(pattern);

                  return regExp;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwiTm9uVGVybWluYWxOb2RlIiwiUmVndWxhckV4cHJlc3Npb25Ob2RlIiwibm9XaGl0ZXNwYWNlIiwicmVnRXhwIiwiZ2V0UmVnRXhwIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInBhdHRlcm4iLCJSZWdFeHAiLCJub2RlcyIsInJ1bGVOYW1lIiwiZnJvbU5vZGVzQW5kUnVsZU5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsa0JBQVIsQ0FBbEI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsMkJBQVIsQ0FEOUI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsK0JBQVIsQ0FGeEI7O0lBSU1HLHFCOzs7Ozs7Ozs7Ozt5Q0FDU0MsWSxFQUFjO0FBQ3pCLHNCQUFNQyxTQUFTLEtBQUtDLFNBQUwsRUFBZjtBQUFBLHNCQUNNQyx3QkFBd0IsSUFBSU4scUJBQUosQ0FBMEJJLE1BQTFCLEVBQWtDRCxZQUFsQyxDQUQ5Qjs7QUFHQSx5QkFBT0cscUJBQVA7QUFDRDs7O3dDQUVXO0FBQ1Ysc0JBQUlGLFNBQVMsZ0JBQWIsQ0FEVSxDQUNxQjs7QUFFL0Isc0JBQU1HLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLHNCQUNNQyxpQkFBaUJYLFVBQVVZLEtBQVYsQ0FBZ0JILFVBQWhCLENBRHZCO0FBQUEsc0JBRU1JLGVBQWVGLGNBRnJCO0FBQUEsc0JBRXNDO0FBQ2hDRyx3Q0FBc0JELGFBQWFFLFVBQWIsRUFINUI7QUFBQSxzQkFJTUMsVUFBVUYsb0JBQW9CRyxLQUFwQixDQUEwQlgsTUFBMUIsQ0FKaEI7QUFBQSxzQkFLTVksY0FBY2xCLFVBQVVtQixNQUFWLENBQWlCSCxPQUFqQixDQUxwQjtBQUFBLHNCQU1NSSxVQUFVRixXQU5oQixDQUhVLENBU21COztBQUU3QlosMkJBQVMsSUFBSWUsTUFBSixDQUFXRCxPQUFYLENBQVQ7O0FBRUEseUJBQU9kLE1BQVA7QUFDRDs7O2lEQUUyQmdCLEssRUFBT0MsUSxFQUFVO0FBQUUseUJBQU9wQixnQkFBZ0JxQixvQkFBaEIsQ0FBcUNGLEtBQXJDLEVBQTRDQyxRQUE1QyxFQUFzRG5CLHFCQUF0RCxDQUFQO0FBQXNGOzs7O0VBeEJuR0QsZTs7QUEyQnBDc0IsT0FBT0MsT0FBUCxHQUFpQnRCLHFCQUFqQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IHRoaXMuZ2V0UmVnRXhwKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHAsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVnRXhwKCkge1xuICAgIGxldCByZWdFeHAgPSAvXlxcLyhbXlxcL10rKVxcLyQvOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUsIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG4iXX0=