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
            value: function parse(nodes, state, callback) {
                var _this = this;
                var parsed = false;
                this.definitions.some(function(definition) {
                    var childNodes = [];
                    parsed = definition.parse(childNodes, state, function() {
                        var parsed;
                        var precedence = definition.getPrecedence();
                        if (precedence === null) {
                            parsed = true;
                        } else {
                            var childNodesLowerPrecedence = _this.areChildNodesLowerPrecedence(childNodes, precedence);
                            parsed = !childNodesLowerPrecedence;
                        }
                        if (parsed) {
                            var node = _this.nodeFromChildNodesAndPrecedence(childNodes, precedence);
                            nodes.push(node);
                            if (callback !== null) {
                                parsed = callback();
                                if (!parsed) {
                                    nodes.pop();
                                }
                            }
                        }
                        return parsed;
                    });
                    if (parsed) {
                        return true;
                    }
                });
                return parsed;
            }
        },
        {
            key: "areChildNodesLowerPrecedence",
            value: function areChildNodesLowerPrecedence(childNodes, precedence) {
                var ruleName = this.name, childNodesLowerPrecedence = childNodes.some(function(childNode) {
                    var childNodeLowerPrecedence = childNode.isLowerPrecedence(ruleName, precedence);
                    if (childNodeLowerPrecedence) {
                        return true;
                    }
                });
                return childNodesLowerPrecedence;
            }
        },
        {
            key: "nodeFromChildNodesAndPrecedence",
            value: function nodeFromChildNodesAndPrecedence(childNodes, precedence) {
                var ruleName = this.name, nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence), node = nonTerminalNode; ///
                return node;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IGRlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICAgIGlmIChwcmVjZWRlbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlID0gdGhpcy5hcmVDaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlKGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgcGFyc2VkID0gIWNoaWxkTm9kZXNMb3dlclByZWNlZGVuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZUZyb21DaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhcmVDaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlKGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIG5vZGVGcm9tQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UoY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSksXG4gICAgICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nID0gdGhpcy5hbWJpZ3VvdXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZ0xlbmd0aCA9IGFtYmlndW91c1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gYW1iaWd1b3VzU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7YW1iaWd1b3VzU3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZShDbGFzcywgbmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKE5vblRlcm1pbmFsTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSBkZWZpbml0aW9uczsgIC8vL1xuXG4gICAgICBkZWZpbml0aW9ucyA9IGFtYmlndW91czsgIC8vL1xuXG4gICAgICBhbWJpZ3VvdXMgPSBuYW1lOyAvLy9cblxuICAgICAgbmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSdWxlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gbmV3IENsYXNzKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic29tZSIsImRlZmluaXRpb24iLCJjaGlsZE5vZGVzIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlIiwiYXJlQ2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZSIsIm5vZGUiLCJub2RlRnJvbUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwicHVzaCIsInBvcCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlIiwiaXNMb3dlclByZWNlZGVuY2UiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7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