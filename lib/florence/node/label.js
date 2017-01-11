'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelNode = function () {
  function LabelNode() {
    _classCallCheck(this, LabelNode);
  }

  _createClass(LabelNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes,
          ///
      firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      significantToken = terminalNode.getSignificantToken(),
          significantTokenType = 'label'; ///

      significantToken.setType(significantTokenType);

      nodes = [terminalNode]; ///

      return nodes;
    }
  }]);

  return LabelNode;
}();

module.exports = LabelNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2xhYmVsLmpzIl0sIm5hbWVzIjpbIkxhYmVsTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJjaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInRlcm1pbmFsTm9kZSIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzZXRUeXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7OEJBQ2FDLEssRUFBT0MsYyxFQUFnQjtBQUN0QyxVQUFJQyxhQUFhRixLQUFqQjtBQUFBLFVBQXdCO0FBQ3BCRyx1QkFBaUJDLE1BQU1GLFVBQU4sQ0FEckI7QUFBQSxVQUVJRyxlQUFlRixjQUZuQjtBQUFBLFVBRW9DO0FBQ2hDRyx5QkFBbUJELGFBQWFFLG1CQUFiLEVBSHZCO0FBQUEsVUFJSUMsdUJBQXVCLE9BSjNCLENBRHNDLENBS0Y7O0FBRXBDRix1QkFBaUJHLE9BQWpCLENBQXlCRCxvQkFBekI7O0FBRUFSLGNBQVEsQ0FBQ0ssWUFBRCxDQUFSLENBVHNDLENBU2Q7O0FBRXhCLGFBQU9MLEtBQVA7QUFDRDs7Ozs7O0FBR0hVLE9BQU9DLE9BQVAsR0FBaUJaLFNBQWpCOztBQUVBLFNBQVNLLEtBQVQsQ0FBZVEsS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImxhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBMYWJlbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnbGFiZWwnOyAvLy9cblxuICAgIHNpZ25pZmljYW50VG9rZW4uc2V0VHlwZShzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICBub2RlcyA9IFt0ZXJtaW5hbE5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhYmVsTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=