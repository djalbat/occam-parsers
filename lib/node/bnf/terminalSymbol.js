"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalSymbolBNFNode;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/terminalSymbol"));
var _array = require("../../utilities/array");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var TerminalSymbolBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TerminalSymbolBNFNode, NonTerminalNode);
    var _super = _create_super(TerminalSymbolBNFNode);
    function TerminalSymbolBNFNode() {
        _class_call_check(this, TerminalSymbolBNFNode);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "regularExpression", /^"((?:\\.|[^"\\])*)"$/);
        return _this;
    }
    _create_class(TerminalSymbolBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var content = this.getContent(), terminalSymbolPart = new _terminalSymbol.default(content);
                return terminalSymbolPart;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array.first)(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array.second)(matches), content = secondMatch.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(TerminalSymbolBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return TerminalSymbolBNFNode;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi90ZXJtaW5hbFN5bWJvbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIoKD86XFxcXC58W15cIlxcXFxdKSopXCIkLztcblxuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaC5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIlxcXFxcIikucmVwbGFjZSgvXFxcXFwiL2csIFwiXFxcIlwiKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFRlcm1pbmFsU3ltYm9sQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVybWluYWxTeW1ib2xCTkZOb2RlIiwicmVndWxhckV4cHJlc3Npb24iLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRlcm1pbmFsU3ltYm9sUGFydCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsInJlcGxhY2UiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2tFQUxPO3FFQUNHO3FCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEscUJBQW9COzs7a0JBREREOztZQUduQkUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVMsRUFBRTtnQkFDdEIsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLHFCQUFxQixJQUFJQyx1QkFBa0IsQ0FBQ0g7Z0JBRWxELE9BQU9FO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxJQUFNRyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsaUJBQWlCQyxJQUFBQSxZQUFLLEVBQUNILGFBQ3ZCSSxlQUFlRixnQkFDZkcsc0JBQXNCRCxhQUFhUCxVQUFVLElBQzdDUyxVQUFVRCxvQkFBb0JFLEtBQUssQ0FBQyxJQUFJLENBQUNkLGlCQUFpQixHQUMxRGUsY0FBY0MsSUFBQUEsYUFBTSxFQUFDSCxVQUNyQlYsVUFBVVksWUFBWUUsT0FBTyxDQUFDLFNBQVMsTUFBTUEsT0FBTyxDQUFDLFFBQVE7Z0JBRW5FLE9BQU9kO1lBQ1Q7Ozs7WUFFT2UsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxRQUFRLEVBQUVaLFVBQVUsRUFBRTtnQkFBRSxPQUFPYSxvQkFBZSxDQUFDRix5QkFBeUIsQ0F0QnRGbkIsdUJBc0I4R29CLFVBQVVaO1lBQWE7OztXQXRCcklSO0VBQThCcUIsb0JBQWUifQ==