"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _choiceOfParts = _interopRequireDefault(require("../part/nonTerminal/choiceOfParts"));
var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
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
var DocumentDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DocumentDefinition, Definition);
    function DocumentDefinition() {
        _classCallCheck(this, DocumentDefinition);
        var ruleRuleName = _ruleNames.RuleRuleName, errorRuleName = _ruleNames.ErrorRuleName, ruleRuleNamePart = new _ruleName.default(ruleRuleName), errorRuleNamePart = new _ruleName.default(errorRuleName), ruleRuleNameAndErrorRuleNameParts = [
            ruleRuleNamePart,
            errorRuleNamePart
        ], choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new _choiceOfParts.default(ruleRuleNameAndErrorRuleNameParts), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new _oneOrMoreParts.default(choiceOfRuleRuleNameAndErrorRuleNamePartsPart), parts = [
            oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentDefinition).call(this, parts));
    }
    return DocumentDefinition;
}(_definition.default);
exports.default = DocumentDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiUnVsZU5hbWVQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJSdWxlUnVsZU5hbWUiLCJFcnJvclJ1bGVOYW1lIiwiRG9jdW1lbnREZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJydWxlUnVsZU5hbWUiLCJlcnJvclJ1bGVOYW1lIiwicnVsZVJ1bGVOYW1lUGFydCIsImVycm9yUnVsZU5hbWVQYXJ0IiwicnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzIiwiY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0Iiwib25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnQiLCJwYXJ0cyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFlLENBQWYsV0FBZTtBQUNiLEdBQThCLENBQTlCLFNBQThCO0FBQ3pCLEdBQW1DLENBQW5DLGNBQW1DO0FBQ2xDLEdBQW9DLENBQXBDLGVBQW9DO0FBRXZCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJDLGtCQUFrQixpQkFBeEIsUUFBUTtjQUFGLGtCQUFrQjthQUFsQixrQkFBa0I7OEJBQWxCLGtCQUFrQjtRQUVuQyxHQUFLLENBQUMsWUFBWSxHQUpzQixVQUFjLGVBS2hELGFBQWEsR0FMcUIsVUFBYyxnQkFNaEQsZ0JBQWdCLEdBQUcsR0FBRyxDQVZQLFNBQThCLFNBVVQsWUFBWSxHQUNoRCxpQkFBaUIsR0FBRyxHQUFHLENBWFIsU0FBOEIsU0FXUixhQUFhLEdBQ2xELGlDQUFpQyxHQUFHLENBQUM7WUFDbkMsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtRQUNuQixDQUFDLEVBQ0QsNkNBQTZDLEdBQUcsR0FBRyxDQWYvQixjQUFtQyxTQWVlLGlDQUFpQyxHQUN2RywyREFBMkQsR0FBRyxHQUFHLENBZjVDLGVBQW9DLFNBZTRCLDZDQUE2QyxHQUNsSSxLQUFLLEdBQUcsQ0FBQztZQUNQLDJEQUEyRDtRQUM3RCxDQUFDO2dFQWRVLGtCQUFrQixhQWdCN0IsS0FBSzs7V0FoQk0sa0JBQWtCO0VBUGhCLFdBQWU7a0JBT2pCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgUnVsZVJ1bGVOYW1lLCBFcnJvclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZVJ1bGVOYW1lID0gUnVsZVJ1bGVOYW1lLFxuICAgICAgICAgIGVycm9yUnVsZU5hbWUgPSBFcnJvclJ1bGVOYW1lLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgZXJyb3JSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGVycm9yUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgb25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KGNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdfQ==