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
                var opacity = this.opacity, ruleName = this.name, childNodes = [], NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName), nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity), savedPrecedence = state.getSavedPrecedence();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG9wYXF1ZTogb3BhcXVlU3BlY2lhbFN5bWJvbCwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0T3BhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5O1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpLFxuICAgICAgICAgIHNhdmVkUHJlY2VkZW5jZSA9IHN0YXRlLmdldFNhdmVkUHJlY2VkZW5jZSgpO1xuXG4gICAgbGV0IG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgbm9kZXMucHVzaChub2RlKTtcblxuICAgIHBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgY2xlYXIoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSBkZWZpbml0aW9uLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgc3RhdGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgY2FsbGJhY2sgPSAoKSA9PiB7ICAvLy9cbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gc3RhdGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIG5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZS5yZXdyaXRlKHN0YXRlKTtcblxuICAgICAgICBpZiAocmV3cml0dGVuTm9uVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgICAgIG5vZGUgPSByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCBlbXB0eSA9IG5vZGUuaXNFbXB0eSgpO1xuXG4gICAgICAgICAgaWYgKGVtcHR5KSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3QgdW5wcmVjZWRlbnRlZCA9IG5vZGUuaXNVbnByZWNlZGVudGVkKCk7XG5cbiAgICAgICAgICBpZiAodW5wcmVjZWRlbnRlZCkge1xuICAgICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGlmIChjYWxsQWhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuXG4gICAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV3cml0dGVuTm9uVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzLnBvcCgpO1xuXG4gICAgICAgICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGUucmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH07XG5cbiAgICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2UoY2hpbGROb2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBub2Rlcy5wb3AoKTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBzdGF0ZSkgeyByZXR1cm4gc3RhdGUuTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKTsgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgb3BhY2l0eVN0cmluZyA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHksIC8vL1xuICAgICAgICAgIG9wYWNpdHlTdHJpbmdMZW5ndGggPSBvcGFjaXR5U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBvcGFjaXR5U3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7b3BhY2l0eVN0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lT3BhY2l0eUFuZERlZmluaXRpb25zKENsYXNzLCBuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucykge1xuICAgIGlmIChkZWZpbml0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWZpbml0aW9ucyA9IG9wYWNpdHk7ICAvLy9cblxuICAgICAgb3BhY2l0eSA9IG5hbWU7IC8vL1xuXG4gICAgICBuYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFJ1bGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsIm9wYXF1ZSIsIm9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsIm5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJnZXROYW1lIiwiZ2V0T3BhY2l0eSIsImdldERlZmluaXRpb25zIiwic2V0TmFtZSIsInNldE9wYWNpdHkiLCJzZXREZWZpbml0aW9ucyIsImlzT3BhcXVlIiwiaXNTZW1pT3BhcXVlIiwiaXNUcmFuc3BhcmVudCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJzYXZlZFByZWNlZGVuY2UiLCJnZXRTYXZlZFByZWNlZGVuY2UiLCJub2RlIiwicHVzaCIsInNvbWUiLCJkZWZpbml0aW9uIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJzZXRQcmVjZWRlbmNlIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlIiwicG9wIiwiZW1wdHkiLCJpc0VtcHR5IiwidW5wcmVjZWRlbnRlZCIsImlzVW5wcmVjZWRlbnRlZCIsInJlc2V0UHJlY2VkZW5jZSIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsIm9wYWNpdHlTdHJpbmciLCJvcGFjaXR5U3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZU9wYWNpdHlBbmREZWZpbml0aW9ucyIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7eUJBRUY7MkJBQ0U7c0JBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLEFBQVFDLHNCQUE2REMsMkJBQWMsQ0FBbkZGLFFBQTZCRyxBQUFZQywwQkFBNEJGLDJCQUFjLENBQXREQztBQUV0QixJQUFBLEFBQU1OLHFCQUFOO2FBQU1BLEtBQ1BRLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXO2dDQURuQlY7UUFFakIsSUFBSSxDQUFDUSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFKRlY7O1lBT25CVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUU4sSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXTixPQUFPO2dCQUNoQixJQUFJLENBQUNBLE9BQU8sR0FBR0E7WUFDakI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZU4sV0FBVztnQkFDeEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1kLFNBQVUsSUFBSSxDQUFDTSxPQUFPLEtBQUtMO2dCQUVqQyxPQUFPRDtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1aLGFBQWMsSUFBSSxDQUFDRyxPQUFPLEtBQUtGO2dCQUVyQyxPQUFPRDtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLGFBQWMsSUFBSSxDQUFDRyxPQUFPLEtBQUs7Z0JBRXJDLE9BQU9IO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQkFDckMsSUFBSUM7Z0JBRUosSUFBTWhCLFVBQVUsSUFBSSxDQUFDQSxPQUFPLEVBQ3RCaUIsV0FBVyxJQUFJLENBQUNsQixJQUFJLEVBQ3BCbUIsYUFBYSxFQUFFLEVBQ2ZDLGtCQUFrQixJQUFJLENBQUNDLDJCQUEyQixDQUFDSCxXQUNuREksa0JBQWtCRixnQkFBZ0JHLGdDQUFnQyxDQUFDTCxVQUFVQyxZQUFZbEIsVUFDekZ1QixrQkFBa0JWLE1BQU1XLGtCQUFrQjtnQkFFaEQsSUFBSUMsT0FBT0osaUJBQWlCLEdBQUc7Z0JBRS9CVCxNQUFNYyxJQUFJLENBQUNEO2dCQUVYVCxTQUFTLElBQUksQ0FBQ2YsV0FBVyxDQUFDMEIsSUFBSSxDQUFDLFNBQUNDO29CQUM5QixJQUFJWjtvQkFFSnhCLE1BQU0wQjtvQkFFTixJQUFNVyxhQUFhRCxXQUFXRSxhQUFhO29CQUUzQ2pCLE1BQU1rQixhQUFhLENBQUNGO29CQUVwQmYsV0FBVzt3QkFDVCxJQUFJRTt3QkFFSixJQUFNYSxhQUFhaEIsTUFBTWlCLGFBQWE7d0JBRXRDVCxnQkFBZ0JVLGFBQWEsQ0FBQ0Y7d0JBRTlCYixTQUFTO3dCQUVULElBQUlBLFFBQVE7NEJBQ1ZTLEtBQUtPLHVCQUF1Qjt3QkFDOUI7d0JBRUEsSUFBTUMsMkJBQTJCWixnQkFBZ0JhLE9BQU8sQ0FBQ3JCO3dCQUV6RCxJQUFJb0IsNkJBQTZCLE1BQU07NEJBQ3JDLElBQUlqQixRQUFRO2dDQUNWSixNQUFNdUIsR0FBRztnQ0FFVFYsT0FBT1EsMEJBQTBCLEdBQUc7Z0NBRXBDckIsTUFBTWMsSUFBSSxDQUFDRDs0QkFDYjt3QkFDRjt3QkFFQSxJQUFJVCxRQUFROzRCQUNWLElBQU1vQixRQUFRWCxLQUFLWSxPQUFPOzRCQUUxQixJQUFJRCxPQUFPO2dDQUNUcEIsU0FBUzs0QkFDWDt3QkFDRjt3QkFFQSxJQUFJQSxRQUFROzRCQUNWLElBQU1zQixnQkFBZ0JiLEtBQUtjLGVBQWU7NEJBRTFDLElBQUlELGVBQWU7Z0NBQ2pCdEIsU0FBUzs0QkFDWDt3QkFDRjt3QkFFQSxJQUFJQSxRQUFROzRCQUNWLElBQUlELGNBQWMsTUFBTTtnQ0FDdEJGLE1BQU0yQixlQUFlLENBQUNqQjtnQ0FFdEJQLFNBQVNEOzRCQUNYO3dCQUNGO3dCQUVBLElBQUlrQiw2QkFBNkIsTUFBTTs0QkFDckMsSUFBSSxDQUFDakIsUUFBUTtnQ0FDWEosTUFBTXVCLEdBQUc7Z0NBRVRWLE9BQU9KLGlCQUFpQixHQUFHO2dDQUUzQlQsTUFBTWMsSUFBSSxDQUFDRDs0QkFDYjt3QkFDRjt3QkFFQSxJQUFJLENBQUNULFFBQVE7NEJBQ1hTLEtBQUtnQix5QkFBeUI7d0JBQ2hDO3dCQUVBLE9BQU96QjtvQkFDVDtvQkFFQUEsU0FBU1ksV0FBV2pCLEtBQUssQ0FBQ08sWUFBWUwsT0FBT0MsVUFBVUM7b0JBRXZELElBQUksQ0FBQ0MsUUFBUTt3QkFDWEgsTUFBTTJCLGVBQWUsQ0FBQ2pCO29CQUN4QjtvQkFFQSxPQUFPUDtnQkFDVDtnQkFFQSxJQUFJLENBQUNBLFFBQVE7b0JBQ1hKLE1BQU11QixHQUFHO2dCQUNYO2dCQUVBLElBQUlwQixjQUFjLE1BQU07b0JBQ3RCRixNQUFNMkIsZUFBZSxDQUFDakI7Z0JBQ3hCO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCSCxRQUFRLEVBQUVKLEtBQUs7Z0JBQUksT0FBT0EsTUFBTU8sMkJBQTJCLENBQUNIO1lBQVc7OztZQUVuR3lCLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxxQkFBcUI7b0JBQUVDLFlBQUFBLGlFQUFZO2dCQUMxQyxJQUFNQyxvQkFBb0IsSUFBSSxDQUFDNUMsV0FBVyxDQUFDNkMsTUFBTTtnQkFFakRGLFlBQVlBLGFBQWNDLG9CQUFvQixHQUFLLEdBQUc7Z0JBRXRELElBQU1FLGlCQUFpQkMsSUFBQUEsZ0NBQXdCLEVBQUNMLHdCQUMxQ00sb0JBQW9CLElBQUksQ0FBQ2hELFdBQVcsQ0FBQ2lELE1BQU0sQ0FBQyxTQUFDRCxtQkFBbUJyQjtvQkFDOUQsSUFBTXVCLG1CQUFtQnZCLFdBQVdjLFFBQVE7b0JBRTVDLElBQUlPLHNCQUFzQkcsdUJBQVksRUFBRTt3QkFDdENILG9CQUFvQkUsa0JBQWtCLEdBQUc7b0JBQzNDLE9BQU87d0JBQ0xGLG9CQUFvQkwsWUFDQyxBQUFDLEdBRWxDRyxPQUZvQ0UsbUJBQWtCLFFBRWhDRSxPQUF0QkosZ0JBQWUsU0FBd0IsT0FBakJJLG9CQUNhLEFBQUMsR0FBeUJBLE9BQXZCRixtQkFBa0IsT0FBc0IsT0FBakJFO29CQUNuRDtvQkFFQSxPQUFPRjtnQkFDVCxHQUFHRyx1QkFBWSxHQUNmbkMsV0FBVyxJQUFJLENBQUNsQixJQUFJLEVBQ3BCc0QsaUJBQWlCcEMsU0FBUzZCLE1BQU0sRUFDaENRLGdCQUFnQixBQUFDLElBQUksQ0FBQ3RELE9BQU8sS0FBSyxPQUNoQm9ELHVCQUFZLEdBQ1YsSUFBSSxDQUFDcEQsT0FBTyxFQUNoQ3VELHNCQUFzQkQsY0FBY1IsTUFBTSxFQUMxQ1UsZ0JBQWdCYix3QkFBd0JVLGlCQUFpQkUscUJBQ3pERSxVQUFVVCxJQUFBQSxnQ0FBd0IsRUFBQ1E7Z0JBRXpDLElBQU1FLGtCQUFrQmQsWUFDQyxBQUFDLE9BRWIsT0FBZkcsZ0JBQWUsVUFDYyxNQUNyQlksU0FBUyxBQUFDLE9BRU5MLE9BQVosSUFBSSxDQUFDdkQsSUFBSSxFQUFtQjBELE9BQWhCSCxlQUErQkwsT0FBZlEsU0FBUSxTQUEyQkMsT0FBcEJULG1CQUFvQyxPQUFoQlM7Z0JBRTdELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyxLQUFLLEVBQUU5RCxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQkFDcEUsSUFBSUEsZ0JBQWdCNkQsV0FBVztvQkFDN0I3RCxjQUFjRCxTQUFVLEdBQUc7b0JBRTNCQSxVQUFVRCxNQUFNLEdBQUc7b0JBRW5CQSxPQUFPOEQsT0FBTyxHQUFHO29CQUVqQkEsUUFsTmV0RSxNQWtORCxHQUFHO2dCQUNuQjtnQkFFQSxJQUFNd0UsT0FBTyxJQUFJRixNQUFNOUQsTUFBTUMsU0FBU0M7Z0JBRXRDLE9BQU84RDtZQUNUOzs7V0F4Tm1CeEUifQ==