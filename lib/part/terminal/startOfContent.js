"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentPart;
    }
});
var _occamlexers = require("occam-lexers");
var _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
var _startOfContent = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/startOfContent"));
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
var startOfContent = _occamlexers.specialSymbols.startOfContent;
var StartOfContentPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(StartOfContentPart, TerminalPart);
    function StartOfContentPart() {
        _class_call_check(this, StartOfContentPart);
        return _call_super(this, StartOfContentPart, arguments);
    }
    _create_class(StartOfContentPart, [
        {
            key: "isStartOfContentPart",
            value: function isStartOfContentPart() {
                var startOfContentPart = true;
                return startOfContentPart;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var startOfContentNode = null;
                var savedIndex = state.getSavedIndex(), atStartOfContent = state.isAtStartOfContent();
                if (atStartOfContent) {
                    startOfContentNode = _startOfContent.default.fromNothing();
                }
                parsed = startOfContentNode !== null;
                if (parsed) {
                    nodes.push(startOfContentNode);
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
                var string = startOfContent; ///
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var startOfContentPart = new StartOfContentPart();
                return startOfContentPart;
            }
        }
    ]);
    return StartOfContentPart;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3N0YXJ0T2ZDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFN0YXJ0T2ZDb250ZW50Tm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtaW5hbC9zdGFydE9mQ29udGVudFwiO1xuXG5jb25zdCB7IHN0YXJ0T2ZDb250ZW50IH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRPZkNvbnRlbnRQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgaXNTdGFydE9mQ29udGVudFBhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGFydE9mQ29udGVudFBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHN0YXJ0T2ZDb250ZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGF0U3RhcnRPZkNvbnRlbnQgPSBzdGF0ZS5pc0F0U3RhcnRPZkNvbnRlbnQoKTtcblxuICAgIGlmIChhdFN0YXJ0T2ZDb250ZW50KSB7XG4gICAgICBzdGFydE9mQ29udGVudE5vZGUgPSBTdGFydE9mQ29udGVudE5vZGUuZnJvbU5vdGhpbmcoKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSAoc3RhcnRPZkNvbnRlbnROb2RlICE9PSBudWxsKVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChzdGFydE9mQ29udGVudE5vZGUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0YXJ0T2ZDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RhcnRPZkNvbnRlbnRQYXJ0ID0gbmV3IFN0YXJ0T2ZDb250ZW50UGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50UGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXJ0T2ZDb250ZW50UGFydCIsInN0YXJ0T2ZDb250ZW50Iiwic3BlY2lhbFN5bWJvbHMiLCJpc1N0YXJ0T2ZDb250ZW50UGFydCIsInN0YXJ0T2ZDb250ZW50UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwic3RhcnRPZkNvbnRlbnROb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJhdFN0YXJ0T2ZDb250ZW50IiwiaXNBdFN0YXJ0T2ZDb250ZW50IiwiU3RhcnRPZkNvbnRlbnROb2RlIiwiZnJvbU5vdGhpbmciLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJCQVBVOytEQUVOO3FFQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsaUJBQW1CQywyQkFBYyxDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUI7Z0JBRTNCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUosSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyxhQUFhTCxNQUFNTSxhQUFhLElBQ2hDQyxtQkFBbUJQLE1BQU1RLGtCQUFrQjtnQkFFakQsSUFBSUQsa0JBQWtCO29CQUNwQkgscUJBQXFCSyx1QkFBa0IsQ0FBQ0MsV0FBVztnQkFDckQ7Z0JBRUFQLFNBQVVDLHVCQUF1QjtnQkFFakMsSUFBSUQsUUFBUTtvQkFDVkosTUFBTVksSUFBSSxDQUFDUDtvQkFFWCxJQUFJRCxRQUFRO3dCQUNWLElBQUlELGNBQWMsTUFBTTs0QkFDdEJDLFNBQVNEO3dCQUNYO29CQUNGO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0MsUUFBUTtvQkFDWEgsTUFBTVksU0FBUyxDQUFDUDtnQkFDbEI7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTcEIsZ0JBQWdCLEdBQUc7Z0JBRWxDLE9BQU9vQjtZQUNUOzs7O1lBRU9KLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1iLHFCQUFxQixJQTdDVko7Z0JBK0NqQixPQUFPSTtZQUNUOzs7V0FoRG1CSjtFQUEyQnNCLGlCQUFZIn0=