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
var _necessary = require("necessary");
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
var push = _necessary.arrayUtilities.push, exclamationMark = _occamLexers.specialSymbols.exclamationMark;
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
                push(this.definitions, definitions);
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
            key: "removeAllDefinitions",
            value: function removeAllDefinitions() {
                var start = 0, deleteCount = Infinity;
                this.definitions.splice(start, deleteCount);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICBwdXNoKHRoaXMuZGVmaW5pdGlvbnMsIGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTsgIC8vL1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlRGVmaW5pdGlvbiwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKHJlcGxhY2VEZWZpbml0aW9uKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpXG4gIH1cblxuICByZW1vdmVBbGxEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXBsYWNlQWxsRGVmaW5pdGlvbnMoLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IGxlbmd0aDsgLy8vXG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpXG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIG5vZGVzO1xuXG4gICAgbGV0IHJ1bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwiYWRkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJhZGREZWZpbml0aW9ucyIsInJlbW92ZURlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwicmVwbGFjZURlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb25zIiwicmVtb3ZlQWxsRGVmaW5pdGlvbnMiLCJJbmZpbml0eSIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsImxlbmd0aCIsInBhcnNlRGVmaW5pdGlvbiIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJydWxlTm9kZSIsInNvbWUiLCJub2Rlc0xlbmd0aCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTsyQkFDQTt5QkFFRjtzQkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJELE1BQ0YsQUFBRUUsa0JBQW9CQywyQkFBYyxDQUFsQ0Q7QUFFTyxJQUFBLEFBQU1ILHFCQUFOO2FBQU1BLEtBQ1BLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7OEJBRHRDUjtRQUVqQixJQUFJLENBQUNLLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7aUJBTE5SOztZQVFuQlMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0osU0FBUztZQUN2Qjs7O1lBRUFLLEtB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