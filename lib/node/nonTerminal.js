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
const _necessary = require("necessary");
const _occamlexers = require("occam-lexers");
const _node = /*#__PURE__*/ _interop_require_default(require("../mixins/node"));
const _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/nonTerminalNode"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first, match } = _necessary.arrayUtilities, { opaque: opaqueSpecialSymbol, semiOpaque: semiOpaqueSpecialSymbol } = _occamlexers.specialSymbols;
class NonTerminalNode {
    constructor(ruleName, parentNode, childNodes, opacity, precedence){
        this.ruleName = ruleName;
        this.parentNode = parentNode;
        this.childNodes = childNodes;
        this.opacity = opacity;
        this.precedence = precedence;
    }
    getRuleName() {
        return this.ruleName;
    }
    getParentNode() {
        return this.parentNode;
    }
    getChildNodes() {
        return this.childNodes;
    }
    getOpacity() {
        return this.opacity;
    }
    getPrecedence() {
        return this.precedence;
    }
    setRuleName(ruleName) {
        this.ruleName = ruleName;
    }
    setParentNode(parentNode) {
        this.parentNode = parentNode;
    }
    setChildNodes(childNodes) {
        const startIndex = 0, deleteCount = Infinity, addedChildNodes = childNodes; ///
        this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
    }
    setOpacity(opacity) {
        this.opacity = opacity;
    }
    setPrecedence(precedence) {
        this.precedence = precedence;
    }
    isOpaque() {
        const opaque = this.opacity === opaqueSpecialSymbol;
        return opaque;
    }
    isSemiOpaque() {
        const semiOpaque = this.opacity === semiOpaqueSpecialSymbol;
        return semiOpaque;
    }
    isTransparent() {
        const semiOpaque = this.opacity === null;
        return semiOpaque;
    }
    isTerminalNode() {
        const terminalNode = false;
        return terminalNode;
    }
    isNonTerminalNode() {
        const nonTerminalNode = true;
        return nonTerminalNode;
    }
    getDescendantNodes(descendantNodes) {
        return descendantNodes;
    }
    getFirstSignificantTokenIndex(tokens) {
        let firstSignificantTokenIndex;
        this.forwardsSomeChildNode((childNode)=>{
            const node = childNode; ///
            firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
            if (firstSignificantTokenIndex !== null) {
                return true;
            }
        });
        return firstSignificantTokenIndex;
    }
    getLastSignificantTokenIndex(tokens) {
        let lastSignificantTokenIndex;
        this.backwardsSomeChildNode((childNode)=>{
            const node = childNode; ///
            lastSignificantTokenIndex = node.getLastSignificantTokenIndex(tokens);
            if (lastSignificantTokenIndex !== null) {
                return true;
            }
        });
        return lastSignificantTokenIndex;
    }
    getSignificantTokens(significantTokens = []) {
        this.childNodes.forEach((childNode)=>{
            childNode.getSignificantTokens(significantTokens);
        });
        return significantTokens;
    }
    getMultiplicity() {
        const childNodesLength = this.childNodes.length, multiplicity = childNodesLength; ///
        return multiplicity;
    }
    isEmpty() {
        const multiplicity = this.getMultiplicity(), empty = multiplicity === 0;
        return empty;
    }
    isSingular() {
        const multiplicity = this.getMultiplicity(), singular = multiplicity === 1;
        return singular;
    }
    isLowerPrecedence(ruleName, precedence) {
        let lowerPrecedence;
        if (false) {
        ///
        } else if (this.precedence === null) {
            lowerPrecedence = false;
        } else if (this.precedence === Infinity) {
            const firstChildNode = first(this.childNodes);
            lowerPrecedence = firstChildNode.isLowerPrecedence(ruleName, precedence);
        } else {
            lowerPrecedence = this.ruleName === ruleName && this.precedence < precedence;
        }
        return lowerPrecedence;
    }
    isUnprecedented() {
        let unprecedented = false;
        if (this.precedence !== null) {
            unprecedented = this.childNodes.some((childNode)=>{
                const childNodeLowerPrecedence = childNode.isLowerPrecedence(this.ruleName, this.precedence);
                if (childNodeLowerPrecedence) {
                    return true;
                }
            });
        }
        return unprecedented;
    }
    asParseTree(tokens) {
        const nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), parseTree = nonTerminalNodeParseTree; ///
        return parseTree;
    }
    match(node, depth = Infinity, exactly = false) {
        let matches = false;
        const nodeNonTerminalNode = node.isNonTerminalNode();
        if (nodeNonTerminalNode) {
            const nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
            if (this.ruleName === nonTerminalNodeRuleName) {
                const nonTerminalNodeOpacity = nonTerminalNode.getOpacity();
                if (this.opacity === nonTerminalNodeOpacity) {
                    const precedence = this.getPrecedence(), nonTerminalNodePrecedence = nonTerminalNode.getPrecedence();
                    if (precedence === nonTerminalNodePrecedence) {
                        depth--;
                        if (depth === 0) {
                            matches = true;
                        } else {
                            const nonTerminalNodeChildNodes = nonTerminalNode.getChildNodes();
                            matches = match(this.childNodes, nonTerminalNodeChildNodes, (childNode, nonTerminalNodeChildNode)=>{
                                const childNodeMatchesNonTerminalNodeChildNode = childNode.match(nonTerminalNodeChildNode, depth, exactly);
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
    rewrite(state) {
        const rewrittenNonTerminalNode = null;
        return rewrittenNonTerminalNode;
    }
    destroy() {
        this.forEachChildNode((childNode)=>{
            childNode.destroy();
        });
        this.parentNode = null;
        this.childNodes = null;
    }
    clone(...remainingArguments) {
        const Class = this.constructor, parentNode = null, ruleName = this.ruleName, childNodes = cloneChildNodes(this.childNodes), opacity = this.opacity, precedence = this.precedence, nonTerminalNode = new Class(ruleName, parentNode, childNodes, opacity, precedence, ...remainingArguments);
        nonTerminalNode.setChildNodesParentNode();
        return nonTerminalNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence, ...remainingArguments) {
        if (precedence === undefined) {
            precedence = opacity; ///
            opacity = childNodes; ///
            childNodes = ruleName; ///
            ruleName = Class; ///
            Class = NonTerminalNode; ///
        }
        const parentNode = null, nonTerminalNode = new Class(ruleName, parentNode, childNodes, opacity, precedence, ...remainingArguments);
        nonTerminalNode.setChildNodesParentNode();
        return nonTerminalNode;
    }
}
Object.assign(NonTerminalNode.prototype, _node.default);
function cloneChildNodes(childNodes) {
    childNodes = childNodes.map((childNode)=>{
        childNode = childNode.clone(); ///
        return childNode;
    });
    return childNodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL25vblRlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgbm9kZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL25vZGVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGVcIjtcblxuY29uc3QgeyBmaXJzdCwgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBvcGFxdWU6IG9wYXF1ZVNwZWNpYWxTeW1ib2wgLCBzZW1pT3BhcXVlOiBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldFBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuXG4gIGdldE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfVxuXG4gIGdldFByZWNlZGVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2VkZW5jZTtcbiAgfVxuXG4gIHNldFJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICB9XG5cbiAgc2V0UGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAwLFxuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksXG4gICAgICAgICAgYWRkZWRDaGlsZE5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZE5vZGVzKHN0YXJ0SW5kZXgsIGRlbGV0ZUNvdW50LCBhZGRlZENoaWxkTm9kZXMpO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldFByZWNlZGVuY2UocHJlY2VkZW5jZSkge1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBpc09wYXF1ZSgpIHtcbiAgICBjb25zdCBvcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBvcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBvcGFxdWU7XG4gIH1cblxuICBpc1NlbWlPcGFxdWUoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IHNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sKTtcblxuICAgIHJldHVybiBzZW1pT3BhcXVlO1xuICB9XG5cbiAgaXNUcmFuc3BhcmVudCgpIHtcbiAgICBjb25zdCBzZW1pT3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudE5vZGVzKGRlc2NlbmRhbnROb2Rlcykge1xuICAgIHJldHVybiBkZXNjZW5kYW50Tm9kZXM7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBsZXQgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICB0aGlzLmZvcndhcmRzU29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgICAgIGlmIChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgbGV0IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXg7XG5cbiAgICB0aGlzLmJhY2t3YXJkc1NvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTsgLy8vXG5cbiAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgICAgaWYgKGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW5zKHNpZ25pZmljYW50VG9rZW5zID0gW10pIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjaGlsZE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xuICB9XG5cbiAgZ2V0TXVsdGlwbGljaXR5KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IGNoaWxkTm9kZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBtdWx0aXBsaWNpdHk7XG4gIH1cblxuICBpc0VtcHR5KCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgZW1wdHkgPSAobXVsdGlwbGljaXR5ID09PSAwKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IChtdWx0aXBsaWNpdHkgPT09IDEpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocnVsZU5hbWUsIHByZWNlZGVuY2UpIHtcbiAgICBsZXQgbG93ZXJQcmVjZWRlbmNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJlY2VkZW5jZSA9PT0gbnVsbCkge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KHRoaXMuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGxvd2VyUHJlY2VkZW5jZSA9IGZpcnN0Q2hpbGROb2RlLmlzTG93ZXJQcmVjZWRlbmNlKHJ1bGVOYW1lLCBwcmVjZWRlbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG93ZXJQcmVjZWRlbmNlID0gKCh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSkgJiYgKHRoaXMucHJlY2VkZW5jZSA8IHByZWNlZGVuY2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG93ZXJQcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNVbnByZWNlZGVudGVkKCkge1xuICAgIGxldCB1bnByZWNlZGVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICB1bnByZWNlZGVudGVkID0gdGhpcy5jaGlsZE5vZGVzLnNvbWUoKGNoaWxkTm9kZSkgPT4geyAgLy8vXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZUxvd2VyUHJlY2VkZW5jZSA9IGNoaWxkTm9kZS5pc0xvd2VyUHJlY2VkZW5jZSh0aGlzLnJ1bGVOYW1lLCB0aGlzLnByZWNlZGVuY2UpO1xuXG4gICAgICAgIGlmIChjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVucHJlY2VkZW50ZWQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoID0gSW5maW5pdHksIGV4YWN0bHkgPSBmYWxzZSkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgaWYgKHRoaXMucnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkgPSBub25UZXJtaW5hbE5vZGUuZ2V0T3BhY2l0eSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wYWNpdHkgPT09IG5vblRlcm1pbmFsTm9kZU9wYWNpdHkpIHtcbiAgICAgICAgICBjb25zdCBwcmVjZWRlbmNlID0gdGhpcy5nZXRQcmVjZWRlbmNlKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgICBpZiAocHJlY2VkZW5jZSA9PT0gbm9uVGVybWluYWxOb2RlUHJlY2VkZW5jZSkge1xuICAgICAgICAgICAgZGVwdGgtLTtcblxuICAgICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoKHRoaXMuY2hpbGROb2Rlcywgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgKGNoaWxkTm9kZSwgbm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSA9IGNoaWxkTm9kZS5tYXRjaChub25UZXJtaW5hbE5vZGVDaGlsZE5vZGUsIGRlcHRoLCBleGFjdGx5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVNYXRjaGVzTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgcmV3cml0ZShzdGF0ZSkge1xuICAgIGNvbnN0IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuTm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY2hpbGROb2RlLmRlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gbnVsbDtcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IGNsb25lQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpLFxuICAgICAgICAgIG9wYWNpdHkgPSB0aGlzLm9wYWNpdHksXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IHRoaXMucHJlY2VkZW5jZSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENsYXNzLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHByZWNlZGVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlY2VkZW5jZSA9IG9wYWNpdHk7IC8vL1xuXG4gICAgICBvcGFjaXR5ID0gY2hpbGROb2RlczsgLy8vXG5cbiAgICAgIGNoaWxkTm9kZXMgPSBydWxlTmFtZTsgIC8vL1xuXG4gICAgICBydWxlTmFtZSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGU7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBub25UZXJtaW5hbE5vZGUuc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUoKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihOb25UZXJtaW5hbE5vZGUucHJvdG90eXBlLCBub2RlTWl4aW5zKTtcblxuZnVuY3Rpb24gY2xvbmVDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXMubWFwKChjaGlsZE5vZGUpID0+IHsgIC8vL1xuICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gY2hpbGROb2RlO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGROb2Rlcztcbn1cbiJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJmaXJzdCIsIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJvcGFxdWUiLCJvcGFxdWVTcGVjaWFsU3ltYm9sIiwic2VtaU9wYXF1ZSIsInNlbWlPcGFxdWVTcGVjaWFsU3ltYm9sIiwic3BlY2lhbFN5bWJvbHMiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJnZXRSdWxlTmFtZSIsImdldFBhcmVudE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiZ2V0T3BhY2l0eSIsImdldFByZWNlZGVuY2UiLCJzZXRSdWxlTmFtZSIsInNldFBhcmVudE5vZGUiLCJzZXRDaGlsZE5vZGVzIiwic3RhcnRJbmRleCIsImRlbGV0ZUNvdW50IiwiSW5maW5pdHkiLCJhZGRlZENoaWxkTm9kZXMiLCJzcGxpY2VDaGlsZE5vZGVzIiwic2V0T3BhY2l0eSIsInNldFByZWNlZGVuY2UiLCJpc09wYXF1ZSIsImlzU2VtaU9wYXF1ZSIsImlzVHJhbnNwYXJlbnQiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbnMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZvcndhcmRzU29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsIm5vZGUiLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImJhY2t3YXJkc1NvbWVDaGlsZE5vZGUiLCJnZXRTaWduaWZpY2FudFRva2VucyIsInNpZ25pZmljYW50VG9rZW5zIiwiZm9yRWFjaCIsImdldE11bHRpcGxpY2l0eSIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtdWx0aXBsaWNpdHkiLCJpc0VtcHR5IiwiZW1wdHkiLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJpc0xvd2VyUHJlY2VkZW5jZSIsImxvd2VyUHJlY2VkZW5jZSIsImZpcnN0Q2hpbGROb2RlIiwiaXNVbnByZWNlZGVudGVkIiwidW5wcmVjZWRlbnRlZCIsInNvbWUiLCJjaGlsZE5vZGVMb3dlclByZWNlZGVuY2UiLCJhc1BhcnNlVHJlZSIsIm5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsIk5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJwYXJzZVRyZWUiLCJkZXB0aCIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlT3BhY2l0eSIsIm5vblRlcm1pbmFsTm9kZVByZWNlZGVuY2UiLCJub25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQ2hpbGROb2RlIiwiY2hpbGROb2RlTWF0Y2hlc05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZSIsInJld3JpdGUiLCJzdGF0ZSIsInJld3JpdHRlbk5vblRlcm1pbmFsTm9kZSIsImRlc3Ryb3kiLCJmb3JFYWNoQ2hpbGROb2RlIiwiY2xvbmUiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDbGFzcyIsImNsb25lQ2hpbGROb2RlcyIsInNldENoaWxkTm9kZXNQYXJlbnROb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibm9kZU1peGlucyIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFxQkE7OzsyQkFUVTs2QkFDQTs2REFFUjt3RUFDYzs7Ozs7O0FBRXJDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWMsRUFDakMsRUFBRUMsUUFBUUMsbUJBQW1CLEVBQUdDLFlBQVlDLHVCQUF1QixFQUFFLEdBQUdDLDJCQUFjO0FBRTdFLE1BQU1SO0lBQ25CLFlBQVlTLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxDQUFFO1FBQ2pFLElBQUksQ0FBQ0osUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNMLFFBQVE7SUFDdEI7SUFFQU0sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNMLFVBQVU7SUFDeEI7SUFFQU0sYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDTCxPQUFPO0lBQ3JCO0lBRUFNLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDTCxVQUFVO0lBQ3hCO0lBRUFNLFlBQVlWLFFBQVEsRUFBRTtR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