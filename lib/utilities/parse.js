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
var push = _necessary.arrayUtilities.push;
function parsePart(part, nodes, state, callback, callAhead) {
    var parsed;
    var index = 0, parts = [
        part
    ];
    parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
    return parsed;
}
function parseParts(parts, nodes, state, callback, callAhead) {
    var parsed;
    var index = 0;
    parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
    return parsed;
}
function parsePartOfParts(index, parts, nodes, state, callback, callAhead) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback() : true;
    } else {
        var part = parts[index];
        index++;
        var ruleName = nodes.ruleName;
        if (callAhead === null) {
            var partLookAhead = part.isLookAhead();
            if (partLookAhead) {
                var partNodes;
                parsed = part.parse(nodes, state, callback, function() {
                    partNodes = [];
                    var _$nodes = partNodes, parsed = parsePartOfParts(index, parts, _$nodes, state, callback, callAhead);
                    return parsed;
                });
                if (parsed) {
                    push(nodes, partNodes);
                }
            } else {
                parsed = part.parse(nodes, state, callback, callAhead);
                if (parsed) {
                    parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
                }
            }
        } else {
            parsed = part.parse(nodes, state, callback, function() {
                var parsed;
                parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
                return parsed;
            });
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcGFydFxuICAgICAgICBdO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDA7XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSAoY2FsbGJhY2sgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG5cbiAgICBpbmRleCsrO1xuXG4gICAgY29uc3QgeyBydWxlTmFtZSB9ID0gbm9kZXM7XG5cbiAgICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJ0TG9va0FoZWFkID0gcGFydC5pc0xvb2tBaGVhZCgpO1xuXG4gICAgICBpZiAocGFydExvb2tBaGVhZCkge1xuICAgICAgICBsZXQgcGFydE5vZGVzO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICAgIHBhcnROb2RlcyA9IFtdO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBwYXJ0Tm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0Tm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydCIsInBhcnNlUGFydHMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJ0Iiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJ0cyIsInBhcnNlUGFydE9mUGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lIiwicGFydExvb2tBaGVhZCIsImlzTG9va0FoZWFkIiwicGFydE5vZGVzIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsU0FBUztlQUFUQTs7SUFhQUMsVUFBVTtlQUFWQTs7O3lCQWpCZTtBQUUvQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVELFNBQVNGLFVBQVVJLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUMvRCxJQUFJQztJQUVKLElBQU1DLFFBQVEsR0FDUkMsUUFBUTtRQUNOUDtLQUNEO0lBRVBLLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7SUFFaEUsT0FBT0M7QUFDVDtBQUVPLFNBQVNSLFdBQVdVLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNqRSxJQUFJQztJQUVKLElBQU1DLFFBQVE7SUFFZEQsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztJQUVoRSxPQUFPQztBQUNUO0FBRUEsU0FBU0csaUJBQWlCRixLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUN2RSxJQUFJQztJQUVKLElBQU1JLGNBQWNGLE1BQU1HLE1BQU07SUFFaEMsSUFBSUosVUFBVUcsYUFBYTtRQUN6QkosU0FBUyxBQUFDRixhQUFhLE9BQ1pBLGFBQ0U7SUFDZixPQUFPO1FBQ0wsSUFBTUgsT0FBT08sS0FBSyxDQUFDRCxNQUFNO1FBRXpCQTtRQUVBLElBQU0sQUFBRUssV0FBYVYsTUFBYlU7UUFFUixJQUFJUCxjQUFjLE1BQU07WUFDdEIsSUFBTVEsZ0JBQWdCWixLQUFLYSxXQUFXO1lBRXRDLElBQUlELGVBQWU7Z0JBQ2pCLElBQUlFO2dCQUVKVCxTQUFTTCxLQUFLZSxLQUFLLENBQUNkLE9BQU9DLE9BQU9DLFVBQVU7b0JBQzFDVyxZQUFZLEVBQUU7b0JBRWQsSUFBTWIsVUFBUWEsV0FDUlQsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixTQUFPQyxPQUFPQyxVQUFVQztvQkFFdEUsT0FBT0M7Z0JBQ1Q7Z0JBRUEsSUFBSUEsUUFBUTtvQkFDVlAsS0FBS0csT0FBT2E7Z0JBQ2Q7WUFDRixPQUFPO2dCQUNMVCxTQUFTTCxLQUFLZSxLQUFLLENBQUNkLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUU1QyxJQUFJQyxRQUFRO29CQUNWQSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUNsRTtZQUNGO1FBQ0YsT0FBTztZQUNMQyxTQUFTTCxLQUFLZSxLQUFLLENBQUNkLE9BQU9DLE9BQU9DLFVBQVU7Z0JBQzFDLElBQUlFO2dCQUVKQSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUVoRSxPQUFPQztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==