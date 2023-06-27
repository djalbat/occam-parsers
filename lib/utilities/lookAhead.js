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
var _part = require("./part");
var push = _necessary.arrayUtilities.push;
function parsePart(part, nodes, state, callback) {
    var parsed;
    var parts = [
        part
    ];
    parsed = parseParts(parts, nodes, state, callback);
    return parsed;
}
function parseParts(parts, nodes, state, callback) {
    var index = 0, parsed = parsePartOfParts(index, parts, nodes, state, callback);
    return parsed;
}
function parsePartOfParts(index, parts, nodes, state, callback) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback() : true;
    } else {
        var part = parts[index];
        if (callback !== null) {
            index++;
            var intermediatePartCallback = function() {
                var parsed = parsePartOfParts(index, parts, nodes, state, callback);
                return parsed;
            };
            Object.assign(intermediatePartCallback, {
                callback: callback,
                part: part
            });
            state.callbacks.push(intermediatePartCallback);
            parsed = part.parse(nodes, state, intermediatePartCallback);
            state.callbacks.pop();
        } else {
            var partLookAhead = (0, _part.isPartLookAhead)(part);
            if (partLookAhead) {
                var remainingNodes;
                index++;
                var initialPartCallback = function() {
                    remainingNodes = [];
                    var parsed = parsePartOfParts(index, parts, remainingNodes, state, callback);
                    return parsed;
                };
                Object.assign(initialPartCallback, {
                    callback: callback,
                    part: part
                });
                state.callbacks.push(initialPartCallback);
                parsed = part.parse(nodes, state, initialPartCallback);
                state.callbacks.pop();
                if (parsed) {
                    push(nodes, remainingNodes);
                }
            } else {
                parsed = part.parse(nodes, state, callback);
                if (parsed) {
                    index++;
                    parsed = parsePartOfParts(index, parts, nodes, state, callback);
                }
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0TG9va0FoZWFkIH0gZnJvbSBcIi4vcGFydFwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBwYXJ0cyA9IFtcbiAgICBwYXJ0XG4gIF07XG5cbiAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnRPZlBhcnRzKGluZGV4LCBwYXJ0cywgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0T2ZQYXJ0cyhpbmRleCwgcGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgcGFyc2VkID0gKGNhbGxiYWNrICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBjYWxsYmFjaygpIDpcbiAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICBpbmRleCsrO1xuXG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVQYXJ0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihpbnRlcm1lZGlhdGVQYXJ0Q2FsbGJhY2ssIHtcbiAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgIHBhcnRcbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZS5jYWxsYmFja3MucHVzaChpbnRlcm1lZGlhdGVQYXJ0Q2FsbGJhY2spO1xuXG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgaW50ZXJtZWRpYXRlUGFydENhbGxiYWNrKTtcblxuICAgICAgc3RhdGUuY2FsbGJhY2tzLnBvcCgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnRMb29rQWhlYWQgPSBpc1BhcnRMb29rQWhlYWQocGFydCk7XG5cbiAgICAgIGlmIChwYXJ0TG9va0FoZWFkKSB7XG4gICAgICAgIGxldCByZW1haW5pbmdOb2RlcztcblxuICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgIGNvbnN0IGluaXRpYWxQYXJ0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgcmVtYWluaW5nTm9kZXMgPSBbXTtcblxuICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCByZW1haW5pbmdOb2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbml0aWFsUGFydENhbGxiYWNrLCB7XG4gICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgcGFydFxuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0ZS5jYWxsYmFja3MucHVzaChpbml0aWFsUGFydENhbGxiYWNrKTtcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgaW5pdGlhbFBhcnRDYWxsYmFjayk7XG5cbiAgICAgICAgc3RhdGUuY2FsbGJhY2tzLnBvcCgpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwdXNoKG5vZGVzLCByZW1haW5pbmdOb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgaW5kZXgrKztcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydE9mUGFydHMoaW5kZXgsIHBhcnRzLCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iXSwibmFtZXMiOlsicGFyc2VQYXJ0IiwicGFyc2VQYXJ0cyIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInBhcnQiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJwYXJ0cyIsImluZGV4IiwicGFyc2VQYXJ0T2ZQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwiaW50ZXJtZWRpYXRlUGFydENhbGxiYWNrIiwiT2JqZWN0IiwiYXNzaWduIiwiY2FsbGJhY2tzIiwicGFyc2UiLCJwb3AiLCJwYXJ0TG9va0FoZWFkIiwiaXNQYXJ0TG9va0FoZWFkIiwicmVtYWluaW5nTm9kZXMiLCJpbml0aWFsUGFydENhbGxiYWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLFNBQVM7ZUFBVEE7O0lBWUFDLFVBQVU7ZUFBVkE7Ozt5QkFsQmU7b0JBRUM7QUFFaEMsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQ7QUFFRCxTQUFTRixVQUFVSSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRO0lBQ3BELElBQUlDO0lBRUosSUFBTUMsUUFBUTtRQUNaTDtLQUNEO0lBRURJLFNBQVNQLFdBQVdRLE9BQU9KLE9BQU9DLE9BQU9DO0lBRXpDLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTUCxXQUFXUSxLQUFLLEVBQUVKLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRO0lBQ3RELElBQU1HLFFBQVEsR0FDUkYsU0FBU0csaUJBQWlCRCxPQUFPRCxPQUFPSixPQUFPQyxPQUFPQztJQUU1RCxPQUFPQztBQUNUO0FBRUEsU0FBU0csaUJBQWlCRCxLQUFLLEVBQUVELEtBQUssRUFBRUosS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDNUQsSUFBSUM7SUFFSixJQUFNSSxjQUFjSCxNQUFNSTtJQUUxQixJQUFJSCxVQUFVRSxhQUFhO1FBQ3pCSixTQUFTLEFBQUNELGFBQWEsT0FDWkEsYUFDRTtJQUNmLE9BQU87UUFDTCxJQUFNSCxPQUFPSyxLQUFLLENBQUNDLE1BQU07UUFFekIsSUFBSUgsYUFBYSxNQUFNO1lBQ3JCRztZQUVBLElBQU1JLDJCQUEyQjtnQkFDL0IsSUFBTU4sU0FBU0csaUJBQWlCRCxPQUFPRCxPQUFPSixPQUFPQyxPQUFPQztnQkFFNUQsT0FBT0M7WUFDVDtZQUVBTyxPQUFPQyxPQUFPRiwwQkFBMEI7Z0JBQ3RDUCxVQUFBQTtnQkFDQUgsTUFBQUE7WUFDRjtZQUVBRSxNQUFNVyxVQUFVZixLQUFLWTtZQUVyQk4sU0FBU0osS0FBS2MsTUFBTWIsT0FBT0MsT0FBT1E7WUFFbENSLE1BQU1XLFVBQVVFO1FBRWxCLE9BQU87WUFDTCxJQUFNQyxnQkFBZ0JDLElBQUFBLHVCQUFnQmpCO1lBRXRDLElBQUlnQixlQUFlO2dCQUNqQixJQUFJRTtnQkFFSlo7Z0JBRUEsSUFBTWEsc0JBQXNCO29CQUMxQkQsaUJBQWlCLEVBQUU7b0JBRW5CLElBQU1kLFNBQVNHLGlCQUFpQkQsT0FBT0QsT0FBT2EsZ0JBQWdCaEIsT0FBT0M7b0JBRXJFLE9BQU9DO2dCQUNUO2dCQUVBTyxPQUFPQyxPQUFPTyxxQkFBcUI7b0JBQ2pDaEIsVUFBQUE7b0JBQ0FILE1BQUFBO2dCQUNGO2dCQUVBRSxNQUFNVyxVQUFVZixLQUFLcUI7Z0JBRXJCZixTQUFTSixLQUFLYyxNQUFNYixPQUFPQyxPQUFPaUI7Z0JBRWxDakIsTUFBTVcsVUFBVUU7Z0JBRWhCLElBQUlYLFFBQVE7b0JBQ1ZOLEtBQUtHLE9BQU9pQjtnQkFDZDtZQUVGLE9BQU87Z0JBQ0xkLFNBQVNKLEtBQUtjLE1BQU1iLE9BQU9DLE9BQU9DO2dCQUVsQyxJQUFJQyxRQUFRO29CQUNWRTtvQkFFQUYsU0FBU0csaUJBQWlCRCxPQUFPRCxPQUFPSixPQUFPQyxPQUFPQztnQkFDeEQ7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQztBQUNUIn0=