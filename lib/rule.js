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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEFtYmlndW91cyhhbWJpZ3VvdXMpIHtcbiAgICB0aGlzLmFtYmlndW91cyA9IGFtYmlndW91cztcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9uVGVybWluYWxOb2RlKE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICB9XG5cbiAgcmVtb3ZlRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmRlZmluaXRpb25zLmluZGV4T2YoZGVmaW5pdGlvbik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZURlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVEZWZpbml0aW9uKGRlZmluaXRpb24pO1xuICAgIH0pXG4gIH1cblxuICByZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlRGVmaW5pdGlvbiwgLi4ucmVwbGFjZW1lbnREZWZpbml0aW9ucykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kZWZpbml0aW9ucy5pbmRleE9mKHJlcGxhY2VEZWZpbml0aW9uKSxcbiAgICAgICAgICBzdGFydCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLnJlcGxhY2VtZW50RGVmaW5pdGlvbnMpXG4gIH1cblxuICByZW1vdmVBbGxEZWZpbml0aW9ucygpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnNwbGljZSgwKTsgLy8vXG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcnVsZU5vZGUgPSBudWxsO1xuXG4gICAgc3RhdGUuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IHN0YXRlLmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcnVsZSBcIiR7dGhpcy5uYW1lfVwiLmApO1xuICAgIH1cblxuICAgIGxldCBwYXJzZWQsXG4gICAgICAgIGRlZmluaXRpb25Ob2RlcztcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMuc29tZSgoZGVmaW5pdGlvbikgPT4ge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIGRlZmluaXRpb25Ob2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgc3RhdGUuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZyhtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIG11bHRpTGluZSA9IHRydWUpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgbXVsdGlMaW5lID0gbXVsdGlMaW5lICYmIChkZWZpbml0aW9uc0xlbmd0aCA+IDEpOyAgLy8vXG5cbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUnVsZU5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBtdWx0aUxpbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ31cblxuJHttYXhpbXVtUGFkZGluZ30gICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIGFtYmlndW91c1N0cmluZyA9IHRoaXMuYW1iaWd1b3VzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2xhbWF0aW9uTWFyayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmdMZW5ndGggPSBhbWJpZ3VvdXNTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIGFtYmlndW91c1N0cmluZ0xlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpO1xuXG4gICAgY29uc3Qgc2VtaWNvbG9uU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuXG4ke21heGltdW1QYWRkaW5nfSAgIDtgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA7XCIsXG4gICAgICAgICAgc3RyaW5nID0gYFxuXG4ke3RoaXMubmFtZX0ke2FtYmlndW91c1N0cmluZ30ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfSR7c2VtaWNvbG9uU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKENsYXNzLCBydWxlKSB7XG4gICAgaWYgKHJ1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZSA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBSdWxlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gcnVsZS5pc0FtYmlndW91cygpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGUiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInNldE5hbWUiLCJzZXRBbWJpZ3VvdXMiLCJzZXREZWZpbml0aW9ucyIsInNldE5vblRlcm1pbmFsTm9kZSIsImFkZERlZmluaXRpb24iLCJkZWZpbml0aW9uIiwicHVzaCIsInJlbW92ZURlZmluaXRpb24iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlRGVmaW5pdGlvbnMiLCJmb3JFYWNoIiwicmVwbGFjZURlZmluaXRpb24iLCJyZXBsYWNlbWVudERlZmluaXRpb25zIiwicmVtb3ZlQWxsRGVmaW5pdGlvbnMiLCJwYXJzZSIsInN0YXRlIiwiY2FsbGJhY2siLCJydWxlTm9kZSIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJwYXJzZWQiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lIiwicGFyc2VEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsImRlY3JlYXNlRGVwdGgiLCJub2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyIsImZyb21SdWxlIiwiQ2xhc3MiLCJydWxlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRWtCLElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUVoQixJQUFBLFVBQWEsV0FBYixhQUFhLENBQUE7QUFDRCxJQUFBLE9BQW9CLFdBQXBCLG9CQUFvQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBTSxBQUFFQSxlQUFlLEdBQUtDLFlBQWMsZUFBQSxDQUFsQ0QsZUFBZSxBQUFtQixBQUFDO0FBRTVCLElBQUEsQUFBTUUsSUFBSSxpQkFBVjthQUFNQSxJQUFJLENBQ1hDLElB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