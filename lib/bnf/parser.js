"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bnf = _interopRequireDefault(require("./bnf"));
var _rule = _interopRequireDefault(require("./rule"));
var _context = _interopRequireDefault(require("../context"));
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
                var context = _context.default.fromTokensAndRuleMap(tokens, this.ruleMap), ruleNode = rule.parse(context), node = ruleNode; ///
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
_defineProperty(BNFParser, "bnf", _bnf.default);
exports.default = BNFParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi9ydWxlL25hbWVcIjtcbmltcG9ydCBQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL3BhcnRcIjtcbmltcG9ydCBSdWxlUnVsZSBmcm9tIFwiLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4vcnVsZS9lcnJvclwiO1xuaW1wb3J0IEVwc2lsb25SdWxlIGZyb20gXCIuL3J1bGUvZXBzaWxvblwiO1xuaW1wb3J0IERvY3VtZW50UnVsZSBmcm9tIFwiLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuL3J1bGUvcnVsZU5hbWVcIjtcbmltcG9ydCBXaWxkY2FyZFJ1bGUgZnJvbSBcIi4vcnVsZS93aWxkY2FyZFwiO1xuaW1wb3J0IEVuZE9mTGluZVJ1bGUgZnJvbSBcIi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uUnVsZSBmcm9tIFwiLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBEZWZpbml0aW9uc1J1bGUgZnJvbSBcIi4vcnVsZS9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi9ydWxlL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFJ1bGUgZnJvbSBcIi4vcnVsZS90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvc2VxdWVuY2VPZlBhcnRzXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBmcm9tIFwiLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHN0YXJ0UnVsZUZyb21SdWxlcywgcnVsZU1hcEZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBDb250ZXh0LmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2UoY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVSdWxlID0gbmV3IE5hbWVSdWxlKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIGVycm9yUnVsZSA9IG5ldyBFcnJvclJ1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIGRvY3VtZW50UnVsZSA9IG5ldyBEb2N1bWVudFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gbmV3IFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSA9IG5ldyBTZXF1ZW5jZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJjb250ZXh0IiwiQ29udGV4dCIsImZyb21Ub2tlbnNBbmRSdWxlTWFwIiwicnVsZU5vZGUiLCJub2RlIiwicnVsZXNGcm9tVG9rZW5zIiwicnVsZXMiLCJFcnJvciIsImdlbmVyYXRlUnVsZXMiLCJSdWxlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmcm9tTm90aGluZyIsIm5hbWVSdWxlIiwiTmFtZVJ1bGUiLCJwYXJ0UnVsZSIsIlBhcnRSdWxlIiwicnVsZVJ1bGUiLCJSdWxlUnVsZSIsImVycm9yUnVsZSIsIkVycm9yUnVsZSIsImVwc2lsb25SdWxlIiwiRXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJEb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJSdWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJXaWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwiRW5kT2ZMaW5lUnVsZSIsInF1YW50aWZpZXJSdWxlIiwiUXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsIlRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsIk5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwiU2VxdWVuY2VPZlBhcnRzUnVsZSIsIm5vV2hpdGVzcGFjZVBhcnRSdWxlIiwiTm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiT3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiYm5mUGFyc2VyIiwiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVJLEdBQU8sQ0FBUCxJQUFPO0FBQ04sR0FBUSxDQUFSLEtBQVE7QUFDTCxHQUFZLENBQVosUUFBWTtBQUNYLEdBQWEsQ0FBYixLQUFhO0FBQ2IsR0FBYSxDQUFiLEtBQWE7QUFDYixHQUFhLENBQWIsTUFBYTtBQUNaLEdBQWMsQ0FBZCxNQUFjO0FBQ1osR0FBZ0IsQ0FBaEIsUUFBZ0I7QUFDZixHQUFpQixDQUFqQixTQUFpQjtBQUNqQixHQUFpQixDQUFqQixTQUFpQjtBQUNqQixHQUFpQixDQUFqQixTQUFpQjtBQUNoQixHQUFrQixDQUFsQixVQUFrQjtBQUNqQixHQUFtQixDQUFuQixXQUFtQjtBQUNuQixHQUFtQixDQUFuQixXQUFtQjtBQUNsQixHQUFvQixDQUFwQixZQUFvQjtBQUNuQixHQUFxQixDQUFyQixhQUFxQjtBQUNwQixHQUFzQixDQUF0QixjQUFzQjtBQUNyQixHQUF1QixDQUF2QixlQUF1QjtBQUN0QixHQUF3QixDQUF4QixnQkFBd0I7QUFDeEIsR0FBd0IsQ0FBeEIsZ0JBQXdCO0FBQ3ZCLEdBQXlCLENBQXpCLGlCQUF5QjtBQUN4QixHQUEwQixDQUExQixrQkFBMEI7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