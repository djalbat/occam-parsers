'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    EpsilonDefinition = require('../definition/epsilon'),
    RightRecursivePartNode = require('../node/rightRecursivePart'),
    RightRecursivePartRuleDefinition = require('../definition/rightRecursivePartRule');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    plus = specialSymbols.plus,
    asterisk = specialSymbols.asterisk,
    questionMark = specialSymbols.questionMark;

var RightRecursivePartRule = function (_Rule) {
      _inherits(RightRecursivePartRule, _Rule);

      function RightRecursivePartRule() {
            _classCallCheck(this, RightRecursivePartRule);

            var plusTerminalSymbolContent = plus,
                asteriskTerminalSymbolContent = asterisk,
                questionMarkTerminalSymbolContent = questionMark,
                optionalRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(questionMarkTerminalSymbolContent),
                ///
            zeroOrMoreRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(asteriskTerminalSymbolContent),
                ///
            oneOrMoreRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(plusTerminalSymbolContent),
                ///
            epsilonDefinition = new EpsilonDefinition(),
                name = ruleNames.RightRecursivePartRule,
                definitions = [optionalRightRecursivePartRuleDefinition, zeroOrMoreRightRecursivePartRuleDefinition, oneOrMoreRightRecursivePartRuleDefinition, epsilonDefinition],
                Node = RightRecursivePartNode;

            return _possibleConstructorReturn(this, (RightRecursivePartRule.__proto__ || Object.getPrototypeOf(RightRecursivePartRule)).call(this, name, definitions, Node));
      }

      return RightRecursivePartRule;
}(Rule);

module.exports = RightRecursivePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUGFydE5vZGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJwbHVzIiwiYXN0ZXJpc2siLCJxdWVzdGlvbk1hcmsiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwicGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsImFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50IiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsInplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsIm9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uIiwiZXBzaWxvbkRlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7QUFBQSxJQUdNSSx5QkFBeUJKLFFBQVEsNEJBQVIsQ0FIL0I7QUFBQSxJQUlNSyxtQ0FBbUNMLFFBQVEsc0NBQVIsQ0FKekM7O0FBTU0sSUFBRU0sUUFBRixHQUFlUCxNQUFmLENBQUVPLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsSUFGRixHQUVtQ0QsY0FGbkMsQ0FFRUMsSUFGRjtBQUFBLElBRVFDLFFBRlIsR0FFbUNGLGNBRm5DLENBRVFFLFFBRlI7QUFBQSxJQUVrQkMsWUFGbEIsR0FFbUNILGNBRm5DLENBRWtCRyxZQUZsQjs7SUFJQUMsc0I7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLDRCQUE0QkosSUFBbEM7QUFBQSxnQkFDTUssZ0NBQWdDSixRQUR0QztBQUFBLGdCQUVNSyxvQ0FBb0NKLFlBRjFDO0FBQUEsZ0JBR01LLDJDQUEyQyxJQUFJVixnQ0FBSixDQUFxQ1MsaUNBQXJDLENBSGpEO0FBQUEsZ0JBRzBIO0FBQ3BIRSx5REFBNkMsSUFBSVgsZ0NBQUosQ0FBcUNRLDZCQUFyQyxDQUpuRDtBQUFBLGdCQUl3SDtBQUNsSEksd0RBQTRDLElBQUlaLGdDQUFKLENBQXFDTyx5QkFBckMsQ0FMbEQ7QUFBQSxnQkFLbUg7QUFDN0dNLGdDQUFvQixJQUFJZixpQkFBSixFQU4xQjtBQUFBLGdCQU9NZ0IsT0FBT2pCLFVBQVVTLHNCQVB2QjtBQUFBLGdCQVFNUyxjQUFjLENBQ1pMLHdDQURZLEVBRVpDLDBDQUZZLEVBR1pDLHlDQUhZLEVBSVpDLGlCQUpZLENBUnBCO0FBQUEsZ0JBY01HLE9BQU9qQixzQkFkYjs7QUFEWSxtSkFpQk5lLElBakJNLEVBaUJBQyxXQWpCQSxFQWlCYUMsSUFqQmI7QUFrQmI7OztFQW5Ca0NwQixJOztBQXNCckNxQixPQUFPQyxPQUFQLEdBQWlCWixzQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmVQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRXBzaWxvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2Vwc2lsb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlUGFydFJ1bGUnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHBsdXMsIGFzdGVyaXNrLCBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBwbHVzLFxuICAgICAgICAgIGFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50ID0gYXN0ZXJpc2ssXG4gICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50ID0gcXVlc3Rpb25NYXJrLFxuICAgICAgICAgIG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24ocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uKGFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24ocGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gbmV3IEVwc2lsb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IHJ1bGVOYW1lcy5SaWdodFJlY3Vyc2l2ZVBhcnRSdWxlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIG9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSaWdodFJlY3Vyc2l2ZVBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZTtcbiJdfQ==