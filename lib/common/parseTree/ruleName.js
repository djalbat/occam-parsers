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
var RuleNameParseTree = function(VerticalBranchParseTree) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtydWxlTmFtZX0ke3Rva2VuSW5kZXhlc31gLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFJ1bGVOYW1lUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgIHRva2VuSW5kZXhlcyA9IChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fS0ke2xhc3RTaWduaWZpY2FudFRva2VuSW5kZXh9KWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgKCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9KWA7XG5cbiAgcmV0dXJuIHRva2VuSW5kZXhlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUV3QixlQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLGlCQUFpQjtjQUFqQixpQkFBaUI7YUFBakIsaUJBQWlCOzhCQUFqQixpQkFBaUI7Z0VBQWpCLGlCQUFpQjs7aUJBQWpCLGlCQUFpQjs7WUFDN0IsR0FBNEIsR0FBNUIsNEJBQTRCOzRCQUE1Qiw0QkFBNEIsQ0FBQyxlQUFlLEVBQUUsTUFBTTtvQkFDbkQsUUFBUSxHQUFHLGVBQWUsQ0FBQyxXQUFXLElBQ3RDLFlBQVksR0FBRyx3Q0FBd0MsQ0FBQyxlQUFlLEVBQUUsTUFBTSxHQUMvRSxNQUFNLE1BQWlCLE1BQVksQ0FBdkIsUUFBUSxFQUFnQixNQUFBLENBQWIsWUFBWSxHQUNuQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFDNUIsNEJBQTRCLEdBQUcsWUFBWSxFQUMzQyx1QkFBdUIsR0FURyxlQUFrQixTQVNNLFNBQVMsQ0FBQyw0QkFBNEIsR0FDeEYsc0JBQXNCLEdBQUcsdUJBQXVCLENBQUMseUJBQXlCLElBQzFFLGlCQUFpQixHQVhTLGVBQWtCLFNBV0EsbUNBQW1DLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLHNCQUFzQjtnQkFFdkksaUJBQWlCLENBQUMsV0FBVyxDQUFDLHVCQUF1Qjt1QkFFOUMsaUJBQWlCOzs7O1dBYlAsaUJBQWlCO0VBRkYsZUFBa0I7a0JBRWpDLGlCQUFpQjtTQWlCN0Isd0NBQXdDLENBQUMsZUFBZSxFQUFFLE1BQU07UUFDakUscUJBQXFCLEdBQUcsZUFBZSxDQUFDLHdCQUF3QixJQUNoRSxvQkFBb0IsR0FBRyxlQUFlLENBQUMsdUJBQXVCLElBQzlELDBCQUEwQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEdBQ2pFLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQy9ELFlBQVksR0FBSSwwQkFBMEIsS0FBSyx5QkFBeUIsSUFDdkQsQ0FBQyxFQUFnQyxNQUF5QixDQUF2RCwwQkFBMEIsR0FBQyxDQUFDLEdBQTRCLE1BQUMsQ0FBM0IseUJBQXlCLEdBQUMsQ0FBQyxNQUMxRCxDQUFDLEVBQTZCLE1BQUMsQ0FBNUIsMEJBQTBCLEdBQUMsQ0FBQztXQUVqRCxZQUFZIn0=