"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _regularExpression = _interopRequireDefault(require("../node/bnf/regularExpression"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var regularExpressionType = _occamLexers.types.regularExpressionType;
var RegularExpressionRule = /*#__PURE__*/ function(Rule) {
    _inherits(RegularExpressionRule, Rule);
    var _super = _createSuper(RegularExpressionRule);
    function RegularExpressionRule() {
        _classCallCheck(this, RegularExpressionRule);
        var regularExpressionSignificantTokenType = regularExpressionType, regularExpressionSignificantTokenTypeDefinition = new _significantTokenType.default(regularExpressionSignificantTokenType), name = _ruleNames.RegularExpressionRuleName, ambiguous = false, definitions = [
            regularExpressionSignificantTokenTypeDefinition
        ], Node = _regularExpression.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return RegularExpressionRule;
}(_rule.default);
exports.default = RegularExpressionRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvbkJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3JlZ3VsYXJFeHByZXNzaW9uXCI7XG5pbXBvcnQgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlXCI7XG5cbmltcG9ydCB7IFJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcmVndWxhckV4cHJlc3Npb25UeXBlIH0gPSB0eXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUgPSByZWd1bGFyRXhwcmVzc2lvblR5cGUsICAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24ocmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9IFJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUsXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJlZ3VsYXJFeHByZXNzaW9uQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbInJlZ3VsYXJFeHByZXNzaW9uVHlwZSIsInR5cGVzIiwiUmVndWxhckV4cHJlc3Npb25SdWxlIiwicmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwiU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uIiwibmFtZSIsIlJlZ3VsYXJFeHByZXNzaW9uUnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJSZWd1bGFyRXhwcmVzc2lvbkJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRW5CLElBQUEsS0FBUyxrQ0FBVCxTQUFTLEVBQUE7QUFDVyxJQUFBLGtCQUErQixrQ0FBL0IsK0JBQStCLEVBQUE7QUFDekIsSUFBQSxxQkFBb0Msa0NBQXBDLG9DQUFvQyxFQUFBO0FBRXJDLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBTSxBQUFFQSxxQkFBcUIsR0FBS0MsWUFBSyxNQUFBLENBQS9CRCxxQkFBcUIsQUFBVSxBQUFDO0FBRXpCLElBQUEsQUFBTUUscUJBQXFCLGlCQ1p2QyxBRFlZOzs7YUFBTUEscUJBQXFCOztRQUV0QyxJQUFNQyxxQ0FBcUMsR0FBR0gscUJBQXFCLEVBQzdESSwrQ0FBK0MsR0FBRyxJQUFJQyxxQkFBOEIsUUFBQSxDQUFDRixxQ0FBcUMsQ0FBQyxFQUMzSEcsSUFBSSxHQUFHQyxVQUF5QiwwQkFBQSxFQUNoQ0MsU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRztZQUNaTCwrQ0FBK0M7U0FDaEQsRUFDRE0sSUFBSSxHQUFHQyxrQkFBd0IsUUFBQSxBQUFDO2lDQUVoQ0wsSUFBSSxFQUFFRSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsSUFBSTs7O0NBRTNDLENBYmtERSxLQUFJLFFBQUEsQ0FhdEQ7a0JBYm9CVixxQkFBcUIifQ==