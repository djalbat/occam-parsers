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
        topMarginStr = marginStrFromMarginWidth(topMarginWidth);

    for (var index = 0; index < topMarginDepth; index++) {
      this.lines.unshift(topMarginStr);
    }
  }

  addLeftMargin(leftMarginWidth) {
    var leftMarginStr = marginStrFromMarginWidth(leftMarginWidth),
        linesLength = this.lines.length;

    for (var index = 0; index < linesLength; index++) {
      this.lines[index] = leftMarginStr + this.lines[index];
    }
  }

  addRightMargin(rightMarginWidth) {
    var rightMarginStr = marginStrFromMarginWidth(rightMarginWidth),
        linesLength = this.lines.length;

    for (var index = 0; index < linesLength; index++) {
      this.lines[index] = this.lines[index] + rightMarginStr;
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

  static fromProductionName(productionName) {
    var str = productionName, ///
        parseTree = ParseTree.fromString(str),
        parseTreeWidth = parseTree.getWidth(),
        leftMarginWidth = Math.floor(parseTreeWidth/2),
        verticalBranchStr = '|',
        verticalBranchStrLength = verticalBranchStr.length,
        rightMarginWidth = parseTreeWidth - leftMarginWidth - verticalBranchStrLength,
        verticalBranchParseTree = ParseTree.fromString(verticalBranchStr);

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);

    parseTree.appendToBottom(verticalBranchParseTree);

    return parseTree;
  }

  static fromChildNodes(childNodes) {
    var childParseTrees = childNodes.map(function(childNode) {
          var childParseTree = childNode.getParseTree();

          return childParseTree;
        }),
        childParseTreesDepth = childParseTrees.reduce(function(childParseTreesDepth, childParseTree) {
          var childParseTreeDepth = childParseTree.getDepth();

          childParseTreesDepth = Math.max(childParseTreesDepth, childParseTreeDepth);

          return childParseTreesDepth;
        }, 0),
        parseTree = ParseTree.fromDepth(childParseTreesDepth);

    childParseTrees.forEach(function(childParseTree) {
      var childParseTreeDepth = childParseTree.getDepth();

      if (childParseTreeDepth < childParseTreesDepth) {
        var clonedChildParseTree = childParseTree.clone(),
            bottomMarginDepth = childParseTreesDepth - childParseTreeDepth;

        clonedChildParseTree.addBottomMargin(bottomMarginDepth);
        parseTree.appendToRight(clonedChildParseTree);
      } else {
        parseTree.appendToRight(childParseTree);
      }
    });

    return parseTree;
  }

  static fromProductionNameAndChildNodes(productionName, childNodes) {
    var productionNameParseTree = ParseTree.fromProductionName(productionName),
        childParseTreesParseTree = ParseTree.fromChildNodes(childNodes);

    var parseTree = productionNameParseTree,  ///
        parseTreeWidth = parseTree.getWidth(),
        childParseTreesParseTreeWidth = childParseTreesParseTree.getWidth(),
        differenceInWidths = Math.abs(parseTreeWidth - childParseTreesParseTreeWidth),
        leftMarginWidth = Math.floor(differenceInWidths/2),
        rightMarginWidth = Math.ceil(differenceInWidths/2);

    if (false) {

    } else if (parseTreeWidth < childParseTreesParseTreeWidth) {
      parseTree.addLeftMargin(leftMarginWidth);
      parseTree.addRightMargin(rightMarginWidth);
    } else if (childParseTreesParseTreeWidth < parseTreeWidth) {
      childParseTreesParseTree.addLeftMargin(leftMarginWidth);
      childParseTreesParseTree.addRightMargin(rightMarginWidth);
    }

    parseTree.appendToBottom(childParseTreesParseTree);

    return parseTree;
  }
}

module.exports = ParseTree;

function last(array) { return array[array.length - 1]; }

function marginStrFromMarginWidth(marginWidth, spaceCharacter) {
  var marginStr = '';

  spaceCharacter = spaceCharacter || ' ';

  for (var index = 0; index < marginWidth; index++) {
    marginStr += spaceCharacter;
  }

  return marginStr;
}
