"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RegularExpressionPart;
    }
});
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var RegularExpressionPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(RegularExpressionPart, TerminalPart);
    var _super = _create_super(RegularExpressionPart);
    function RegularExpressionPart(regularExpression) {
        _class_call_check(this, RegularExpressionPart);
        var _this;
        _this = _super.call(this);
        _this.regularExpression = regularExpression;
        return _this;
    }
    _create_class(RegularExpressionPart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var terminalNode = null;
                var nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var content = significantToken.getContent(), matches = content.match(this.regularExpression);
                    if (matches !== null) {
                        var firstMatch = first(matches);
                        if (firstMatch === content) {
                            terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                        }
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
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var regularExpressionString = this.regularExpression.toString(), string = regularExpressionString; ///
                return string;
            }
        }
    ], [
        {
            key: "fromRegularExpression",
            value: function fromRegularExpression(regularExpression) {
                var regularExpressionPart = new RegularExpressionPart(regularExpression);
                return regularExpressionPart;
            }
        }
    ]);
    return RegularExpressionPart;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtaW5hbFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocmVndWxhckV4cHJlc3Npb24pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG5leHRTaWduaWZpY2FudFRva2VuID0gc3RhdGUuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSxcblx0XHRcdFx0XHRzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgICAgaWYgKGZpcnN0TWF0Y2ggPT09IGNvbnRlbnQpIHtcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAodGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2godGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uLnRvU3RyaW5nKCksXG5cdFx0ICAgICAgc3RyaW5nID0gcmVndWxhckV4cHJlc3Npb25TdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVndWxhckV4cHJlc3Npb24ocmVndWxhckV4cHJlc3Npb24pIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVndWxhckV4cHJlc3Npb25QYXJ0IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInJlZ3VsYXJFeHByZXNzaW9uIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsIlRlcm1pbmFsTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsImFzU3RyaW5nIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsImZyb21SZWd1bGFyRXhwcmVzc2lvbiIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7K0RBRU47Z0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELHNDQUFOO2NBQU1BOytCQUFBQTthQUFBQSxzQkFDUEcsaUJBQWlCO2dDQURWSDs7O1FBSWpCLE1BQUtHLGlCQUFpQixHQUFHQTs7O2tCQUpSSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dCQUNyQyxJQUFJQztnQkFFSixJQUFJQyxlQUFlO2dCQUVuQixJQUFNQyx1QkFBdUJMLE1BQU1NLHVCQUF1QixJQUN6REMsbUJBQW1CRixzQkFBc0IsR0FBRztnQkFFN0MsSUFBSUUscUJBQXFCLE1BQU07b0JBQzdCLElBQU1DLFVBQVVELGlCQUFpQkUsVUFBVSxJQUNyQ0MsVUFBVUYsUUFBUUcsS0FBSyxDQUFDLElBQUksQ0FBQ2QsaUJBQWlCO29CQUVwRCxJQUFJYSxZQUFZLE1BQU07d0JBQ3BCLElBQU1FLGFBQWFqQixNQUFNZTt3QkFFekIsSUFBSUUsZUFBZUosU0FBUzs0QkFDMUJKLGVBQWVTLGtCQUFZLENBQUNDLG9CQUFvQixDQUFDUDt3QkFDbkQ7b0JBQ0Y7Z0JBQ0Y7Z0JBRUFKLFNBQVVDLGlCQUFpQjtnQkFFM0IsSUFBSUQsUUFBUTtvQkFDVkosTUFBTWdCLElBQUksQ0FBQ1g7b0JBRVgsSUFBSUQsUUFBUTt3QkFDVixJQUFJRCxjQUFjLE1BQU07NEJBQ3RCQyxTQUFTRDt3QkFDWDtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDBCQUEwQixJQUFJLENBQUNwQixpQkFBaUIsQ0FBQ3FCLFFBQVEsSUFDM0RDLFNBQVNGLHlCQUF5QixHQUFHO2dCQUV6QyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQnZCLGlCQUFpQjtnQkFDNUMsSUFBTXdCLHdCQUF3QixJQW5EYjNCLHNCQW1EdUNHO2dCQUV4RCxPQUFPd0I7WUFDVDs7O1dBdERtQjNCO0VBQThCNEIsaUJBQVkifQ==