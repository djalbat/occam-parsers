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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsImxpYi9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgRW5kT2ZMaW5lQk5GTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmVcIjtcblxuY29uc3QgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCBlbmRPZkxpbmVCTkZOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuXHRcdCAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gc3RhdGUuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5FbmRPZkxpbmVUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgIGVuZE9mTGluZUJORk5vZGUgPSBFbmRPZkxpbmVCTkZOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9IChlbmRPZkxpbmVCTkZOb2RlICE9PSBudWxsKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnB1c2goZW5kT2ZMaW5lQk5GTm9kZSk7XG5cbiAgICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTkRfT0ZfTElORTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShFbmRPZkxpbmVQYXJ0KTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJFTkRfT0ZfTElORSIsInNwZWNpYWxTeW1ib2xzIiwiRW5kT2ZMaW5lUGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwiZW5kT2ZMaW5lQk5GTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFNpZ25pZmljYW50VG9rZW4iLCJnZXROZXh0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lQk5GTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwicHVzaCIsInBvcCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFK0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRXBCLElBQUEsU0FBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBQ2pCLElBQUEsVUFBK0Isa0NBQS9CLCtCQUErQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBTDVEO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFPQSxJQUFNLEFBQUVBLFdBQVcsR0FBS0MsWUFBYyxnQkFBOUJELFdBQVcsQUFBbUIsQUFBQztBQUV4QixJQUFBLEFBQU1FLGFBQWEsaUJDVC9CLEFEU1k7MENBVGY7O2FBU3FCQSxhQUFhOzRDQVRsQzs7Ozs7WUFVRUMsR0FBSyxFQUFMQSxPQUFLO1lFVlAsT0ZVRUEsU0FBQUEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJQyxNQUFNLEFBQUM7Z0JBRVgsSUFBSUMsZ0JBQWdCLEdBQUcsSUFBSSxBQUFDO2dCQUU1QixJQUFNQyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ssYUFBYSxFQUFFLEVBQ3BDQyxvQkFBb0IsR0FBR04sS0FBSyxDQUFDTyx1QkFBdUIsRUFBRSxFQUNwREMsZ0JBQWdCLEdBQUdGLG9CQUFvQixBQUFDLEVBQUMsR0FBRztnQkFFbEQsSUFBSUUsZ0JBQWdCLEtBQUssSUFBSSxFQUFFO29CQUM3QixJQUFNQyw4QkFBOEIsR0FBR0QsZ0JBQWdCLENBQUNFLGdCQUFnQixFQUFFLEFBQUM7b0JBRTNFLElBQUlELDhCQUE4QixFQUFFO3dCQUNsQ04sZ0JBQWdCLEdBQUdRLFVBQWdCLFNBQUNDLG9CQUFvQixDQUFDSixnQkFBZ0IsQ0FBQyxDQUFDO3FCQUM1RTtpQkFDRjtnQkFFRE4sTUFBTSxHQUFJQyxnQkFBZ0IsS0FBSyxJQUFJLEFBQUMsQ0FBQztnQkFFckMsSUFBSUQsTUFBTSxFQUFFO29CQUNWSCxLQUFLLENBQUNjLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUMsQ0FBQztvQkFFN0IsSUFBSUYsUUFBUSxLQUFLLElBQUksRUFBRTt3QkFDckJDLE1BQU0sR0FBR0QsUUFBUSxFQUFFLENBQUM7d0JBRXBCLElBQUksQ0FBQ0MsTUFBTSxFQUFFOzRCQUNYSCxLQUFLLENBQUNlLEdBQUcsRUFBRSxDQUFDO3lCQUNiO3FCQUNGO2lCQUNGO2dCQUVELElBQUksQ0FBQ1osTUFBTSxFQUFFO29CQUNYRixLQUFLLENBQUNlLFNBQVMsQ0FBQ1gsVUFBVSxDQUFDLENBQUM7aUJBQzdCO2dCQUVELE9BQU9GLE1BQU0sQ0FBQzthQUNmOzs7WUFFRGMsR0FBUSxFQUFSQSxVQUFRO1lFaERWLE9GZ0RFQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsSUFBTUMsTUFBTSxHQUFHdEIsV0FBVyxBQUFDLEVBQUMsR0FBRztnQkFFL0IsT0FBT3NCLE1BQU0sQ0FBQzthQUNmOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO1lFdERQLE9Gc0RFQSxTQUFBQSxLQUFLLEdBQUc7Z0JBQUUsT0FBTyxxQkE3Q0VyQixhQUFhLGFBNkNUcUIsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPckIsYUFBYSxFQUFFO2FBQUU7O01BdERoRDs7Q0F1REMsQ0E5QzBDc0IsU0FBWSxTQThDdEQ7a0JBOUNvQnRCLGFBQWEsQUFUbEMifQ==