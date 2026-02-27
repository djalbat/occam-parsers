"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HorizontalBranchParseTree;
    }
});
const _necessary = require("necessary");
const _parseTree = /*#__PURE__*/ _interop_require_default(require("../parseTree"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { DASH_CHARACTER } = _necessary.characters;
class HorizontalBranchParseTree extends _parseTree.default {
    static fromWidth(width) {
        const string = stringFromCharactersWidth(width, DASH_CHARACTER), line = string, lines = [
            line
        ], horizontalBranchParseTree = new HorizontalBranchParseTree(lines);
        return horizontalBranchParseTree;
    }
}
function stringFromCharactersWidth(charactersWidth, character) {
    let string = _constants.EMPTY_STRING;
    for(let index = 0; index < charactersWidth; index++){
        string += character;
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBEQVNIX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKHdpZHRoLCBEQVNIX0NIQVJBQ1RFUiksXG4gICAgICAgICAgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbXG4gICAgICAgICAgICBsaW5lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gbmV3IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aChjaGFyYWN0ZXJzV2lkdGgsIGNoYXJhY3Rlcikge1xuICBsZXQgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJzV2lkdGg7IGluZGV4KyspIHtcbiAgICBzdHJpbmcgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiREFTSF9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwid2lkdGgiLCJzdHJpbmciLCJzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoIiwibGluZSIsImxpbmVzIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsImNoYXJhY3RlcnNXaWR0aCIsImNoYXJhY3RlciIsIkVNUFRZX1NUUklORyIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXFCQTs7OzJCQVJNO2tFQUVMOzJCQUVPOzs7Ozs7QUFFN0IsTUFBTSxFQUFFQyxjQUFjLEVBQUUsR0FBR0MscUJBQVU7QUFFdEIsTUFBTUYsa0NBQWtDRyxrQkFBUztJQUM5RCxPQUFPQyxVQUFVQyxLQUFLLEVBQUU7UUFDdEIsTUFBTUMsU0FBU0MsMEJBQTBCRixPQUFPSixpQkFDMUNPLE9BQU9GLFFBQ1BHLFFBQVE7WUFDTkQ7U0FDRCxFQUNERSw0QkFBNEIsSUFBSVYsMEJBQTBCUztRQUVoRSxPQUFPQztJQUNUO0FBQ0Y7QUFFQSxTQUFTSCwwQkFBMEJJLGVBQWUsRUFBRUMsU0FBUztJQUMzRCxJQUFJTixTQUFTTyx1QkFBWTtJQUV6QixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUgsaUJBQWlCRyxRQUFTO1FBQ3BEUixVQUFVTTtJQUNaO0lBRUEsT0FBT047QUFDVCJ9