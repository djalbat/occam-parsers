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
                        definitionsString1 = multiLine ? "".concat(definitionsString1, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString1, " | ").concat(definitionString);
                    }
                    return definitionsString1;
                }, ""), ruleName = this.name, ruleNameLength = ruleName.length, paddingLength = maximumRuleNameLength - ruleNameLength, padding = _string.paddingFromPaddingLength(paddingLength);
                var semicolonString = multiLine ? "\\n\\n".concat(maximumPadding, "   ;") : " ;", string = "\\n\\n".concat(this.name).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBkZWZpbml0aW9uTm9kZXM7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkZWZpbml0aW9uTm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBcIlwiKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4ke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxJQUFBO2FBQUEsSUFBQSxDQUNBLElBQUEsRUFBQSxXQUFBLEVBQUEsZUFBQTs4QkFEQSxJQUFBO2FBRUEsSUFBQSxHQUFBLElBQUE7YUFDQSxXQUFBLEdBQUEsV0FBQTthQUNBLGVBQUEsR0FBQSxlQUFBOztpQkFKQSxJQUFBOztBQU9BLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUE7NEJBQ0EsSUFBQTs7OztBQUdBLGVBQUEsR0FBQSxjQUFBOzRCQUFBLGNBQUE7NEJBQ0EsV0FBQTs7OztBQUdBLGVBQUEsR0FBQSxrQkFBQTs0QkFBQSxrQkFBQTs0QkFDQSxlQUFBOzs7O0FBR0EsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQSxDQUFBLElBQUE7cUJBQ0EsSUFBQSxHQUFBLElBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsY0FBQTs0QkFBQSxjQUFBLENBQUEsV0FBQTtxQkFDQSxXQUFBLEdBQUEsV0FBQTs7OztBQUdBLGVBQUEsR0FBQSxrQkFBQTs0QkFBQSxrQkFBQSxDQUFBLGVBQUE7cUJBQ0EsZUFBQSxHQUFBLGVBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsYUFBQTs0QkFBQSxhQUFBLENBQUEsVUFBQSxFQUFBLFFBQUE7b0JBQ0EsNkJBQUEsUUFBQSxXQUFBLENBQUEsUUFBQSxDQUFBLFVBQUE7cUJBRUEsNkJBQUE7d0JBQ0EsUUFBQSxLQUFBLFNBQUE7NEJBQ0EsaUJBQUEsUUFBQSxXQUFBLENBQUEsTUFBQTtBQUVBLGdDQUFBLEdBQUEs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