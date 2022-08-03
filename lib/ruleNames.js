"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    nameRuleName: function() {
        return nameRuleName;
    },
    partRuleName: function() {
        return partRuleName;
    },
    ruleRuleName: function() {
        return ruleRuleName;
    },
    errorRuleName: function() {
        return errorRuleName;
    },
    epsilonRuleName: function() {
        return epsilonRuleName;
    },
    ruleNameRuleName: function() {
        return ruleNameRuleName;
    },
    documentRuleName: function() {
        return documentRuleName;
    },
    wildcardRuleName: function() {
        return wildcardRuleName;
    },
    endOfLineRuleName: function() {
        return endOfLineRuleName;
    },
    definitionRuleName: function() {
        return definitionRuleName;
    },
    quantifierRuleName: function() {
        return quantifierRuleName;
    },
    definitionsRuleName: function() {
        return definitionsRuleName;
    },
    terminalPartRuleName: function() {
        return terminalPartRuleName;
    },
    choiceOfPartsRuleName: function() {
        return choiceOfPartsRuleName;
    },
    terminalSymbolRuleName: function() {
        return terminalSymbolRuleName;
    },
    bonTerminalPartRuleName: function() {
        return bonTerminalPartRuleName;
    },
    sequenceOfPartsRuleName: function() {
        return sequenceOfPartsRuleName;
    },
    noWhitespacePartRuleName: function() {
        return noWhitespacePartRuleName;
    },
    lookAheadModifierRuleName: function() {
        return lookAheadModifierRuleName;
    },
    ambiguousModifierRuleName: function() {
        return ambiguousModifierRuleName;
    },
    regularExpressionRuleName: function() {
        return regularExpressionRuleName;
    },
    optionalQuantifierRuleName: function() {
        return optionalQuantifierRuleName;
    },
    oneOrMoreQuantifierRuleName: function() {
        return oneOrMoreQuantifierRuleName;
    },
    zeroOrMoreQuantifierRuleName: function() {
        return zeroOrMoreQuantifierRuleName;
    },
    significantTokenTypeRuleName: function() {
        return significantTokenTypeRuleName;
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
var quantifierRuleName = "quantifier";
var definitionsRuleName = "definitions";
var terminalPartRuleName = "terminalPart";
var choiceOfPartsRuleName = "choiceOfParts";
var terminalSymbolRuleName = "terminalSymbol";
var bonTerminalPartRuleName = "nonTerminalPart";
var sequenceOfPartsRuleName = "sequenceOfParts";
var noWhitespacePartRuleName = "noWhitespacePart";
var lookAheadModifierRuleName = "lookAheadModifier";
var ambiguousModifierRuleName = "AmbiguousModifier";
var regularExpressionRuleName = "regularExpression";
var optionalQuantifierRuleName = "optionalQuantifier";
var oneOrMoreQuantifierRuleName = "oneOrMoreQuantifier";
var zeroOrMoreQuantifierRuleName = "zeroOrMoreQuantifier";
var significantTokenTypeRuleName = "significantTokenType";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBuYW1lUnVsZU5hbWUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBwYXJ0UnVsZU5hbWUgPSBcInBhcnRcIjtcbmV4cG9ydCBjb25zdCBydWxlUnVsZU5hbWUgPSBcInJ1bGVcIjtcbmV4cG9ydCBjb25zdCBlcnJvclJ1bGVOYW1lID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IGVwc2lsb25SdWxlTmFtZSA9IFwiZXBzaWxvblwiO1xuZXhwb3J0IGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWUgPSBcInJ1bGVOYW1lXCI7XG5leHBvcnQgY29uc3QgZG9jdW1lbnRSdWxlTmFtZSA9IFwiZG9jdW1lbnRcIjtcbmV4cG9ydCBjb25zdCB3aWxkY2FyZFJ1bGVOYW1lID0gXCJ3aWxkY2FyZFwiO1xuZXhwb3J0IGNvbnN0IGVuZE9mTGluZVJ1bGVOYW1lID0gXCJlbmRPZkxpbmVcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uUnVsZU5hbWUgPSBcImRlZmluaXRpb25cIjtcbmV4cG9ydCBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBcInF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uc1J1bGVOYW1lID0gXCJkZWZpbml0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IHRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBcImNob2ljZU9mUGFydHNcIjtcbmV4cG9ydCBjb25zdCB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFN5bWJvbFwiO1xuZXhwb3J0IGNvbnN0IGJvblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJub25UZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSA9IFwic2VxdWVuY2VPZlBhcnRzXCI7XG5leHBvcnQgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lID0gXCJub1doaXRlc3BhY2VQYXJ0XCI7XG5leHBvcnQgY29uc3QgbG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSA9IFwibG9va0FoZWFkTW9kaWZpZXJcIjtcbmV4cG9ydCBjb25zdCBhbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lID0gXCJBbWJpZ3VvdXNNb2RpZmllclwiO1xuZXhwb3J0IGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUgPSBcInJlZ3VsYXJFeHByZXNzaW9uXCI7XG5leHBvcnQgY29uc3Qgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgPSBcIm9wdGlvbmFsUXVhbnRpZmllclwiO1xuZXhwb3J0IGNvbnN0IG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA9IFwib25lT3JNb3JlUXVhbnRpZmllclwiO1xuZXhwb3J0IGNvbnN0IHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBcInplcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5leHBvcnQgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSA9IFwic2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuIl0sIm5hbWVzIjpbIm5hbWVSdWxlTmFtZSIsInBhcnRSdWxlTmFtZSIsInJ1bGVSdWxlTmFtZSIsImVycm9yUnVsZU5hbWUiLCJlcHNpbG9uUnVsZU5hbWUiLCJydWxlTmFtZVJ1bGVOYW1lIiwiZG9jdW1lbnRSdWxlTmFtZSIsIndpbGRjYXJkUnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZSIsImRlZmluaXRpb25SdWxlTmFtZSIsInF1YW50aWZpZXJSdWxlTmFtZSIsImRlZmluaXRpb25zUnVsZU5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsImNob2ljZU9mUGFydHNSdWxlTmFtZSIsInRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJib25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsImFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVBQSxZQUFZO2VBQVpBLFlBQVk7O0lBQ1pDLFlBQVk7ZUFBWkEsWUFBWTs7SUFDWkMsWUFBWTtlQUFaQSxZQUFZOztJQUNaQyxhQUFhO2VBQWJBLGFBQWE7O0lBQ2JDLGVBQWU7ZUFBZkEsZUFBZTs7SUFDZkMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBQ2hCQyxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7SUFDaEJDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQUNoQkMsaUJBQWlCO2VBQWpCQSxpQkFBaUI7O0lBQ2pCQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFDbEJDLGtCQUFrQjtlQUFsQkEsa0JBQWtCOztJQUNsQkMsbUJBQW1CO2VBQW5CQSxtQkFBbUI7O0lBQ25CQyxvQkFBb0I7ZUFBcEJBLG9CQUFvQjs7SUFDcEJDLHFCQUFxQjtlQUFyQkEscUJBQXFCOztJQUNyQkMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBQ3RCQyx1QkFBdUI7ZUFBdkJBLHVCQUF1Qjs7SUFDdkJDLHVCQUF1QjtlQUF2QkEsdUJBQXVCOztJQUN2QkMsd0JBQXdCO2VBQXhCQSx3QkFBd0I7O0lBQ3hCQyx5QkFBeUI7ZUFBekJBLHlCQUF5Qjs7SUFDekJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUN6QkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBQ3pCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFDMUJDLDJCQUEyQjtlQUEzQkEsMkJBQTJCOztJQUMzQkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBQzVCQyw0QkFBNEI7ZUFBNUJBLDRCQUE0Qjs7O0FBeEJsQyxJQUFNeEIsWUFBWSxHQUFHLE1BQU0sQUFBQztBQUM1QixJQUFNQyxZQUFZLEdBQUcsTUFBTSxBQUFDO0FBQzVCLElBQU1DLFlBQVksR0FBRyxNQUFNLEFBQUM7QUFDNUIsSUFBTUMsYUFBYSxHQUFHLE9BQU8sQUFBQztBQUM5QixJQUFNQyxlQUFlLEdBQUcsU0FBUyxBQUFDO0FBQ2xDLElBQU1DLGdCQUFnQixHQUFHLFVBQVUsQUFBQztBQUNwQyxJQUFNQyxnQkFBZ0IsR0FBRyxVQUFVLEFBQUM7QUFDcEMsSUFBTUMsZ0JBQWdCLEdBQUcsVUFBVSxBQUFDO0FBQ3BDLElBQU1DLGlCQUFpQixHQUFHLFdBQVcsQUFBQztBQUN0QyxJQUFNQyxrQkFBa0IsR0FBRyxZQUFZLEFBQUM7QUFDeEMsSUFBTUMsa0JBQWtCLEdBQUcsWUFBWSxBQUFDO0FBQ3hDLElBQU1DLG1CQUFtQixHQUFHLGFBQWEsQUFBQztBQUMxQyxJQUFNQyxvQkFBb0IsR0FBRyxjQUFjLEFBQUM7QUFDNUMsSUFBTUMscUJBQXFCLEdBQUcsZUFBZSxBQUFDO0FBQzlDLElBQU1DLHNCQUFzQixHQUFHLGdCQUFnQixBQUFDO0FBQ2hELElBQU1DLHVCQUF1QixHQUFHLGlCQUFpQixBQUFDO0FBQ2xELElBQU1DLHVCQUF1QixHQUFHLGlCQUFpQixBQUFDO0FBQ2xELElBQU1DLHdCQUF3QixHQUFHLGtCQUFrQixBQUFDO0FBQ3BELElBQU1DLHlCQUF5QixHQUFHLG1CQUFtQixBQUFDO0FBQ3RELElBQU1DLHlCQUF5QixHQUFHLG1CQUFtQixBQUFDO0FBQ3RELElBQU1DLHlCQUF5QixHQUFHLG1CQUFtQixBQUFDO0FBQ3RELElBQU1DLDBCQUEwQixHQUFHLG9CQUFvQixBQUFDO0FBQ3hELElBQU1DLDJCQUEyQixHQUFHLHFCQUFxQixBQUFDO0FBQzFELElBQU1DLDRCQUE0QixHQUFHLHNCQUFzQixBQUFDO0FBQzVELElBQU1DLDRCQUE0QixHQUFHLHNCQUFzQixBQUFDIn0=