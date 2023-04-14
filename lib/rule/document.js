"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DocumentRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _document = /*#__PURE__*/ _interop_require_default(require("../node/bnf/document"));
var _document1 = /*#__PURE__*/ _interop_require_default(require("../definition/document"));
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
var DocumentRule = /*#__PURE__*/ function(Rule) {
    _inherits(DocumentRule, Rule);
    var _super = _create_super(DocumentRule);
    function DocumentRule() {
        _class_call_check(this, DocumentRule);
        var documentDefinition = new _document1.default(), name = _ruleNames.documentRuleName, ambiguous = false, definitions = [
            documentDefinition
        ], Node = _document.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return DocumentRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2RvY3VtZW50LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERvY3VtZW50Qk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZG9jdW1lbnRcIjtcbmltcG9ydCBEb2N1bWVudERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZG9jdW1lbnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RGVmaW5pdGlvbiA9IG5ldyBEb2N1bWVudERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gZG9jdW1lbnRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZG9jdW1lbnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRG9jdW1lbnRCTkZOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRG9jdW1lbnRSdWxlIiwiZG9jdW1lbnREZWZpbml0aW9uIiwiRG9jdW1lbnREZWZpbml0aW9uIiwibmFtZSIsImRvY3VtZW50UnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJEb2N1bWVudEJORk5vZGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjsrREFDVztnRUFDRzt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBO1FBRWpCLElBQU1DLHFCQUFxQixJQUFJQyxrQkFBa0IsSUFDM0NDLE9BQU9DLDJCQUFnQixFQUN2QkMsWUFBWSxLQUFLLEVBQ2pCQyxjQUFjO1lBQ1pMO1NBQ0QsRUFDRE0sT0FBT0MsaUJBQWU7aUNBRXRCTCxNQUFNRSxXQUFXQyxhQUFhQzs7V0FWbkJQO0VBQXFCUyxhQUFJIn0=