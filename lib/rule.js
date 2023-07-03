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
                    var precedence = definition.getPrecedence();
                    if (precedence === null) {
                        var childNodes = [];
                        parsed = definition.parse(childNodes, state, callback);
                        if (parsed) {
                            var node = _this.nodeFromChildNodesAndPrecedence(childNodes, precedence);
                            nodes.push(node);
                        }
                    } else {
                        var childNodes1 = [];
                        parsed = definition.parse(childNodes1, state, function() {
                            var parsed;
                            var childNodesLowerPrecedence = _this.areChildNodesLowerPrecedence(childNodes1, precedence);
                            parsed = !childNodesLowerPrecedence;
                            if (parsed) {
                                var node = _this.nodeFromChildNodesAndPrecedence(childNodes1, precedence);
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
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IGRlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gW107XG5cbiAgICAgICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlRnJvbUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IFtdO1xuXG4gICAgICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2UoY2hpbGROb2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgICAgY29uc3QgY2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZSA9IHRoaXMuYXJlQ2hpbGROb2Rlc0xvd2VyUHJlY2VkZW5jZShjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgICAgICAgIHBhcnNlZCA9ICFjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZUZyb21DaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFyZUNoaWxkTm9kZXNMb3dlclByZWNlZGVuY2UoY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgbm9kZUZyb21DaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKSxcbiAgICAgICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlKENsYXNzLCBuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAoTm9uVGVybWluYWxOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IGRlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zID0gYW1iaWd1b3VzOyAgLy8vXG5cbiAgICAgIGFtYmlndW91cyA9IG5hbWU7IC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm5vZGUiLCJub2RlRnJvbUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwicHVzaCIsImNoaWxkTm9kZXNMb3dlclByZWNlZGVuY2UiLCJhcmVDaGlsZE5vZGVzTG93ZXJQcmVjZWRlbmNlIiwicG9wIiwicnVsZU5hbWUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJpc0xvd2VyUHJlY2VkZW5jZSIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUiLCJDbGFzcyIsInVuZGVmaW5lZCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJCQVBVO3lCQUVGO3NCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVDLGtCQUFvQkMsNEJBQXBCRDtBQUVPLElBQUEsQUFBTUQscUJBQU47YUFBTUEsS0FDUEcsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQ0FEdENOO1FBRWpCLElBQUksQ0FBQ0csT0FBT0E7UUFDWixJQUFJLENBQUNDLFlBQVlBO1FBQ2pCLElBQUksQ0FBQ0MsY0FBY0E7UUFDbkIsSUFBSSxDQUFDQyxrQkFBa0JBOztrQkFMTk47O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7O2dCQUMxQixJQUFJQyxTQUFTO2dCQUViLElBQUksQ0FBQ1YsWUFBWVcsS0FBSyxTQUFDQztvQkFDckIsSUFBTUMsYUFBYUQsV0FBV0U7b0JBRTlCLElBQUlELGVBQWUsTUFBTTt3QkFDdkIsSUFBTUUs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