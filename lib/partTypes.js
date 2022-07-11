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
    RuleNamePartType: function() {
        return RuleNamePartType;
    },
    OptionalPartPartType: function() {
        return OptionalPartPartType;
    },
    ChoiceOfPartsPartType: function() {
        return ChoiceOfPartsPartType;
    },
    OneOrMorePartsPartType: function() {
        return OneOrMorePartsPartType;
    },
    ZeroOrMorePartsPartType: function() {
        return ZeroOrMorePartsPartType;
    },
    SequenceOfPartsPartType: function() {
        return SequenceOfPartsPartType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0VHlwZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSdWxlTmFtZVBhcnRUeXBlID0gXCJydWxlTmFtZVBhcnRcIjtcbmV4cG9ydCBjb25zdCBPcHRpb25hbFBhcnRQYXJ0VHlwZSA9IFwib3B0aW9uYWxQYXJ0XCI7XG5leHBvcnQgY29uc3QgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlID0gXCJjaG9pY2VPZlBhcnRzXCI7XG5leHBvcnQgY29uc3QgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA9IFwib25lT3JNb3JlUGFydHNcIjtcbmV4cG9ydCBjb25zdCBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA9IFwiemVyb09yTW9yZVBhcnRzXCI7XG5leHBvcnQgY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgPSBcInNlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFJ1bGVOYW1lUGFydFR5cGUsXG4gIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZVxufTtcbiJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnRUeXBlIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVBQSxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7SUFDaEJDLG9CQUFvQjtlQUFwQkEsb0JBQW9COztJQUNwQkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBQ3JCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFDdEJDLHVCQUF1QjtlQUF2QkEsdUJBQXVCOztJQUN2QkMsdUJBQXVCO2VBQXZCQSx1QkFBdUI7O0lBRXBDLE9BT0U7ZUFQRixRQU9FOzs7QUFkSyxJQUFNTCxnQkFBZ0IsR0FBRyxjQUFjLEFBQUM7QUFDeEMsSUFBTUMsb0JBQW9CLEdBQUcsY0FBYyxBQUFDO0FBQzVDLElBQU1DLHFCQUFxQixHQUFHLGVBQWUsQUFBQztBQUM5QyxJQUFNQyxzQkFBc0IsR0FBRyxnQkFBZ0IsQUFBQztBQUNoRCxJQUFNQyx1QkFBdUIsR0FBRyxpQkFBaUIsQUFBQztBQUNsRCxJQUFNQyx1QkFBdUIsR0FBRyxpQkFBaUIsQUFBQztJQUV6RCxRQU9FLEdBUGE7SUFDYkwsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFDaEJDLG9CQUFvQixFQUFwQkEsb0JBQW9CO0lBQ3BCQyxxQkFBcUIsRUFBckJBLHFCQUFxQjtJQUNyQkMsc0JBQXNCLEVBQXRCQSxzQkFBc0I7SUFDdEJDLHVCQUF1QixFQUF2QkEsdUJBQXVCO0lBQ3ZCQyx1QkFBdUIsRUFBdkJBLHVCQUF1QjtDQUN4QiJ9