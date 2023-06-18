"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseParts", {
    enumerable: true,
    get: function() {
        return parseParts;
    }
});
var _necessary = require("necessary");
var _part = require("./part");
var push = _necessary.arrayUtilities.push;
function parseParts(parts, nodes, index, state, callback) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback() : true;
    } else {
        var part = parts[index];
        parsed = parsePartOfParts(part, parts, nodes, index, state, callback);
    }
    return parsed;
}
function parsePartOfParts(part, parts, nodes, index, state, callback) {
    var parsed;
    if (callback !== null) {
        var partsNodes = [];
        index++;
        parsed = part.parse(nodes, state, function() {
            return parseParts(parts, partsNodes, index, state, callback);
        });
        if (parsed) {
            push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part, partsNodes1 = [];
            index++;
            parsed = ruleNamePart.parse(nodes, state, function() {
                return parseParts(parts, partsNodes1, index, state, callback);
            });
            if (parsed) {
                push(nodes, partsNodes1);
            }
        } else {
            parsed = part.parse(nodes, state, callback);
            if (parsed) {
                index++;
                parsed = parseParts(parts, nodes, index, state, callback);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICBpbmRleCsrO1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBwYXJzZWQgPSBydWxlTmFtZVBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgaW5kZXgrKztcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJub2RlcyIsImluZGV4Iiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydCIsInBhcnNlUGFydE9mUGFydHMiLCJwYXJ0c05vZGVzIiwicGFyc2UiLCJwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsImlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJydWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFnQkE7OztlQUFBQTs7O3lCQU5lO29CQUVpQjtBQUVoRCxJQUFNLEFBQUVDLE9BQVNDLDBCQUFURDtBQUVELFNBQVNELFdBQVdHLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUM3RCxJQUFJQztJQUVKLElBQU1DLGNBQWNOLE1BQU1PO0lBRTFCLElBQUlMLFVBQVVJLGFBQWE7UUFDekJELFNBQVMsQUFBQ0QsYUFBYSxPQUNYQSxhQUNFO0lBQ2hCLE9BQU87UUFDTCxJQUFNSSxPQUFPUixLQUFLLENBQUNFLE1BQU07UUFFekJHLFNBQVNJLGlCQUFpQkQsTUFBTVIsT0FBT0MsT0FBT0MsT0FBT0MsT0FBT0M7SUFDOUQ7SUFFQSxPQUFPQztBQUNUO0FBRUEsU0FBU0ksaUJBQWlCRCxJQUFJLEVBQUVSLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUNsRSxJQUFJQztJQUVKLElBQUlELGFBQWEsTUFBTTtRQUNyQixJQUFNTSxhQUFhLEVBQUU7UUFFckJSO1FBRUFHLFNBQVNHLEtBQUtHLE1BQU1WLE9BQU9FLE9BQU87bUJBQU1OLFdBQVdHLE9BQU9VLFlBQVlSLE9BQU9DLE9BQU9DOztRQUVwRixJQUFJQyxRQUFRO1lBQ1ZQLEtBQUtHLE9BQU9TO1FBQ2Q7SUFDRixPQUFPO1FBQ0wsSUFBTUUsZ0NBQWdDQyxJQUFBQSx1Q0FBZ0NMO1FBRXRFLElBQUlJLCtCQUErQjtZQUNqQyxJQUFNRSxlQUFlTixNQUNmRSxjQUFhLEVBQUU7WUFFckJSO1lBRUFHLFNBQVNTLGFBQWFILE1BQU1WLE9BQU9FLE9BQU87dUJBQU1OLFdBQVdHLE9BQU9VLGFBQVlSLE9BQU9DLE9BQU9DOztZQUU1RixJQUFJQyxRQUFRO2dCQUNWUCxLQUFLRyxPQUFPUztZQUNkO1FBQ0YsT0FBTztZQUNMTCxTQUFTRyxLQUFLRyxNQUFNVixPQUFPRSxPQUFPQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWSDtnQkFFQUcsU0FBU1IsV0FBV0csT0FBT0MsT0FBT0MsT0FBT0MsT0FBT0M7WUFDbEQ7UUFDRjtJQUNGO0lBRUEsT0FBT0M7QUFDVCJ9