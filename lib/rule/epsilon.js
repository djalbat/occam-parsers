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
        var epsilonTerminalSymbolContent = epsilon, epsilonTerminalSymbolDefinition = new _terminalSymbol.default(epsilonTerminalSymbolContent), name = _ruleNames.epsilonRuleName, ambiguous = false, definitions = [
            epsilonTerminalSymbolDefinition
        ], Node = _epsilon.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return EpsilonRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Vwc2lsb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVwc2lsb25CTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9lcHNpbG9uXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IGVwc2lsb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGVwc2lsb24sIC8vL1xuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBlcHNpbG9uUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVwc2lsb25CTkZOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFcHNpbG9uUnVsZSIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsImVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsImVwc2lsb25SdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9kZSIsIkVwc2lsb25CTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBWVFBLFdBQVc7OzsyQkFWRCxjQUFjO3lEQUU1QixTQUFTOzREQUNDLHFCQUFxQjttRUFDWCw4QkFBOEI7eUJBRW5DLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQU0sQUFBRUMsT0FBTyxHQUFLQyxZQUFjLGVBQUEsQ0FBMUJELE9BQU8sQUFBbUIsQUFBQztBQUVwQixJQUFBLEFBQU1ELFdBQVcsaUJBQWpCOzs7YUFBTUEsV0FBVzs7UUFFNUIsSUFBTUcsNEJBQTRCLEdBQUdGLE9BQU8sRUFDdENHLCtCQUErQixHQUFHLElBQUlDLGVBQXdCLFFBQUEsQ0FBQ0YsNEJBQTRCLENBQUMsRUFDNUZHLElBQUksR0FBR0MsVUFBZSxnQkFBQSxFQUN0QkMsU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRztZQUNaTCwrQkFBK0I7U0FDaEMsRUFDRE0sSUFBSSxHQUFHQyxRQUFjLFFBQUEsQUFBQztpQ0FFdEJMLElBQUksRUFBRUUsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLElBQUk7OztDQUUzQyxDQWJ3Q0UsS0FBSSxRQUFBLENBYTVDIn0=