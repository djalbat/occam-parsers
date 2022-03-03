"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/bnf/definition"));
var _lookAheadModifierRule = _interopRequireDefault(require("../definition/lookAheadModifierRule"));
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
var LookAheadModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(LookAheadModifierRule, Rule);
    var _super = _createSuper(LookAheadModifierRule);
    function LookAheadModifierRule() {
        _classCallCheck(this, LookAheadModifierRule);
        var name = _ruleNames.LookAheadModifierRuleName, lookAheadModifierRuleDefinition = new _lookAheadModifierRule.default(), definitions = [
            lookAheadModifierRuleDefinition
        ], Node = _definition.default;
        return _super.call(this, name, definitions, Node);
    }
    return LookAheadModifierRule;
}(_rule.default);
exports.default = LookAheadModifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25CTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9sb29rQWhlYWRNb2RpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25CTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsiTG9va0FoZWFkTW9kaWZpZXJSdWxlIiwibmFtZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUiLCJsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSIsIkRlZmluaXRpb25CTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRUksR0FBUyxDQUFULEtBQVM7QUFDSSxHQUF3QixDQUF4QixXQUF3QjtBQUNWLEdBQXFDLENBQXJDLHNCQUFxQztBQUV2QyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFbkNBLHFCQUFxQixpQkFBM0IsUUFBUTswQzs7YUFBRkEscUJBQXFCO29EO1FBRXRDLEdBQUssQ0FBQ0MsSUFBSSxHQUFHQyxVQUF5Qiw0QkFDaENDLCtCQUErQixHQUFHLEdBQUcsQ0FBQ0Msc0JBQStCLFlBQ3JFQyxXQUFXLEdBQUcsQ0FBQztZQUNiRiwrQkFBK0I7UUFDakMsQ0FBQyxFQUNERyxJQUFJLEdBQUdDLFdBQWlCO2lDQUV4Qk4sSUFBSSxFQUFFSSxXQUFXLEVBQUVDLElBQUk7OztFQVRrQkUsS0FBSTtrQkFBbENSLHFCQUFxQixBIn0=