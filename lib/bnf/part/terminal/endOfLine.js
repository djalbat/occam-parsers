"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _endOfLine = _interopRequireDefault(require("../../../common/node/terminal/endOfLine"));
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
var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
var EndOfLinePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(EndOfLinePart, TerminalPart);
    function EndOfLinePart() {
        _classCallCheck(this, EndOfLinePart);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLinePart).apply(this, arguments));
    }
    _createClass(EndOfLinePart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var endOfLineNode = null;
                var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();
                    if (significantTokenEndOfLineToken) {
                        endOfLineNode = _endOfLine.default.fromSignificantToken(significantToken);
                    }
                }
                parsed = endOfLineNode !== null;
                if (parsed) {
                    nodes.push(endOfLineNode);
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
                var string = END_OF_LINE; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(EndOfLinePart.prototype), "clone", this).call(this, EndOfLinePart);
            }
        }
    ]);
    return EndOfLinePart;
}(_terminal.default);
exports.default = EndOfLinePart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJUZXJtaW5hbFBhcnQiLCJFbmRPZkxpbmVOb2RlIiwiRU5EX09GX0xJTkUiLCJFbmRPZkxpbmVQYXJ0IiwicGFyc2UiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsImVuZE9mTGluZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsInBvcCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRXBCLEdBQXFCLENBQXJCLFNBQXFCO0FBQ3BCLEdBQXlDLENBQXpDLFVBQXlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxHQUFLLENBQUcsV0FBVyxHQUxZLFlBQWMsZ0JBS3JDLFdBQVc7SUFFRSxhQUFhLGlCQUFuQixRQUFRO2NBQUYsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNoQyxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNO2dCQUVWLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSTtnQkFFeEIsR0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxJQUNwQyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsdUJBQXVCLElBQ3BELGdCQUFnQixHQUFHLG9CQUFvQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFbEQsRUFBRSxFQUFFLGdCQUFnQixLQUFLLElBQUksRUFBRSxDQUFDO29CQUM5QixHQUFLLENBQUMsOEJBQThCLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCO29CQUV4RSxFQUFFLEVBQUUsOEJBQThCLEVBQUUsQ0FBQzt3QkFDbkMsYUFBYSxHQWxCSyxVQUF5QyxTQWtCN0Isb0JBQW9CLENBQUMsZ0JBQWdCO29CQUNyRSxDQUFDO2dCQUNILENBQUM7Z0JBRUQsTUFBTSxHQUFJLGFBQWEsS0FBSyxJQUFJO2dCQUVoQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhO29CQUV4QixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7d0JBQ2IsTUFBTSxHQUFHLFFBQVE7d0JBRWpCLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQzs0QkFDWixLQUFLLENBQUMsR0FBRzt3QkFDWCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7b0JBQ1osT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVO2dCQUM5QixDQUFDO2dCQUVELE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBUSxHQUFSLFFBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFL0IsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxzQkE3Q0csYUFBYSxjQTZDVCxLQUFLLEdBQVgsSUFBSyxhQUFPLGFBQWE7WUFBRyxDQUFDOzs7V0E3QzNCLGFBQWE7RUFMVCxTQUFxQjtrQkFLekIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbFwiO1xuaW1wb3J0IEVuZE9mTGluZU5vZGUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgZW5kT2ZMaW5lTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgZW5kT2ZMaW5lTm9kZSA9IEVuZE9mTGluZU5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKGVuZE9mTGluZU5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChlbmRPZkxpbmVOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU5EX09GX0xJTkU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoRW5kT2ZMaW5lUGFydCk7IH1cbn1cbiJdfQ==