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
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _epsilon = /*#__PURE__*/ _interop_require_default(require("../node/bnf/epsilon"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../definition/terminalSymbol"));
var _ruleNames = require("../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var epsilon = _occamlexers.specialSymbols.epsilon;
var EpsilonRule = /*#__PURE__*/ function(Rule) {
    _inherits(EpsilonRule, Rule);
    var _super = _create_super(EpsilonRule);
    function EpsilonRule() {
        _class_call_check(this, EpsilonRule);
        return _super.apply(this, arguments);
    }
    _create_class(EpsilonRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = epsilon, epsilonTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.epsilonRuleName, ambiguous = false, definitions = [
                    epsilonTerminalSymbolDefinition
                ], NonTerminalNode = _epsilon.default, epsilonRule = new EpsilonRule(name, ambiguous, definitions, NonTerminalNode);
                return epsilonRule;
            }
        }
    ]);
    return EpsilonRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Vwc2lsb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEVwc2lsb25CTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9lcHNpbG9uXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IGVwc2lsb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlcHNpbG9uLCAvLy9cbiAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gVGVybWluYWxTeW1ib2xEZWZpbml0aW9uLmZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSBlcHNpbG9uUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXBzaWxvblRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRXBzaWxvbkJORk5vZGUsIC8vL1xuICAgICAgICAgIGVwc2lsb25SdWxlID0gbmV3IEVwc2lsb25SdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZXBzaWxvblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcHNpbG9uUnVsZSIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsImVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJmcm9tQ29udGVudCIsIm5hbWUiLCJlcHNpbG9uUnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25CTkZOb2RlIiwiZXBzaWxvblJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWVTsyREFFZDs4REFDVTtxRUFDVTt5QkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFNLEFBQUVDLFVBQVlDLDJCQUFjLENBQTFCRDtBQUVPLElBQUEsQUFBTUQsNEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsVUFBVUgsU0FDVkksa0NBQWtDQyx1QkFBd0IsQ0FBQ0MsV0FBVyxDQUFDSCxVQUN2RUksT0FBT0MsMEJBQWUsRUFDdEJDLFlBQVksT0FDWkMsY0FBYztvQkFDWk47aUJBQ0QsRUFDRE8sa0JBQWtCQyxnQkFBYyxFQUNoQ0MsY0FBYyxJQVZIZCxZQVVtQlEsTUFBTUUsV0FBV0MsYUFBYUM7Z0JBRWxFLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBb0JlLGFBQUkifQ==