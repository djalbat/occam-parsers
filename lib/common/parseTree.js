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
var ParseTree = function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgpLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoO1xuXG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZSgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZSgoc3RyaW5nLCBsaW5lKSA9PiB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArIFwiXFxuXCI7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgXCJcIik7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCBcIiBcIjtcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gXCJcIjtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVMsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBCLFNBQVM7YUFBVCxTQUFTLENBQ2hCLEtBQUs7OEJBREUsU0FBUzthQUVyQixLQUFLLEdBQUcsS0FBSzs7aUJBRkQsU0FBUzs7WUFLNUIsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSztvQkFDRyxLQUFLLFFBQVEsS0FBSyxDQUFDLEtBQUssSUFDeEIsU0FBUyxPQUFPLFNBQVMsQ0FBQyxLQUFLO3VCQUU5QixTQUFTOzs7O1lBR2xCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7b0JBQ0YsS0FBSztvQkFFTCxXQUFXLFFBQVEsS0FBSyxDQUFDLE1BQU07b0JBRS9CLFdBQVcsS0FBSyxD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