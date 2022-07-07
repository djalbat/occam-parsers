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
    NameRuleName: function() {
        return NameRuleName;
    },
    PartRuleName: function() {
        return PartRuleName;
    },
    RuleRuleName: function() {
        return RuleRuleName;
    },
    ErrorRuleName: function() {
        return ErrorRuleName;
    },
    RuleNameRuleName: function() {
        return RuleNameRuleName;
    },
    DocumentRuleName: function() {
        return DocumentRuleName;
    },
    WildcardRuleName: function() {
        return WildcardRuleName;
    },
    EndOfLineRuleName: function() {
        return EndOfLineRuleName;
    },
    DefinitionRuleName: function() {
        return DefinitionRuleName;
    },
    QuantifierRuleName: function() {
        return QuantifierRuleName;
    },
    DefinitionsRuleName: function() {
        return DefinitionsRuleName;
    },
    TerminalPartRuleName: function() {
        return TerminalPartRuleName;
    },
    ChoiceOfPartsRuleName: function() {
        return ChoiceOfPartsRuleName;
    },
    TerminalSymbolRuleName: function() {
        return TerminalSymbolRuleName;
    },
    NonTerminalPartRuleName: function() {
        return NonTerminalPartRuleName;
    },
    SequenceOfPartsRuleName: function() {
        return SequenceOfPartsRuleName;
    },
    NoWhitespacePartRuleName: function() {
        return NoWhitespacePartRuleName;
    },
    LookAheadModifierRuleName: function() {
        return LookAheadModifierRuleName;
    },
    AmbiguousModifierRuleName: function() {
        return AmbiguousModifierRuleName;
    },
    RegularExpressionRuleName: function() {
        return RegularExpressionRuleName;
    },
    OptionalQuantifierRuleName: function() {
        return OptionalQuantifierRuleName;
    },
    OneOrMoreQuantifierRuleName: function() {
        return OneOrMoreQuantifierRuleName;
    },
    ZeroOrMoreQuantifierRuleName: function() {
        return ZeroOrMoreQuantifierRuleName;
    },
    SignificantTokenTypeRuleName: function() {
        return SignificantTokenTypeRuleName;
    }
});
var NameRuleName = "name";
var PartRuleName = "part";
var RuleRuleName = "rule";
var ErrorRuleName = "error";
var RuleNameRuleName = "ruleName";
var DocumentRuleName = "document";
var WildcardRuleName = "wildcard";
var EndOfLineRuleName = "endOfLine";
var DefinitionRuleName = "definition";
var QuantifierRuleName = "quantifier";
var DefinitionsRuleName = "definitions";
var TerminalPartRuleName = "terminalPart";
var ChoiceOfPartsRuleName = "choiceOfParts";
var TerminalSymbolRuleName = "terminalSymbol";
var NonTerminalPartRuleName = "nonTerminalPart";
var SequenceOfPartsRuleName = "sequenceOfParts";
var NoWhitespacePartRuleName = "noWhitespacePart";
var LookAheadModifierRuleName = "lookAheadModifier";
var AmbiguousModifierRuleName = "AmbiguousModifier";
var RegularExpressionRuleName = "regularExpression";
var OptionalQuantifierRuleName = "optionalQuantifier";
var OneOrMoreQuantifierRuleName = "oneOrMoreQuantifier";
var ZeroOrMoreQuantifierRuleName = "zeroOrMoreQuantifier";
var SignificantTokenTypeRuleName = "significantTokenType";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBOYW1lUnVsZU5hbWUgPSBcIm5hbWVcIjtcbmV4cG9ydCBjb25zdCBQYXJ0UnVsZU5hbWUgPSBcInBhcnRcIjtcbmV4cG9ydCBjb25zdCBSdWxlUnVsZU5hbWUgPSBcInJ1bGVcIjtcbmV4cG9ydCBjb25zdCBFcnJvclJ1bGVOYW1lID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IFJ1bGVOYW1lUnVsZU5hbWUgPSBcInJ1bGVOYW1lXCI7XG5leHBvcnQgY29uc3QgRG9jdW1lbnRSdWxlTmFtZSA9IFwiZG9jdW1lbnRcIjtcbmV4cG9ydCBjb25zdCBXaWxkY2FyZFJ1bGVOYW1lID0gXCJ3aWxkY2FyZFwiO1xuZXhwb3J0IGNvbnN0IEVuZE9mTGluZVJ1bGVOYW1lID0gXCJlbmRPZkxpbmVcIjtcbmV4cG9ydCBjb25zdCBEZWZpbml0aW9uUnVsZU5hbWUgPSBcImRlZmluaXRpb25cIjtcbmV4cG9ydCBjb25zdCBRdWFudGlmaWVyUnVsZU5hbWUgPSBcInF1YW50aWZpZXJcIjtcbmV4cG9ydCBjb25zdCBEZWZpbml0aW9uc1J1bGVOYW1lID0gXCJkZWZpbml0aW9uc1wiO1xuZXhwb3J0IGNvbnN0IFRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBDaG9pY2VPZlBhcnRzUnVsZU5hbWUgPSBcImNob2ljZU9mUGFydHNcIjtcbmV4cG9ydCBjb25zdCBUZXJtaW5hbFN5bWJvbFJ1bGVOYW1lID0gXCJ0ZXJtaW5hbFN5bWJvbFwiO1xuZXhwb3J0IGNvbnN0IE5vblRlcm1pbmFsUGFydFJ1bGVOYW1lID0gXCJub25UZXJtaW5hbFBhcnRcIjtcbmV4cG9ydCBjb25zdCBTZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSA9IFwic2VxdWVuY2VPZlBhcnRzXCI7XG5leHBvcnQgY29uc3QgTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lID0gXCJub1doaXRlc3BhY2VQYXJ0XCI7XG5leHBvcnQgY29uc3QgTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSA9IFwibG9va0FoZWFkTW9kaWZpZXJcIjtcbmV4cG9ydCBjb25zdCBBbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lID0gXCJBbWJpZ3VvdXNNb2RpZmllclwiO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUgPSBcInJlZ3VsYXJFeHByZXNzaW9uXCI7XG5leHBvcnQgY29uc3QgT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUgPSBcIm9wdGlvbmFsUXVhbnRpZmllclwiO1xuZXhwb3J0IGNvbnN0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSA9IFwib25lT3JNb3JlUXVhbnRpZmllclwiO1xuZXhwb3J0IGNvbnN0IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgPSBcInplcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5leHBvcnQgY29uc3QgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSA9IFwic2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuIl0sIm5hbWVzIjpbIk5hbWVSdWxlTmFtZSIsIlBhcnRSdWxlTmFtZSIsIlJ1bGVSdWxlTmFtZSIsIkVycm9yUnVsZU5hbWUiLCJSdWxlTmFtZVJ1bGVOYW1lIiwiRG9jdW1lbnRSdWxlTmFtZSIsIldpbGRjYXJkUnVsZU5hbWUiLCJFbmRPZkxpbmVSdWxlTmFtZSIsIkRlZmluaXRpb25SdWxlTmFtZSIsIlF1YW50aWZpZXJSdWxlTmFtZSIsIkRlZmluaXRpb25zUnVsZU5hbWUiLCJUZXJtaW5hbFBhcnRSdWxlTmFtZSIsIkNob2ljZU9mUGFydHNSdWxlTmFtZSIsIlRlcm1pbmFsU3ltYm9sUnVsZU5hbWUiLCJOb25UZXJtaW5hbFBhcnRSdWxlTmFtZSIsIlNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGVOYW1lIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsIkFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVBQSxZQUFZO2VBQVpBLFlBQVk7O0lBQ1pDLFlBQVk7ZUFBWkEsWUFBWTs7SUFDWkMsWUFBWTtlQUFaQSxZQUFZOztJQUNaQyxhQUFhO2VBQWJBLGFBQWE7O0lBQ2JDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQUNoQkMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBQ2hCQyxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7SUFDaEJDLGlCQUFpQjtlQUFqQkEsaUJBQWlCOztJQUNqQkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBQ2xCQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFDbEJDLG1CQUFtQjtlQUFuQkEsbUJBQW1COztJQUNuQkMsb0JBQW9CO2VBQXBCQSxvQkFBb0I7O0lBQ3BCQyxxQkFBcUI7ZUFBckJBLHFCQUFxQjs7SUFDckJDLHNCQUFzQjtlQUF0QkEsc0JBQXNCOztJQUN0QkMsdUJBQXVCO2VBQXZCQSx1QkFBdUI7O0lBQ3ZCQyx1QkFBdUI7ZUFBdkJBLHVCQUF1Qjs7SUFDdkJDLHdCQUF3QjtlQUF4QkEsd0JBQXdCOztJQUN4QkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBQ3pCQyx5QkFBeUI7ZUFBekJBLHlCQUF5Qjs7SUFDekJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUN6QkMsMEJBQTBCO2VBQTFCQSwwQkFBMEI7O0lBQzFCQywyQkFBMkI7ZUFBM0JBLDJCQUEyQjs7SUFDM0JDLDRCQUE0QjtlQUE1QkEsNEJBQTRCOztJQUM1QkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7OztBQXZCbEMsSUFBTXZCLFlBQVksR0FBRyxNQUFNLEFBQUM7QUFDNUIsSUFBTUMsWUFBWSxHQUFHLE1BQU0sQUFBQztBQUM1QixJQUFNQyxZQUFZLEdBQUcsTUFBTSxBQUFDO0FBQzVCLElBQU1DLGFBQWEsR0FBRyxPQUFPLEFBQUM7QUFDOUIsSUFBTUMsZ0JBQWdCLEdBQUcsVUFBVSxBQUFDO0FBQ3BDLElBQU1DLGdCQUFnQixHQUFHLFVBQVUsQUFBQztBQUNwQyxJQUFNQyxnQkFBZ0IsR0FBRyxVQUFVLEFBQUM7QUFDcEMsSUFBTUMsaUJBQWlCLEdBQUcsV0FBVyxBQUFDO0FBQ3RDLElBQU1DLGtCQUFrQixHQUFHLFlBQVksQUFBQztBQUN4QyxJQUFNQyxrQkFBa0IsR0FBRyxZQUFZLEFBQUM7QUFDeEMsSUFBTUMsbUJBQW1CLEdBQUcsYUFBYSxBQUFDO0FBQzFDLElBQU1DLG9CQUFvQixHQUFHLGNBQWMsQUFBQztBQUM1QyxJQUFNQyxxQkFBcUIsR0FBRyxlQUFlLEFBQUM7QUFDOUMsSUFBTUMsc0JBQXNCLEdBQUcsZ0JBQWdCLEFBQUM7QUFDaEQsSUFBTUMsdUJBQXVCLEdBQUcsaUJBQWlCLEFBQUM7QUFDbEQsSUFBTUMsdUJBQXVCLEdBQUcsaUJBQWlCLEFBQUM7QUFDbEQsSUFBTUMsd0JBQXdCLEdBQUcsa0JBQWtCLEFBQUM7QUFDcEQsSUFBTUMseUJBQXlCLEdBQUcsbUJBQW1CLEFBQUM7QUFDdEQsSUFBTUMseUJBQXlCLEdBQUcsbUJBQW1CLEFBQUM7QUFDdEQsSUFBTUMseUJBQXlCLEdBQUcsbUJBQW1CLEFBQUM7QUFDdEQsSUFBTUMsMEJBQTBCLEdBQUcsb0JBQW9CLEFBQUM7QUFDeEQsSUFBTUMsMkJBQTJCLEdBQUcscUJBQXFCLEFBQUM7QUFDMUQsSUFBTUMsNEJBQTRCLEdBQUcsc0JBQXNCLEFBQUM7QUFDNUQsSUFBTUMsNEJBQTRCLEdBQUcsc0JBQXNCLEFBQUMifQ==