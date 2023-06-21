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
    parseParts: function() {
        return parseParts;
    },
    parsePartOfParts: function() {
        return parsePartOfParts;
    }
});
var _necessary = require("necessary");
var _part = require("./part");
var push = _necessary.arrayUtilities.push;
function parseParts(parts, nodes, index, state, callback) {
    var parsed;
    var partsLength = parts.length;
    if (index === partsLength) {
        parsed = callback !== null ? callback() : true;
    } else {
        var part = parts[index];
        parsed = parsePartOfParts(part, parts, nodes, index, state, callback);
    }
    return parsed;
}
function parsePartOfParts(part, parts, nodes, index, state, callback) {
    var parsed;
    if (callback !== null) {
        var partsNodes;
        index++;
        parsed = part.parse(nodes, state, function() {
            partsNodes = [];
            var parsed = parseParts(parts, partsNodes, index, state, callback);
            return parsed;
        });
        if (parsed) {
            push(nodes, partsNodes);
        }
    } else {
        var partRuleNamePartWithLookAhead = (0, _part.isPartRuleNamePartWithLookAhead)(part);
        if (partRuleNamePartWithLookAhead) {
            var ruleNamePart = part; ///
            var partsNodes1;
            index++;
            parsed = ruleNamePart.parse(nodes, state, function() {
                partsNodes1 = [];
                var parsed = parseParts(parts, partsNodes1, index, state, callback);
                return parsed;
            });
            if (parsed) {
                push(nodes, partsNodes1);
            }
        } else {
            parsed = part.parse(nodes, state, callback);
            if (parsed) {
                index++;
                parsed = parseParts(parts, nodes, index, state, callback);
            }
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbG9va0FoZWFkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgIHBhcnNlZCA9IChjYWxsYmFjayAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkgOlxuICAgICAgICAgICAgICAgICAgdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwYXJ0ID0gcGFydHNbaW5kZXhdO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0T2ZQYXJ0cyhwYXJ0LCBwYXJ0cywgbm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUGFydE9mUGFydHMocGFydCwgcGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgbGV0IHBhcnRzTm9kZXM7XG5cbiAgICBpbmRleCsrO1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgIHBhcnRzTm9kZXMgPSBbXTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lUGFydFdpdGhMb29rQWhlYWQgPSBpc1BhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKHBhcnQpO1xuXG4gICAgaWYgKHBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkKSB7XG4gICAgICBjb25zdCBydWxlTmFtZVBhcnQgPSBwYXJ0OyAvLy9cblxuICAgICAgbGV0IHBhcnRzTm9kZXM7XG5cbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHBhcnNlZCA9IHJ1bGVOYW1lUGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIHBhcnRzTm9kZXMsIGluZGV4LCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHMsIG5vZGVzLCBpbmRleCwgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbInBhcnNlUGFydHMiLCJwYXJzZVBhcnRPZlBhcnRzIiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJub2RlcyIsImluZGV4Iiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydCIsInBhcnRzTm9kZXMiLCJwYXJzZSIsInBhcnRSdWxlTmFtZVBhcnRXaXRoTG9va0FoZWFkIiwiaXNQYXJ0UnVsZU5hbWVQYXJ0V2l0aExvb2tBaGVhZCIsInJ1bGVOYW1lUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxVQUFVO2VBQVZBOztJQWtCQUMsZ0JBQWdCO2VBQWhCQTs7O3lCQXhCZTtvQkFFaUI7QUFFaEQsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQ7QUFFRCxTQUFTRixXQUFXSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDN0QsSUFBSUM7SUFFSixJQUFNQyxjQUFjTixNQUFNTztJQUUxQixJQUFJTCxVQUFVSSxhQUFhO1FBQ3pCRCxTQUFTLEFBQUNELGFBQWEsT0FDWEEsYUFDRTtJQUNoQixPQUFPO1FBQ0wsSUFBTUksT0FBT1IsS0FBSyxDQUFDRSxNQUFNO1FBRXpCRyxTQUFTUixpQkFBaUJXLE1BQU1SLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DO0lBQzlEO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVNSLGlCQUFpQlcsSUFBSSxFQUFFUixLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7SUFDekUsSUFBSUM7SUFFSixJQUFJRCxhQUFhLE1BQU07UUFDckIsSUFBSUs7UUFFSlA7UUFFQUcsU0FBU0csS0FBS0UsTUFBTVQsT0FBT0UsT0FBTztZQUNoQ00sYUFBYSxFQUFFO1lBRWYsSUFBTUosU0FBU1QsV0FBV0ksT0FBT1MsWUFBWVAsT0FBT0MsT0FBT0M7WUFFM0QsT0FBT0M7UUFDVDtRQUVBLElBQUlBLFFBQVE7WUFDVlAsS0FBS0csT0FBT1E7UUFDZDtJQUNGLE9BQU87UUFDTCxJQUFNRSxnQ0FBZ0NDLElBQUFBLHVDQUFnQ0o7UUFFdEUsSUFBSUcsK0JBQStCO1lBQ2pDLElBQU1FLGVBQWVMLE1BQU0sR0FBRztZQUU5QixJQUFJQztZQUVKUDtZQUVBRyxTQUFTUSxhQUFhSCxNQUFNVCxPQUFPRSxPQUFPO2dCQUN4Q00sY0FBYSxFQUFFO2dCQUVmLElBQU1KLFNBQVNULFdBQVdJLE9BQU9TLGFBQVlQLE9BQU9DLE9BQU9DO2dCQUUzRCxPQUFPQztZQUNUO1lBRUEsSUFBSUEsUUFBUTtnQkFDVlAsS0FBS0csT0FBT1E7WUFDZDtRQUNGLE9BQU87WUFDTEosU0FBU0csS0FBS0UsTUFBTVQsT0FBT0UsT0FBT0M7WUFFbEMsSUFBSUMsUUFBUTtnQkFDVkg7Z0JBRUFHLFNBQVNULFdBQVdJLE9BQU9DLE9BQU9DLE9BQU9DLE9BQU9DO1lBQ2xEO1FBQ0Y7SUFDRjtJQUVBLE9BQU9DO0FBQ1QifQ==