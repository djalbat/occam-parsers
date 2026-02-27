"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChildNodesParseTree;
    }
});
const _necessary = require("necessary");
const _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
const _horizontalBranch = /*#__PURE__*/ _interop_require_default(require("./horizontalBranch"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
class ChildNodesParseTree extends _verticalBranch.default {
    static fromChildNodesAndTokens(childNodes, tokens) {
        let childNodesParseTree = null;
        const childNodesLength = childNodes.length;
        if (childNodesLength > 0) {
            const childNodeParseTrees = childNodes.reduce((childNodeParseTrees, childNode)=>{
                const childNodeParseTree = childNode.asParseTree(tokens);
                childNodeParseTrees.push(childNodeParseTree);
                return childNodeParseTrees;
            }, []), childNodeParseTreesLength = childNodeParseTrees.length;
            if (childNodeParseTreesLength === 1) {
                const firstChildNodeParseTree = first(childNodeParseTrees);
                childNodesParseTree = firstChildNodeParseTree; ///
            } else {
                let firstVerticalBranchPosition, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
                childNodeParseTrees.forEach((childNodeParseTree, index)=>{
                    const childNodeParseTreeWidth = childNodeParseTree.getWidth(), childNodeParseTreeDepth = childNodeParseTree.getDepth();
                    if (index === 0) {
                        const firstChildNodeParseTree = childNodeParseTree, firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();
                        firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
                    }
                    if (index === childNodeParseTreesLength - 1) {
                        const lastChildNodeParseTree = childNodeParseTree, lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();
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
                const width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1, verticalBranchParseTree = _verticalBranch.default.fromWidth(width), horizontalBranchParseTree = _horizontalBranch.default.fromWidth(width), leftMarginWidth = firstVerticalBranchPosition, rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;
                verticalBranchParseTree.addLeftMargin(leftMarginWidth);
                verticalBranchParseTree.addRightMargin(rightMarginWidth);
                horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
                horizontalBranchParseTree.addRightMargin(rightMarginWidth);
                const verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), depth = childNodeParseTreesDepth; ///
                childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree, depth, verticalBranchPosition);
                childNodeParseTrees.forEach((childNodeParseTree, index)=>{
                    const childNodeParseTreeDepth = childNodeParseTree.getDepth(), clonedChildNodeParseTree = childNodeParseTree.clone();
                    if (index < childNodeParseTreesLength - 1) {
                        const rightMarginWidth = 1;
                        clonedChildNodeParseTree.addRightMargin(rightMarginWidth);
                    }
                    if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
                        const bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;
                        clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
                    }
                    childNodesParseTree.appendToRight(clonedChildNodeParseTree);
                });
                childNodesParseTree.appendToTop(horizontalBranchParseTree);
                childNodesParseTree.appendToTop(verticalBranchParseTree);
            }
        }
        return childNodesParseTree;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucykge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5wdXNoKGNoaWxkTm9kZVBhcnNlVHJlZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gZmlyc3QoY2hpbGROb2RlUGFyc2VUcmVlcyk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArIDEsXG4gICAgICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIC0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGg7XG5cbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICAgICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICAgICAgZGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGg7IC8vL1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENoaWxkTm9kZXNQYXJzZVRyZWUsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyIsImNoaWxkTm9kZXMiLCJ0b2tlbnMiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInB1c2giLCJjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCIsImZvckVhY2giLCJpbmRleCIsImNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCIsImdldERlcHRoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJtYXgiLCJ3aWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIkhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJsZWZ0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImRlcHRoIiwiZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSIsImNsb25lIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJhZGRCb3R0b21NYXJnaW4iLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7MkJBUFU7dUVBRUs7eUVBQ0U7Ozs7OztBQUV0QyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYztBQUVqQixNQUFNRiw0QkFBNEJHLHVCQUF1QjtJQUN0RSxPQUFPQyx3QkFBd0JDLFVBQVUsRUFBRUMsTUFBTSxFQUFFO1FBQ2pELElBQUlDLHNCQUFzQjtRQUUxQixNQUFNQyxtQkFBbUJILFdBQVdJLE1BQU07UUFFMUMsSUFBSUQsbUJBQW1CLEdBQUc7WUFDeEIsTUFBTUUsc0JBQXNCTCxXQUFXTSxNQUFNLENBQUMsQ0FBQ0QscUJBQXFCRTtnQkFDNUQsTUFBTUMscUJBQXFCRCxVQUFVRSxXQUFXLENBQUNSO2dCQUVqREksb0JBQW9CSyxJQUFJLENBQUNGO2dCQUV6QixPQUFPSDtZQUNULEdBQUcsRUFBRSxHQUNMTSw0QkFBNEJOLG9CQUFvQkQsTUFBTTtZQUU1RCxJQUFJTyw4QkFBOEIsR0FBRztnQkFDbkMsTUFBTUMsMEJBQTBCaEIsTUFBTVM7Z0JBRXRDSCxzQkFBc0JVLHlCQUEwQixHQUFHO1lBQ3JELE9BQU87Z0JBQ0wsSUFBSUMsNkJBQ0FDLDZCQUE2QixHQUM3QkMsMkJBQTJCLEdBQzNCQywyQkFBMkI7Z0JBRS9CWCxvQkFBb0JZLE9BQU8sQ0FBQyxDQUFDVCxvQkFBb0JVO29CQUMvQyxNQUFNQywwQkFBMEJYLG1CQUFtQlksUUFBUSxJQUNyREMsMEJBQTBCYixtQkFBbUJjLFFBQVE7b0JBRTNELElBQUlKLFVBQVUsR0FBRzt3QkFDZixNQUFNTiwwQkFBMEJKLG9CQUMxQmUsZ0RBQWdEWCx3QkFBd0JZLHlCQUF5Qjt3QkFFdkdYLDhCQUE4QlU7b0JBQ2hDO29CQUVBLElBQUlMLFVBQVVQLDRCQUE0QixHQUFHO3dCQUMzQyxNQUFNYyx5QkFBeUJqQixvQkFDekJrQiwrQ0FBK0NELHVCQUF1QkQseUJBQXlCO3dCQUVyR1YsOEJBQThCWTtvQkFDaEM7b0JBRUEsSUFBSVIsUUFBUVAsNEJBQTRCLEdBQUc7d0JBQ3pDRyw4QkFBOEJLO3dCQUM5QkwsOEJBQThCO3dCQUU5QkMsNEJBQTRCO29CQUM5QjtvQkFFQUEsNEJBQTRCSTtvQkFFNUJILDJCQUEyQlcsS0FBS0MsR0FBRyxDQUFDWiwwQkFBMEJLO2dCQUNoRTtnQkFFQSxNQUFNUSxRQUFRZiw2QkFBNkJELDhCQUE4QixHQUNuRWlCLDBCQUEwQmhDLHVCQUF1QixDQUFDaUMsU0FBUyxDQUFDRixRQUM1REcsNEJBQTRCQyx5QkFBeUIsQ0FBQ0YsU0FBUyxDQUFDRixRQUNoRUssa0JBQWtCckIsNkJBQ2xCc0IsbUJBQW1CcEIsMkJBQTJCYyxRQUFRSztnQkFFNURKLHdCQUF3Qk0sYUFBYSxDQUFDRjtnQkFDdENKLHdCQUF3Qk8sY0FBYyxDQUFDRjtnQkFDdkNILDBCQUEwQkksYUFBYSxDQUFDRjtnQkFDeENGLDBCQUEwQkssY0FBYyxDQUFDRjtnQkFFekMsTUFBTUcseUJBQXlCUix3QkFBd0JOLHlCQUF5QixJQUMxRWUsUUFBUXZCLDBCQUEwQixHQUFHO2dCQUUzQ2Qsc0JBQXNCSix1QkFBdUIsQ0FBQzBDLGtDQUFrQyxDQUFDN0MscUJBQXFCNEMsT0FBT0Q7Z0JBRTdHakMsb0JBQW9CWSxPQUFPLENBQUMsQ0FBQ1Qsb0JBQW9CVTtvQkFDL0MsTUFBTUcsMEJBQTBCYixtQkFBbUJjLFFBQVEsSUFDckRtQiwyQkFBMkJqQyxtQkFBbUJrQyxLQUFLO29CQUV6RCxJQUFJeEIsUUFBUVAsNEJBQTRCLEdBQUc7d0JBQ3pDLE1BQU13QixtQkFBbUI7d0JBRXpCTSx5QkFBeUJKLGNBQWMsQ0FBQ0Y7b0JBQzFDO29CQUVBLElBQUlkLDBCQUEwQkwsMEJBQTBCO3dCQUN0RCxNQUFNMkIsb0JBQW9CM0IsMkJBQTJCSzt3QkFFckRvQix5QkFBeUJHLGVBQWUsQ0FBQ0Q7b0JBQzNDO29CQUVBekMsb0JBQW9CMkMsYUFBYSxDQUFDSjtnQkFDcEM7Z0JBRUF2QyxvQkFBb0I0QyxXQUFXLENBQUNkO2dCQUVoQzlCLG9CQUFvQjRDLFdBQVcsQ0FBQ2hCO1lBQ2xDO1FBQ0Y7UUFFQSxPQUFPNUI7SUFDVDtBQUNGIn0=