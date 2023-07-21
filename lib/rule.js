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
                            nonTerminalNode.reset();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWRQcmVjZWRlbmNlID0gc3RhdGUuZ2V0U2F2ZWRQcmVjZWRlbmNlKCk7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNoaWxkTm9kZXMsIHtcbiAgICAgICAgcnVsZU5hbWVcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBub2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHByZWNlZGVuY2UgPSBkZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgbm9kZXMucHVzaChub2RlKTtcblxuICAgICAgc3RhdGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSBzdGF0ZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnJld3JpdGUoKTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCBlbXB0eSA9IG5vblRlcm1pbmFsTm9kZS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCB1bnByZWNlZGVudGVkID0gbm9uVGVybWluYWxOb2RlLmlzVW5wcmVjZWRlbnRlZCgpO1xuXG4gICAgICAgICAgaWYgKHVucHJlY2VkZW50ZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9LCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW1iaWd1b3VzRGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUoQ2xhc3MsIG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChOb25UZXJtaW5hbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgTm9uVGVybWluYWxOb2RlID0gZGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMgPSBhbWJpZ3VvdXM7ICAvLy9cblxuICAgICAgYW1iaWd1b3VzID0gbmFtZTsgLy8vXG5cbiAgICAgIG5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUnVsZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZSIsImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImlzQW1iaWd1b3VzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNvbWUiLCJkZWZpbml0aW9uIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIk9iamVjdCIsImFzc2lnbiIsIm5vZGUiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInB1c2giLCJzZXRQcmVjZWRlbmNlIiwicmV3cml0ZSIsImVtcHR5IiwiaXNFbXB0eSIsInVucHJlY2VkZW50ZWQiLCJpc1VucHJlY2VkZW50ZWQiLCJyZXNldFByZWNlZGVuY2UiLCJyZXNldCIsInBvcCIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZUFtYmlndW91c0RlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyQkFQVTt5QkFFRjtzQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxrQkFBb0JDLDJCQUFjLENBQWxDRDtBQUVPLElBQUEsQUFBTUQscUJBQU47YUFBTUEsS0FDUEcsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQ0FEdENOO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBOztrQkFMTk47O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUzs7Z0JBQ3JDLElBQUlDLFNBQVM7Z0JBRWIsSUFBTUMsa0JBQWtCSixNQUFNSyxrQkFBa0I7Z0JBRWhELElBQUksQ0FBQ2IsV0FBVyxDQUFDYyxJQUFJLENBQUMsU0FBQ0M7b0JBQ3JCLElBQU1DLFdBQVcsTUFBS2xCLElBQUksRUFDcEJtQixhQUFhLEVBQUUsRUFDZkMsa0JBQWtCLE1BQUtqQixlQUFlLENBQUNrQix5QkFBeUIsQ0FBQ0gsVUFBVUM7b0JBRWpGRyxPQUFPQyxNQUFNLENBQUNKLFlBQVk7d0JBQ3hCRCxVQUFBQTtvQkFDRjtvQkFFQSxJQUFNTSxPQUFPSixpQkFDUEssYUFBYVIsV0FBV1MsYUFBYTtvQkFFM0NqQixNQUFNa0IsSUFBSSxDQUFDSDtvQkFFWGQsTUFBTWtCLGFBQWEsQ0FBQ0g7b0JBRXBCWixTQUFTSSxXQUFXVCxLQUFLLENBQUNXLFlBQVlULE9BQU87d0JBQzNDLElBQUlHO3dCQUVKLElBQU1ZLGFBQWFmLE1BQU1nQixhQUFhO3dCQUV0Q04sZ0JBQWdCUSxhQUFhLENBQUNIO3dCQUU5QkwsZ0JBQWdCUyxPQUFPO3dCQUV2QmhCLFNBQVM7d0JBRVQsSUFBSUEsUUFBUTs0QkFDVixJQUFNaUIsUUFBUVYsZ0JBQWdCVyxPQUFPOzRCQUVyQyxJQUFJRCxPQUFPO2dDQUNUakIsU0FBUzs0QkFDWDt3QkFDRjt3QkFFQSxJQUFJQSxRQUFROzRCQUNWLElBQU1tQixnQkFBZ0JaLGdCQUFnQmEsZUFBZTs0QkFFckQsSUFBSUQsZUFBZTtnQ0FDakJuQixTQUFTOzRCQUNYO3dCQUNGO3dCQUVBLElBQUlBLFFBQVE7NEJBQ1YsSUFBSUQsY0FBYyxNQUFNO2dDQUN0QkYsTUFBTXdCLGVBQWUsQ0FBQ3BCO2dDQUV0QkQsU0FBU0Q7NEJBQ1g7d0JBQ0Y7d0JBRUEsSUFBSSxDQUFDQyxRQUFROzRCQUNYTyxnQkFBZ0JlLEtBQUs7d0JBQ3ZCO3dCQUVBLE9BQU90QjtvQkFDVCxHQUFHRDtvQkFFSCxJQUFJLENBQUNDLFFBQVE7d0JBQ1hKLE1BQU0yQixHQUFHO29CQUNYO29CQUVBLElBQUl2QixRQUFRO3dCQUNWLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUQsY0FBYyxNQUFNO29CQUN0QkYsTUFBTXdCLGVBQWUsQ0FBQ3BCO2dCQUN4QjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQXdCLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxxQkFBcUI7b0JBQUVDLFlBQUFBLGlFQUFZO2dCQUMxQyxJQUFNQyxvQkFBb0IsSUFBSSxDQUFDdEMsV0FBVyxDQUFDdUMsTUFBTTtnQkFFakRGLFlBQVlBLGFBQWNDLG9CQUFvQixHQUFLLEdBQUc7Z0JBRXRELElBQU1FLGlCQUFpQkMsSUFBQUEsZ0NBQXdCLEVBQUNMLHdCQUMxQ00sb0JBQW9CLElBQUksQ0FBQzFDLFdBQVcsQ0FBQzJDLE1BQU0sQ0FBQyxTQUFDRCxtQkFBbUIzQjtvQkFDOUQsSUFBTTZCLG1CQUFtQjdCLFdBQVdvQixRQUFRO29CQUU1QyxJQUFJTyxzQkFBc0JHLHVCQUFZLEVBQUU7d0JBQ3RDSCxvQkFBb0JFLGtCQUFrQixHQUFHO29CQUMzQyxPQUFPO3dCQUNMRixvQkFBb0JMLFlBQ0MsQUFBQyxHQUVsQ0csT0FGb0NFLG1CQUFrQixRQUVoQ0UsT0FBdEJKLGdCQUFlLFNBQXdCLE9BQWpCSSxvQkFDYSxBQUFDLEdBQXlCQSxPQUF2QkYsbUJBQWtCLE9BQXNCLE9BQWpCRTtvQkFDbkQ7b0JBRUEsT0FBT0Y7Z0JBQ1QsR0FBR0csdUJBQVksR0FDZjdCLFdBQVcsSUFBSSxDQUFDbEIsSUFBSSxFQUNwQmdELGlCQUFpQjlCLFNBQVN1QixNQUFNLEVBQ2hDUSxrQkFBa0IsSUFBSSxDQUFDaEQsU0FBUyxHQUNaSCxrQkFDRWlELHVCQUFZLEVBQ2xDRyx3QkFBd0JELGdCQUFnQlIsTUFBTSxFQUM5Q1UsZ0JBQWdCYix3QkFBd0JVLGlCQUFpQkUsdUJBQ3pERSxVQUFVVCxJQUFBQSxnQ0FBd0IsRUFBQ1E7Z0JBRXpDLElBQU1FLGtCQUFrQmQsWUFDQyxBQUFDLE9BRWIsT0FBZkcsZ0JBQWUsVUFDYyxNQUNyQlksU0FBUyxBQUFDLE9BRU5MLE9BQVosSUFBSSxDQUFDakQsSUFBSSxFQUFxQm9ELE9BQWxCSCxpQkFBaUNMLE9BQWZRLFNBQVEsU0FBMkJDLE9BQXBCVCxtQkFBb0MsT0FBaEJTO2dCQUUvRCxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLCtDQUErQ0MsS0FBSyxFQUFFeEQsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQkFDeEcsSUFBSUEsb0JBQW9Cc0QsV0FBVztvQkFDakN0RCxrQkFBa0JELGFBQWMsR0FBRztvQkFFbkNBLGNBQWNELFdBQVksR0FBRztvQkFFN0JBLFlBQVlELE1BQU0sR0FBRztvQkFFckJBLE9BQU93RCxPQUFPLEdBQUc7b0JBRWpCQSxRQTNKZTNELE1BMkpELEdBQUc7Z0JBQ25CO2dCQUVBLElBQU02RCxPQUFPLElBQUlGLE1BQU14RCxNQUFNQyxXQUFXQyxhQUFhQztnQkFFckQsT0FBT3VEO1lBQ1Q7OztXQWpLbUI3RCJ9