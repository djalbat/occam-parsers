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
function parseParts(parts, nodes, index, state, callback, precedence, parentRuleName) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback(precedence, parentRuleName) : true;
    } else {
        var part = parts[index];
        parsed = parsePartOfParts(part, parts, nodes, index, state, callback, precedence, parentRuleName);
    }
    return parsed;
}
function parsePartOfParts(part, parts, nodes, index, state, callback, precedence, parentRuleName) {
    var parsed;
    if (callback !== null) {
        var partsNodes = [];
        index++;
        parsed = part.parse(nodes, state, function(precedence, parentRuleName) {
            var parsed = parseParts(parts, partsNodes, index, state, callback, precedence, parentRuleName);
            return parsed;
        }, precedence, parentRuleName);
        if (parsed) {
            push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part, partsNodes1 = [];
            index++;
            parsed = ruleNamePart.parse(nodes, state, function(precedence, parentRuleName) {
                var parsed = parseParts(parts, partsNodes1, index, state, callback, precedence, parentRuleName);
                return parsed;
            }, precedence, parentRuleName);
            if (parsed) {
                push(nodes, partsNodes1);
            }
        } else {
            parsed = part.parse(nodes, state, callback, precedence, parentRuleName);
            if (parsed) {
                index++;
                parsed = parseParts(parts, nodes, index, state, callback, precedence, parentRuleName);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrLCBwcmVjZWRlbmNlLCBwYXJlbnRSdWxlTmFtZSkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSAoY2FsbGJhY2sgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhwcmVjZWRlbmNlLCBwYXJlbnRSdWxlTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRPZlBhcnRzKHBhcnQsIHBhcnRzLCBub2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICBpbmRleCsrO1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIChwcmVjZWRlbmNlLCBwYXJlbnRSdWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpO1xuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0sIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCA9IGlzUGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQocGFydCk7XG5cbiAgICBpZiAocGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBwYXJzZWQgPSBydWxlTmFtZVBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAocHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9LCBwcmVjZWRlbmNlLCBwYXJlbnRSdWxlTmFtZSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgcHJlY2VkZW5jZSwgcGFyZW50UnVsZU5hbWUpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIGluZGV4Kys7XG5cbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2ssIHByZWNlZGVuY2UsIHBhcmVudFJ1bGVOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJub2RlcyIsImluZGV4Iiwic3RhdGUiLCJjYWxsYmFjayIsInByZWNlZGVuY2UiLCJwYXJlbnRSdWxlTmFtZSIsInBhcnNlZCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydCIsInBhcnRzTm9kZXMiLCJwYXJzZSIsInBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsInJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxVQUFVO2VBQVZBOztJQWtCQUMsZ0JBQWdCO2VBQWhCQTs7O3lCQXhCZTtvQkFFaUI7QUFFaEQsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQ7QUFFRCxTQUFTRixXQUFXSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxjQUFjO0lBQ3pGLElBQUlDO0lBRUosSUFBTUMsY0FBY1IsTUFBTVM7SUFFMUIsSUFBSVAsVUFBVU0sYUFBYTtRQUN6QkQsU0FBUyxBQUFDSCxhQUFhLE9BQ1hBLFNBQVNDLFlBQVlDLGtCQUNuQjtJQUNoQixPQUFPO1FBQ0wsSUFBTUksT0FBT1YsS0FBSyxDQUFDRSxNQUFNO1FBRXpCSyxTQUFTVixpQkFBaUJhLE1BQU1WLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DLFVBQVVDLFlBQVlDO0lBQ3BGO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVNWLGlCQUFpQmEsSUFBSSxFQUFFVixLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxjQUFjO0lBQ3JHLElBQUlDO0lBRUosSUFBSUgsYUFBYSxNQUFNO1FBQ3JCLElBQU1PLGFBQWEsRUFBRTtRQUVyQlQ7UUFFQUssU0FBU0csS0FBS0UsTUFBTVgsT0FBT0UsT0FBTyxTQUFDRSxZQUFZQztZQUM3QyxJQUFNQyxTQUFTWCxXQUFXSSxPQUFPVyxZQUFZVCxPQUFPQyxPQUFPQyxVQUFVQyxZQUFZQztZQUVqRixPQUFPQztRQUNULEdBQUdGLFlBQVlDO1FBRWYsSUFBSUMsUUFBUTtZQUNWVCxLQUFLRyxPQUFPVTtRQUNkO0lBQ0YsT0FBTztRQUNMLElBQU1FLGdDQUFnQ0MsSUFBQUEsdUNBQWdDSjtRQUV0RSxJQUFJRywrQkFBK0I7WUFDakMsSUFBTUUsZUFBZUwsTUFDZkMsY0FBYSxFQUFFO1lBRXJCVDtZQUVBSyxTQUFTUSxhQUFhSCxNQUFNWCxPQUFPRSxPQUFPLFNBQUNFLFlBQVlDO2dCQUNyRCxJQUFNQyxTQUFTWCxXQUFXSSxPQUFPVyxhQUFZVCxPQUFPQyxPQUFPQyxVQUFVQyxZQUFZQztnQkFFakYsT0FBT0M7WUFDVCxHQUFHRixZQUFZQztZQUVmLElBQUlDLFFBQVE7Z0JBQ1ZULEtBQUtHLE9BQU9VO1lBQ2Q7UUFDRixPQUFPO1lBQ0xKLFNBQVNHLEtBQUtFLE1BQU1YLE9BQU9FLE9BQU9DLFVBQVVDLFlBQVlDO1lBRXhELElBQUlDLFFBQVE7Z0JBQ1ZMO2dCQUVBSyxTQUFTWCxXQUFXSSxPQUFPQyxPQUFPQyxPQUFPQyxPQUFPQyxVQUFVQyxZQUFZQztZQUN4RTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQztBQUNUIn0=