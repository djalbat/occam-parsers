"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PartChoice;
    }
});
const _necessary = require("necessary");
const { SPACE_CHARACTER } = _necessary.characters;
class PartChoice {
    constructor(part, precedence){
        this.part = part;
        this.precedence = precedence;
    }
    getPart() {
        return this.part;
    }
    getPrecedence() {
        return this.precedence;
    }
    asString() {
        let string;
        const partString = this.part.asString();
        string = partString; ///
        if (this.precedence !== null) {
            const precedence = this.precedence === Infinity ? SPACE_CHARACTER : this.precedence;
            string = `${string} (${precedence})`;
        }
        return string;
    }
    static fromPart(part) {
        const precedence = null, partChoice = new PartChoice(part, precedence);
        return partChoice;
    }
    static fromPartAndPrecedence(part, precedence) {
        const partChoice = new PartChoice(part, precedence);
        return partChoice;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJ0Q2hvaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IFNQQUNFX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydENob2ljZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnQsIHByZWNlZGVuY2UpIHtcbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICAgIHRoaXMucHJlY2VkZW5jZSA9IHByZWNlZGVuY2U7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBnZXRQcmVjZWRlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByZWNlZGVuY2U7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpO1xuXG4gICAgc3RyaW5nID0gcGFydFN0cmluZzsgIC8vL1xuXG4gICAgaWYgKHRoaXMucHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJlY2VkZW5jZSA9ICh0aGlzLnByZWNlZGVuY2UgPT09IEluZmluaXR5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTUEFDRV9DSEFSQUNURVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWNlZGVuY2U7XG5cbiAgICAgIHN0cmluZyA9IGAke3N0cmluZ30gKCR7cHJlY2VkZW5jZX0pYDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0KHBhcnQpIHtcbiAgICBjb25zdCBwcmVjZWRlbmNlID0gbnVsbCxcbiAgICAgICAgICBwYXJ0Q2hvaWNlID0gbmV3IFBhcnRDaG9pY2UocGFydCwgcHJlY2VkZW5jZSk7XG5cbiAgICByZXR1cm4gcGFydENob2ljZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFByZWNlZGVuY2UocGFydCwgcHJlY2VkZW5jZSkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2UgPSBuZXcgUGFydENob2ljZShwYXJ0LCBwcmVjZWRlbmNlKTtcblxuICAgIHJldHVybiBwYXJ0Q2hvaWNlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFydENob2ljZSIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJwYXJ0IiwicHJlY2VkZW5jZSIsImdldFBhcnQiLCJnZXRQcmVjZWRlbmNlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJwYXJ0U3RyaW5nIiwiSW5maW5pdHkiLCJmcm9tUGFydCIsInBhcnRDaG9pY2UiLCJmcm9tUGFydEFuZFByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7MkJBSk07QUFFM0IsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR0MscUJBQVU7QUFFdkIsTUFBTUY7SUFDbkIsWUFBWUcsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDNUIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxXQUFXO1FBQ1QsSUFBSUM7UUFFSixNQUFNQyxhQUFhLElBQUksQ0FBQ04sSUFBSSxDQUFDSSxRQUFRO1FBRXJDQyxTQUFTQyxZQUFhLEdBQUc7UUFFekIsSUFBSSxJQUFJLENBQUNMLFVBQVUsS0FBSyxNQUFNO1lBQzVCLE1BQU1BLGFBQWEsQUFBQyxJQUFJLENBQUNBLFVBQVUsS0FBS00sV0FDbkJULGtCQUNFLElBQUksQ0FBQ0csVUFBVTtZQUV0Q0ksU0FBUyxHQUFHQSxPQUFPLEVBQUUsRUFBRUosV0FBVyxDQUFDLENBQUM7UUFDdEM7UUFFQSxPQUFPSTtJQUNUO0lBRUEsT0FBT0csU0FBU1IsSUFBSSxFQUFFO1FBQ3BCLE1BQU1DLGFBQWEsTUFDYlEsYUFBYSxJQUFJWixXQUFXRyxNQUFNQztRQUV4QyxPQUFPUTtJQUNUO0lBRUEsT0FBT0Msc0JBQXNCVixJQUFJLEVBQUVDLFVBQVUsRUFBRTtRQUM3QyxNQUFNUSxhQUFhLElBQUlaLFdBQVdHLE1BQU1DO1FBRXhDLE9BQU9RO0lBQ1Q7QUFDRiJ9