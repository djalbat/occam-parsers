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
                var start = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
                this.spliceChildNodes(start, deleteCount, addedChildNodes);
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
                var start = offset, deleteCount = 0;
                this.spliceChildNodes.apply(this, [
                    start,
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
                var firstReplacedChildNode = first(removedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = removedChildNodesLength, addedChildNodes = [];
                removedChildNodes = this.spliceChildNodes(start, deleteCount, addedChildNodes);
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
                var replacedChildNodesLength = replacedChildNodes.length, firstReplacedChildNode = first(replacedChildNodes), firstIndex = this.childNodes.indexOf(firstReplacedChildNode), start = firstIndex, deleteCount = replacedChildNodesLength; ///
                this.spliceChildNodes(start, deleteCount, replacementChildNodes);
            }
        },
        {
            key: "spliceChildNodes",
            value: function spliceChildNodes(start, deleteCount) {
                var addedChildNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                var _this_childNodes;
                var removedChildNodes = (_this_childNodes = this.childNodes).splice.apply(_this_childNodes, [
                    start,
                    deleteCount
                ].concat(_to_consumable_array(addedChildNodes)));
                this.resetChildNodesParentNode(removedChildNodes);
                this.setChildNodesParentNode(addedChildNodes);
                return removedChildNodes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlXCI7XG5cbmNvbnN0IHsgZmlyc3QsIG1hdGNoLCBmb3J3YXJkc1NvbWUsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0LCBkZWxldGVDb3VudCwgYWRkZWRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHNldFBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gIH1cblxuICBzZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpIHtcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIGlzT3BhcXVlKCkge1xuICAgIGNvbnN0IG9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG9wYXF1ZVNwZWNpYWxTeW1ib2wpO1xuXG4gICAgcmV0dXJuIG9wYXF1ZTtcbiAgfVxuXG4gIGlzU2VtaU9wYXF1ZSgpIHtcbiAgICBjb25zdCBzZW1pT3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBpc1RyYW5zcGFyZW50KCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBudWxsKTtcblxuICAgIHJldHVybiBzZW1pT3BhcXVlO1xuICB9XG5cbiAgaXNUZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgaXNOb25UZXJtaW5hbE5vZGUoKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICBmb3J3YXJkc1NvbWUodGhpcy5jaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICBiYWNrd2FyZHNTb21lKHRoaXMuY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zID0gW10pIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xuICB9XG5cbiAgZ2V0QW5jZXN0b3JOb2RlcygpIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gW107XG5cbiAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhbmNlc3Rvck5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG5cbiAgICAgIGFuY2VzdG9yTm9kZXMucHVzaChhbmNlc3Rvck5vZGUpO1xuXG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG4gIH1cblxuICBnZXRNdWx0aXBsaWNpdHkoKSB7XG4gICAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IHRoaXMuY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgbXVsdGlwbGljaXR5ID0gY2hpbGROb2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIG11bHRpcGxpY2l0eTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBlbXB0eSA9IChtdWx0aXBsaWNpdHkgPT09IDApO1xuXG4gICAgcmV0dXJuIGVtcHR5O1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBtdWx0aXBsaWNpdHkgPSB0aGlzLmdldE11bHRpcGxpY2l0eSgpLFxuICAgICAgICAgIHNpbmd1bGFyID0gKG11bHRpcGxpY2l0eSA9PT0gMSk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBpc0xvd2VyUHJlY2VkZW5jZShydWxlTmFtZSwgcHJlY2VkZW5jZSkge1xuICAgIGxldCBsb3dlclByZWNlZGVuY2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmVjZWRlbmNlID09PSBudWxsKSB7XG4gICAgICBsb3dlclByZWNlZGVuY2UgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QodGhpcy5jaGlsZE5vZGVzKTtcblxuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmlyc3RDaGlsZE5vZGUuaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb3dlclByZWNlZGVuY2UgPSAoKHRoaXMucnVsZU5hbWUgPT09IHJ1bGVOYW1lKSAmJiAodGhpcy5wcmVjZWRlbmNlIDwgcHJlY2VkZW5jZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBpc1VucHJlY2VkZW50ZWQoKSB7XG4gICAgbGV0IHVucHJlY2VkZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIHVucHJlY2VkZW50ZWQgPSB0aGlzLmNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgY29uc3QgY2hpbGROb2RlTG93ZXJQcmVjZWRlbmNlID0gY2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHRoaXMucnVsZU5hbWUsIHRoaXMucHJlY2VkZW5jZSk7XG5cbiAgICAgICAgaWYgKGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5wcmVjZWRlbnRlZDtcbiAgfVxuXG4gIGlzSW5jbHVkZWRJbihub2RlKSB7XG4gICAgbGV0IGluY2x1ZGVkSW4gPSBmYWxzZTtcblxuICAgIGlmICh0aGlzID09PSBub2RlKSB7XG4gICAgICBpbmNsdWRlZEluID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICAgIGluY2x1ZGVkSW4gPSBjaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluY2x1ZGVkSW5DaGlsZE5vZGUgPSB0aGlzLmlzSW5jbHVkZWRJbihjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgaWYgKGluY2x1ZGVkSW5DaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluY2x1ZGVkSW47XG4gIH1cblxuICBtYXBDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoY2FsbGJhY2spOyB9XG5cbiAgc29tZUNoaWxkTm9kZShjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnNvbWUoY2FsbGJhY2spOyB9XG5cbiAgZXZlcnlDaGlsZE5vZGUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5ldmVyeShjYWxsYmFjayk7IH1cblxuICByZWR1Y2VDaGlsZE5vZGUoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGZvckVhY2hDaGlsZE5vZGUoY2FsbGJhY2spIHsgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgYWRkQ2hpbGROb2RlKGFkZGVkQ2hpbGROb2RlLCBvZmZzZXQpIHtcbiAgICBjb25zdCBhZGRlZENoaWxkTm9kZXMgPSBbXG4gICAgICAgIGFkZGVkQ2hpbGROb2RlXG4gICAgXTtcblxuICAgIHRoaXMuYWRkQ2hpbGROb2RlcyhhZGRlZENoaWxkTm9kZXMsIG9mZnNldCk7XG4gIH1cblxuICBhZGRDaGlsZE5vZGVzKGFkZGVkQ2hpbGROb2Rlcywgb2Zmc2V0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBvZmZzZXQsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGROb2RlcyhzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkQ2hpbGROb2Rlcyk7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSkge1xuICAgIGxldCByZW1vdmVkQ2hpbGROb2RlcztcblxuICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVtb3ZlZENoaWxkTm9kZVxuICAgIF07XG5cbiAgICByZW1vdmVkQ2hpbGROb2RlcyA9IHRoaXMucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZENoaWxkTm9kZXM7XG4gIH1cblxuICByZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKSB7XG4gICAgaWYgKHJlbW92ZWRDaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZE5vZGVzID0gW1xuICAgICAgICAuLi50aGlzLmNoaWxkTm9kZXNcbiAgICAgIF07XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPSByZW1vdmVkQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocmVtb3ZlZENoaWxkTm9kZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFJlcGxhY2VkQ2hpbGROb2RlID0gZmlyc3QocmVtb3ZlZENoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihmaXJzdFJlcGxhY2VkQ2hpbGROb2RlKSxcbiAgICAgICAgICBzdGFydCA9IGZpcnN0SW5kZXgsIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gcmVtb3ZlZENoaWxkTm9kZXNMZW5ndGgsIC8vL1xuICAgICAgICAgIGFkZGVkQ2hpbGROb2RlcyA9IFtdO1xuXG4gICAgcmVtb3ZlZENoaWxkTm9kZXMgPSB0aGlzLnNwbGljZUNoaWxkTm9kZXMoc3RhcnQsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZUNoaWxkTm9kZShyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKSB7XG4gICAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGVzID0gW1xuICAgICAgcmVwbGFjZWRDaGlsZE5vZGVcbiAgICBdO1xuXG4gICAgdGhpcy5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcyk7XG4gIH1cblxuICByZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZXMsIHJlcGxhY2VtZW50Q2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2Rlc0xlbmd0aCA9IHJlcGxhY2VkQ2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RSZXBsYWNlZENoaWxkTm9kZSA9IGZpcnN0KHJlcGxhY2VkQ2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RJbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGZpcnN0UmVwbGFjZWRDaGlsZE5vZGUpLFxuICAgICAgICAgIHN0YXJ0ID0gZmlyc3RJbmRleCwgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSByZXBsYWNlZENoaWxkTm9kZXNMZW5ndGg7IC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0LCBkZWxldGVDb3VudCwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkTm9kZXMoc3RhcnQsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMgPSBbXSkge1xuICAgIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFkZGVkQ2hpbGROb2Rlcyk7XG5cbiAgICB0aGlzLnJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUocmVtb3ZlZENoaWxkTm9kZXMpO1xuXG4gICAgdGhpcy5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZShhZGRlZENoaWxkTm9kZXMpO1xuXG4gICAgcmV0dXJuIHJlbW92ZWRDaGlsZE5vZGVzO1xuICB9XG5cbiAgc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcztcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoY2hpbGROb2Rlcykge1xuICAgIGlmIChjaGlsZE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkTm9kZXMgPSBbXG4gICAgICAgIC4uLnRoaXMuY2hpbGROb2Rlc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbDtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgaWYgKHRoaXMucnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wYWNpdHkgPT09IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkpIHtcbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRoaXMuY2hpbGROb2Rlcywgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgKGNoaWxkTm9kZSwgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoLCBleGFjdGx5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZSgpIHtcbiAgICBjb25zdCByZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2xvbmUoLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICBjaGlsZE5vZGVzID0gY2xvbmVDaGlsZE5vZGVzKHRoaXMuY2hpbGROb2RlcyksXG4gICAgICAgICAgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBwcmVjZWRlbmNlID0gdGhpcy5wcmVjZWRlbmNlLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShDbGFzcywgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChvcGFjaXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wYWNpdHkgPSBjaGlsZE5vZGVzOyAvLy9cblxuICAgICAgY2hpbGROb2RlcyA9IHJ1bGVOYW1lOyAgLy8vXG5cbiAgICAgIHJ1bGVOYW1lID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZTsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHByZWNlZGVuY2UgPSBudWxsLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUNoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICBjaGlsZE5vZGVzID0gY2hpbGROb2Rlcy5tYXAoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiBjaGlsZE5vZGU7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJtYXRjaCIsImZvcndhcmRzU29tZSIsImJhY2t3YXJkc1NvbWUiLCJvcGFxdWUiLCJvcGFxdWVTcGVjaWFsU3ltYm9sIiwic3BlY2lhbFN5bWJvbHMiLCJzZW1pT3BhcXVlIiwic2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0T3BhY2l0eSIsImdldFByZWNlZGVuY2UiLCJzZXRSdWxlTmFtZSIsInNldENoaWxkTm9kZXMiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhZGRlZENoaWxkTm9kZXMiLCJzcGxpY2VDaGlsZE5vZGVzIiwic2V0UGFyZW50Tm9kZSIsInNldFByZWNlZGVuY2UiLCJzZXRPcGFjaXR5IiwiaXNPcGFxdWUiLCJpc1NlbWlPcGFxdWUiLCJpc1RyYW5zcGFyZW50IiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW5zIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJjaGlsZE5vZGUiLCJub2RlIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRTaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwiZm9yRWFjaCIsImdldEFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGVzIiwiYW5jZXN0b3JOb2RlIiwicHVzaCIsImdldE11bHRpcGxpY2l0eSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtdWx0aXBsaWNpdHkiLCJpc0VtcHR5IiwiZW1wdHkiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImZpcnN0Q2hpbGROb2RlIiwiaXNVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCIsInNvbWUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJpc0luY2x1ZGVkSW4iLCJpbmNsdWRlZEluIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImluY2x1ZGVkSW5DaGlsZE5vZGUiLCJtYXBDaGlsZE5vZGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVDaGlsZE5vZGUiLCJldmVyeUNoaWxkTm9kZSIsImV2ZXJ5IiwicmVkdWNlQ2hpbGROb2RlIiwiaW5pdGlhbFZhbHVlIiwicmVkdWNlIiwiZm9yRWFjaENoaWxkTm9kZSIsImFkZENoaWxkTm9kZSIsImFkZGVkQ2hpbGROb2RlIiwib2Zmc2V0IiwiYWRkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWRDaGlsZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkTm9kZXMiLCJ1bmRlZmluZWQiLCJyZW1vdmVkQ2hpbGROb2Rlc0xlbmd0aCIsImZpcnN0UmVwbGFjZWRDaGlsZE5vZGUiLCJmaXJzdEluZGV4IiwiaW5kZXhPZiIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlZENoaWxkTm9kZSIsInJlcGxhY2VtZW50Q2hpbGROb2RlcyIsInJlcGxhY2VkQ2hpbGROb2RlcyIsInJlcGxhY2VDaGlsZE5vZGVzIiwicmVwbGFjZWRDaGlsZE5vZGVzTGVuZ3RoIiwic3BsaWNlIiwicmVzZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwiZGVwdGgiLCJleGFjdGx5IiwibWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlT3BhY2l0eSIsIm5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInJld3JpdGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJhc1BhcnNlVHJlZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJjbG9uZSIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNsYXNzIiwiY29uc3RydWN0b3IiLCJjbG9uZUNoaWxkTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7MkJBQ0E7c0VBRU07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