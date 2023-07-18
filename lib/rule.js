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
                var parsed = true;
                return parsed;
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
                    state.setPrecedence(precedence);
                    parsed = definition.parse(childNodes, state, function() {
                        var parsed;
                        var precedence = state.getPrecedence(), nonTerminalNode = _this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence), node = nonTerminalNode; ///
                        nodes.push(node);
                        parsed = _this.rewriteNonTerminalNode(nonTerminalNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcmV3cml0ZU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdmVkUHJlY2VkZW5jZSA9IHN0YXRlLmdldFNhdmVkUHJlY2VkZW5jZSgpO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBwcmVjZWRlbmNlID0gZGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gW107XG5cbiAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2UoY2hpbGROb2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gc3RhdGUuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSksXG4gICAgICAgICAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgcGFyc2VkID0gdGhpcy5yZXdyaXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gbm9uVGVybWluYWxOb2RlLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IHVucHJlY2VkZW50ZWQgPSBub25UZXJtaW5hbE5vZGUuaXNVbnByZWNlZGVudGVkKHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgaWYgKHVucHJlY2VkZW50ZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9LCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nID0gdGhpcy5hbWJpZ3VvdXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZ0xlbmd0aCA9IGFtYmlndW91c1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gYW1iaWd1b3VzU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7YW1iaWd1b3VzU3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZShDbGFzcywgbmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKE5vblRlcm1pbmFsTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSBkZWZpbml0aW9uczsgIC8vL1xuXG4gICAgICBkZWZpbml0aW9ucyA9IGFtYmlndW91czsgIC8vL1xuXG4gICAgICBhbWJpZ3VvdXMgPSBuYW1lOyAvLy9cblxuICAgICAgbmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSdWxlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gbmV3IENsYXNzKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInJld3JpdGVOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJwYXJzZWQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNvbWUiLCJkZWZpbml0aW9uIiwicnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJzZXRQcmVjZWRlbmNlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJub2RlIiwicHVzaCIsImVtcHR5IiwiaXNFbXB0eSIsInVucHJlY2VkZW50ZWQiLCJpc1VucHJlY2VkZW50ZWQiLCJyZXNldFByZWNlZGVuY2UiLCJwb3AiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkJBUFU7eUJBRUY7c0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsa0JBQW9CQywyQkFBYyxDQUFsQ0Q7QUFFTyxJQUFBLEFBQU1ELHFCQUFOO2FBQU1BLEtBQ1BHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7Z0NBRHRDTjtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7a0JBTE5OOztZQVFuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkMsZUFBZTtnQkFDcEMsSUFBTUMsU0FBUztnQkFFZixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7O2dCQUNyQyxJQUFJTCxTQUFTO2dCQUViLElBQU1NLGtCQUFrQkgsTUFBTUksa0JBQWtCO2dCQUVoRCxJQUFJLENBQUNmLFdBQVcsQ0FBQ2dCLElBQUksQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsV0FBVyxNQUFLcEIsSUFBSSxFQUNwQnFCLGFBQWFGLFdBQVdHLGFBQWEsSUFDckNDLGFBQWEsRUFBRTtvQkFFckJWLE1BQU1XLGFBQWEsQ0FBQ0g7b0JBRXBCWCxTQUFTUyxXQUFXUixLQUFLLENBQUNZLFlBQVlWLE9BQU87d0JBQzNDLElBQUlIO3dCQUVKLElBQU1XLGFBQWFSLE1BQU1TLGFBQWEsSUFDaENiLGtCQUFrQixNQUFLTixlQUFlLENBQUNzQixtQ0FBbUMsQ0FBQ0wsVUFBVUcsWUFBWUYsYUFDakdLLE9BQU9qQixpQkFBaUIsR0FBRzt3QkFFakNHLE1BQU1lLElBQUksQ0FBQ0Q7d0JBRVhoQixTQUFTLE1BQUtGLHNCQUFzQixDQUFDQzt3QkFFckMsSUFBSUMsUUFBUTs0QkFDVixJQUFNa0IsUUFBUW5CLGdCQUFnQm9CLE9BQU87NEJBRXJDLElBQUlELE9BQU87Z0NBQ1RsQixTQUFTOzRCQUNYO3dCQUNGO3dCQUVBLElBQUlBLFFBQVE7NEJBQ1YsSUFBTW9CLGdCQUFnQnJCLGdCQUFnQnNCLGVBQWUsQ0FBQ1Y7NEJBRXRELElBQUlTLGVBQWU7Z0NBQ2pCcEIsU0FBUzs0QkFDWDt3QkFDRjt3QkFFQSxJQUFJQSxRQUFROzRCQUNWLElBQUlLLGNBQWMsTUFBTTtnQ0FDdEJGLE1BQU1tQixlQUFlLENBQUNoQjtnQ0FFdEJOLFNBQVNLOzRCQUNYO3dCQUNGO3dCQUVBLElBQUksQ0FBQ0wsUUFBUTs0QkFDWEUsTUFBTXFCLEdBQUc7d0JBQ1g7d0JBRUEsT0FBT3ZCO29CQUNULEdBQUdLO29CQUVILElBQUlMLFFBQVE7d0JBQ1YsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJSyxjQUFjLE1BQU07b0JBQ3RCRixNQUFNbUIsZUFBZSxDQUFDaEI7Z0JBQ3hCO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBd0IsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLHFCQUFxQjtvQkFBRUMsWUFBQUEsaUVBQVk7Z0JBQzFDLElBQU1DLG9CQUFvQixJQUFJLENBQUNuQyxXQUFXLENBQUNvQyxNQUFNO2dCQUVqREYsWUFBWUEsYUFBY0Msb0JBQW9CLEdBQUssR0FBRztnQkFFdEQsSUFBTUUsaUJBQWlCQyxJQUFBQSxnQ0FBd0IsRUFBQ0wsd0JBQzFDTSxvQkFBb0IsSUFBSSxDQUFDdkMsV0FBVyxDQUFDd0MsTUFBTSxDQUFDLFNBQUNELG1CQUFtQnRCO29CQUM5RCxJQUFNd0IsbUJBQW1CeEIsV0FBV2UsUUFBUTtvQkFFNUMsSUFBSU8sc0JBQXNCRyx1QkFBWSxFQUFFO3dCQUN0Q0gsb0JBQW9CRSxrQkFBa0IsR0FBRztvQkFDM0MsT0FBTzt3QkFDTEYsb0JBQW9CTCxZQUNDLEFBQUMsR0FFbENHLE9BRm9DRSxtQkFBa0IsUUFFaENFLE9BQXRCSixnQkFBZSxTQUF3QixPQUFqQkksb0JBQ2EsQUFBQyxHQUF5QkEsT0FBdkJGLG1CQUFrQixPQUFzQixPQUFqQkU7b0JBQ25EO29CQUVBLE9BQU9GO2dCQUNULEdBQUdHLHVCQUFZLEdBQ2Z4QixXQUFXLElBQUksQ0FBQ3BCLElBQUksRUFDcEI2QyxpQkFBaUJ6QixTQUFTa0IsTUFBTSxFQUNoQ1Esa0JBQWtCLElBQUksQ0FBQzdDLFNBQVMsR0FDWkgsa0JBQ0U4Qyx1QkFBWSxFQUNsQ0csd0JBQXdCRCxnQkFBZ0JSLE1BQU0sRUFDOUNVLGdCQUFnQmIsd0JBQXdCVSxpQkFBaUJFLHVCQUN6REUsVUFBVVQsSUFBQUEsZ0NBQXdCLEVBQUNRO2dCQUV6QyxJQUFNRSxrQkFBa0JkLFlBQ0MsQUFBQyxPQUViLE9BQWZHLGdCQUFlLFVBQ2MsTUFDckJZLFNBQVMsQUFBQyxPQUVOTCxPQUFaLElBQUksQ0FBQzlDLElBQUksRUFBcUJpRCxPQUFsQkgsaUJBQWlDTCxPQUFmUSxTQUFRLFNBQTJCQyxPQUFwQlQsbUJBQW9DLE9BQWhCUztnQkFFL0QsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwrQ0FBK0NDLEtBQUssRUFBRXJELElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7Z0JBQ3hHLElBQUlBLG9CQUFvQm1ELFdBQVc7b0JBQ2pDbkQsa0JBQWtCRCxhQUFjLEdBQUc7b0JBRW5DQSxjQUFjRCxXQUFZLEdBQUc7b0JBRTdCQSxZQUFZRCxNQUFNLEdBQUc7b0JBRXJCQSxPQUFPcUQsT0FBTyxHQUFHO29CQUVqQkEsUUFwSmV4RCxNQW9KRCxHQUFHO2dCQUNuQjtnQkFFQSxJQUFNMEQsT0FBTyxJQUFJRixNQUFNckQsTUFBTUMsV0FBV0MsYUFBYUM7Z0JBRXJELE9BQU9vRDtZQUNUOzs7V0ExSm1CMUQifQ==