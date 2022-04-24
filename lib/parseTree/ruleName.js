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
var RuleNameParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(RuleNameParseTree, VerticalBranchParseTree);
    var _super = _createSuper(RuleNameParseTree);
    function RuleNameParseTree() {
        _classCallCheck(this, RuleNameParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(RuleNameParseTree, null, [
        {
            key: "fromNonTerminalNodeAndTokens",
            value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
                var ruleName = nonTerminalNode.getRuleName(), tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens), string = "".concat(ruleName).concat(tokenIndexes), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), ruleNameParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);
                ruleNameParseTree.appendToTop(verticalBranchParseTree);
                return ruleNameParseTree;
            }
        }
    ]);
    return RuleNameParseTree;
}(_verticalBranch.default);
function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "(".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex, ")") : "(".concat(firstSignificantTokenIndex, ")");
    return tokenIndexes;
}
exports.default = RuleNameParseTree;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHRva2VuSW5kZXhlcyA9IHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3J1bGVOYW1lfSR7dG9rZW5JbmRleGVzfWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oUnVsZU5hbWVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBydWxlTmFtZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJzZVRyZWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgdG9rZW5JbmRleGVzID0gKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9LSR7bGFzdFNpZ25pZmljYW50VG9rZW5JbmRleH0pYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleH0pYDtcblxuICByZXR1cm4gdG9rZW5JbmRleGVzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInRva2VucyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJ0b2tlbkluZGV4ZXMiLCJ0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRXVCLElBQUEsZUFBa0Isa0NBQWxCLGtCQUFrQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQUEsQUFBTUEsaUJBQWlCLGlCQWlCbkMsQUFqQlk7OzthQUFNQSxpQkFBaUI7Ozs7OztZQUM3QkMsR0FBNEIsRUFBNUJBLDhCQUE0QjttQkFBbkMsU0FBT0EsNEJBQTRCLENBQUNDLGVBQWUsRUFBRUMsTUFBTSxFQUFFO2dCQUMzRCxJQUFNQyxRQUFRLEdBQUdGLGVBQWUsQ0FBQ0csV0FBVyxFQUFFLEVBQ3hDQyxZQUFZLEdBQUdDLHdDQUF3QyxDQUFDTCxlQUFlLEVBQUVDLE1BQU0sQ0FBQyxFQUNoRkssTUFBTSxHQUFHLEFBQUMsRUFBQSxDQUFhRixNQUFZLENBQXZCRixRQUFRLENBQWdCLENBQUEsTUFBQSxDQUFiRSxZQUFZLENBQUUsRUFDckNHLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxNQUFNLEVBQzVCQyw0QkFBNEIsR0FBR0YsWUFBWSxFQUMzQ0csdUJBQXVCLEdBQUdDLGVBQXVCLFFBQUEsQ0FBQ0MsU0FBUyxDQUFDSCw0QkFBNEIsQ0FBQyxFQUN6Rkksc0JBQXNCLEdBQUdILHVCQUF1QixDQUFDSSx5QkFBeUIsRUFBRSxFQUM1RUMsaUJBQWlCLEdBQUdKLGVBQXVCLFFBQUEsQ0FBQ0ssbUNBQW1DLENBQUNsQixpQkFBaUIsRUFBRVEsTUFBTSxFQUFFTyxzQkFBc0IsQ0FBQyxBQUFDO2dCQUV6SUUsaUJBQWlCLENBQUNFLFdBQVcsQ0FBQ1AsdUJBQXVCLENBQUMsQ0FBQztnQkFFdkQsT0FBT0ssaUJBQWlCLENBQUM7YUFDMUI7Ozs7Q0FDRixDQWY4Q0osZUFBdUIsUUFBQSxDQWVyRTtBQUVELFNBQVNOLHdDQUF3QyxDQUFDTCxlQUFlLEVBQUVDLE1BQU0sRUFBRTtJQUN6RSxJQUFNaUIscUJBQXFCLEdBQUdsQixlQUFlLENBQUNtQix3QkFBd0IsRUFBRSxFQUNsRUMsb0JBQW9CLEdBQUdwQixlQUFlLENBQUNxQix1QkFBdUIsRUFBRSxFQUNoRUMsMEJBQTBCLEdBQUdyQixNQUFNLENBQUNzQixPQUFPLENBQUNMLHFCQUFxQixDQUFDLEVBQ2xFTSx5QkFBeUIsR0FBR3ZCLE1BQU0sQ0FBQ3NCLE9BQU8sQ0FBQ0gsb0JBQW9CLENBQUMsRUFDaEVoQixZQUFZLEdBQUcsQUFBQ2tCLDBCQUEwQixLQUFLRSx5QkFBeUIsR0FDeEQsQUFBQyxHQUFDLENBQWdDQSxNQUF5QixDQUF2REYsMEJBQTBCLEVBQUMsR0FBQyxDQUE0QixDQUFBLE1BQUMsQ0FBM0JFLHlCQUF5QixFQUFDLEdBQUMsQ0FBQyxHQUM1RCxBQUFDLEdBQUMsQ0FBNkIsTUFBQyxDQUE1QkYsMEJBQTBCLEVBQUMsR0FBQyxDQUFDLEFBQUM7SUFFMUQsT0FBT2xCLFlBQVksQ0FBQztDQUNyQjtrQkEzQm9CTixpQkFBaUIifQ==