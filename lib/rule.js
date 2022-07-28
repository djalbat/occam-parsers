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
            key: "removeDefinitions",
            value: function removeDefinitions(definitions) {
                var _this = this;
                definitions.forEach(function(definition) {
                    var index = _this.definitions.indexOf(definition);
                    if (index > -1) {
                        var start = index, deleteCount = 1;
                        _this.definitions.splice(start, deleteCount);
                    }
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
                var parsed, nodes;
                this.definitions.some(function(definition) {
                    nodes = [];
                    parsed = _this.parseDefinition(definition, nodes, state, callback);
                    if (parsed) {
                        var nodesLength = nodes.length;
                        if (nodesLength === 0) {
                            parsed = false;
                        }
                    }
                    if (parsed) {
                        return true;
                    }
                });
                if (parsed) {
                    var ruleName = this.name, childNodes = nodes, nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VEZWZpbml0aW9uLCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YocmVwbGFjZURlZmluaXRpb24pLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucylcbiAgfVxuXG4gIHJlcGxhY2VBbGxEZWZpbml0aW9ucyguLi5yZXBsYWNlbWVudERlZmluaXRpb25zKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgIGxlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoOyAvLy9cblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucylcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgcGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHJ1bGVOb2RlID0gbnVsbDtcblxuICAgIHN0YXRlLmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBzdGF0ZS5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHJ1bGUgXCIke3RoaXMubmFtZX1cIi5gKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBub2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICBzdGF0ZS5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwiZGVmaW5pdGlvbiIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbnMiLCJyZXBsYWNlQWxsRGVmaW5pdGlvbnMiLCJsZW5ndGgiLCJwYXJzZURlZmluaXRpb24iLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlIiwiYmFja3RyYWNrIiwicnVsZU5vZGUiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwic29tZSIsIm5vZGVzTGVuZ3RoIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsSUFBSTs7OzJCQVBNLGNBQWM7eUJBRWhCLGFBQWE7c0JBQ0Qsb0JBQW9C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