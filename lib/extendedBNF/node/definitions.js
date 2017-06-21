'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionsNode = function (_NonTerminalNode) {
  _inherits(DefinitionsNode, _NonTerminalNode);

  function DefinitionsNode() {
    _classCallCheck(this, DefinitionsNode);

    return _possibleConstructorReturn(this, (DefinitionsNode.__proto__ || Object.getPrototypeOf(DefinitionsNode)).apply(this, arguments));
  }

  _createClass(DefinitionsNode, [{
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition, Parts) {
      var childNodes = this.getChildNodes(),
          definitionNodes = childNodes,
          ///
      definitions = definitionNodes.map(function (definitionNode) {
        var definition = definitionNode.generateDefinition(Definition, Parts);

        return definition;
      });

      return definitions;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardOdd(nodes),
          productionsNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DefinitionsNode);

      return productionsNode;
    }
  }]);

  return DefinitionsNode;
}(NonTerminalNode);

module.exports = DefinitionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9ub2RlL2RlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbCIsInJlcXVpcmUiLCJOb25UZXJtaW5hbE5vZGUiLCJEZWZpbml0aW9uc05vZGUiLCJEZWZpbml0aW9uIiwiUGFydHMiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImRlZmluaXRpb25Ob2RlcyIsImRlZmluaXRpb25zIiwibWFwIiwiZGVmaW5pdGlvbk5vZGUiLCJkZWZpbml0aW9uIiwiZ2VuZXJhdGVEZWZpbml0aW9uIiwibm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsImRpc2NhcmRPZGQiLCJwcm9kdWN0aW9uc05vZGUiLCJmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLGtCQUFSLENBQWxCO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLCtCQUFSLENBRHhCOztJQUdNRSxlOzs7Ozs7Ozs7Ozt3Q0FDZ0JDLFUsRUFBWUMsSyxFQUFPO0FBQ3JDLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLGtCQUFrQkYsVUFEeEI7QUFBQSxVQUNvQztBQUM5Qkcsb0JBQWNELGdCQUFnQkUsR0FBaEIsQ0FBb0IsVUFBU0MsY0FBVCxFQUF5QjtBQUN6RCxZQUFNQyxhQUFhRCxlQUFlRSxrQkFBZixDQUFrQ1QsVUFBbEMsRUFBOENDLEtBQTlDLENBQW5COztBQUVBLGVBQU9PLFVBQVA7QUFDRCxPQUphLENBRnBCOztBQVFBLGFBQU9ILFdBQVA7QUFDRDs7OytDQUVpQ0ssSyxFQUFPQyxjLEVBQWdCO0FBQ3ZELFVBQU1ULGFBQWFOLFVBQVVnQixVQUFWLENBQXFCRixLQUFyQixDQUFuQjtBQUFBLFVBQ01HLGtCQUFrQmYsZ0JBQWdCZ0IsK0JBQWhCLENBQWdESCxjQUFoRCxFQUFnRVQsVUFBaEUsRUFBNEVILGVBQTVFLENBRHhCOztBQUdBLGFBQU9jLGVBQVA7QUFDRDs7OztFQWxCMkJmLGU7O0FBcUI5QmlCLE9BQU9DLE9BQVAsR0FBaUJqQixlQUFqQiIsImZpbGUiOiJkZWZpbml0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGVmaW5pdGlvbnNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uLCBQYXJ0cykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25Ob2Rlcy5tYXAoZnVuY3Rpb24oZGVmaW5pdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZpbml0aW9uTm9kZS5nZW5lcmF0ZURlZmluaXRpb24oRGVmaW5pdGlvbiwgUGFydHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkT2RkKG5vZGVzKSxcbiAgICAgICAgICBwcm9kdWN0aW9uc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgRGVmaW5pdGlvbnNOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc05vZGU7XG4iXX0=