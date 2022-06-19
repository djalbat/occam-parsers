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
            key: "fromTerminalNodeTokensAndAbridged",
            value: function fromTerminalNodeTokensAndAbridged(terminalNode, tokens, abridged) {
                var significantToken = terminalNode.getSignificantToken(), content = terminalNode.getContent(), type = significantToken.getType(), tokenIndex = tokens.indexOf(significantToken), string = abridged ? "".concat(content, "[").concat(type, "]") : "".concat(content, "[").concat(type, "](").concat(tokenIndex, ")"), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                return terminalNodeParseTree;
            }
        }
    ]);
    return TerminalNodeParseTree;
}(_verticalBranch.default);
exports.default = TerminalNodeParseTree;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkKHRlcm1pbmFsTm9kZSwgdG9rZW5zLCBhYnJpZGdlZCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICB0b2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2Yoc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgc3RyaW5nID0gYWJyaWRnZWQgP1xuICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGVudH1bJHt0eXBlfV1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29udGVudH1bJHt0eXBlfV0oJHt0b2tlbkluZGV4fSlgLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihUZXJtaW5hbE5vZGVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQiLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJhYnJpZGdlZCIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0eXBlIiwiZ2V0VHlwZSIsInRva2VuSW5kZXgiLCJpbmRleE9mIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFdUIsSUFBQSxlQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBQSxBQUFNQSxxQkFBcUIsaUJBQTNCOzs7YUFBTUEscUJBQXFCOzs7Ozs7WUFDakNDLEdBQWlDLEVBQWpDQSxtQ0FBaUM7bUJBQXhDLFNBQU9BLGlDQUFpQyxDQUFDQyxZQUFZLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO2dCQUN2RSxJQUFNQyxnQkFBZ0IsR0FBR0gsWUFBWSxDQUFDSSxtQkFBbUIsRUFBRSxFQUNyREMsT0FBTyxHQUFHTCxZQUFZLENBQUNNLFVBQVUsRUFBRSxFQUNuQ0MsSUFBSSxHQUFHSixnQkFBZ0IsQ0FBQ0ssT0FBTyxFQUFFLEVBQ2pDQyxVQUFVLEdBQUdSLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDUCxnQkFBZ0IsQ0FBQyxFQUM3Q1EsTUFBTSxHQUFHVCxRQUFRLEdBQ04sQUFBQyxFQUFBLENBQWFLLE1BQUksQ0FBZkYsT0FBTyxFQUFDLEdBQUMsQ0FBTyxDQUFBLE1BQUMsQ0FBTkUsSUFBSSxFQUFDLEdBQUMsQ0FBQyxHQUNuQixBQUFDLEVBQUEsQ0FBYUEsTUFBSSxDQUFmRixPQUFPLEVBQUMsR0FBQyxDQUFPLENBQUlJLE1BQVUsQ0FBbkJGLElBQUksRUFBQyxJQUFFLENBQWEsQ0FBQSxNQUFDLENBQVpFLFVBQVUsRUFBQyxHQUFDLENBQUMsRUFDakRHLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxNQUFNLEVBQzVCQyw0QkFBNEIsR0FBR0YsWUFBWSxFQUMzQ0csdUJBQXVCLEdBQUdDLGVBQXVCLFFBQUEsQ0FBQ0MsU0FBUyxDQUFDSCw0QkFBNEIsQ0FBQyxFQUN6Rkksc0JBQXNCLEdBQUdILHVCQUF1QixDQUFDSSx5QkFBeUIsRUFBRSxFQUM1RUMscUJBQXFCLEdBQUdKLGVBQXVCLFFBQUEsQ0FBQ0ssbUNBQW1DLENBQUN2QixxQkFBcUIsRUFBRWEsTUFBTSxFQUFFTyxzQkFBc0IsQ0FBQyxBQUFDO2dCQUVqSkUscUJBQXFCLENBQUNFLFdBQVcsQ0FBQ1AsdUJBQXVCLENBQUMsQ0FBQztnQkFFM0QsT0FBT0sscUJBQXFCLENBQUM7YUFDOUI7Ozs7Q0FDRixDQW5Ca0RKLGVBQXVCLFFBQUEsQ0FtQnpFO2tCQW5Cb0JsQixxQkFBcUIifQ==