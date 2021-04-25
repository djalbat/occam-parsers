"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminalNode = _interopRequireDefault(require("../parseTree/nonTerminalNode"));
var _array = require("../../utilities/array");
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
var NonTerminalNode = function() {
    function NonTerminalNode(ruleName, parentNode, childNodes) {
        _classCallCheck(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.parentNode = parentNode;
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
            key: "getParentNode",
            value: function getParentNode() {
                return this.parentNode;
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
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
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
                    childNodes = ruleName;
                    ruleName = Class;
                    Class = NonTerminalNode; ///
                }
                var childNodesLength = childNodes.length;
                if (childNodesLength === 0) {
                    throw new Error("There are no child nodes at rule '".concat(ruleName, "'."));
                }
                var parentNode = undefined, nonTerminalNode = new Class(ruleName, parentNode, childNodes);
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();
exports.default = NonTerminalNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lO1xuICAgICAgcnVsZU5hbWUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIGNoaWxkIG5vZGVzIGF0IHJ1bGUgJyR7cnVsZU5hbWV9Jy5gKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHVuZGVmaW5lZCwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUV5QixnQkFBOEI7SUFFdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsZUFBZTthQUFmLGVBQWUsQ0FDdEIsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVOzhCQUR6QixlQUFlO2FBRTNCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLFVBQVUsR0FBRyxVQUFVO2FBQ3ZCLFVBQVUsR0FBRyxVQUFVOztpQkFKWCxlQUFlOztZQU9sQyxHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjO29CQUNOLFlBQVksR0FBRyxLQUFLO3VCQUVuQixZQUFZOzs7O1lBR3JCLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCO29CQUNULGVBQWUsR0FBRyxJQUFJO3VCQUVyQixlQUFlOzs7O1lBR3hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7NEJBQ0csUUFBUTs7OztZQUd0QixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhOzRCQUNDLFVBQVU7Ozs7WUFHeEIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTs0QkFDQyxVQUFVOzs7O1lBR3hCLEdBQXdCLEdBQXhCLHdCQUF3Qjs0QkFBeEIsd0JBQXdCO29CQUNsQixxQkFBcUIsR0FBRyxJQUFJO29CQWxDUSxNQUF1QixvQkFvQzdDLFVBQVUsV0FBRyxTQUFTO29CQUN0QyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsd0JBQXdCO3dCQUV0RCxxQkFBcUIsS0FBSyxJQUFJOytCQUN6QixJQUFJOzs7dUJBSVIscUJBQXFCOzs7O1lBRzlCLEdBQXVCLEdBQXZCLHVCQUF1Qjs0QkFBdkIsdUJBQXVCO29CQUNqQixvQkFBb0IsR0FBRyxJQUFJO29CQWhEUyxNQUF1QixxQkFrRDVDLFVBQVUsV0FBRyxTQUFTO29CQUN2QyxvQkFBb0IsR0FBRyxTQUFTLENBQUMsdUJBQXVCO3dCQUVwRCxvQkFBb0IsS0FBSyxJQUFJOytCQUN4QixJQUFJOzs7dUJBSVIsb0JBQW9COzs7O1lBRzdCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxRQUFRO3FCQUNiLFFBQVEsR0FBRyxRQUFROzs7O1lBRzFCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsQ0FBQyxVQUFVO3FCQUNqQixVQUFVLEdBQUcsVUFBVTs7OztZQUc5QixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhLENBQUMsVUFBVTtxQkFDakIsVUFBVSxHQUFHLFVBQVU7Ozs7WUFHOUIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLE1BQU07b0JBQ1YsZUFBZSxTQUNmLHdCQUF3QixHQTdFRyxnQkFBOEIsU0E2RUwsNEJBQTRCLENBQUMsZUFBZSxFQUFFLE1BQU0sR0FDeEcsU0FBUyxHQUFHLHdCQUF3QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFekMsU0FBUzs7Ozs7WUFHWCxHQUF5QixHQUF6Qix5QkFBeUI7NEJBQXpCLHlCQUF5QixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVTtvQkFDdEQsVUFBVSxLQUFLLFNBQVM7b0JBQzFCLFVBQVUsR0FBRyxRQUFRO29CQUNyQixRQUFRLEdBQUcsS0FBSztvQkFDaEIsS0FBSyxHQUFHLGVBQWUsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7O29CQUd6QixnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTTtvQkFFdEMsZ0JBQWdCLEtBQUssQ0FBQzs4QkFDZCxLQUFLLEVBQUUsa0NBQWtDLEVBQVcsTUFBRSxDQUFYLFFBQVEsR0FBQyxFQUFFOztvQkFHNUQsVUFBVSxHQUFHLFNBQVMsRUFDdEIsZUFBZSxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVU7dUJBRTNELGVBQWU7Ozs7V0EvRkwsZUFBZTs7a0JBQWYsZUFBZSJ9