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
var DocumentRule = /*#__PURE__*/ function(Rule) {
    _inherits(DocumentRule, Rule);
    var _super = _create_super(DocumentRule);
    function DocumentRule() {
        _class_call_check(this, DocumentRule);
        return _super.apply(this, arguments);
    }
    _create_class(DocumentRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var documentDefinition = _document1.default.fromNothing(), name = _ruleNames.documentRuleName, ambiguous = false, definitions = [
                    documentDefinition
                ], NonTerminalNode = _document.default, documentRule = new DocumentRule(name, ambiguous, definitions, NonTerminalNode);
                return documentRule;
            }
        }
    ]);
    return DocumentRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERvY3VtZW50Qk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZG9jdW1lbnRcIjtcbmltcG9ydCBEb2N1bWVudERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZG9jdW1lbnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkb2N1bWVudERlZmluaXRpb24gPSBEb2N1bWVudERlZmluaXRpb24uZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBuYW1lID0gZG9jdW1lbnRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZG9jdW1lbnREZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEb2N1bWVudEJORk5vZGUsICAvLy9cbiAgICAgICAgICBkb2N1bWVudFJ1bGUgPSBuZXcgRG9jdW1lbnRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnRSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRG9jdW1lbnRSdWxlIiwiZnJvbU5vdGhpbmciLCJkb2N1bWVudERlZmluaXRpb24iLCJEb2N1bWVudERlZmluaXRpb24iLCJuYW1lIiwiZG9jdW1lbnRSdWxlTmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiRG9jdW1lbnRCTkZOb2RlIiwiZG9jdW1lbnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7K0RBQ1c7Z0VBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxxQkFBcUJDLGtCQUFrQixDQUFDRixXQUFXLElBQ25ERyxPQUFPQywyQkFBZ0IsRUFDdkJDLFlBQVksT0FDWkMsY0FBYztvQkFDWkw7aUJBQ0QsRUFDRE0sa0JBQWtCQyxpQkFBZSxFQUNqQ0MsZUFBZSxJQVRKVixhQVNxQkksTUFBTUUsV0FBV0MsYUFBYUM7Z0JBRXBFLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBcUJXLGFBQUkifQ==