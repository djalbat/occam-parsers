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
var _occamlexers = require("occam-lexers");
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
var first = _necessary.arrayUtilities.first, match = _necessary.arrayUtilities.match, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome, opaqueSpecialSymbol = _occamlexers.specialSymbols.opaque, semiOpaqueSpecialSymbol = _occamlexers.specialSymbols.semiOpaque;
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, childNodes, opacity, precedence) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.childNodes = childNodes;
        this.opacity = opacity;
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
            key: "getOpacity",
            value: function getOpacity() {
                return this.opacity;
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
            key: "setPrecedence",
            value: function setPrecedence(precedence) {
                this.precedence = precedence;
            }
        },
        {
            key: "setOpacity",
            value: function setOpacity(opacity) {
                this.opacity = opacity;
            }
        },
        {
            key: "isOpaque",
            value: function isOpaque() {
                var opaque = this.opacity === opaqueSpecialSymbol;
                return opaque;
            }
        },
        {
            key: "isSemiOpaque",
            value: function isSemiOpaque() {
                var opaque = this.opacity === semiOpaqueSpecialSymbol;
                return opaque;
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
            key: "getFirstSignificantTokenIndex",
            value: function getFirstSignificantTokenIndex(tokens) {
                var firstSignificantTokenIndex;
                forwardsSome(this.childNodes, function(childNode) {
                    var node = childNode; ///
                    firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
                    if (firstSignificantTokenIndex !== null) {
                        return true;
                    }
                });
                return firstSignificantTokenIndex;
            }
        },
        {
            key: "getLastSignificantTokenIndex",
            value: function getLastSignificantTokenIndex(tokens) {
                var lastSignificantTokenIndex;
                backwardsSome(this.childNodes, function(childNode) {
                    var node = childNode; ///
                    lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);
                    if (lastSignificantTokenIndex !== null) {
                        return true;
                    }
                });
                return lastSignificantTokenIndex;
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
                        var nonTerminalNodeOpacity = nonTerminalNode.getOpacity();
                        if (this.opacity === nonTerminalNodeOpacity) {
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
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var Class = this.constructor, ruleName = this.ruleName, childNodes = this.childNodes.map(function(childNode) {
                    childNode = childNode.clone(); ///
                    return childNode;
                }), opacity = this.opacity, precedence = this.precedence, nonTerminalNode = _construct(Class, [
                    ruleName,
                    childNodes,
                    opacity,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                return nonTerminalNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++){
                    remainingArguments[_key - 4] = arguments[_key];
                }
                if (opacity === undefined) {
                    opacity = childNodes; ///
                    childNodes = ruleName; ///
                    ruleName = Class; ///
                    Class = NonTerminalNode; ///
                }
                var precedence = null, nonTerminalNode = _construct(Class, [
                    ruleName,
                    childNodes,
                    opacity,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWUgOiBvcGFxdWVTcGVjaWFsU3ltYm9sICwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG5cbiAgZ2V0T3BhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5O1xuICB9XG5cbiAgZ2V0UHJlY2VkZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVjZWRlbmNlO1xuICB9XG5cbiAgc2V0UnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldE9wYWNpdHkob3BhY2l0eSkge1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wpO1xuXG4gICAgcmV0dXJuIG9wYXF1ZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgbGV0IHVucHJlY2VkZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIHVucHJlY2VkZW50ZWQgPSB0aGlzLmNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHRoaXMucnVsZU5hbWUsIHRoaXMucHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJbihub2RlKSB7XG4gICAgbGV0IGluY2x1ZGVkSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzID09PSBub2RlKSB7XG4gICAgICBpbmNsdWRlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGluY2x1ZGVkSW4gPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluY2x1ZGVkSW5DaGlsZE5vZGUgPSB0aGlzLmlzSW5jbHVkZWRJbihjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVkSW5DaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW47XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGVtcHR5ID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSwgZXhhY3RseSA9IGZhbHNlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBpZiAodGhpcy5ydWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlT3BhY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRPcGFjaXR5KCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3BhY2l0eSA9PT0gbm9uVGVybWluYWxOb2RlT3BhY2l0eSkge1xuICAgICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSB0aGlzLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICAgIGlmIChwcmVjZWRlbmNlID09PSBub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2godGhpcy5jaGlsZE5vZGVzLCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAoY2hpbGROb2RlLCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gY2hpbGROb2RlLm1hdGNoKG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSwgZGVwdGgsIGV4YWN0bHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICByZXdyaXRlKCkge1xuICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLnJ1bGVOYW1lLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsIm9wYXF1ZSIsIm9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZ2V0UnVsZU5hbWUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0T3BhY2l0eSIsImdldFByZWNlZGVuY2UiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJzZXRQcmVjZWRlbmNlIiwic2V0T3BhY2l0eSIsImlzT3BhcXVlIiwiaXNTZW1pT3BhcXVlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImlzTG93ZXJQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwiSW5maW5pdHkiLCJmaXJzdENoaWxkTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW5zIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJjaGlsZE5vZGUiLCJub2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpc1VucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsImlzRW1wdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW1wdHkiLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVPcGFjaXR5Iiwibm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwicmV3cml0ZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsImFzUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsIm1hcCIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsyQkFDQTtzRUFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUE4Q0MseUJBQWMsQ0FBNURELE9B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