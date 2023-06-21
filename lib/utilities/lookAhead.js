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
            var parsed = parseParts(parts, partsNodes, index, state, callback);
            return parsed;
        });
        if (parsed) {
            push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part; ///
            var partsNodes1;
            index++;
            parsed = ruleNamePart.parse(nodes, state, function() {
                partsNodes1 = [];
                var parsed = parseParts(parts, partsNodes1, index, state, callback);
                return parsed;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydE9mUGFydHMocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICBsZXQgcGFydHNOb2RlcztcblxuICAgICAgaW5kZXgrKztcblxuICAgICAgcGFyc2VkID0gcnVsZU5hbWVQYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXSwibmFtZXMiOlsicGFyc2VQYXJ0cyIsInBhcnNlUGFydE9mUGFydHMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJ0cyIsIm5vZGVzIiwiaW5kZXgiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0IiwicGFydHNOb2RlcyIsInBhcnNlIiwicGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwicnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLFVBQVU7ZUFBVkE7O0lBa0JBQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBeEJlO29CQUVpQjtBQUVoRCxJQUFNLEFBQUVDLE9BQVNDLDBCQUFURDtBQUVELFNBQVNGLFdBQVdJLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUM3RCxJQUFJQztJQUVKLElBQU1DLGNBQWNOLE1BQU1PO0lBRTFCLElBQUlMLFVBQVVJLGFBQWE7UUFDekJELFNBQVMsQUFBQ0QsYUFBYSxPQUNYQSxhQUNFO0lBQ2hCLE9BQU87UUFDTCxJQUFNSSxPQUFPUixLQUFLLENBQUNFLE1BQU07UUFFekJHLFNBQVNSLGlCQUFpQlcsTUFBTVIsT0FBT0MsT0FBT0MsT0FBT0MsT0FBT0M7SUFDOUQ7SUFFQSxPQUFPQztBQUNUO0FBRU8sU0FBU1IsaUJBQWlCVyxJQUFJLEVBQUVSLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUN6RSxJQUFJQztJQUVKLElBQUlELGFBQWEsTUFBTTtRQUNyQixJQUFNSyxhQUFhLEVBQUU7UUFFckJQO1FBRUFHLFNBQVNHLEtBQUtFLE1BQU1ULE9BQU9FLE9BQU87WUFDaEMsSUFBTUUsU0FBU1QsV0FBV0ksT0FBT1MsWUFBWVAsT0FBT0MsT0FBT0M7WUFFM0QsT0FBT0M7UUFDVDtRQUVBLElBQUlBLFFBQVE7WUFDVlAsS0FBS0csT0FBT1E7UUFDZDtJQUNGLE9BQU87UUFDTCxJQUFNRSxnQ0FBZ0NDLElBQUFBLHVDQUFnQ0o7UUFFdEUsSUFBSUcsK0JBQStCO1lBQ2pDLElBQU1FLGVBQWVMLE1BQU0sR0FBRztZQUU5QixJQUFJQztZQUVKUDtZQUVBRyxTQUFTUSxhQUFhSCxNQUFNVCxPQUFPRSxPQUFPO2dCQUN4Q00sY0FBYSxFQUFFO2dCQUVmLElBQU1KLFNBQVNULFdBQVdJLE9BQU9TLGFBQVlQLE9BQU9DLE9BQU9DO2dCQUUzRCxPQUFPQztZQUNUO1lBRUEsSUFBSUEsUUFBUTtnQkFDVlAsS0FBS0csT0FBT1E7WUFDZDtRQUNGLE9BQU87WUFDTEosU0FBU0csS0FBS0UsTUFBTVQsT0FBT0UsT0FBT0M7WUFFbEMsSUFBSUMsUUFBUTtnQkFDVkg7Z0JBRUFHLFNBQVNULFdBQVdJLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DO1lBQ2xEO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DO0FBQ1QifQ==