"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespacePart;
    }
});
var _occamlexers = require("occam-lexers");
var _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/noWhitespace"));
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
var noWhitespace = _occamlexers.specialSymbols.noWhitespace;
var NoWhitespacePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(NoWhitespacePart, TerminalPart);
    function NoWhitespacePart() {
        _class_call_check(this, NoWhitespacePart);
        return _call_super(this, NoWhitespacePart, arguments);
    }
    _create_class(NoWhitespacePart, [
        {
            key: "isNoWhitespacePart",
            value: function isNoWhitespacePart() {
                var noWhitespacePart = true;
                return noWhitespacePart;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var noWhitespaceNode = null;
                var savedIndex = state.getSavedIndex(), nextTokenWhitespaceToken = state.isNextTokenWhitespaceToken();
                if (!nextTokenWhitespaceToken) {
                    noWhitespaceNode = _noWhitespace.default.fromNothing();
                }
                parsed = noWhitespaceNode !== null;
                if (parsed) {
                    nodes.push(noWhitespaceNode);
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
                var string = noWhitespace; ///
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var noWhitespacePart = new NoWhitespacePart();
                return noWhitespacePart;
            }
        }
    ]);
    return NoWhitespacePart;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuXG5jb25zdCB7IG5vV2hpdGVzcGFjZSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgbm9XaGl0ZXNwYWNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiA9IHN0YXRlLmlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICBpZiAoIW5leHRUb2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IE5vV2hpdGVzcGFjZU5vZGUuZnJvbU5vdGhpbmcoKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSAobm9XaGl0ZXNwYWNlTm9kZSAhPT0gbnVsbClcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2gobm9XaGl0ZXNwYWNlTm9kZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IG5ldyBOb1doaXRlc3BhY2VQYXJ0KCk7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZVBhcnQiLCJub1doaXRlc3BhY2UiLCJzcGVjaWFsU3ltYm9scyIsImlzTm9XaGl0ZXNwYWNlUGFydCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsIm5vV2hpdGVzcGFjZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiTm9XaGl0ZXNwYWNlTm9kZSIsImZyb21Ob3RoaW5nIiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwic3RyaW5nIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyQkFQVTsrREFFTjttRUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLGVBQWlCQywyQkFBYyxDQUEvQkQ7QUFFTyxJQUFBLEFBQU1ELGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CO2dCQUV6QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsYUFBYUwsTUFBTU0sYUFBYSxJQUNoQ0MsMkJBQTJCUCxNQUFNUSwwQkFBMEI7Z0JBRWpFLElBQUksQ0FBQ0QsMEJBQTBCO29CQUM3QkgsbUJBQW1CSyxxQkFBZ0IsQ0FBQ0MsV0FBVztnQkFDakQ7Z0JBRUFQLFNBQVVDLHFCQUFxQjtnQkFFL0IsSUFBSUQsUUFBUTtvQkFDVkosTUFBTVksSUFBSSxDQUFDUDtvQkFFWCxJQUFJRCxRQUFRO3dCQUNWLElBQUlELGNBQWMsTUFBTTs0QkFDdEJDLFNBQVNEO3dCQUNYO29CQUNGO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0MsUUFBUTtvQkFDWEgsTUFBTVksU0FBUyxDQUFDUDtnQkFDbEI7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTcEIsY0FBYyxHQUFHO2dCQUVoQyxPQUFPb0I7WUFDVDs7OztZQUVPSixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNYixtQkFBbUIsSUE3Q1JKO2dCQStDakIsT0FBT0k7WUFDVDs7O1dBaERtQko7RUFBeUJzQixpQkFBWSJ9