"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _rule1 = _interopRequireDefault(require("../node/bnf/rule"));
var _rule2 = _interopRequireDefault(require("../definition/rule"));
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
var RuleRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleRule, Rule);
    var _super = _createSuper(RuleRule);
    function RuleRule() {
        _classCallCheck(this, RuleRule);
        var ruleDefinition = new _rule2.default(), name = _ruleNames.RuleRuleName, definitions = [
            ruleDefinition
        ], Node = _rule1.default;
        return _super.call(this, name, definitions, Node);
    }
    return RuleRule;
}(_rule.default);
exports.default = RuleRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgUnVsZUJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3J1bGVcIjtcbmltcG9ydCBSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ydWxlXCI7XG5cbmltcG9ydCB7IFJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZURlZmluaXRpb24gPSBuZXcgUnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gUnVsZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSdWxlQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlUnVsZSIsInJ1bGVEZWZpbml0aW9uIiwiUnVsZURlZmluaXRpb24iLCJuYW1lIiwiUnVsZVJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiUnVsZUJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFSSxHQUFTLENBQVQsS0FBUztBQUNGLEdBQWtCLENBQWxCLE1BQWtCO0FBQ2YsR0FBb0IsQ0FBcEIsTUFBb0I7QUFFbEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7OztLOzs7Ozs7Ozs7Ozs7O007eUQ7Ozs7Ozs7Ozs7Ozs7Ozt1Qjs7Szs7OzsyQjs7Ozs7Ozs7cUY7Ozs7Ozs7Ozs7OzttRTs7aUQ7Ozs7O0lBRXRCQSxRQUFRLGlCQUFkLFFBQVE7NkI7O2FBQUZBLFFBQVE7dUM7UUFFekIsR0FBSyxDQUFDQyxjQUFjLEdBQUcsR0FBRyxDQUFDQyxNQUFjLFlBQ25DQyxJQUFJLEdBQUdDLFVBQVksZUFDbkJDLFdBQVcsR0FBRyxDQUFDO1lBQ2JKLGNBQWM7UUFDaEIsQ0FBQyxFQUNESyxJQUFJLEdBQUdDLE1BQVc7aUNBRWxCSixJQUFJLEVBQUVFLFdBQVcsRUFBRUMsSUFBSTs7O0VBVEtFLEtBQUk7a0JBQXJCUixRQUFRLEEifQ==