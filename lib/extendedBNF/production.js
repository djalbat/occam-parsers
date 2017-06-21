'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    NonTerminalNode = require('../common/node/nonTerminal'),
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
    key: 'doDefinitionsExist',
    value: function doDefinitionsExist() {
      var definitionsLength = this.definitions.length,
          definitionsExist = definitionsLength > 0;

      return definitionsExist;
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
          productionName = this.name,
          ///
      productionNameLength = productionName.length,
          paddingLength = maximumProductionNameLength - productionNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n\n  ' + this.name + padding + ' ::= ' + definitionsString + ' ;';

      return string;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Production;

      var name = production.getName(),
          definitions = production.getDefinitions(),
          Node = production.getNode();

      production = new Class(name, definitions, Node);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leHRlbmRlZEJORi9wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJFcHNpbG9uVGVybWluYWxOb2RlIiwiUHJvZHVjdGlvbiIsIm5hbWUiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25zRXhpc3QiLCJwcm9kdWN0aW9uTmFtZSIsImZvdW5kIiwibm9kZSIsImNvbmNhdCIsImNvbnRleHQiLCJub1doaXRlc3BhY2UiLCJub2RlT3JOb2RlcyIsImluY3JlYXNlRGVwdGgiLCJ0b29EZWVwIiwiaXNUb29EZWVwIiwiRXJyb3IiLCJkZWZpbml0aW9uTm9kZXMiLCJzb21lRGVmaW5pdGlvblBhcnNlZCIsInNvbWUiLCJkZWZpbml0aW9uIiwicGFyc2UiLCJkZWZpbml0aW9uUGFyc2VkIiwiZGVmaW5pdGlvbk5vZGVzTGVuZ3RoIiwibm9kZXMiLCJsYXN0Tm9kZSIsImxhc3QiLCJsYXN0Tm9kZU51bGxpZmllZCIsImlzTm9kZU51bGxpZmllZCIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsImRlY3JlYXNlRGVwdGgiLCJtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJtYXhpbXVtUGFkZGluZyIsInBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aCIsImRlZmluaXRpb25zU3RyaW5nIiwicmVkdWNlIiwiZGVmaW5pdGlvblN0cmluZyIsInRvU3RyaW5nIiwicHJvZHVjdGlvbk5hbWVMZW5ndGgiLCJwYWRkaW5nTGVuZ3RoIiwicGFkZGluZyIsInN0cmluZyIsInByb2R1Y3Rpb24iLCJDbGFzcyIsImdldE5hbWUiLCJnZXREZWZpbml0aW9ucyIsImdldE5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwicG9zaXRpb24iLCJudWxsaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJjaGlsZE5vZGUiLCJmaXJzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSw0QkFBUixDQUR4QjtBQUFBLElBRU1FLHNCQUFzQkYsUUFBUSxpQ0FBUixDQUY1Qjs7SUFJTUcsVTtBQUNKLHNCQUFZQyxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsSUFBL0IsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0YsSUFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQU1DLG9CQUFvQixLQUFLRixXQUFMLENBQWlCRyxNQUEzQztBQUFBLFVBQ01DLG1CQUFvQkYsb0JBQW9CLENBRDlDOztBQUdBLGFBQU9FLGdCQUFQO0FBQ0Q7Ozs0Q0FFdUJDLGMsRUFBZ0I7QUFDdEMsVUFBTUMsUUFBUyxLQUFLUCxJQUFMLEtBQWNNLGNBQTdCOztBQUVBLGFBQU9DLEtBQVA7QUFDRDs7OzRCQUVPUCxJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O21DQUVjQyxXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OzRCQUVPTyxJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O21DQUVjUCxXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCUSxNQUFqQixDQUF3QlIsV0FBeEIsQ0FBbkI7QUFDRDs7OzBCQUVLUyxPLEVBQVND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UyxXQUFXLENBQXBCLEVBQXVCQSxXQUFXVixhQUFsQyxFQUFpRFUsVUFBakQsRUFBNkQ7QUFDM0RULGVBQVcsR0FBWDtBQUNEOztBQUVELFNBQU9BLE9BQVA7QUFDRDs7QUFFRCxTQUFTZixlQUFULENBQXlCcEIsSUFBekIsRUFBK0I7QUFDN0IsTUFBSTZDLFlBQVksS0FBaEI7O0FBRUEsTUFBSTdDLGdCQUFnQlgsZUFBcEIsRUFBcUM7QUFDbkMsUUFBTXlELGtCQUFrQjlDLElBQXhCO0FBQUEsUUFBOEI7QUFDMUIrQyxpQkFBYUQsZ0JBQWdCRSxhQUFoQixFQURqQjtBQUFBLFFBRUlDLG1CQUFtQkYsV0FBV25ELE1BRmxDOztBQUlBLFFBQUlxRCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsVUFBTUMsWUFBWS9ELFVBQVVnRSxLQUFWLENBQWdCSixVQUFoQixDQUFsQjs7QUFFQUYsa0JBQWFLLHFCQUFxQjVELG1CQUFsQyxDQUgwQixDQUc4QjtBQUN6RDtBQUNGOztBQUVELFNBQU91RCxTQUFQO0FBQ0QiLCJmaWxlIjoicHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIEVwc2lsb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IGRlZmluaXRpb25zO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXREZWZpbml0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9ucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuTm9kZTtcbiAgfVxuICBcbiAgZG9EZWZpbml0aW9uc0V4aXN0KCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbnNFeGlzdCA9IChkZWZpbml0aW9uc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9uc0V4aXN0O1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmb3VuZCA9ICh0aGlzLm5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB0aGlzLmRlZmluaXRpb25zLmNvbmNhdChkZWZpbml0aW9ucyk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25QYXJzZWQgPSAoZGVmaW5pdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25QYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA9IGRlZmluaXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBub2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgICAgICAgbGFzdE5vZGVOdWxsaWZpZWQgPSBpc05vZGVOdWxsaWZpZWQobGFzdE5vZGUpO1xuXG4gICAgICAgIGlmIChsYXN0Tm9kZU51bGxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgbWF4aW11bVBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IHRoaXMuZGVmaW5pdGlvbnMucmVkdWNlKGZ1bmN0aW9uKGRlZmluaXRpb25zU3RyaW5nLCBkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi50b1N0cmluZygpO1xuICBcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uc1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGRlZmluaXRpb25TdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkZWZpbml0aW9uc1N0cmluZyA9IGAke2RlZmluaXRpb25zU3RyaW5nfVxcblxcbiR7bWF4aW11bVBhZGRpbmd9ICAgICB8ICR7ZGVmaW5pdGlvblN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVMZW5ndGggPSBwcm9kdWN0aW9uTmFtZS5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCAtIHByb2R1Y3Rpb25OYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCksXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ30gO2A7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24sIENsYXNzID0gUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHByb2R1Y3Rpb24uZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG5cbiAgICBwcm9kdWN0aW9uID0gbmV3IENsYXNzKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcblxuICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgcGFkZGluZ0xlbmd0aDsgcG9zaXRpb24rKykge1xuICAgIHBhZGRpbmcgKz0gJyAnO1xuICB9XG5cbiAgcmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZU51bGxpZmllZChub2RlKSB7XG4gIGxldCBudWxsaWZpZWQgPSBmYWxzZTtcblxuICBpZiAobm9kZSBpbnN0YW5jZW9mIE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKTtcblxuICAgICAgbnVsbGlmaWVkID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEVwc2lsb25UZXJtaW5hbE5vZGUpOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbGlmaWVkO1xufVxuIl19