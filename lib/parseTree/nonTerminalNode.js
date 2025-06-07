"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNodeParseTree;
    }
});
var _ruleName = /*#__PURE__*/ _interop_require_default(require("./ruleName"));
var _childNodes = /*#__PURE__*/ _interop_require_default(require("./childNodes"));
var _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
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
var NonTerminalNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(NonTerminalNodeParseTree, VerticalBranchParseTree);
    function NonTerminalNodeParseTree() {
        _class_call_check(this, NonTerminalNodeParseTree);
        return _call_super(this, NonTerminalNodeParseTree, arguments);
    }
    _create_class(NonTerminalNodeParseTree, null, [
        {
            key: "fromNonTerminalNodeAndTokens",
            value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
                var nonTerminalNodeParseTree;
                var childNodes = nonTerminalNode.getChildNodes(), ruleNameParseTree = _ruleName.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), childNodesParseTree = _childNodes.default.fromChildNodesAndTokens(childNodes, tokens);
                if (childNodesParseTree === null) {
                    var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(), ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition(), verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, depth = ruleNameParseTreeDepth; ///
                    nonTerminalNodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, depth, verticalBranchPosition);
                    nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
                } else {
                    var ruleNameParseTreeVerticalBranchPosition1 = ruleNameParseTree.getVerticalBranchPosition();
                    var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(), verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition1 - childNodesParseTreeVerticalBranchPosition;
                    var leftMarginWidth;
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
                    var rightMarginWidth;
                    if (false) {
                    ///
                    } else if (widthsDifference < 0) {
                        rightMarginWidth = -widthsDifference;
                        ruleNameParseTree.addRightMargin(rightMarginWidth);
                    } else if (widthsDifference > 0) {
                        rightMarginWidth = +widthsDifference;
                        childNodesParseTree.addRightMargin(rightMarginWidth);
                    }
                    ruleNameParseTreeVerticalBranchPosition1 = ruleNameParseTree.getVerticalBranchPosition();
                    var ruleNameParseTreeDepth1 = ruleNameParseTree.getDepth(), verticalBranchPosition1 = ruleNameParseTreeVerticalBranchPosition1, depth1 = ruleNameParseTreeDepth1; ///
                    nonTerminalNodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, depth1, verticalBranchPosition1);
                    nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
                    nonTerminalNodeParseTree.appendToBottom(childNodesParseTree);
                }
                return nonTerminalNodeParseTree;
            }
        }
    ]);
    return NonTerminalNodeParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU5hbWVQYXJzZVRyZWUgZnJvbSBcIi4vcnVsZU5hbWVcIjtcbmltcG9ydCBDaGlsZE5vZGVzUGFyc2VUcmVlIGZyb20gXCIuL2NoaWxkTm9kZXNcIjtcbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gUnVsZU5hbWVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IENoaWxkTm9kZXNQYXJzZVRyZWUuZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMoY2hpbGROb2RlcywgdG9rZW5zKTtcblxuICAgIGlmIChjaGlsZE5vZGVzUGFyc2VUcmVlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnNlVHJlZURlcHRoID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0RGVwdGgoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZURlcHRoOyAvLy9cblxuICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQocnVsZU5hbWVQYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICBjb25zdCBjaGlsZE5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGNoaWxkTm9kZXNQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlID0gcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gY2hpbGROb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG5cbiAgICAgIGxldCBsZWZ0TWFyZ2luV2lkdGg7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSAtdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlO1xuXG4gICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICAgIH0gZWxzZSBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlID4gMCkge1xuICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSArdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlO1xuXG4gICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBydWxlTmFtZVBhcnNlVHJlZVdpZHRoID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHdpZHRoc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVdpZHRoIC0gY2hpbGROb2Rlc1BhcnNlVHJlZVdpZHRoO1xuXG4gICAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aDtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgICByaWdodE1hcmdpbldpZHRoID0gLXdpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSArd2lkdGhzRGlmZmVyZW5jZTtcblxuICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgICBkZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGg7IC8vL1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChydWxlTmFtZVBhcnNlVHJlZSk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbShjaGlsZE5vZGVzUGFyc2VUcmVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWVQYXJzZVRyZWUiLCJSdWxlTmFtZVBhcnNlVHJlZSIsImNoaWxkTm9kZXNQYXJzZVRyZWUiLCJDaGlsZE5vZGVzUGFyc2VUcmVlIiwiZnJvbUNoaWxkTm9kZXNBbmRUb2tlbnMiLCJydWxlTmFtZVBhcnNlVHJlZURlcHRoIiwiZ2V0RGVwdGgiLCJydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImRlcHRoIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9SaWdodCIsImNoaWxkTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIiwibGVmdE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsInJ1bGVOYW1lUGFyc2VUcmVlV2lkdGgiLCJnZXRXaWR0aCIsImNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCIsIndpZHRoc0RpZmZlcmVuY2UiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJhcHBlbmRUb0JvdHRvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSlM7aUVBQ0U7cUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLGVBQWUsRUFBRUMsTUFBTTtnQkFDekQsSUFBSUM7Z0JBRUosSUFBTUMsYUFBYUgsZ0JBQWdCSSxhQUFhLElBQzFDQyxvQkFBb0JDLGlCQUFpQixDQUFDUCw0QkFBNEIsQ0FBQ0MsaUJBQWlCQyxTQUNwRk0sc0JBQXNCQyxtQkFBbUIsQ0FBQ0MsdUJBQXVCLENBQUNOLFlBQVlGO2dCQUVwRixJQUFJTSx3QkFBd0IsTUFBTTtvQkFDaEMsSUFBTUcseUJBQXlCTCxrQkFBa0JNLFFBQVEsSUFDbkRDLDBDQUEwQ1Asa0JBQWtCUSx5QkFBeUIsSUFDckZDLHlCQUF5QkYseUNBQ3pCRyxRQUFRTCx3QkFBd0IsR0FBRztvQkFFekNSLDJCQUEyQmMsdUJBQXVCLENBQUNDLGtDQUFrQyxDQWR0RW5CLDBCQWNpR2lCLE9BQU9EO29CQUV2SFoseUJBQXlCZ0IsYUFBYSxDQUFDYjtnQkFDekMsT0FBTztvQkFDTCxJQUFJTywyQ0FBMENQLGtCQUFrQlEseUJBQXlCO29CQUV6RixJQUFNTSw0Q0FBNENaLG9CQUFvQk0seUJBQXlCLElBQ3pGTyxvQ0FBb0NSLDJDQUEwQ087b0JBRXBGLElBQUlFO29CQUVKLElBQUksT0FBTztvQkFDVCxHQUFHO29CQUNMLE9BQU8sSUFBSUQsb0NBQW9DLEdBQUc7d0JBQ2hEQyxrQkFBa0IsQ0FBQ0Q7d0JBRW5CZixrQkFBa0JpQixhQUFhLENBQUNEO29CQUNsQyxPQUFPLElBQUlELG9DQUFvQyxHQUFHO3dCQUNoREMsa0JBQWtCLENBQUNEO3dCQUVuQmIsb0JBQW9CZSxhQUFhLENBQUNEO29CQUNwQztvQkFFQSxJQUFNRSx5QkFBeUJsQixrQkFBa0JtQixRQUFRLElBQ25EQywyQkFBMkJsQixvQkFBb0JpQixRQUFRLElBQ3ZERSxtQkFBbUJILHlCQUF5QkU7b0JBRWxELElBQUlFO29CQUVKLElBQUksT0FBTztvQkFDVCxHQUFHO29CQUNMLE9BQU8sSUFBSUQsbUJBQW1CLEdBQUc7d0JBQy9CQyxtQkFBbUIsQ0FBQ0Q7d0JBRXBCckIsa0JBQWtCdUIsY0FBYyxDQUFDRDtvQkFDbkMsT0FBTyxJQUFJRCxtQkFBbUIsR0FBRzt3QkFDL0JDLG1CQUFtQixDQUFDRDt3QkFFcEJuQixvQkFBb0JxQixjQUFjLENBQUNEO29CQUNyQztvQkFFQWYsMkNBQTBDUCxrQkFBa0JRLHlCQUF5QjtvQkFFckYsSUFBTUgsMEJBQXlCTCxrQkFBa0JNLFFBQVEsSUFDbkRHLDBCQUF5QkYsMENBQ3pCRyxTQUFRTCx5QkFBd0IsR0FBRztvQkFFekNSLDJCQUEyQmMsdUJBQXVCLENBQUNDLGtDQUFrQyxDQTdEdEVuQiwwQkE2RGlHaUIsUUFBT0Q7b0JBRXZIWix5QkFBeUJnQixhQUFhLENBQUNiO29CQUV2Q0gseUJBQXlCMkIsY0FBYyxDQUFDdEI7Z0JBQzFDO2dCQUVBLE9BQU9MO1lBQ1Q7OztXQXJFbUJKO0VBQWlDa0IsdUJBQXVCIn0=