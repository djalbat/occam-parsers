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
        parsed = callback();
    } else {
        var part = parts[index];
        index++;
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
            parsed = part.parse(nodes, state, function() {
                var parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
                return parsed;
            }, callAhead);
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcGFydFxuICAgICAgICBdO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDA7XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG5cbiAgICBpbmRleCsrO1xuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFydExvb2tBaGVhZCA9IHBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgICAgaWYgKHBhcnRMb29rQWhlYWQpIHtcbiAgICAgICAgbGV0IHBhcnROb2RlcztcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBbXTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVzID0gcGFydE5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSwgY2FsbEFoZWFkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydCIsInBhcnNlUGFydHMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJ0Iiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJ0cyIsInBhcnNlUGFydE9mUGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRMb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInBhcnROb2RlcyIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLFNBQVM7ZUFBVEE7O0lBYUFDLFVBQVU7ZUFBVkE7Ozt5QkFqQmU7QUFFL0IsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFRCxTQUFTRixVQUFVSSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7SUFDL0QsSUFBSUM7SUFFSixJQUFNQyxRQUFRLEdBQ1JDLFFBQVE7UUFDTlA7S0FDRDtJQUVQSyxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO0lBRWhFLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTUixXQUFXVSxLQUFLLEVBQUVOLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7SUFDakUsSUFBSUM7SUFFSixJQUFNQyxRQUFRO0lBRWRELFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7SUFFaEUsT0FBT0M7QUFDVDtBQUVBLFNBQVNHLGlCQUFpQkYsS0FBSyxFQUFFQyxLQUFLLEVBQUVOLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7SUFDdkUsSUFBSUM7SUFFSixJQUFNSSxjQUFjRixNQUFNRyxNQUFNO0lBRWhDLElBQUlKLFVBQVVHLGFBQWE7UUFDekJKLFNBQVNGO0lBQ1gsT0FBTztRQUNMLElBQU1ILE9BQU9PLEtBQUssQ0FBQ0QsTUFBTTtRQUV6QkE7UUFFQSxJQUFJRixjQUFjLE1BQU07WUFDdEIsSUFBTU8sZ0JBQWdCWCxLQUFLWSxXQUFXO1lBRXRDLElBQUlELGVBQWU7Z0JBQ2pCLElBQUlFO2dCQUVKUixTQUFTTCxLQUFLYyxLQUFLLENBQUNiLE9BQU9DLE9BQU9DLFVBQVU7b0JBQzFDVSxZQUFZLEVBQUU7b0JBRWQsSUFBTVosVUFBUVksV0FDUlIsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixTQUFPQyxPQUFPQyxVQUFVQztvQkFFdEUsT0FBT0M7Z0JBQ1Q7Z0JBRUEsSUFBSUEsUUFBUTtvQkFDVlAsS0FBS0csT0FBT1k7Z0JBQ2Q7WUFDRixPQUFPO2dCQUNMUixTQUFTTCxLQUFLYyxLQUFLLENBQUNiLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUU1QyxJQUFJQyxRQUFRO29CQUNWQSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUNsRTtZQUNGO1FBQ0YsT0FBTztZQUNMQyxTQUFTTCxLQUFLYyxLQUFLLENBQUNiLE9BQU9DLE9BQU87Z0JBQ2hDLElBQU1HLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7Z0JBRXRFLE9BQU9DO1lBQ1QsR0FBR0Q7UUFDTDtJQUNGO0lBRUEsT0FBT0M7QUFDVCJ9