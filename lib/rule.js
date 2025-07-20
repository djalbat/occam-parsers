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
var _constants = require("./constants");
var _occamlexers = require("occam-lexers");
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
var clear = _necessary.arrayUtilities.clear, opaqueSpecialSymbol = _occamlexers.specialSymbols.opaque, semiOpaqueSpecialSymbol = _occamlexers.specialSymbols.semiOpaque;
var Rule = /*#__PURE__*/ function() {
    function Rule(name, opacity, definitions) {
        _class_call_check(this, Rule);
        this.name = name;
        this.opacity = opacity;
        this.definitions = definitions;
    }
    _create_class(Rule, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getOpacity",
            value: function getOpacity() {
                return this.opacity;
            }
        },
        {
            key: "getDefinitions",
            value: function getDefinitions() {
                return this.definitions;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setOpacity",
            value: function setOpacity(opacity) {
                this.opacity = opacity;
            }
        },
        {
            key: "setDefinitions",
            value: function setDefinitions(definitions) {
                this.definitions = definitions;
            }
        },
        {
            key: "isOpaque",
            value: function isOpaque() {
                var opaque = this.opacity === opaqueSpecialSymbol;
                return opaque;
            }
        },
        {
            key: "isSemiOpaque",
            value: function isSemiOpaque() {
                var semiOpaque = this.opacity === semiOpaqueSpecialSymbol;
                return semiOpaque;
            }
        },
        {
            key: "isTransparent",
            value: function isTransparent() {
                var semiOpaque = this.opacity === null;
                return semiOpaque;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var opacity = this.opacity, ruleName = this.name, childNodes = [], NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName, state), nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity), savedPrecedence = state.getSavedPrecedence();
                var node = nonTerminalNode; ///
                nodes.push(node);
                parsed = this.definitions.some(function(definition) {
                    var parsed;
                    clear(childNodes);
                    var precedence = definition.getPrecedence();
                    state.setPrecedence(precedence);
                    callback = function() {
                        var parsed;
                        var precedence = state.getPrecedence();
                        nonTerminalNode.setPrecedence(precedence);
                        parsed = true;
                        if (parsed) {
                            node.setChildNodesParentNode();
                        }
                        var rewrittenNonTerminalNode = nonTerminalNode.rewrite(state);
                        if (rewrittenNonTerminalNode !== null) {
                            if (parsed) {
                                nodes.pop();
                                node = rewrittenNonTerminalNode; ///
                                nodes.push(node);
                            }
                        }
                        if (parsed) {
                            var empty = node.isEmpty();
                            if (empty) {
                                parsed = false;
                            }
                        }
                        if (parsed) {
                            var unprecedented = node.isUnprecedented();
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
                        if (rewrittenNonTerminalNode !== null) {
                            if (!parsed) {
                                nodes.pop();
                                node = nonTerminalNode; ///
                                nodes.push(node);
                            }
                        }
                        if (!parsed) {
                            node.resetChildNodesParentNode();
                        }
                        return parsed;
                    };
                    parsed = definition.parse(childNodes, state, callback, callAhead);
                    if (!parsed) {
                        state.resetPrecedence(savedPrecedence);
                    }
                    return parsed;
                });
                if (!parsed) {
                    nodes.pop();
                }
                if (callAhead === null) {
                    state.resetPrecedence(savedPrecedence);
                }
                return parsed;
            }
        },
        {
            key: "NonTerminalNodeFromRuleName",
            value: function NonTerminalNodeFromRuleName(ruleName, state) {
                return state.NonTerminalNodeFromRuleName(ruleName);
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
                }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, opacityString = this.opacity === null ? _constants.EMPTY_STRING : this.opacity, opacityStringLength = opacityString.length, paddingLength = maximumRuleNameLength - ruleNameLength - opacityStringLength, padding = (0, _string.paddingFromPaddingLength)(paddingLength);
                var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(opacityString).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
                return string;
            }
        }
    ], [
        {
            key: "fromNameOpacityAndDefinitions",
            value: function fromNameOpacityAndDefinitions(Class, name, opacity, definitions) {
                if (definitions === undefined) {
                    definitions = opacity; ///
                    opacity = name; ///
                    name = Class; ///
                    Class = Rule; ///
                }
                var rule = new Class(name, opacity, definitions);
                return rule;
            }
        }
    ]);
    return Rule;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG9wYXF1ZTogb3BhcXVlU3BlY2lhbFN5bWJvbCwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0T3BhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5O1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBzdGF0ZSksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSxcbiAgICAgICAgICBzYXZlZFByZWNlZGVuY2UgPSBzdGF0ZS5nZXRTYXZlZFByZWNlZGVuY2UoKTtcblxuICAgIGxldCBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICBwYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgIGNsZWFyKGNoaWxkTm9kZXMpO1xuXG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gZGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGNhbGxiYWNrID0gKCkgPT4geyAgLy8vXG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHN0YXRlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBub2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGUucmV3cml0ZShzdGF0ZSk7XG5cbiAgICAgICAgaWYgKHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzLnBvcCgpO1xuXG4gICAgICAgICAgICBub2RlID0gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3QgZW1wdHkgPSBub2RlLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IHVucHJlY2VkZW50ZWQgPSBub2RlLmlzVW5wcmVjZWRlbnRlZCgpO1xuXG4gICAgICAgICAgaWYgKHVucHJlY2VkZW50ZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2RlLnJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9O1xuXG4gICAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIE5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZShydWxlTmFtZSwgc3RhdGUpIHsgcmV0dXJuIHN0YXRlLk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZShydWxlTmFtZSk7IH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIG9wYWNpdHlTdHJpbmcgPSAodGhpcy5vcGFjaXR5ID09PSBudWxsKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5LCAvLy9cbiAgICAgICAgICBvcGFjaXR5U3RyaW5nTGVuZ3RoID0gb3BhY2l0eVN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gb3BhY2l0eVN0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke29wYWNpdHlTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZU9wYWNpdHlBbmREZWZpbml0aW9ucyhDbGFzcywgbmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpIHtcbiAgICBpZiAoZGVmaW5pdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVmaW5pdGlvbnMgPSBvcGFjaXR5OyAgLy8vXG5cbiAgICAgIG9wYWNpdHkgPSBuYW1lOyAvLy9cblxuICAgICAgbmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSdWxlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gbmV3IENsYXNzKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImNsZWFyIiwiYXJyYXlVdGlsaXRpZXMiLCJvcGFxdWUiLCJvcGFxdWVTcGVjaWFsU3ltYm9sIiwic3BlY2lhbFN5bWJvbHMiLCJzZW1pT3BhcXVlIiwic2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJuYW1lIiwib3BhY2l0eSIsImRlZmluaXRpb25zIiwiZ2V0TmFtZSIsImdldE9wYWNpdHkiLCJnZXREZWZpbml0aW9ucyIsInNldE5hbWUiLCJzZXRPcGFjaXR5Iiwic2V0RGVmaW5pdGlvbnMiLCJpc09wYXF1ZSIsImlzU2VtaU9wYXF1ZSIsImlzVHJhbnNwYXJlbnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIk5vblRlcm1pbmFsTm9kZSIsIk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Iiwic2F2ZWRQcmVjZWRlbmNlIiwiZ2V0U2F2ZWRQcmVjZWRlbmNlIiwibm9kZSIsInB1c2giLCJzb21lIiwiZGVmaW5pdGlvbiIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwic2V0UHJlY2VkZW5jZSIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwicmV3cml0dGVuTm9uVGVybWluYWxOb2RlIiwicmV3cml0ZSIsInBvcCIsImVtcHR5IiwiaXNFbXB0eSIsInVucHJlY2VkZW50ZWQiLCJpc1VucHJlY2VkZW50ZWQiLCJyZXNldFByZWNlZGVuY2UiLCJyZXNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJvcGFjaXR5U3RyaW5nIiwib3BhY2l0eVN0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5hbWVPcGFjaXR5QW5kRGVmaW5pdGlvbnMiLCJDbGFzcyIsInVuZGVmaW5lZCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVO3lCQUVGOzJCQUNFO3NCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRCxPQUNBRSxBQUFRQyxzQkFBNkRDLDJCQUFjLENBQW5GRixRQUE2QkcsQUFBWUMsMEJBQTRCRiwyQkFBYyxDQUF0REM7QUFFdEIsSUFBQSxBQUFNTixxQkFBTjthQUFNQSxLQUNQUSxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQ0FEbkJWO1FBRWpCLElBQUksQ0FBQ1EsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSkZWOztZQU9uQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFB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