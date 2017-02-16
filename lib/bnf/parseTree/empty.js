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
    value: function fromDepth(depth, Class) {
      Class = Class || EmptyParseTree;

      var lines = [],
          index = 0;

      while (index < depth) {
        lines[index++] = '';
      }

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      args.unshift(lines);
      args.unshift(null);

      var emptyParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return emptyParseTree;
    }
  }]);

  return EmptyParseTree;
}(ParseTree);

module.exports = EmptyParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL2VtcHR5LmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJFbXB0eVBhcnNlVHJlZSIsImRlcHRoIiwiQ2xhc3MiLCJsaW5lcyIsImluZGV4IiwiYXJncyIsInVuc2hpZnQiLCJlbXB0eVBhcnNlVHJlZSIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGNBQVIsQ0FBaEI7O0lBRU1DLGM7Ozs7Ozs7Ozs7OzhCQUNhQyxLLEVBQU9DLEssRUFBZ0I7QUFDdENBLGNBQVFBLFNBQVNGLGNBQWpCOztBQUVBLFVBQUlHLFFBQVEsRUFBWjtBQUFBLFVBQ0lDLFFBQVEsQ0FEWjs7QUFHQSxhQUFPQSxRQUFRSCxLQUFmLEVBQXNCO0FBQ3BCRSxjQUFNQyxPQUFOLElBQWlCLEVBQWpCO0FBQ0Q7O0FBUnFDLHdDQUFOQyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFVdENBLFdBQUtDLE9BQUwsQ0FBYUgsS0FBYjtBQUNBRSxXQUFLQyxPQUFMLENBQWEsSUFBYjs7QUFFQSxVQUFJQyxpQkFBaUIsS0FBS0MsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsQ0FBd0JDLEtBQXhCLENBQThCVCxLQUE5QixFQUFxQ0csSUFBckMsQ0FBTCxHQUFyQixDQWJzQyxDQWFrQzs7QUFFeEUsYUFBT0UsY0FBUDtBQUNEOzs7O0VBakIwQlQsUzs7QUFvQjdCYyxPQUFPQyxPQUFQLEdBQWlCYixjQUFqQiIsImZpbGUiOiJlbXB0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBFbXB0eVBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRGVwdGgoZGVwdGgsIENsYXNzLCAuLi5hcmdzKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBFbXB0eVBhcnNlVHJlZTtcbiAgICBcbiAgICB2YXIgbGluZXMgPSBbXSxcbiAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICAgIGxpbmVzW2luZGV4KytdID0gJyc7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KGxpbmVzKTtcbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG5cbiAgICB2YXIgZW1wdHlQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiBlbXB0eVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVtcHR5UGFyc2VUcmVlO1xuIl19