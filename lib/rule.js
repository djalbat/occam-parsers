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
            value: function replaceDefinition1(replaceDefinition, replacementDefinition) {
                var replaceDefinitionIndex = this.definitions.indexOf(replaceDefinition);
                if (replaceDefinitionIndex > -1) {
                    var start = replaceDefinitionIndex, deleteCount = 1;
                    this.definitions.splice(start, deleteCount, replacementDefinition);
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
                    throw new Error('The parse tree is too deep at rule "'.concat(this.name, '".'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEFtYmlndW91cyhhbWJpZ3VvdXMpIHtcbiAgICB0aGlzLmFtYmlndW91cyA9IGFtYmlndW91cztcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgcG9zaXRpb24gPSBkZWZpbml0aW9uc0xlbmd0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgc3RhcnQgPSBkZWZpbml0aW9uSW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcmVwbGFjZURlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihyZXBsYWNlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVwbGFjZURlZmluaXRpb25JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHJlcGxhY2VEZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIHJlcGxhY2VtZW50RGVmaW5pdGlvbilcbiAgICB9XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGUuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IHN0YXRlLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGUuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInNldE5hbWUiLCJzZXRBbWJpZ3VvdXMiLCJzZXREZWZpbml0aW9ucyIsInNldE5vblRlcm1pbmFsTm9kZSIsImFkZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicG9zaXRpb24iLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25JbmRleCIsImluZGV4T2YiLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uSW5kZXgiLCJwYXJzZSIsInN0YXRlIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJwYXJzZWQiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicGFyc2VEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tUnVsZSIsIkNsYXNzIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFaEIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0QsSUFBQSxPQUFvQixXQUFwQixvQkFBb0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBTSxBQUFFQSxlQUFlLEdBQUtDLFlBQWMsZUFBQSxDQUFsQ0QsZUFBZSxBQUFtQixBQUFDO0FBRTVCLElBQUEsQUFBTUUsSUFBSSxpQkFBVjthQUFNQSxJQUFJLENBQ1hDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7O1FBQ3ZELElBQUksQ0FBQ0gsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSxlQUFlLENBQUM7Ozs7WUFHekNDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUM7YUFDbEI7OztZQUVESyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ0osU0FBUyxDQUFDO2FBQ3ZCOzs7WUFFREssR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLE9BQU8sSUFBSSxDQUFDSixXQUFXLENBQUM7YUFDekI7OztZQUVESyxHQUFrQixFQUFsQkEsb0JBQWtCO21CQUFsQkEsU0FBQUEsa0JBQWtCLEdBQUc7Z0JBQ25CLE9BQU8s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