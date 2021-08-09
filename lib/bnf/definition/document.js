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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb25cIjtcbmltcG9ydCBSdWxlTmFtZVBhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvcnVsZU5hbWVcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IFJ1bGVSdWxlTmFtZSwgRXJyb3JSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVSdWxlTmFtZSA9IFJ1bGVSdWxlTmFtZSxcbiAgICAgICAgICBlcnJvclJ1bGVOYW1lID0gRXJyb3JSdWxlTmFtZSxcbiAgICAgICAgICBydWxlUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlUnVsZU5hbWUpLFxuICAgICAgICAgIGVycm9yUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChlcnJvclJ1bGVOYW1lKSxcbiAgICAgICAgICBydWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICBydWxlUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgZXJyb3JSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChydWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHMpLFxuICAgICAgICAgIG9uZU9yTW9yZUNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlQ2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVyxHQUFlLENBQWYsV0FBZTtBQUNiLEdBQThCLENBQTlCLFNBQThCO0FBQ3pCLEdBQW1DLENBQW5DLGNBQW1DO0FBQ2xDLEdBQW9DLENBQXBDLGVBQW9DO0FBRXZCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJDLGtCQUFrQjtjQUFsQixrQkFBa0I7YUFBbEIsa0JBQWtCOzhCQUFsQixrQkFBa0I7UUFFbkMsR0FBSyxDQUFDLFlBQVksR0FKc0IsVUFBYyxlQUtoRCxhQUFhLEdBTHFCLFVBQWMsZ0JBTWhELGdCQUFnQixHQUFHLEdBQUcsQ0FWUCxTQUE4QixTQVVULFlBQVksR0FDaEQsaUJBQWlCLEdBQUcsR0FBRyxDQVhSLFNBQThCLFNBV1IsYUFBYSxHQUNsRCxpQ0FBaUM7WUFDL0IsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtXQUVuQiw2Q0FBNkMsR0FBRyxHQUFHLENBZi9CLGNBQW1DLFNBZWUsaUNBQWlDLEdBQ3ZHLDJEQUEyRCxHQUFHLEdBQUcsQ0FmNUMsZUFBb0MsU0FlNEIsNkNBQTZDLEdBQ2xJLEtBQUs7WUFDSCwyREFBMkQ7O2dFQWJsRCxrQkFBa0IsYUFnQjdCLEtBQUs7O1dBaEJNLGtCQUFrQjtFQVBoQixXQUFlO2tCQU9qQixrQkFBa0IifQ==