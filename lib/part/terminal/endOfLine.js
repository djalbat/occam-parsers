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
var endOfLine = _occamlexers.specialSymbols.endOfLine;
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
                var string = endOfLine; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuXG5jb25zdCB7IGVuZE9mTGluZSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IGVuZE9mTGluZU5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgZW5kT2ZMaW5lTm9kZSA9IEVuZE9mTGluZU5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKGVuZE9mTGluZU5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChlbmRPZkxpbmVOb2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBlbmRPZkxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQoKTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsImVuZE9mTGluZSIsInNwZWNpYWxTeW1ib2xzIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJlbmRPZkxpbmVOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tTm90aGluZyIsImVuZE9mTGluZVBhcnQiLCJUZXJtaW5hbFBhcnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyQkFQVTsrREFFTjtnRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNLEFBQUVDLFlBQWNDLDJCQUFjLENBQTVCRDtBQUVPLElBQUEsQUFBTUQsOEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKLElBQUlDLGdCQUFnQjtnQkFFcEIsSUFBTUMsYUFBYUwsTUFBTU0sYUFBYSxJQUNoQ0MsdUJBQXVCUCxNQUFNUSx1QkFBdUIsSUFDcERDLG1CQUFtQkYsc0JBQXNCLEdBQUc7Z0JBRWxELElBQUlFLHFCQUFxQixNQUFNO29CQUM3QixJQUFNQyxpQ0FBaUNELGlCQUFpQkUsZ0JBQWdCO29CQUV4RSxJQUFJRCxnQ0FBZ0M7d0JBQ2xDTixnQkFBZ0JRLGtCQUFhLENBQUNDLG9CQUFvQixDQUFDSjtvQkFDckQ7Z0JBQ0Y7Z0JBRUFOLFNBQVVDLGtCQUFrQjtnQkFFNUIsSUFBSUQsUUFBUTtvQkFDVkosTUFBTWUsSUFBSSxDQUFDVjtvQkFFWCxJQUFJRCxRQUFRO3dCQUNWLElBQUlELGNBQWMsTUFBTTs0QkFDdEJDLFNBQVNEO3dCQUNYO29CQUNGO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0MsUUFBUTtvQkFDWEgsTUFBTWUsU0FBUyxDQUFDVjtnQkFDbEI7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTckIsV0FBVyxHQUFHO2dCQUU3QixPQUFPcUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxnQkFBZ0IsSUE1Q0x4QjtnQkE4Q2pCLE9BQU93QjtZQUNUOzs7V0EvQ21CeEI7RUFBc0J5QixpQkFBWSJ9