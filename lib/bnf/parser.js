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
var _state = /*#__PURE__*/ _interop_require_default(require("../state"));
var _name = /*#__PURE__*/ _interop_require_default(require("../rule/name"));
var _part = /*#__PURE__*/ _interop_require_default(require("../rule/part"));
var _rule1 = /*#__PURE__*/ _interop_require_default(require("../rule/rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../rule/error"));
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../rule/epsilon"));
var _document = /*#__PURE__*/ _interop_require_default(require("../rule/document"));
var _ruleName = /*#__PURE__*/ _interop_require_default(require("../rule/ruleName"));
var _wildcard = /*#__PURE__*/ _interop_require_default(require("../rule/wildcard"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("../rule/endOfLine"));
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../rule/quantifier"));
var _definition = /*#__PURE__*/ _interop_require_default(require("../rule/definition"));
var _precedence = /*#__PURE__*/ _interop_require_default(require("../rule/precedence"));
var _definitions = /*#__PURE__*/ _interop_require_default(require("../rule/definitions"));
var _terminalPart = /*#__PURE__*/ _interop_require_default(require("../rule/terminalPart"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../rule/choiceOfParts"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../rule/terminalSymbol"));
var _nonTerminalPart = /*#__PURE__*/ _interop_require_default(require("../rule/nonTerminalPart"));
var _sequenceOfParts = /*#__PURE__*/ _interop_require_default(require("../rule/sequenceOfParts"));
var _noWhitespacePart = /*#__PURE__*/ _interop_require_default(require("../rule/noWhitespacePart"));
var _lookAheadModifier = /*#__PURE__*/ _interop_require_default(require("../rule/lookAheadModifier"));
var _ambiguousModifier = /*#__PURE__*/ _interop_require_default(require("../rule/ambiguousModifier"));
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
                var nameRule = new _name.default(), partRule = new _part.default(), ruleRule = new _rule1.default(), errorRule = new _error.default(), epsilonRule = new _epsilon.default(), documentRule = new _document.default(), ruleNameRule = new _ruleName.default(), wildcardRule = new _wildcard.default(), endOfLineRule = new _endOfLine.default(), quantifierRule = new _quantifier.default(), definitionRule = new _definition.default(), precedentsRule = new _precedence.default(), definitionsRule = new _definitions.default(), terminalPartRule = new _terminalPart.default(), choiceOfPartsRule = new _choiceOfParts.default(), terminalSymbolRule = new _terminalSymbol.default(), nonTerminalPartRule = new _nonTerminalPart.default(), sequenceOfPartsRule = new _sequenceOfParts.default(), noWhitespacePartRule = new _noWhitespacePart.default(), regularExpressionRule = new _regularExpression.default(), lookAheadModifierRule = new _lookAheadModifier.default(), ambiguousModifierRule = new _ambiguousModifier.default(), optionalQuantifierRule = new _optionalQuantifier.default(), oneOrMoreQuantifierRule = new _oneOrMoreQuantifier.default(), zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier.default(), significantTokenTypeRule = new _significantTokenType.default();
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
                    precedentsRule,
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
_define_property(BNFParser, "bnf", _bnf.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiLi4vc3RhdGVcIjtcbmltcG9ydCBOYW1lUnVsZSBmcm9tIFwiLi4vcnVsZS9uYW1lXCI7XG5pbXBvcnQgUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVcIjtcbmltcG9ydCBFcnJvclJ1bGUgZnJvbSBcIi4uL3J1bGUvZXJyb3JcIjtcbmltcG9ydCBFcHNpbG9uUnVsZSBmcm9tIFwiLi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuLi9ydWxlL2RvY3VtZW50XCI7XG5pbXBvcnQgUnVsZU5hbWVSdWxlIGZyb20gXCIuLi9ydWxlL3J1bGVOYW1lXCI7XG5pbXBvcnQgV2lsZGNhcmRSdWxlIGZyb20gXCIuLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi4vcnVsZS9lbmRPZkxpbmVcIjtcbmltcG9ydCBRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9xdWFudGlmaWVyXCI7XG5pbXBvcnQgRGVmaW5pdGlvblJ1bGUgZnJvbSBcIi4uL3J1bGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IFByZWNlZGVudHNSdWxlIGZyb20gXCIuLi9ydWxlL3ByZWNlZGVuY2VcIjtcbmltcG9ydCBEZWZpbml0aW9uc1J1bGUgZnJvbSBcIi4uL3J1bGUvZGVmaW5pdGlvbnNcIjtcbmltcG9ydCBUZXJtaW5hbFBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL3Rlcm1pbmFsUGFydFwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNSdWxlIGZyb20gXCIuLi9ydWxlL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFJ1bGUgZnJvbSBcIi4uL3J1bGUvdGVybWluYWxTeW1ib2xcIjtcbmltcG9ydCBOb25UZXJtaW5hbFBhcnRSdWxlIGZyb20gXCIuLi9ydWxlL25vblRlcm1pbmFsUGFydFwiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1J1bGUgZnJvbSBcIi4uL3J1bGUvc2VxdWVuY2VPZlBhcnRzXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlUGFydFJ1bGUgZnJvbSBcIi4uL3J1bGUvbm9XaGl0ZXNwYWNlUGFydFwiO1xuaW1wb3J0IExvb2tBaGVhZE1vZGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9sb29rQWhlYWRNb2RpZmllclwiO1xuaW1wb3J0IEFtYmlndW91c01vZGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS9hbWJpZ3VvdXNNb2RpZmllclwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSBmcm9tIFwiLi4vcnVsZS9yZWd1bGFyRXhwcmVzc2lvblwiO1xuaW1wb3J0IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvb3B0aW9uYWxRdWFudGlmaWVyXCI7XG5pbXBvcnQgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZnJvbSBcIi4uL3J1bGUvb25lT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi4vcnVsZS96ZXJvT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBmcm9tIFwiLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIHRoaXMuc3RhcnRSdWxlID0gc3RhcnRSdWxlO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gIH1cblxuICBnZXRTdGFydFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRSdWxlO1xuICB9XG5cbiAgZ2V0UnVsZU1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTWFwO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBydWxlID0gdGhpcy5zdGFydFJ1bGUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IFN0YXRlLmZyb21Ub2tlbnNBbmRSdWxlTWFwKHRva2VucywgdGhpcy5ydWxlTWFwKSxcbiAgICAgICAgICBjYWxsYmFjayA9IG51bGwsXG4gICAgICAgICAgcnVsZU5vZGUgPSBydWxlLnBhcnNlKHN0YXRlLCBjYWxsYmFjayksXG4gICAgICAgICAgbm9kZSA9IHJ1bGVOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWVSdWxlID0gbmV3IE5hbWVSdWxlKCksXG4gICAgICAgICAgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIGVycm9yUnVsZSA9IG5ldyBFcnJvclJ1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIGRvY3VtZW50UnVsZSA9IG5ldyBEb2N1bWVudFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkUnVsZSgpLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIHF1YW50aWZpZXJSdWxlID0gbmV3IFF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBwcmVjZWRlbnRzUnVsZSA9IG5ldyBQcmVjZWRlbnRzUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc1J1bGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRSdWxlID0gbmV3IFRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzUnVsZSA9IG5ldyBDaG9pY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSA9IG5ldyBUZXJtaW5hbFN5bWJvbFJ1bGUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbFBhcnRSdWxlID0gbmV3IE5vblRlcm1pbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1J1bGUoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0UnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUgPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlKCksXG4gICAgICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlID0gbmV3IEFtYmlndW91c01vZGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUgPSBuZXcgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlKCksXG4gICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoKTtcblxuICAgIGxldCBydWxlcyA9IFtcbiAgICAgIGRvY3VtZW50UnVsZSxcbiAgICAgIHJ1bGVSdWxlLFxuICAgICAgbmFtZVJ1bGUsXG4gICAgICBkZWZpbml0aW9uc1J1bGUsXG4gICAgICBkZWZpbml0aW9uUnVsZSxcbiAgICAgIHBhcnRSdWxlLFxuICAgICAgbm9uVGVybWluYWxQYXJ0UnVsZSxcbiAgICAgIHRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICBub1doaXRlc3BhY2VQYXJ0UnVsZSxcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUsXG4gICAgICBjaG9pY2VPZlBhcnRzUnVsZSxcbiAgICAgIHJ1bGVOYW1lUnVsZSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSxcbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSxcbiAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZSxcbiAgICAgIHByZWNlZGVudHNSdWxlLFxuICAgICAgZW5kT2ZMaW5lUnVsZSxcbiAgICAgIHdpbGRjYXJkUnVsZSxcbiAgICAgIGVwc2lsb25SdWxlLFxuICAgICAgcXVhbnRpZmllclJ1bGUsXG4gICAgICBhbWJpZ3VvdXNNb2RpZmllclJ1bGUsXG4gICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGUsXG4gICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlLFxuICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUsXG4gICAgICBlcnJvclJ1bGVcbiAgICBdO1xuXG4gICAgY29uc3Qgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsImdldFN0YXJ0UnVsZSIsImdldFJ1bGVNYXAiLCJwYXJzZSIsInRva2VucyIsInJ1bGUiLCJzdGF0ZSIsIlN0YXRlIiwiZnJvbVRva2Vuc0FuZFJ1bGVNYXAiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwibm9kZSIsInJ1bGVzRnJvbVRva2VucyIsInJ1bGVzIiwiRXJyb3IiLCJnZW5lcmF0ZVJ1bGVzIiwiUnVsZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsIk5hbWVSdWxlIiwicGFydFJ1bGUiLCJQYXJ0UnVsZSIsInJ1bGVSdWxlIiwiUnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJFcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsIkVwc2lsb25SdWxlIiwiZG9jdW1lbnRSdWxlIiwiRG9jdW1lbnRSdWxlIiwicnVsZU5hbWVSdWxlIiwiUnVsZU5hbWVSdWxlIiwid2lsZGNhcmRSdWxlIiwiV2lsZGNhcmRSdWxlIiwiZW5kT2ZMaW5lUnVsZSIsIkVuZE9mTGluZVJ1bGUiLCJxdWFudGlmaWVyUnVsZSIsIlF1YW50aWZpZXJSdWxlIiwiZGVmaW5pdGlvblJ1bGUiLCJEZWZpbml0aW9uUnVsZSIsInByZWNlZGVudHNSdWxlIiwiUHJlY2VkZW50c1J1bGUiLCJkZWZpbml0aW9uc1J1bGUiLCJEZWZpbml0aW9uc1J1bGUiLCJ0ZXJtaW5hbFBhcnRSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJ0ZXJtaW5hbFN5bWJvbFJ1bGUiLCJUZXJtaW5hbFN5bWJvbFJ1bGUiLCJub25UZXJtaW5hbFBhcnRSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsImFtYmlndW91c01vZGlmaWVyUnVsZSIsIkFtYmlndW91c01vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJibmZQYXJzZXIiLCJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0NxQkE7OzswREFoQ0w7MkRBQ0M7NERBQ0M7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