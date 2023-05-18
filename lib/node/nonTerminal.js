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
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/nonTerminalNode"));
var _array = require("../utilities/array");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, childNodes) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
    }
    _create_class(NonTerminalNode, [
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
            key: "isIncludedIn",
            value: function isIncludedIn(node) {
                var _this = this;
                var includedIn = false;
                if (this === node) {
                    includedIn = true;
                } else {
                    var nodeNonTerminalNode = node.isNonTerminalNode();
                    if (nodeNonTerminalNode) {
                        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
                        includedIn = childNodes.some(function(childNode) {
                            var includedInChildNode = _this.isIncludedIn(childNode);
                            if (includedInChildNode) {
                                return true;
                            }
                        });
                    }
                }
                return includedIn;
            }
        },
        {
            key: "match",
            value: function match(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
                var matches = false;
                if (depth === 0) {
                    matches = true;
                } else {
                    var nodeNonTerminalNode = node.isNonTerminalNode();
                    if (nodeNonTerminalNode) {
                        var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
                        if (nonTerminalNodeRuleName === this.ruleName) {
                            var childNodesLength = this.childNodes.length, nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(), nonTerminalNodeChildNodesLength = nonTerminalNodeChildNodes.length;
                            if (childNodesLength === nonTerminalNodeChildNodesLength) {
                                depth--;
                                matches = this.childNodes.every(function(childNode, index) {
                                    var nonTerminalNodeChildNode = nonTerminalNodeChildNodes[index], childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth);
                                    if (childNodeMatchesNonTerminalNodeChildNode) {
                                        return true;
                                    }
                                });
                            }
                        }
                    }
                }
                return matches;
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
                var nonTerminalNode = new Class(ruleName, childNodes);
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IGZvcndhcmRzU29tZSwgYmFja3dhcmRzU29tZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHRoaXMucnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgbWF0Y2hlcyA9IHRoaXMuY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuICBcbiAgc2V0UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBhc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVUb2tlbnNBbmRBYnJpZGdlZChub25UZXJtaW5hbE5vZGUsIHRva2VucywgYWJyaWRnZWQpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZm9yd2FyZHNTb21lIiwiY2hpbGROb2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImJhY2t3YXJkc1NvbWUiLCJpc0luY2x1ZGVkSW4iLCJub2RlIiwiaW5jbHVkZWRJbiIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJzb21lIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsIm1hdGNoIiwiZGVwdGgiLCJJbmZpbml0eSIsIm1hdGNoZXMiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiaW5kZXgiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwic2V0UnVsZU5hbWUiLCJzZXRDaGlsZE5vZGVzIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJhYnJpZGdlZCIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVUb2tlbnNBbmRBYnJpZGdlZCIsInBhcnNlVHJlZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJDbGFzcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0VBSmdCO3FCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsZ0NBQU47YUFBTUEsZ0JBQ1BDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEYkY7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBSERGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFDZixJQUFNQyxlQUFlLEtBQUs7Z0JBRTFCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixJQUFNQyxrQkFBa0IsSUFBSTtnQkFFNUIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDTixRQUFRO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxPQUFPLElBQUksQ0FBQ04sVUFBVTtZQUN4Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkI7Z0JBQ3pCLElBQUlDLHdCQUF3QixJQUFJO2dCQUVoQ0MsSUFBQUEsbUJBQVksRUFBQyxJQUFJLENBQUNULFVBQVUsRUFBRSxTQUFDVSxXQUFjO29CQUMzQ0Ysd0JBQXdCRSxVQUFVSCx3QkFBd0I7b0JBRTFELElBQUlDLDBCQUEwQixJ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