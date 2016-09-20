'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('./nonTerminal');

var DocumentNode = function (_NonTerminalNode) {
  _inherits(DocumentNode, _NonTerminalNode);

  function DocumentNode() {
    _classCallCheck(this, DocumentNode);

    var childNodes = [];

    return _possibleConstructorReturn(this, (DocumentNode.__proto__ || Object.getPrototypeOf(DocumentNode)).call(this, childNodes));
  }

  _createClass(DocumentNode, [{
    key: 'addChildNodes',
    value: function addChildNodes(childNodes) {
      spliceArray(this.childNodes, 0, 0, childNodes);
    }
  }]);

  return DocumentNode;
}(NonTerminalNode);

module.exports = DocumentNode;

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwic3BsaWNlQXJyYXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiaXRlbXNBcnJheSIsImFyZ3MiLCJjb25jYXQiLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGtCQUFrQkMsUUFBUSxlQUFSLENBQXRCOztJQUVNQyxZOzs7QUFDSiwwQkFBYztBQUFBOztBQUNaLFFBQUlDLGFBQWEsRUFBakI7O0FBRFksdUhBR05BLFVBSE07QUFJYjs7OztrQ0FFYUEsVSxFQUFZO0FBQ3hCQyxrQkFBWSxLQUFLRCxVQUFqQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQ0EsVUFBbkM7QUFDRDs7OztFQVR3QkgsZTs7QUFZM0JLLE9BQU9DLE9BQVAsR0FBaUJKLFlBQWpCOztBQUVBLFNBQVNFLFdBQVQsQ0FBcUJHLEtBQXJCLEVBQTRCQyxLQUE1QixFQUFtQ0MsV0FBbkMsRUFBZ0RDLFVBQWhELEVBQTREO0FBQzFELE1BQUlDLE9BQU8sQ0FBQ0gsS0FBRCxFQUFRQyxXQUFSLEVBQXFCRyxNQUFyQixDQUE0QkYsVUFBNUIsQ0FBWDs7QUFFQUcsUUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCVCxLQUE3QixFQUFvQ0ksSUFBcEM7QUFDRCIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBbXTtcblxuICAgIHN1cGVyKGNoaWxkTm9kZXMpO1xuICB9XG5cbiAgYWRkQ2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgc3BsaWNlQXJyYXkodGhpcy5jaGlsZE5vZGVzLCAwLCAwLCBjaGlsZE5vZGVzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvY3VtZW50Tm9kZTtcblxuZnVuY3Rpb24gc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcblxuICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbn1cbiJdfQ==