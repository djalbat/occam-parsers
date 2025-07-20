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
                var content = wildcard, wildcardTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.WILDCARD_RULE_NAME, opacity = null, definitions = [
                    wildcardTerminalSymbolDefinition
                ], wildcardRule = new WildcardBNFRule(name, opacity, definitions);
                return wildcardRule;
            }
        }
    ]);
    return WildcardBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi93aWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IFdJTERDQVJEX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyB3aWxkY2FyZCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbGRjYXJkQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IHdpbGRjYXJkLCAvLy9cbiAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbi5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gV0lMRENBUkRfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgd2lsZGNhcmRSdWxlID0gbmV3IFdpbGRjYXJkQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gd2lsZGNhcmRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2lsZGNhcmRCTkZSdWxlIiwid2lsZGNhcmQiLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsIndpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIiwiZnJvbUNvbnRlbnQiLCJuYW1lIiwiV0lMRENBUkRfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwid2lsZGNhcmRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkJBVFU7MkRBRWQ7cUVBQ29CO3lCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQU0sQUFBRUMsV0FBYUMsMkJBQWMsQ0FBM0JEO0FBRU8sSUFBQSxBQUFNRCxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxVQUFVSCxVQUNWSSxtQ0FBbUNDLHVCQUF3QixDQUFDQyxXQUFXLENBQUNILFVBQ3hFSSxPQUFPQyw2QkFBa0IsRUFDekJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWk47aUJBQ0QsRUFDRE8sZUFBZSxJQVRKWixnQkFTd0JRLE1BQU1FLFNBQVNDO2dCQUV4RCxPQUFPQztZQUNUOzs7V0FabUJaO0VBQXdCYSxhQUFJIn0=