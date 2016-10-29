'use strict';

class ParseTree {
  constructor(lines) {
    this.lines = lines;
  }

  clone() {
    var lines = this.lines.slice(0),  ///
        parseTree = new ParseTree(lines);

    return parseTree;
  }

  getWidth() {
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

  getDepth() {
    var linesLength = this.lines.length,
        depth = linesLength;  ///

    return depth;
  }

  forEachLine(cb) {
    this.lines.forEach(cb);
  }

  appendToTop(parseTree) {
    parseTree.forEachLine(function(line) {
      this.lines.unshift(line);
    }.bind(this));
  }

  appendToLeft(parseTree) {
    parseTree.forEachLine(function(line, index) {
      this.lines[index] = line + this.lines[index];
    }.bind(this));
  }

  appendToRight(parseTree) {
    parseTree.forEachLine(function(line, index) {
      this.lines[index] = this.lines[index] + line;
    }.bind(this));
  }

  appendToBottom(parseTree) {
    parseTree.forEachLine(function(line) {
      this.lines.push(line);
    }.bind(this));
  }

  addTopMargin(topMarginDepth) {
    var width = this.getWidth(),
        topMarginWidth = width,  ///
        topMarginString = marginStringFromMarginWidth(topMarginWidth);

    for (var index = 0; index < topMarginDepth; index++) {
      this.lines.unshift(topMarginString);
    }
  }

  addLeftMargin(leftMarginWidth) {
    var leftMarginString = marginStringFromMarginWidth(leftMarginWidth),
        linesLength = this.lines.length;

    for (var index = 0; index < linesLength; index++) {
      this.lines[index] = leftMarginString + this.lines[index];
    }
  }

  addRightMargin(rightMarginWidth) {
    var rightMarginString = marginStringFromMarginWidth(rightMarginWidth),
        linesLength = this.lines.length;

    for (var index = 0; index < linesLength; index++) {
      this.lines[index] = this.lines[index] + rightMarginString;
    }
  }

  addBottomMargin(bottomMarginDepth) {
    var width = this.getWidth(),
        bottomMarginWidth = width,  ///
        bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);

    for (var index = 0; index < bottomMarginDepth; index++) {
      this.lines.push(bottomMarginString);
    }
  }
  
  popLine() { return this.lines.pop(); }
  
  shiftLine() { return this.lines.shift(); }
  
  pushLine(line) { this.lines.push(line); }
  
  unshiftLine(line) { this.lines.unshift(line); }

  toString() {
    var string = this.lines.reduce(function(string, line) {
      string += line + '\n';

      return string;
    }, '');

    return string;
  }
}

module.exports = ParseTree;

function last(array) { return array[array.length - 1]; }

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || ' ';

  var marginString = '';

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}
