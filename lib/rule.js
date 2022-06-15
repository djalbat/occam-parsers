"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _constants = require("./constants");
var _string = require("./utilities/string");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
            value: function replaceDefinition1(replaceDefinition) {
                for(var _len = arguments.length, replacementDefinition = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    replacementDefinition[_key - 1] = arguments[_key];
                }
                var replaceDefinitionIndex = this.definitions.indexOf(replaceDefinition);
                if (replaceDefinitionIndex > -1) {
                    var _definitions;
                    var start = replaceDefinitionIndex, deleteCount = 1;
                    (_definitions = this.definitions).splice.apply(_definitions, [
                        start,
                        deleteCount
                    ].concat(_toConsumableArray(replacementDefinition)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEFtYmlndW91cyhhbWJpZ3VvdXMpIHtcbiAgICB0aGlzLmFtYmlndW91cyA9IGFtYmlndW91cztcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgcG9zaXRpb24gPSBkZWZpbml0aW9uc0xlbmd0aDsgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gdGhpcy5kZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pLFxuICAgICAgICAgICAgc3RhcnQgPSBkZWZpbml0aW9uSW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlRGVmaW5pdGlvbiwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcmVwbGFjZURlZmluaXRpb25JbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihyZXBsYWNlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAocmVwbGFjZURlZmluaXRpb25JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IHJlcGxhY2VEZWZpbml0aW9uSW5kZXgsIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbilcbiAgICB9XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGUuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IHN0YXRlLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGUuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInNldE5hbWUiLCJzZXRBbWJpZ3VvdXMiLCJzZXREZWZpbml0aW9ucyIsInNldE5vblRlcm1pbmFsTm9kZSIsImFkZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicG9zaXRpb24iLCJkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbiIsImluY2x1ZGVzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25JbmRleCIsImluZGV4T2YiLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uSW5kZXgiLCJwYXJzZSIsInN0YXRlIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJwYXJzZWQiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicGFyc2VEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tUnVsZSIsIkNsYXNzIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFaEIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0QsSUFBQSxPQUFvQixXQUFwQixvQkFBb0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQU0sQUFBRUEsZUFBZSxHQUFLQyxZQUFjLGVBQUEsQ0FBbENELGVBQWUsQUFBbUIsQUFBQztBQUU1QixJQUFBLEFBQU1FLElBQUksaUJBQVY7YUFBTUEsSUFBSSxDQUNYQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxlQUFlOztRQUN2RCxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUNDLGVBQWUsR0FBR0EsZUFBZSxDQUFDOzs7O1lBR3pDQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ0osSUFBSSxDQUFDO2FBQ2xCOzs7WUFFREssR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNKLFNBQVMsQ0FBQzthQUN2Qjs7O1lBRURLLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixPQUFPLElBQUksQ0FBQ0osV0FBVyxDQUFDO2FBQ3pCOzs7WUFFREssR0FBa0IsRUFBbEJBLG9CQUFrQjttQkFBbEJB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