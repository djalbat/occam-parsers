"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _modifier = _interopRequireDefault(require("../node/bnf/modifier"));
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
        var name = _ruleNames.LookAheadModifierRuleName, lookAheadModifierRuleDefinition = new _lookAheadModifierRule.default(), ambiguous = false, definitions = [
            lookAheadModifierRuleDefinition
        ], Node = _modifier.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return LookAheadModifierRule;
}(_rule.default);
exports.default = LookAheadModifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2xvb2tBaGVhZE1vZGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE1vZGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvbW9kaWZpZXJcIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2xvb2tBaGVhZE1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rQWhlYWRNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTW9kaWZpZXJCTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMb29rQWhlYWRNb2RpZmllclJ1bGUiLCJuYW1lIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiTW9kaWZpZXJCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVpQixJQUFBLEtBQVMsa0NBQVQsU0FBUyxFQUFBO0FBQ0UsSUFBQSxTQUFzQixrQ0FBdEIsc0JBQXNCLEVBQUE7QUFDTixJQUFBLHNCQUFxQyxrQ0FBckMscUNBQXFDLEVBQUE7QUFFdkMsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7S0FOeEQ7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFRZSxJQUFBLEFBQU1BLHFCQUFxQixpQkNSdkMsQURRWTswQ0FSZjs7YUFRcUJBLHFCQUFxQjtvREFSMUM7UUFVSSxJQUFNQyxJQUFJLEdBQUdDLFVBQXlCLDBCQUFBLEVBQ2hDQywrQkFBK0IsR0FBRyxJQUFJQyxzQkFBK0IsVUFBRSxFQUN2RUMsU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRztZQUNaSCwrQkFBK0I7U0FDaEMsRUFDREksSUFBSSxHQUFHQyxTQUFlLFFBQUEsQUFBQztpQ0FFdkJQLElBQUksRUFBRUksU0FBUyxFQUFFQyxXQUFXLEVBQUVDLElBQUk7OztDQUUzQyxDQVprREUsS0FBSSxTQVl0RDtrQkFab0JULHFCQUFxQixBQVIxQyJ9