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
var _state = /*#__PURE__*/ _interop_require_default(require("../state"));
var _name = /*#__PURE__*/ _interop_require_default(require("../rule/name"));
var _part = /*#__PURE__*/ _interop_require_default(require("../rule/part"));
var _rule1 = /*#__PURE__*/ _interop_require_default(require("../rule/rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../rule/error"));
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../rule/epsilon"));
var _document = /*#__PURE__*/ _interop_require_default(require("../rule/document"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../rule/ruleName"));
var _wildcard = /*#__PURE__*/ _interop_require_default(require("../rule/wildcard"));
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
var _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../rule/noWhitespacePart"));
var _lookAheadModifier = /*#__PURE__*/ _interop_require_default(require("../rule/lookAheadModifier"));
var _ambiguousModifier = /*#__PURE__*/ _interop_require_default(require("../rule/ambiguousModifier"));
var _regularExpression = /*#__PURE__*/ _interop_require_default(require("../rule/regularExpression"));
var _optionalQuantifier = /*#__PURE__*/ _interop_require_default(require("../rule/optionalQuantifier"));
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
            key: "parse",
            value: function parse(tokens) {
                var rule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startRule;
                var state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, precedence = null, ruleNode = rule.parse(state, callback, precedence), node = ruleNode; ///
                return node;
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
                var nameRule = _name.default.fromNothing(), partRule = _part.default.fromNothing(), ruleRule = _rule1.default.fromNothing(), errorRule = _error.default.fromNothing(), epsilonRule = _epsilon.default.fromNothing(), documentRule = _document.default.fromNothing(), ruleNameRule = _ruleName.default.fromNothing(), wildcardRule = _wildcard.default.fromNothing(), endOfLineRule = _endOfLine.default.fromNothing(), partChoiceRule = _partChoice.default.fromNothing(), quantifierRule = _quantifier.default.fromNothing(), definitionRule = _definition.default.fromNothing(), precedentsRule = _precedence.default.fromNothing(), definitionsRule = _definitions.default.fromNothing(), terminalPartRule = _terminalPart.default.fromNothing(), choiceOfPartsRule = _choiceOfParts.default.fromNothing(), terminalSymbolRule = _terminalSymbol.default.fromNothing(), nonTerminalPartRule = _nonTerminalPart.default.fromNothing(), sequenceOfPartsRule = _sequenceOfParts.default.fromNothing(), noWhitespacePartRule = _noWhitespacePart.default.fromNothing(), regularExpressionRule = _regularExpression.default.fromNothing(), lookAheadModifierRule = _lookAheadModifier.default.fromNothing(), ambiguousModifierRule = _ambiguousModifier.default.fromNothing(), optionalQuantifierRule = _optionalQuantifier.default.fromNothing(), oneOrMoreQuantifierRule = _oneOrMoreQuantifier.default.fromNothing(), zeroOrMoreQuantifierRule = _zeroOrMoreQuantifier.default.fromNothing(), significantTokenTypeRule = _significantTokenType.default.fromNothing();
                var rules = [
                    documentRule,
                    ruleRule,
                    nameRule,
                    definitionsRule,
                    definitionRule,
                    partRule,
                    nonTerminalPartRule,
                    terminalPartRule,
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
                    ambiguousModifierRule,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlUnVsZSBmcm9tIFwiLi4vcnVsZS9wYXJ0Q2hvaWNlXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvcXVhbnRpZmllclwiO1xuaW1wb3J0IERlZmluaXRpb25SdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBQcmVjZWRlbnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBBbWJpZ3VvdXNNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvYW1iaWd1b3VzTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllclwiO1xuaW1wb3J0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZnJvbSBcIi4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBTdGF0ZS5mcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHRoaXMucnVsZU1hcCksXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5wYXJzZShzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UpLFxuICAgICAgICAgIG5vZGUgPSBydWxlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0ICBsZXQgcnVsZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gbm9kZS5gKTtcbiAgICB9XG5cbiAgICBydWxlcyA9IG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKTtcblxuICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBydWxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IE5hbWVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gUnVsZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBFcnJvclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IEVwc2lsb25SdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gRG9jdW1lbnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gUnVsZU5hbWVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gV2lsZGNhcmRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IEVuZE9mTGluZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0Q2hvaWNlUnVsZSA9IFBhcnRDaG9pY2VSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gRGVmaW5pdGlvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcmVjZWRlbnRzUnVsZSA9IFByZWNlZGVudHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gRGVmaW5pdGlvbnNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IFRlcm1pbmFsUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IENob2ljZU9mUGFydHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gVGVybWluYWxTeW1ib2xSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IE5vblRlcm1pbmFsUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gU2VxdWVuY2VPZlBhcnRzUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gTm9XaGl0ZXNwYWNlUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGUgPSBBbWJpZ3VvdXNNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRDaG9pY2VSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgcHJlY2VkZW50c1J1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0U3RhcnRSdWxlIiwiZ2V0UnVsZU1hcCIsInBhcnNlIiwidG9rZW5zIiwicnVsZSIsInN0YXRlIiwiU3RhdGUiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsImNhbGxiYWNrIiwicHJlY2VkZW5jZSIsInJ1bGVOb2RlIiwibm9kZSIsInJ1bGVzRnJvbVRva2VucyIsInJ1bGVzIiwiRXJyb3IiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsIk5hbWVSdWxlIiwicGFydFJ1bGUiLCJQYXJ0UnVsZSIsInJ1bGVSdWxlIiwiUnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJFcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsIkVwc2lsb25SdWxlIiwiZG9jdW1lbnRSdWxlIiwiRG9jdW1lbnRSdWxlIiwicnVsZU5hbWVSdWxlIiwiUnVsZU5hbWVSdWxlIiwid2lsZGNhcmRSdWxlIiwiV2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsIkVuZE9mTGluZVJ1bGUiLCJwYXJ0Q2hvaWNlUnVsZSIsIlBhcnRDaG9pY2VSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJwcmVjZWRlbnRzUnVsZSIsIlByZWNlZGVudHNSdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiU2VxdWVuY2VPZlBhcnRzUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJhbWJpZ3VvdXNNb2RpZmllclJ1bGUiLCJBbWJpZ3VvdXNNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiYm5mUGFyc2VyIiwiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1DcUJBOzs7MERBakNMOzJEQUNDOzREQUNDOzJEQUNHOzJEQUNBOzREQUNBOzREQUNDOzhEQUNFOytEQUNDOytEQUNBOytEQUNBO2dFQUNDO2lFQUNDO2lFQUNBO2lFQUNBO2lFQUNBO2tFQUNDO21FQUNDO29FQUNDO3FFQUNDO3NFQUNDO3NFQUNBO3VFQUNDO3dFQUNDO3dFQUNBO3dFQUNBO3lFQUNDOzBFQUNDOzJFQUNDOzJFQUNBO3FCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxTQUFTLEVBQUVDLE9BQU87Z0NBRFhGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxVQUFVQTs7a0JBSEVGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07b0JBQUVDLE9BQUFBLGlFQUFPLElBQUksQ0FBQ047Z0JBQ3hCLElBQU1PLFFBQVFDLGVBQU1DLHFCQUFxQkosUUFBUSxJQUFJLENBQUNKLFVBQ2hEUyxXQUFXLE1BQ1hDLGFBQWEsTUFDYkMsV0FBV04sS0FBS0YsTUFBTUcsT0FBT0csVUFBVUMsYUFDdkNFLE9BQU9ELFVBQVUsR0FBRztnQkFFMUIsT0FBT0M7WUFDVDs7O1lBRURDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JULE1BQU07Z0JBQ3BCLElBQUlVO2dCQUVILElBQU1GLE9BQU8sSUFBSSxDQUFDVCxNQUFNQztnQkFFeEIsSUFBSVEsU0FBUyxNQUFNO29CQUNqQixNQUFNLElBQUlHLE1BQU87Z0JBQ25CO2dCQUVBRCxRQUFRRixLQUFLSSxjQUFjQztnQkFFM0IsSUFBTUMsY0FBY0osTUFBTUs7Z0JBRTFCLElBQUlELGdCQUFnQixHQUFHO29CQUNyQixNQUFNLElBQUlILE1BQU87Z0JBQ25CO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT00sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsV0FBV0MsY0FBU0YsZUFDcEJHLFdBQVdDLGNBQVNKLGVBQ3BCSyxXQUFXQyxlQUFTTixlQUNwQk8sWUFBWUMsZUFBVVIsZUFDdEJTLGNBQWNDLGlCQUFZVixlQUMxQlcsZUFBZUMsa0JBQWFaLGVBQzVCYSxlQUFlQyxrQkFBYWQsZUFDNUJlLGVBQWVDLGtCQUFhaEIsZUFDNUJpQixnQkFBZ0JDLG1CQUFjbEIsZUFDOUJtQixpQkFBaUJDLG9CQUFlcEIsZUFDaENxQixpQkFBaUJDLG9CQUFldEIsZUFDaEN1QixpQkFBaUJDLG9CQUFleEIsZUFDaEN5QixpQkFBaUJDLG9CQUFlMUIsZUFDaEMyQixrQkFBa0JDLHFCQUFnQjVCLGVBQ2xDNkIsbUJBQW1CQyxzQkFBaUI5QixlQUNwQytCLG9CQUFvQkMsdUJBQWtCaEMsZUFDdENpQyxxQkFBcUJDLHdCQUFtQmxDLGVBQ3hDbUMsc0JBQXNCQyx5QkFBb0JwQyxlQUMxQ3FDLHNCQUFzQkMseUJBQW9CdEMsZUFDMUN1Qyx1QkFBdUJDLDBCQUFxQnhDLGVBQzVDeUMsd0JBQXdCQywyQkFBc0IxQyxlQUM5QzJDLHdCQUF3QkMsMkJBQXNCNUMsZUFDOUM2Qyx3QkFBd0JDLDJCQUFzQjlDLGVBQzlDK0MseUJBQXlCQyw0QkFBdUJoRCxlQUNoRGlELDBCQUEwQkMsNkJBQXdCbEQsZUFDbERtRCwyQkFBMkJDLDhCQUF5QnBELGVBQ3BEcUQsMkJBQTJCQyw4QkFBeUJ0RDtnQkFFMUQsSUFBSU4sUUFBUTtvQkFDVmlCO29CQUNBTjtvQkFDQUo7b0JBQ0EwQjtvQkFDQUo7b0JBQ0FwQjtvQkFDQWdDO29CQUNBTjtvQkFDQVU7b0JBQ0FGO29CQUNBTjtvQkFDQVo7b0JBQ0FOO29CQUNBd0M7b0JBQ0FaO29CQUNBUjtvQkFDQVI7b0JBQ0FSO29CQUNBRjtvQkFDQU47b0JBQ0FZO29CQUNBd0I7b0JBQ0FGO29CQUNBSTtvQkFDQUU7b0JBQ0FFO29CQUNBNUM7aUJBQ0Q7Z0JBRUQsSUFBTTVCLFlBQVk0RSxJQUFBQSwyQkFBbUI3RCxRQUMvQmQsVUFBVTRFLElBQUFBLHlCQUFpQjlELFFBQzNCK0QsWUFBWSxJQTNHRC9FLFVBMkdlQyxXQUFXQztnQkFFM0MsT0FBTzZFO1lBQ1Q7OztXQTlHbUIvRTs7QUE0Q25CLGlCQTVDbUJBLFdBNENaZ0YsT0FBTUEifQ==