"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLinePart;
    }
});
var _occamLexers = require("occam-lexers");
var _terminal = /*#__PURE__*/ _interopRequireDefault(require("../../part/terminal"));
var _endOfLine = /*#__PURE__*/ _interopRequireDefault(require("../../node/terminal/endOfLine"));
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
                return new EndOfLinePart();
            }
        }
    ]);
    return EndOfLinePart;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2VuZE9mTGluZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVCTkZOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZVwiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IGVuZE9mTGluZUJORk5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgZW5kT2ZMaW5lQk5GTm9kZSA9IEVuZE9mTGluZUJORk5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKGVuZE9mTGluZUJORk5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChlbmRPZkxpbmVCTkZOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVORF9PRl9MSU5FOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIG5ldyBFbmRPZkxpbmVQYXJ0KCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsIkVORF9PRl9MSU5FIiwic3BlY2lhbFN5bWJvbHMiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImVuZE9mTGluZUJORk5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZUJORk5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJwb3AiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInN0cmluZyIsImNsb25lIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsYUFBYTs7OzJCQVBILGNBQWM7NkRBRXBCLHFCQUFxQjs4REFDakIsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELElBQU0sQUFBRUMsV0FBVyxHQUFLQyxZQUFjLGVBQUEsQ0FBOUJELFdBQVcsQUFBbUIsQUFBQztBQUV4QixJQUFBLEFBQU1ELGFBQWEsaUJBQW5CO2NBQU1BLGFBQWE7OEJBQWJBLGFBQWE7YUFBYkEsYUFBYTs4QkFBYkEsYUFBYTs7O2lCQUFiQSxhQUFhOztZQUNoQ0csR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVCLElBQUlDLE1BQU0sQUFBQztnQkFFWCxJQUFJQyxnQkFBZ0IsR0FBRyxJQUFJLEFBQUM7Z0JBRTVCLElBQU1DLFVBQVUsR0FBR0osS0FBSyxDQUFDSyxhQUFhLEVBQUUsRUFDcENDLG9CQUFvQixHQUFHTixLQUFLLENBQUNPLHVCQUF1QixFQUFFLEVBQ3BEQyxnQkFBZ0IsR0FBR0Ysb0JBQW9CLEFBQUMsRUFBQyxHQUFHO2dCQUVsRCxJQUFJRSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7b0JBQzdCLElBQU1DLDhCQUE4QixHQUFHRCxnQkFBZ0IsQ0FBQ0UsZ0JBQWdCLEVBQUUsQUFBQztvQkFFM0UsSUFBSUQsOEJBQThCLEVBQUU7d0JBQ2xDTixnQkFBZ0IsR0FBR1EsVUFBZ0IsUUFBQSxDQUFDQyxvQkFBb0IsQ0FBQ0osZ0JBQWdCLENBQUMsQ0FBQztvQkFDN0UsQ0FBQztnQkFDSCxDQUFDO2dCQUVETixNQUFNLEdBQUlDLGdCQUFnQixLQUFLLElBQUksQUFBQyxDQUFDO2dCQUVyQyxJQUFJRCxNQUFNLEVBQUU7b0JBQ1ZILEtBQUssQ0FBQ2MsSUFBSSxDQUFDVixnQkFBZ0IsQ0FBQyxDQUFDO29CQUU3QixJQUFJRixRQUFRLEtBQUssSUFBSSxFQUFFO3dCQUNyQkMsTUFBTSxHQUFHRCxRQUFRLEVBQUUsQ0FBQzt3QkFFcEIsSUFBSSxDQUFDQyxNQUFNLEVBQUU7NEJBQ1hILEtBQUssQ0FBQ2UsR0FBRyxFQUFFLENBQUM7d0JBQ2QsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsSUFBSSxDQUFDWixNQUFNLEVBQUU7b0JBQ1hGLEtBQUssQ0FBQ2UsU0FBUyxDQUFDWCxVQUFVLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxPQUFPRixNQUFNLENBQUM7WUFDaEIsQ0FBQzs7O1lBRURjLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1DLE1BQU0sR0FBR3JCLFdBQVcsQUFBQyxFQUFDLEdBQUc7Z0JBRS9CLE9BQU9xQixNQUFNLENBQUM7WUFDaEIsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxHQUFHO2dCQUFFLE9BQU8sSUE3Q0V2QixhQUFhLEVBNkNJLENBQUM7WUFBQyxDQUFDOzs7V0E3Q3BCQSxhQUFhO0NBOENqQyxDQTlDMEN3QixTQUFZLFFBQUEsQ0E4Q3REIn0=