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
                    var childNodes = [], precedence = definition.getPrecedence();
                    if (precedence === null) {
                        parsed = definition.parse(childNodes, state, callback);
                        if (parsed) {
                            var ruleName = _this.name, nonTerminalNode = _this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence), node = nonTerminalNode; ///
                            nodes.push(node);
                        }
                    } else {
                        parsed = definition.parse(childNodes, state, function() {
                            var parsed;
                            var ruleName = _this.name, nodesLowerPrecedence = childNodes.some(function(childNode) {
                                var childNodeLowerPrecedence = childNode.isLowerPrecedence(ruleName, precedence);
                                if (childNodeLowerPrecedence) {
                                    return true;
                                }
                            });
                            parsed = !nodesLowerPrecedence;
                            if (parsed) {
                                var ruleName1 = _this.name, nonTerminalNode = _this.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(ruleName1, childNodes, precedence), node = nonTerminalNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgICAgcHJlY2VkZW5jZSA9IGRlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSksXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgICAgICBub2Rlc0xvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UgPSBjaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcGFyc2VkID0gIW5vZGVzTG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpLFxuICAgICAgICAgICAgICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgbm9kZXMucG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUoQ2xhc3MsIG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChOb25UZXJtaW5hbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgTm9uVGVybWluYWxOb2RlID0gZGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMgPSBhbWJpZ3VvdXM7ICAvLy9cblxuICAgICAgYW1iaWd1b3VzID0gbmFtZTsgLy8vXG5cbiAgICAgIG5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUnVsZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZSIsImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImlzQW1iaWd1b3VzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNvbWUiLCJkZWZpbml0aW9uIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZSIsIm5vZGUiLCJwdXNoIiwibm9kZXNMb3dlclByZWNlZGVuY2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJpc0xvd2VyUHJlY2VkZW5jZSIsInBvcCIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyQkFQVTt5QkFFRjtzQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxr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