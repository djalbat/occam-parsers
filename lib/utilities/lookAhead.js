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
            var ruleNamePart = part, partsNodes1 = [];
            index++;
            parsed = ruleNamePart.parse(nodes, state, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydE9mUGFydHMocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBwYXJzZWQgPSBydWxlTmFtZVBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJub2RlcyIsImluZGV4Iiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydCIsInBhcnRzTm9kZXMiLCJwYXJzZSIsInBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsInJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxVQUFVO2VBQVZBOztJQWtCQUMsZ0JBQWdCO2VBQWhCQTs7O3lCQXhCZTtvQkFFaUI7QUFFaEQsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQ7QUFFRCxTQUFTRixXQUFXSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDN0QsSUFBSUM7SUFFSixJQUFNQyxjQUFjTixNQUFNTztJQUUxQixJQUFJTCxVQUFVSSxhQUFhO1FBQ3pCRCxTQUFTLEFBQUNELGFBQWEsT0FDWEEsYUFDRTtJQUNoQixPQUFPO1FBQ0wsSUFBTUksT0FBT1IsS0FBSyxDQUFDRSxNQUFNO1FBRXpCRyxTQUFTUixpQkFBaUJXLE1BQU1SLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DO0lBQzlEO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVNSLGlCQUFpQlcsSUFBSSxFQUFFUixLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDekUsSUFBSUM7SUFFSixJQUFJRCxhQUFhLE1BQU07UUFDckIsSUFBTUssYUFBYSxFQUFFO1FBRXJCUDtRQUVBRyxTQUFTRyxLQUFLRSxNQUFNVCxPQUFPRSxPQUFPO1lBQ2hDLElBQU1FLFNBQVNULFdBQVdJLE9BQU9TLFlBQVlQLE9BQU9DLE9BQU9DO1lBRTNELE9BQU9DO1FBQ1Q7UUFFQSxJQUFJQSxRQUFRO1lBQ1ZQLEtBQUtHLE9BQU9RO1FBQ2Q7SUFDRixPQUFPO1FBQ0wsSUFBTUUsZ0NBQWdDQyxJQUFBQSx1Q0FBZ0NKO1FBRXRFLElBQUlHLCtCQUErQjtZQUNqQyxJQUFNRSxlQUFlTCxNQUNmQyxjQUFhLEVBQUU7WUFFckJQO1lBRUFHLFNBQVNRLGFBQWFILE1BQU1ULE9BQU9FLE9BQU87Z0JBQ3hDLElBQU1FLFNBQVNULFdBQVdJLE9BQU9TLGFBQVlQLE9BQU9DLE9BQU9DO2dCQUUzRCxPQUFPQztZQUNUO1lBRUEsSUFBSUEsUUFBUTtnQkFDVlAsS0FBS0csT0FBT1E7WUFDZDtRQUNGLE9BQU87WUFDTEosU0FBU0csS0FBS0UsTUFBTVQsT0FBT0UsT0FBT0M7WUFFbEMsSUFBSUMsUUFBUTtnQkFDVkg7Z0JBRUFHLFNBQVNULFdBQVdJLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DO1lBQ2xEO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DO0FBQ1QifQ==