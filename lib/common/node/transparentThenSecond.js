'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../bnf/node/nonTerminal');

var TransparentThenSecondNode = function (_NonTerminalNode) {
  _inherits(TransparentThenSecondNode, _NonTerminalNode);

  function TransparentThenSecondNode() {
    _classCallCheck(this, TransparentThenSecondNode);

    return _possibleConstructorReturn(this, (TransparentThenSecondNode.__proto__ || Object.getPrototypeOf(TransparentThenSecondNode)).apply(this, arguments));
  }

  _createClass(TransparentThenSecondNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var secondNode = second(nodes);

      nodes = [secondNode];

      return nodes;
    }
  }]);

  return TransparentThenSecondNode;
}(NonTerminalNode);

module.exports = TransparentThenSecondNode;

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5TZWNvbmQuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwic2Vjb25kTm9kZSIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsNEJBQVIsQ0FBdEI7O0lBRU1DLHlCOzs7Ozs7Ozs7Ozs4QkFDYUMsSyxFQUFPQyxjLEVBQWdCO0FBQ3RDLFVBQUlDLGFBQWFDLE9BQU9ILEtBQVAsQ0FBakI7O0FBRUFBLGNBQVEsQ0FBQ0UsVUFBRCxDQUFSOztBQUVBLGFBQU9GLEtBQVA7QUFDRDs7OztFQVBxQ0gsZTs7QUFVeENPLE9BQU9DLE9BQVAsR0FBaUJOLHlCQUFqQjs7QUFFQSxTQUFTSSxNQUFULENBQWdCRyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InRyYW5zcGFyZW50VGhlblNlY29uZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBzZWNvbmROb2RlID0gc2Vjb25kKG5vZGVzKTtcblxuICAgIG5vZGVzID0gW3NlY29uZE5vZGVdO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnRUaGVuU2Vjb25kTm9kZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19