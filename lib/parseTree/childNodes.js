"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));
var _horizontalBranch = _interopRequireDefault(require("./horizontalBranch"));
var _array = require("../utilities/array");
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var ChildNodesParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(ChildNodesParseTree, VerticalBranchParseTree);
    var _super = _createSuper(ChildNodesParseTree);
    function ChildNodesParseTree() {
        _classCallCheck(this, ChildNodesParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(ChildNodesParseTree, null, [
        {
            key: "fromChildNodesAndTokens",
            value: function fromChildNodesAndTokens(childNodes, tokens, abridged) {
                var childNodesParseTree;
                var childNodeParseTrees1 = childNodes.reduce(function(childNodeParseTrees, childNode) {
                    var childNodeParseTree = childNode.asParseTree(tokens, abridged);
                    childNodeParseTrees.push(childNodeParseTree);
                    return childNodeParseTrees;
                }, []), childNodeParseTreesLength = childNodeParseTrees1.length;
                if (childNodeParseTreesLength === 1) {
                    var firstChildNodeParseTree = (0, _array).first(childNodeParseTrees1);
                    childNodesParseTree = firstChildNodeParseTree; ///
                } else {
                    var firstVerticalBranchPosition = undefined, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
                    childNodeParseTrees1.forEach(function(childNodeParseTree, index) {
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
                    var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1, verticalBranchParseTree = _verticalBranch.default.fromWidth(width), horizontalBranchParseTree = _horizontalBranch.default.fromWidth(width), leftMarginWidth = firstVerticalBranchPosition, rightMarginWidth1 = childNodeParseTreesWidth - width - leftMarginWidth;
                    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
                    verticalBranchParseTree.addRightMargin(rightMarginWidth1);
                    horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
                    horizontalBranchParseTree.addRightMargin(rightMarginWidth1);
                    var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();
                    childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree, childNodeParseTreesDepth, verticalBranchPosition);
                    childNodeParseTrees1.forEach(function(childNodeParseTree, index) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5pbXBvcnQgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi9ob3Jpem9udGFsQnJhbmNoXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZE5vZGVzUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zLCBhYnJpZGdlZCkge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcblxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5wdXNoKGNoaWxkTm9kZVBhcnNlVHJlZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWVzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBmaXJzdChjaGlsZE5vZGVQYXJzZVRyZWVzKTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB1bmRlZmluZWQsXG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gMDtcblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICAgIGNvbnN0IHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENoaWxkTm9kZXNQYXJzZVRyZWUsIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaCgoY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUuY2xvbmUoKTtcblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgY29uc3QgYm90dG9tTWFyZ2luRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggLSBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSk7XG4gICAgICB9KTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMiLCJjaGlsZE5vZGVzIiwidG9rZW5zIiwiYWJyaWRnZWQiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiY2hpbGROb2RlUGFyc2VUcmVlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwicHVzaCIsImNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0IiwiZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidW5kZWZpbmVkIiwibGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgiLCJmb3JFYWNoIiwiaW5kZXgiLCJjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCIsImdldFdpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIkhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJsZWZ0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUiLCJjbG9uZSIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYWRkQm90dG9tTWFyZ2luIiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvVG9wIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRXVCLElBQUEsZUFBa0Isa0NBQWxCLGtCQUFrQixFQUFBO0FBQ2hCLElBQUEsaUJBQW9CLGtDQUFwQixvQkFB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