"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZVRyZWUuanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IE5FV19MSU5FX0NIQVJBQ1RFUiwgU1BBQ0VfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgpLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoO1xuXG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZSgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKChsaW5lKSA9PiB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZSgoc3RyaW5nLCBsaW5lKSA9PiB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArIE5FV19MSU5FX0NIQVJBQ1RFUjtcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgU1BBQ0VfQ0hBUkFDVEVSO1xuXG4gIGxldCBtYXJnaW5TdHJpbmcgPSBFTVBUWV9TVFJJTkc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiJdLCJuYW1lcyI6WyJORVdfTElORV9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiU1BBQ0VfQ0hBUkFDVEVSIiwiUGFyc2VUcmVlIiwibGluZXMiLCJjbG9uZSIsInNsaWNlIiwicGFyc2VUcmVlIiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdExpbmUiLCJsYXN0IiwibGFzdExpbmVMZW5ndGgiLCJnZXREZXB0aCIsImRlcHRoIiwiZm9yRWFjaExpbmUiLCJjYWxsYmFjayIsImZvckVhY2giLCJhcHBlbmRUb1RvcCIsImxpbmUiLCJ1bnNoaWZ0IiwiYXBwZW5kVG9MZWZ0IiwiaW5kZXgiLCJhcHBlbmRUb1JpZ2h0IiwiYXBwZW5kVG9Cb3R0b20iLCJwdXNoIiwiYWRkVG9wTWFyZ2luIiwidG9wTWFyZ2luRGVwdGgiLCJ0b3BNYXJnaW5XaWR0aCIsInRvcE1hcmdpblN0cmluZyIsIm1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyaW5nIiwiYWRkUmlnaHRNYXJnaW4iLCJyaWdodE1hcmdpbldpZHRoIiwicmlnaHRNYXJnaW5TdHJpbmciLCJhZGRCb3R0b21NYXJnaW4iLCJib3R0b21NYXJnaW5EZXB0aCIsImJvdHRvbU1hcmdpbldpZHRoIiwiYm90dG9tTWFyZ2luU3RyaW5nIiwicG9wTGluZSIsInBvcCIsInNoaWZ0TGluZSIsInNoaWZ0IiwicHVzaExpbmUiLCJ1bnNoaWZ0TGluZSIsImFzU3RyaW5nIiwic3RyaW5nIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwibWFyZ2luV2lkdGgiLCJzcGFjZUNoYXJhY3RlciIsIm1hcmdpblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUyQixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFakIsSUFBQSxNQUFtQixXQUFuQixtQkFBbUIsQ0FBQTtBQUVYLElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7OzhEQU4xQztzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7O0FBUUEsSUFBUUEsa0JBQWtCLEdBQXNCQyxV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