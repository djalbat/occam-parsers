'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ruleNames = require('../ruleNames'),
    TerminalSymbolNode = require('../node/terminalSymbol'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var TerminalSymbolRuleName = ruleNames.TerminalSymbolRuleName;

var TerminalSymbolRule = function (_Rule) {
  _inherits(TerminalSymbolRule, _Rule);

  function TerminalSymbolRule() {
    _classCallCheck(this, TerminalSymbolRule);

    var stringLiteralSignificantTokenType = 'stringLiteral',
        stringLiteralSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringLiteralSignificantTokenType),
        name = TerminalSymbolRuleName,
        definitions = [stringLiteralSignificantTokenTypeDefinition],
        Node = TerminalSymbolNode;

    return _possibleConstructorReturn(this, (TerminalSymbolRule.__proto__ || Object.getPrototypeOf(TerminalSymbolRule)).call(this, name, definitions, Node));
  }

  return TerminalSymbolRule;
}(Rule);

module.exports = TerminalSymbolRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcnVsZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwicmVxdWlyZSIsInJ1bGVOYW1lcyIsIlRlcm1pbmFsU3ltYm9sTm9kZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCO0FBQUEsSUFHTUcsaUNBQWlDSCxRQUFRLG9DQUFSLENBSHZDOztJQUtRSSxzQixHQUEyQkgsUyxDQUEzQkcsc0I7O0lBRUZDLGtCOzs7QUFDSixnQ0FBYztBQUFBOztBQUNaLFFBQU1DLG9DQUFvQyxlQUExQztBQUFBLFFBQ01DLDhDQUE4QyxJQUFJSiw4QkFBSixDQUFtQ0csaUNBQW5DLENBRHBEO0FBQUEsUUFFTUUsT0FBT0osc0JBRmI7QUFBQSxRQUdNSyxjQUFjLENBQ1pGLDJDQURZLENBSHBCO0FBQUEsUUFNTUcsT0FBT1Isa0JBTmI7O0FBRFksbUlBU05NLElBVE0sRUFTQUMsV0FUQSxFQVNhQyxJQVRiO0FBVWI7OztFQVg4QlgsSTs7QUFjakNZLE9BQU9DLE9BQVAsR0FBaUJQLGtCQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbFN5bWJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIHJ1bGVOYW1lcyA9IHJlcXVpcmUoJy4uL3J1bGVOYW1lcycpLFxuICAgICAgVGVybWluYWxTeW1ib2xOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jb25zdCB7IFRlcm1pbmFsU3ltYm9sUnVsZU5hbWUgfSA9IHJ1bGVOYW1lcztcblxuY2xhc3MgVGVybWluYWxTeW1ib2xSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHN0cmluZ0xpdGVyYWxTaWduaWZpY2FudFRva2VuVHlwZSA9ICdzdHJpbmdMaXRlcmFsJyxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbihzdHJpbmdMaXRlcmFsU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc3RyaW5nTGl0ZXJhbFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsU3ltYm9sTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xSdWxlO1xuIl19