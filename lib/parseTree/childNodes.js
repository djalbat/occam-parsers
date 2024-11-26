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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuaW1wb3J0IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vaG9yaXpvbnRhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzQW5kVG9rZW5zKGNoaWxkTm9kZXMsIHRva2Vucykge1xuICAgIGxldCBjaGlsZE5vZGVzUGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChjaGlsZE5vZGVQYXJzZVRyZWVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5wdXNoKGNoaWxkTm9kZVBhcnNlVHJlZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZXM7XG4gICAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gZmlyc3QoY2hpbGROb2RlUGFyc2VUcmVlcyk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKChjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2hpbGROb2Rlc1BhcnNlVHJlZSwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQYXJzZVRyZWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImZyb21DaGlsZE5vZGVzQW5kVG9rZW5zIiwiY2hpbGROb2RlcyIsInRva2VucyIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiY2hpbGROb2RlUGFyc2VUcmVlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwicHVzaCIsImNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSIsImZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIiwiY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIiwiZm9yRWFjaCIsImluZGV4IiwiY2hpbGROb2RlUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGFzdENoaWxkTm9kZVBhcnNlVHJlZSIsImxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsIndpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwibGVmdE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlIiwiY2xvbmUiLCJib3R0b21NYXJnaW5EZXB0aCIsImFkZEJvdHRvbU1hcmdpbiIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7cUVBRUs7dUVBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFTyxJQUFBLEFBQU1ELG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLFVBQVUsRUFBRUMsTUFBTTtnQkFDL0MsSUFBSUMsc0JBQXNCO2dCQUUxQixJQUFNQyxtQkFBbUJILFdBQVdJLE1BQU07Z0JBRTFDLElBQUlELG1CQUFtQixHQUFHO29CQUN4QixJQUFNRSxzQkFBc0JMLFdBQVdNLE1BQU0sQ0FBQyxTQUFDRCxxQkFBcUJFO3dCQUM1RCxJQUFNQyxxQkFBcUJELFVBQVVFLFdBQVcsQ0FBQ1I7d0JBRWpESSxvQkFBb0JLLElBQUksQ0FBQ0Y7d0JBRXpCLE9BQU9IO29CQUNULEdBQUcsRUFBRSxHQUNMTSw0QkFBNEJOLG9CQUFvQkQsTUFBTTtvQkFFNUQsSUFBSU8sOEJBQThCLEdBQUc7d0JBQ25DLElBQU1DLDBCQUEwQmYsTUFBTVE7d0JBRXRDSCxzQkFBc0JVLHlCQUEwQixHQUFHO29CQUNyRCxPQUFPO3dCQUNMLElBQUlDLDZCQUNBQyw2QkFBNkIsR0FDN0JDLDJCQUEyQixHQUMzQkMsMkJBQTJCO3dCQUUvQlgsb0JBQW9CWSxPQUFPLENBQUMsU0FBQ1Qsb0JBQW9CVTs0QkFDL0MsSUFBTUMsMEJBQTBCWCxtQkFBbUJZLFFBQVEsSUFDckRDLDBCQUEwQmIsbUJBQW1CYyxRQUFROzRCQUUzRCxJQUFJSixVQUFVLEdBQUc7Z0NBQ2YsSUFBTU4sMEJBQTBCSixvQkFDMUJlLGdEQUFnRFgsd0JBQXdCWSx5QkFBeUI7Z0NBRXZHWCw4QkFBOEJVOzRCQUNoQzs0QkFFQSxJQUFJTCxVQUFVUCw0QkFBNEIsR0FBRztnQ0FDM0MsSUFBTWMseUJBQXlCakIsb0JBQ3pCa0IsK0NBQStDRCx1QkFBdUJELHlCQUF5QjtnQ0FFckdWLDhCQUE4Qlk7NEJBQ2hDOzRCQUVBLElBQUlSLFFBQVFQLDRCQUE0QixHQUFHO2dDQUN6Q0csOEJBQThCSztnQ0FDOUJMLDhCQUE4QjtnQ0FFOUJDLDRCQUE0Qjs0QkFDOUI7NEJBRUFBLDRCQUE0Qkk7NEJBQzVCSCwyQkFBMkJXLEtBQUtDLEdBQUcsQ0FBQ1osMEJBQTBCSzt3QkFDaEU7d0JBRUEsSUFBTVEsUUFBUWYsNkJBQTZCRCw4QkFBOEIsR0FDbkVpQiwwQkFBMEJDLHVCQUF1QixDQUFDQyxTQUFTLENBQUNILFFBQzVESSw0QkFBNEJDLHlCQUF5QixDQUFDRixTQUFTLENBQUNILFFBQ2hFTSxrQkFBa0J0Qiw2QkFDbEJ1QixtQkFBbUJyQiwyQkFBMkJjLFFBQVFNO3dCQUU1REwsd0JBQXdCTyxhQUFhLENBQUNGO3dCQUN0Q0wsd0JBQXdCUSxjQUFjLENBQUNGO3dCQUN2Q0gsMEJBQTBCSSxhQUFhLENBQUNGO3dCQUN4Q0YsMEJBQTBCSyxjQUFjLENBQUNGO3dCQUV6QyxJQUFNRyx5QkFBeUJULHdCQUF3Qk4seUJBQXlCO3dCQUVoRnRCLHNCQUFzQjZCLHVCQUF1QixDQUFDUyxrQ0FBa0MsQ0FwRW5FNUMscUJBb0V5Rm9CLDBCQUEwQnVCO3dCQUVoSWxDLG9CQUFvQlksT0FBTyxDQUFDLFNBQUNULG9CQUFvQlU7NEJBQy9DLElBQU1HLDBCQUEwQmIsbUJBQW1CYyxRQUFRLElBQ3JEbUIsMkJBQTJCakMsbUJBQW1Ca0MsS0FBSzs0QkFFekQsSUFBSXhCLFFBQVFQLDRCQUE0QixHQUFHO2dDQUN6QyxJQUFNeUIsbUJBQW1CO2dDQUV6QksseUJBQXlCSCxjQUFjLENBQUNGOzRCQUMxQzs0QkFFQSxJQUFJZiwwQkFBMEJMLDBCQUEwQjtnQ0FDdEQsSUFBTTJCLG9CQUFvQjNCLDJCQUEyQks7Z0NBRXJEb0IseUJBQXlCRyxlQUFlLENBQUNEOzRCQUMzQzs0QkFFQXpDLG9CQUFvQjJDLGFBQWEsQ0FBQ0o7d0JBQ3BDO3dCQUVBdkMsb0JBQW9CNEMsV0FBVyxDQUFDYjt3QkFDaEMvQixvQkFBb0I0QyxXQUFXLENBQUNoQjtvQkFDbEM7Z0JBQ0Y7Z0JBRUEsT0FBTzVCO1lBQ1Q7OztXQS9GbUJOO0VBQTRCbUMsdUJBQXVCIn0=