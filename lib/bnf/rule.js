"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _string = require("../utilities/string");
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
            value: function parse(context, callback) {
                var _this = this;
                var ruleNode = null;
                context.increaseDepth();
                var tooDeep = context.isTooDeep();
                if (tooDeep) {
                    throw new Error("The parse tree is too deep at rule \"".concat(this.name, "\"."));
                }
                var parsed, definitionNodes;
                this.definitions.some(function(definition) {
                    definitionNodes = [];
                    parsed = _this.parseDefinition(definition, definitionNodes, context, callback);
                    if (parsed) {
                        return true;
                    }
                });
                if (parsed) {
                    var ruleName = this.name, childNodes = definitionNodes, nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
                    ruleNode = nonTerminalNode; ///
                }
                context.decreaseDepth();
                return ruleNode;
            }
        },
        {
            key: "parseDefinition",
            value: function parseDefinition(definition, nodes, context, callback) {
                var parsed;
                var savedIndex = context.getSavedIndex();
                parsed = definition.parse(nodes, context, callback);
                if (!parsed) {
                    context.backtrack(savedIndex);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBkZWZpbml0aW9uTm9kZXM7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkZWZpbml0aW9uTm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShDbGFzcywgcnVsZSkge1xuICAgIGlmIChydWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGUgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUnVsZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmFtZSA9IHJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwic2V0TmFtZSIsInNldERlZmluaXRpb25zIiwic2V0Tm9uVGVybWluYWxOb2RlIiwiYWRkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwb3NpdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbkluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2VEZWZpbml0aW9uIiwib2xkRGVmaW5pdGlvbiIsIm5ld0RlZmluaXRpb24iLCJvbGREZWZpbml0aW9uSW5kZXgiLCJwYXJzZSIsImNvbnRleHQiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsInBhcnNlZCIsImRlZmluaXRpb25Ob2RlcyIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiZGVjcmVhc2VEZXB0aCIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsIm1heGltdW1QYWRkaW5nIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwicnVsZU5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21SdWxlIiwiQ2xhc3MiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVpQixHQUFjLENBQWQsVUFBYztBQUNGLEdBQXFCLENBQXJCLE9BQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6Q0EsSUFBSSxpQkFBVixRQUFRO2FBQUZBLElBQUksQ0FDWEMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7O1FBQzVDLElBQUksQ0FBQ0YsSUFBSSxHQUFHQSxJQUFJO1FBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO1FBQzlCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSxlQUFlOzs7O1lBR3hDQyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVEsQ0FBUkEsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQ0gsSUFBSTtZQUNsQixDQUFDOzs7WUFFREksR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDSCxXQUFXO1lBQ3pCLENBQUM7OztZQUVESSxHQUFrQixFQUFsQkEsQ0FBa0I7bUJBQWxCQSxRQUFRLENBQVJBLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUNILGVBQWU7WUFDN0IsQ0FBQzs7O1lBRURJLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUU4sQ0FBUk0sT0FBTyxDQUFDTixJQUFJLEVBQUUsQ0FBQztnQkFDYixJ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