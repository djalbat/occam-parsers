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
                var name = _ruleNames.optionalQuantifierRuleName, specialSymbol = questionMark, optionalQuantifierRuleDefinition = _quantifierRule.default.fromSpecialSymbol(specialSymbol), opacity = null, definitions = [
                    optionalQuantifierRuleDefinition
                ], NonTerminalNode = _quantifier.default, optionalQuantifierRule = new OptionalQuantifierBNFRule(name, opacity, definitions, NonTerminalNode);
                return optionalQuantifierRule;
            }
        }
    ]);
    return OptionalQuantifierBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9vcHRpb25hbFF1YW50aWZpZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFF1YW50aWZpZXJCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9xdWFudGlmaWVyXCI7XG5pbXBvcnQgUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3F1YW50aWZpZXJSdWxlXCI7XG5cbmltcG9ydCB7IG9wdGlvbmFsUXVhbnRpZmllclJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbmFsUXVhbnRpZmllckJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHNwZWNpYWxTeW1ib2wgPSBxdWVzdGlvbk1hcmssIC8vL1xuICAgICAgICAgIG9wdGlvbmFsUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uID0gUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uLmZyb21TcGVjaWFsU3ltYm9sKHNwZWNpYWxTeW1ib2wpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFF1YW50aWZpZXJCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgb3B0aW9uYWxRdWFudGlmaWVyUnVsZSA9IG5ldyBPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUXVhbnRpZmllclJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcHRpb25hbFF1YW50aWZpZXJCTkZSdWxlIiwicXVlc3Rpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsIm5hbWUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlTmFtZSIsInNwZWNpYWxTeW1ib2wiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsIlF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImZyb21TcGVjaWFsU3ltYm9sIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUXVhbnRpZmllckJORk5vZGUiLCJvcHRpb25hbFF1YW50aWZpZXJSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVlU7MkRBRWQ7aUVBQ2E7cUVBQ087eUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQyxlQUFpQkMsMkJBQWMsQ0FBL0JEO0FBRU8sSUFBQSxBQUFNRCwwQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MscUNBQTBCLEVBQ2pDQyxnQkFBZ0JMLGNBQ2hCTSxtQ0FBbUNDLHVCQUF3QixDQUFDQyxpQkFBaUIsQ0FBQ0gsZ0JBQzlFSSxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pKO2lCQUNELEVBQ0RLLGtCQUFrQkMsbUJBQWlCLEVBQ25DQyx5QkFBeUIsSUFWZGQsMEJBVTRDSSxNQUFNTSxTQUFTQyxhQUFhQztnQkFFekYsT0FBT0U7WUFDVDs7O1dBYm1CZDtFQUFrQ2UsYUFBSSJ9