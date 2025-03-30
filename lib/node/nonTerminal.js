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
            key: "everyChildNode",
            value: function everyChildNode(callback) {
                return this.childNodes.every(callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IDAsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSBJbmZpbml0eSxcbiAgICAgICAgICBhZGRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIGFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0UHJlY2VkZW5jZShwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5wcmVjZWRlbmNlID0gcHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldE9wYWNpdHkob3BhY2l0eSkge1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBzZW1pT3BhcXVlO1xuICB9XG5cbiAgaXNUcmFuc3BhcmVudCgpIHtcbiAgICBjb25zdCBzZW1pT3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgdGhpcy5mb3J3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgICBpZiAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuXG4gICAgdGhpcy5iYWNrd2FyZHNTb21lQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7IC8vL1xuXG4gICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VucyhzaWduaWZpY2FudFRva2VucyA9IFtdKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VucztcbiAgfVxuXG4gIGdldEFuY2VzdG9yTm9kZXMoKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IFtdO1xuXG4gICAgbGV0IHBhcmVudE5vZGUgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYW5jZXN0b3JOb2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgICBhbmNlc3Rvck5vZGVzLnB1c2goYW5jZXN0b3JOb2RlKTtcblxuICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhbmNlc3Rvck5vZGVzO1xuICB9XG5cbiAgZ2V0TXVsdGlwbGljaXR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IGNoaWxkTm9kZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBtdWx0aXBsaWNpdHk7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgZW1wdHkgPSAobXVsdGlwbGljaXR5ID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IChtdWx0aXBsaWNpdHkgPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICB1bnByZWNlZGVudGVkID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZSh0aGlzLnJ1bGVOYW1lLCB0aGlzLnByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBpc0luY2x1ZGVkSW4obm9kZSkge1xuICAgIGxldCBpbmNsdWRlZEluID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcyA9PT0gbm9kZSkge1xuICAgICAgaW5jbHVkZWRJbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgICBpbmNsdWRlZEluID0gY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbmNsdWRlZEluQ2hpbGROb2RlID0gdGhpcy5pc0luY2x1ZGVkSW4oY2hpbGROb2RlKTtcblxuICAgICAgICAgIGlmIChpbmNsdWRlZEluQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmNsdWRlZEluO1xuICB9XG5cbiAgbWFwQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNhbGxiYWNrKTsgfVxuXG4gIHNvbWVDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5zb21lKGNhbGxiYWNrKTsgfVxuXG4gIGV2ZXJ5Q2hpbGROb2RlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZXZlcnkoY2FsbGJhY2spOyB9XG5cbiAgcmVkdWNlQ2hpbGROb2RlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBmb3JFYWNoQ2hpbGROb2RlKGNhbGxiYWNrKSB7IHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZvcndhcmRzU29tZUNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gZm9yd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgY2FsbGJhY2spOyB9XG5cbiAgYmFja3dhcmRzU29tZUNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gYmFja3dhcmRzU29tZSh0aGlzLmNoaWxkTm9kZXMsIGNhbGxiYWNrKTsgfVxuXG4gIHNldENoaWxkTm9kZXNQYXJlbnROb2RlKGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKGNoaWxkTm9kZXMpIHtcbiAgICBpZiAoY2hpbGROb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLnNldFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDaGlsZE5vZGUoYWRkZWRDaGlsZE5vZGUsIG9mZnNldCkge1xuICAgIGNvbnN0IGFkZGVkQ2hpbGROb2RlcyA9IFtcbiAgICAgICAgYWRkZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5hZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgb2Zmc2V0KTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZXMoYWRkZWRDaGlsZE5vZGVzLCBvZmZzZXQpIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gb2Zmc2V0LCAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSkge1xuICAgIGxldCByZW1vdmVkQ2hpbGROb2RlcztcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gICAgaWYgKHJlbW92ZWRDaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPSByZW1vdmVkQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSByZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCwgLy8vXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gW107XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMuc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgYWRkZWRDaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZW1vdmVkQ2hpbGROb2RlcztcbiAgfVxuXG4gIHJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlcyA9IFtcbiAgICAgIHJlcGxhY2VkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHRoaXMucmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZXMocmVwbGFjZWRDaGlsZE5vZGVzLCByZXBsYWNlbWVudENoaWxkTm9kZXMpIHtcbiAgICBjb25zdCByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGggPSByZXBsYWNlZENoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUgPSBmaXJzdChyZXBsYWNlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCByZXBsYWNlbWVudENoaWxkTm9kZXMpO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGROb2RlcyhzdGFydEluZGV4LCBkZWxldGVDb3VudCwgYWRkZWRDaGlsZE5vZGVzID0gW10pIHtcbiAgICBjb25zdCByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5zcGxpY2Uoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShhZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgc2xpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG5cbiAgICByZXR1cm4gY2hpbGROb2RlcztcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgaWYgKHRoaXMucnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wYWNpdHkgPT09IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkpIHtcbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRoaXMuY2hpbGROb2Rlcywgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgKGNoaWxkTm9kZSwgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoLCBleGFjdGx5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZSgpIHtcbiAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2xvbmVDaGlsZE5vZGVzKHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgICAgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvcGFjaXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wYWNpdHkgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5tYXAoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGU7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtYXRjaCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJvcGFxdWUiLCJvcGFxdWVTcGVjaWFsU3ltYm9sIiwic3BlY2lhbFN5bWJvbHMiLCJzZW1pT3BhcXVlIiwic2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0T3BhY2l0eSIsImdldFByZWNlZGVuY2UiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJzdGFydEluZGV4IiwiZGVsZXRlQ291bnQiLCJJbmZpbml0eSIsImFkZGVkQ2hpbGROb2RlcyIsInNwbGljZUNoaWxkTm9kZXMiLCJzZXRQYXJlbnROb2RlIiwic2V0UHJlY2VkZW5jZSIsInNldE9wYWNpdHkiLCJpc09wYXF1ZSIsImlzU2VtaU9wYXF1ZSIsImlzVHJhbnNwYXJlbnQiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbnMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsIm5vZGUiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImJhY2t3YXJkc1NvbWVDaGlsZE5vZGUiLCJnZXRTaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwiZm9yRWFjaCIsImdldEFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2RlIiwicHVzaCIsImdldE11bHRpcGxpY2l0eSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtdWx0aXBsaWNpdHkiLCJpc0VtcHR5IiwiZW1wdHkiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImZpcnN0Q2hpbGROb2RlIiwiaXNVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCIsInNvbWUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJpc0luY2x1ZGVkSW4iLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImluY2x1ZGVkSW5DaGlsZE5vZGUiLCJtYXBDaGlsZE5vZGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVDaGlsZE5vZGUiLCJldmVyeUNoaWxkTm9kZSIsImV2ZXJ5IiwicmVkdWNlQ2hpbGROb2RlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaENoaWxkTm9kZSIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwidW5kZWZpbmVkIiwicmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsImFkZENoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwib2Zmc2V0IiwiYWRkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJyZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCIsImZpcnN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoIiwic3BsaWNlIiwic2xpY2VDaGlsZE5vZGVzIiwiZW5kSW5kZXgiLCJzbGljZSIsImRlcHRoIiwiZXhhY3RseSIsIm1hdGNoZXMiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZU9wYWNpdHkiLCJub25UZXJtaW5hbE5vZGVQcmVjZWRlbmNlIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsImNoaWxkTm9kZU1hdGNoZXNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGUiLCJyZXdyaXRlIiwicmV3cml0dGVuTm9uVGVybWluYWxOb2RlIiwiYXNQYXJzZVRyZWUiLCJub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwiY2xvbmVDaGlsZE5vZGVzIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVOzJCQUNBO3NFQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQVFDLFFBQThDQyx5QkFBYyxDQUE1REQsT0FBT0UsUUFBdUNELHlCQUFjLENBQXJEQyxPQUFPQyxlQUFnQ0YseUJBQWMsQ0FBOUNFLGNBQWNDLGdCQUFrQkgseUJBQWMsQ0FBaENHLGVBQzVCQyxBQUFRQyxzQkFBOERDLDJCQUFjLENBQXBGRixRQUE4QkcsQUFBWUMsMEJBQTRCRiwyQkFBYyxDQUF0REM7QUFFdkIsSUFBQSxBQUFNVCxnQ0FBTjthQUFNQSxnQkFDUFcsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQUQ5Q2Y7UUFFakIsSUFBSSxDQUFDVyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFD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