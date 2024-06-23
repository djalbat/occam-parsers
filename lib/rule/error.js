"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../node/bnf/error"));
var _error1 = /*#__PURE__*/ _interop_require_default(require("../definition/error"));
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
var opaque = _occamlexers.specialSymbols.opaque;
var ErrorRule = /*#__PURE__*/ function(Rule) {
    _inherits(ErrorRule, Rule);
    var _super = _create_super(ErrorRule);
    function ErrorRule() {
        _class_call_check(this, ErrorRule);
        return _super.apply(this, arguments);
    }
    _create_class(ErrorRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var errorDefinition = _error1.default.fromNothing(), name = _ruleNames.errorRuleName, opacity = opaque, definitions = [
                    errorDefinition
                ], NonTerminalNode = _error.default, errorRule = new ErrorRule(name, opacity, definitions, NonTerminalNode);
                return errorRule;
            }
        }
    ]);
    return ErrorRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBFcnJvckJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL2Vycm9yXCI7XG5pbXBvcnQgRXJyb3JEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2Vycm9yXCI7XG5cbmltcG9ydCB7IGVycm9yUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgb3BhcXVlIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBlcnJvckRlZmluaXRpb24gPSBFcnJvckRlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gZXJyb3JSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG9wYXF1ZSwgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcnJvckRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEVycm9yQk5GTm9kZSxcbiAgICAgICAgICBlcnJvclJ1bGUgPSBuZXcgRXJyb3JSdWxlKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIGVycm9yUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVycm9yUnVsZSIsIm9wYXF1ZSIsInNwZWNpYWxTeW1ib2xzIiwiZnJvbU5vdGhpbmciLCJlcnJvckRlZmluaXRpb24iLCJFcnJvckRlZmluaXRpb24iLCJuYW1lIiwiZXJyb3JSdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIkVycm9yQk5GTm9kZSIsImVycm9yUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7OzJCQVZVOzJEQUVkOzREQUNROzZEQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQU0sQUFBRUMsU0FBV0MsMkJBQWMsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCwwQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLGtCQUFrQkMsZUFBZSxDQUFDRixXQUFXLElBQzdDRyxPQUFPQyx3QkFBYSxFQUNwQkMsVUFBVVAsUUFDVlEsY0FBYztvQkFDWkw7aUJBQ0QsRUFDRE0sa0JBQWtCQyxjQUFZLEVBQzlCQyxZQUFZLElBVERaLFVBU2VNLE1BQU1FLFNBQVNDLGFBQWFDO2dCQUU1RCxPQUFPRTtZQUNUOzs7V0FabUJaO0VBQWtCYSxhQUFJIn0=