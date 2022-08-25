"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentDefinition;
    }
});
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../definition"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _choiceOfParts = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/choiceOfParts"));
var _oneOrMoreParts = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
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
var DocumentDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DocumentDefinition, Definition);
    var _super = _createSuper(DocumentDefinition);
    function DocumentDefinition() {
        _classCallCheck(this, DocumentDefinition);
        var ruleRuleNamePart = new _ruleName.default(_ruleNames.ruleRuleName), errorRuleNamePart = new _ruleName.default(_ruleNames.errorRuleName), ruleRuleNameAndErrorRuleNameParts = [
            ruleRuleNamePart,
            errorRuleNamePart
        ], choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new _choiceOfParts.default(ruleRuleNameAndErrorRuleNameParts), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new _oneOrMoreParts.default(choiceOfRuleRuleNameAndErrorRuleNamePartsPart), parts = [
            oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
        ];
        return _super.call(this, parts);
    }
    return DocumentDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RvY3VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBPbmVPck1vcmVQYXJ0c1BhcnQgZnJvbSBcIi4uL3BhcnQvbm9uVGVybWluYWwvb25lT3JNb3JlUGFydHNcIjtcblxuaW1wb3J0IHsgcnVsZVJ1bGVOYW1lLCBlcnJvclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudERlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZVJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZVJ1bGVOYW1lKSxcbiAgICAgICAgICBlcnJvclJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQoZXJyb3JSdWxlTmFtZSksXG4gICAgICAgICAgcnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZVJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIGVycm9yUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQocnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQoY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZUNob2ljZU9mUnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEb2N1bWVudERlZmluaXRpb24iLCJydWxlUnVsZU5hbWVQYXJ0IiwiUnVsZU5hbWVQYXJ0IiwicnVsZVJ1bGVOYW1lIiwiZXJyb3JSdWxlTmFtZVBhcnQiLCJlcnJvclJ1bGVOYW1lIiwicnVsZVJ1bGVOYW1lQW5kRXJyb3JSdWxlTmFtZVBhcnRzIiwiY2hvaWNlT2ZSdWxlUnVsZU5hbWVBbmRFcnJvclJ1bGVOYW1lUGFydHNQYXJ0IiwiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJvbmVPck1vcmVDaG9pY2VPZlJ1bGVSdWxlTmFtZUFuZEVycm9yUnVsZU5hbWVQYXJ0c1BhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBU1FBLGtCQUFrQjs7OytEQVBoQixlQUFlOzZEQUNiLDhCQUE4QjtrRUFDekIsbUNBQW1DO21FQUNsQyxvQ0FBb0M7eUJBRXZCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQUEsQUFBTUEsa0JBQWtCLGlCQUF4QjtjQUFNQSxrQkFBa0I7OEJBQWxCQSxrQkFBa0I7YUFBbEJBLGtCQUFrQjs4QkFBbEJBLGtCQUFrQjtRQUVuQyxJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyxTQUFZLFFBQUEsQ0FBQ0MsVUFBWSxhQUFBLENBQUMsRUFDakRDLGlCQUFpQixHQUFHLElBQUlGLFNBQVksUUFBQSxDQUFDRyxVQUFhLGNBQUEsQ0FBQyxFQUNuREMsaUNBQWlDLEdBQUc7WUFDbENMLGdCQUFnQjtZQUNoQkcsaUJBQWlCO1NBQ2xCLEVBQ0RHLDZDQUE2QyxHQUFHLElBQUlDLGNBQWlCLFFBQUEsQ0FBQ0YsaUNBQWlDLENBQUMsRUFDeEdHLDJEQUEyRCxHQUFHLElBQUlDLGVBQWtCLFFBQUEsQ0FBQ0gsNkNBQTZDLENBQUMsRUFDbklJLEtBQUssR0FBRztZQUNORiwyREFBMkQ7U0FDNUQsQUFBQztpQ0FFRkUsS0FBSzs7V0FkTVgsa0JBQWtCO0NBZ0J0QyxDQWhCK0NZLFdBQVUsUUFBQSxDQWdCekQifQ==