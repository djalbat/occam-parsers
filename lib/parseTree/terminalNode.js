"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));
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
var TerminalNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(TerminalNodeParseTree, VerticalBranchParseTree);
    var _super = _createSuper(TerminalNodeParseTree);
    function TerminalNodeParseTree() {
        _classCallCheck(this, TerminalNodeParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(TerminalNodeParseTree, null, [
        {
            key: "fromTerminalNodeAndTokens",
            value: function fromTerminalNodeAndTokens(terminalNode, tokens) {
                var significantToken = terminalNode.getSignificantToken(), content = terminalNode.getContent(), type = significantToken.getType(), tokenIndex = tokens.indexOf(significantToken), string = "".concat(content, "[").concat(type, "](").concat(tokenIndex, ")"), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                return terminalNodeParseTree;
            }
        }
    ]);
    return TerminalNodeParseTree;
}(_verticalBranch.default);
exports.default = TerminalNodeParseTree;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICB0b2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgc3RyaW5nID0gYCR7Y29udGVudH1bJHt0eXBlfV0oJHt0b2tlbkluZGV4fSlgLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihUZXJtaW5hbE5vZGVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4IiwiaW5kZXhPZiIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFdUIsR0FBa0IsQ0FBbEIsZUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs4RDtzQzs2RDtpRTs7Ozt3RTtnRTs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFakNBLHFCQUFxQixpQkFBM0IsUUFBUTs2RDs7YUFBRkEscUJBQXFCO29EOzs7OztZQUNqQ0MsR0FBeUIsRUFBekJBLENBQXlCO21CQUFoQyxRQUFRLENBQURBLHlCQUF5QixDQUFDQyxZQUFZLEVBQUVDLE1BQU0sRUFBRSxDQUFDO2dCQUN0RCxHQUFLLENBQUNDLGdCQUFnQixHQUFHRixZQUFZLENBQUNHLG1CQUFtQixJQUNuREMsT0FBTyxHQUFHSixZQUFZLENBQUNLLFVBQVUsSUFDakNDLElBQUksR0FBR0osZ0JBQWdCLENBQUNLLE9BQU8sSUFDL0JDLFVBQVUsR0FBR1AsTUFBTSxDQUFDUSxPQUFPLENBQUNQLGdCQUFnQixHQUM1Q1EsTUFBTSxHQUFJLENBQUEsRUFBYUosTUFBSSxDQUFmRixPQUFPLEVBQUMsQ0FBQyxJQUFXSSxNQUFVLENBQW5CRixJQUFJLEVBQUMsQ0FBRSxLQUFhLE1BQUMsQ0FBWkUsVUFBVSxFQUFDLENBQUMsS0FDNUNHLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxNQUFNLEVBQzVCQyw0QkFBNEIsR0FBR0YsWUFBWSxFQUMzQ0csdUJBQXVCLEdBQUdDLGVBQXVCLFNBQUNDLFNBQVMsQ0FBQ0gsNEJBQTRCLEdBQ3hGSSxzQkFBc0IsR0FBR0gsdUJBQXVCLENBQUNJLHlCQUF5QixJQUMxRUMscUJBQXFCLEdBQUdKLGVBQXVCLFNBQUNLLG1DQUFtQyxDQUFDdEIscUJBQXFCLEVBQUVZLE1BQU0sRUFBRU8sc0JBQXNCO2dCQUUvSUUscUJBQXFCLENBQUNFLFdBQVcsQ0FBQ1AsdUJBQXVCLENBQUMsQ0FBQztnQkFFM0QsTUFBTSxDQUFDSyxxQkFBcUI7WUFDOUIsQ0FBQzs7TTs7RUFoQmdESixlQUF1QjtrQkFBckRqQixxQkFBcUIsQSJ9