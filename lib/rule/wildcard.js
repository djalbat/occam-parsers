"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _wildcard = _interopRequireDefault(require("../node/bnf/wildcard"));
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
var wildcard = _occamLexers.specialSymbols.wildcard;
var WildcardRule = /*#__PURE__*/ function(Rule) {
    _inherits(WildcardRule, Rule);
    var _super = _createSuper(WildcardRule);
    function WildcardRule() {
        _classCallCheck(this, WildcardRule);
        var wildcardTerminalSymbolContent = wildcard, wildcardTerminalSymbolDefinition = new _terminalSymbol.default(wildcardTerminalSymbolContent), name = _ruleNames.WildcardRuleName, definitions = [
            wildcardTerminalSymbolDefinition
        ], Node = _wildcard.default;
        return _super.call(this, name, definitions, Node);
    }
    return WildcardRule;
}(_rule.default);
exports.default = WildcardRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3dpbGRjYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBXaWxkY2FyZEJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL3dpbGRjYXJkXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IFdpbGRjYXJkUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgd2lsZGNhcmQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkY2FyZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSB3aWxkY2FyZCxcbiAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24od2lsZGNhcmRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBXaWxkY2FyZFJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBXaWxkY2FyZEJORk5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIndpbGRjYXJkIiwic3BlY2lhbFN5bWJvbHMiLCJXaWxkY2FyZFJ1bGUiLCJ3aWxkY2FyZFRlcm1pbmFsU3ltYm9sQ29udGVudCIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwibmFtZSIsIldpbGRjYXJkUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJXaWxkY2FyZEJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUU1QixHQUFTLENBQVQsS0FBUztBQUNFLEdBQXNCLENBQXRCLFNBQXNCO0FBQ2IsR0FBOEIsQ0FBOUIsZUFBOEI7QUFFbEMsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLEdBQUssQ0FBR0EsUUFBUSxHQUFLQyxZQUFjLGdCQUEzQkQsUUFBUTtJQUVLRSxZQUFZLGlCQUFsQixRQUFROzs7YUFBRkEsWUFBWTs7UUFFN0IsR0FBSyxDQUFDQyw2QkFBNkIsR0FBR0gsUUFBUSxFQUN4Q0ksZ0NBQWdDLEdBQUcsR0FBRyxDQUFDQyxlQUF3QixTQUFDRiw2QkFBNkIsR0FDN0ZHLElBQUksR0FBR0MsVUFBZ0IsbUJBQ3ZCQyxXQUFXLEdBQUcsQ0FBQztZQUNiSixnQ0FBZ0M7UUFDbEMsQ0FBQyxFQUNESyxJQUFJLEdBQUdDLFNBQWU7aUNBRXRCSixJQUFJLEVBQUVFLFdBQVcsRUFBRUMsSUFBSTs7O0VBVlNFLEtBQUk7a0JBQXpCVCxZQUFZIn0=