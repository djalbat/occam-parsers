'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var RuleNamePart = require('../part/nonTerminal/ruleName'),
    arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var BNFLexer = lexers.BNFLexer,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    specialSymbols = BNFLexer.specialSymbols,
    exclamationMark = specialSymbols.exclamationMark;

var RuleNameNode = function (_NonTerminalNode) {
      _inherits(RuleNameNode, _NonTerminalNode);

      function RuleNameNode() {
            _classCallCheck(this, RuleNameNode);

            return _possibleConstructorReturn(this, (RuleNameNode.__proto__ || Object.getPrototypeOf(RuleNameNode)).apply(this, arguments));
      }

      _createClass(RuleNameNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var ruleName = this.getRuleName(),
                      lookAhead = this.isLookAhead(),
                      ruleNamePart = new RuleNamePart(ruleName, lookAhead, noWhitespace);

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
      }, {
            key: 'isLookAhead',
            value: function isLookAhead() {
                  var lookAhead = false;

                  var childNodes = this.getChildNodes(),
                      secondChildNode = second(childNodes),
                      secondChildNodeTerminalNode = secondChildNode.isTerminalNode();

                  if (secondChildNodeTerminalNode) {
                        var secondChildTerminalNode = secondChildNode,
                            ///
                        secondChildTerminalNodeContent = secondChildTerminalNode.getContent();

                        lookAhead = secondChildTerminalNodeContent === exclamationMark;
                  }

                  return lookAhead;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZU5hbWVQYXJ0IiwiYXJyYXlVdGlsaXRpZXMiLCJOb25UZXJtaW5hbE5vZGUiLCJCTkZMZXhlciIsImZpcnN0Iiwic2Vjb25kIiwic3BlY2lhbFN5bWJvbHMiLCJleGNsYW1hdGlvbk1hcmsiLCJSdWxlTmFtZU5vZGUiLCJub1doaXRlc3BhY2UiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJydWxlTmFtZVBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJzZWNvbmRDaGlsZE5vZGUiLCJzZWNvbmRDaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInNlY29uZENoaWxkVGVybWluYWxOb2RlIiwic2Vjb25kQ2hpbGRUZXJtaW5hbE5vZGVDb250ZW50IiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsZUFBZUQsUUFBUSw4QkFBUixDQUFyQjtBQUFBLElBQ01FLGlCQUFpQkYsUUFBUSx1QkFBUixDQUR2QjtBQUFBLElBRU1HLGtCQUFrQkgsUUFBUSwrQkFBUixDQUZ4Qjs7QUFJTSxJQUFFSSxRQUFGLEdBQWVMLE1BQWYsQ0FBRUssUUFBRjtBQUFBLElBQ0VDLEtBREYsR0FDb0JILGNBRHBCLENBQ0VHLEtBREY7QUFBQSxJQUNTQyxNQURULEdBQ29CSixjQURwQixDQUNTSSxNQURUO0FBQUEsSUFFRUMsY0FGRixHQUVxQkgsUUFGckIsQ0FFRUcsY0FGRjtBQUFBLElBR0VDLGVBSEYsR0FHc0JELGNBSHRCLENBR0VDLGVBSEY7O0lBS0FDLFk7Ozs7Ozs7Ozs7O3lDQUNTQyxZLEVBQWM7QUFDekIsc0JBQU1DLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLHNCQUNNQyxZQUFZLEtBQUtDLFdBQUwsRUFEbEI7QUFBQSxzQkFFTUMsZUFBZSxJQUFJZCxZQUFKLENBQWlCVSxRQUFqQixFQUEyQkUsU0FBM0IsRUFBc0NILFlBQXRDLENBRnJCOztBQUlBLHlCQUFPSyxZQUFQO0FBQ0Q7OzswQ0FFYTtBQUNaLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCYixNQUFNVyxVQUFOLENBRHZCO0FBQUEsc0JBRU1HLGVBQWVELGNBRnJCO0FBQUEsc0JBRXNDO0FBQ2hDRSx3Q0FBc0JELGFBQWFFLFVBQWIsRUFINUI7QUFBQSxzQkFJTVYsV0FBV1MsbUJBSmpCLENBRFksQ0FLMEI7O0FBRXRDLHlCQUFPVCxRQUFQO0FBQ0Q7OzswQ0FFYTtBQUNaLHNCQUFJRSxZQUFZLEtBQWhCOztBQUVBLHNCQUFNRyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUssa0JBQWtCaEIsT0FBT1UsVUFBUCxDQUR4QjtBQUFBLHNCQUVNTyw4QkFBOEJELGdCQUFnQkUsY0FBaEIsRUFGcEM7O0FBSUEsc0JBQUlELDJCQUFKLEVBQWlDO0FBQy9CLDRCQUFNRSwwQkFBMEJILGVBQWhDO0FBQUEsNEJBQWtEO0FBQzVDSSx5REFBaUNELHdCQUF3QkosVUFBeEIsRUFEdkM7O0FBR0FSLG9DQUFhYSxtQ0FBbUNsQixlQUFoRDtBQUNEOztBQUVELHlCQUFPSyxTQUFQO0FBQ0Q7OztzREFFZ0NGLFEsRUFBVUssVSxFQUFZO0FBQUUseUJBQU9iLGdCQUFnQndCLHlCQUFoQixDQUEwQ2xCLFlBQTFDLEVBQXdERSxRQUF4RCxFQUFrRUssVUFBbEUsQ0FBUDtBQUF1Rjs7OztFQXBDdkhiLGU7O0FBdUMzQnlCLE9BQU9DLE9BQVAsR0FBaUJwQixZQUFqQiIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJ1bGVOYW1lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSB0aGlzLmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSwgbG9va0FoZWFkLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0ZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgICBcbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBpc0xvb2tBaGVhZCgpIHtcbiAgICBsZXQgbG9va0FoZWFkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc2Vjb25kQ2hpbGROb2RlID0gc2Vjb25kKGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHNlY29uZENoaWxkTm9kZVRlcm1pbmFsTm9kZSA9IHNlY29uZENoaWxkTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKHNlY29uZENoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgc2Vjb25kQ2hpbGRUZXJtaW5hbE5vZGUgPSBzZWNvbmRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHNlY29uZENoaWxkVGVybWluYWxOb2RlQ29udGVudCA9IHNlY29uZENoaWxkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgbG9va0FoZWFkID0gKHNlY29uZENoaWxkVGVybWluYWxOb2RlQ29udGVudCA9PT0gZXhjbGFtYXRpb25NYXJrKVxuICAgIH1cblxuICAgIHJldHVybiBsb29rQWhlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZU5hbWVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZU5vZGU7XG4iXX0=