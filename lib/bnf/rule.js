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
                var maximumPadding = (0, _string).paddingFromPaddingLength(maximumRuleNameLength), definitionsString = this.definitions.reduce(function(definitionsString, definition) {
                    var definitionString = definition.asString();
                    if (definitionsString === _constants.EMPTY_STRING) {
                        definitionsString = definitionString; ///
                    } else {
                        definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
                    }
                    return definitionsString;
                }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, paddingLength = maximumRuleNameLength - ruleNameLength, padding = (0, _string).paddingFromPaddingLength(paddingLength);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJFTVBUWV9TVFJJTkciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJSdWxlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJzZXROYW1lIiwic2V0RGVmaW5pdGlvbnMiLCJzZXROb25UZXJtaW5hbE5vZGUiLCJhZGREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInBvc2l0aW9uIiwiZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24iLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlbW92ZURlZmluaXRpb24iLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwicmVwbGFjZURlZmluaXRpb24iLCJvbGREZWZpbml0aW9uIiwibmV3RGVmaW5pdGlvbiIsIm9sZERlZmluaXRpb25JbmRleCIsInBhcnNlIiwiY29udGV4dCIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwicGFyc2VkIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZSIsInBhcnNlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwibWF4aW11bVBhZGRpbmciLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbVJ1bGUiLCJDbGFzcyIsInJ1bGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWlCLEdBQWMsQ0FBZCxVQUFjO0FBQ0YsR0FBcUIsQ0FBckIsT0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpDLElBQUksaUJBQVYsUUFBUTthQUFGLElBQUksQ0FDWCxJQUFJLEVBQUUsV0FBVyxFQUFFLGVBQWU7OEJBRDNCLElBQUk7UUFFckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWU7O2lCQUpyQixJQUFJOztZQU92QixHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2xCLENBQUM7OztZQUVELEdBQWMsR0FBZCxjQUFjO21CQUFkLFFBQVEsQ0FBUixjQUFjLEdBQUcsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3pCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjttQkFBbEIsUUFBUSxDQUFSLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUM3QixDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFjLEdBQWQsY0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7WUFDaEMsQ0FBQzs7O1lBRUQsR0FBa0Is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QUFRLENBQUQsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsRUFBRSxFQUFFLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxHQUFHLEtBQUs7b0JBQ1osS0FBSyxHQUFHLElBQUk7Z0JBQ2QsQ0FBQztnQkFFRCxHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUNqQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjtnQkFFL0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxlQUFlO2dCQUVuRCxNQUFNLENBQUMsSUFBSTtZQUNiLENBQUM7OztXQTdLa0IsSUFBSTs7a0JBQUosSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgcG9zaXRpb24gPSBkZWZpbml0aW9uc0xlbmd0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgc3RhcnQgPSBkZWZpbml0aW9uSW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihvbGREZWZpbml0aW9uLCBuZXdEZWZpbml0aW9uKSB7XG4gICAgY29uc3Qgb2xkRGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKG9sZERlZmluaXRpb24pO1xuXG4gICAgaWYgKG9sZERlZmluaXRpb25JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG9sZERlZmluaXRpb25JbmRleCwgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgbmV3RGVmaW5pdGlvbilcbiAgICB9XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBydWxlTm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2RlcywgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl19