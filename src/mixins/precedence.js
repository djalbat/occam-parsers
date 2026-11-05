"use strict";

function rewrite(state) {
  let nonTerminalNode = this;

  const precedence = this.getPrecedence();

  if (precedence !== null) {
    nonTerminalNode = this.clone();

    const effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

    effectiveDescendantNode.tiltLeft();

    const unprecedented = effectiveDescendantNode.balance();

    if (unprecedented) {
      nonTerminalNode = null;
    }
  }

  return nonTerminalNode;
}

function balance() {
  let unprecedencted;

  const precedence = this.getPrecedence();

  if (precedence !== null) {
    unprecedencted = this.isUnprecedented();

    if (unprecedencted) {
      const leftLeaning = this.isLeftLeaning();

      if (leftLeaning) {
        this.leanRight();

        const shallow = true,
              rightLeaningNode = this.findRightLeaningNode(shallow);

        unprecedencted = rightLeaningNode.isUnprecedented();

        if (!unprecedencted) {
          unprecedencted = this.balance();
        }
      }
    } else {
      const shallow = true,
            leftLeaningNode = this.findLeftLeaningNode(shallow);

      if (leftLeaningNode !== null) {
        unprecedencted = leftLeaningNode.balance();
      }
    }
  } else {
    unprecedencted = false;
  }

  return unprecedencted;
}

function remove() {
  const parentNode = this.getParentNode(),
        removedChildNode = this;  ///

  parentNode.removeChildNode(removedChildNode);
}

function tiltLeft() {
  let rightLeaning;

  rightLeaning = this.isRightLeaning();

  while (rightLeaning) {
    this.leanLeft();

    rightLeaning = this.isRightLeaning();
  }

  this.forEachChildNonTerrminalNode((nonTermionalNode) => {
    nonTermionalNode.tiltLeft();
  });
}

function leanLeft() {
  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

  const shallow = true,
        rightLeaningNode = effectiveDescendantNode.findRightLeaningNode(),
        rightLeftLeaningNode = rightLeaningNode.findLeftLeaningNode(shallow),
        rightLeaningNodeEffectiveAscendantNode = rightLeaningNode.retrieveEffectiveAscendantNode(),
        rightLeftLeaningNodeEffectiveAscendantNode = rightLeftLeaningNode.retrieveEffectiveAscendantNode(),
        rightLeaningAscendantNode = rightLeaningNodeEffectiveAscendantNode,  ///
        rightLeftLeaningAscendantNode = rightLeftLeaningNodeEffectiveAscendantNode;  ///

  effectiveDescendantNode.rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode);
}

function leanRight() {
  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

  const shallow = true,
        leftLeaningNode = effectiveDescendantNode.findLeftLeaningNode(),
        leftRightLeaningNode = leftLeaningNode.findRightLeaningNode(shallow),
        leftLeaningNodeEffectiveAscendantNode = leftLeaningNode.retrieveEffectiveAscendantNode(),
        leftRightLeaningNodeEffectiveAscendantNode = leftRightLeaningNode.retrieveEffectiveAscendantNode(),
        leftLeaningAscendantNode = leftLeaningNodeEffectiveAscendantNode,  ///
        leftRightLeaningAscendantNode = leftRightLeaningNodeEffectiveAscendantNode;  ///

  effectiveDescendantNode.rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode);
}

function rotateLeft(rightLeaningNode, rightLeftLeaningNode, rightLeaningAscendantNode, rightLeftLeaningAscendantNode) {
  let addedChildNodes,
      removedChildNodes;

  removedChildNodes = rightLeaningNode.removeAllButFirstChildNode();

  const rightChildNodes = removedChildNodes;  ///

  rightLeftLeaningAscendantNode.remove();

  removedChildNodes = this.removeAllButLastChildNode();

  const leftChildNodes = removedChildNodes; ///

  rightLeaningAscendantNode.remove();

  const startIndex = 0;

  addedChildNodes = [  ///
    ...leftChildNodes,
    rightLeftLeaningAscendantNode
  ];

  rightLeaningNode.addChildNodes(addedChildNodes, startIndex);

  addedChildNodes = [  ///
    rightLeaningAscendantNode,
    ...rightChildNodes
  ];

  this.addChildNodes(addedChildNodes, startIndex);

  let ruleName,
      precedence;

  ruleName = this.getRuleName();

  precedence = this.getPrecedence();

  const rightLeaningNodeRuleName = rightLeaningNode.getRuleName(),
      rightLeaningNodePrecedence = rightLeaningNode.getPrecedence();

  rightLeaningNode.setRuleName(ruleName);

  rightLeaningNode.setPrecedence(precedence);

  ruleName = rightLeaningNodeRuleName;  ///

  precedence = rightLeaningNodePrecedence;  ///

  this.setRuleName(ruleName);

  this.setPrecedence(precedence);
}

function rotateRight(leftLeaningNode, leftRightLeaningNode, leftLeaningAscendantNode, leftRightLeaningAscendantNode) {
  let addedChildNodes,
      removedChildNodes;

  removedChildNodes = leftLeaningNode.removeAllButLastChildNode();

  const leftChildNodes = removedChildNodes;  ///

  leftRightLeaningAscendantNode.remove();

  removedChildNodes = this.removeAllButFirstChildNode();

  const rightChildNodes = removedChildNodes; ///

  leftLeaningAscendantNode.remove();

  const startIndex = 0;

  addedChildNodes = [  ///
    leftRightLeaningAscendantNode,
    ...rightChildNodes,
  ];

  leftLeaningNode.addChildNodes(addedChildNodes, startIndex);

  addedChildNodes = [  ///
    ...leftChildNodes,
    leftLeaningAscendantNode
  ];

  this.addChildNodes(addedChildNodes, startIndex);

  let ruleName,
      precedence;

  ruleName = this.getRuleName();

  precedence = this.getPrecedence();

  const leftLeaningNodeRuleName = leftLeaningNode.getRuleName(),
        leftLeaningNodePrecedence = leftLeaningNode.getPrecedence();

  leftLeaningNode.setRuleName(ruleName);

  leftLeaningNode.setPrecedence(precedence);

  ruleName = leftLeaningNodeRuleName; ///

  precedence = leftLeaningNodePrecedence;  ///

  this.setRuleName(ruleName);

  this.setPrecedence(precedence);
}

function isLeftLeaning() {
  const leftLeaningNode = this.findLeftLeaningNode(),
        leftLeaning = (leftLeaningNode !== null);

  return leftLeaning;
}

function isRightLeaning() {
  const rightLeaningNode = this.findRightLeaningNode(),
        rightLeaning = (rightLeaningNode !== null);

  return rightLeaning;
}

function findLeftLeaningNode(shallow = false) {
  let leftLeaningNode = null;

  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

  effectiveDescendantNode.forwardsSomeChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

      if (shallow) {
        leftLeaningNode = effectiveDescendantNode;  ///
      } else {
        const shallow = true,
              rightLeaningNode = effectiveDescendantNode.findRightLeaningNode(shallow);

        if (rightLeaningNode !== null) {
          leftLeaningNode = effectiveDescendantNode;  ///
        }
      }
    }

    return true;
  });

  return leftLeaningNode;
}

function findRightLeaningNode(shallow = false) {
  let rightLeaningNode = null;

  const effectiveDescendantNode = this.retrieveEffectiveDescendantNode();

  effectiveDescendantNode.backwardsSomeChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode,  ///
            effectiveDescendantNode = nonTerminalNode.retrieveEffectiveDescendantNode();

      if (shallow) {
        rightLeaningNode = effectiveDescendantNode;  ///
      } else {
        const shallow = true,
              leftLeaningNode = effectiveDescendantNode.findLeftLeaningNode(shallow);

        if (leftLeaningNode !== null) {
          rightLeaningNode = effectiveDescendantNode; ///
        }
      }
    }

    return true;
  });

  return rightLeaningNode;
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
      const parentNode = this.getParentNode();

      if (parentNode !== null) {
        effectiveAscendantNode = parentNode; ///
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

function forEachChildNonTerrminalNode(callback) {
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
        ruleName = this.getRuleName(),
        NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
        nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

  return nonTerminalNode;
}

const precedenceMixins = {
  rewrite,
  balance,
  remove,
  tiltLeft,
  leanLeft,
  leanRight,
  rotateLeft,
  rotateRight,
  isLeftLeaning,
  isRightLeaning,
  findLeftLeaningNode,
  findRightLeaningNode,
  retrieveEffectiveAscendantNode,
  retrieveEffectiveDescendantNode,
  retrieveIrrelevantAscendantNode,
  retrieveIrrelevantDescendantNode,
  getSingleChildNonTerminalNode,
  forEachChildNonTerrminalNode,
  removeAllButFirstChildNode,
  removeAllButLastChildNode,
  createNonTerminalNode
};

export default precedenceMixins;
