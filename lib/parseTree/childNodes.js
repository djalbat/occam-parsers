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
var _necessary = require("necessary");
var _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
var _horizontalBranch = /*#__PURE__*/ _interop_require_default(require("./horizontalBranch"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var first = _necessary.arrayUtilities.first;
var ChildNodesParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(ChildNodesParseTree, VerticalBranchParseTree);
    var _super = _create_super(ChildNodesParseTree);
    function ChildNodesParseTree() {
        _class_call_check(this, ChildNodesParseTree);
        return _super.apply(this, arguments);
    }
    _create_class(ChildNodesParseTree, null, [
        {
            key: "fromChildNodesAndTokens",
            value: function fromChildNodesAndTokens(childNodes, tokens) {
                var childNodesParseTree = null;
                var childNodesLength = childNodes.length;
                if (childNodesLength > 0) {
                    var childNodeParseTrees = childNodes.reduce(function(childNodeParseTrees, childNode) {
                        var childNodeParseTree = childNode.asParseTree(tokens);
                        childNodeParseTrees.push(childNodeParseTree);
                        return childNodeParseTrees;
                    }, []), childNodeParseTreesLength = childNodeParseTrees.length;
                    if (childNodeParseTreesLength === 1) {
                        var firstChildNodeParseTree = first(childNodeParseTrees);
                        childNodesParseTree = firstChildNodeParseTree; ///
                    } else {
                        var firstVerticalBranchPosition, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
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
                }
                return childNodesParseTree;
            }
        }
    ]);
    return ChildNodesParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucykge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5wdXNoKGNoaWxkTm9kZVBhcnNlVHJlZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gZmlyc3QoY2hpbGROb2RlUGFyc2VUcmVlcyk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQYXJzZVRyZWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21DaGlsZE5vZGVzQW5kVG9rZW5zIiwiY2hpbGROb2RlcyIsInRva2VucyIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlUGFyc2VUcmVlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwicHVzaCIsImNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZSIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsIndpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibGVmdE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVO3FFQUVLO3VFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxvQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLHdCQUF3QkMsVUFBVSxFQUFFQyxNQUFNO2dCQUMvQyxJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1DLG1CQUFtQkgsV0FBV0ksTUFBTTtnQkFFMUMsSUFBSUQsbUJBQW1CLEdBQUc7b0JBQ3hCLElBQU1FLHNCQUFzQkwsV0FBV00sTUFBTSxDQUFDLFNBQUNELHFCQUFxQkU7d0JBQzVELElBQU1DLHFCQUFxQkQsVUFBVUUsV0FBVyxDQUFDUjt3QkFFakRJLG9CQUFvQkssSUFBSSxDQUFDRjt3QkFFekIsT0FBT0g7b0JBQ1QsR0FBRyxFQUFFLEdBQ0xNLDRCQUE0Qk4sb0JBQW9CRCxNQUFNO29CQUU1RCxJQUFJTyw4QkFBOEIsR0FBRzt3QkFDbkMsSUFBTUMsMEJBQTBCZixNQUFNUTt3QkFFdENILHNCQUFzQlUseUJBQTBCLEdBQUc7b0JBQ3JELE9BQU87d0JBQ0wsSUFBSUMsNkJBQ0FDLDZCQUE2QixHQUM3QkMsMkJBQTJCLEdBQzNCQywyQkFBMkI7d0JBRS9CWCxvQkFBb0JZLE9BQU8sQ0FBQyxTQUFDVCxvQkFBb0JVOzRCQUMvQyxJQUFNQywwQkFBMEJYLG1CQUFtQlksUUFBUSxJQUNyREMsMEJBQTBCYixtQkFBbUJjLFFBQVE7NEJBRTNELElBQUlKLFVBQVUsR0FBRztnQ0FDZixJQUFNTiwwQkFBMEJKLG9CQUMxQmUsZ0RBQWdEWCx3QkFBd0JZLHlCQUF5QjtnQ0FFdkdYLDhCQUE4QlU7NEJBQ2hDOzRCQUVBLElBQUlMLFVBQVVQLDRCQUE0QixHQUFHO2dDQUMzQyxJQUFNYyx5QkFBeUJqQixvQkFDekJrQiwrQ0FBK0NELHVCQUF1QkQseUJBQXlCO2dDQUVyR1YsOEJBQThCWTs0QkFDaEM7NEJBRUEsSUFBSVIsUUFBUVAsNEJBQTRCLEdBQUc7Z0NBQ3pDRyw4QkFBOEJLO2dDQUM5QkwsOEJBQThCO2dDQUU5QkMsNEJBQTRCOzRCQUM5Qjs0QkFFQUEsNEJBQTRCSTs0QkFDNUJILDJCQUEyQlcsS0FBS0MsR0FBRyxDQUFDWiwwQkFBMEJLO3dCQUNoRTt3QkFFQSxJQUFNUSxRQUFRZiw2QkFBNkJELDhCQUE4QixHQUNuRWlCLDBCQUEwQkMsdUJBQXVCLENBQUNDLFNBQVMsQ0FBQ0gsUUFDNURJLDRCQUE0QkMseUJBQXlCLENBQUNGLFNBQVMsQ0FBQ0gsUUFDaEVNLGtCQUFrQnRCLDZCQUNsQnVCLG1CQUFtQnJCLDJCQUEyQmMsUUFBUU07d0JBRTVETCx3QkFBd0JPLGFBQWEsQ0FBQ0Y7d0JBQ3RDTCx3QkFBd0JRLGNBQWMsQ0FBQ0Y7d0JBQ3ZDSCwwQkFBMEJJLGFBQWEsQ0FBQ0Y7d0JBQ3hDRiwwQkFBMEJLLGNBQWMsQ0FBQ0Y7d0JBRXpDLElBQU1HLHlCQUF5QlQsd0JBQXdCTix5QkFBeUI7d0JBRWhGdEIsc0JBQXNCNkIsdUJBQXVCLENBQUNTLGtDQUFrQyxDQXBFbkU1QyxxQkFvRXlGb0IsMEJBQTBCdUI7d0JBRWhJbEMsb0JBQW9CWSxPQUFPLENBQUMsU0FBQ1Qsb0JBQW9CVTs0QkFDL0MsSUFBTUcsMEJBQTBCYixtQkFBbUJjLFFBQVEsSUFDckRtQiwyQkFBMkJqQyxtQkFBbUJrQyxLQUFLOzRCQUV6RCxJQUFJeEIsUUFBUVAsNEJBQTRCLEdBQUc7Z0NBQ3pDLElBQU15QixtQkFBbUI7Z0NBRXpCSyx5QkFBeUJILGNBQWMsQ0FBQ0Y7NEJBQzFDOzRCQUVBLElBQUlmLDBCQUEwQkwsMEJBQTBCO2dDQUN0RCxJQUFNMkIsb0JBQW9CM0IsMkJBQTJCSztnQ0FFckRvQix5QkFBeUJHLGVBQWUsQ0FBQ0Q7NEJBQzNDOzRCQUVBekMsb0JBQW9CMkMsYUFBYSxDQUFDSjt3QkFDcEM7d0JBRUF2QyxvQkFBb0I0QyxXQUFXLENBQUNiO3dCQUNoQy9CLG9CQUFvQjRDLFdBQVcsQ0FBQ2hCO29CQUNsQztnQkFDRjtnQkFFQSxPQUFPNUI7WUFDVDs7O1dBL0ZtQk47RUFBNEJtQyx1QkFBdUIifQ==