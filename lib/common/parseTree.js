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
                var string1 = this.lines.reduce(function(string, line) {
                    string += line + _constants.NEW_LINE;
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
    spaceCharacter = spaceCharacter || _constants.SINGLE_SPACE;
    var marginString = _constants.EMPTY_STRING;
    for(var index = 0; index < marginWidth; index++){
        marginString += spaceCharacter;
    }
    return marginString;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5pbXBvcnQgeyBORVdfTElORSwgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkU7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8IFNJTkdMRV9TUEFDRTtcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXJnaW5XaWR0aDsgaW5kZXgrKykge1xuICAgIG1hcmdpblN0cmluZyArPSBzcGFjZUNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJjbG9uZSIsInNsaWNlIiwicGFyc2VUcmVlIiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdExpbmUiLCJsYXN0TGluZUxlbmd0aCIsImdldERlcHRoIiwiZGVwdGgiLCJmb3JFYWNoTGluZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImFwcGVuZFRvVG9wIiwibGluZSIsInVuc2hpZnQiLCJhcHBlbmRUb0xlZnQiLCJpbmRleCIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb0JvdHRvbSIsInB1c2giLCJhZGRUb3BNYXJnaW4iLCJ0b3BNYXJnaW5EZXB0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5TdHJpbmciLCJhZGRSaWdodE1hcmdpbiIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImFkZEJvdHRvbU1hcmdpbiIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3BMaW5lIiwicG9wIiwic2hpZnRMaW5lIiwic2hpZnQiLCJwdXNoTGluZSIsInVuc2hpZnRMaW5lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJyZWR1Y2UiLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQW9CLENBQXBCLE1BQW9CO0FBRVksR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTlDQSxTQUFTLGlCQUFmLFFBQVE7YUFBRkEsU0FBUyxDQUNoQkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSzs7OztZQUdwQkMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssR0FBRyxDQUFDO2dCQUNQLEdBQUssQ0FBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSyxDQUFDRSxLQUFLLElBQ3hCQyxTQUFTLEdBQUcsR0FBRyxDQUFDSixTQUFTLENBQUNDLEtBQUs7Z0JBRXJDLE1BQU0sQ0FBQ0csU0FBUztZQUNsQixDQUFDOzs7WUFFREMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUcsQ0FBQ0MsS0FBSztnQkFFVCxHQUFHLENB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