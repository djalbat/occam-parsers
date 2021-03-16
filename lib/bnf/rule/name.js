"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _name = _interopRequireDefault(require("../node/name"));
var _name1 = _interopRequireDefault(require("../definition/name"));
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
var NameRule = function(Rule) {
    _inherits(NameRule, _rule.default);
    function NameRule() {
        _classCallCheck(this, NameRule);
        var nameDefinition = new _name1.default(), name = _ruleNames.NameRuleName, definitions = [
            nameDefinition
        ], Node1 = _name.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(NameRule).call(this, name, definitions, Node1));
    }
    return NameRule;
}(_rule.default);
exports.default = NameRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IE5hbWVOb2RlIGZyb20gXCIuLi9ub2RlL25hbWVcIjtcbmltcG9ydCBOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9uYW1lXCI7XG5cbmltcG9ydCB7IE5hbWVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZURlZmluaXRpb24gPSBuZXcgTmFtZURlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOYW1lTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsS0FBQTtJQUNBLEtBQUE7SUFDQSxNQUFBO0lBRUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLFFBQUEsWUFBQSxJQUFBO2NBQUEsUUFBQSxFQU5BLEtBQUE7YUFNQSxRQUFBOzhCQUFBLFFBQUE7WUFFQSxjQUFBLE9BTkEsTUFBQSxZQU9BLElBQUEsR0FMQSxVQUFBLGVBTUEsV0FBQTtBQUNBLDBCQUFBO1dBRUEsS0FBQSxHQVpBLEtBQUE7Z0VBS0EsUUFBQSxhQVNBLElBQUEsRUFBQSxXQUFBLEVBQUEsS0FBQTs7V0FUQSxRQUFBO0VBTkEsS0FBQTtrQkFNQSxRQUFBIn0=