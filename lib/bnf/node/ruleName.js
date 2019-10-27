'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RuleNamePart = require('../part/nonTerminal/ruleName'),
    arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var first = arrayUtilities.first;

var RuleNameNode = function (_NonTerminalNode) {
      _inherits(RuleNameNode, _NonTerminalNode);

      function RuleNameNode() {
            _classCallCheck(this, RuleNameNode);

            return _possibleConstructorReturn(this, (RuleNameNode.__proto__ || Object.getPrototypeOf(RuleNameNode)).apply(this, arguments));
      }

      _createClass(RuleNameNode, [{
            key: 'generatePart',
            value: function generatePart(lookAhead) {
                  var ruleName = this.getRuleName(),
                      ruleNamePart = new RuleNamePart(ruleName, lookAhead);

                  return ruleNamePart;
            }
      }, {
            key: 'getRuleName',
            value: function getRuleName() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      ruleName = terminalNodeContent; ///

                  return ruleName;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(RuleNameNode, ruleName, childNodes);
            }
      }]);

      return RuleNameNode;
}(NonTerminalNode);

module.exports = RuleNameNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsIlJ1bGVOYW1lTm9kZSIsImxvb2tBaGVhZCIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZVBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLDhCQUFSLENBQXJCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLHVCQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixRQUFRLCtCQUFSLENBRnhCOztJQUlRRyxLLEdBQVVGLGMsQ0FBVkUsSzs7SUFFRkMsWTs7Ozs7Ozs7Ozs7eUNBQ1NDLFMsRUFBVztBQUN0QixzQkFBTUMsV0FBVyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsc0JBQ01DLGVBQWUsSUFBSVQsWUFBSixDQUFpQk8sUUFBakIsRUFBMkJELFNBQTNCLENBRHJCOztBQUdBLHlCQUFPRyxZQUFQO0FBQ0Q7OzswQ0FFYTtBQUNaLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCUixNQUFNTSxVQUFOLENBRHZCO0FBQUEsc0JBRU1HLGVBQWVELGNBRnJCO0FBQUEsc0JBRXNDO0FBQ2hDRSx3Q0FBc0JELGFBQWFFLFVBQWIsRUFINUI7QUFBQSxzQkFJTVIsV0FBV08sbUJBSmpCLENBRFksQ0FLMEI7O0FBRXRDLHlCQUFPUCxRQUFQO0FBQ0Q7OztzREFFZ0NBLFEsRUFBVUcsVSxFQUFZO0FBQUUseUJBQU9QLGdCQUFnQmEseUJBQWhCLENBQTBDWCxZQUExQyxFQUF3REUsUUFBeEQsRUFBa0VHLFVBQWxFLENBQVA7QUFBdUY7Ozs7RUFsQnZIUCxlOztBQXFCM0JjLE9BQU9DLE9BQVAsR0FBaUJiLFlBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVOYW1lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0ZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgICBcbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZU5hbWVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZU5vZGU7XG4iXX0=