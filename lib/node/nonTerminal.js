"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NonTerminalNode;
    }
});
var _necessary = require("necessary");
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/nonTerminalNode"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
var first = _necessary.arrayUtilities.first, match = _necessary.arrayUtilities.match, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, childNodes, ambiguous, precedence) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
        this.ambiguous = ambiguous;
        this.precedence = precedence;
    }
    _create_class(NonTerminalNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getChildNodes",
            value: function getChildNodes() {
                return this.childNodes;
            }
        },
        {
            key: "isAmbiguous",
            value: function isAmbiguous() {
                return this.ambiguous;
            }
        },
        {
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
            }
        },
        {
            key: "setRuleName",
            value: function setRuleName(ruleName) {
                this.ruleName = ruleName;
            }
        },
        {
            key: "setChildNodes",
            value: function setChildNodes(childNodes) {
                this.childNodes = childNodes;
            }
        },
        {
            key: "setAmbiguous",
            value: function setAmbiguous(ambiguous) {
                this.ambiguous = ambiguous;
            }
        },
        {
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "isTerminalNode",
            value: function isTerminalNode() {
                var terminalNode = false;
                return terminalNode;
            }
        },
        {
            key: "isNonTerminalNode",
            value: function isNonTerminalNode() {
                var nonTerminalNode = true;
                return nonTerminalNode;
            }
        },
        {
            key: "getFirstSignificantToken",
            value: function getFirstSignificantToken() {
                var firstSignificantToken = null;
                forwardsSome(this.childNodes, function(childNode) {
                    firstSignificantToken = childNode.getFirstSignificantToken();
                    if (firstSignificantToken !== null) {
                        return true;
                    }
                });
                return firstSignificantToken;
            }
        },
        {
            key: "getLastSignificantToken",
            value: function getLastSignificantToken() {
                var lastSignificantToken = null;
                backwardsSome(this.childNodes, function(childNode) {
                    lastSignificantToken = childNode.getLastSignificantToken();
                    if (lastSignificantToken !== null) {
                        return true;
                    }
                });
                return lastSignificantToken;
            }
        },
        {
            key: "isLowerPrecedence",
            value: function isLowerPrecedence(ruleName, precedence) {
                var lowerPrecedence;
                if (false) {
                ///
                } else if (this.precedence === null) {
                    lowerPrecedence = false;
                } else if (this.precedence === Infinity) {
                    var firstChildNode = first(this.childNodes);
                    lowerPrecedence = firstChildNode.isLowerPrecedence(ruleName, precedence);
                } else {
                    lowerPrecedence = this.ruleName === ruleName && this.precedence < precedence;
                }
                return lowerPrecedence;
            }
        },
        {
            key: "isUnprecedented",
            value: function isUnprecedented() {
                var _this = this;
                var unprecedented = false;
                if (this.precedence !== null) {
                    unprecedented = this.childNodes.some(function(childNode) {
                        var childNodeLowerPrecedence = childNode.isLowerPrecedence(_this.ruleName, _this.precedence);
                        if (childNodeLowerPrecedence) {
                            return true;
                        }
                    });
                }
                return unprecedented;
            }
        },
        {
            key: "isIncludedIn",
            value: function isIncludedIn(node) {
                var _this = this;
                var includedIn = false;
                if (this === node) {
                    includedIn = true;
                } else {
                    var nodeNonTerminalNode = node.isNonTerminalNode();
                    if (nodeNonTerminalNode) {
                        var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
                        includedIn = childNodes.some(function(childNode) {
                            var includedInChildNode = _this.isIncludedIn(childNode);
                            if (includedInChildNode) {
                                return true;
                            }
                        });
                    }
                }
                return includedIn;
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var childNodesLength = this.childNodes.length, empty = childNodesLength === 0;
                return empty;
            }
        },
        {
            key: "match",
            value: function match1(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity, exactly = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var matches = false;
                var nodeNonTerminalNode = node.isNonTerminalNode();
                if (nodeNonTerminalNode) {
                    var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
                    if (this.ruleName === nonTerminalNodeRuleName) {
                        var nonTerminalNodeAmbiguous = nonTerminalNode.isAmbiguous();
                        if (this.ambiguous === nonTerminalNodeAmbiguous) {
                            var precedence = this.getPrecedence(), nonTerminalNodePrecedence = nonTerminalNode.getPrecedence();
                            if (precedence === nonTerminalNodePrecedence) {
                                depth--;
                                if (depth === 0) {
                                    matches = true;
                                } else {
                                    var nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes();
                                    matches = match(this.childNodes, nonTerminalNodeChildNodes, function(childNode, nonTerminalNodeChildNode) {
                                        var childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth, exactly);
                                        if (childNodeMatchesNonTerminalNodeChildNode) {
                                            return true;
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
                return matches;
            }
        },
        {
            key: "rewrite",
            value: function rewrite() {
                var rewrittenNonTerminalNode = null;
                return rewrittenNonTerminalNode;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), parseTree = nonTerminalNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var Class = this.constructor, ruleName = this.ruleName, childNodes = this.childNodes.map(function(childNode) {
                    childNode = childNode.clone(); ///
                    return childNode;
                }), ambiguous = this.ambiguous, precedence = this.precedence, nonTerminalNode = new Class(ruleName, childNodes, ambiguous, precedence);
                return nonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndAmbiguous",
            value: function fromRuleNameChildNodesAndAmbiguous(Class, ruleName, childNodes, ambiguous) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                if (ambiguous === undefined) {
                    ambiguous = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var precedence = null, nonTerminalNode = _construct(Class, [
                    ruleName,
                    childNodes,
                    ambiguous,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBtYXRjaCwgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuYW1iaWd1b3VzID0gYW1iaWd1b3VzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGlzQW1iaWd1b3VzKCkge1xuICAgIHJldHVybiB0aGlzLmFtYmlndW91cztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIHNldEFtYmlndW91cyhhbWJpZ3VvdXMpIHtcbiAgICB0aGlzLmFtYmlndW91cyA9IGFtYmlndW91cztcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGZvcndhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGNoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKSB7XG4gICAgbGV0IGxvd2VyUHJlY2VkZW5jZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IG51bGwpIHtcbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdCh0aGlzLmNoaWxkTm9kZXMpO1xuXG4gICAgICBsb3dlclByZWNlZGVuY2UgPSBmaXJzdENoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9ICgodGhpcy5ydWxlTmFtZSA9PT0gcnVsZU5hbWUpICYmICh0aGlzLnByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBsZXQgdW5wcmVjZWRlbnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgdW5wcmVjZWRlbnRlZCA9IHRoaXMuY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UgPSBjaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UodGhpcy5ydWxlTmFtZSwgdGhpcy5wcmVjZWRlbmNlKTtcblxuICAgICAgICBpZiAoY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1bnByZWNlZGVudGVkO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluKG5vZGUpIHtcbiAgICBsZXQgaW5jbHVkZWRJbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMgPT09IG5vZGUpIHtcbiAgICAgIGluY2x1ZGVkSW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgaW5jbHVkZWRJbiA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5jbHVkZWRJbkNoaWxkTm9kZSA9IHRoaXMuaXNJbmNsdWRlZEluKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoaW5jbHVkZWRJbkNoaWxkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJbjtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCA9IEluZmluaXR5LCBleGFjdGx5ID0gZmFsc2UpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGlmICh0aGlzLnJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBbWJpZ3VvdXMgPSBub25UZXJtaW5hbE5vZGUuaXNBbWJpZ3VvdXMoKTtcblxuICAgICAgICBpZiAodGhpcy5hbWJpZ3VvdXMgPT09IG5vblRlcm1pbmFsTm9kZUFtYmlndW91cykge1xuICAgICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSB0aGlzLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICAgIGlmIChwcmVjZWRlbmNlID09PSBub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2godGhpcy5jaGlsZE5vZGVzLCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAoY2hpbGROb2RlLCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gY2hpbGROb2RlLm1hdGNoKG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSwgZGVwdGgsIGV4YWN0bHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICByZXdyaXRlKCkge1xuICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLnJ1bGVOYW1lLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYW1iaWd1b3VzID0gdGhpcy5hbWJpZ3VvdXMsXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRBbWJpZ3VvdXMoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBhbWJpZ3VvdXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChhbWJpZ3VvdXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYW1iaWd1b3VzID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGFtYmlndW91cywgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibWF0Y2giLCJmb3J3YXJkc1NvbWUiLCJiYWNrd2FyZHNTb21lIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwiYW1iaWd1b3VzIiwicHJlY2VkZW5jZSIsImdldFJ1bGVOYW1lIiwiZ2V0Q2hpbGROb2RlcyIsImlzQW1iaWd1b3VzIiwiZ2V0UHJlY2VkZW5jZSIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsInNldEFtYmlndW91cyIsInNldFByZWNlZGVuY2UiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiY2hpbGROb2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImlzTG93ZXJQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwiSW5maW5pdHkiLCJmaXJzdENoaWxkTm9kZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJzb21lIiwiY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlIiwiaXNJbmNsdWRlZEluIiwibm9kZSIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsImlzRW1wdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW1wdHkiLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBbWJpZ3VvdXMiLCJub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsImNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJyZXdyaXRlIiwicmV3cml0dGVuTm9uVGVybWluYWxOb2RlIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwibWFwIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZEFtYmlndW91cyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7c0VBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBUUMsUUFBOENDLHlCQUFjLENBQTVERCxPQUFPRSxRQUF1Q0QseUJBQWMsQ0FBckRDLE9BQU9DLGVBQWdDRix5QkFBYyxDQUE5Q0UsY0FBY0MsZ0JBQWtCSCx5QkFBYyxDQUFoQ0c7QUFFckIsSUFBQSxBQUFNTCxnQ0FBRCxBQUFMO2FBQU1BLGdCQUNQTSxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVO2dDQURwQ1Q7UUFFakIsSUFBSSxDQUFDTSxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFMRFQ7O1lBUW5CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVIsUUFBUTtnQkFDbEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO1lBQ2xCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNSLFVB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