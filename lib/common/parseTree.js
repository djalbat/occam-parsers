"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
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
                    string1 += line + "\n";
                    return string1;
                }, "");
                return string;
            }
        }
    ]);
    return ParseTree;
}();
exports.default = ParseTree;
function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
    spaceCharacter = spaceCharacter || " ";
    var marginString = "";
    for(var index = 0; index < marginWidth; index++){
        marginString += spaceCharacter;
    }
    return marginString;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgpLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoO1xuXG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZSgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZSgoc3RyaW5nLCBsaW5lKSA9PiB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArIFwiXFxuXCI7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgXCJcIik7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBcIiBcIjtcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gXCJcIjtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVMsR0FBb0IsQ0FBcEIsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBCLFNBQVM7YUFBVCxTQUFTLENBQ2hCLEtBQUs7OEJBREUsU0FBUzthQUVyQixLQUFLLEdBQUcsS0FBSzs7aUJBRkQsU0FBUzs7WUFLNUIsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxHQUFHLENBQUM7Z0JBQ1AsR0FBSyxDQUFDLEtBQUssUUFBUSxLQUFLLENBQUMsS0FBSyxJQUN4QixTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLO3VCQUU5QixTQUFTO1lBQ2xCLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVEsR0FBRyxDQUFD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