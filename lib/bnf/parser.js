"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bnf = _interopRequireDefault(require("./bnf"));
var _rule = _interopRequireDefault(require("./rule"));
var _state = _interopRequireDefault(require("../state"));
var _name = _interopRequireDefault(require("./rule/name"));
var _part = _interopRequireDefault(require("./rule/part"));
var _rule1 = _interopRequireDefault(require("./rule/rule"));
var _error = _interopRequireDefault(require("./rule/error"));
var _epsilon = _interopRequireDefault(require("./rule/epsilon"));
var _document = _interopRequireDefault(require("./rule/document"));
var _ruleName = _interopRequireDefault(require("./rule/ruleName"));
var _wildcard = _interopRequireDefault(require("./rule/wildcard"));
var _endOfLine = _interopRequireDefault(require("./rule/endOfLine"));
var _quantifier = _interopRequireDefault(require("./rule/quantifier"));
var _definition = _interopRequireDefault(require("./rule/definition"));
var _definitions = _interopRequireDefault(require("./rule/definitions"));
var _terminalPart = _interopRequireDefault(require("./rule/terminalPart"));
var _choiceOfParts = _interopRequireDefault(require("./rule/choiceOfParts"));
var _terminalSymbol = _interopRequireDefault(require("./rule/terminalSymbol"));
var _nonTerminalPart = _interopRequireDefault(require("./rule/nonTerminalPart"));
var _sequenceOfParts = _interopRequireDefault(require("./rule/sequenceOfParts"));
var _noWhitespacePart = _interopRequireDefault(require("./rule/noWhitespacePart"));
var _lookAheadModifier = _interopRequireDefault(require("./rule/lookAheadModifier"));
var _regularExpression = _interopRequireDefault(require("./rule/regularExpression"));
var _optionalQuantifier = _interopRequireDefault(require("./rule/optionalQuantifier"));
var _oneOrMoreQuantifier = _interopRequireDefault(require("./rule/oneOrMoreQuantifier"));
var _zeroOrMoreQuantifier = _interopRequireDefault(require("./rule/zeroOrMoreQuantifier"));
var _significantTokenType = _interopRequireDefault(require("./rule/significantTokenType"));
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
                var nameRule = new _name.default(), partRule = new _part.default(), ruleRule = new _rule1.default(), errorRule = new _error.default(), epsilonRule = new _epsilon.default(), documentRule = new _document.default(), ruleNameRule = new _ruleName.default(), wildcardRule = new _wildcard.default(), endOfLineRule = new _endOfLine.default(), quantifierRule = new _quantifier.default(), definitionRule = new _definition.default(), definitionsRule = new _definitions.default(), terminalPartRule = new _terminalPart.default(), choiceOfPartsRule = new _choiceOfParts.default(), terminalSymbolRule = new _terminalSymbol.default(), nonTerminalPartRule = new _nonTerminalPart.default(), sequenceOfPartsRule = new _sequenceOfParts.default(), noWhitespacePartRule = new _noWhitespacePart.default(), regularExpressionRule = new _regularExpression.default(), lookAheadModifierRule = new _lookAheadModifier.default(), optionalQuantifierRule = new _optionalQuantifier.default(), oneOrMoreQuantifierRule = new _oneOrMoreQuantifier.default(), zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier.default(), significantTokenTypeRule = new _significantTokenType.default();
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
                    epsilonRule,
                    wildcardRule,
                    quantifierRule,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCIuLi9zdGF0ZVwiO1xuaW1wb3J0IE5hbWVSdWxlIGZyb20gXCIuL3J1bGUvbmFtZVwiO1xuaW1wb3J0IFBhcnRSdWxlIGZyb20gXCIuL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuL3J1bGUvcnVsZVwiO1xuaW1wb3J0IEVycm9yUnVsZSBmcm9tIFwiLi9ydWxlL2Vycm9yXCI7XG5pbXBvcnQgRXBzaWxvblJ1bGUgZnJvbSBcIi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuL3J1bGUvZG9jdW1lbnRcIjtcbmltcG9ydCBSdWxlTmFtZVJ1bGUgZnJvbSBcIi4vcnVsZS9ydWxlTmFtZVwiO1xuaW1wb3J0IFdpbGRjYXJkUnVsZSBmcm9tIFwiLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi9ydWxlL2VuZE9mTGluZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvcXVhbnRpZmllclwiO1xuaW1wb3J0IERlZmluaXRpb25SdWxlIGZyb20gXCIuL3J1bGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IERlZmluaXRpb25zUnVsZSBmcm9tIFwiLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL3Rlcm1pbmFsUGFydFwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUnVsZSBmcm9tIFwiLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL25vblRlcm1pbmFsUGFydFwiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1J1bGUgZnJvbSBcIi4vcnVsZS9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9sb29rQWhlYWRNb2RpZmllclwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSBmcm9tIFwiLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllclwiO1xuaW1wb3J0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvb25lT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGZyb20gXCIuL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgc3RhcnRSdWxlRnJvbVJ1bGVzLCBydWxlTWFwRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBTdGF0ZS5mcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHRoaXMucnVsZU1hcCksXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5wYXJzZShzdGF0ZSwgY2FsbGJhY2spLFxuICAgICAgICAgIG5vZGUgPSBydWxlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0ICBsZXQgcnVsZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gbm9kZS5gKTtcbiAgICB9XG5cbiAgICBydWxlcyA9IG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKTtcblxuICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBydWxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IG5ldyBOYW1lUnVsZSgpLFxuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IG5ldyBRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRSdWxlKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGUoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBkb2N1bWVudFJ1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIG5hbWVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICB0ZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlLFxuICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJORlBhcnNlciIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJnZXRTdGFydFJ1bGUiLCJnZXRSdWxlTWFwIiwicGFyc2UiLCJ0b2tlbnMiLCJydWxlIiwic3RhdGUiLCJTdGF0ZSIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsIm5vZGUiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlcyIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsIlJ1bGUiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwibmFtZVJ1bGUiLCJOYW1lUnVsZSIsInBhcnRSdWxlIiwiUGFydFJ1bGUiLCJydWxlUnVsZSIsIlJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiRXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJFcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJibmZQYXJzZXIiLCJibmYiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUksR0FBTyxDQUFQLElBQU87QUFDTixHQUFRLENBQVIsS0FBUTtBQUNQLEdBQVUsQ0FBVixNQUFVO0FBQ1AsR0FBYSxDQUFiLEtBQWE7QUFDYixHQUFhLENBQWIsS0FBYTtBQUNiLEdBQWEsQ0FBYixNQUFhO0FBQ1osR0FBYyxDQUFkLE1BQWM7QUFDWixHQUFnQixDQUFoQixRQUFnQjtBQUNmLEdBQWlCLENBQWpCLFNBQWlCO0FBQ2pCLEdBQWlCLENBQWpCLFNBQWlCO0FBQ2pCLEdBQWlCLENBQWpCLFNBQWlCO0FBQ2hCLEdBQWtCLENBQWxCLFVBQWtCO0FBQ2pCLEdBQW1CLENBQW5CLFdBQW1CO0FBQ25CLEdBQW1CLENBQW5CLFdBQW1CO0FBQ2xCLEdBQW9CLENBQXBCLFlBQW9CO0FBQ25CLEdBQXFCLENBQXJCLGFBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLGNBQXNCO0FBQ3JCLEdBQXVCLENBQXZCLGVBQXVCO0FBQ3RCLEdBQXdCLENBQXhCLGdCQUF3QjtBQUN4QixHQUF3QixDQUF4QixnQkFBd0I7QUFDdkIsR0FBeUIsQ0FB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