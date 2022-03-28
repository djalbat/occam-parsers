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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzZXRSdWxlTmFtZShydWxlTmFtZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlIG5vIGNoaWxkIG5vZGVzIGF0IHJ1bGUgJyR7cnVsZU5hbWV9Jy5gKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldFJ1bGVOYW1lIiwiZ2V0Q2hpbGROb2RlcyIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZvcndhcmRzU29tZSIsImNoaWxkTm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJiYWNrd2FyZHNTb21lIiwic2V0UnVsZU5hbWUiLCJzZXRDaGlsZE5vZGVzIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRXFDLElBQUEsZ0JBQThCLGtDQUE5Qiw4QkFBOEIsRUFBQTtBQUV2QixJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBOzs7Ozs7Ozs7OERBSmhFO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7OztBQU1lLElBQUEsQUFBTUEsZUFBZSxpQkNOakMsQURNWTthQUFNQSxlQUFlLENBQ3RCQyxRQUFRLEVBQUVDLFVBQVU7OENBUGxDO1FBUUksSUFBSSxDQUFDRCxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVSxDQUFDOzs7O1lBRy9CQyxHQUFjLEVBQWRBLGdCQUFjO1lFWmhCLE9GWUVBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixJQUFNQyxZQUFZLEdBQUcsS0FBSyxBQUFDO2dCQUUzQixPQUFPQSxZQUFZLENBQUM7YUFDckI7OztZQUVEQyxHQUFpQixFQUFqQkEsbUJBQWlCO1lFbEJuQixPRmtCRUEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLElBQU1DLGVBQWUsR0FBRyxJQUFJLEFBQUM7Z0JBRTdCLE9BQU9BLGVBQWUsQ0FBQzthQUN4Qjs7O1lBRURDLEdBQVcsRUFBWEEsYUFBVztZRXhCYixPRndCRUEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLE9BQU8sSUFBSSxDQUFDTixRQUFRLENBQUM7YUFDdEI7OztZQUVETyxHQUFhLEVBQWJBLGVBQWE7WUU1QmYsT0Y0QkVBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxP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