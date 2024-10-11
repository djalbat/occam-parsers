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
var _necessary = require("necessary");
var _constants = require("./constants");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var last = _necessary.arrayUtilities.last, NEW_LINE_CHARACTER = _necessary.characters.NEW_LINE_CHARACTER, SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
var ParseTree = /*#__PURE__*/ function() {
    function ParseTree(lines) {
        _class_call_check(this, ParseTree);
        this.lines = lines;
    }
    _create_class(ParseTree, [
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
                    var lastLine = last(this.lines), lastLineLength = lastLine.length;
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
                var string = this.lines.reduce(function(string, line) {
                    string += line + NEW_LINE_CHARACTER;
                    return string;
                }, _constants.EMPTY_STRING);
                return string;
            }
        }
    ]);
    return ParseTree;
}();
function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
    spaceCharacter = spaceCharacter || SPACE_CHARACTER;
    var marginString = _constants.EMPTY_STRING;
    for(var index = 0; index < marginWidth; index++){
        marginString += spaceCharacter;
    }
    return marginString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZVRyZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMsIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgTkVXX0xJTkVfQ0hBUkFDVEVSLCBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkVfQ0hBUkFDVEVSO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBTUEFDRV9DSEFSQUNURVI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIk5FV19MSU5FX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJTUEFDRV9DSEFSQUNURVIiLCJsaW5lcyIsImNsb25lIiwic2xpY2UiLCJwYXJzZVRyZWUiLCJnZXRXaWR0aCIsIndpZHRoIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGluZSIsImxhc3RMaW5lTGVuZ3RoIiwiZ2V0RGVwdGgiLCJkZXB0aCIsImZvckVhY2hMaW5lIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiYXBwZW5kVG9Ub3AiLCJsaW5lIiwidW5zaGlmdCIsImFwcGVuZFRvTGVmdCIsImluZGV4IiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvQm90dG9tIiwicHVzaCIsImFkZFRvcE1hcmdpbiIsInRvcE1hcmdpbkRlcHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHJpbmciLCJtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsImFkZFJpZ2h0TWFyZ2luIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyaW5nIiwiYWRkQm90dG9tTWFyZ2luIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0cmluZyIsInBvcExpbmUiLCJwb3AiLCJzaGlmdExpbmUiLCJzaGlmdCIsInB1c2hMaW5lIiwidW5zaGlmdExpbmUiLCJhc1N0cmluZyIsInN0cmluZyIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsIm1hcmdpbldpZHRoIiwic3BhY2VDaGFyYWN0ZXIiLCJtYXJnaW5TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBzQjt5QkFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDQUUscUJBQXdDQyxxQkFBVSxDQUFsREQsb0JBQW9CRSxrQkFBb0JELHFCQUFVLENBQTlCQztBQUViLElBQUEsQUFBTUwsMEJBQU47YUFBTUEsVUFDUE0sS0FBSztnQ0FERU47UUFFakIsSUFBSSxDQUFDTSxLQUFLLEdBQUdBOztrQkFGSU47O1lBS25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0Us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