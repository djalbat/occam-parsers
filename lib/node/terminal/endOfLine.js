"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../terminal"));
var _endOfLineNode = _interopRequireDefault(require("../../parseTree/endOfLineNode"));
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
var EndOfLineBNFNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EndOfLineBNFNode, TerminalNode);
    var _super = _createSuper(EndOfLineBNFNode);
    function EndOfLineBNFNode() {
        _classCallCheck(this, EndOfLineBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfLineBNFNode, [
        {
            key: "getContent",
            value: function getContent() {
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromSignificantToken",
            value: function fromSignificantToken(significantToken) {
                return _terminal.default.fromSignificantToken(EndOfLineBNFNode, significantToken);
            }
        }
    ]);
    return EndOfLineBNFNode;
}(_terminal.default);
exports.default = EndOfLineBNFNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZW5kT2ZMaW5lTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUJORk5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVuZE9mTGluZU5vZGVQYXJzZVRyZWUgPSBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7IHJldHVybiBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRW5kT2ZMaW5lQk5GTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbmRPZkxpbmVCTkZOb2RlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFeUIsSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUNILElBQUEsY0FBK0Isa0NBQS9CLCtCQUErQixFQUFBO0FBRXJDLElBQUEsVUFBaUIsV0FBakIsaUJBQWlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs4REFMOUM7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBT2UsSUFBQSxBQUFNQSxnQkFBZ0IsaUJDUGxDLEFET1k7NkNBUGY7O2FBT3FCQSxnQkFBZ0I7K0NBUHJDOzs7OztZQVFFQyxHQUFVLEVBQVZBLFlBQVU7WUVSWixPRlFFQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBTUMsT0FBTyxHQUFHQyxVQUFZLGFBQUEsQUFBQztnQkFFN0IsT0FBT0QsT0FBTyxDQUFDO2FBQ2hCOzs7WUFFREUsR0FBVyxFQUFYQSxhQUFXO1lFZGIsT0ZjRUEsU0FBQUEsV0FBVyxDQUFDQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQU1DLHNCQUFzQixHQUFHQyxjQUFzQixTQUFDQyxXQUFXLEVBQUUsRUFDN0RDLFNBQVMsR0FBR0gsc0JBQXNCLEFBQUMsRUFBRSxHQUFHO2dCQUU5QyxPQUFPRyxTQUFTLENBQUM7YUFDbEI7Ozs7WUFFTUMsR0FBb0IsRUFBcEJBLHNCQUFvQjtZRXJCN0IsT0ZxQkUsU0FBT0Esb0JBQW9CLENBQUNDLGdCQUFnQixFQUFFO2dCQUFFLE9BQU9DLFNBQVksU0FBQ0Ysb0JBQW9CLENBQUNWLGdCQUFnQixFQUFFVyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQUU7O01BckJqSTs7Q0FzQkMsQ0FmNkNDLFNBQVksU0FlekQ7a0JBZm9CWixnQkFBZ0IsQUFQckMifQ==