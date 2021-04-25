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
var ChildNodesParseTree = function(VerticalBranchParseTree) {
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
                var childNodeParseTrees = childNodes.reduce(function(childNodeParseTrees1, childNode) {
                    var childNodeParseTree = childNode.asParseTree(tokens);
                    childNodeParseTrees1.push(childNodeParseTree);
                    return childNodeParseTrees1;
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
                            var rightMarginWidth1 = 1;
                            clonedChildNodeParseTree.addRightMargin(rightMarginWidth1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL2NoaWxkTm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucykge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLnB1c2goY2hpbGROb2RlUGFyc2VUcmVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgbGFzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IDE7XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgd2lkdGggPSBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArIDEsXG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFd0IsZUFBa0I7SUFDaEIsaUJBQW9CO0lBRXBDLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsbUJBQW1CO2NBQW5CLG1CQUFtQjthQUFuQixtQkFBbUI7OEJBQW5CLG1CQUFtQjtnRUFBbkIsbUJBQW1COztpQkFBbkIsbUJBQW1COztZQUMvQixHQUF1QixHQUF2Qix1QkFBdUI7NEJBQXZCLHVCQUF1QixD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