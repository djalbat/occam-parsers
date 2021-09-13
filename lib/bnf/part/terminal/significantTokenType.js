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
var SignificantTokenTypePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(SignificantTokenTypePart, TerminalPart);
    function SignificantTokenTypePart(significantTokenType) {
        _classCallCheck(this, SignificantTokenTypePart);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypePart).call(this));
        _this.significantTokenType = significantTokenType;
        return _this;
    }
    _createClass(SignificantTokenTypePart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var terminalNode = null;
                var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var significantTokenType = significantToken.getType();
                    if (significantTokenType === this.significantTokenType) {
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
                var string = "[".concat(this.significantTokenType, "]");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(SignificantTokenTypePart.prototype), "clone", this).call(this, SignificantTokenTypePart, this.significantTokenType);
            }
        }
    ]);
    return SignificantTokenTypePart;
}(_terminal.default);
exports.default = SignificantTokenTypePart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbFBhcnQiLCJUZXJtaW5hbE5vZGUiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJjb25zdHJ1Y3RvciIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwicGFyc2UiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInRlcm1pbmFsTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRUeXBlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJjbG9uZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFYSxHQUFxQixDQUFyQixTQUFxQjtBQUNyQixHQUErQixDQUEvQixVQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbkMsd0JBQXdCLGlCQUE5QixRQUFRO2NBQUYsd0JBQXdCO2FBQXhCLHdCQUF3QixDQUMvQixvQkFBb0I7OEJBRGIsd0JBQXdCOztpRUFBeEIsd0JBQXdCO2NBSXBDLG9CQUFvQixHQUFHLG9CQUFvQjs7O2lCQUovQix3QkFBd0I7O1lBTzNDLEdBQUssR0FBTCxLQUFLO21CQUFMLFFBQVEsQ0FBUixLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLE1BQU07Z0JBRVYsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJO2dCQUV2QixHQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQ3BDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsSUFDekQsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU3QyxFQUFFLEVBQUUsZ0JBQWdCLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQzlCLEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPO29CQUVyRCxFQUFFLEVBQUUsb0JBQW9CLEtBQUssSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7d0JBQ3ZELFlBQVksR0F0QkssVUFBK0IsU0FzQnBCLG9CQUFvQixDQUFDLGdCQUFnQjtvQkFDbkUsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sR0FBSSxZQUFZLEtBQUssSUFBSTtnQkFFL0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUNYLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFFdkIsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO3dCQUNiLE1BQU0sR0FBRyxRQUFRO3dCQUVqQixFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7NEJBQ1osS0FBSyxDQUFDLEdBQUc7d0JBQ1gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO29CQUNaLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVTtnQkFDOUIsQ0FBQztnQkFFRCxNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBNEIsTUFBQyxDQUEzQixJQUFJLENBQUMsb0JBQW9CLEdBQUMsQ0FBQztnQkFFOUMsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxzQkFuREcsd0JBQXdCLGNBbURwQixLQUFLLEdBQVgsSUFBSyxhQUFPLHdCQUF3QixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFBRyxDQUFDOzs7V0FuRGpFLHdCQUF3QjtFQUhwQixTQUFxQjtrQkFHekIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTtcblxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAodGVybWluYWxOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2godGVybWluYWxOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYFske3RoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LCB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlKTsgfVxufVxuIl19