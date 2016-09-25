'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var EmptyParseTree = function (_ParseTree) {
  _inherits(EmptyParseTree, _ParseTree);

  function EmptyParseTree() {
    _classCallCheck(this, EmptyParseTree);

    return _possibleConstructorReturn(this, (EmptyParseTree.__proto__ || Object.getPrototypeOf(EmptyParseTree)).apply(this, arguments));
  }

  _createClass(EmptyParseTree, null, [{
    key: 'fromDepth',
    value: function fromDepth(depth) {
      var lines = [],
          index = 0;

      while (index < depth) {
        lines[index++] = '';
      }

      var emptyParseTree = new ParseTree(lines);

      return emptyParseTree;
    }
  }]);

  return EmptyParseTree;
}(ParseTree);

module.exports = EmptyParseTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvZW1wdHkuanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwicmVxdWlyZSIsIkVtcHR5UGFyc2VUcmVlIiwiZGVwdGgiLCJsaW5lcyIsImluZGV4IiwiZW1wdHlQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjs7SUFFTUMsYzs7Ozs7Ozs7Ozs7OEJBQ2FDLEssRUFBTztBQUN0QixVQUFJQyxRQUFRLEVBQVo7QUFBQSxVQUNJQyxRQUFRLENBRFo7O0FBR0EsYUFBT0EsUUFBUUYsS0FBZixFQUFzQjtBQUNwQkMsY0FBTUMsT0FBTixJQUFpQixFQUFqQjtBQUNEOztBQUVELFVBQUlDLGlCQUFpQixJQUFJTixTQUFKLENBQWNJLEtBQWQsQ0FBckI7O0FBRUEsYUFBT0UsY0FBUDtBQUNEOzs7O0VBWjBCTixTOztBQWU3Qk8sT0FBT0MsT0FBUCxHQUFpQk4sY0FBakIiLCJmaWxlIjoiZW1wdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgRW1wdHlQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbURlcHRoKGRlcHRoKSB7XG4gICAgdmFyIGxpbmVzID0gW10sXG4gICAgICAgIGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGRlcHRoKSB7XG4gICAgICBsaW5lc1tpbmRleCsrXSA9ICcnO1xuICAgIH1cblxuICAgIHZhciBlbXB0eVBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIGVtcHR5UGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW1wdHlQYXJzZVRyZWU7XG4iXX0=