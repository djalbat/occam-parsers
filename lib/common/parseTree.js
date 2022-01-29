"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _array = require("../utilities/array");
var _constants = require("../constants");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgTkVXX0xJTkVfQ0hBUkFDVEVSLCBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkVfQ0hBUkFDVEVSO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBTUEFDRV9DSEFSQUNURVI7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIk5FV19MSU5FX0NIQVJBQ1RFUiIsIlNQQUNFX0NIQVJBQ1RFUiIsIlBhcnNlVHJlZSIsImxpbmVzIiwiY2xvbmUiLCJzbGljZSIsInBhcnNlVHJlZSIsImdldFdpZHRoIiwid2lkdGgiLCJsaW5lc0xlbmd0aCIsImxlbmd0aCIsImxhc3RMaW5lIiwibGFzdExpbmVMZW5ndGgiLCJnZXREZXB0aCIsImRlcHRoIiwiZm9yRWFjaExpbmUiLCJjYWxsYmFjayIsImZvckVhY2giLCJhcHBlbmRUb1RvcCIsImxpbmUiLCJ1bnNoaWZ0IiwiYXBwZW5kVG9MZWZ0IiwiaW5kZXgiLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Cb3R0b20iLCJwdXNoIiwiYWRkVG9wTWFyZ2luIiwidG9wTWFyZ2luRGVwdGgiLCJ0b3BNYXJnaW5XaWR0aCIsInRvcE1hcmdpblN0cmluZyIsIm1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyaW5nIiwiYWRkUmlnaHRNYXJnaW4iLCJyaWdodE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5TdHJpbmciLCJhZGRCb3R0b21NYXJnaW4iLCJib3R0b21NYXJnaW5EZXB0aCIsImJvdHRvbU1hcmdpbldpZHRoIiwiYm90dG9tTWFyZ2luU3RyaW5nIiwicG9wTGluZSIsInBvcCIsInNoaWZ0TGluZSIsInNoaWZ0IiwicHVzaExpbmUiLCJ1bnNoaWZ0TGluZSIsImFzU3RyaW5nIiwic3RyaW5nIiwicmVkdWNlIiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZSxHQUFXLENBQVgsVUFBVztBQUVqQixHQUFvQixDQUFwQixNQUFvQjtBQUVaLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxHQUFLLENBQUdBLGtCQUFrQixHQU5DLFVBQVcsWUFNOUJBLGtCQUFrQixFQUFFQyxlQUFlLEdBTmhCLFVBQVcsWUFNVkEsZUFBZTtJQUV0QkMsU0FBUyxpQkFBZixRQUFRO2FBQUZBLFNBQVMsQ0FDaEJDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7Ozs7WUFHcEJDLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxL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