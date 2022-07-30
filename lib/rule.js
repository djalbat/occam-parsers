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
            key: "removeDefinition",
            value: function removeDefinition(definition) {
                var index = this.definitions.indexOf(definition);
                if (index > -1) {
                    var start = index, deleteCount = 1; ///
                    this.definitions.splice(start, deleteCount);
                }
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
                var parsed, nodes;
                var ruleNode = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxOyAgLy8vXG5cbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGVmaW5pdGlvbnMuaW5kZXhPZihkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VEZWZpbml0aW9uLCAuLi5yZXBsYWNlbWVudERlZmluaXRpb25zKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YocmVwbGFjZURlZmluaXRpb24pLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucylcbiAgfVxuXG4gIHJlcGxhY2VBbGxEZWZpbml0aW9ucyguLi5yZXBsYWNlbWVudERlZmluaXRpb25zKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgIGxlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoOyAvLy9cblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucylcbiAgfVxuXG4gIHBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBkZWZpbml0aW9uLnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgcGFyc2Uoc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZCxcbiAgICAgICAgbm9kZXM7XG5cbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBub2RlcyA9IFtdO1xuXG4gICAgICBwYXJzZWQgPSB0aGlzLnBhcnNlRGVmaW5pdGlvbihkZWZpbml0aW9uLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAobm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vZGVzLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSB0aGlzLk5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgICAgcnVsZU5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCwgbXVsdGlMaW5lID0gdHJ1ZSkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBtdWx0aUxpbmUgPSBtdWx0aUxpbmUgJiYgKGRlZmluaXRpb25zTGVuZ3RoID4gMSk7ICAvLy9cblxuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfVxuXG4ke21heGltdW1QYWRkaW5nfSAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2RlZmluaXRpb25zU3RyaW5nfSB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVMZW5ndGggPSBydWxlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nID0gdGhpcy5hbWJpZ3VvdXMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZ0xlbmd0aCA9IGFtYmlndW91c1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1SdWxlTmFtZUxlbmd0aCAtIHJ1bGVOYW1lTGVuZ3RoIC0gYW1iaWd1b3VzU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCk7XG5cbiAgICBjb25zdCBzZW1pY29sb25TdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIDtcIixcbiAgICAgICAgICBzdHJpbmcgPSBgXG5cbiR7dGhpcy5uYW1lfSR7YW1iaWd1b3VzU3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZSIsImV4Y2xhbWF0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiZ2V0TmFtZSIsImlzQW1iaWd1b3VzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJhZGREZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInB1c2giLCJyZW1vdmVEZWZpbml0aW9uIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlbW92ZURlZmluaXRpb25zIiwiZm9yRWFjaCIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9ucyIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsImxlbmd0aCIsInBhcnNlRGVmaW5pdGlvbiIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJydWxlTm9kZSIsInNvbWUiLCJub2Rlc0xlbmd0aCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9u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