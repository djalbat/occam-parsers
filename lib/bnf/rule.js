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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvcnVsZS5qcyJdLCJuYW1lcyI6WyJFTVBUWV9TVFJJTkciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJSdWxlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJzZXROYW1lIiwic2V0RGVmaW5pdGlvbnMiLCJzZXROb25UZXJtaW5hbE5vZGUiLCJhZGREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInBvc2l0aW9uIiwiZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24iLCJpbmNsdWRlcyIsInVuZGVmaW5lZCIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlbW92ZURlZmluaXRpb24iLCJkZWZpbml0aW9uSW5kZXgiLCJpbmRleE9mIiwicmVwbGFjZURlZmluaXRpb24iLCJvbGREZWZpbml0aW9uIiwibmV3RGVmaW5pdGlvbiIsIm9sZERlZmluaXRpb25JbmRleCIsInBhcnNlIiwiY29udGV4dCIsImNhbGxiYWNrIiwicnVsZU5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwicGFyc2VkIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZSIsInBhcnNlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwibWF4aW11bVBhZGRpbmciLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJydWxlTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbVJ1bGUiLCJDbGFzcyIsInJ1bGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWlCLEdBQWMsQ0FBZCxVQUFjO0FBQ0YsR0FBcUIsQ0FBckIsT0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpDLElBQUksaUJBQVYsUUFBUTthQUFGLElBQUksQ0FDWCxJQUFJLEVBQUUsV0FBVyxFQUFFLGVBQWU7OEJBRDNCLElBQUk7UUFFckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWU7O2lCQUpyQixJQUFJOztZQU92QixHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2xCLENBQUM7OztZQUVELEdBQWMsR0FBZCxjQUFjO21CQUFkLFFBQVEsQ0FBUixjQUFjLEdBQUcsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3pCLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjttQkFBbEIsUUFBUSxDQUFSLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUM3QixDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzttQkFBUCxRQUFRLENBQVIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFjLEdBQWQsY0FBYzttQkFBZCxRQUFRLENBQVIsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7WUFDaEMsQ0FBQzs7O1lBRUQsR0FBa0Is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