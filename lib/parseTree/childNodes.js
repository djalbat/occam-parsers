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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var first = _necessary.arrayUtilities.first;
var ChildNodesParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(ChildNodesParseTree, VerticalBranchParseTree);
    function ChildNodesParseTree() {
        _class_call_check(this, ChildNodesParseTree);
        return _call_super(this, ChildNodesParseTree, arguments);
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
                        var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), depth = childNodeParseTreesDepth; ///
                        childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree, depth, verticalBranchPosition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucykge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5wdXNoKGNoaWxkTm9kZVBhcnNlVHJlZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gZmlyc3QoY2hpbGROb2RlUGFyc2VUcmVlcyk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArIDEsXG4gICAgICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIC0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGg7XG5cbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICAgICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICAgICAgZGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGg7IC8vL1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENoaWxkTm9kZXNQYXJzZVRyZWUsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMiLCJjaGlsZE5vZGVzIiwidG9rZW5zIiwiY2hpbGROb2Rlc1BhcnNlVHJlZSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVzIiwicmVkdWNlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlUGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJwdXNoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlIiwiZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGgiLCJjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgiLCJmb3JFYWNoIiwiaW5kZXgiLCJjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCIsImdldFdpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsImZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJsYXN0Q2hpbGROb2RlUGFyc2VUcmVlIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIkhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJsZWZ0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImRlcHRoIiwiZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSIsImNsb25lIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJhZGRCb3R0b21NYXJnaW4iLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBVO3FFQUVLO3VFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNRCxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCQyxVQUFVLEVBQUVDLE1BQU07Z0JBQy9DLElBQUlDLHNCQUFzQjtnQkFFMUIsSUFBTUMsbUJBQW1CSCxXQUFXSSxNQUFNO2dCQUUxQyxJQUFJRCxtQkFBbUIsR0FBRztvQkFDeEIsSUFBTUUsc0JBQXNCTCxXQUFXTSxNQUFNLENBQUMsU0FBQ0QscUJBQXFCRTt3QkFDNUQsSUFBTUMscUJBQXFCRCxVQUFVRSxXQUFXLENBQUNSO3dCQUVqREksb0JBQW9CSyxJQUFJLENBQUNGO3dCQUV6QixPQUFPSDtvQkFDVCxHQUFHLEVBQUUsR0FDTE0sNEJBQTRCTixvQkFBb0JELE1BQU07b0JBRTVELElBQUlPLDhCQUE4QixHQUFHO3dCQUNuQyxJQUFNQywwQkFBMEJmLE1BQU1RO3dCQUV0Q0gsc0JBQXNCVSx5QkFBMEIsR0FBRztvQkFDckQsT0FBTzt3QkFDTCxJQUFJQyw2QkFDQUMsNkJBQTZCLEdBQzdCQywyQkFBMkIsR0FDM0JDLDJCQUEyQjt3QkFFL0JYLG9CQUFvQlksT0FBTyxDQUFDLFNBQUNULG9CQUFvQlU7NEJBQy9DLElBQU1DLDBCQUEwQlgsbUJBQW1CWSxRQUFRLElBQ3JEQywwQkFBMEJiLG1CQUFtQmMsUUFBUTs0QkFFM0QsSUFBSUosVUFBVSxHQUFHO2dDQUNmLElBQU1OLDBCQUEwQkosb0JBQzFCZSxnREFBZ0RYLHdCQUF3QlkseUJBQXlCO2dDQUV2R1gsOEJBQThCVTs0QkFDaEM7NEJBRUEsSUFBSUwsVUFBVVAsNEJBQTRCLEdBQUc7Z0NBQzNDLElBQU1jLHlCQUF5QmpCLG9CQUN6QmtCLCtDQUErQ0QsdUJBQXVCRCx5QkFBeUI7Z0NBRXJHViw4QkFBOEJZOzRCQUNoQzs0QkFFQSxJQUFJUixRQUFRUCw0QkFBNEIsR0FBRztnQ0FDekNHLDhCQUE4Qks7Z0NBQzlCTCw4QkFBOEI7Z0NBRTlCQyw0QkFBNEI7NEJBQzlCOzRCQUVBQSw0QkFBNEJJOzRCQUU1QkgsMkJBQTJCVyxLQUFLQyxHQUFHLENBQUNaLDBCQUEwQks7d0JBQ2hFO3dCQUVBLElBQU1RLFFBQVFmLDZCQUE2QkQsOEJBQThCLEdBQ25FaUIsMEJBQTBCQyx1QkFBdUIsQ0FBQ0MsU0FBUyxDQUFDSCxRQUM1REksNEJBQTRCQyx5QkFBeUIsQ0FBQ0YsU0FBUyxDQUFDSCxRQUNoRU0sa0JBQWtCdEIsNkJBQ2xCdUIsbUJBQW1CckIsMkJBQTJCYyxRQUFRTTt3QkFFNURMLHdCQUF3Qk8sYUFBYSxDQUFDRjt3QkFDdENMLHdCQUF3QlEsY0FBYyxDQUFDRjt3QkFDdkNILDBCQUEwQkksYUFBYSxDQUFDRjt3QkFDeENGLDBCQUEwQkssY0FBYyxDQUFDRjt3QkFFekMsSUFBTUcseUJBQXlCVCx3QkFBd0JOLHlCQUF5QixJQUMxRWdCLFFBQVF4QiwwQkFBMEIsR0FBRzt3QkFFM0NkLHNCQUFzQjZCLHVCQUF1QixDQUFDVSxrQ0FBa0MsQ0F0RW5FN0MscUJBc0V5RjRDLE9BQU9EO3dCQUU3R2xDLG9CQUFvQlksT0FBTyxDQUFDLFNBQUNULG9CQUFvQlU7NEJBQy9DLElBQU1HLDBCQUEwQmIsbUJBQW1CYyxRQUFRLElBQ3JEb0IsMkJBQTJCbEMsbUJBQW1CbUMsS0FBSzs0QkFFekQsSUFBSXpCLFFBQVFQLDRCQUE0QixHQUFHO2dDQUN6QyxJQUFNeUIsbUJBQW1CO2dDQUV6Qk0seUJBQXlCSixjQUFjLENBQUNGOzRCQUMxQzs0QkFFQSxJQUFJZiwwQkFBMEJMLDBCQUEwQjtnQ0FDdEQsSUFBTTRCLG9CQUFvQjVCLDJCQUEyQks7Z0NBRXJEcUIseUJBQXlCRyxlQUFlLENBQUNEOzRCQUMzQzs0QkFFQTFDLG9CQUFvQjRDLGFBQWEsQ0FBQ0o7d0JBQ3BDO3dCQUVBeEMsb0JBQW9CNkMsV0FBVyxDQUFDZDt3QkFFaEMvQixvQkFBb0I2QyxXQUFXLENBQUNqQjtvQkFDbEM7Z0JBQ0Y7Z0JBRUEsT0FBTzVCO1lBQ1Q7OztXQWxHbUJOO0VBQTRCbUMsdUJBQXVCIn0=