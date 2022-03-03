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
                var nameRule = new _name.default(), partRule = new _part.default(), ruleRule = new _rule1.default(), errorRule = new _error.default(), documentRule = new _document.default(), ruleNameRule = new _ruleName.default(), wildcardRule = new _wildcard.default(), endOfLineRule = new _endOfLine.default(), quantifierRule = new _quantifier.default(), definitionRule = new _definition.default(), definitionsRule = new _definitions.default(), terminalPartRule = new _terminalPart.default(), choiceOfPartsRule = new _choiceOfParts.default(), terminalSymbolRule = new _terminalSymbol.default(), nonTerminalPartRule = new _nonTerminalPart.default(), sequenceOfPartsRule = new _sequenceOfParts.default(), noWhitespacePartRule = new _noWhitespacePart.default(), regularExpressionRule = new _regularExpression.default(), lookAheadModifierRule = new _lookAheadModifier.default(), optionalQuantifierRule = new _optionalQuantifier.default(), oneOrMoreQuantifierRule = new _oneOrMoreQuantifier.default(), zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier.default(), significantTokenTypeRule = new _significantTokenType.default();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBEb2N1bWVudFJ1bGUgZnJvbSBcIi4uL3J1bGUvZG9jdW1lbnRcIjtcbmltcG9ydCBSdWxlTmFtZVJ1bGUgZnJvbSBcIi4uL3J1bGUvcnVsZU5hbWVcIjtcbmltcG9ydCBXaWxkY2FyZFJ1bGUgZnJvbSBcIi4uL3J1bGUvd2lsZGNhcmRcIjtcbmltcG9ydCBFbmRPZkxpbmVSdWxlIGZyb20gXCIuLi9ydWxlL2VuZE9mTGluZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uUnVsZSBmcm9tIFwiLi4vcnVsZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllclwiO1xuaW1wb3J0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZnJvbSBcIi4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgc3RhcnRSdWxlRnJvbVJ1bGVzLCBydWxlTWFwRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBTdGF0ZS5mcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHRoaXMucnVsZU1hcCksXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5wYXJzZShzdGF0ZSwgY2FsbGJhY2spLFxuICAgICAgICAgIG5vZGUgPSBydWxlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0ICBsZXQgcnVsZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gbm9kZS5gKTtcbiAgICB9XG5cbiAgICBydWxlcyA9IG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKTtcblxuICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBydWxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IG5ldyBOYW1lUnVsZSgpLFxuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBuZXcgUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IG5ldyBPcHRpb25hbFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgWmVyb09yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gW1xuICAgICAgZG9jdW1lbnRSdWxlLFxuICAgICAgcnVsZVJ1bGUsXG4gICAgICBuYW1lUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBub25UZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgdGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlLFxuICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSxcbiAgICAgIGNob2ljZU9mUGFydHNSdWxlLFxuICAgICAgcnVsZU5hbWVSdWxlLFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlLFxuICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlLFxuICAgICAgdGVybWluYWxTeW1ib2xSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwibm9kZSIsInJ1bGVzRnJvbVRva2VucyIsInJ1bGVzIiwiRXJyb3IiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsIk5hbWVSdWxlIiwicGFydFJ1bGUiLCJQYXJ0UnVsZSIsInJ1bGVSdWxlIiwiUnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJFcnJvclJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsInF1YW50aWZpZXJSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiU2VxdWVuY2VPZlBhcnRzUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiYm5mUGFyc2VyIiwiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVJLEdBQU8sQ0FBUCxJQUFPO0FBQ04sR0FBUyxDQUFULEtBQVM7QUFDUixHQUFVLENBQVYsTUFBVTtBQUNQLEdBQWMsQ0FBZCxLQUFjO0FBQ2QsR0FBYyxDQUFkLEtBQWM7QUFDZCxHQUFjLENBQWQsTUFBYztBQUNiLEdBQWUsQ0FBZixNQUFlO0FBQ1osR0FBa0IsQ0FBbEIsU0FBa0I7QUFDbEIsR0FBa0IsQ0FBbEIsU0FBa0I7QUFDbEIsR0FBa0IsQ0FBbEIsU0FBa0I7QUFDakIsR0FBbUIsQ0FBbkIsVUFBbUI7QUFDbEIsR0FBb0IsQ0FBcEIsV0FBb0I7QUFDcEIsR0FBb0IsQ0FBcEIsV0FBb0I7QUFDbkIsR0FBcUIsQ0FBckIsWUFBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsYUFBc0I7QUFDckIsR0FBdUIsQ0FBdkIsY0FBdUI7QUFDdEIsR0FBd0IsQ0FBeEIsZUFBd0I7QUFDdkIsR0FBeUIsQ0FBekIsZ0JBQXlCO0FBQ3pCLEdBQXlCLENBQXpCLGdCQUF5QjtBQUN4QixHQUEwQixDQUExQixpQkFBMEI7QUFDekIsR0FBMkIsQ0FBM0Isa0JBQTJCO0FBQzNCLEdBQTJCLENBQTNCLGtCQUEyQjtBQUMxQixHQUE0QixDQUE1QixtQkFBNEI7QUFDM0IsR0FBNkIsQ0FBN0Isb0JBQTZCO0FBQzVCLEdBQThCLENBQTlCLHFCQUE4QjtB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