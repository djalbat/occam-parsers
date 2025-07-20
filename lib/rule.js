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
                var opacity = this.opacity, ruleName = this.name, childNodes = [], NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName), nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity), savedPrecedence = state.getSavedPrecedence();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG9wYXF1ZTogb3BhcXVlU3BlY2lhbFN5bWJvbCwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0T3BhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5O1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHN0YXRlLk5vblRlcm1pbmFsTm9kZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSxcbiAgICAgICAgICBzYXZlZFByZWNlZGVuY2UgPSBzdGF0ZS5nZXRTYXZlZFByZWNlZGVuY2UoKTtcblxuICAgIGxldCBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICBwYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgIGNsZWFyKGNoaWxkTm9kZXMpO1xuXG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gZGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGNhbGxiYWNrID0gKCkgPT4geyAgLy8vXG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHN0YXRlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBub2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGUucmV3cml0ZShzdGF0ZSk7XG5cbiAgICAgICAgaWYgKHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzLnBvcCgpO1xuXG4gICAgICAgICAgICBub2RlID0gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3QgZW1wdHkgPSBub2RlLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IHVucHJlY2VkZW50ZWQgPSBub2RlLmlzVW5wcmVjZWRlbnRlZCgpO1xuXG4gICAgICAgICAgaWYgKHVucHJlY2VkZW50ZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2RlLnJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9O1xuXG4gICAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKGNoaWxkTm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgbm9kZXMucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgb3BhY2l0eVN0cmluZyA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHksIC8vL1xuICAgICAgICAgIG9wYWNpdHlTdHJpbmdMZW5ndGggPSBvcGFjaXR5U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBvcGFjaXR5U3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7b3BhY2l0eVN0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lT3BhY2l0eUFuZERlZmluaXRpb25zKENsYXNzLCBuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucykge1xuICAgIGlmIChkZWZpbml0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWZpbml0aW9ucyA9IG9wYWNpdHk7ICAvLy9cblxuICAgICAgb3BhY2l0eSA9IG5hbWU7IC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsIm9wYXF1ZSIsIm9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsIm5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJnZXROYW1lIiwiZ2V0T3BhY2l0eSIsImdldERlZmluaXRpb25zIiwic2V0TmFtZSIsInNldE9wYWNpdHkiLCJzZXREZWZpbml0aW9ucyIsImlzT3BhcXVlIiwiaXNTZW1pT3BhcXVlIiwiaXNUcmFuc3BhcmVudCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJzYXZlZFByZWNlZGVuY2UiLCJnZXRTYXZlZFByZWNlZGVuY2UiLCJub2RlIiwicHVzaCIsInNvbWUiLCJkZWZpbml0aW9uIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJzZXRQcmVjZWRlbmNlIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlIiwicG9wIiwiZW1wdHkiLCJpc0VtcHR5IiwidW5wcmVjZWRlbnRlZCIsImlzVW5wcmVjZWRlbnRlZCIsInJlc2V0UHJlY2VkZW5jZSIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsIm9wYWNpdHlTdHJpbmciLCJvcGFjaXR5U3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZU9wYWNpdHlBbmREZWZpbml0aW9ucyIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7eUJBRUY7MkJBQ0U7c0JBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLEFBQVFDLHNCQUE2REMsMkJBQWMsQ0FBbkZGLFFBQTZCRyxBQUFZQywwQkFBNEJGLDJCQUFjLENBQXREQztBQUV0QixJQUFBLEFBQU1OLHFCQUFOO2FBQU1BLEtBQ1BRLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXO2dDQURuQlY7UUFFakIsSUFBSSxDQUFDUSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFKRlY7O1lBT25CVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFB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