'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
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
                name = 'rightRecursivePart',
                definitions = [optionalRightRecursivePartRuleDefinition, zeroOrMoreRightRecursivePartRuleDefinition, oneOrMoreRightRecursivePartRuleDefinition, epsilonDefinition],
                Node = RightRecursivePartNode;

            return _possibleConstructorReturn(this, (RightRecursivePartRule.__proto__ || Object.getPrototypeOf(RightRecursivePartRule)).call(this, name, definitions, Node));
      }

      return RightRecursivePartRule;
}(Rule);

module.exports = RightRecursivePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUGFydE5vZGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJwbHVzIiwiYXN0ZXJpc2siLCJxdWVzdGlvbk1hcmsiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwicGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsImFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50IiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsInplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsIm9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uIiwiZXBzaWxvbkRlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRyx5QkFBeUJILFFBQVEsNEJBQVIsQ0FGL0I7QUFBQSxJQUdNSSxtQ0FBbUNKLFFBQVEsc0NBQVIsQ0FIekM7O0FBS00sSUFBRUssUUFBRixHQUFlTixNQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsSUFGRixHQUVtQ0QsY0FGbkMsQ0FFRUMsSUFGRjtBQUFBLElBRVFDLFFBRlIsR0FFbUNGLGNBRm5DLENBRVFFLFFBRlI7QUFBQSxJQUVrQkMsWUFGbEIsR0FFbUNILGNBRm5DLENBRWtCRyxZQUZsQjs7SUFJQUMsc0I7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLDRCQUE0QkosSUFBbEM7QUFBQSxnQkFDTUssZ0NBQWdDSixRQUR0QztBQUFBLGdCQUVNSyxvQ0FBb0NKLFlBRjFDO0FBQUEsZ0JBR01LLDJDQUEyQyxJQUFJVixnQ0FBSixDQUFxQ1MsaUNBQXJDLENBSGpEO0FBQUEsZ0JBRzBIO0FBQ3BIRSx5REFBNkMsSUFBSVgsZ0NBQUosQ0FBcUNRLDZCQUFyQyxDQUpuRDtBQUFBLGdCQUl3SDtBQUNsSEksd0RBQTRDLElBQUlaLGdDQUFKLENBQXFDTyx5QkFBckMsQ0FMbEQ7QUFBQSxnQkFLbUg7QUFDN0dNLGdDQUFvQixJQUFJZixpQkFBSixFQU4xQjtBQUFBLGdCQU9NZ0IsT0FBTyxvQkFQYjtBQUFBLGdCQVFNQyxjQUFjLENBQ1pMLHdDQURZLEVBRVpDLDBDQUZZLEVBR1pDLHlDQUhZLEVBSVpDLGlCQUpZLENBUnBCO0FBQUEsZ0JBY01HLE9BQU9qQixzQkFkYjs7QUFEWSxtSkFpQk5lLElBakJNLEVBaUJBQyxXQWpCQSxFQWlCYUMsSUFqQmI7QUFrQmI7OztFQW5Ca0NuQixJOztBQXNCckNvQixPQUFPQyxPQUFQLEdBQWlCWixzQkFBakIiLCJmaWxlIjoicmlnaHRSZWN1cnNpdmVQYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIEVwc2lsb25EZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9lcHNpbG9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yaWdodFJlY3Vyc2l2ZVBhcnQnKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnRSdWxlJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBwbHVzLCBhc3RlcmlzaywgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwbHVzVGVybWluYWxTeW1ib2xDb250ZW50ID0gcGx1cyxcbiAgICAgICAgICBhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IGFzdGVyaXNrLFxuICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHF1ZXN0aW9uTWFyayxcbiAgICAgICAgICBvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uKHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbihhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIG9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uKHBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQpLCAvLy9cbiAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvbiA9IG5ldyBFcHNpbG9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAncmlnaHRSZWN1cnNpdmVQYXJ0JyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICBvbmVPck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUmlnaHRSZWN1cnNpdmVQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGU7XG4iXX0=