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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi9ydWxlL25hbWVcIjtcbmltcG9ydCBQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL3BhcnRcIjtcbmltcG9ydCBSdWxlUnVsZSBmcm9tIFwiLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4vcnVsZS9lcnJvclwiO1xuaW1wb3J0IEVwc2lsb25SdWxlIGZyb20gXCIuL3J1bGUvZXBzaWxvblwiO1xuaW1wb3J0IERvY3VtZW50UnVsZSBmcm9tIFwiLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuL3J1bGUvcnVsZU5hbWVcIjtcbmltcG9ydCBXaWxkY2FyZFJ1bGUgZnJvbSBcIi4vcnVsZS93aWxkY2FyZFwiO1xuaW1wb3J0IEVuZE9mTGluZVJ1bGUgZnJvbSBcIi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL3F1YW50aWZpZXJcIjtcbmltcG9ydCBEZWZpbml0aW9uUnVsZSBmcm9tIFwiLi9ydWxlL2RlZmluaXRpb25cIjtcbmltcG9ydCBEZWZpbml0aW9uc1J1bGUgZnJvbSBcIi4vcnVsZS9kZWZpbml0aW9uc1wiO1xuaW1wb3J0IFRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS90ZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUnVsZSBmcm9tIFwiLi9ydWxlL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFJ1bGUgZnJvbSBcIi4vcnVsZS90ZXJtaW5hbFN5bWJvbFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9ub25UZXJtaW5hbFBhcnRcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvc2VxdWVuY2VPZlBhcnRzXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZnJvbSBcIi4vcnVsZS9ub1doaXRlc3BhY2VQYXJ0XCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvbG9va0FoZWFkTW9kaWZpZXJcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZnJvbSBcIi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9vcHRpb25hbFF1YW50aWZpZXJcIjtcbmltcG9ydCBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXJcIjtcbmltcG9ydCBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBmcm9tIFwiLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IHN0YXJ0UnVsZUZyb21SdWxlcywgcnVsZU1hcEZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQk5GUGFyc2VyIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgdGhpcy5zdGFydFJ1bGUgPSBzdGFydFJ1bGU7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIGdldFN0YXJ0UnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFJ1bGU7XG4gIH1cblxuICBnZXRSdWxlTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVNYXA7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSB0aGlzLnN0YXJ0UnVsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBDb250ZXh0LmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBydWxlTm9kZSA9IHJ1bGUucGFyc2UoY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVSdWxlID0gbmV3IE5hbWVSdWxlKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIGVycm9yUnVsZSA9IG5ldyBFcnJvclJ1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIGRvY3VtZW50UnVsZSA9IG5ldyBEb2N1bWVudFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gbmV3IFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0UnVsZSA9IG5ldyBUZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUgPSBuZXcgVGVybWluYWxTeW1ib2xSdWxlKCksXG4gICAgICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSA9IG5ldyBOb25UZXJtaW5hbFBhcnRSdWxlKCksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUnVsZSA9IG5ldyBTZXF1ZW5jZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUGFydFJ1bGUoKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUgPSBuZXcgUmVndWxhckV4cHJlc3Npb25SdWxlKCksXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlID0gbmV3IExvb2tBaGVhZE1vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIGVuZE9mTGluZVJ1bGUsXG4gICAgICBlcHNpbG9uUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIHF1YW50aWZpZXJSdWxlLFxuICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlLFxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSxcbiAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlLFxuICAgICAgZXJyb3JSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJjb250ZXh0IiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJydWxlTm9kZSIsIm5vZGUiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlcyIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsInBhcnRSdWxlIiwicnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJxdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImJuZlBhcnNlciIsImJuZiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSSxHQUFPLENBQVAsSUFBTztBQUNOLEdBQVEsQ0FBUixLQUFRO0FBQ0wsR0FBWSxDQUFaLFFBQVk7QUFDWCxHQUFhLENBQWIsS0FBYTtBQUNiLEdBQWEsQ0FBYixLQUFhO0FBQ2IsR0FBYSxD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