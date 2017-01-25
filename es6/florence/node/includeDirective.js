'use strict';

var LinkToken = require('../token/link'),
    arrayUtil = require('../../arrayUtil'),
    NonTerminalNode = require('../../bnf/node/nonTerminal');

class IncludeDirectiveNode extends NonTerminalNode {
  getStringToken() {
    var childNodes = this.getChildNodes(),
        firstChildNode = first(childNodes),
        terminalNode = firstChildNode,  ///
        significantToken = terminalNode.getSignificantToken(),
        stringToken = significantToken; ///

    return stringToken;
  }

  getFilePath(stringToken = this.getStringToken()) {
    var content = stringToken.getContent(),
        filePath = filePathFromContent(content);

    return filePath;
  }

  update(clickHandler) {
    var stringToken = this.getStringToken(),
        linkToken = LinkToken.fromStringToken(stringToken, clickHandler);

    stringToken.replaceWith(linkToken);
  }

  static fromNodes(nodes, productionName) {
    var childNodes = arrayUtil.keepThird(nodes),
        includeDirectiveNode = new IncludeDirectiveNode(childNodes, productionName);

    nodes = [includeDirectiveNode]; ///

    return nodes;
  }
}

module.exports = IncludeDirectiveNode;

function filePathFromContent(content) {
  var matches = content.match(/^"([^"]+)"$/),
      secondMatch = second(matches),
      filePath = secondMatch; ///

  return filePath;
}

function first(array) { return array[0]; }
function second(array) { return array[1]; }
