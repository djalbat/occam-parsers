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
                var startIndex = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
                this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
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
            key: "getFirstSignificantTokenIndex",
            value: function getFirstSignificantTokenIndex(tokens) {
                var firstSignificantTokenIndex;
                this.forwardsSomeChildNode(function(childNode) {
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
                this.backwardsSomeChildNode(function(childNode) {
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
            key: "getDescendantNodes",
            value: function getDescendantNodes() {
                var descendantNodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                var descendantNode = this; ///
                descendantNodes.push(descendantNode);
                this.childNodes.forEach(function(childNode) {
                    var childNodeNonTerminalNode = childNode.isNonTerminalNode();
                    if (childNodeNonTerminalNode) {
                        var nonTerminalNode = childNode; ///
                        nonTerminalNode.getDescendantNodes(descendantNodes);
                    }
                });
                return descendantNodes;
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
            key: "getMultiplicity",
            value: function getMultiplicity() {
                var childNodesLength = this.childNodes.length, multiplicity = childNodesLength; ///
                return multiplicity;
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                var multiplicity = this.getMultiplicity(), empty = multiplicity === 0;
                return empty;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var multiplicity = this.getMultiplicity(), singular = multiplicity === 1;
                return singular;
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
            key: "mapChildNode",
            value: function mapChildNode(callback) {
                return this.childNodes.map(callback);
            }
        },
        {
            key: "someChildNode",
            value: function someChildNode(callback) {
                return this.childNodes.some(callback);
            }
        },
        {
            key: "findChildNode",
            value: function findChildNode(callback) {
                return this.childNodes.find(callback);
            }
        },
        {
            key: "everyChildNode",
            value: function everyChildNode(callback) {
                return this.childNodes.every(callback);
            }
        },
        {
            key: "filterChildNode",
            value: function filterChildNode(callback) {
                return this.childNodes.filter(callback);
            }
        },
        {
            key: "reduceChildNode",
            value: function reduceChildNode(callback, initialValue) {
                return this.childNodes.reduce(callback, initialValue);
            }
        },
        {
            key: "forEachChildNode",
            value: function forEachChildNode(callback) {
                this.childNodes.forEach(callback);
            }
        },
        {
            key: "forwardsSomeChildNode",
            value: function forwardsSomeChildNode(callback) {
                return forwardsSome(this.childNodes, callback);
            }
        },
        {
            key: "backwardsSomeChildNode",
            value: function backwardsSomeChildNode(callback) {
                return backwardsSome(this.childNodes, callback);
            }
        },
        {
            key: "indexOfChildNode",
            value: function indexOfChildNode(childNode) {
                return this.childNodes.indexOf(childNode);
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
                var startIndex = offset, deleteCount = 0;
                this.spliceChildNodes.apply(this, [
                    startIndex,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
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
                var firstReplacedChildNode = first(removedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), startIndex = firstIndex, deleteCount = removedChildNodesLength, addedChildNodes = [];
                removedChildNodes = this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
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
                var replacedChildNodesLength = replacedChildNodes.length, firstReplacedChildNode = first(replacedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), startIndex = firstIndex, deleteCount = replacedChildNodesLength; ///
                this.spliceChildNodes(startIndex, deleteCount, replacementChildNodes);
            }
        },
        {
            key: "spliceChildNodes",
            value: function spliceChildNodes(startIndex, deleteCount) {
                var addedChildNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                var _this_childNodes;
                var removedChildNodes = (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    startIndex,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
                this.resetChildNodesParentNode(removedChildNodes);
                this.setChildNodesParentNode(addedChildNodes);
                return removedChildNodes;
            }
        },
        {
            key: "sliceChildNodes",
            value: function sliceChildNodes(startIndex, endIndex) {
                var childNodes = this.childNodes.slice(startIndex, endIndex);
                return childNodes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eSxcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldE9wYWNpdHkob3BhY2l0eSkge1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBzZW1pT3BhcXVlO1xuICB9XG5cbiAgaXNUcmFuc3BhcmVudCgpIHtcbiAgICBjb25zdCBzZW1pT3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2VucyA9IFtdKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcbiAgfVxuXG4gIGdldERlc2NlbmRhbnROb2RlcyhkZXNjZW5kYW50Tm9kZXMgPSBbXSkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnROb2RlID0gdGhpczsgLy8vXG5cbiAgICBkZXNjZW5kYW50Tm9kZXMucHVzaChkZXNjZW5kYW50Tm9kZSk7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cblxuICAgICAgICBub25UZXJtaW5hbE5vZGUuZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2Rlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudE5vZGVzO1xuICB9XG5cbiAgZ2V0QW5jZXN0b3JOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gW107XG5cbiAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhbmNlc3Rvck5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICAgIGFuY2VzdG9yTm9kZXMucHVzaChhbmNlc3Rvck5vZGUpO1xuXG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG4gIH1cblxuICBnZXRNdWx0aXBsaWNpdHkoKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gY2hpbGROb2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIG11bHRpcGxpY2l0eTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBlbXB0eSA9IChtdWx0aXBsaWNpdHkgPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gKG11bHRpcGxpY2l0eSA9PT0gMSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSkge1xuICAgIGxldCBsb3dlclByZWNlZGVuY2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmVjZWRlbmNlID09PSBudWxsKSB7XG4gICAgICBsb3dlclByZWNlZGVuY2UgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QodGhpcy5jaGlsZE5vZGVzKTtcblxuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmlyc3RDaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb3dlclByZWNlZGVuY2UgPSAoKHRoaXMucnVsZU5hbWUgPT09IHJ1bGVOYW1lKSAmJiAodGhpcy5wcmVjZWRlbmNlIDwgcHJlY2VkZW5jZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgbGV0IHVucHJlY2VkZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIHVucHJlY2VkZW50ZWQgPSB0aGlzLmNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHRoaXMucnVsZU5hbWUsIHRoaXMucHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJbihub2RlKSB7XG4gICAgbGV0IGluY2x1ZGVkSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzID09PSBub2RlKSB7XG4gICAgICBpbmNsdWRlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGluY2x1ZGVkSW4gPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluY2x1ZGVkSW5DaGlsZE5vZGUgPSB0aGlzLmlzSW5jbHVkZWRJbihjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVkSW5DaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW47XG4gIH1cblxuICBtYXBDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZmluZENoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmZpbmQoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5ldmVyeShjYWxsYmFjayk7IH1cblxuICBmaWx0ZXJDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5maWx0ZXIoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlQ2hpbGROb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZvcndhcmRzU29tZUNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgY2FsbGJhY2spOyB9XG5cbiAgYmFja3dhcmRzU29tZUNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGNhbGxiYWNrKTsgfVxuXG4gIGluZGV4T2ZDaGlsZE5vZGUoY2hpbGROb2RlKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZE5vZGUpOyB9XG5cbiAgc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcztcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZShhZGRlZENoaWxkTm9kZSwgb2Zmc2V0KSB7XG4gICAgY29uc3QgYWRkZWRDaGlsZE5vZGVzID0gW1xuICAgICAgICBhZGRlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICB0aGlzLmFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBvZmZzZXQpO1xuICB9XG5cbiAgYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIG9mZnNldCkge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBvZmZzZXQsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKSB7XG4gICAgbGV0IHJlbW92ZWRDaGlsZE5vZGVzO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICByZW1vdmVkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlbW92ZUNoaWxkTm9kZXMocmVtb3ZlZENoaWxkTm9kZXMpIHtcbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlbW92ZWRDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChyZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZW1vdmVkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IHJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoLCAvLy9cbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBbXTtcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVwbGFjZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICByZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlcGxhY2VkQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0SW5kZXggPSBmaXJzdEluZGV4LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aDsgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICBzcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMgPSBbXSkge1xuICAgIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydEluZGV4LCBkZWxldGVDb3VudCwgLi4uYWRkZWRDaGlsZE5vZGVzKTtcblxuICAgIHRoaXMucmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKGFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICBzbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSwgZXhhY3RseSA9IGZhbHNlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICBpZiAodGhpcy5ydWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlT3BhY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRPcGFjaXR5KCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3BhY2l0eSA9PT0gbm9uVGVybWluYWxOb2RlT3BhY2l0eSkge1xuICAgICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSB0aGlzLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgICAgICAgIGlmIChwcmVjZWRlbmNlID09PSBub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlKSB7XG4gICAgICAgICAgICBkZXB0aC0tO1xuXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2godGhpcy5jaGlsZE5vZGVzLCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAoY2hpbGROb2RlLCBub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlID0gY2hpbGROb2RlLm1hdGNoKG5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSwgZGVwdGgsIGV4YWN0bHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICByZXdyaXRlKCkge1xuICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjbG9uZSguLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBDbGFzcyA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLnJ1bGVOYW1lLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSBjbG9uZUNoaWxkTm9kZXModGhpcy5jaGlsZE5vZGVzKSxcbiAgICAgICAgICBvcGFjaXR5ID0gdGhpcy5vcGFjaXR5LFxuICAgICAgICAgIHByZWNlZGVuY2UgPSB0aGlzLnByZWNlZGVuY2UsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKG9wYWNpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb3BhY2l0eSA9IGNoaWxkTm9kZXM7IC8vL1xuXG4gICAgICBjaGlsZE5vZGVzID0gcnVsZU5hbWU7ICAvLy9cblxuICAgICAgcnVsZU5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTm9uVGVybWluYWxOb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbm9uVGVybWluYWxOb2RlLnNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gIGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLm1hcCgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXM7XG59XG4iXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIm1hdGNoIiwiZm9yd2FyZHNTb21lIiwiYmFja3dhcmRzU29tZSIsIm9wYXF1ZSIsIm9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsInJ1bGVOYW1lIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImdldFJ1bGVOYW1lIiwiZ2V0UGFyZW50Tm9kZSIsImdldENoaWxkTm9kZXMiLCJnZXRPcGFjaXR5IiwiZ2V0UHJlY2VkZW5jZSIsInNldFJ1bGVOYW1lIiwic2V0Q2hpbGROb2RlcyIsInN0YXJ0SW5kZXgiLCJkZWxldGVDb3VudCIsIkluZmluaXR5IiwiYWRkZWRDaGlsZE5vZGVzIiwic3BsaWNlQ2hpbGROb2RlcyIsInNldFBhcmVudE5vZGUiLCJzZXRQcmVjZWRlbmNlIiwic2V0T3BhY2l0eSIsImlzT3BhcXVlIiwiaXNTZW1pT3BhcXVlIiwiaXNUcmFuc3BhcmVudCIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsInRva2VucyIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZm9yd2FyZHNTb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwibm9kZSIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiYmFja3dhcmRzU29tZUNoaWxkTm9kZSIsImdldFNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJmb3JFYWNoIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGUiLCJwdXNoIiwiY2hpbGROb2RlTm9uVGVybWluYWxOb2RlIiwiZ2V0QW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGUiLCJnZXRNdWx0aXBsaWNpdHkiLCJjaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwibXVsdGlwbGljaXR5IiwiaXNFbXB0eSIsImVtcHR5IiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiaXNMb3dlclByZWNlZGVuY2UiLCJsb3dlclByZWNlZGVuY2UiLCJmaXJzdENoaWxkTm9kZSIsImlzVW5wcmVjZWRlbnRlZCIsInVucHJlY2VkZW50ZWQiLCJzb21lIiwiY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlIiwiaXNJbmNsdWRlZEluIiwiaW5jbHVkZWRJbiIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpbmNsdWRlZEluQ2hpbGROb2RlIiwibWFwQ2hpbGROb2RlIiwiY2FsbGJhY2siLCJtYXAiLCJzb21lQ2hpbGROb2RlIiwiZmluZENoaWxkTm9kZSIsImZpbmQiLCJldmVyeUNoaWxkTm9kZSIsImV2ZXJ5IiwiZmlsdGVyQ2hpbGROb2RlIiwiZmlsdGVyIiwicmVkdWNlQ2hpbGROb2RlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaENoaWxkTm9kZSIsImluZGV4T2ZDaGlsZE5vZGUiLCJpbmRleE9mIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJ1bmRlZmluZWQiLCJyZXNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwiYWRkQ2hpbGROb2RlIiwiYWRkZWRDaGlsZE5vZGUiLCJvZmZzZXQiLCJhZGRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzTGVuZ3RoIiwiZmlyc3RSZXBsYWNlZENoaWxkTm9kZSIsImZpcnN0SW5kZXgiLCJyZXBsYWNlQ2hpbGROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZXMiLCJyZXBsYWNlZENoaWxkTm9kZXMiLCJyZXBsYWNlQ2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCIsInNwbGljZSIsInNsaWNlQ2hpbGROb2RlcyIsImVuZEluZGV4Iiwic2xpY2UiLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVPcGFjaXR5Iiwibm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwicmV3cml0ZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsImFzUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInBhcnNlVHJlZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJjb25zdHJ1Y3RvciIsImNsb25lQ2hpbGROb2RlcyIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTsyQkFDQTtzRUFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUE4Q0MseUJBQWMsQ0FBNURELE9BQU9FLFFBQXVDRCx5QkFBYyxDQUFyREMsT0FBT0MsZUFBZ0NGLHlCQUFjLENBQTlDRSxjQUFjQyxnQkFBa0JILHlCQUFjLENBQWhDRyxlQUM1QkMsQUFBUUMsc0JBQThEQywyQkFBYyxDQUFwRkYsUUFBOEJHLEFBQVlDLDBCQUE0QkYsMkJBQWMsQ0FBdERDO0FBRXZCLElBQUEsQUFBTVQsZ0NBQU47YUFBTUEsZ0JBQ1BXLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQ0FEOUNmO1FBRWpCLElBQUksQ0FBQ1csUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBTkRmOztZ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