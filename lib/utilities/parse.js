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
            parsed = part.parse(nodes, state, callback);
            if (parsed) {
                parsed = parsePartOfParts(index, parts, nodes, state, callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgcGFydFxuICAgICAgICBdO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMDtcblxuICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gKGNhbGxiYWNrICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBjYWxsYmFjaygpIDpcbiAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgaW5kZXgrKztcblxuICAgIGlmIChjYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnQiLCJwYXJzZVBhcnRzIiwicGFydCIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImluZGV4IiwicGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxTQUFTO2VBQVRBOztJQWFBQyxVQUFVO2VBQVZBOzs7QUFiVCxTQUFTRCxVQUFVRSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRO0lBQ3BELElBQUlDO0lBRUosSUFBTUMsUUFBUSxHQUNSQyxRQUFRO1FBQ05OO0tBQ0Q7SUFFUEksU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTCxPQUFPQyxPQUFPQztJQUV0RCxPQUFPQztBQUNUO0FBRU8sU0FBU0wsV0FBV08sS0FBSyxFQUFFTCxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUN0RCxJQUFJQztJQUVKLElBQU1DLFFBQVE7SUFFZEQsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTCxPQUFPQyxPQUFPQztJQUV0RCxPQUFPQztBQUNUO0FBRUEsU0FBU0csaUJBQWlCRixLQUFLLEVBQUVDLEtBQUssRUFBRUwsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDNUQsSUFBSUM7SUFFSixJQUFNSSxjQUFjRixNQUFNRztJQUUxQixJQUFJSixVQUFVRyxhQUFhO1FBQ3pCSixTQUFTLEFBQUNELGFBQWEsT0FDWkEsYUFDRTtJQUNmLE9BQU87UUFDTCxJQUFNSCxPQUFPTSxLQUFLLENBQUNELE1BQU07UUFFekJBO1FBRUEsSUFBSUYsYUFBYSxNQUFNO1lBQ3JCQyxTQUFTSixLQUFLVSxNQUFNVCxPQUFPQyxPQUFPQztZQUVsQyxJQUFJQyxRQUFRO2dCQUNWQSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9MLE9BQU9DLE9BQU9DO1lBQ3hEO1FBQ0YsT0FBTztZQUNMQyxTQUFTSixLQUFLVSxNQUFNVCxPQUFPQyxPQUFPO2dCQUNoQyxJQUFNRSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9MLE9BQU9DLE9BQU9DO2dCQUU1RCxPQUFPQztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==