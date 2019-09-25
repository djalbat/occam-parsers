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
            value: function generatePart(noWhitespace, lookAhead) {
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
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(RegularExpressionNode, ruleName, childNodes);
            }
      }]);

      return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;

RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJydWxlTmFtZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSx1QkFBUixDQUF2QjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSwrQkFBUixDQUR4QjtBQUFBLElBRU1FLHdCQUF3QkYsUUFBUSxvQ0FBUixDQUY5Qjs7SUFJUUcsSyxHQUFrQkosYyxDQUFsQkksSztJQUFPQyxNLEdBQVdMLGMsQ0FBWEssTTs7SUFFVEMscUI7Ozs7Ozs7Ozs7O3lDQUNTQyxZLEVBQWNDLFMsRUFBVztBQUNwQyxzQkFBTUMsb0JBQW9CLEtBQUtDLG9CQUFMLEVBQTFCO0FBQUEsc0JBQ01DLHdCQUF3QixJQUFJUixxQkFBSixDQUEwQk0saUJBQTFCLEVBQTZDRixZQUE3QyxDQUQ5Qjs7QUFHQSx5QkFBT0kscUJBQVA7QUFDRDs7O21EQUVzQjtBQUNyQixzQkFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsc0JBQ01DLGlCQUFpQlYsTUFBTVEsVUFBTixDQUR2QjtBQUFBLHNCQUVNRyxlQUFlRCxjQUZyQjtBQUFBLHNCQUVzQztBQUNoQ0Usd0NBQXNCRCxhQUFhRSxVQUFiLEVBSDVCO0FBQUEsc0JBSU1DLFVBQVVGLG9CQUFvQkcsS0FBcEIsQ0FBMEJiLHNCQUFzQkcsaUJBQWhELENBSmhCO0FBQUEsc0JBS01XLGNBQWNmLE9BQU9hLE9BQVAsQ0FMcEI7QUFBQSxzQkFNTUcsVUFBVUQsV0FOaEI7QUFBQSxzQkFNNkI7QUFDdkJYLHNDQUFvQixJQUFJYSxNQUFKLENBQVdELE9BQVgsQ0FQMUIsQ0FEcUIsQ0FRMkI7O0FBRWhELHlCQUFPWixpQkFBUDtBQUNEOzs7c0RBRWdDYyxRLEVBQVVYLFUsRUFBWTtBQUFFLHlCQUFPVixnQkFBZ0JzQix5QkFBaEIsQ0FBMENsQixxQkFBMUMsRUFBaUVpQixRQUFqRSxFQUEyRVgsVUFBM0UsQ0FBUDtBQUFnRzs7OztFQXJCdkhWLGU7O0FBd0JwQ3VCLE9BQU9DLE9BQVAsR0FBaUJwQixxQkFBakI7O0FBRUFBLHNCQUFzQkcsaUJBQXRCLEdBQTBDLHdCQUExQyIsImZpbGUiOiJyZWd1bGFyRXhwcmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uJyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UsIGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uID0gdGhpcy5nZXRSZWd1bGFyRXhwcmVzc2lvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVndWxhckV4cHJlc3Npb24sIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaChSZWd1bGFyRXhwcmVzc2lvbk5vZGUucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHBhdHRlcm4pOyAgLy8vXG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVndWxhckV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG5cblJlZ3VsYXJFeHByZXNzaW9uTm9kZS5yZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvKCg/OlxcXFwufFteXFwvXSkqKVxcLyQvO1xuIl19