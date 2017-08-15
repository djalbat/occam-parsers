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
                name = 'part~',
                ///
            definitions = [optionalRightRecursivePartRuleDefinition, zeroOrMoreRightRecursivePartRuleDefinition, oneOrMoreRightRecursivePartRuleDefinition, epsilonDefinition],
                Node = RightRecursivePartNode;

            return _possibleConstructorReturn(this, (RightRecursivePartRule.__proto__ || Object.getPrototypeOf(RightRecursivePartRule)).call(this, name, definitions, Node));
      }

      return RightRecursivePartRule;
}(Rule);

module.exports = RightRecursivePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUGFydE5vZGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJwbHVzIiwiYXN0ZXJpc2siLCJxdWVzdGlvbk1hcmsiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIiwicGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsImFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50IiwicXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsInplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsIm9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uIiwiZXBzaWxvbkRlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRyx5QkFBeUJILFFBQVEsNEJBQVIsQ0FGL0I7QUFBQSxJQUdNSSxtQ0FBbUNKLFFBQVEsc0NBQVIsQ0FIekM7O0FBS00sSUFBRUssUUFBRixHQUFlTixNQUFmLENBQUVNLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsSUFGRixHQUVtQ0QsY0FGbkMsQ0FFRUMsSUFGRjtBQUFBLElBRVFDLFFBRlIsR0FFbUNGLGNBRm5DLENBRVFFLFFBRlI7QUFBQSxJQUVrQkMsWUFGbEIsR0FFbUNILGNBRm5DLENBRWtCRyxZQUZsQjs7SUFJQUMsc0I7OztBQUNKLHdDQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLDRCQUE0QkosSUFBbEM7QUFBQSxnQkFDTUssZ0NBQWdDSixRQUR0QztBQUFBLGdCQUVNSyxvQ0FBb0NKLFlBRjFDO0FBQUEsZ0JBR01LLDJDQUEyQyxJQUFJVixnQ0FBSixDQUFxQ1MsaUNBQXJDLENBSGpEO0FBQUEsZ0JBRzBIO0FBQ3BIRSx5REFBNkMsSUFBSVgsZ0NBQUosQ0FBcUNRLDZCQUFyQyxDQUpuRDtBQUFBLGdCQUl3SDtBQUNsSEksd0RBQTRDLElBQUlaLGdDQUFKLENBQXFDTyx5QkFBckMsQ0FMbEQ7QUFBQSxnQkFLbUg7QUFDN0dNLGdDQUFvQixJQUFJZixpQkFBSixFQU4xQjtBQUFBLGdCQU9NZ0IsT0FBTyxPQVBiO0FBQUEsZ0JBT3NCO0FBQ2hCQywwQkFBYyxDQUNaTCx3Q0FEWSxFQUVaQywwQ0FGWSxFQUdaQyx5Q0FIWSxFQUlaQyxpQkFKWSxDQVJwQjtBQUFBLGdCQWNNRyxPQUFPakIsc0JBZGI7O0FBRFksbUpBaUJOZSxJQWpCTSxFQWlCQUMsV0FqQkEsRUFpQmFDLElBakJiO0FBa0JiOzs7RUFuQmtDbkIsSTs7QUFzQnJDb0IsT0FBT0MsT0FBUCxHQUFpQlosc0JBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBFcHNpbG9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZXBzaWxvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmlnaHRSZWN1cnNpdmVQYXJ0JyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZScpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgcGx1cywgYXN0ZXJpc2ssIHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHBsdXMsXG4gICAgICAgICAgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzayxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcmssXG4gICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbihxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQpLCAvLy9cbiAgICAgICAgICB6ZXJvT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24oYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQpLCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbihwbHVzVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgZXBzaWxvbkRlZmluaXRpb24gPSBuZXcgRXBzaWxvbkRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gJ3BhcnR+JywgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgb25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJpZ2h0UmVjdXJzaXZlUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlO1xuIl19