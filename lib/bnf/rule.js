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
                var maximumPadding = (0, _string).paddingFromPaddingLength(maximumRuleNameLength), definitionsString = this.definitions.reduce(function(definitionsString1, definition) {
                    var definitionString = definition.asString();
                    if (definitionsString1 === "") {
                        definitionsString1 = definitionString; ///
                    } else {
                        definitionsString1 = multiLine ? "".concat(definitionsString1, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString1, " | ").concat(definitionString);
                    }
                    return definitionsString1;
                }, ""), ruleName = this.name, ruleNameLength = ruleName.length, paddingLength = maximumRuleNameLength - ruleNameLength, padding = (0, _string).paddingFromPaddingLength(paddingLength);
                var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vblRlcm1pbmFsTm9kZShOb25UZXJtaW5hbE5vZGUpIHtcbiAgICB0aGlzLk5vblRlcm1pbmFsTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb24oZGVmaW5pdGlvbiwgcG9zaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoIWRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgIHBvc2l0aW9uID0gZGVmaW5pdGlvbnNMZW5ndGg7IC8vL1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydCA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gZGVmaW5pdGlvbkluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ob2xkRGVmaW5pdGlvbiwgbmV3RGVmaW5pdGlvbikge1xuICAgIGNvbnN0IG9sZERlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihvbGREZWZpbml0aW9uKTtcblxuICAgIGlmIChvbGREZWZpbml0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBvbGREZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIG5ld0RlZmluaXRpb24pXG4gICAgfVxuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBkZWZpbml0aW9uTm9kZXM7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkZWZpbml0aW9uTm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgXCJcIiksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRTZCLEdBQXFCLENBQXJCLE9BQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV6QyxJQUFJO2FBQUosSUFBSSxDQUNYLElBQUksRUFBRSxXQUFXLEVBQUUsZUFBZTs4QkFEM0IsSUFBSTthQUVoQixJQUFJLEdBQUcsSUFBSTthQUNYLFdBQVcsR0FBRyxXQUFXO2FBQ3pCLGVBQWUsR0FBRyxlQUFlOztpQkFKckIsSUFBSTs7WUFPdkIsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxHQUFHLENBQUM7NEJBQ0csSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjLEdBQUcsQ0FBQzs0QkFDSixXQUFXO1lBQ3pCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLEdBQUcsQ0FBQzs0QkFDUixlQUFlO1lBQzdCLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDUixJQUFJLEdBQUcsSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ3RCLFdBQVcsR0FBRyxXQUFXO1lBQ2hDLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7cUJBQzlCLGVBQWUsR0FBRyxlQUFlO1lBQ3hDLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFB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