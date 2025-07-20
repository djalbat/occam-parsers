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
                var content = endOfLine, endOfLineTerminalSymbolDefinition = _terminalSymbol.default.fromContent(content), name = _ruleNames.END_OF_LINE_RULE_NAME, opacity = null, definitions = [
                    endOfLineTerminalSymbolDefinition
                ], endOfLineRule = new EndOfLineBNFRule(name, opacity, definitions);
                return endOfLineRule;
            }
        }
    ]);
    return EndOfLineBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBFTkRfT0ZfTElORV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZW5kT2ZMaW5lIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVuZE9mTGluZSxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24uZnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgbmFtZSA9IEVORF9PRl9MSU5FX1JVTEVfTkFNRSwgLy8vXG4gICAgICAgICAgb3BhY2l0eSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lQk5GUnVsZShuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVuZE9mTGluZUJORlJ1bGUiLCJlbmRPZkxpbmUiLCJzcGVjaWFsU3ltYm9scyIsImZyb21Ob3RoaW5nIiwiY29udGVudCIsImVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsIlRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiIsImZyb21Db250ZW50IiwibmFtZSIsIkVORF9PRl9MSU5FX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImVuZE9mTGluZVJ1bGUiLCJSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyQkFUVTsyREFFZDtxRUFDb0I7eUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxZQUFjQywyQkFBYyxDQUE1QkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLFVBQVVILFdBQ1ZJLG9DQUFvQ0MsdUJBQXdCLENBQUNDLFdBQVcsQ0FBQ0gsVUFDekVJLE9BQU9DLGdDQUFxQixFQUM1QkMsVUFBVSxNQUNWQyxjQUFjO29CQUNaTjtpQkFDRCxFQUNETyxnQkFBZ0IsSUFUTFosaUJBUzBCUSxNQUFNRSxTQUFTQztnQkFFMUQsT0FBT0M7WUFDVDs7O1dBWm1CWjtFQUF5QmEsYUFBSSJ9