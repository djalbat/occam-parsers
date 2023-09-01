"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLinePart;
    }
});
var _occamlexers = require("occam-lexers");
var _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
var _endOfLine = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/endOfLine"));
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
var END_OF_LINE = _occamlexers.specialSymbols.END_OF_LINE;
var EndOfLinePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(EndOfLinePart, TerminalPart);
    var _super = _create_super(EndOfLinePart);
    function EndOfLinePart() {
        _class_call_check(this, EndOfLinePart);
        return _super.apply(this, arguments);
    }
    _create_class(EndOfLinePart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var endOfLineNode = null;
                var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();
                    if (significantTokenEndOfLineToken) {
                        endOfLineNode = _endOfLine.default.fromSignificantToken(significantToken);
                    }
                }
                parsed = endOfLineNode !== null;
                if (parsed) {
                    nodes.push(endOfLineNode);
                    if (parsed) {
                        if (callAhead !== null) {
                            parsed = callAhead();
                        }
                    }
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = END_OF_LINE; ///
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var endOfLinePart = new EndOfLinePart();
                return endOfLinePart;
            }
        }
    ]);
    return EndOfLinePart;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgZW5kT2ZMaW5lTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHN0YXRlLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICBlbmRPZkxpbmVOb2RlID0gRW5kT2ZMaW5lTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAoZW5kT2ZMaW5lTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKGVuZE9mTGluZU5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVORF9PRl9MSU5FOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KCk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVuZE9mTGluZVBhcnQiLCJFTkRfT0ZfTElORSIsInNwZWNpYWxTeW1ib2xzIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJlbmRPZkxpbmVOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tTm90aGluZyIsImVuZE9mTGluZVBhcnQiLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJCQVBVOytEQUVOO2dFQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU0sQUFBRUMsY0FBZ0JDLDJCQUFjLENBQTlCRDtBQUVPLElBQUEsQUFBTUQsOEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFJQyxnQkFBZ0I7Z0JBRXBCLElBQU1DLGFBQWFMLE1BQU1NLGFBQWEsSUFDaENDLHVCQUF1QlAsTUFBTVEsdUJBQXVCLElBQ3BEQyxtQkFBbUJGLHNCQUFzQixHQUFHO2dCQUVsRCxJQUFJRSxxQkFBcUIsTUFBTTtvQkFDN0IsSUFBTUMsaUNBQWlDRCxpQkFBaUJFLGdCQUFnQjtvQkFFeEUsSUFBSUQsZ0NBQWdDO3dCQUNsQ04sZ0JBQWdCUSxrQkFBYSxDQUFDQyxvQkFBb0IsQ0FBQ0o7b0JBQ3JEO2dCQUNGO2dCQUVBTixTQUFVQyxrQkFBa0I7Z0JBRTVCLElBQUlELFFBQVE7b0JBQ1ZKLE1BQU1lLElBQUksQ0FBQ1Y7b0JBRVgsSUFBSUQsUUFBUTt3QkFDVixJQUFJRCxjQUFjLE1BQU07NEJBQ3RCQyxTQUFTRDt3QkFDWDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLFFBQVE7b0JBQ1hILE1BQU1lLFNBQVMsQ0FBQ1Y7Z0JBQ2xCO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBU3JCLGFBQWEsR0FBRztnQkFFL0IsT0FBT3FCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsZ0JBQWdCLElBNUNMeEI7Z0JBOENqQixPQUFPd0I7WUFDVDs7O1dBL0NtQnhCO0VBQXNCeUIsaUJBQVkifQ==