"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrecedenceBNFNode;
    }
});
const _necessary = require("necessary");
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { second } = _necessary.arrayUtilities;
class PrecedenceBNFNode extends _nonTerminal.default {
    getPrecedence() {
        let precedence = Infinity;
        const multiplicity = this.getMultiplicity();
        if (multiplicity === 3) {
            const childNodes = this.getChildNodes(), secondChildNode = second(childNodes), terminalNode = secondChildNode, content = terminalNode.getContent();
            precedence = Number(content); ///
        }
        return precedence;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _nonTerminal.default.fromRuleNameChildNodesOpacityAndPrecedence(PrecedenceBNFNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9wcmVjZWRlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5jb25zdCB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWNlZGVuY2VCTkZOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0UHJlY2VkZW5jZSgpIHtcbiAgICBsZXQgcHJlY2VkZW5jZSA9IEluZmluaXR5O1xuXG4gICAgY29uc3QgbXVsdGlwbGljaXR5ID0gdGhpcy5nZXRNdWx0aXBsaWNpdHkoKTtcblxuICAgIGlmIChtdWx0aXBsaWNpdHkgPT09IDMpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHByZWNlZGVuY2UgPSBOdW1iZXIoY29udGVudCk7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBwcmVjZWRlbmNlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShQcmVjZWRlbmNlQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJlY2VkZW5jZUJORk5vZGUiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsImdldFByZWNlZGVuY2UiLCJwcmVjZWRlbmNlIiwiSW5maW5pdHkiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiTnVtYmVyIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwicnVsZU5hbWUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7OzJCQU5VO29FQUVIOzs7Ozs7QUFFNUIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFbEIsTUFBTUYsMEJBQTBCRyxvQkFBZTtJQUM1REMsZ0JBQWdCO1FBQ2QsSUFBSUMsYUFBYUM7UUFFakIsTUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWU7UUFFekMsSUFBSUQsaUJBQWlCLEdBQUc7WUFDdEIsTUFBTUUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGtCQUFrQlYsT0FBT1EsYUFDekJHLGVBQWVELGlCQUNmRSxVQUFVRCxhQUFhRSxVQUFVO1lBRXZDVCxhQUFhVSxPQUFPRixVQUFVLEdBQUc7UUFDbkM7UUFFQSxPQUFPUjtJQUNUO0lBRUEsT0FBT1csMkNBQTJDQyxRQUFRLEVBQUVSLFVBQVUsRUFBRVMsT0FBTyxFQUFFYixVQUFVLEVBQUU7UUFBRSxPQUFPRixvQkFBZSxDQUFDYSwwQ0FBMEMsQ0FBQ2hCLG1CQUFtQmlCLFVBQVVSLFlBQVlTLFNBQVNiO0lBQWE7QUFDbE8ifQ==