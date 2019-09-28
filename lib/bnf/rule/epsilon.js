'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    EpsilonNode = require('../node/epsilon'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var specialSymbols = lexers.specialSymbols,
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
                Node = EpsilonNode;

            return _possibleConstructorReturn(this, (EpsilonRule.__proto__ || Object.getPrototypeOf(EpsilonRule)).call(this, name, definitions, Node));
      }

      return EpsilonRule;
}(Rule);

module.exports = EpsilonRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJSdWxlIiwicnVsZU5hbWVzIiwiRXBzaWxvbk5vZGUiLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJzcGVjaWFsU3ltYm9scyIsImVwc2lsb24iLCJFcHNpbG9uUnVsZU5hbWUiLCJFcHNpbG9uUnVsZSIsImVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsWUFBWUYsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUcsY0FBY0gsUUFBUSxpQkFBUixDQUZwQjtBQUFBLElBR01JLDJCQUEyQkosUUFBUSw4QkFBUixDQUhqQzs7QUFLTSxJQUFFSyxjQUFGLEdBQXFCTixNQUFyQixDQUFFTSxjQUFGO0FBQUEsSUFDRUMsT0FERixHQUNjRCxjQURkLENBQ0VDLE9BREY7QUFBQSxJQUVFQyxlQUZGLEdBRXNCTCxTQUZ0QixDQUVFSyxlQUZGOztJQUlBQyxXOzs7QUFDSiw2QkFBYztBQUFBOztBQUNaLGdCQUFNQywrQkFBK0JILE9BQXJDO0FBQUEsZ0JBQ01JLGtDQUFrQyxJQUFJTix3QkFBSixDQUE2QkssNEJBQTdCLENBRHhDO0FBQUEsZ0JBRU1FLE9BQU9KLGVBRmI7QUFBQSxnQkFHTUssY0FBYyxDQUNaRiwrQkFEWSxDQUhwQjtBQUFBLGdCQU1NRyxPQUFPVixXQU5iOztBQURZLDZIQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYdUJaLEk7O0FBYzFCYSxPQUFPQyxPQUFQLEdBQWlCUCxXQUFqQiIsImZpbGUiOiJlcHNpbG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgRXBzaWxvbk5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2Vwc2lsb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgRXBzaWxvblJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIEVwc2lsb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBlcHNpbG9uLFxuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBFcHNpbG9uUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRXBzaWxvbk5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25SdWxlO1xuIl19