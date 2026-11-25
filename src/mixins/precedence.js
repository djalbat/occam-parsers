"use strict";

function rewrite(state) {
  let nonTerminalNode = this; ///

  const rewritable = this.isRewritable();

  if (rewritable) {
    nonTerminalNode = this.clone(); ///

    nonTerminalNode.tiltLeft();

    nonTerminalNode.tiltRight();

    const whollyUnprecedented = isWhollyUnprecedented(nonTerminalNode);

    if (whollyUnprecedented) {
      nonTerminalNode = null;
    }
  }

  return nonTerminalNode;
}

function tiltLeft() {
  let changed;

  do {
    changed = this.tiltLeftPass();
  } while (changed);
}

function tiltRight() {
  let changed;

  do {
    changed = this.tiltRightPass();
  } while (changed);
}

function tiltLeftPass() {
  let changed = false;

  this.forEachChildNonTerminalNode((childNonTermionalNode) => {
    changed = childNonTermionalNode.tiltLeftPass() || changed;
  });

  const rightLeaning = this.isRightLeaning();

  if (rightLeaning) {
    changed = true;

    this.leanLeft();
  }

  return changed;
}

function tiltRightPass() {
  let changed = false;

  this.forEachChildNonTerminalNode((childNonTermionalNode) => {
    changed = childNonTermionalNode.tiltRightPass() || changed;
  });

  const nonTerminalNode = this, ///
        unprecedented = isUnprecedented(nonTerminalNode),
        leftLeaning = this.isLeftLeaning();

  if (unprecedented && leftLeaning) {
    changed = true;

    this.leanRight();
  }

  return changed;
}

function leanLeft() {
  const extremalDescendantNode = this.retrieveExtremalDescendantNode(),
        rightLeaningNode = this.findRightLeaningNode(),
        rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode(),  ///
        rightLeaningNodeExtremalAscendantNode = rightLeaningNode.retrieveExtremalAscendantNode(),
        rightLeftLeaningNodeExtremalAscendantNode = rightLeftLeaningNode.retrieveExtremalAscendantNode(),
        rightLeaningAscendantNode = rightLeaningNodeExtremalAscendantNode, ///
        rightLeftLeaningAscendantNode = rightLeftLeaningNodeExtremalAscendantNode;  ///

  extremalDescendantNode.rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode);
}

function leanRight() {
  const extremalDescendantNode = this.retrieveExtremalDescendantNode(),
        leftLeaningNode = this.findLeftLeaningNode(),
        leftRightLeaningNode = leftLeaningNode.findRightLeaningNode(),  ///
        leftLeaningNodeExtremalAscendantNode = leftLeaningNode.retrieveExtremalAscendantNode(),
        leftRightLeaningNodeExtremalAscendantNode = leftRightLeaningNode.retrieveExtremalAscendantNode(),
        leftLeaningAscendantNode = leftLeaningNodeExtremalAscendantNode, ///
        leftRightLeaningAscendantNode = leftRightLeaningNodeExtremalAscendantNode; ///

  extremalDescendantNode.rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode);
}

function rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode) {
  let removedChildNodes,
      prependedChildNodes;

  removedChildNodes = rightLeaningNode.removeAllButFirstChildNode();

  const rightChildNodes = removedChildNodes;  ///

  rightLeftLeaningAscendantNode.remove();

  removedChildNodes = this.removeAllButLastChildNode();

  const leftChildNodes = removedChildNodes; ///

  rightLeaningAscendantNode.remove();

  prependedChildNodes = [  ///
    ...leftChildNodes,
    rightLeftLeaningAscendantNode
  ];

  rightLeaningNode.prependChildNodes(prependedChildNodes);

  prependedChildNodes = [  ///
    rightLeaningAscendantNode,
    ...rightChildNodes
  ];

  this.prependChildNodes(prependedChildNodes);

  const opacity = rightLeaningNode.getOpacity(),
        ruleName = rightLeaningNode.getRuleName(),
        precedence = rightLeaningNode.getPrecedence();

  rightLeaningNode.setOpacity(this.opacity);

  rightLeaningNode.setRuleName(this.ruleName);

  rightLeaningNode.setPrecedence(this.precedence);

  this.opacity = opacity;

  this.ruleName = ruleName;

  this.precedence = precedence;
}

function rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode) {
  let removedChildNodes,
      prependedChildNodes;

  removedChildNodes = leftLeaningNode.removeAllButLastChildNode();

  const leftChildNodes = removedChildNodes;  ///

  leftRightLeaningAscendantNode.remove();

  removedChildNodes = this.removeAllButFirstChildNode();

  const rightChildNodes = removedChildNodes; ///

  leftLeaningAscendantNode.remove();

  prependedChildNodes = [  ///
    leftRightLeaningAscendantNode,
    ...rightChildNodes,
  ];

  leftLeaningNode.prependChildNodes(prependedChildNodes);

  prependedChildNodes = [  ///
    ...leftChildNodes,
    leftLeaningAscendantNode
  ];

  this.prependChildNodes(prependedChildNodes);

  const opacity = leftLeaningNode.getOpacity(),
        ruleName = leftLeaningNode.getRuleName(),
        precedence = leftLeaningNode.getPrecedence();

  leftLeaningNode.setOpacity(this.opacity);

  leftLeaningNode.setRuleName(this.ruleName);

  leftLeaningNode.setPrecedence(this.precedence);

  this.opacity = opacity;

  this.ruleName = ruleName;

  this.precedence = precedence;
}

function isLeftLeaning() {
  let leftLeaning = false;

  const leftLeaningNode = this.findLeftLeaningNode();

  if (leftLeaningNode !== null) {
    const leftLeaningNodeNonTerminalNode = leftLeaningNode.isNonTerminalNode();

    if (leftLeaningNodeNonTerminalNode) {
      const nonTerminalNode = leftLeaningNode,  ///
            rightLeaningNode = nonTerminalNode.findRightLeaningNode();  ///

      if (rightLeaningNode !== null) {
        leftLeaning = true;
      }
    }
  }

  return leftLeaning;
}

function isRightLeaning() {
  let rightLeaning = false;

  const rightLeaningNode = this.findRightLeaningNode();

  if (rightLeaningNode !== null) {
    const rightLeaningNodeNonTerminalNode = rightLeaningNode.isNonTerminalNode();

    if (rightLeaningNodeNonTerminalNode) {
      const nonTerminalNode = rightLeaningNode, ///
            leftLeaningNode = nonTerminalNode.findLeftLeaningNode();  ///

      if (leftLeaningNode !== null) {
        rightLeaning = true;
      }
    }
  }

  return rightLeaning;
}

function findLeftLeaningNode() {
  let leftLeaningNode = null;

  const extremalDescendantNode = this.retrieveExtremalDescendantNode(),
        extremalDescendantNodeNonTerminalNode = extremalDescendantNode.isNonTerminalNode();

  if (extremalDescendantNodeNonTerminalNode) {
    const nonTerminalNode = extremalDescendantNode;  ///

    nonTerminalNode.forwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              extremalDescendantNode = nonTerminalNode.retrieveExtremalDescendantNode();

        leftLeaningNode = extremalDescendantNode;  ///
      }

      return true;
    });
  }

  return leftLeaningNode;
}

function findRightLeaningNode() {
  let rightLeaningNode = null;

  const extremalDescendantNode = this.retrieveExtremalDescendantNode(),
        extremalDescendantNodeNonTerminalNode = extremalDescendantNode.isNonTerminalNode();

  if (extremalDescendantNodeNonTerminalNode) {
    const nonTerminalNode = extremalDescendantNode;  ///

    nonTerminalNode.backwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              extremalDescendantNode = nonTerminalNode.retrieveExtremalDescendantNode();

        rightLeaningNode = extremalDescendantNode;  ///
      }

      return true;
    });
  }

  return rightLeaningNode;
}

function retrieveIrrelevantDescendantNode() {
  let irrelevantDescendantNode = null;

  const singleChildNode = this.getSingleChildNode();

  if (singleChildNode !== null) {
    const singleChildNodeIrrelevant = singleChildNode.isIrrelevant();

    if (singleChildNodeIrrelevant) {
      irrelevantDescendantNode = singleChildNode.retrieveIrrelevantDescendantNode();

      if (irrelevantDescendantNode === null) {
        irrelevantDescendantNode = singleChildNode;  ///
      }
    }
  }

  return irrelevantDescendantNode;
}

function retrieveIrrelevantAscendantNode() {
  let irrelevantAscendantNode = null;

  const parentNode = this.getParentNode();

  if (parentNode !== null) {
    const parentNodeIrrelevant = parentNode.isIrrelevant();

    if (parentNodeIrrelevant) {
      irrelevantAscendantNode = parentNode.retrieveIrrelevantAscendantNode();

      if (irrelevantAscendantNode === null) {
        irrelevantAscendantNode = parentNode; ///
      }
    }
  }

  return irrelevantAscendantNode;
}

function retrieveExtremalDescendantNode() {
  let extremalDescendantNode;

  const irrelevantDescendantNode = this.retrieveIrrelevantDescendantNode();

  if (irrelevantDescendantNode !== null) {
    const irrelevantDescendantNodeSingleChildNode = irrelevantDescendantNode.getSingleChildNode();

    extremalDescendantNode = irrelevantDescendantNodeSingleChildNode;  ///
  } else {
    extremalDescendantNode = this;

    const singleChildNode = this.getSingleChildNode();

    if (singleChildNode !== null) {
      extremalDescendantNode = singleChildNode;  ///
    }
  }

  return extremalDescendantNode;
}

function retrieveExtremalAscendantNode() {
  let extremalAscendantNode;

  const irrelevantAscendantNode = this.retrieveIrrelevantAscendantNode();

  if (irrelevantAscendantNode !== null) {
    const irrelevantAscendantNodeParentNode = irrelevantAscendantNode.getParentNode();

    extremalAscendantNode = irrelevantAscendantNodeParentNode; ///
  } else {
    extremalAscendantNode = this;  ///

    const single = this.isSingle();

    if (single) {
      const parentNode = this.getParentNode();

      if (parentNode !== null) {
        extremalAscendantNode = parentNode;  ///
      }
    }
  }

  return extremalAscendantNode;
}

function forEachChildNonTerminalNode(callback) {
  this.forEachChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const childNonTerminalNode = childNode; ///

      callback(childNonTerminalNode);
    }
  });
}

function removeAllButFirstChildNode() {
  const multiplicity = this.getMultiplicity(),
        startIndex = 1,
        deleteCount = (multiplicity - 1),
        removedChildNodes = this.spliceChildNodes(startIndex, deleteCount);

  return removedChildNodes;
}

function removeAllButLastChildNode() {
  const multiplicity = this.getMultiplicity(),
        startIndex = 0,
        deleteCount = (multiplicity - 1),
        removedChildNodes = this.spliceChildNodes(startIndex, deleteCount);

  return removedChildNodes;
}

function createNonTerminalNode(childNodes, precedence, state) {
  const opacity = this.getOpacity(),
        ruleName = this.ruleName,
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
        nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

  return nonTerminalNode;
}

const precedenceMixins = {
  rewrite,
  leanLeft,
  leanRight,
  tiltLeft,
  tiltRight,
  tiltLeftPass,
  tiltRightPass,
  rotateLeft,
  rotateRight,
  isLeftLeaning,
  isRightLeaning,
  findLeftLeaningNode,
  findRightLeaningNode,
  retrieveIrrelevantDescendantNode,
  retrieveIrrelevantAscendantNode,
  retrieveExtremalDescendantNode,
  retrieveExtremalAscendantNode,
  forEachChildNonTerminalNode,
  removeAllButFirstChildNode,
  removeAllButLastChildNode,
  createNonTerminalNode
};

export default precedenceMixins;

function isPrecedented(nonTerminalNode) {
  let precedented = true;

  const intervening = nonTerminalNode.isIntervening();

  if (!intervening) {
    const unprecedented = nonTerminalNode.isUnprecedented();

    if (unprecedented) {
      precedented = false;
    }
  }

  return precedented;
}

function isUnprecedented(nonTerminalNode) {
  const precedented = isPrecedented(nonTerminalNode),
        unprecedented = !precedented;

  return unprecedented;
}

function isWhollyPrecedented(nonTerminalNode) {
  let whollyPrecedented = true;

  const precedented = isPrecedented(nonTerminalNode);

  if (!precedented) {
    whollyPrecedented = false;
  } else {
    nonTerminalNode.forEachChildNonTerminalNode((childNonTermionalNode) => {
      whollyPrecedented = whollyPrecedented && isWhollyPrecedented(childNonTermionalNode);
    });
  }

  return whollyPrecedented;
}

function isWhollyUnprecedented(nonTerminalNode) {
  const whollyPrecedented = isWhollyPrecedented(nonTerminalNode),
        whollyUnprecedented = !whollyPrecedented;

  return whollyUnprecedented;
}
