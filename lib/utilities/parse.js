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
        if (callAhead === null) {
            var partLookAhead = part.isLookAhead();
            if (partLookAhead) {
                var partNodes;
                var ruleName = nodes.ruleName;
                parsed = part.parse(nodes, state, callback, function() {
                    partNodes = [];
                    Object.assign(partNodes, {
                        ruleName: ruleName
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcGFydFxuICAgICAgICBdO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDA7XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSAoY2FsbGJhY2sgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG5cbiAgICBpbmRleCsrO1xuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFydExvb2tBaGVhZCA9IHBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgICAgaWYgKHBhcnRMb29rQWhlYWQpIHtcbiAgICAgICAgbGV0IHBhcnROb2RlcztcblxuICAgICAgICBjb25zdCB7IHJ1bGVOYW1lIH0gPSBub2RlcztcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBbXTtcblxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFydE5vZGVzLCB7XG4gICAgICAgICAgICBydWxlTmFtZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3Qgbm9kZXMgPSBwYXJ0Tm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0Tm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydCIsInBhcnNlUGFydHMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJ0Iiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJ0cyIsInBhcnNlUGFydE9mUGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRMb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInBhcnROb2RlcyIsInJ1bGVOYW1lIiwicGFyc2UiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsU0FBUztlQUFUQTs7SUFhQUMsVUFBVTtlQUFWQTs7O3lCQWpCZTtBQUUvQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVELFNBQVNGLFVBQVVJLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUMvRCxJQUFJQztJQUVKLElBQU1DLFFBQVEsR0FDUkMsUUFBUTtRQUNOUDtLQUNEO0lBRVBLLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7SUFFaEUsT0FBT0M7QUFDVDtBQUVPLFNBQVNSLFdBQVdVLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNqRSxJQUFJQztJQUVKLElBQU1DLFFBQVE7SUFFZEQsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztJQUVoRSxPQUFPQztBQUNUO0FBRUEsU0FBU0csaUJBQWlCRixLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUN2RSxJQUFJQztJQUVKLElBQU1JLGNBQWNGLE1BQU1HLE1BQU07SUFFaEMsSUFBSUosVUFBVUcsYUFBYTtRQUN6QkosU0FBUyxBQUFDRixhQUFhLE9BQ1pBLGFBQ0U7SUFDZixPQUFPO1FBQ0wsSUFBTUgsT0FBT08sS0FBSyxDQUFDRCxNQUFNO1FBRXpCQTtRQUVBLElBQUlGLGNBQWMsTUFBTTtZQUN0QixJQUFNTyxnQkFBZ0JYLEtBQUtZLFdBQVc7WUFFdEMsSUFBSUQsZUFBZTtnQkFDakIsSUFBSUU7Z0JBRUosSUFBTSxBQUFFQyxXQUFhYixNQUFiYTtnQkFFUlQsU0FBU0wsS0FBS2UsS0FBSyxDQUFDZCxPQUFPQyxPQUFPQyxVQUFVO29CQUMxQ1UsWUFBWSxFQUFFO29CQUVkRyxPQUFPQyxNQUFNLENBQUNKLFdBQVc7d0JBQ3ZCQyxVQUFBQTtvQkFDRjtvQkFFQSxJQUFNYixVQUFRWSxXQUNSUixTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLFNBQU9DLE9BQU9DLFVBQVVDO29CQUV0RSxPQUFPQztnQkFDVDtnQkFFQSxJQUFJQSxRQUFRO29CQUNWUCxLQUFLRyxPQUFPWTtnQkFDZDtZQUNGLE9BQU87Z0JBQ0xSLFNBQVNMLEtBQUtlLEtBQUssQ0FBQ2QsT0FBT0MsT0FBT0MsVUFBVUM7Z0JBRTVDLElBQUlDLFFBQVE7b0JBQ1ZBLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7Z0JBQ2xFO1lBQ0Y7UUFDRixPQUFPO1lBQ0xDLFNBQVNMLEtBQUtlLEtBQUssQ0FBQ2QsT0FBT0MsT0FBT0MsVUFBVTtnQkFDMUMsSUFBSUU7Z0JBRUpBLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7Z0JBRWhFLE9BQU9DO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9