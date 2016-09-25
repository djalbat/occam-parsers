'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('./nonTerminal');

var DocumentNode = function (_NonTerminalNode) {
  _inherits(DocumentNode, _NonTerminalNode);

  function DocumentNode() {
    _classCallCheck(this, DocumentNode);

    var childNodes = [],
        productionName = 'document'; ///

    return _possibleConstructorReturn(this, (DocumentNode.__proto__ || Object.getPrototypeOf(DocumentNode)).call(this, childNodes, productionName));
  }

  _createClass(DocumentNode, [{
    key: 'addChildNodes',
    value: function addChildNodes(childNodes) {
      spliceArray(this.childNodes, 0, 0, childNodes);
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var parseTree = _get(DocumentNode.prototype.__proto__ || Object.getPrototypeOf(DocumentNode.prototype), 'getParseTree', this).call(this);

      parseTree.shiftLine();

      return parseTree;
    }
  }]);

  return DocumentNode;
}(NonTerminalNode);

module.exports = DocumentNode;

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJzcGxpY2VBcnJheSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJpdGVtc0FycmF5IiwiYXJncyIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsZUFBUixDQUF0Qjs7SUFFTUMsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFDWixRQUFJQyxhQUFhLEVBQWpCO0FBQUEsUUFDSUMsaUJBQWlCLFVBRHJCLENBRFksQ0FFc0I7O0FBRnRCLHVIQUlORCxVQUpNLEVBSU1DLGNBSk47QUFLYjs7OztrQ0FFYUQsVSxFQUFZO0FBQ3hCRSxrQkFBWSxLQUFLRixVQUFqQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQ0EsVUFBbkM7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUcsb0lBQUo7O0FBRUFBLGdCQUFVQyxTQUFWOztBQUVBLGFBQU9ELFNBQVA7QUFDRDs7OztFQWxCd0JOLGU7O0FBcUIzQlEsT0FBT0MsT0FBUCxHQUFpQlAsWUFBakI7O0FBRUEsU0FBU0csV0FBVCxDQUFxQkssS0FBckIsRUFBNEJDLEtBQTVCLEVBQW1DQyxXQUFuQyxFQUFnREMsVUFBaEQsRUFBNEQ7QUFDMUQsTUFBSUMsT0FBTyxDQUFDSCxLQUFELEVBQVFDLFdBQVIsRUFBcUJHLE1BQXJCLENBQTRCRixVQUE1QixDQUFYOztBQUVBRyxRQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsS0FBdkIsQ0FBNkJULEtBQTdCLEVBQW9DSSxJQUFwQztBQUNEIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEb2N1bWVudE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IFtdLFxuICAgICAgICBwcm9kdWN0aW9uTmFtZSA9ICdkb2N1bWVudCc7ICAvLy9cblxuICAgIHN1cGVyKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHNwbGljZUFycmF5KHRoaXMuY2hpbGROb2RlcywgMCwgMCwgY2hpbGROb2Rlcyk7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHBhcnNlVHJlZSA9IHN1cGVyLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvY3VtZW50Tm9kZTtcblxuZnVuY3Rpb24gc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcblxuICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbn1cbiJdfQ==