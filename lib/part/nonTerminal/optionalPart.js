"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return OptionalPartPart;
    },
    get parseOptionalPart () {
        return parseOptionalPart;
    }
});
const _occamlexers = require("occam-lexers");
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
const _partTypes = require("../../partTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { questionMark } = _occamlexers.specialSymbols;
class OptionalPartPart extends _nonTerminal.default {
    constructor(type, callAhead, part){
        super(type, callAhead);
        this.part = part;
    }
    getPart() {
        return this.part;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        const savedIndex = state.getSavedIndex(), nodesLength = nodes.length;
        parsed = parseOptionalPart(this.part, nodes, state, callback, callAhead);
        if (!parsed) {
            const start = nodesLength; ///
            nodes.splice(start);
            state.backtrack(savedIndex);
        }
        return parsed;
    }
    asString() {
        const partString = this.part.asString(), string = `${partString}${questionMark}`;
        return string;
    }
    static fromPart(part) {
        const type = _partTypes.OptionalPartPartType, callAhead = false, optionalPartPart = new OptionalPartPart(type, callAhead, part);
        return optionalPartPart;
    }
}
function parseOptionalPart(part, nodes, state, callback, callAhead) {
    let parsed;
    if (callAhead === null) {
        parsed = part.parse(nodes, state, callback, callAhead);
        parsed = true;
    } else {
        parsed = callAhead();
        if (!parsed) {
            parsed = part.parse(nodes, state, callback, callAhead);
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgT3B0aW9uYWxQYXJ0UGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cblxuY29uc3QgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IodHlwZSwgY2FsbEFoZWFkLCBwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSwgY2FsbEFoZWFkKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIHBhcnNlZCA9IHBhcnNlT3B0aW9uYWxQYXJ0KHRoaXMucGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtxdWVzdGlvbk1hcmt9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnQocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPcHRpb25hbFBhcnRQYXJ0VHlwZSxcbiAgICAgICAgICBjYWxsQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQYXJ0ID0gbmV3IE9wdGlvbmFsUGFydFBhcnQodHlwZSwgY2FsbEFoZWFkLCBwYXJ0KTtcblxuICAgIHJldHVybiBvcHRpb25hbFBhcnRQYXJ0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9wdGlvbmFsUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG5cblxuXG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuXG5cblxuXG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJzZU9wdGlvbmFsUGFydCIsInF1ZXN0aW9uTWFyayIsInNwZWNpYWxTeW1ib2xzIiwiTm9uVGVybWluYWxQYXJ0IiwidHlwZSIsImNhbGxBaGVhZCIsInBhcnQiLCJnZXRQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnQiLCJzcGxpY2UiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJmcm9tUGFydCIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwib3B0aW9uYWxQYXJ0UGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBV0E7ZUFBcUJBOztRQThDTEM7ZUFBQUE7Ozs2QkF2RGU7b0VBRUg7MkJBRVM7Ozs7OztBQUdyQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHQywyQkFBYztBQUV4QixNQUFNSCx5QkFBeUJJLG9CQUFlO0lBQzNELFlBQVlDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLENBQUU7UUFDakMsS0FBSyxDQUFDRixNQUFNQztRQUVaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFTixTQUFTLEVBQUU7UUFDdkMsSUFBSU87UUFFSixNQUFNQyxhQUFhSCxNQUFNSSxhQUFhLElBQ2hDQyxjQUFjTixNQUFNTyxNQUFNO1FBRWhDSixTQUFTWixrQkFBa0IsSUFBSSxDQUFDTSxJQUFJLEVBQUVHLE9BQU9DLE9BQU9DLFVBQVVOO1FBRTlELElBQUksQ0FBQ08sUUFBUTtZQUNYLE1BQU1LLFFBQVFGLGFBQWMsR0FBRztZQUUvQk4sTUFBTVMsTUFBTSxDQUFDRDtZQUViUCxNQUFNUyxTQUFTLENBQUNOO1FBQ2xCO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUSxXQUFXO1FBQ1QsTUFBTUMsYUFBYSxJQUFJLENBQUNmLElBQUksQ0FBQ2MsUUFBUSxJQUMvQkUsU0FBUyxHQUFHRCxhQUFhcEIsY0FBYztRQUU3QyxPQUFPcUI7SUFDVDtJQUVBLE9BQU9DLFNBQVNqQixJQUFJLEVBQUU7UUFDcEIsTUFBTUYsT0FBT29CLCtCQUFvQixFQUMzQm5CLFlBQVksT0FDWm9CLG1CQUFtQixJQUFJMUIsaUJBQWlCSyxNQUFNQyxXQUFXQztRQUUvRCxPQUFPbUI7SUFDVDtBQUNGO0FBRU8sU0FBU3pCLGtCQUFrQk0sSUFBSSxFQUFFRyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFTixTQUFTO0lBQ3ZFLElBQUlPO0lBRUosSUFBSVAsY0FBYyxNQUFNO1FBQ3RCTyxTQUFTTixLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU9DLFVBQVVOO1FBTTVDTyxTQUFTO0lBQ1gsT0FBTztRQUNMQSxTQUFTUDtRQUVULElBQUksQ0FBQ08sUUFBUTtZQUNYQSxTQUFTTixLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU9DLFVBQVVOO1FBTzlDO0lBQ0Y7SUFFQSxPQUFPTztBQUNUIn0=