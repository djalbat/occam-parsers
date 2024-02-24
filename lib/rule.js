"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rule;
    }
});
var _occamlexers = require("occam-lexers");
var _constants = require("./constants");
var _string = require("./utilities/string");
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
var exclamationMark = _occamlexers.specialSymbols.exclamationMark;
var Rule = /*#__PURE__*/ function() {
    function Rule(name, ambiguous, definitions, NonTerminalNode) {
        _class_call_check(this, Rule);
        this.name = name;
        this.ambiguous = ambiguous;
        this.definitions = definitions;
        this.NonTerminalNode = NonTerminalNode;
    }
    _create_class(Rule, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "isAmbiguous",
            value: function isAmbiguous() {
                return this.ambiguous;
            }
        },
        {
            key: "getDefinitions",
            value: function getDefinitions() {
                return this.definitions;
            }
        },
        {
            key: "getNonTerminalNode",
            value: function getNonTerminalNode() {
                return this.NonTerminalNode;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "seAmbiguous",
            value: function seAmbiguous(ambiguous) {
                this.ambiguous = ambiguous;
            }
        },
        {
            key: "setDefinitions",
            value: function setDefinitions(definitions) {
                this.definitions = definitions;
            }
        },
        {
            key: "setNonTerminalNode",
            value: function setNonTerminalNode(NonTerminalNode) {
                this.NonTerminalNode = NonTerminalNode;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var _this = this;
                var parsed;
                var savedPrecedence = state.getSavedPrecedence();
                parsed = this.definitions.some(function(definition) {
                    var node, nonTerminalNode;
                    var ruleName = _this.name, ambiguous = _this.ambiguous, childNodes = [];
                    nonTerminalNode = _this.NonTerminalNode.fromRuleNameChildNodesAndAmbiguous(ruleName, childNodes, ambiguous);
                    var precedence = definition.getPrecedence();
                    node = nonTerminalNode; ///
                    nodes.push(node);
                    state.setPrecedence(precedence);
                    var parsed = definition.parse(childNodes, state, function() {
                        var parsed;
                        parsed = true;
                        var precedence = state.getPrecedence();
                        nonTerminalNode.setPrecedence(precedence);
                        var rewrittenNonTerminalNode = nonTerminalNode.rewrite();
                        if (rewrittenNonTerminalNode !== null) {
                            if (parsed) {
                                nodes.pop();
                                node = rewrittenNonTerminalNode; ///
                                nodes.push(node);
                            }
                        }
                        if (parsed) {
                            var empty = node.isEmpty();
                            if (empty) {
                                parsed = false;
                            }
                        }
                        if (parsed) {
                            var unprecedented = node.isUnprecedented();
                            if (unprecedented) {
                                parsed = false;
                            }
                        }
                        if (parsed) {
                            if (callAhead !== null) {
                                state.resetPrecedence(savedPrecedence);
                                parsed = callAhead();
                            }
                        }
                        if (rewrittenNonTerminalNode !== null) {
                            if (!parsed) {
                                nodes.pop();
                                var node1 = nonTerminalNode; ///
                                nodes.push(node1);
                            }
                        }
                        return parsed;
                    }, callAhead);
                    if (!parsed) {
                        nodes.pop();
                        state.resetPrecedence(savedPrecedence);
                    }
                    return parsed;
                });
                if (callAhead === null) {
                    state.resetPrecedence(savedPrecedence);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString(maximumRuleNameLength) {
                var multiLine = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var definitionsLength = this.definitions.length;
                multiLine = multiLine && definitionsLength > 1; ///
                var maximumPadding = (0, _string.paddingFromPaddingLength)(maximumRuleNameLength), definitionsString = this.definitions.reduce(function(definitionsString, definition) {
                    var definitionString = definition.asString();
                    if (definitionsString === _constants.EMPTY_STRING) {
                        definitionsString = definitionString; ///
                    } else {
                        definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
                    }
                    return definitionsString;
                }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, ambiguousString = this.ambiguous ? exclamationMark : _constants.EMPTY_STRING, ambiguousStringLength = ambiguousString.length, paddingLength = maximumRuleNameLength - ruleNameLength - ambiguousStringLength, padding = (0, _string.paddingFromPaddingLength)(paddingLength);
                var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(ambiguousString).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
                return string;
            }
        }
    ], [
        {
            key: "fromNameAmbiguousDefinitionsAndNonTerminalNode",
            value: function fromNameAmbiguousDefinitionsAndNonTerminalNode(Class, name, ambiguous, definitions, NonTerminalNode) {
                if (NonTerminalNode === undefined) {
                    NonTerminalNode = definitions; ///
                    definitions = ambiguous; ///
                    ambiguous = name; ///
                    name = Class; ///
                    Class = Rule; ///
                }
                var rule = new Class(name, ambiguous, definitions, NonTerminalNode);
                return rule;
            }
        }
    ]);
    return Rule;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNlQW1iaWd1b3VzKGFtYmlndW91cykge1xuICAgIHRoaXMuYW1iaWd1b3VzID0gYW1iaWd1b3VzO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRQcmVjZWRlbmNlID0gc3RhdGUuZ2V0U2F2ZWRQcmVjZWRlbmNlKCk7XG5cbiAgICBwYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBub2RlLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZTtcblxuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSB0aGlzLmFtYmlndW91cyxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyhydWxlTmFtZSwgY2hpbGROb2RlcywgYW1iaWd1b3VzKTtcblxuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IGRlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgbm9kZXMucHVzaChub2RlKTtcblxuICAgICAgc3RhdGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHN0YXRlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGUucmV3cml0ZSgpO1xuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gbm9kZS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCB1bnByZWNlZGVudGVkID0gbm9kZS5pc1VucHJlY2VkZW50ZWQoKTtcblxuICAgICAgICAgIGlmICh1bnByZWNlZGVudGVkKSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9LCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUoQ2xhc3MsIG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChOb25UZXJtaW5hbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgTm9uVGVybWluYWxOb2RlID0gZGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMgPSBhbWJpZ3VvdXM7ICAvLy9cblxuICAgICAgYW1iaWd1b3VzID0gbmFtZTsgLy8vXG5cbiAgICAgIG5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUnVsZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInNldE5hbWUiLCJzZUFtYmlndW91cyIsInNldERlZmluaXRpb25zIiwic2V0Tm9uVGVybWluYWxOb2RlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJzYXZlZFByZWNlZGVuY2UiLCJnZXRTYXZlZFByZWNlZGVuY2UiLCJzb21lIiwiZGVmaW5pdGlvbiIsIm5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kQW1iaWd1b3VzIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJwdXNoIiwic2V0UHJlY2VkZW5jZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsInJld3JpdGUiLCJwb3AiLCJlbXB0eSIsImlzRW1wdHkiLCJ1bnByZWNlZGVudGVkIiwiaXNVbnByZWNlZGVudGVkIiwicmVzZXRQcmVjZWRlbmNlIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUiLCJDbGFzcyIsInVuZGVmaW5lZCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJCQVBVO3lCQUVGO3NCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVDLGtCQUFvQkMsMkJBQWMsQ0FBbENEO0FBRU8sSUFBQSxBQUFNRCxxQkFBRCxBQUFMO2FBQU1BLEtBQ1BHLElBQUksRUFB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