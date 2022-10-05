"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NoWhitespaceNode;
    }
});
var _terminal = /*#__PURE__*/ _interopRequireDefault(require("../terminal"));
var _noWhitespaceNode = /*#__PURE__*/ _interopRequireDefault(require("../../parseTree/noWhitespaceNode"));
var _constants = require("../../constants");
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
var NoWhitespaceNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(NoWhitespaceNode, TerminalNode);
    var _super = _createSuper(NoWhitespaceNode);
    function NoWhitespaceNode() {
        _classCallCheck(this, NoWhitespaceNode);
        return _super.apply(this, arguments);
    }
    _createClass(NoWhitespaceNode, [
        {
            key: "getType",
            value: function getType() {
                var type = null; ///
                return type;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "isNoWhitespaceNode",
            value: function isNoWhitespaceNode() {
                var noWhitespaceNode = true;
                return noWhitespaceNode;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var noWhitespaceNodeParseTree = _noWhitespaceNode.default.fromNothing(), parseTree = noWhitespaceNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "match",
            value: function match(node) {
                var matches = false;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, terminalNodeNoWhitespaceNode = terminalNode.isNoWhitespaceNode();
                    if (terminalNodeNoWhitespaceNode) {
                        matches = true;
                    }
                }
                return matches;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var noWhitespaceNode = NoWhitespaceNode.fromNothing();
                return noWhitespaceNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantToken = null, noWhitespaceNode = _terminal.default.fromSignificantToken(NoWhitespaceNode, significantToken);
                return noWhitespaceNode;
            }
        }
    ]);
    return NoWhitespaceNode;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaXNOb1doaXRlc3BhY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlID0gTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBtYXRjaChub2RlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IHRlcm1pbmFsTm9kZS5pc05vV2hpdGVzcGFjZU5vZGUoKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlID0gTm9XaGl0ZXNwYWNlTm9kZS5mcm9tTm90aGluZygpO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihOb1doaXRlc3BhY2VOb2RlLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZU5vZGUiLCJnZXRUeXBlIiwidHlwZSIsImdldENvbnRlbnQiLCJjb250ZW50IiwiRU1QVFlfU1RSSU5HIiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwibm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsIk5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsIm1hdGNoIiwibm9kZSIsIm1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVOb1doaXRlc3BhY2VOb2RlIiwiY2xvbmUiLCJzaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU9RQSxnQkFBZ0I7Ozs2REFMWixhQUFhO3FFQUNBLGtDQUFrQzt5QkFFM0MsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsZ0JBQWdCLGlCQUF0QjtjQUFNQSxnQkFBZ0I7OEJBQWhCQSxnQkFBZ0I7YUFBaEJBLGdCQUFnQjs4QkFBaEJBLGdCQUFnQjs7O2lCQUFoQkEsZ0JBQWdCOztZQUNuQ0MsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsSUFBTUMsSUFBSSxHQUFHLElBQUksQUFBQyxFQUFFLEdBQUc7Z0JBRXZCLE9BQU9BLElBQUksQ0FBQztZQUNkLENBQUM7OztZQUVEQyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxJQUFNQyxPQUFPLEdBQUdDLFVBQVksYUFBQSxBQUFDO2dCQUU3QixPQUFPRCxPQUFPLENBQUM7WUFDakIsQ0FBQzs7O1lBRURFLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQWxCQSxTQUFBQSxrQkFBa0IsR0FBRztnQkFDbkIsSUFBTUMsZ0JBQWdCLEdBQUcsSUFBSSxBQUFDO2dCQUU5QixPQUFPQSxnQkFBZ0IsQ0FBQztZQUMxQixDQUFDOzs7WUFFREMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLENBQUNDLE1BQU0sRUFBRTtnQkFDbEIsSUFBTUMseUJBQXlCLEdBQUdDLGlCQUF5QixRQUFBLENBQUNDLFdBQVcsRUFBRSxFQUNuRUMsU0FBUyxHQUFHSCx5QkFBeUIsQUFBQyxFQUFFLEdBQUc7Z0JBRWpELE9BQU9HLFNBQVMsQ0FBQztZQUNuQixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLElBQUksRUFBRTtnQkFDVixJQUFJQyxPQUFPLEdBQUcsS0FBSyxBQUFDO2dCQUVwQixJQUFNQyxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDRyxjQUFjLEVBQUUsQUFBQztnQkFFL0MsSUFBSUQsZ0JBQWdCLEVBQUU7b0JBQ3BCLElBQU1FLFlBQVksR0FBR0osSUFBSSxFQUNuQkssNEJBQTRCLEdBQUdELFlBQVksQ0FBQ2Isa0JBQWtCLEVBQUUsQUFBQztvQkFFdkUsSUFBSWMsNEJBQTRCLEVBQUU7d0JBQ2hDSixPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNqQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0EsT0FBTyxDQUFDO1lBQ2pCLENBQUM7OztZQUVESyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssR0FBRztnQkFDTixJQUFNZCxnQkFBZ0IsR0FBR1AsQUE1Q1JBLGdCQUFnQixDQTRDU1ksV0FBVyxFQUFFLEFBQUM7Z0JBRXhELE9BQU9MLGdCQUFnQixDQUFDO1lBQzFCLENBQUM7Ozs7WUFFTUssR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQ25CLElBQU1VLGdCQUFnQixHQUFHLElBQUksRUFDdkJmLGdCQUFnQixHQUFHZ0IsU0FBWSxRQUFBLENBQUNDLG9CQUFvQixDQW5EekN4QixnQkFBZ0IsRUFtRDRDc0IsZ0JBQWdCLENBQUMsQUFBQztnQkFFL0YsT0FBT2YsZ0JBQWdCLENBQUM7WUFDMUIsQ0FBQzs7O1dBdERrQlAsZ0JBQWdCO0NBdURwQyxDQXZENkN1QixTQUFZLFFBQUEsQ0F1RHpEIn0=