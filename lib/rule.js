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
                var opacity = this.opacity, ruleName = this.name, precedence = null, childNodes = [], NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName, state), nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence), savedPrecedence = state.getSavedPrecedence();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG9wYXF1ZTogb3BhcXVlU3BlY2lhbFN5bWJvbCwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0T3BhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5O1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBzdGF0ZSksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSksXG4gICAgICAgICAgc2F2ZWRQcmVjZWRlbmNlID0gc3RhdGUuZ2V0U2F2ZWRQcmVjZWRlbmNlKCk7XG5cbiAgICBsZXQgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICBub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgcGFyc2VkID0gdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICBjbGVhcihjaGlsZE5vZGVzKTtcblxuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IGRlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuXG4gICAgICBjYWxsYmFjayA9ICgpID0+IHsgIC8vL1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSBzdGF0ZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV3cml0dGVuTm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlLnJld3JpdGUoc3RhdGUpO1xuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gbm9kZS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCB1bnByZWNlZGVudGVkID0gbm9kZS5pc1VucHJlY2VkZW50ZWQoKTtcblxuICAgICAgICAgIGlmICh1bnByZWNlZGVudGVkKSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgbm9kZS5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfTtcblxuICAgICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUocnVsZU5hbWUsIHN0YXRlKSB7IHJldHVybiBzdGF0ZS5Ob25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUocnVsZU5hbWUpOyB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBvcGFjaXR5U3RyaW5nID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSwgLy8vXG4gICAgICAgICAgb3BhY2l0eVN0cmluZ0xlbmd0aCA9IG9wYWNpdHlTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIG9wYWNpdHlTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHtvcGFjaXR5U3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVPcGFjaXR5QW5kRGVmaW5pdGlvbnMoQ2xhc3MsIG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKSB7XG4gICAgaWYgKGRlZmluaXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlZmluaXRpb25zID0gb3BhY2l0eTsgIC8vL1xuXG4gICAgICBvcGFjaXR5ID0gbmFtZTsgLy8vXG5cbiAgICAgIG5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUnVsZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwib3BhcXVlIiwib3BhcXVlU3BlY2lhbFN5bWJvbCIsInNwZWNpYWxTeW1ib2xzIiwic2VtaU9wYXF1ZSIsInNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sIiwibmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImdldE5hbWUiLCJnZXRPcGFjaXR5IiwiZ2V0RGVmaW5pdGlvbnMiLCJzZXROYW1lIiwic2V0T3BhY2l0eSIsInNldERlZmluaXRpb25zIiwiaXNPcGFxdWUiLCJpc1NlbWlPcGFxdWUiLCJpc1RyYW5zcGFyZW50IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJydWxlTmFtZSIsInByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwic2F2ZWRQcmVjZWRlbmNlIiwiZ2V0U2F2ZWRQcmVjZWRlbmNlIiwibm9kZSIsInB1c2giLCJzb21lIiwiZGVmaW5pdGlvbiIsImdldFByZWNlZGVuY2UiLCJzZXRQcmVjZWRlbmNlIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlIiwicG9wIiwiZW1wdHkiLCJpc0VtcHR5IiwidW5wcmVjZWRlbnRlZCIsImlzVW5wcmVjZWRlbnRlZCIsInJlc2V0UHJlY2VkZW5jZSIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsIm9wYWNpdHlTdHJpbmciLCJvcGFjaXR5U3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZU9wYWNpdHlBbmREZWZpbml0aW9ucyIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7eUJBRUY7MkJBQ0U7c0JBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLEFBQVFDLHNCQUE2REMsMkJBQWMsQ0FBbkZGLFFBQTZCRyxBQUFZQywwQkFBNEJGLDJCQUFjLENBQXREQztBQUV0QixJQUFBLEFBQU1OLHFCQUFOO2FBQU1BLEtBQ1BRLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXO2dDQURuQlY7UUFFakIsSUFBSSxDQUFDUSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFKRlY7O1lBT25CVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU4sSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXTixPQUFPO2dCQUNoQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7WUFDakI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZU4sV0FBVztnQkFDeEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLFNBQVUsSUFBSSxDQUFDTSxPQUFPLEtBQUtMO2dCQUVqQyxPQUFPRDtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLGFBQWMsSUFBSSxDQUFDRyxPQUFPLEtBQUtGO2dCQUVyQyxPQUFPRDtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLGFBQWMsSUFBSSxDQUFDRyxPQUFPLEtBQUs7Z0JBRXJDLE9BQU9IO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTWhCLFVBQVUsSUFBSSxDQUFDQSxPQUFPLEVBQ3RCaUIsV0FBVyxJQUFJLENBQUNsQixJQUFJLEVBQ3BCbUIsYUFBYSxNQUNiQyxhQUFhLEVBQUUsRUFDZkMsa0JBQWtCLElBQUksQ0FBQ0MsMkJBQTJCLENBQUNKLFVBQVVKLFFBQzdEUyxrQkFBa0JGLGdCQUFnQkcsMENBQTBDLENBQUNOLFVBQVVFLFlBQVluQixTQUFTa0IsYUFDNUdNLGtCQUFrQlgsTUFBTVksa0JBQWtCO2dCQUVoRCxJQUFJQyxPQUFPSixpQkFBaUIsR0FBRztnQkFFL0JWLE1BQU1lLElBQUksQ0FBQ0Q7Z0JBRVhWLFNBQVMsSUFBSSxDQUFDZixXQUFXLENBQUMyQixJQUFJLENBQUMsU0FBQ0M7b0JBQzlCLElBQUliO29CQUVKeEIsTUFBTTJCO29CQUVOLElBQU1ELGFBQWFXLFdBQVdDLGFBQWE7b0JBRTNDakIsTUFBTWtCLGFBQWEsQ0FBQ2I7b0JBRXBCSixXQUFXO3dCQUNULElBQUlFO3dCQUVKLElBQU1FLGFBQWFMLE1BQU1pQixhQUFhO3dCQUV0Q1IsZ0JBQWdCUyxhQUFhLENBQUNiO3dCQUU5QkYsU0FBUzt3QkFFVCxJQUFJQSxRQUFROzRCQUNWVSxLQUFLTSx1QkFBdUI7d0JBQzlCO3dCQUVBLElBQU1DLDJCQUEyQlgsZ0JBQWdCWSxPQUFPLENBQUNyQjt3QkFFekQsSUFBSW9CLDZCQUE2QixNQUFNOzRCQUNyQyxJQUFJakIsUUFBUTtnQ0FDVkosTUFBTXVCLEdBQUc7Z0NBRVRULE9BQU9PLDBCQUEwQixHQUFHO2dDQUVwQ3JCLE1BQU1lLElBQUksQ0FBQ0Q7NEJBQ2I7d0JBQ0Y7d0JBRUEsSUFBSVYsUUFBUTs0QkFDVixJQUFNb0IsUUFBUVYsS0FBS1csT0FBTzs0QkFFMUIsSUFBSUQsT0FBTztnQ0FDVHBCLFNBQVM7NEJBQ1g7d0JBQ0Y7d0JBRUEsSUFBSUEsUUFBUTs0QkFDVixJQUFNc0IsZ0JBQWdCWixLQUFLYSxlQUFlOzRCQUUxQyxJQUFJRCxlQUFlO2dDQUNqQnRCLFNBQVM7NEJBQ1g7d0JBQ0Y7d0JBRUEsSUFBSUEsUUFBUTs0QkFDVixJQUFJRCxjQUFjLE1BQU07Z0NBQ3RCRixNQUFNMkIsZUFBZSxDQUFDaEI7Z0NBRXRCUixTQUFTRDs0QkFDWDt3QkFDRjt3QkFFQSxJQUFJa0IsNkJBQTZCLE1BQU07NEJBQ3JDLElBQUksQ0FBQ2pCLFFBQVE7Z0NBQ1hKLE1BQU11QixHQUFHO2dDQUVUVCxPQUFPSixpQkFBaUIsR0FBRztnQ0FFM0JWLE1BQU1lLElBQUksQ0FBQ0Q7NEJBQ2I7d0JBQ0Y7d0JBRUEsSUFBSSxDQUFDVixRQUFROzRCQUNYVSxLQUFLZSx5QkFBeUI7d0JBQ2hDO3dCQUVBLE9BQU96QjtvQkFDVDtvQkFFQUEsU0FBU2EsV0FBV2xCLEtBQUssQ0FBQ1EsWUFBWU4sT0FBT0MsVUFBVUM7b0JBRXZELElBQUksQ0FBQ0MsUUFBUTt3QkFDWEgsTUFBTTJCLGVBQWUsQ0FBQ2hCO29CQUN4QjtvQkFFQSxPQUFPUjtnQkFDVDtnQkFFQSxJQUFJLENBQUNBLFFBQVE7b0JBQ1hKLE1BQU11QixHQUFHO2dCQUNYO2dCQUVBLElBQUlwQixjQUFjLE1BQU07b0JBQ3RCRixNQUFNMkIsZUFBZSxDQUFDaEI7Z0JBQ3hCO2dCQUVBLE9BQU9SO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCSixRQUFRLEVBQUVKLEtBQUs7Z0JBQUksT0FBT0EsTUFBTVEsMkJBQTJCLENBQUNKO1lBQVc7OztZQUVuR3lCLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxxQkFBcUI7b0JBQUVDLFlBQUFBLGlFQUFZO2dCQUMxQyxJQUFNQyxvQkFBb0IsSUFBSSxDQUFDNUMsV0FBVyxDQUFDNkMsTUFBTTtnQkFFakRGLFlBQVlBLGFBQWNDLG9CQUFvQixHQUFLLEdBQUc7Z0JBRXRELElBQU1FLGlCQUFpQkMsSUFBQUEsZ0NBQXdCLEVBQUNMLHdCQUMxQ00sb0JBQW9CLElBQUksQ0FBQ2hELFdBQVcsQ0FBQ2lELE1BQU0sQ0FBQyxTQUFDRCxtQkFBbUJwQjtvQkFDOUQsSUFBTXNCLG1CQUFtQnRCLFdBQVdhLFFBQVE7b0JBRTVDLElBQUlPLHNCQUFzQkcsdUJBQVksRUFBRTt3QkFDdENILG9CQUFvQkUsa0JBQWtCLEdBQUc7b0JBQzNDLE9BQU87d0JBQ0xGLG9CQUFvQkwsWUFDQyxBQUFDLEdBRWxDRyxPQUZvQ0UsbUJBQWtCLFFBRWhDRSxPQUF0QkosZ0JBQWUsU0FBd0IsT0FBakJJLG9CQUNhLEFBQUMsR0FBeUJBLE9BQXZCRixtQkFBa0IsT0FBc0IsT0FBakJFO29CQUNuRDtvQkFFQSxPQUFPRjtnQkFDVCxHQUFHRyx1QkFBWSxHQUNmbkMsV0FBVyxJQUFJLENBQUNsQixJQUFJLEVBQ3BCc0QsaUJBQWlCcEMsU0FBUzZCLE1BQU0sRUFDaENRLGdCQUFnQixBQUFDLElBQUksQ0FBQ3RELE9BQU8sS0FBSyxPQUNoQm9ELHVCQUFZLEdBQ1YsSUFBSSxDQUFDcEQsT0FBTyxFQUNoQ3VELHNCQUFzQkQsY0FBY1IsTUFBTSxFQUMxQ1UsZ0JBQWdCYix3QkFBd0JVLGlCQUFpQkUscUJBQ3pERSxVQUFVVCxJQUFBQSxnQ0FBd0IsRUFBQ1E7Z0JBRXpDLElBQU1FLGtCQUFrQmQsWUFDQyxBQUFDLE9BRWIsT0FBZkcsZ0JBQWUsVUFDYyxNQUNyQlksU0FBUyxBQUFDLE9BRU5MLE9BQVosSUFBSSxDQUFDdkQsSUFBSSxFQUFtQjBELE9BQWhCSCxlQUErQkwsT0FBZlEsU0FBUSxTQUEyQkMsT0FBcEJULG1CQUFvQyxPQUFoQlM7Z0JBRTdELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyxLQUFLLEVBQUU5RCxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQkFDcEUsSUFBSUEsZ0JBQWdCNkQsV0FBVztvQkFDN0I3RCxjQUFjRCxTQUFVLEdBQUc7b0JBRTNCQSxVQUFVRCxNQUFNLEdBQUc7b0JBRW5CQSxPQUFPOEQsT0FBTyxHQUFHO29CQUVqQkEsUUFuTmV0RSxNQW1ORCxHQUFHO2dCQUNuQjtnQkFFQSxJQUFNd0UsT0FBTyxJQUFJRixNQUFNOUQsTUFBTUMsU0FBU0M7Z0JBRXRDLE9BQU84RDtZQUNUOzs7V0F6Tm1CeEUifQ==