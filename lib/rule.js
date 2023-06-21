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
            value: function parseDefinition(definition, nodes, state, callback, parentRuleName, parentPrecedence) {
                var parsed;
                var savedIndex = state.getSavedIndex();
                clear(nodes);
                parsed = definition.parse(nodes, state, callback);
                if (parsed) {
                    var nodesLength = nodes.length;
                    if (nodesLength === 0) {
                        parsed = false;
                    }
                }
                if (parsed) {
                    var ruleName = this.name; ///
                    if (ruleName === parentRuleName) {
                        var definitionLowerPrecedence = definition.isLowerPrecedence(parentPrecedence);
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
            value: function parse(state, callback) {
                var _this = this;
                var ruleNode = null;
                var ruleName = state.getRuleName(), precedence = state.getPrecedence();
                var parentRuleName = ruleName, parentPrecedence = precedence; ///
                ruleName = this.name; ///
                state.setRuleName(ruleName);
                var nodes = [], parsed = this.definitions.some(function(definition) {
                    var parsed = _this.parseDefinition(definition, nodes, state, callback, parentRuleName, parentPrecedence);
                    if (parsed) {
                        return true;
                    }
                });
                if (parsed) {
                    var ruleName1 = this.name, childNodes = nodes, precedence1 = state.getPrecedence(), nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName1, childNodes, precedence1);
                    ruleNode = nonTerminalNode; ///
                }
                precedence = parentPrecedence; ///
                ruleName = parentRuleName; ///
                state.setPrecedence(precedence);
                state.setRuleName(ruleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYW1iaWd1b3VzID0gYW1iaWd1b3VzO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzQW1iaWd1b3VzKCkge1xuICAgIHJldHVybiB0aGlzLmFtYmlndW91cztcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwYXJlbnRSdWxlTmFtZSwgcGFyZW50UHJlY2VkZW5jZSkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgY2xlYXIobm9kZXMpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAobm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICBpZiAocnVsZU5hbWUgPT09IHBhcmVudFJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25Mb3dlclByZWNlZGVuY2UgPSBkZWZpbml0aW9uLmlzTG93ZXJQcmVjZWRlbmNlKHBhcmVudFByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChkZWZpbml0aW9uTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgbGV0IHJ1bGVOYW1lID0gc3RhdGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcHJlY2VkZW5jZSA9IHN0YXRlLmdldFByZWNlZGVuY2UoKTtcblxuICAgIGNvbnN0IHBhcmVudFJ1bGVOYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBwYXJlbnRQcmVjZWRlbmNlID0gcHJlY2VkZW5jZTsgIC8vL1xuXG4gICAgcnVsZU5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgc3RhdGUuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgY29uc3Qgbm9kZXMgPSBbXSxcbiAgICAgICAgICBwYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIHBhcmVudFJ1bGVOYW1lLCBwYXJlbnRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgcHJlY2VkZW5jZSA9IHN0YXRlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHByZWNlZGVuY2UgPSBwYXJlbnRQcmVjZWRlbmNlOyAgLy8vXG5cbiAgICBydWxlTmFtZSA9IHBhcmVudFJ1bGVOYW1lOyAgLy8vXG5cbiAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuXG4gICAgc3RhdGUuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlKENsYXNzLCBuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAoTm9uVGVybWluYWxOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IGRlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zID0gYW1iaWd1b3VzOyAgLy8vXG5cbiAgICAgIGFtYmlndW91cyA9IG5hbWU7IC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInBhcnNlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJlbnRSdWxlTmFtZSIsInBhcmVudFByZWNlZGVuY2UiLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImRlZmluaXRpb25Mb3dlclByZWNlZGVuY2UiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImJhY2t0cmFjayIsInJ1bGVOb2RlIiwiZ2V0UnVsZU5hbWUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInNldFJ1bGVOYW1lIiwic29tZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsInNldFByZWNlZGVuY2UiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5hbWVBbWJpZ3VvdXNEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7MkJBQ0E7eUJBRUY7c0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMsMEJBQVZELE9BQ0YsQUFBRUUsa0JBQW9CQyw0QkFBcEJEO0FBRU8sSUFBQSxBQUFNSCxxQkFBTjthQUFNQSxLQUNQSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxlQUFlO2dDQUR0Q1I7UUFFakIsSUFBSSxDQUFDSyxPQUFPQTtRQUNaLElBQUksQ0FBQ0MsWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxjQUFjQTtRQUNuQixJQUFJLENBQUNDLGtCQUFrQkE7O2tCQUxOUjs7WUFRbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0o7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0o7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0o7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0o7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLFVBQVUsRUFBRUMsS0FBSyxFQUFF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