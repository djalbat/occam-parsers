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
var _document = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/document"));
var _document1 = /*#__PURE__*/ _interop_require_default(require("../../definition/document"));
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
                var documentDefinition = _document1.default.fromNothing(), name = _ruleNames.documentRuleName, opacity = null, definitions = [
                    documentDefinition
                ], NonTerminalNode = _document.default, documentRule = new DocumentBNFRule(name, opacity, definitions, NonTerminalNode);
                return documentRule;
            }
        }
    ]);
    return DocumentBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBEb2N1bWVudEJORk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYm5mL2RvY3VtZW50XCI7XG5pbXBvcnQgRG9jdW1lbnREZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2RvY3VtZW50XCI7XG5cbmltcG9ydCB7IGRvY3VtZW50UnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50Qk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZG9jdW1lbnREZWZpbml0aW9uID0gRG9jdW1lbnREZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IGRvY3VtZW50UnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRvY3VtZW50RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gRG9jdW1lbnRCTkZOb2RlLCAgLy8vXG4gICAgICAgICAgZG9jdW1lbnRSdWxlID0gbmV3IERvY3VtZW50Qk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBkb2N1bWVudFJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEb2N1bWVudEJORlJ1bGUiLCJmcm9tTm90aGluZyIsImRvY3VtZW50RGVmaW5pdGlvbiIsIkRvY3VtZW50RGVmaW5pdGlvbiIsIm5hbWUiLCJkb2N1bWVudFJ1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiRG9jdW1lbnRCTkZOb2RlIiwiZG9jdW1lbnRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7K0RBQ1c7Z0VBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMscUJBQXFCQyxrQkFBa0IsQ0FBQ0YsV0FBVyxJQUNuREcsT0FBT0MsMkJBQWdCLEVBQ3ZCQyxVQUFVLE1BQ1ZDLGNBQWM7b0JBQ1pMO2lCQUNELEVBQ0RNLGtCQUFrQkMsaUJBQWUsRUFDakNDLGVBQWUsSUFUSlYsZ0JBU3dCSSxNQUFNRSxTQUFTQyxhQUFhQztnQkFFckUsT0FBT0U7WUFDVDs7O1dBWm1CVjtFQUF3QlcsYUFBSSJ9