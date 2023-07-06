"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePartDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../part/terminal/terminalSymbol"));
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
var NO_WHITESPACE = _occamlexers.specialSymbols.NO_WHITESPACE;
var NoWhitespacePartDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(NoWhitespacePartDefinition, Definition);
    var _super = _create_super(NoWhitespacePartDefinition);
    function NoWhitespacePartDefinition() {
        _class_call_check(this, NoWhitespacePartDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(NoWhitespacePartDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = NO_WHITESPACE, terminalSymbolPart = _terminalSymbol.default.fromContent(content), parts = [
                    terminalSymbolPart
                ], precedence = null, noWhitespacePartDefinition = new NoWhitespacePartDefinition(parts, precedence);
                return noWhitespacePartDefinition;
            }
        }
    ]);
    return NoWhitespacePartDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL25vV2hpdGVzcGFjZVBhcnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuXG5jb25zdCB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IE5PX1dISVRFU1BBQ0UsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVBhcnREZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOb1doaXRlc3BhY2VQYXJ0RGVmaW5pdGlvbiIsIk5PX1dISVRFU1BBQ0UiLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsInRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImZyb21Db250ZW50IiwicGFydHMiLCJwcmVjZWRlbmNlIiwibm9XaGl0ZXNwYWNlUGFydERlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyQkFQVTtpRUFFUjtxRUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVDLGdCQUFrQkMsMkJBQWMsQ0FBaENEO0FBRU8sSUFBQSxBQUFNRCwyQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxVQUFVSCxlQUNWSSxxQkFBcUJDLHVCQUFrQixDQUFDQyxXQUFXLENBQUNILFVBQ3BESSxRQUFRO29CQUNOSDtpQkFDRCxFQUNESSxhQUFhLE1BQ2JDLDZCQUE2QixJQVJsQlYsMkJBUWlEUSxPQUFPQztnQkFFekUsT0FBT0M7WUFDVDs7O1dBWG1CVjtFQUFtQ1csbUJBQVUifQ==