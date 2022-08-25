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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICBwdXNoKHRoaXMuZGVmaW5pdGlvbnMsIGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTsgIC8vL1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlRGVmaW5pdGlvbiwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKHJlcGxhY2VEZWZpbml0aW9uKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpXG4gIH1cblxuICByZW1vdmVBbGxEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXBsYWNlQWxsRGVmaW5pdGlvbnMoLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucykge1xuICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IGxlbmd0aDsgLy8vXG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpXG4gIH1cblxuICBwYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHBhcnNlKHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIG5vZGVzO1xuXG4gICAgbGV0IHJ1bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgbm9kZXMgPSBbXTtcblxuICAgICAgcGFyc2VkID0gdGhpcy5wYXJzZURlZmluaXRpb24oZGVmaW5pdGlvbiwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG5vZGVzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub2RlcywgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGhpcy5Ob25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2Rlcyk7XG5cbiAgICAgIHJ1bGVOb2RlID0gbm9uVGVybWluYWxOb2RlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGUiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsImdldE5hbWUiLCJpc0FtYmlndW91cyIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwiYWRkRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJhZGREZWZpbml0aW9ucyIsInJlbW92ZURlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwicmVwbGFjZURlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb25zIiwicmVtb3ZlQWxsRGVmaW5pdGlvbnMiLCJJbmZpbml0eSIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsImxlbmd0aCIsInBhcnNlRGVmaW5pdGlvbiIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2UiLCJiYWNrdHJhY2siLCJydWxlTm9kZSIsInNvbWUiLCJub2Rlc0xlbmd0aCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsImFtYmlndW91c1N0cmluZyIsImFtYmlndW91c1N0cmluZ0xlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic2VtaWNvbG9uU3RyaW5nIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFXUUEsSUFBSTs7O3lCQVRNLFdBQVc7MkJBQ1gsY0FBYzt5QkFFaEIsYUFBYTtzQkFDRCxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNLEFBQUVDLElBQUksR0FBS0MsVUFBYyxlQUFBLENBQXZCRCxJQUFJLEFBQW1CLEVBQ3pCLEFBQUVFLGVBQWUsR0FBS0MsWUFBYyxlQUFBLENBQWxDRCxlQUFlLEFBQW1CLEFBQUM7QUFFNUIsSUFBQSxBQUFNSCxJQUFJLGlCQUFWO2FBQU1BLElBQUksQ0FDWEssSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTs4QkFEdENSLElBQUk7UUFFckIsSUFBSSxDQUFDSyxJQUFJLEdBQUdBLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWUsQ0FBQzs7aUJBTHRCUixJ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