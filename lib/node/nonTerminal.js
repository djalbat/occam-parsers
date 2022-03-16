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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gY2hpbGQgbm9kZXMgYXQgcnVsZSAnJHtydWxlTmFtZX0nLmApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRSdWxlTmFtZSIsImdldENoaWxkTm9kZXMiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmb3J3YXJkc1NvbWUiLCJjaGlsZE5vZGUiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiYmFja3dhcmRzU29tZSIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJDbGFzcyIsInVuZGVmaW5lZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRXdCLEdBQThCLENBQTlCLGdCQUE4QjtBQUV2QixHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7OzhEO3NDOzZEO2lFOzs7O3dFO2dFOzs7Ozs7OztJQUUzQ0EsZUFBZSxpQkFBckIsUUFBUTthQUFGQSxlQUFlLENBQ3RCQyxRQUFRLEVBQUVDLFVBQVU7OEM7UUFDOUIsSUFBSSxDQUFDRCxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVSxDQUFDOzs7O1lBRy9CQyxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLEtBQUs7Z0JBRTFCLE1BQU0sQ0FBQ0EsWUFBWTtZQUNyQixDQUFDOzs7WUFFREMsR0FBaUIsRUFBakJBLENBQWlCO21CQUFqQkEsUUFBUSxDQUFSQSxpQkFBaUIsR0FBRyxDQUFDO2dCQUNuQixHQUFLLENBQUNDLGVBQWUsR0FBRyxJQUFJO2dCQUU1QixNQUFNLENBQUNBLGVBQWU7WUFDeEIsQ0FBQzs7O1lBRURDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDTixRQUFRO1lBQ3RCLENBQUM7OztZQUVETyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQ04sVUFBVTtZQUN4QixDQUFDOzs7WUFFRE8sR0FBd0IsRUFBeEJBLENBQXdCO21CQUF4QkEsUUFBUSxDQUFSQSx3QkFBd0IsR0FBRyxDQUFDO2dCQUMxQixHQUFHLENBQUNDLHFCQUFxQixHQUFHLElBQUk7b0JBRWhDQyxNQUFZLGVBQUMs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