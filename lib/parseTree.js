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
                    var lastLine = (0, _array.last)(this.lines), lastLineLength = lastLine.length;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZVRyZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgTkVXX0xJTkVfQ0hBUkFDVEVSLCBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkVfQ0hBUkFDVEVSO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBTUEFDRV9DSEFSQUNURVI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsIk5FV19MSU5FX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJTUEFDRV9DSEFSQUNURVIiLCJsaW5lcyIsImNsb25lIiwic2xpY2UiLCJwYXJzZVRyZWUiLCJnZXRXaWR0aCIsIndpZHRoIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGluZSIsImxhc3QiLCJsYXN0TGluZUxlbmd0aCIsImdldERlcHRoIiwiZGVwdGgiLCJmb3JFYWNoTGluZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImFwcGVuZFRvVG9wIiwibGluZSIsInVuc2hpZnQiLCJhcHBlbmRUb0xlZnQiLCJpbmRleCIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb0JvdHRvbSIsInB1c2giLCJhZGRUb3BNYXJnaW4iLCJ0b3BNYXJnaW5EZXB0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5TdHJpbmciLCJhZGRSaWdodE1hcmdpbiIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImFkZEJvdHRvbU1hcmdpbiIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3BMaW5lIiwicG9wIiwic2hpZnRMaW5lIiwic2hpZnQiLCJwdXNoTGluZSIsInVuc2hpZnRMaW5lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFVUUEsU0FBUzs7O3lCQVJILFdBQVc7cUJBRWpCLG1CQUFtQjt5QkFFWCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFRQyxrQkFBa0IsR0FBc0JDLFVBQVUsV0FBQSxDQUFsREQsa0JBQWtCLEVBQUVFLGVBQWUsR0FBS0QsVUFBVSxXQUFBLENBQTlCQyxlQUFlLEFBQWdCO0FBRTVDLElBQUEsQUFBTUgsU0FBUyxpQkF5SDNCLEFBekhZO2FBQU1BLFNBQVMsQ0FDaEJJLEtBQUs7OEJBREVKLFNBQVM7UUFFMUIsSUFBSSxDQUFDSSxLQUFLLEdB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