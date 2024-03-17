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
    choiceOfPartsRuleName: function() {
        return choiceOfPartsRuleName;
    },
    definitionRuleName: function() {
        return definitionRuleName;
    },
    definitionsRuleName: function() {
        return definitionsRuleName;
    },
    documentRuleName: function() {
        return documentRuleName;
    },
    endOfLineRuleName: function() {
        return endOfLineRuleName;
    },
    epsilonRuleName: function() {
        return epsilonRuleName;
    },
    errorRuleName: function() {
        return errorRuleName;
    },
    lookAheadModifierRuleName: function() {
        return lookAheadModifierRuleName;
    },
    nameRuleName: function() {
        return nameRuleName;
    },
    noWhitespacePartRuleName: function() {
        return noWhitespacePartRuleName;
    },
    nonTerminalPartRuleName: function() {
        return nonTerminalPartRuleName;
    },
    oneOrMoreQuantifierRuleName: function() {
        return oneOrMoreQuantifierRuleName;
    },
    opacityModifierRuleName: function() {
        return opacityModifierRuleName;
    },
    optionalQuantifierRuleName: function() {
        return optionalQuantifierRuleName;
    },
    partChoiceRuleName: function() {
        return partChoiceRuleName;
    },
    partRuleName: function() {
        return partRuleName;
    },
    precedenceRuleName: function() {
        return precedenceRuleName;
    },
    quantifierRuleName: function() {
        return quantifierRuleName;
    },
    regularExpressionRuleName: function() {
        return regularExpressionRuleName;
    },
    ruleNameRuleName: function() {
        return ruleNameRuleName;
    },
    ruleRuleName: function() {
        return ruleRuleName;
    },
    sequenceOfPartsRuleName: function() {
        return sequenceOfPartsRuleName;
    },
    significantTokenTypeRuleName: function() {
        return significantTokenTypeRuleName;
    },
    terminalPartRuleName: function() {
        return terminalPartRuleName;
    },
    terminalSymbolRuleName: function() {
        return terminalSymbolRuleName;
    },
    wildcardRuleName: function() {
        return wildcardRuleName;
    },
    zeroOrMoreQuantifierRuleName: function() {
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
var noWhitespacePartRuleName = "noWhitespacePart";
var lookAheadModifierRuleName = "lookAheadModifier";
var regularExpressionRuleName = "regularExpression";
var optionalQuantifierRuleName = "optionalQuantifier";
var oneOrMoreQuantifierRuleName = "oneOrMoreQuantifier";
var zeroOrMoreQuantifierRuleName = "zeroOrMoreQuantifier";
var significantTokenTypeRuleName = "significantTokenType";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBuYW1lUnVsZU5hbWUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBwYXJ0UnVsZU5hbWUgPSBcInBhcnRcIjtcbmV4cG9ydCBjb25zdCBydWxlUnVsZU5hbWUgPSBcInJ1bGVcIjtcbmV4cG9ydCBjb25zdCBlcnJvclJ1bGVOYW1lID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IGVwc2lsb25SdWxlTmFtZSA9IFwiZXBzaWxvblwiO1xuZXhwb3J0IGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWUgPSBcInJ1bGVOYW1lXCI7XG5leHBvcnQgY29uc3QgZG9jdW1lbnRSdWxlTmFtZSA9IFwiZG9jdW1lbnRcIjtcbmV4cG9ydCBjb25zdCB3aWxkY2FyZFJ1bGVOYW1lID0gXCJ3aWxkY2FyZFwiO1xuZXhwb3J0IGNvbnN0IGVuZE9mTGluZVJ1bGVOYW1lID0gXCJlbmRPZkxpbmVcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uUnVsZU5hbWUgPSBcImRlZmluaXRpb25cIjtcbmV4cG9ydCBjb25zdCBwcmVjZWRlbmNlUnVsZU5hbWUgPSBcInByZWNlZGVuY2VcIjtcbmV4cG9ydCBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBcInF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCBwYXJ0Q2hvaWNlUnVsZU5hbWUgPSBcInBhcnRDaG9pY2VcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uc1J1bGVOYW1lID0gXCJkZWZpbml0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IHRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBcImNob2ljZU9mUGFydHNcIjtcbmV4cG9ydCBjb25zdCB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFN5bWJvbFwiO1xuZXhwb3J0IGNvbnN0IG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJub25UZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSA9IFwic2VxdWVuY2VPZlBhcnRzXCI7XG5leHBvcnQgY29uc3Qgb3BhY2l0eU1vZGlmaWVyUnVsZU5hbWUgPSBcIm9wYWNpdHlNb2RpZmllclwiO1xuZXhwb3J0IGNvbnN0IG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSA9IFwibm9XaGl0ZXNwYWNlUGFydFwiO1xuZXhwb3J0IGNvbnN0IGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgPSBcImxvb2tBaGVhZE1vZGlmaWVyXCI7XG5leHBvcnQgY29uc3QgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSA9IFwicmVndWxhckV4cHJlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSA9IFwib3B0aW9uYWxRdWFudGlmaWVyXCI7XG5leHBvcnQgY29uc3Qgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lID0gXCJvbmVPck1vcmVRdWFudGlmaWVyXCI7XG5leHBvcnQgY29uc3QgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA9IFwiemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lID0gXCJzaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG4iXSwibmFtZXMiOlsiY2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiZGVmaW5pdGlvblJ1bGVOYW1lIiwiZGVmaW5pdGlvbnNSdWxlTmFtZSIsImRvY3VtZW50UnVsZU5hbWUiLCJlbmRPZkxpbmVSdWxlTmFtZSIsImVwc2lsb25SdWxlTmFtZSIsImVycm9yUnVsZU5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIiwibmFtZVJ1bGVOYW1lIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwibm9uVGVybWluYWxQYXJ0UnVsZU5hbWUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJvcGFjaXR5TW9kaWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwicGFydENob2ljZVJ1bGVOYW1lIiwicGFydFJ1bGVOYW1lIiwicHJlY2VkZW5jZVJ1bGVOYW1lIiwicXVhbnRpZmllclJ1bGVOYW1lIiwicmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSIsInJ1bGVOYW1lUnVsZU5hbWUiLCJydWxlUnVsZU5hbWUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZU5hbWUiLCJ0ZXJtaW5hbFBhcnRSdWxlTmFtZSIsInRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBaUJhQSxxQkFBcUI7ZUFBckJBOztJQU5BQyxrQkFBa0I7ZUFBbEJBOztJQUlBQyxtQkFBbUI7ZUFBbkJBOztJQVBBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQUpBQyxlQUFlO2VBQWZBOztJQURBQyxhQUFhO2VBQWJBOztJQWtCQUMseUJBQXlCO2VBQXpCQTs7SUFyQkFDLFlBQVk7ZUFBWkE7O0lBb0JBQyx3QkFBd0I7ZUFBeEJBOztJQUhBQyx1QkFBdUI7ZUFBdkJBOztJQU9BQywyQkFBMkI7ZUFBM0JBOztJQUxBQyx1QkFBdUI7ZUFBdkJBOztJQUlBQywwQkFBMEI7ZUFBMUJBOztJQVhBQyxrQkFBa0I7ZUFBbEJBOztJQVhBQyxZQUFZO2VBQVpBOztJQVNBQyxrQkFBa0I7ZUFBbEJBOztJQUNBQyxrQkFBa0I7ZUFBbEJBOztJQVdBQyx5QkFBeUI7ZUFBekJBOztJQWpCQUMsZ0JBQWdCO2VBQWhCQTs7SUFIQUMsWUFBWTtlQUFaQTs7SUFnQkFDLHVCQUF1QjtlQUF2QkE7O0lBUUFDLDRCQUE0QjtlQUE1QkE7O0lBWkFDLG9CQUFvQjtlQUFwQkE7O0lBRUFDLHNCQUFzQjtlQUF0QkE7O0lBVEFDLGdCQUFnQjtlQUFoQkE7O0lBa0JBQyw0QkFBNEI7ZUFBNUJBOzs7QUF6Qk4sSUFBTWxCLGVBQWU7QUFDckIsSUFBTU8sZUFBZTtBQUNyQixJQUFNSyxlQUFlO0FBQ3JCLElBQU1kLGdCQUFnQjtBQUN0QixJQUFNRCxrQkFBa0I7QUFDeEIsSUFBTWMsbUJBQW1CO0FBQ3pCLElBQU1oQixtQkFBbUI7QUFDekIsSUFBTXNCLG1CQUFtQjtBQUN6QixJQUFNckIsb0JBQW9CO0FBQzFCLElBQU1ILHFCQUFxQjtBQUMzQixJQUFNZSxxQkFBcUI7QUFDM0IsSUFBTUMscUJBQXFCO0FBQzNCLElBQU1ILHFCQUFxQjtBQUMzQixJQUFNWixzQkFBc0I7QUFDNUIsSUFBTXFCLHVCQUF1QjtBQUM3QixJQUFNdkIsd0JBQXdCO0FBQzlCLElBQU13Qix5QkFBeUI7QUFDL0IsSUFBTWQsMEJBQTBCO0FBQ2hDLElBQU1XLDBCQUEwQjtBQUNoQyxJQUFNVCwwQkFBMEI7QUFDaEMsSUFBTUgsMkJBQTJCO0FBQ2pDLElBQU1GLDRCQUE0QjtBQUNsQyxJQUFNVyw0QkFBNEI7QUFDbEMsSUFBTUwsNkJBQTZCO0FBQ25DLElBQU1GLDhCQUE4QjtBQUNwQyxJQUFNZSwrQkFBK0I7QUFDckMsSUFBTUosK0JBQStCIn0=