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
            key: "rewriteNonTerminalNode",
            value: function rewriteNonTerminalNode(nonTerminalNode) {
            ///
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var _this = this;
                var parsed = false;
                var savedPrecedence = state.getSavedPrecedence();
                this.definitions.some(function(definition) {
                    var ruleName = _this.name, precedence = definition.getPrecedence(), childNodes = [];
                    Object.assign(childNodes, {
                        ruleName: ruleName
                    });
                    state.setPrecedence(precedence);
                    parsed = definition.parse(childNodes, state, function() {
                        var parsed;
                        var precedence = state.getPrecedence(), nonTerminalNode = _this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence), node = nonTerminalNode; ///
                        _this.rewriteNonTerminalNode(nonTerminalNode);
                        nodes.push(node);
                        parsed = true;
                        if (parsed) {
                            var empty = nonTerminalNode.isEmpty();
                            if (empty) {
                                parsed = false;
                            }
                        }
                        if (parsed) {
                            var unprecedented = nonTerminalNode.isUnprecedented(precedence);
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
                        if (!parsed) {
                            nodes.pop();
                        }
                        return parsed;
                    }, callAhead);
                    if (parsed) {
                        return true;
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcmV3cml0ZU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdmVkUHJlY2VkZW5jZSA9IHN0YXRlLmdldFNhdmVkUHJlY2VkZW5jZSgpO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBwcmVjZWRlbmNlID0gZGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gW107XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY2hpbGROb2Rlcywge1xuICAgICAgICBydWxlTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2UoY2hpbGROb2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gc3RhdGUuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSksXG4gICAgICAgICAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgIHRoaXMucmV3cml0ZU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3QgZW1wdHkgPSBub25UZXJtaW5hbE5vZGUuaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKGVtcHR5KSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3QgdW5wcmVjZWRlbnRlZCA9IG5vblRlcm1pbmFsTm9kZS5pc1VucHJlY2VkZW50ZWQocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICBpZiAodW5wcmVjZWRlbnRlZCkge1xuICAgICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0sIGNhbGxBaGVhZCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlKENsYXNzLCBuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAoTm9uVGVybWluYWxOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IGRlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zID0gYW1iaWd1b3VzOyAgLy8vXG5cbiAgICAgIGFtYmlndW91cyA9IG5hbWU7IC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmV3cml0ZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwic2F2ZWRQcmVjZWRlbmNlIiwiZ2V0U2F2ZWRQcmVjZWRlbmNlIiwic29tZSIsImRlZmluaXRpb24iLCJydWxlTmFtZSIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsInNldFByZWNlZGVuY2UiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsIm5vZGUiLCJwdXNoIiwiZW1wdHkiLCJpc0VtcHR5IiwidW5wcmVjZWRlbnRlZCIsImlzVW5wcmVjZWRlbnRlZCIsInJlc2V0UHJlY2VkZW5jZSIsInBvcCIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2Rl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