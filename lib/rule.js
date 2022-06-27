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
                var index = this.definitions.indexOf(definition), start = index, deleteCount = 1;
                this.definitions.splice(start, deleteCount);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbiksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcbiAgICB9KVxuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ocmVwbGFjZURlZmluaXRpb24sIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihyZXBsYWNlRGVmaW5pdGlvbiksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKVxuICB9XG5cbiAgcmVtb3ZlQWxsRGVmaW5pdGlvbnMoKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2UoMCk7IC8vL1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGUuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IHN0YXRlLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGUuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsImFkZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicHVzaCIsInJlbW92ZURlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwicmVwbGFjZURlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb25zIiwicmVtb3ZlQWxsRGVmaW5pdGlvbnMiLCJwYXJzZURlZmluaXRpb24iLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlIiwiYmFja3RyYWNrIiwicnVsZU5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJkZWNyZWFzZURlcHRoIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFaEIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0QsSUFBQSxPQUFvQixXQUFwQixvQkFBb0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQU0sQUFBRUEsZUFBZSxHQUFLQyxZQUFjLGVB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