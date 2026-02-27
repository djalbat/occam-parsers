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
        return OneOrMorePartsPart;
    },
    get parseOneOrMorePartsPart () {
        return parseOneOrMorePartsPart;
    }
});
const _occamlexers = require("occam-lexers");
const _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
const _partTypes = require("../../partTypes");
const _zeroOrMoreParts = require("./zeroOrMoreParts");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { plus } = _occamlexers.specialSymbols;
class OneOrMorePartsPart extends _nonTerminal.default {
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
        parsed = parseOneOrMorePartsPart(this.part, nodes, state, callback, callAhead);
        if (!parsed) {
            const start = nodesLength; ///
            nodes.splice(start);
            state.backtrack(savedIndex);
        }
        return parsed;
    }
    asString() {
        const partString = this.part.asString(), string = `${partString}${plus}`;
        return string;
    }
    static fromPart(part) {
        const type = _partTypes.OneOrMorePartsPartType, callAhead = false, oneOrMorePartsPart = new OneOrMorePartsPart(type, callAhead, part);
        return oneOrMorePartsPart;
    }
}
function parseOneOrMorePartsPart(part, nodes, state, callback, callAhead) {
    let parsed;
    if (callAhead === null) {
        parsed = part.parse(nodes, state, callback, callAhead);
        if (parsed) {
            (0, _zeroOrMoreParts.parseZeroOrMorePartsPart)(part, nodes, state, callback, callAhead);
        }
    } else {
        parsed = part.parse(nodes, state, callback, ()=>{
            let parsed;
            parsed = (0, _zeroOrMoreParts.parseZeroOrMorePartsPart)(part, nodes, state, callback, callAhead);
            return parsed;
        });
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuaW1wb3J0IHsgcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0IH0gZnJvbSBcIi4vemVyb09yTW9yZVBhcnRzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGNhbGxBaGVhZCwgcGFydCkge1xuICAgIHN1cGVyKHR5cGUsIGNhbGxBaGVhZCk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBwYXJzZWQgPSBwYXJzZU9uZU9yTW9yZVBhcnRzUGFydCh0aGlzLnBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBub2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQpO1xuXG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7cGx1c31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgY2FsbEFoZWFkID0gZmFsc2UsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0eXBlLCBjYWxsQWhlYWQsIHBhcnQpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgIH1cblxuXG4gIH0gZWxzZSB7XG5cblxuXG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXSwibmFtZXMiOlsiT25lT3JNb3JlUGFydHNQYXJ0IiwicGFyc2VPbmVPck1vcmVQYXJ0c1BhcnQiLCJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJOb25UZXJtaW5hbFBhcnQiLCJ0eXBlIiwiY2FsbEFoZWFkIiwicGFydCIsImdldFBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4Iiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImZyb21QYXJ0IiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnNlWmVyb09yTW9yZVBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBV0E7ZUFBcUJBOztRQThDTEM7ZUFBQUE7Ozs2QkF2RGU7b0VBRUg7MkJBRVc7aUNBQ0U7Ozs7OztBQUV6QyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQywyQkFBYztBQUVoQixNQUFNSCwyQkFBMkJJLG9CQUFlO0lBQzdELFlBQVlDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLENBQUU7UUFDakMsS0FBSyxDQUFDRixNQUFNQztRQUVaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFTixTQUFTLEVBQUU7UUFDdkMsSUFBSU87UUFFSixNQUFNQyxhQUFhSCxNQUFNSSxhQUFhLElBQ2hDQyxjQUFjTixNQUFNTyxNQUFNO1FBRWhDSixTQUFTWix3QkFBd0IsSUFBSSxDQUFDTSxJQUFJLEVBQUVHLE9BQU9DLE9BQU9DLFVBQVVOO1FBRXBFLElBQUksQ0FBQ08sUUFBUTtZQUNYLE1BQU1LLFFBQVFGLGFBQWMsR0FBRztZQUUvQk4sTUFBTVMsTUFBTSxDQUFDRDtZQUViUCxNQUFNUyxTQUFTLENBQUNOO1FBQ2xCO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUSxXQUFXO1FBQ1QsTUFBTUMsYUFBYSxJQUFJLENBQUNmLElBQUksQ0FBQ2MsUUFBUSxJQUMvQkUsU0FBUyxHQUFHRCxhQUFhcEIsTUFBTTtRQUVyQyxPQUFPcUI7SUFDVDtJQUVBLE9BQU9DLFNBQVNqQixJQUFJLEVBQUU7UUFDcEIsTUFBTUYsT0FBT29CLGlDQUFzQixFQUM3Qm5CLFlBQVksT0FDWm9CLHFCQUFxQixJQUFJMUIsbUJBQW1CSyxNQUFNQyxXQUFXQztRQUVuRSxPQUFPbUI7SUFDVDtBQUNGO0FBRU8sU0FBU3pCLHdCQUF3Qk0sSUFBSSxFQUFFRyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFTixTQUFTO0lBQzdFLElBQUlPO0lBRUosSUFBSVAsY0FBYyxNQUFNO1FBQ3RCTyxTQUFTTixLQUFLRSxLQUFLLENBQUNDLE9BQU9DLE9BQU9DLFVBQVVOO1FBRTVDLElBQUlPLFFBQVE7WUFDVmMsSUFBQUEseUNBQXdCLEVBQUNwQixNQUFNRyxPQUFPQyxPQUFPQyxVQUFVTjtRQUN6RDtJQUdGLE9BQU87UUFJSE8sU0FBU04sS0FBS0UsS0FBSyxDQUFDQyxPQUFPQyxPQUFPQyxVQUFVO1lBQzFDLElBQUlDO1lBRUpBLFNBQVNjLElBQUFBLHlDQUF3QixFQUFDcEIsTUFBTUcsT0FBT0MsT0FBT0MsVUFBVU47WUFFaEUsT0FBT087UUFDVDtJQUVKO0lBRUEsT0FBT0E7QUFDVCJ9