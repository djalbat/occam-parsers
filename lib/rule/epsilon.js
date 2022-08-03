"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonRule;
    }
});
var _occamLexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _epsilon = /*#__PURE__*/ _interopRequireDefault(require("../node/bnf/epsilon"));
var _terminalSymbol = /*#__PURE__*/ _interopRequireDefault(require("../definition/terminalSymbol"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var epsilon = _occamLexers.specialSymbols.epsilon;
var EpsilonRule = /*#__PURE__*/ function(Rule) {
    _inherits(EpsilonRule, Rule);
    var _super = _createSuper(EpsilonRule);
    function EpsilonRule() {
        _classCallCheck(this, EpsilonRule);
        var epsilonTerminalSymbolContent = epsilon, epsilonTerminalSymbolDefinition = new _terminalSymbol.default(epsilonTerminalSymbolContent), name = _ruleNames.EpsilonRuleName, ambiguous = false, definitions = [
            epsilonTerminalSymbolDefinition
        ], Node = _epsilon.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return EpsilonRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Vwc2lsb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVwc2lsb25CTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9lcHNpbG9uXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IEVwc2lsb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGVwc2lsb24sIC8vL1xuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBFcHNpbG9uUnVsZU5hbWUsXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRXBzaWxvbkJORk5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVwc2lsb25SdWxlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCIsImVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiRXBzaWxvblJ1bGVOYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiRXBzaWxvbkJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFZUUEsV0FBVzs7OzJCQVZELGNBQWM7eURBRTVCLFNBQVM7NERBQ0MscUJBQXFCO21FQUNYLDhCQUE4Qjt5QkFFbkMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTSxBQUFFQyxPQUFPLEdBQUtDLFlBQWMsZUFBQSxDQUExQkQsT0FBTyxBQUFtQixBQUFDO0FBRXBCLElBQUEsQUFBTUQsV0FBVyxpQkFBakI7OzthQUFNQSxXQUFXOztRQUU1QixJQUFNRyw0QkFBNEIsR0FBR0YsT0FBTyxFQUN0Q0csK0JBQStCLEdBQUcsSUFBSUMsZUFBd0IsUUFBQSxDQUFDRiw0QkFBNEIsQ0FBQyxFQUM1RkcsSUFBSSxHQUFHQyxVQUFlLGdCQUFBLEVBQ3RCQyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsV0FBVyxHQUFHO1lBQ1pMLCtCQUErQjtTQUNoQyxFQUNETSxJQUFJLEdBQUdDLFFBQWMsUUFBQSxBQUFDO2lDQUV0QkwsSUFBSSxFQUFFRSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsSUFBSTs7O0NBRTNDLENBYndDRSxLQUFJLFFBQUEsQ0FhNUMifQ==