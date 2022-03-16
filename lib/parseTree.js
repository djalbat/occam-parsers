"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _array = require("./utilities/array");
var _constants = require("./constants");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var NEW_LINE_CHARACTER = _necessary.characters.NEW_LINE_CHARACTER, SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
var ParseTree = /*#__PURE__*/ function() {
    function ParseTree(lines) {
        _classCallCheck(this, ParseTree);
        this.lines = lines;
    }
    _createClass(ParseTree, [
        {
            key: "clone",
            value: function clone() {
                var lines = this.lines.slice(), parseTree = new ParseTree(lines);
                return parseTree;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                var width;
                var linesLength = this.lines.length;
                if (linesLength === 0) {
                    width = 0;
                } else {
                    var lastLine = (0, _array).last(this.lines), lastLineLength = lastLine.length;
                    width = lastLineLength; ///
                }
                return width;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var linesLength = this.lines.length, depth = linesLength; ///
                return depth;
            }
        },
        {
            key: "forEachLine",
            value: function forEachLine(callback) {
                this.lines.forEach(callback);
            }
        },
        {
            key: "appendToTop",
            value: function appendToTop(parseTree) {
                var _this = this;
                parseTree.forEachLine(function(line) {
                    _this.lines.unshift(line);
                });
            }
        },
        {
            key: "appendToLeft",
            value: function appendToLeft(parseTree) {
                var _this = this;
                parseTree.forEachLine(function(line, index) {
                    _this.lines[index] = line + _this.lines[index];
                });
            }
        },
        {
            key: "appendToRight",
            value: function appendToRight(parseTree) {
                var _this = this;
                parseTree.forEachLine(function(line, index) {
                    _this.lines[index] = _this.lines[index] + line;
                });
            }
        },
        {
            key: "appendToBottom",
            value: function appendToBottom(parseTree) {
                var _this = this;
                parseTree.forEachLine(function(line) {
                    _this.lines.push(line);
                });
            }
        },
        {
            key: "addTopMargin",
            value: function addTopMargin(topMarginDepth) {
                var width = this.getWidth(), topMarginWidth = width, topMarginString = marginStringFromMarginWidth(topMarginWidth);
                for(var index = 0; index < topMarginDepth; index++){
                    this.lines.unshift(topMarginString);
                }
            }
        },
        {
            key: "addLeftMargin",
            value: function addLeftMargin(leftMarginWidth) {
                var leftMarginString = marginStringFromMarginWidth(leftMarginWidth), linesLength = this.lines.length;
                for(var index = 0; index < linesLength; index++){
                    this.lines[index] = leftMarginString + this.lines[index];
                }
            }
        },
        {
            key: "addRightMargin",
            value: function addRightMargin(rightMarginWidth) {
                var rightMarginString = marginStringFromMarginWidth(rightMarginWidth), linesLength = this.lines.length;
                for(var index = 0; index < linesLength; index++){
                    this.lines[index] = this.lines[index] + rightMarginString;
                }
            }
        },
        {
            key: "addBottomMargin",
            value: function addBottomMargin(bottomMarginDepth) {
                var width = this.getWidth(), bottomMarginWidth = width, bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);
                for(var index = 0; index < bottomMarginDepth; index++){
                    this.lines.push(bottomMarginString);
                }
            }
        },
        {
            key: "popLine",
            value: function popLine() {
                return this.lines.pop();
            }
        },
        {
            key: "shiftLine",
            value: function shiftLine() {
                return this.lines.shift();
            }
        },
        {
            key: "pushLine",
            value: function pushLine(line) {
                this.lines.push(line);
            }
        },
        {
            key: "unshiftLine",
            value: function unshiftLine(line) {
                this.lines.unshift(line);
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string1 = this.lines.reduce(function(string, line) {
                    string += line + NEW_LINE_CHARACTER;
                    return string;
                }, _constants.EMPTY_STRING);
                return string1;
            }
        }
    ]);
    return ParseTree;
}();
exports.default = ParseTree;
function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
    spaceCharacter = spaceCharacter || SPACE_CHARACTER;
    var marginString = _constants.EMPTY_STRING;
    for(var index = 0; index < marginWidth; index++){
        marginString += spaceCharacter;
    }
    return marginString;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZVRyZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgTkVXX0xJTkVfQ0hBUkFDVEVSLCBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkVfQ0hBUkFDVEVSO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBTUEFDRV9DSEFSQUNURVI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIk5FV19MSU5FX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJTUEFDRV9DSEFSQUNURVIiLCJQYXJzZVRyZWUiLCJsaW5lcyIsImNsb25lIiwic2xpY2UiLCJwYXJzZVRyZWUiLCJnZXRXaWR0aCIsIndpZHRoIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGluZSIsImxhc3QiLCJsYXN0TGluZUxlbmd0aCIsImdldERlcHRoIiwiZGVwdGgiLCJmb3JFYWNoTGluZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImFwcGVuZFRvVG9wIiwibGluZSIsInVuc2hpZnQiLCJhcHBlbmRUb0xlZnQiLCJpbmRleCIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb0JvdHRvbSIsInB1c2giLCJhZGRUb3BNYXJnaW4iLCJ0b3BNYXJnaW5EZXB0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5TdHJpbmciLCJhZGRSaWdodE1hcmdpbiIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImFkZEJvdHRvbU1hcmdpbiIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3BMaW5lIiwicG9wIiwic2hpZnRMaW5lIiwic2hpZnQiLCJwdXNoTGluZSIsInVuc2hpZnRMaW5lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFMkIsR0FBVyxDQUFYLFVBQVc7QUFFakIsR0FBbUIsQ0FBbkIsTUFBbUI7QUFFWCxHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7OzhEQU4xQztzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7O0FBUUEsR0FBSyxDQUFHQSxrQkFBa0IsR0FBc0JDLFVBQVUsWUFBbERELGtCQUFrQixFQUFFRSxlQUFlLEdBQUtELFVBQVUsWUFBOUJDLGVBQWU7QUFFNUIsR0FBSyxDQUFDQyxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNo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