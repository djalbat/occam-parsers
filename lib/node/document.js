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
        productionName = 'document';

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

      parseTree.shiftLine(); ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwicHJvZHVjdGlvbk5hbWUiLCJzcGxpY2VBcnJheSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJpdGVtc0FycmF5IiwiYXJncyIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxrQkFBa0JDLFFBQVEsZUFBUixDQUF0Qjs7SUFFTUMsWTs7O0FBQ0osMEJBQWM7QUFBQTs7QUFDWixRQUFJQyxhQUFhLEVBQWpCO0FBQUEsUUFDSUMsaUJBQWlCLFVBRHJCOztBQURZLHVIQUlORCxVQUpNLEVBSU1DLGNBSk47QUFLYjs7OztrQ0FFYUQsVSxFQUFZO0FBQ3hCRSxrQkFBWSxLQUFLRixVQUFqQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQ0EsVUFBbkM7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUcsb0lBQUo7O0FBRUFBLGdCQUFVQyxTQUFWLEdBSGEsQ0FHVzs7QUFFeEIsYUFBT0QsU0FBUDtBQUNEOzs7O0VBbEJ3Qk4sZTs7QUFxQjNCUSxPQUFPQyxPQUFQLEdBQWlCUCxZQUFqQjs7QUFFQSxTQUFTRyxXQUFULENBQXFCSyxLQUFyQixFQUE0QkMsS0FBNUIsRUFBbUNDLFdBQW5DLEVBQWdEQyxVQUFoRCxFQUE0RDtBQUMxRCxNQUFJQyxPQUFPLENBQUNILEtBQUQsRUFBUUMsV0FBUixFQUFxQkcsTUFBckIsQ0FBNEJGLFVBQTVCLENBQVg7O0FBRUFHLFFBQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlQsS0FBN0IsRUFBb0NJLElBQXBDO0FBQ0QiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lID0gJ2RvY3VtZW50JztcblxuICAgIHN1cGVyKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcbiAgfVxuXG4gIGFkZENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHNwbGljZUFycmF5KHRoaXMuY2hpbGROb2RlcywgMCwgMCwgY2hpbGROb2Rlcyk7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHBhcnNlVHJlZSA9IHN1cGVyLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnROb2RlO1xuXG5mdW5jdGlvbiBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gIHZhciBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuXG4gIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xufVxuIl19