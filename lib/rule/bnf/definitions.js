"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionsBNFRule;
    }
});
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _definitions = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/definitions"));
var _definitions1 = /*#__PURE__*/ _interop_require_default(require("../../definition/definitions"));
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
var DefinitionsBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionsBNFRule, Rule);
    function DefinitionsBNFRule() {
        _class_call_check(this, DefinitionsBNFRule);
        return _call_super(this, DefinitionsBNFRule, arguments);
    }
    _create_class(DefinitionsBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var definitionsDefinition = _definitions1.default.fromNothing(), name = _ruleNames.definitionsRuleName, opacity = null, definitions = [
                    definitionsDefinition
                ], NonTerminalNode = _definitions.default, definitionsRule = new DefinitionsBNFRule(name, opacity, definitions, NonTerminalNode);
                return definitionsRule;
            }
        }
    ]);
    return DefinitionsBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9kZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGVcIjtcbmltcG9ydCBEZWZpbml0aW9uc0JORk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYm5mL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2RlZmluaXRpb25zXCI7XG5cbmltcG9ydCB7IGRlZmluaXRpb25zUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25zQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNEZWZpbml0aW9uID0gRGVmaW5pdGlvbnNEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IGRlZmluaXRpb25zUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbnNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBEZWZpbml0aW9uc0JORk5vZGUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zUnVsZSA9IG5ldyBEZWZpbml0aW9uc0JORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbnNSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbnNCTkZSdWxlIiwiZnJvbU5vdGhpbmciLCJkZWZpbml0aW9uc0RlZmluaXRpb24iLCJEZWZpbml0aW9uc0RlZmluaXRpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnNSdWxlTmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIkRlZmluaXRpb25zQk5GTm9kZSIsImRlZmluaXRpb25zUnVsZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5KO2tFQUNjO21FQUNHO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLHdCQUF3QkMscUJBQXFCLENBQUNGLFdBQVcsSUFDekRHLE9BQU9DLDhCQUFtQixFQUMxQkMsVUFBVSxNQUNWQyxjQUFjO29CQUNaTDtpQkFDRCxFQUNETSxrQkFBa0JDLG9CQUFrQixFQUNwQ0Msa0JBQWtCLElBVFBWLG1CQVM4QkksTUFBTUUsU0FBU0MsYUFBYUM7Z0JBRTNFLE9BQU9FO1lBQ1Q7OztXQVptQlY7RUFBMkJXLGFBQUkifQ==