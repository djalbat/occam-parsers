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
            key: 'fromNodesAndProductionName',
            value: function fromNodesAndProductionName(nodes, productionName) {
                  return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, RegularExpressionNode);
            }
      }]);

      return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWd1bGFyRXhwcmVzc2lvbk5vZGUiLCJub1doaXRlc3BhY2UiLCJyZWdFeHAiLCJnZXRSZWdFeHAiLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwicGF0dGVybiIsIlJlZ0V4cCIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjtBQUFBLElBQ01DLHdCQUF3QkQsUUFBUSwyQkFBUixDQUQ5QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSwrQkFBUixDQUZ4Qjs7SUFJTUcscUI7Ozs7Ozs7Ozs7O3lDQUNTQyxZLEVBQWM7QUFDekIsc0JBQU1DLFNBQVMsS0FBS0MsU0FBTCxFQUFmO0FBQUEsc0JBQ01DLHdCQUF3QixJQUFJTixxQkFBSixDQUEwQkksTUFBMUIsRUFBa0NELFlBQWxDLENBRDlCOztBQUdBLHlCQUFPRyxxQkFBUDtBQUNEOzs7d0NBRVc7QUFDVixzQkFBSUYsU0FBUyxnQkFBYixDQURVLENBQ3FCOztBQUUvQixzQkFBTUcsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQlgsVUFBVVksS0FBVixDQUFnQkgsVUFBaEIsQ0FEdkI7QUFBQSxzQkFFTUksZUFBZUYsY0FGckI7QUFBQSxzQkFFc0M7QUFDaENHLHdDQUFzQkQsYUFBYUUsVUFBYixFQUg1QjtBQUFBLHNCQUlNQyxVQUFVRixvQkFBb0JHLEtBQXBCLENBQTBCWCxNQUExQixDQUpoQjtBQUFBLHNCQUtNWSxjQUFjbEIsVUFBVW1CLE1BQVYsQ0FBaUJILE9BQWpCLENBTHBCO0FBQUEsc0JBTU1JLFVBQVVGLFdBTmhCLENBSFUsQ0FTbUI7O0FBRTdCWiwyQkFBUyxJQUFJZSxNQUFKLENBQVdELE9BQVgsQ0FBVDs7QUFFQSx5QkFBT2QsTUFBUDtBQUNEOzs7dURBRWlDZ0IsSyxFQUFPQyxjLEVBQWdCO0FBQUUseUJBQU9wQixnQkFBZ0JxQiwwQkFBaEIsQ0FBMkNGLEtBQTNDLEVBQWtEQyxjQUFsRCxFQUFrRW5CLHFCQUFsRSxDQUFQO0FBQWtHOzs7O0VBeEIzSEQsZTs7QUEyQnBDc0IsT0FBT0MsT0FBUCxHQUFpQnRCLHFCQUFqQiIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IHRoaXMuZ2V0UmVnRXhwKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHAsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVnRXhwKCkge1xuICAgIGxldCByZWdFeHAgPSAvXlxcLyhbXlxcL10rKVxcLyQvOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG4iXX0=