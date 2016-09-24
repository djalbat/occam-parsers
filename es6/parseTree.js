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
    var lastLine = last(this.lines),
        lastLineLength = lastLine.length,
        width = lastLineLength; ///

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

  addLeftMargin(leftMarginWidth) {
    var leftMarginStr = marginStrFromMarginWidth(leftMarginWidth),
        linesLength = this.lines.length;

    for (var index = 0; index < linesLength; index++) {
      this.lines[index] = leftMarginStr + this.lines[index];
    }
  }

  addBottomMargin(bottomMarginDepth) {
    var width = this.getWidth(),
        bottomMarginWidth = width,  ///
        bottomMarginStr = marginStrFromMarginWidth(bottomMarginWidth);

    for (var index = 0; index < bottomMarginDepth; index++) {
      this.lines.push(bottomMarginStr);
    }
  }

  toString() {
    var str = this.lines.reduce(function(str, line) {
      str += line + '\n';

      return str;
    }, '');

    return str;
  }

  static fromString(str) {
    var line = str + ' ',
        lines = [line],
        parseTree = new ParseTree(lines);
    
    return parseTree;
  }

  static fromDepth(depth) {
    var lines = [],
        index = 0;

    while (index < depth) {
      lines[index++] = '';
    }

    var parseTree = new ParseTree(lines);

    return parseTree;
  }

  static fromProductionNameAndChildNodes(productionName, childNodes) {
    var childParseTrees = childNodes.map(function(childNode) {
          var childParseTree = childNode.getParseTree();

          return childParseTree;
        }),
        childParseTreesDepth = childParseTrees.reduce(function(childParseTreesDepth, childParseTree) {
          var childParseTreeDepth = childParseTree.getDepth();

          childParseTreesDepth = Math.max(childParseTreesDepth, childParseTreeDepth);

          return childParseTreesDepth;
        }, 0),
        childParseTreesParseTree = ParseTree.fromDepth(childParseTreesDepth);

    childParseTrees.forEach(function(childParseTree) {
      var childParseTreeDepth = childParseTree.getDepth();

      if (childParseTreeDepth < childParseTreesDepth) {
        var clonedChildParseTree = childParseTree.clone(),
            bottomMarginDepth = childParseTreesDepth - childParseTreeDepth;

        clonedChildParseTree.addBottomMargin(bottomMarginDepth);
        childParseTreesParseTree.appendToRight(clonedChildParseTree);
      } else {
        childParseTreesParseTree.appendToRight(childParseTree);
      }
    });

    var str = productionName, ///
        parseTree = ParseTree.fromString(str),
        parseTreeWidth = parseTree.getWidth(),
        childParseTreesParseTreeWidth = childParseTreesParseTree.getWidth(),
        leftMarginWidth = Math.abs(parseTreeWidth - childParseTreesParseTreeWidth);

    if (false) {

    } else if (parseTreeWidth < childParseTreesParseTreeWidth) {
      parseTree.addLeftMargin(leftMarginWidth);
    } else if (childParseTreesParseTreeWidth < parseTreeWidth) {
      childParseTreesParseTree.addLeftMargin(leftMarginWidth);
    }

    parseTree.appendToBottom(childParseTreesParseTree);

    return parseTree;
  }
}

module.exports = ParseTree;

function last(array) { return array[array.length - 1]; }

function marginStrFromMarginWidth(marginWidth) {
  var marginStr = '';

  for (var index = 0; index < marginWidth; index++) {
    marginStr += ' ';
  }

  return marginStr;
}
