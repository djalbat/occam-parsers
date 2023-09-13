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
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var _this = this;
                var parsed;
                var savedPrecedence = state.getSavedPrecedence();
                parsed = this.definitions.some(function(definition) {
                    var node, nonTerminalNode;
                    var ruleName = _this.name, childNodes = [], precedence = definition.getPrecedence();
                    nonTerminalNode = _this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkUHJlY2VkZW5jZSA9IHN0YXRlLmdldFNhdmVkUHJlY2VkZW5jZSgpO1xuXG4gICAgcGFyc2VkID0gdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgbm9kZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGU7XG5cbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICAgIHByZWNlZGVuY2UgPSBkZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKVxuXG4gICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2UoY2hpbGROb2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSBzdGF0ZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgY29uc3QgcmV3cml0dGVuTm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlLnJld3JpdGUoKTtcblxuICAgICAgICBpZiAocmV3cml0dGVuTm9uVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgICAgIG5vZGUgPSByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCBlbXB0eSA9IG5vZGUuaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKGVtcHR5KSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3QgdW5wcmVjZWRlbnRlZCA9IG5vZGUuaXNVbnByZWNlZGVudGVkKCk7XG5cbiAgICAgICAgICBpZiAodW5wcmVjZWRlbnRlZCkge1xuICAgICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV3cml0dGVuTm9uVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzLnBvcCgpO1xuXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSwgY2FsbEFoZWFkKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlKENsYXNzLCBuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAoTm9uVGVybWluYWxOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IGRlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zID0gYW1iaWd1b3VzOyAgLy8vXG5cbiAgICAgIGFtYmlndW91cyA9IG5hbWU7IC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImlzQW1iaWd1b3VzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNvbWUiLCJkZWZpbml0aW9uIiwibm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInB1c2giLCJzZXRQcmVjZWRlbmNlIiwicmV3cml0dGVuTm9uVGVybWluYWxOb2RlIiwicmV3cml0ZSIsInBvcCIsImVtcHR5IiwiaXNFbXB0eSIsInVucHJlY2VkZW50ZWQiLCJpc1VucHJlY2VkZW50ZWQiLCJyZXNldFByZWNlZGVuY2UiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkJBUFU7eUJBRUY7c0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsa0JBQW9CQywyQkFBYyxDQUFsQ0Q7QUFFTyxJQUFBLEFBQU1ELHFCQUFOO2FBQU1BLEtBQ1BHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7Z0NBRHRDTjtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7a0JBTE5OOztZQVFuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFB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