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
                var semiOpaque = this.opacity === semiOpaqueSpecialSymbol;
                return semiOpaque;
            }
        },
        {
            key: "isTransparent",
            value: function isTransparent() {
                var semiOpaque = this.opacity === null;
                return semiOpaque;
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
            key: "addChildNode",
            value: function addChildNode(addedChildNode, offset) {
                var addedChildNodes = [
                    addedChildNode
                ];
                this.addChildNodes(addedChildNodes, offset);
            }
        },
        {
            key: "addChildNodes",
            value: function addChildNodes(addedChildNodes, offset) {
                var _this_childNodes;
                var start = offset, deleteCount = 0;
                (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    start,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
                this.setChildNodesParentNode(addedChildNodes);
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
                    removedChildNodes = _to_consumable_array(this.childNodes);
                }
                var removedChildNodesLength = removedChildNodes.length;
                if (removedChildNodesLength === 0) {
                    return;
                }
                var firstReplacedChildNode = first(removedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = removedChildNodesLength; ///
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
                    childNodes = _to_consumable_array(this.childNodes);
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
                    childNodes = _to_consumable_array(this.childNodes);
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
                for(var _len = arguments.length, remainingArguments = new Array(_len), _key = 0; _key < _len; _key++){
                    remainingArguments[_key] = arguments[_key];
                }
                var Class = this.constructor, parentNode = null, ruleName = this.ruleName, childNodes = cloneChildNodes(this.childNodes), opacity = this.opacity, precedence = this.precedence, nonTerminalNode = _construct(Class, [
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
function cloneChildNodes(childNodes) {
    childNodes = childNodes.map(function(childNode) {
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuXG4gICAgdGhpcy5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBpc1Rlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBpc05vblRlcm1pbmFsTm9kZSgpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKSB7XG4gICAgbGV0IGxvd2VyUHJlY2VkZW5jZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IG51bGwpIHtcbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdCh0aGlzLmNoaWxkTm9kZXMpO1xuXG4gICAgICBsb3dlclByZWNlZGVuY2UgPSBmaXJzdENoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9ICgodGhpcy5ydWxlTmFtZSA9PT0gcnVsZU5hbWUpICYmICh0aGlzLnByZWNlZGVuY2UgPCBwcmVjZWRlbmNlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvd2VyUHJlY2VkZW5jZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcblxuICAgIGZvcndhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgICAgaWYgKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBsZXQgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcblxuICAgIGJhY2t3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgICBpZiAobGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMgPSBbXSkge1xuICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5nZXRTaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2Vucyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG4gIH1cblxuICBnZXRBbmNlc3Rvck5vZGVzKCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBbXTtcblxuICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgYW5jZXN0b3JOb2Rlcy5wdXNoKGFuY2VzdG9yTm9kZSk7XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5jZXN0b3JOb2RlcztcbiAgfVxuXG4gIGlzVW5wcmVjZWRlbnRlZCgpIHtcbiAgICBsZXQgdW5wcmVjZWRlbnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgdW5wcmVjZWRlbnRlZCA9IHRoaXMuY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UgPSBjaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UodGhpcy5ydWxlTmFtZSwgdGhpcy5wcmVjZWRlbmNlKTtcblxuICAgICAgICBpZiAoY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1bnByZWNlZGVudGVkO1xuICB9XG5cbiAgaXNJbmNsdWRlZEluKG5vZGUpIHtcbiAgICBsZXQgaW5jbHVkZWRJbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMgPT09IG5vZGUpIHtcbiAgICAgIGluY2x1ZGVkSW4gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgaW5jbHVkZWRJbiA9IGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5jbHVkZWRJbkNoaWxkTm9kZSA9IHRoaXMuaXNJbmNsdWRlZEluKGNoaWxkTm9kZSk7XG5cbiAgICAgICAgICBpZiAoaW5jbHVkZWRJbkNoaWxkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5jbHVkZWRJbjtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZW1wdHkgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCA9IEluZmluaXR5LCBleGFjdGx5ID0gZmFsc2UpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGlmICh0aGlzLnJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVPcGFjaXR5ID0gbm9uVGVybWluYWxOb2RlLmdldE9wYWNpdHkoKTtcblxuICAgICAgICBpZiAodGhpcy5vcGFjaXR5ID09PSBub25UZXJtaW5hbE5vZGVPcGFjaXR5KSB7XG4gICAgICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IHRoaXMuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICAgICAgaWYgKHByZWNlZGVuY2UgPT09IG5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UpIHtcbiAgICAgICAgICAgIGRlcHRoLS07XG5cbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBtYXRjaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaCh0aGlzLmNoaWxkTm9kZXMsIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIChjaGlsZE5vZGUsIG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUgPSBjaGlsZE5vZGUubWF0Y2gobm9uVGVybWluYWxOb2RlQ2hpbGROb2RlLCBkZXB0aCwgZXhhY3RseSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHJld3JpdGUoKSB7XG4gICAgY29uc3QgcmV3cml0dGVuTm9uVGVybWluYWxOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBhZGRDaGlsZE5vZGUoYWRkZWRDaGlsZE5vZGUsIG9mZnNldCkge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IFtcbiAgICAgICAgYWRkZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5hZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgb2Zmc2V0KTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBvZmZzZXQpIHtcbiAgICBjb25zdCBzdGFydCA9IG9mZnNldCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSkge1xuICAgIGxldCByZW1vdmVkQ2hpbGROb2RlcztcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gICAgaWYgKHJlbW92ZWRDaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPSByZW1vdmVkQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlcyA9IFtcbiAgICAgIHJlcGxhY2VkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHRoaXMucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgICBjb25zdCByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPSByZXBsYWNlZENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZXBsYWNlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoOyAvLy9cblxuICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKHJlcGxhY2VkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShjaGlsZE5vZGVzKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGROb2RlcyA9IFtcbiAgICAgICAgLi4udGhpcy5jaGlsZE5vZGVzXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNoaWxkTm9kZS5zZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLnJ1bGVOYW1lLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjbG9uZUNoaWxkTm9kZXModGhpcy5jaGlsZE5vZGVzKSxcbiAgICAgICAgICBvcGFjaXR5ID0gdGhpcy5vcGFjaXR5LFxuICAgICAgICAgIHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2UsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG9wYWNpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsIm9wYXF1ZSIsIm9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsInJ1bGVOYW1lIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImdldFJ1bGVOYW1lIiwiZ2V0UGFyZW50Tm9kZSIsImdldENoaWxkTm9kZXMiLCJnZXRPcGFjaXR5IiwiZ2V0UHJlY2VkZW5jZSIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsInNldFBhcmVudE5vZGUiLCJzZXRQcmVjZWRlbmNlIiwic2V0T3BhY2l0eSIsImlzT3BhcXVlIiwiaXNTZW1pT3BhcXVlIiwiaXNUcmFuc3BhcmVudCIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsIkluZmluaXR5IiwiZmlyc3RDaGlsZE5vZGUiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiY2hpbGROb2RlIiwibm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0U2lnbmlmaWNhbnRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VucyIsImZvckVhY2giLCJnZXRBbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZSIsInB1c2giLCJpc1VucHJlY2VkZW50ZWQiLCJ1bnByZWNlZGVudGVkIiwic29tZSIsImNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSIsImlzSW5jbHVkZWRJbiIsImluY2x1ZGVkSW4iLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaW5jbHVkZWRJbkNoaWxkTm9kZSIsImlzRW1wdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZW1wdHkiLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVPcGFjaXR5Iiwibm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwicmV3cml0ZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsImFkZENoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwib2Zmc2V0IiwiYWRkZWRDaGlsZE5vZGVzIiwiYWRkQ2hpbGROb2RlcyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJyZW1vdmVDaGlsZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwidW5kZWZpbmVkIiwicmVtb3ZlZENoaWxkTm9kZXNMZW5ndGgiLCJmaXJzdFJlcGxhY2VkQ2hpbGROb2RlIiwiZmlyc3RJbmRleCIsImluZGV4T2YiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlZENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCIsImFzUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsImNsb25lQ2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsyQkFDQTtzRUFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUE4Q0MseUJBQWMsQ0FBNURELE9BQU9FLFFBQXVDRCx5QkFBYyxDQUFyREMsT0FBT0MsZUFBZ0NGLHlCQUFjLENBQTlDRSxjQUFjQyxnQkFBa0JILHlCQUFjLENBQWhD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