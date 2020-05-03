"use strict";

var _occamLexers = require("occam-lexers");

var _rule = _interopRequireDefault(require("../rule"));

var _definition = _interopRequireDefault(require("../node/definition"));

var _quantifierRule = _interopRequireDefault(require("../definition/quantifierRule"));

var _ruleNames = require("../ruleNames");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var questionMark = _occamLexers.specialSymbols.questionMark;

var OptionalQuantifierRule = /*#__PURE__*/function (_Rule) {
  _inherits(OptionalQuantifierRule, _Rule);

  function OptionalQuantifierRule() {
    _classCallCheck(this, OptionalQuantifierRule);

    var name = _ruleNames.OptionalQuantifierRuleName,
        optionalQuantifierTerminalSymbolContent = questionMark,
        ///
    optionalQuantifierRuleDefinition = new _quantifierRule["default"](optionalQuantifierTerminalSymbolContent),
        definitions = [optionalQuantifierRuleDefinition],
        Node = _definition["default"];
    return _possibleConstructorReturn(this, _getPrototypeOf(OptionalQuantifierRule).call(this, name, definitions, Node));
  }

  return OptionalQuantifierRule;
}(_rule["default"]);

module.exports = OptionalQuantifierRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbmFsUXVhbnRpZmllci5qcyJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJuYW1lIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvcHRpb25hbFF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkRlZmluaXRpb25Ob2RlIiwiUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsWSxHQUFpQkMsMkIsQ0FBakJELFk7O0lBRUZFLHNCOzs7QUFDSixvQ0FBYztBQUFBOztBQUNaLFFBQU1DLElBQUksR0FBR0MscUNBQWI7QUFBQSxRQUNNQyx1Q0FBdUMsR0FBR0wsWUFEaEQ7QUFBQSxRQUM4RDtBQUN4RE0sSUFBQUEsZ0NBQWdDLEdBQUcsSUFBSUMsMEJBQUosQ0FBNkJGLHVDQUE3QixDQUZ6QztBQUFBLFFBR01HLFdBQVcsR0FBRyxDQUNaRixnQ0FEWSxDQUhwQjtBQUFBLFFBTU1HLElBQUksR0FBR0Msc0JBTmI7QUFEWSwrRkFTTlAsSUFUTSxFQVNBSyxXQVRBLEVBU2FDLElBVGI7QUFVYjs7O0VBWGtDRSxnQjs7QUFjckNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsc0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25Ob2RlIGZyb20gXCIuLi9ub2RlL2RlZmluaXRpb25cIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcXVhbnRpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcXVlc3Rpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gcXVlc3Rpb25NYXJrLCAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24ob3B0aW9uYWxRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFF1YW50aWZpZXJSdWxlO1xuIl19