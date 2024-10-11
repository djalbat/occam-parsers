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
var opaqueSpecialSymbol = _occamlexers.specialSymbols.opaque, semiOpaqueSpecialSymbol = _occamlexers.specialSymbols.semiOpaque;
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
                var _this = this;
                var parsed;
                var savedPrecedence = state.getSavedPrecedence();
                parsed = this.definitions.some(function(definition) {
                    var node, nonTerminalNode;
                    var ruleName = _this.name, opacity = _this.opacity, childNodes = [];
                    nonTerminalNode = _this.NonTerminalNode.fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity);
                    var precedence = definition.getPrecedence();
                    node = nonTerminalNode; ///
                    nodes.push(node);
                    state.setPrecedence(precedence);
                    var parsed = definition.parse(childNodes, state, function() {
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
                                var node1 = nonTerminalNode; ///
                                nodes.push(node1);
                            }
                        }
                        return parsed;
                    }, callAhead);
                    if (!parsed) {
                        nodes.pop();
                        state.resetPrecedence(savedPrecedence);
                    }
                    return parsed;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IG9wYXF1ZSA6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb25UZXJtaW5hbE5vZGUoTm9uVGVybWluYWxOb2RlKSB7XG4gICAgdGhpcy5Ob25UZXJtaW5hbE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wpO1xuXG4gICAgcmV0dXJuIG9wYXF1ZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZFByZWNlZGVuY2UgPSBzdGF0ZS5nZXRTYXZlZFByZWNlZGVuY2UoKTtcblxuICAgIHBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IG5vZGUsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlO1xuXG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLm9wYWNpdHksXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gW107XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTtcblxuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IGRlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBub2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgbm9kZXMucHVzaChub2RlKTtcblxuICAgICAgc3RhdGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHN0YXRlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKTtcblxuICAgICAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGUucmV3cml0ZSgpO1xuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gbm9kZS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCB1bnByZWNlZGVudGVkID0gbm9kZS5pc1VucHJlY2VkZW50ZWQoKTtcblxuICAgICAgICAgIGlmICh1bnByZWNlZGVudGVkKSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9LCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICBzdGF0ZS5yZXNldFByZWNlZGVuY2Uoc2F2ZWRQcmVjZWRlbmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIG9wYWNpdHlTdHJpbmcgPSAodGhpcy5vcGFjaXR5ID09PSBudWxsKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5LCAvLy9cbiAgICAgICAgICBvcGFjaXR5U3RyaW5nTGVuZ3RoID0gb3BhY2l0eVN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gb3BhY2l0eVN0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke29wYWNpdHlTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZU9wYWNpdHlEZWZpbml0aW9uc0FuZE5vblRlcm1pbmFsTm9kZShDbGFzcywgbmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChOb25UZXJtaW5hbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgTm9uVGVybWluYWxOb2RlID0gZGVmaW5pdGlvbnM7ICAvLy9cblxuICAgICAgZGVmaW5pdGlvbnMgPSBvcGFjaXR5OyAgLy8vXG5cbiAgICAgIG9wYWNpdHkgPSBuYW1lOyAvLy9cblxuICAgICAgbmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBSdWxlOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gbmV3IENsYXNzKG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwib3BhcXVlIiwib3BhcXVlU3BlY2lhbFN5bWJvbCIsInNwZWNpYWxTeW1ib2xzIiwic2VtaU9wYXF1ZSIsInNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sIiwibmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJnZXRPcGFjaXR5IiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJzZXROYW1lIiwic2V0T3BhY2l0eSIsInNldERlZmluaXRpb25zIiwic2V0Tm9uVGVybWluYWxOb2RlIiwiaXNPcGFxdWUiLCJpc1NlbWlPcGFxdWUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNvbWUiLCJkZWZpbml0aW9uIiwibm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJwdXNoIiwic2V0UHJlY2VkZW5jZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsInJld3JpdGUiLCJwb3AiLCJlbXB0eSIsImlzRW1wdHkiLCJ1bnByZWNlZGVudGVkIiwiaXNVbnByZWNlZGVudGVkIiwicmVzZXRQcmVjZWRlbmNlIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJvcGFjaXR5U3RyaW5nIiwib3BhY2l0eVN0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5hbWVPcGFjaXR5RGVmaW5pdGlvbnNBbmROb25UZXJtaW5hbE5vZGUiLCJDbGFzcyIsInVuZGVmaW5lZCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5ROzJCQUNFO3NCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFRQyxBQUFTQyxzQkFBOERDLDJCQUFjLENBQXJGRixRQUErQkcsQUFBWUMsMEJBQTRCRiwyQkFBYyxDQUF0REM7QUFFeEIsSUFBQSxBQUFNSixxQkFBTjthQUFNQSxLQUNQTSxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxlQUFlO2dDQURwQ1Q7UUFFakIsSUFBSSxDQUFDTSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7a0JBTE5UOztZQVFuQlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFSLElBQUk7Z0JBQ1YsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBQ2Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV1IsT0FBTztnQkFDaEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO1lBQ2pCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVSLFdB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