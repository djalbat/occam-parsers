"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var TerminalPart = /*#__PURE__*/ function() {
    function TerminalPart() {
        _classCallCheck(this, TerminalPart);
    }
    _createClass(TerminalPart, [
        {
            key: "isNonTerminalPart",
            value: function isNonTerminalPart() {
                var nonTerminalPart = false;
                return nonTerminalPart;
            }
        },
        {
            key: "isTerminalPart",
            value: function isTerminalPart() {
                var terminalPart = true;
                return terminalPart;
            }
        },
        {
            key: "isNoWhitespacePart",
            value: function isNoWhitespacePart() {
                var noWhitespacePart = false;
                return noWhitespacePart;
            }
        },
        {
            key: "clone",
            value: function clone(Part) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                return _construct(Part, _toConsumableArray(remainingArguments));
            }
        }
    ]);
    return TerminalPart;
}();
exports.default = TerminalPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFBhcnQge1xuICBpc05vblRlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbFBhcnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc1Rlcm1pbmFsUGFydCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0cnVlO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cblxuICBjbG9uZShQYXJ0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIG5ldyBQYXJ0KC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsIm5vblRlcm1pbmFsUGFydCIsImlzVGVybWluYWxQYXJ0IiwidGVybWluYWxQYXJ0IiwiaXNOb1doaXRlc3BhY2VQYXJ0Iiwibm9XaGl0ZXNwYWNlUGFydCIsImNsb25lIiwiUGFydCIsInJlbWFpbmluZ0FyZ3VtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBOzt5REFBQTt1RUFBQTs7Ozs7Ozs7Ozs7Ozs7OztnRkFBQTs7Ozs7Ozs7c0NBQUE7Ozs7OztpQ0FBQTs7O2lFQUFBOztTQUFBOzs7Ozs7OzhEQUFBO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7Ozs7OzsrREFBQTs7OztBQUVlLEdBQUssQ0FBQ0EsWUFBWSxpQkFBbEIsUUFBUTthQUFGQSxZQUFZOzJDQUZqQzs7OztZQUdFQyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsZUFBZSxHQUFHLEtBQUs7Z0JBRTdCLE1BQU0sQ0FBQ0EsZUFBZTtZQUN4QixDQUFDOzs7WUFFREMsR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixHQUFLLENBQUNDLFlBQVksR0FBRyxJQUFJO2dCQUV6QixNQUFNLENBQUNBLFlBQVk7WUFDckIsQ0FBQzs7O1lBRURDLEdBQWtCLEVBQWxCQSxDQUFrQjttQkFBbEJBLFFBQVEsQ0FBUkEsa0JBQWtCLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBRyxLQUFLO2dCQUU5QixNQUFNLENBQUNBLGdCQUFnQjtZQUN6QixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsSUFBSSxFQUF5QixDQUFDO2dCQUF4QixHQUFHQyxDQUFILEdBQXFCLENBQXJCLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQWxCQSxrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztvQkFBRUEsa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLENBQXJCLElBQXFCLENDckJuQyxDRHFCbUM7Z0JBQUQsQ0FBQztnQkFBSSxNQUFNLFlBQUtELElBQUkscUJBQUlDLGtCQUFrQjtZQUFHLENBQUM7O01BckJoRjs7O2tCQUVxQlQsWUFBWSxBQUZqQyJ9