"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bnf = _interopRequireDefault(require("./bnf"));
var _rule = _interopRequireDefault(require("./rule"));
var _name = _interopRequireDefault(require("./rule/name"));
var _part = _interopRequireDefault(require("./rule/part"));
var _rule1 = _interopRequireDefault(require("./rule/rule"));
var _error = _interopRequireDefault(require("./rule/error"));
var _epsilon = _interopRequireDefault(require("./rule/epsilon"));
var _parser = _interopRequireDefault(require("../common/parser"));
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
var _array = require("../utilities/array");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var BNFParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(BNFParser, CommonParser);
    function BNFParser() {
        _classCallCheck(this, BNFParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(BNFParser).apply(this, arguments));
    }
    _createClass(BNFParser, [
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
                var firstRule = (0, _array).first(rules), startRule = firstRule, ruleMap1 = rules.reduce(function(ruleMap, rule) {
                    var ruleName = rule.getName();
                    ruleMap[ruleName] = rule;
                    return ruleMap;
                }, {
                }), bnfParser = new BNFParser(startRule, ruleMap1);
                return bnfParser;
            }
        }
    ]);
    return BNFParser;
}(_parser.default);
_defineProperty(BNFParser, "bnf", _bnf.default);
exports.default = BNFParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuaW1wb3J0IE5hbWVSdWxlIGZyb20gXCIuL3J1bGUvbmFtZVwiO1xuaW1wb3J0IFBhcnRSdWxlIGZyb20gXCIuL3J1bGUvcGFydFwiO1xuaW1wb3J0IFJ1bGVSdWxlIGZyb20gXCIuL3J1bGUvcnVsZVwiO1xuaW1wb3J0IEVycm9yUnVsZSBmcm9tIFwiLi9ydWxlL2Vycm9yXCI7XG5pbXBvcnQgRXBzaWxvblJ1bGUgZnJvbSBcIi4vcnVsZS9lcHNpbG9uXCI7XG5pbXBvcnQgQ29tbW9uUGFyc2VyIGZyb20gXCIuLi9jb21tb24vcGFyc2VyXCI7XG5pbXBvcnQgRG9jdW1lbnRSdWxlIGZyb20gXCIuL3J1bGUvZG9jdW1lbnRcIjtcbmltcG9ydCBSdWxlTmFtZVJ1bGUgZnJvbSBcIi4vcnVsZS9ydWxlTmFtZVwiO1xuaW1wb3J0IFdpbGRjYXJkUnVsZSBmcm9tIFwiLi9ydWxlL3dpbGRjYXJkXCI7XG5pbXBvcnQgRW5kT2ZMaW5lUnVsZSBmcm9tIFwiLi9ydWxlL2VuZE9mTGluZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvcXVhbnRpZmllclwiO1xuaW1wb3J0IERlZmluaXRpb25SdWxlIGZyb20gXCIuL3J1bGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IERlZmluaXRpb25zUnVsZSBmcm9tIFwiLi9ydWxlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL3Rlcm1pbmFsUGFydFwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNSdWxlIGZyb20gXCIuL3J1bGUvY2hvaWNlT2ZQYXJ0c1wiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUnVsZSBmcm9tIFwiLi9ydWxlL3Rlcm1pbmFsU3ltYm9sXCI7XG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL25vblRlcm1pbmFsUGFydFwiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c1J1bGUgZnJvbSBcIi4vcnVsZS9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0UnVsZSBmcm9tIFwiLi9ydWxlL25vV2hpdGVzcGFjZVBhcnRcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGUgZnJvbSBcIi4vcnVsZS9sb29rQWhlYWRNb2RpZmllclwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSBmcm9tIFwiLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgT3B0aW9uYWxRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL29wdGlvbmFsUXVhbnRpZmllclwiO1xuaW1wb3J0IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGZyb20gXCIuL3J1bGUvb25lT3JNb3JlUXVhbnRpZmllclwiO1xuaW1wb3J0IFplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSBmcm9tIFwiLi9ydWxlL3plcm9Pck1vcmVRdWFudGlmaWVyXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGZyb20gXCIuL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cblx0cnVsZXNGcm9tVG9rZW5zKHRva2Vucykge1xuXHQgIGxldCBydWxlcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBubyBub2RlLmApO1xuICAgIH1cblxuICAgIHJ1bGVzID0gbm9kZS5nZW5lcmF0ZVJ1bGVzKFJ1bGUpO1xuXG4gICAgY29uc3QgcnVsZXNMZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgICBpZiAocnVsZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIHJ1bGVzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lUnVsZSA9IG5ldyBOYW1lUnVsZSgpLFxuICAgICAgICAgIHBhcnRSdWxlID0gbmV3IFBhcnRSdWxlKCksXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKCksXG4gICAgICAgICAgZXBzaWxvblJ1bGUgPSBuZXcgRXBzaWxvblJ1bGUoKSxcbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKCksXG4gICAgICAgICAgcnVsZU5hbWVSdWxlID0gbmV3IFJ1bGVOYW1lUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBxdWFudGlmaWVyUnVsZSA9IG5ldyBRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlID0gbmV3IERlZmluaXRpb25SdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlID0gbmV3IERlZmluaXRpb25zUnVsZSgpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNSdWxlID0gbmV3IENob2ljZU9mUGFydHNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUgPSBuZXcgTm9uVGVybWluYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1J1bGUgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUnVsZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnRSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVBhcnRSdWxlKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUnVsZSgpLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGUoKSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZSgpLFxuICAgICAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSA9IG5ldyBaZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBkb2N1bWVudFJ1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIG5hbWVSdWxlLFxuICAgICAgZGVmaW5pdGlvbnNSdWxlLFxuICAgICAgZGVmaW5pdGlvblJ1bGUsXG4gICAgICBwYXJ0UnVsZSxcbiAgICAgIG5vblRlcm1pbmFsUGFydFJ1bGUsXG4gICAgICB0ZXJtaW5hbFBhcnRSdWxlLFxuICAgICAgbm9XaGl0ZXNwYWNlUGFydFJ1bGUsXG4gICAgICBzZXF1ZW5jZU9mUGFydHNSdWxlLFxuICAgICAgY2hvaWNlT2ZQYXJ0c1J1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICBxdWFudGlmaWVyUnVsZSxcbiAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZSxcbiAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGUsXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSxcbiAgICAgIGVycm9yUnVsZVxuICAgIF07XG5cbiAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgICAgc3RhcnRSdWxlID0gZmlyc3RSdWxlLCAgLy8vXG4gICAgICAgICAgcnVsZU1hcCA9IHJ1bGVzLnJlZHVjZSgocnVsZU1hcCwgcnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgICAgICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZU1hcDtcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCTkZQYXJzZXIiLCJydWxlc0Zyb21Ub2tlbnMiLCJ0b2tlbnMiLCJydWxlcyIsIm5vZGUiLCJwYXJzZSIsIkVycm9yIiwiZ2VuZXJhdGVSdWxlcyIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZnJvbU5vdGhpbmciLCJuYW1lUnVsZSIsInBhcnRSdWxlIiwicnVsZVJ1bGUiLCJlcnJvclJ1bGUiLCJlcHNpbG9uUnVsZSIsImRvY3VtZW50UnVsZSIsInJ1bGVOYW1lUnVsZSIsIndpbGRjYXJkUnVsZSIsImVuZE9mTGluZVJ1bGUiLCJxdWFudGlmaWVyUnVsZSIsImRlZmluaXRpb25SdWxlIiwiZGVmaW5pdGlvbnNSdWxlIiwidGVybWluYWxQYXJ0UnVsZSIsImNob2ljZU9mUGFydHNSdWxlIiwidGVybWluYWxTeW1ib2xSdWxlIiwibm9uVGVybWluYWxQYXJ0UnVsZSIsInNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJub1doaXRlc3BhY2VQYXJ0UnVsZSIsInJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsInNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImZpcnN0UnVsZSIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJyZWR1Y2UiLCJydWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiYm5mUGFyc2VyIiwiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVJLEdBQU8sQ0FBUCxJQUFPO0FBQ04sR0FBUSxDQUFSLEtBQVE7QUFDSixHQUFhLENBQWIsS0FBYTtBQUNiLEdBQWEsQ0FBYixLQUFhO0FBQ2IsR0FBYSxDQUFiLE1BQWE7QUFDWixHQUFjLENBQWQsTUFBYztBQUNaLEdBQWdCLENBQWhCLFFBQWdCO0FBQ2YsR0FBa0IsQ0FBbEIsT0FBa0I7QUFDbEIsR0FBaUIsQ0FBakIsU0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsU0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsU0FBaUI7QUFDaEIsR0FBa0IsQ0FBbEIsVUFBa0I7QUFDakIsR0FBbUIsQ0FBbkIsV0FBbUI7QUFDbkIsR0FBbUIsQ0FBbkIsV0FBbUI7QUFDbEIsR0FBb0IsQ0FBcEIsWUFBb0I7QUFDbkIsR0FBcUIsQ0FBckIsYUFBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsY0FBc0I7QUFDckIsR0FBdUIsQ0FB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