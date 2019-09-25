'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    TerminalSymbolPart = require('../part/terminal/terminalSymbol');

var first = arrayUtilities.first,
    second = arrayUtilities.second;

var TerminalSymbolNode = function (_NonTerminalNode) {
      _inherits(TerminalSymbolNode, _NonTerminalNode);

      function TerminalSymbolNode() {
            _classCallCheck(this, TerminalSymbolNode);

            return _possibleConstructorReturn(this, (TerminalSymbolNode.__proto__ || Object.getPrototypeOf(TerminalSymbolNode)).apply(this, arguments));
      }

      _createClass(TerminalSymbolNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace, lookAhead) {
                  var content = this.getContent(),
                      terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

                  return terminalSymbolPart;
            }
      }, {
            key: 'getContent',
            value: function getContent() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(TerminalSymbolNode.regularExpression),
                      secondMatch = second(matches),
                      content = secondMatch.replace(/\\"/g, '"'); ///

                  return content;
            }
      }], [{
            key: 'fromRuleNameAndChildNodes',
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                  return NonTerminalNode.fromRuleNameAndChildNodes(TerminalSymbolNode, ruleName, childNodes);
            }
      }]);

      return TerminalSymbolNode;
}(NonTerminalNode);

module.exports = TerminalSymbolNode;

TerminalSymbolNode.regularExpression = /^"((?:\\.|[^"])*)"$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlRlcm1pbmFsU3ltYm9sTm9kZSIsIm5vV2hpdGVzcGFjZSIsImxvb2tBaGVhZCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidGVybWluYWxTeW1ib2xQYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJyZWd1bGFyRXhwcmVzc2lvbiIsInNlY29uZE1hdGNoIiwicmVwbGFjZSIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLGlDQUFSLENBRjNCOztJQUlRRyxLLEdBQWtCSixjLENBQWxCSSxLO0lBQU9DLE0sR0FBV0wsYyxDQUFYSyxNOztJQUVUQyxrQjs7Ozs7Ozs7Ozs7eUNBQ1NDLFksRUFBY0MsUyxFQUFXO0FBQ3BDLHNCQUFNQyxVQUFVLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxzQkFDTUMscUJBQXFCLElBQUlSLGtCQUFKLENBQXVCTSxPQUF2QixFQUFnQ0YsWUFBaEMsQ0FEM0I7O0FBR0EseUJBQU9JLGtCQUFQO0FBQ0Q7Ozt5Q0FFWTtBQUNYLHNCQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxzQkFDTUMsaUJBQWlCVixNQUFNUSxVQUFOLENBRHZCO0FBQUEsc0JBRU1HLGVBQWVELGNBRnJCO0FBQUEsc0JBRXNDO0FBQ2hDRSx3Q0FBc0JELGFBQWFMLFVBQWIsRUFINUI7QUFBQSxzQkFJTU8sVUFBVUQsb0JBQW9CRSxLQUFwQixDQUEwQlosbUJBQW1CYSxpQkFBN0MsQ0FKaEI7QUFBQSxzQkFLTUMsY0FBY2YsT0FBT1ksT0FBUCxDQUxwQjtBQUFBLHNCQU1NUixVQUFVVyxZQUFZQyxPQUFaLENBQW9CLE1BQXBCLEVBQTJCLEdBQTNCLENBTmhCLENBRFcsQ0FPc0M7O0FBRWpELHlCQUFPWixPQUFQO0FBQ0Q7OztzREFFZ0NhLFEsRUFBVVYsVSxFQUFZO0FBQUUseUJBQU9WLGdCQUFnQnFCLHlCQUFoQixDQUEwQ2pCLGtCQUExQyxFQUE4RGdCLFFBQTlELEVBQXdFVixVQUF4RSxDQUFQO0FBQTZGOzs7O0VBcEJ2SFYsZTs7QUF1QmpDc0IsT0FBT0MsT0FBUCxHQUFpQm5CLGtCQUFqQjs7QUFFQUEsbUJBQW1CYSxpQkFBbkIsR0FBdUMscUJBQXZDIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVGVybWluYWxTeW1ib2xOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSwgbG9va0FoZWFkKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbFBhcnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2goVGVybWluYWxTeW1ib2xOb2RlLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gc2Vjb25kTWF0Y2gucmVwbGFjZSgvXFxcXFwiL2csJ1wiJyk7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoVGVybWluYWxTeW1ib2xOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbE5vZGU7XG5cblRlcm1pbmFsU3ltYm9sTm9kZS5yZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIoKD86XFxcXC58W15cIl0pKilcIiQvO1xuIl19