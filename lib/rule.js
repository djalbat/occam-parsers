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
                        var precedence = state.getPrecedence();
                        nonTerminalNode.setPrecedence(precedence);
                        parsed = true;
                        if (parsed) {
                            node.setChildNodesParentNode();
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG9wYXF1ZTogb3BhcXVlU3BlY2lhbFN5bWJvbCwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRPcGFjaXR5KCkge1xuICAgIHJldHVybiB0aGlzLm9wYWNpdHk7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vblRlcm1pbmFsTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSxcbiAgICAgICAgICBzYXZlZFByZWNlZGVuY2UgPSBzdGF0ZS5nZXRTYXZlZFByZWNlZGVuY2UoKTtcblxuICAgIGxldCBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgIG5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICBwYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgIGNsZWFyKGNoaWxkTm9kZXMpO1xuXG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gZGVmaW5pdGlvbi5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgIGNhbGxiYWNrID0gKCkgPT4geyAgLy8vXG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHN0YXRlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgICBwYXJzZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBub2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGUucmV3cml0ZSgpO1xuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gbm9kZS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCB1bnByZWNlZGVudGVkID0gbm9kZS5pc1VucHJlY2VkZW50ZWQoKTtcblxuICAgICAgICAgIGlmICh1bnByZWNlZGVudGVkKSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgbm9kZS5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfTtcblxuICAgICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIG9wYWNpdHlTdHJpbmcgPSAodGhpcy5vcGFjaXR5ID09PSBudWxsKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5LCAvLy9cbiAgICAgICAgICBvcGFjaXR5U3RyaW5nTGVuZ3RoID0gb3BhY2l0eVN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gb3BhY2l0eVN0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke29wYWNpdHlTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZU9wYWNpdHlEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZShDbGFzcywgbmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChOb25UZXJtaW5hbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgTm9uVGVybWluYWxOb2RlID0gZGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMgPSBvcGFjaXR5OyAgLy8vXG5cbiAgICAgIG9wYWNpdHkgPSBuYW1lOyAvLy9cblxuICAgICAgbmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSdWxlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gbmV3IENsYXNzKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwiY2xlYXIiLCJhcnJheVV0aWxpdGllcyIsIm9wYXF1ZSIsIm9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsIm5hbWUiLCJvcGFjaXR5IiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiZ2V0T3BhY2l0eSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwic2V0TmFtZSIsInNldE9wYWNpdHkiLCJzZXREZWZpbml0aW9ucyIsInNldE5vblRlcm1pbmFsTm9kZSIsImlzT3BhcXVlIiwiaXNTZW1pT3BhcXVlIiwiaXNUcmFuc3BhcmVudCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJzYXZlZFByZWNlZGVuY2UiLCJnZXRTYXZlZFByZWNlZGVuY2UiLCJub2RlIiwicHVzaCIsInNvbWUiLCJkZWZpbml0aW9uIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJzZXRQcmVjZWRlbmNlIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlIiwicG9wIiwiZW1wdHkiLCJpc0VtcHR5IiwidW5wcmVjZWRlbnRlZCIsImlzVW5wcmVjZWRlbnRlZCIsInJlc2V0UHJlY2VkZW5jZSIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsIm9wYWNpdHlTdHJpbmciLCJvcGFjaXR5U3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZU9wYWNpdHlEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7eUJBRUY7MkJBQ0U7c0JBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0FFLEFBQVFDLHNCQUE2REMsMkJBQWMsQ0FBbkZGLFFBQTZCRyxBQUFZQywwQkFBNEJGLDJCQUFjLENBQXREQztBQUV0QixJQUFBLEFBQU1OLHFCQUFOO2FBQU1BLEtBQ1BRLElBQUksRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7Z0NBRHBDWDtRQUVq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