"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _definition = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/definition"));
var _definition1 = /*#__PURE__*/ _interop_require_default(require("../../definition/definition"));
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
var DefinitionBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionBNFRule, Rule);
    function DefinitionBNFRule() {
        _class_call_check(this, DefinitionBNFRule);
        return _call_super(this, DefinitionBNFRule, arguments);
    }
    _create_class(DefinitionBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _ruleNames.definitionRuleName, definitionDefinition = _definition1.default.fromNothing(), opacity = null, definitions = [
                    definitionDefinition
                ], NonTerminalNode = _definition.default, definitionRule = new DefinitionBNFRule(name, opacity, definitions, NonTerminalNode);
                return definitionRule;
            }
        }
    ]);
    return DefinitionBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IERlZmluaXRpb25CTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgRGVmaW5pdGlvbkRlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vZGVmaW5pdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbml0aW9uUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25CTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gZGVmaW5pdGlvblJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb24gPSBEZWZpbml0aW9uRGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IERlZmluaXRpb25CTkZOb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvbkJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvblJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZpbml0aW9uQk5GUnVsZSIsImZyb21Ob3RoaW5nIiwibmFtZSIsImRlZmluaXRpb25SdWxlTmFtZSIsImRlZmluaXRpb25EZWZpbml0aW9uIiwiRGVmaW5pdGlvbkRlZmluaXRpb24iLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJEZWZpbml0aW9uQk5GTm9kZSIsImRlZmluaXRpb25SdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7aUVBQ2E7a0VBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsT0FBT0MsNkJBQWtCLEVBQ3pCQyx1QkFBdUJDLG9CQUFvQixDQUFDSixXQUFXLElBQ3ZESyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pIO2lCQUNELEVBQ0RJLGtCQUFrQkMsbUJBQWlCLEVBQ25DQyxpQkFBaUIsSUFUTlYsa0JBUzRCRSxNQUFNSSxTQUFTQyxhQUFhQztnQkFFekUsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUEwQlcsYUFBSSJ9