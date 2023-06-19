"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    parseParts: function() {
        return parseParts;
    },
    parsePartOfParts: function() {
        return parsePartOfParts;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydE9mUGFydHMocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgPSBpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKHBhcnQpO1xuXG4gICAgaWYgKHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgIHBhcnRzTm9kZXMgPSBbXTtcblxuICAgICAgaW5kZXgrKztcblxuICAgICAgcGFyc2VkID0gcnVsZU5hbWVQYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaykpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXSwibmFtZXMiOlsicGFyc2VQYXJ0cyIsInBhcnNlUGFydE9mUGFydHMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJ0cyIsIm5vZGVzIiwiaW5kZXgiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0IiwicGFydHNOb2RlcyIsInBhcnNlIiwicGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwicnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLFVBQVU7ZUFBVkE7O0lBa0JBQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBeEJlO29CQUVpQjtBQUVoRCxJQUFNLEFBQUVDLE9BQVNDLDBCQUFURDtBQUVELFNBQVNGLFdBQVdJLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUM3RCxJQUFJQztJQUVKLElBQU1DLGNBQWNOLE1BQU1PO0lBRTFCLElBQUlMLFVBQVVJLGFBQWE7UUFDekJELFNBQVMsQUFBQ0QsYUFBYSxPQUNYQSxhQUNFO0lBQ2hCLE9BQU87UUFDTCxJQUFNSSxPQUFPUixLQUFLLENBQUNFLE1BQU07UUFFekJHLFNBQVNSLGlCQUFpQlcsTUFBTVIsT0FBT0MsT0FBT0MsT0FBT0MsT0FBT0M7SUFDOUQ7SUFFQSxPQUFPQztBQUNUO0FBRU8sU0FBU1IsaUJBQWlCVyxJQUFJLEVBQUVSLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUN6RSxJQUFJQztJQUVKLElBQUlELGFBQWEsTUFBTTtRQUNyQixJQUFNSyxhQUFhLEVBQUU7UUFFckJQO1FBRUFHLFNBQVNHLEtBQUtFLE1BQU1ULE9BQU9FLE9BQU87bUJBQU1QLFdBQVdJLE9BQU9TLFlBQVlQLE9BQU9DLE9BQU9DOztRQUVwRixJQUFJQyxRQUFRO1lBQ1ZQLEtBQUtHLE9BQU9RO1FBQ2Q7SUFDRixPQUFPO1FBQ0wsSUFBTUUsZ0NBQWdDQyxJQUFBQSx1Q0FBZ0NKO1FBRXRFLElBQUlHLCtCQUErQjtZQUNqQyxJQUFNRSxlQUFlTCxNQUNmQyxjQUFhLEVBQUU7WUFFckJQO1lBRUFHLFNBQVNRLGFBQWFILE1BQU1ULE9BQU9FLE9BQU87dUJBQU1QLFdBQVdJLE9BQU9TLGFBQVlQLE9BQU9DLE9BQU9DOztZQUU1RixJQUFJQyxRQUFRO2dCQUNWUCxLQUFLRyxPQUFPUTtZQUNkO1FBQ0YsT0FBTztZQUNMSixTQUFTRyxLQUFLRSxNQUFNVCxPQUFPRSxPQUFPQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWSDtnQkFFQUcsU0FBU1QsV0FBV0ksT0FBT0MsT0FBT0MsT0FBT0MsT0FBT0M7WUFDbEQ7UUFDRjtJQUNGO0lBRUEsT0FBT0M7QUFDVCJ9