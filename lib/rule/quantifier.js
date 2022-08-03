"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return QuantifierRule;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _part = /*#__PURE__*/ _interopRequireDefault(require("../node/bnf/part"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../definition/ruleName"));
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
var QuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(QuantifierRule, Rule);
    var _super = _createSuper(QuantifierRule);
    function QuantifierRule() {
        _classCallCheck(this, QuantifierRule);
        var name = _ruleNames.quantifierRuleName, optionalQuantifierRuleNameDefinition = new _ruleName.default(_ruleNames.optionalQuantifierRuleName), oneOrMoreQuantifierRuleNameDefinition = new _ruleName.default(_ruleNames.oneOrMoreQuantifierRuleName), zeroOrMoreQuantifierRuleNameDefinition = new _ruleName.default(_ruleNames.zeroOrMoreQuantifierRuleName), ambiguous = false, definitions = [
            optionalQuantifierRuleNameDefinition,
            oneOrMoreQuantifierRuleNameDefinition,
            zeroOrMoreQuantifierRuleNameDefinition
        ], Node = _part.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return QuantifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3F1YW50aWZpZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUGFydEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3BhcnRcIjtcbmltcG9ydCBSdWxlTmFtZURlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vcnVsZU5hbWVcIjtcblxuaW1wb3J0IHsgcXVhbnRpZmllclJ1bGVOYW1lLCBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWFudGlmaWVyUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gcXVhbnRpZmllclJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uID0gbmV3IFJ1bGVOYW1lRGVmaW5pdGlvbihvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24ob25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiA9IG5ldyBSdWxlTmFtZURlZmluaXRpb24oemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb24sXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uLFxuICAgICAgICAgICAgemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQYXJ0Qk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlF1YW50aWZpZXJSdWxlIiwibmFtZSIsInF1YW50aWZpZXJSdWxlTmFtZSIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsIlJ1bGVOYW1lRGVmaW5pdGlvbiIsIm9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lRGVmaW5pdGlvbiIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsInplcm9Pck1vcmVRdWFudGlmaWVyUnVsZU5hbWVEZWZpbml0aW9uIiwiemVyb09yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIlBhcnRCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLGNBQWM7Ozt5REFObEIsU0FBUzt5REFDRixrQkFBa0I7NkRBQ1gsd0JBQXdCO3lCQUVtRSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6SCxJQUFBLEFBQU1BLGNBQWMsaUJBQXBCOzs7YUFBTUEsY0FBYzs7UUFFL0IsSUFBTUMsSUFBSSxHQUFHQyxVQUFrQixtQkFBQSxFQUN6QkMsb0NBQW9DLEdBQUcsSUFBSUMsU0FBa0IsUUFBQSxDQUFDQyxVQUEwQiwyQkFBQSxDQUFDLEVBQ3pGQyxxQ0FBcUMsR0FBRyxJQUFJRixTQUFrQixRQUFBLENBQUNHLFVBQTJCLDRCQUFBLENBQUMsRUFDM0ZDLHNDQUFzQyxHQUFHLElBQUlKLFNBQWtCLFFBQUEsQ0FBQ0ssVUFBNEIsNkJBQUEsQ0FBQyxFQUM3RkMsU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRztZQUNaUixvQ0FBb0M7WUFDcENHLHFDQUFxQztZQUNyQ0Usc0NBQXNDO1NBQ3ZDLEVBQ0RJLElBQUksR0FBR0MsS0FBVyxRQUFBLEFBQUM7aUNBRW5CWixJQUFJLEVBQUVTLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxJQUFJOzs7Q0FFM0MsQ0FoQjJDRSxLQUFJLFFBQUEsQ0FnQi9DIn0=