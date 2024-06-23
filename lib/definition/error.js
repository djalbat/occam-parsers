"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorDefinition;
    }
});
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _wildcard = /*#__PURE__*/ _interop_require_default(require("../part/terminal/wildcard"));
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
var ErrorDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ErrorDefinition, Definition);
    var _super = _create_super(ErrorDefinition);
    function ErrorDefinition() {
        _class_call_check(this, ErrorDefinition);
        return _super.apply(this, arguments);
    }
    _create_class(ErrorDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var wildcardPart = _wildcard.default.fromNothing(), parts = [
                    wildcardPart
                ], precedence = null, errorDefinition = new ErrorDefinition(parts, precedence);
                return errorDefinition;
            }
        }
    ]);
    return ErrorDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFdpbGRjYXJkUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IFdpbGRjYXJkUGFydC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgd2lsZGNhcmRQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBlcnJvckRlZmluaXRpb24gPSBuZXcgRXJyb3JEZWZpbml0aW9uKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBlcnJvckRlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcnJvckRlZmluaXRpb24iLCJmcm9tTm90aGluZyIsIndpbGRjYXJkUGFydCIsIldpbGRjYXJkUGFydCIsInBhcnRzIiwicHJlY2VkZW5jZSIsImVycm9yRGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O2lFQUhFOytEQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxnQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLGVBQWVDLGlCQUFZLENBQUNGLFdBQVcsSUFDdkNHLFFBQVE7b0JBQ05GO2lCQUNELEVBQ0RHLGFBQWEsTUFDYkMsa0JBQWtCLElBUFBOLGdCQU8yQkksT0FBT0M7Z0JBRW5ELE9BQU9DO1lBQ1Q7OztXQVZtQk47RUFBd0JPLG1CQUFVIn0=