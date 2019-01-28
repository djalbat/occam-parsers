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
                optionalRightRecursivePartDefinition = new RightRecursivePartDefinition(questionMarkTerminalSymbolContent),
                ///
            zeroOrMoreRightRecursivePartDefinition = new RightRecursivePartDefinition(asteriskTerminalSymbolContent),
                ///
            oneOrMoreRightRecursivePartDefinition = new RightRecursivePartDefinition(plusTerminalSymbolContent),
                ///
            epsilonDefinition = new EpsilonDefinition(),
                name = RightRecursivePartRuleName,
                definitions = [optionalRightRecursivePartDefinition, zeroOrMoreRightRecursivePartDefinition, oneOrMoreRightRecursivePartDefinition, epsilonDefinition],
                Node = RightRecursivePartNode;

            return _possibleConstructorReturn(this, (RightRecursivePartRule.__proto__ || Object.getPrototypeOf(RightRecursivePartRule)).call(this, name, definitions, Node));
      }

      return RightRecursivePartRule;
}(Rule);

module.exports = RightRecursivePartRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUGFydE5vZGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwicGx1cyIsImFzdGVyaXNrIiwicXVlc3Rpb25NYXJrIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsInBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsInF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wdGlvbmFsUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiIsInplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIiwib25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiIsImVwc2lsb25EZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUcsb0JBQW9CSCxRQUFRLHVCQUFSLENBRjFCO0FBQUEsSUFHTUkseUJBQXlCSixRQUFRLDRCQUFSLENBSC9CO0FBQUEsSUFJTUssK0JBQStCTCxRQUFRLGtDQUFSLENBSnJDOztBQU1NLElBQUVNLFFBQUYsR0FBZVAsTUFBZixDQUFFTyxRQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsUUFEckIsQ0FDRUMsY0FERjtBQUFBLElBRUVDLDBCQUZGLEdBRWlDTixTQUZqQyxDQUVFTSwwQkFGRjtBQUFBLElBR0VDLElBSEYsR0FHbUNGLGNBSG5DLENBR0VFLElBSEY7QUFBQSxJQUdRQyxRQUhSLEdBR21DSCxjQUhuQyxDQUdRRyxRQUhSO0FBQUEsSUFHa0JDLFlBSGxCLEdBR21DSixjQUhuQyxDQUdrQkksWUFIbEI7O0lBS0FDLHNCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLGdCQUFNQyw0QkFBNEJKLElBQWxDO0FBQUEsZ0JBQ01LLGdDQUFnQ0osUUFEdEM7QUFBQSxnQkFFTUssb0NBQW9DSixZQUYxQztBQUFBLGdCQUdNSyx1Q0FBdUMsSUFBSVgsNEJBQUosQ0FBaUNVLGlDQUFqQyxDQUg3QztBQUFBLGdCQUdrSDtBQUM1R0UscURBQXlDLElBQUlaLDRCQUFKLENBQWlDUyw2QkFBakMsQ0FKL0M7QUFBQSxnQkFJZ0g7QUFDMUdJLG9EQUF3QyxJQUFJYiw0QkFBSixDQUFpQ1EseUJBQWpDLENBTDlDO0FBQUEsZ0JBSzJHO0FBQ3JHTSxnQ0FBb0IsSUFBSWhCLGlCQUFKLEVBTjFCO0FBQUEsZ0JBT01pQixPQUFPWiwwQkFQYjtBQUFBLGdCQVFNYSxjQUFjLENBQ1pMLG9DQURZLEVBRVpDLHNDQUZZLEVBR1pDLHFDQUhZLEVBSVpDLGlCQUpZLENBUnBCO0FBQUEsZ0JBY01HLE9BQU9sQixzQkFkYjs7QUFEWSxtSkFpQk5nQixJQWpCTSxFQWlCQUMsV0FqQkEsRUFpQmFDLElBakJiO0FBa0JiOzs7RUFuQmtDckIsSTs7QUFzQnJDc0IsT0FBT0MsT0FBUCxHQUFpQlosc0JBQWpCIiwiZmlsZSI6InJpZ2h0UmVjdXJzaXZlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKCcuLi9ydWxlTmFtZXMnKSxcbiAgICAgIEVwc2lsb25EZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9lcHNpbG9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnROb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yaWdodFJlY3Vyc2l2ZVBhcnQnKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlUGFydCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgfSA9IHJ1bGVOYW1lcyxcbiAgICAgIHsgcGx1cywgYXN0ZXJpc2ssIHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHBsdXMsXG4gICAgICAgICAgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzayxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcmssXG4gICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24ocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbihhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIG9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbihwbHVzVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgZXBzaWxvbkRlZmluaXRpb24gPSBuZXcgRXBzaWxvbkRlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24sXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbixcbiAgICAgICAgICAgIG9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24sXG4gICAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJpZ2h0UmVjdXJzaXZlUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlO1xuIl19