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
                var parsed = false;
                var savedPrecedence = state.getSavedPrecedence();
                this.definitions.some(function(definition) {
                    var ruleName = _this.name, childNodes = [], nonTerminalNode = _this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
                    Object.assign(childNodes, {
                        ruleName: ruleName
                    });
                    var node = nonTerminalNode, precedence = definition.getPrecedence();
                    nodes.push(node);
                    state.setPrecedence(precedence);
                    parsed = definition.parse(childNodes, state, function() {
                        var parsed;
                        var precedence = state.getPrecedence();
                        nonTerminalNode.setPrecedence(precedence);
                        nonTerminalNode.rewrite();
                        parsed = true;
                        if (parsed) {
                            var empty = nonTerminalNode.isEmpty();
                            if (empty) {
                                parsed = false;
                            }
                        }
                        if (parsed) {
                            var unprecedented = nonTerminalNode.isUnprecedented();
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
                            nonTerminalNode.unrewrite();
                        }
                        return parsed;
                    }, callAhead);
                    if (!parsed) {
                        nodes.pop();
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWRQcmVjZWRlbmNlID0gc3RhdGUuZ2V0U2F2ZWRQcmVjZWRlbmNlKCk7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNoaWxkTm9kZXMsIHtcbiAgICAgICAgcnVsZU5hbWVcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHByZWNlZGVuY2UgPSBkZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgbm9kZXMucHVzaChub2RlKTtcblxuICAgICAgc3RhdGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSBzdGF0ZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnJld3JpdGUoKTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCBlbXB0eSA9IG5vblRlcm1pbmFsTm9kZS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCB1bnByZWNlZGVudGVkID0gbm9uVGVybWluYWxOb2RlLmlzVW5wcmVjZWRlbnRlZCgpO1xuXG4gICAgICAgICAgaWYgKHVucHJlY2VkZW50ZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUudW5yZXdyaXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSwgY2FsbEFoZWFkKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlKENsYXNzLCBuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAoTm9uVGVybWluYWxOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IGRlZmluaXRpb25zOyAgLy8vXG5cbiAgICAgIGRlZmluaXRpb25zID0gYW1iaWd1b3VzOyAgLy8vXG5cbiAgICAgIGFtYmlndW91cyA9IG5hbWU7IC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJzYXZlZFByZWNlZGVuY2UiLCJnZXRTYXZlZFByZWNlZGVuY2UiLCJzb21lIiwiZGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJub2RlIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJwdXNoIiwic2V0UHJlY2VkZW5jZSIsInJld3JpdGUiLCJlbXB0eSIsImlzRW1wdHkiLCJ1bnByZWNlZGVudGVkIiwiaXNVbnByZWNlZGVudGVkIiwicmVzZXRQcmVjZWRlbmNlIiwidW5yZXdyaXRlIiwicG9wIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUiLCJD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