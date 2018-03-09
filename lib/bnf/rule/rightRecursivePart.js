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
    RightRecursivePartRuleName = ruleNames.RightRecursivePartRuleName,
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
                name = RightRecursivePartRuleName,
                definitions = [optionalRightRecursivePartRuleDefinition, zeroOrMoreRightRecursivePartRuleDefinition, oneOrMoreRightRecursivePartRuleDefinition, epsilonDefinition],
                Node = RightRecursivePartNode;

            return _possibleConstructorReturn(this, (RightRecursivePartRule.__proto__ || Object.getPrototypeOf(RightRecursivePartRule)).call(this, name, definitions, Node));
      }

      return RightRecursivePartRule;
}(Rule);

module.exports = RightRecursivePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUGFydE5vZGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSIsInBsdXMiLCJhc3RlcmlzayIsInF1ZXN0aW9uTWFyayIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUiLCJwbHVzVGVybWluYWxTeW1ib2xDb250ZW50IiwiYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uIiwiemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uIiwib25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24iLCJlcHNpbG9uRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSw0QkFBUixDQUgvQjtBQUFBLElBSU1LLG1DQUFtQ0wsUUFBUSxzQ0FBUixDQUp6Qzs7QUFNTSxJQUFFTSxRQUFGLEdBQWVQLE1BQWYsQ0FBRU8sUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQywwQkFGRixHQUVpQ04sU0FGakMsQ0FFRU0sMEJBRkY7QUFBQSxJQUdFQyxJQUhGLEdBR21DRixjQUhuQyxDQUdFRSxJQUhGO0FBQUEsSUFHUUMsUUFIUixHQUdtQ0gsY0FIbkMsQ0FHUUcsUUFIUjtBQUFBLElBR2tCQyxZQUhsQixHQUdtQ0osY0FIbkMsQ0FHa0JJLFlBSGxCOztJQUtBQyxzQjs7O0FBQ0osd0NBQWM7QUFBQTs7QUFDWixnQkFBTUMsNEJBQTRCSixJQUFsQztBQUFBLGdCQUNNSyxnQ0FBZ0NKLFFBRHRDO0FBQUEsZ0JBRU1LLG9DQUFvQ0osWUFGMUM7QUFBQSxnQkFHTUssMkNBQTJDLElBQUlYLGdDQUFKLENBQXFDVSxpQ0FBckMsQ0FIakQ7QUFBQSxnQkFHMEg7QUFDcEhFLHlEQUE2QyxJQUFJWixnQ0FBSixDQUFxQ1MsNkJBQXJDLENBSm5EO0FBQUEsZ0JBSXdIO0FBQ2xISSx3REFBNEMsSUFBSWIsZ0NBQUosQ0FBcUNRLHlCQUFyQyxDQUxsRDtBQUFBLGdCQUttSDtBQUM3R00sZ0NBQW9CLElBQUloQixpQkFBSixFQU4xQjtBQUFBLGdCQU9NaUIsT0FBT1osMEJBUGI7QUFBQSxnQkFRTWEsY0FBYyxDQUNaTCx3Q0FEWSxFQUVaQywwQ0FGWSxFQUdaQyx5Q0FIWSxFQUlaQyxpQkFKWSxDQVJwQjtBQUFBLGdCQWNNRyxPQUFPbEIsc0JBZGI7O0FBRFksbUpBaUJOZ0IsSUFqQk0sRUFpQkFDLFdBakJBLEVBaUJhQyxJQWpCYjtBQWtCYjs7O0VBbkJrQ3JCLEk7O0FBc0JyQ3NCLE9BQU9DLE9BQVAsR0FBaUJaLHNCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZVBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBFcHNpbG9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZXBzaWxvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmlnaHRSZWN1cnNpdmVQYXJ0JyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZScpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgcGx1cywgYXN0ZXJpc2ssIHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHBsdXMsXG4gICAgICAgICAgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzayxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcmssXG4gICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbihxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQpLCAvLy9cbiAgICAgICAgICB6ZXJvT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24oYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQpLCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbihwbHVzVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgZXBzaWxvbkRlZmluaXRpb24gPSBuZXcgRXBzaWxvbkRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgb25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJpZ2h0UmVjdXJzaXZlUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlO1xuIl19