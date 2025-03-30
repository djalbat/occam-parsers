"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/endOfLine"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../../definition/terminalSymbol"));
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
var endOfLine = _occamlexers.specialSymbols.endOfLine;
var EndOfLineBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(EndOfLineBNFRule, Rule);
    function EndOfLineBNFRule() {
        _class_call_check(this, EndOfLineBNFRule);
        return _call_super(this, EndOfLineBNFRule, arguments);
    }
    _create_class(EndOfLineBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content = endOfLine, endOfLineTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.endOfLineRuleName, opacity = null, definitions = [
                    endOfLineTerminalSymbolDefinition
                ], NonTerminalNode = _endOfLine.default, endOfLineRule = new EndOfLineBNFRule(name, opacity, definitions, NonTerminalNode);
                return endOfLineRule;
            }
        }
    ]);
    return EndOfLineBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IEVuZE9mTGluZUJORk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYm5mL2VuZE9mTGluZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBlbmRPZkxpbmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBlbmRPZkxpbmUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVCTkZSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZW5kT2ZMaW5lLFxuICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbi5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gZW5kT2ZMaW5lUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBudWxsLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBFbmRPZkxpbmVCTkZOb2RlLCAvLy9cbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVuZE9mTGluZUJORlJ1bGUiLCJlbmRPZkxpbmUiLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsImZyb21Db250ZW50IiwibmFtZSIsImVuZE9mTGluZVJ1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiRW5kT2ZMaW5lQk5GTm9kZSIsImVuZE9mTGluZVJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWVTsyREFFZDtnRUFDWTtxRUFDUTt5QkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNLEFBQUVDLFlBQWNDLDJCQUFjLENBQTVCRDtBQUVPLElBQUEsQUFBTUQsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLFVBQVVILFdBQ1ZJLG9DQUFvQ0MsdUJBQXdCLENBQUNDLFdBQVcsQ0FBQ0gsVUFDekVJLE9BQU9DLDRCQUFpQixFQUN4QkMsVUFBVSxNQUNWQyxjQUFjO29CQUNaTjtpQkFDRCxFQUNETyxrQkFBa0JDLGtCQUFnQixFQUNsQ0MsZ0JBQWdCLElBVkxkLGlCQVUwQlEsTUFBTUUsU0FBU0MsYUFBYUM7Z0JBRXZFLE9BQU9FO1lBQ1Q7OztXQWJtQmQ7RUFBeUJlLGFBQUkifQ==