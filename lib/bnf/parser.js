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
                var firstRule = (0, _array).first(rules), startRule = firstRule, ruleMap = rules.reduce(function(ruleMap, rule) {
                    var ruleName = rule.getName();
                    ruleMap[ruleName] = rule;
                    return ruleMap;
                }, {
                }), bnfParser = new BNFParser(startRule, ruleMap);
                return bnfParser;
            }
        }
    ]);
    return BNFParser;
}(_parser.default);
_defineProperty(BNFParser, "bnf", _bnf.default);
exports.default = BNFParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbImJuZiIsIlJ1bGUiLCJOYW1lUnVsZSIsIlBhcnRSdWxlIiwiUnVsZVJ1bGUiLCJFcnJvclJ1bGUiLCJFcHNpbG9uUnVsZSIsIkNvbW1vblBhcnNlciIsIkRvY3VtZW50UnVsZSIsIlJ1bGVOYW1lUnVsZSIsIldpbGRjYXJkUnVsZSIsIkVuZE9mTGluZVJ1bGUiLCJRdWFudGlmaWVyUnVsZSIsIkRlZmluaXRpb25SdWxlIiwiRGVmaW5pdGlvbnNSdWxlIiwiVGVybWluYWxQYXJ0UnVsZSIsIkNob2ljZU9mUGFydHNSdWxlIiwiVGVybWluYWxTeW1ib2xSdWxlIiwiTm9uVGVybWluYWxQYXJ0UnVsZSIsIlNlcXVlbmNlT2ZQYXJ0c1J1bGUiLCJOb1doaXRlc3BhY2VQYXJ0UnVsZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZSIsIk9wdGlvbmFsUXVhbnRpZmllclJ1bGUiLCJPbmVPck1vcmVRdWFudGlmaWVyUnVsZSIsIlplcm9Pck1vcmVRdWFudGlmaWVyUnVsZSIsIlNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSIsImZpcnN0IiwiQk5GUGFyc2VyIiwicnVsZXNGcm9tVG9rZW5zIiwidG9rZW5zIiwicnVsZXMiLCJub2RlIiwicGFyc2UiLCJFcnJvciIsImdlbmVyYXRlUnVsZXMiLCJydWxlc0xlbmd0aCIsImxlbmd0aCIsImZyb21Ob3RoaW5nIiwibmFtZVJ1bGUiLCJwYXJ0UnVsZSIsInJ1bGVSdWxlIiwiZXJyb3JSdWxlIiwiZXBzaWxvblJ1bGUiLCJkb2N1bWVudFJ1bGUiLCJydWxlTmFtZVJ1bGUiLCJ3aWxkY2FyZFJ1bGUiLCJlbmRPZkxpbmVSdWxlIiwicXVhbnRpZmllclJ1bGUiLCJkZWZpbml0aW9uUnVsZSIsImRlZmluaXRpb25zUnVsZSIsInRlcm1pbmFsUGFydFJ1bGUiLCJjaG9pY2VPZlBhcnRzUnVsZSIsInRlcm1pbmFsU3ltYm9sUnVsZSIsIm5vblRlcm1pbmFsUGFydFJ1bGUiLCJzZXF1ZW5jZU9mUGFydHNSdWxlIiwibm9XaGl0ZXNwYWNlUGFydFJ1bGUiLCJyZWd1bGFyRXhwcmVzc2lvblJ1bGUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJ6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUiLCJmaXJzdFJ1bGUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicmVkdWNlIiwicnVsZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImJuZlBhcnNlciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSSxHQUFPLENBQVAsSUFBTztBQUNOLEdBQVEsQ0FBUixLQUFRO0FBQ0osR0FBYSxDQUFiLEtBQWE7QUFDYixHQUFhLENBQWIsS0FBYTtBQUNiLEdBQWEsQ0FBYixNQUFhO0FBQ1osR0FBYyxDQUFkLE1BQWM7QUFDWixHQUFnQixDQUFoQixRQUFnQjtBQUNmLEdBQWtCLENBQWxCLE9BQWtCO0FBQ2xCLEdBQWlCLENBQWpCLFNBQWlCO0FBQ2pCLEdBQWlCLENBQWpCLFNBQWlCO0FBQ2pCLEdBQWlCLENBQWpCLFNBQWlCO0FBQ2hCLEdBQWtCLENBQWxCLFVBQWtCO0FBQ2pCLEdBQW1CLENBQW5CLFdBQW1CO0FBQ25CLEdBQW1CLENBQW5CLFdBQW1CO0FBQ2xCLEdBQW9CLENBQXBCLFlBQW9CO0FBQ25CLEdBQXFCLENBQXJCLGFBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLGNBQXNCO0FBQ3JCLEdBQXVCLENBQXZCLGVBQXVCO0FBQ3RCLEdBQXdCLENBQXhCLGdCQUF3QjtBQUN4QixHQUF3QixDQUF4QixnQkFBd0I7QUFDdkIsR0FBeUIsQ0FBekIsaUJBQXlCO0FBQ3hCLEdBQTBCLENBQTFCLGtCQUEwQjtBQUMxQixHQUEwQixDQUExQixrQkFBMEI7QUFDekIsR0FBMkIsQ0FBM0IsbUJBQTJCO0FBQzFCLEdBQTRC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