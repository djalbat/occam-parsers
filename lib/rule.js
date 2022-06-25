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
            key: "removeDefinitions",
            value: function removeDefinitions(definitions) {
                var _this = this;
                definitions.forEach(function(definition) {
                    _this.removeDefinition(definition);
                });
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
    ]);
    return Rule;
}();
exports.default = Rule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH0pXG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlRGVmaW5pdGlvbiwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKHJlcGxhY2VEZWZpbml0aW9uKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpXG4gIH1cblxuICByZW1vdmVBbGxEZWZpbml0aW9ucygpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZSgwKTsgLy8vXG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBydWxlTm9kZSA9IG51bGw7XG5cbiAgICBzdGF0ZS5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gc3RhdGUuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlIFwiJHt0aGlzLm5hbWV9XCIuYCk7XG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCxcbiAgICAgICAgZGVmaW5pdGlvbk5vZGVzO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgZGVmaW5pdGlvbk5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBzdGF0ZS5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiUnVsZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwiYWRkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwdXNoIiwicmVtb3ZlRGVmaW5pdGlvbiIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVEZWZpbml0aW9ucyIsImZvckVhY2giLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbnMiLCJyZW1vdmVBbGxEZWZpbml0aW9ucyIsInBhcnNlRGVmaW5pdGlvbiIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUVoQixJQUFBLFVBQWEsV0FBYixhQUFhLENBQUE7QUFDRCxJQUFBLE9BQW9CLFdBQXBCLG9CQUFvQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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