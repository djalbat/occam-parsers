'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var array = necessary.array,
    last = array.last;

var ParseTree = function () {
  function ParseTree(lines) {
    _classCallCheck(this, ParseTree);

    this.lines = lines;
  }

  _createClass(ParseTree, [{
    key: 'clone',
    value: function clone() {
      var lines = this.lines.slice(0),
          ///
      parseTree = new ParseTree(lines);

      return parseTree;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var linesLength = this.lines.length,
          width = undefined;

      if (linesLength === 0) {
        width = 0;
      } else {
        var lastLine = last(this.lines),
            lastLineLength = lastLine.length;

        width = lastLineLength; ///
      }

      return width;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      var linesLength = this.lines.length,
          depth = linesLength; ///

      return depth;
    }
  }, {
    key: 'forEachLine',
    value: function forEachLine(callback) {
      this.lines.forEach(callback);
    }
  }, {
    key: 'appendToTop',
    value: function appendToTop(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.unshift(line);
      }.bind(this));
    }
  }, {
    key: 'appendToLeft',
    value: function appendToLeft(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = line + this.lines[index];
      }.bind(this));
    }
  }, {
    key: 'appendToRight',
    value: function appendToRight(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = this.lines[index] + line;
      }.bind(this));
    }
  }, {
    key: 'appendToBottom',
    value: function appendToBottom(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.push(line);
      }.bind(this));
    }
  }, {
    key: 'addTopMargin',
    value: function addTopMargin(topMarginDepth) {
      var width = this.getWidth(),
          topMarginWidth = width,
          ///
      topMarginString = marginStringFromMarginWidth(topMarginWidth);

      for (var index = 0; index < topMarginDepth; index++) {
        this.lines.unshift(topMarginString);
      }
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      var leftMarginString = marginStringFromMarginWidth(leftMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = leftMarginString + this.lines[index];
      }
    }
  }, {
    key: 'addRightMargin',
    value: function addRightMargin(rightMarginWidth) {
      var rightMarginString = marginStringFromMarginWidth(rightMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = this.lines[index] + rightMarginString;
      }
    }
  }, {
    key: 'addBottomMargin',
    value: function addBottomMargin(bottomMarginDepth) {
      var width = this.getWidth(),
          bottomMarginWidth = width,
          ///
      bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);

      for (var index = 0; index < bottomMarginDepth; index++) {
        this.lines.push(bottomMarginString);
      }
    }
  }, {
    key: 'popLine',
    value: function popLine() {
      return this.lines.pop();
    }
  }, {
    key: 'shiftLine',
    value: function shiftLine() {
      return this.lines.shift();
    }
  }, {
    key: 'pushLine',
    value: function pushLine(line) {
      this.lines.push(line);
    }
  }, {
    key: 'unshiftLine',
    value: function unshiftLine(line) {
      this.lines.unshift(line);
    }
  }, {
    key: 'asString',
    value: function asString() {
      var string = this.lines.reduce(function (string, line) {
        string += line + '\n';

        return string;
      }, '');

      return string;
    }
  }]);

  return ParseTree;
}();

module.exports = ParseTree;

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || ' ';

  var marginString = '';

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJhcnJheSIsImxhc3QiLCJQYXJzZVRyZWUiLCJsaW5lcyIsInNsaWNlIiwicGFyc2VUcmVlIiwibGluZXNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImxhc3RMaW5lIiwibGFzdExpbmVMZW5ndGgiLCJkZXB0aCIsImNhbGxiYWNrIiwiZm9yRWFjaCIsImZvckVhY2hMaW5lIiwibGluZSIsInVuc2hpZnQiLCJiaW5kIiwiaW5kZXgiLCJwdXNoIiwidG9wTWFyZ2luRGVwdGgiLCJnZXRXaWR0aCIsInRvcE1hcmdpbldpZHRoIiwidG9wTWFyZ2luU3RyaW5nIiwibWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoIiwibGVmdE1hcmdpbldpZHRoIiwibGVmdE1hcmdpblN0cmluZyIsInJpZ2h0TWFyZ2luV2lkdGgiLCJyaWdodE1hcmdpblN0cmluZyIsImJvdHRvbU1hcmdpbkRlcHRoIiwiYm90dG9tTWFyZ2luV2lkdGgiLCJib3R0b21NYXJnaW5TdHJpbmciLCJwb3AiLCJzaGlmdCIsInN0cmluZyIsInJlZHVjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXJnaW5XaWR0aCIsInNwYWNlQ2hhcmFjdGVyIiwibWFyZ2luU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVNLElBQUVDLEtBQUYsR0FBWUYsU0FBWixDQUFFRSxLQUFGO0FBQUEsSUFDRUMsSUFERixHQUNXRCxLQURYLENBQ0VDLElBREY7O0lBR0FDLFM7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFTztBQUNOLFVBQU1BLFFBQVEsS0FBS0EsS0FBTCxDQUFXQyxLQUFYLENBQWlCLENBQWpCLENBQWQ7QUFBQSxVQUFv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dEIsUUFBUSxDQUFqQixFQUFvQkEsUUFBUW9CLFdBQTVCLEVBQXlDcEIsT0FBekMsRUFBa0Q7QUFDaERzQixvQkFBZ0JELGNBQWhCO0FBQ0Q7O0FBRUQsU0FBT0MsWUFBUDtBQUNEIiwiZmlsZSI6InBhcnNlVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbGFzdCB9ID0gYXJyYXk7XG5cbmNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKDApLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkVG9wTWFyZ2luKHRvcE1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgdG9wTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIHRvcE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCh0b3BNYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9wTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdCh0b3BNYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgbGVmdE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGVmdE1hcmdpblN0cmluZyArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCByaWdodE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChyaWdodE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgcmlnaHRNYXJnaW5TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgYm90dG9tTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIGJvdHRvbU1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChib3R0b21NYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm90dG9tTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChib3R0b21NYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuICBcbiAgcG9wTGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMucG9wKCk7IH1cbiAgXG4gIHNoaWZ0TGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMuc2hpZnQoKTsgfVxuICBcbiAgcHVzaExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnB1c2gobGluZSk7IH1cbiAgXG4gIHVuc2hpZnRMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpOyB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBsaW5lKSB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArICdcXG4nO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCAnICc7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9ICcnO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXJnaW5XaWR0aDsgaW5kZXgrKykge1xuICAgIG1hcmdpblN0cmluZyArPSBzcGFjZUNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHJpbmc7XG59XG4iXX0=