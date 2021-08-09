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
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRule).call(this, name, definitions, Node1));
    }
    return LookAheadModifierRule;
}(_rule.default);
exports.default = LookAheadModifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9sb29rQWhlYWRNb2RpZmllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uTm9kZSBmcm9tIFwiLi4vbm9kZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9sb29rQWhlYWRNb2RpZmllclJ1bGVcIjtcblxuaW1wb3J0IHsgTG9va0FoZWFkTW9kaWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va0FoZWFkTW9kaWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBMb29rQWhlYWRNb2RpZmllclJ1bGVOYW1lLFxuICAgICAgICAgIGxvb2tBaGVhZE1vZGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgTG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbG9va0FoZWFkTW9kaWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNDLEdBQW9CLENBQXBCLFdBQW9CO0FBQ0gsR0FBcUMsQ0FBckMsc0JBQXFDO0FBRXZDLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5DLHFCQUFxQjtjQUFyQixxQkFBcUI7YUFBckIscUJBQXFCOzhCQUFyQixxQkFBcUI7UUFFdEMsR0FBSyxDQUFDLElBQUksR0FKNEIsVUFBYyw0QkFLOUMsK0JBQStCLEdBQUcsR0FBRyxDQVBILHNCQUFxQyxZQVF2RSxXQUFXO1lBQ1QsK0JBQStCO1dBRWpDLEtBQUksR0FaYSxXQUFvQjtnRUFLMUIscUJBQXFCLGFBU2hDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSTs7V0FUWixxQkFBcUI7RUFOekIsS0FBUztrQkFNTCxxQkFBcUIifQ==