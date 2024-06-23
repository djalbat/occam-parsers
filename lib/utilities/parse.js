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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcGFydFxuICAgICAgICBdO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnRzKHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDA7XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICBwYXJzZWQgPSAoY2FsbGJhY2sgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpbmRleF07XG5cbiAgICBpbmRleCsrO1xuXG4gICAgaWYgKGNhbGxBaGVhZCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFydExvb2tBaGVhZCA9IHBhcnQuaXNMb29rQWhlYWQoKTtcblxuICAgICAgaWYgKHBhcnRMb29rQWhlYWQpIHtcbiAgICAgICAgbGV0IHBhcnROb2RlcztcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBbXTtcblxuICAgICAgICAgIGNvbnN0IG5vZGVzID0gcGFydE5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnQiLCJwYXJzZVBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydCIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsImluZGV4IiwicGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0TG9va0FoZWFkIiwiaXNMb29rQWhlYWQiLCJwYXJ0Tm9kZXMiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWdCQSxTQUFTO2VBQVRBOztJQWFBQyxVQUFVO2VBQVZBOzs7eUJBakJlO0FBRS9CLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRUQsU0FBU0YsVUFBVUksSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO0lBQy9ELElBQUlDO0lBRUosSUFBTUMsUUFBUSxHQUNSQyxRQUFRO1FBQ05QO0tBQ0Q7SUFFUEssU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztJQUVoRSxPQUFPQztBQUNUO0FBRU8sU0FBU1IsV0FBV1UsS0FBSyxFQUFFTixLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO0lBQ2pFLElBQUlDO0lBRUosSUFBTUMsUUFBUTtJQUVkRCxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO0lBRWhFLE9BQU9DO0FBQ1Q7QUFFQSxTQUFTRyxpQkFBaUJGLEtBQUssRUFBRUMsS0FBSyxFQUFFTixLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTO0lBQ3ZFLElBQUlDO0lBRUosSUFBTUksY0FBY0YsTUFBTUcsTUFBTTtJQUVoQyxJQUFJSixVQUFVRyxhQUFhO1FBQ3pCSixTQUFTLEFBQUNGLGFBQWEsT0FDWkEsYUFDRTtJQUNmLE9BQU87UUFDTCxJQUFNSCxPQUFPTyxLQUFLLENBQUNELE1BQU07UUFFekJBO1FBRUEsSUFBSUYsY0FBYyxNQUFNO1lBQ3RCLElBQU1PLGdCQUFnQlgsS0FBS1ksV0FBVztZQUV0QyxJQUFJRCxlQUFlO2dCQUNqQixJQUFJRTtnQkFFSlIsU0FBU0wsS0FBS2MsS0FBSyxDQUFDYixPQUFPQyxPQUFPQyxVQUFVO29CQUMxQ1UsWUFBWSxFQUFFO29CQUVkLElBQU1aLFVBQVFZLFdBQ1JSLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sU0FBT0MsT0FBT0MsVUFBVUM7b0JBRXRFLE9BQU9DO2dCQUNUO2dCQUVBLElBQUlBLFFBQVE7b0JBQ1ZQLEtBQUtHLE9BQU9ZO2dCQUNkO1lBQ0YsT0FBTztnQkFDTFIsU0FBU0wsS0FBS2MsS0FBSyxDQUFDYixPQUFPQyxPQUFPQyxVQUFVQztnQkFFNUMsSUFBSUMsUUFBUTtvQkFDVkEsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztnQkFDbEU7WUFDRjtRQUNGLE9BQU87WUFDTEMsU0FBU0wsS0FBS2MsS0FBSyxDQUFDYixPQUFPQyxPQUFPQyxVQUFVO2dCQUMxQyxJQUFJRTtnQkFFSkEsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztnQkFFaEUsT0FBT0M7WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=