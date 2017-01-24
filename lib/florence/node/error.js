'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../../bnf/node/terminal');

var ErrorNode = function (_TerminalNode) {
  _inherits(ErrorNode, _TerminalNode);

  function ErrorNode() {
    _classCallCheck(this, ErrorNode);

    return _possibleConstructorReturn(this, (ErrorNode.__proto__ || Object.getPrototypeOf(ErrorNode)).apply(this, arguments));
  }

  _createClass(ErrorNode, [{
    key: 'update',
    value: function update() {
      var productionName = this.getProductionName(),
          significantToken = this.getSignificantToken(),
          significantTokenType = productionName; ///

      significantToken.setType(significantTokenType);
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var firstNode = first(nodes),
          terminalNode = firstNode,
          ///
      significantToken = terminalNode.getSignificantToken(),
          errorNode = new ErrorNode(significantToken, productionName);

      nodes = [errorNode]; ///

      return nodes;
    }
  }]);

  return ErrorNode;
}(TerminalNode);

module.exports = ErrorNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9ub2RlL2Vycm9yLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJFcnJvck5vZGUiLCJwcm9kdWN0aW9uTmFtZSIsImdldFByb2R1Y3Rpb25OYW1lIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsInNldFR5cGUiLCJub2RlcyIsImZpcnN0Tm9kZSIsImZpcnN0IiwidGVybWluYWxOb2RlIiwiZXJyb3JOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEseUJBQVIsQ0FBbkI7O0lBRU1DLFM7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBSUMsaUJBQWlCLEtBQUtDLGlCQUFMLEVBQXJCO0FBQUEsVUFDSUMsbUJBQW1CLEtBQUtDLG1CQUFMLEVBRHZCO0FBQUEsVUFFSUMsdUJBQXVCSixjQUYzQixDQURPLENBR3FDOztBQUU1Q0UsdUJBQWlCRyxPQUFqQixDQUF5QkQsb0JBQXpCO0FBQ0Q7Ozs4QkFFZ0JFLEssRUFBT04sYyxFQUFnQjtBQUN0QyxVQUFJTyxZQUFZQyxNQUFNRixLQUFOLENBQWhCO0FBQUEsVUFDSUcsZUFBZUYsU0FEbkI7QUFBQSxVQUM4QjtBQUMxQkwseUJBQW1CTyxhQUFhTixtQkFBYixFQUZ2QjtBQUFBLFVBR0lPLFlBQVksSUFBSVgsU0FBSixDQUFjRyxnQkFBZCxFQUFnQ0YsY0FBaEMsQ0FIaEI7O0FBS0FNLGNBQVEsQ0FBQ0ksU0FBRCxDQUFSLENBTnNDLENBTWpCOztBQUVyQixhQUFPSixLQUFQO0FBQ0Q7Ozs7RUFsQnFCVCxZOztBQXFCeEJjLE9BQU9DLE9BQVAsR0FBaUJiLFNBQWpCOztBQUVBLFNBQVNTLEtBQVQsQ0FBZUssS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vYm5mL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgRXJyb3JOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgdXBkYXRlKCkge1xuICAgIHZhciBwcm9kdWN0aW9uTmFtZSA9IHRoaXMuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHByb2R1Y3Rpb25OYW1lOyAgLy8vXG5cbiAgICBzaWduaWZpY2FudFRva2VuLnNldFR5cGUoc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICB2YXIgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdE5vZGUsIC8vL1xuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZXJyb3JOb2RlID0gbmV3IEVycm9yTm9kZShzaWduaWZpY2FudFRva2VuLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBub2RlcyA9IFtlcnJvck5vZGVdOyAvLy9cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=