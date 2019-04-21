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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJFcHNpbG9uRGVmaW5pdGlvbiIsIlJpZ2h0UmVjdXJzaXZlUGFydE5vZGUiLCJSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIiwiQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsIlJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIiwicGx1cyIsImFzdGVyaXNrIiwicXVlc3Rpb25NYXJrIiwiZXhjbGFtYXRpb25NYXJrIiwiUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZSIsInBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJhc3Rlcmlza1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsInF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsImV4Y2xhbWF0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9wdGlvbmFsUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiIsInplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uIiwib25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiIsImxvb2tBaGVhZFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24iLCJlcHNpbG9uRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSw0QkFBUixDQUgvQjtBQUFBLElBSU1LLCtCQUErQkwsUUFBUSxrQ0FBUixDQUpyQzs7QUFNTSxJQUFFTSxRQUFGLEdBQWVQLE1BQWYsQ0FBRU8sUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQywwQkFGRixHQUVpQ04sU0FGakMsQ0FFRU0sMEJBRkY7QUFBQSxJQUdFQyxJQUhGLEdBR29ERixjQUhwRCxDQUdFRSxJQUhGO0FBQUEsSUFHUUMsUUFIUixHQUdvREgsY0FIcEQsQ0FHUUcsUUFIUjtBQUFBLElBR2tCQyxZQUhsQixHQUdvREosY0FIcEQsQ0FHa0JJLFlBSGxCO0FBQUEsSUFHZ0NDLGVBSGhDLEdBR29ETCxjQUhwRCxDQUdnQ0ssZUFIaEM7O0lBS0FDLHNCOzs7QUFDSix3Q0FBYztBQUFBOztBQUNaLGdCQUFNQyw0QkFBNEJMLElBQWxDO0FBQUEsZ0JBQ01NLGdDQUFnQ0wsUUFEdEM7QUFBQSxnQkFFTU0sb0NBQW9DTCxZQUYxQztBQUFBLGdCQUdNTSx1Q0FBdUNMLGVBSDdDO0FBQUEsZ0JBSU1NLHVDQUF1QyxJQUFJYiw0QkFBSixDQUFpQ1csaUNBQWpDLENBSjdDO0FBQUEsZ0JBSWtIO0FBQzVHRyxxREFBeUMsSUFBSWQsNEJBQUosQ0FBaUNVLDZCQUFqQyxDQUwvQztBQUFBLGdCQUtnSDtBQUMxR0ssb0RBQXdDLElBQUlmLDRCQUFKLENBQWlDUyx5QkFBakMsQ0FOOUM7QUFBQSxnQkFNMkc7QUFDckdPLG9EQUF3QyxJQUFJaEIsNEJBQUosQ0FBaUNZLG9DQUFqQyxDQVA5QztBQUFBLGdCQU9zSDtBQUNoSEssZ0NBQW9CLElBQUluQixpQkFBSixFQVIxQjtBQUFBLGdCQVNNb0IsT0FBT2YsMEJBVGI7QUFBQSxnQkFVTWdCLGNBQWMsQ0FDWk4sb0NBRFksRUFFWkMsc0NBRlksRUFHWkMscUNBSFksRUFJWkMscUNBSlksRUFLWkMsaUJBTFksQ0FWcEI7QUFBQSxnQkFpQk1HLE9BQU9yQixzQkFqQmI7O0FBRFksbUpBb0JObUIsSUFwQk0sRUFvQkFDLFdBcEJBLEVBb0JhQyxJQXBCYjtBQXFCYjs7O0VBdEJrQ3hCLEk7O0FBeUJyQ3lCLE9BQU9DLE9BQVAsR0FBaUJkLHNCQUFqQiIsImZpbGUiOiJyaWdodFJlY3Vyc2l2ZVBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBFcHNpbG9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZXBzaWxvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcmlnaHRSZWN1cnNpdmVQYXJ0JyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9yaWdodFJlY3Vyc2l2ZVBhcnQnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lIH0gPSBydWxlTmFtZXMsXG4gICAgICB7IHBsdXMsIGFzdGVyaXNrLCBxdWVzdGlvbk1hcmssIGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHBsdXMsXG4gICAgICAgICAgYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBhc3RlcmlzayxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBxdWVzdGlvbk1hcmssXG4gICAgICAgICAgZXhjbGFtYXRpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50ID0gZXhjbGFtYXRpb25NYXJrLFxuICAgICAgICAgIG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbiA9IG5ldyBSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uKHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIHplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24oYXN0ZXJpc2tUZXJtaW5hbFN5bWJvbENvbnRlbnQpLCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24ocGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIGxvb2tBaGVhZFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbihleGNsYW1hdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQpLCAvLy9cbiAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvbiA9IG5ldyBFcHNpbG9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbixcbiAgICAgICAgICAgIHplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnREZWZpbml0aW9uLFxuICAgICAgICAgICAgb25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0RGVmaW5pdGlvbixcbiAgICAgICAgICAgIGxvb2tBaGVhZFJpZ2h0UmVjdXJzaXZlUGFydERlZmluaXRpb24sXG4gICAgICAgICAgICBlcHNpbG9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJpZ2h0UmVjdXJzaXZlUGFydE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlO1xuIl19