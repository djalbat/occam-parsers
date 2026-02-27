"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get parsePart () {
        return parsePart;
    },
    get parseParts () {
        return parseParts;
    }
});
function parsePart(part, nodes, state, callback, callAhead) {
    let parsed;
    const index = 0, parts = [
        part
    ];
    parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
    return parsed;
}
function parseParts(parts, nodes, state, callback, callAhead) {
    let parsed;
    const index = 0;
    parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
    return parsed;
}
function parsePartOfParts(index, parts, nodes, state, callback, callAhead) {
    let parsed;
    const partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback() : true;
    } else {
        const part = parts[index], partCallAhead = callAhead === null ? part.isCallAhead() : true;
        index++;
        parsed = partCallAhead ? parsePartWithCallAhead(part, index, parts, nodes, state, callback, callAhead) : parsePartWithoutCallAhead(part, index, parts, nodes, state, callback, callAhead);
    }
    return parsed;
}
function parsePartWithCallAhead(part, index, parts, nodes, state, callback, callAhead) {
    let parsed;
    const nodesLength = nodes.length;
    callAhead = ()=>{
        let parsed;
        parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
        return parsed;
    };
    parsed = part.parse(nodes, state, callback, callAhead);
    if (!parsed) {
        const start = nodesLength; ///
        nodes.splice(start);
    }
    return parsed;
}
function parsePartWithoutCallAhead(part, index, parts, nodes, state, callback, callAhead) {
    let parsed;
    parsed = part.parse(nodes, state, callback, callAhead);
    if (parsed) {
        parsed = parsePartOfParts(index, parts, nodes, state, callback, callAhead);
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICBwYXJ0XG4gICAgICAgIF07XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICBsZXQgcGFyc2VkO1xuXG4gIGNvbnN0IGluZGV4ID0gMDtcblxuICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICByZXR1cm4gcGFyc2VkO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgY2FsbGJhY2soKSA6XG4gICAgICAgICAgICAgICAgIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydCA9IHBhcnRzW2luZGV4XSxcbiAgICAgICAgICBwYXJ0Q2FsbEFoZWFkID0gKGNhbGxBaGVhZCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaXNDYWxsQWhlYWQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHBhcnNlZCA9IHBhcnRDYWxsQWhlYWQgP1xuICAgICAgICAgICAgICAgcGFyc2VQYXJ0V2l0aENhbGxBaGVhZChwYXJ0LCBpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkgOlxuICAgICAgICAgICAgICAgICBwYXJzZVBhcnRXaXRob3V0Q2FsbEFoZWFkKHBhcnQsIGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydFdpdGhDYWxsQWhlYWQocGFydCwgaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICBjYWxsQWhlYWQgPSAoKSA9PiB7IC8vL1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH07XG5cbiAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gIGlmICghcGFyc2VkKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBub2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgbm9kZXMuc3BsaWNlKHN0YXJ0KTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydFdpdGhvdXRDYWxsQWhlYWQocGFydCwgaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgaWYgKHBhcnNlZCkge1xuICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwYXJzZVBhcnQiLCJwYXJzZVBhcnRzIiwicGFydCIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsImNhbGxBaGVhZCIsInBhcnNlZCIsImluZGV4IiwicGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJ0Q2FsbEFoZWFkIiwiaXNDYWxsQWhlYWQiLCJwYXJzZVBhcnRXaXRoQ2FsbEFoZWFkIiwicGFyc2VQYXJ0V2l0aG91dENhbGxBaGVhZCIsIm5vZGVzTGVuZ3RoIiwicGFyc2UiLCJzdGFydCIsInNwbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBRWdCQTtlQUFBQTs7UUFhQUM7ZUFBQUE7OztBQWJULFNBQVNELFVBQVVFLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUMvRCxJQUFJQztJQUVKLE1BQU1DLFFBQVEsR0FDUkMsUUFBUTtRQUNOUDtLQUNEO0lBRVBLLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7SUFFaEUsT0FBT0M7QUFDVDtBQUVPLFNBQVNOLFdBQVdRLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNqRSxJQUFJQztJQUVKLE1BQU1DLFFBQVE7SUFFZEQsU0FBU0csaUJBQWlCRixPQUFPQyxPQUFPTixPQUFPQyxPQUFPQyxVQUFVQztJQUVoRSxPQUFPQztBQUNUO0FBRUEsU0FBU0csaUJBQWlCRixLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUN2RSxJQUFJQztJQUVKLE1BQU1JLGNBQWNGLE1BQU1HLE1BQU07SUFFaEMsSUFBSUosVUFBVUcsYUFBYTtRQUN6QkosU0FBUyxBQUFDRixhQUFhLE9BQ1pBLGFBQ0U7SUFDZixPQUFPO1FBQ0wsTUFBTUgsT0FBT08sS0FBSyxDQUFDRCxNQUFNLEVBQ25CSyxnQkFBZ0IsQUFBQ1AsY0FBYyxPQUNiSixLQUFLWSxXQUFXLEtBQ2Q7UUFFMUJOO1FBRUFELFNBQVNNLGdCQUNFRSx1QkFBdUJiLE1BQU1NLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDLGFBQ2pFVSwwQkFBMEJkLE1BQU1NLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO0lBQ3JGO0lBRUEsT0FBT0M7QUFDVDtBQUVBLFNBQVNRLHVCQUF1QmIsSUFBSSxFQUFFTSxLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUNuRixJQUFJQztJQUVKLE1BQU1VLGNBQWNkLE1BQU1TLE1BQU07SUFFaENOLFlBQVk7UUFDVixJQUFJQztRQUVKQSxTQUFTRyxpQkFBaUJGLE9BQU9DLE9BQU9OLE9BQU9DLE9BQU9DLFVBQVVDO1FBRWhFLE9BQU9DO0lBQ1Q7SUFFQUEsU0FBU0wsS0FBS2dCLEtBQUssQ0FBQ2YsT0FBT0MsT0FBT0MsVUFBVUM7SUFFNUMsSUFBSSxDQUFDQyxRQUFRO1FBQ1gsTUFBTVksUUFBUUYsYUFBYyxHQUFHO1FBRS9CZCxNQUFNaUIsTUFBTSxDQUFDRDtJQUNmO0lBRUEsT0FBT1o7QUFDVDtBQUVBLFNBQVNTLDBCQUEwQmQsSUFBSSxFQUFFTSxLQUFLLEVBQUVDLEtBQUssRUFBRU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztJQUN0RixJQUFJQztJQUVKQSxTQUFTTCxLQUFLZ0IsS0FBSyxDQUFDZixPQUFPQyxPQUFPQyxVQUFVQztJQUU1QyxJQUFJQyxRQUFRO1FBQ1ZBLFNBQVNHLGlCQUFpQkYsT0FBT0MsT0FBT04sT0FBT0MsT0FBT0MsVUFBVUM7SUFDbEU7SUFFQSxPQUFPQztBQUNUIn0=