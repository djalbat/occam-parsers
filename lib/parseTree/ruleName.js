"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameParseTree;
    }
});
const _necessary = require("necessary");
const _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
const _constants = require("../constants");
const _tokens = require("../utilities/tokens");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { SPACE_CHARACTER } = _necessary.characters;
class RuleNameParseTree extends _verticalBranch.default {
    static fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
        const ruleName = nonTerminalNode.getRuleName(), opacity = nonTerminalNode.getOpacity(), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstLineIndex = (0, _tokens.lineIndexFromTokenIndexAndTokens)(firstSignificantTokenIndex, tokens), lastLineIndex = (0, _tokens.lineIndexFromTokenIndexAndTokens)(lastSignificantTokenIndex, tokens);
        let lineIndexes;
        if (firstLineIndex === lastLineIndex) {
            const lineIndex = firstLineIndex; ///
            if (lineIndex === null) {
                lineIndexes = _constants.EMPTY_STRING;
            } else {
                lineIndexes = ` [${lineIndex}]`;
            }
        } else {
            if (false) {
            ///
            } else if (firstLineIndex === null) {
                lineIndexes = ` [${lastLineIndex}]`;
            } else if (lastLineIndex === null) {
                lineIndexes = ` [${firstLineIndex}]`;
            } else {
                lineIndexes = ` [${firstLineIndex}-${lastLineIndex}]`;
            }
        }
        let string = `${ruleName}`;
        if (opacity !== null) {
            string = `${string}${opacity}`;
        }
        string = `${string}${lineIndexes}`;
        let precedence = nonTerminalNode.getPrecedence();
        if (precedence !== null) {
            if (precedence === Infinity) {
                precedence = SPACE_CHARACTER;
            }
            string = `${string} (${precedence})`;
        }
        const stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), ruleNameParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);
        ruleNameParseTree.appendToTop(verticalBranchParseTree);
        return ruleNameParseTree;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnN9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBmaXJzdExpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCB0b2tlbnMpLFxuICAgICAgICAgIGxhc3RMaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tVG9rZW5JbmRleEFuZFRva2VucyhsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCB0b2tlbnMpO1xuXG4gICAgbGV0IGxpbmVJbmRleGVzO1xuXG4gICAgaWYgKGZpcnN0TGluZUluZGV4ID09PSBsYXN0TGluZUluZGV4KSB7XG4gICAgICBjb25zdCBsaW5lSW5kZXggPSBmaXJzdExpbmVJbmRleDsgLy8vXG5cbiAgICAgIGlmIChsaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgbGluZUluZGV4ZXMgPSBFTVBUWV9TVFJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lSW5kZXhlcyA9IGAgWyR7bGluZUluZGV4fV1gO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGZpcnN0TGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGxpbmVJbmRleGVzID0gYCBbJHtsYXN0TGluZUluZGV4fV1gO1xuICAgICAgfSBlbHNlIGlmIChsYXN0TGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGxpbmVJbmRleGVzID0gYCBbJHtmaXJzdExpbmVJbmRleH1dYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVJbmRleGVzID0gYCBbJHtmaXJzdExpbmVJbmRleH0tJHtsYXN0TGluZUluZGV4fV1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN0cmluZyA9IGAke3J1bGVOYW1lfWA7XG5cbiAgICBpZiAob3BhY2l0eSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7b3BhY2l0eX1gO1xuICAgIH1cblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2xpbmVJbmRleGVzfWA7XG5cbiAgICBsZXQgcHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICAgIHByZWNlZGVuY2UgPSBTUEFDRV9DSEFSQUNURVI7XG4gICAgICB9XG5cbiAgICAgIHN0cmluZyA9IGAke3N0cmluZ30gKCR7cHJlY2VkZW5jZX0pYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihSdWxlTmFtZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFyc2VUcmVlIiwiU1BBQ0VfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInRva2VucyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJvcGFjaXR5IiwiZ2V0T3BhY2l0eSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImZpcnN0TGluZUluZGV4IiwibGluZUluZGV4RnJvbVRva2VuSW5kZXhBbmRUb2tlbnMiLCJsYXN0TGluZUluZGV4IiwibGluZUluZGV4ZXMiLCJsaW5lSW5kZXgiLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsIkluZmluaXR5Iiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJydWxlTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7MkJBVEs7dUVBRVU7MkJBRVA7d0JBQ29COzs7Ozs7QUFFakQsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0MscUJBQVU7QUFFdkIsTUFBTUYsMEJBQTBCRyx1QkFBdUI7SUFDcEUsT0FBT0MsNkJBQTZCQyxlQUFlLEVBQUVDLE1BQU0sRUFBRTtRQUMzRCxNQUFNQyxXQUFXRixnQkFBZ0JHLFdBQVcsSUFDdENDLFVBQVVKLGdCQUFnQkssVUFBVSxJQUNwQ0MsNkJBQTZCTixnQkFBZ0JPLDZCQUE2QixDQUFDTixTQUMzRU8sNEJBQTRCUixnQkFBZ0JTLDRCQUE0QixDQUFDUixTQUN6RVMsaUJBQWlCQyxJQUFBQSx3Q0FBZ0MsRUFBQ0wsNEJBQTRCTCxTQUM5RVcsZ0JBQWdCRCxJQUFBQSx3Q0FBZ0MsRUFBQ0gsMkJBQTJCUDtRQUVsRixJQUFJWTtRQUVKLElBQUlILG1CQUFtQkUsZUFBZTtZQUNwQyxNQUFNRSxZQUFZSixnQkFBZ0IsR0FBRztZQUVyQyxJQUFJSSxjQUFjLE1BQU07Z0JBQ3RCRCxjQUFjRSx1QkFBWTtZQUM1QixPQUFPO2dCQUNMRixjQUFjLENBQUMsRUFBRSxFQUFFQyxVQUFVLENBQUMsQ0FBQztZQUNqQztRQUNGLE9BQU87WUFDTCxJQUFJLE9BQU87WUFDVCxHQUFHO1lBQ0wsT0FBTyxJQUFJSixtQkFBbUIsTUFBTTtnQkFDbENHLGNBQWMsQ0FBQyxFQUFFLEVBQUVELGNBQWMsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sSUFBSUEsa0JBQWtCLE1BQU07Z0JBQ2pDQyxjQUFjLENBQUMsRUFBRSxFQUFFSCxlQUFlLENBQUMsQ0FBQztZQUN0QyxPQUFPO2dCQUNMRyxjQUFjLENBQUMsRUFBRSxFQUFFSCxlQUFlLENBQUMsRUFBRUUsY0FBYyxDQUFDLENBQUM7WUFDdkQ7UUFDRjtRQUVBLElBQUlJLFNBQVMsR0FBR2QsVUFBVTtRQUUxQixJQUFJRSxZQUFZLE1BQU07WUFDcEJZLFNBQVMsR0FBR0EsU0FBU1osU0FBUztRQUNoQztRQUVBWSxTQUFTLEdBQUdBLFNBQVNILGFBQWE7UUFFbEMsSUFBSUksYUFBYWpCLGdCQUFnQmtCLGFBQWE7UUFFOUMsSUFBSUQsZUFBZSxNQUFNO1lBQ3ZCLElBQUlBLGVBQWVFLFVBQVU7Z0JBQzNCRixhQUFhckI7WUFDZjtZQUVBb0IsU0FBUyxHQUFHQSxPQUFPLEVBQUUsRUFBRUMsV0FBVyxDQUFDLENBQUM7UUFDdEM7UUFFQSxNQUFNRyxlQUFlSixPQUFPSyxNQUFNLEVBQzVCQywrQkFBK0JGLGNBQy9CRywwQkFBMEJ6Qix1QkFBdUIsQ0FBQzBCLFNBQVMsQ0FBQ0YsK0JBQzVERyx5QkFBeUJGLHdCQUF3QkcseUJBQXlCLElBQzFFQyxvQkFBb0I3Qix1QkFBdUIsQ0FBQzhCLG1DQUFtQyxDQUFDakMsbUJBQW1CcUIsUUFBUVM7UUFFakhFLGtCQUFrQkUsV0FBVyxDQUFDTjtRQUU5QixPQUFPSTtJQUNUO0FBQ0YifQ==