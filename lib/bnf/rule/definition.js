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
        ], Node = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionRule).call(this, name, definitions, Node));
    }
    return DefinitionRule;
}(_rule.default);
exports.default = DefinitionRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9kZWZpbml0aW9uLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJEZWZpbml0aW9uTm9kZSIsIkRlZmluaXRpb25EZWZpbml0aW9uIiwiRGVmaW5pdGlvblJ1bGVOYW1lIiwiRGVmaW5pdGlvblJ1bGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJkZWZpbml0aW9uRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNDLEdBQW9CLENBQXBCLFdBQW9CO0FBQ2QsR0FBMEIsQ0FBMUIsWUFBMEI7QUFFeEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsY0FBYyxpQkFBcEIsUUFBUTtjQUFGLGNBQWM7YUFBZCxjQUFjOzhCQUFkLGNBQWM7UUFFL0IsR0FBSyxDQUFDLElBQUksR0FKcUIsVUFBYyxxQkFLdkMsb0JBQW9CLEdBQUcsR0FBRyxDQVBILFlBQTBCLFlBUWpELFdBQVcsR0FBRyxDQUFDO1lBQ2Isb0JBQW9CO1FBQ3RCLENBQUMsRUFDRCxJQUFJLEdBWmEsV0FBb0I7Z0VBSzFCLGNBQWMsYUFTekIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVRaLGNBQWM7RUFObEIsS0FBUztrQkFNTCxjQUFjIn0=