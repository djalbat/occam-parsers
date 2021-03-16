"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var TerminalPart = function() {
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
            key: "isEpsilonPart",
            value: function isEpsilonPart() {
                var epsilonPart = false;
                return epsilonPart;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxQYXJ0IHtcbiAgaXNOb25UZXJtaW5hbFBhcnQoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxQYXJ0ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxQYXJ0O1xuICB9XG5cbiAgaXNUZXJtaW5hbFBhcnQoKSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWxQYXJ0O1xuICB9XG5cbiAgaXNFcHNpbG9uUGFydCgpIHtcbiAgICBjb25zdCBlcHNpbG9uUGFydCA9IGZhbHNlO1xuICAgIFxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxuXG4gIGlzTm9XaGl0ZXNwYWNlUGFydCgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxuXG4gIGNsb25lKFBhcnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gbmV3IFBhcnQoLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsWUFBQTthQUFBLFlBQUE7OEJBQUEsWUFBQTs7aUJBQUEsWUFBQTs7QUFDQSxlQUFBLEdBQUEsaUJBQUE7NEJBQUEsaUJBQUE7b0JBQ0EsZUFBQSxHQUFBLEtBQUE7dUJBRUEsZUFBQTs7OztBQUdBLGVBQUEsR0FBQSxjQUFBOzRCQUFBLGNBQUE7b0JBQ0EsWUFBQSxHQUFBLElBQUE7dUJBRUEsWUFBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7b0JBQ0EsV0FBQSxHQUFBLEtBQUE7dUJBRUEsV0FBQTs7OztBQUdBLGVBQUEsR0FBQSxrQkFBQTs0QkFBQSxrQkFBQTtvQkFDQSxnQkFBQSxHQUFBLEtBQUE7dUJBRUEsZ0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsS0FBQTs0QkFBQSxLQUFBLENBQUEsSUFBQTt3QkFBQSxJQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxrQkFBQSxhQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxJQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7QUFBQSxzQ0FBQSxDQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLElBQUE7O2tDQUFBLElBQUEscUJBQUEsa0JBQUE7Ozs7V0F6QkEsWUFBQTs7a0JBQUEsWUFBQSJ9