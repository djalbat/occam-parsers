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
    parsePart: function() {
        return parsePart;
    },
    parseParts: function() {
        return parseParts;
    }
});
var _necessary = require("necessary");
var _part = require("../utilities/part");
var push = _necessary.arrayUtilities.push;
function parsePart(part, nodes, state, callback) {
    var parsed;
    var index = 0, parts = [
        part
    ];
    parsed = parsePartOfParts(index, parts, nodes, state, callback);
    return parsed;
}
function parseParts(parts, nodes, state, callback) {
    var parsed;
    var index = 0;
    parsed = parsePartOfParts(index, parts, nodes, state, callback);
    return parsed;
}
function parsePartOfParts(index, parts, nodes, state, callback) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback() : true;
    } else {
        var part = parts[index];
        index++;
        if (callback === null) {
            var partLookAhead = (0, _part.isPartLookAhead)(part);
            if (partLookAhead) {
                var remainingNodes;
                parsed = part.parse(nodes, state, function() {
                    remainingNodes = [];
                    var parsed = parsePartOfParts(index, parts, remainingNodes, state, callback);
                    return parsed;
                });
                if (parsed) {
                    push(nodes, remainingNodes);
                }
            } else {
                parsed = part.parse(nodes, state, callback);
                if (parsed) {
                    parsed = parsePartOfParts(index, parts, nodes, state, callback);
                }
            }
        } else {
            parsed = part.parse(nodes, state, function() {
                var parsed = parsePartOfParts(index, parts, nodes, state, callback);
                return parsed;
            });
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBpc1BhcnRMb29rQWhlYWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICBwYXJ0XG4gICAgICAgIF07XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgaW5kZXggPSAwO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSAoY2FsbGJhY2sgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG5cbiAgICBpbmRleCsrO1xuXG4gICAgaWYgKGNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJ0TG9va0FoZWFkID0gaXNQYXJ0TG9va0FoZWFkKHBhcnQpO1xuXG4gICAgICBpZiAocGFydExvb2tBaGVhZCkge1xuICAgICAgICBsZXQgcmVtYWluaW5nTm9kZXM7XG5cbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgICByZW1haW5pbmdOb2RlcyA9IFtdO1xuXG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIHJlbWFpbmluZ05vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHB1c2gobm9kZXMsIHJlbWFpbmluZ05vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnQiLCJwYXJzZVBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydCIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImluZGV4IiwicGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0TG9va0FoZWFkIiwiaXNQYXJ0TG9va0FoZWFkIiwicmVtYWluaW5nTm9kZXMiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxTQUFTO2VBQVRBOztJQWFBQyxVQUFVO2VBQVZBOzs7eUJBbkJlO29CQUVDO0FBRWhDLElBQU0sQUFBRUMsT0FBU0MsMEJBQVREO0FBRUQsU0FBU0YsVUFBVUksSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUNwRCxJQUFJQztJQUVKLElBQU1DLFFBQVEsR0FDUkMsUUFBUTtRQUNOTjtLQUNEO0lBRVBJLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT0wsT0FBT0MsT0FBT0M7SUFFdEQsT0FBT0M7QUFDVDtBQUVPLFNBQVNQLFdBQVdTLEtBQUssRUFBRUwsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDdEQsSUFBSUM7SUFFSixJQUFNQyxRQUFRO0lBRWRELFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT0wsT0FBT0MsT0FBT0M7SUFFdEQsT0FBT0M7QUFDVDtBQUVBLFNBQVNHLGlCQUFpQkYsS0FBSyxFQUFFQyxLQUFLLEVBQUVMLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRO0lBQzVELElBQUlDO0lBRUosSUFBTUksY0FBY0YsTUFBTUc7SUFFMUIsSUFBSUosVUFBVUcsYUFBYTtRQUN6QkosU0FBUyxBQUFDRCxhQUFhLE9BQ1pBLGFBQ0U7SUFDZixPQUFPO1FBQ0wsSUFBTUgsT0FBT00sS0FBSyxDQUFDRCxNQUFNO1FBRXpCQTtRQUVBLElBQUlGLGFBQWEsTUFBTTtZQUNyQixJQUFNTyxnQkFBZ0JDLElBQUFBLHVCQUFnQlg7WUFFdEMsSUFBSVUsZUFBZTtnQkFDakIsSUFBSUU7Z0JBRUpSLFNBQVNKLEtBQUthLE1BQU1aLE9BQU9DLE9BQU87b0JBQ2hDVSxpQkFBaUIsRUFBRTtvQkFFbkIsSUFBTVIsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTSxnQkFBZ0JWLE9BQU9DO29CQUVyRSxPQUFPQztnQkFDVDtnQkFFQSxJQUFJQSxRQUFRO29CQUNWTixLQUFLRyxPQUFPVztnQkFDZDtZQUNGLE9BQU87Z0JBQ0xSLFNBQVNKLEtBQUthLE1BQU1aLE9BQU9DLE9BQU9DO2dCQUVsQyxJQUFJQyxRQUFRO29CQUNWQSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9MLE9BQU9DLE9BQU9DO2dCQUN4RDtZQUNGO1FBQ0YsT0FBTztZQUNMQyxTQUFTSixLQUFLYSxNQUFNWixPQUFPQyxPQUFPO2dCQUNoQyxJQUFNRSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9MLE9BQU9DLE9BQU9DO2dCQUU1RCxPQUFPQztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==