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
    DefinitionNode = require("../node/definition"),
    QuantifierRuleDefinition = require("../definition/quantifierRule");

var specialSymbols = lexers.specialSymbols,
    questionMark = specialSymbols.questionMark,
    OptionalQuantifierRuleName = ruleNames.OptionalQuantifierRuleName;

var OptionalQuantifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(OptionalQuantifierRule, _Rule);

  function OptionalQuantifierRule() {
    _classCallCheck(this, OptionalQuantifierRule);

    var name = OptionalQuantifierRuleName,
        optionalQuantifierTerminalSymbolContent = questionMark,
        ///
    optionalQuantifierRuleDefinition = new QuantifierRuleDefinition(optionalQuantifierTerminalSymbolContent),
        definitions = [optionalQuantifierRuleDefinition],
        Node = DefinitionNode;
    return _possibleConstructorReturn(this, _getPrototypeOf(OptionalQuantifierRule).call(this, name, definitions, Node));
  }

  return OptionalQuantifierRule;
}(Rule);

module.exports = OptionalQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUXVhbnRpZmllci5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUnVsZSIsInJ1bGVOYW1lcyIsIkRlZmluaXRpb25Ob2RlIiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwic3BlY2lhbFN5bWJvbHMiLCJxdWVzdGlvbk1hcmsiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJuYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50Iiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsU0FBRCxDQUFwQjtBQUFBLElBQ01FLFNBQVMsR0FBR0YsT0FBTyxDQUFDLGNBQUQsQ0FEekI7QUFBQSxJQUVNRyxjQUFjLEdBQUdILE9BQU8sQ0FBQyxvQkFBRCxDQUY5QjtBQUFBLElBR01JLHdCQUF3QixHQUFHSixPQUFPLENBQUMsOEJBQUQsQ0FIeEM7O0FBS00sSUFBRUssY0FBRixHQUFxQk4sTUFBckIsQ0FBRU0sY0FBRjtBQUFBLElBQ0VDLFlBREYsR0FDbUJELGNBRG5CLENBQ0VDLFlBREY7QUFBQSxJQUVFQywwQkFGRixHQUVpQ0wsU0FGakMsQ0FFRUssMEJBRkY7O0lBSUFDLHNCOzs7QUFDSixvQ0FBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0YsMEJBQWI7QUFBQSxRQUNNRyx1Q0FBdUMsR0FBR0osWUFEaEQ7QUFBQSxRQUM4RDtBQUN4REssSUFBQUEsZ0NBQWdDLEdBQUcsSUFBSVAsd0JBQUosQ0FBNkJNLHVDQUE3QixDQUZ6QztBQUFBLFFBR01FLFdBQVcsR0FBRyxDQUNaRCxnQ0FEWSxDQUhwQjtBQUFBLFFBTU1FLElBQUksR0FBR1YsY0FOYjtBQURZLCtGQVNOTSxJQVRNLEVBU0FHLFdBVEEsRUFTYUMsSUFUYjtBQVViOzs7RUFYa0NaLEk7O0FBY3JDYSxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLHNCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZShcIi4uL3J1bGVcIiksXG4gICAgICBydWxlTmFtZXMgPSByZXF1aXJlKFwiLi4vcnVsZU5hbWVzXCIpLFxuICAgICAgRGVmaW5pdGlvbk5vZGUgPSByZXF1aXJlKFwiLi4vbm9kZS9kZWZpbml0aW9uXCIpLFxuICAgICAgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIik7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scyxcbiAgICAgIHsgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gcXVlc3Rpb25NYXJrLCAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24ob3B0aW9uYWxRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFF1YW50aWZpZXJSdWxlO1xuIl19