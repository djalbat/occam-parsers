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

    var childNodes = [],
        name = 'document';

    return _possibleConstructorReturn(this, (DocumentNode.__proto__ || Object.getPrototypeOf(DocumentNode)).call(this, childNodes, name));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwibmFtZSIsInNwbGljZUFycmF5IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Iiwic3RhcnQiLCJkZWxldGVDb3VudCIsIml0ZW1zQXJyYXkiLCJhcmdzIiwiY29uY2F0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzcGxpY2UiLCJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsZUFBUixDQUF0Qjs7SUFFTUMsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFDWixRQUFJQyxhQUFhLEVBQWpCO0FBQUEsUUFDSUMsT0FBTyxVQURYOztBQURZLHVIQUlORCxVQUpNLEVBSU1DLElBSk47QUFLYjs7OztrQ0FFYUQsVSxFQUFZO0FBQ3hCRSxrQkFBWSxLQUFLRixVQUFqQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQ0EsVUFBbkM7QUFDRDs7OztFQVZ3QkgsZTs7QUFhM0JNLE9BQU9DLE9BQVAsR0FBaUJMLFlBQWpCOztBQUVBLFNBQVNHLFdBQVQsQ0FBcUJHLEtBQXJCLEVBQTRCQyxLQUE1QixFQUFtQ0MsV0FBbkMsRUFBZ0RDLFVBQWhELEVBQTREO0FBQzFELE1BQUlDLE9BQU8sQ0FBQ0gsS0FBRCxFQUFRQyxXQUFSLEVBQXFCRyxNQUFyQixDQUE0QkYsVUFBNUIsQ0FBWDs7QUFFQUcsUUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCVCxLQUE3QixFQUFvQ0ksSUFBcEM7QUFDRCIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRG9jdW1lbnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBbXSxcbiAgICAgICAgbmFtZSA9ICdkb2N1bWVudCc7XG5cbiAgICBzdXBlcihjaGlsZE5vZGVzLCBuYW1lKTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHNwbGljZUFycmF5KHRoaXMuY2hpbGROb2RlcywgMCwgMCwgY2hpbGROb2Rlcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudE5vZGU7XG5cbmZ1bmN0aW9uIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgdmFyIGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG5cbiAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG59XG4iXX0=