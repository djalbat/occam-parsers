"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _epsilon = _interopRequireDefault(require("../node/epsilon"));
var _terminalSymbol = _interopRequireDefault(require("../definition/terminalSymbol"));
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
var epsilon = _occamLexers.specialSymbols.epsilon;
var EpsilonRule = /*#__PURE__*/ function(Rule) {
    _inherits(EpsilonRule, Rule);
    function EpsilonRule() {
        _classCallCheck(this, EpsilonRule);
        var epsilonTerminalSymbolContent = epsilon, epsilonTerminalSymbolDefinition = new _terminalSymbol.default(epsilonTerminalSymbolContent), name = _ruleNames.EpsilonRuleName, definitions = [
            epsilonTerminalSymbolDefinition
        ], Node = _epsilon.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonRule).call(this, name, definitions, Node));
    }
    return EpsilonRule;
}(_rule.default);
exports.default = EpsilonRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9lcHNpbG9uLmpzIl0sIm5hbWVzIjpbInNwZWNpYWxTeW1ib2xzIiwiUnVsZSIsIkVwc2lsb25Ob2RlIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiRXBzaWxvblJ1bGVOYW1lIiwiZXBzaWxvbiIsIkVwc2lsb25SdWxlIiwiY29uc3RydWN0b3IiLCJlcHNpbG9uVGVybWluYWxTeW1ib2xDb250ZW50IiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRTVCLEdBQVMsQ0FBVCxLQUFTO0FBQ0YsR0FBaUIsQ0FBakIsUUFBaUI7QUFDSixHQUE4QixDQUE5QixlQUE4QjtBQUVuQyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxHQUFLLENBQUcsT0FBTyxHQVJnQixZQUFjLGdCQVFyQyxPQUFPO0lBRU0sV0FBVyxpQkFBakIsUUFBUTtjQUFGLFdBQVc7YUFBWCxXQUFXOzhCQUFYLFdBQVc7UUFFNUIsR0FBSyxDQUFDLDRCQUE0QixHQUFHLE9BQU8sRUFDdEMsK0JBQStCLEdBQUcsR0FBRyxDQVRWLGVBQThCLFNBU00sNEJBQTRCLEdBQzNGLElBQUksR0FSa0IsVUFBYyxrQkFTcEMsV0FBVyxHQUFHLENBQUM7WUFDYiwrQkFBK0I7UUFDakMsQ0FBQyxFQUNELElBQUksR0FmVSxRQUFpQjtnRUFPcEIsV0FBVyxhQVV0QixJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7O1dBVlosV0FBVztFQVJmLEtBQVM7a0JBUUwsV0FBVyJ9