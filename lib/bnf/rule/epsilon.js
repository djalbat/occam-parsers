"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var Rule = require("../rule"),
    ruleNames = require("../ruleNames"),
    EpsilonNode = require("../node/epsilon"),
    TerminalSymbolDefinition = require("../definition/terminalSymbol");

var specialSymbols = lexers.specialSymbols,
    epsilon = specialSymbols.epsilon,
    EpsilonRuleName = ruleNames.EpsilonRuleName;

var EpsilonRule = /*#__PURE__*/function (_Rule) {
  _inherits(EpsilonRule, _Rule);

  function EpsilonRule() {
    _classCallCheck(this, EpsilonRule);

    var epsilonTerminalSymbolContent = epsilon,
        epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
        name = EpsilonRuleName,
        definitions = [epsilonTerminalSymbolDefinition],
        Node = EpsilonNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonRule).call(this, name, definitions, Node));
  }

  return EpsilonRule;
}(Rule);

module.exports = EpsilonRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb24uanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlJ1bGUiLCJydWxlTmFtZXMiLCJFcHNpbG9uTm9kZSIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25SdWxlTmFtZSIsIkVwc2lsb25SdWxlIiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCIsImVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7QUFBQSxJQUNNRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBRHpCO0FBQUEsSUFFTUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsaUJBQUQsQ0FGM0I7QUFBQSxJQUdNSSx3QkFBd0IsR0FBR0osT0FBTyxDQUFDLDhCQUFELENBSHhDOztBQUtNLElBQUVLLGNBQUYsR0FBcUJOLE1BQXJCLENBQUVNLGNBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NELGNBRGQsQ0FDRUMsT0FERjtBQUFBLElBRUVDLGVBRkYsR0FFc0JMLFNBRnRCLENBRUVLLGVBRkY7O0lBSUFDLFc7OztBQUNKLHlCQUFjO0FBQUE7O0FBQ1osUUFBTUMsNEJBQTRCLEdBQUdILE9BQXJDO0FBQUEsUUFDTUksK0JBQStCLEdBQUcsSUFBSU4sd0JBQUosQ0FBNkJLLDRCQUE3QixDQUR4QztBQUFBLFFBRU1FLElBQUksR0FBR0osZUFGYjtBQUFBLFFBR01LLFdBQVcsR0FBRyxDQUNaRiwrQkFEWSxDQUhwQjtBQUFBLFFBTU1HLElBQUksR0FBR1YsV0FOYjtBQURZLG9GQVNOUSxJQVRNLEVBU0FDLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYdUJaLEk7O0FBYzFCYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLFdBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKFwiLi4vcnVsZVwiKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoXCIuLi9ydWxlTmFtZXNcIiksXG4gICAgICBFcHNpbG9uTm9kZSA9IHJlcXVpcmUoXCIuLi9ub2RlL2Vwc2lsb25cIiksXG4gICAgICBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbFwiKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgRXBzaWxvblJ1bGVOYW1lIH0gPSBydWxlTmFtZXM7XG5cbmNsYXNzIEVwc2lsb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBlcHNpbG9uLFxuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBFcHNpbG9uUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRXBzaWxvbk5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25SdWxlO1xuIl19