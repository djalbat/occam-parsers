"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonPart;
    }
});
const _occamlexers = require("occam-lexers");
const _terminal = /*#__PURE__*/ _interop_require_default(require("../../part/terminal"));
const _epsilon = /*#__PURE__*/ _interop_require_default(require("../../node/terminal/epsilon"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { epsilon } = _occamlexers.specialSymbols;
class EpsilonPart extends _terminal.default {
    parse(nodes, state, callback, callAhead) {
        let parsed;
        const savedIndex = state.getSavedIndex(), epsilonBNFNode = _epsilon.default.fromNothing();
        parsed = epsilonBNFNode !== null;
        if (parsed) {
            nodes.push(epsilonBNFNode);
            if (parsed) {
                if (callAhead !== null) {
                    parsed = callAhead();
                }
            }
        }
        if (!parsed) {
            state.backtrack(savedIndex);
        }
        return parsed;
    }
    asString() {
        const string = epsilon; ///
        return string;
    }
    static fromNothing() {
        const epsilonPart = new EpsilonPart();
        return epsilonPart;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL2Vwc2lsb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgRXBzaWxvbkJORk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvdGVybWluYWwvZXBzaWxvblwiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uUGFydCBleHRlbmRzIFRlcm1pbmFsUGFydCB7XG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGVwc2lsb25CTkZOb2RlID0gRXBzaWxvbkJORk5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIHBhcnNlZCA9IChlcHNpbG9uQk5GTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKGVwc2lsb25CTkZOb2RlKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBpZiAoY2FsbEFoZWFkICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbEFoZWFkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBlcHNpbG9uOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKTtcblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwc2lsb25QYXJ0IiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiVGVybWluYWxQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsImVwc2lsb25CTkZOb2RlIiwiRXBzaWxvbkJORk5vZGUiLCJmcm9tTm90aGluZyIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInN0cmluZyIsImVwc2lsb25QYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7OzZCQVBVO2lFQUVOO2dFQUNFOzs7Ozs7QUFFM0IsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0MsMkJBQWM7QUFFbkIsTUFBTUYsb0JBQW9CRyxpQkFBWTtJQUNuREMsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFO1FBQ3ZDLElBQUlDO1FBRUosTUFBTUMsYUFBYUosTUFBTUssYUFBYSxJQUNoQ0MsaUJBQWlCQyxnQkFBYyxDQUFDQyxXQUFXO1FBRWpETCxTQUFVRyxtQkFBbUI7UUFFN0IsSUFBSUgsUUFBUTtZQUNWSixNQUFNVSxJQUFJLENBQUNIO1lBRVgsSUFBSUgsUUFBUTtnQkFDVixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCQyxTQUFTRDtnQkFDWDtZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNDLFFBQVE7WUFDWEgsTUFBTVUsU0FBUyxDQUFDTjtRQUNsQjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQVEsV0FBVztRQUNULE1BQU1DLFNBQVNqQixTQUFTLEdBQUc7UUFFM0IsT0FBT2lCO0lBQ1Q7SUFFQSxPQUFPSixjQUFjO1FBQ25CLE1BQU1LLGNBQWMsSUFBSW5CO1FBRXhCLE9BQU9tQjtJQUNUO0FBQ0YifQ==