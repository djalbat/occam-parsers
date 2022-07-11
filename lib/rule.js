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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcmVwbGFjZURlZmluaXRpb24ocmVwbGFjZURlZmluaXRpb24sIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihyZXBsYWNlRGVmaW5pdGlvbiksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKVxuICB9XG5cbiAgcmVwbGFjZUFsbERlZmluaXRpb25zKC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgbGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBsZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKVxuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGUuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IHN0YXRlLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGUuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9ucyIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXBsYWNlQWxsRGVmaW5pdGlvbnMiLCJsZW5ndGgiLCJwYXJzZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZSIsImJhY2t0cmFjayIsInJ1bGVOb2RlIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsImRlZmluaXRpb25Ob2RlcyIsInNvbWUiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiZGVjcmVhc2VEZXB0aCIsImFzU3RyaW5nIiwibWF4aW11bVJ1bGVOYW1lTGVuZ3RoIiwibXVsdGlMaW5lIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInJ1bGVOYW1lTGVuZ3RoIiwiYW1iaWd1b3VzU3RyaW5nIiwiYW1iaWd1b3VzU3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVNRQSxJQUFJOzs7MkJBUE0sY0FBYzt5QkFFaEIsYUFBYTtzQkFDRCxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNLEFBQUVDLGVBQWUsR0FBS0MsWUFBYyxlQUFBLENBQWxDRCxlQUFlLEFBQW1CLEFBQUM7QUFFNUIsSUFBQSxBQUFNRCxJQUFJLGlCQUFWO2FBQU1BLElBQUksQ0FDWEcsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTs7UUFDdkQsSUFBSSxDQUFDSCxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWUsQ0FBQzs7OztZQUd6Q0MsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUksQ0FBQzthQUNsQjs7O1lBRURLLEdBQVcsRUFBWEEs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