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
_define_property(BNFParser, "bnf", _bnf.default);
Object.assign(BNFParser.prototype, _parser.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBwYXJzZXJNaXhpbnMgZnJvbSBcIi4uL21peGlucy9wYXJzZXJcIjtcbmltcG9ydCBOYW1lQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvbmFtZVwiO1xuaW1wb3J0IFBhcnRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9wYXJ0XCI7XG5pbXBvcnQgUnVsZUJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3J1bGVcIjtcbmltcG9ydCBFcnJvckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL2Vycm9yXCI7XG5pbXBvcnQgRXBzaWxvbkJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL2Vwc2lsb25cIjtcbmltcG9ydCBEb2N1bWVudEJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9ydWxlTmFtZVwiO1xuaW1wb3J0IFdpbGRjYXJkQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvd2lsZGNhcmRcIjtcbmltcG9ydCBFbmRPZkxpbmVCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9lbmRPZkxpbmVcIjtcbmltcG9ydCBQYXJ0Q2hvaWNlQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvcGFydENob2ljZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9xdWFudGlmaWVyXCI7XG5pbXBvcnQgRGVmaW5pdGlvbkJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL2RlZmluaXRpb25cIjtcbmltcG9ydCBQcmVjZWRlbnRzQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvcHJlY2VkZW5jZVwiO1xuaW1wb3J0IERlZmluaXRpb25zQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvdGVybWluYWxTeW1ib2xcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBPcGFjaXR5TW9kaWZpZXJCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9vcGFjaXR5TW9kaWZpZXJcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0Qk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IENhbGxBaGVhZE1vZGlmaWVyQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvY2FsbEFoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgT3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvb3B0aW9uYWxRdWFudGlmaWVyXCI7XG5pbXBvcnQgU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvc3RhcnRPZkNvbnRlbnRQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVCTkZSdWxlID0gTmFtZUJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0Qk5GUnVsZSA9IFBhcnRCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZUJORlJ1bGUgPSBSdWxlQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVycm9yQk5GUnVsZSA9IEVycm9yQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVwc2lsb25CTkZSdWxlID0gRXBzaWxvbkJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkb2N1bWVudEJORlJ1bGUgPSBEb2N1bWVudEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZUJORlJ1bGUgPSBSdWxlTmFtZUJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3aWxkY2FyZEJORlJ1bGUgPSBXaWxkY2FyZEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlbmRPZkxpbmVCTkZSdWxlID0gRW5kT2ZMaW5lQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRDaG9pY2VCTkZSdWxlID0gUGFydENob2ljZUJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBxdWFudGlmaWVyQk5GUnVsZSA9IFF1YW50aWZpZXJCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkJORlJ1bGUgPSBEZWZpbml0aW9uQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByZWNlZGVudHNCTkZSdWxlID0gUHJlY2VkZW50c0JORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0JORlJ1bGUgPSBEZWZpbml0aW9uc0JORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRCTkZSdWxlID0gVGVybWluYWxQYXJ0Qk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNCTkZSdWxlID0gQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbEJORlJ1bGUgPSBUZXJtaW5hbFN5bWJvbEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRCTkZSdWxlID0gTm9uVGVybWluYWxQYXJ0Qk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c0JORlJ1bGUgPSBTZXF1ZW5jZU9mUGFydHNCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3BhY2l0eU1vZGlmaWVyQk5GUnVsZSA9IE9wYWNpdHlNb2RpZmllckJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0Qk5GUnVsZSA9IE5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25CTkZSdWxlID0gUmVndWxhckV4cHJlc3Npb25CTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlID0gQ2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZSA9IE9wdGlvbmFsUXVhbnRpZmllckJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGFydE9mQ29udGVudFBhcnRCTkZSdWxlID0gU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlID0gT25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUgPSBaZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZUJORlJ1bGUgPSBTaWduaWZpY2FudFRva2VuVHlwZUJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIGRvY3VtZW50Qk5GUnVsZSxcbiAgICAgICAgICAgIHJ1bGVCTkZSdWxlLFxuICAgICAgICAgICAgbmFtZUJORlJ1bGUsXG4gICAgICAgICAgICBkZWZpbml0aW9uc0JORlJ1bGUsXG4gICAgICAgICAgICBkZWZpbml0aW9uQk5GUnVsZSxcbiAgICAgICAgICAgIHBhcnRCTkZSdWxlLFxuICAgICAgICAgICAgbm9uVGVybWluYWxQYXJ0Qk5GUnVsZSxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydEJORlJ1bGUsXG4gICAgICAgICAgICBzdGFydE9mQ29udGVudFBhcnRCTkZSdWxlLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUsXG4gICAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNCTkZSdWxlLFxuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c0JORlJ1bGUsXG4gICAgICAgICAgICBwYXJ0Q2hvaWNlQk5GUnVsZSxcbiAgICAgICAgICAgIHJ1bGVOYW1lQk5GUnVsZSxcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlQk5GUnVsZSxcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uQk5GUnVsZSxcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sQk5GUnVsZSxcbiAgICAgICAgICAgIHByZWNlZGVudHNCTkZSdWxlLFxuICAgICAgICAgICAgZW5kT2ZMaW5lQk5GUnVsZSxcbiAgICAgICAgICAgIHdpbGRjYXJkQk5GUnVsZSxcbiAgICAgICAgICAgIGVwc2lsb25CTkZSdWxlLFxuICAgICAgICAgICAgcXVhbnRpZmllckJORlJ1bGUsXG4gICAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgY2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZSxcbiAgICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgZXJyb3JCTkZSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlBhcnNlci5wcm90b3R5cGUsIHBhcnNlck1peGlucyk7XG4iXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJydWxlc0Zyb21Ub2tlbnMiLCJ0b2tlbnMiLCJydWxlcyIsIm5vZGUiLCJwYXJzZSIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwibmFtZUJORlJ1bGUiLCJOYW1lQk5GUnVsZSIsInBhcnRCTkZSdWxlIiwiUGFydEJORlJ1bGUiLCJydWxlQk5GUnVsZSIsIlJ1bGVCTkZSdWxlIiwiZXJyb3JCTkZSdWxlIiwiRXJyb3JCTkZSdWxlIiwiZXBzaWxvbkJORlJ1bGUiLCJFcHNpbG9uQk5GUnVsZSIsImRvY3VtZW50Qk5GUnVsZSIsIkRvY3VtZW50Qk5GUnVsZSIsInJ1bGVOYW1lQk5GUnVsZSIsIlJ1bGVOYW1lQk5GUnVsZSIsIndpbGRjYXJkQk5GUnVsZSIsIldpbGRjYXJkQk5GUnVsZSIsImVuZE9mTGluZUJORlJ1bGUiLCJFbmRPZkxpbmVCTkZSdWxlIiwicGFydENob2ljZUJORlJ1bGUiLCJQYXJ0Q2hvaWNlQk5GUnVsZSIsInF1YW50aWZpZXJCTkZSdWxlIiwiUXVhbnRpZmllckJORlJ1bGUiLCJkZWZpbml0aW9uQk5GUnVsZSIsIkRlZmluaXRpb25CTkZSdWxlIiwicHJlY2VkZW50c0JORlJ1bGUiLCJQcmVjZWRlbnRzQk5GUnVsZSIsImRlZmluaXRpb25zQk5GUnVsZSIsIkRlZmluaXRpb25zQk5GUnVsZSIsInRlcm1pbmFsUGFydEJORlJ1bGUiLCJUZXJtaW5hbFBhcnRCTkZSdWxlIiwiY2hvaWNlT2ZQYXJ0c0JORlJ1bGUiLCJDaG9pY2VPZlBhcnRzQk5GUnVsZSIsInRlcm1pbmFsU3ltYm9sQk5GUnVsZSIsIlRlcm1pbmFsU3ltYm9sQk5GUnVsZSIsIm5vblRlcm1pbmFsUGFydEJORlJ1bGUiLCJOb25UZXJtaW5hbFBhcnRCTkZSdWxlIiwic2VxdWVuY2VPZlBhcnRzQk5GUnVsZSIsIlNlcXVlbmNlT2ZQYXJ0c0JORlJ1bGUiLCJvcGFjaXR5TW9kaWZpZXJCTkZSdWxlIiwiT3BhY2l0eU1vZGlmaWVyQk5GUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUiLCJjYWxsQWhlYWRNb2RpZmllckJORlJ1bGUiLCJDYWxsQWhlYWRNb2RpZmllckJORlJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZSIsInN0YXJ0T2ZDb250ZW50UGFydEJORlJ1bGUiLCJTdGFydE9mQ29udGVudFBhcnRCTkZSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyQk5GUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyQk5GUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlQk5GUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlQk5GUnVsZSIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJibmZQYXJzZXIiLCJibmYiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJwYXJzZXJNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0NxQkE7OzswREFsQ0w7MkRBQ0M7NkRBQ1E7MkRBQ0Q7MkRBQ0E7NERBQ0E7NERBQ0M7OERBQ0U7K0RBQ0M7K0RBQ0E7K0RBQ0E7Z0VBQ0M7aUVBQ0M7aUVBQ0E7aUVBQ0E7aUVBQ0E7a0VBQ0M7bUVBQ0M7b0VBQ0M7cUVBQ0M7c0VBQ0M7c0VBQ0E7c0VBQ0E7dUVBQ0M7d0VBQ0M7d0VBQ0E7eUVBQ0M7eUVBQ0E7MEVBQ0M7MkVBQ0M7MkVBQ0E7cUJBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsU0FBUyxFQUFFQyxPQUFPO2dDQURYRjtRQUVqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFIRUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVERyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxNQUFNO2dCQUNwQixJQUFJQztnQkFFSCxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDSDtnQkFFeEIsSUFBSUUsU0FBUyxNQUFNO29CQUNqQixNQUFNLElBQUlFLE1BQU87Z0JBQ25CO2dCQUVBSCxRQUFRQyxLQUFLRyxhQUFhLENBQUNDLGFBQUk7Z0JBRS9CLElBQU1DLGNBQWNOLE1BQU1PLE1BQU07Z0JBRWhDLElBQUlELGdCQUFnQixHQUFHO29CQUNyQixNQUFNLElBQUlILE1BQU87Z0JBQ25CO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFJT1EsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsY0FBY0MsYUFBVyxDQUFDRixXQUFXLElBQ3JDRyxjQUFjQyxhQUFXLENBQUNKLFdBQVcsSUFDckNLLGNBQWNDLGNBQVcsQ0FBQ04sV0FBVyxJQUNyQ08sZUFBZUMsY0FBWSxDQUFDUixXQUFXLElBQ3ZDUyxpQkFBaUJDLGdCQUFjLENBQUNWLFdBQVcsSUFDM0NXLGtCQUFrQkMsaUJBQWUsQ0FBQ1osV0FBVyxJQUM3Q2Esa0JBQWtCQyxpQkFBZSxDQUFDZCxXQUFXLElBQzdDZSxrQkFBa0JDLGlCQUFlLENBQUNoQixXQUFXLElBQzdDaUIsbUJBQW1CQyxrQkFBZ0IsQ0FBQ2xCLFdBQVcsSUFDL0NtQixvQkFBb0JDLG1CQUFpQixDQUFDcEIsV0FBVyxJQUNqRHFCLG9CQUFvQkMsbUJBQWlCLENBQUN0QixXQUFXLElBQ2pEdUIsb0JBQW9CQyxtQkFBaUIsQ0FBQ3hCLFdBQVcsSUFDakR5QixvQkFBb0JDLG1CQUFpQixDQUFDMUIsV0FBVyxJQUNqRDJCLHFCQUFxQkMsb0JBQWtCLENBQUM1QixXQUFXLElBQ25ENkIsc0JBQXNCQyxxQkFBbUIsQ0FBQzlCLFdBQVcsSUFDckQrQix1QkFBdUJDLHNCQUFvQixDQUFDaEMsV0FBVyxJQUN2RGlDLHdCQUF3QkMsdUJBQXFCLENBQUNsQyxXQUFXLElBQ3pEbUMseUJBQXlCQyx3QkFBc0IsQ0FBQ3BDLFdBQVcsSUFDM0RxQyx5QkFBeUJDLHdCQUFzQixDQUFDdEMsV0FBVyxJQUMzRHVDLHlCQUF5QkMsd0JBQXNCLENBQUN4QyxXQUFXLElBQzNEeUMsMEJBQTBCQyx5QkFBdUIsQ0FBQzFDLFdBQVcsSUFDN0QyQywyQkFBMkJDLDBCQUF3QixDQUFDNUMsV0FBVyxJQUMvRDZDLDJCQUEyQkMsMEJBQXdCLENBQUM5QyxXQUFXLElBQy9EK0MsNEJBQTRCQywyQkFBeUIsQ0FBQ2hELFdBQVcsSUFDakVpRCw0QkFBNEJDLDJCQUF5QixDQUFDbEQsV0FBVyxJQUNqRW1ELDZCQUE2QkMsNEJBQTBCLENBQUNwRCxXQUFXLElBQ25FcUQsOEJBQThCQyw2QkFBMkIsQ0FBQ3RELFdBQVcsSUFDckV1RCw4QkFBOEJDLDZCQUEyQixDQUFDeEQsV0FBVyxJQUNyRVIsUUFBUTtvQkFDTm1CO29CQUNBTjtvQkFDQUo7b0JBQ0EwQjtvQkFDQUo7b0JBQ0FwQjtvQkFDQWdDO29CQUNBTjtvQkFDQW9CO29CQUNBUjtvQkFDQUo7b0JBQ0FOO29CQUNBWjtvQkFDQU47b0JBQ0EwQztvQkFDQVo7b0JBQ0FWO29CQUNBUjtvQkFDQVI7b0JBQ0FGO29CQUNBTjtvQkFDQVk7b0JBQ0FrQjtvQkFDQU07b0JBQ0FFO29CQUNBSTtvQkFDQUU7b0JBQ0E5QztpQkFDRCxFQUNEckIsWUFBWXVFLElBQUFBLHlCQUFrQixFQUFDakUsUUFDL0JMLFVBQVV1RSxJQUFBQSx1QkFBZ0IsRUFBQ2xFLFFBQzNCbUUsWUFBWSxJQWpHRDFFLFVBaUdlQyxXQUFXQztnQkFFM0MsT0FBT3dFO1lBQ1Q7OztXQXBHbUIxRTs7QUFrQ25CLGlCQWxDbUJBLFdBa0NaMkUsT0FBTUEsWUFBRztBQXFFbEJDLE9BQU9DLE1BQU0sQ0FBQzdFLFVBQVU4RSxTQUFTLEVBQUVDLGVBQVkifQ==