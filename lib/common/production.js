'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    Definition = require('./definition'),
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
          lastNode = arrayUtil.last(nodes),
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
      var childNode = arrayUtil.first(childNodes);

      nullified = childNode instanceof EpsilonTerminalNode; ///
    }
  }

  return nullified;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiRGVmaW5pdGlvbiIsIk5vblRlcm1pbmFsTm9kZSIsIkVwc2lsb25UZXJtaW5hbE5vZGUiLCJQcm9kdWN0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSIsInByb2R1Y3Rpb25OYW1lIiwiZm91bmQiLCJub2RlIiwiY29uY2F0IiwiY29udGV4dCIsIm5vV2hpdGVzcGFjZSIsIm5vZGVPck5vZGVzIiwiaW5jcmVhc2VEZXB0aCIsInRvb0RlZXAiLCJpc1Rvb0RlZXAiLCJFcnJvciIsImRlZmluaXRpb25Ob2RlcyIsInNvbWVEZWZpbml0aW9uUGFyc2VkIiwic29tZSIsImRlZmluaXRpb24iLCJwYXJzZSIsImRlZmluaXRpb25QYXJzZWQiLCJkZWZpbml0aW9uTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub2RlcyIsImxhc3ROb2RlIiwibGFzdCIsImxhc3ROb2RlTnVsbGlmaWVkIiwiaXNOb2RlTnVsbGlmaWVkIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lIiwiZGVjcmVhc2VEZXB0aCIsIm1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCIsIm1heGltdW1QYWRkaW5nIiwicGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoIiwiZGVmaW5pdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJkZWZpbml0aW9uU3RyaW5nIiwidG9TdHJpbmciLCJwcm9kdWN0aW9uTmFtZUxlbmd0aCIsInBhZGRpbmdMZW5ndGgiLCJwYWRkaW5nIiwic3RyaW5nIiwibGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsIm1hcHBpbmdzIiwiZ2V0TmFtZSIsIm1hcFN5bWJvbFNlcXVlbmNlcyIsInN5bWJvbFNlcXVlbmNlIiwiZnJvbVN5bWJvbFNlcXVlbmNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibnVsbGlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwiY2hpbGROb2RlIiwiZmlyc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGVBQVIsQ0FBbEI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGNBQVIsQ0FEbkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FGeEI7QUFBQSxJQUdNRyxzQkFBc0JILFFBQVEseUJBQVIsQ0FINUI7O0lBS01JLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLElBQS9CLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzRDQUV1QkMsYyxFQUFnQjtBQUN0QyxVQUFNQyxRQUFTLEtBQUtKLElBQUwsS0FBY0csY0FBN0I7O0FBRUEsYUFBT0MsS0FBUDtBQUNEOzs7NEJBRU9KLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7bUNBRWNDLFcsRUFBYTtBQUMxQixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7NEJBRU9JLEksRUFBTTtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7bUNBRWNKLFcsRUFBYTtBQUMxQixXQUFLQSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJLLE1BQWpCLENBQXdCTCxXQUF4QixDQUFuQjtBQUNEOzs7MEJBRUtNLE8sRUFBU0MsWSxFQUFjO0FBQzNCLFVBQUlDLGNB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UDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnRELFVBQWpCOztBQUVBLFNBQVNtQyx3QkFBVCxDQUFrQ00sYUFBbEMsRUFBaUQ7QUFDL0MsTUFBSUMsVUFBVSxFQUFkOztBQUVBLE9BQUssSUFBSWEsV0FBVyxDQUFwQixFQUF1QkEsV0FBV2QsYUFBbEMsRUFBaURjLFVBQWpELEVBQTZEO0FBQzNEYixlQUFXLEdBQVg7QUFDRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0Q7O0FBRUQsU0FBU2YsZUFBVCxDQUF5QnJCLElBQXpCLEVBQStCO0FBQzdCLE1BQUlrRCxZQUFZLEtBQWhCOztBQUVBLE1BQUlsRCxnQkFBZ0JSLGVBQXBCLEVBQXFDO0FBQ25DLFFBQU0yRCxrQkFBa0JuRCxJQUF4QjtBQUFBLFFBQThCO0FBQ3hCb0QsaUJBQWFELGdCQUFnQkUsYUFBaEIsRUFEbkI7QUFBQSxRQUVNQyxtQkFBbUJGLFdBQVdwQyxNQUZwQzs7QUFJQSxRQUFJc0MscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFVBQU1DLFlBQVlsRSxVQUFVbUUsS0FBVixDQUFnQkosVUFBaEIsQ0FBbEI7O0FBRUFGLGtCQUFhSyxxQkFBcUI5RCxtQkFBbEMsQ0FIMEIsQ0FHOEI7QUFDekQ7QUFDRjs7QUFFRCxTQUFPeUQsU0FBUDtBQUNEIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuL2RlZmluaXRpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS90ZXJtaW5hbC9lcHNpbG9uJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG4gIFxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kID0gKHRoaXMubmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBcbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBcbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cbiAgXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cbiAgXG4gIGFkZERlZmluaXRpb25zKGRlZmluaXRpb25zKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IHRoaXMuZGVmaW5pdGlvbnMuY29uY2F0KGRlZmluaXRpb25zKTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBwcm9kdWN0aW9uICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IGRlZmluaXRpb25Ob2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZURlZmluaXRpb25QYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgZGVmaW5pdGlvbk5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25QYXJzZWQgPSAoZGVmaW5pdGlvbk5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvblBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lRGVmaW5pdGlvblBhcnNlZCkge1xuICAgICAgY29uc3QgZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID0gZGVmaW5pdGlvbk5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgIG5vZGVzID0gZGVmaW5pdGlvbk5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIGxhc3ROb2RlID0gYXJyYXlVdGlsLmxhc3Qobm9kZXMpLFxuICAgICAgICAgICAgICBsYXN0Tm9kZU51bGxpZmllZCA9IGlzTm9kZU51bGxpZmllZChsYXN0Tm9kZSk7XG5cbiAgICAgICAgaWYgKGxhc3ROb2RlTnVsbGlmaWVkKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnQgPSAtMSxcbiAgICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgICBub2Rlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG5cbiAgdG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi50b1N0cmluZygpO1xuICBcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHRoaXMubmFtZS5sZW5ndGgsICAvLy9cbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIC0gcHJvZHVjdGlvbk5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke2RlZmluaXRpb25zU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IERlZmluaXRpb24uZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cblxuICByZXR1cm4gcGFkZGluZztcbn1cblxuZnVuY3Rpb24gaXNOb2RlTnVsbGlmaWVkKG5vZGUpIHtcbiAgbGV0IG51bGxpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChub2RlIGluc3RhbmNlb2YgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgbnVsbGlmaWVkID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25UZXJtaW5hbE5vZGUpOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbGlmaWVkO1xufVxuIl19