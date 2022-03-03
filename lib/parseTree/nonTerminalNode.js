"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _ruleName = _interopRequireDefault(require("./ruleName"));
var _childNodes = _interopRequireDefault(require("./childNodes"));
var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));
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
            key: "fromNonTerminalNodeAndTokens",
            value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
                var childNodes = nonTerminalNode.getChildNodes(), ruleNameParseTree = _ruleName.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), childNodesParseTree = _childNodes.default.fromChildNodesAndTokens(childNodes, tokens);
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
exports.default = NonTerminalNodeParseTree;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZU5hbWVQYXJzZVRyZWUgZnJvbSBcIi4vcnVsZU5hbWVcIjtcbmltcG9ydCBDaGlsZE5vZGVzUGFyc2VUcmVlIGZyb20gXCIuL2NoaWxkTm9kZXNcIjtcbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBSdWxlTmFtZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gQ2hpbGROb2Rlc1BhcnNlVHJlZS5mcm9tQ2hpbGROb2Rlc0FuZFRva2VucyhjaGlsZE5vZGVzLCB0b2tlbnMpO1xuICAgIFxuICAgIGxldCBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG4gICAgXG4gICAgY29uc3QgY2hpbGROb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBjaGlsZE5vZGVzUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBjaGlsZE5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICBcbiAgICBsZXQgbGVmdE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IC12ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lUGFyc2VUcmVlV2lkdGggPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB3aWR0aHNEaWZmZXJlbmNlID0gcnVsZU5hbWVQYXJzZVRyZWVXaWR0aCAtIGNoaWxkTm9kZXNQYXJzZVRyZWVXaWR0aDtcbiAgICBcbiAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IC13aWR0aHNEaWZmZXJlbmNlO1xuICAgICAgXG4gICAgICBydWxlTmFtZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gK3dpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgY29uc3QgcnVsZU5hbWVQYXJzZVRyZWVEZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGggPSBydWxlTmFtZVBhcnNlVHJlZURlcHRoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcnVsZU5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQocnVsZU5hbWVQYXJzZVRyZWUpO1xuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbShjaGlsZE5vZGVzUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZVBhcnNlVHJlZSIsIlJ1bGVOYW1lUGFyc2VUcmVlIiwiY2hpbGROb2Rlc1BhcnNlVHJlZSIsIkNoaWxkTm9kZXNQYXJzZVRyZWUiLCJmcm9tQ2hpbGROb2Rlc0FuZFRva2VucyIsInJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJjaGlsZE5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSIsImxlZnRNYXJnaW5XaWR0aCIsInVuZGVmaW5lZCIsImFkZExlZnRNYXJnaW4iLCJydWxlTmFtZVBhcnNlVHJlZVdpZHRoIiwiZ2V0V2lkdGgiLCJjaGlsZE5vZGVzUGFyc2VUcmVlV2lkdGgiLCJ3aWR0aHNEaWZmZXJlbmNlIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZFJpZ2h0TWFyZ2luIiwicnVsZU5hbWVQYXJzZVRyZWVEZXB0aCIsImdldERlcHRoIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvQm90dG9tIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFaUIsR0FBWSxDQUFaLFNBQVk7QUFDVixHQUFjLENBQWQsV0FBYztBQUNWLEdBQWtCLENBQWxCLGVBQWtC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