"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _document = /*#__PURE__*/ _interop_require_default(require("../../definition/document"));
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
var DocumentBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(DocumentBNFRule, Rule);
    function DocumentBNFRule() {
        _class_call_check(this, DocumentBNFRule);
        return _call_super(this, DocumentBNFRule, arguments);
    }
    _create_class(DocumentBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var documentDefinition = _document.default.fromNothing(), name = _ruleNames.DOCUMENT_RULE_NAME, opacity = null, definitions = [
                    documentDefinition
                ], documentRule = new DocumentBNFRule(name, opacity, definitions);
                return documentRule;
            }
        }
    ]);
    return DocumentBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBEb2N1bWVudERlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgRE9DVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudEJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RGVmaW5pdGlvbiA9IERvY3VtZW50RGVmaW5pdGlvbi5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG5hbWUgPSBET0NVTUVOVF9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRvY3VtZW50RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50Qk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnRCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJkb2N1bWVudERlZmluaXRpb24iLCJEb2N1bWVudERlZmluaXRpb24iLCJuYW1lIiwiRE9DVU1FTlRfUlVMRV9OQU1FIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiZG9jdW1lbnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEo7K0RBQ2M7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxxQkFBcUJDLGlCQUFrQixDQUFDRixXQUFXLElBQ25ERyxPQUFPQyw2QkFBa0IsRUFDekJDLFVBQVUsTUFDVkMsY0FBYztvQkFDWkw7aUJBQ0QsRUFDRE0sZUFBZSxJQVJKUixnQkFRd0JJLE1BQU1FLFNBQVNDO2dCQUV4RCxPQUFPQztZQUNUOzs7V0FYbUJSO0VBQXdCUyxhQUFJIn0=