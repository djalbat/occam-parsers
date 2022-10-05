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
var _array = require("../utilities/array");
var _part = require("./part");
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
            (0, _array.push)(nodes, partsNodes);
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
                (0, _array.push)(nodes, partsNodes1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICBpbmRleCsrO1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBwYXJzZWQgPSBydWxlTmFtZVBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzLCBwYXJ0c05vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgaW5kZXgrKztcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnRzIiwicGFydHMiLCJub2RlcyIsImluZGV4Iiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydCIsInBhcnNlUGFydE9mUGFydHMiLCJwYXJ0c05vZGVzIiwicGFyc2UiLCJwdXNoIiwicGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwicnVsZU5hbWVQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLZ0JBOzs7ZUFBQUE7OztxQkFISztvQkFDMkI7QUFFekMsU0FBU0EsV0FBV0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDL0QsSUFBSUM7SUFFSixJQUFNQyxjQUFjTixNQUFNTyxNQUFNO0lBRWhDLElBQUlMLFVBQVVJLGFBQWE7UUFDekJELFNBQVMsQUFBQ0QsYUFBYSxJQUFJLEdBQ2ZBLGFBQ0UsSUFBSTtJQUNwQixPQUFPO1FBQ0wsSUFBTUksT0FBT1IsS0FBSyxDQUFDRSxNQUFNO1FBRXpCRyxTQUFTSSxpQkFBaUJELE1BQU1SLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DO0lBQzlELENBQUM7SUFFRCxPQUFPQztBQUNUO0FBRUEsU0FBU0ksaUJBQWlCRCxJQUFJLEVBQUVSLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQ3BFLElBQUlDO0lBRUosSUFBSUQsYUFBYSxJQUFJLEVBQUU7UUFDckIsSUFBTU0sYUFBYSxFQUFFO1FBRXJCUjtRQUVBRyxTQUFTRyxLQUFLRyxLQUFLLENBQUNWLE9BQU9FLE9BQU87bUJBQU1KLFdBQVdDLE9BQU9VLFlBQVlSLE9BQU9DLE9BQU9DOztRQUVwRixJQUFJQyxRQUFRO1lBQ1ZPLElBQUFBLFdBQUksRUFBQ1gsT0FBT1M7UUFDZCxDQUFDO0lBQ0gsT0FBTztRQUNMLElBQU1HLGdDQUFnQ0MsSUFBQUEscUNBQStCLEVBQUNOO1FBRXRFLElBQUlLLCtCQUErQjtZQUNqQyxJQUFNRSxlQUFlUCxNQUNmRSxjQUFhLEVBQUU7WUFFckJSO1lBRUFHLFNBQVNVLGFBQWFKLEtBQUssQ0FBQ1YsT0FBT0UsT0FBTzt1QkFBTUosV0FBV0MsT0FBT1UsYUFBWVIsT0FBT0MsT0FBT0M7O1lBRTVGLElBQUlDLFFBQVE7Z0JBQ1ZPLElBQUFBLFdBQUksRUFBQ1gsT0FBT1M7WUFDZCxDQUFDO1FBQ0gsT0FBTztZQUNMTCxTQUFTRyxLQUFLRyxLQUFLLENBQUNWLE9BQU9FLE9BQU9DO1lBRWxDLElBQUlDLFFBQVE7Z0JBQ1ZIO2dCQUVBRyxTQUFTTixXQUFXQyxPQUFPQyxPQUFPQyxPQUFPQyxPQUFPQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPQztBQUNUIn0=