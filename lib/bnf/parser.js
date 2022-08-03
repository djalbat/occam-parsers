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
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./bnf"));
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _state = /*#__PURE__*/ _interopRequireDefault(require("../state"));
var _name = /*#__PURE__*/ _interopRequireDefault(require("../rule/name"));
var _part = /*#__PURE__*/ _interopRequireDefault(require("../rule/part"));
var _rule1 = /*#__PURE__*/ _interopRequireDefault(require("../rule/rule"));
var _error = /*#__PURE__*/ _interopRequireDefault(require("../rule/error"));
var _epsilon = /*#__PURE__*/ _interopRequireDefault(require("../rule/epsilon"));
var _document = /*#__PURE__*/ _interopRequireDefault(require("../rule/document"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../rule/ruleName"));
var _wildcard = /*#__PURE__*/ _interopRequireDefault(require("../rule/wildcard"));
var _endOfLine = /*#__PURE__*/ _interopRequireDefault(require("../rule/endOfLine"));
var _quantifier = /*#__PURE__*/ _interopRequireDefault(require("../rule/quantifier"));
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../rule/definition"));
var _definitions = /*#__PURE__*/ _interopRequireDefault(require("../rule/definitions"));
var _terminalPart = /*#__PURE__*/ _interopRequireDefault(require("../rule/terminalPart"));
var _choiceOfParts = /*#__PURE__*/ _interopRequireDefault(require("../rule/choiceOfParts"));
var _terminalSymbol = /*#__PURE__*/ _interopRequireDefault(require("../rule/terminalSymbol"));
var _nonTerminalPart = /*#__PURE__*/ _interopRequireDefault(require("../rule/nonTerminalPart"));
var _sequenceOfParts = /*#__PURE__*/ _interopRequireDefault(require("../rule/sequenceOfParts"));
var _noWhitespacePart = /*#__PURE__*/ _interopRequireDefault(require("../rule/noWhitespacePart"));
var _lookAheadModifier = /*#__PURE__*/ _interopRequireDefault(require("../rule/lookAheadModifier"));
var _ambiguousModifier = /*#__PURE__*/ _interopRequireDefault(require("../rule/ambiguousModifier"));
var _regularExpression = /*#__PURE__*/ _interopRequireDefault(require("../rule/regularExpression"));
var _optionalQuantifier = /*#__PURE__*/ _interopRequireDefault(require("../rule/optionalQuantifier"));
var _oneOrMoreQuantifier = /*#__PURE__*/ _interopRequireDefault(require("../rule/oneOrMoreQuantifier"));
var _zeroOrMoreQuantifier = /*#__PURE__*/ _interopRequireDefault(require("../rule/zeroOrMoreQuantifier"));
var _significantTokenType = /*#__PURE__*/ _interopRequireDefault(require("../rule/significantTokenType"));
var _rules = require("../utilities/rules");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var BNFParser = /*#__PURE__*/ function() {
    function BNFParser(startRule, ruleMap) {
        _classCallCheck(this, BNFParser);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
    }
    _createClass(BNFParser, [
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
                var state = _state.default.fromTokensAndRuleMap(tokens, this.ruleMap), callback = null, ruleNode = rule.parse(state, callback), node = ruleNode; ///
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
                var nameRule = new _name.default(), partRule = new _part.default(), ruleRule = new _rule1.default(), errorRule = new _error.default(), epsilonRule = new _epsilon.default(), documentRule = new _document.default(), ruleNameRule = new _ruleName.default(), wildcardRule = new _wildcard.default(), endOfLineRule = new _endOfLine.default(), quantifierRule = new _quantifier.default(), definitionRule = new _definition.default(), definitionsRule = new _definitions.default(), terminalPartRule = new _terminalPart.default(), choiceOfPartsRule = new _choiceOfParts.default(), terminalSymbolRule = new _terminalSymbol.default(), nonTerminalPartRule = new _nonTerminalPart.default(), sequenceOfPartsRule = new _sequenceOfParts.default(), noWhitespacePartRule = new _noWhitespacePart.default(), regularExpressionRule = new _regularExpression.default(), lookAheadModifierRule = new _lookAheadModifier.default(), ambiguousModifierRule = new _ambiguousModifier.default(), optionalQuantifierRule = new _optionalQuantifier.default(), oneOrMoreQuantifierRule = new _oneOrMoreQuantifier.default(), zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier.default(), significantTokenTypeRule = new _significantTokenType.default();
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
                    ruleNameRule,
                    significantTokenTypeRule,
                    regularExpressionRule,
                    terminalSymbolRule,
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
_defineProperty(BNFParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9xdWFudGlmaWVyXCI7XG5pbXBvcnQgRGVmaW5pdGlvblJ1bGUgZnJvbSBcIi4uL3J1bGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IERlZmluaXRpb25zUnVsZSBmcm9tIFwiLi4vcnVsZS9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvdGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1J1bGUgZnJvbSBcIi4uL3J1bGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvbm9uVGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyXCI7XG5pbXBvcnQgQW1iaWd1b3VzTW9kaWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL2FtYmlndW91c01vZGlmaWVyXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25SdWxlIGZyb20gXCIuLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGZyb20gXCIuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIGNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSxcbiAgICAgICAgICBub2RlID0gcnVsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG5cdCAgbGV0IHJ1bGVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIG5vZGUuYCk7XG4gICAgfVxuXG4gICAgcnVsZXMgPSBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSk7XG5cbiAgICBjb25zdCBydWxlc0xlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICAgIGlmIChydWxlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gcnVsZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBuZXcgUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlID0gbmV3IEFtYmlndW91c01vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkJORlBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwic3RhdGUiLCJTdGF0ZSIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsIm5vZGUiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlcyIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwibmFtZVJ1bGUiLCJOYW1lUnVsZSIsInBhcnRSdWxlIiwiUGFydFJ1bGUiLCJydWxlUnVsZSIsIlJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiRXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJFcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsImFtYmlndW91c01vZGlmaWVyUnVsZSIsIkFtYmlndW91c01vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJibmZQYXJzZXIiLCJibmYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWlDUUEsU0FBUzs7O3dEQS9CZCxPQUFPO3lEQUNOLFNBQVM7MERBQ1IsVUFBVTt5REFDUCxjQUFjO3lEQUNkLGNBQWM7MERBQ2QsY0FBYzswREFDYixlQUFlOzREQUNiLGlCQUFpQjs2REFDaEIsa0JBQWtCOzZEQUNsQixrQkFBa0I7NkRBQ2xCLGtCQUFrQjs4REFDakIsbUJBQW1COytEQUNsQixvQkFBb0I7K0RB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