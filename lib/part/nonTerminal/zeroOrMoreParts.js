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
        return ZeroOrMorePartsPart;
    },
    get parseZeroOrMorePartsPart () {
        return parseZeroOrMorePartsPart;
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
const { asterisk } = _occamlexers.specialSymbols;
class ZeroOrMorePartsPart extends _nonTerminal.default {
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
        parsed = parseZeroOrMorePartsPart(this.part, nodes, state, callback, callAhead);
        if (!parsed) {
            const start = nodesLength; ///
            nodes.splice(start);
            state.backtrack(savedIndex);
        }
        return parsed;
    }
    asString() {
        const partString = this.part.asString(), string = `${partString}${asterisk}`;
        return string;
    }
    static fromPart(part) {
        const type = _partTypes.ZeroOrMorePartsPartType, callAhead = false, zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, callAhead, part);
        return zeroOrMorePartsPart;
    }
}
function parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead) {
    let parsed;
    if (callAhead === null) {
        parsed = part.parse(nodes, state, callback, callAhead);
        if (parsed) {
            parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
        }
        parsed = true;
    } else {
        parsed = callAhead();
        if (!parsed) {
            parsed = part.parse(nodes, state, callback, ()=>{
                let parsed;
                parsed = parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
                return parsed;
            });
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cblxuY29uc3QgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjYWxsQWhlYWQsIHBhcnQpIHtcbiAgICBzdXBlcih0eXBlLCBjYWxsQWhlYWQpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgcGFyc2VkID0gcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0KHRoaXMucGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHthc3Rlcmlza31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGNhbGxBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydCh0eXBlLCBjYWxsQWhlYWQsIHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG4gICAgfVxuXG4gICAgcGFyc2VkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJaZXJvT3JNb3JlUGFydHNQYXJ0IiwicGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0IiwiYXN0ZXJpc2siLCJzcGVjaWFsU3ltYm9scyIsIk5vblRlcm1pbmFsUGFydCIsInR5cGUiLCJjYWxsQWhlYWQiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0Iiwic3BsaWNlIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVdBO2VBQXFCQTs7UUE4Q0xDO2VBQUFBOzs7NkJBdkRlO29FQUVIOzJCQUVZOzs7Ozs7QUFHeEMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0MsMkJBQWM7QUFFcEIsTUFBTUgsNEJBQTRCSSxvQkFBZTtJQUM5RCxZQUFZQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxDQUFFO1FBQ2pDLEtBQUssQ0FBQ0YsTUFBTUM7UUFFWixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQUUsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRU4sU0FBUyxFQUFFO1FBQ3ZDLElBQUlPO1FBRUosTUFBTUMsYUFBYUgsTUFBTUksYUFBYSxJQUNoQ0MsY0FBY04sTUFBTU8sTUFBTTtRQUVoQ0osU0FBU1oseUJBQXlCLElBQUksQ0FBQ00sSUFBSSxFQUFFRyxPQUFPQyxPQUFPQyxVQUFVTjtRQUVyRSxJQUFJLENBQUNPLFFBQVE7WUFDWCxNQUFNSyxRQUFRRixhQUFjLEdBQUc7WUFFL0JOLE1BQU1TLE1BQU0sQ0FBQ0Q7WUFFYlAsTUFBTVMsU0FBUyxDQUFDTjtRQUNsQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQVEsV0FBVztRQUNULE1BQU1DLGFBQWEsSUFBSSxDQUFDZixJQUFJLENBQUNjLFFBQVEsSUFDL0JFLFNBQVMsR0FBR0QsYUFBYXBCLFVBQVU7UUFFekMsT0FBT3FCO0lBQ1Q7SUFFQSxPQUFPQyxTQUFTakIsSUFBSSxFQUFFO1FBQ3BCLE1BQU1GLE9BQU9vQixrQ0FBdUIsRUFDOUJuQixZQUFZLE9BQ1pvQixzQkFBc0IsSUFBSTFCLG9CQUFvQkssTUFBTUMsV0FBV0M7UUFFckUsT0FBT21CO0lBQ1Q7QUFDRjtBQUVPLFNBQVN6Qix5QkFBeUJNLElBQUksRUFBRUcsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRU4sU0FBUztJQUM5RSxJQUFJTztJQUVKLElBQUlQLGNBQWMsTUFBTTtRQUN0Qk8sU0FBU04sS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVTjtRQUU1QyxJQUFJTyxRQUFRO1lBQ1ZaLHlCQUF5Qk0sTUFBTUcsT0FBT0MsT0FBT0MsVUFBVU47UUFDekQ7UUFFQU8sU0FBUztJQUNYLE9BQU87UUFDTEEsU0FBU1A7UUFFVCxJQUFJLENBQUNPLFFBQVE7WUFDWEEsU0FBU04sS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVO2dCQUMxQyxJQUFJQztnQkFFSkEsU0FBU1oseUJBQXlCTSxNQUFNRyxPQUFPQyxPQUFPQyxVQUFVTjtnQkFFaEUsT0FBT087WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=