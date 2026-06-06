"use strict";

// parsed = this.definitions.some((definition) => {
//   let parsed;
//
//   const precedence = definition.getPrecedence();
//
//   state.setPrecedence(precedence);
//
//   callback = () => {
//     let parsed;
//
//     const precedence = state.getPrecedence();
//
//     nonTerminalNode.setPrecedence(precedence);
//
//     const rewrittenNonTerminalNode = nonTerminalNode.rewrite(state),
//           unprecedented = rewrittenNonTerminalNode.isUnprecedented(),
//           empty = rewrittenNonTerminalNode.isEmpty();
//
//     parsed = false;
//
//     if (!empty && !unprecedented) {
//       const node = rewrittenNonTerminalNode;  ///
//
//       nodes.push(node);
//
//       node.setChildNodesParentNode();
//
//       parsed = true;
//
//       if (callAhead !== null) {
//         state.resetPrecedence(savedPrecedence);
//
//         parsed = callAhead();
//
//         if (!parsed) {
//           nodes.pop();
//         }
//       }
//     }
//
//     return parsed;
//   };
//
//   clear(childNodes);
//
//   parsed = definition.parse(childNodes, state, callback, callAhead);
//
//   if (!parsed) {
//     state.resetPrecedence(savedPrecedence);
//   }
//
//   return parsed;
// });
//
// if (callAhead === null) {
//   state.resetPrecedence(savedPrecedence);
// }

// let parsed;
//
// const nodes = childNodes, ///
//       savedIndex = state.getSavedIndex();
//
// parsed = parseParts(this.parts, nodes, state, callback, callAhead);
//
// if (!parsed) {
//   state.backtrack(savedIndex);
// }
//
// return parsed;

// function parseOneOrMorePartsPart(part, count, nodes, state, callback, callAhead) {
//   let parsed;
//
//   if (callAhead === null) {
//     parsed = guard((nodes, state, callback, callAhead) => {
//       let parsed;
//
//       parsed = part.parse(nodes, state, callback, callAhead);
//
//       return parsed;
//     }, nodes, state, callback, callAhead);
//
//     if (parsed) {
//       count++;
//
//       parseOneOrMorePartsPart(part, count, nodes, state, callback, callAhead);
//     }
//
//     if (!parsed) {
//       if (count > 0) {
//         parsed = true;
//       }
//     }
//   } else {
//     parsed = guard((nodes, state, callback, callAhead) => {
//       let parsed;
//
//       parsed = part.parse(nodes, state, callback, () => {
//         let parsed;
//
//         parsed = callAhead();
//
//         if (!parsed) {
//           count++;
//
//           parsed = parseOneOrMorePartsPart(part, count, nodes, state, callback, callAhead);
//         }
//
//         return parsed;
//       });
//
//       return parsed;
//     }, nodes, state, callback, callAhead);
//   }
//
//   return parsed;
// }

// parse(context) {
//   let parsed;
//
//   const savedPrecedence = state.getSavedPrecedence();
//
//   parsed = this.partChoices.some((partChoice) => {
//     let parsed;
//
//     const part = partChoice.getPart(),
//       savedIndex = state.getSavedIndex(),
//       precedence = partChoice.getPrecedence(),
//       nodesLength = nodes.length;
//
//     if (precedence !== null) {
//       state.setPrecedence(precedence);
//     }
//
//     callback = (callAhead === null) ?
//       null :
//       () => {  ///
//         let parsed;
//
//         parsed = callAhead();
//
//         return parsed;
//       };
//
//     parsed = parsePart(part, nodes, state, callback, callAhead);
//
//     if (!parsed) {
//       const start = nodesLength;  ///
//
//       nodes.splice(start);
//
//       state.backtrack(savedIndex);
//     }
//
//     return parsed;
//   });
//
//   if (!parsed) {
//     state.resetPrecedence(savedPrecedence);
//   }
//
//   return parsed;
// }

// function parseOptionalPart(part, nodes, state, callback, callAhead) {
//   let parsed;
//
//   if (callAhead === null) {
//     parsed = guard((nodes, state, callback, callAhead) => {
//       let parsed;
//
//       parsed = part.parse(nodes, state, callback, callAhead);
//
//       return parsed;
//     }, nodes, state, callback, callAhead);
//
//     parsed = true;
//   } else {
//     parsed = callAhead();
//
//     if (!parsed) {
//       parsed = guard((nodes, state, callback, callAhead) => {
//         let parsed;
//
//         parsed = part.parse(nodes, state, callback, callAhead);
//
//         return parsed;
//       }, nodes, state, callback, callAhead);
//     }
//   }
//
//   return parsed;
// }

// function parseZeroOrMorePartsPart(part, count, nodes, state, callback, callAhead) {
//   let parsed;
//
//   if (callAhead === null) {
//     parsed = guard((nodes, state, callback, callAhead) => {
//       let parsed;
//
//       parsed = part.parse(nodes, state, callback, callAhead);
//
//       return parsed;
//     }, nodes, state, callback, callAhead);
//
//     if (parsed) {
//       count++;
//
//       parseZeroOrMorePartsPart(part, count, nodes, state, callback, callAhead);
//     }
//
//     parsed = true;
//   } else {
//     parsed = (count === 0) ?
//       callAhead() :
//       false;
//
//     if (!parsed) {
//       parsed = guard((nodes, state, callback, callAhead) => {
//         let parsed;
//
//         parsed = part.parse(nodes, state, callback, () => {
//           let parsed;
//
//           parsed = callAhead();
//
//           if (!parsed) {
//             count++;
//
//             parsed = parseZeroOrMorePartsPart(part, count, nodes, state, callback, callAhead);
//           }
//
//           return parsed;
//         });
//
//         return parsed;
//       }, nodes, state, callback, callAhead);
//     }
//   }
//
//   return parsed;
// }
