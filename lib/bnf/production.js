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

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsIm5vZGUiLCJjb25jYXQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGVzIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVOdWxsaWZpZWQiLCJpc05vZGVOdWxsaWZpZWQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJkZWNyZWFzZURlcHRoIiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzdHJpbmciLCJwcm9kdWN0aW9uIiwiQ2xhc3MiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibnVsbGlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwi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OEI7QUFDMUJnRCxpQkFBYUQsZ0JBQWdCRSxhQUFoQixFQURqQjtBQUFBLFFBRUlDLG1CQUFtQkYsV0FBV2hDLE1BRmxDOztBQUlBLFFBQUlrQyxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsVUFBTUMsWUFBWUMsTUFBTUosVUFBTixDQUFsQjs7QUFFQUYsa0JBQWFLLHFCQUFxQjFELG1CQUFsQyxDQUgwQixDQUc4QjtBQUN6RDtBQUNGOztBQUVELFNBQU9xRCxTQUFQO0FBQ0Q7O0FBRUQsU0FBU00sS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0I7O0FBRTFDLFNBQVNsQyxJQUFULENBQWNrQyxLQUFkLEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTXJDLE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kID0gKHRoaXMubmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcHJvZHVjdGlvbiAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBkZWZpbml0aW9uTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVEZWZpbml0aW9uUGFyc2VkID0gdGhpcy5kZWZpbml0aW9ucy5zb21lKGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcbiAgICAgIGRlZmluaXRpb25Ob2RlcyA9IGRlZmluaXRpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgY29uc3QgZGVmaW5pdGlvblBhcnNlZCA9IChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvblBhcnNlZDtcbiAgICB9KTtcblxuICAgIGlmIChzb21lRGVmaW5pdGlvblBhcnNlZCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID0gZGVmaW5pdGlvbk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgIG5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIGxhc3ROb2RlID0gbGFzdChub2RlcyksXG4gICAgICAgICAgICAgIGxhc3ROb2RlTnVsbGlmaWVkID0gaXNOb2RlTnVsbGlmaWVkKGxhc3ROb2RlKTtcblxuICAgICAgICBpZiAobGFzdE5vZGVOdWxsaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IC0xLFxuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICB0b1N0cmluZyhtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBtYXhpbXVtUGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpLFxuICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gdGhpcy5kZWZpbml0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oZGVmaW5pdGlvbnNTdHJpbmcsIGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25zU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gZGVmaW5pdGlvblN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmluaXRpb25zU3RyaW5nID0gYCR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuXFxuJHttYXhpbXVtUGFkZGluZ30gICAgIHwgJHtkZWZpbml0aW9uU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gdGhpcy5uYW1lLmxlbmd0aCwgIC8vL1xuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggLSBwcm9kdWN0aW9uTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiwgQ2xhc3MgPSBQcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gcHJvZHVjdGlvbi5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKTtcblxuICAgIHByb2R1Y3Rpb24gPSBuZXcgQ2xhc3MobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpOyAvLy9cblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGFkZGluZ0xlbmd0aDsgcG9zaXRpb24rKykge1xuICAgIHBhZGRpbmcgKz0gJyAnO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZU51bGxpZmllZChub2RlKSB7XG4gIGxldCBudWxsaWZpZWQgPSBmYWxzZTtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpO1xuXG4gICAgICBudWxsaWZpZWQgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvblRlcm1pbmFsTm9kZSk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIl19