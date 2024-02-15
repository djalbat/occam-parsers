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
var first = _necessary.arrayUtilities.first, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, childNodes, precedence) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
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
            key: "getPrecedence",
            value: function getPrecedence() {
                return this.precedence;
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
            value: function match(node) {
                var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity, exactly = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
                var matches = false;
                if (depth === 0) {
                    matches = true;
                } else {
                    var nodeNonTerminalNode = node.isNonTerminalNode();
                    if (nodeNonTerminalNode) {
                        var ruleName = this.ruleName, nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
                        if (ruleName === nonTerminalNodeRuleName) {
                            var precedence = this.getPrecedence(), nonTerminalNodePrecedence = nonTerminalNode.getPrecedence();
                            if (precedence === nonTerminalNodePrecedence) {
                                var childNodesLength = this.childNodes.length, nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes(), nonTerminalNodeChildNodesLength = nonTerminalNodeChildNodes.length;
                                if (childNodesLength === nonTerminalNodeChildNodesLength) {
                                    depth--;
                                    matches = this.childNodes.every(function(childNode, index) {
                                        var nonTerminalNodeChildNode = nonTerminalNodeChildNodes[index], childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth, exactly);
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
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
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
                }), precedence = this.precedence, nonTerminalNode = new Class(ruleName, childNodes, precedence);
                return nonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                if (childNodes === undefined) {
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var precedence = null, nonTerminalNode = _construct(Class, [
                    ruleName,
                    childNodes,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                return nonTerminalNode;
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(Class, ruleName, childNodes, precedence) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                if (precedence === undefined) {
                    precedence = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var nonTerminalNode = _construct(Class, [
                    ruleName,
                    childNodes,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZVwiO1xuXG5jb25zdCB7IGZpcnN0LCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gY2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBjaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICB1bnByZWNlZGVudGVkID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZSh0aGlzLnJ1bGVOYW1lLCB0aGlzLnByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzTGVuZ3RoID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBlbXB0eSA9IChjaGlsZE5vZGVzTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChydWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPSBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgICBtYXRjaGVzID0gdGhpcy5jaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gbm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoLCBleGFjdGx5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZSgpIHtcbiAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cbiAgXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2UsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldENoaWxkTm9kZXMiLCJnZXRQcmVjZWRlbmNlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImNoaWxkTm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsIkluZmluaXR5IiwiZmlyc3RDaGlsZE5vZGUiLCJpc1VucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsIm5vZGUiLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImluY2x1ZGVkSW5DaGlsZE5vZGUiLCJpc0VtcHR5IiwiY2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImVtcHR5IiwibWF0Y2giLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGgiLCJldmVyeSIsImluZGV4Iiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInJld3JpdGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJzZXRQcmVjZWRlbmNlIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwibWFwIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInVuZGVmaW5lZCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTtzRUFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUF1Q0MseUJBQWMsQ0FBckRELE9BQU9FLGVBQWdDRCx5QkFBYyxDQUE5Q0MsY0FBY0MsZ0JBQWtCRix5QkFBYyxDQUFoQ0U7QUFFZCxJQUFBLEFBQU1KLGdDQUFELEFBQUw7YUFBTUEsZ0JBQ1BLLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVO2dDQUR6QlA7UUFFakIsSUFBSSxDQUFDSyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2tCQUpEUDs7WUFPbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gs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