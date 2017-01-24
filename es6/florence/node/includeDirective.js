'use strict';

var arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

class IncludeDirectiveNode extends NonTerminalNode {
  constructor(childNodes, productionName, filePath) {
    super(childNodes, productionName);

    this.filePath = filePath;
  }

  getFilePath() {
    return this.filePath;
  }

  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.keepThird(nodes),
        firstChildNode = first(childNodes),
        terminalNode = firstChildNode,  ///
        significantToken = terminalNode.getSignificantToken(),
        content = significantToken.getContent(),
        filePath = filePathFromContent(content),
        includeDirectiveNode = new IncludeDirectiveNode(childNodes, productionName, filePath);

    nodes = [includeDirectiveNode]; ///

    return nodes;
  }

}

module.exports = IncludeDirectiveNode;

function first(array) { return array[0]; }
function second(array) { return array[1]; }

function filePathFromContent(content) {
  var matches = content.match(/^"([^"]+)"$/),
      secondMatch = second(matches),
      filePath = secondMatch; ///

  return filePath;
}
