'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    EndOfLineNode = require('../node/epsilon'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon,
    EpsilonRuleName = ruleNames.EpsilonRuleName;

var EpsilonRule = function (_Rule) {
      _inherits(EpsilonRule, _Rule);

      function EpsilonRule() {
            _classCallCheck(this, EpsilonRule);

            var epsilonTerminalSymbolContent = epsilon,
                epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
                name = EpsilonRuleName,
                definitions = [epsilonTerminalSymbolDefinition],
                Node = EndOfLineNode;

            return _possibleConstructorReturn(this, (EpsilonRule.__proto__ || Object.getPrototypeOf(EpsilonRule)).call(this, name, definitions, Node));
      }

      return EpsilonRule;
}(Rule);

module.exports = EpsilonRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiRW5kT2ZMaW5lTm9kZSIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJlcHNpbG9uIiwiRXBzaWxvblJ1bGVOYW1lIiwiRXBzaWxvblJ1bGUiLCJlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50IiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFlBQVlGLFFBQVEsY0FBUixDQURsQjtBQUFBLElBRU1HLGdCQUFnQkgsUUFBUSxpQkFBUixDQUZ0QjtBQUFBLElBR01JLDJCQUEyQkosUUFBUSw4QkFBUixDQUhqQzs7QUFLTSxJQUFFSyxRQUFGLEdBQWVOLE1BQWYsQ0FBRU0sUUFBRjtBQUFBLElBQ0VDLGNBREYsR0FDcUJELFFBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxPQUZGLEdBRWNELGNBRmQsQ0FFRUMsT0FGRjtBQUFBLElBR0VDLGVBSEYsR0FHc0JOLFNBSHRCLENBR0VNLGVBSEY7O0lBS0FDLFc7OztBQUNKLDZCQUFjO0FBQUE7O0FBQ1osZ0JBQU1DLCtCQUErQkgsT0FBckM7QUFBQSxnQkFDTUksa0NBQWtDLElBQUlQLHdCQUFKLENBQTZCTSw0QkFBN0IsQ0FEeEM7QUFBQSxnQkFFTUUsT0FBT0osZUFGYjtBQUFBLGdCQUdNSyxjQUFjLENBQ1pGLCtCQURZLENBSHBCO0FBQUEsZ0JBTU1HLE9BQU9YLGFBTmI7O0FBRFksNkhBU05TLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVh1QmIsSTs7QUFjMUJjLE9BQU9DLE9BQVAsR0FBaUJQLFdBQWpCIiwiZmlsZSI6ImVwc2lsb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgcnVsZU5hbWVzID0gcmVxdWlyZSgnLi4vcnVsZU5hbWVzJyksXG4gICAgICBFbmRPZkxpbmVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9lcHNpbG9uJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgRXBzaWxvblJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIEVwc2lsb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBlcHNpbG9uLFxuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBFcHNpbG9uUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRW5kT2ZMaW5lTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblJ1bGU7XG4iXX0=