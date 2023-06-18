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
var _occamlexers = require("occam-lexers");
var _constants = require("./constants");
var _string = require("./utilities/string");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var exclamationMark = _occamlexers.specialSymbols.exclamationMark;
var Rule = /*#__PURE__*/ function() {
    function Rule(name, ambiguous, definitions, NonTerminalNode) {
        _class_call_check(this, Rule);
        this.name = name;
        this.ambiguous = ambiguous;
        this.definitions = definitions;
        this.NonTerminalNode = NonTerminalNode;
    }
    _create_class(Rule, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGggfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IHsgZXhjbGFtYXRpb25NYXJrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbWJpZ3VvdXMgPSBhbWJpZ3VvdXM7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgaXNBbWJpZ3VvdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW1iaWd1b3VzO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgcGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IGRlZmluaXRpb24ucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBwYXJzZShzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkLFxuICAgICAgICBub2RlcztcblxuICAgIGxldCBydWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zLnNvbWUoKGRlZmluaXRpb24pID0+IHtcbiAgICAgIG5vZGVzID0gW107XG5cbiAgICAgIHBhcnNlZCA9IHRoaXMucGFyc2VEZWZpbml0aW9uKGRlZmluaXRpb24sIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChub2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9kZXMsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpO1xuXG4gICAgICBydWxlTm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBhbWJpZ3VvdXNTdHJpbmcgPSB0aGlzLmFtYmlndW91cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgYW1iaWd1b3VzU3RyaW5nTGVuZ3RoID0gYW1iaWd1b3VzU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoIC0gcnVsZU5hbWVMZW5ndGggLSBhbWJpZ3VvdXNTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHthbWJpZ3VvdXNTdHJpbmd9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30ke3NlbWljb2xvblN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSdWxlIiwiZXhjbGFtYXRpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJuYW1lIiwiYW1iaWd1b3VzIiwiZGVmaW5pdGlvbnMiLCJOb25UZXJtaW5hbE5vZGUiLCJnZXROYW1lIiwiaXNBbWJpZ3VvdXMiLCJnZXREZWZpbml0aW9ucyIsImdldE5vblRlcm1pbmFsTm9kZSIsInBhcnNlRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlIiwiYmFja3RyYWNrIiwicnVsZU5vZGUiLCJzb21lIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwiYXNTdHJpbmciLCJtYXhpbXVtUnVsZU5hbWVMZW5ndGgiLCJtdWx0aUxpbmUiLCJkZWZpbml0aW9uc0xlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwicnVsZU5hbWVMZW5ndGgiLCJhbWJpZ3VvdXNTdHJpbmciLCJhbWJpZ3VvdXNTdHJpbmdMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInNlbWljb2xvblN0cmluZyIsInN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MkJBUFU7eUJBRUY7c0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsa0JBQW9CQyw0QkFBcEJEO0FBRU8sSUFBQSxBQUFNRCxxQkFBTjthQUFNQSxLQUNQRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxlQUFlO2dDQUR0Q047UUFFakIsSUFBSSxDQUFDRyxPQUFPQTtRQUNaLElBQUksQ0FBQ0MsWUFBWUE7UUFDakIsSUFBSSxDQUFDQyxjQUFjQTtRQUNuQixJQUFJLENBQUNDLGtCQUFrQkE7O2tCQUxOTjs7WUFRbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0o7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0o7WUFDZDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUks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