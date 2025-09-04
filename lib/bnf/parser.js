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
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../rule/bnf/stringLiteral"));
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
                var nameBNFRule = _name.default.fromNothing(), partBNFRule = _part.default.fromNothing(), ruleBNFRule = _rule1.default.fromNothing(), errorBNFRule = _error.default.fromNothing(), epsilonBNFRule = _epsilon.default.fromNothing(), documentBNFRule = _document.default.fromNothing(), ruleNameBNFRule = _ruleName.default.fromNothing(), wildcardBNFRule = _wildcard.default.fromNothing(), endOfLineBNFRule = _endOfLine.default.fromNothing(), partChoiceBNFRule = _partChoice.default.fromNothing(), quantifierBNFRule = _quantifier.default.fromNothing(), definitionBNFRule = _definition.default.fromNothing(), precedentsBNFRule = _precedence.default.fromNothing(), definitionsBNFRule = _definitions.default.fromNothing(), terminalPartBNFRule = _terminalPart.default.fromNothing(), choiceOfPartsBNFRule = _choiceOfParts.default.fromNothing(), stringLiteralBNFRule = _stringLiteral.default.fromNothing(), nonTerminalPartBNFRule = _nonTerminalPart.default.fromNothing(), sequenceOfPartsBNFRule = _sequenceOfParts.default.fromNothing(), opacityModifierBNFRule = _opacityModifier.default.fromNothing(), noWhitespacePartBNFRule = _noWhitespacePart.default.fromNothing(), regularExpressionBNFRule = _regularExpression.default.fromNothing(), callAheadModifierBNFRule = _callAheadModifier.default.fromNothing(), optionalQuantifierBNFRule = _optionalQuantifier.default.fromNothing(), startOfContentPartBNFRule = _startOfContentPart.default.fromNothing(), oneOrMoreQuantifierBNFRule = _oneOrMoreQuantifier.default.fromNothing(), zeroOrMoreQuantifierBNFRule = _zeroOrMoreQuantifier.default.fromNothing(), significantTokenTypeBNFRule = _significantTokenType.default.fromNothing(), rules = [
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
                    stringLiteralBNFRule,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGVNYXAgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZU1hcFwiO1xuaW1wb3J0IHBhcnNlck1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3BhcnNlclwiO1xuaW1wb3J0IE5hbWVCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9uYW1lXCI7XG5pbXBvcnQgUGFydEJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3BhcnRcIjtcbmltcG9ydCBSdWxlQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvcnVsZVwiO1xuaW1wb3J0IEVycm9yQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZXBzaWxvblwiO1xuaW1wb3J0IERvY3VtZW50Qk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZG9jdW1lbnRcIjtcbmltcG9ydCBSdWxlTmFtZUJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi93aWxkY2FyZFwiO1xuaW1wb3J0IEVuZE9mTGluZUJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL2VuZE9mTGluZVwiO1xuaW1wb3J0IFBhcnRDaG9pY2VCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9wYXJ0Q2hvaWNlXCI7XG5pbXBvcnQgUXVhbnRpZmllckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvZGVmaW5pdGlvblwiO1xuaW1wb3J0IFByZWNlZGVudHNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9wcmVjZWRlbmNlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydEJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3Rlcm1pbmFsUGFydFwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbEJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3N0cmluZ0xpdGVyYWxcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnRCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBPcGFjaXR5TW9kaWZpZXJCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9vcGFjaXR5TW9kaWZpZXJcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0Qk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IENhbGxBaGVhZE1vZGlmaWVyQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvY2FsbEFoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgT3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvb3B0aW9uYWxRdWFudGlmaWVyXCI7XG5pbXBvcnQgU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSBmcm9tIFwiLi4vcnVsZS9ibmYvc3RhcnRPZkNvbnRlbnRQYXJ0XCI7XG5pbXBvcnQgT25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUgZnJvbSBcIi4uL3J1bGUvYm5mL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlIGZyb20gXCIuLi9ydWxlL2JuZi9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBOb25UZXJtaW5hbE5vZGVNYXAgPSBOb25UZXJtaW5hbE5vZGVNYXA7XG5cbiAgc3RhdGljIGRlZmF1bHROb25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVCTkZSdWxlID0gTmFtZUJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0Qk5GUnVsZSA9IFBhcnRCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZUJORlJ1bGUgPSBSdWxlQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVycm9yQk5GUnVsZSA9IEVycm9yQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGVwc2lsb25CTkZSdWxlID0gRXBzaWxvbkJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkb2N1bWVudEJORlJ1bGUgPSBEb2N1bWVudEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBydWxlTmFtZUJORlJ1bGUgPSBSdWxlTmFtZUJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3aWxkY2FyZEJORlJ1bGUgPSBXaWxkY2FyZEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBlbmRPZkxpbmVCTkZSdWxlID0gRW5kT2ZMaW5lQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRDaG9pY2VCTkZSdWxlID0gUGFydENob2ljZUJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBxdWFudGlmaWVyQk5GUnVsZSA9IFF1YW50aWZpZXJCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZGVmaW5pdGlvbkJORlJ1bGUgPSBEZWZpbml0aW9uQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByZWNlZGVudHNCTkZSdWxlID0gUHJlY2VkZW50c0JORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc0JORlJ1bGUgPSBEZWZpbml0aW9uc0JORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRCTkZSdWxlID0gVGVybWluYWxQYXJ0Qk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNCTkZSdWxlID0gQ2hvaWNlT2ZQYXJ0c0JORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsQk5GUnVsZSA9IFN0cmluZ0xpdGVyYWxCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0Qk5GUnVsZSA9IE5vblRlcm1pbmFsUGFydEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNCTkZSdWxlID0gU2VxdWVuY2VPZlBhcnRzQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHlNb2RpZmllckJORlJ1bGUgPSBPcGFjaXR5TW9kaWZpZXJCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydEJORlJ1bGUgPSBOb1doaXRlc3BhY2VQYXJ0Qk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uQk5GUnVsZSA9IFJlZ3VsYXJFeHByZXNzaW9uQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNhbGxBaGVhZE1vZGlmaWVyQk5GUnVsZSA9IENhbGxBaGVhZE1vZGlmaWVyQk5GUnVsZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllckJORlJ1bGUgPSBPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSA9IFN0YXJ0T2ZDb250ZW50UGFydEJORlJ1bGUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyQk5GUnVsZSA9IE9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJCTkZSdWxlID0gWmVyb09yTW9yZVF1YW50aWZpZXJCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlID0gU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZSdWxlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBkb2N1bWVudEJORlJ1bGUsXG4gICAgICAgICAgICBydWxlQk5GUnVsZSxcbiAgICAgICAgICAgIG5hbWVCTkZSdWxlLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNCTkZSdWxlLFxuICAgICAgICAgICAgZGVmaW5pdGlvbkJORlJ1bGUsXG4gICAgICAgICAgICBwYXJ0Qk5GUnVsZSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsUGFydEJORlJ1bGUsXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRCTkZSdWxlLFxuICAgICAgICAgICAgc3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlLFxuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzQk5GUnVsZSxcbiAgICAgICAgICAgIGNob2ljZU9mUGFydHNCTkZSdWxlLFxuICAgICAgICAgICAgcGFydENob2ljZUJORlJ1bGUsXG4gICAgICAgICAgICBydWxlTmFtZUJORlJ1bGUsXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZUJORlJ1bGUsXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbkJORlJ1bGUsXG4gICAgICAgICAgICBzdHJpbmdMaXRlcmFsQk5GUnVsZSxcbiAgICAgICAgICAgIHByZWNlZGVudHNCTkZSdWxlLFxuICAgICAgICAgICAgZW5kT2ZMaW5lQk5GUnVsZSxcbiAgICAgICAgICAgIHdpbGRjYXJkQk5GUnVsZSxcbiAgICAgICAgICAgIGVwc2lsb25CTkZSdWxlLFxuICAgICAgICAgICAgcXVhbnRpZmllckJORlJ1bGUsXG4gICAgICAgICAgICBvcGFjaXR5TW9kaWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgY2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZSxcbiAgICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJCTkZSdWxlLFxuICAgICAgICAgICAgZXJyb3JCTkZSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlBhcnNlci5wcm90b3R5cGUsIHBhcnNlck1peGlucyk7XG4iXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJydWxlc0Zyb21Ub2tlbnMiLCJ0b2tlbnMiLCJydWxlcyIsIm5vZGUiLCJwYXJzZSIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwibmFtZUJORlJ1bGUiLCJOYW1lQk5GUnVsZSIsInBhcnRCTkZSdWxlIiwiUGFydEJORlJ1bGUiLCJydWxlQk5GUnVsZSIsIlJ1bGVCTkZSdWxlIiwiZXJyb3JCTkZSdWxlIiwiRXJyb3JCTkZSdWxlIiwiZXBzaWxvbkJORlJ1bGUiLCJFcHNpbG9uQk5GUnVsZSIsImRvY3VtZW50Qk5GUnVsZSIsIkRvY3VtZW50Qk5GUnVsZSIsInJ1bGVOYW1lQk5GUnVsZSIsIlJ1bGVOYW1lQk5GUnVsZSIsIndpbGRjYXJkQk5GUnVsZSIsIldpbGRjYXJkQk5GUnVsZSIsImVuZE9mTGluZUJORlJ1bGUiLCJFbmRPZkxpbmVCTkZSdWxlIiwicGFydENob2ljZUJORlJ1bGUiLCJQYXJ0Q2hvaWNlQk5GUnVsZSIsInF1YW50aWZpZXJCTkZSdWxlIiwiUXVhbnRpZmllckJORlJ1bGUiLCJkZWZpbml0aW9uQk5GUnVsZSIsIkRlZmluaXRpb25CTkZSdWxlIiwicHJlY2VkZW50c0JORlJ1bGUiLCJQcmVjZWRlbnRzQk5GUnVsZSIsImRlZmluaXRpb25zQk5GUnVsZSIsIkRlZmluaXRpb25zQk5GUnVsZSIsInRlcm1pbmFsUGFydEJORlJ1bGUiLCJUZXJtaW5hbFBhcnRCTkZSdWxlIiwiY2hvaWNlT2ZQYXJ0c0JORlJ1bGUiLCJDaG9pY2VPZlBhcnRzQk5GUnVsZSIsInN0cmluZ0xpdGVyYWxCTkZSdWxlIiwiU3RyaW5nTGl0ZXJhbEJORlJ1bGUiLCJub25UZXJtaW5hbFBhcnRCTkZSdWxlIiwiTm9uVGVybWluYWxQYXJ0Qk5GUnVsZSIsInNlcXVlbmNlT2ZQYXJ0c0JORlJ1bGUiLCJTZXF1ZW5jZU9mUGFydHNCTkZSdWxlIiwib3BhY2l0eU1vZGlmaWVyQk5GUnVsZSIsIk9wYWNpdHlNb2RpZmllckJORlJ1bGUiLCJub1doaXRlc3BhY2VQYXJ0Qk5GUnVsZSIsIk5vV2hpdGVzcGFjZVBhcnRCTkZSdWxlIiwicmVndWxhckV4cHJlc3Npb25CTkZSdWxlIiwiUmVndWxhckV4cHJlc3Npb25CTkZSdWxlIiwiY2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlIiwiQ2FsbEFoZWFkTW9kaWZpZXJCTkZSdWxlIiwib3B0aW9uYWxRdWFudGlmaWVyQk5GUnVsZSIsIk9wdGlvbmFsUXVhbnRpZmllckJORlJ1bGUiLCJzdGFydE9mQ29udGVudFBhcnRCTkZSdWxlIiwiU3RhcnRPZkNvbnRlbnRQYXJ0Qk5GUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllckJORlJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZUJORlJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZUJORlJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiYm5mUGFyc2VyIiwiTm9uVGVybWluYWxOb2RlTWFwIiwiZGVmYXVsdE5vblRlcm1pbmFsTm9kZSIsImJuZiIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInBhcnNlck1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQ3FCQTs7OzBEQW5DTDsyREFDQzt5RUFDYzs2REFDTjsyREFDRDsyREFDQTs0REFDQTs0REFDQzs4REFDRTsrREFDQzsrREFDQTsrREFDQTtnRUFDQztpRUFDQztpRUFDQTtpRUFDQTtpRUFDQTtrRUFDQzttRUFDQztvRUFDQztvRUFDQTtzRUFDRTtzRUFDQTtzRUFDQTt1RUFDQzt3RUFDQzt3RUFDQTt5RUFDQzt5RUFDQTswRUFDQzsyRUFDQzsyRUFDQTtxQkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxTQUFTLEVBQUVDLE9BQU87Z0NBRFhGO1FBRWpCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQUhFRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRURHLEtBQUFBO21CQUFBQSxTQUFBQSxn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