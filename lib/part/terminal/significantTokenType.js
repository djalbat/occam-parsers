"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SignificantTokenTypePart;
    }
});
var _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
var _terminal1 = /*#__PURE__*/ _interop_require_default(require("../../node/terminal"));
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
var SignificantTokenTypePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(SignificantTokenTypePart, TerminalPart);
    var _super = _create_super(SignificantTokenTypePart);
    function SignificantTokenTypePart(significantTokenType) {
        _class_call_check(this, SignificantTokenTypePart);
        var _this;
        _this = _super.call(this);
        _this.significantTokenType = significantTokenType;
        return _this;
    }
    _create_class(SignificantTokenTypePart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var terminalNode = null;
                var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var significantTokenType = significantToken.getType();
                    if (significantTokenType === this.significantTokenType) {
                        terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                    }
                }
                parsed = terminalNode !== null;
                if (parsed) {
                    nodes.push(terminalNode);
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
                var string = "[".concat(this.significantTokenType, "]");
                return string;
            }
        }
    ], [
        {
            key: "fromSignificantTokenType",
            value: function fromSignificantTokenType(significantTokenType) {
                var significantTokenTypePart = new SignificantTokenTypePart(significantTokenType);
                return significantTokenTypePart;
            }
        }
    ]);
    return SignificantTokenTypePart;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHN0YXRlLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9ICh0ZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaCh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGBbJHt0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlfV1gO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0Iiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRUeXBlIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OytEQUhJO2dFQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSx5QkFDUEMsb0JBQW9CO2dDQURiRDs7O1FBSWpCLE1BQUtDLG9CQUFvQixHQUFHQTs7O2tCQUpYRDs7WUFPbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFJQyxlQUFlO2dCQUVuQixJQUFNQyxhQUFhTCxNQUFNTSxhQUFhLElBQ2hDQyx1QkFBdUJQLE1BQU1RLHVCQUF1QixJQUN6REMsbUJBQW1CRixzQkFBc0IsR0FBRztnQkFFN0MsSUFBSUUscUJBQXFCLE1BQU07b0JBQzdCLElBQU1aLHVCQUF1QlksaUJBQWlCQyxPQUFPO29CQUVyRCxJQUFJYix5QkFBeUIsSUFBSSxDQUFDQSxvQkFBb0IsRUFBRTt3QkFDdERPLGVBQWVPLGtCQUFZLENBQUNDLG9CQUFvQixDQUFDSDtvQkFDbkQ7Z0JBQ0Y7Z0JBRUFOLFNBQVVDLGlCQUFpQjtnQkFFM0IsSUFBSUQsUUFBUTtvQkFDVkosTUFBTWMsSUFBSSxDQUFDVDtvQkFFWCxJQUFJRCxRQUFRO3dCQUNWLElBQUlELGNBQWMsTUFBTTs0QkFDdEJDLFNBQVNEO3dCQUNYO29CQUNGO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0MsUUFBUTtvQkFDWEgsTUFBTWMsU0FBUyxDQUFDVDtnQkFDbEI7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLEFBQUMsSUFBNkIsT0FBMUIsSUFBSSxDQUFDbkIsb0JBQW9CLEVBQUM7Z0JBRTdDLE9BQU9tQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QnBCLG9CQUFvQjtnQkFDbEQsSUFBTXFCLDJCQUEyQixJQWxEaEJ0Qix5QkFrRDZDQztnQkFFOUQsT0FBT3FCO1lBQ1Q7OztXQXJEbUJ0QjtFQUFpQ3VCLGlCQUFZIn0=