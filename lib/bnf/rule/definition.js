"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/definition"));
var _definition1 = _interopRequireDefault(require("../definition/definition"));
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
var DefinitionRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionRule, Rule);
    function DefinitionRule() {
        _classCallCheck(this, DefinitionRule);
        var name = _ruleNames.DefinitionRuleName, definitionDefinition = new _definition1.default(), definitions = [
            definitionDefinition
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionRule).call(this, name, definitions, Node1));
    }
    return DefinitionRule;
}(_rule.default);
exports.default = DefinitionRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25Ob2RlIGZyb20gXCIuLi9ub2RlL2RlZmluaXRpb25cIjtcbmltcG9ydCBEZWZpbml0aW9uRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9kZWZpbml0aW9uXCI7XG5cbmltcG9ydCB7IERlZmluaXRpb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IERlZmluaXRpb25SdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFDQyxHQUFvQixDQUFwQixXQUFvQjtBQUNkLEdBQTBCLENBQTFCLFlBQTBCO0FBRXhCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLGNBQWM7Y0FBZCxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO1FBRS9CLEdBQUssQ0FBQyxJQUFJLEdBSnFCLFVBQWMscUJBS3ZDLG9CQUFvQixHQUFHLEdBQUcsQ0FQSCxZQUEwQixZQVFqRCxXQUFXO1lBQ1Qsb0JBQW9CO1dBRXRCLEtBQUksR0FaYSxXQUFvQjtnRUFLMUIsY0FBYyxhQVN6QixJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUk7O1dBVFosY0FBYztFQU5sQixLQUFTO2tCQU1MLGNBQWMifQ==