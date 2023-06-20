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
            value: function parse(nodes, state, callback, precedence, ruleName) {
                var parsed;
                var terminalNode = null;
                var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
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
                    if (callback !== null) {
                        parsed = callback(precedence, ruleName);
                        if (!parsed) {
                            nodes.pop();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtaW5hbFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocmVndWxhckV4cHJlc3Npb24pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcblx0XHQgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHN0YXRlLmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdE1hdGNoID09PSBjb250ZW50KSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKHRlcm1pbmFsTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZWQgPSBjYWxsYmFjayhwcmVjZWRlbmNlLCBydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbi50b1N0cmluZygpLFxuXHRcdCAgICAgIHN0cmluZyA9IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZ3VsYXJFeHByZXNzaW9uKHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZWd1bGFyRXhwcmVzc2lvbiIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsIlRlcm1pbmFsTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsInBvcCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicmVndWxhckV4cHJlc3Npb25TdHJpbmciLCJ0b1N0cmluZyIsInN0cmluZyIsImZyb21SZWd1bGFyRXhwcmVzc2lvbiIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7K0RBRU47Z0VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQyxRQUFVQywwQkFBVkQ7QUFFTyxJQUFBLEFBQU1ELHNDQUFOO2NBQU1BOytCQUFBQTthQUFBQSxzQkFDUEcsaUJBQWlCO2dDQURWSDs7O1FBSWpCLE1BQUtHLG9CQUFvQkE7OztrQkFKUkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxRQUFRO2dCQUNoRCxJQUFJQztnQkFFSixJQUFJQyxlQUFlO2dCQUVuQixJQUFNQyxhQUFhTixNQUFNTyxpQkFDckJDLHVCQUF1QlIsTUFBTVMsMkJBQ2hDQyxtQkFBbUJGLHNCQUFzQixHQUFHO2dCQUU3QyxJQUFJRSxxQkFBcUIsTUFBTTtvQkFDN0IsSUFBTUMsVUFBVUQsaUJBQWlCRSxjQUMzQkMsVUFBVUYsUUFBUUcsTUFBTSxJQUFJLENBQUNqQjtvQkFFbkMsSUFBSWdCLFlBQVksTUFBTTt3QkFDcEIsSUFBTUUsYUFBYXBCLE1BQU1rQjt3QkFFekIsSUFBSUUsZUFBZUosU0FBUzs0QkFDMUJOLGVBQWVXLG1CQUFhQyxxQkFBcUJQO3dCQUNuRDtvQkFDRjtnQkFDRjtnQkFFQU4sU0FBVUMsaUJBQWlCO2dCQUUzQixJQUFJRCxRQUFRO29CQUNWTCxNQUFNbUIsS0FBS2I7b0JBRVgsSUFBSUosYUFBYSxNQUFNO3dCQUNyQkcsU0FBU0gsU0FBU0MsWUFBWUM7d0JBRTlCLElBQUksQ0FBQ0MsUUFBUTs0QkFDWEwsTUFBTW9CO3dCQUNSO29CQUNGO2dCQUNGO2dCQUVBLElBQUksQ0FBQ2YsUUFBUTtvQkFDWEosTUFBTW9CLFVBQVVkO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywwQkFBMEIsSUFBSSxDQUFDekIsa0JBQWtCMEIsWUFDbkRDLFNBQVNGLHlCQUF5QixHQUFHO2dCQUV6QyxPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQjVCLGlCQUFpQjtnQkFDNUMsSUFBTTZCLHdCQUF3QixJQTFEYmhDLHNCQTBEdUNHO2dCQUV4RCxPQUFPNkI7WUFDVDs7O1dBN0RtQmhDO0VBQThCaUMifQ==