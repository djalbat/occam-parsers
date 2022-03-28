"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
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
var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
var Rule = /*#__PURE__*/ function() {
    function Rule(name, ambiguous, definitions, NonTerminalNode) {
        _classCallCheck(this, Rule);
        this.name = name;
        this.ambiguous = ambiguous;
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
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setAmbiguous",
            value: function setAmbiguous(ambiguous) {
                this.ambiguous = ambiguous;
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
                }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, ambiguousString = this.ambiguous ? exclamationMark : _constants.EMPTY_STRING, ambiguousStringLength = ambiguousString.length, paddingLength = maximumRuleNameLength - ruleNameLength - ambiguousStringLength, padding = (0, _string).paddingFromPaddingLength(paddingLength);
                var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(ambiguousString).concat(padding, " ::= ").concat(definitionsString1).concat(semicolonString);
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
                var name = rule.getName(), ambiguous = rule.isAmbiguous(), definitions = rule.getDefinitions(), NonTerminalNode = rule.getNonTerminalNode();
                rule = new Class(name, ambiguous, definitions, NonTerminalNode);
                return rule;
            }
        }
    ]);
    return Rule;
}();
exports.default = Rule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbnN0YW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5jb25zdCB7IGV4Y2xhbWF0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYW1iaWd1b3VzID0gYW1iaWd1b3VzO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGlzQW1iaWd1b3VzKCkge1xuICAgIHJldHVybiB0aGlzLmFtYmlndW91cztcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRBbWJpZ3VvdXMoYW1iaWd1b3VzKSB7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHJ1bGVOb2RlID0gbnVsbDtcblxuICAgIHN0YXRlLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBzdGF0ZS5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBkZWZpbml0aW9uTm9kZXM7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkZWZpbml0aW9uTm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHN0YXRlLmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGFtYmlndW91cyA9IHJ1bGUuaXNBbWJpZ3VvdXMoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJSdWxlIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImlzQW1iaWd1b3VzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJzZXROYW1lIiwic2V0QW1iaWd1b3VzIiwic2V0RGVmaW5pdGlvbnMiLCJzZXROb25UZXJtaW5hbE5vZGUiLCJhZGREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInBvc2l0aW9uIiwiZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24iLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlbW92ZURlZmluaXRpb24iLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwicmVwbGFjZURlZmluaXRpb24iLCJvbGREZWZpbml0aW9uIiwibmV3RGVmaW5pdGlvbiIsIm9sZERlZmluaXRpb25JbmRleCIsInBhcnNlIiwic3RhdGUiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsInBhcnNlZCIsImRlZmluaXRpb25Ob2RlcyIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiZGVjcmVhc2VEZXB0aCIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21SdWxlIiwiQ2xhc3MiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRStCLElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUVoQixJQUFBLFVBQWEsV0FBYixhQUFhLENBQUE7QUFDRCxJQUFBLE9BQW9CLFdBQXBCLG9CQUFvQixDQUFBOzs7Ozs7Ozs7OERBTDdEO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7QUFPQSxJQUFNLEFBQUVBLGVBQWUsR0FBS0MsWUFBYyxnQkFBbENELGVBQWUsQUFBbUIsQUFBQztBQUU1QixJQUFBLEFBQU1FLElBQUksaUJDVHRCLEFEU1k7YUFBTUEsSUFBSSxDQUNYQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxlQUFlO21DQVYzRDtRQVdJLElBQUksQ0FBQ0gsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSxlQUFlLENBQUM7Ozs7WUFHekNDLEdBQU8sRUFBUEEsU0FBTztZRWpCVCxPRmlCRUEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUM7YUFDbEI7OztZQUVESyxHQUFXLEVBQVhBLGFBQVc7WUVyQmIsT0ZxQkVBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ0osU0FBUyxDQUFDO2FBQ3ZCOzs7WUFFREssR0FBYyxFQUFkQSxnQkFBYztZRXpCaEIsT0Z5QkVBLFNBQUFBLGNB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