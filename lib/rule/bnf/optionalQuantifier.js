"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OptionalQuantifierBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
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
var questionMark = _occamlexers.specialSymbols.questionMark;
var OptionalQuantifierBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(OptionalQuantifierBNFRule, Rule);
    function OptionalQuantifierBNFRule() {
        _class_call_check(this, OptionalQuantifierBNFRule);
        return _call_super(this, OptionalQuantifierBNFRule, arguments);
    }
    _create_class(OptionalQuantifierBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.OPTIONAL_QUANTIFIER_RULE_NAME, specialSymbol = questionMark, optionalQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
                    optionalQuantifierRuleDefinition
                ], optionalQuantifierRule = new OptionalQuantifierBNFRule(name, opacity, definitions);
                return optionalQuantifierRule;
            }
        }
    ]);
    return OptionalQuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vcHRpb25hbFF1YW50aWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBPUFRJT05BTF9RVUFOVElGSUVSX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT1BUSU9OQUxfUVVBTlRJRklFUl9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBzcGVjaWFsU3ltYm9sID0gcXVlc3Rpb25NYXJrLCAvLy9cbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbi5mcm9tU3BlY2lhbFN5bWJvbChzcGVjaWFsU3ltYm9sKSxcbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvcHRpb25hbFF1YW50aWZpZXJSdWxlID0gbmV3IE9wdGlvbmFsUXVhbnRpZmllckJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUXVhbnRpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIiwicXVlc3Rpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJPUFRJT05BTF9RVUFOVElGSUVSX1JVTEVfTkFNRSIsInNwZWNpYWxTeW1ib2wiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImZyb21TcGVjaWFsU3ltYm9sIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwib3B0aW9uYWxRdWFudGlmaWVyUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJCQVRVOzJEQUVkO3FFQUNvQjt5QkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNLEFBQUVDLGVBQWlCQywyQkFBYyxDQUEvQkQ7QUFFTyxJQUFBLEFBQU1ELDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLE9BQU9DLHdDQUE2QixFQUNwQ0MsZ0JBQWdCTCxjQUNoQk0sbUNBQW1DQyx1QkFBd0IsQ0FBQ0MsaUJBQWlCLENBQUNILGdCQUM5RUksVUFBVSxNQUNWQyxjQUFjO29CQUNaSjtpQkFDRCxFQUNESyx5QkFBeUIsSUFUZFosMEJBUzRDSSxNQUFNTSxTQUFTQztnQkFFNUUsT0FBT0M7WUFDVDs7O1dBWm1CWjtFQUFrQ2EsYUFBSSJ9