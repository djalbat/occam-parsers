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
                var nameRule = _name.default.fromNothing(), partRule = _part.default.fromNothing(), ruleRule = _rule1.default.fromNothing(), errorRule = _error.default.fromNothing(), epsilonRule = _epsilon.default.fromNothing(), documentRule = _document.default.fromNothing(), ruleNameRule = _ruleName.default.fromNothing(), wildcardRule = _wildcard.default.fromNothing(), endOfLineRule = _endOfLine.default.fromNothing(), partChoiceRule = _partChoice.default.fromNothing(), quantifierRule = _quantifier.default.fromNothing(), definitionRule = _definition.default.fromNothing(), precedentsRule = _precedence.default.fromNothing(), definitionsRule = _definitions.default.fromNothing(), terminalPartRule = _terminalPart.default.fromNothing(), choiceOfPartsRule = _choiceOfParts.default.fromNothing(), terminalSymbolRule = _terminalSymbol.default.fromNothing(), nonTerminalPartRule = _nonTerminalPart.default.fromNothing(), sequenceOfPartsRule = _sequenceOfParts.default.fromNothing(), opacityModifierRule = _opacityModifier.default.fromNothing(), noWhitespacePartRule = _noWhitespacePart.default.fromNothing(), regularExpressionRule = _regularExpression.default.fromNothing(), lookAheadModifierRule = _lookAheadModifier.default.fromNothing(), optionalQuantifierRule = _optionalQuantifier.default.fromNothing(), oneOrMoreQuantifierRule = _oneOrMoreQuantifier.default.fromNothing(), zeroOrMoreQuantifierRule = _zeroOrMoreQuantifier.default.fromNothing(), significantTokenTypeRule = _significantTokenType.default.fromNothing();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgcGFyc2VyTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcGFyc2VyXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlUnVsZSBmcm9tIFwiLi4vcnVsZS9wYXJ0Q2hvaWNlXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvcXVhbnRpZmllclwiO1xuaW1wb3J0IERlZmluaXRpb25SdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBQcmVjZWRlbnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE9wYWNpdHlNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvb3BhY2l0eU1vZGlmaWVyXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IExvb2tBaGVhZE1vZGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9sb29rQWhlYWRNb2RpZmllclwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSBmcm9tIFwiLi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvb3B0aW9uYWxRdWFudGlmaWVyXCI7XG5pbXBvcnQgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvb25lT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBmcm9tIFwiLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVSdWxlID0gTmFtZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IFBhcnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBSdWxlUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVycm9yUnVsZSA9IEVycm9yUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gRXBzaWxvblJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBEb2N1bWVudFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBSdWxlTmFtZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBXaWxkY2FyZFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gRW5kT2ZMaW5lUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRDaG9pY2VSdWxlID0gUGFydENob2ljZVJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IFF1YW50aWZpZXJSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBEZWZpbml0aW9uUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByZWNlZGVudHNSdWxlID0gUHJlY2VkZW50c1J1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBEZWZpbml0aW9uc1J1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gVGVybWluYWxQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gQ2hvaWNlT2ZQYXJ0c1J1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBUZXJtaW5hbFN5bWJvbFJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gTm9uVGVybWluYWxQYXJ0UnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUgPSBTZXF1ZW5jZU9mUGFydHNSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eU1vZGlmaWVyUnVsZSA9IE9wYWNpdHlNb2RpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IE5vV2hpdGVzcGFjZVBhcnRSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gUmVndWxhckV4cHJlc3Npb25SdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gTG9va0FoZWFkTW9kaWZpZXJSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBkb2N1bWVudFJ1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIG5hbWVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICB0ZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlLFxuICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUsXG4gICAgICBwYXJ0Q2hvaWNlUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIHByZWNlZGVudHNSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgcXVhbnRpZmllclJ1bGUsXG4gICAgICBvcGFjaXR5TW9kaWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GUGFyc2VyLnByb3RvdHlwZSwgcGFyc2VyTWl4aW5zKTtcbiJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0U3RhcnRSdWxlIiwiZ2V0UnVsZU1hcCIsInJ1bGVzRnJvbVRva2VucyIsInRva2VucyIsInJ1bGVzIiwibm9kZSIsInBhcnNlIiwiRXJyb3IiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsIk5hbWVSdWxlIiwicGFydFJ1bGUiLCJQYXJ0UnVsZSIsInJ1bGVSdWxlIiwiUnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJFcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsIkVwc2lsb25SdWxlIiwiZG9jdW1lbnRSdWxlIiwiRG9jdW1lbnRSdWxlIiwicnVsZU5hbWVSdWxlIiwiUnVsZU5hbWVSdWxlIiwid2lsZGNhcmRSdWxlIiwiV2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsIkVuZE9mTGluZVJ1bGUiLCJwYXJ0Q2hvaWNlUnVsZSIsIlBhcnRDaG9pY2VSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJwcmVjZWRlbnRzUnVsZSIsIlByZWNlZGVudHNSdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiU2VxdWVuY2VPZlBhcnRzUnVsZSIsIm9wYWNpdHlNb2RpZmllclJ1bGUiLCJPcGFjaXR5TW9kaWZpZXJSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJibmZQYXJz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