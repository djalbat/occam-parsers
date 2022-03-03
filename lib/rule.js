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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHJ1bGVOb2RlID0gbnVsbDtcblxuICAgIHN0YXRlLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBzdGF0ZS5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBkZWZpbml0aW9uTm9kZXM7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkZWZpbml0aW9uTm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHN0YXRlLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwic2V0TmFtZSIsInNldERlZmluaXRpb25zIiwic2V0Tm9uVGVybWluYWxOb2RlIiwiYWRkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbkluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2VEZWZpbml0aW9uIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJwYXJzZSIsInN0YXRlIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJwYXJzZWQiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicGFyc2VEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tUnVsZSIsIkNsYXNzIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFaUIsR0FBYSxDQUFiLFVBQWE7QUFDRCxHQUFvQixDQUFwQixPQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeENBLElBQUksaUJBQVYsUUFBUTthQUFGQSxJQUFJLENBQ1hDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxlQUFlOztRQUM1QyxJQUFJLENBQUNGLElBQUksR0FBR0EsSUFBSTtRQUNoQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztRQUM5QixJQUFJLENBQUNDLGVBQWUsR0FBR0EsZUFBZTs7OztZQUd4Q0MsR0FBTyxFQUFQQSxDQUFPO21CQUFQQSxRQUFRLENBQVJBLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUNILElBQUk7WUFDbEIsQ0FBQzs7O1lBRURJLEdBQWMsRUFBZEEsQ0FBYzttQkFBZEEsUUFBUSxDQUFSQSxjQUFjLEdBQUcsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQ0gsV0FBVztZQUN6QixDQUFDOzs7WUFFREksR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDSCxlQUFlO1lBQzdCLENBQUM7OztZQUVESSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFOLENBQVJNLE9BQU8sQ0FBQ04sSUFBSSxFQUFF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