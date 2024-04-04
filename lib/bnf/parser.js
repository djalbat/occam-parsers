"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFParser;
    }
});
var _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _name = /*#__PURE__*/ _interop_require_default(require("../rule/name"));
var _part = /*#__PURE__*/ _interop_require_default(require("../rule/part"));
var _rule1 = /*#__PURE__*/ _interop_require_default(require("../rule/rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../rule/error"));
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../rule/epsilon"));
var _document = /*#__PURE__*/ _interop_require_default(require("../rule/document"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../rule/ruleName"));
var _wildcard = /*#__PURE__*/ _interop_require_default(require("../rule/wildcard"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../mixins/parser"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("../rule/endOfLine"));
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../rule/partChoice"));
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../rule/quantifier"));
var _definition = /*#__PURE__*/ _interop_require_default(require("../rule/definition"));
var _precedence = /*#__PURE__*/ _interop_require_default(require("../rule/precedence"));
var _definitions = /*#__PURE__*/ _interop_require_default(require("../rule/definitions"));
var _terminalPart = /*#__PURE__*/ _interop_require_default(require("../rule/terminalPart"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../rule/choiceOfParts"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../rule/terminalSymbol"));
var _nonTerminalPart = /*#__PURE__*/ _interop_require_default(require("../rule/nonTerminalPart"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../rule/sequenceOfParts"));
var _opacityModifier = /*#__PURE__*/ _interop_require_default(require("../rule/opacityModifier"));
var _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../rule/noWhitespacePart"));
var _lookAheadModifier = /*#__PURE__*/ _interop_require_default(require("../rule/lookAheadModifier"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("../rule/regularExpression"));
var _optionalQuantifier = /*#__PURE__*/ _interop_require_default(require("../rule/optionalQuantifier"));
var _startOfContentPart = /*#__PURE__*/ _interop_require_default(require("../rule/startOfContentPart"));
var _oneOrMoreQuantifier = /*#__PURE__*/ _interop_require_default(require("../rule/oneOrMoreQuantifier"));
var _zeroOrMoreQuantifier = /*#__PURE__*/ _interop_require_default(require("../rule/zeroOrMoreQuantifier"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../rule/significantTokenType"));
var _rules = require("../utilities/rules");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var BNFParser = /*#__PURE__*/ function() {
    function BNFParser(startRule, ruleMap) {
        _class_call_check(this, BNFParser);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
    }
    _create_class(BNFParser, [
        {
            key: "getStartRule",
            value: function getStartRule() {
                return this.startRule;
            }
        },
        {
            key: "getRuleMap",
            value: function getRuleMap() {
                return this.ruleMap;
            }
        },
        {
            key: "rulesFromTokens",
            value: function rulesFromTokens(tokens) {
                var rules;
                var node = this.parse(tokens);
                if (node === null) {
                    throw new Error("There is no node.");
                }
                rules = node.generateRules(_rule.default);
                var rulesLength = rules.length;
                if (rulesLength === 0) {
                    throw new Error("There are no rules.");
                }
                return rules;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var nameRule = _name.default.fromNothing(), partRule = _part.default.fromNothing(), ruleRule = _rule1.default.fromNothing(), errorRule = _error.default.fromNothing(), epsilonRule = _epsilon.default.fromNothing(), documentRule = _document.default.fromNothing(), ruleNameRule = _ruleName.default.fromNothing(), wildcardRule = _wildcard.default.fromNothing(), endOfLineRule = _endOfLine.default.fromNothing(), partChoiceRule = _partChoice.default.fromNothing(), quantifierRule = _quantifier.default.fromNothing(), definitionRule = _definition.default.fromNothing(), precedentsRule = _precedence.default.fromNothing(), definitionsRule = _definitions.default.fromNothing(), terminalPartRule = _terminalPart.default.fromNothing(), choiceOfPartsRule = _choiceOfParts.default.fromNothing(), terminalSymbolRule = _terminalSymbol.default.fromNothing(), nonTerminalPartRule = _nonTerminalPart.default.fromNothing(), sequenceOfPartsRule = _sequenceOfParts.default.fromNothing(), opacityModifierRule = _opacityModifier.default.fromNothing(), noWhitespacePartRule = _noWhitespacePart.default.fromNothing(), regularExpressionRule = _regularExpression.default.fromNothing(), lookAheadModifierRule = _lookAheadModifier.default.fromNothing(), optionalQuantifierRule = _optionalQuantifier.default.fromNothing(), startOfContentPartRule = _startOfContentPart.default.fromNothing(), oneOrMoreQuantifierRule = _oneOrMoreQuantifier.default.fromNothing(), zeroOrMoreQuantifierRule = _zeroOrMoreQuantifier.default.fromNothing(), significantTokenTypeRule = _significantTokenType.default.fromNothing();
                var rules = [
                    documentRule,
                    ruleRule,
                    nameRule,
                    definitionsRule,
                    definitionRule,
                    partRule,
                    nonTerminalPartRule,
                    terminalPartRule,
                    startOfContentPartRule,
                    noWhitespacePartRule,
                    sequenceOfPartsRule,
                    choiceOfPartsRule,
                    partChoiceRule,
                    ruleNameRule,
                    significantTokenTypeRule,
                    regularExpressionRule,
                    terminalSymbolRule,
                    precedentsRule,
                    endOfLineRule,
                    wildcardRule,
                    epsilonRule,
                    quantifierRule,
                    opacityModifierRule,
                    lookAheadModifierRule,
                    optionalQuantifierRule,
                    oneOrMoreQuantifierRule,
                    zeroOrMoreQuantifierRule,
                    errorRule
                ];
                var startRule = (0, _rules.startRuleFromRules)(rules), ruleMap = (0, _rules.ruleMapFromRules)(rules), bnfParser = new BNFParser(startRule, ruleMap);
                return bnfParser;
            }
        }
    ]);
    return BNFParser;
}();
_define_property(BNFParser, "bnf", _bnf.default);
Object.assign(BNFParser.prototype, _parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgcGFyc2VyTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcGFyc2VyXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlUnVsZSBmcm9tIFwiLi4vcnVsZS9wYXJ0Q2hvaWNlXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvcXVhbnRpZmllclwiO1xuaW1wb3J0IERlZmluaXRpb25SdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBQcmVjZWRlbnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE9wYWNpdHlNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvb3BhY2l0eU1vZGlmaWVyXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IExvb2tBaGVhZE1vZGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9sb29rQWhlYWRNb2RpZmllclwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSBmcm9tIFwiLi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvb3B0aW9uYWxRdWFudGlmaWVyXCI7XG5pbXBvcnQgU3RhcnRPZkNvbnRlbnRQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9zdGFydE9mQ29udGVudFBhcnRcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGZyb20gXCIuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG5cdCAgbGV0IHJ1bGVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIG5vZGUuYCk7XG4gICAgfVxuXG4gICAgcnVsZXMgPSBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSk7XG5cbiAgICBjb25zdCBydWxlc0xlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICAgIGlmIChydWxlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gcnVsZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBOYW1lUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRSdWxlID0gUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IFJ1bGVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gRXJyb3JSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBFcHNpbG9uUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRvY3VtZW50UnVsZSA9IERvY3VtZW50UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IFJ1bGVOYW1lUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IFdpbGRjYXJkUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBFbmRPZkxpbmVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFydENob2ljZVJ1bGUgPSBQYXJ0Q2hvaWNlUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IERlZmluaXRpb25SdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJlY2VkZW50c1J1bGUgPSBQcmVjZWRlbnRzUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IERlZmluaXRpb25zUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGUgPSBUZXJtaW5hbFBhcnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBDaG9pY2VPZlBhcnRzUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IFRlcm1pbmFsU3ltYm9sUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBOb25UZXJtaW5hbFBhcnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSA9IFNlcXVlbmNlT2ZQYXJ0c1J1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlID0gT3BhY2l0eU1vZGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gTm9XaGl0ZXNwYWNlUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50UGFydFJ1bGUgPSBTdGFydE9mQ29udGVudFBhcnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZS5mcm9tTm90aGluZygpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHN0YXJ0T2ZDb250ZW50UGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRDaG9pY2VSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgcHJlY2VkZW50c1J1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIG9wYWNpdHlNb2RpZmllclJ1bGUsXG4gICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUsXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlLFxuICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCTkZQYXJzZXIucHJvdG90eXBlLCBwYXJzZXJNaXhpbnMpO1xuIl0sIm5hbWVzIjpbIkJORlBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicnVsZXNGcm9tVG9rZW5zIiwidG9rZW5zIiwicnVsZXMiLCJub2RlIiwicGFyc2UiLCJFcnJvciIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsIm5hbWVSdWxlIiwiTmFtZVJ1bGUiLCJwYXJ0UnVsZSIsIlBhcnRSdWxlIiwicnVsZVJ1bGUiLCJSdWxlUnVsZSIsImVycm9yUnVsZSIsIkVycm9yUnVsZSIsImVwc2lsb25SdWxlIiwiRXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsInBhcnRDaG9pY2VSdWxlIiwiUGFydENob2ljZVJ1bGUiLCJxdWFudGlmaWVyUnVsZSIsIlF1YW50aWZpZXJSdWxlIiwiZGVmaW5pdGlvblJ1bGUiLCJEZWZpbml0aW9uUnVsZSIsInByZWNlZGVudHNSdWxlIiwiUHJlY2VkZW50c1J1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlIiwib3BhY2l0eU1vZGlmaWVyUnVsZSIsIk9wYWNpdHlNb2RpZmllclJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJzdGFydE9mQ29udGVudFBhcnRSdWxlIiwiU3RhcnRPZkNvbnRlbnRQYXJ0UnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiYm5mUGFyc2VyIiwiYm5mIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwicGFyc2VyTWl4aW5zIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0NxQkE7OzswREFsQ0w7MkRBQ0M7MkRBQ0k7MkRBQ0E7NERBQ0E7NERBQ0M7OERBQ0U7K0RBQ0M7K0RBQ0E7K0RBQ0E7NkRBQ0E7Z0VBQ0M7aUVBQ0M7aUVBQ0E7aUVBQ0E7aUVBQ0E7a0VBQ0M7bUVBQ0M7b0VBQ0M7cUVBQ0M7c0VBQ0M7c0VBQ0E7c0VBQ0E7dUVBQ0M7d0VBQ0M7d0VBQ0E7eUVBQ0M7eUVBQ0E7MEVBQ0M7MkVBQ0M7MkVBQ0E7cUJBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLDBCQUFELEFBQUw7YUFBTUEsVUFDUEMsU0FBUyxFQUFFQyxPQUFPO2dDQURYRjtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFIRUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7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