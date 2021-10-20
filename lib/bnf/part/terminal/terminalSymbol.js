"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var TerminalSymbolPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(TerminalSymbolPart, TerminalPart);
    function TerminalSymbolPart(content) {
        _classCallCheck(this, TerminalSymbolPart);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolPart).call(this));
        _this.content = content;
        return _this;
    }
    _createClass(TerminalSymbolPart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var terminalNode = null;
                var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var content = significantToken.getContent();
                    if (content === this.content) {
                        terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                    }
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
                var content = this.content.replace(/\\/, "\\\\"), string = "\"".concat(content, "\"");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(TerminalSymbolPart.prototype), "clone", this).call(this, TerminalSymbolPart, this.content);
            }
        }
    ]);
    return TerminalSymbolPart;
}(_terminal.default);
exports.default = TerminalSymbolPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ID09PSB0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9ICh0ZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaCh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cbiAgXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZSgvXFxcXC8sIFwiXFxcXFxcXFxcIiksXG4gICAgICAgICAgc3RyaW5nID0gYFwiJHtjb250ZW50fVwiYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShUZXJtaW5hbFN5bWJvbFBhcnQsIHRoaXMuY29udGVudCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbFN5bWJvbFBhcnQiLCJjb250ZW50IiwicGFyc2UiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRDb250ZW50IiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJyZXBsYWNlIiwic3RyaW5nIiwiY2xvbmUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWEsR0FBcUIsQ0FBckIsU0FBcUI7QUFDckIsR0FBK0IsQ0FBL0IsVUFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5DQSxrQkFBa0IsaUJBQXhCLFFBQVE7Y0FBRkEsa0JBQWtCO2FBQWxCQSxrQkFBa0IsQ0FDekJDLE9BQU87OEJBREFELGtCQUFrQjs7aUVBQWxCQSxrQkFBa0I7Y0FJOUJDLE9BQU8sR0FBR0EsT0FBTzs7O2lCQUpMRCxrQkFBa0I7O1lBT3JDRSxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQ0MsTUFBTTtnQkFFVixHQUFHLENBQUNDLFlBQVksR0FBRyxJQUFJO2dCQUV2QixHQUFLLENBQUNDLFVBQVUsR0FBR0osT0FBTyxDQUFDSyxhQUFhLElBQ3BDQyxvQkFBb0IsR0FBR04sT0FBTyxDQUFDTyx1QkFBdUIsSUFDekRDLGdCQUFnQixHQUFHRixvQkFBb0IsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdDLEVBQUUsRUFBRUUsZ0JBQWdCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzlCLEdBQUssQ0FBQ1gsT0FBTyxHQUFHVyxnQkFBZ0IsQ0FBQ0MsVUFBVTtvQkFFM0MsRUFBRSxFQUFFWixPQUFPLEtBQUssSUFBSSxDQUFDQSxPQUFPLEVBQUUsQ0FBQzt3QkFDN0JNLFlBQVksR0F0QkssVUFBK0IsU0FzQnBCTyxvQkFBb0IsQ0FBQ0YsZ0JBQWdCO29CQUNuRSxDQUFDO2dCQUNILENBQUM7Z0JBRUROLE1BQU0sR0FBSUMsWUFBWSxLQUFLLElBQUk7Z0JBRS9CLEVBQUUsRUFBRUQsTUFBTSxFQUFFLENBQUM7b0JBQ1hILEtBQUssQ0FBQ1ksSUFBSSxDQUFDUixZQUFZO29CQUV2QixFQUFFLEVBQUVGLFFBQVEsRUFBRSxDQUFDO3dCQUNiQyxNQUFNLEdBQUdELFFBQVE7d0JBRWpCLEVBQUUsR0FBR0MsTUFBTSxFQUFFLENBQUM7NEJBQ1pILEtBQUssQ0FBQ2EsR0FBRzt3QkFDWCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxFQUFFLEdBQUdWLE1BQU0sRUFBRSxDQUFDO29CQUNaRixPQUFPLENBQUNhLFNBQVMsQ0FBQ1QsVUFBVTtnQkFDOUIsQ0FBQztnQkFFRCxNQUFNLENBQUNGLE1BQU07WUFDZixDQUFDOzs7WUFFRFksR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQ2tCLE9BQU8sT0FBTyxDQUFNLFFBQzNDQyxNQUFNLEdBQUksQ0FBQyxJQUFVLE1BQUMsQ0FBVG5CLE9BQU8sRUFBQyxDQUFDO2dCQUU1QixNQUFNLENBQUNtQixNQUFNO1lBQ2YsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLEdBQUcsQ0FBQztnQkFBQyxNQUFNLHNCQXBER3JCLGtCQUFrQixhQW9EZHFCLENBQUssUUFBWCxJQUFLLGFBQU9yQixrQkFBa0IsRUFBRSxJQUFJLENBQUNDLE9BQU87WUFBRyxDQUFDOzs7V0FwRDlDRCxrQkFBa0I7RUFIZCxTQUFxQjtrQkFHekJBLGtCQUFrQiJ9