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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJub2RlIiwiY29uY2F0IiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uU3RyaW5nIiwidG9TdHJpbmciLCJwcm9kdWN0aW9uTmFtZUxlbmd0aCIsImxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic3RyaW5nIiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsImRlZmluaXRpb25Ob2RlcyIsInNvbWVEZWZpbml0aW9uUGFyc2VkIiwic29tZSIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsIm5vZGVzIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVOdWxsaWZpZWQiLCJpc05vZGVOdWxsaWZpZWQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJkZWNyZWFzZURlcHRoIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwiQ2xhc3MiLCJnZXREZWZpbml0aW9ucyIsImdldE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicG9zaXRpb24iLCJudWxsaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJjaGlsZE5vZGUiLCJmaXJzdCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsYUFBYUMsUUFBUSxjQUFSLENBQW5CO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHhCO0FBQUEsSUFFTUUsc0JBQXNCRixRQUFRLHlCQUFSLENBRjVCOztJQUlNRyxVO0FBQ0osc0JBQVlDLElBQVosRUFBa0JDLFdBQWxCLEVBQStCQyxJQUEvQixFQUFxQztBQUFBOztBQUNuQyxTQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixJQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs0Q0FFdUJDLGMsRUFBZ0I7QUFDdEMsVUFBTUMsUUFBUyxLQUFLSixJQUFMLEtBQWNHLGNBQTdCOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7OzRCQUVPSixJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O21DQUVjQyxXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzRCQUVPSSxJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O21DQUVjSixXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCSyxNQUFqQixDQUF3QkwsV0FBeEIsQ0FBbkI7QUFDRDs7OzZCQUVRTSwyQixFQUE2QjtBQUNwQyxVQUFNQyxpQkFBaUJDLHlC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LEVBQXFCO0FBQUUsU0FBT0EsTUFBTUEsTUFBTWpELE1BQU4sR0FBZSxDQUFyQixDQUFQO0FBQWlDIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuL2RlZmluaXRpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS90ZXJtaW5hbC9lcHNpbG9uJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG4gIFxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kID0gKHRoaXMubmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBcbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBcbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cbiAgXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cbiAgXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuICBcbiAgdG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb25zU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gdGhpcy5uYW1lLmxlbmd0aCwgIC8vL1xuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggLSBwcm9kdWN0aW9uTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9YDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblBhcnNlZCA9IChkZWZpbml0aW9uTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVEZWZpbml0aW9uUGFyc2VkKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTm9kZXNMZW5ndGggPSBkZWZpbml0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbGFzdE5vZGUgPSBsYXN0KG5vZGVzKSxcbiAgICAgICAgICAgICAgbGFzdE5vZGVOdWxsaWZpZWQgPSBpc05vZGVOdWxsaWZpZWQobGFzdE5vZGUpO1xuXG4gICAgICAgIGlmIChsYXN0Tm9kZU51bGxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gRGVmaW5pdGlvbi5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpID9cbiAgICAgICAgICAgICAgICAgICBtYXBwaW5nc1tuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24sIENsYXNzID0gUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHByb2R1Y3Rpb24uZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG4gICAgXG4gICAgcHJvZHVjdGlvbiA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7IC8vL1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcbiAgXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cbiAgXG4gIHJldHVybiBwYWRkaW5nO1xufVxuXG5mdW5jdGlvbiBpc05vZGVOdWxsaWZpZWQobm9kZSkge1xuICBsZXQgbnVsbGlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIG51bGxpZmllZCA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uVGVybWluYWxOb2RlKTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxpZmllZDtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iXX0=