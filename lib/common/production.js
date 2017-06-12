'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Definition = require('./definition'),
    NonTerminalNode = require('./node/nonTerminal'),
    EpsilonTerminalNode = require('./node/terminal/epsilon');

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
    key: 'toString',
    value: function toString(maximumProductionNameLength) {
      var definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.toString();

        if (definitionsString === null) {
          definitionsString = definitionString;
        } else {
          definitionsString = definitionsString + ' | ' + definitionString;
        }

        return definitionsString;
      }, null),
          productionNameLength = this.name.length,
          ///
      paddingLength = maximumProductionNameLength - productionNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n  ' + this.name + padding + ' ::= ' + definitionsString + '\n';

      return string;
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

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, significantTokenTypes, mappings) {
      var name = line.getName(),
          definitions = line.mapSymbolSequences(function (symbolSequence) {
        var definition = Definition.fromSymbolSequence(symbolSequence, significantTokenTypes);

        return definition;
      }),
          Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode,
          ///
      production = new Production(name, definitions, Node);

      return production;
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJub2RlIiwiY29uY2F0IiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvblN0cmluZyIsInRvU3RyaW5nIiwicHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJsZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsInN0cmluZyIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lRGVmaW5pdGlvblBhcnNlZCIsInNvbWUiLCJwYXJzZSIsImRlZmluaXRpb25QYXJzZWQiLCJkZWZpbml0aW9uTm9kZXNMZW5ndGgiLCJub2RlcyIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlTnVsbGlmaWVkIiwiaXNOb2RlTnVsbGlmaWVkIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwiZGVjcmVhc2VEZXB0aCIsImxpbmUiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsImdldE5hbWUiLCJtYXBTeW1ib2xTZXF1ZW5jZXMiLCJzeW1ib2xTZXF1ZW5jZSIsImZyb21TeW1ib2xTZXF1ZW5jZSIsImhhc093blByb3BlcnR5IiwicHJvZHVjdGlvbiIsIkNsYXNzIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibnVsbGlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwiY2hpbGROb2RlIiwiZmlyc3QiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGFBQWFDLFFBQVEsY0FBUixDQUFuQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxvQkFBUixDQUR4QjtBQUFBLElBRU1FLHNCQUFzQkYsUUFBUSx5QkFBUixDQUY1Qjs7SUFJTUcsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsSUFBL0IsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7NENBRXVCQyxjLEVBQWdCO0FBQ3RDLFVBQU1DLFFBQVMsS0FBS0osSUFBTCxLQUFjRyxjQUE3Qjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7Ozs0QkFFT0osSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0MsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs0QkFFT0ksSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0osVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkssTUFBakIsQ0FBd0JMLFdBQXhCLENBQW5CO0FBQ0Q7Ozs2QkFFUU0sMkIsRUFBNkI7QUFDcEMsVUFBTUMsb0JBQW9CLEtBQUtQLFdBQUwsQ0FBaUJRLE1B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IjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vZGVmaW5pdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24nKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cbiAgXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9kZTtcbiAgfVxuXG4gIGlzRm91bmRCeVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgZm91bmQgPSAodGhpcy5uYW1lID09PSBwcm9kdWN0aW9uTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIFxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIFxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuICBcbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuICBcbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gdGhpcy5kZWZpbml0aW9ucy5jb25jYXQoZGVmaW5pdGlvbnMpO1xuICB9XG4gIFxuICB0b1N0cmluZyhtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBgJHtkZWZpbml0aW9uc1N0cmluZ30gfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gdGhpcy5uYW1lLmxlbmd0aCwgIC8vL1xuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggLSBwcm9kdWN0aW9uTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9XFxuYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblBhcnNlZCA9IChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVEZWZpbml0aW9uUGFyc2VkKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTm9kZXNMZW5ndGggPSBkZWZpbml0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgICAgICAgbGFzdE5vZGVOdWxsaWZpZWQgPSBpc05vZGVOdWxsaWZpZWQobGFzdE5vZGUpO1xuXG4gICAgICAgIGlmIChsYXN0Tm9kZU51bGxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpID9cbiAgICAgICAgICAgICAgICAgICBtYXBwaW5nc1tuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24sIENsYXNzID0gUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHByb2R1Y3Rpb24uZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG4gICAgXG4gICAgcHJvZHVjdGlvbiA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7IC8vL1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcbiAgXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cbiAgXG4gIHJldHVybiBwYWRkaW5nO1xufVxuXG5mdW5jdGlvbiBpc05vZGVOdWxsaWZpZWQobm9kZSkge1xuICBsZXQgbnVsbGlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIG51bGxpZmllZCA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uVGVybWluYWxOb2RlKTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxpZmllZDtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=