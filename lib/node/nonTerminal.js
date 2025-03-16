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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var first = _necessary.arrayUtilities.first, match = _necessary.arrayUtilities.match, forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome, opaqueSpecialSymbol = _occamlexers.specialSymbols.opaque, semiOpaqueSpecialSymbol = _occamlexers.specialSymbols.semiOpaque;
var NonTerminalNode = /*#__PURE__*/ function() {
    function NonTerminalNode(ruleName, parentNode, childNodes, opacity, precedence) {
        _class_call_check(this, NonTerminalNode);
        this.ruleName = ruleName;
        this.parentNode = parentNode;
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
            key: "getParentNode",
            value: function getParentNode() {
                return this.parentNode;
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
                this.resetChildNodesParentNode();
                this.childNodes = childNodes;
                this.setChildNodesParentNode();
            }
        },
        {
            key: "setParentNode",
            value: function setParentNode(parentNode) {
                this.parentNode = parentNode;
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
            key: "getSignificantTokens",
            value: function getSignificantTokens() {
                var significantTokens = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                this.childNodes.forEach(function(childNode) {
                    childNode.getSignificantTokens(significantTokens);
                });
                return significantTokens;
            }
        },
        {
            key: "getAncestorNodes",
            value: function getAncestorNodes() {
                var ancestorNodes = [];
                var parentNode = this.parentNode;
                while(parentNode !== null){
                    var ancestorNode = parentNode; ///
                    ancestorNodes.push(ancestorNode);
                    parentNode = parentNode.getParentNode();
                }
                return ancestorNodes;
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
            key: "cloneChildNodes",
            value: function cloneChildNodes() {
                var parentNode = this, childNodes = this.childNodes.map(function(childNode) {
                    childNode = childNode.clone(parentNode); ///
                    return childNode;
                });
                return childNodes;
            }
        },
        {
            key: "removeChildNode",
            value: function removeChildNode(removedChildNode) {
                var removedChildNodes;
                removedChildNodes = [
                    removedChildNode
                ];
                removedChildNodes = this.removeChildNodes(removedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "removeChildNodes",
            value: function removeChildNodes(removedChildNodes) {
                if (removedChildNodes === undefined) {
                    removedChildNodes = this.childNodes;
                }
                var removedChildNodesLength = removedChildNodes.length, firstReplacedChildNode = first(removedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = removedChildNodesLength; ///
                this.childNodes.splice(start, deleteCount);
                this.resetChildNodesParentNode(removedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "replaceChildNode",
            value: function replaceChildNode(replacedChildNode, replacementChildNodes) {
                var replacedChildNodes = [
                    replacedChildNode
                ];
                this.replaceChildNodes(replacedChildNodes, replacementChildNodes);
            }
        },
        {
            key: "replaceChildNodes",
            value: function replaceChildNodes(replacedChildNodes, replacementChildNodes) {
                var _this_childNodes;
                var replacedChildNodesLength = replacedChildNodes.length, firstReplacedChildNode = first(replacedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = replacedChildNodesLength; ///
                (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    start,
                    deleteCount
                ].concat(_to_consumable_array(replacementChildNodes)));
                this.resetChildNodesParentNode(replacedChildNodes);
                this.setChildNodesParentNode(replacementChildNodes);
            }
        },
        {
            key: "setChildNodesParentNode",
            value: function setChildNodesParentNode(childNodes) {
                if (childNodes === undefined) {
                    childNodes = this.childNodes;
                }
                var parentNode = this;
                childNodes.forEach(function(childNode) {
                    childNode.setParentNode(parentNode);
                });
            }
        },
        {
            key: "resetChildNodesParentNode",
            value: function resetChildNodesParentNode(childNodes) {
                if (childNodes === undefined) {
                    childNodes = this.childNodes;
                }
                var parentNode = null;
                childNodes.forEach(function(childNode) {
                    childNode.setParentNode(parentNode);
                });
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
                var parentNode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var Class = this.constructor, ruleName = this.ruleName, childNodes = this.cloneChildNodes(), opacity = this.opacity, precedence = this.precedence, nonTerminalNode = new Class(ruleName, parentNode, childNodes, opacity, precedence);
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
                var parentNode = null, precedence = null, nonTerminalNode = _construct(Class, [
                    ruleName,
                    parentNode,
                    childNodes,
                    opacity,
                    precedence
                ].concat(_to_consumable_array(remainingArguments)));
                nonTerminalNode.setChildNodesParentNode();
                return nonTerminalNode;
            }
        }
    ]);
    return NonTerminalNode;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuXG4gICAgdGhpcy5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IG9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKSB7XG4gICAgbGV0IGxvd2VyUHJlY2VkZW5jZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IG51bGwpIHtcbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdCh0aGlzLmNoaWxkTm9kZXMpO1xuXG4gICAgICBsb3dlclByZWNlZGVuY2UgPSBmaXJzdENoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9ICgodGhpcy5ydWxlTmFtZSA9PT0gcnVsZU5hbWUpICYmICh0aGlzLnByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcblxuICAgIGZvcndhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMgPSBbXSkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5nZXRTaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2Vucyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG4gIH1cblxuICBnZXRBbmNlc3Rvck5vZGVzKCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBbXTtcblxuICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgYW5jZXN0b3JOb2Rlcy5wdXNoKGFuY2VzdG9yTm9kZSk7XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5jZXN0b3JOb2RlcztcbiAgfVxuXG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBsZXQgdW5wcmVjZWRlbnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgdW5wcmVjZWRlbnRlZCA9IHRoaXMuY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UgPSBjaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UodGhpcy5ydWxlTmFtZSwgdGhpcy5wcmVjZWRlbmNlKTtcblxuICAgICAgICBpZiAoY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1bnByZWNlZGVudGVkO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluKG5vZGUpIHtcbiAgICBsZXQgaW5jbHVkZWRJbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMgPT09IG5vZGUpIHtcbiAgICAgIGluY2x1ZGVkSW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgaW5jbHVkZWRJbiA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5jbHVkZWRJbkNoaWxkTm9kZSA9IHRoaXMuaXNJbmNsdWRlZEluKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoaW5jbHVkZWRJbkNoaWxkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJbjtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCA9IEluZmluaXR5LCBleGFjdGx5ID0gZmFsc2UpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGlmICh0aGlzLnJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVPcGFjaXR5ID0gbm9uVGVybWluYWxOb2RlLmdldE9wYWNpdHkoKTtcblxuICAgICAgICBpZiAodGhpcy5vcGFjaXR5ID09PSBub25UZXJtaW5hbE5vZGVPcGFjaXR5KSB7XG4gICAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHRoaXMuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICAgICAgaWYgKHByZWNlZGVuY2UgPT09IG5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UpIHtcbiAgICAgICAgICAgIGRlcHRoLS07XG5cbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0aGlzLmNoaWxkTm9kZXMsIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIChjaGlsZE5vZGUsIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBjaGlsZE5vZGUubWF0Y2gobm9uVGVybWluYWxOb2RlQ2hpbGROb2RlLCBkZXB0aCwgZXhhY3RseSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHJld3JpdGUoKSB7XG4gICAgY29uc3QgcmV3cml0dGVuTm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBjbG9uZUNoaWxkTm9kZXMoKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUocGFyZW50Tm9kZSk7ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGROb2RlKHJlbW92ZWRDaGlsZE5vZGUpIHtcbiAgICBsZXQgcmVtb3ZlZENoaWxkTm9kZXM7XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IFtcbiAgICAgIHJlbW92ZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcykge1xuICAgIGlmIChyZW1vdmVkQ2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlbW92ZWRDaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlcyA9IFtcbiAgICAgIHJlcGxhY2VkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHRoaXMucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgICBjb25zdCByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPSByZXBsYWNlZENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZXBsYWNlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoOyAvLy9cblxuICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKHJlcGxhY2VkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcztcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNsb25lKHBhcmVudE5vZGUgPSBudWxsKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gdGhpcy5jbG9uZUNoaWxkTm9kZXMoKSxcbiAgICAgICAgICBvcGFjaXR5ID0gdGhpcy5vcGFjaXR5LFxuICAgICAgICAgIHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2UsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoQ2xhc3MsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtYXRjaCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJvcGFxdWUiLCJvcGFxdWVTcGVjaWFsU3ltYm9sIiwic3BlY2lhbFN5bWJvbHMiLCJzZW1pT3BhcXVlIiwic2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0T3BhY2l0eSIsImdldFByZWNlZGVuY2UiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJyZXNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJzZXRQYXJlbnROb2RlIiwic2V0UHJlY2VkZW5jZSIsInNldE9wYWNpdHkiLCJpc09wYXF1ZSIsImlzU2VtaU9wYXF1ZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsIkluZmluaXR5IiwiZmlyc3RDaGlsZE5vZGUiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiY2hpbGROb2RlIiwibm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0U2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VucyIsImZvckVhY2giLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZSIsInB1c2giLCJpc1VucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsImlzRW1wdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW1wdHkiLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVPcGFjaXR5Iiwibm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwicmV3cml0ZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsImNsb25lQ2hpbGROb2RlcyIsIm1hcCIsImNsb25lIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInVuZGVmaW5lZCIsInJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0SW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoIiwiYXNQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicmVtYWluaW5nQXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsyQkFDQTtzRUFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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