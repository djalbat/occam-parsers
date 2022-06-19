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
            value: function addDefinition(definition) {
                this.definitions.push(definition);
            }
        },
        {
            key: "removeDefinition",
            value: function removeDefinition(definition) {
                var index = this.definitions.indexOf(definition);
                if (index > -1) {
                    var start = index, deleteCount = 1;
                    this.definitions.splice(start, deleteCount);
                }
            }
        },
        {
            key: "replaceDefinition",
            value: function replaceDefinition(replaceDefinition1) {
                for(var _len = arguments.length, replacementDefinitions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    replacementDefinitions[_key - 1] = arguments[_key];
                }
                var _definitions;
                var index = this.definitions.indexOf(replaceDefinition1), start = index, deleteCount = 1;
                (_definitions = this.definitions).splice.apply(_definitions, [
                    start,
                    deleteCount
                ].concat(_toConsumableArray(replacementDefinitions)));
            }
        },
        {
            key: "removeAllDefinitions",
            value: function removeAllDefinitions() {
                this.definitions.splice(0); ///
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
                var maximumPadding = (0, _string).paddingFromPaddingLength(maximumRuleNameLength), definitionsString = this.definitions.reduce(function(definitionsString, definition) {
                    var definitionString = definition.asString();
                    if (definitionsString === _constants.EMPTY_STRING) {
                        definitionsString = definitionString; ///
                    } else {
                        definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
                    }
                    return definitionsString;
                }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, ambiguousString = this.ambiguous ? exclamationMark : _constants.EMPTY_STRING, ambiguousStringLength = ambiguousString.length, paddingLength = maximumRuleNameLength - ruleNameLength - ambiguousStringLength, padding = (0, _string).paddingFromPaddingLength(paddingLength);
                var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(ambiguousString).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEFtYmlndW91cyhhbWJpZ3VvdXMpIHtcbiAgICB0aGlzLmFtYmlndW91cyA9IGFtYmlndW91cztcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VEZWZpbml0aW9uLCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YocmVwbGFjZURlZmluaXRpb24pLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucylcbiAgfVxuXG4gIHJlbW92ZUFsbERlZmluaXRpb25zKCkge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKDApOyAvLy9cbiAgfVxuXG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBydWxlTm9kZSA9IG51bGw7XG5cbiAgICBzdGF0ZS5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gc3RhdGUuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlIFwiJHt0aGlzLm5hbWV9XCIuYCk7XG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCxcbiAgICAgICAgZGVmaW5pdGlvbk5vZGVzO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgZGVmaW5pdGlvbk5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBzdGF0ZS5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nID0gdGhpcy5hbWJpZ3VvdXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZ0xlbmd0aCA9IGFtYmlndW91c1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gYW1iaWd1b3VzU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7YW1iaWd1b3VzU3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGUoQ2xhc3MsIHJ1bGUpIHtcbiAgICBpZiAocnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFJ1bGU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSBydWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBhbWJpZ3VvdXMgPSBydWxlLmlzQW1iaWd1b3VzKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gcnVsZS5nZXROb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJ1bGUgPSBuZXcgQ2xhc3MobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwic2V0TmFtZSIsInNldEFtYmlndW91cyIsInNldERlZmluaXRpb25zIiwic2V0Tm9uVGVybWluYWxOb2RlIiwiYWRkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwdXNoIiwicmVtb3ZlRGVmaW5pdGlvbiIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbnMiLCJyZW1vdmVBbGxEZWZpbml0aW9ucyIsInBhcnNlIiwic3RhdGUiLCJjYWxsYmFjayIsInJ1bGVOb2RlIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsInBhcnNlZCIsImRlZmluaXRpb25Ob2RlcyIsInNvbWUiLCJwYXJzZURlZmluaXRpb24iLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiZGVjcmVhc2VEZXB0aCIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIiwiZnJvbVJ1bGUiLCJDbGFzcyIsInJ1bGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRWhCLElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTtBQUNELElBQUEsT0FBb0IsV0FBcEIsb0JBQW9CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNLEFBQUVBLGVBQWUsR0FBS0MsWUFBYyxlQUFBLENBQWxDRCxlQUFlLEFBQW1CLEFBQUM7QUFFNUIsSUFBQSxBQUFNRSxJQUFJLGlCQUFWO2FBQU1BLElBQUksQ0FDWEMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTs7UUFDdkQsSUFBSSxDQUFDSCxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFD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