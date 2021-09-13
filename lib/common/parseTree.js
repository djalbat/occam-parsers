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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlLmpzIl0sIm5hbWVzIjpbImxhc3QiLCJORVdfTElORSIsIkVNUFRZX1NUUklORyIsIlNJTkdMRV9TUEFDRSIsIlBhcnNlVHJlZSIsImNvbnN0cnVjdG9yIiwibGluZXMiLCJjbG9uZSIsInNsaWNlIiwicGFyc2VUcmVlIiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdExpbmUiLCJsYXN0TGluZUxlbmd0aCIsImdldERlcHRoIiwiZGVwdGgiLCJmb3JFYWNoTGluZSIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImFwcGVuZFRvVG9wIiwibGluZSIsInVuc2hpZnQiLCJhcHBlbmRUb0xlZnQiLCJpbmRleCIsImFwcGVuZFRvUmlnaHQiLCJhcHBlbmRUb0JvdHRvbSIsInB1c2giLCJhZGRUb3BNYXJnaW4iLCJ0b3BNYXJnaW5EZXB0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImxlZnRNYXJnaW5TdHJpbmciLCJhZGRSaWdodE1hcmdpbiIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImFkZEJvdHRvbU1hcmdpbiIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3BMaW5lIiwicG9wIiwic2hpZnRMaW5lIiwic2hpZnQiLCJwdXNoTGluZSIsInVuc2hpZnRMaW5lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJyZWR1Y2UiLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVTLEdBQW9CLENBQXBCLE1BQW9CO0FBRVksR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFRLENBQVAsTUFBTSxFQUFFLElBQUksRUFBSyxDQUFDO29CQUNsRCxNQUFNLElBQUksSUFBSSxHQWxIaUMsVUFBYztvQkFvSDdELE1BQU0sQ0FBQyxNQUFNO2dCQUNmLENBQUMsRUFySGdELFVBQWM7Z0JBdUgvRCxNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztXQXRIa0IsU0FBUzs7a0JBQVQsU0FBUztTQXlIckIsMkJBQTJCLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQ2pFLGNBQWMsR0FBRyxjQUFjLElBNUhvQixVQUFjO0lBOEhqRSxHQUFHLENBQUMsWUFBWSxHQTlIbUMsVUFBYztJQWdJakUsR0FBRyxDQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxXQUFXLEVBQUUsS0FBSyxHQUFJLENBQUM7UUFDakQsWUFBWSxJQUFJLGNBQWM7SUFDaEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuaW1wb3J0IHsgTkVXX0xJTkUsIEVNUFRZX1NUUklORywgU0lOR0xFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgpLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoO1xuXG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZSgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZSgoc3RyaW5nLCBsaW5lKSA9PiB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArIE5FV19MSU5FO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBTSU5HTEVfU1BBQ0U7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl19