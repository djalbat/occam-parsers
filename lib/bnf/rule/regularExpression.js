"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _regularExpression = _interopRequireDefault(require("../node/regularExpression"));
var _significantTokenType = _interopRequireDefault(require("../definition/significantTokenType"));
var _ruleNames = require("../ruleNames");
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
var regularExpressionType = _occamLexers.types.regularExpressionType;
var RegularExpressionRule = /*#__PURE__*/ function(Rule) {
    _inherits(RegularExpressionRule, Rule);
    function RegularExpressionRule() {
        _classCallCheck(this, RegularExpressionRule);
        var regularExpressionSignificantTokenType = regularExpressionType, regularExpressionSignificantTokenTypeDefinition = new _significantTokenType.default(regularExpressionSignificantTokenType), name = _ruleNames.RegularExpressionRuleName, definitions = [
            regularExpressionSignificantTokenTypeDefinition
        ], Node = _regularExpression.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionRule).call(this, name, definitions, Node));
    }
    return RegularExpressionRule;
}(_rule.default);
exports.default = RegularExpressionRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJ0eXBlcyIsIlJ1bGUiLCJSZWd1bGFyRXhwcmVzc2lvbk5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJSZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lIiwicmVndWxhckV4cHJlc3Npb25UeXBlIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwiY29uc3RydWN0b3IiLCJyZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlIiwicmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWMsQ0FBZCxZQUFjO0FBRW5CLEdBQVMsQ0FBVCxLQUFTO0FBQ1EsR0FBMkIsQ0FBM0Isa0JBQTJCO0FBQ2xCLEdBQW9DLENBQXBDLHFCQUFvQztBQUVyQyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxHQUFLLENBQUcscUJBQXFCLEdBUlAsWUFBYyxPQVE1QixxQkFBcUI7SUFFUixxQkFBcUIsaUJBQTNCLFFBQVE7Y0FBRixxQkFBcUI7YUFBckIscUJBQXFCOzhCQUFyQixxQkFBcUI7UUFFdEMsR0FBSyxDQUFDLHFDQUFxQyxHQUFHLHFCQUFxQixFQUM3RCwrQ0FBK0MsR0FBRyxHQUFHLENBVHBCLHFCQUFvQyxTQVNnQixxQ0FBcUMsR0FDMUgsSUFBSSxHQVI0QixVQUFjLDRCQVM5QyxXQUFXLEdBQUcsQ0FBQztZQUNiLCtDQUErQztRQUNqRCxDQUFDLEVBQ0QsSUFBSSxHQWZvQixrQkFBMkI7Z0VBT3hDLHFCQUFxQixhQVVoQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7O1dBVloscUJBQXFCO0VBUnpCLEtBQVM7a0JBUUwscUJBQXFCIn0=