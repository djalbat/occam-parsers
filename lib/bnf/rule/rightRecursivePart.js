'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    EpsilonDefinition = require('../definition/epsilon'),
    RightRecursivePartNode = require('../node/rightRecursivePart'),
    RightRecursivePartDefinition = require('../definition/rightRecursivePart');

var specialSymbols = lexers.specialSymbols,
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName,
    plus = specialSymbols.plus,
    asterisk = specialSymbols.asterisk,
    questionMark = specialSymbols.questionMark,
    exclamationMark = specialSymbols.exclamationMark;

var RightRecursivePartRule = function (_Rule) {
      _inherits(RightRecursivePartRule, _Rule);

      function RightRecursivePartRule() {
            _classCallCheck(this, RightRecursivePartRule);

            var plusTerminalSymbolContent = plus,
                asteriskTerminalSymbolContent = asterisk,
                questionMarkTerminalSymbolContent = questionMark,
                exclamationMarkTerminalSymbolContent = exclamationMark,
                optionalRightRecursivePartDefinition = new RightRecursivePartDefinition(questionMarkTerminalSymbolContent),
                ///
            zeroOrMoreRightRecursivePartDefinition = new RightRecursivePartDefinition(asteriskTerminalSymbolContent),
                ///
            oneOrMoreRightRecursivePartDefinition = new RightRecursivePartDefinition(plusTerminalSymbolContent),
                ///
            lookAheadRightRecursivePartDefinition = new RightRecursivePartDefinition(exclamationMarkTerminalSymbolContent),
                ///
            epsilonDefinition = new EpsilonDefinition(),
                name = RightRecursivePartRuleName,
                definitions = [optionalRightRecursivePartDefinition, zeroOrMoreRightRecursivePartDefinition, oneOrMoreRightRecursivePartDefinition, lookAheadRightRecursivePartDefinition, epsilonDefinition],
                Node = RightRecursivePartNode;

            return _possibleConstructorReturn(this, (RightRecursivePartRule.__proto__ || Object.getPrototypeOf(RightRecursivePartRule)).call(this, name, definitions, Node));
      }

      return RightRecursivePartRule;
}(Rule);

module.exports = RightRecursivePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUGFydE5vZGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIiwic3BlY2lhbFN5bWJvbHMiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsInBsdXMiLCJhc3RlcmlzayIsInF1ZXN0aW9uTWFyayIsImV4Y2xhbWF0aW9uTWFyayIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJwbHVzVGVybWluYWxTeW1ib2xDb250ZW50IiwiYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJleGNsYW1hdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24iLCJ6ZXJvT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiIsIm9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24iLCJsb29rQWhlYWRSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIiwiZXBzaWxvbkRlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FGMUI7QUFBQSxJQUdNSSx5QkFBeUJKLFFBQVEsNEJBQVIsQ0FIL0I7QUFBQSxJQUlNSywrQkFBK0JMLFFBQVEsa0NBQVIsQ0FKckM7O0FBTU0sSUFBRU0sY0FBRixHQUFxQlAsTUFBckIsQ0FBRU8sY0FBRjtBQUFBLElBQ0VDLDBCQURGLEdBQ2lDTCxTQURqQyxDQUNFSywwQkFERjtBQUFBLElBRUVDLElBRkYsR0FFb0RGLGNBRnBELENBRUVFLElBRkY7QUFBQSxJQUVRQyxRQUZSLEdBRW9ESCxjQUZwRCxDQUVRRyxRQUZSO0FBQUEsSUFFa0JDLFlBRmxCLEdBRW9ESixjQUZwRCxDQUVrQkksWUFGbEI7QUFBQSxJQUVnQ0MsZUFGaEMsR0FFb0RMLGNBRnBELENBRWdDSyxlQUZoQzs7SUFJQUMsc0I7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLDRCQUE0QkwsSUFBbEM7QUFBQSxnQkFDTU0sZ0NBQWdDTCxRQUR0QztBQUFBLGdCQUVNTSxvQ0FBb0NMLFlBRjFDO0FBQUEsZ0JBR01NLHVDQUF1Q0wsZUFIN0M7QUFBQSxnQkFJTU0sdUNBQXVDLElBQUlaLDRCQUFKLENBQWlDVSxpQ0FBakMsQ0FKN0M7QUFBQSxnQkFJa0g7QUFDNUdHLHFEQUF5QyxJQUFJYiw0QkFBSixDQUFpQ1MsNkJBQWpDLENBTC9DO0FBQUEsZ0JBS2dIO0FBQzFHSyxvREFBd0MsSUFBSWQsNEJBQUosQ0FBaUNRLHlCQUFqQyxDQU45QztBQUFBLGdCQU0yRztBQUNyR08sb0RBQXdDLElBQUlmLDRCQUFKLENBQWlDVyxvQ0FBakMsQ0FQOUM7QUFBQSxnQkFPc0g7QUFDaEhLLGdDQUFvQixJQUFJbEIsaUJBQUosRUFSMUI7QUFBQSxnQkFTTW1CLE9BQU9mLDBCQVRiO0FBQUEsZ0JBVU1nQixjQUFjLENBQ1pOLG9DQURZLEVBRVpDLHNDQUZZLEVBR1pDLHFDQUhZLEVBSVpDLHFDQUpZLEVBS1pDLGlCQUxZLENBVnBCO0FBQUEsZ0JBaUJNRyxPQUFPcEIsc0JBakJiOztBQURZLG1KQW9CTmtCLElBcEJNLEVBb0JBQyxXQXBCQSxFQW9CYUMsSUFwQmI7QUFxQmI7OztFQXRCa0N2QixJOztBQXlCckN3QixPQUFPQyxPQUFQLEdBQWlCZCxzQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmVQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRXBzaWxvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2Vwc2lsb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmVQYXJ0Jyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgcGx1cywgYXN0ZXJpc2ssIHF1ZXN0aW9uTWFyaywgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwbHVzVGVybWluYWxTeW1ib2xDb250ZW50ID0gcGx1cyxcbiAgICAgICAgICBhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IGFzdGVyaXNrLFxuICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHF1ZXN0aW9uTWFyayxcbiAgICAgICAgICBleGNsYW1hdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBleGNsYW1hdGlvbk1hcmssXG4gICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24ocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbihhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIG9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbihwbHVzVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgbG9va0FoZWFkUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uKGV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gbmV3IEVwc2lsb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uLFxuICAgICAgICAgICAgemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24sXG4gICAgICAgICAgICBvbmVPck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uLFxuICAgICAgICAgICAgbG9va0FoZWFkUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUmlnaHRSZWN1cnNpdmVQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGU7XG4iXX0=