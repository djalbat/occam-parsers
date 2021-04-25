"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/definition"));
var _quantifierRule = _interopRequireDefault(require("../definition/quantifierRule"));
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
var plus = _occamLexers.specialSymbols.plus;
var OneOrMoreQuantifierRule = function(Rule) {
    _inherits(OneOrMoreQuantifierRule, Rule);
    function OneOrMoreQuantifierRule() {
        _classCallCheck(this, OneOrMoreQuantifierRule);
        var name = _ruleNames.OneOrMoreQuantifierRuleName, oneOrMoreQuantifierTerminalSymbolContent = plus, oneOrMoreQuantifierRuleDefinition = new _quantifierRule.default(oneOrMoreQuantifierTerminalSymbolContent), definitions = [
            oneOrMoreQuantifierRuleDefinition
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMoreQuantifierRule).call(this, name, definitions, Node1));
    }
    return OneOrMoreQuantifierRule;
}(_rule.default);
exports.default = OneOrMoreQuantifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uTm9kZSBmcm9tIFwiLi4vbm9kZS9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSxcbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50ID0gcGx1cywgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gbmV3IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbihvbmVPck1vcmVRdWFudGlmaWVyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFbUIsWUFBYztJQUU1QixLQUFTO0lBQ0MsV0FBb0I7SUFDVixlQUE4QjtJQUV2QixVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxELElBQUksR0FSbUIsWUFBYyxnQkFRckMsSUFBSTtJQUVTLHVCQUF1QjtjQUF2Qix1QkFBdUI7YUFBdkIsdUJBQXVCOzhCQUF2Qix1QkFBdUI7WUFFbEMsSUFBSSxHQU44QixVQUFjLDhCQU9oRCx3Q0FBd0MsR0FBRyxJQUFJLEVBQy9DLGlDQUFpQyxPQVZOLGVBQThCLFNBVVEsd0NBQXdDLEdBQ3pHLFdBQVc7WUFDVCxpQ0FBaUM7V0FFbkMsS0FBSSxHQWZhLFdBQW9CO2dFQU8xQix1QkFBdUIsYUFVbEMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFJOztXQVZaLHVCQUF1QjtFQVIzQixLQUFTO2tCQVFMLHVCQUF1QiJ9