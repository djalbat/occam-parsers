"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));
var _horizontalBranch = _interopRequireDefault(require("./horizontalBranch"));
var _array = require("../../utilities/array");
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
var ChildNodesParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(ChildNodesParseTree, VerticalBranchParseTree);
    function ChildNodesParseTree() {
        _classCallCheck(this, ChildNodesParseTree);
        return _possibleConstructorReturn(this, _getPrototypeOf(ChildNodesParseTree).apply(this, arguments));
    }
    _createClass(ChildNodesParseTree, null, [
        {
            key: "fromChildNodesAndTokens",
            value: function fromChildNodesAndTokens(childNodes, tokens) {
                var childNodesParseTree;
                var childNodeParseTrees = childNodes.reduce(function(childNodeParseTrees, childNode) {
                    var childNodeParseTree = childNode.asParseTree(tokens);
                    childNodeParseTrees.push(childNodeParseTree);
                    return childNodeParseTrees;
                }, []), childNodeParseTreesLength = childNodeParseTrees.length;
                if (childNodeParseTreesLength === 1) {
                    var firstChildNodeParseTree = (0, _array).first(childNodeParseTrees);
                    childNodesParseTree = firstChildNodeParseTree; ///
                } else {
                    var firstVerticalBranchPosition = undefined, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
                    childNodeParseTrees.forEach(function(childNodeParseTree, index) {
                        var childNodeParseTreeWidth = childNodeParseTree.getWidth(), childNodeParseTreeDepth = childNodeParseTree.getDepth();
                        if (index === 0) {
                            var firstChildNodeParseTree = childNodeParseTree, firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();
                            firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
                        }
                        if (index === childNodeParseTreesLength - 1) {
                            var lastChildNodeParseTree = childNodeParseTree, lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();
                            lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
                        }
                        if (index < childNodeParseTreesLength - 1) {
                            lastVerticalBranchPosition += childNodeParseTreeWidth;
                            lastVerticalBranchPosition += 1;
                            childNodeParseTreesWidth += 1;
                        }
                        childNodeParseTreesWidth += childNodeParseTreeWidth;
                        childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
                    });
                    var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1, verticalBranchParseTree = _verticalBranch.default.fromWidth(width), horizontalBranchParseTree = _horizontalBranch.default.fromWidth(width), leftMarginWidth = firstVerticalBranchPosition, rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;
                    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
                    verticalBranchParseTree.addRightMargin(rightMarginWidth);
                    horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
                    horizontalBranchParseTree.addRightMargin(rightMarginWidth);
                    var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();
                    childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree, childNodeParseTreesDepth, verticalBranchPosition);
                    childNodeParseTrees.forEach(function(childNodeParseTree, index) {
                        var childNodeParseTreeDepth = childNodeParseTree.getDepth(), clonedChildNodeParseTree = childNodeParseTree.clone();
                        if (index < childNodeParseTreesLength - 1) {
                            var rightMarginWidth = 1;
                            clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
                        }
                        if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
                            var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;
                            clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
                        }
                        childNodesParseTree.appendToRight(clonedChildNodeParseTree);
                    });
                    childNodesParseTree.appendToTop(horizontalBranchParseTree);
                    childNodesParseTree.appendToTop(verticalBranchParseTree);
                }
                return childNodesParseTree;
            }
        }
    ]);
    return ChildNodesParseTree;
}(_verticalBranch.default);
exports.default = ChildNodesParseTree;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL2NoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiZmlyc3QiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMiLCJjaGlsZE5vZGVzIiwidG9rZW5zIiwiY2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZVBhcnNlVHJlZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInB1c2giLCJjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCIsImZvckVhY2giLCJpbmRleCIsImNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCIsImdldERlcHRoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJtYXgiLCJ3aWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImxlZnRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSIsImNsb25lIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJhZGRCb3R0b21NYXJnaW4iLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXdCLEdBQWtCLENBQWxCLGVBQWtCO0FBQ2hCLEdBQW9CLENBQXBCLGlCQUFvQjtBQUVwQyxHQUF1QixDQUF2QixNQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhCLG1CQUFtQixpQkFBekIsUUFBUTtjQUFGLG1CQUFtQjthQUFuQixtQkFBbUI7OEJBQW5CLG1CQUFtQjtnRUFBbkIsbUJBQW1COztpQkFBbkIsbUJBQW1COztZQUMvQixHQUF1QixHQUF2Qix1QkFBdUI7bUJBQTlCLFFBQVEsQ0FBRCx1QkFBdUIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ2xELEdBQUcsQ0FBQyxtQkFBbUI7Z0JBRXZCLEdBQUssQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUCxtQkFBbUIsRUFBRSxTQUFTLEVBQUssQ0FBQztvQkFDM0UsR0FBSyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTTtvQkFFdkQsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtvQkFFM0MsTUFBTSxDQUFDLG1CQUFtQjtnQkFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUNMLHlCQUF5QixHQUFHLG1CQUFtQixDQUFDLE1BQU07Z0JBRTVELEVBQUUsRUFBRSx5QkFBeUIsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDcEMsR0FBSyxDQUFDLHVCQUF1QixPQWhCYixNQUF1QixRQWdCRCxtQkFBbUI7b0JBRXpELG1CQUFtQixH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