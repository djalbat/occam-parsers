"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bnf = _interopRequireDefault(require("./bnf"));
var _rule = _interopRequireDefault(require("../rule"));
var _state = _interopRequireDefault(require("../state"));
var _name = _interopRequireDefault(require("../rule/name"));
var _part = _interopRequireDefault(require("../rule/part"));
var _rule1 = _interopRequireDefault(require("../rule/rule"));
var _error = _interopRequireDefault(require("../rule/error"));
var _document = _interopRequireDefault(require("../rule/document"));
var _ruleName = _interopRequireDefault(require("../rule/ruleName"));
var _wildcard = _interopRequireDefault(require("../rule/wildcard"));
var _endOfLine = _interopRequireDefault(require("../rule/endOfLine"));
var _quantifier = _interopRequireDefault(require("../rule/quantifier"));
var _definition = _interopRequireDefault(require("../rule/definition"));
var _definitions = _interopRequireDefault(require("../rule/definitions"));
var _terminalPart = _interopRequireDefault(require("../rule/terminalPart"));
var _choiceOfParts = _interopRequireDefault(require("../rule/choiceOfParts"));
var _terminalSymbol = _interopRequireDefault(require("../rule/terminalSymbol"));
var _nonTerminalPart = _interopRequireDefault(require("../rule/nonTerminalPart"));
var _sequenceOfParts = _interopRequireDefault(require("../rule/sequenceOfParts"));
var _noWhitespacePart = _interopRequireDefault(require("../rule/noWhitespacePart"));
var _lookAheadModifier = _interopRequireDefault(require("../rule/lookAheadModifier"));
var _ambiguousModifier = _interopRequireDefault(require("../rule/ambiguousModifier"));
var _regularExpression = _interopRequireDefault(require("../rule/regularExpression"));
var _optionalQuantifier = _interopRequireDefault(require("../rule/optionalQuantifier"));
var _oneOrMoreQuantifier = _interopRequireDefault(require("../rule/oneOrMoreQuantifier"));
var _zeroOrMoreQuantifier = _interopRequireDefault(require("../rule/zeroOrMoreQuantifier"));
var _significantTokenType = _interopRequireDefault(require("../rule/significantTokenType"));
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
                var nameRule = new _name.default(), partRule = new _part.default(), ruleRule = new _rule1.default(), errorRule = new _error.default(), documentRule = new _document.default(), ruleNameRule = new _ruleName.default(), wildcardRule = new _wildcard.default(), endOfLineRule = new _endOfLine.default(), quantifierRule = new _quantifier.default(), definitionRule = new _definition.default(), definitionsRule = new _definitions.default(), terminalPartRule = new _terminalPart.default(), choiceOfPartsRule = new _choiceOfParts.default(), terminalSymbolRule = new _terminalSymbol.default(), nonTerminalPartRule = new _nonTerminalPart.default(), sequenceOfPartsRule = new _sequenceOfParts.default(), noWhitespacePartRule = new _noWhitespacePart.default(), regularExpressionRule = new _regularExpression.default(), lookAheadModifierRule = new _lookAheadModifier.default(), ambiguousModifierRule = new _ambiguousModifier.default(), optionalQuantifierRule = new _optionalQuantifier.default(), oneOrMoreQuantifierRule = new _oneOrMoreQuantifier.default(), zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier.default(), significantTokenTypeRule = new _significantTokenType.default();
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
                    quantifierRule,
                    ambiguousModifierRule,
                    lookAheadModifierRule,
                    optionalQuantifierRule,
                    oneOrMoreQuantifierRule,
                    zeroOrMoreQuantifierRule,
                    errorRule
                ];
                var startRule = (0, _rules).startRuleFromRules(rules), ruleMap = (0, _rules).ruleMapFromRules(rules), bnfParser = new BNFParser(startRule, ruleMap);
                return bnfParser;
            }
        }
    ]);
    return BNFParser;
}();
exports.default = BNFParser;
_defineProperty(BNFParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGJuZiBmcm9tIFwiLi9ibmZcIjtcbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcIi4uL3N0YXRlXCI7XG5pbXBvcnQgTmFtZVJ1bGUgZnJvbSBcIi4uL3J1bGUvbmFtZVwiO1xuaW1wb3J0IFBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL3BhcnRcIjtcbmltcG9ydCBSdWxlUnVsZSBmcm9tIFwiLi4vcnVsZS9ydWxlXCI7XG5pbXBvcnQgRXJyb3JSdWxlIGZyb20gXCIuLi9ydWxlL2Vycm9yXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9xdWFudGlmaWVyXCI7XG5pbXBvcnQgRGVmaW5pdGlvblJ1bGUgZnJvbSBcIi4uL3J1bGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IERlZmluaXRpb25zUnVsZSBmcm9tIFwiLi4vcnVsZS9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvdGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgQ2hvaWNlT2ZQYXJ0c1J1bGUgZnJvbSBcIi4uL3J1bGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvbm9uVGVybWluYWxQYXJ0XCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyXCI7XG5pbXBvcnQgQW1iaWd1b3VzTW9kaWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL2FtYmlndW91c01vZGlmaWVyXCI7XG5pbXBvcnQgUmVndWxhckV4cHJlc3Npb25SdWxlIGZyb20gXCIuLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGZyb20gXCIuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHN0YXJ0UnVsZUZyb21SdWxlcywgcnVsZU1hcEZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IHN0YXRlID0gU3RhdGUuZnJvbVRva2Vuc0FuZFJ1bGVNYXAodG9rZW5zLCB0aGlzLnJ1bGVNYXApLFxuICAgICAgICAgIGNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSxcbiAgICAgICAgICBub2RlID0gcnVsZU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuXHRydWxlc0Zyb21Ub2tlbnModG9rZW5zKSB7XG5cdCAgbGV0IHJ1bGVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIG5vZGUuYCk7XG4gICAgfVxuXG4gICAgcnVsZXMgPSBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSk7XG5cbiAgICBjb25zdCBydWxlc0xlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICAgIGlmIChydWxlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gcnVsZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZVJ1bGUgPSBuZXcgTmFtZVJ1bGUoKSxcbiAgICAgICAgICBwYXJ0UnVsZSA9IG5ldyBQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgZXJyb3JSdWxlID0gbmV3IEVycm9yUnVsZSgpLFxuICAgICAgICAgIGRvY3VtZW50UnVsZSA9IG5ldyBEb2N1bWVudFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gbmV3IFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSA9IG5ldyBTZXF1ZW5jZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZSA9IG5ldyBBbWJpZ3VvdXNNb2RpZmllclJ1bGUoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBkb2N1bWVudFJ1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIG5hbWVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICB0ZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlLFxuICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgd2lsZGNhcmRSdWxlLFxuICAgICAgcXVhbnRpZmllclJ1bGUsXG4gICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGUsXG4gICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUsXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlLFxuICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwibm9kZSIsInJ1bGVzRnJvbVRva2VucyIsInJ1bGVzIiwiRXJyb3IiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsIk5hbWVSdWxlIiwicGFydFJ1bGUiLCJQYXJ0UnVsZSIsInJ1bGVSdWxlIiwiUnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJFcnJvclJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsInF1YW50aWZpZXJSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiU2VxdWVuY2VPZlBhcnRzUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJhbWJpZ3VvdXNNb2RpZmllclJ1bGUiLCJBbWJpZ3VvdXNNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiYm5mUGFyc2VyIiwiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRWdCLElBQUEsSUFBTyxrQ0FBUCxPQUFPLEVBQUE7QUFDTixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBO0FBQ1IsSUFBQSxNQUFVLGtDQUFWLFVBQVUsRUFBQTtBQUNQLElBQUEsS0FBYyxrQ0FBZCxjQUFjLEVBQUE7QUFDZCxJQUFBLEtBQWMsa0NBQWQsY0FBYyxFQUFBO0FBQ2QsSUFBQSxNQUFjLGtDQUFkLGNBQWMsRUFBQTtBQUNiLElBQUEsTUFBZSxrQ0FBZixlQUFlLEVBQUE7QUFDWixJQUFBLFNB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