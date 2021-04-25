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
var EpsilonRule = function(Rule) {
    _inherits(EpsilonRule, Rule);
    function EpsilonRule() {
        _classCallCheck(this, EpsilonRule);
        var epsilonTerminalSymbolContent = epsilon, epsilonTerminalSymbolDefinition = new _terminalSymbol.default(epsilonTerminalSymbolContent), name = _ruleNames.EpsilonRuleName, definitions = [
            epsilonTerminalSymbolDefinition
        ], Node1 = _epsilon.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonRule).call(this, name, definitions, Node1));
    }
    return EpsilonRule;
}(_rule.default);
exports.default = EpsilonRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcHNpbG9uTm9kZSBmcm9tIFwiLi4vbm9kZS9lcHNpbG9uXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IEVwc2lsb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGVwc2lsb24sXG4gICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24oZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9IEVwc2lsb25SdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBFcHNpbG9uTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFbUIsWUFBYztJQUU1QixLQUFTO0lBQ0YsUUFBaUI7SUFDSixlQUE4QjtJQUVuQyxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRDLE9BQU8sR0FSZ0IsWUFBYyxnQkFRckMsT0FBTztJQUVNLFdBQVc7Y0FBWCxXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO1lBRXRCLDRCQUE0QixHQUFHLE9BQU8sRUFDdEMsK0JBQStCLE9BVEosZUFBOEIsU0FTTSw0QkFBNEIsR0FDM0YsSUFBSSxHQVJrQixVQUFjLGtCQVNwQyxXQUFXO1lBQ1QsK0JBQStCO1dBRWpDLEtBQUksR0FmVSxRQUFpQjtnRUFPcEIsV0FBVyxhQVV0QixJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUk7O1dBVlosV0FBVztFQVJmLEtBQVM7a0JBUUwsV0FBVyJ9