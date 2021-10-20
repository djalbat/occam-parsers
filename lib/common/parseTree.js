"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
                var string = this.lines.reduce(function(string, line) {
                    string += line + _constants.NEW_LINE;
                    return string;
                }, _constants.EMPTY_STRING);
                return string;
            }
        }
    ]);
    return ParseTree;
}();
exports.default = ParseTree;
function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
    spaceCharacter = spaceCharacter || _constants.SINGLE_SPACE;
    var marginString = _constants.EMPTY_STRING;
    for(var index = 0; index < marginWidth; index++){
        marginString += spaceCharacter;
    }
    return marginString;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5pbXBvcnQgeyBORVdfTElORSwgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkU7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8IFNJTkdMRV9TUEFDRTtcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXJnaW5XaWR0aDsgaW5kZXgrKykge1xuICAgIG1hcmdpblN0cmluZyArPSBzcGFjZUNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJjbG9uZSIsInNsaWNlIiwicGFyc2VUcmVlIiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdExpbmUiLCJsYXN0TGluZUxlbmd0aCIsImdldERlcHRoIiwiZGVwdGgiLCJmb3JFYWNoTGluZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImFwcGVuZFRvVG9wIiwibGluZSIsInVuc2hpZnQiLCJhcHBlbmRUb0xlZnQiLCJpbmRleCIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb0JvdHRvbSIsInB1c2giLCJhZGRUb3BNYXJnaW4iLCJ0b3BNYXJnaW5EZXB0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5TdHJpbmciLCJhZGRSaWdodE1hcmdpbiIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImFkZEJvdHRvbU1hcmdpbiIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3BMaW5lIiwicG9wIiwic2hpZnRMaW5lIiwic2hpZnQiLCJwdXNoTGluZSIsInVuc2hpZnRMaW5lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJyZWR1Y2UiLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQW9CLENBQXBCLE1BQW9CO0FBRVksR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDQSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNoQkMsS0FBSzs4QkFERUQsU0FBUztRQUUxQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSzs7aUJBRkRELFNBQVM7O1lBSzVCRSxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxHQUFHLENBQUM7Z0JBQ1AsR0FBSyxDQUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUNFLEtBQUssSUFDeEJDLFNBQVMsR0FBRyxHQUFHLENBQUNKLFNBQVMsQ0FBQ0MsS0FBSztnQkFFckMsTUFBTSxDQUFDRyxTQUFTO1lBQ2xCLENBQUM7OztZQUVEQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBRyxD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