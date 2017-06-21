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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJkZWZpbml0aW9uc0V4aXN0IiwicHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsIm5vZGUiLCJjb25jYXQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsIm5vZGVzIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVOdWxsaWZpZWQiLCJpc05vZGVOdWxsaWZpZWQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJkZWNyZWFzZURlcHRoIiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzdHJpbmciLCJwcm9kdWN0aW9uIiwiQ2xhc3MiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibnVsbGlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzTGVuZ3RoIiwiY2hpbGROb2RlIiwiZmlyc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGVBQVIsQ0FBbEI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsNEJBQVIsQ0FEeEI7QUFBQSxJQUVNRSxzQkFBc0JGLFFBQVEsaUNBQVIsQ0FGNUI7O0lBSU1HLFU7QUFDSixzQkFBWUMsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLElBQS9CLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtGLElBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixVQUFNQyxvQkFBb0IsS0FBS0YsV0FBTCxDQUFpQkcsTUFBM0M7QUFBQSxVQUNNQyxtQkFBb0JGLG9CQUFvQixDQUQ5Qzs7QUFHQSxhQUFPRSxnQkFBUDtBQUNEOzs7NENBRXVCQyxjLEVBQWdCO0FBQ3RDLFVBQU1DLFFBQVMsS0FBS1AsSUFBTCxLQUFjTSxjQUE3Qjs7QUFFQSxhQUFPQyxLQUFQO0FBQ0Q7Ozs0QkFFT1AsSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY0MsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs0QkFFT08sSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzttQ0FFY1AsVyxFQUFhO0FBQzFCLFdBQUtBLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQlEsTUFBakIsQ0FBd0JSLFdBQXhCLENBQW5CO0FBQ0Q7OzswQkFFS1MsTyxFQUFTQyxZLEVBQWM7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QUFwQixFQUF1QkEsV0FBV1YsYUFBbEMsRUFBaURVLFVBQWpELEVBQTZEO0FBQzNEVCxlQUFXLEdBQVg7QUFDRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0Q7O0FBRUQsU0FBU2YsZUFBVCxDQUF5QnBCLElBQXpCLEVBQStCO0FBQzdCLE1BQUk2QyxZQUFZLEtBQWhCOztBQUVBLE1BQUk3QyxnQkFBZ0JYLGVBQXBCLEVBQXFDO0FBQ25DLFFBQU15RCxrQkFBa0I5QyxJQUF4QjtBQUFBLFFBQThCO0FBQzFCK0MsaUJBQWFELGdCQUFnQkUsYUFBaEIsRUFEakI7QUFBQSxRQUVJQyxtQkFBbUJGLFdBQVduRCxNQUZsQzs7QUFJQSxRQUFJcUQscUJBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFVBQU1DLFlBQVkvRCxVQUFVZ0UsS0FBVixDQUFnQkosVUFBaEIsQ0FBbEI7O0FBRUFGLGtCQUFhSyxxQkFBcUI1RCxtQkFBbEMsQ0FIMEIsQ0FHOEI7QUFDekQ7QUFDRjs7QUFFRCxTQUFPdUQsU0FBUDtBQUNEIiwiZmlsZSI6InByb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cbiAgXG4gIGRvRGVmaW5pdGlvbnNFeGlzdCgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25zRXhpc3QgPSAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnNFeGlzdDtcbiAgfVxuXG4gIGlzRm91bmRCeVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgZm91bmQgPSAodGhpcy5uYW1lID09PSBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gdGhpcy5kZWZpbml0aW9ucy5jb25jYXQoZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBwcm9kdWN0aW9uICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IGRlZmluaXRpb25Ob2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZURlZmluaXRpb25QYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUGFyc2VkID0gKGRlZmluaXRpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uUGFyc2VkO1xuICAgIH0pO1xuXG4gICAgaWYgKHNvbWVEZWZpbml0aW9uUGFyc2VkKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTm9kZXNMZW5ndGggPSBkZWZpbml0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbGFzdE5vZGUgPSBhcnJheVV0aWwubGFzdChub2RlcyksXG4gICAgICAgICAgICAgIGxhc3ROb2RlTnVsbGlmaWVkID0gaXNOb2RlTnVsbGlmaWVkKGxhc3ROb2RlKTtcblxuICAgICAgICBpZiAobGFzdE5vZGVOdWxsaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IC0xLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIG5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24udG9TdHJpbmcoKTtcbiAgXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gcHJvZHVjdGlvbk5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggLSBwcm9kdWN0aW9uTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9IDtgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uLCBDbGFzcyA9IFByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpO1xuXG4gICAgcHJvZHVjdGlvbiA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSB7XG4gIGxldCBwYWRkaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9ICcgJztcbiAgfVxuXG4gIHJldHVybiBwYWRkaW5nO1xufVxuXG5mdW5jdGlvbiBpc05vZGVOdWxsaWZpZWQobm9kZSkge1xuICBsZXQgbnVsbGlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIG51bGxpZmllZCA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uVGVybWluYWxOb2RlKTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxpZmllZDtcbn1cbiJdfQ==