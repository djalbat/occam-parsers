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
            key: "parseDefinition",
            value: function parseDefinition(definition, nodes, state, callback, parentRuleName, parentPrecedence) {
                var parsed;
                var savedIndex = state.getSavedIndex();
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
                var nodes, parsed;
                this.definitions.some(function(definition) {
                    nodes = [];
                    parsed = _this.parseDefinition(definition, nodes, state, callback, parentRuleName, parentPrecedence);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIHBhcmVudFJ1bGVOYW1lLCBwYXJlbnRQcmVjZWRlbmNlKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChub2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgIGlmIChydWxlTmFtZSA9PT0gcGFyZW50UnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbkxvd2VyUHJlY2VkZW5jZSA9IGRlZmluaXRpb24uaXNMb3dlclByZWNlZGVuY2UocGFyZW50UHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Mb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBydWxlTm9kZSA9IG51bGw7XG5cbiAgICBsZXQgcnVsZU5hbWUgPSBzdGF0ZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBwcmVjZWRlbmNlID0gc3RhdGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgY29uc3QgcGFyZW50UnVsZU5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHBhcmVudFByZWNlZGVuY2UgPSBwcmVjZWRlbmNlOyAgLy8vXG5cbiAgICBydWxlTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICBzdGF0ZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICBsZXQgbm9kZXMsXG4gICAgICAgIHBhcnNlZDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGVzLCAgLy8vXG4gICAgICAgICAgICBwcmVjZWRlbmNlID0gc3RhdGUuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcHJlY2VkZW5jZSA9IHBhcmVudFByZWNlZGVuY2U7ICAvLy9cblxuICAgIHJ1bGVOYW1lID0gcGFyZW50UnVsZU5hbWU7ICAvLy9cblxuICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICBzdGF0ZS5zZXRSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUoQ2xhc3MsIG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChOb25UZXJtaW5hbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgTm9uVGVybWluYWxOb2RlID0gZGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMgPSBhbWJpZ3VvdXM7ICAvLy9cblxuICAgICAgYW1iaWd1b3VzID0gbmFtZTsgLy8vXG5cbiAgICAgIG5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUnVsZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZSIsImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImlzQW1iaWd1b3VzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJwYXJzZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyZW50UnVsZU5hbWUiLCJwYXJlbnRQcmVjZWRlbmNlIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWUiLCJkZWZpbml0aW9uTG93ZXJQcmVjZWRlbmNlIiwiaXNMb3dlclByZWNlZGVuY2UiLCJiYWNrdHJhY2siLCJydWxlTm9kZSIsImdldFJ1bGVOYW1lIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJzZXRSdWxlTmFtZSIsInNvbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UiLCJzZXRQcmVjZWRlbmNlIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUiLCJDbGFzcyIsInVuZGVmaW5lZCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJCQVBVO3lCQUVGO3NCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVDLGtCQUFvQkMsNEJBQXBCRDtBQUVPLElBQUEsQUFBTUQscUJBQU47YUFBTUEsS0FDUEcsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQ0FEdENOO1FBRWpCLElBQUksQ0FBQ0csT0FBT0E7UUFDWixJQUFJLENBQUNDLFlBQVlBO1FBQ2pCLElBQUksQ0FBQ0MsY0FBY0E7UUFDbkIsSUFBSSxDQUFDQyxrQkFBa0JBOztrQkFMTk47O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGNBQWMsRUFBRUMsZ0JBQWdCO2dCQUNsRixJQUFJQztnQkFFSixJQUFNQyxhQUFhTCxNQUFNTTtnQkFFekJGLFNBQVNOLFdBQVdTLE1BQU1SLE9BQU9DLE9BQU9DO2dCQUV4QyxJQUFJRyxRQUFRO29CQUNWLElBQU1JLGNBQWNULE1BQU1VO29CQUUxQixJQUFJRCxnQkFB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