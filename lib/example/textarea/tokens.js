"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TokensTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _constants = require("../../constants");
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
var TokensTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    var _super = _create_super(TokensTextarea);
    function TokensTextarea() {
        _class_call_check(this, TokensTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                var lineNumber = 1, previousToken = null;
                var html = tokens.reduce(function(html, token) {
                    var tokenHTML = token.asHTML();
                    if (previousToken === null) {
                        html += "".concat(lineNumber++, ": ");
                    } else {
                        var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                        if (previousTokenEndOfLineToken) {
                            html += "".concat(lineNumber++, ": ");
                        }
                    }
                    html += tokenHTML;
                    previousToken = token;
                    return html;
                }, _constants.EMPTY_STRING);
                this.html(html);
            }
        },
        {
            key: "clearTokens",
            value: function clearTokens() {
                var html = _constants.EMPTY_STRING;
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
                return {
                    setTokens: setTokens,
                    clearTokens: clearTokens
                };
            }
        }
    ]);
    return TokensTextarea;
}(_textarea.default);
_define_property(TokensTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3Rva2Vucy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IGh0bWwgPSB0b2tlbnMucmVkdWNlKChodG1sLCB0b2tlbikgPT4ge1xuICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKCk7XG5cbiAgICAgIGlmIChwcmV2aW91c1Rva2VuID09PSBudWxsKSB7XG4gICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFRva2VucyA9IHRoaXMuc2V0VG9rZW5zLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJUb2tlbnMgPSB0aGlzLmNsZWFyVG9rZW5zLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFRva2VucyxcbiAgICAgIGNsZWFyVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRva2Vuc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUb2tlbnNUZXh0YXJlYSIsInNldFRva2VucyIsInRva2VucyIsImxpbmVOdW1iZXIiLCJwcmV2aW91c1Rva2VuIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsIkVNUFRZX1NUUklORyIsImNsZWFyVG9rZW5zIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKQTt5QkFFUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLCtCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJQyxhQUFhLEdBQ2JDLGdCQUFnQixJQUFJO2dCQUV4QixJQUFNQyxPQUFPSCxPQUFPSSxNQUFNLENBQUMsU0FBQ0QsTUFBTUUsT0FBVTtvQkFDMUMsSUFBTUMsWUFBWUQsTUFBTUUsTUFBTTtvQkFFOUIsSUFBSUwsa0JBQWtCLElBQUksRUFBRTt3QkFDMUJDLFFBQVEsQUFBQyxHQUFlLE9BQWJGLGNBQWE7b0JBQzFCLE9BQU87d0JBQ0wsSUFBTU8sOEJBQThCTixjQUFjTyxnQkFBZ0I7d0JBRWxFLElBQUlELDZCQUE2Qjs0QkFDL0JMLFFBQVEsQUFBQyxHQUFlLE9BQWJGLGNBQWE7d0JBQzFCLENBQUM7b0JBQ0gsQ0FBQztvQkFFREUsUUFBUUc7b0JBRVJKLGdCQUFnQkc7b0JBRWhCLE9BQU9GO2dCQUNULEdBQUdPLHVCQUFZO2dCQUVmLElBQUksQ0FBQ1AsSUFBSSxDQUFDQTtZQUNaOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osSUFBTVIsT0FBT08sdUJBQVk7Z0JBRXpCLElBQUksQ0FBQ1AsSUFBSSxDQUFDQTtZQUNaOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNYixZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUNwQ0YsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLElBQUk7Z0JBRTlDLE9BQVE7b0JBQ05kLFdBQUFBO29CQUNBWSxhQUFBQTtnQkFDRjtZQUNGOzs7V0ExQ21CYjtFQUF1QmdCLGlCQUFRO0FBNENsRCxpQkE1Q21CaEIsZ0JBNENaaUIscUJBQW9CO0lBQ3pCQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsVUFBVSxJQUFJO0FBQ2hCIn0=