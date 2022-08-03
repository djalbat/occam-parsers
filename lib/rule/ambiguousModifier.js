"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AmbiguousModifierRule;
    }
});
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _modifier = /*#__PURE__*/ _interopRequireDefault(require("../node/bnf/modifier"));
var _ambiguousModifierRule = /*#__PURE__*/ _interopRequireDefault(require("../definition/ambiguousModifierRule"));
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
var AmbiguousModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(AmbiguousModifierRule, Rule);
    var _super = _createSuper(AmbiguousModifierRule);
    function AmbiguousModifierRule() {
        _classCallCheck(this, AmbiguousModifierRule);
        var name = _ruleNames.ambiguousModifierRuleName, ambiguousModifierRuleDefinition = new _ambiguousModifierRule.default(), ambiguous = false, definitions = [
            ambiguousModifierRuleDefinition
        ], Node = _modifier.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return AmbiguousModifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2FtYmlndW91c01vZGlmaWVyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvbW9kaWZpZXJcIjtcbmltcG9ydCBBbWJpZ3VvdXNNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2FtYmlndW91c01vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBhbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbWJpZ3VvdXNNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IGFtYmlndW91c01vZGlmaWVyUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91c01vZGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgQW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgYW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE1vZGlmaWVyQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkFtYmlndW91c01vZGlmaWVyUnVsZSIsIm5hbWUiLCJhbWJpZ3VvdXNNb2RpZmllclJ1bGVOYW1lIiwiYW1iaWd1b3VzTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsIkFtYmlndW91c01vZGlmaWVyUnVsZURlZmluaXRpb24iLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJNb2RpZmllckJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEscUJBQXFCOzs7eURBTnpCLFNBQVM7NkRBQ0Usc0JBQXNCOzBFQUNOLHFDQUFxQzt5QkFFdkMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBQSxBQUFNQSxxQkFBcUIsaUJBQTNCOzs7YUFBTUEscUJBQXFCOztRQUV0QyxJQUFNQyxJQUFJLEdBQUdDLFVBQXlCLDBCQUFBLEVBQ2hDQywrQkFBK0IsR0FBRyxJQUFJQyxzQkFBK0IsUUFBQSxFQUFFLEVBQ3ZFQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO1lBQ1pILCtCQUErQjtTQUNoQyxFQUNESSxJQUFJLEdBQUdDLFNBQWUsUUFBQSxBQUFDO2lDQUV2QlAsSUFBSSxFQUFFSSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsSUFBSTs7O0NBRTNDLENBWmtERSxLQUFJLFFBQUEsQ0FZdEQifQ==