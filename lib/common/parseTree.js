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
                parseTree.forEachLine((function(line) {
                    this.lines.unshift(line);
                }).bind(this));
            }
        },
        {
            key: "appendToLeft",
            value: function appendToLeft(parseTree) {
                parseTree.forEachLine((function(line, index) {
                    this.lines[index] = line + this.lines[index];
                }).bind(this));
            }
        },
        {
            key: "appendToRight",
            value: function appendToRight(parseTree) {
                parseTree.forEachLine((function(line, index) {
                    this.lines[index] = this.lines[index] + line;
                }).bind(this));
            }
        },
        {
            key: "appendToBottom",
            value: function appendToBottom(parseTree) {
                parseTree.forEachLine((function(line) {
                    this.lines.push(line);
                }).bind(this));
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
                var string = this.lines.reduce(function(string1, line) {
                    string1 += line + _constants.NEW_LINE;
                    return string1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5pbXBvcnQgeyBORVdfTElORSwgRU1QVFlfU1RSSU5HLCBTSU5HTEVfU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgd2lkdGg7XG5cbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoKGxpbmUpID0+IHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKChzdHJpbmcsIGxpbmUpID0+IHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgTkVXX0xJTkU7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8IFNJTkdMRV9TUEFDRTtcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXJnaW5XaWR0aDsgaW5kZXgrKykge1xuICAgIG1hcmdpblN0cmluZyArPSBzcGFjZUNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHJpbmc7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUyxHQUFvQixDQUFwQixNQUFvQjtBQUVZLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU5QyxTQUFTO2FBQVQsU0FBUyxDQUNoQixLQUFLOzhCQURFLFNBQVM7YUFFckIsS0FBSyxHQUFHLEtBQUs7O2lCQUZELFNBQVM7O1lBSzVCLEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssR0FBRyxDQUFDO2dCQUNQLEdBQUssQ0FBQyxLQUFLLFFBQVEsS0FB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