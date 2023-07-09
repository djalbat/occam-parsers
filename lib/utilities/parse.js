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
        if (parsed) {
            parsed = callAhead !== null ? callAhead() : true;
        }
    } else {
        var part = parts[index], partLookAhead = part.isLookAhead(), partCallAhead = callAhead === null;
        index++;
        if (partLookAhead && partCallAhead) {
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
            parsed = part.parse(nodes, state, function() {
                var parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
                return parsed;
            }, callAhead);
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcGFydFxuICAgICAgICBdO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDA7XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VkID0gKGNhbGxBaGVhZCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgY2FsbEFoZWFkKCkgOlxuICAgICAgICAgICAgICAgICAgICB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdLFxuICAgICAgICAgIHBhcnRMb29rQWhlYWQgPSBwYXJ0LmlzTG9va0FoZWFkKCksXG4gICAgICAgICAgcGFydENhbGxBaGVhZCA9IChjYWxsQWhlYWQgPT09IG51bGwpO1xuXG4gICAgaW5kZXgrKztcblxuICAgIGlmIChwYXJ0TG9va0FoZWFkICYmIHBhcnRDYWxsQWhlYWQpIHtcbiAgICAgIGxldCBwYXJ0Tm9kZXM7XG5cbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICBwYXJ0Tm9kZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IHBhcnROb2RlcywgIC8vL1xuICAgICAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH0sIGNhbGxBaGVhZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnQiLCJwYXJzZVBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydCIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsImluZGV4IiwicGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0TG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJwYXJ0Q2FsbEFoZWFkIiwicGFydE5vZGVzIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsU0FBUztlQUFUQTs7SUFhQUMsVUFBVTtlQUFWQTs7O3lCQWpCZTtBQUUvQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVELFNBQVNGLFVBQVVJLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUMvRCxJQUFJQztJQUVKLElBQU1DLFFBQVEsR0FDUkMsUUFBUTtRQUNOUDtLQUNEO0lBRVBLLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7SUFFaEUsT0FBT0M7QUFDVDtBQUVPLFNBQVNSLFdBQVdVLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNqRSxJQUFJQztJQUVKLElBQU1DLFFBQVE7SUFFZEQsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztJQUVoRSxPQUFPQztBQUNUO0FBRUEsU0FBU0csaUJBQWlCRixLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUN2RSxJQUFJQztJQUVKLElBQU1JLGNBQWNGLE1BQU1HLE1BQU07SUFFaEMsSUFBSUosVUFBVUcsYUFBYTtRQUN6QkosU0FBU0Y7UUFFVCxJQUFJRSxRQUFRO1lBQ1ZBLFNBQVMsQUFBQ0QsY0FBYyxPQUNaQSxjQUNFO1FBQ2hCO0lBQ0YsT0FBTztRQUNMLElBQU1KLE9BQU9PLEtBQUssQ0FBQ0QsTUFBTSxFQUNuQkssZ0JBQWdCWCxLQUFLWSxXQUFXLElBQ2hDQyxnQkFBaUJULGNBQWM7UUFFckNFO1FBRUEsSUFBSUssaUJBQWlCRSxlQUFlO1lBQ2xDLElBQUlDO1lBRUpULFNBQVNMLEtBQUtlLEtBQUssQ0FBQ2QsT0FBT0MsT0FBT0MsVUFBVTtnQkFDMUNXLFlBQVksRUFBRTtnQkFFZCxJQUFNYixVQUFRYSxXQUNSVCxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLFNBQU9DLE9BQU9DLFVBQVVDO2dCQUV0RSxPQUFPQztZQUNUO1lBRUEsSUFBSUEsUUFBUTtnQkFDVlAsS0FBS0csT0FBT2E7WUFDZDtRQUNGLE9BQU87WUFDTFQsU0FBU0wsS0FBS2UsS0FBSyxDQUFDZCxPQUFPQyxPQUFPO2dCQUNoQyxJQUFNRyxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO2dCQUV0RSxPQUFPQztZQUNULEdBQUdEO1FBQ0w7SUFDRjtJQUVBLE9BQU9DO0FBQ1QifQ==