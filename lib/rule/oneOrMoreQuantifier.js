"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OneOrMoreQuantifierRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../node/bnf/quantifier"));
var _quantifierRule = /*#__PURE__*/ _interop_require_default(require("../definition/quantifierRule"));
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
var plus = _occamlexers.specialSymbols.plus;
var OneOrMoreQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(OneOrMoreQuantifierRule, Rule);
    var _super = _create_super(OneOrMoreQuantifierRule);
    function OneOrMoreQuantifierRule() {
        _class_call_check(this, OneOrMoreQuantifierRule);
        return _super.apply(this, arguments);
    }
    _create_class(OneOrMoreQuantifierRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.oneOrMoreQuantifierRuleName, specialSymbol = plus, oneOrMoreQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), ambiguous = false, definitions = [
                    oneOrMoreQuantifierRuleDefinition
                ], NonTerminalNode = _quantifier.default, oneOrMoreQuantifierRule = new OneOrMoreQuantifierRule(name, ambiguous, definitions, NonTerminalNode);
                return oneOrMoreQuantifierRule;
            }
        }
    ]);
    return OneOrMoreQuantifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9xdWFudGlmaWVyXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHNwZWNpYWxTeW1ib2wgPSBwbHVzLCAvLy9cbiAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24gPSBRdWFudGlmaWVyUnVsZURlZmluaXRpb24uZnJvbVNwZWNpYWxTeW1ib2woc3BlY2lhbFN5bWJvbCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFF1YW50aWZpZXJCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGUgPSBuZXcgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBvbmVPck1vcmVRdWFudGlmaWVyUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwicGx1cyIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJuYW1lIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwic3BlY2lhbFN5bWJvbCIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImZyb21TcGVjaWFsU3ltYm9sIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJRdWFudGlmaWVyQk5GTm9kZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVlU7MkRBRWQ7aUVBQ2E7cUVBQ087eUJBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTSxBQUFFQyxPQUFTQywyQkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELHdDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLHNDQUEyQixFQUNsQ0MsZ0JBQWdCTCxNQUNoQk0sb0NBQW9DQyx1QkFBd0IsQ0FBQ0MsaUJBQWlCLENBQUNILGdCQUMvRUksWUFBWSxPQUNaQyxjQUFjO29CQUNaSjtpQkFDRCxFQUNESyxrQkFBa0JDLG1CQUFpQixFQUNuQ0MsMEJBQTBCLElBVmZkLHdCQVUyQ0ksTUFBTU0sV0FBV0MsYUFBYUM7Z0JBRTFGLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBZ0NlLGFBQUkifQ==