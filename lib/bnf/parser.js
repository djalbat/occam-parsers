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
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
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
                var node = null;
                var nodes = [], state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, parsed = rule.parse(nodes, state, callback);
                if (parsed) {
                    var firstNode = first(nodes);
                    node = firstNode; ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgTmFtZVJ1bGUgZnJvbSBcIi4uL3J1bGUvbmFtZVwiO1xuaW1wb3J0IFBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL3BhcnRcIjtcbmltcG9ydCBSdWxlUnVsZSBmcm9tIFwiLi4vcnVsZS9ydWxlXCI7XG5pbXBvcnQgRXJyb3JSdWxlIGZyb20gXCIuLi9ydWxlL2Vycm9yXCI7XG5pbXBvcnQgRXBzaWxvblJ1bGUgZnJvbSBcIi4uL3J1bGUvZXBzaWxvblwiO1xuaW1wb3J0IERvY3VtZW50UnVsZSBmcm9tIFwiLi4vcnVsZS9kb2N1bWVudFwiO1xuaW1wb3J0IFJ1bGVOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9ydWxlTmFtZVwiO1xuaW1wb3J0IFdpbGRjYXJkUnVsZSBmcm9tIFwiLi4vcnVsZS93aWxkY2FyZFwiO1xuaW1wb3J0IEVuZE9mTGluZVJ1bGUgZnJvbSBcIi4uL3J1bGUvZW5kT2ZMaW5lXCI7XG5pbXBvcnQgUGFydENob2ljZVJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydENob2ljZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uUnVsZSBmcm9tIFwiLi4vcnVsZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUHJlY2VkZW50c1J1bGUgZnJvbSBcIi4uL3J1bGUvcHJlY2VkZW5jZVwiO1xuaW1wb3J0IERlZmluaXRpb25zUnVsZSBmcm9tIFwiLi4vcnVsZS9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvdGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1J1bGUgZnJvbSBcIi4uL3J1bGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvbm9uVGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyXCI7XG5pbXBvcnQgQW1iaWd1b3VzTW9kaWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL2FtYmlndW91c01vZGlmaWVyXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25SdWxlIGZyb20gXCIuLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGZyb20gXCIuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlcyA9IFtdLFxuICAgICAgICAgIHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIGNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICBwYXJzZWQgPSBydWxlLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0ICBsZXQgcnVsZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gbm9kZS5gKTtcbiAgICB9XG5cbiAgICBydWxlcyA9IG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKTtcblxuICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBydWxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IE5hbWVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gUnVsZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBFcnJvclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IEVwc2lsb25SdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gRG9jdW1lbnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gUnVsZU5hbWVSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gV2lsZGNhcmRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IEVuZE9mTGluZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0Q2hvaWNlUnVsZSA9IFBhcnRDaG9pY2VSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gRGVmaW5pdGlvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcmVjZWRlbnRzUnVsZSA9IFByZWNlZGVudHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gRGVmaW5pdGlvbnNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IFRlcm1pbmFsUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IENob2ljZU9mUGFydHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gVGVybWluYWxTeW1ib2xSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IE5vblRlcm1pbmFsUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gU2VxdWVuY2VPZlBhcnRzUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gTm9XaGl0ZXNwYWNlUGFydFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGUgPSBBbWJpZ3VvdXNNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gT3B0aW9uYWxRdWFudGlmaWVyUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gT25lT3JNb3JlUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHBhcnRDaG9pY2VSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgcHJlY2VkZW50c1J1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJub2RlIiwibm9kZXMiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjYWxsYmFjayIsInBhcnNlZCIsImZpcnN0Tm9kZSIsInJ1bGVzRnJvbVRva2VucyIsInJ1bGVzIiwiRXJyb3IiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsIk5hbWVSdWxlIiwicGFydFJ1bGUiLCJQYXJ0UnVsZSIsInJ1bGVSdWxlIiwiUnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJFcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsIkVwc2lsb25SdWxlIiwiZG9jdW1lbnRSdWxlIiwiRG9jdW1lbnRSdWxlIiwicnVsZU5hbWVSdWxlIiwiUnVsZU5hbWVSdWxlIiwid2lsZGNhcmRSdWxlIiwiV2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsIkVuZE9mTGluZVJ1bGUiLCJwYXJ0Q2hvaWNlUnVsZSIsIlBhcnRDaG9pY2VSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJwcmVjZWRlbnRzUnVsZSIsIlByZWNlZGVudHNSdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiU2VxdWVuY2VPZlBhcnRzUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJhbWJpZ3VvdXNNb2RpZmllclJ1bGUiLCJBbWJpZ3VvdXNNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiYm5mUGFyc2VyIiwiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXVDcUJBOzs7eUJBckNVOzBEQUVmOzJEQUNDOzREQUNDOzJEQUNHOzJEQUNBOzREQUNBOzREQUNDOzhEQUNFOytEQUNDOytEQUNBOytEQUNBO2dFQUNDO2lFQUNDO2lFQUNBO2lFQUNBO2lFQUNBO2tFQUNDO21FQUNDO29FQUNDO3FFQUNDO3NFQUNDO3NFQUNBO3VFQUNDO3dFQUNDO3dFQUNBO3dFQUNBO3lFQUNDOzBFQUNDOzJFQUNDOzJFQUNBO3FCQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBTSxBQUFFQyxRQUFVQywwQkFBVkQ7QUFFTyxJQUFBLEFBQU1ELDBCQUFOO2FBQU1BLFVBQ1BHLFNB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