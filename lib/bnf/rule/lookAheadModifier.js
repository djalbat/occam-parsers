"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/definition"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var LookAheadModifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(LookAheadModifierRule, Rule);
    function LookAheadModifierRule() {
        _classCallCheck(this, LookAheadModifierRule);
        var name = _ruleNames.LookAheadModifierRuleName, lookAheadModifierRuleDefinition = new _lookAheadModifierRule.default(), definitions = [
            lookAheadModifierRuleDefinition
        ], Node = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRule).call(this, name, definitions, Node));
    }
    return LookAheadModifierRule;
}(_rule.default);
exports.default = LookAheadModifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9sb29rQWhlYWRNb2RpZmllci5qcyJdLCJuYW1lcyI6WyJSdWxlIiwiRGVmaW5pdGlvbk5vZGUiLCJMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIiwiTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSIsIkxvb2tBaGVhZE1vZGlmaWVyUnVsZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFDQyxHQUFvQixDQUFwQixXQUFvQjtBQUNILEdBQXFDLENBQXJDLHNCQUFxQztBQUV2QyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuQyxxQkFBcUIsaUJBQTNCLFFBQVE7Y0FBRixxQkFBcUI7YUFBckIscUJBQXFCOzhCQUFyQixxQkFBcUI7UUFFdEMsR0FBSyxDQUFDLElBQUksR0FKNEIsVUFBYyw0QkFLOUMsK0JBQStCLEdBQUcsR0FBRyxDQVBILHNCQUFxQyxZQVF2RSxXQUFXLEdBQUcsQ0FBQztZQUNiLCtCQUErQjtRQUNqQyxDQUFDLEVBQ0QsSUFBSSxHQVphLFdBQW9CO2dFQUsxQixxQkFBcUIsYUFTaEMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVRaLHFCQUFxQjtFQU56QixLQUFTO2tCQU1MLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25Ob2RlIGZyb20gXCIuLi9ub2RlL2RlZmluaXRpb25cIjtcbmltcG9ydCBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2xvb2tBaGVhZE1vZGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rQWhlYWRNb2RpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IExvb2tBaGVhZE1vZGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBMb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBsb29rQWhlYWRNb2RpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRGVmaW5pdGlvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==