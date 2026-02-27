"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalNode;
    }
});
const _terminalNode = /*#__PURE__*/ _interop_require_default(require("../parseTree/terminalNode"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TerminalNode {
    constructor(parentNode, significantToken){
        this.parentNode = parentNode;
        this.significantToken = significantToken;
    }
    getParentNode() {
        return this.parentNode;
    }
    getSignificantToken() {
        return this.significantToken;
    }
    setParentNode(parentNode) {
        this.parentNode = parentNode;
    }
    setSignificantToken(significantToken) {
        this.significantToken = significantToken;
    }
    isStartOfContentNode() {
        const startOfContentNode = false;
        return startOfContentNode;
    }
    isNoWhitespaceNode() {
        const noWhitespaceNode = false;
        return noWhitespaceNode;
    }
    isEpsilonNode() {
        const epsilonNode = false;
        return epsilonNode;
    }
    isTerminalNode() {
        const terminalNode = true;
        return terminalNode;
    }
    isNonTerminalNode() {
        const nonTerminalNode = false;
        return nonTerminalNode;
    }
    getType() {
        return this.significantToken.getType();
    }
    getContent() {
        return this.significantToken.getContent();
    }
    getPrecedence() {
        const precedence = null;
        return precedence;
    }
    isLowerPrecedence(parentRuleName, parentPrecedence) {
        const lowerPrecedence = false;
        return lowerPrecedence;
    }
    getFirstSignificantTokenIndex(tokens) {
        const significantTokenIndex = this.getSignificantTokenIndex(tokens), firstSignificantTokenIndex = significantTokenIndex; ///
        return firstSignificantTokenIndex;
    }
    getLastSignificantTokenIndex(tokens) {
        const significantTokenIndex = this.getSignificantTokenIndex(tokens), lastSignificantTokenIndex = significantTokenIndex; ///
        return lastSignificantTokenIndex;
    }
    getSignificantTokenIndex(tokens) {
        let significantTokenIndex = null;
        if (this.significantToken !== null) {
            significantTokenIndex = tokens.indexOf(this.significantToken);
        }
        return significantTokenIndex;
    }
    getSignificantTokens(significantTokens = []) {
        if (this.significantToken !== null) {
            significantTokens.push(this.significantToken);
        }
        return significantTokens;
    }
    getAncestorNodes() {
        const ancestorNodes = [];
        let ancestorNode = this.parentNode; ///
        while(ancestorNode !== null){
            ancestorNodes.push(ancestorNode);
            const parentNode = ancestorNode.getParentNode();
            ancestorNode = parentNode; ///
        }
        return ancestorNodes;
    }
    mapAncestorNode(callback) {
        const ancestorNodes = this.getAncestorNodes();
        return ancestorNodes.map(callback);
    }
    someAncestorNode(callback) {
        let result = false;
        let index = 0, ancestorNode = this.parentNode; ///
        while(ancestorNode !== null){
            result = !!callback(ancestorNode, index); ///
            if (result) {
                break;
            }
            const parentNode = ancestorNode.getParentNode();
            ancestorNode = parentNode; ///
            index++;
        }
        return result;
    }
    findAncestorNode(callback) {
        let index = 0, ancestorNode = this.parentNode; ///
        while(ancestorNode !== null){
            const result = callback(ancestorNode, index);
            if (result) {
                return ancestorNode;
            }
            const parentNode = ancestorNode.getParentNode();
            ancestorNode = parentNode; ///
            index++;
        }
        ancestorNode = undefined;
        return ancestorNode;
    }
    everyAncestorNode(callback) {
        let result = true;
        let index = 0, ancestorNode = this.parentNode; ///
        while(ancestorNode !== null){
            result = !!callback(ancestorNode, index); ///
            if (!result) {
                break;
            }
            const parentNode = ancestorNode.getParentNode();
            ancestorNode = parentNode; ///
            index++;
        }
        return result;
    }
    filterAncestorNode(callback) {
        const ancestorNodes = this.getAncestorNodes();
        return ancestorNodes.filter(callback);
    }
    reduceAncestorNode(callback, initialValue) {
        const ancestorNodes = this.getAncestorNodes();
        return ancestorNodes.reduce(callback, initialValue);
    }
    forEachAncestorNode(callback) {
        const ancestorNodes = this.getAncestorNodes();
        ancestorNodes.forEach(callback);
    }
    getDescendantNodes(descendantNodes = []) {
        return descendantNodes;
    }
    someDescendantNode(callback) {
        const result = false;
        return result;
    }
    findDescendantNode(callback) {
        let descendantNode = undefined;
        return descendantNode;
    }
    everyDescendantNode(callback) {
        let result = true;
        return result;
    }
    asParseTree(tokens) {
        const terminalNode = this, terminalNodeParseTree = _terminalNode.default.fromTerminalNodeAndTokens(terminalNode, tokens), parseTree = terminalNodeParseTree; ///
        return parseTree;
    }
    match(node, depth = Infinity, exactly = false) {
        let matches = false;
        const nodeTerminalNode = node.isTerminalNode();
        if (nodeTerminalNode) {
            const terminalNode = node, significantToken = terminalNode.getSignificantToken();
            matches = exactly ? this.significantToken === significantToken : this.significantToken.match(significantToken);
        }
        return matches;
    }
    clone(...remainingArguments) {
        const Class = this.constructor, parentNode = null, significantToken = this.significantToken, terminalNode = new Class(parentNode, significantToken, ...remainingArguments);
        return terminalNode;
    }
    destroy() {
        this.parentNode = null;
        this.significantToken = null;
    }
    static fromNothing(Class, ...remainingArguments) {
        if (Class === undefined) {
            Class = TerminalNode; ///
        }
        const parentNode = null, significantToken = null, terminalNode = new Class(parentNode, significantToken, ...remainingArguments);
        return terminalNode;
    }
    static fromSignificantToken(Class, significantToken, ...remainingArguments) {
        if (significantToken === undefined) {
            significantToken = Class; ///
            Class = TerminalNode; ///
        }
        const parentNode = null, terminalNode = new Class(parentNode, significantToken, ...remainingArguments);
        return terminalNode;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudE5vZGUsIHNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQYXJlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzZXRQYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICB9XG5cbiAgc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGlzU3RhcnRPZkNvbnRlbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXJ0T2ZDb250ZW50Tm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50Tm9kZTtcbiAgfVxuXG4gIGlzTm9XaGl0ZXNwYWNlTm9kZSgpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VOb2RlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZTtcbiAgfVxuXG4gIGlzRXBzaWxvbk5vZGUoKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGlzVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGlzTm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpOyB9XG5cbiAgZ2V0Q29udGVudCgpIHsgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCk7IH1cblxuICBnZXRQcmVjZWRlbmNlKCkgIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbDtcblxuICAgIHJldHVybiBwcmVjZWRlbmNlO1xuICB9XG5cbiAgaXNMb3dlclByZWNlZGVuY2UocGFyZW50UnVsZU5hbWUsIHBhcmVudFByZWNlZGVuY2UpIHtcbiAgICBjb25zdCBsb3dlclByZWNlZGVuY2UgPSBmYWxzZTtcblxuICAgIHJldHVybiBsb3dlclByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleDtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdGhpcy5nZXRTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucykge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuSW5kZXggPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YodGhpcy5zaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbkluZGV4O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbnMoc2lnbmlmaWNhbnRUb2tlbnMgPSBbXSkge1xuICAgIGlmICh0aGlzLnNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHNpZ25pZmljYW50VG9rZW5zLnB1c2godGhpcy5zaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG4gIH1cblxuICBnZXRBbmNlc3Rvck5vZGVzKCkge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSBbXTtcblxuICAgIGxldCBhbmNlc3Rvck5vZGUgPSB0aGlzLnBhcmVudE5vZGU7IC8vL1xuXG4gICAgd2hpbGUgKGFuY2VzdG9yTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYW5jZXN0b3JOb2Rlcy5wdXNoKGFuY2VzdG9yTm9kZSk7XG5cbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBhbmNlc3Rvck5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgICBhbmNlc3Rvck5vZGUgPSBwYXJlbnROb2RlOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXM7XG4gIH1cblxuICBtYXBBbmNlc3Rvck5vZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmNlc3Rvck5vZGVzID0gdGhpcy5nZXRBbmNlc3Rvck5vZGVzKCk7XG5cbiAgICByZXR1cm4gYW5jZXN0b3JOb2Rlcy5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgc29tZUFuY2VzdG9yTm9kZShjYWxsYmFjaykge1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGFuY2VzdG9yTm9kZSA9IHRoaXMucGFyZW50Tm9kZTsgLy8vXG5cbiAgICB3aGlsZSAoYW5jZXN0b3JOb2RlICE9PSBudWxsKSB7XG4gICAgICByZXN1bHQgPSAhIWNhbGxiYWNrKGFuY2VzdG9yTm9kZSwgaW5kZXgpOyAvLy9cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGFuY2VzdG9yTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgIGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZEFuY2VzdG9yTm9kZShjYWxsYmFjaykge1xuICAgIGxldCBpbmRleCA9IDAsXG4gICAgICAgIGFuY2VzdG9yTm9kZSA9IHRoaXMucGFyZW50Tm9kZTsgLy8vXG5cbiAgICB3aGlsZSAoYW5jZXN0b3JOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhhbmNlc3Rvck5vZGUsIGluZGV4KTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gYW5jZXN0b3JOb2RlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gYW5jZXN0b3JOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgYW5jZXN0b3JOb2RlID0gcGFyZW50Tm9kZTsgIC8vL1xuXG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGFuY2VzdG9yTm9kZSA9IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBhbmNlc3Rvck5vZGU7XG4gIH1cblxuICBldmVyeUFuY2VzdG9yTm9kZShjYWxsYmFjaykge1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgbGV0IGluZGV4ID0gMCxcbiAgICAgICAgYW5jZXN0b3JOb2RlID0gdGhpcy5wYXJlbnROb2RlOyAvLy9cblxuICAgIHdoaWxlIChhbmNlc3Rvck5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlc3VsdCA9ICEhY2FsbGJhY2soYW5jZXN0b3JOb2RlLCBpbmRleCk7IC8vL1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGFuY2VzdG9yTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgIGFuY2VzdG9yTm9kZSA9IHBhcmVudE5vZGU7ICAvLy9cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmlsdGVyQW5jZXN0b3JOb2RlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IHRoaXMuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXMuZmlsdGVyKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlZHVjZUFuY2VzdG9yTm9kZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgYW5jZXN0b3JOb2RlcyA9IHRoaXMuZ2V0QW5jZXN0b3JOb2RlcygpO1xuXG4gICAgcmV0dXJuIGFuY2VzdG9yTm9kZXMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaEFuY2VzdG9yTm9kZShjYWxsYmFjaykge1xuICAgIGNvbnN0IGFuY2VzdG9yTm9kZXMgPSB0aGlzLmdldEFuY2VzdG9yTm9kZXMoKTtcblxuICAgIGFuY2VzdG9yTm9kZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBnZXREZXNjZW5kYW50Tm9kZXMoZGVzY2VuZGFudE5vZGVzID0gW10pIHtcbiAgICByZXR1cm4gZGVzY2VuZGFudE5vZGVzO1xuICB9XG5cbiAgc29tZURlc2NlbmRhbnROb2RlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZERlc2NlbmRhbnROb2RlKGNhbGxiYWNrKSB7XG4gICAgbGV0IGRlc2NlbmRhbnROb2RlID0gdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnROb2RlO1xuICB9XG5cbiAgZXZlcnlEZXNjZW5kYW50Tm9kZShjYWxsYmFjaykge1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgbWF0Y2gobm9kZSwgZGVwdGggPSBJbmZpbml0eSwgZXhhY3RseSA9IGZhbHNlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICAgIG1hdGNoZXMgPSBleGFjdGx5ID9cbiAgICAgICAgICAgICAgICAgICh0aGlzLnNpZ25pZmljYW50VG9rZW4gPT09IHNpZ25pZmljYW50VG9rZW4pIDpcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5tYXRjaChzaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGNsb25lKC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBwYXJlbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwYXJlbnROb2RlLCBzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoQ2xhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwYXJlbnROb2RlLCBzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihDbGFzcywgc2lnbmlmaWNhbnRUb2tlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBUZXJtaW5hbE5vZGU7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwYXJlbnROb2RlLCBzaWduaWZpY2FudFRva2VuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGUiLCJwYXJlbnROb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFBhcmVudE5vZGUiLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2V0UGFyZW50Tm9kZSIsInNldFNpZ25pZmljYW50VG9rZW4iLCJpc1N0YXJ0T2ZDb250ZW50Tm9kZSIsInN0YXJ0T2ZDb250ZW50Tm9kZSIsImlzTm9XaGl0ZXNwYWNlTm9kZSIsIm5vV2hpdGVzcGFjZU5vZGUiLCJpc0Vwc2lsb25Ob2RlIiwiZXBzaWxvbk5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsImdldENvbnRlbnQiLCJnZXRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSIsImlzTG93ZXJQcmVjZWRlbmNlIiwicGFyZW50UnVsZU5hbWUiLCJwYXJlbnRQcmVjZWRlbmNlIiwibG93ZXJQcmVjZWRlbmNlIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuSW5kZXgiLCJnZXRTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImdldFNpZ25pZmljYW50VG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJwdXNoIiwiZ2V0QW5jZXN0b3JOb2RlcyIsImFuY2VzdG9yTm9kZXMiLCJhbmNlc3Rvck5vZGUiLCJtYXBBbmNlc3Rvck5vZGUiLCJjYWxsYmFjayIsIm1hcCIsInNvbWVBbmNlc3Rvck5vZGUiLCJyZXN1bHQiLCJpbmRleCIsImZpbmRBbmNlc3Rvck5vZGUiLCJ1bmRlZmluZWQiLCJldmVyeUFuY2VzdG9yTm9kZSIsImZpbHRlckFuY2VzdG9yTm9kZSIsImZpbHRlciIsInJlZHVjZUFuY2VzdG9yTm9kZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2hBbmNlc3Rvck5vZGUiLCJmb3JFYWNoIiwiZ2V0RGVzY2VuZGFudE5vZGVzIiwiZGVzY2VuZGFudE5vZGVzIiwic29tZURlc2NlbmRhbnROb2RlIiwiZmluZERlc2NlbmRhbnROb2RlIiwiZGVzY2VuZGFudE5vZGUiLCJldmVyeURlc2NlbmRhbnROb2RlIiwiYXNQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwicGFyc2VUcmVlIiwibWF0Y2giLCJub2RlIiwiZGVwdGgiLCJJbmZpbml0eSIsImV4YWN0bHkiLCJtYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImNsb25lIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2xhc3MiLCJkZXN0cm95IiwiZnJvbU5vdGhpbmciLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztxRUFGYTs7Ozs7O0FBRW5CLE1BQU1BO0lBQ25CLFlBQVlDLFVBQVUsRUFBRUMs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