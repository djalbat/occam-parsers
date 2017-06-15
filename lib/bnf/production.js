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
      var childNode = arrayUtil.first(childNodes);

      nullified = childNode instanceof EpsilonTerminalNode; ///
    }
  }

  return nullified;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWwiLCJyZXF1aXJlIiwiTm9uVGVybWluYWxOb2RlIiwiRXBzaWxvblRlcm1pbmFsTm9kZSIsIlByb2R1Y3Rpb24iLCJuYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJmb3VuZCIsIm5vZGUiLCJjb25jYXQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZU9yTm9kZXMiLCJpbmNyZWFzZURlcHRoIiwidG9vRGVlcCIsImlzVG9vRGVlcCIsIkVycm9yIiwiZGVmaW5pdGlvbk5vZGVzIiwic29tZURlZmluaXRpb25QYXJzZWQiLCJzb21lIiwiZGVmaW5pdGlvbiIsInBhcnNlIiwiZGVmaW5pdGlvblBhcnNlZCIsImRlZmluaXRpb25Ob2Rlc0xlbmd0aCIsImxlbmd0aCIsIm5vZGVzIiwibGFzdE5vZGUiLCJsYXN0IiwibGFzdE5vZGVOdWxsaWZpZWQiLCJpc05vZGVOdWxsaWZpZWQiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUiLCJkZWNyZWFzZURlcHRoIiwibWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwibWF4aW11bVBhZGRpbmciLCJwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgiLCJkZWZpbml0aW9uc1N0cmluZyIsInJlZHVjZSIsImRlZmluaXRpb25TdHJpbmciLCJ0b1N0cmluZyIsInByb2R1Y3Rpb25OYW1lTGVuZ3RoIiwicGFkZGluZ0xlbmd0aCIsInBhZGRpbmciLCJzdHJpbmciLCJwcm9kdWN0aW9uIiwiQ2xhc3MiLCJnZXROYW1lIiwiZ2V0RGVmaW5pdGlvbnMiLCJnZXROb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBvc2l0aW9uIiwibnVsbGlmaWVkIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5v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UixlQUFwQixFQUFxQztBQUNuQyxRQUFNdUQsa0JBQWtCL0MsSUFBeEI7QUFBQSxRQUE4QjtBQUMxQmdELGlCQUFhRCxnQkFBZ0JFLGFBQWhCLEVBRGpCO0FBQUEsUUFFSUMsbUJBQW1CRixXQUFXaEMsTUFGbEM7O0FBSUEsUUFBSWtDLHFCQUFxQixDQUF6QixFQUE0QjtBQUMxQixVQUFNQyxZQUFZN0QsVUFBVThELEtBQVYsQ0FBZ0JKLFVBQWhCLENBQWxCOztBQUVBRixrQkFBYUsscUJBQXFCMUQsbUJBQWxDLENBSDBCLENBRzhCO0FBQ3pEO0FBQ0Y7O0FBRUQsU0FBT3FELFNBQVA7QUFDRCIsImZpbGUiOiJwcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24nKTtcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb25zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob2RlO1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmb3VuZCA9ICh0aGlzLm5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBhZGREZWZpbml0aW9ucyhkZWZpbml0aW9ucykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB0aGlzLmRlZmluaXRpb25zLmNvbmNhdChkZWZpbml0aW9ucyk7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgZGVmaW5pdGlvbk5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lRGVmaW5pdGlvblBhcnNlZCA9IHRoaXMuZGVmaW5pdGlvbnMuc29tZShmdW5jdGlvbihkZWZpbml0aW9uKSB7XG4gICAgICBkZWZpbml0aW9uTm9kZXMgPSBkZWZpbml0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb25QYXJzZWQgPSAoZGVmaW5pdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25QYXJzZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoc29tZURlZmluaXRpb25QYXJzZWQpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25Ob2Rlc0xlbmd0aCA9IGRlZmluaXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICBub2RlcyA9IGRlZmluaXRpb25Ob2RlcywgIC8vL1xuICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgICAgICAgbGFzdE5vZGVOdWxsaWZpZWQgPSBpc05vZGVOdWxsaWZpZWQobGFzdE5vZGUpO1xuXG4gICAgICAgIGlmIChsYXN0Tm9kZU51bGxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIG5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24udG9TdHJpbmcoKTtcbiAgXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVMZW5ndGggPSB0aGlzLm5hbWUubGVuZ3RoLCAgLy8vXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCAtIHByb2R1Y3Rpb25OYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCksXG4gICAgICAgICAgc3RyaW5nID0gYFxcblxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtkZWZpbml0aW9uc1N0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uLCBDbGFzcyA9IFByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBwcm9kdWN0aW9uLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpO1xuXG4gICAgcHJvZHVjdGlvbiA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7IC8vL1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cblxuICByZXR1cm4gcGFkZGluZztcbn1cblxuZnVuY3Rpb24gaXNOb2RlTnVsbGlmaWVkKG5vZGUpIHtcbiAgbGV0IG51bGxpZmllZCA9IGZhbHNlO1xuXG4gIGlmIChub2RlIGluc3RhbmNlb2YgTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpO1xuXG4gICAgICBudWxsaWZpZWQgPSAoY2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvblRlcm1pbmFsTm9kZSk7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsaWZpZWQ7XG59XG4iXX0=