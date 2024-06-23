"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return State;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var State = /*#__PURE__*/ function() {
    function State(index, tokens, ruleMap, precedence) {
        _class_call_check(this, State);
        this.index = index;
        this.tokens = tokens;
        this.ruleMap = ruleMap;
        this.precedence = precedence;
    }
    _create_class(State, [
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getRuleMap",
            value: function getRuleMap() {
                return this.ruleMap;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
            }
        },
        {
            key: "setIndex",
            value: function setIndex(index) {
                this.index = index;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "setRuleMap",
            value: function setRuleMap(ruleMap) {
                this.ruleMap = ruleMap;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "getSavedPrecedence",
            value: function getSavedPrecedence() {
                var savedPrecedence = this.precedence;
                return savedPrecedence;
            }
        },
        {
            key: "getSavedIndex",
            value: function getSavedIndex() {
                var savedIndex = this.index; ///
                return savedIndex;
            }
        },
        {
            key: "getNextToken",
            value: function getNextToken() {
                var nextToken = null;
                var tokensLength = this.tokens.length;
                if (this.index < tokensLength) {
                    nextToken = this.tokens[this.index++];
                }
                return nextToken;
            }
        },
        {
            key: "isAtStartOfContent",
            value: function isAtStartOfContent() {
                var atStartOfContent = this.index === 0;
                return atStartOfContent;
            }
        },
        {
            key: "getNextSignificantToken",
            value: function getNextSignificantToken() {
                var nextSignificantToken = null;
                var tokensLength = this.tokens.length;
                while(this.index < tokensLength){
                    var token = this.tokens[this.index++], tokenSignificant = token.isSignificant();
                    if (tokenSignificant) {
                        var significantToken = token; ///
                        nextSignificantToken = significantToken; ///
                        break;
                    }
                }
                return nextSignificantToken;
            }
        },
        {
            key: "isNextTokenWhitespaceToken",
            value: function isNextTokenWhitespaceToken() {
                var nextTokenWhitespaceToken = false;
                var tokensLength = this.tokens.length;
                if (this.index < tokensLength) {
                    var nextToken = this.tokens[this.index];
                    nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
                }
                return nextTokenWhitespaceToken;
            }
        },
        {
            key: "backtrack",
            value: function backtrack(savedIndex) {
                this.index = savedIndex; ///
            }
        },
        {
            key: "resetPrecedence",
            value: function resetPrecedence(savedPrecedence) {
                this.precedence = savedPrecedence; ///
            }
        }
    ], [
        {
            key: "fromTokensAndRuleMap",
            value: function fromTokensAndRuleMap(Class, tokens, ruleMap) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                if (ruleMap === undefined) {
                    ruleMap = tokens; ///
                    tokens = Class; ///
                    Class = State; ///
                }
                var index = 0, precedence = null, state = _construct(Class, [
                    index,
                    tokens,
                    ruleMap,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                return state;
            }
        }
    ]);
    return State;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgdG9rZW5zLCBydWxlTWFwLCBwcmVjZWRlbmNlKSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucnVsZU1hcCA9IHJ1bGVNYXA7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFJ1bGVNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU1hcDtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0UnVsZU1hcChydWxlTWFwKSB7XG4gICAgdGhpcy5ydWxlTWFwID0gcnVsZU1hcDtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRTYXZlZFByZWNlZGVuY2UoKSB7XG4gICAgY29uc3Qgc2F2ZWRQcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlO1xuXG4gICAgcmV0dXJuIHNhdmVkUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHRoaXMuaW5kZXg7IC8vL1xuICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGdldE5leHRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFRva2VuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0VG9rZW47XG4gIH1cblxuICBpc0F0U3RhcnRPZkNvbnRlbnQoKSB7XG4gICAgY29uc3QgYXRTdGFydE9mQ29udGVudCA9ICh0aGlzLmluZGV4ID09PSAwKTtcblxuICAgIHJldHVybiBhdFN0YXJ0T2ZDb250ZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG5cdFx0bGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICBcdGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICBcdHdoaWxlICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gIFx0XHRjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK10sXG5cdFx0XHRcdFx0XHR0b2tlblNpZ25pZmljYW50ID0gdG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gIFx0XHRpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICBcdFx0ICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdG9rZW47IC8vL1xuXG5cdFx0XHRcdG5leHRTaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcdC8vL1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICBcdH1cblxuXHRcdHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKCkge1xuICAgIGxldCBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmluZGV4IDwgdG9rZW5zTGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcblxuICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gbmV4dFRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRUb2tlbldoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG5cdGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cblx0fVxuXG4gIHJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpIHtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBzYXZlZFByZWNlZGVuY2U7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5zQW5kUnVsZU1hcChDbGFzcywgdG9rZW5zLCBydWxlTWFwLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAocnVsZU1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlTWFwID0gdG9rZW5zOyAvLy9cblxuICAgICAgdG9rZW5zID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFN0YXRlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuXHRcdFx0XHRcdHN0YXRlID0gbmV3IENsYXNzKGluZGV4LCB0b2tlbnMsIHJ1bGVNYXAsIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZSIsImluZGV4IiwidG9rZW5zIiwicnVsZU1hcCIsInByZWNlZGVuY2UiLCJnZXRJbmRleCIsImdldFRva2VucyIsImdldFJ1bGVNYXAiLCJnZXRQcmVjZWRlbmNlIiwic2V0SW5kZXgiLCJzZXRUb2tlbnMiLCJzZXRSdWxlTWFwIiwic2V0UHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkSW5kZXgiLCJzYXZlZEluZGV4IiwiZ2V0TmV4dFRva2VuIiwibmV4dFRva2VuIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwiaXNBdFN0YXJ0T2ZDb250ZW50IiwiYXRTdGFydE9mQ29udGVudCIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNXaGl0ZXNwYWNlVG9rZW4iLCJiYWNrdHJhY2siLCJyZXNldFByZWNlZGVuY2UiLCJmcm9tVG9rZW5zQW5kUnVsZU1hcCIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwidW5kZWZpbmVkIiwic3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsc0JBQUQsQUFBTDthQUFNQSxNQUNQQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQUQzQko7UUFFbkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFMREo7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNK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