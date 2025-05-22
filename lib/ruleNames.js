"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get CallAheadModifierRuleName () {
        return CallAheadModifierRuleName;
    },
    get choiceOfPartsRuleName () {
        return choiceOfPartsRuleName;
    },
    get definitionRuleName () {
        return definitionRuleName;
    },
    get definitionsRuleName () {
        return definitionsRuleName;
    },
    get documentRuleName () {
        return documentRuleName;
    },
    get endOfLineRuleName () {
        return endOfLineRuleName;
    },
    get epsilonRuleName () {
        return epsilonRuleName;
    },
    get errorRuleName () {
        return errorRuleName;
    },
    get nameRuleName () {
        return nameRuleName;
    },
    get noWhitespacePartRuleName () {
        return noWhitespacePartRuleName;
    },
    get nonTerminalPartRuleName () {
        return nonTerminalPartRuleName;
    },
    get oneOrMoreQuantifierRuleName () {
        return oneOrMoreQuantifierRuleName;
    },
    get opacityModifierRuleName () {
        return opacityModifierRuleName;
    },
    get optionalQuantifierRuleName () {
        return optionalQuantifierRuleName;
    },
    get partChoiceRuleName () {
        return partChoiceRuleName;
    },
    get partRuleName () {
        return partRuleName;
    },
    get precedenceRuleName () {
        return precedenceRuleName;
    },
    get quantifierRuleName () {
        return quantifierRuleName;
    },
    get regularExpressionRuleName () {
        return regularExpressionRuleName;
    },
    get ruleNameRuleName () {
        return ruleNameRuleName;
    },
    get ruleRuleName () {
        return ruleRuleName;
    },
    get sequenceOfPartsRuleName () {
        return sequenceOfPartsRuleName;
    },
    get significantTokenTypeRuleName () {
        return significantTokenTypeRuleName;
    },
    get startOfContentPartRuleName () {
        return startOfContentPartRuleName;
    },
    get terminalPartRuleName () {
        return terminalPartRuleName;
    },
    get terminalSymbolRuleName () {
        return terminalSymbolRuleName;
    },
    get wildcardRuleName () {
        return wildcardRuleName;
    },
    get zeroOrMoreQuantifierRuleName () {
        return zeroOrMoreQuantifierRuleName;
    }
});
var nameRuleName = "name";
var partRuleName = "part";
var ruleRuleName = "rule";
var errorRuleName = "error";
var epsilonRuleName = "epsilon";
var ruleNameRuleName = "ruleName";
var documentRuleName = "document";
var wildcardRuleName = "wildcard";
var endOfLineRuleName = "endOfLine";
var definitionRuleName = "definition";
var precedenceRuleName = "precedence";
var quantifierRuleName = "quantifier";
var partChoiceRuleName = "partChoice";
var definitionsRuleName = "definitions";
var terminalPartRuleName = "terminalPart";
var choiceOfPartsRuleName = "choiceOfParts";
var terminalSymbolRuleName = "terminalSymbol";
var nonTerminalPartRuleName = "nonTerminalPart";
var sequenceOfPartsRuleName = "sequenceOfParts";
var opacityModifierRuleName = "opacityModifier";
var noWhitespacePartRuleName = "noWhitespace";
var CallAheadModifierRuleName = "callAheadModifier";
var regularExpressionRuleName = "regularExpression";
var optionalQuantifierRuleName = "optionalQuantifier";
var startOfContentPartRuleName = "startOfContent";
var oneOrMoreQuantifierRuleName = "oneOrMoreQuantifier";
var zeroOrMoreQuantifierRuleName = "zeroOrMoreQuantifier";
var significantTokenTypeRuleName = "significantTokenType";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBuYW1lUnVsZU5hbWUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBwYXJ0UnVsZU5hbWUgPSBcInBhcnRcIjtcbmV4cG9ydCBjb25zdCBydWxlUnVsZU5hbWUgPSBcInJ1bGVcIjtcbmV4cG9ydCBjb25zdCBlcnJvclJ1bGVOYW1lID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IGVwc2lsb25SdWxlTmFtZSA9IFwiZXBzaWxvblwiO1xuZXhwb3J0IGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWUgPSBcInJ1bGVOYW1lXCI7XG5leHBvcnQgY29uc3QgZG9jdW1lbnRSdWxlTmFtZSA9IFwiZG9jdW1lbnRcIjtcbmV4cG9ydCBjb25zdCB3aWxkY2FyZFJ1bGVOYW1lID0gXCJ3aWxkY2FyZFwiO1xuZXhwb3J0IGNvbnN0IGVuZE9mTGluZVJ1bGVOYW1lID0gXCJlbmRPZkxpbmVcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uUnVsZU5hbWUgPSBcImRlZmluaXRpb25cIjtcbmV4cG9ydCBjb25zdCBwcmVjZWRlbmNlUnVsZU5hbWUgPSBcInByZWNlZGVuY2VcIjtcbmV4cG9ydCBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBcInF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCBwYXJ0Q2hvaWNlUnVsZU5hbWUgPSBcInBhcnRDaG9pY2VcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uc1J1bGVOYW1lID0gXCJkZWZpbml0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IHRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBcImNob2ljZU9mUGFydHNcIjtcbmV4cG9ydCBjb25zdCB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFN5bWJvbFwiO1xuZXhwb3J0IGNvbnN0IG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJub25UZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSA9IFwic2VxdWVuY2VPZlBhcnRzXCI7XG5leHBvcnQgY29uc3Qgb3BhY2l0eU1vZGlmaWVyUnVsZU5hbWUgPSBcIm9wYWNpdHlNb2RpZmllclwiO1xuZXhwb3J0IGNvbnN0IG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSA9IFwibm9XaGl0ZXNwYWNlXCI7XG5leHBvcnQgY29uc3QgQ2FsbEFoZWFkTW9kaWZpZXJSdWxlTmFtZSA9IFwiY2FsbEFoZWFkTW9kaWZpZXJcIjtcbmV4cG9ydCBjb25zdCByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lID0gXCJyZWd1bGFyRXhwcmVzc2lvblwiO1xuZXhwb3J0IGNvbnN0IG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lID0gXCJvcHRpb25hbFF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCBzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSA9IFwic3RhcnRPZkNvbnRlbnRcIjtcbmV4cG9ydCBjb25zdCBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBcIm9uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lID0gXCJ6ZXJvT3JNb3JlUXVhbnRpZmllclwiO1xuZXhwb3J0IGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUgPSBcInNpZ25pZmljYW50VG9rZW5UeXBlXCI7XG4iXSwibmFtZXMiOlsiQ2FsbEFoZWFkTW9kaWZpZXJSdWxlTmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZSIsImRlZmluaXRpb25SdWxlTmFtZSIsImRlZmluaXRpb25zUnVsZU5hbWUiLCJkb2N1bWVudFJ1bGVOYW1lIiwiZW5kT2ZMaW5lUnVsZU5hbWUiLCJlcHNpbG9uUnVsZU5hbWUiLCJlcnJvclJ1bGVOYW1lIiwibmFtZVJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwicGFydENob2ljZVJ1bGVOYW1lIiwicGFydFJ1bGVOYW1lIiwicHJlY2VkZW5jZVJ1bGVOYW1lIiwicXVhbnRpZmllclJ1bGVOYW1lIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsInJ1bGVOYW1lUnVsZU5hbWUiLCJydWxlUnVsZU5hbWUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJzdGFydE9mQ29udGVudFBhcnRSdWxlTmFtZSIsInRlcm1pbmFsUGFydFJ1bGVOYW1lIiwidGVybWluYWxTeW1ib2xSdWxlTmFtZSIsIndpbGRjYXJkUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1QmFBO2VBQUFBOztRQU5BQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQVBBQztlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQURBQztlQUFBQTs7UUFIQUM7ZUFBQUE7O1FBb0JBQztlQUFBQTs7UUFIQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFJQUM7ZUFBQUE7O1FBWEFDO2VBQUFBOztRQVhBQztlQUFBQTs7UUFTQUM7ZUFBQUE7O1FBQ0FDO2VBQUFBOztRQVdBQztlQUFBQTs7UUFqQkFDO2VBQUFBOztRQUhBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQVNBQztlQUFBQTs7UUFIQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFUQUM7ZUFBQUE7O1FBbUJBQztlQUFBQTs7O0FBMUJOLElBQU1uQixlQUFlO0FBQ3JCLElBQU1PLGVBQWU7QUFDckIsSUFBTUssZUFBZTtBQUNyQixJQUFNYixnQkFBZ0I7QUFDdEIsSUFBTUQsa0JBQWtCO0FBQ3hCLElBQU1hLG1CQUFtQjtBQUN6QixJQUFNZixtQkFBbUI7QUFDekIsSUFBTXNCLG1CQUFtQjtBQUN6QixJQUFNckIsb0JBQW9CO0FBQzFCLElBQU1ILHFCQUFxQjtBQUMzQixJQUFNYyxxQkFBcUI7QUFDM0IsSUFBTUMscUJBQXFCO0FBQzNCLElBQU1ILHFCQUFxQjtBQUMzQixJQUFNWCxzQkFBc0I7QUFDNUIsSUFBTXFCLHVCQUF1QjtBQUM3QixJQUFNdkIsd0JBQXdCO0FBQzlCLElBQU13Qix5QkFBeUI7QUFDL0IsSUFBTWYsMEJBQTBCO0FBQ2hDLElBQU1XLDBCQUEwQjtBQUNoQyxJQUFNVCwwQkFBMEI7QUFDaEMsSUFBTUgsMkJBQTJCO0FBQ2pDLElBQU1ULDRCQUE0QjtBQUNsQyxJQUFNa0IsNEJBQTRCO0FBQ2xDLElBQU1MLDZCQUE2QjtBQUNuQyxJQUFNVSw2QkFBNkI7QUFDbkMsSUFBTVosOEJBQThCO0FBQ3BDLElBQU1nQiwrQkFBK0I7QUFDckMsSUFBTUwsK0JBQStCIn0=