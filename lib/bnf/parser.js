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
_defineProperty(BNFParser, "bnf", _bnf.default);
exports.default = BNFParser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBEb2N1bWVudFJ1bGUgZnJvbSBcIi4uL3J1bGUvZG9jdW1lbnRcIjtcbmltcG9ydCBSdWxlTmFtZVJ1bGUgZnJvbSBcIi4uL3J1bGUvcnVsZU5hbWVcIjtcbmltcG9ydCBXaWxkY2FyZFJ1bGUgZnJvbSBcIi4uL3J1bGUvd2lsZGNhcmRcIjtcbmltcG9ydCBFbmRPZkxpbmVSdWxlIGZyb20gXCIuLi9ydWxlL2VuZE9mTGluZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uUnVsZSBmcm9tIFwiLi4vcnVsZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNSdWxlIGZyb20gXCIuLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi4vcnVsZS9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBBbWJpZ3VvdXNNb2RpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvYW1iaWd1b3VzTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4uL3J1bGUvcmVndWxhckV4cHJlc3Npb25cIjtcbmltcG9ydCBPcHRpb25hbFF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllclwiO1xuaW1wb3J0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvemVyb09yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZnJvbSBcIi4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgc3RhcnRSdWxlRnJvbVJ1bGVzLCBydWxlTWFwRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZQYXJzZXIge1xuICBjb25zdHJ1Y3RvcihzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICB0aGlzLnN0YXJ0UnVsZSA9IHN0YXJ0UnVsZTtcbiAgICB0aGlzLnJ1bGVNYXAgPSBydWxlTWFwO1xuICB9XG5cbiAgZ2V0U3RhcnRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UnVsZTtcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IHRoaXMuc3RhcnRSdWxlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBTdGF0ZS5mcm9tVG9rZW5zQW5kUnVsZU1hcCh0b2tlbnMsIHRoaXMucnVsZU1hcCksXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsLFxuICAgICAgICAgIHJ1bGVOb2RlID0gcnVsZS5wYXJzZShzdGF0ZSwgY2FsbGJhY2spLFxuICAgICAgICAgIG5vZGUgPSBydWxlTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG5cdHJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpIHtcblx0ICBsZXQgcnVsZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gbm9kZS5gKTtcbiAgICB9XG5cbiAgICBydWxlcyA9IG5vZGUuZ2VuZXJhdGVSdWxlcyhSdWxlKTtcblxuICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gICAgaWYgKHJ1bGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZSBubyBydWxlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IG5ldyBOYW1lUnVsZSgpLFxuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50UnVsZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZSA9IG5ldyBSdWxlTmFtZVJ1bGUoKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGUgPSBuZXcgV2lsZGNhcmRSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgcXVhbnRpZmllclJ1bGUgPSBuZXcgUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uUnVsZSA9IG5ldyBEZWZpbml0aW9uUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlID0gbmV3IEFtYmlndW91c01vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwiZ2V0U3RhcnRSdWxlIiwiZ2V0UnVsZU1hcCIsInBhcnNlIiwidG9rZW5zIiwicnVsZSIsInN0YXRlIiwiU3RhdGUiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJub2RlIiwicnVsZXNGcm9tVG9rZW5zIiwicnVsZXMiLCJFcnJvciIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsIm5hbWVSdWxlIiwiTmFtZVJ1bGUiLCJwYXJ0UnVsZSIsIlBhcnRSdWxlIiwicnVsZVJ1bGUiLCJSdWxlUnVsZSIsImVycm9yUnVsZSIsIkVycm9yUnVsZSIsImRvY3VtZW50UnVsZSIsIkRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIlJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsIldpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJFbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvblJ1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsImFtYmlndW91c01vZGlmaWVyUnVsZSIsIkFtYmlndW91c01vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJibmZQYXJzZXIiLCJibmYiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFRyxJQUFBLElBQU8sa0NBQVAsT0FBTyxFQUFBO0FBQ04sSUFBQSxLQUFTLGtDQUFULFNBQVMsRUFBQTtBQUNSLElBQUEsTUFBVSxrQ0FBVixVQUFVLEVBQUE7QUFDUCxJQUFBLEtBQWMsa0NBQWQsY0FBYyxFQUFBO0FBQ2QsSUFBQSxLQUFjLGtDQUFkLGNBQWMsRUFBQTtBQUNkLElBQUEsTUFBYyxrQ0FBZCxjQUFjLEVBQUE7QUFDYixJQUFBLE1BQWUsa0NBQWYsZUFBZSxFQUFBO0FBQ1osSUFBQSxTQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFDbEIsSUFBQSxTQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFDbEIsSUFBQSxTQUFrQixrQ0FBbEIsa0JBQWtC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