"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalNodeParseTree;
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
const { NEW_LINE_CHARACTER, CARRIAGE_RETURN_CHARACTER } = _necessary.characters;
class TerminalNodeParseTree extends _verticalBranch.default {
    static fromTerminalNodeAndTokens(terminalNode, tokens) {
        let content;
        content = terminalNode.getContent();
        content = content.replace(/[\r\n]/g, (match)=>{
            switch(match){
                case CARRIAGE_RETURN_CHARACTER:
                    return "\\r";
                case NEW_LINE_CHARACTER:
                    return "\\n";
                default:
                    return match;
            }
        });
        const type = terminalNode.getType(), significantTokenIndex = terminalNode.getSignificantTokenIndex(tokens), lineIndex = (0, _tokens.lineIndexFromTokenIndexAndTokens)(significantTokenIndex, tokens);
        let lineIndexes;
        if (lineIndex === null) {
            lineIndexes = _constants.EMPTY_STRING;
        } else {
            lineIndexes = ` [${lineIndex}]`;
        }
        const string = `"${content}"[${type}]${lineIndexes}`, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);
        terminalNodeParseTree.appendToTop(verticalBranchParseTree);
        return terminalNodeParseTree;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbGluZUluZGV4RnJvbVRva2VuSW5kZXhBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuXG5jb25zdCB7IE5FV19MSU5FX0NIQVJBQ1RFUiwgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9bXFxyXFxuXS9nLCAobWF0Y2gpID0+IHtcbiAgICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSOlxuICAgICAgICAgIHJldHVybiBcIlxcXFxyXCI7XG5cbiAgICAgICAgY2FzZSBORVdfTElORV9DSEFSQUNURVI6XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXG5cIjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tVG9rZW5JbmRleEFuZFRva2VucyhzaWduaWZpY2FudFRva2VuSW5kZXgsIHRva2Vucyk7XG5cbiAgICBsZXQgbGluZUluZGV4ZXM7XG5cbiAgICBpZiAobGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICBsaW5lSW5kZXhlcyA9IEVNUFRZX1NUUklORztcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZUluZGV4ZXMgPSBgIFske2xpbmVJbmRleH1dYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBgXCIke2NvbnRlbnR9XCJbJHt0eXBlfV0ke2xpbmVJbmRleGVzfWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTkVXX0xJTkVfQ0hBUkFDVEVSIiwiQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInJlcGxhY2UiLCJtYXRjaCIsInR5cGUiLCJnZXRUeXBlIiwic2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGluZUluZGV4IiwibGluZUluZGV4RnJvbVRva2VuSW5kZXhBbmRUb2tlbnMiLCJsaW5lSW5kZXhlcyIsIkVNUFRZX1NUUklORyIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFxQkE7OzsyQkFUTTt1RUFFUzsyQkFFUDt3QkFDb0I7Ozs7OztBQUVqRCxNQUFNLEVBQUVDLGtCQUFrQixFQUFFQyx5QkFBeUIsRUFBRSxHQUFHQyxxQkFBVTtBQUVyRCxNQUFNSCw4QkFBOEJJLHVCQUF1QjtJQUN4RSxPQUFPQywwQkFBMEJDLFlBQVksRUFBRUMsTUFBTSxFQUFFO1FBQ3JELElBQUlDO1FBRUpBLFVBQVVGLGFBQWFHLFVBQVU7UUFFakNELFVBQVVBLFFBQVFFLE9BQU8sQ0FBQyxXQUFXLENBQUNDO1lBQ3BDLE9BQVFBO2dCQUNOLEtBQUtUO29CQUNILE9BQU87Z0JBRVQsS0FBS0Q7b0JBQ0gsT0FBTztnQkFFVDtvQkFDRSxPQUFPVTtZQUNYO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPTixhQUFhTyxPQUFPLElBQzNCQyx3QkFBd0JSLGFBQWFTLHdCQUF3QixDQUFDUixTQUM5RFMsWUFBWUMsSUFBQUEsd0NBQWdDLEVBQUNILHVCQUF1QlA7UUFFMUUsSUFBSVc7UUFFSixJQUFJRixjQUFjLE1BQU07WUFDdEJFLGNBQWNDLHVCQUFZO1FBQzVCLE9BQU87WUFDTEQsY0FBYyxDQUFDLEVBQUUsRUFBRUYsVUFBVSxDQUFDLENBQUM7UUFDakM7UUFFQSxNQUFNSSxTQUFTLENBQUMsQ0FBQyxFQUFFWixRQUFRLEVBQUUsRUFBRUksS0FBSyxDQUFDLEVBQUVNLGFBQWEsRUFDOUNHLGVBQWVELE9BQU9FLE1BQU0sRUFDNUJDLCtCQUErQkYsY0FDL0JHLDBCQUEwQnBCLHVCQUF1QixDQUFDcUIsU0FBUyxDQUFDRiwrQkFDNURHLHlCQUF5QkYsd0JBQXdCRyx5QkFBeUIsSUFDMUVDLHdCQUF3QnhCLHVCQUF1QixDQUFDeUIsbUNBQW1DLENBQUM3Qix1QkFBdUJvQixRQUFRTTtRQUV6SEUsc0JBQXNCRSxXQUFXLENBQUNOO1FBRWxDLE9BQU9JO0lBQ1Q7QUFDRiJ9