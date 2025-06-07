"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OneOrMoreQuantifierBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _quantifier = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/quantifier"));
var _quantifierRule = /*#__PURE__*/ _interop_require_default(require("../../definition/quantifierRule"));
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
var plus = _occamlexers.specialSymbols.plus;
var OneOrMoreQuantifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(OneOrMoreQuantifierBNFRule, Rule);
    function OneOrMoreQuantifierBNFRule() {
        _class_call_check(this, OneOrMoreQuantifierBNFRule);
        return _call_super(this, OneOrMoreQuantifierBNFRule, arguments);
    }
    _create_class(OneOrMoreQuantifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.oneOrMoreQuantifierRuleName, specialSymbol = plus, oneOrMoreQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
                    oneOrMoreQuantifierRuleDefinition
                ], NonTerminalNode = _quantifier.default, oneOrMoreQuantifierRule = new OneOrMoreQuantifierBNFRule(name, opacity, definitions, NonTerminalNode);
                return oneOrMoreQuantifierRule;
            }
        }
    ]);
    return OneOrMoreQuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vbmVPck1vcmVRdWFudGlmaWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBRdWFudGlmaWVyQk5GTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ibmYvcXVhbnRpZmllclwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gb25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBzcGVjaWFsU3ltYm9sID0gcGx1cywgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uLmZyb21TcGVjaWFsU3ltYm9sKHNwZWNpYWxTeW1ib2wpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBRdWFudGlmaWVyQk5GTm9kZSwgIC8vL1xuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlID0gbmV3IE9uZU9yTW9yZVF1YW50aWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT25lT3JNb3JlUXVhbnRpZmllckJORlJ1bGUiLCJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUiLCJzcGVjaWFsU3ltYm9sIiwib25lT3JNb3JlUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiZnJvbVNwZWNpYWxTeW1ib2wiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJRdWFudGlmaWVyQk5GTm9kZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVlU7MkRBRWQ7aUVBQ2E7cUVBQ087eUJBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTSxBQUFFQyxPQUFTQywyQkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLHNDQUEyQixFQUNsQ0MsZ0JBQWdCTCxNQUNoQk0sb0NBQW9DQyx1QkFBd0IsQ0FBQ0MsaUJBQWlCLENBQUNILGdCQUMvRUksVUFBVSxNQUNWQyxjQUFjO29CQUNaSjtpQkFDRCxFQUNESyxrQkFBa0JDLG1CQUFpQixFQUNuQ0MsMEJBQTBCLElBVmZkLDJCQVU4Q0ksTUFBTU0sU0FBU0MsYUFBYUM7Z0JBRTNGLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBbUNlLGFBQUkifQ==