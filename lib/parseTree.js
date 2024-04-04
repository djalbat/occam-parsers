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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZVRyZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMsIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgTkVXX0xJTkVfQ0hBUkFDVEVSLCBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkVfQ0hBUkFDVEVSO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBTUEFDRV9DSEFSQUNURVI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIk5FV19MSU5FX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJTUEFDRV9DSEFSQUNURVIiLCJsaW5lcyIsImNsb25lIiwic2xpY2UiLCJwYXJzZVRyZWUiLCJnZXRXaWR0aCIsIndpZHRoIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGluZSIsImxhc3RMaW5lTGVuZ3RoIiwiZ2V0RGVwdGgiLCJkZXB0aCIsImZvckVhY2hMaW5lIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiYXBwZW5kVG9Ub3AiLCJsaW5lIiwidW5zaGlmdCIsImFwcGVuZFRvTGVmdCIsImluZGV4IiwiYXBwZW5kVG9SaWdodCIsImFwcGVuZFRvQm90dG9tIiwicHVzaCIsImFkZFRvcE1hcmdpbiIsInRvcE1hcmdpbkRlcHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHJpbmciLCJtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsImFkZFJpZ2h0TWFyZ2luIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyaW5nIiwiYWRkQm90dG9tTWFyZ2luIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0cmluZyIsInBvcExpbmUiLCJwb3AiLCJzaGlmdExpbmUiLCJzaGlmdCIsInB1c2hMaW5lIiwidW5zaGlmdExpbmUiLCJhc1N0cmluZyIsInN0cmluZyIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsIm1hcmdpbldpZHRoIiwic3BhY2VDaGFyYWN0ZXIiLCJtYXJnaW5TdHJpbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3lCQVBzQjt5QkFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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