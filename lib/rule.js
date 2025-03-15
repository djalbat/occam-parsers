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
    function Rule(name, opacity, definitions, NonTerminalNode) {
        _class_call_check(this, Rule);
        this.name = name;
        this.opacity = opacity;
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
            key: "getNonTerminalNode",
            value: function getNonTerminalNode() {
                return this.NonTerminalNode;
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
            key: "setNonTerminalNode",
            value: function setNonTerminalNode(NonTerminalNode) {
                this.NonTerminalNode = NonTerminalNode;
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
                var opaque = this.opacity === semiOpaqueSpecialSymbol;
                return opaque;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var opacity = this.opacity, ruleName = this.name, childNodes = [], nonTerminalNode = this.NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity), savedPrecedence = state.getSavedPrecedence();
                var node = nonTerminalNode; ///
                nodes.push(node);
                parsed = this.definitions.some(function(definition) {
                    var parsed;
                    clear(childNodes);
                    var precedence = definition.getPrecedence();
                    state.setPrecedence(precedence);
                    callback = function() {
                        var parsed;
                        parsed = true;
                        var precedence = state.getPrecedence();
                        nonTerminalNode.setPrecedence(precedence);
                        var rewrittenNonTerminalNode = nonTerminalNode.rewrite();
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
                        return parsed;
                    };
                    parsed = definition.parse(childNodes, state, callback, callAhead);
                    if (!parsed) {
                        state.resetPrecedence(savedPrecedence);
                    }
                    return parsed;
                });
                if (parsed) {
                    var parentNode = node; ///
                    childNodes.forEach(function(childNode) {
                        childNode.setParentNode(parentNode);
                    });
                } else {
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
            key: "fromNameOpacityDefinitionsAndNonTerminalNode",
            value: function fromNameOpacityDefinitionsAndNonTerminalNode(Class, name, opacity, definitions, NonTerminalNode) {
                if (NonTerminalNode === undefined) {
                    NonTerminalNode = definitions; ///
                    definitions = opacity; ///
                    opacity = name; ///
                    name = Class; ///
                    Class = Rule; ///
                }
                var rule = new Class(name, opacity, definitions, NonTerminalNode);
                return rule;
            }
        }
    ]);
    return Rule;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG9wYXF1ZTogb3BhcXVlU3BlY2lhbFN5bWJvbCwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRPcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLm9wYWNpdHk7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IG9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSxcbiAgICAgICAgICBzYXZlZFByZWNlZGVuY2UgPSBzdGF0ZS5nZXRTYXZlZFByZWNlZGVuY2UoKTtcblxuICAgIGxldCBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICBwYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgIGNsZWFyKGNoaWxkTm9kZXMpO1xuXG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gZGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGNhbGxiYWNrID0gKCkgPT4geyAgLy8vXG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gc3RhdGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuXG4gICAgICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG5vblRlcm1pbmFsTm9kZS5yZXdyaXRlKCk7XG5cbiAgICAgICAgaWYgKHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIG5vZGVzLnBvcCgpO1xuXG4gICAgICAgICAgICBub2RlID0gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgY29uc3QgZW1wdHkgPSBub2RlLmlzRW1wdHkoKTtcblxuICAgICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IHVucHJlY2VkZW50ZWQgPSBub2RlLmlzVW5wcmVjZWRlbnRlZCgpO1xuXG4gICAgICAgICAgaWYgKHVucHJlY2VkZW50ZWQpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcblxuICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH07XG5cbiAgICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2UoY2hpbGROb2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGVzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIG9wYWNpdHlTdHJpbmcgPSAodGhpcy5vcGFjaXR5ID09PSBudWxsKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5LCAvLy9cbiAgICAgICAgICBvcGFjaXR5U3RyaW5nTGVuZ3RoID0gb3BhY2l0eVN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gb3BhY2l0eVN0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke29wYWNpdHlTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZU9wYWNpdHlEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZShDbGFzcywgbmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChOb25UZXJtaW5hbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgTm9uVGVybWluYWxOb2RlID0gZGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMgPSBvcGFjaXR5OyAgLy8vXG5cbiAgICAgIG9wYWNpdHkgPSBuYW1lOyAvLy9cblxuICAgICAgbmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSdWxlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gbmV3IENsYXNzKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsIm9wYXF1ZSIsIm9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsIm5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiZ2V0T3BhY2l0eSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwic2V0TmFtZSIsInNldE9wYWNpdHkiLCJzZXREZWZpbml0aW9ucyIsInNldE5vblRlcm1pbmFsTm9kZSIsImlzT3BhcXVlIiwiaXNTZW1pT3BhcXVlIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsIm5vZGUiLCJwdXNoIiwic29tZSIsImRlZmluaXRpb24iLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsInNldFByZWNlZGVuY2UiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlIiwicG9wIiwiZW1wdHkiLCJpc0VtcHR5IiwidW5wcmVjZWRlbnRlZCIsImlzVW5wcmVjZWRlbnRlZCIsInJlc2V0UHJlY2VkZW5jZSIsInBhcmVudE5vZGUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwic2V0UGFyZW50Tm9kZSIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwib3BhY2l0eVN0cmluZyIsIm9wYWNpdHlTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21OYW1lT3BhY2l0eURlZmluaXRpb25zQW5kTm9uVGVybWluYWxOb2RlIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTt5QkFFRjsyQkFDRTtzQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDQUUsQUFBUUMsc0JBQTZEQywyQkFBYyxDQUFuRkYsUUFBNkJHLEFBQVlDLDBCQUE0QkYsMkJBQWMsQ0FBdERDO0FBRXRCLElBQUEsQUFBTU4scUJBQU47YUFBTUEsS0FDUFEsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQ0FEcENYO1FBRWpCLElBQUksQ0FBQ1EsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7O2tCQUxOWDs7WUFRbkJZLEtBQUFBO21CQUFBQSxTQUFB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