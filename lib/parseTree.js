'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    value: function forEachLine(cb) {
      this.lines.forEach(cb);
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
      topMarginStr = marginStrFromMarginWidth(topMarginWidth);

      for (var index = 0; index < topMarginDepth; index++) {
        this.lines.unshift(topMarginStr);
      }
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      var leftMarginStr = marginStrFromMarginWidth(leftMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = leftMarginStr + this.lines[index];
      }
    }
  }, {
    key: 'addRightMargin',
    value: function addRightMargin(rightMarginWidth) {
      var rightMarginStr = marginStrFromMarginWidth(rightMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = this.lines[index] + rightMarginStr;
      }
    }
  }, {
    key: 'addBottomMargin',
    value: function addBottomMargin(bottomMarginDepth) {
      var width = this.getWidth(),
          bottomMarginWidth = width,
          ///
      bottomMarginStr = marginStrFromMarginWidth(bottomMarginWidth);

      for (var index = 0; index < bottomMarginDepth; index++) {
        this.lines.push(bottomMarginStr);
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      var str = this.lines.reduce(function (str, line) {
        str += line + '\n';

        return str;
      }, '');

      return str;
    }
  }], [{
    key: 'fromString',
    value: function fromString(str) {
      var line = str,
          ///
      lines = [line],
          parseTree = new ParseTree(lines);

      return parseTree;
    }
  }]);

  return ParseTree;
}();

module.exports = ParseTree;

function last(array) {
  return array[array.length - 1];
}

function marginStrFromMarginWidth(marginWidth, spaceCharacter) {
  var marginStr = '';

  spaceCharacter = spaceCharacter || ' ';

  for (var index = 0; index < marginWidth; index++) {
    marginStr += spaceCharacter;
  }

  return marginStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wYXJzZVRyZWUuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwibGluZXMiLCJzbGljZSIsInBhcnNlVHJlZSIsImxpbmVzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJsYXN0TGluZSIsImxhc3QiLCJsYXN0TGluZUxlbmd0aCIsImRlcHRoIiwiY2IiLCJmb3JFYWNoIiwiZm9yRWFjaExpbmUiLCJsaW5lIiwidW5zaGlmdCIsImJpbmQiLCJpbmRleCIsInB1c2giLCJ0b3BNYXJnaW5EZXB0aCIsImdldFdpZHRoIiwidG9wTWFyZ2luV2lkdGgiLCJ0b3BNYXJnaW5TdHIiLCJtYXJnaW5TdHJGcm9tTWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luV2lkdGgiLCJsZWZ0TWFyZ2luU3RyIiwicmlnaHRNYXJnaW5XaWR0aCIsInJpZ2h0TWFyZ2luU3RyIiwiYm90dG9tTWFyZ2luRGVwdGgiLCJib3R0b21NYXJnaW5XaWR0aCIsImJvdHRvbU1hcmdpblN0ciIsInN0ciIsInJlZHVjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsIm1hcmdpbldpZHRoIiwic3BhY2VDaGFyYWN0ZXIiLCJtYXJnaW5TdHIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsUztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBSUEsUUFBUSxLQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBWjtBQUFBLFVBQWtDO0FBQzlCQyxrQkFBWSxJQUFJSCxTQUFKLENBQWNDLEtBQWQsQ0FEaEI7O0FBR0EsYUFBT0UsU0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJQyxjQUFjLEtBQUtILEtBQUwsQ0FBV0ksTUFBN0I7QUFBQSxVQUNJQyxRQUFRQyxTQURaOztBQUdBLFVBQUlILGdCQUFnQixDQUFwQixFQUF1QjtBQUNyQkUsZ0JBQVEsQ0FBUjtB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a0JQLHlCQUF5Qk0saUJBQXpCLENBRnRCOztBQUlBLFdBQUssSUFBSVosUUFBUSxDQUFqQixFQUFvQkEsUUFBUVcsaUJBQTVCLEVBQStDWCxPQUEvQyxFQUF3RDtBQUN0RCxhQUFLakIsS0FBTCxDQUFXa0IsSUFBWCxDQUFnQlksZUFBaEI7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxVQUFJQyxNQUFNLEtBQUsvQixLQUFMLENBQVdnQyxNQUFYLENBQWtCLFVBQVNELEdBQVQsRUFBY2pCLElBQWQsRUFBb0I7QUFDOUNpQixlQUFPakIsT0FBTyxJQUFkOztBQUVBLGVBQU9pQixHQUFQO0FBQ0QsT0FKUyxFQUlQLEVBSk8sQ0FBVjs7QUFNQSxhQUFPQSxHQUFQO0FBQ0Q7OzsrQkFFaUJBLEcsRUFBSztBQUNyQixVQUFJakIsT0FBT2lCLEdBQVg7QUFBQSxVQUFnQjtBQUNaL0IsY0FBUSxDQUFDYyxJQUFELENBRFo7QUFBQSxVQUVJWixZQUFZLElBQUlILFNBQUosQ0FBY0MsS0FBZCxDQUZoQjs7QUFJQSxhQUFPRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIK0IsT0FBT0MsT0FBUCxHQUFpQm5DLFNBQWpCOztBQUVBLFNBQVNTLElBQVQsQ0FBYzJCLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxNQUFNQSxNQUFNL0IsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUM7O0FBRXhELFNBQVNtQix3QkFBVCxDQUFrQ2EsV0FBbEMsRUFBK0NDLGNBQS9DLEVBQStEO0FBQzdELE1BQUlDLFlBQVksRUFBaEI7O0FBRUFELG1CQUFpQkEsa0JBQWtCLEdBQW5DOztBQUVBLE9BQUssSUFBSXBCLFFBQVEsQ0FBakIsRUFBb0JBLFFBQVFtQixXQUE1QixFQUF5Q25CLE9BQXpDLEVBQWtEO0FBQ2hEcUIsaUJBQWFELGNBQWI7QUFDRDs7QUFFRCxTQUFPQyxTQUFQO0FBQ0QiLCJmaWxlIjoicGFyc2VUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBsaW5lcyA9IHRoaXMubGluZXMuc2xpY2UoMCksICAvLy9cbiAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgdmFyIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGxpbmVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB3aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIHZhciBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYikge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYik7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9SaWdodChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICB2YXIgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgdG9wTWFyZ2luU3RyID0gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cik7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICB2YXIgbGVmdE1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHIgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgdmFyIHJpZ2h0TWFyZ2luU3RyID0gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgcmlnaHRNYXJnaW5TdHI7XG4gICAgfVxuICB9XG5cbiAgYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKSB7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgIGJvdHRvbU1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21NYXJnaW5XaWR0aChib3R0b21NYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYm90dG9tTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChib3R0b21NYXJnaW5TdHIpO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihzdHIsIGxpbmUpIHtcbiAgICAgIHN0ciArPSBsaW5lICsgJ1xcbic7XG5cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cikge1xuICAgIHZhciBsaW5lID0gc3RyLCAvLy9cbiAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gbWFyZ2luU3RyRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICB2YXIgbWFyZ2luU3RyID0gJyc7XG5cbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCAnICc7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cjtcbn1cbiJdfQ==