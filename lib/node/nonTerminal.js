"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminalNode = _interopRequireDefault(require("../parseTree/nonTerminalNode"));
var _array = require("../utilities/array");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, childNodes) {
        _classCallCheck(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
    }
    _createClass(NonTerminalNode, [
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = false;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = true;
                return nonTerminalNode;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
            }
        },
        {
            key: "getFirstSignificantToken",
            value: function getFirstSignificantToken() {
                var firstSignificantToken = null;
                (0, _array).forwardsSome(this.childNodes, function(childNode) {
                    firstSignificantToken = childNode.getFirstSignificantToken();
                    if (firstSignificantToken !== null) {
                        return true;
                    }
                });
                return firstSignificantToken;
            }
        },
        {
            key: "getLastSignificantToken",
            value: function getLastSignificantToken() {
                var lastSignificantToken = null;
                (0, _array).backwardsSome(this.childNodes, function(childNode) {
                    lastSignificantToken = childNode.getLastSignificantToken();
                    if (lastSignificantToken !== null) {
                        return true;
                    }
                });
                return lastSignificantToken;
            }
        },
        {
            key: "setRuleName",
            value: function setRuleName(ruleName) {
                this.ruleName = ruleName;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                this.childNodes = childNodes;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var abridged = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeTokensAndAbridged(nonTerminalNode, tokens, abridged), parseTree = nonTerminalNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
                if (childNodes === undefined) {
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var childNodesLength = childNodes.length;
                if (childNodesLength === 0) {
                    throw new Error("There are no child nodes at rule '".concat(ruleName, "'."));
                }
                var nonTerminalNode = new Class(ruleName, childNodes);
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();
exports.default = NonTerminalNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGFicmlkZ2VkKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gY2hpbGQgbm9kZXMgYXQgcnVsZSAnJHtydWxlTmFtZX0nLmApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZm9yd2FyZHNTb21lIiwiY2hpbGROb2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImJhY2t3YXJkc1NvbWUiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImFicmlkZ2VkIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkIiwicGFyc2VUcmVlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRXdCLElBQUEsZ0JBQThCLGtDQUE5Qiw4QkFBOEIsRUFBQTtBQUV2QixJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQUEsQUFBTUEsZUFBZSxpQkNOakMsQURNWTthQUFNQSxlQUFlLENBQ3RCQyxRQUFRLEVBQUVDLFVBQVU7O1FBQzlCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVUsQ0FBQzs7OztZQUcvQkMsR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLElBQU1DLFlBQVksR0FBRyxLQUFLLEFBQUM7Z0JBRTNCLE9BQU9BLFlBQVksQ0FBQzthQUNyQjs7O1lBRURDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEIsSUFBTUMsZUFBZSxHQUFHLElBQUksQUFBQztnQkFFN0IsT0FBT0EsZUFBZSxDQUFDO2FBQ3hCOzs7WUFFREMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNOLFFBQVEsQ0FBQzthQUN0Qjs7O1lBRURPLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLE9BQU8sSUFBSSxDQUFDTixVQUFVLENBQUM7YUFDeEI7OztZQUVETyxHQUF3QixFQUF4QkEsMEJBQXdCO21CQUF4QkEsU0FBQUEsd0JBQXdCLEdBQUc7Z0JBQ3pC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