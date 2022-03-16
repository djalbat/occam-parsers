"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var _string = require("./utilities/string");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Rule = /*#__PURE__*/ function() {
    function Rule(name, definitions, NonTerminalNode) {
        _classCallCheck(this, Rule);
        this.name = name;
        this.definitions = definitions;
        this.NonTerminalNode = NonTerminalNode;
    }
    _createClass(Rule, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
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
            key: "addDefinition",
            value: function addDefinition(definition, position) {
                var definitionsIncludesDefinition = this.definitions.includes(definition);
                if (!definitionsIncludesDefinition) {
                    if (position === undefined) {
                        var definitionsLength = this.definitions.length;
                        position = definitionsLength; ///
                    }
                    var start = position, deleteCount = 0;
                    this.definitions.splice(start, deleteCount, definition);
                }
            }
        },
        {
            key: "removeDefinition",
            value: function removeDefinition(definition) {
                var definitionsIncludesDefinition = this.definitions.includes(definition);
                if (definitionsIncludesDefinition) {
                    var definitionIndex = this.definitions.indexOf(definition), start = definitionIndex, deleteCount = 1;
                    this.definitions.splice(start, deleteCount);
                }
            }
        },
        {
            key: "replaceDefinition",
            value: function replaceDefinition(oldDefinition, newDefinition) {
                var oldDefinitionIndex = this.definitions.indexOf(oldDefinition);
                if (oldDefinitionIndex > -1) {
                    var start = oldDefinitionIndex, deleteCount = 1;
                    this.definitions.splice(start, deleteCount, newDefinition);
                }
            }
        },
        {
            key: "parse",
            value: function parse(state, callback) {
                var _this = this;
                var ruleNode = null;
                state.increaseDepth();
                var tooDeep = state.isTooDeep();
                if (tooDeep) {
                    throw new Error("The parse tree is too deep at rule \"".concat(this.name, "\"."));
                }
                var parsed, definitionNodes;
                this.definitions.some(function(definition) {
                    definitionNodes = [];
                    parsed = _this.parseDefinition(definition, definitionNodes, state, callback);
                    if (parsed) {
                        return true;
                    }
                });
                if (parsed) {
                    var ruleName = this.name, childNodes = definitionNodes, nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
                    ruleNode = nonTerminalNode; ///
                }
                state.decreaseDepth();
                return ruleNode;
            }
        },
        {
            key: "parseDefinition",
            value: function parseDefinition(definition, nodes, state, callback) {
                var parsed;
                var savedIndex = state.getSavedIndex();
                parsed = definition.parse(nodes, state, callback);
                if (!parsed) {
                    state.backtrack(savedIndex);
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
                var maximumPadding = (0, _string).paddingFromPaddingLength(maximumRuleNameLength), definitionsString1 = this.definitions.reduce(function(definitionsString, definition) {
                    var definitionString = definition.asString();
                    if (definitionsString === _constants.EMPTY_STRING) {
                        definitionsString = definitionString; ///
                    } else {
                        definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
                    }
                    return definitionsString;
                }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, paddingLength = maximumRuleNameLength - ruleNameLength, padding = (0, _string).paddingFromPaddingLength(paddingLength);
                var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(padding, " ::= ").concat(definitionsString1).concat(semicolonString);
                return string;
            }
        }
    ], [
        {
            key: "fromRule",
            value: function fromRule(Class, rule) {
                if (rule === undefined) {
                    rule = Class;
                    Class = Rule;
                }
                var name = rule.getName(), definitions = rule.getDefinitions(), NonTerminalNode = rule.getNonTerminalNode();
                rule = new Class(name, definitions, NonTerminalNode);
                return rule;
            }
        }
    ]);
    return Rule;
}();
exports.default = Rule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHJ1bGVOb2RlID0gbnVsbDtcblxuICAgIHN0YXRlLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBzdGF0ZS5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBkZWZpbml0aW9uTm9kZXM7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkZWZpbml0aW9uTm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHN0YXRlLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwic2V0TmFtZSIsInNldERlZmluaXRpb25zIiwic2V0Tm9uVGVybWluYWxOb2RlIiwiYWRkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbkluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2VEZWZpbml0aW9uIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJwYXJzZSIsInN0YXRlIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJwYXJzZWQiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicGFyc2VEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tUnVsZSIsIkNsYXNzIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRTZCLEdBQWEsQ0FBYixVQUFhO0FBQ0QsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs4REFIN0Q7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7OztBQUtlLEdBQUssQ0FBQ0EsSUFBSSxpQkFBVixRQUFRO2FBQUZBLElBQUksQ0FDWEMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7bUNBTmhEO1FBT0ksSUFBSSxDQUFDRixJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSxlQUFlLENBQUM7Ozs7WUFHekNDLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDSCxJQUFJO1lBQ2xCLENBQUM7OztZQUVESSxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUNILFdBQVc7WUFDekIsQ0FBQzs7O1lBRURJLEdBQWtCLEVBQWxCQSxDQUFrQjttQkFBbEJBLFFBQVEsQ0FBUkEsa0JBQWtCLEdBQUcsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQ0gs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