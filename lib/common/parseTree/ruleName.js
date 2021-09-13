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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RuleNameParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(RuleNameParseTree, VerticalBranchParseTree);
    function RuleNameParseTree() {
        _classCallCheck(this, RuleNameParseTree);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameParseTree).apply(this, arguments));
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
exports.default = RuleNameParseTree;
function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "(".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex, ")") : "(".concat(firstSignificantTokenIndex, ")");
    return tokenIndexes;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiUnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUV3QixHQUFrQixDQUFsQixlQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLGlCQUFpQixpQkFBdkIsUUFBUTtjQUFGLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztpQkFBakIsaUJBQWlCOztZQUM3QixHQUE0QixHQUE1Qiw0QkFBNEI7bUJBQW5DLFFBQVEsQ0FBRCw0QkFBNEIsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQzVELEdBQUssQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFdBQVcsSUFDdEMsWUFBWSxHQUFHLHdDQUF3QyxDQUFDLGVBQWUsRUFBRSxNQUFNLEdBQy9FLE1BQU0sTUFBaUIsTUFBWSxDQUF2QixRQUFRLEVBQWdCLE1BQUEsQ0FBYixZQUFZLEdBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUM1Qiw0QkFBNEIsR0FBRyxZQUFZLEVBQzNDLHVCQUF1QixHQVRHLGVBQWtCLFNBU00sU0FBUyxDQUFDLDRCQUE0QixHQUN4RixzQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQyx5QkFBeUIsSUFDMUUsaUJBQWlCLEdBWFMsZUFBa0IsU0FXQSxtQ0FBbUMsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsc0JBQXNCO2dCQUV2SSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsdUJBQXVCO2dCQUVyRCxNQUFNLENBQUMsaUJBQWlCO1lBQzFCLENBQUM7OztXQWRrQixpQkFBaUI7RUFGRixlQUFrQjtrQkFFakMsaUJBQWlCO1NBaUI3Qix3Q0FBd0MsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDMUUsR0FBSyxDQUFDLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyx3QkFBd0IsSUFDaEUsb0JBQW9CLEdBQUcsZUFBZSxDQUFDLHVCQUF1QixJQUM5RCwwQkFBMEIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUNqRSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixHQUMvRCxZQUFZLEdBQUksMEJBQTBCLEtBQUsseUJBQXlCLElBQ3ZELENBQUMsRUFBZ0MsTUFBeUIsQ0FBdkQsMEJBQTBCLEdBQUMsQ0FBQyxHQUE0QixNQUFDLENBQTNCLHlCQUF5QixHQUFDLENBQUMsTUFDMUQsQ0FBQyxFQUE2QixNQUFDLENBQTVCLDBCQUEwQixHQUFDLENBQUM7SUFFeEQsTUFBTSxDQUFDLFlBQVk7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtydWxlTmFtZX0ke3Rva2VuSW5kZXhlc31gLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFJ1bGVOYW1lUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIHRva2VuSW5kZXhlcyA9IChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fS0ke2xhc3RTaWduaWZpY2FudFRva2VuSW5kZXh9KWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgKCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9KWA7XG5cbiAgcmV0dXJuIHRva2VuSW5kZXhlcztcbn1cbiJdfQ==