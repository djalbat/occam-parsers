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
    startOfContentPartRuleName: function() {
        return startOfContentPartRuleName;
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
var startOfContentPartRuleName = "startOfContentPart";
var oneOrMoreQuantifierRuleName = "oneOrMoreQuantifier";
var zeroOrMoreQuantifierRuleName = "zeroOrMoreQuantifier";
var significantTokenTypeRuleName = "significantTokenType";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBuYW1lUnVsZU5hbWUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBwYXJ0UnVsZU5hbWUgPSBcInBhcnRcIjtcbmV4cG9ydCBjb25zdCBydWxlUnVsZU5hbWUgPSBcInJ1bGVcIjtcbmV4cG9ydCBjb25zdCBlcnJvclJ1bGVOYW1lID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IGVwc2lsb25SdWxlTmFtZSA9IFwiZXBzaWxvblwiO1xuZXhwb3J0IGNvbnN0IHJ1bGVOYW1lUnVsZU5hbWUgPSBcInJ1bGVOYW1lXCI7XG5leHBvcnQgY29uc3QgZG9jdW1lbnRSdWxlTmFtZSA9IFwiZG9jdW1lbnRcIjtcbmV4cG9ydCBjb25zdCB3aWxkY2FyZFJ1bGVOYW1lID0gXCJ3aWxkY2FyZFwiO1xuZXhwb3J0IGNvbnN0IGVuZE9mTGluZVJ1bGVOYW1lID0gXCJlbmRPZkxpbmVcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uUnVsZU5hbWUgPSBcImRlZmluaXRpb25cIjtcbmV4cG9ydCBjb25zdCBwcmVjZWRlbmNlUnVsZU5hbWUgPSBcInByZWNlZGVuY2VcIjtcbmV4cG9ydCBjb25zdCBxdWFudGlmaWVyUnVsZU5hbWUgPSBcInF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCBwYXJ0Q2hvaWNlUnVsZU5hbWUgPSBcInBhcnRDaG9pY2VcIjtcbmV4cG9ydCBjb25zdCBkZWZpbml0aW9uc1J1bGVOYW1lID0gXCJkZWZpbml0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IHRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBjaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBcImNob2ljZU9mUGFydHNcIjtcbmV4cG9ydCBjb25zdCB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFN5bWJvbFwiO1xuZXhwb3J0IGNvbnN0IG5vblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJub25UZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBzZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSA9IFwic2VxdWVuY2VPZlBhcnRzXCI7XG5leHBvcnQgY29uc3Qgb3BhY2l0eU1vZGlmaWVyUnVsZU5hbWUgPSBcIm9wYWNpdHlNb2RpZmllclwiO1xuZXhwb3J0IGNvbnN0IG5vV2hpdGVzcGFjZVBhcnRSdWxlTmFtZSA9IFwibm9XaGl0ZXNwYWNlUGFydFwiO1xuZXhwb3J0IGNvbnN0IGxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUgPSBcImxvb2tBaGVhZE1vZGlmaWVyXCI7XG5leHBvcnQgY29uc3QgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSA9IFwicmVndWxhckV4cHJlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSA9IFwib3B0aW9uYWxRdWFudGlmaWVyXCI7XG5leHBvcnQgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0UnVsZU5hbWUgPSBcInN0YXJ0T2ZDb250ZW50UGFydFwiO1xuZXhwb3J0IGNvbnN0IG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA9IFwib25lT3JNb3JlUXVhbnRpZmllclwiO1xuZXhwb3J0IGNvbnN0IHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBcInplcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5leHBvcnQgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSA9IFwic2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcbiJdLCJuYW1lcyI6WyJjaG9pY2VPZlBhcnRzUnVsZU5hbWUiLCJkZWZpbml0aW9uUnVsZU5hbWUiLCJkZWZpbml0aW9uc1J1bGVOYW1lIiwiZG9jdW1lbnRSdWxlTmFtZSIsImVuZE9mTGluZVJ1bGVOYW1lIiwiZXBzaWxvblJ1bGVOYW1lIiwiZXJyb3JSdWxlTmFtZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUiLCJuYW1lUnVsZU5hbWUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZU5hbWUiLCJub25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9wYWNpdHlNb2RpZmllclJ1bGVOYW1lIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJwYXJ0Q2hvaWNlUnVsZU5hbWUiLCJwYXJ0UnVsZU5hbWUiLCJwcmVjZWRlbmNlUnVsZU5hbWUiLCJxdWFudGlmaWVyUnVsZU5hbWUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwicnVsZU5hbWVSdWxlTmFtZSIsInJ1bGVSdWxlTmFtZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSIsInN0YXJ0T2ZDb250ZW50UGFydFJ1bGVOYW1lIiwidGVybWluYWxQYXJ0UnVsZU5hbWUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lIiwid2lsZGNhcmRSdWxlTmFtZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFpQmFBLHFCQUFxQjtlQUFyQkE7O0lBTkFDLGtCQUFrQjtlQUFsQkE7O0lBSUFDLG1CQUFtQjtlQUFuQkE7O0lBUEFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLGlCQUFpQjtlQUFqQkE7O0lBSkFDLGVBQWU7ZUFBZkE7O0lBREFDLGFBQWE7ZUFBYkE7O0lBa0JBQyx5QkFBeUI7ZUFBekJBOztJQXJCQUMsWUFBWTtlQUFaQTs7SUFvQkFDLHdCQUF3QjtlQUF4QkE7O0lBSEFDLHVCQUF1QjtlQUF2QkE7O0lBUUFDLDJCQUEyQjtlQUEzQkE7O0lBTkFDLHVCQUF1QjtlQUF2QkE7O0lBSUFDLDBCQUEwQjtlQUExQkE7O0lBWEFDLGtCQUFrQjtlQUFsQkE7O0lBWEFDLFlBQVk7ZUFBWkE7O0lBU0FDLGtCQUFrQjtlQUFsQkE7O0lBQ0FDLGtCQUFrQjtlQUFsQkE7O0lBV0FDLHlCQUF5QjtlQUF6QkE7O0lBakJBQyxnQkFBZ0I7ZUFBaEJBOztJQUhBQyxZQUFZO2VBQVpBOztJQWdCQUMsdUJBQXVCO2VBQXZCQTs7SUFTQUMsNEJBQTRCO2VBQTVCQTs7SUFIQUMsMEJBQTBCO2VBQTFCQTs7SUFWQUMsb0JBQW9CO2VBQXBCQTs7SUFFQUMsc0JBQXNCO2VBQXRCQTs7SUFUQUMsZ0JBQWdCO2VBQWhCQTs7SUFtQkFDLDRCQUE0QjtlQUE1QkE7OztBQTFCTixJQUFNbkIsZUFBZTtBQUNyQixJQUFNTyxlQUFlO0FBQ3JCLElBQU1LLGVBQWU7QUFDckIsSUFBTWQsZ0JBQWdCO0FBQ3RCLElBQU1ELGtCQUFrQjtBQUN4QixJQUFNYyxtQkFBbUI7QUFDekIsSUFBTWhCLG1CQUFtQjtBQUN6QixJQUFNdUIsbUJBQW1CO0FBQ3pCLElBQU10QixvQkFBb0I7QUFDMUIsSUFBTUgscUJBQXFCO0FBQzNCLElBQU1lLHFCQUFxQjtBQUMzQixJQUFNQyxxQkFBcUI7QUFDM0IsSUFBTUgscUJBQXFCO0FBQzNCLElBQU1aLHNCQUFzQjtBQUM1QixJQUFNc0IsdUJBQXVCO0FBQzdCLElBQU14Qix3QkFBd0I7QUFDOUIsSUFBTXlCLHlCQUF5QjtBQUMvQixJQUFNZiwwQkFBMEI7QUFDaEMsSUFBTVcsMEJBQTBCO0FBQ2hDLElBQU1ULDBCQUEwQjtBQUNoQyxJQUFNSCwyQkFBMkI7QUFDakMsSUFBTUYsNEJBQTRCO0FBQ2xDLElBQU1XLDRCQUE0QjtBQUNsQyxJQUFNTCw2QkFBNkI7QUFDbkMsSUFBTVUsNkJBQTZCO0FBQ25DLElBQU1aLDhCQUE4QjtBQUNwQyxJQUFNZ0IsK0JBQStCO0FBQ3JDLElBQU1MLCtCQUErQiJ9