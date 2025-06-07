"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/epsilon"));
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
var epsilon = _occamlexers.specialSymbols.epsilon;
var EpsilonBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(EpsilonBNFRule, Rule);
    function EpsilonBNFRule() {
        _class_call_check(this, EpsilonBNFRule);
        return _call_super(this, EpsilonBNFRule, arguments);
    }
    _create_class(EpsilonBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = epsilon, epsilonTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.epsilonRuleName, opacity = null, definitions = [
                    epsilonTerminalSymbolDefinition
                ], NonTerminalNode = _epsilon.default, epsilonRule = new EpsilonBNFRule(name, opacity, definitions, NonTerminalNode);
                return epsilonRule;
            }
        }
    ]);
    return EpsilonBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBFcHNpbG9uQk5GTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ibmYvZXBzaWxvblwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBlcHNpbG9uUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25CTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbiwgLy8vXG4gICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbi5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gZXBzaWxvblJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEVwc2lsb25CTkZOb2RlLCAvLy9cbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBlcHNpbG9uUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwc2lsb25CTkZSdWxlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJjb250ZW50IiwiZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsImZyb21Db250ZW50IiwibmFtZSIsImVwc2lsb25SdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25CTkZOb2RlIiwiZXBzaWxvblJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWVTsyREFFZDs4REFDVTtxRUFDVTt5QkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFNLEFBQUVDLFVBQVlDLDJCQUFjLENBQTFCRDtBQUVPLElBQUEsQUFBTUQsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsVUFBVUgsU0FDVkksa0NBQWtDQyx1QkFBd0IsQ0FBQ0MsV0FBVyxDQUFDSCxVQUN2RUksT0FBT0MsMEJBQWUsRUFDdEJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWk47aUJBQ0QsRUFDRE8sa0JBQWtCQyxnQkFBYyxFQUNoQ0MsY0FBYyxJQVZIZCxlQVVzQlEsTUFBTUUsU0FBU0MsYUFBYUM7Z0JBRW5FLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBdUJlLGFBQUkifQ==