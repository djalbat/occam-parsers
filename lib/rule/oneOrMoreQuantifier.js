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
        var name = _ruleNames.oneOrMoreQuantifierRuleName, oneOrMoreQuantifierTerminalSymbolContent = plus, oneOrMoreQuantifierRuleDefinition = new _quantifierRule.default(oneOrMoreQuantifierTerminalSymbolContent), ambiguous = false, definitions = [
            oneOrMoreQuantifierRuleDefinition
        ], Node = _quantifier.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return OneOrMoreQuantifierRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL29uZU9yTW9yZVF1YW50aWZpZXIuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJCTkZOb2RlIGZyb20gXCIuLi9ub2RlL2JuZi9xdWFudGlmaWVyXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUXVhbnRpZmllclJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHBsdXMsIC8vL1xuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24ob25lT3JNb3JlUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBRdWFudGlmaWVyQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwicGx1cyIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlTmFtZSIsIm9uZU9yTW9yZVF1YW50aWZpZXJUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJRdWFudGlmaWVyUnVsZURlZmluaXRpb24iLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJRdWFudGlmaWVyQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZVOzJEQUVkO2lFQUNhO3FFQUNPO3lCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFNLEFBQUVDLE9BQVNDLDJCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsd0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTtRQUVqQixJQUFNRyxPQUFPQyxzQ0FBMkIsRUFDbENDLDJDQUEyQ0osTUFDM0NLLG9DQUFvQyxJQUFJQyx1QkFBd0IsQ0FBQ0YsMkNBQ2pFRyxZQUFZLEtBQUssRUFDakJDLGNBQWM7WUFDWkg7U0FDRCxFQUNESSxPQUFPQyxtQkFBaUI7aUNBRXhCUixNQUFNSyxXQUFXQyxhQUFhQzs7V0FYbkJWO0VBQWdDWSxhQUFJIn0=