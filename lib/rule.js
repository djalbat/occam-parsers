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
var _necessary = require("necessary");
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
var clear = _necessary.arrayUtilities.clear, exclamationMark = _occamlexers.specialSymbols.exclamationMark;
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
            key: "parseDefinition",
            value: function parseDefinition(definition, nodes, state, callback, precedence, ruleName) {
                var parsed;
                var savedIndex = state.getSavedIndex();
                clear(nodes);
                parsed = definition.parse(nodes, state, callback, precedence, this.name); ///
                if (parsed) {
                    var nodesLength = nodes.length;
                    if (nodesLength === 0) {
                        parsed = false;
                    }
                }
                if (parsed) {
                    if (this.name === ruleName) {
                        var definitionLowerPrecedence = definition.isLowerPrecedence(precedence);
                        if (definitionLowerPrecedence) {
                            parsed = false;
                        }
                    }
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "parse",
            value: function parse(state, callback, precedence, ruleName) {
                var _this = this;
                var ruleNode = null;
                var nodes = [], parsed;
                this.definitions.some(function(definition) {
                    parsed = _this.parseDefinition(definition, nodes, state, callback, precedence, ruleName);
                    if (parsed) {
                        return true;
                    }
                });
                if (parsed) {
                    var ruleName1 = this.name, childNodes = nodes, nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName1, childNodes);
                    ruleNode = nonTerminalNode; ///
                }
                return ruleNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYW1iaWd1b3VzID0gYW1iaWd1b3VzO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzQW1iaWd1b3VzKCkge1xuICAgIHJldHVybiB0aGlzLmFtYmlndW91cztcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBydWxlTmFtZSkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgY2xlYXIobm9kZXMpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCB0aGlzLm5hbWUpOyAvLy9cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgaWYgKHRoaXMubmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkxvd2VyUHJlY2VkZW5jZSA9IGRlZmluaXRpb24uaXNMb3dlclByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Mb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgbGV0IG5vZGVzID0gW10sXG4gICAgICAgIHBhcnNlZDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nID0gdGhpcy5hbWJpZ3VvdXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZ0xlbmd0aCA9IGFtYmlndW91c1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gYW1iaWd1b3VzU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7YW1iaWd1b3VzU3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZShDbGFzcywgbmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKE5vblRlcm1pbmFsTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSBkZWZpbml0aW9uczsgIC8vL1xuXG4gICAgICBkZWZpbml0aW9ucyA9IGFtYmlndW91czsgIC8vL1xuXG4gICAgICBhbWJpZ3VvdXMgPSBuYW1lOyAvLy9cblxuICAgICAgbmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSdWxlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gbmV3IENsYXNzKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImlzQW1iaWd1b3VzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJwYXJzZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxvd2VyUHJlY2VkZW5jZSIsImlzTG93ZXJQcmVjZWRlbmNlIiwiYmFja3RyYWNrIiwicnVsZU5vZGUiLCJzb21lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7MkJBQ0E7eUJBRUY7c0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMsMEJBQVZELE9BQ0YsQUFBRUUsa0JBQW9CQyw0QkFBcEJEO0FBRU8sSUFBQSxBQUFNSCxxQkFBTjthQUFNQSxLQUNQSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxlQUFlO2dDQUR0Q1I7UUFFakIsSUFBSSxDQUFDSyxPQUFPQTtRQUNaLElBQUksQ0FBQ0MsWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxjQUFjQTtRQUNuQixJQUFJLENBQUNDLGtCQUFrQkE7O2tCQUxOUjs7WUFRbkJTLEtBQUFBO21C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