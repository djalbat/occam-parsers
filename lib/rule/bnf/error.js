"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ErrorBNFRule;
    }
});
var _occamlexers = require("occam-lexers");
var _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
var _error = /*#__PURE__*/ _interop_require_default(require("../../node/bnf/error"));
var _error1 = /*#__PURE__*/ _interop_require_default(require("../../definition/error"));
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
var opaque = _occamlexers.specialSymbols.opaque;
var ErrorBNFRule = /*#__PURE__*/ function(Rule) {
    _inherits(ErrorBNFRule, Rule);
    function ErrorBNFRule() {
        _class_call_check(this, ErrorBNFRule);
        return _call_super(this, ErrorBNFRule, arguments);
    }
    _create_class(ErrorBNFRule, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var errorDefinition = _error1.default.fromNothing(), name = _ruleNames.errorRuleName, opacity = opaque, definitions = [
                    errorDefinition
                ], NonTerminalNode = _error.default, errorRule = new ErrorBNFRule(name, opacity, definitions, NonTerminalNode);
                return errorRule;
            }
        }
    ]);
    return ErrorBNFRule;
}(_rule.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi8uLi9ydWxlXCI7XG5pbXBvcnQgRXJyb3JCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JuZi9lcnJvclwiO1xuaW1wb3J0IEVycm9yRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9lcnJvclwiO1xuXG5pbXBvcnQgeyBlcnJvclJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IG9wYXF1ZSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQk5GUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZXJyb3JEZWZpbml0aW9uID0gRXJyb3JEZWZpbml0aW9uLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbmFtZSA9IGVycm9yUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIG9wYWNpdHkgPSBvcGFxdWUsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZXJyb3JEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBFcnJvckJORk5vZGUsIC8vL1xuICAgICAgICAgIGVycm9yUnVsZSA9IG5ldyBFcnJvckJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gZXJyb3JSdWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXJyb3JCTkZSdWxlIiwib3BhcXVlIiwic3BlY2lhbFN5bWJvbHMiLCJmcm9tTm90aGluZyIsImVycm9yRGVmaW5pdGlvbiIsIkVycm9yRGVmaW5pdGlvbiIsIm5hbWUiLCJlcnJvclJ1bGVOYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiRXJyb3JCTkZOb2RlIiwiZXJyb3JSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7MkJBVlU7MkRBRWQ7NERBQ1E7NkRBQ0c7eUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTSxBQUFFQyxTQUFXQywyQkFBYyxDQUF6QkQ7QUFFTyxJQUFBLEFBQU1ELDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1DLGtCQUFrQkMsZUFBZSxDQUFDRixXQUFXLElBQzdDRyxPQUFPQyx3QkFBYSxFQUNwQkMsVUFBVVAsUUFDVlEsY0FBYztvQkFDWkw7aUJBQ0QsRUFDRE0sa0JBQWtCQyxjQUFZLEVBQzlCQyxZQUFZLElBVERaLGFBU2tCTSxNQUFNRSxTQUFTQyxhQUFhQztnQkFFL0QsT0FBT0U7WUFDVDs7O1dBWm1CWjtFQUFxQmEsYUFBSSJ9