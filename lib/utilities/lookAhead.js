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
function parseParts(parts, nodes, index, state, callback, precedence) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback(precedence) : true;
    } else {
        var part = parts[index];
        parsed = parsePartOfParts(part, parts, nodes, index, state, callback, precedence);
    }
    return parsed;
}
function parsePartOfParts(part, parts, nodes, index, state, callback, precedence) {
    var parsed;
    if (callback !== null) {
        var partsNodes = [];
        index++;
        parsed = part.parse(nodes, state, function(precedence) {
            var parsed = parseParts(parts, partsNodes, index, state, callback, precedence);
            return parsed;
        }, precedence);
        if (parsed) {
            push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part, partsNodes1 = [];
            index++;
            parsed = ruleNamePart.parse(nodes, state, function(precedence) {
                var parsed = parseParts(parts, partsNodes1, index, state, callback, precedence);
                return parsed;
            }, precedence);
            if (parsed) {
                push(nodes, partsNodes1);
            }
        } else {
            parsed = part.parse(nodes, state, callback, precedence);
            if (parsed) {
                index++;
                parsed = parseParts(parts, nodes, index, state, callback, precedence);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByZWNlZGVuY2UpIDpcbiAgICAgICAgICAgICAgICAgIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRPZlBhcnRzKHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIGluZGV4Kys7XG5cbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKHByZWNlZGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UpO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0sIHByZWNlZGVuY2UpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkID0gaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZChwYXJ0KTtcblxuICAgIGlmIChwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCkge1xuICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHBhcnNlZCA9IHJ1bGVOYW1lUGFydC5wYXJzZShub2Rlcywgc3RhdGUsIChwcmVjZWRlbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UpO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9LCBwcmVjZWRlbmNlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJub2RlcyIsImluZGV4Iiwic3RhdGUiLCJjYWxsYmFjayIsInByZWNlZGVuY2UiLCJwYXJzZWQiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnQiLCJwYXJ0c05vZGVzIiwicGFyc2UiLCJwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsImlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQiLCJydWxlTmFtZVBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFnQkEsVUFBVTtlQUFWQTs7SUFrQkFDLGdCQUFnQjtlQUFoQkE7Ozt5QkF4QmU7b0JBRWlCO0FBRWhELElBQU0sQUFBRUMsT0FBU0MsMEJBQVREO0FBRUQsU0FBU0YsV0FBV0ksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7SUFDekUsSUFBSUM7SUFFSixJQUFNQyxjQUFjUCxNQUFNUTtJQUUxQixJQUFJTixVQUFVSyxhQUFhO1FBQ3pCRCxTQUFTLEFBQUNGLGFBQWEsT0FDWEEsU0FBU0MsY0FDUDtJQUNoQixPQUFPO1FBQ0wsSUFBTUksT0FBT1QsS0FBSyxDQUFDRSxNQUFNO1FBRXpCSSxTQUFTVCxpQkFBaUJZLE1BQU1ULE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DLFVBQVVDO0lBQ3hFO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVNULGlCQUFpQlksSUFBSSxFQUFFVCxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTtJQUNyRixJQUFJQztJQUVKLElBQUlGLGFBQWEsTUFBTTtRQUNyQixJQUFNTSxhQUFhLEVBQUU7UUFFckJSO1FBRUFJLFNBQVNHLEtBQUtFLE1BQU1WLE9BQU9FLE9BQU8sU0FBQ0U7WUFDakMsSUFBTUMsU0FBU1YsV0FBV0ksT0FBT1UsWUFBWVIsT0FBT0MsT0FBT0MsVUFBVUM7WUFFckUsT0FBT0M7UUFDVCxHQUFHRDtRQUVILElBQUlDLFFBQVE7WUFDVlIsS0FBS0csT0FBT1M7UUFDZDtJQUNGLE9BQU87UUFDTCxJQUFNRSxnQ0FBZ0NDLElBQUFBLHVDQUFnQ0o7UUFFdEUsSUFBSUcsK0JBQStCO1lBQ2pDLElBQU1FLGVBQWVMLE1BQ2ZDLGNBQWEsRUFBRTtZQUVyQlI7WUFFQUksU0FBU1EsYUFBYUgsTUFBTVYsT0FBT0UsT0FBTyxTQUFDRTtnQkFDekMsSUFBTUMsU0FBU1YsV0FBV0ksT0FBT1UsYUFBWVIsT0FBT0MsT0FBT0MsVUFBVUM7Z0JBRXJFLE9BQU9DO1lBQ1QsR0FBR0Q7WUFFSCxJQUFJQyxRQUFRO2dCQUNWUixLQUFLRyxPQUFPUztZQUNkO1FBQ0YsT0FBTztZQUNMSixTQUFTRyxLQUFLRSxNQUFNVixPQUFPRSxPQUFPQyxVQUFVQztZQUU1QyxJQUFJQyxRQUFRO2dCQUNWSjtnQkFFQUksU0FBU1YsV0FBV0ksT0FBT0MsT0FBT0MsT0FBT0MsT0FBT0MsVUFBVUM7WUFDNUQ7UUFDRjtJQUNGO0lBRUEsT0FBT0M7QUFDVCJ9