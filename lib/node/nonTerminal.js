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
                var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), parseTree = nonTerminalNodeParseTree; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gY2hpbGQgbm9kZXMgYXQgcnVsZSAnJHtydWxlTmFtZX0nLmApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRSdWxlTmFtZSIsImdldENoaWxkTm9kZXMiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmb3J3YXJkc1NvbWUiLCJjaGlsZE5vZGUiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiYmFja3dhcmRzU29tZSIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJDbGFzcyIsInVuZGVmaW5lZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVxQyxJQUFBLGdCQUE4QixrQ0FBOUIsOEJBQThCLEVBQUE7QUFFdkIsSUFBQSxNQUFvQixXQUFwQixvQkFBb0IsQ0FBQTs7Ozs7Ozs7OzhEQUpoRTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7QUFNZSxJQUFBLEFBQU1BLGVBQWUsaUJDTmpDLEFETVk7YUFBTUEsZUFBZSxDQUN0QkMsUUFBUSxFQUFFQyxVQUFVOzhDQVBsQztRQVFJLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVUsQ0FBQzs7OztZQUcvQkMsR0FBYyxFQUFkQSxnQkFBYztZRVpoQixPRllFQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsSUFBTUMsWUFBWSxHQUFHLEtBQUssQUFBQztnQkFFM0IsT0FBT0EsWUFBWSxDQUFDO2FBQ3JCOzs7WUFFREMsR0FBaUIsRUFBakJBLG1CQUFpQjtZRWxCbkIsT0ZrQkVBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNsQixJQUFNQyxlQUFlLEdBQUcsSUFBSSxBQUFDO2dCQUU3QixPQUFPQSxlQUFlLENBQUM7YUFDeEI7OztZQUVEQyxHQUFXLEVBQVhBLGFBQVc7WUV4QmIsT0Z3QkVBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ04sUUFBUSxDQUFDO2FBQ3RCOzs7WUFFRE8sR0FBYSxFQUFiQSxlQUFhO1lFNUJmLE9GNEJFQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsT0FBTyxJQUFJLENBQUNOLFVBQVUsQ0FBQzthQUN4Qjs7O1lBRURPLEdBQXdCLEVBQXhCQSwwQkFBd0I7WUVoQzFCLE9GZ0NFQSxTQUFBQSx3QkFBd0IsR0FBRztnQkFDekIsSUFBSUMscUJBQXFCLEdBQUcsSUFBSSxBQUFDO2dC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