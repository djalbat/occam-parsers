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
                var endOfLineBNFNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineBNFNodeParseTree; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2VuZE9mTGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFbmRPZkxpbmVCTkZOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZW5kT2ZMaW5lTm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUJORk5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVuZE9mTGluZUJORk5vZGVQYXJzZVRyZWUgPSBFbmRPZkxpbmVCTkZOb2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZW5kT2ZMaW5lQk5GTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7IHJldHVybiBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRW5kT2ZMaW5lQk5GTm9kZSwgc2lnbmlmaWNhbnRUb2tlbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJFbmRPZkxpbmVCTkZOb2RlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImVuZE9mTGluZUJORk5vZGVQYXJzZVRyZWUiLCJFbmRPZkxpbmVCTkZOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV5QixHQUFhLENBQWIsU0FBYTtBQUNBLEdBQStCLENBQS9CLGNBQStCO0FBRXhDLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OERBTDlDO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU9lLEdBQUssQ0FBQ0EsZ0JBQWdCLGlCQUF0QixRQUFROzZDQVB2Qjs7YUFPcUJBLGdCQUFnQjsrQ0FQckM7Ozs7O1lBUUVDLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUNDLE9BQU8sR0FBR0MsVUFBWTtnQkFFNUIsTUFBTSxDQUFDRCxPQUFPO1lBQ2hCLENBQUM7OztZQUVERSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDQyx5QkFBeUIsR0FBR0MsY0FBeUIsU0FBQ0MsV0FBVyxJQUNqRUMsU0FBUyxHQUFHSCx5QkFBeUIsRUFBRyxFQUFHLEFBQUgsQ0FBRztnQkFFakQsTUFBTSxDQUFDRyxTQUFTO1lBQ2xCLENBQUM7Ozs7WUFFTUMsR0FBb0IsRUFBcEJBLENBQW9CO21CQUEzQixRQUFRLENBQURBLG9CQUFvQixDQUFDQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0MsU0FBWSxTQUFDRixvQkFBb0IsQ0FBQ1YsZ0JBQWdCLEVBQUVXLGdCQUFnQjtZQUFHLENBQUM7O01BckJqSTs7RUFPOENDLFNBQVk7a0JBQXJDWixnQkFBZ0IsQUFQckMifQ==