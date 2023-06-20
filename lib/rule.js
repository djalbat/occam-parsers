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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYW1iaWd1b3VzID0gYW1iaWd1b3VzO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzQW1iaWd1b3VzKCkge1xuICAgIHJldHVybiB0aGlzLmFtYmlndW91cztcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBydWxlTmFtZSkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgY2xlYXIobm9kZXMpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCB0aGlzLm5hbWUpOyAvLy9cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgaWYgKHRoaXMubmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkxvd2VyUHJlY2VkZW5jZSA9IGRlZmluaXRpb24uaXNMb3dlclByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Mb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgbGV0IG5vZGVzID0gW10sXG4gICAgICAgIHBhcnNlZDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nID0gdGhpcy5hbWJpZ3VvdXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZ0xlbmd0aCA9IGFtYmlndW91c1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gYW1iaWd1b3VzU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7YW1iaWd1b3VzU3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZShDbGFzcywgbmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKE5vblRlcm1pbmFsTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSBkZWZpbml0aW9uczsgIC8vL1xuXG4gICAgICBkZWZpbml0aW9ucyA9IGFtYmlndW91czsgIC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInBhcnNlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uTG93ZXJQcmVjZWRlbmNlIiwiaXNMb3dlclByZWNlZGVuY2UiLCJiYWNrdHJhY2siLCJydWxlTm9kZSIsInNvbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsyQkFDQTt5QkFFRjtzQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxRQUFVQywwQkFBVkQsT0FDRixBQUFFRSxrQkFBb0JDLDRCQUFwQkQ7QUFFTyxJQUFBLEFBQU1ILHFCQUFOO2FBQU1BLEtBQ1BLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7Z0NBRHRDUjtRQUVqQixJQUFJLENBQUNLLE9BQU9BO1FBQ1osSUFBSSxDQUFDQyxZQUFZQTtRQUNqQixJQUFJLENBQUNDLGNBQWNBO1FBQ25CLElBQUksQ0FBQ0Msa0JBQWtCQTs7a0JBTE5SOztZQVFuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFD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