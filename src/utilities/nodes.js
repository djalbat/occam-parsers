"use strict";

export function popPartNodes(nodes, partNodes) {
  const nodesLength = nodes.length,
        partNodesLength = partNodes.length,
        start = nodesLength - partNodesLength;

  nodes.splice(start);
}
