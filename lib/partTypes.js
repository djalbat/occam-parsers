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
    ChoiceOfPartsPartType: function() {
        return ChoiceOfPartsPartType;
    },
    OneOrMorePartsPartType: function() {
        return OneOrMorePartsPartType;
    },
    OptionalPartPartType: function() {
        return OptionalPartPartType;
    },
    RuleNamePartType: function() {
        return RuleNamePartType;
    },
    SequenceOfPartsPartType: function() {
        return SequenceOfPartsPartType;
    },
    ZeroOrMorePartsPartType: function() {
        return ZeroOrMorePartsPartType;
    },
    default: function() {
        return _default;
    }
});
var RuleNamePartType = "ruleNamePart";
var OptionalPartPartType = "optionalPart";
var ChoiceOfPartsPartType = "choiceOfParts";
var OneOrMorePartsPartType = "oneOrMoreParts";
var ZeroOrMorePartsPartType = "zeroOrMoreParts";
var SequenceOfPartsPartType = "sequenceOfParts";
var _default = {
    RuleNamePartType: RuleNamePartType,
    OptionalPartPartType: OptionalPartPartType,
    ChoiceOfPartsPartType: ChoiceOfPartsPartType,
    OneOrMorePartsPartType: OneOrMorePartsPartType,
    ZeroOrMorePartsPartType: ZeroOrMorePartsPartType,
    SequenceOfPartsPartType: SequenceOfPartsPartType
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0VHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSdWxlTmFtZVBhcnRUeXBlID0gXCJydWxlTmFtZVBhcnRcIjtcbmV4cG9ydCBjb25zdCBPcHRpb25hbFBhcnRQYXJ0VHlwZSA9IFwib3B0aW9uYWxQYXJ0XCI7XG5leHBvcnQgY29uc3QgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlID0gXCJjaG9pY2VPZlBhcnRzXCI7XG5leHBvcnQgY29uc3QgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA9IFwib25lT3JNb3JlUGFydHNcIjtcbmV4cG9ydCBjb25zdCBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA9IFwiemVyb09yTW9yZVBhcnRzXCI7XG5leHBvcnQgY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgPSBcInNlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFJ1bGVOYW1lUGFydFR5cGUsXG4gIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZVxufTtcbiJdLCJuYW1lcyI6WyJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJSdWxlTmFtZVBhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJYUEscUJBQXFCO2VBQXJCQTs7SUFDQUMsc0JBQXNCO2VBQXRCQTs7SUFGQUMsb0JBQW9CO2VBQXBCQTs7SUFEQUMsZ0JBQWdCO2VBQWhCQTs7SUFLQUMsdUJBQXVCO2VBQXZCQTs7SUFEQUMsdUJBQXVCO2VBQXZCQTs7SUFHYixPQU9FO2VBUEY7OztBQVBPLElBQU1GLG1CQUFtQjtBQUN6QixJQUFNRCx1QkFBdUI7QUFDN0IsSUFBTUYsd0JBQXdCO0FBQzlCLElBQU1DLHlCQUF5QjtBQUMvQixJQUFNSSwwQkFBMEI7QUFDaEMsSUFBTUQsMEJBQTBCO0lBRXZDLFdBQWU7SUFDYkQsa0JBQUFBO0lBQ0FELHNCQUFBQTtJQUNBRix1QkFBQUE7SUFDQUMsd0JBQUFBO0lBQ0FJLHlCQUFBQTtJQUNBRCx5QkFBQUE7QUFDRiJ9