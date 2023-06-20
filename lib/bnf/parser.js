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
                var state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, precedence = null, ruleName = null, ruleNode = rule.parse(state, callback, precedence, ruleName), node = ruleNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlUnVsZSBmcm9tIFwiLi4vcnVsZS9wYXJ0Q2hvaWNlXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvcXVhbnRpZmllclwiO1xuaW1wb3J0IERlZmluaXRpb25SdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBQcmVjZWRlbnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBBbWJpZ3VvdXNNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvYW1iaWd1b3VzTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllclwiO1xuaW1wb3J0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZnJvbSBcIi4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBTdGF0ZS5mcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHRoaXMucnVsZU1hcCksXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIHJ1bGVOYW1lID0gbnVsbCxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBydWxlTmFtZSksXG4gICAgICAgICAgbm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVSdWxlID0gTmFtZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IFBhcnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBSdWxlUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVycm9yUnVsZSA9IEVycm9yUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gRXBzaWxvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBEb2N1bWVudFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBSdWxlTmFtZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBXaWxkY2FyZFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gRW5kT2ZMaW5lUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRDaG9pY2VSdWxlID0gUGFydENob2ljZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IFF1YW50aWZpZXJSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBEZWZpbml0aW9uUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByZWNlZGVudHNSdWxlID0gUHJlY2VkZW50c1J1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBEZWZpbml0aW9uc1J1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gVGVybWluYWxQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gQ2hvaWNlT2ZQYXJ0c1J1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBUZXJtaW5hbFN5bWJvbFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gTm9uVGVybWluYWxQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUgPSBTZXF1ZW5jZU9mUGFydHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUgPSBOb1doaXRlc3BhY2VQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IFJlZ3VsYXJFeHByZXNzaW9uUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZSA9IEFtYmlndW91c01vZGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBPcHRpb25hbFF1YW50aWZpZXJSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZS5mcm9tTm90aGluZygpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlLFxuICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgcGFydENob2ljZVJ1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBwcmVjZWRlbnRzUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkJORlBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwic3RhdGUiLCJTdGF0ZSIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiY2FsbGJhY2siLCJwcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJydWxlTm9kZSIsIm5vZGUiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlcyIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwibmFtZVJ1bGUiLCJOYW1lUnVsZSIsInBhcnRSdWxlIiwiUGFydFJ1bGUiLCJydWxlUnVsZSIsIlJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiRXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJFcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicGFydENob2ljZVJ1bGUiLCJQYXJ0Q2hvaWNlUnVsZSIsInF1YW50aWZpZXJSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25SdWxlIiwicHJlY2VkZW50c1J1bGUiLCJQcmVjZWRlbnRzUnVsZSIsImRlZmluaXRpb25zUnVsZSIsIkRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJUZXJtaW5hbFBhcnRSdWxlIiwiY2hvaWNlT2ZQYXJ0c1J1bGUiLCJDaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIlRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJOb25UZXJtaW5hbFBhcnRSdWxlIiwic2VxdWVuY2VPZlBhcnRzUnVsZSIsIlNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRSdWxlIiwicmVndWxhckV4cHJlc3Npb25SdWxlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwibG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwiYW1iaWd1b3VzTW9kaWZpZXJSdWxlIiwiQW1iaWd1b3VzTW9kaWZpZXJSdWxlIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwiWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIiwic2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwicnVsZU1hcEZyb21SdWxlcyIsImJuZlBhcnNlciIsImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQ3FCQTs7OzBEQWpDTDsyREFDQzs0REFDQzsyREFDRzsyREFDQTs0REFDQTs0REFDQzs4REFDRTsrREFDQzsrREFDQTsrREFDQTtnRUFDQztpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQzttRUFDQztvRUFDQztxRUFDQztzRUFDQztzRUFDQTt1RUFDQzt3RUFDQzt3RUFDQTt3RUFDQTt5RUFDQzswRUFDQzsyRUFDQzsyRUFDQTtxQkFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsU0FBUyxFQUFFQyxPQUFPO2dDQURYRjtRQUVqQixJQUFJLENBQUNDLFlBQVlBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVUE7O2tCQUhFRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7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