"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
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
var DefinitionDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DefinitionDefinition, Definition);
    var _super = _createSuper(DefinitionDefinition);
    function DefinitionDefinition() {
        _classCallCheck(this, DefinitionDefinition);
        var partRuleName = _ruleNames.PartRuleName, partRuleNamePart = new _ruleName.default(partRuleName), oneOrMoreRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
            oneOrMoreRuleNamePartsPart
        ];
        return _super.call(this, parts);
    }
    return DefinitionDefinition;
}(_definition.default);
exports.default = DefinitionDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RlZmluaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IFBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lID0gUGFydFJ1bGVOYW1lLFxuICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHBhcnRSdWxlTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUnVsZU5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnRSdWxlTmFtZVBhcnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUnVsZU5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZpbml0aW9uRGVmaW5pdGlvbiIsInBhcnRSdWxlTmFtZSIsIlBhcnRSdWxlTmFtZSIsInBhcnRSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJvbmVPck1vcmVSdWxlTmFtZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV1QixJQUFBLFdBQWUsa0NBQWYsZUFBZSxFQUFBO0FBQ2IsSUFBQSxTQUE4QixrQ0FBOUIsOEJBQThCLEVBQUE7QUFDeEIsSUFBQSxlQUFvQyxrQ0FBcEMsb0NBQW9DLEVBQUE7QUFFdEMsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7S0FOM0M7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFRZSxJQUFBLEFBQU1BLG9CQUFvQixpQkNSdEMsQURRWTsrQ0FSZjs7YUFRcUJBLG9CQUFvQjttREFSekM7UUFVSSxJQUFNQyxZQUFZLEdBQUdDLFVBQVksYUFBQSxFQUMzQkMsZ0JBQWdCLEdBQUcsSUFBSUMsU0FBWSxTQUFDSCxZQUFZLENBQUMsRUFDakRJLDBCQUEwQixHQUFHLElBQUlDLGVBQWtCLFNBQUNILGdCQUFnQixDQUFDLEVBQ3JFSSxLQUFLLEdBQUc7WUFDTkYsMEJBQTBCO1NBQzNCLEFBQUM7aUNBRUZFLEtBQUs7OztDQUVkLENBWGlEQyxXQUFVLFNBVzNEO2tCQVhvQlIsb0JBQW9CLEFBUnpDIn0=