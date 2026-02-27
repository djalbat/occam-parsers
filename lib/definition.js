"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Definition;
    }
});
const _necessary = require("necessary");
const _parse = require("./utilities/parse");
const _constants = require("./constants");
const { SPACE_CHARACTER } = _necessary.characters;
class Definition {
    constructor(parts, precedence){
        this.parts = parts;
        this.precedence = precedence;
    }
    getParts() {
        return this.parts;
    }
    getPrecedence() {
        return this.precedence;
    }
    parse(childNodes, state, callback, callAhead) {
        let parsed;
        const nodes = childNodes, savedIndex = state.getSavedIndex();
        parsed = (0, _parse.parseParts)(this.parts, nodes, state, callback, callAhead);
        if (!parsed) {
            state.backtrack(savedIndex);
        }
        return parsed;
    }
    asString() {
        let string;
        const partsString = this.parts.reduce((partsString, part)=>{
            const partString = part.asString();
            if (partsString === _constants.EMPTY_STRING) {
                partsString = partString; ///
            } else {
                partsString = `${partsString} ${partString}`;
            }
            return partsString;
        }, _constants.EMPTY_STRING);
        string = partsString; ///
        if (this.precedence !== null) {
            const precedence = this.precedence === Infinity ? SPACE_CHARACTER : this.precedence;
            string = `${string} (${precedence})`;
        }
        return string;
    }
    static fromParts(Class, parts) {
        if (parts === undefined) {
            parts = Class; ///
            Class = Definition; ///
        }
        const precedence = null, definition = new Class(parts, precedence);
        return definition;
    }
    static fromPartsAndPrecedence(Class, parts, precedence) {
        if (precedence === undefined) {
            precedence = parts; ///
            parts = Class; ///
            Class = Definition; ///
        }
        const definition = new Class(parts, precedence);
        return definition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZpbml0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBwYXJzZVBhcnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhcnNlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgcHJlY2VkZW5jZSkge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLnByZWNlZGVuY2UgPSBwcmVjZWRlbmNlO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByZWNlZGVuY2U7XG4gIH1cblxuICBwYXJzZShjaGlsZE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHRoaXMucGFydHMsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZzsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG5cbiAgICBpZiAodGhpcy5wcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmVjZWRlbmNlID0gKHRoaXMucHJlY2VkZW5jZSA9PT0gSW5maW5pdHkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNQQUNFX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlY2VkZW5jZTtcblxuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSAoJHtwcmVjZWRlbmNlfSlgO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhcnRzKENsYXNzLCBwYXJ0cykge1xuICAgIGlmIChwYXJ0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJ0cyA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gRGVmaW5pdGlvbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBDbGFzcyhwYXJ0cywgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydHNBbmRQcmVjZWRlbmNlKENsYXNzLCBwYXJ0cywgcHJlY2VkZW5jZSkge1xuICAgIGlmIChwcmVjZWRlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZWNlZGVuY2UgPSBwYXJ0czsgLy8vXG5cbiAgICAgIHBhcnRzID0gQ2xhc3M7ICAvLy9cblxuICAgICAgQ2xhc3MgPSBEZWZpbml0aW9uOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IENsYXNzKHBhcnRzLCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbiIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJwYXJ0cyIsInByZWNlZGVuY2UiLCJnZXRQYXJ0cyIsImdldFByZWNlZGVuY2UiLCJwYXJzZSIsImNoaWxkTm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlUGFydHMiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInN0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJJbmZpbml0eSIsImZyb21QYXJ0cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiZGVmaW5pdGlvbiIsImZyb21QYXJ0c0FuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7MkJBUE07dUJBRUE7MkJBQ0U7QUFFN0IsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0MscUJBQVU7QUFFdkIsTUFBTUY7SUFDbkIsWUFBWUcsS0FBSyxFQUFFQyxVQUFVLENBQUU7UUFDN0IsSUFBSSxDQUFDRCxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztJQUNuQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxNQUFNQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7UUFDNUMsSUFBSUM7UUFFSixNQUFNQyxRQUFRTCxZQUNSTSxhQUFhTCxNQUFNTSxhQUFhO1FBRXRDSCxTQUFTSSxJQUFBQSxpQkFBVSxFQUFDLElBQUksQ0FBQ2IsS0FBSyxFQUFFVSxPQUFPSixPQUFPQyxVQUFVQztRQUV4RCxJQUFJLENBQUNDLFFBQVE7WUFDWEgsTUFBTVEsU0FBUyxDQUFDSDtRQUNsQjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQU0sV0FBVztRQUNULElBQUlDO1FBRUosTUFBTUMsY0FBYyxJQUFJLENBQUNqQixLQUFLLENBQUNrQixNQUFNLENBQUMsQ0FBQ0QsYUFBYUU7WUFDNUMsTUFBTUMsYUFBYUQsS0FBS0osUUFBUTtZQUVoQyxJQUFJRSxnQkFBZ0JJLHVCQUFZLEVBQUU7Z0JBQ2hDSixjQUFjRyxZQUFZLEdBQUc7WUFDL0IsT0FBTztnQkFDTEgsY0FBYyxHQUFHQSxZQUFZLENBQUMsRUFBRUcsWUFBWTtZQUM5QztZQUVBLE9BQU9IO1FBQ1QsR0FBR0ksdUJBQVk7UUFFckJMLFNBQVNDLGFBQWEsR0FBRztRQUV6QixJQUFJLElBQUksQ0FBQ2hCLFVBQVUsS0FBSyxNQUFNO1lBQzVCLE1BQU1BLGFBQWEsQUFBQyxJQUFJLENBQUNBLFVBQVUsS0FBS3FCLFdBQ25CeEIsa0JBQ0UsSUFBSSxDQUFDRyxVQUFVO1lBRXRDZSxTQUFTLEdBQUdBLE9BQU8sRUFBRSxFQUFFZixXQUFXLENBQUMsQ0FBQztRQUN0QztRQUVBLE9BQU9lO0lBQ1Q7SUFFQSxPQUFPTyxVQUFVQyxLQUFLLEVBQUV4QixLQUFLLEVBQUU7UUFDN0IsSUFBSUEsVUFBVXlCLFdBQVc7WUFDdkJ6QixRQUFRd0IsT0FBUSxHQUFHO1lBRW5CQSxRQUFRM0IsWUFBWSxHQUFHO1FBQ3pCO1FBRUEsTUFBTUksYUFBYSxNQUNieUIsYUFBYSxJQUFJRixNQUFNeEIsT0FBT0M7UUFFcEMsT0FBT3lCO0lBQ1Q7SUFFQSxPQUFPQyx1QkFBdUJILEtBQUssRUFBRXhCLEtBQUssRUFBRUMsVUFBVSxFQUFFO1FBQ3RELElBQUlBLGVBQWV3QixXQUFXO1lBQzVCeEIsYUFBYUQsT0FBTyxHQUFHO1lBRXZCQSxRQUFRd0IsT0FBUSxHQUFHO1lBRW5CQSxRQUFRM0IsWUFBWSxHQUFHO1FBQ3pCO1FBRUEsTUFBTTZCLGFBQWEsSUFBSUYsTUFBTXhCLE9BQU9DO1FBRXBDLE9BQU95QjtJQUNUO0FBQ0YifQ==