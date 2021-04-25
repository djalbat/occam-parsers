"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _choiceOfParts = _interopRequireDefault(require("../node/choiceOfParts"));
var _choiceOfParts1 = _interopRequireDefault(require("../definition/choiceOfParts"));
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
var ChoiceOfPartsRule = function(Rule) {
    _inherits(ChoiceOfPartsRule, Rule);
    function ChoiceOfPartsRule() {
        _classCallCheck(this, ChoiceOfPartsRule);
        var name = _ruleNames.ChoiceOfPartsRuleName, choiceOfPartsDefinition = new _choiceOfParts1.default(), definitions = [
            choiceOfPartsDefinition
        ], Node1 = _choiceOfParts.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsRule).call(this, name, definitions, Node1));
    }
    return ChoiceOfPartsRule;
}(_rule.default);
exports.default = ChoiceOfPartsRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9jaG9pY2VPZlBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNOb2RlIGZyb20gXCIuLi9ub2RlL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9jaG9pY2VPZlBhcnRzXCI7XG5cbmltcG9ydCB7IENob2ljZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hvaWNlT2ZQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IENob2ljZU9mUGFydHNSdWxlTmFtZSxcbiAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBDaG9pY2VPZlBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBDaG9pY2VPZlBhcnRzTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRUssS0FBUztJQUNJLGNBQXVCO0lBQ2pCLGVBQTZCO0lBRTNCLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0IsaUJBQWlCO2NBQWpCLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtZQUU1QixJQUFJLEdBSndCLFVBQWMsd0JBSzFDLHVCQUF1QixPQVBHLGVBQTZCLFlBUXZELFdBQVc7WUFDVCx1QkFBdUI7V0FFekIsS0FBSSxHQVpnQixjQUF1QjtnRUFLaEMsaUJBQWlCLGFBUzVCLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSTs7V0FUWixpQkFBaUI7RUFOckIsS0FBUztrQkFNTCxpQkFBaUIifQ==