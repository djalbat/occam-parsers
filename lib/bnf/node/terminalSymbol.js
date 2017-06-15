'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var TerminalSymbolNode = function (_NonTerminalNode) {
  _inherits(TerminalSymbolNode, _NonTerminalNode);

  function TerminalSymbolNode() {
    _classCallCheck(this, TerminalSymbolNode);

    return _possibleConstructorReturn(this, (TerminalSymbolNode.__proto__ || Object.getPrototypeOf(TerminalSymbolNode)).apply(this, arguments));
  }

  _createClass(TerminalSymbolNode, [{
    key: 'generatePart',
    value: function generatePart(Parts, noWhitespace) {
      var content = this.getContent(),
          TerminalSymbolPart = Parts['TerminalSymbolPart'],
          terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

      return terminalSymbolPart;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      content = terminalNode.getContent();

      return content;
    }
  }], [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return NonTerminalNode.fromNodesAndProductionName(nodes, productionName, TerminalSymbolNode);
    }
  }]);

  return TerminalSymbolNode;
}(NonTerminalNode);

module.exports = TerminalSymbolNode;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJyZXF1aXJlIiwiVGVybWluYWxTeW1ib2xOb2RlIiwiUGFydHMiLCJub1doaXRlc3BhY2UiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIlRlcm1pbmFsU3ltYm9sUGFydCIsInRlcm1pbmFsU3ltYm9sUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJmaXJzdCIsInRlcm1pbmFsTm9kZSIsIm5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsK0JBQVIsQ0FBeEI7O0lBRU1DLGtCOzs7Ozs7Ozs7OztpQ0FDU0MsSyxFQUFPQyxZLEVBQWM7QUFDaEMsVUFBTUMsVUFBVSxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMscUJBQXFCSixNQUFNLG9CQUFOLENBRDNCO0FBQUEsVUFFTUsscUJBQXFCLElBQUlELGtCQUFKLENBQXVCRixPQUF2QixFQUFnQ0QsWUFBaEMsQ0FGM0I7O0FBSUEsYUFBT0ksa0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsaUJBQWlCQyxNQUFNSCxVQUFOLENBRHZCO0FBQUEsVUFFTUksZUFBZUYsY0FGckI7QUFBQSxVQUVzQztBQUNoQ04sZ0JBQVVRLGFBQWFQLFVBQWIsRUFIaEI7O0FBS0EsYUFBT0QsT0FBUDtBQUNEOzs7K0NBRWlDUyxLLEVBQU9DLGMsRUFBZ0I7QUFBRSxhQUFPZixnQkFBZ0JnQiwwQkFBaEIsQ0FBMkNGLEtBQTNDLEVBQWtEQyxjQUFsRCxFQUFrRWIsa0JBQWxFLENBQVA7QUFBK0Y7Ozs7RUFsQjNIRixlOztBQXFCakNpQixPQUFPQyxPQUFQLEdBQWlCaEIsa0JBQWpCOztBQUVBLFNBQVNVLEtBQVQsQ0FBZU8sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InRlcm1pbmFsU3ltYm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSBQYXJ0c1snVGVybWluYWxTeW1ib2xQYXJ0J10sXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50LCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sUGFydDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgVGVybWluYWxTeW1ib2xOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9Il19