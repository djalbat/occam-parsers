"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _ruleName = _interopRequireDefault(require("./ruleName"));
var _childNodes = _interopRequireDefault(require("./childNodes"));
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
var NonTerminalNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(NonTerminalNodeParseTree, VerticalBranchParseTree);
    function NonTerminalNodeParseTree() {
        _classCallCheck(this, NonTerminalNodeParseTree);
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalNodeParseTree).apply(this, arguments));
    }
    _createClass(NonTerminalNodeParseTree, null, [
        {
            key: "fromNonTerminalNodeAndTokens",
            value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
                var childNodes = nonTerminalNode.getChildNodes(), ruleNameParseTree = _ruleName.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), childNodesParseTree = _childNodes.default.fromChildNodesAndTokens(childNodes, tokens);
                var ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
                var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(), verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;
                var leftMarginWidth = undefined;
                if (false) {
                ///
                } else if (verticalBranchPositionsDifference < 0) {
                    leftMarginWidth = -verticalBranchPositionsDifference;
                    ruleNameParseTree.addLeftMargin(leftMarginWidth);
                } else if (verticalBranchPositionsDifference > 0) {
                    leftMarginWidth = +verticalBranchPositionsDifference;
                    childNodesParseTree.addLeftMargin(leftMarginWidth);
                }
                var ruleNameParseTreeWidth = ruleNameParseTree.getWidth(), childNodesParseTreeWidth = childNodesParseTree.getWidth(), widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;
                var rightMarginWidth = undefined;
                if (false) {
                ///
                } else if (widthsDifference < 0) {
                    rightMarginWidth = -widthsDifference;
                    ruleNameParseTree.addRightMargin(rightMarginWidth);
                } else if (widthsDifference > 0) {
                    rightMarginWidth = +widthsDifference;
                    childNodesParseTree.addRightMargin(rightMarginWidth);
                }
                ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
                var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(), nonTerminalNodeParseTreeDepth = ruleNameParseTreeDepth, verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, nonTerminalNodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, nonTerminalNodeParseTreeDepth, verticalBranchPosition);
                nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
                nonTerminalNodeParseTree.appendToBottom(childNodesParseTree);
                return nonTerminalNodeParseTree;
            }
        }
    ]);
    return NonTerminalNodeParseTree;
}(_verticalBranch.default);
exports.default = NonTerminalNodeParseTree;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnNlVHJlZSIsIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiY2hpbGROb2Rlc1BhcnNlVHJlZSIsImZyb21DaGlsZE5vZGVzQW5kVG9rZW5zIiwicnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIiwibGVmdE1hcmdpbldpZHRoIiwidW5kZWZpbmVkIiwiYWRkTGVmdE1hcmdpbiIsInJ1bGVOYW1lUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCIsIndpZHRoc0RpZmZlcmVuY2UiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJydWxlTmFtZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWVEZXB0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvQm90dG9tIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVrQixHQUFZLENBQVosU0FBWTtBQUNWLEdBQWMsQ0FBZCxXQUFjO0FBQ1YsR0FBa0IsQ0FBbEIsZUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQyx3QkFBd0IsaUJBQTlCLFFBQVE7Y0FBRix3QkFBd0I7YUFBeEIsd0JBQXdCOzhCQUF4Qix3QkFBd0I7Z0VBQXhCLHdCQUF3Qjs7aUJBQXhCLHdCQUF3Qjs7WUFDcEMsR0FBNEIsR0FBNUIsNEJBQTRCO21CQUFuQyxRQUFRLENBQUQsNEJBQTRCLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUM1RCxHQUFLLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxhQUFhLElBQzFDLGlCQUFpQixHQVBHLFNBQVksU0FPTSw0QkFBNEIsQ0FBQyxlQUFlLEVBQUUsTUFBTSxHQUMxRixtQkFBbUIsR0FQRyxXQUFjLFNBT00sdUJBQXVCLENBQUMsVUFBVSxFQUFFLE1BQU07Z0JBRTFGLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxpQkFBaUIsQ0FBQyx5QkFBeUI7Z0JBRXpGLEdBQUssQ0FBQyx5Q0FBeUMsR0FBRyxtQkFBbUIsQ0FBQyx5QkFBeUIsSUFDekYsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcseUNBQXlDO2dCQUU3SCxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVM7Z0JBRS9CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFDVixFQUFHLEFBQUgsQ0FBRztnQkFDTCxDQUFDLE1BQU0sRUFBRSxFQUFFLGlDQUFpQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNqRCxlQUFlLElBQUksaUNBQWlDO29CQUVwRCxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZUFBZTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsRUFBRSxpQ0FBaUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDakQsZUFBZSxJQUFJLGlDQUFpQztvQkFFcEQsbUJBQW1CLENBQUMsYUFBYSxDQUFDLGVBQWU7Z0JBQ25ELENBQUM7Z0JBRUQsR0FBSyxDQUFDLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsSUFDbkQsd0JBQXdCLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxJQUN2RCxnQkFBZ0IsR0FBRyxzQkFBc0IsR0FBRyx3QkFBd0I7Z0JBRTFFLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTO2dCQUVoQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQ1YsRUFBRyxBQUFILENBQUc7Z0JBQ0wsQ0FBQyxNQUFNLEVBQUUsRUFBRSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDaEMsZ0JBQWdCLElBQUksZ0JBQWdCO29CQUVwQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO2dCQUNuRCxDQUFDLE1BQU0sRUFBRSxFQUFFLGdCQUFnQixHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNoQyxnQkFBZ0IsSUFBSSxnQkFBZ0I7b0JBRXBDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0I7Z0JBQ3JELENBQUM7Z0JBRUQsdUNBQXVDLEdBQUcsaUJBQWlCLENBQUMseUJBQXlCO2dCQUVyRixHQUFLLENBQUMsc0JBQXNCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxJQUNuRCw2QkFBNkIsR0FBRyxzQkFBc0IsRUFDdEQsc0JBQXNCLEdBQUcsdUNBQXVDLEVBQ2hFLHdCQUF3QixHQWxERSxlQUFrQixTQWtETyxrQ0FBa0MsQ0FBQyx3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0I7Z0JBRTNLLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxpQkFBaUI7Z0JBQ3hELHdCQUF3QixDQUFDLGNBQWMsQ0FBQyxtQkFBbUI7Z0JBRTNELE1BQU0sQ0FBQyx3QkFBd0I7WUFDakMsQ0FBQzs7O1dBdERrQix3QkFBd0I7RUFGVCxlQUFrQjtrQkFFakMsd0JBQXdCIn0=