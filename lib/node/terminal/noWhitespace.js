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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZU5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IEVNUFRZX1NUUklORztcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaXNOb1doaXRlc3BhY2VOb2RlKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZU5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlID0gTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBtYXRjaChub2RlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IHRlcm1pbmFsTm9kZS5pc05vV2hpdGVzcGFjZU5vZGUoKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZU5vV2hpdGVzcGFjZU5vZGUpIHtcbiAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihOb1doaXRlc3BhY2VOb2RlLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VOb2RlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZU5vZGUiLCJnZXRUeXBlIiwidHlwZSIsImdldENvbnRlbnQiLCJjb250ZW50IiwiRU1QVFlfU1RSSU5HIiwiaXNOb1doaXRlc3BhY2VOb2RlIiwibm9XaGl0ZXNwYWNlTm9kZSIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwibm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsIk5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsIm1hdGNoIiwibm9kZSIsIm1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVOb1doaXRlc3BhY2VOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsIlRlcm1pbmFsTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPUUEsZ0JBQWdCOzs7NkRBTFosYUFBYTtxRUFDQSxrQ0FBa0M7eUJBRTNDLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLGdCQUFnQixpQkFBdEI7Y0FBTUEsZ0JBQWdCOzhCQUFoQkEsZ0JBQWdCO2FBQWhCQSxnQkFBZ0I7OEJBQWhCQSxnQkFBZ0I7OztpQkFBaEJBLGdCQUFnQjs7WUFDbkNDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLElBQU1DLElBQUksR0FBRyxJQUFJLEFBQUMsRUFBRSxHQUFHO2dCQUV2QixPQUFPQSxJQUFJLENBQUM7WUFDZCxDQUFDOzs7WUFFREMsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBTUMsT0FBTyxHQUFHQyxVQUFZLGFBQUEsQUFBQztnQkFFN0IsT0FBT0QsT0FBTyxDQUFDO1lBQ2pCLENBQUM7OztZQUVERSxHQUFrQixFQUFsQkEsb0JBQWtCO21CQUFsQkEsU0FBQUEsa0JBQWtCLEdBQUc7Z0JBQ25CLElBQU1DLGdCQUFnQixHQUFHLElBQUksQUFBQztnQkFFOUIsT0FBT0EsZ0JBQWdCLENBQUM7WUFDMUIsQ0FBQzs7O1lBRURDLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxDQUFDQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQU1DLHlCQUF5QixHQUFHQyxpQkFBeUIsUUFBQSxDQUFDQyxXQUFXLEVBQUUsRUFDbkVDLFNBQVMsR0FBR0gseUJBQXlCLEFBQUMsRUFBRSxHQUFHO2dCQUVqRCxPQUFPRyxTQUFTLENBQUM7WUFDbkIsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxJQUFJLEVBQUU7Z0JBQ1YsSUFBSUMsT0FBTyxHQUFHLEtBQUssQUFBQztnQkFFcEIsSUFBTUMsZ0JBQWdCLEdBQUdGLElBQUksQ0FBQ0csY0FBYyxFQUFFLEFBQUM7Z0JBRS9DLElBQUlELGdCQUFnQixFQUFFO29CQUNwQixJQUFNRSxZQUFZLEdBQUdKLElBQUksRUFDbkJLLDRCQUE0QixHQUFHRCxZQUFZLENBQUNiLGtCQUFrQixFQUFFLEFBQUM7b0JBRXZFLElBQUljLDRCQUE0QixFQUFFO3dCQUNoQ0osT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDakIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9BLE9BQU8sQ0FBQztZQUNqQixDQUFDOzs7O1lBRU1KLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUNuQixJQUFNUyxnQkFBZ0IsR0FBRyxJQUFJLEVBQ3ZCZCxnQkFBZ0IsR0FBR2UsU0FBWSxRQUFBLENBQUNDLG9CQUFvQixDQTdDekN2QixnQkFBZ0IsRUE2QzRDcUIsZ0JBQWdCLENBQUMsQUFBQztnQkFFL0YsT0FBT2QsZ0JBQWdCLENBQUM7WUFDMUIsQ0FBQzs7O1dBaERrQlAsZ0JBQWdCO0NBaURwQyxDQWpENkNzQixTQUFZLFFBQUEsQ0FpRHpEIn0=