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
            key: "fromChildNodesTokensAndAbridged",
            value: function fromChildNodesTokensAndAbridged(childNodes, tokens, abridged) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5pbXBvcnQgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi9ob3Jpem9udGFsQnJhbmNoXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZE5vZGVzUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXNUb2tlbnNBbmRBYnJpZGdlZChjaGlsZE5vZGVzLCB0b2tlbnMsIGFicmlkZ2VkKSB7XG4gICAgbGV0IGNoaWxkTm9kZXNQYXJzZVRyZWU7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoKGNoaWxkTm9kZVBhcnNlVHJlZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLnB1c2goY2hpbGROb2RlUGFyc2VUcmVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGZpcnN0KGNoaWxkTm9kZVBhcnNlVHJlZXMpO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWU7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgbGFzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IDE7XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgd2lkdGggPSBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArIDEsXG4gICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2Rlc1Rva2Vuc0FuZEFicmlkZ2VkIiwiY2hpbGROb2RlcyIsInRva2VucyIsImFicmlkZ2VkIiwiY2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZVBhcnNlVHJlZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVQYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInB1c2giLCJjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUiLCJmaXJzdCIsImZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInVuZGVmaW5lZCIsImxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZSIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsIndpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibGVmdE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUV1QixJQUFBLGVBQWtCLGtDQUFsQixrQkFBa0IsRUFBQTtBQUNoQixJQUFBLGlC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