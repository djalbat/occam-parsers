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
        name = 'document';

    return _possibleConstructorReturn(this, (DocumentNode.__proto__ || Object.getPrototypeOf(DocumentNode)).call(this, childNodes, name));
  }

  _createClass(DocumentNode, [{
    key: 'addChildNodes',
    value: function addChildNodes(childNodes) {
      spliceArray(this.childNodes, 0, 0, childNodes);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var strArray = _get(DocumentNode.prototype.__proto__ || Object.getPrototypeOf(DocumentNode.prototype), 'getStrArray', this).call(this),
          string = strArray.reduce(function (string, str) {
        string += str + '\n';

        return string;
      }, '');

      return string;
    }
  }]);

  return DocumentNode;
}(NonTerminalNode);

module.exports = DocumentNode;

function spliceArray(array, start, deleteCount, itemsArray) {
  var args = [start, deleteCount].concat(itemsArray);

  Array.prototype.splice.apply(array, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsInJlcXVpcmUiLCJEb2N1bWVudE5vZGUiLCJjaGlsZE5vZGVzIiwibmFtZSIsInNwbGljZUFycmF5Iiwic3RyQXJyYXkiLCJzdHJpbmciLCJyZWR1Y2UiLCJzdHIiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiaXRlbXNBcnJheSIsImFyZ3MiLCJjb25jYXQiLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsa0JBQWtCQyxRQUFRLGVBQVIsQ0FBdEI7O0lBRU1DLFk7OztBQUNKLDBCQUFjO0FBQUE7O0FBQ1osUUFBSUMsYUFBYSxFQUFqQjtBQUFBLFFBQ0lDLE9BQU8sVUFEWDs7QUFEWSx1SEFJTkQsVUFKTSxFQUlNQyxJQUpOO0FBS2I7Ozs7a0NBRWFELFUsRUFBWTtBQUN4QkUsa0JBQVksS0FBS0YsVUFBakIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUNBLFVBQW5DO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlHLGtJQUFKO0FBQUEsVUFDSUMsU0FBU0QsU0FBU0UsTUFBVCxDQUFnQixVQUFTRCxNQUFULEVBQWlCRSxHQUFqQixFQUFzQjtBQUM3Q0Ysa0JBQVVFLE1BQU0sSUFBaEI7O0FBRUEsZUFBT0YsTUFBUDtBQUNELE9BSlEsRUFJTixFQUpNLENBRGI7O0FBT0EsYUFBT0EsTUFBUDtBQUNEOzs7O0VBckJ3QlAsZTs7QUF3QjNCVSxPQUFPQyxPQUFQLEdBQWlCVCxZQUFqQjs7QUFFQSxTQUFTRyxXQUFULENBQXFCTyxLQUFyQixFQUE0QkMsS0FBNUIsRUFBbUNDLFdBQW5DLEVBQWdEQyxVQUFoRCxFQUE0RDtBQUMxRCxNQUFJQyxPQUFPLENBQUNILEtBQUQsRUFBUUMsV0FBUixFQUFxQkcsTUFBckIsQ0FBNEJGLFVBQTVCLENBQVg7O0FBRUFHLFFBQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxLQUF2QixDQUE2QlQsS0FBN0IsRUFBb0NJLElBQXBDO0FBQ0QiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERvY3VtZW50Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gW10sXG4gICAgICAgIG5hbWUgPSAnZG9jdW1lbnQnO1xuXG4gICAgc3VwZXIoY2hpbGROb2RlcywgbmFtZSk7XG4gIH1cblxuICBhZGRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICBzcGxpY2VBcnJheSh0aGlzLmNoaWxkTm9kZXMsIDAsIDAsIGNoaWxkTm9kZXMpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgdmFyIHN0ckFycmF5ID0gc3VwZXIuZ2V0U3RyQXJyYXkoKSxcbiAgICAgICAgc3RyaW5nID0gc3RyQXJyYXkucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgc3RyKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHN0ciArICdcXG4nO1xuXG4gICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvY3VtZW50Tm9kZTtcblxuZnVuY3Rpb24gc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICB2YXIgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcblxuICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbn1cbiJdfQ==