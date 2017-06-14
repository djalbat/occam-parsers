'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNode = require('../common/node/nonTerminal'),
    EpsilonTerminalNode = require('../common/node/terminal/epsilon');

var Production = function () {
  function Production(name, definitions, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.definitions = definitions;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getDefinitions',
    value: function getDefinitions() {
      return this.definitions;
    }
  }, {
    key: 'getNode',
    value: function getNode() {
      return this.Node;
    }
  }, {
    key: 'isFoundByProductionName',
    value: function isFoundByProductionName(productionName) {
      var found = this.name === productionName;

      return found;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setDefinitions',
    value: function setDefinitions(definitions) {
      this.definitions = definitions;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
    }
  }, {
    key: 'addDefinitions',
    value: function addDefinitions(definitions) {
      this.definitions = this.definitions.concat(definitions);
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      console.log(this.name);

      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var definitionNodes = null;

      var someDefinitionParsed = this.definitions.some(function (definition) {
        definitionNodes = definition.parse(context, noWhitespace);

        var definitionParsed = definitionNodes !== null;

        return definitionParsed;
      });

      if (someDefinitionParsed) {
        var definitionNodesLength = definitionNodes.length;

        if (definitionNodesLength > 0) {
          var productionName = this.name,
              nodes = definitionNodes,
              ///
          lastNode = last(nodes),
              lastNodeNullified = isNodeNullified(lastNode);

          if (lastNodeNullified) {
            var start = -1,
                deleteCount = 1;

            nodes.splice(start, deleteCount);
          }

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }, {
    key: 'toString',
    value: function toString(maximumProductionNameLength) {
      var maximumPadding = paddingFromPaddingLength(maximumProductionNameLength),
          definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.toString();

        if (definitionsString === null) {
          definitionsString = definitionString;
        } else {
          definitionsString = definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString;
        }

        return definitionsString;
      }, null),
          productionNameLength = this.name.length,
          ///
      paddingLength = maximumProductionNameLength - productionNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n\n  ' + this.name + padding + ' ::= ' + definitionsString;

      return string;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Production;

      var name = production.getName(),
          definitions = production.getDefinitions(),
          Node = production.getNode();

      production = new Class(name, definitions, Node); ///

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;

function paddingFromPaddingLength(paddingLength) {
  var padding = '';

  for (var position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}

function isNodeNullified(node) {
  var nullified = false;

  if (node instanceof NonTerminalNode) {
    var nonTerminalNode = node,
        ///
    childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      var childNode = first(childNodes);

      nullified = childNode instanceof EpsilonTerminalNode; ///
    }
  }

  return nullified;
}

function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsIm5vZGUiLCJjb25jYXQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwiY29uc29sZSIsImxvZyIsIm5vZGVPck5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsImRlZmluaXRpb25Ob2RlcyIsInNvbWVEZWZpbml0aW9uUGFyc2VkIiwic29tZSIsImRlZmluaXRpb24iLCJwYXJzZSIsImRlZmluaXRpb25QYXJzZWQiLCJkZWZpbml0aW9uTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlTnVsbGlmaWVkIiwiaXNOb2RlTnVsbGlmaWVkIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwiZGVjcmVhc2VEZXB0aCIsIm1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwidG9TdHJpbmciLCJwcm9kdWN0aW9uTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic3RyaW5nIiwicHJvZHVjdGlvbiIsIkNsYXNzIiwiZ2V0TmFtZSIsImdldERlZmluaXRpb25zIiwiZ2V0Tm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwb3NpdGlvbiIsIm51bGxpZmllZCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hp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QUVBLE1BQUloRCxnQkFBZ0JULGVBQXBCLEVBQXFDO0FBQ25DLFFBQU0wRCxrQkFBa0JqRCxJQUF4QjtBQUFBLFFBQThCO0FBQzFCa0QsaUJBQWFELGdCQUFnQkUsYUFBaEIsRUFEakI7QUFBQSxRQUVJQyxtQkFBbUJGLFdBQVdoQyxNQUZsQzs7QUFJQSxRQUFJa0MscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFVBQU1DLFlBQVlDLE1BQU1KLFVBQU4sQ0FBbEI7O0FBRUFGLGtCQUFhSyxxQkFBcUI1RCxtQkFBbEMsQ0FIMEIsQ0FHOEI7QUFDekQ7QUFDRjs7QUFFRCxTQUFPdUQsU0FBUDtBQUNEOztBQUVELFNBQVNNLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCO0FBQzFDLFNBQVNsQyxJQUFULENBQWNrQyxLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTXJDLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kID0gKHRoaXMubmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSlcbiAgICBcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25QYXJzZWQgPSAoZGVmaW5pdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25QYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA9IGRlZmluaXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBub2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGxhc3Qobm9kZXMpLFxuICAgICAgICAgICAgICBsYXN0Tm9kZU51bGxpZmllZCA9IGlzTm9kZU51bGxpZmllZChsYXN0Tm9kZSk7XG5cbiAgICAgICAgaWYgKGxhc3ROb2RlTnVsbGlmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSAtMSxcbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICB0b1N0cmluZyhtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gdGhpcy5uYW1lLmxlbmd0aCwgIC8vL1xuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggLSBwcm9kdWN0aW9uTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiwgQ2xhc3MgPSBQcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcHJvZHVjdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKTtcblxuICAgIHByb2R1Y3Rpb24gPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpOyAvLy9cblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGFkZGluZ0xlbmd0aDsgcG9zaXRpb24rKykge1xuICAgIHBhZGRpbmcgKz0gJyAnO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZU51bGxpZmllZChub2RlKSB7XG4gIGxldCBudWxsaWZpZWQgPSBmYWxzZTtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpO1xuXG4gICAgICBudWxsaWZpZWQgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvblRlcm1pbmFsTm9kZSk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiJdfQ==