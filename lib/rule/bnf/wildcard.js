"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WildcardBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _wildcard = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/wildcard"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../../definition/terminalSymbol"));
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var wildcard = _occamlexers.specialSymbols.wildcard;
var WildcardBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(WildcardBNFRule, Rule);
    function WildcardBNFRule() {
        _class_call_check(this, WildcardBNFRule);
        return _call_super(this, WildcardBNFRule, arguments);
    }
    _create_class(WildcardBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = wildcard, wildcardTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.wildcardRuleName, opacity = null, definitions = [
                    wildcardTerminalSymbolDefinition
                ], NonTerminalNode = _wildcard.default, wildcardRule = new WildcardBNFRule(name, opacity, definitions, NonTerminalNode);
                return wildcardRule;
            }
        }
    ]);
    return WildcardBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi93aWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgV2lsZGNhcmRCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi93aWxkY2FyZFwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyB3aWxkY2FyZFJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHdpbGRjYXJkIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lsZGNhcmRCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gd2lsZGNhcmQsIC8vL1xuICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gVGVybWluYWxTeW1ib2xEZWZpbml0aW9uLmZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSB3aWxkY2FyZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gV2lsZGNhcmRCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiB3aWxkY2FyZFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJXaWxkY2FyZEJORlJ1bGUiLCJ3aWxkY2FyZCIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJjb250ZW50Iiwid2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJmcm9tQ29udGVudCIsIm5hbWUiLCJ3aWxkY2FyZFJ1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiV2lsZGNhcmRCTkZOb2RlIiwid2lsZGNhcmRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVlU7MkRBRWQ7K0RBQ1c7cUVBQ1M7eUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsSUFBTSxBQUFFQyxXQUFhQywyQkFBYyxDQUEzQkQ7QUFFTyxJQUFBLEFBQU1ELGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxVQUFVSCxVQUNWSSxtQ0FBbUNDLHVCQUF3QixDQUFDQyxXQUFXLENBQUNILFVBQ3hFSSxPQUFPQywyQkFBZ0IsRUFDdkJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWk47aUJBQ0QsRUFDRE8sa0JBQWtCQyxpQkFBZSxFQUNqQ0MsZUFBZSxJQVZKZCxnQkFVd0JRLE1BQU1FLFNBQVNDLGFBQWFDO2dCQUVyRSxPQUFPRTtZQUNUOzs7V0FibUJkO0VBQXdCZSxhQUFJIn0=