"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _terminal1 = _interopRequireDefault(require("../../../common/node/terminal"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var wildcard = _occamLexers.specialSymbols.wildcard;
var WildcardPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(WildcardPart, TerminalPart);
    function WildcardPart() {
        _classCallCheck(this, WildcardPart);
        return _possibleConstructorReturn(this, _getPrototypeOf(WildcardPart).apply(this, arguments));
    }
    _createClass(WildcardPart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var terminalNode = null;
                var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                }
                parsed = terminalNode !== null;
                if (parsed) {
                    nodes.push(terminalNode);
                    if (callback) {
                        parsed = callback();
                        if (!parsed) {
                            nodes.pop();
                        }
                    }
                }
                if (!parsed) {
                    context.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = wildcard; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(WildcardPart.prototype), "clone", this).call(this, WildcardPart);
            }
        }
    ]);
    return WildcardPart;
}(_terminal.default);
exports.default = WildcardPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC93aWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmNvbnN0IHsgd2lsZGNhcmQgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkY2FyZFBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIHBhcnNlZCA9ICh0ZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaCh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB3aWxkY2FyZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoV2lsZGNhcmRQYXJ0KTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRXBCLEdBQXFCLENBQXJCLFNBQXFCO0FBQ3JCLEdBQStCLENBQS9CLFVBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxHQUFLLENBQUcsUUFBUSxHQUxlLFlBQWMsZ0JBS3JDLFFBQVE7SUFFSyxZQUFZO2NBQVosWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUMvQixHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLE1BQU07Z0JBRVYsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJO2dCQUV2QixHQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQ3BDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsSUFDekQsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU3QyxFQUFFLEVBQUUsZ0JBQWdCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzlCLFlBQVksR0FmTyxVQUErQixTQWV0QixvQkFBb0IsQ0FBQyxnQkFBZ0I7Z0JBQ25FLENBQUM7Z0JBRUQsTUFBTSxHQUFJLFlBQVksS0FBSyxJQUFJO2dCQUUvQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZO29CQUV2QixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7d0JBQ2IsTUFBTSxHQUFHLFFBQVE7d0JBRWpCLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQzs0QkFDWixLQUFLLENBQUMsR0FBRzt3QkFDWCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7b0JBQ1osT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVO2dCQUM5QixDQUFDO3VCQUVNLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXRCLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLEdBQUcsQ0FBQzs0Q0F6Q1UsWUFBWSxjQXlDUixLQUFLLG9CQUFDLFlBQVk7WUFBRyxDQUFDOzs7V0F6QzFCLFlBQVk7RUFMUixTQUFxQjtrQkFLekIsWUFBWSJ9