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
Object.assign(BNFParser.prototype, _parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgcGFyc2VyTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcGFyc2VyXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlUnVsZSBmcm9tIFwiLi4vcnVsZS9wYXJ0Q2hvaWNlXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvcXVhbnRpZmllclwiO1xuaW1wb3J0IERlZmluaXRpb25SdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBQcmVjZWRlbnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBBbWJpZ3VvdXNNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvYW1iaWd1b3VzTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllclwiO1xuaW1wb3J0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZnJvbSBcIi4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0ICBsZXQgcnVsZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gbm9kZS5gKTtcbiAgICB9XG5cbiAgICBydWxlcyA9IG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKTtcblxuICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBydWxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IE5hbWVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gUnVsZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBFcnJvclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IEVwc2lsb25SdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gRG9jdW1lbnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gUnVsZU5hbWVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gV2lsZGNhcmRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IEVuZE9mTGluZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0Q2hvaWNlUnVsZSA9IFBhcnRDaG9pY2VSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gRGVmaW5pdGlvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcmVjZWRlbnRzUnVsZSA9IFByZWNlZGVudHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gRGVmaW5pdGlvbnNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IFRlcm1pbmFsUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IENob2ljZU9mUGFydHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gVGVybWluYWxTeW1ib2xSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IE5vblRlcm1pbmFsUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gU2VxdWVuY2VPZlBhcnRzUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gTm9XaGl0ZXNwYWNlUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGUgPSBBbWJpZ3VvdXNNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRDaG9pY2VSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgcHJlY2VkZW50c1J1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlBhcnNlci5wcm90b3R5cGUsIHBhcnNlck1peGlucyk7XG4iXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJydWxlc0Zyb21Ub2tlbnMiLCJ0b2tlbnMiLCJydWxlcyIsIm5vZGUiLCJwYXJzZSIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwibmFtZVJ1bGUiLCJOYW1lUnVsZSIsInBhcnRSdWxlIiwiUGFydFJ1bGUiLCJydWxlUnVsZSIsIlJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiRXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJFcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicGFydENob2ljZVJ1bGUiLCJQYXJ0Q2hvaWNlUnVsZSIsInF1YW50aWZpZXJSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25SdWxlIiwicHJlY2VkZW50c1J1bGUiLCJQcmVjZWRlbnRzUnVsZSIsImRlZmluaXRpb25zUnVsZSIsIkRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJUZXJtaW5hbFBhcnRSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJDaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwic2VxdWVuY2VPZlBhcnRzUnVsZSIsIlNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiYW1iaWd1b3VzTW9kaWZpZXJSdWxlIiwiQW1iaWd1b3VzTW9kaWZpZXJSdWxlIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwicnVsZU1hcEZyb21SdWxlcyIsImJuZlBhcnNlciIsImJuZiIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInBhcnNlck1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQ3FCQTs7OzBEQWpDTDsyREFDQzsyREFDSTsyREFDQTs0REFDQTs0REFDQzs4REFDRTsrREFDQzsrREFDQTsrREFDQTs2REFDQTtnRUFDQztpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQzttRUFDQztvRUFDQztxRUFDQztzRUFDQztzRUFDQTt1RUFDQzt3RUFDQzt3RUFDQTt3RUFDQTt5RUFDQzswRUFDQzsyRUFDQzsyRUFDQTtxQkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsMEJBdUdsQixBQXZHWTthQUFNQSxVQUNQQyxTQUFTLEVBQUVDLE9BQU87Z0NBRFhGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxVQUFVQTs7a0JBSEVGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFREcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsTUFBTTtnQkFDcEIsSUFBSUM7Z0JBRUgsSUFBTUMsT0FBTyxJQUFJLENBQUNDLE1BQU1IO2dCQUV4QixJQUFJRSxTQUFTLE1BQU07b0JBQ2pCLE1BQU0sSUFBSUUsTUFBTztnQkFDbkI7Z0JBRUFILFFBQVFDLEtBQUtHLGNBQWNDO2dCQUUzQixJQUFNQyxjQUFjTixNQUFNTztnQkFFMUIsSUFBSUQsZ0JBQWdCLEdBQUc7b0JBQ3JCLE1BQU0sSUFBSUgsTUFBTztnQkFDbkI7Z0JBRUEsT0FBT0g7WUFDVDs7OztZQUlPUSxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxXQUFXQyxjQUFTRixlQUNwQkcsV0FBV0MsY0FBU0osZUFDcEJLLFdBQVdDLGVBQVNOLGVBQ3BCTyxZQUFZQyxlQUFVUixlQUN0QlMsY0FBY0MsaUJBQVlWLGVBQzFCVyxlQUFlQyxrQkFBYVosZUFDNUJhLGVBQWVDLGtCQUFhZCxlQUM1QmUsZUFBZUMsa0JBQWFoQixlQUM1QmlCLGdCQUFnQkMsbUJBQWNsQixlQUM5Qm1CLGlCQUFpQkMsb0JBQWVwQixlQUNoQ3FCLGlCQUFpQkMsb0JBQWV0QixlQUNoQ3VCLGlCQUFpQkMsb0JBQWV4QixlQUNoQ3lCLGlCQUFpQkMsb0JBQWUxQixlQUNoQzJCLGtCQUFrQkMscUJBQWdCNUIsZUFDbEM2QixtQkFBbUJDLHNCQUFpQjlCLGVBQ3BDK0Isb0JBQW9CQyx1QkFBa0JoQyxlQUN0Q2lDLHFCQUFxQkMsd0JBQW1CbEMsZUFDeENtQyxzQkFBc0JDLHlCQUFvQnBDLGVBQzFDcUMsc0JBQXNCQyx5QkFBb0J0QyxlQUMxQ3VDLHVCQUF1QkMsMEJBQXFCeEMsZUFDNUN5Qyx3QkFBd0JDLDJCQUFzQjFDLGVBQzlDMkMsd0JBQXdCQywyQkFBc0I1QyxlQUM5QzZDLHdCQUF3QkMsMkJBQXNCOUMsZUFDOUMrQyx5QkFBeUJDLDRCQUF1QmhELGVBQ2hEaUQsMEJBQTBCQyw2QkFBd0JsRCxlQUNsRG1ELDJCQUEyQkMsOEJBQXlCcEQsZUFDcERxRCwyQkFBMkJDLDhCQUF5QnREO2dCQUUxRCxJQUFJUixRQUFRO29CQUNWbUI7b0JBQ0FOO29CQUNBSjtvQkFDQTBCO29CQUNBSjtvQkFDQXBCO29CQUNBZ0M7b0JBQ0FOO29CQUNBVTtvQkFDQUY7b0JBQ0FOO29CQUNBWjtvQkFDQU47b0JBQ0F3QztvQkFDQVo7b0JBQ0FSO29CQUNBUjtvQkFDQVI7b0JBQ0FGO29CQUNBTjtvQkFDQVk7b0JBQ0F3QjtvQkFDQUY7b0JBQ0FJO29CQUNBRTtvQkFDQUU7b0JBQ0E1QztpQkFDRDtnQkFFRCxJQUFNckIsWUFBWXFFLElBQUFBLDJCQUFtQi9ELFFBQy9CTCxVQUFVcUUsSUFBQUEseUJBQWlCaEUsUUFDM0JpRSxZQUFZLElBakdEeEUsVUFpR2VDLFdBQVdDO2dCQUUzQyxPQUFPc0U7WUFDVDs7O1dBcEdtQnhFOztBQWtDbkIsaUJBbENtQkEsV0FrQ1p5RSxPQUFNQTtBQXFFZkMsT0FBT0MsT0FBTzNFLFVBQVU0RSxXQUFXQyJ9