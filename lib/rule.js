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
                var name = rule.getName(), ambiguous = rule.isAmbiguous(), definitions = rule.getDefinitions(), NonTerminalNode = rule.getNonTerminalNode();
                rule = new Class(name, ambiguous, definitions, NonTerminalNode);
                return rule;
            }
        }
    ]);
    return Rule;
}();
exports.default = Rule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEFtYmlndW91cyhhbWJpZ3VvdXMpIHtcbiAgICB0aGlzLmFtYmlndW91cyA9IGFtYmlndW91cztcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgcG9zaXRpb24gPSBkZWZpbml0aW9uc0xlbmd0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgc3RhcnQgPSBkZWZpbml0aW9uSW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihvbGREZWZpbml0aW9uLCBuZXdEZWZpbml0aW9uKSB7XG4gICAgY29uc3Qgb2xkRGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKG9sZERlZmluaXRpb24pO1xuXG4gICAgaWYgKG9sZERlZmluaXRpb25JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG9sZERlZmluaXRpb25JbmRleCwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgbmV3RGVmaW5pdGlvbilcbiAgICB9XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGUuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IHN0YXRlLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGUuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInNldE5hbWUiLCJzZXRBbWJpZ3VvdXMiLCJzZXREZWZpbml0aW9ucyIsInNldE5vblRlcm1pbmFsTm9kZSIsImFkZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicG9zaXRpb24iLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25JbmRleCIsImluZGV4T2YiLCJyZXBsYWNlRGVmaW5pdGlvbiIsIm9sZERlZmluaXRpb24iLCJuZXdEZWZpbml0aW9uIiwib2xkRGVmaW5pdGlvbkluZGV4IiwicGFyc2UiLCJzdGF0ZSIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwicGFyc2VkIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZSIsInBhcnNlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbVJ1bGUiLCJDbGFzcyIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7d0JBQUE7QUFFNkIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0QsSUFBQSxPQUFvQixXQUFwQixvQkFBb0IsQ0FBQTs7Ozs7Ozs7OzhEQUg3RDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7O0FBS2UsSUFBQSxBQUFNQSxJQUFJLGlCQ0x0QixBREtZO2FBQU1BLElBQUksQ0FDWEMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTttQ0FOM0Q7UUFPSSxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQztRQUMv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