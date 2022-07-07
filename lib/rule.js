"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rule;
    }
});
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
            key: "addDefinitions",
            value: function addDefinitions(definitions) {
                var _this = this;
                definitions.forEach(function(definition) {
                    _this.addDefinition(definition);
                });
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
                var start = 0;
                this.definitions.splice(start);
            }
        },
        {
            key: "replaceAllDefinitions",
            value: function replaceAllDefinitions() {
                for(var _len = arguments.length, replacementDefinitions = new Array(_len), _key = 0; _key < _len; _key++){
                    replacementDefinitions[_key] = arguments[_key];
                }
                var _definitions;
                var start = 0, length = this.definitions.length, deleteCount = length; ///
                (_definitions = this.definitions).splice.apply(_definitions, [
                    start,
                    deleteCount
                ].concat(_toConsumableArray(replacementDefinitions)));
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
                var maximumPadding = (0, _string.paddingFromPaddingLength)(maximumRuleNameLength), definitionsString = this.definitions.reduce(function(definitionsString, definition) {
                    var definitionString = definition.asString();
                    if (definitionsString === _constants.EMPTY_STRING) {
                        definitionsString = definitionString; ///
                    } else {
                        definitionsString = multiLine ? "".concat(definitionsString, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString, " | ").concat(definitionString);
                    }
                    return definitionsString;
                }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, ambiguousString = this.ambiguous ? exclamationMark : _constants.EMPTY_STRING, ambiguousStringLength = ambiguousString.length, paddingLength = maximumRuleNameLength - ruleNameLength - ambiguousStringLength, padding = (0, _string.paddingFromPaddingLength)(paddingLength);
                var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(ambiguousString).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
                return string;
            }
        }
    ]);
    return Rule;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZERlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ocmVwbGFjZURlZmluaXRpb24sIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihyZXBsYWNlRGVmaW5pdGlvbiksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKVxuICB9XG5cbiAgcmVtb3ZlQWxsRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQpO1xuICB9XG5cbiAgcmVwbGFjZUFsbERlZmluaXRpb25zKC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgbGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBsZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKVxuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGUuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IHN0YXRlLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGUuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsImFkZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicHVzaCIsImFkZERlZmluaXRpb25zIiwiZm9yRWFjaCIsInJlbW92ZURlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbnMiLCJyZW1vdmVBbGxEZWZpbml0aW9ucyIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsImxlbmd0aCIsInBhcnNlRGVmaW5pdGlvbiIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsSUFBSTs7OzJCQVBNLGNBQWM7eUJBRWhCLGFBQWE7c0JBQ0Qsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBTSxBQUFFQyxlQUFlLEdBQUtDLFlBQWMsZUFBQSxDQUFsQ0QsZUFBZSxBQUFtQixBQUFDO0FBRTVCLElBQUEsQUFBTUQsSUFBSSxpQkFBVjthQUFNQSxJQUFJLENBQ1hHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7O1FBQ3ZELElBQUksQ0FBQ0gsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSxlQUFlLENBQUM7Ozs7WUFHekNDLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJLENBQUM7YUFDbEI7OztZQUVESyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ0osU0FBUyxDQUFDO2FBQ3ZCOzs7WUFFREssR0FBYyxFQUFkQSxnQkFBYzttQkFBZEEsU0FBQUEsY0FBYyxHQUFHO2dCQUNmLE9BQU8sSUFBSSxDQUFDSixX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