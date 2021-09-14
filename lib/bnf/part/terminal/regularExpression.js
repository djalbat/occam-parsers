"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _terminal1 = _interopRequireDefault(require("../../../common/node/terminal"));
var _array = require("../../../utilities/array");
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
var RegularExpressionPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(RegularExpressionPart, TerminalPart);
    function RegularExpressionPart(regularExpression) {
        _classCallCheck(this, RegularExpressionPart);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionPart).call(this));
        _this.regularExpression = regularExpression;
        return _this;
    }
    _createClass(RegularExpressionPart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var terminalNode = null;
                var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var content = significantToken.getContent(), matches = content.match(this.regularExpression);
                    if (matches !== null) {
                        var firstMatch = (0, _array).first(matches);
                        if (firstMatch === content) {
                            terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                        }
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
                var regularExpressionString = this.regularExpression.toString(), string = regularExpressionString; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(RegularExpressionPart.prototype), "clone", this).call(this, RegularExpressionPart, this.regularExpression);
            }
        }
    ]);
    return RegularExpressionPart;
}(_terminal.default);
exports.default = RegularExpressionPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHRTaWduaWZpY2FudFRva2VuKCksXG5cdFx0XHRcdFx0c2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICAgIGlmIChmaXJzdE1hdGNoID09PSBjb250ZW50KSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKHRlcm1pbmFsTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKHRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbi50b1N0cmluZygpLFxuXHRcdCAgICAgIHN0cmluZyA9IHJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFJlZ3VsYXJFeHByZXNzaW9uUGFydCwgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVhLEdBQXFCLENBQXJCLFNBQXFCO0FBQ3JCLEdBQStCLENBQS9CLFVBQStCO0FBRWxDLEdBQTBCLENBQTFCLE1BQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQixxQkFBcUI7Y0FBckIscUJBQXFCO2FBQXJCLHFCQUFxQixDQUM1QixpQkFBaUI7OEJBRFYscUJBQXFCOztpRUFBckIscUJBQXFCO2NBSWpDLGlCQUFpQixHQUFHLGlCQUFpQjs7O2lCQUp6QixxQkFBcUI7O1lBT3hDLEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUMsTUFBTTtnQkFFVixHQUFHLENBQUMsWUFBWSxHQUFHLElBQUk7Z0JBRXZCLEdBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsSUFDcEMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixJQUN6RCxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdDLEVBQUUsRUFBRSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDOUIsR0FBSyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLElBQ3JDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxNQUFNLGlCQUFpQjtvQkFFcEQsRUFBRSxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDckIsR0FBSyxDQUFDLFVBQVUsT0F2QkYsTUFBMEIsUUF1QmYsT0FBTzt3QkFFaEMsRUFBRSxFQUFFLFVBQVUsS0FBSyxPQUFPLEVBQUUsQ0FBQzs0QkFDM0IsWUFBWSxHQTVCRyxVQUErQixTQTRCbEIsb0JBQW9CLENBQUMsZ0JBQWdCO3dCQUNuRSxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLEdBQUksWUFBWSxLQUFLLElBQUk7Z0JBRS9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBRXZCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQzt3QkFDYixNQUFNLEdBQUcsUUFBUTt3QkFFakIsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDOzRCQUNaLEtBQUssQ0FBQyxHQUFHO3dCQUNYLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUVELEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztvQkFDWixPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVU7Z0JBQzlCLENBQUM7dUJBRU0sTUFBTTtZQUNmLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQyx1QkFBdUIsUUFBUSxpQkFBaUIsQ0FBQyxRQUFRLElBQzNELE1BQU0sR0FBRyx1QkFBdUIsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRWxDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLEdBQUcsQ0FBQzs0Q0F6RFUscUJBQXFCLGNBeURqQixLQUFLLG9CQUFDLHFCQUFxQixPQUFPLGlCQUFpQjtZQUFHLENBQUM7OztXQXpEM0QscUJBQXFCO0VBTGpCLFNBQXFCO2tCQUt6QixxQkFBcUIifQ==