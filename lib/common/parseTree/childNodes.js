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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL2NoaWxkTm9kZXMuanMiXSwibmFtZXMiOlsiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiZmlyc3QiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMiLCJjaGlsZE5vZGVzIiwidG9rZW5zIiwiY2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZVBhcnNlVHJlZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInB1c2giLCJjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCIsImZvckVhY2giLCJpbmRleCIsImNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCIsImdldERlcHRoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJtYXgiLCJ3aWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImxlZnRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSIsImNsb25lIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJhZGRCb3R0b21NYXJnaW4iLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXdCLEdBQWtCLENBQWxCLGVBQWtCO0FBQ2hCLEdBQW9CLENBQXBCLGlCQUFvQjtBQUVwQyxHQUF1QixDQUF2QixNQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXhCLG1CQUFtQixpQkFBekIsUUFBUTtjQUFGLG1CQUFtQjthQUFuQixtQkFBbUI7OEJBQW5CLG1CQUFtQjtnRUFBbkIsbUJBQW1COztpQkFBbkIsbUJBQW1COztZQUMvQixHQUF1QixFQUF2QixDQUF1QjttQkFBOUIsUUFBUSxDQUFELHVCQUF1QixDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDbEQsR0FBRyxDQUFDLG1CQUFtQjtnQkFFdkIsR0FBSyxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFQLG1CQUFtQixFQUFFLFNBQVMsRUFBSyxDQUFDO29CQUMzRSxHQUFLLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNO29CQUV2RCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCO29CQUUzQyxNQUFNLENBQUMsbUJBQW1CO2dCQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQ0wseUJBQXlCLEdBQUcsbUJBQW1CLENBQUMsTUFBTTtnQkFFNUQsRUFBRSxFQUFFLHlCQUF5QixLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNwQyxHQUFLLENBQUMsdUJBQXVCLE9BaEJiLE1BQXVCLFFBZ0JELG1CQUFtQjtvQkFFekQsbUJBQW1CLEdB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b0JBQzVELENBQUM7b0JBRUQsbUJBQW1CLENBQUMsV0FBVyxDQUFDLHlCQUF5QjtvQkFDekQsbUJBQW1CLENBQUMsV0FBVyxDQUFDLHVCQUF1QjtnQkFDekQsQ0FBQztnQkFFRCxNQUFNLENBQUMsbUJBQW1CO1lBQzVCLENBQUM7OztXQTNGa0IsbUJBQW1CO0VBTEosZUFBa0I7a0JBS2pDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcbmltcG9ydCBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL2hvcml6b250YWxCcmFuY2hcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkTm9kZXNQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyhjaGlsZE5vZGVzLCB0b2tlbnMpIHtcbiAgICBsZXQgY2hpbGROb2Rlc1BhcnNlVHJlZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgoY2hpbGROb2RlUGFyc2VUcmVlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5wdXNoKGNoaWxkTm9kZVBhcnNlVHJlZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBmaXJzdChjaGlsZE5vZGVQYXJzZVRyZWVzKTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB1bmRlZmluZWQsXG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gMDtcblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICAgIGNvbnN0IHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENoaWxkTm9kZXNQYXJzZVRyZWUsIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUuY2xvbmUoKTtcblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgY29uc3QgYm90dG9tTWFyZ2luRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggLSBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSk7XG4gICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuIl19