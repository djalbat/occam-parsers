"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _endOfLine = _interopRequireDefault(require("../../node/terminal/endOfLine"));
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
function _get(target1, property1, receiver1) {
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
    return _get(target1, property1, receiver1 || target1);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
var EndOfLinePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(EndOfLinePart, TerminalPart);
    var _super = _createSuper(EndOfLinePart);
    function EndOfLinePart() {
        _classCallCheck(this, EndOfLinePart);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfLinePart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var endOfLineBNFNode = null;
                var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();
                    if (significantTokenEndOfLineToken) {
                        endOfLineBNFNode = _endOfLine.default.fromSignificantToken(significantToken);
                    }
                }
                parsed = endOfLineBNFNode !== null;
                if (parsed) {
                    nodes.push(endOfLineBNFNode);
                    if (callback !== null) {
                        parsed = callback();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IGVuZE9mTGluZUJORk5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgZW5kT2ZMaW5lQk5GTm9kZSA9IEVuZE9mTGluZUJORk5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKGVuZE9mTGluZUJORk5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChlbmRPZkxpbmVCTkZOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVORF9PRl9MSU5FOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTGluZVBhcnQpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVORF9PRl9MSU5FIiwic3BlY2lhbFN5bWJvbHMiLCJFbmRPZkxpbmVQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJlbmRPZkxpbmVCTkZOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVCTkZOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFcEIsSUFBQSxTQUFxQixrQ0FBckIscUJBQXFCLEVBQUE7QUFDakIsSUFBQSxVQUErQixrQ0FBL0IsK0JBQStCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNLEFBQUVBLFdBQVcsR0FBS0MsWUFBYyxlQUFBLENBQTlCRCxXQUFXLEFBQW1CLEFBQUM7QUFFeEIsSUFBQSxBQUFNRSxhQUFhLGlCQUFuQjs7O2FBQU1BLGFBQWE7Ozs7OztZQUNoQ0MsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVCLElBQUlDLE1BQU0sQUFBQztnQkFFWCxJQUFJQyxnQkFBZ0IsR0FBRyxJQUFJLEFBQUM7Z0JBRTVCLElBQU1DLFVBQVUsR0FBR0osS0FBSyxDQUFDSyxhQUFhLEVBQUUsRUFDcENDLG9CQUFvQixHQUFHTixLQUFLLENBQUNPLHVCQUF1QixFQUFFLEVBQ3BEQyxnQkFBZ0IsR0FBR0Ysb0JBQW9CLEFBQUMsRUFBQyxHQUFHO2dCQUVsRCxJQUFJRSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7b0JBQzdCLElBQU1DLDhCQUE4QixHQUFHRCxnQkFBZ0IsQ0FBQ0UsZ0JBQWdCLEVBQUUsQUFBQztvQkFFM0UsSUFBSUQsOEJBQThCLEVBQUU7d0JBQ2xDTixnQkFBZ0IsR0FBR1EsVUFBZ0IsUUFBQSxDQUFDQyxvQkFBb0IsQ0FBQ0osZ0JBQWdCLENBQUMsQ0FBQztxQkFDNUU7aUJBQ0Y7Z0JBRUROLE1BQU0sR0FBSUMsZ0JBQWdCLEtBQUssSUFBSSxBQUFDLENBQUM7Z0JBRXJDLElBQUlELE1BQU0sRUFBRTtvQkFDVkgsS0FBSyxDQUFDYyxJQUFJLENBQUNWLGdCQUFnQixDQUFDLENBQUM7b0JBRTdCLElBQUlGLFFBQVEsS0FBSyxJQUFJLEVBQUU7d0JBQ3JCQyxNQUFNLEdBQUdELFFBQVEsRUFBRSxDQUFDO3dCQUVwQixJQUFJLENBQUNDLE1BQU0sRUFBRTs0QkFDWEgsS0FBSyxDQUFDZSxHQUFHLEVBQUUsQ0FBQzt5QkFDYjtxQkFDRjtpQkFDRjtnQkFFRCxJQUFJLENBQUNaLE1BQU0sRUFBRTtvQkFDWEYsS0FBSyxDQUFDZSxTQUFTLENBQUNYLFVBQVUsQ0FBQyxDQUFDO2lCQUM3QjtnQkFFRCxPQUFPRixNQUFNLENBQUM7YUFDZjs7O1lBRURjLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1DLE1BQU0sR0FBR3RCLFdBQVcsQUFBQyxFQUFDLEdBQUc7Z0JBRS9CLE9BQU9zQixNQUFNLENBQUM7YUFDZjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxHQUFHO2dCQUFFLE9BQU8scUJBN0NFckIsYUFBYSxhQTZDVHFCLE9BQUssRUFBWCxJQUFLLENBQUEsWUFBT3JCLGFBQWEsRUFBRTthQUFFOzs7O0NBQy9DLENBOUMwQ3NCLFNBQVksUUFBQSxDQThDdEQ7a0JBOUNvQnRCLGFBQWEifQ==