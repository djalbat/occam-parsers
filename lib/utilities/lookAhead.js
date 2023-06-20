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
function parseParts(parts, nodes, index, state, callback, precedence, ruleName) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback(precedence, ruleName) : true;
    } else {
        var part = parts[index];
        parsed = parsePartOfParts(part, parts, nodes, index, state, callback, precedence, ruleName);
    }
    return parsed;
}
function parsePartOfParts(part, parts, nodes, index, state, callback, precedence, ruleName) {
    var parsed;
    if (callback !== null) {
        var partsNodes = [];
        index++;
        parsed = part.parse(nodes, state, function(precedence, ruleName) {
            var parsed = parseParts(parts, partsNodes, index, state, callback, precedence, ruleName);
            return parsed;
        }, precedence, ruleName);
        if (parsed) {
            push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part, partsNodes1 = [];
            index++;
            parsed = ruleNamePart.parse(nodes, state, function(precedence, ruleName) {
                var parsed = parseParts(parts, partsNodes1, index, state, callback, precedence, ruleName);
                return parsed;
            }, precedence, ruleName);
            if (parsed) {
                push(nodes, partsNodes1);
            }
        } else {
            parsed = part.parse(nodes, state, callback, precedence, ruleName);
            if (parsed) {
                index++;
                parsed = parseParts(parts, nodes, index, state, callback, precedence, ruleName);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBydWxlTmFtZSkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSAoY2FsbGJhY2sgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhwcmVjZWRlbmNlLCBydWxlTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHJ1bGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRPZlBhcnRzKHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICBpbmRleCsrO1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIChwcmVjZWRlbmNlLCBydWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0sIHByZWNlZGVuY2UsIHJ1bGVOYW1lKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBwYXJzZWQgPSBydWxlTmFtZVBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAocHJlY2VkZW5jZSwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9LCBwcmVjZWRlbmNlLCBydWxlTmFtZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcnVsZU5hbWUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHJ1bGVOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJub2RlcyIsImluZGV4Iiwic3RhdGUiLCJjYWxsYmFjayIsInByZWNlZGVuY2UiLCJydWxlTmFtZSIsInBhcnNlZCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydCIsInBhcnRzTm9kZXMiLCJwYXJzZSIsInBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsInJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxVQUFVO2VBQVZBOztJQWtCQUMsZ0JBQWdCO2VBQWhCQTs7O3lCQXhCZTtvQkFFaUI7QUFFaEQsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQ7QUFFRCxTQUFTRixXQUFXSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxRQUFRO0lBQ25GLElBQUlDO0lBRUosSUFBTUMsY0FBY1IsTUFBTVM7SUFFMUIsSUFBSVAsVUFBVU0sYUFBYTtRQUN6QkQsU0FBUyxBQUFDSCxhQUFhLE9BQ1hBLFNBQVNDLFlBQVlDLFlBQ25CO0lBQ2hCLE9BQU87UUFDTCxJQUFNSSxPQUFPVixLQUFLLENBQUNFLE1BQU07UUFFekJLLFNBQVNWLGlCQUFpQmEsTUFBTVYsT0FBT0MsT0FBT0MsT0FBT0MsT0FBT0MsVUFBVUMsWUFBWUM7SUFDcEY7SUFFQSxPQUFPQztBQUNUO0FBRU8sU0FBU1YsaUJBQWlCYSxJQUFJLEVBQUVWLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFFBQVE7SUFDL0YsSUFBSUM7SUFFSixJQUFJSCxhQUFhLE1BQU07UUFDckIsSUFBTU8sYUFBYSxFQUFFO1FBRXJCVDtRQUVBSyxTQUFTRyxLQUFLRSxNQUFNWCxPQUFPRSxPQUFPLFNBQUNFLFlBQVlDO1lBQzdDLElBQU1DLFNBQVNYLFdBQVdJLE9BQU9XLFlBQVlULE9BQU9DLE9BQU9DLFVBQVVDLFlBQVlDO1lBRWpGLE9BQU9DO1FBQ1QsR0FBR0YsWUFBWUM7UUFFZixJQUFJQyxRQUFRO1lBQ1ZULEtBQUtHLE9BQU9VO1FBQ2Q7SUFDRixPQUFPO1FBQ0wsSUFBTUUsZ0NBQWdDQyxJQUFBQSx1Q0FBZ0NKO1FBRXRFLElBQUlHLCtCQUErQjtZQUNqQyxJQUFNRSxlQUFlTCxNQUNmQyxjQUFhLEVBQUU7WUFFckJUO1lBRUFLLFNBQVNRLGFBQWFILE1BQU1YLE9BQU9FLE9BQU8sU0FBQ0UsWUFBWUM7Z0JBQ3JELElBQU1DLFNBQVNYLFdBQVdJLE9BQU9XLGFBQVlULE9BQU9DLE9BQU9DLFVBQVVDLFlBQVlDO2dCQUVqRixPQUFPQztZQUNULEdBQUdGLFlBQVlDO1lBRWYsSUFBSUMsUUFBUTtnQkFDVlQsS0FBS0csT0FBT1U7WUFDZDtRQUNGLE9BQU87WUFDTEosU0FBU0csS0FBS0UsTUFBTVgsT0FBT0UsT0FBT0MsVUFBVUMsWUFBWUM7WUFFeEQsSUFBSUMsUUFBUTtnQkFDVkw7Z0JBRUFLLFNBQVNYLFdBQVdJLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DLFVBQVVDLFlBQVlDO1lBQ3hFO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DO0FBQ1QifQ==