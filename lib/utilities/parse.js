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
            var partLookAhead = part.isLookAhead();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgIHBhcnRcbiAgICAgICAgXTtcblxuICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDA7XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgY2FsbGJhY2soKSA6XG4gICAgICAgICAgICAgICAgIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XTtcblxuICAgIGluZGV4Kys7XG5cbiAgICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnRMb29rQWhlYWQgPSBwYXJ0LmlzTG9va0FoZWFkKCk7XG5cbiAgICAgIGlmIChwYXJ0TG9va0FoZWFkKSB7XG4gICAgICAgIGxldCByZW1haW5pbmdOb2RlcztcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgICAgIHJlbWFpbmluZ05vZGVzID0gW107XG5cbiAgICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgcmVtYWluaW5nTm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcHVzaChub2RlcywgcmVtYWluaW5nTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydCIsInBhcnNlUGFydHMiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJwYXJ0Iiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJ0cyIsInBhcnNlUGFydE9mUGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRMb29rQWhlYWQiLCJpc0xvb2tBaGVhZCIsInJlbWFpbmluZ05vZGVzIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsU0FBUztlQUFUQTs7SUFhQUMsVUFBVTtlQUFWQTs7O3lCQWpCZTtBQUUvQixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVELFNBQVNGLFVBQVVJLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDcEQsSUFBSUM7SUFFSixJQUFNQyxRQUFRLEdBQ1JDLFFBQVE7UUFDTk47S0FDRDtJQUVQSSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9MLE9BQU9DLE9BQU9DO0lBRXRELE9BQU9DO0FBQ1Q7QUFFTyxTQUFTUCxXQUFXUyxLQUFLLEVBQUVMLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRO0lBQ3RELElBQUlDO0lBRUosSUFBTUMsUUFBUTtJQUVkRCxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9MLE9BQU9DLE9BQU9DO0lBRXRELE9BQU9DO0FBQ1Q7QUFFQSxTQUFTRyxpQkFBaUJGLEtBQUssRUFBRUMsS0FBSyxFQUFFTCxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUM1RCxJQUFJQztJQUVKLElBQU1JLGNBQWNGLE1BQU1HLE1BQU07SUFFaEMsSUFBSUosVUFBVUcsYUFBYTtRQUN6QkosU0FBUyxBQUFDRCxhQUFhLE9BQ1pBLGFBQ0U7SUFDZixPQUFPO1FBQ0wsSUFBTUgsT0FBT00sS0FBSyxDQUFDRCxNQUFNO1FBRXpCQTtRQUVBLElBQUlGLGFBQWEsTUFBTTtZQUNyQixJQUFNTyxnQkFBZ0JWLEtBQUtXLFdBQVc7WUFFdEMsSUFBSUQsZUFBZTtnQkFDakIsSUFBSUU7Z0JBRUpSLFNBQVNKLEtBQUthLEtBQUssQ0FBQ1osT0FBT0MsT0FBTztvQkFDaENVLGlCQUFpQixFQUFFO29CQUVuQixJQUFNUixTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9NLGdCQUFnQlYsT0FBT0M7b0JBRXJFLE9BQU9DO2dCQUNUO2dCQUVBLElBQUlBLFFBQVE7b0JBQ1ZOLEtBQUtHLE9BQU9XO2dCQUNkO1lBQ0YsT0FBTztnQkFDTFIsU0FBU0osS0FBS2EsS0FBSyxDQUFDWixPQUFPQyxPQUFPQztnQkFFbEMsSUFBSUMsUUFBUTtvQkFDVkEsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTCxPQUFPQyxPQUFPQztnQkFDeEQ7WUFDRjtRQUNGLE9BQU87WUFDTEMsU0FBU0osS0FBS2EsS0FBSyxDQUFDWixPQUFPQyxPQUFPO2dCQUNoQyxJQUFNRSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9MLE9BQU9DLE9BQU9DO2dCQUU1RCxPQUFPQztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==