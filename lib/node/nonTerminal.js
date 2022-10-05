"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNode;
    }
});
var _nonTerminalNode = /*#__PURE__*/ _interopRequireDefault(require("../parseTree/nonTerminalNode"));
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
                (0, _array.forwardsSome)(this.childNodes, function(childNode) {
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
                (0, _array.backwardsSome)(this.childNodes, function(childNode) {
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
        },
        {
            key: "clone",
            value: function clone(Class) {
                if (Class === undefined) {
                    Class = NonTerminalNode;
                }
                var ruleName = this.ruleName, childNodes = this.childNodes.map(function(childNode) {
                    childNode = childNode.clone();
                    return childNode;
                }), nonTerminalNode = new Class(ruleName, childNodes);
                return nonTerminalNode;
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
                var nonTerminalNode = new Class(ruleName, childNodes);
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCA9IGZhbHNlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlVG9rZW5zQW5kQWJyaWRnZWQobm9uVGVybWluYWxOb2RlLCB0b2tlbnMsIGFicmlkZ2VkKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZShDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICB9XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5tYXAoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNsb25lKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZm9yd2FyZHNTb21lIiwiY2hpbGROb2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImJhY2t3YXJkc1NvbWUiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImFicmlkZ2VkIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJDbGFzcyIsInVuZGVmaW5lZCIsIm1hcCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU1RQSxlQUFlOzs7b0VBSkMsOEJBQThCO3FCQUV2QixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBQSxBQUFNQSxlQUFlLGlCQUFyQjthQUFNQSxlQUFlLENBQ3RCQyxRQUFRLEVBQUVDLFVBQVU7OEJBRGJGLGVBQWU7UUFFaEMsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVSxDQUFDOztpQkFIWkYsZUFBZTs7WUFNbENHLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxZQUFZLEdBQUcsS0FBSyxBQUFDO2dCQUUzQixPQUFPQSxZQUFZLENBQUM7WUFDdEIsQ0FBQzs7O1lBRURDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEIsSUFBTUMsZUFBZSxHQUFHLElBQUksQUFBQztnQkFFN0IsT0FBT0EsZUFBZSxDQUFDO1lBQ3pCLENBQUM7OztZQUVEQyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztn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