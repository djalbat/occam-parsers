"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../../definition/error"));
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
var opaque = _occamlexers.specialSymbols.opaque;
var ErrorBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(ErrorBNFRule, Rule);
    function ErrorBNFRule() {
        _class_call_check(this, ErrorBNFRule);
        return _call_super(this, ErrorBNFRule, arguments);
    }
    _create_class(ErrorBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var errorDefinition = _error.default.fromNothing(), name = _ruleNames.ERROR_RULE_NAME, opacity = opaque, definitions = [
                    errorDefinition
                ], errorRule = new ErrorBNFRule(name, opacity, definitions);
                return errorRule;
            }
        }
    ]);
    return ErrorBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgRXJyb3JEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2Vycm9yXCI7XG5cbmltcG9ydCB7IEVSUk9SX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBvcGFxdWUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGVycm9yRGVmaW5pdGlvbiA9IEVycm9yRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBFUlJPUl9SVUxFX05BTUUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBvcGFxdWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXJyb3JEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBlcnJvclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcnJvckJORlJ1bGUiLCJvcGFxdWUiLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwiZXJyb3JEZWZpbml0aW9uIiwiRXJyb3JEZWZpbml0aW9uIiwibmFtZSIsIkVSUk9SX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImVycm9yUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJCQVRVOzJEQUVkOzREQUNXO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQU0sQUFBRUMsU0FBV0MsMkJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxrQkFBa0JDLGNBQWUsQ0FBQ0YsV0FBVyxJQUM3Q0csT0FBT0MsMEJBQWUsRUFDdEJDLFVBQVVQLFFBQ1ZRLGNBQWM7b0JBQ1pMO2lCQUNELEVBQ0RNLFlBQVksSUFSRFYsYUFRa0JNLE1BQU1FLFNBQVNDO2dCQUVsRCxPQUFPQztZQUNUOzs7V0FYbUJWO0VBQXFCVyxhQUFJIn0=