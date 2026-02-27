"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsPart;
    }
});
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
const _parse = require("../../utilities/parse");
const _partTypes = require("../../partTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SequenceOfPartsPart extends _nonTerminal.default {
    constructor(type, callAhead, parts){
        super(type, callAhead);
        this.parts = parts;
    }
    getParts() {
        return this.parts;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        const savedIndex = state.getSavedIndex(), nodesLength = nodes.length;
        callback = callAhead === null ? null : ()=>{
            let parsed;
            parsed = callAhead();
            return parsed;
        };
        parsed = (0, _parse.parseParts)(this.parts, nodes, state, callback, callAhead);
        if (!parsed) {
            const start = nodesLength; ///
            nodes.splice(start);
            state.backtrack(savedIndex);
        }
        return parsed;
    }
    asString() {
        const partsString = this.parts.reduce((partsString, part)=>{
            const partString = part.asString();
            if (partsString === null) {
                partsString = partString;
            } else {
                partsString = `${partsString} ${partString}`;
            }
            return partsString;
        }, null), string = `( ${partsString} )`;
        return string;
    }
    static fromParts(parts) {
        const type = _partTypes.SequenceOfPartsPartType, callAhead = false, sequenceOfPartsPart = new SequenceOfPartsPart(type, callAhead, parts);
        return sequenceOfPartsPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJzZVwiO1xuaW1wb3J0IHsgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjYWxsQWhlYWQsIHBhcnRzKSB7XG4gICAgc3VwZXIodHlwZSwgY2FsbEFoZWFkKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBjYWxsYmFjayA9IChjYWxsQWhlYWQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0cyh0aGlzLnBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gbm9kZXNMZW5ndGg7ICAvLy9cblxuICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0KTtcblxuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0cyhwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgICBjYWxsQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQodHlwZSwgY2FsbEFoZWFkLCBwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiY2FsbEFoZWFkIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcnNlUGFydHMiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0IiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0cyIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwic2VxdWVuY2VPZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztvRUFMTzt1QkFFRDsyQkFDYTs7Ozs7O0FBRXpCLE1BQU1BLDRCQUE0QkMsb0JBQWU7SUFDOUQsWUFBWUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssQ0FBRTtRQUNsQyxLQUFLLENBQUNGLE1BQU1DO1FBRVosSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRCxLQUFLO0lBQ25CO0lBRUFFLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVOLFNBQVMsRUFBRTtRQUN2QyxJQUFJTztRQUVKLE1BQU1DLGFBQWFILE1BQU1JLGFBQWEsSUFDaENDLGNBQWNOLE1BQU1PLE1BQU07UUFFaENMLFdBQVcsQUFBQ04sY0FBYyxPQUNaLE9BQ0U7WUFDRSxJQUFJTztZQUVKQSxTQUFTUDtZQUVULE9BQU9PO1FBQ1Q7UUFFaEJBLFNBQVNLLElBQUFBLGlCQUFVLEVBQUMsSUFBSSxDQUFDWCxLQUFLLEVBQUVHLE9BQU9DLE9BQU9DLFVBQVVOO1FBRXhELElBQUksQ0FBQ08sUUFBUTtZQUNYLE1BQU1NLFFBQVFILGFBQWMsR0FBRztZQUUvQk4sTUFBTVUsTUFBTSxDQUFDRDtZQUViUixNQUFNVSxTQUFTLENBQUNQO1FBQ2xCO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUyxXQUFXO1FBQ1QsTUFBTUMsY0FBYyxJQUFJLENBQUNoQixLQUFLLENBQUNpQixNQUFNLENBQUMsQ0FBQ0QsYUFBYUU7WUFDNUMsTUFBTUMsYUFBYUQsS0FBS0gsUUFBUTtZQUVoQyxJQUFJQyxnQkFBZ0IsTUFBTTtnQkFDeEJBLGNBQWNHO1lBQ2hCLE9BQU87Z0JBQ0xILGNBQWMsR0FBR0EsWUFBWSxDQUFDLEVBQUVHLFlBQVk7WUFDOUM7WUFFQSxPQUFPSDtRQUNULEdBQUcsT0FDSEksU0FBUyxDQUFDLEVBQUUsRUFBRUosWUFBWSxFQUFFLENBQUM7UUFFbkMsT0FBT0k7SUFDVDtJQUVBLE9BQU9DLFVBQVVyQixLQUFLLEVBQUU7UUFDdEIsTUFBTUYsT0FBT3dCLGtDQUF1QixFQUM5QnZCLFlBQVksT0FDWndCLHNCQUFzQixJQUFJM0Isb0JBQW9CRSxNQUFNQyxXQUFXQztRQUVyRSxPQUFPdUI7SUFDVDtBQUNGIn0=