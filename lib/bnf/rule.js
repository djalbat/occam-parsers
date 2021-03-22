"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var Rule = function() {
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
                var ruleNode = null;
                context.increaseDepth();
                var tooDeep = context.isTooDeep();
                if (tooDeep) {
                    throw new Error("The parse tree is too deep at rule \"".concat(this.name, "\"."));
                }
                var parsed, definitionNodes;
                this.definitions.some((function(definition) {
                    definitionNodes = [];
                    parsed = this.parseDefinition(definition, definitionNodes, context, callback);
                    if (parsed) {
                        return true;
                    }
                }).bind(this));
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
            value: function asString(maximumRuleNameLength, param) {
                var multiLine = param === void 0 ? true : param;
                var definitionsLength = this.definitions.length;
                multiLine = multiLine && definitionsLength > 1; ///
                var maximumPadding = _string.paddingFromPaddingLength(maximumRuleNameLength), definitionsString = this.definitions.reduce(function(definitionsString1, definition) {
                    var definitionString = definition.asString();
                    if (definitionsString1 === "") {
                        definitionsString1 = definitionString; ///
                    } else {
                        definitionsString1 = multiLine ? "".concat(definitionsString1, "\n                                   \n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString1, " | ").concat(definitionString);
                    }
                    return definitionsString1;
                }, ""), ruleName = this.name, ruleNameLength = ruleName.length, paddingLength = maximumRuleNameLength - ruleNameLength, padding = _string.paddingFromPaddingLength(paddingLength);
                var semicolonString = multiLine ? "\n                             \n".concat(maximumPadding, "   ;") : " ;", string = "\n          \n".concat(this.name).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBkZWZpbml0aW9uTm9kZXM7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkZWZpbml0aW9uTm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcbiAgICAgICAgICBcbiR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBydWxlLmdldE5vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLElBQUE7YUFBQSxJQUFBLENBQ0EsSUFBQSxFQUFBLFdBQUEsRUFBQSxlQUFBOzhCQURBLElBQUE7YUFFQSxJQUFBLEdBQUEsSUFBQTthQUNBLFdBQUEsR0FBQSxXQUFBO2FBQ0EsZUFBQSxHQUFBLGVBQUE7O2lCQUpBLElBQUE7O0FBT0EsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQTs0QkFDQSxJQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGNBQUE7NEJBQUEsY0FBQTs0QkFDQSxXQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGtCQUFBOzRCQUFBLGtCQUFBOzRCQUNBLGVBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsT0FBQTs0QkFBQSxPQUFBLENBQUEsSUFBQTtxQkFDQSxJQUFBLEdBQUEsSUFBQTs7OztBQUdBLGVBQUEsR0FBQSxjQUFBOzRCQUFBLGNBQUEsQ0FBQSxXQUFBO3FCQUNBLFdBQUEsR0FBQSxXQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGtCQUFBOzRCQUFBLGtCQUFBLENBQUEsZUFBQTtxQkFDQSxlQUFBLEdBQUEsZUFBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUEsQ0FBQSxVQUFBLEVBQUEsUUFBQTtvQkFDQSw2QkFBQSxRQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsVUFBQTtxQkFFQSw2QkFBQTt3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