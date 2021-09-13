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
var NonTerminalNode = /*#__PURE__*/ function() {
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
                    childNodes = ruleName; ///
                    ruleName = Class; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwiTm9uVGVybWluYWxOb2RlIiwiY29uc3RydWN0b3IiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldFJ1bGVOYW1lIiwiZ2V0UGFyZW50Tm9kZSIsImdldENoaWxkTm9kZXMiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJjaGlsZE5vZGUiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwic2V0UnVsZU5hbWUiLCJzZXRQYXJlbnROb2RlIiwic2V0Q2hpbGROb2RlcyIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJDbGFzcyIsInVuZGVmaW5lZCIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFeUIsR0FBOEIsQ0FBOUIsZ0JBQThCO0FBRXZCLEdBQXVCLENBQXZCLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDLGVBQWUsaUJBQXJCLFFBQVE7YUFBRixlQUFlLENBQ3RCLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVTs4QkFEekIsZUFBZTtRQUVoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElB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eUJBQXlCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDN0QsRUFBRSxFQUFFLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDN0IsVUFBVSxHQUFHLFFBQVEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBQzNCLFFBQVEsR0FBRyxLQUFLLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUNyQixLQUFLLEdBQUcsZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDL0IsQ0FBQztnQkFFRCxHQUFLLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU07Z0JBRTFDLEVBQUUsRUFBRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsa0NBQWtDLEVBQVcsTUFBRSxDQUFYLFFBQVEsR0FBQyxFQUFFO2dCQUNsRSxDQUFDO2dCQUVELEdBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxFQUN0QixlQUFlLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVU7Z0JBRWxFLE1BQU0sQ0FBQyxlQUFlO1lBQ3hCLENBQUM7OztXQWhHa0IsZUFBZTs7a0JBQWYsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGZvcndhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc2V0UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgbm8gY2hpbGQgbm9kZXMgYXQgcnVsZSAnJHtydWxlTmFtZX0nLmApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdW5kZWZpbmVkLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIl19