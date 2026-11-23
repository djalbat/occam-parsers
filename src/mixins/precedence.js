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
  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode(),
        rightLeaningNode = this.findRightLeaningNode(),
        rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode(),  ///
        rightLeaningNodeEffectiveAscendantNode = rightLeaningNode.retrieveEffectiveAscendantNode(),
        rightLeftLeaningNodeEffectiveAscendantNode = rightLeftLeaningNode.retrieveEffectiveAscendantNode(),
        rightLeaningAscendantNode = rightLeaningNodeEffectiveAscendantNode, ///
        rightLeftLeaningAscendantNode = rightLeftLeaningNodeEffectiveAscendantNode;  ///

  effectiveDescendantNode.rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode);
}

function leanRight() {
  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode(),
        leftLeaningNode = this.findLeftLeaningNode(),
        leftRightLeaningNode = leftLeaningNode.findRightLeaningNode(),  ///
        leftLeaningNodeEffectiveAscendantNode = leftLeaningNode.retrieveEffectiveAscendantNode(),
        leftRightLeaningNodeEffectiveAscendantNode = leftRightLeaningNode.retrieveEffectiveAscendantNode(),
        leftLeaningAscendantNode = leftLeaningNodeEffectiveAscendantNode, ///
        leftRightLeaningAscendantNode = leftRightLeaningNodeEffectiveAscendantNode; ///

  effectiveDescendantNode.rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode);
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
    const leftRightLeaningNode = leftLeaningNode.findRightLeaningNode();  ///

    if (leftRightLeaningNode !== null) {
      leftLeaning = true;
    }
  }

  return leftLeaning;
}

function isRightLeaning() {
  let rightLeaning = false;

  const rightLeaningNode = this.findRightLeaningNode();

  if (rightLeaningNode !== null) {
    const rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode();  ///

    if (rightLeftLeaningNode !== null) {
      rightLeaning = true;
    }
  }

  return rightLeaning;
}

function findLeftLeaningNode() {
  let leftLeaningNode = null;

  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

  effectiveDescendantNode.forwardsSomeChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

      leftLeaningNode = effectiveDescendantNode;  ///
    }

    return true;
  });

  return leftLeaningNode;
}

function findRightLeaningNode() {
  let rightLeaningNode = null;

  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

  effectiveDescendantNode.backwardsSomeChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

      rightLeaningNode = effectiveDescendantNode;  ///
    }

    return true;
  });

  return rightLeaningNode;
}

function getSingleChildNonTerminalNode() {
  let singleChildNonTerminalNode = null;

  const singleChildNode = this.getSingleChildNode();

  if (singleChildNode !== null) {
    const singleChildNodeNonTerminalNode = singleChildNode.isNonTerminalNode();

    if (singleChildNodeNonTerminalNode) {
      singleChildNonTerminalNode = singleChildNode; ///
    }
  }

  return singleChildNonTerminalNode;
}

function retrieveEffectiveAscendantNode() {
  let effectiveAscendantNode;

  const irrelevantAscendantNode = this.retrieveIrrelevantAscendantNode();

  if (irrelevantAscendantNode !== null) {
    const irrelevantAscendantNodeParentNode = irrelevantAscendantNode.getParentNode();

    effectiveAscendantNode = irrelevantAscendantNodeParentNode; ///
  } else {
    effectiveAscendantNode = this;

    const single = this.isSingle();

    if (single) {
      if (this.parentNode !== null) {
        effectiveAscendantNode = this.parentNode; ///
      }
    }
  }

  return effectiveAscendantNode;
}

function retrieveEffectiveDescendantNode() {
  let effectiveDescendantNode;

  const irrelevantDescendantNode = this.retrieveIrrelevantDescendantNode();

  if (irrelevantDescendantNode !== null) {
    const irrelevantDescendantNodeSingleChildNode = irrelevantDescendantNode.getSingleChildNode();

    effectiveDescendantNode = irrelevantDescendantNodeSingleChildNode;  ///
  } else {
    effectiveDescendantNode = this;

    const singular = this.isSingular();

    if (singular) {
      const singleChildNonTerminalNode = this.getSingleChildNonTerminalNode();

      if (singleChildNonTerminalNode !== null) {
        effectiveDescendantNode = singleChildNonTerminalNode;  ///
      }
    }
  }

  return effectiveDescendantNode;
}

function retrieveIrrelevantAscendantNode() {
  let irrelevantAscendantNode = null;

  if (this.parentNode !== null) {
    const parentNodeIrrelevant = this.parentNode.isIrrelevant();

    if (parentNodeIrrelevant) {
      irrelevantAscendantNode = this.parentNode.retrieveIrrelevantAscendantNode();

      if (irrelevantAscendantNode === null) {
        irrelevantAscendantNode = this.parentNode; ///
      }
    }
  }

  return irrelevantAscendantNode;
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
  getSingleChildNonTerminalNode,
  retrieveEffectiveAscendantNode,
  retrieveEffectiveDescendantNode,
  retrieveIrrelevantAscendantNode,
  retrieveIrrelevantDescendantNode,
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
