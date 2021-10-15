"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _ruleName = _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _oneOrMoreParts = _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
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
var DefinitionDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DefinitionDefinition, Definition);
    function DefinitionDefinition() {
        _classCallCheck(this, DefinitionDefinition);
        var partRuleName = _ruleNames.PartRuleName, partRuleNamePart = new _ruleName.default(partRuleName), oneOrMoreRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
            oneOrMoreRuleNamePartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionDefinition).call(this, parts));
    }
    return DefinitionDefinition;
}(_definition.default);
exports.default = DefinitionDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJSdWxlTmFtZVBhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJQYXJ0UnVsZU5hbWUiLCJEZWZpbml0aW9uRGVmaW5pdGlvbiIsImNvbnN0cnVjdG9yIiwicGFydFJ1bGVOYW1lIiwicGFydFJ1bGVOYW1lUGFydCIsIm9uZU9yTW9yZVJ1bGVOYW1lUGFydHNQYXJ0IiwicGFydHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVcsR0FBZSxDQUFmLFdBQWU7QUFDYixHQUE4QixDQUE5QixTQUE4QjtBQUN4QixHQUFvQyxDQUFwQyxlQUFvQztBQUV0QyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QixvQkFBb0IsaUJBQTFCLFFBQVE7Y0FBRixvQkFBb0I7YUFBcEIsb0JBQW9COzhCQUFwQixvQkFBb0I7UUFFckMsR0FBSyxDQUFDLFlBQVksR0FKTyxVQUFjLGVBS2pDLGdCQUFnQixHQUFHLEdBQUcsQ0FSUCxTQUE4QixTQVFULFlBQVksR0FDaEQsMEJBQTBCLEdBQUcsR0FBRyxDQVJYLGVBQW9DLFNBUUwsZ0JBQWdCLEdBQ3BFLEtBQUssR0FBRyxDQUFDO1lBQ1AsMEJBQTBCO1FBQzVCLENBQUM7Z0VBUFUsb0JBQW9CLGFBUy9CLEtBQUs7O1dBVE0sb0JBQW9CO0VBTmxCLFdBQWU7a0JBTWpCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFJ1bGVOYW1lUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZVwiO1xuaW1wb3J0IE9uZU9yTW9yZVBhcnRzUGFydCBmcm9tIFwiLi4vcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0c1wiO1xuXG5pbXBvcnQgeyBQYXJ0UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9IFBhcnRSdWxlTmFtZSxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZVJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG4iXX0=