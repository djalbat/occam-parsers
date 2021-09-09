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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiUnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUV3QixHQUFrQixDQUFsQixlQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLGlCQUFpQixpQkFBdkIsUUFBUTtjQUFGLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztpQkFBakIsaUJBQWlCOztZQUM3QixHQUE0QixHQUE1Qiw0QkFBNEI7bUJBQW5DLFFBQVEsQ0FBRCw0QkFBNEIsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQzVELEdBQUssQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFdBQVcsSUFDdEMsWUFBWSxHQUFHLHdDQUF3QyxDQUFDLGVBQWUsRUFBRSxNQUFNLEdBQy9FLE1BQU0sTUFBaUIsTUFBWSxDQUF2QixRQUFRLEVBQWdCLE1BQUEsQ0FBYixZQUFZLEdBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUM1Qiw0QkFBNEIsR0FBRyxZQUFZLEVBQzNDLHVCQUF1QixHQVRHLGVBQWtCLFNBU00sU0FBUyxDQUFDLDRCQUE0QixHQUN4RixzQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQyx5QkFBeUIsSUFDMUUsaUJBQWlCLEdBWFMsZUFBa0IsU0FXQSxtQ0FBbUMsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsc0JBQXNCO2dCQUV2SSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsdUJBQXVCO2dCQUVyRCxNQUFNLENBQUMsaUJBQWlCO1lBQzFCLENBQUM7OztXQWRrQixpQkFBaUI7RUFGRixlQUFrQjtrQkFFakMsaUJBQWlCO1NBaUI3Qix3Q0FBd0MsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDMUUsR0FBSyxDQUFDLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyx3QkFBd0IsSUFDaEUsb0JBQW9CLEdBQUcsZUFBZSxDQUFDLHVCQUF1QixJQUM5RCwwQkFBMEIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUNqRSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixHQUMvRCxZQUFZLEdBQUksMEJBQTBCLEtBQUsseUJBQXlCLElBQ3ZELENBQUMsRUFBZ0MsTUFBeUIsQ0FBdkQsMEJBQTBCLEdBQUMsQ0FBQyxHQUE0QixNQUFDLENBQTNCLHlCQUF5QixHQUFDLENBQUMsTUFDMUQsQ0FBQyxFQUE2QixNQUFDLENBQTVCLDBCQUEwQixHQUFDLENBQUM7SUFFeEQsTUFBTSxDQUFDLFlBQVk7QUFDckIsQ0FBQyJ9