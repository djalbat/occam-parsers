"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParseTree;
    }
});
const _necessary = require("necessary");
const _constants = require("./constants");
const { last } = _necessary.arrayUtilities, { NEW_LINE_CHARACTER, SPACE_CHARACTER } = _necessary.characters;
class ParseTree {
    constructor(lines){
        this.lines = lines;
    }
    clone() {
        const lines = this.lines.slice(), parseTree = new ParseTree(lines);
        return parseTree;
    }
    getWidth() {
        let width;
        let linesLength = this.lines.length;
        if (linesLength === 0) {
            width = 0;
        } else {
            const lastLine = last(this.lines), lastLineLength = lastLine.length;
            width = lastLineLength; ///
        }
        return width;
    }
    getDepth() {
        const linesLength = this.lines.length, depth = linesLength; ///
        return depth;
    }
    forEachLine(callback) {
        this.lines.forEach(callback);
    }
    appendToTop(parseTree) {
        parseTree.forEachLine((line)=>{
            this.lines.unshift(line);
        });
    }
    appendToLeft(parseTree) {
        parseTree.forEachLine((line, index)=>{
            this.lines[index] = line + this.lines[index];
        });
    }
    appendToRight(parseTree) {
        parseTree.forEachLine((line, index)=>{
            this.lines[index] = this.lines[index] + line;
        });
    }
    appendToBottom(parseTree) {
        parseTree.forEachLine((line)=>{
            this.lines.push(line);
        });
    }
    addTopMargin(topMarginDepth) {
        const width = this.getWidth(), topMarginWidth = width, topMarginString = marginStringFromMarginWidth(topMarginWidth);
        for(let index = 0; index < topMarginDepth; index++){
            this.lines.unshift(topMarginString);
        }
    }
    addLeftMargin(leftMarginWidth) {
        const leftMarginString = marginStringFromMarginWidth(leftMarginWidth), linesLength = this.lines.length;
        for(let index = 0; index < linesLength; index++){
            this.lines[index] = leftMarginString + this.lines[index];
        }
    }
    addRightMargin(rightMarginWidth) {
        const rightMarginString = marginStringFromMarginWidth(rightMarginWidth), linesLength = this.lines.length;
        for(let index = 0; index < linesLength; index++){
            this.lines[index] = this.lines[index] + rightMarginString;
        }
    }
    addBottomMargin(bottomMarginDepth) {
        const width = this.getWidth(), bottomMarginWidth = width, bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);
        for(let index = 0; index < bottomMarginDepth; index++){
            this.lines.push(bottomMarginString);
        }
    }
    popLine() {
        return this.lines.pop();
    }
    shiftLine() {
        return this.lines.shift();
    }
    pushLine(line) {
        this.lines.push(line);
    }
    unshiftLine(line) {
        this.lines.unshift(line);
    }
    asString() {
        const string = this.lines.reduce((string, line)=>{
            string += line + NEW_LINE_CHARACTER;
            return string;
        }, _constants.EMPTY_STRING);
        return string;
    }
}
function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
    spaceCharacter = spaceCharacter || SPACE_CHARACTER;
    let marginString = _constants.EMPTY_STRING;
    for(let index = 0; index < marginWidth; index++){
        marginString += spaceCharacter;
    }
    return marginString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZVRyZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMsIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgTkVXX0xJTkVfQ0hBUkFDVEVSLCBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkVfQ0hBUkFDVEVSO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBTUEFDRV9DSEFSQUNURVI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIk5FV19MSU5FX0NIQVJBQ1RFUiIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJsaW5lcyIsImNsb25lIiwic2xpY2UiLCJwYXJzZVRyZWUiLCJnZXRXaWR0aCIsIndpZHRoIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGluZSIsImxhc3RMaW5lTGVuZ3RoIiwiZ2V0RGVwdGgiLCJkZXB0aCIsImZvckVhY2hMaW5lIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiYXBwZW5kVG9Ub3AiLCJsaW5lIiwidW5zaGlmdCIsImFwcGVuZFRvTGVmdCIsImluZGV4IiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvQm90dG9tIiwicHVzaCIsImFkZFRvcE1hcmdpbiIsInRvcE1hcmdpbkRlcHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHJpbmciLCJtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsImFkZFJpZ2h0TWFyZ2luIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyaW5nIiwiYWRkQm90dG9tTWFyZ2luIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0cmluZyIsInBvcExpbmUiLCJwb3AiLCJzaGlmdExpbmUiLCJzaGlmdCIsInB1c2hMaW5lIiwidW5zaGlmdExpbmUiLCJhc1N0cmluZyIsInN0cmluZyIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsIm1hcmdpbldpZHRoIiwic3BhY2VDaGFyYWN0ZXIiLCJtYXJnaW5TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7MkJBUHNCOzJCQUVkO0FBRTdCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLHlCQUFjLEVBQ3pCLEVBQUVDLGtCQUFrQixFQUFFQyxlQUFlLEVBQUUsR0FBR0MscUJBQVU7QUFFM0MsTUFBTUw7SUFDbkIsWUFBWU0sS0FBSyxDQUFFO1FBQ2pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFFBQVE7UUFDTixNQUFNRCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDRSxLQUFLLElBQ3hCQyxZQUFZLElB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