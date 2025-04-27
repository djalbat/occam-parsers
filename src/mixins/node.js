"use strict";

import { arrayUtilities } from "necessary";

const { first, forwardsSome, backwardsSome } = arrayUtilities;

function getMultiplicity() {
  const childNodesLength = this.childNodes.length,
        multiplicity = childNodesLength;  ///

  return multiplicity;
}

function mapChildNode(callback) { return this.childNodes.map(callback); }

function someChildNode(callback) { return this.childNodes.some(callback); }

function findChildNode(callback) { return this.childNodes.find(callback); }

function everyChildNode(callback) { return this.childNodes.every(callback); }

function filterChildNode(callback) { return this.childNodes.filter(callback); }

function reduceChildNode(callback, initialValue) { return this.childNodes.reduce(callback, initialValue); }

function forEachChildNode(callback) { this.childNodes.forEach(callback); }

function forwardsSomeChildNode(callback) { return forwardsSome(this.childNodes, callback); }

function backwardsSomeChildNode(callback) { return backwardsSome(this.childNodes, callback); }

function indexOfChildNode(childNode) { return this.childNodes.indexOf(childNode); }

function setChildNodesParentNode(childNodes) {
  if (childNodes === undefined) {
    childNodes = [
      ...this.childNodes
    ];
  }

  const parentNode = this;

  childNodes.forEach((childNode) => {
    childNode.setParentNode(parentNode);
  });
}

function resetChildNodesParentNode(childNodes) {
  if (childNodes === undefined) {
    childNodes = [
      ...this.childNodes
    ];
  }

  const parentNode = null;

  childNodes.forEach((childNode) => {
    childNode.setParentNode(parentNode);
  });
}

function addChildNode(addedChildNode, startIndex) {
  const addedChildNodes = [
    addedChildNode
  ];

  this.addChildNodes(addedChildNodes, startIndex);
}

function addChildNodes(addedChildNodes, startIndex) {
  const deleteCount = 0;

  this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);
}

function removeChildNode(removedChildNode) {
  let removedChildNodes;

  removedChildNodes = [
    removedChildNode
  ];

  removedChildNodes = this.removeChildNodes(removedChildNodes);

  return removedChildNodes;
}

function removeChildNodes(removedChildNodes) {
  if (removedChildNodes === undefined) {
    removedChildNodes = [
      ...this.childNodes
    ];
  }

  const removedChildNodesLength = removedChildNodes.length;

  if (removedChildNodesLength === 0) {
    return;
  }

  const firstReplacedChildNode = first(removedChildNodes),
        startIndex = this.childNodes.indexOf(firstReplacedChildNode), ///
        deleteCount = removedChildNodesLength, ///
        addedChildNodes = [];

  removedChildNodes = this.spliceChildNodes(startIndex, deleteCount, addedChildNodes);

  return removedChildNodes;
}

function replaceChildNode(replacedChildNode, replacementChildNodes) {
  const replacedChildNodes = [
    replacedChildNode
  ];

  this.replaceChildNodes(replacedChildNodes, replacementChildNodes);
}

function replaceChildNodes(replacedChildNodes, replacementChildNodes) {
  const replacedChildNodesLength = replacedChildNodes.length,
        firstReplacedChildNode = first(replacedChildNodes),
        startIndex = this.childNodes.indexOf(firstReplacedChildNode), ///
        deleteCount = replacedChildNodesLength; ///

  this.spliceChildNodes(startIndex, deleteCount, replacementChildNodes);
}

function appendChildNode(appendedChildNode) {
  const appendedChildNodes = [
    appendedChildNode
  ];

  this.appendChildNodes(appendedChildNodes);
}

function appendChildNodes(appendedChildNodes) {
  const addedChildNodes = appendedChildNodes, ///
        multiplicity = this.getMultiplicity(),
        startIndex = multiplicity;  ///

  this.addChildNodes(addedChildNodes, startIndex);
}

function prependChildNode(prependedChildNode) {
  const prependedChildNodes = [
    prependedChildNode
  ];

  this.prependChildNodes(prependedChildNodes);
}

function prependChildNodes(prependedChildNodes) {
  const addedChildNodes = prependedChildNodes,  ///
        startIndex = 0;

  this.addChildNodes(addedChildNodes, startIndex);
}

function spliceChildNodes(startIndex, deleteCount, addedChildNodes = []) {
  const removedChildNodes = this.childNodes.splice(startIndex, deleteCount, ...addedChildNodes);

  this.resetChildNodesParentNode(removedChildNodes);

  this.setChildNodesParentNode(addedChildNodes);

  return removedChildNodes;
}

function sliceChildNodes(startIndex, endIndex = Infinity) {
  const childNodes = this.childNodes.slice(startIndex, endIndex);

  return childNodes;
}

function getAncestorNodes() {
  const ancestorNodes = [];

  let ancestorNode = this.parentNode; ///

  while (ancestorNode !== null) {
    ancestorNodes.push(ancestorNode);

    const parentNode = ancestorNode.getParentNode();

    ancestorNode = parentNode;  ///
  }

  return ancestorNodes;
}

function mapAncestorNode(callback) {
  const ancestorNodes = this.getAncestorNodes();

  return ancestorNodes.map(callback);
}

function someAncestorNode(callback) {
  let result = false;

  let index = 0,
      ancestorNode = this.parentNode; ///

  while (ancestorNode !== null) {
    result = callback(ancestorNode, index);

    if (result) {
      break;
    }

    const parentNode = ancestorNode.getParentNode();

    ancestorNode = parentNode;  ///

    index++;
  }

  return result;
}

function findAncestorNode(callback) {
  let index = 0,
      ancestorNode = this.parentNode; ///

  while (ancestorNode !== null) {
    const result = callback(ancestorNode, index);

    if (result) {
      return ancestorNode;
    }

    const parentNode = ancestorNode.getParentNode();

    ancestorNode = parentNode;  ///

    index++;
  }
}

function everyAncestorNode(callback) {
  const ancestorNodes = this.getAncestorNodes();

  return ancestorNodes.every(callback);
}

function filterAncestorNode(callback) {
  const ancestorNodes = this.getAncestorNodes();

  return ancestorNodes.filter(callback);
}

function reduceAncestorNode(callback, initialValue) {
  const ancestorNodes = this.getAncestorNodes();

  return ancestorNodes.reduce(callback, initialValue);
}

function forEachAncestorNode(callback) {
  const ancestorNodes = this.getAncestorNodes();

  ancestorNodes.forEach(callback);
}

const nodeMixins = {
  getMultiplicity,
  mapChildNode,
  someChildNode,
  findChildNode,
  everyChildNode,
  filterChildNode,
  reduceChildNode,
  forEachChildNode,
  forwardsSomeChildNode,
  backwardsSomeChildNode,
  indexOfChildNode,
  setChildNodesParentNode,
  resetChildNodesParentNode,
  addChildNode,
  addChildNodes,
  removeChildNode,
  removeChildNodes,
  replaceChildNode,
  replaceChildNodes,
  appendChildNode,
  appendChildNodes,
  prependChildNode,
  prependChildNodes,
  spliceChildNodes,
  sliceChildNodes,
  getAncestorNodes,
  mapAncestorNode,
  someAncestorNode,
  findAncestorNode,
  everyAncestorNode,
  filterAncestorNode,
  reduceAncestorNode,
  forEachAncestorNode
};

export default nodeMixins;
