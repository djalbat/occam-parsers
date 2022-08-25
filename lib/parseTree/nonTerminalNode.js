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
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("./ruleName"));
var _childNodes = /*#__PURE__*/ _interopRequireDefault(require("./childNodes"));
var _verticalBranch = /*#__PURE__*/ _interopRequireDefault(require("./verticalBranch"));
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
var NonTerminalNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(NonTerminalNodeParseTree, VerticalBranchParseTree);
    var _super = _createSuper(NonTerminalNodeParseTree);
    function NonTerminalNodeParseTree() {
        _classCallCheck(this, NonTerminalNodeParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(NonTerminalNodeParseTree, null, [
        {
            key: "fromNonTerminalNodeTokensAndAbridged",
            value: function fromNonTerminalNodeTokensAndAbridged(nonTerminalNode, tokens, abridged) {
                var childNodes = nonTerminalNode.getChildNodes(), ruleNameParseTree = _ruleName.default.fromNonTerminalNodeTokensAndAbridged(nonTerminalNode, tokens, abridged), childNodesParseTree = _childNodes.default.fromChildNodesTokensAndAbridged(childNodes, tokens, abridged);
                var ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
                var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(), verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;
                var leftMarginWidth = undefined;
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
                var rightMarginWidth = undefined;
                if (false) {
                ///
                } else if (widthsDifference < 0) {
                    rightMarginWidth = -widthsDifference;
                    ruleNameParseTree.addRightMargin(rightMarginWidth);
                } else if (widthsDifference > 0) {
                    rightMarginWidth = +widthsDifference;
                    childNodesParseTree.addRightMargin(rightMarginWidth);
                }
                ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
                var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(), nonTerminalNodeParseTreeDepth = ruleNameParseTreeDepth, verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, nonTerminalNodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree, nonTerminalNodeParseTreeDepth, verticalBranchPosition);
                nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
                nonTerminalNodeParseTree.appendToBottom(childNodesParseTree);
                return nonTerminalNodeParseTree;
            }
        }
    ]);
    return NonTerminalNodeParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU5hbWVQYXJzZVRyZWUgZnJvbSBcIi4vcnVsZU5hbWVcIjtcbmltcG9ydCBDaGlsZE5vZGVzUGFyc2VUcmVlIGZyb20gXCIuL2NoaWxkTm9kZXNcIjtcbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGFicmlkZ2VkKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBSdWxlTmFtZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGFicmlkZ2VkKSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gQ2hpbGROb2Rlc1BhcnNlVHJlZS5mcm9tQ2hpbGROb2Rlc1Rva2Vuc0FuZEFicmlkZ2VkKGNoaWxkTm9kZXMsIHRva2VucywgYWJyaWRnZWQpO1xuICAgIFxuICAgIGxldCBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG4gICAgXG4gICAgY29uc3QgY2hpbGROb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBjaGlsZE5vZGVzUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBjaGlsZE5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICBcbiAgICBsZXQgbGVmdE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IC12ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB3aWR0aHNEaWZmZXJlbmNlID0gcnVsZU5hbWVQYXJzZVRyZWVXaWR0aCAtIGNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aDtcbiAgICBcbiAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IC13aWR0aHNEaWZmZXJlbmNlO1xuICAgICAgXG4gICAgICBydWxlTmFtZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gK3dpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgY29uc3QgcnVsZU5hbWVQYXJzZVRyZWVEZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZURlcHRoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQocnVsZU5hbWVQYXJzZVRyZWUpO1xuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbShjaGlsZE5vZGVzUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwiYWJyaWRnZWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiUnVsZU5hbWVQYXJzZVRyZWUiLCJjaGlsZE5vZGVzUGFyc2VUcmVlIiwiQ2hpbGROb2Rlc1BhcnNlVHJlZSIsImZyb21DaGlsZE5vZGVzVG9rZW5zQW5kQWJyaWRnZWQiLCJydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiY2hpbGROb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UiLCJsZWZ0TWFyZ2luV2lkdGgiLCJ1bmRlZmluZWQiLCJhZGRMZWZ0TWFyZ2luIiwicnVsZU5hbWVQYXJzZVRyZWVXaWR0aCIsImdldFdpZHRoIiwiY2hpbGROb2Rlc1BhcnNlVHJlZVdpZHRoIiwid2lkdGhzRGlmZmVyZW5jZSIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRSaWdodE1hcmdpbiIsInJ1bGVOYW1lUGFyc2VUcmVlRGVwdGgiLCJnZXREZXB0aCIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZURlcHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVu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