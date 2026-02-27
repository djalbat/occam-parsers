"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rule;
    }
});
const _necessary = require("necessary");
const _constants = require("./constants");
const _occamlexers = require("occam-lexers");
const _string = require("./utilities/string");
const { clear } = _necessary.arrayUtilities, { opaque: opaqueSpecialSymbol, semiOpaque: semiOpaqueSpecialSymbol } = _occamlexers.specialSymbols;
class Rule {
    constructor(name, opacity, definitions){
        this.name = name;
        this.opacity = opacity;
        this.definitions = definitions;
    }
    getName() {
        return this.name;
    }
    getOpacity() {
        return this.opacity;
    }
    getDefinitions() {
        return this.definitions;
    }
    setName(name) {
        this.name = name;
    }
    setOpacity(opacity) {
        this.opacity = opacity;
    }
    setDefinitions(definitions) {
        this.definitions = definitions;
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
    parse(nodes, state, callback, callAhead) {
        let parsed;
        const opacity = this.opacity, ruleName = this.name, precedence = null, childNodes = [], NonTerminalNode = this.NonTerminalNodeFromRuleName(ruleName, state), nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence), savedPrecedence = state.getSavedPrecedence();
        let node = nonTerminalNode; ///
        nodes.push(node);
        parsed = this.definitions.some((definition)=>{
            let parsed;
            clear(childNodes);
            const precedence = definition.getPrecedence();
            state.setPrecedence(precedence);
            callback = ()=>{
                let parsed;
                const precedence = state.getPrecedence();
                nonTerminalNode.setPrecedence(precedence);
                parsed = true;
                if (parsed) {
                    node.setChildNodesParentNode();
                }
                const rewrittenNonTerminalNode = nonTerminalNode.rewrite(state);
                if (rewrittenNonTerminalNode !== null) {
                    if (parsed) {
                        nodes.pop();
                        node = rewrittenNonTerminalNode; ///
                        nodes.push(node);
                    }
                }
                if (parsed) {
                    const empty = node.isEmpty();
                    if (empty) {
                        parsed = false;
                    }
                }
                if (parsed) {
                    const unprecedented = node.isUnprecedented();
                    if (unprecedented) {
                        parsed = false;
                    }
                }
                if (parsed) {
                    if (callAhead !== null) {
                        state.resetPrecedence(savedPrecedence);
                        parsed = callAhead();
                    }
                }
                if (rewrittenNonTerminalNode !== null) {
                    if (!parsed) {
                        nodes.pop();
                        node = nonTerminalNode; ///
                        nodes.push(node);
                    }
                }
                if (!parsed) {
                    node.resetChildNodesParentNode();
                }
                return parsed;
            };
            parsed = definition.parse(childNodes, state, callback, callAhead);
            if (!parsed) {
                state.resetPrecedence(savedPrecedence);
            }
            return parsed;
        });
        if (!parsed) {
            nodes.pop();
        }
        if (callAhead === null) {
            state.resetPrecedence(savedPrecedence);
        }
        return parsed;
    }
    NonTerminalNodeFromRuleName(ruleName, state) {
        return state.NonTerminalNodeFromRuleName(ruleName);
    }
    asString(maximumRuleNameLength, multiLine = true) {
        const definitionsLength = this.definitions.length;
        multiLine = multiLine && definitionsLength > 1; ///
        const maximumPadding = (0, _string.paddingFromPaddingLength)(maximumRuleNameLength), definitionsString = this.definitions.reduce((definitionsString, definition)=>{
            const definitionString = definition.asString();
            if (definitionsString === _constants.EMPTY_STRING) {
                definitionsString = definitionString; ///
            } else {
                definitionsString = multiLine ? `${definitionsString}

${maximumPadding}   | ${definitionString}` : `${definitionsString} | ${definitionString}`;
            }
            return definitionsString;
        }, _constants.EMPTY_STRING), ruleName = this.name, ruleNameLength = ruleName.length, opacityString = this.opacity === null ? _constants.EMPTY_STRING : this.opacity, opacityStringLength = opacityString.length, paddingLength = maximumRuleNameLength - ruleNameLength - opacityStringLength, padding = (0, _string.paddingFromPaddingLength)(paddingLength);
        const semicolonString = multiLine ? `

${maximumPadding}   ;` : " ;", string = `

${this.name}${opacityString}${padding} ::= ${definitionsString}${semicolonString}`;
        return string;
    }
    static fromNameOpacityAndDefinitions(Class, name, opacity, definitions) {
        if (definitions === undefined) {
            definitions = opacity; ///
            opacity = name; ///
            name = Class; ///
            Class = Rule; ///
        }
        const rule = new Class(name, opacity, definitions);
        return rule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgeyBjbGVhciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG9wYXF1ZTogb3BhcXVlU3BlY2lhbFN5bWJvbCwgc2VtaU9wYXF1ZTogc2VtaU9wYXF1ZVNwZWNpYWxTeW1ib2wgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0T3BhY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5O1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0T3BhY2l0eShvcGFjaXR5KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgaXNPcGFxdWUoKSB7XG4gICAgY29uc3Qgb3BhcXVlID0gKHRoaXMub3BhY2l0eSA9PT0gb3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gb3BhcXVlO1xuICB9XG5cbiAgaXNTZW1pT3BhcXVlKCkge1xuICAgIGNvbnN0IHNlbWlPcGFxdWUgPSAodGhpcy5vcGFjaXR5ID09PSBzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCk7XG5cbiAgICByZXR1cm4gc2VtaU9wYXF1ZTtcbiAgfVxuXG4gIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgY29uc3Qgc2VtaU9wYXF1ZSA9ICh0aGlzLm9wYWNpdHkgPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNlbWlPcGFxdWU7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMub3BhY2l0eSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHRoaXMuTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lLCBzdGF0ZSksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSksXG4gICAgICAgICAgc2F2ZWRQcmVjZWRlbmNlID0gc3RhdGUuZ2V0U2F2ZWRQcmVjZWRlbmNlKCk7XG5cbiAgICBsZXQgbm9kZSA9IG5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICBub2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgcGFyc2VkID0gdGhpcy5kZWZpbml0aW9ucy5zb21lKChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICBjbGVhcihjaGlsZE5vZGVzKTtcblxuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9IGRlZmluaXRpb24uZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuXG4gICAgICBjYWxsYmFjayA9ICgpID0+IHsgIC8vL1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGNvbnN0IHByZWNlZGVuY2UgPSBzdGF0ZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG5cbiAgICAgICAgcGFyc2VkID0gdHJ1ZTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgbm9kZS5zZXRDaGlsZE5vZGVzUGFyZW50Tm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV3cml0dGVuTm9uVGVybWluYWxOb2RlID0gbm9uVGVybWluYWxOb2RlLnJld3JpdGUoc3RhdGUpO1xuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICBub2Rlcy5wb3AoKTtcblxuICAgICAgICAgICAgbm9kZSA9IHJld3JpdHRlbk5vblRlcm1pbmFsTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvbnN0IGVtcHR5ID0gbm9kZS5pc0VtcHR5KCk7XG5cbiAgICAgICAgICBpZiAoZW1wdHkpIHtcbiAgICAgICAgICAgIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBjb25zdCB1bnByZWNlZGVudGVkID0gbm9kZS5pc1VucHJlY2VkZW50ZWQoKTtcblxuICAgICAgICAgIGlmICh1bnByZWNlZGVudGVkKSB7XG4gICAgICAgICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgaWYgKGNhbGxBaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG5cbiAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgbm9kZXMucG9wKCk7XG5cbiAgICAgICAgICAgIG5vZGUgPSBub25UZXJtaW5hbE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgbm9kZS5yZXNldENoaWxkTm9kZXNQYXJlbnROb2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfTtcblxuICAgICAgcGFyc2VkID0gZGVmaW5pdGlvbi5wYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIG5vZGVzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChjYWxsQWhlYWQgPT09IG51bGwpIHtcbiAgICAgIHN0YXRlLnJlc2V0UHJlY2VkZW5jZShzYXZlZFByZWNlZGVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBOb25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUocnVsZU5hbWUsIHN0YXRlKSB7IHJldHVybiBzdGF0ZS5Ob25UZXJtaW5hbE5vZGVGcm9tUnVsZU5hbWUocnVsZU5hbWUpOyB9XG5cbiAgYXNTdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoLCBtdWx0aUxpbmUgPSB0cnVlKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIG11bHRpTGluZSA9IG11bHRpTGluZSAmJiAoZGVmaW5pdGlvbnNMZW5ndGggPiAxKTsgIC8vL1xuXG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gbXVsdGlMaW5lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XG5cbiR7bWF4aW11bVBhZGRpbmd9ICAgfCAke2RlZmluaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZGVmaW5pdGlvbnNTdHJpbmd9IHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aCxcbiAgICAgICAgICBvcGFjaXR5U3RyaW5nID0gKHRoaXMub3BhY2l0eSA9PT0gbnVsbCk/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSwgLy8vXG4gICAgICAgICAgb3BhY2l0eVN0cmluZ0xlbmd0aCA9IG9wYWNpdHlTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCAtIG9wYWNpdHlTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKTtcblxuICAgIGNvbnN0IHNlbWljb2xvblN0cmluZyA9IG11bHRpTGluZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcblxuJHttYXhpbXVtUGFkZGluZ30gICA7YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgO1wiLFxuICAgICAgICAgIHN0cmluZyA9IGBcblxuJHt0aGlzLm5hbWV9JHtvcGFjaXR5U3RyaW5nfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9JHtzZW1pY29sb25TdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVPcGFjaXR5QW5kRGVmaW5pdGlvbnMoQ2xhc3MsIG5hbWUsIG9wYWNpdHksIGRlZmluaXRpb25zKSB7XG4gICAgaWYgKGRlZmluaXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlZmluaXRpb25zID0gb3BhY2l0eTsgIC8vL1xuXG4gICAgICBvcGFjaXR5ID0gbmFtZTsgLy8vXG5cbiAgICAgIG5hbWUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUnVsZTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBvcGFjaXR5LCBkZWZpbml0aW9ucyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJjbGVhciIsImFycmF5VXRpbGl0aWVzIiwib3BhcXVlIiwib3BhcXVlU3BlY2lhbFN5bWJvbCIsInNlbWlPcGFxdWUiLCJzZW1pT3BhcXVlU3BlY2lhbFN5bWJvbCIsInNwZWNpYWxTeW1ib2xzIiwibmFtZSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImdldE5hbWUiLCJnZXRPcGFjaXR5IiwiZ2V0RGVmaW5pdGlvbnMiLCJzZXROYW1lIiwic2V0T3BhY2l0eSIsInNldERlZmluaXRpb25zIiwiaXNPcGFxdWUiLCJpc1NlbWlPcGFxdWUiLCJpc1RyYW5zcGFyZW50IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJydWxlTmFtZSIsInByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwiTm9uVGVybWluYWxOb2RlIiwiTm9uVGVybWluYWxOb2RlRnJvbVJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwic2F2ZWRQcmVjZWRlbmNlIiwiZ2V0U2F2ZWRQcmVjZWRlbmNlIiwibm9kZSIsInB1c2giLCJzb21lIiwiZGVmaW5pdGlvbiIsImdldFByZWNlZGVuY2UiLCJzZXRQcmVjZWRlbmNlIiwic2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJyZXdyaXR0ZW5Ob25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlIiwicG9wIiwiZW1wdHkiLCJpc0VtcHR5IiwidW5wcmVjZWRlbnRlZCIsImlzVW5wcmVjZWRlbnRlZCIsInJlc2V0UHJlY2VkZW5jZSIsInJlc2V0Q2hpbGROb2Rlc1BhcmVudE5vZGUiLCJhc1N0cmluZyIsIm1heGltdW1SdWxlTmFtZUxlbmd0aCIsIm11bHRpTGluZSIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJydWxlTmFtZUxlbmd0aCIsIm9wYWNpdHlTdHJpbmciLCJvcGFjaXR5U3RyaW5nTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzZW1pY29sb25TdHJpbmciLCJzdHJpbmciLCJmcm9tTmFtZU9wYWNpdHlBbmREZWZpbml0aW9ucyIsIkNsYXNzIiwidW5kZWZpbmVkIiwicnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFxQkE7OzsyQkFUVTsyQkFFRjs2QkFDRTt3QkFDVTtBQUV6QyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyx5QkFBYyxFQUMxQixFQUFFQyxRQUFRQyxtQkFBbUIsRUFBRUMsWUFBWUMsdUJBQXVCLEVBQUUsR0FBR0MsMkJBQWM7QUFFNUUsTUFBTVA7SUFDbkIsWUFBWVEsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsQ0FBRTtRQUN0QyxJQUFJLENBQUNGLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFdBQVcsR0FBR0E7SUFDckI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLGFBQWE7UUFD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