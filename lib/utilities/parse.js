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
var push = _necessary.arrayUtilities.push, clear = _necessary.arrayUtilities.clear;
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
        var part = parts[index], partCallAhead = callAhead === null ? part.isCallAhead() : true;
        index++;
        parsed = partCallAhead ? parsePartWithCallAhead(part, index, parts, nodes, state, callback, callAhead) : parsePartWithoutCallAhead(part, index, parts, nodes, state, callback, callAhead);
    }
    return parsed;
}
function parsePartWithCallAhead(part, index, parts, nodes, state, callback, callAhead) {
    var parsed;
    var partNodes = [];
    callAhead = function() {
        var parsed;
        clear(partNodes);
        var _$nodes = partNodes; ///
        parsed = parsePartOfParts(index, parts, _$nodes, state, callback, callAhead);
        return parsed;
    };
    parsed = part.parse(nodes, state, callback, callAhead);
    if (parsed) {
        push(nodes, partNodes);
    }
    return parsed;
}
function parsePartWithoutCallAhead(part, index, parts, nodes, state, callback, callAhead) {
    var parsed;
    parsed = part.parse(nodes, state, callback, callAhead);
    if (parsed) {
        parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHB1c2gsIGNsZWFyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgIHBhcnRcbiAgICAgICAgXTtcblxuICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgaW5kZXggPSAwO1xuXG4gIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gKGNhbGxiYWNrICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBjYWxsYmFjaygpIDpcbiAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdLFxuICAgICAgICAgIHBhcnRDYWxsQWhlYWQgPSAoY2FsbEFoZWFkID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pc0NhbGxBaGVhZCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWU7XG5cbiAgICBpbmRleCsrO1xuXG4gICAgcGFyc2VkID0gcGFydENhbGxBaGVhZCA/XG4gICAgICAgICAgICAgICBwYXJzZVBhcnRXaXRoQ2FsbEFoZWFkKHBhcnQsIGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSA6XG4gICAgICAgICAgICAgICAgIHBhcnNlUGFydFdpdGhvdXRDYWxsQWhlYWQocGFydCwgaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0V2l0aENhbGxBaGVhZChwYXJ0LCBpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IHBhcnROb2RlcyA9IFtdO1xuXG4gIGNhbGxBaGVhZCA9ICgpID0+IHsgLy8vXG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNsZWFyKHBhcnROb2Rlcyk7XG5cbiAgICBjb25zdCBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9O1xuXG4gIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICBpZiAocGFyc2VkKSB7XG4gICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydFdpdGhvdXRDYWxsQWhlYWQocGFydCwgaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgaWYgKHBhcnNlZCkge1xuICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnQiLCJwYXJzZVBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiY2xlYXIiLCJwYXJ0Iiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwiaW5kZXgiLCJwYXJ0cyIsInBhcnNlUGFydE9mUGFydHMiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRDYWxsQWhlYWQiLCJpc0NhbGxBaGVhZCIsInBhcnNlUGFydFdpdGhDYWxsQWhlYWQiLCJwYXJzZVBhcnRXaXRob3V0Q2FsbEFoZWFkIiwicGFydE5vZGVzIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsU0FBUztlQUFUQTs7SUFhQUMsVUFBVTtlQUFWQTs7O3lCQWpCZTtBQUUvQixJQUFRQyxPQUFnQkMseUJBQWMsQ0FBOUJELE1BQU1FLFFBQVVELHlCQUFjLENBQXhCQztBQUVQLFNBQVNKLFVBQVVLLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUMvRCxJQUFJQztJQUVKLElBQU1DLFFBQVEsR0FDUkMsUUFBUTtRQUNOUDtLQUNEO0lBRVBLLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7SUFFaEUsT0FBT0M7QUFDVDtBQUVPLFNBQVNULFdBQVdXLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNqRSxJQUFJQztJQUVKLElBQU1DLFFBQVE7SUFFZEQsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztJQUVoRSxPQUFPQztBQUNUO0FBRUEsU0FBU0csaUJBQWlCRixLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUN2RSxJQUFJQztJQUVKLElBQU1JLGNBQWNGLE1BQU1HLE1BQU07SUFFaEMsSUFBSUosVUFBVUcsYUFBYTtRQUN6QkosU0FBUyxBQUFDRixhQUFhLE9BQ1pBLGFBQ0U7SUFDZixPQUFPO1FBQ0wsSUFBTUgsT0FBT08sS0FBSyxDQUFDRCxNQUFNLEVBQ25CSyxnQkFBZ0IsQUFBQ1AsY0FBYyxPQUNiSixLQUFLWSxXQUFXLEtBQ2Q7UUFFMUJOO1FBRUFELFNBQVNNLGdCQUNFRSx1QkFBdUJiLE1BQU1NLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDLGFBQ2pFVSwwQkFBMEJkLE1BQU1NLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO0lBQ3JGO0lBRUEsT0FBT0M7QUFDVDtBQUVBLFNBQVNRLHVCQUF1QmIsSUFBSSxFQUFFTSxLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNuRixJQUFJQztJQUVKLElBQU1VLFlBQVksRUFBRTtJQUVwQlgsWUFBWTtRQUNWLElBQUlDO1FBRUpOLE1BQU1nQjtRQUVOLElBQU1kLFVBQVFjLFdBQVksR0FBRztRQUU3QlYsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixTQUFPQyxPQUFPQyxVQUFVQztRQUVoRSxPQUFPQztJQUNUO0lBRUFBLFNBQVNMLEtBQUtnQixLQUFLLENBQUNmLE9BQU9DLE9BQU9DLFVBQVVDO0lBRTVDLElBQUlDLFFBQVE7UUFDVlIsS0FBS0ksT0FBT2M7SUFDZDtJQUVBLE9BQU9WO0FBQ1Q7QUFFQSxTQUFTUywwQkFBMEJkLElBQUksRUFBRU0sS0FBSyxFQUFFQyxLQUFLLEVBQUVOLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7SUFDdEYsSUFBSUM7SUFFSkEsU0FBU0wsS0FBS2dCLEtBQUssQ0FBQ2YsT0FBT0MsT0FBT0MsVUFBVUM7SUFFNUMsSUFBSUMsUUFBUTtRQUNWQSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO0lBQ2xFO0lBRUEsT0FBT0M7QUFDVCJ9