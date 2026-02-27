"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsPart;
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
class ChoiceOfPartsPart extends _nonTerminal.default {
    constructor(type, callAhead, partChoices){
        super(type, callAhead);
        this.partChoices = partChoices;
    }
    getPartChoices() {
        return this.partChoices;
    }
    getParts() {
        const parts = this.partChoices.map((partChoice)=>{
            const part = partChoice.getPart();
            return part;
        });
        return parts;
    }
    parse(nodes, state, callback, callAhead) {
        let parsed;
        const savedPrecedence = state.getSavedPrecedence();
        parsed = this.partChoices.some((partChoice)=>{
            let parsed;
            const part = partChoice.getPart(), savedIndex = state.getSavedIndex(), precedence = partChoice.getPrecedence(), nodesLength = nodes.length;
            if (precedence !== null) {
                state.setPrecedence(precedence);
            }
            callback = callAhead === null ? null : ()=>{
                let parsed;
                parsed = callAhead();
                return parsed;
            };
            parsed = (0, _parse.parsePart)(part, nodes, state, callback, callAhead);
            if (!parsed) {
                const start = nodesLength; ///
                nodes.splice(start);
                state.backtrack(savedIndex);
            }
            return parsed;
        });
        if (!parsed) {
            state.resetPrecedence(savedPrecedence);
        }
        return parsed;
    }
    asString() {
        const partChoicesString = this.partChoices.reduce((partChoicesString, partChoice)=>{
            const partChoiceString = partChoice.asString();
            if (partChoicesString === null) {
                partChoicesString = partChoiceString;
            } else {
                partChoicesString = `${partChoicesString} | ${partChoiceString}`;
            }
            return partChoicesString;
        }, null), string = `( ${partChoicesString} )`;
        return string;
    }
    static fromPartChoices(partChoices) {
        const type = _partTypes.ChoiceOfPartsPartType, callAhead = false, choiceOfPartsPart = new ChoiceOfPartsPart(type, callAhead, partChoices);
        return choiceOfPartsPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcGFyc2VQYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJzZVwiO1xuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNhbGxBaGVhZCwgcGFydENob2ljZXMpIHtcbiAgICBzdXBlcih0eXBlLCBjYWxsQWhlYWQpO1xuICAgIFxuICAgIHRoaXMucGFydENob2ljZXMgPSBwYXJ0Q2hvaWNlcztcbiAgfVxuICBcbiAgZ2V0UGFydENob2ljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydENob2ljZXM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydENob2ljZXMubWFwKChwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0ID0gcGFydENob2ljZS5nZXRQYXJ0KCk7XG5cbiAgICAgIHJldHVybiBwYXJ0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkUHJlY2VkZW5jZSA9IHN0YXRlLmdldFNhdmVkUHJlY2VkZW5jZSgpO1xuXG4gICAgcGFyc2VkID0gdGhpcy5wYXJ0Q2hvaWNlcy5zb21lKChwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICBjb25zdCBwYXJ0ID0gcGFydENob2ljZS5nZXRQYXJ0KCksXG4gICAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgICAgcHJlY2VkZW5jZSA9IHBhcnRDaG9pY2UuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrID0gKGNhbGxBaGVhZCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0KTtcblxuICAgICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUucmVzZXRQcmVjZWRlbmNlKHNhdmVkUHJlY2VkZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2VzU3RyaW5nID0gdGhpcy5wYXJ0Q2hvaWNlcy5yZWR1Y2UoKHBhcnRDaG9pY2VzU3RyaW5nLCBwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Q2hvaWNlU3RyaW5nID0gcGFydENob2ljZS5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRDaG9pY2VzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gcGFydENob2ljZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gYCR7cGFydENob2ljZXNTdHJpbmd9IHwgJHtwYXJ0Q2hvaWNlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydENob2ljZXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0Q2hvaWNlc1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydENob2ljZXMocGFydENob2ljZXMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGNhbGxBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHR5cGUsIGNhbGxBaGVhZCwgcGFydENob2ljZXMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiY2FsbEFoZWFkIiwicGFydENob2ljZXMiLCJnZXRQYXJ0Q2hvaWNlcyIsImdldFBhcnRzIiwicGFydHMiLCJtYXAiLCJwYXJ0Q2hvaWNlIiwicGFydCIsImdldFBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkUHJlY2VkZW5jZSIsImdldFNhdmVkUHJlY2VkZW5jZSIsInNvbWUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzZXRQcmVjZWRlbmNlIiwicGFyc2VQYXJ0Iiwic3RhcnQiLCJzcGxpY2UiLCJiYWNrdHJhY2siLCJyZXNldFByZWNlZGVuY2UiLCJhc1N0cmluZyIsInBhcnRDaG9pY2VzU3RyaW5nIiwicmVkdWNlIiwicGFydENob2ljZVN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0Q2hvaWNlcyIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsImNob2ljZU9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O29FQUxPO3VCQUVGOzJCQUNZOzs7Ozs7QUFFdkIsTUFBTUEsMEJBQTBCQyxvQkFBZTtJQUM1RCxZQUFZQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxDQUFFO1FBQ3hDLEtBQUssQ0FBQ0YsTUFBTUM7UUFFWixJQUFJLENBQUNDLFdBQVcsR0FBR0E7SUFDckI7SUFFQUMsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNELFdBQVc7SUFDekI7SUFFQUUsV0FBVztRQUNULE1BQU1DLFFBQVEsSUFBSSxDQUFDSCxXQUFXLENBQUNJLEdBQUcsQ0FBQyxDQUFDQztZQUNsQyxNQUFNQyxPQUFPRCxXQUFXRSxPQUFPO1lBRS9CLE9BQU9EO1FBQ1Q7UUFFQSxPQUFPSDtJQUNUO0lBRUFLLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVaLFNBQVMsRUFBRTtRQUN2QyxJQUFJYTtRQUVKLE1BQU1DLGtCQUFrQkgsTUFBTUksa0JBQWtCO1FBRWhERixTQUFTLElBQUksQ0FBQ1osV0FBVyxDQUFDZSxJQUFJLENBQUMsQ0FBQ1Y7WUFDOUIsSUFBSU87WUFFSixNQUFNTixPQUFPRCxXQUFXRSxPQUFPLElBQ3pCUyxhQUFhTixNQUFNTyxhQUFhLElBQ2hDQyxhQUFhYixXQUFXYyxhQUFhLElBQ3JDQyxjQUFjWCxNQUFNWSxNQUFNO1lBRWhDLElBQUlILGVBQWUsTUFBTTtnQkFDdkJSLE1BQU1ZLGFBQWEsQ0FBQ0o7WUFDdEI7WUFFQVAsV0FBVyxBQUFDWixjQUFjLE9BQ1osT0FDRTtnQkFDRSxJQUFJYTtnQkFFSkEsU0FBU2I7Z0JBRVQsT0FBT2E7WUFDVDtZQUVoQkEsU0FBU1csSUFBQUEsZ0JBQVMsRUFBQ2pCLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVaO1lBRWpELElBQUksQ0FBQ2EsUUFBUTtnQkFDWCxNQUFNWSxRQUFRSixhQUFjLEdBQUc7Z0JBRS9CWCxNQUFNZ0IsTUFBTSxDQUFDRDtnQkFFYmQsTUFBTWdCLFNBQVMsQ0FBQ1Y7WUFDbEI7WUFFQSxPQUFPSjtRQUNUO1FBRUEsSUFBSSxDQUFDQSxRQUFRO1lBQ1hGLE1BQU1pQixlQUFlLENBQUNkO1FBQ3hCO1FBRUEsT0FBT0Q7SUFDVDtJQUVBZ0IsV0FBVztRQUNULE1BQU1DLG9CQUFvQixJQUFJLENBQUM3QixXQUFXLENBQUM4QixNQUFNLENBQUMsQ0FBQ0QsbUJBQW1CeEI7WUFDOUQsTUFBTTBCLG1CQUFtQjFCLFdBQVd1QixRQUFRO1lBRTVDLElBQUlDLHNCQUFzQixNQUFNO2dCQUM5QkEsb0JBQW9CRTtZQUN0QixPQUFPO2dCQUNMRixvQkFBb0IsR0FBR0Esa0JBQWtCLEdBQUcsRUFBRUUsa0JBQWtCO1lBQ2xFO1lBRUEsT0FBT0Y7UUFDVCxHQUFHLE9BQ0hHLFNBQVMsQ0FBQyxFQUFFLEVBQUVILGtCQUFrQixFQUFFLENBQUM7UUFFekMsT0FBT0c7SUFDVDtJQUVBLE9BQU9DLGdCQUFnQmpDLFdBQVcsRUFBRTtRQUNsQyxNQUFNRixPQUFPb0MsZ0NBQXFCLEVBQzVCbkMsWUFBWSxPQUNab0Msb0JBQW9CLElBQUl2QyxrQkFBa0JFLE1BQU1DLFdBQVdDO1FBRWpFLE9BQU9tQztJQUNUO0FBQ0YifQ==