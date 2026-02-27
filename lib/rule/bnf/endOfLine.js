"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EndOfLineBNFRule;
    }
});
const _occamlexers = require("occam-lexers");
const _rule = /*#__PURE__*/ _interop_require_default(require("../../rule"));
const _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../../definition/stringLiteral"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { endOfLine } = _occamlexers.specialSymbols;
class EndOfLineBNFRule extends _rule.default {
    static fromNothing() {
        const content = endOfLine, endOfLineStringLiteralDefinition = _stringLiteral.default.fromContent(content), name = _ruleNames.END_OF_LINE_RULE_NAME, opacity = null, definitions = [
            endOfLineStringLiteralDefinition
        ], endOfLineRule = new EndOfLineBNFRule(name, opacity, definitions);
        return endOfLineRule;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL2JuZi9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vLi4vcnVsZVwiO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWxEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3N0cmluZ0xpdGVyYWxcIjtcblxuaW1wb3J0IHsgRU5EX09GX0xJTkVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGVuZE9mTGluZSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZUJORlJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbmRPZkxpbmUsXG4gICAgICAgICAgZW5kT2ZMaW5lU3RyaW5nTGl0ZXJhbERlZmluaXRpb24gPSBTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbi5mcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gRU5EX09GX0xJTkVfUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgICBvcGFjaXR5ID0gbnVsbCxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVN0cmluZ0xpdGVyYWxEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZUJORlJ1bGUobmFtZSwgb3BhY2l0eSwgZGVmaW5pdGlvbnMpO1xuXG4gICAgcmV0dXJuIGVuZE9mTGluZVJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbmRPZkxpbmVCTkZSdWxlIiwiZW5kT2ZMaW5lIiwic3BlY2lhbFN5bWJvbHMiLCJSdWxlIiwiZnJvbU5vdGhpbmciLCJjb250ZW50IiwiZW5kT2ZMaW5lU3RyaW5nTGl0ZXJhbERlZmluaXRpb24iLCJTdHJpbmdMaXRlcmFsRGVmaW5pdGlvbiIsImZyb21Db250ZW50IiwibmFtZSIsIkVORF9PRl9MSU5FX1JVTEVfTkFNRSIsIm9wYWNpdHkiLCJkZWZpbml0aW9ucyIsImVuZE9mTGluZVJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7NkJBVFU7NkRBRWQ7c0VBQ21COzJCQUVFOzs7Ozs7QUFFdEMsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsMkJBQWM7QUFFckIsTUFBTUYseUJBQXlCRyxhQUFJO0lBQ2hELE9BQU9DLGNBQWM7UUFDbkIsTUFBTUMsVUFBVUosV0FDVkssbUNBQW1DQyxzQkFBdUIsQ0FBQ0MsV0FBVyxDQUFDSCxVQUN2RUksT0FBT0MsZ0NBQXFCLEVBQzVCQyxVQUFVLE1BQ1ZDLGNBQWM7WUFDWk47U0FDRCxFQUNETyxnQkFBZ0IsSUFBSWIsaUJBQWlCUyxNQUFNRSxTQUFTQztRQUUxRCxPQUFPQztJQUNUO0FBQ0YifQ==