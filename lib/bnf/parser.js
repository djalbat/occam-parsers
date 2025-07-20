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
var _nonTerminalNodeMap = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNodeMap"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../mixins/parser"));
var _name = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/name"));
var _part = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/part"));
var _rule1 = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/error"));
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/epsilon"));
var _document = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/document"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/ruleName"));
var _wildcard = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/wildcard"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/endOfLine"));
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/partChoice"));
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/quantifier"));
var _definition = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/definition"));
var _precedence = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/precedence"));
var _definitions = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/definitions"));
var _terminalPart = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/terminalPart"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/choiceOfParts"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/terminalSymbol"));
var _nonTerminalPart = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/nonTerminalPart"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/sequenceOfParts"));
var _opacityModifier = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/opacityModifier"));
var _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/noWhitespacePart"));
var _callAheadModifier = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/callAheadModifier"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/regularExpression"));
var _optionalQuantifier = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/optionalQuantifier"));
var _startOfContentPart = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/startOfContentPart"));
var _oneOrMoreQuantifier = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/oneOrMoreQuantifier"));
var _zeroOrMoreQuantifier = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/zeroOrMoreQuantifier"));
var _significantTokenType = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/significantTokenType"));
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
                var nameBNFRule = _name.default.fromNothing(), partBNFRule = _part.default.fromNothing(), ruleBNFRule = _rule1.default.fromNothing(), errorBNFRule = _error.default.fromNothing(), epsilonBNFRule = _epsilon.default.fromNothing(), documentBNFRule = _document.default.fromNothing(), ruleNameBNFRule = _ruleName.default.fromNothing(), wildcardBNFRule = _wildcard.default.fromNothing(), endOfLineBNFRule = _endOfLine.default.fromNothing(), partChoiceBNFRule = _partChoice.default.fromNothing(), quantifierBNFRule = _quantifier.default.fromNothing(), definitionBNFRule = _definition.default.fromNothing(), precedentsBNFRule = _precedence.default.fromNothing(), definitionsBNFRule = _definitions.default.fromNothing(), terminalPartBNFRule = _terminalPart.default.fromNothing(), choiceOfPartsBNFRule = _choiceOfParts.default.fromNothing(), terminalSymbolBNFRule = _terminalSymbol.default.fromNothing(), nonTerminalPartBNFRule = _nonTerminalPart.default.fromNothing(), sequenceOfPartsBNFRule = _sequenceOfParts.default.fromNothing(), opacityModifierBNFRule = _opacityModifier.default.fromNothing(), noWhitespacePartBNFRule = _noWhitespacePart.default.fromNothing(), regularExpressionBNFRule = _regularExpression.default.fromNothing(), callAheadModifierBNFRule = _callAheadModifier.default.fromNothing(), optionalQuantifierBNFRule = _optionalQuantifier.default.fromNothing(), startOfContentPartBNFRule = _startOfContentPart.default.fromNothing(), oneOrMoreQuantifierBNFRule = _oneOrMoreQuantifier.default.fromNothing(), zeroOrMoreQuantifierBNFRule = _zeroOrMoreQuantifier.default.fromNothing(), significantTokenTypeBNFRule = _significantTokenType.default.fromNothing(), rules = [
                    documentBNFRule,
                    ruleBNFRule,
                    nameBNFRule,
                    definitionsBNFRule,
                    definitionBNFRule,
                    partBNFRule,
                    nonTerminalPartBNFRule,
                    terminalPartBNFRule,
                    startOfContentPartBNFRule,
                    noWhitespacePartBNFRule,
                    sequenceOfPartsBNFRule,
                    choiceOfPartsBNFRule,
                    partChoiceBNFRule,
                    ruleNameBNFRule,
                    significantTokenTypeBNFRule,
                    regularExpressionBNFRule,
                    terminalSymbolBNFRule,
                    precedentsBNFRule,
                    endOfLineBNFRule,
                    wildcardBNFRule,
                    epsilonBNFRule,
                    quantifierBNFRule,
                    opacityModifierBNFRule,
                    callAheadModifierBNFRule,
                    optionalQuantifierBNFRule,
                    oneOrMoreQuantifierBNFRule,
                    zeroOrMoreQuantifierBNFRule,
                    errorBNFRule
                ], startRule = (0, _rules.startRuleFromRules)(rules), ruleMap = (0, _rules.ruleMapFromRules)(rules), bnfParser = new BNFParser(startRule, ruleMap);
                return bnfParser;
            }
        }
    ]);
    return BNFParser;
}();
_define_property(BNFParser, "NonTerminalNodeMap", _nonTerminalNodeMap.default);
_define_property(BNFParser, "defaultNonTerminalNode", null);
_define_property(BNFParser, "bnf", _bnf.default);
Object.assign(BNFParser.prototype, _parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGVNYXAgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZU1hcFwiO1xuaW1wb3J0IHBhcnNlck1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3BhcnNlclwiO1xuaW1wb3J0IE5hbWVCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9uYW1lXCI7XG5pbXBvcnQgUGFydEJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3BhcnRcIjtcbmltcG9ydCBSdWxlQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvcnVsZVwiO1xuaW1wb3J0IEVycm9yQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZXBzaWxvblwiO1xuaW1wb3J0IERvY3VtZW50Qk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZG9jdW1lbnRcIjtcbmltcG9ydCBSdWxlTmFtZUJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi93aWxkY2FyZFwiO1xuaW1wb3J0IEVuZE9mTGluZUJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL2VuZE9mTGluZVwiO1xuaW1wb3J0IFBhcnRDaG9pY2VCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9wYXJ0Q2hvaWNlXCI7XG5pbXBvcnQgUXVhbnRpZmllckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZGVmaW5pdGlvblwiO1xuaW1wb3J0IFByZWNlZGVudHNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydEJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3Rlcm1pbmFsUGFydFwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydEJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL25vblRlcm1pbmFsUGFydFwiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c0JORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE9wYWNpdHlNb2RpZmllckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL29wYWNpdHlNb2RpZmllclwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgQ2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9jYWxsQWhlYWRNb2RpZmllclwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBTdGFydE9mQ29udGVudFBhcnRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9zdGFydE9mQ29udGVudFBhcnRcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvb25lT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZUJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG5cdCAgbGV0IHJ1bGVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIG5vZGUuYCk7XG4gICAgfVxuXG4gICAgcnVsZXMgPSBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSk7XG5cbiAgICBjb25zdCBydWxlc0xlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICAgIGlmIChydWxlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gcnVsZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIE5vblRlcm1pbmFsTm9kZU1hcCA9IE5vblRlcm1pbmFsTm9kZU1hcDtcblxuICBzdGF0aWMgZGVmYXVsdE5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZUJORlJ1bGUgPSBOYW1lQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRCTkZSdWxlID0gUGFydEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlQk5GUnVsZSA9IFJ1bGVCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZXJyb3JCTkZSdWxlID0gRXJyb3JCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZXBzaWxvbkJORlJ1bGUgPSBFcHNpbG9uQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRvY3VtZW50Qk5GUnVsZSA9IERvY3VtZW50Qk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVOYW1lQk5GUnVsZSA9IFJ1bGVOYW1lQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHdpbGRjYXJkQk5GUnVsZSA9IFdpbGRjYXJkQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVuZE9mTGluZUJORlJ1bGUgPSBFbmRPZkxpbmVCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFydENob2ljZUJORlJ1bGUgPSBQYXJ0Q2hvaWNlQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHF1YW50aWZpZXJCTkZSdWxlID0gUXVhbnRpZmllckJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9uQk5GUnVsZSA9IERlZmluaXRpb25CTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJlY2VkZW50c0JORlJ1bGUgPSBQcmVjZWRlbnRzQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRlZmluaXRpb25zQk5GUnVsZSA9IERlZmluaXRpb25zQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydEJORlJ1bGUgPSBUZXJtaW5hbFBhcnRCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c0JORlJ1bGUgPSBDaG9pY2VPZlBhcnRzQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sQk5GUnVsZSA9IFRlcm1pbmFsU3ltYm9sQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydEJORlJ1bGUgPSBOb25UZXJtaW5hbFBhcnRCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzQk5GUnVsZSA9IFNlcXVlbmNlT2ZQYXJ0c0JORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJCTkZSdWxlID0gT3BhY2l0eU1vZGlmaWVyQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlID0gTm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUgPSBSZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjYWxsQWhlYWRNb2RpZmllckJORlJ1bGUgPSBDYWxsQWhlYWRNb2RpZmllckJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlID0gT3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50UGFydEJORlJ1bGUgPSBTdGFydE9mQ29udGVudFBhcnRCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUgPSBPbmVPck1vcmVRdWFudGlmaWVyQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZSA9IFplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlQk5GUnVsZSA9IFNpZ25pZmljYW50VG9rZW5UeXBlQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgZG9jdW1lbnRCTkZSdWxlLFxuICAgICAgICAgICAgcnVsZUJORlJ1bGUsXG4gICAgICAgICAgICBuYW1lQk5GUnVsZSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zQk5GUnVsZSxcbiAgICAgICAgICAgIGRlZmluaXRpb25CTkZSdWxlLFxuICAgICAgICAgICAgcGFydEJORlJ1bGUsXG4gICAgICAgICAgICBub25UZXJtaW5hbFBhcnRCTkZSdWxlLFxuICAgICAgICAgICAgdGVybWluYWxQYXJ0Qk5GUnVsZSxcbiAgICAgICAgICAgIHN0YXJ0T2ZDb250ZW50UGFydEJORlJ1bGUsXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0Qk5GUnVsZSxcbiAgICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c0JORlJ1bGUsXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzQk5GUnVsZSxcbiAgICAgICAgICAgIHBhcnRDaG9pY2VCTkZSdWxlLFxuICAgICAgICAgICAgcnVsZU5hbWVCTkZSdWxlLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25CTkZSdWxlLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xCTkZSdWxlLFxuICAgICAgICAgICAgcHJlY2VkZW50c0JORlJ1bGUsXG4gICAgICAgICAgICBlbmRPZkxpbmVCTkZSdWxlLFxuICAgICAgICAgICAgd2lsZGNhcmRCTkZSdWxlLFxuICAgICAgICAgICAgZXBzaWxvbkJORlJ1bGUsXG4gICAgICAgICAgICBxdWFudGlmaWVyQk5GUnVsZSxcbiAgICAgICAgICAgIG9wYWNpdHlNb2RpZmllckJORlJ1bGUsXG4gICAgICAgICAgICBjYWxsQWhlYWRNb2RpZmllckJORlJ1bGUsXG4gICAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUsXG4gICAgICAgICAgICBlcnJvckJORlJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GUGFyc2VyLnByb3RvdHlwZSwgcGFyc2VyTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0U3RhcnRSdWxlIiwiZ2V0UnVsZU1hcCIsInJ1bGVzRnJvbVRva2VucyIsInRva2VucyIsInJ1bGVzIiwibm9kZSIsInBhcnNlIiwiRXJyb3IiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lQk5GUnVsZSIsIk5hbWVCTkZSdWxlIiwicGFydEJORlJ1bGUiLCJQYXJ0Qk5GUnVsZSIsInJ1bGVCTkZSdWxlIiwiUnVsZUJORlJ1bGUiLCJlcnJvckJORlJ1bGUiLCJFcnJvckJORlJ1bGUiLCJlcHNpbG9uQk5GUnVsZSIsIkVwc2lsb25CTkZSdWxlIiwiZG9jdW1lbnRCTkZSdWxlIiwiRG9jdW1lbnRCTkZSdWxlIiwicnVsZU5hbWVCTkZSdWxlIiwiUnVsZU5hbWVCTkZSdWxlIiwid2lsZGNhcmRCTkZSdWxlIiwiV2lsZGNhcmRCTkZSdWxlIiwiZW5kT2ZMaW5lQk5GUnVsZSIsIkVuZE9mTGluZUJORlJ1bGUiLCJwYXJ0Q2hvaWNlQk5GUnVsZSIsIlBhcnRDaG9pY2VCTkZSdWxlIiwicXVhbnRpZmllckJORlJ1bGUiLCJRdWFudGlmaWVyQk5GUnVsZSIsImRlZmluaXRpb25CTkZSdWxlIiwiRGVmaW5pdGlvbkJORlJ1bGUiLCJwcmVjZWRlbnRzQk5GUnVsZSIsIlByZWNlZGVudHNCTkZSdWxlIiwiZGVmaW5pdGlvbnNCTkZSdWxlIiwiRGVmaW5pdGlvbnNCTkZSdWxlIiwidGVybWluYWxQYXJ0Qk5GUnVsZSIsIlRlcm1pbmFsUGFydEJORlJ1bGUiLCJjaG9pY2VPZlBhcnRzQk5GUnVsZSIsIkNob2ljZU9mUGFydHNCTkZSdWxlIiwidGVybWluYWxTeW1ib2xCTkZSdWxlIiwiVGVybWluYWxTeW1ib2xCTkZSdWxlIiwibm9uVGVybWluYWxQYXJ0Qk5GUnVsZSIsIk5vblRlcm1pbmFsUGFydEJORlJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNCTkZSdWxlIiwiU2VxdWVuY2VPZlBhcnRzQk5GUnVsZSIsIm9wYWNpdHlNb2RpZmllckJORlJ1bGUiLCJPcGFjaXR5TW9kaWZpZXJCTkZSdWxlIiwibm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0Qk5GUnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uQk5GUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uQk5GUnVsZSIsImNhbGxBaGVhZE1vZGlmaWVyQk5GUnVsZSIsIkNhbGxBaGVhZE1vZGlmaWVyQk5GUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllckJORlJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIiwic3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSIsIlN0YXJ0T2ZDb250ZW50UGFydEJORlJ1bGUiLCJvbmVPck1vcmVRdWFudGlmaWVyQk5GUnVsZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlIiwiemVyb09yTW9yZVF1YW50aWZpZXJCTkZSdWxlIiwiWmVyb09yTW9yZVF1YW50aWZpZXJCTkZSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwicnVsZU1hcEZyb21SdWxlcyIsImJuZlBhcnNlciIsIk5vblRlcm1pbmFsTm9kZU1hcCIsImRlZmF1bHROb25UZXJtaW5hbE5vZGUiLCJibmYiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJwYXJzZXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUNxQkE7OzswREFuQ0w7MkRBQ0M7eUVBQ2M7NkRBQ047MkRBQ0Q7MkRBQ0E7NERBQ0E7NERBQ0M7OERBQ0U7K0RBQ0M7K0RBQ0E7K0RBQ0E7Z0VBQ0M7aUVBQ0M7aUVBQ0E7aUVBQ0E7aUVBQ0E7a0VBQ0M7bUVBQ0M7b0VBQ0M7cUVBQ0M7c0VBQ0M7c0VBQ0E7c0VBQ0E7dUVBQ0M7d0VBQ0M7d0VBQ0E7eUVBQ0M7eUVBQ0E7MEVBQ0M7MkVBQ0M7MkVBQ0E7cUJBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsU0FBUyxFQUFFQyxPQUFPO2dDQURYRjtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFIRUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVERyxLQUFBQTttQkFBQUEs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